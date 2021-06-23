(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[98436],{3905:function(t,l,n){"use strict";n.d(l,{Zo:function(){return k},kt:function(){return p}});var e=n(67294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function u(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function a(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?u(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function d(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},u=Object.keys(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=e.createContext({}),c=function(t){var l=e.useContext(o),n=l;return t&&(n="function"==typeof t?t(l):a(a({},l),t)),n},k=function(t){var l=c(t.components);return e.createElement(o.Provider,{value:l},t.children)},i={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},s=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,u=t.originalType,o=t.parentName,k=d(t,["components","mdxType","originalType","parentName"]),s=c(n),p=r,m=s["".concat(o,".").concat(p)]||s[p]||i[p]||u;return n?e.createElement(m,a(a({ref:l},k),{},{components:n})):e.createElement(m,a({ref:l},k))}));function p(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=n.length,a=new Array(u);a[0]=s;var d={};for(var o in l)hasOwnProperty.call(l,o)&&(d[o]=l[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,a[1]=d;for(var c=2;c<u;c++)a[c]=n[c];return e.createElement.apply(null,a)}return e.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86694:function(t,l,n){"use strict";n.r(l),n.d(l,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return k},default:function(){return s}});var e=n(22122),r=n(19756),u=(n(67294),n(3905)),a=["components"],d={title:"Taro.scanCode(option)",sidebar_label:"scanCode"},o=void 0,c={unversionedId:"apis/device/scan/scancode",id:"version-3.x/apis/device/scan/scancode",isDocsHomePage:!1,title:"Taro.scanCode(option)",description:"\u8c03\u8d77\u5ba2\u6237\u7aef\u626b\u7801\u754c\u9762\uff0c\u626b\u7801\u6210\u529f\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u7ed3\u679c",source:"@site/versioned_docs/version-3.x/apis/device/scan/scancode.md",sourceDirName:"apis/device/scan",slug:"/apis/device/scan/scancode",permalink:"/taro/docs/apis/device/scan/scancode",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/scan/scancode.md",version:"3.x",frontMatter:{title:"Taro.scanCode(option)",sidebar_label:"scanCode"},sidebar:"version-3.x/API",previous:{title:"onMemoryWarning",permalink:"/taro/docs/apis/device/performance/onMemoryWarning"},next:{title:"vibrateShort",permalink:"/taro/docs/apis/device/vibrate/vibrateShort"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ScanType",id:"scantype",children:[]},{value:"QRType",id:"qrtype",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={toc:k};function s(t){var l=t.components,n=(0,r.Z)(t,a);return(0,u.kt)("wrapper",(0,e.Z)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u8c03\u8d77\u5ba2\u6237\u7aef\u626b\u7801\u754c\u9762\uff0c\u626b\u7801\u6210\u529f\u540e\u8fd4\u56de\u5bf9\u5e94\u7684\u7ed3\u679c"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},(0,u.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html"},"\u53c2\u8003\u6587\u6863"))),(0,u.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,u.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,u.kt)("h3",{id:"option"},"Option"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u7c7b\u578b"),(0,u.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"complete"),(0,u.kt)("td",null,(0,u.kt)("code",null,"(res: CallbackResult) => void")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"fail"),(0,u.kt)("td",null,(0,u.kt)("code",null,"(res: CallbackResult) => void")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"onlyFromCamera"),(0,u.kt)("td",null,(0,u.kt)("code",null,"boolean")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u662f\u5426\u53ea\u80fd\u4ece\u76f8\u673a\u626b\u7801\uff0c\u4e0d\u5141\u8bb8\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"scanType"),(0,u.kt)("td",null,(0,u.kt)("code",null,'("barCode" | "qrCode" | "datamatrix" | "pdf417")[]')),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u626b\u7801\u7c7b\u578b")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"success"),(0,u.kt)("td",null,(0,u.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,u.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,u.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,u.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u7c7b\u578b"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"charSet"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u6240\u626b\u7801\u7684\u5b57\u7b26\u96c6")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"path"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u5f53\u6240\u626b\u7684\u7801\u4e3a\u5f53\u524d\u5c0f\u7a0b\u5e8f\u4e8c\u7ef4\u7801\u65f6\uff0c\u4f1a\u8fd4\u56de\u6b64\u5b57\u6bb5\uff0c\u5185\u5bb9\u4e3a\u4e8c\u7ef4\u7801\u643a\u5e26\u7684 path")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"rawData"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u539f\u59cb\u6570\u636e\uff0cbase64\u7f16\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"result"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u6240\u626b\u7801\u7684\u5185\u5bb9")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"scanType"),(0,u.kt)("td",null,(0,u.kt)("code",null,'"QR_CODE" | "AZTEC" | "CODABAR" | "CODE_39" | "CODE_93" | "CODE_128" | "DATA_MATRIX" | "EAN_8" | "EAN_13" | "ITF" | "MAXICODE" | "PDF_417" | "RSS_14" | "RSS_EXPANDED" | "UPC_A" | "UPC_E" | "UPC_EAN_EXTENSION" | "WX_CODE" | "CODE_25"')),(0,u.kt)("td",null,"\u6240\u626b\u7801\u7684\u7c7b\u578b")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"errMsg"),(0,u.kt)("td",null,(0,u.kt)("code",null,"string")),(0,u.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,u.kt)("h3",{id:"scantype"},"ScanType"),(0,u.kt)("p",null,"\u626b\u7801\u7c7b\u578b"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"barCode"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"qrCode"),(0,u.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"datamatrix"),(0,u.kt)("td",null,"Data Matrix \u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"pdf417"),(0,u.kt)("td",null,"PDF417 \u6761\u7801")))),(0,u.kt)("h3",{id:"qrtype"},"QRType"),(0,u.kt)("p",null,"\u6240\u626b\u7801\u7684\u7c7b\u578b"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"\u53c2\u6570"),(0,u.kt)("th",null,"\u8bf4\u660e"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"QR_CODE"),(0,u.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"AZTEC"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"CODABAR"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"CODE_39"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"CODE_93"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"CODE_128"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"DATA_MATRIX"),(0,u.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"EAN_8"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"EAN_13"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"ITF"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"MAXICODE"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"PDF_417"),(0,u.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"RSS_14"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"RSS_EXPANDED"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"UPC_A"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"UPC_E"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"UPC_EAN_EXTENSION"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"WX_CODE"),(0,u.kt)("td",null,"\u4e8c\u7ef4\u7801")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"CODE_25"),(0,u.kt)("td",null,"\u4e00\u7ef4\u7801")))),(0,u.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u5141\u8bb8\u4ece\u76f8\u673a\u548c\u76f8\u518c\u626b\u7801\nTaro.scanCode({\n  success: (res) => {\n    console.log(res)\n  }\n})\n      // \u53ea\u5141\u8bb8\u4ece\u76f8\u673a\u626b\u7801\nTaro.scanCode({\n  onlyFromCamera: true,\n  success: (res) => {\n    console.log(res)\n  }\n})\n")),(0,u.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:"center"},"API"),(0,u.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,u.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,u.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:"center"},"Taro.scanCode"),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,u.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);