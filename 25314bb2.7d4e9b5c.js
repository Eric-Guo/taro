(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1792:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,s=b["".concat(c,".").concat(m)]||b[m]||f[m]||o;return r?a.a.createElement(s,i(i({ref:t},l),{},{components:r})):a.a.createElement(s,i({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},339:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1792)),c=["components"],i={slug:"2018-12-18-taro-1-2",title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},u={permalink:"/taro/blog/2018-12-18-taro-1-2",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-12-18-taro-1-2.md",source:"@site/blog/2018-12-18-taro-1-2.md",description:"\u5728\u8ddd\u79bb Taro 1.1 \u53d1\u5e03 \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 500 \u591a\u6b21\u63d0\u4ea4\u548c 17 \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002",date:"2018-12-18T00:00:00.000Z",tags:[],title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",readingTime:1.61,truncated:!0,prevItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2019-02-25-taro-ui-2.0"},nextItem:{title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2018-11-05-taro-1-1"}},l=[],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5728\u8ddd\u79bb ",Object(o.b)("a",{parentName:"p",href:"https://aotu.io/notes/2018/11/05/taro-1-1/"},"Taro 1.1 \u53d1\u5e03")," \u4e4b\u540e\u4e00\u4e2a\u6708\uff0c\u7ecf\u5386\u4e86 ",Object(o.b)("strong",{parentName:"p"},"500")," \u591a\u6b21\u63d0\u4ea4\u548c ",Object(o.b)("strong",{parentName:"p"},"17")," \u4e2a\u9884\u89c8\u7248\u672c\u7684\u8fed\u4ee3\u4e4b\u540e\uff0c\u6211\u4eec\u6709\u4fe1\u5fc3\u5728\u4eca\u5929\u53d1\u5e03 Taro 1.2 \u6b63\u5f0f\u7248\u3002"),Object(o.b)("p",null,"Taro 1.2 \u6bd4\u8d77 Taro 1.1 \u548c\u5176\u5b83\u7684\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u6846\u67b6\uff0c\u589e\u52a0\u4e86\u8bb8\u591a\u9996\u6b21\u5728\u5c0f\u7a0b\u5e8f\u6846\u67b6\u4e0a\u5b9e\u73b0\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#taroize"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u591a\u7aef\u5e94\u7528")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#tt"},"\u5b57\u8282\u8df3\u52a8\uff08\u5934\u6761\uff09\u5c0f\u7a0b\u5e8f\u652f\u6301")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#css"},"CSS Modules \u652f\u6301")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#mobx"},"MobX \u652f\u6301"))))}b.isMDXComponent=!0}}]);