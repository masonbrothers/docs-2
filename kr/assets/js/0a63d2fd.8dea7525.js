"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(k,i(i({ref:t},l),{},{components:r})):a.createElement(k,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(3117),n=(r(7294),r(3905));const o={title:"Backup and Restore",weight:26},i=void 0,s={unversionedId:"datastore/backup-restore",id:"datastore/backup-restore",title:"Backup and Restore",description:"The way K3s is backed up and restored depends on which type of datastore is used.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/datastore/backup-restore.md",sourceDirName:"datastore",slug:"/datastore/backup-restore",permalink:"/kr/datastore/backup-restore",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:1694712126,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{title:"Backup and Restore",weight:26},sidebar:"mySidebar",previous:{title:"\ud074\ub7ec\uc2a4\ud130 \ub370\uc774\ud130 \uc800\uc7a5\uc18c",permalink:"/kr/datastore/"},next:{title:"High Availability Embedded etcd",permalink:"/kr/datastore/ha-embedded"}},d={},c=[{value:"Backup and Restore with SQLite",id:"backup-and-restore-with-sqlite",level:2},{value:"Backup and Restore with External Datastore",id:"backup-and-restore-with-external-datastore",level:2},{value:"Backup and Restore with Embedded etcd Datastore",id:"backup-and-restore-with-embedded-etcd-datastore",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The way K3s is backed up and restored depends on which type of datastore is used."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In addition to backing up the datastore itself, you must also back up the server token file at ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),".\nYou must restore this file, or pass its value into the ",(0,n.kt)("inlineCode",{parentName:"p"},"--token")," option, when restoring from backup.\nIf you do not use the same token value when restoring, the snapshot will be unusable, as the token is used to encrypt confidential data within the datastore itself.")),(0,n.kt)("h2",{id:"backup-and-restore-with-sqlite"},"Backup and Restore with SQLite"),(0,n.kt)("p",null,"No special commands are required to back up or restore the SQLite datastore. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To back up the SQLite datastore, take a copy of ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/db/"),"."),(0,n.kt)("li",{parentName:"ul"},"To restore the SQLite datastore, restore the contents of ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/db")," (and the token, as discussed above).")),(0,n.kt)("h2",{id:"backup-and-restore-with-external-datastore"},"Backup and Restore with External Datastore"),(0,n.kt)("p",null,"When an external datastore is used, backup and restore operations are handled outside of K3s. The database administrator will need to back up the external database, or restore it from a snapshot or dump."),(0,n.kt)("p",null,"We recommend configuring the database to take recurring snapshots."),(0,n.kt)("p",null,"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"Official MySQL documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"Official PostgreSQL documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/docs/latest/op-guide/recovery/"},"Official etcd documentation"))),(0,n.kt)("h2",{id:"backup-and-restore-with-embedded-etcd-datastore"},"Backup and Restore with Embedded etcd Datastore"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/kr/cli/etcd-snapshot"},(0,n.kt)("inlineCode",{parentName:"a"},"k3s etcd-snapshot")," command documentation")," for information on performing backup and restore operations on the embedded etcd datastore."))}p.isMDXComponent=!0}}]);