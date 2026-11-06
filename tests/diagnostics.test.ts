import {describe,it,expect,vi} from 'vitest';
import {EventEmitter} from 'node:events';
vi.mock('node:os',()=>({default:{networkInterfaces:()=>({})}}));
vi.mock('node:dns/promises',()=>({default:{lookup:vi.fn().mockRejectedValue(Error('offline'))}}));
vi.mock('node:https',()=>({default:{get:()=>{const request=new EventEmitter();queueMicrotask(()=>request.emit('error',Error('offline')));return request}}}));
vi.mock('node:http',()=>({default:{get:()=>{const request=new EventEmitter();queueMicrotask(()=>request.emit('error',Error('offline')));return request}}}));
vi.mock('../src/main/windows',()=>({inspect:vi.fn().mockRejectedValue(Error('unavailable'))}));
import {diagnose} from '../src/main/diagnostics';
import dns from 'node:dns/promises';
describe('Diagnostic failure handling',()=>{it('returns evidence and uncertainty without claiming the cause',async()=>{const findings=await diagnose();expect(findings).toHaveLength(5);expect(findings[0].status).toBe('Warning');expect(findings.slice(1).every(f=>f.status==='Inconclusive')).toBe(true);expect(findings.every(f=>f.evidence.length>10)).toBe(true)})});

it('honors cancellation before inspecting anything',async()=>{const controller=new AbortController();controller.abort();const findings=await diagnose(controller.signal);expect(findings).toHaveLength(1);expect(findings[0].status).toBe('Inconclusive');expect(findings[0].evidence).toContain('Cancelled')});

it('cancels an in-flight DNS wait without continuing to endpoint tests',async()=>{vi.mocked(dns.lookup).mockReturnValueOnce(new Promise(()=>{}));const controller=new AbortController();const pending=diagnose(controller.signal);controller.abort();const findings=await pending;expect(findings).toHaveLength(2);expect(findings[1].evidence).toContain('Cancelled')});
