"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[3614],{30962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(86070),s=n(25710);const r={},a="\ud83c\udf7a Developers",o={id:"develop/index",title:"\ud83c\udf7a Developers",description:"Vaultys Protocol is a set of different cryptographic data model handling the lifecycle of Decentralised Digital Identity.",source:"@site/docs/develop/index.mdx",sourceDirName:"develop",slug:"/develop/",permalink:"/en/docs/develop/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"\ud83d\udda5\ufe0f Usage Statistics",permalink:"/en/docs/administrateur/statistics"},next:{title:"\ud83d\udd11 Protocol VaultysID",permalink:"/en/docs/develop/protocol/"}},c={},l=[{value:"Definitions",id:"definitions",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"-developers",children:"\ud83c\udf7a Developers"}),"\n",(0,i.jsxs)(t.p,{children:["Vaultys Protocol is a set of different cryptographic data model handling the lifecycle of Decentralised Digital Identity.\nSecurity Model is not about privacy (ie resistant against decryption), but about ",(0,i.jsx)(t.strong,{children:"securing identification"})," (person, servers), making cryptographically hard to steal identity without stealing a cryptographic private a key. In comparison with classical authentication system (User/Password/MFA), the protocol offer a better resistance to the compromission of the communication channel or the guess of passwords based on previous leaked data in a central identification server. Moreover ",(0,i.jsx)(t.strong,{children:"the protocol is designed with extension in mind"}),". Only a subset of the protocol extension is being certified."]}),"\n",(0,i.jsx)(t.p,{children:"In a nutshell, here are the security claims of the protocol:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The compromission of the a central identification server does not compromise the identities (only public keys are stored)"}),"\n",(0,i.jsx)(t.li,{children:"The P2P ID registration is resistant to passive channel attack"}),"\n",(0,i.jsx)(t.li,{children:"The P2P authentication is resistant to passive and active channel attack."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Cryptographic curves used are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Ed25519"})," for software implementation"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"P256"})," if using FIDO2 bridge"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Resistance means:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"either fail in case of active channel attack"}),"\n",(0,i.jsx)(t.li,{children:"or succeed with the assurance that both legit sides have effectively verified and signed the authentication message"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The security of later communications after authentication (like session cookie stealing using replay attack) is outside of the scope of the model."}),"\n",(0,i.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Users' Smartphones"}),": Each user has a smartphone where they have the Smartlink app installed. This app generates and manages the user's Decentralized ID (VaultysID).\n",(0,i.jsx)(t.strong,{children:"VaultysID Generation"}),": The VaultysID is created securely on the user's smartphone using cryptographic algorithms. This ID serves as a decentralized identifier for the user.\n",(0,i.jsx)(t.strong,{children:"Authentication Protocol"}),": When a user wants to connect to the Smartlink service, the app initiates an authentication request. The Smartlink server sends an authentication challenge to the app, which includes a unique authentication message.\n",(0,i.jsx)(t.strong,{children:"User Authentication"}),": The Smartlink app securely signs the authentication message using the user's VaultysID and sends it back to the Smartlink server.\n",(0,i.jsx)(t.strong,{children:"App Verification"}),": The user's app verifies the authenticity of the Smartlink server's message using the server's public key.\n",(0,i.jsx)(t.strong,{children:"Authenticated Connection"}),": Once both sides have successfully verified each other's identities, an authenticated connection is established between the user's app and the Smartlink server.\n",(0,i.jsx)(t.strong,{children:"Decentralized Security"}),": The decentralized nature of the VaultysID system ensures that user identities are securely managed on their smartphones without relying on a central authority. This enhances security and privacy for both users and the Smartlink service."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(30758);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);