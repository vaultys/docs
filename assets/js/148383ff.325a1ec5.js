(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[1540],{37907:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>p,metadata:()=>g,toc:()=>j});var s=a(86070),r=a(25710),n=a(43419),i=a(54947),l=a(40654),c=a(84270),o=a(30758),d=a(92259),h=a(29916),m=a(74480),u=a(3836);const x=()=>{const[e,t]=(0,o.useState)(),[a,r]=(0,o.useState)(),[x,p]=(0,o.useState)(),[f,g]=(0,o.useState)(),[b,j]=(0,o.useState)(),[w,y]=(0,o.useState)(!1),[v,N]=(0,o.useState)(),[S,k]=(0,o.useState)(),C=(0,o.useRef)([]),[I,M]=(0,o.useState)(0),_=(e,t)=>async a=>{N(a.toString("base64"));const s=((e,t)=>(0,l.decrypt)(e,t))(a,t),r=(0,n.D4)(s);return k((0,m.du)(r)),e(r)},B=e=>{let{step:t=1,animate:a=!0}=e;return(0,s.jsxs)("div",{className:"w-full relative my-5",children:[(0,s.jsx)("span",{className:"absolute left-0 w-full bg-green-400 h-1"}),(0,s.jsx)("span",{className:(a?"animate-slide-right":"translate-x-0")+" absolute -top-3  h-8 w-full",children:(0,s.jsx)("span",{className:"bg-green-500 dark:bg-green-700 h-6 w-6 rounded-full px-2",children:t})})]})},R=e=>{let{step:t=2,animate:a=!0}=e;return(0,s.jsxs)("div",{className:"w-full relative my-5",children:[(0,s.jsx)("span",{className:"absolute left-0 w-full bg-green-400 h-1"}),(0,s.jsx)("span",{className:(a?"animate-slide-left":"-translate-x-full")+" absolute -top-3  h-8 w-full",children:(0,s.jsx)("span",{className:"bg-green-500 dark:bg-green-700 h-6 w-6 rounded-full px-2",children:t})})]})},P=e=>{let{error:t}=e;return(0,s.jsxs)("div",{className:"w-full relative my-5",children:[(0,s.jsx)("div",{className:"text-xs",children:t}),(0,s.jsx)("span",{className:"absolute left-0 w-full bg-red-400 h-1"})]})},E=(e,t)=>async a=>(C.current.push({direction:t,animate:!0}),M(Math.random()),await(0,m.cb)(2e3),e(a)),A=async function(e){void 0===e&&(e="software");let a=await i.VaultysId.generatePerson();if("passkey"==e?a=await(0,m.vX)(!0):"fido2"==e&&(a=await(0,m.vX)(!1)),a){const e=(0,c.MemoryStorage)((()=>{})),s=new i.IdManager(a,e);t(s)}};(0,o.useEffect)((()=>{(async()=>{if(!a){const e=await i.VaultysId.generatePerson(),t=(0,c.MemoryStorage)((()=>{})),a=new i.IdManager(e,t);r(a)}})()}),[]);const D=e=>{let{certificate:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("li",{className:"flex flex-row items-center",children:["protocol ",[t?.protocol,t?.service].join(t?"/":"")]}),(0,s.jsxs)("li",{className:"flex flex-row items-center",children:[t?.pk1?(0,s.jsx)(d.maZ,{className:"-rotate-45 fill-green-500 h-8 w-8"}):(0,s.jsx)(d.maZ,{className:"-rotate-45 fill-slate-500 h-8 w-8"}),t?.sign1||t?.sign1?(0,s.jsx)(d.waL,{className:"fill-green-500 h-8 w-8"}):(0,s.jsx)(d.v6F,{className:"animate-spin fill-slate-500 h-8 w-8"}),"Bob"]}),(0,s.jsxs)("li",{className:"flex flex-row items-center",children:[t?.pk2?(0,s.jsx)(d.maZ,{className:"-rotate-45 fill-green-500 h-8 w-8"}):(0,s.jsx)(d.maZ,{className:"-rotate-45 fill-slate-500 h-8 w-8"}),t?.sign2?(0,s.jsx)(d.waL,{className:"fill-green-500 h-8 w-8"}):(0,s.jsx)(d.v6F,{className:"animate-spin fill-slate-500 h-8 w-8"}),"Alice"]})]})},F=e=>{let{id:t,name:a="Alice",sex:r="woman",certificate:n}=e;return t?(0,s.jsxs)("div",{className:"flex flex-col gap-5 items-center bg-slate-200 dark:bg-slate-800 rounded p-5",children:[(0,s.jsxs)("div",{className:" flex flex-col md:flex-row justify-center items-center gap-5",children:[(0,s.jsx)(h.A,{...(0,h.D)(t.vaultysId.fingerprint),hairStyle:"man"==r?"thick":"womanLong",hatStyle:"none",className:"w-20 h-20"}),a]}),(0,s.jsx)("div",{className:"font-mono text-xs font-bold w-48 hidden md:block",children:t.vaultysId.fingerprint}),(0,s.jsx)("div",{className:"w-full",children:0===n?(0,s.jsx)("div",{className:"bg-red-500 p-5 rounded border-red-700 dark:border-red-300 border-solid border",children:"Error"}):(0,s.jsx)(D,{certificate:n})})]}):(0,s.jsxs)("div",{className:"flex flex-col gap-5 items-center bg-slate-200 dark:bg-slate-800 rounded p-5",children:[(0,s.jsx)("div",{children:"Which way do you want to secure Bob Id?"}),(0,s.jsx)("button",{className:"p-2 rounded-lg cursor-pointer",onClick:()=>A("passkey"),children:"Passkey"}),(0,s.jsx)("button",{className:"p-2 rounded-lg cursor-pointer",onClick:()=>A("fido2"),children:"Fido2 Key"}),(0,s.jsx)("button",{className:"p-2 rounded-lg cursor-pointer transition-all",onClick:()=>A("software"),children:"Software"})]})};return(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsxs)("div",{className:"grid grid-cols-3",children:[(0,s.jsx)(F,{name:"Bob",id:e,sex:"man",certificate:f}),(0,s.jsxs)("div",{className:"flex flex-col gap-5 text-center items-center",children:[(0,s.jsx)("button",{disabled:w||!e,className:"rounded bg-slate-300 dark:bg-slate-700 shadow-lg p-5 border-0 cursor-pointer hover:shadow-md active:shadow-none",onClick:()=>{(async()=>{y(!0),C.current=[],p(void 0),g(void 0);const t=l.default.generateKey();j(t);const s=u.n.createEncryptedBidirectionnal(t);s.onSend=_(g,t),s.onReceive=_(E(g,"alice"),t),s.otherend.onSend=_(p,t),s.otherend.onReceive=_(E(p,"bob"),t);try{await Promise.all([e?.askContact(s),a?.acceptContact(s.otherend)])}catch(r){C.current.push({direction:"error",animate:!1,error:r.message})}y(!1)})()},children:"Start"}),b&&(0,s.jsxs)("div",{className:"text-xs hidden lg:block",children:["Encryption key: ",b.toString("base64")]}),(()=>{const e=[],t=C.current;for(let a=0;a<t.length;a++)"bob"==t[a].direction?e.push((0,s.jsx)(B,{step:a+1,animate:t[a].animate},a)):"alice"==t[a].direction?e.push((0,s.jsx)(R,{step:a+1,animate:t[a].animate},a)):"error"==t[a].direction&&e.push((0,s.jsx)(P,{error:t[a].error},a)),C.current=C.current.map((e=>({...e,animate:!1})));return e})()]},I),(0,s.jsx)(F,{name:"Alice",sex:"woman",id:a,certificate:x})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 border border-slate-500 rounded border-solid p-5",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsx)("div",{className:"text-lg font-bold",children:"Encrypted"}),(0,s.jsx)("pre",{className:"whitespace-normal",children:v})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsx)("div",{className:"text-lg font-bold",children:"Decrypted"}),(0,s.jsx)("pre",{children:S})]})]})})]})},p={hide_table_of_contents:!0,sidebar_position:2},f="Simulator",g={id:"develop/try/simulation",title:"Simulator",description:"Simulation of the authentication schema beetween 2 ids",source:"@site/docs/develop/try/simulation.mdx",sourceDirName:"develop/try",slug:"/develop/try/simulation",permalink:"/docs/develop/try/simulation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_position:2},sidebar:"userguideSidebar",previous:{title:"VaultysID",permalink:"/docs/develop/try/did"},next:{title:"WebRTC",permalink:"/docs/develop/try/webrtc"}},b={},j=[];function w(e){const t={h1:"h1",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"simulator",children:"Simulator"})}),"\n",(0,s.jsx)(t.p,{children:"Simulation of the authentication schema beetween 2 ids"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"100% portability in the browser"}),"\n",(0,s.jsx)(t.li,{children:"compatible passkey, hardware key (for example yubikey)"}),"\n",(0,s.jsx)(t.li,{children:"No third parties are used to relay messages or to identify Bob and Alice beforehand"}),"\n",(0,s.jsx)(t.li,{children:"Encrypted exchanges with a shared symmetric key"}),"\n"]}),"\n",(0,s.jsx)(x,{}),"\n",(0,s.jsx)(t.mermaid,{value:"sequenceDiagram\n    participant Store1\n    participant IdManager1\n    participant IdManager2\n    participant Store2\n\n    IdManager1->>IdManager2: askContact\n    IdManager2->>IdManager1: acceptContact\n    IdManager1->>Store1: Store contact\n    IdManager2->>Store2: Store contact"})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},3836:(e,t,a)=>{"use strict";a.d(t,{n:()=>n});var s=a(40654),r=a(74480);class n{setChannel(e,t,a,s){this.name=t,this.onSend=a,this.onReceive=s,this.otherend=e}static createBidirectionnal(){const e=new n,t=new n;return e.setChannel(t),t.setChannel(e),e}static createEncryptedBidirectionnal(e){e=e||s.default.generateKey();const t=s.default.encryptChannel(new n,e),a=s.default.encryptChannel(new n,e);return t.setChannel(a),a.setChannel(t),t}async send(e){for(;!this.otherend?.resolver;)await(0,r.cb)(10);this.onSend&&await this.onSend(e),this.otherend?.onReceive&&await(this.otherend?.onReceive(e)),this.otherend?.resolver(e)}async start(){}fromConnectionString(e){return new n}getConnectionString(){return""}async receive(){return new Promise((e=>this.resolver=e))}async close(){}}},74480:(e,t,a)=>{"use strict";a.d(t,{cb:()=>n,du:()=>c,vX:()=>l});var s=a(54947),r=a(84686).Buffer;const n=e=>new Promise((t=>setTimeout(t,e))),i=s.VaultysId.createPublicKeyCredentialCreationOptions,l=async e=>{const t=await navigator.credentials.create({publicKey:i(e)});return t?await s.VaultysId.fido2FromAttestation(t):null},c=e=>JSON.stringify(e,((e,t)=>t?.data&&"Buffer"==t?.type?r.from(t.data).toString("base64"):t),2)},34654:()=>{},34149:()=>{},89780:()=>{},13495:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},98308:()=>{}}]);