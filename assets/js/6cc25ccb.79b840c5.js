"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[3614],{30962:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(86070),t=i(25710);const r={},a="\ud83c\udf7a Developeurs",c={id:"develop/index",title:"\ud83c\udf7a Developeurs",description:"1 Introduction",source:"@site/docs/develop/index.mdx",sourceDirName:"develop",slug:"/develop/",permalink:"/docs/develop/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"\ud83d\udda5\ufe0f Statistiques d'utilisation",permalink:"/docs/administrateur/statistics"},next:{title:"\ud83d\udd11 Protocol VaultysID",permalink:"/docs/develop/protocol/"}},o={},d=[{value:"1 Introduction",id:"1-introduction",level:2},{value:"2 Identifier",id:"2-identifier",level:2},{value:"2.1 General Form",id:"21-general-form",level:3},{value:"2.1.1 Serialisation and deserialisation",id:"211-serialisation-and-deserialisation",level:4},{value:"2.1.2 Fingerprint",id:"212-fingerprint",level:4},{value:"2.1.3 DiD",id:"213-did",level:4},{value:"2.1.4 Secret",id:"214-secret",level:4},{value:"2.2 Defined Type",id:"22-defined-type",level:3},{value:"2.2.1 Type 3 serialisations",id:"221-type-3-serialisations",level:4},{value:"2.2.2 Type 3 signatures",id:"222-type-3-signatures",level:4},{value:"3 Web of Trust",id:"3-web-of-trust",level:2},{value:"3.1 Symetric Relationship Protocol",id:"31-symetric-relationship-protocol",level:3},{value:"3.2 General description",id:"32-general-description",level:3},{value:"3.3 Initial Handchek",id:"33-initial-handchek",level:3},{value:"3.4 Authentication",id:"34-authentication",level:3},{value:"3.5 Reference implementation",id:"35-reference-implementation",level:3},{value:"3.6 Example",id:"36-example",level:3},{value:"Channel implementations",id:"channel-implementations",level:2},{value:"4 Addressing protocol",id:"4-addressing-protocol",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-developeurs",children:"\ud83c\udf7a Developeurs"}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1 Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Vaultys Protocol is a set of different cryptographic data model handling the lifecycle of Decentralised Digital Identity.\nSecurity Model is not about privacy (ie resistant against decryption), but about ",(0,s.jsx)(n.strong,{children:"securing identification"})," (person, servers), making cryptographically hard to steal identity without stealing a cryptographic private a key. In comparison with classical authentication system (User/Password/MFA), the protocol offer a better resistance to the compromission of the communication channel or the guess of passwords based on previous leaked data in a central identification server. Moreover ",(0,s.jsx)(n.strong,{children:"the protocol is designed with extension in mind"}),". Only a subset of the protocol extension is being certified."]}),"\n",(0,s.jsx)(n.p,{children:"In a nutshell, here are the security claims of the protocol:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The compromission of the a central identification server does not compromise the identities (only public keys are stored)"}),"\n",(0,s.jsx)(n.li,{children:"The P2P ID registration is resistant to passive channel attack"}),"\n",(0,s.jsx)(n.li,{children:"The P2P authentication is resistant to passive and active channel attack."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cryptographic curves used are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Ed25519"})," for software implementation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"P256"})," if using FIDO2 bridge"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Resistance means:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"either fail in case of active channel attack"}),"\n",(0,s.jsx)(n.li,{children:"or succeed with the assurance that both legit sides have effectively verified and signed the authentication message"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The security of later communications after authentication (like session cookie stealing using replay attack) is outside of the scope of the model."}),"\n",(0,s.jsx)(n.h2,{id:"2-identifier",children:"2 Identifier"}),"\n",(0,s.jsx)(n.h3,{id:"21-general-form",children:"2.1 General Form"}),"\n",(0,s.jsx)(n.p,{children:"An Identifier (VaultysId) is a composed with"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a type (1 byte) ",(0,s.jsx)(n.code,{children:"type"})]}),"\n",(0,s.jsxs)(n.li,{children:["a version (1 byte) ",(0,s.jsx)(n.code,{children:"v"})," = ",(0,s.jsx)(n.code,{children:"0"})]}),"\n",(0,s.jsxs)(n.li,{children:["a proof (32 byte) ",(0,s.jsx)(n.code,{children:"p"})]}),"\n",(0,s.jsxs)(n.li,{children:["a signing public key (variable) ",(0,s.jsx)(n.code,{children:"s"})]}),"\n",(0,s.jsxs)(n.li,{children:["an encrypting public key (variable) ",(0,s.jsx)(n.code,{children:"e"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"211-serialisation-and-deserialisation",children:"2.1.1 Serialisation and deserialisation"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.code,{children:"messagepack"})," serialisation. MessagePack is a sort of JSON compressor ",(0,s.jsx)(n.a,{href:"https://msgpack.org/",children:"https://msgpack.org/"}),". The choice for this design is driven by the following consideration:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"we don't need a very small footprint for the data as storage size is not an issue"}),"\n",(0,s.jsx)(n.li,{children:"we want to be friendly enough for third part implementation, above all"}),"\n",(0,s.jsxs)(n.li,{children:["This serialisation is also used for saltpack  ",(0,s.jsx)(n.a,{href:"https://saltpack.org/",children:"https://saltpack.org/"})," in order to stream encrypted data and this can be leverage for the encryption part."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Caveats: Implementation can vary, ie VaultysId can vary if another implementation is used. Also it is possible to alter some part of the messagePack data and still deserialise to the same data."})," (see tests)"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VaultysId = type | messagepack({v, p, s, e})"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"[!WARNING]\xa0Order of parameter of the message pack is important as it can influence the definition of the fingerprinting."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"[!WARNING]\xa0Fingerprints may depends on message pack implementation."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"[!WARNING]\xa0Fingerprints should NEVER be used at protocol level. It can be used as a way to index a list of VaultysId. It is not recommended to use fingerprints as key exchange verification (like in PGP key exchange)."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"212-fingerprint",children:"2.1.2 Fingerprint"}),"\n",(0,s.jsxs)(n.p,{children:["Fingerprint = ",(0,s.jsx)(n.code,{children:"sha224(VaultysId)"})]}),"\n",(0,s.jsx)(n.h4,{id:"213-did",children:"2.1.3 DiD"}),"\n",(0,s.jsxs)(n.p,{children:["Decentralised Id = ",(0,s.jsx)(n.code,{children:"did:vaultys:<fingerprint>"})]}),"\n",(0,s.jsx)(n.h4,{id:"214-secret",children:"2.1.4 Secret"}),"\n",(0,s.jsxs)(n.p,{children:["In order to backup VaultysId secrets the following serialization is used\n",(0,s.jsx)(n.code,{children:"secret = type | messagepack({v, p, ss, se})"}),"\nwhere:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ss"})," is the secret of public key ",(0,s.jsx)(n.code,{children:"s"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"se"})," is the secret of public key ",(0,s.jsx)(n.code,{children:"e"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"22-defined-type",children:"2.2 Defined Type"}),"\n",(0,s.jsxs)(n.p,{children:["There are 3 defined Types in the current state of the protocol\n",(0,s.jsx)(n.code,{children:"type"})," = ",(0,s.jsx)(n.code,{children:"0"}),": identifying a device (server, computer etc...)\n",(0,s.jsx)(n.code,{children:"type"})," = ",(0,s.jsx)(n.code,{children:"1"}),": identifying a person.\n",(0,s.jsx)(n.code,{children:"type"})," = ",(0,s.jsx)(n.code,{children:"3"}),": identifying a person through a Fido2 device."]}),"\n",(0,s.jsx)(n.h4,{id:"221-type-3-serialisations",children:"2.2.1 Type 3 serialisations"}),"\n",(0,s.jsx)(n.p,{children:"As there is no proof concept for Fido2, the following parameter are set:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"p"})," = 0000...0000"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"s"})," = COSE PublicKey as extracted by Fido2 Attestation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"e"})," is generated ",(0,s.jsx)(n.em,{children:"not"})," handled by Fido2 device"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As there is no backup from Fido2 device as recommended by certification, the following secret is used in order to port the VaultysId on various devices:\n",(0,s.jsx)(n.code,{children:"secret = type |\xa0messagepack({v, fid, t, s, se})"}),"\nwhere:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fid"})," is the Fido2 id given by the attestation at creation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"t"})," is the webauthn ",(0,s.jsx)(n.strong,{children:"transport"})," used to connect to the device (in order to prevent from complex UI handling for the webauthn interface).\n",(0,s.jsx)(n.code,{children:"t = hybrid | ble | nfc | usb"}),"\nTerms ",(0,s.jsx)(n.code,{children:"hybrid"}),", ",(0,s.jsx)(n.code,{children:"ble"}),", ",(0,s.jsx)(n.code,{children:"nfc"}),", ",(0,s.jsx)(n.code,{children:"usb"})," are the one found in Fido2 specifications.\nfor instance t = ",(0,s.jsx)(n.code,{children:"0011"})," means that the Fido2 device can be reached only using NFC and USB transport"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For information our implementation for attestation creation is used with the following parameters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'navigator.credentials.create({\n    publicKey: {\n\t    challenge: randomBytes(32),\n\t    rp: {\n\t        name: "Vaultys ID",\n\t    },\n\t    user: {\n\t        id: Buffer.from("Vaultys ID", "utf-8"),\n\t        name: "Vaultys ID",\n\t        displayName: "Vaultys Wallet ID",\n\t    },\n\t    attestation: safari ? "none" : "direct",\n\t    authenticatorSelection: {\n\t        authenticatorAttachment: "cross-platform",\n\t        userVerification: "preferred"\n\t    },\n\t    pubKeyCredParams: [\n\t\t    {\n\t\t        "type": "public-key",\n\t\t        "alg": -7, // P256\n\t\t    },\n\t\t    {\n\t\t        "type": "public-key",\n\t\t        "alg": -8, // Ed25519/EdDSA\n\t\t    },\n        ]\n    }\n})\n'})}),"\n",(0,s.jsx)(n.h4,{id:"222-type-3-signatures",children:"2.2.2 Type 3 signatures"}),"\n",(0,s.jsx)(n.p,{children:"Webauthn signatures have their own payload, we use attestation for"}),"\n",(0,s.jsx)(n.h2,{id:"3-web-of-trust",children:"3 Web of Trust"}),"\n",(0,s.jsx)(n.p,{children:"We define Web of Trust as a Set of shared VaultysId. Each VaultysId owner has his own set of VaultysId to communicate with. The keys contained in the VaultysId can be used to sign or encrypt data. Each service can use its own protocol deriving keys from them."}),"\n",(0,s.jsx)(n.p,{children:"However a protocol is defined for the trust setup, ie in order to integrate the set of reliable keys. The protocol is called Symetric Relationship Protocol (SRP) as it aims to create a certificate signed by both parties and ends-up to be the same on both side."}),"\n",(0,s.jsx)(n.h3,{id:"31-symetric-relationship-protocol",children:"3.1 Symetric Relationship Protocol"}),"\n",(0,s.jsx)(n.p,{children:"Between Bob and Alice each having a VaultysId.\nData being exchanged are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"protocol"})," name (for instance ",(0,s.jsx)(n.code,{children:"p2p"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"service"})," name (for instance ",(0,s.jsx)(n.code,{children:"auth"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"}),", used to prevent from replay attack"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id1"})," and ",(0,s.jsx)(n.code,{children:"id2"}),"  are VaultysId of Bob and Alice Respectively."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Nonce"})," (random)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sign1"})," and ",(0,s.jsx)(n.code,{children:"sign2"})," are signatures created by  the signing key of ",(0,s.jsx)(n.code,{children:"Id1"})," and ",(0,s.jsx)(n.code,{children:"Id2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadata1"}),"  and ",(0,s.jsx)(n.code,{children:"metadata2"}),"  are JSON objects that can be empty\nWe can sumup the protocole using the schema:\n",(0,s.jsx)(n.code,{children:"message = { protocole, service, timestamp, id1, id2, nonce1, nonce2, metadata1, metadata2 }"}),"\n",(0,s.jsx)(n.code,{children:"sign1"})," and ",(0,s.jsx)(n.code,{children:"sign2"})," are signatures using signing keys of ",(0,s.jsx)(n.code,{children:"id1"})," and ",(0,s.jsx)(n.code,{children:"id2"})," of ",(0,s.jsx)(n.code,{children:"sha256(messagepack(message))"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Metadata is user defined by ",(0,s.jsx)(n.code,{children:"protocol"})," and ",(0,s.jsx)(n.code,{children:"service"}),". For instance we can use metadata to exchange name, email and phone between parties so they are certified inside each other Web of Trust."]}),"\n",(0,s.jsx)(n.p,{children:"We define:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["M1 = ",(0,s.jsx)(n.code,{children:"protocol, service, timestamp, id1, nonce1, metadata1"})]}),"\n",(0,s.jsxs)(n.li,{children:["M2 = ",(0,s.jsx)(n.code,{children:"id2, nonce2, metadata2"})]}),"\n",(0,s.jsxs)(n.li,{children:["sign1 and sign2 are signatures of ",(0,s.jsx)(n.code,{children:"sha256(M1 | M2)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"certificate"})," = ",(0,s.jsx)(n.code,{children:"sha256(M1 | M2) | sign1 | sign2"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"certificateId"})," = ",(0,s.jsx)(n.code,{children:"sha256(certificate)"})]}),"\n",(0,s.jsx)(n.li,{children:"Messages are serialized using MessagePack"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Protocol needs to rely on the following infrastructure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A bidirectionnal communication ",(0,s.jsx)(n.code,{children:"channel"})," already known to Bob and Alice. Active attack is allowed except for initial ",(0,s.jsx)(n.em,{children:"handcheck"})," (see later)"]}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.code,{children:"storage"})," able to save Id and certificate. The security model for ",(0,s.jsx)(n.code,{children:"storage"})," is passive attack (ie be able to read the data, not tamper with)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"32-general-description",children:"3.2 General description"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bob -> Alice : send M1"}),"\n",(0,s.jsxs)(n.li,{children:["Alice verify this is the intent in ",(0,s.jsx)(n.code,{children:"protocol, service, metadata1"})," she wants to use and data is coherent."]}),"\n",(0,s.jsxs)(n.li,{children:["Alice verify that timestamp is within reasonable time (define by the ",(0,s.jsx)(n.code,{children:"protocol"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Alice -> Bob: send M1 + M2 + sign2"}),"\n",(0,s.jsxs)(n.li,{children:["Bob verify ",(0,s.jsx)(n.code,{children:"metadata2, sign2"})," are coherent"]}),"\n",(0,s.jsxs)(n.li,{children:["Bob -> Alice: ",(0,s.jsx)(n.code,{children:"sign1"})]}),"\n",(0,s.jsxs)(n.li,{children:["Alice verify that ",(0,s.jsx)(n.code,{children:"sign1"})," is valid"]}),"\n",(0,s.jsxs)(n.li,{children:["Alice -> Bob: ",(0,s.jsx)(n.code,{children:"COMPLETE"})," in order to ack the end of communication"]}),"\n",(0,s.jsxs)(n.li,{children:["Alice and Bob save the Ids together with the ",(0,s.jsx)(n.code,{children:"certificate"})," which is the same for Alice and Bob"]}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n\tBob ->> Alice: M1\n\tAlice->>Alice: verify intent\n\tAlice->>Alice: verify timestamp deviation\n\tAlice->>Alice: ask user validation\n\tAlice->>Bob: M1 | M2 | sign2\n\tBob->>Bob: verify sign2\n\tBob->>Bob: ask validation\n\tBob->>Alice: M1 | M2 | sign1 | sign2\n\tAlice->>Alice: verify sign1\n\tAlice->>Bob: COMPLETE"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["[!NOTE]\xa0In a future version of the protocol, ",(0,s.jsx)(n.code,{children:"COMPLETE"})," might be replaced by the ",(0,s.jsx)(n.code,{children:"certificateId"})," when it will be defined."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"33-initial-handchek",children:"3.3 Initial Handchek"}),"\n",(0,s.jsx)(n.p,{children:"The initial Handcheck is a way to exchange unknown keys between parties. The active attack where a attacker can change data during the protocol is out of the scope of the security model. The mandatory setup for security:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"face to face protocol realisation."}),"\n",(0,s.jsxs)(n.li,{children:["secure p2p channel:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"with a temporary random key exchanged (via QRCode for instance) that is used to encrypt the data exchanged in the protocol"}),"\n",(0,s.jsx)(n.li,{children:"No forward secrecy is needed"}),"\n",(0,s.jsx)(n.li,{children:"The key is destroyed afterwards. The protocol is resistant to later recovery or passive attack.\nThe constant are defined:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"protocol"})," = ",(0,s.jsx)(n.code,{children:"p2p"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"service"})," = ",(0,s.jsx)(n.code,{children:"auth"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"})," deviation is 10s"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadata1"})," and ",(0,s.jsx)(n.code,{children:"metadata2"})," are empty."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["[!NOTE]\nIn case of not face to face handcheck timestamp can be relaxed to a few hours (typically 2 hours), but it is reminded the security model assert that the communication channel to transmit information or endpoint (email, chat, SMS) is ",(0,s.jsx)(n.strong,{children:"NOT"})," compromised during the handcheck."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"34-authentication",children:"3.4 Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["Once HandCheck protocole has been completed, it is possible anytime after, to authenticate each other. For instance we replace classic login system based on ",(0,s.jsx)(n.code,{children:"username/password/mfa"})," by this single authentication scheme:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"protocol"})," = ",(0,s.jsx)(n.code,{children:"p2p"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"service"})," = ",(0,s.jsx)(n.code,{children:"auth"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timestamp"})," deviation is 10s"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"metadata1"})," and ",(0,s.jsx)(n.code,{children:"metadata2"})," are empty."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The verification on both parties ",(0,s.jsx)(n.code,{children:"Alice"})," and ",(0,s.jsx)(n.code,{children:"Bob"})," have an extra step, checking the validity of the handcheck registration certificate on both sides:"]}),"\n",(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n\tBob ->> Server: M1\n\tServer->>Server: verify intent\n\tServer->>Server: verify certificate for Bob id1\n\tServer->>Server: verify timestamp deviation\n\tServer->>Bob: M1 | M2 | sign2\n\tBob->>Bob: verify sign2\n\tBob->>Bob: verify certificate for Server Id2\n\tBob->>Bob: ask validation\n\tBob->>Server: M1 | M2 | sign1 | sign2\n\tServer->>Server: verify sign1\n\tServer->>Bob: COMPLETE"}),"\n",(0,s.jsx)(n.h3,{id:"35-reference-implementation",children:"3.5 Reference implementation"}),"\n",(0,s.jsxs)(n.p,{children:["Reference Implementation can be found at this repository ",(0,s.jsx)(n.a,{href:"https://github.com/vaultys/vaultysid",children:"https://github.com/vaultys/vaultysid"})," and its API is described here [[getting-started]]"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["MessagePack Serialisation is handled by ",(0,s.jsx)(n.a,{href:"https://github.com/ygoe/msgpack.js/tree/v1.0.3",children:"https://github.com/ygoe/msgpack.js/tree/v1.0.3"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Cryptography used for Ed25519 is handled by ",(0,s.jsx)(n.a,{href:"https://github.com/StricaHQ/bip32ed25519/tree/v1.0.4",children:"https://github.com/StricaHQ/bip32ed25519/tree/v1.0.4"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["COSE deserialisation for FIDO2 bridge implementation is handled by ",(0,s.jsx)(n.a,{href:"https://github.com/hildjj/node-cbor/tree/v8.0.1",children:"https://github.com/hildjj/node-cbor/tree/v8.0.1"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["X509 certificate deserialisation for FIDO2 bridge implementation is handled by ",(0,s.jsx)(n.a,{href:"https://github.com/PeculiarVentures/x509/tree/v1.9.2",children:"https://github.com/PeculiarVentures/x509/tree/v1.9.2"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Random and sha256 primitives are the one provided by Nodejs ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/crypto.html",children:"https://nodejs.org/api/crypto.html"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"createHash"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"randomBytes"})}),"\n",(0,s.jsxs)(n.li,{children:["for browser delegated to ",(0,s.jsx)(n.a,{href:"https://github.com/browserify/crypto-browserify/tree/v3.12.0",children:"https://github.com/browserify/crypto-browserify/tree/v3.12.0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/browserify/randombytes",children:"https://github.com/browserify/randombytes"})," (using getRandomValues browser primitive)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/browserify/createhash",children:"https://github.com/browserify/createhash"})," (using ",(0,s.jsx)(n.a,{href:"https://github.com/browserify/sha.js",children:"https://github.com/browserify/sha.js"})," behind the curtain)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"36-example",children:"3.6 Example"}),"\n",(0,s.jsx)(n.h2,{id:"channel-implementations",children:"Channel implementations"}),"\n",(0,s.jsx)(n.p,{children:"Channels are abstract object to exchange data in bidirectionnal way. In essence 2 methods are needed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"send(data): void"})," to send data in fire and forget"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"async receive(): data"})," to wait for data reception"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We provide 2 implementations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"P2P channel"})," using webrtc (via the library peer.js)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Server/Browser channel"}),"  relying on","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["native ",(0,s.jsx)(n.code,{children:"fetch()"})," for the browser"]}),"\n",(0,s.jsx)(n.li,{children:"expressjs or nextjs middleware for the server."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There is for testing a ",(0,s.jsx)(n.code,{children:"Channel Mock"})," (using RAM in the same process)\nWe are working on several other implementation like Patr"]}),"\n",(0,s.jsx)(n.h2,{id:"4-addressing-protocol",children:"4 Addressing protocol"}),"\n",(0,s.jsx)(n.p,{children:"In order to exchange information to start the SRP protocol between 2 parties, a URL Schema is being defined:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"vaultys://<channel>?protocol=<...>&service=<...>&id=<...>"})}),"\n",(0,s.jsxs)(n.p,{children:["for instance\n",(0,s.jsx)(n.code,{children:"vaultys://peerjs?protocol=p2p&service=auth&key=57658767463524&host=peerjs.92k.de"}),"\n",(0,s.jsx)(n.code,{children:"vaultys://browser?protocol=p2p&service=auth&url=https://...&key=D24a568a4ffdd9"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Description:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Users' Smartphones"}),": Each user has a smartphone where they have the Smartlink app installed. This app generates and manages the user's Decentralized ID (VaultysID)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VaultysID Generation"}),": The VaultysID is created securely on the user's smartphone using cryptographic algorithms. This ID serves as a decentralized identifier for the user."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Smartlink Server"}),": The central component of the Smartlink system is the Smartlink server. It manages user authentication requests and interacts with the Smartlink app on the user's smartphone."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Authentication Protocol"}),": When a user wants to connect to the Smartlink service, the app initiates an authentication request. The Smartlink server sends an authentication challenge to the app, which includes a unique authentication message."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Authentication"}),": The Smartlink app securely signs the authentication message using the user's VaultysID and sends it back to the Smartlink server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Smartlink Verification"}),": Upon receiving the signed authentication message from the user, the Smartlink server verifies the authenticity of the message by validating the signature using the public key associated with the user's VaultysID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Smartlink ID Verification"}),": Simultaneously, the Smartlink server sends its own authentication message signed with its own identifier to the user's app."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"App Verification"}),": The user's app verifies the authenticity of the Smartlink server's message using the server's public key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Authenticated Connection"}),": Once both sides have successfully verified each other's identities, an authenticated connection is established between the user's app and the Smartlink server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Decentralized Security"}),": The decentralized nature of the VaultysID system ensures that user identities are securely managed on their smartphones without relying on a central authority. This enhances security and privacy for both users and the Smartlink service."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},25710:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var s=i(30758);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);