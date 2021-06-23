(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[60856],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81301:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],c={title:"RenderingContext",sidebar_label:"RenderingContext"},l=void 0,s={unversionedId:"apis/canvas/RenderingContext",id:"version-2.x/apis/canvas/RenderingContext",isDocsHomePage:!1,title:"RenderingContext",description:"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002",source:"@site/versioned_docs/version-2.x/apis/canvas/RenderingContext.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/RenderingContext",permalink:"/taro/docs/2.x/apis/canvas/RenderingContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/RenderingContext.md",version:"2.x",frontMatter:{title:"RenderingContext",sidebar_label:"RenderingContext"},sidebar:"version-2.x/API",previous:{title:"OffscreenCanvas",permalink:"/taro/docs/2.x/apis/canvas/OffscreenCanvas"},next:{title:"saveFile",permalink:"/taro/docs/2.x/apis/files/saveFile"}},p=[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Canvas \u7ed8\u56fe\u4e0a\u4e0b\u6587\u3002"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('2d') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 CanvasRenderingContext2D \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/2dcontext/"},"HTML Canvas 2D Context")," \u5b9a\u4e49\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Canvas.getContext('webgl') \u6216 OffscreenCanvas.getContext('webgl') \u63a5\u53e3\u53ef\u4ee5\u83b7\u53d6 WebGLRenderingContext \u5bf9\u8c61\uff0c\u5b9e\u73b0\u4e86 ",(0,o.kt)("a",{parentName:"li",href:"https://www.khronos.org/registry/webgl/specs/latest/1.0/"},"WebGL 1.0")," \u5b9a\u4e49\u7684\u6240\u6709\u5c5e\u6027\u3001\u65b9\u6cd5\u3001\u5e38\u91cf\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/RenderingContext.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"RenderingContext"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);