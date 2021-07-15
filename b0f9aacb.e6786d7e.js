(window.webpackJsonp=window.webpackJsonp||[]).push([[1209],{1276:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),l=(r(0),r(1792)),a=["components"],o={title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},i={unversionedId:"apis/network/mdns/startLocalServiceDiscovery",id:"version-3.x/apis/network/mdns/startLocalServiceDiscovery",isDocsHomePage:!1,title:"Taro.startLocalServiceDiscovery(option)",description:"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-3.x/apis/network/mdns/startLocalServiceDiscovery.md",slug:"/apis/network/mdns/startLocalServiceDiscovery",permalink:"/taro/docs/apis/network/mdns/startLocalServiceDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/mdns/startLocalServiceDiscovery.md",version:"3.x",sidebar_label:"startLocalServiceDiscovery",sidebar:"version-3.x/API",previous:{title:"Taro.stopLocalServiceDiscovery(option)",permalink:"/taro/docs/apis/network/mdns/stopLocalServiceDiscovery"},next:{title:"Taro.onLocalServiceResolveFail(callback)",permalink:"/taro/docs/apis/network/mdns/onLocalServiceResolveFail"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"FailCallbackResult",id:"failcallbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={rightToc:b};function u(e){var t=e.components,r=Object(c.a)(e,a);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u5f00\u59cb\u641c\u7d22\u5c40\u57df\u7f51\u4e0b\u7684 mDNS \u670d\u52a1\u3002\u641c\u7d22\u7684\u7ed3\u679c\u4f1a\u901a\u8fc7 wx.onLocalService* \u4e8b\u4ef6\u8fd4\u56de\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"wx.startLocalServiceDiscovery \u662f\u4e00\u4e2a\u6d88\u8017\u6027\u80fd\u7684\u884c\u4e3a\uff0c\u5f00\u59cb 30 \u79d2\u540e\u4f1a\u81ea\u52a8 stop \u5e76\u6267\u884c wx.onLocalServiceDiscoveryStop \u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(l.b)("li",{parentName:"ol"},"\u5728\u8c03\u7528 wx.startLocalServiceDiscovery \u540e\uff0c\u5728\u8fd9\u6b21\u641c\u7d22\u884c\u4e3a\u505c\u6b62\u540e\u624d\u80fd\u53d1\u8d77\u4e0b\u6b21 wx.startLocalServiceDiscovery\u3002\u505c\u6b62\u672c\u6b21\u641c\u7d22\u884c\u4e3a\u7684\u64cd\u4f5c\u5305\u62ec\u8c03\u7528 wx.stopLocalServiceDiscovery \u548c 30 \u79d2\u540e\u7cfb\u7edf\u81ea\u52a8 stop \u672c\u6b21\u641c\u7d22\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"option"},"Option"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"complete"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"fail"),Object(l.b)("td",null,Object(l.b)("code",null,"(result: FailCallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.b)("tr",null,Object(l.b)("td",null,"success"),Object(l.b)("td",null,Object(l.b)("code",null,"(res: CallbackResult) => void")),Object(l.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h3",{id:"failcallbackresult"},"FailCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u9519\u8bef\u4fe1\u606f",Object(l.b)("br",null),Object(l.b)("br",null),"\u53ef\u9009\u503c\uff1a",Object(l.b)("br",null),"- 'invalid param': serviceType \u4e3a\u7a7a;",Object(l.b)("br",null),"- 'scan task already exist': \u5728\u5f53\u524d startLocalServiceDiscovery \u53d1\u8d77\u7684\u641c\u7d22\u672a\u505c\u6b62\u7684\u60c5\u51b5\u4e0b\uff0c\u518d\u6b21\u8c03\u7528 startLocalServiceDiscovery;")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.startLocalServiceDiscovery"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0},1792:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),c=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,O=u["".concat(a,".").concat(d)]||u[d]||p[d]||l;return r?c.a.createElement(O,o(o({ref:t},b),{},{components:r})):c.a.createElement(O,o({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var b=2;b<l;b++)a[b]=r[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);