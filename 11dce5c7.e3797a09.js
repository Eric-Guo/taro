(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1792:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,f=p["".concat(b,".").concat(u)]||p[u]||O[u]||c;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var l=2;l<c;l++)b[l]=n[l];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(1792)),b=["components"],o={title:"OffscreenCanvas",sidebar_label:"OffscreenCanvas"},i={unversionedId:"apis/canvas/OffscreenCanvas",id:"version-3.x/apis/canvas/OffscreenCanvas",isDocsHomePage:!1,title:"OffscreenCanvas",description:"\u79bb\u5c4f canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createOffscreenCanvas \u521b\u5efa\u3002",source:"@site/versioned_docs/version-3.x/apis/canvas/OffscreenCanvas.md",slug:"/apis/canvas/OffscreenCanvas",permalink:"/taro/docs/apis/canvas/OffscreenCanvas",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/OffscreenCanvas.md",version:"3.x",sidebar_label:"OffscreenCanvas",sidebar:"version-3.x/API",previous:{title:"ImageData",permalink:"/taro/docs/apis/canvas/ImageData"},next:{title:"RenderingContext",permalink:"/taro/docs/apis/canvas/RenderingContext"}},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"getContext",id:"getcontext",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,b);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u79bb\u5c4f canvas \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createOffscreenCanvas \u521b\u5efa\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"getcontext"},"getContext"),Object(c.b)("p",null,"\u8be5\u65b9\u6cd5\u8fd4\u56de OffscreenCanvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587"),Object(c.b)("hr",null),Object(c.b)("p",null,"\u5f53\u524d\u4ec5\u652f\u6301\u83b7\u53d6 WebGL \u7ed8\u56fe\u4e0a\u4e0b\u6587"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(contextType: string) => RenderingContext\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"contextType"),Object(c.b)("td",null,Object(c.b)("code",null,"string"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"OffscreenCanvas.getContext"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"OffscreenCanvas.getContext"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);