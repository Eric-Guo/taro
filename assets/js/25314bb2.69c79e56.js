(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[50687],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return s}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=l(r),s=o,b=m["".concat(i,".").concat(s)]||m[s]||f[s]||a;return r?n.createElement(b,c(c({ref:e},p),{},{components:r})):n.createElement(b,c({ref:e},p))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:o,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66090:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c=["components"],u={slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},i=void 0,l={permalink:"/taro/blog/2018-12-18-taro-1-2",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-12-18-taro-1-2.md",source:"@site/blog/2018-12-18-taro-1-2.md",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",description:"\u5728\u8ddd\u79bb Taro 1.1 \u53d1\u5e03 \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 500 \u591a\u6b21\u63d0\u4ea4\u548c 17 \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002",date:"2018-12-18T00:00:00.000Z",formattedDate:"December 18, 2018",tags:[],readingTime:1.61,truncated:!0,prevItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2019-02-25-taro-ui-2.0"},nextItem:{title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2018-11-05-taro-1-1"}},p=[],f={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u8ddd\u79bb ",(0,a.kt)("a",{parentName:"p",href:"https://aotu.io/notes/2018/11/05/taro-1-1/"},"Taro 1.1 \u53d1\u5e03")," \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"500")," \u591a\u6b21\u63d0\u4ea4\u548c ",(0,a.kt)("strong",{parentName:"p"},"17")," \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002"),(0,a.kt)("p",null,"Taro 1.2 \u6bd4\u8d77 Taro 1.1 \u548c\u5176\u5b83\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\uff0c\u589e\u52a0\u4e86\u8bb8\u591a\u9996\u6b21\u5728\u5c0f\u7a0b\u5e8f\u6846\u67b6\u4e0a\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#taroize"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tt"},"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#css"},"CSS Modules \u652f\u6301")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mobx"},"MobX \u652f\u6301"))))}m.isMDXComponent=!0}}]);