(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1792:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),i=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=i(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(n),p=l,O=s["".concat(c,".").concat(p)]||s[p]||d[p]||r;return n?a.a.createElement(O,b(b({ref:t},u),{},{components:n})):a.a.createElement(O,b({ref:t},u))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,c=new Array(r);c[0]=p;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:l,c[1]=b;for(var u=2;u<r;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var l=n(3),a=n(7),r=(n(0),n(1792)),c=["components"],b={title:"Taro.onHCEMessage(callback)",sidebar_label:"onHCEMessage"},o={unversionedId:"apis/device/nfc/onHCEMessage",id:"apis/device/nfc/onHCEMessage",isDocsHomePage:!1,title:"Taro.onHCEMessage(callback)",description:"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c",source:"@site/docs/apis/device/nfc/onHCEMessage.md",slug:"/apis/device/nfc/onHCEMessage",permalink:"/taro/docs/next/apis/device/nfc/onHCEMessage",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/nfc/onHCEMessage.md",version:"current",sidebar_label:"onHCEMessage",sidebar:"API",previous:{title:"Taro.sendHCEMessage(option)",permalink:"/taro/docs/next/apis/device/nfc/sendHCEMessage"},next:{title:"Taro.offHCEMessage(callback)",permalink:"/taro/docs/next/apis/device/nfc/offHCEMessage"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]},{value:"messageType",id:"messagetype",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,c);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u76d1\u542c\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\uff0c\u4ec5\u80fd\u6ce8\u518c\u4e00\u4e2a\u76d1\u542c"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"callback"},"Callback"),Object(r.b)("p",null,"\u63a5\u6536 NFC \u8bbe\u5907\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"result"),Object(r.b)("td",null,Object(r.b)("code",null,"CallbackResult"))))),Object(r.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"data"),Object(r.b)("td",null,Object(r.b)("code",null,"ArrayBuffer")),Object(r.b)("td",null,Object(r.b)("code",null,"messageType=1")," \u65f6 ,\u5ba2\u6237\u7aef\u63a5\u6536\u5230 NFC \u8bbe\u5907\u7684\u6307\u4ee4")),Object(r.b)("tr",null,Object(r.b)("td",null,"messageType"),Object(r.b)("td",null,Object(r.b)("code",null,"1 | 2")),Object(r.b)("td",null,"\u6d88\u606f\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"reason"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,Object(r.b)("code",null,"messageType=2")," \u65f6\uff0c\u539f\u56e0")))),Object(r.b)("h3",{id:"messagetype"},"messageType"),Object(r.b)("p",null,"\u6d88\u606f\u7c7b\u578b"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"1"),Object(r.b)("td",null,"HCE APDU Command\u7c7b\u578b\uff0c\u5c0f\u7a0b\u5e8f\u9700\u5bf9\u6b64\u6307\u4ee4\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u8c03\u7528 sendHCEMessage \u63a5\u53e3\u8fd4\u56de\u5904\u7406\u6307\u4ee4")),Object(r.b)("tr",null,Object(r.b)("td",null,"2"),Object(r.b)("td",null,"\u8bbe\u5907\u79bb\u573a\u4e8b\u4ef6\u7c7b\u578b")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"Taro.onHCEMessage"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);