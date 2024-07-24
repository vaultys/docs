"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[9793],{40729:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=r(86070),t=r(25710);const s={sidebar_position:2},a="Konfiguration",d={id:"administrateur/integration/setup",title:"Konfiguration",description:"Erfassung der Mitarbeiter durch den Administrator",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/administrateur/integration/setup.md",sourceDirName:"administrateur/integration",slug:"/administrateur/integration/setup",permalink:"/de/docs/administrateur/integration/setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userguideSidebar",previous:{title:"Administrator ausw\xe4hlen",permalink:"/de/docs/administrateur/integration/select-administrator"},next:{title:"F\xfcr Mitarbeiter",permalink:"/de/docs/administrateur/integration/collaborators"}},o={},l=[{value:"Erfassung der Mitarbeiter durch den Administrator",id:"erfassung-der-mitarbeiter-durch-den-administrator",level:2},{value:"Bestandsaufnahme der Anwendungen und Webdienste, die gesichert werden m\xfcssen",id:"bestandsaufnahme-der-anwendungen-und-webdienste-die-gesichert-werden-m\xfcssen",level:2},{value:"Erstellung des Administrator-Accounts",id:"erstellung-des-administrator-accounts",level:2},{value:"Information der Mitarbeiter",id:"information-der-mitarbeiter",level:2},{value:"Liste der verf\xfcgbaren Ressourcen",id:"liste-der-verf\xfcgbaren-ressourcen",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"konfiguration",children:"Konfiguration"}),"\n",(0,i.jsx)(n.h2,{id:"erfassung-der-mitarbeiter-durch-den-administrator",children:"Erfassung der Mitarbeiter durch den Administrator"}),"\n",(0,i.jsx)(n.p,{children:"Der Administrator f\xfchrt eine umfassende Erfassung aller Mitarbeiter durch. Jeder Mitarbeiter kann wie folgt identifiziert werden:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Nachname"}),"\n",(0,i.jsx)(n.li,{children:"Vorname"}),"\n",(0,i.jsx)(n.li,{children:"Gesch\xe4ftliche E-Mail"}),"\n",(0,i.jsx)(n.li,{children:"Gesch\xe4ftliche Telefonnummer (optional)"}),"\n",(0,i.jsxs)(n.li,{children:["Gruppen (optional, durch Kommas getrennt). Gruppen sind n\xfctzlich f\xfcr die Verwaltung von Zugriffen. Typischerweise k\xf6nnen Gruppen wie ",(0,i.jsx)(n.strong,{children:"Marketing"}),", ",(0,i.jsx)(n.strong,{children:"Buchhaltung"}),", ",(0,i.jsx)(n.strong,{children:"Vertrieb"}),", ",(0,i.jsx)(n.strong,{children:"Management"}),", ",(0,i.jsx)(n.strong,{children:"Personalwesen"})," usw. sich Ressourcen teilen."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:'Der Begriff "Gruppe" ist sehr flexibel. F\xfcr bestimmte Aktivit\xe4ten wie Kommunikationsunternehmen, die im Namen ihrer Kunden t\xe4tig sind, kann man sich vorstellen, dass f\xfcr jeden Kunden eine Gruppe erstellt wird, um LinkedIn-, Facebook- und andere soziale Netzwerke mit einer begrenzten Anzahl von Mitarbeitern zu teilen.'})}),"\n",(0,i.jsx)(n.p,{children:"Ein Beispiel f\xfcr eine Datei ist wie folgt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csv",children:"Nachname;Vorname;E-Mail;Telefon;Gruppen\nMartin;Pierre;p.martin@example.com;0123456789;Vertrieb\nDubois;Marie;m.dubois@example.com;9876543210;Marketing,Personalwesen\nLefevre;Jean;j.lefevre@example.com;;Buchhaltung\nDurand;Sophie;sophie.durand@example.com;1234567890;Management\nPetit;Paul;p.petit@example.com;;Vertrieb,Personalwesen\nThomas;Anne;anne.thomas@example.com;2345678901;Buchhaltung\nRobert;Julie;julie.robert@example.com;3456789012;Vertrieb\nRichard;Philippe;philippe.richard@example.com;4567890123;Marketing\nMoreau;Isabelle;i.moreau@example.com;;Buchhaltung\nSimon;Christophe;ch.simon@example.com;5678901234;Personalwesen\nLefevre;Catherine;c.lefevre@example.com;;Management\nLeroy;Guillaume;guillaume.leroy@example.com;6789012345;Vertrieb\nGarcia;Sylvie;s.garcia@example.com;;Marketing\nBonnet;Nicolas;nicolas.bonnet@example.com;7890123456;Personalwesen\nAndre;Val\xe9rie;valerie.andre@example.com;8901234567;Buchhaltung,Management\nMercier;Marie;m.mercier@example.com;;Vertrieb\nDupuis;David;d.dupuis@example.com;9012345678;Personalwesen\nMarchand;Caroline;caroline.marchand@example.com;0123456789;Buchhaltung\nDumas;Laure;l.dumas@example.com;;Marketing\nGirard;Patrick;patrick.girard@example.com;9876543210;Management\nRoux;Sylvain;sylvain.roux@example.com;2345678901;Vertrieb\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bestandsaufnahme-der-anwendungen-und-webdienste-die-gesichert-werden-m\xfcssen",children:"Bestandsaufnahme der Anwendungen und Webdienste, die gesichert werden m\xfcssen"}),"\n",(0,i.jsx)(n.p,{children:"Vor der Implementierung f\xfchrt der Administrator eine sorgf\xe4ltige Identifizierung der Anwendungen und Webdienste durch, die eine Sicherung \xfcber SmartLink erfordern. Dieser strategische Schritt gew\xe4hrleistet, dass nur wesentliche und sensible Ressourcen in das System integriert werden. Typischerweise verwenden Mitarbeiter Lesezeichen in ihrem Browser und/oder ein Passwort-Manager. Sie k\xf6nnen dem Administrator die verwendeten Anwendungen mit den folgenden Informationen mitteilen:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name der Anwendung"}),"\n",(0,i.jsxs)(n.li,{children:["URL, z.B. ",(0,i.jsx)(n.code,{children:"https://application.en.ligne.com"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"ob sie sich mit einem Passwort anmelden. Falls ja, wird das Passwort innerhalb einer Gruppe geteilt oder f\xfcr pers\xf6nliche Zwecke verwendet. Geben Sie gegebenenfalls den Gruppennamen an."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Nach Abschluss der Bestandsaufnahme kann die konsolidierte Datei direkt in SmartLink integriert werden"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Machen Sie sich nicht zu viele Gedanken \xfcber Details wie Freigabe oder Gruppen, diese Einstellungen k\xf6nnen direkt in SmartLink verfeinert werden."})}),"\n",(0,i.jsx)(n.p,{children:"Ein Beispiel f\xfcr eine Datei ist wie folgt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csv",children:"Anwendung;URL;Passwort;Gruppe\nGoogle Workspace;https://workspace.google.com;Ja;Management\nSalesforce;https://www.salesforce.com;Ja;Vertrieb\nMicrosoft 365;https://www.office.com;Ja;Buchhaltung,Personalwesen\nSlack;https://slack.com;Ja;Marketing,Personalwesen\nJIRA;https://www.atlassian.com/software/jira;Ja;Entwicklung\nConfluence;https://www.atlassian.com/software/confluence;Ja;Entwicklung\nZoom;https://zoom.us;Ja;Management, Vertrieb\nDropbox Business;https://www.dropbox.com/business;Ja;Marketing\nGitHub;https://github.com;Ja;Entwicklung\nLinkedIn;https://www.linkedin.com;Ja;Marketing\nFacebook;https://www.facebook.com;Ja;Marketing\nTwitter;https://twitter.com;Nein;\nInstagram;https://www.instagram.com;Nein;\nTrello;https://trello.com;Ja;Vertrieb\nAsana;https://asana.com;Ja;Buchhaltung\nZendesk;https://www.zendesk.com;Ja;Kundensupport\nWordPress;https://wordpress.com;Ja;Marketing\nGoogle Analytics;https://analytics.google.com;Nein;\nStripe;https://stripe.com;Ja;Finanzen\nShopify;https://www.shopify.com;Ja;Vertrieb\n"})}),"\n",(0,i.jsx)(n.h2,{id:"erstellung-des-administrator-accounts",children:"Erstellung des Administrator-Accounts"}),"\n",(0,i.jsx)(n.p,{children:"Nach Identifizierung der Anwendungen und Erfassung der Mitarbeiter erstellt der Administrator den Administrator-Account f\xfcr SmartLink. Dieses zentralisierte Konto erm\xf6glicht eine effiziente Verwaltung von Sicherheitsrichtlinien und Zugriffen innerhalb des Unternehmens."}),"\n",(0,i.jsx)(n.h2,{id:"information-der-mitarbeiter",children:"Information der Mitarbeiter"}),"\n",(0,i.jsx)(n.p,{children:"Die Mitarbeiter werden proaktiv \xfcber die Integration von SmartLink und die daraus resultierenden \xc4nderungen bez\xfcglich des Zugriffs auf Anwendungen und Dienste informiert. Eine klare und detaillierte Kommunikation ist entscheidend, um einen reibungslosen \xdcbergang zu gew\xe4hrleisten und St\xf6rungen im t\xe4glichen Betrieb zu minimieren."}),"\n",(0,i.jsx)(n.p,{children:"F\xfcr diesen Zweck haben wir"}),"\n",(0,i.jsx)(n.h2,{id:"liste-der-verf\xfcgbaren-ressourcen",children:"Liste der verf\xfcgbaren Ressourcen"}),"\n",(0,i.jsx)(n.p,{children:"Abschlie\xdfend wird eine vollst\xe4ndige Liste der \xfcber SmartLink verf\xfcgbaren Ressourcen erstellt und den Mitarbeitern zur Verf\xfcgung gestellt. Diese Ressource erleichtert den schnellen Zugriff auf wichtige Informationen zu gesicherten Anwendungen und st\xe4rkt die Transparenz innerhalb des Unternehmens."}),"\n",(0,i.jsx)(n.p,{children:"Durch die Einhaltung dieses methodischen Prozesses kann das Unternehmen SmartLink effektiv integrieren, wodurch die Sicherheit seiner Daten gest\xe4rkt und die Verwaltung von Zugriffen und Benutzern optimiert wird."})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},25710:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var i=r(30758);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);