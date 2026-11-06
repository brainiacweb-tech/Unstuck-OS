import {describe,it,expect} from 'vitest';
import {interpretActivation} from '../src/main/windows';
describe('Licensing evidence',()=>{it('reports licensed only for the licensed status',()=>{expect(interpretActivation('{"Name":"Windows","LicenseStatus":1}')[0].status).toBe('Passed');expect(interpretActivation('{"Name":"Windows","LicenseStatus":0}')[0].status).toBe('Warning')});it('treats unreadable data as inconclusive',()=>expect(interpretActivation('unavailable')[0].status).toBe('Inconclusive'))});
