import {execFile} from 'node:child_process';
import path from 'node:path';
/** Fixed executable and arguments: issue text and online content never become commands. */
export function flushDns(signal?:AbortSignal):Promise<void>{return new Promise((resolve,reject)=>{if(process.platform!=='win32')return reject(Error('Windows only'));execFile(path.join(process.env.SystemRoot||'C:\\Windows','System32','ipconfig.exe'),['/flushdns'],{shell:false,windowsHide:true,timeout:10000,maxBuffer:16000,signal},error=>error?reject(Error('Windows could not clear the DNS cache. Administrator permission or device policy may be required.')):resolve())})}
