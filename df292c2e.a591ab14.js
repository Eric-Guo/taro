(window.webpackJsonp=window.webpackJsonp||[]).push([[1517],{1584:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(1792)),c=["components"],i={title:"LivePlayer",sidebar_label:"LivePlayer"},l={unversionedId:"components/media/live-player",id:"version-1.x/components/media/live-player",isDocsHomePage:!1,title:"LivePlayer",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e",source:"@site/versioned_docs/version-1.x/components/media/live-player.md",slug:"/components/media/live-player",permalink:"/taro/docs/1.x/components/media/live-player",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/components/media/live-player.md",version:"1.x",sidebar_label:"LivePlayer"},p=[],b={rightToc:p};function m(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h5",{id:"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e"},"\u5b9e\u65f6\u97f3\u89c6\u9891\u64ad\u653e"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u7ec4\u4ef6 \u652f\u6301\u5ea6")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",{parentName:"tr",align:"center"},"H5"),Object(o.b)("th",{parentName:"tr",align:"center"},"ReactNative"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(o.b)("td",{parentName:"tr",align:"center"},"x"),Object(o.b)("td",{parentName:"tr",align:"center"},"x")))),Object(o.b)("p",null,"\u5c0f\u7a0b\u5e8f\u5168\u90e8\u652f\u6301\uff0c\u5c5e\u6027\u53c2\u8003",Object(o.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html"},"live-player"),"\u3002\u5c5e\u6027\u503c\u8bf7\u6539\u5199\u4e3a\u9a7c\u5cf0\u5f0f\u547d\u540d\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 LivePlayer \u7ec4\u4ef6\nimport { LivePlayer } from '@tarojs/components'\n\nclass App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n")))}m.isMDXComponent=!0},1792:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=b(r),s=n,d=m["".concat(c,".").concat(s)]||m[s]||u[s]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);