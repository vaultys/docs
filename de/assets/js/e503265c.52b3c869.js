(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[46],{31922:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>v,frontMatter:()=>p,metadata:()=>g,toc:()=>w});var r=s(86070),a=s(25710),n=s(43419),l=s(54947),i=s(40654),c=s(84270),o=s(30758),d=s(92259),u=s(29916),h=s(74480),f=s(3836),m=s(84686).Buffer;const x=()=>{const[e,t]=(0,o.useState)(),[s,a]=(0,o.useState)(),[x,p]=(0,o.useState)(),[b,g]=(0,o.useState)(),[y,w]=(0,o.useState)(),[j,v]=(0,o.useState)(),[N,S]=(0,o.useState)(),[k,C]=(0,o.useState)(!1),[I,B]=(0,o.useState)(),[E,R]=(0,o.useState)(),_=(0,o.useRef)([]),[M,P]=(0,o.useState)(0),A=(e,t,s)=>async r=>{B(r.toString("base64"));const a=((e,t)=>(0,i.decrypt)(e,t))(r,s);try{const t=(0,n.D4)(a);return R((0,h.du)(t)),e(t)}catch(l){return R(a.toString("utf-8")),t(a.toString("utf-8"))}},F=e=>{let{step:t=1,animate:s=!0}=e;return(0,r.jsxs)("div",{className:"w-full relative my-5",children:[(0,r.jsx)("span",{className:"absolute left-0 w-full bg-green-400 h-1"}),(0,r.jsx)("span",{className:(s?"animate-slide-right":"translate-x-0")+" absolute -top-3  h-8 w-full",children:(0,r.jsx)("span",{className:"bg-green-500 dark:bg-green-700 h-6 w-6 rounded-full px-2",children:t})})]})},D=e=>{let{step:t=2,animate:s=!0}=e;return(0,r.jsxs)("div",{className:"w-full relative my-5",children:[(0,r.jsx)("span",{className:"absolute left-0 w-full bg-green-400 h-1"}),(0,r.jsx)("span",{className:(s?"animate-slide-left":"-translate-x-full")+" absolute -top-3  h-8 w-full",children:(0,r.jsx)("span",{className:"bg-green-500 dark:bg-green-700 h-6 w-6 rounded-full px-2",children:t})})]})},V=e=>{let{error:t}=e;return(0,r.jsxs)("div",{className:"w-full relative my-5",children:[(0,r.jsx)("div",{className:"text-xs",children:t}),(0,r.jsx)("span",{className:"absolute left-0 w-full bg-red-400 h-1"})]})},K=(e,t)=>async s=>(_.current.push({direction:t,animate:!0}),P(Math.random()),await(0,h.cb)(2e3),e(s)),W=async function(r){if(void 0===r&&(r="software"),e)return;let a=await l.VaultysId.generatePerson();const n=async()=>(alert("PRF"),!0);if("passkey"==r?a=await l.VaultysId.createWebauthn(!0,n):"fido2"==r&&(a=await l.VaultysId.createWebauthn(!1,n)),a){S(await(s?.vaultysId.encrypt("hello world",[a.id])));const e=(0,c.MemoryStorage)((()=>{})),r=new l.IdManager(a,e);t(r)}};(0,o.useEffect)((()=>{(async()=>{if(!s){const e=await l.VaultysId.generatePerson(),t=(0,c.MemoryStorage)((()=>{})),s=new l.IdManager(e,t);a(s)}})()}),[]);const Z=e=>{let{certificate:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("li",{className:"flex flex-row items-center",children:["protocol ",[t?.protocol,t?.service].join(t?"/":"")]}),(0,r.jsxs)("li",{className:"flex flex-row items-center",children:[t?.pk1?(0,r.jsx)(d.maZ,{className:"-rotate-45 fill-green-500 h-8 w-8"}):(0,r.jsx)(d.maZ,{className:"-rotate-45 fill-slate-500 h-8 w-8"}),t?.sign1||t?.sign1?(0,r.jsx)(d.waL,{className:"fill-green-500 h-8 w-8"}):(0,r.jsx)(d.v6F,{className:"animate-spin fill-slate-500 h-8 w-8"}),"Bob"]}),(0,r.jsxs)("li",{className:"flex flex-row items-center",children:[t?.pk2?(0,r.jsx)(d.maZ,{className:"-rotate-45 fill-green-500 h-8 w-8"}):(0,r.jsx)(d.maZ,{className:"-rotate-45 fill-slate-500 h-8 w-8"}),t?.sign2?(0,r.jsx)(d.waL,{className:"fill-green-500 h-8 w-8"}):(0,r.jsx)(d.v6F,{className:"animate-spin fill-slate-500 h-8 w-8"}),"Alice"]})]})},L=e=>{let{id:t,name:s="Alice",sex:a="woman",certificate:n}=e;return t?(0,r.jsxs)("div",{className:"flex flex-col gap-5 items-center bg-slate-200 dark:bg-slate-800 rounded p-5",children:[(0,r.jsxs)("div",{className:" flex flex-col md:flex-row justify-center items-center gap-5",children:[(0,r.jsx)(u.A,{...(0,u.D)(t.vaultysId.fingerprint),hairStyle:"man"==a?"thick":"womanLong",hatStyle:"none",className:"w-20 h-20"}),s]}),(0,r.jsx)("div",{className:"font-mono text-xs font-bold w-48 hidden md:block",children:t.vaultysId.fingerprint}),(0,r.jsx)("div",{className:"w-full",children:0===n?(0,r.jsx)("div",{className:"bg-red-500 p-5 rounded border-red-700 dark:border-red-300 border-solid border",children:"Error"}):(0,r.jsx)(Z,{certificate:n})})]}):(0,r.jsxs)("div",{className:"flex flex-col gap-5 items-center bg-slate-200 dark:bg-slate-800 rounded p-5",children:[(0,r.jsx)("div",{children:"Which way do you want to secure Bob Id?"}),(0,r.jsx)("button",{className:"p-2 rounded-lg cursor-pointer",onClick:()=>W("passkey"),children:"Passkey"}),(0,r.jsx)("button",{className:"p-2 rounded-lg cursor-pointer",onClick:()=>W("fido2"),children:"Fido2 Key"}),(0,r.jsx)("button",{className:"p-2 rounded-lg cursor-pointer transition-all",onClick:()=>W("software"),children:"Software"})]})};return(0,r.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,r.jsxs)("div",{className:"grid grid-cols-3",children:[(0,r.jsx)(L,{name:"Bob",id:e,sex:"man",certificate:b}),(0,r.jsxs)("div",{className:"flex flex-col gap-5 text-center items-center",children:[(0,r.jsx)("button",{disabled:k||!e,className:"rounded bg-slate-300 dark:bg-slate-700 shadow-lg p-5 border-0 cursor-pointer hover:shadow-md active:shadow-none",onClick:()=>{(async()=>{if(!e||!s||!N)return;_.current=[],p(void 0),g(void 0);const t=i.default.generateKey();w(t);const r=f.n.createEncryptedBidirectionnal(t);C(!0),r.onSend=A(g,(()=>{}),t),r.onReceive=A(K(g,"alice"),K((()=>{}),"alice"),t),r.otherend.onSend=A(p,(()=>{}),t),r.otherend.onReceive=A(K(p,"bob"),K((()=>{}),"bob"),t);try{const[,t]=await Promise.all([e.acceptDecrypt(r),s.requestDecrypt(r.otherend,m.from(N,"utf-8"))]);v(t?.toString("utf-8"))}catch(a){_.current.push({direction:"error",animate:!1,error:a.message})}C(!1)})()},children:"Start"}),y&&(0,r.jsxs)("div",{className:"text-xs hidden lg:block",children:["Encryption key: ",y.toString("base64")]}),(()=>{const e=[],t=_.current;for(let s=0;s<t.length;s++)"bob"==t[s].direction?e.push((0,r.jsx)(F,{step:s+1,animate:t[s].animate},s)):"alice"==t[s].direction?e.push((0,r.jsx)(D,{step:s+1,animate:t[s].animate},s)):"error"==t[s].direction&&e.push((0,r.jsx)(V,{error:t[s].error},s)),_.current=_.current.map((e=>({...e,animate:!1})));return e})()]},M),(0,r.jsx)(L,{name:"Alice",sex:"woman",id:s,certificate:x})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-bold",children:"Encrypted for Bob:"})," ",N]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"font-bold",children:"Decrypted by Bob:"})," ",j]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"border border-slate-500 rounded border-solid p-5",children:(0,r.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,r.jsx)("div",{className:"text-lg font-bold",children:"Exchanged Message"}),(0,r.jsx)("pre",{children:E})]})})})]})},p={hide_table_of_contents:!0,sidebar_position:5},b="Entschl\xfcsseln auf Abruf",g={id:"develop/try/decryptor",title:"Entschl\xfcsseln auf Abruf",description:"",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/develop/try/decryptor.mdx",sourceDirName:"develop/try",slug:"/develop/try/decryptor",permalink:"/de/docs/develop/try/decryptor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{hide_table_of_contents:!0,sidebar_position:5},sidebar:"userguideSidebar",previous:{title:"WebRTC",permalink:"/de/docs/develop/try/webrtc"},next:{title:"Messagerie",permalink:"/de/docs/develop/try/demo"}},y={},w=[];function j(e){const t={h1:"h1",header:"header",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"entschl\xfcsseln-auf-abruf",children:"Entschl\xfcsseln auf Abruf"})}),"\n",(0,r.jsx)(x,{})]})}function v(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},3836:(e,t,s)=>{"use strict";s.d(t,{n:()=>n});var r=s(40654),a=s(74480);class n{setChannel(e,t,s,r){this.name=t,this.onSend=s,this.onReceive=r,this.otherend=e}static createBidirectionnal(){const e=new n,t=new n;return e.setChannel(t),t.setChannel(e),e}static createEncryptedBidirectionnal(e){e=e||r.default.generateKey();const t=r.default.encryptChannel(new n,e),s=r.default.encryptChannel(new n,e);return t.setChannel(s),s.setChannel(t),t}async send(e){for(;!this.otherend?.resolver;)await(0,a.cb)(10);this.onSend&&await this.onSend(e),this.otherend?.onReceive&&await(this.otherend?.onReceive(e)),this.otherend?.resolver(e)}async start(){}fromConnectionString(e){return new n}getConnectionString(){return""}async receive(){return new Promise((e=>this.resolver=e))}async close(){}}},74480:(e,t,s)=>{"use strict";s.d(t,{cb:()=>n,du:()=>c,vX:()=>i});var r=s(54947),a=s(84686).Buffer;const n=e=>new Promise((t=>setTimeout(t,e))),l=r.VaultysId.createPublicKeyCredentialCreationOptions,i=async e=>{const t=await navigator.credentials.create({publicKey:l(e)});return t?await r.VaultysId.fido2FromAttestation(t):null},c=e=>JSON.stringify(e,((e,t)=>t?.data&&"Buffer"==t?.type?a.from(t.data).toString("base64"):t),2)},34654:()=>{},34149:()=>{},89780:()=>{},13495:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},98308:()=>{}}]);