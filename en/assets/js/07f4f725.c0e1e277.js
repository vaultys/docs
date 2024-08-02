"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[8148],{3066:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(86070),o=i(25710);const s={sidebar_position:1},c="Specifications",r={id:"develop/protocol/specifications/index",title:"Specifications",description:"Vaultys Protocol is a set of different cryptographic data model handling the lifecycle of Decentralised Digital Identity.",source:"@site/docs/develop/protocol/specifications/index.md",sourceDirName:"develop/protocol/specifications",slug:"/develop/protocol/specifications/",permalink:"/en/docs/develop/protocol/specifications/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"userguideSidebar",previous:{title:"\ud83d\udd11 Protocol VaultysID",permalink:"/en/docs/develop/protocol/"},next:{title:"1 DID",permalink:"/en/docs/develop/protocol/specifications/did"}},a={},l=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"specifications",children:"Specifications"}),"\n",(0,n.jsxs)(t.p,{children:["Vaultys Protocol is a set of different cryptographic data model handling the lifecycle of Decentralised Digital Identity.\nSecurity Model is not about privacy (ie resistant against decryption), but about ",(0,n.jsx)(t.strong,{children:"securing identification"})," (person, servers), making cryptographically hard to steal identity without stealing a cryptographic private a key. In comparison with classical authentication system (User/Password/MFA), the protocol offer a better resistance to the compromission of the communication channel or the guess of passwords based on previous leaked data in a central identification server. Moreover ",(0,n.jsx)(t.strong,{children:"the protocol is designed with extension in mind"}),". Only a subset of the protocol extension is being certified."]}),"\n",(0,n.jsx)(t.p,{children:"In a nutshell, here are the security claims of the protocol:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The compromission of the a central identification server does not compromise the identities (only public keys are stored)"}),"\n",(0,n.jsx)(t.li,{children:"The P2P ID registration is resistant to passive channel attack"}),"\n",(0,n.jsx)(t.li,{children:"The P2P authentication is resistant to passive and active channel attack."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Cryptographic curves used are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Ed25519"})," for software implementation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"P256"})," if using FIDO2 bridge"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Resistance means:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"either fail in case of active channel attack"}),"\n",(0,n.jsx)(t.li,{children:"or succeed with the assurance that both legit sides have effectively verified and signed the authentication message"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The security of later communications after authentication (like session cookie stealing using replay attack) is outside of the scope of the model."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},25710:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(30758);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);