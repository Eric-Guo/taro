(window.webpackJsonp=window.webpackJsonp||[]).push([[1496],{1563:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(1792)),i=["components"],c={title:"Taro.pauseVoice()",sidebar_label:"pauseVoice"},p={unversionedId:"apis/multimedia/audio/pauseVoice",id:"version-1.x/apis/multimedia/audio/pauseVoice",isDocsHomePage:!1,title:"Taro.pauseVoice()",description:"\u6682\u505c\u6b63\u5728\u64ad\u653e\u7684\u8bed\u97f3\u3002\u518d\u6b21\u8c03\u7528 Taro.playVoice \u64ad\u653e\u540c\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u4ece\u6682\u505c\u5904\u5f00\u59cb\u64ad\u653e\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u64ad\u653e\uff0c\u9700\u8981\u5148\u8c03\u7528 Taro.stopVoice\u3002",source:"@site/versioned_docs/version-1.x/apis/multimedia/audio/pauseVoice.md",slug:"/apis/multimedia/audio/pauseVoice",permalink:"/taro/docs/1.x/apis/multimedia/audio/pauseVoice",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/multimedia/audio/pauseVoice.md",version:"1.x",sidebar_label:"pauseVoice",sidebar:"version-1.x/API",previous:{title:"Taro.playVoice(OBJECT)",permalink:"/taro/docs/1.x/apis/multimedia/audio/playVoice"},next:{title:"Taro.stopVoice()",permalink:"/taro/docs/1.x/apis/multimedia/audio/stopVoice"}},l=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u6682\u505c\u6b63\u5728\u64ad\u653e\u7684\u8bed\u97f3\u3002\u518d\u6b21\u8c03\u7528 Taro.playVoice \u64ad\u653e\u540c\u4e00\u4e2a\u6587\u4ef6\u65f6\uff0c\u4f1a\u4ece\u6682\u505c\u5904\u5f00\u59cb\u64ad\u653e\u3002\u5982\u679c\u60f3\u4ece\u5934\u5f00\u59cb\u64ad\u653e\uff0c\u9700\u8981\u5148\u8c03\u7528 Taro.stopVoice\u3002"),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro from '@tarojs/taro'\n\nTaro.startRecord(params)\n  .then(res => {\n    const filePath = res.tempFilePath\n    Taro.playVoice({ filePath })\n\n    setTimeout(Taro.pauseVoice, 5000)\n  })\n")),Object(o.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"API"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"React Native"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Taro.pauseVoice"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"}),Object(o.b)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0},1792:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);