"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3100],{9269:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=t(5893),n=t(1151);const d={title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8"},i=void 0,c={id:"datastore/datastore",title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8",description:"K3s \u4e0e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5728\u4e8e K3s \u652f\u6301\u4f7f\u7528 etcd \u4ee5\u5916\u7684\u6570\u636e\u5e93\u6765\u8fd0\u884c Kubernetes\u3002\u8be5\u529f\u80fd\u8ba9 Kubernetes \u8fd0\u7ef4\u66f4\u52a0\u7075\u6d3b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u5b58\u50a8\u9009\u9879\u3002\u4f8b\u5982\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/datastore.md",sourceDirName:"datastore",slug:"/datastore/",permalink:"/zh/datastore/",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/datastore.md",tags:[],version:"current",lastUpdatedAt:171744773e4,frontMatter:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8"},sidebar:"mySidebar",previous:{title:"Uninstalling K3s",permalink:"/zh/installation/uninstall"},next:{title:"\u5907\u4efd\u548c\u6062\u590d",permalink:"/zh/datastore/backup-restore"}},l={},o=[{value:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570",id:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd",id:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd",level:3}];function h(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{TabItem:t,Tabs:d}=s;return t||x("TabItem",!0),d||x("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"K3s \u4e0e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u7684\u4e0d\u540c\u4e4b\u5904\uff0c\u5728\u4e8e K3s \u652f\u6301\u4f7f\u7528 etcd \u4ee5\u5916\u7684\u6570\u636e\u5e93\u6765\u8fd0\u884c Kubernetes\u3002\u8be5\u529f\u80fd\u8ba9 Kubernetes \u8fd0\u7ef4\u66f4\u52a0\u7075\u6d3b\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u5b58\u50a8\u9009\u9879\u3002\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u4f60\u7684\u56e2\u961f\u6ca1\u6709\u64cd\u4f5c etcd \u7684\u4e13\u4e1a\u77e5\u8bc6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 MySQL \u6216 PostgreSQL \u7b49\u4f01\u4e1a\u7ea7 SQL \u6570\u636e\u5e93\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u4f60\u9700\u8981\u5728 CI/CD \u73af\u5883\u4e2d\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u3001\u77ed\u671f\u7684\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5e93\u3002"}),"\n",(0,r.jsx)(s.li,{children:"\u5982\u679c\u4f60\u5e0c\u671b\u5728\u8fb9\u7f18\u90e8\u7f72 Kubernetes \u5e76\u9700\u8981\u9ad8\u53ef\u7528\u89e3\u51b3\u65b9\u6848\uff0c\u4f46\u53c8\u65e0\u6cd5\u627f\u62c5\u5728\u8fb9\u7f18\u7ba1\u7406\u6570\u636e\u5e93\u7684\u8fd0\u8425\u5f00\u9500\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 K3s \u7684\u5d4c\u5165\u5f0f HA \u6570\u636e\u5b58\u50a8\uff0c\u8be5\u6570\u636e\u5b58\u50a8\u6784\u5efa\u5728\u5d4c\u5165\u5f0f etcd \u4e4b\u4e0a\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"K3s \u652f\u6301\u4ee5\u4e0b\u6570\u636e\u5b58\u50a8\u9009\u9879\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["\u5d4c\u5165\u5f0f ",(0,r.jsx)(s.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})]}),(0,r.jsx)(s.br,{}),"\n","SQLite \u4e0d\u80fd\u7528\u4e8e\u5177\u6709\u591a\u4e2a Server \u7684\u96c6\u7fa4\u3002",(0,r.jsx)(s.br,{}),"\n","SQLite \u662f\u9ed8\u8ba4\u7684\u6570\u636e\u5b58\u50a8\uff0c\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u6570\u636e\u5b58\u50a8\u914d\u7f6e\uff0c\u5e76\u4e14\u78c1\u76d8\u4e0a\u6ca1\u6709\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5e93\u6587\u4ef6\uff0c\u5c06\u4f7f\u7528 SQLite\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u5d4c\u5165\u5f0f etcd"}),(0,r.jsx)(s.br,{}),"\n","\u6709\u5173\u5728\u5177\u6709\u591a\u4e2a Server \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(s.a,{href:"/zh/datastore/ha-embedded",children:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd"})," \u6587\u6863\u3002\n\u5982\u679c K3s \u914d\u7f6e\u4e3a\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u7684 etcd \u96c6\u7fa4\uff0c\u52a0\u5165\u4e00\u4e2a\u73b0\u6709\u7684 etcd \u96c6\u7fa4\uff0c\u6216\u8005 etcd \u6570\u636e\u5e93\u6587\u4ef6\u5728\u542f\u52a8\u65f6\u5728\u78c1\u76d8\u4e0a\uff0c\u90a3\u4e48\u4f1a\u81ea\u52a8\u9009\u62e9\u5d4c\u5165\u5f0f etcd\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u5916\u90e8\u6570\u636e\u5e93"}),(0,r.jsx)(s.br,{}),"\n","\u6709\u5173\u5728\u5177\u6709\u591a\u4e2a Server \u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(s.a,{href:"/zh/datastore/ha",children:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93"}),"\u6587\u6863\u3002",(0,r.jsx)(s.br,{}),"\n","\u652f\u6301\u4ee5\u4e0b\u5916\u90e8\u6570\u636e\u5b58\u50a8\uff1a","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://etcd.io/",children:"etcd"}),"\uff08\u9488\u5bf9\u7248\u672c 3.5.4 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.mysql.com/",children:"MySQL"}),"\uff08\u9488\u5bf9\u7248\u672c 5.7 \u548c 8.0 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://mariadb.org/",children:"MariaDB"}),"\uff08\u9488\u5bf9\u7248\u672c 10.6.8 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"\uff08\u9488\u5bf9\u7248\u672c 10.7\u300111.5 \u548c 14.2 \u8fdb\u884c\u4e86\u8ba4\u8bc1\uff09"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{title:"\u51c6\u5907\u8bed\u53e5\u652f\u6301",type:"warning",children:(0,r.jsxs)(s.p,{children:["K3s \u9700\u8981 DB \u7684\u51c6\u5907\u8bed\u53e5\u652f\u6301\u3002\u6362\u8a00\u4e4b\uff0c",(0,r.jsx)(s.a,{href:"https://www.pgbouncer.org/faq.html#how-to-use-prepared-statements-with-transaction-pooling",children:"PgBouncer"})," \u4e4b\u7c7b\u7684\u8fde\u63a5\u6c60\u5c06\u65e0\u6cd5\u4e0e K3s \u4e00\u8d77\u4f7f\u7528\u3002"]})}),"\n",(0,r.jsx)(s.h3,{id:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570",children:"\u5916\u90e8\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u53c2\u6570"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528\u5916\u90e8\u6570\u636e\u5b58\u50a8\uff08\u4f8b\u5982 PostgreSQL\u3001MySQL \u6216 etcd\uff09\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"datastore-endpoint"})," \u53c2\u6570\uff0c\u4ee5\u4fbf K3s \u77e5\u9053\u5982\u4f55\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u6765\u914d\u7f6e\u8fde\u63a5\u7684\u8ba4\u8bc1\u548c\u52a0\u5bc6\u3002\u4e0b\u8868\u603b\u7ed3\u4e86\u8fd9\u4e9b\u53c2\u6570\uff0c\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a CLI \u6807\u5fd7\u6216\u73af\u5883\u53d8\u91cf\u4f20\u9012\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"CLI \u6807\u5fd7"}),(0,r.jsx)(s.th,{children:"\u73af\u5883\u53d8\u91cf"}),(0,r.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--datastore-endpoint"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_ENDPOINT"})}),(0,r.jsx)(s.td,{children:"\u6307\u5b9a PostgreSQL\u3001MySQL \u6216 etcd \u8fde\u63a5\u5b57\u7b26\u4e32\u3002\u8be5\u5b57\u7b26\u4e32\u7528\u4e8e\u63cf\u8ff0\u4e0e\u6570\u636e\u5b58\u50a8\u7684\u8fde\u63a5\u3002\u4e0d\u540c\u7684\u540e\u7aef\u5bf9\u5e94\u4e0d\u540c\u7684\u5b57\u7b26\u4e32\u7ed3\u6784\uff0c\u4e0b\u6587\u6709\u8be6\u7ec6\u8bf4\u660e\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--datastore-cafile"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_CAFILE"})}),(0,r.jsx)(s.td,{children:"TLS \u8bc1\u4e66\u9881\u53d1\u673a\u6784\uff08CA\uff09\u6587\u4ef6\uff0c\u7528\u4e8e\u786e\u4fdd\u6570\u636e\u5b58\u50a8\u7684\u901a\u4fe1\u5b89\u5168\u3002\u5982\u679c\u4f60\u7684\u6570\u636e\u5b58\u50a8\u4f7f\u7528\u81ea\u5b9a\u4e49\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u7b7e\u7f72\u7684\u8bc1\u4e66\u901a\u8fc7 TLS \u5904\u7406\u8bf7\u6c42\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u6b64\u53c2\u6570\u6307\u5b9a CA\uff0c\u4ee5\u4fbf K3s \u5ba2\u6237\u7aef\u53ef\u4ee5\u6b63\u786e\u9a8c\u8bc1\u8bc1\u4e66\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--datastore-certfile"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_CERTFILE"})}),(0,r.jsxs)(s.td,{children:["TLS \u8bc1\u4e66\u6587\u4ef6\uff0c\u7528\u4e8e\u5bf9\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u57fa\u4e8e\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u9a8c\u8bc1\u3002\u8981\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u4f60\u5fc5\u987b\u5c06\u6570\u636e\u5b58\u50a8\u914d\u7f6e\u4e3a\u652f\u6301\u57fa\u4e8e\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u8ba4\u8bc1\u3002\u8981\u6307\u5b9a\u6b64\u53c2\u6570\uff0c\u4f60\u8fd8\u5fc5\u987b\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"datastore-keyfile"})," \u53c2\u6570\u3002"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--datastore-keyfile"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_KEYFILE"})}),(0,r.jsxs)(s.td,{children:["TLS \u5bc6\u94a5\u6587\u4ef6\uff0c\u7528\u4e8e\u5bf9\u6570\u636e\u5b58\u50a8\u8fdb\u884c\u57fa\u4e8e\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u9a8c\u8bc1\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u524d\u9762\u7684 ",(0,r.jsx)(s.code,{children:"datastore-certfile"})," \u53c2\u6570\u3002"]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"\u4f5c\u4e3a\u6700\u4f73\u5b9e\u8df5\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u8fd9\u4e9b\u53c2\u6570\u8bbe\u7f6e\u4e3a\u73af\u5883\u53d8\u91cf\uff0c\u800c\u4e0d\u662f\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u8fd9\u6837\u4f60\u7684\u6570\u636e\u5e93\u8bc1\u4e66\u6216\u5176\u4ed6\u654f\u611f\u4fe1\u606f\u5c31\u4e0d\u4f1a\u4f5c\u4e3a\u8fdb\u7a0b\u4fe1\u606f\u7684\u4e00\u90e8\u5206\u66b4\u9732\u51fa\u6765\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd",children:"\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u683c\u5f0f\u548c\u529f\u80fd"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u524d\u6240\u8ff0\uff0c\u4f20\u9012\u7ed9 ",(0,r.jsx)(s.code,{children:"datastore-endpoint"})," \u53c2\u6570\u7684\u503c\u7684\u683c\u5f0f\u53d6\u51b3\u4e8e\u6570\u636e\u5b58\u50a8\u540e\u7aef\u3002\u4e0b\u6587\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u6bcf\u4e2a\u652f\u6301\u7684\u5916\u90e8\u6570\u636e\u5b58\u50a8\u7684\u683c\u5f0f\u548c\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(t,{value:"PostgreSQL",children:[(0,r.jsxs)(s.p,{children:["\u6700\u5e38\u89c1\u7684 PostgreSQL \u7684 ",(0,r.jsx)(s.code,{children:"datastore-endpoint"})," \u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"postgres://username:password@hostname:port/database-name"})}),(0,r.jsxs)(s.p,{children:["\u652f\u6301\u4f7f\u7528\u66f4\u9ad8\u7ea7\u7684\u914d\u7f6e\u53c2\u6570\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"https://godoc.org/github.com/lib/pq%E3%80%82",children:"https://godoc.org/github.com/lib/pq\u3002"})]}),(0,r.jsx)(s.p,{children:"\u5982\u679c\u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u4e0d\u5b58\u5728\uff0cserver \u5c06\u5c1d\u8bd5\u521b\u5efa\u5b83\u3002"}),(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u53ea\u63d0\u4f9b\u4e86 ",(0,r.jsx)(s.code,{children:"postgres://"})," \u4f5c\u4e3a\u7aef\u70b9\uff0cK3s \u5c06\u5c1d\u8bd5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"postgres"})," \u4f5c\u4e3a\u7528\u6237\u540d\u548c\u5bc6\u7801\u8fde\u63a5\u5230 localhost"]}),"\n",(0,r.jsxs)(s.li,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"kubernetes"})," \u7684\u6570\u636e\u5e93"]}),"\n"]})]}),(0,r.jsxs)(t,{value:"MySQL / MariaDB",children:[(0,r.jsxs)(s.p,{children:["\u6700\u5e38\u89c1\u7684 MySQL \u548c MariaDB \u7684 ",(0,r.jsx)(s.code,{children:"datastore-endpoint"})," \u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"mysql://username:password@tcp(hostname:3306)/database-name"})}),(0,r.jsxs)(s.p,{children:["\u652f\u6301\u4f7f\u7528\u66f4\u9ad8\u7ea7\u7684\u914d\u7f6e\u53c2\u6570\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"https://github.com/go-sql-driver/mysql#dsn-data-source-name",children:"https://github.com/go-sql-driver/mysql#dsn-data-source-name"})]}),(0,r.jsxs)(s.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e K3s \u7684\u4e00\u4e2a",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/issues/1093",children:"\u5df2\u77e5\u95ee\u9898"}),"\uff0c\u4f60\u65e0\u6cd5\u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"tls"})," \u53c2\u6570\u3002TLS \u901a\u4fe1\u662f\u652f\u6301\u7684\uff0c\u4f46\u4f60\u4e0d\u80fd\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a \u201cskip-verify\u201d \u4ee5\u4f7f K3s \u8df3\u8fc7\u8bc1\u4e66\u9a8c\u8bc1\u3002"]}),(0,r.jsx)(s.p,{children:"\u5982\u679c\u6307\u5b9a\u6570\u636e\u5e93\u540d\u79f0\u4e0d\u5b58\u5728\uff0cserver \u5c06\u5c1d\u8bd5\u521b\u5efa\u5b83\u3002"}),(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u53ea\u63d0\u4f9b\u4e86 ",(0,r.jsx)(s.code,{children:"mysql://"})," \u4f5c\u4e3a\u7aef\u70b9\uff0cK3s \u5c06\u5c1d\u8bd5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u901a\u8fc7 ",(0,r.jsx)(s.code,{children:"root"})," \u7528\u6237\uff0c\u4e0d\u4f7f\u7528\u5bc6\u7801\u8fde\u63a5\u5230 ",(0,r.jsx)(s.code,{children:"/var/run/mysqld/mysqld.sock"})," \u7684 MySQL socket"]}),"\n",(0,r.jsxs)(s.li,{children:["\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"kubernetes"})," \u7684\u6570\u636e\u5e93"]}),"\n"]})]}),(0,r.jsxs)(t,{value:"etcd",children:[(0,r.jsxs)(s.p,{children:["\u6700\u5e38\u89c1\u7684 etcd \u7684 ",(0,r.jsx)(s.code,{children:"datastore-endpoint"})," \u53c2\u6570\u683c\u5f0f\u5982\u4e0b\uff1a"]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"https://etcd-host-1:2379,https://etcd-host-2:2379,https://etcd-host-3:2379"})}),(0,r.jsx)(s.p,{children:"\u4ee5\u4e0a\u5047\u8bbe\u4f7f\u7528\u7684\u662f\u5178\u578b\u7684\u4e09\u8282\u70b9 etcd \u96c6\u7fa4\u3002\u8be5\u53c2\u6570\u53ef\u4ee5\u518d\u63a5\u53d7\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684 etcd URL\u3002"})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function x(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var r=t(7294);const n={},d=r.createContext(n);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);