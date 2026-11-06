import type {CleanupPlan,CleanupResult,RepairResult} from './repairs';
export type Status='Passed'|'Failed'|'Warning'|'Unsupported'|'Permission required'|'Inconclusive';
export type Finding={name:string;status:Status;evidence:string};
export type Action={id:string;title:string;description:string;category:string;keywords:string[];level:0|1|2|3;risk:'navigation'|'read-only'|'low'|'restricted';minBuild:number;handler:'settings'|'guide'|'diagnostic'|'folder'|'assistant';target:string;verification:string;steps:string[]};
import type {AppInfo,ReportDraft} from './report';
export type Preferences={showHelpTips?:boolean;beginnerExplanations?:boolean;tourCompleted?:boolean;theme:'light'|'dark';onboarded:boolean;historyEnabled:boolean;favorites:string[];recent:string[];shortcut:string};
export type RecordEntry={at:string;kind:string;findings:Finding[]};
export type State={shortcutStatus?:string;preferences:Preferences;history:RecordEntry[];logs:{at:string;event:string;code:string}[]};
export type DiagnosticProvider={id:string;run:(signal?:AbortSignal)=>Promise<Finding[]>};
export type API={scanCleanup:()=>Promise<CleanupPlan>;cleanFiles:(plan:string,ids:string[])=>Promise<CleanupResult>;repairDns:()=>Promise<RepairResult>;onlineHelp:(query:string)=>Promise<string>;openNotices:()=>Promise<string>;openSupportLink:(id:string)=>Promise<string>;info:()=>Promise<AppInfo>;onNavigate:(listener:(page:string)=>void)=>()=>void;copyReport:(draft:ReportDraft)=>Promise<string>;exportReport:(draft:ReportDraft)=>Promise<string>;copyShortcut:(keys:string)=>Promise<void>;cancelDiagnostic:()=>Promise<void>;support:(key:string)=>Promise<string>;showPalette:()=>Promise<void>;hidePalette:()=>Promise<void>;activation:()=>Promise<Finding[]>;state:()=>Promise<State>;save:(p:Preferences)=>Promise<State>;clear:()=>Promise<State>;system:()=>Promise<Record<string,string>>;diagnose:()=>Promise<Finding[]>;open:(id:string)=>Promise<string>;folder:()=>Promise<string>;shortcut:(key:string)=>Promise<string>};
declare global {interface Window {unstuck:API}}








