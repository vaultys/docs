"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[6396],{10769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(86070),i=n(25710);const r={},o="\ud83d\udd11 Protocol VaultysID",a={id:"develop/protocol/index",title:"\ud83d\udd11 Protocol VaultysID",description:"Description:",source:"@site/docs/develop/protocol/index.mdx",sourceDirName:"develop/protocol",slug:"/develop/protocol/",permalink:"/en/docs/develop/protocol/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"\ud83c\udf7a Developers",permalink:"/en/docs/develop/"},next:{title:"Specifications",permalink:"/en/docs/develop/protocol/specifications/"}},c={},l=[];function h(e){const t={h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"-protocol-vaultysid",children:"\ud83d\udd11 Protocol VaultysID"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Users' Smartphones"}),": Each user has a smartphone where they have the Smartlink app installed. This app generates and manages the user's Decentralized ID (VaultysID)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"VaultysID Generation"}),": The VaultysID is created securely on the user's smartphone using cryptographic algorithms. This ID serves as a decentralized identifier for the user."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Smartlink Server"}),": The central component of the Smartlink system is the Smartlink server. It manages user authentication requests and interacts with the Smartlink app on the user's smartphone."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Authentication Protocol"}),": When a user wants to connect to the Smartlink service, the app initiates an authentication request. The Smartlink server sends an authentication challenge to the app, which includes a unique authentication message."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"User Authentication"}),": The Smartlink app securely signs the authentication message using the user's VaultysID and sends it back to the Smartlink server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Smartlink Verification"}),": Upon receiving the signed authentication message from the user, the Smartlink server verifies the authenticity of the message by validating the signature using the public key associated with the user's VaultysID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Smartlink ID Verification"}),": Simultaneously, the Smartlink server sends its own authentication message signed with its own identifier to the user's app."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"App Verification"}),": The user's app verifies the authenticity of the Smartlink server's message using the server's public key."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Authenticated Connection"}),": Once both sides have successfully verified each other's identities, an authenticated connection is established between the user's app and the Smartlink server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Decentralized Security"}),": The decentralized nature of the VaultysID system ensures that user identities are securely managed on their smartphones without relying on a central authority. This enhances security and privacy for both users and the Smartlink service."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(30758);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);