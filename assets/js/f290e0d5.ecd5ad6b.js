(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[3158],{47830:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>g,default:()=>S,frontMatter:()=>b,metadata:()=>v,toc:()=>y});var s=r(86070),n=r(62907),a=r(82846),o=r(86317),i=r(30758),c=r(33275),l=r(3866),d=r(45777),u=r(63669),h=r(16899),f=r(65640);const m=e=>{let{ekey:t,rawdata:r}=e;const[n,a]=(0,i.useState)();return(0,i.useEffect)((()=>{if(!r||!t)return;f.log(r,t);const e=(0,u.Yc)(r,t),s=(0,d.D4)(e);a((0,h.du)(s))}),[r,t]),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 border border-slate-500 rounded border-solid p-5",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsx)("div",{className:"text-lg font-bold text-center ",children:"Encrypted"}),(0,s.jsx)("pre",{className:"whitespace-normal",children:r?.toString("base64")})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsx)("div",{className:"text-lg font-bold text-center ",children:"Decrypted"}),(0,s.jsx)("pre",{children:n})]})]})};var p=r(84686).Buffer;const x=()=>{const[e,t]=(0,i.useState)(),[r,n]=(0,i.useState)(),d=(0,i.useRef)([(0,s.jsx)("div",{children:"waiting for connexion through WebRTC..."})]),[u,h]=(0,i.useState)(!1),[f,x]=(0,i.useState)(0),[b,g]=(0,i.useState)(),[v,j]=(0,i.useState)();(0,i.useEffect)((()=>{(async()=>{const e=(0,o.DT)("doc_manager");t(await a.IdManager.fromStore(e))})()}));const y={start:()=>(e&&(d.current=[(0,s.jsx)("div",{children:"waiting for connexion through WebRTC..."})]),x(Math.random()),h(!0),d.current),stop:()=>{h(!1),d.current=[(0,s.jsx)("div",{children:"waiting for connexion through WebRTC..."})],x(Math.random())},me:()=>e?.vaultysId.toVersion(1).did,help:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:"'me' - displays this browser page did"}),(0,s.jsx)("div",{children:"'start' - starts a WebRTC connection"}),(0,s.jsx)("div",{children:"'stop' - stops the WebRTC connection"}),(0,s.jsx)("div",{children:"'contacts' - displays this browser page Web of Trust contact DIDs"}),(0,s.jsx)("div",{children:"'history' - your contact audit trails"})]}),contacts:()=>e?.contacts.map((e=>(0,s.jsx)("div",{children:e.toVersion(1).did}))),history:()=>e?.listCertificates().map((e=>(0,s.jsxs)("div",{children:[new Date(e.timestamp).toISOString(),": ",e.protocol,"/",e.service]})))},w=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:"Welcome to the WebRTC test console to interact with the DID of your browser"}),(0,s.jsx)("div",{children:"'help' for all available commands"})]});return(0,s.jsxs)(c.XL,{children:[(0,s.jsxs)("section",{className:"p-5 flex-col md:flex-row flex gap-2 w-full",children:[(0,s.jsxs)("div",{className:"w-96 h-96 min-h-96 flex flex-col items-center justify-center",children:[u&&e&&(0,s.jsx)(l.h,{profile:e,onEncryptionKey:e=>{g(e)},onFail:e=>{d.current.push((0,s.jsxs)("div",{className:"text-red-500 font-bold",children:["Error: ",e]})),x(Math.random())},onData:e=>{j(p.from(e,"base64")),d.current.push((0,s.jsxs)("div",{className:"break-all",children:["Received: ",e]})),x(Math.random())},onSuccess:t=>{n(t),e?.store.save(),d.current.push((0,s.jsxs)("div",{className:"text-green-500 font-bold",children:["Connected to ",t.did," "]})),x(Math.random())}}),!u&&(0,s.jsxs)("div",{className:"w-full h-full flex flex-col items-center justify-center p-5 bg-opacity-15 bg-black dark:bg-opacity-15 dark:bg-white rounded-lg",children:[" ","Write 'start' in command prompt and get ready with your wallet VaultysID"]})]}),(0,s.jsx)("div",{className:"flex-1 overflow-auto max-h-96",children:(0,s.jsx)(c.e,{theme:"dark",enableInput:!0,showControlBar:!1,commands:y,welcomeMessage:w})},f)]}),(0,s.jsx)(m,{ekey:b,rawdata:v})]})},b={hide_table_of_contents:!0,sidebar_position:3},g="WebRTC",v={id:"develop/try/webrtc",title:"WebRTC",description:"",source:"@site/docs/develop/try/webrtc.mdx",sourceDirName:"develop/try",slug:"/develop/try/webrtc",permalink:"/docs/develop/try/webrtc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{hide_table_of_contents:!0,sidebar_position:3},sidebar:"userguideSidebar",previous:{title:"Simulator",permalink:"/docs/develop/try/simulation"},next:{title:"Decrypt on Demand",permalink:"/docs/develop/try/decryptor"}},j={},y=[];function w(e){const t={h1:"h1",header:"header",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"webrtc",children:"WebRTC"})}),"\n",(0,s.jsx)(x,{})]})}function S(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},3866:(e,t,r)=>{"use strict";r.d(t,{h:()=>u});var s=r(20563),n=r(30758),a=r(72940),o=r(58359),i=r(86070);function c(e){let{className:t,fingerprint:r}=e;const s=(0,a.D)(r);return r.startsWith("00")?(0,i.jsx)(o.eWW,{className:t}):(0,i.jsx)(a.A,{...s,className:`${t} shrink-0`,shape:"circle",hairColorRandom:!0})}var l=r(84686).Buffer,d=r(65640);const u=e=>{let{profile:t,onEncryptionKey:a,onData:o,onSuccess:u,onFail:h,state:f}=e,m=(0,n.useRef)();const[p,x]=(0,n.useState)(),[b,g]=(0,n.useState)(!1),[v,j]=(0,n.useState)(!1),[y,w]=(0,n.useState)();let S=!1;return(0,n.useEffect)((()=>(S||(S=!0,(async()=>{const e=t.vaultysId?.toVersion(0);if(!e)return h&&h("no Id");const{PeerjsChannel:s}=r(35288);m.current=new s,a&&a(l.from(m.current.key,"hex"));const n=m.current?.start();x("https://wallet.vaultys.net#"+m.current?.getConnectionString()+"&protocol=p2p&service=auth&id="+e.id.toString("hex")),n?.then((async()=>{if(!m.current)return g(!0),h&&h("Could not open communication channel");m.current.conn?.on("data",o);try{const e=await(t?.acceptContact(m.current));return m.current?.close(),e?(j(!0),w(e.toVersion(1)),u&&u(e.toVersion(1))):(g(!0),h&&h("The handshake has failed!"))}catch(b){return g(!0),h&&h("The handshake has failed!")}}))})()),()=>{m.current?.close()})),[f]),(0,n.useEffect)((()=>{d.log(p)}),[p]),b?(0,i.jsx)("div",{children:"Error"}):y?(0,i.jsxs)("div",{className:"rounded-lg shadow-lg p-5 justify-center bg-white dark:bg-slate-900 flex-col flex gap-5 w-64 m-auto font-mono text-sm font-bold",children:[(0,i.jsx)(c,{fingerprint:y.toVersion(1).fingerprint,className:"border border-black border-solid w-24 h-24 m-auto shadow-lg"}),y.toVersion(1).fingerprint]}):p?(0,i.jsx)(s.vP,{text:p,className:"rounded-lg shadow-xl"}):void 0}},16899:(e,t,r)=>{"use strict";r.d(t,{cb:()=>a,du:()=>c,vX:()=>i});var s=r(82846),n=r(84686).Buffer;const a=e=>new Promise((t=>setTimeout(t,e))),o=s.VaultysId.createPublicKeyCredentialCreationOptions,i=async e=>{const t=await navigator.credentials.create({publicKey:o(e)});return t?await s.VaultysId.fido2FromAttestation(t):null},c=e=>JSON.stringify(e,((e,t)=>t?.data&&"Buffer"==t?.type?n.from(t.data).toString("base64"):t),2)},34654:()=>{},34149:()=>{},89780:()=>{},35129:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},98308:()=>{}}]);