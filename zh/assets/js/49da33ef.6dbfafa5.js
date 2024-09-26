(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[9980],{85224:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>x});var r=s(86070),n=s(25710),a=s(54947),o=s(84270),l=s(30758),c=s(3769),i=s(92259);function d(e){let{did:t}=e;const[s,n]=(0,l.useState)([]),[a,o]=(0,l.useState)(),c=(0,l.useRef)(null);(0,l.useEffect)((()=>{n(JSON.parse(localStorage.getItem("messages")??"[]"))}),[]),(0,l.useEffect)((()=>{(()=>{const e=c.current;e&&(e.scrollTop=e.scrollHeight)})()}),[s]);const d=()=>{if(!a)return;o("");const e={date:Date.now(),message:a,did:t};localStorage.setItem("messages",JSON.stringify([...s,e])),n([...s,e])};return(0,r.jsxs)("div",{className:"h-[600px] bg-light dark:bg-dark p-2 rounded-lg flex flex-col gap-4 overflow-hidden",children:[(0,r.jsx)("h2",{children:"Messages"}),(0,r.jsx)("div",{className:"flex flex-col gap-2 flex-grow overflow-auto max-w-full",ref:c,children:s.map((e=>(0,r.jsx)("div",{className:""+(e.did===t?"pl-12":"pr-12"),children:(0,r.jsxs)("div",{className:"w-max max-w-full text-sm flex flex-col gap-1 p-2 rounded-lg "+(e.did===t?"bg-success text-white ml-auto":"bg-light-secondary dark:bg-dark-secondary"),children:[(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-center text-xs",children:[e.did===t?(0,r.jsx)("span",{className:" text-primary",children:"Moi"}):(0,r.jsx)("span",{className:" text-primary dark:text-secondary",children:e.did}),(0,r.jsxs)("span",{className:"text-gray-300",children:[new Date(e.date).toLocaleDateString()," ",new Date(e.date).toLocaleTimeString()]})]}),(0,r.jsx)("span",{children:e.message})]})})))}),(0,r.jsxs)("div",{className:"flex flex-row items-center gap-2  bg-light-secondary dark:bg-dark-secondary p-2 rounded-full",children:[(0,r.jsx)("input",{className:"w-full border-none focus:outline-none",placeholder:"Ecrire un message",value:a,onChange:e=>o(e.target.value),onKeyDown:e=>"Enter"===e.key&&d()}),(0,r.jsx)(i.B07,{className:`w-6 h-6 cursor-pointer hover:scale-110 ${(!a||0===a.length)&&"collapse"}`,onClick:d})]})]})}function u(){const[e,t]=(0,l.useState)(),[s,n]=(0,l.useState)(),[i,u]=(0,l.useState)();(0,l.useEffect)((()=>{(async()=>{const e=(0,o.LocalStorage)("doc_manager");t(await a.IdManager.fromStore(e))})(),n(localStorage.getItem("did")??void 0)}),[]);return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[e&&(0,r.jsx)(r.Fragment,{children:s?(0,r.jsx)("button",{className:"border-none bg-danger py-2 px-4 ml-auto rounded-lg text-white cursor-pointer",onClick:()=>{localStorage.removeItem("did"),n(void 0)},children:"Se d\xe9connecter"}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.h,{profile:e,onEncryptionKey:e=>{u(e.toString("hex"))},onFail:e=>{},onData:e=>{},onSuccess:e=>{localStorage.setItem("did",e.did),n(e.did)}})})}),s&&(0,r.jsx)(d,{did:s})]})}const h={hide_table_of_contents:!0,sidebar_position:5},m="Messagerie",g={id:"develop/try/demo",title:"Messagerie",description:"Connectez-vous \xe0 l'aide de votre identit\xe9 VaultysID.",source:"@site/docs/develop/try/demo.mdx",sourceDirName:"develop/try",slug:"/develop/try/demo",permalink:"/zh/docs/develop/try/demo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{hide_table_of_contents:!0,sidebar_position:5},sidebar:"userguideSidebar",previous:{title:"\u6309\u9700\u89e3\u5bc6",permalink:"/zh/docs/develop/try/decryptor"}},p={},x=[];function f(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"messagerie",children:"Messagerie"})}),"\n",(0,r.jsx)(t.p,{children:"Connectez-vous \xe0 l'aide de votre identit\xe9 VaultysID.\nDans cette d\xe9monstration, la communication entre votre t\xe9l\xe9phone (VaultysID) et votre PC (navigateur) se fait sans serveur interm\xe9diaire, directement de pair \xe0 pair."}),"\n",(0,r.jsx)(t.p,{children:"Flashez le QR code avec VaultysID pour vous connecter et commencer \xe0 \xe9crire des messages. Assurez vous que votre t\xe9l\xe9phone est sur le m\xeame r\xe9seau que votre ordinateur."}),"\n",(0,r.jsx)(u,{})]})}function v(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},3769:(e,t,s)=>{"use strict";s.d(t,{h:()=>u});var r=s(59280),n=s(30758),a=s(29916),o=s(92259),l=s(86070);function c(e){let{className:t,fingerprint:s}=e;const r=(0,a.D)(s);return s.startsWith("00")?(0,l.jsx)(o.eWW,{className:t}):(0,l.jsx)(a.A,{...r,className:`${t} shrink-0`,shape:"circle",hairColorRandom:!0})}var i=s(84686).Buffer,d=s(65640);const u=e=>{let{profile:t,onEncryptionKey:a,onData:o,onSuccess:u,onFail:h,state:m}=e,g=(0,n.useRef)();const[p,x]=(0,n.useState)(),[f,v]=(0,n.useState)(!1),[j,y]=(0,n.useState)(!1),[w,b]=(0,n.useState)();let S=!1;return(0,n.useEffect)((()=>(S||(S=!0,(async()=>{const e=t.vaultysId?.toVersion(0);if(!e)return h&&h("no Id");const{PeerjsChannel:r}=s(75075);g.current=new r,a&&a(i.from(g.current.key,"hex"));const n=g.current?.start();x("https://wallet.vaultys.net#"+g.current?.getConnectionString()+"&protocol=p2p&service=auth&id="+e.id.toString("hex")),n?.then((async()=>{if(!g.current)return v(!0),h&&h("Could not open communication channel");g.current.conn?.on("data",o);try{const e=await(t?.acceptContact(g.current));return g.current?.close(),e?(y(!0),b(e.toVersion(1)),u&&u(e.toVersion(1))):(v(!0),h&&h("The handshake has failed!"))}catch(f){return v(!0),h&&h("The handshake has failed!")}}))})()),()=>{g.current?.close()})),[m]),(0,n.useEffect)((()=>{d.log(p)}),[p]),f?(0,l.jsx)("div",{children:"Error"}):w?(0,l.jsxs)("div",{className:"rounded-lg shadow-lg p-5 justify-center bg-white dark:bg-slate-900 flex-col flex gap-5 w-64 m-auto font-mono text-sm font-bold",children:[(0,l.jsx)(c,{fingerprint:w.toVersion(1).fingerprint,className:"border border-black border-solid w-24 h-24 m-auto shadow-lg"}),w.toVersion(1).fingerprint]}):p?(0,l.jsx)(r.vP,{text:p,className:"rounded-lg shadow-xl"}):void 0}},34654:()=>{},34149:()=>{},89780:()=>{},13495:()=>{},99926:()=>{},90124:()=>{},71220:()=>{},38854:()=>{},98308:()=>{}}]);