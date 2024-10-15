(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[1694],{9681:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>f,toc:()=>m});var n=s(86070),r=s(25710),o=s(68171),i=s(30758),a=s(29916),d=s(74480);const l=e=>{let{}=e;const[t,s]=(0,i.useState)(),r=async function(e){void 0===e&&(e="software");let t=await o.VaultysId.generatePerson();if("passkey"==e?t=await(0,d.vX)(!0):"fido2"==e&&(t=await(0,d.vX)(!1)),t){const e=t,n=(0,o.MemoryStorage)((()=>{})),r=new o.IdManager(e,n);s(r)}};return t?(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center p-5",children:[(0,n.jsxs)("div",{className:"flex flex-row justify-center items-center gap-5",children:[(0,n.jsx)(a.A,{...(0,a.D)(t.vaultysId.fingerprint),hairStyle:"thick",className:"w-20 h-20"}),(0,n.jsxs)("div",{className:"flex flex-col p-5 font-bold",children:["Bob",(0,n.jsx)("div",{className:"font-mono text-xs font-bold w-48",children:t.vaultysId.fingerprint})]})]}),(0,n.jsx)("div",{className:"font-mono text-xs font-bold break-all",children:t.vaultysId.did}),(0,n.jsx)("pre",{className:"w-full",children:(0,d.du)(t.vaultysId.didDocument)}),(0,n.jsx)("div",{children:"ID"}),(0,n.jsx)("pre",{className:"w-full",children:t.vaultysId.id.toString("base64")}),(0,n.jsx)("div",{children:"VaultysID"}),(0,n.jsx)("pre",{className:"w-full",children:(0,d.du)(t.vaultysId)})]}):(0,n.jsxs)("div",{className:"flex flex-col gap-5 items-center bg-slate-200 dark:bg-slate-800 rounded p-5",children:[(0,n.jsx)("div",{children:"Which way do you want to secure Bob Id?"}),(0,n.jsx)("button",{className:"p-2 rounded-lg cursor-pointer",onClick:()=>r("passkey"),children:"Passkey"}),(0,n.jsx)("button",{className:"p-2 rounded-lg cursor-pointer",onClick:()=>r("fido2"),children:"Fido2 Key"}),(0,n.jsx)("button",{className:"p-2 rounded-lg cursor-pointer transition-all",onClick:()=>r("software"),children:"Software"})]})},c={hide_table_of_contents:!0,sidebar_position:1},u="VaultysID",f={id:"develop/try/did",title:"VaultysID",description:"",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/try/did.mdx",sourceDirName:"develop/try",slug:"/develop/try/did",permalink:"/de/docs/develop/try/did",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"userguideSidebar",previous:{title:"Demonstration",permalink:"/de/docs/develop/try/"},next:{title:"Simulator",permalink:"/de/docs/develop/try/simulation"}},p={},m=[];function x(e){const t={h1:"h1",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"vaultysid",children:"VaultysID"}),"\n",(0,n.jsx)(l,{})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},74480:(e,t,s)=>{"use strict";s.d(t,{cb:()=>o,du:()=>d,vX:()=>a});var n=s(68171),r=s(84686).Buffer;const o=e=>new Promise((t=>setTimeout(t,e))),i=n.VaultysId.createPublicKeyCredentialCreationOptions,a=async e=>{const t=await navigator.credentials.create({publicKey:i(e)});return t?await n.VaultysId.fido2FromAttestation(t):null},d=e=>JSON.stringify(e,((e,t)=>t?.data&&"Buffer"==t?.type?r.from(t.data).toString("base64"):t),2)},34654:()=>{},34149:()=>{},89780:()=>{},13495:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},98308:()=>{},25710:(e,t,s)=>{"use strict";s.d(t,{R:()=>i,x:()=>a});var n=s(30758);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);