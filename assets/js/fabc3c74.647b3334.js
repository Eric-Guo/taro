(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[69567],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),g=a,m=k["".concat(c,".").concat(g)]||k[g]||u[g]||l;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},34766:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i=["components"],o={title:"NavigationBar",sidebar_label:"NavigationBar"},c=void 0,p={unversionedId:"components/navigation-bar",id:"version-2.x/components/navigation-bar",isDocsHomePage:!1,title:"NavigationBar",description:"\u9875\u9762\u5bfc\u822a\u6761\u914d\u7f6e\u8282\u70b9\uff0c\u7528\u4e8e\u6307\u5b9a\u5bfc\u822a\u680f\u7684\u4e00\u4e9b\u5c5e\u6027\u3002\u53ea\u80fd\u662f PageMeta \u7ec4\u4ef6\u5185\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u9700\u8981\u914d\u5408\u5b83\u4e00\u540c\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-2.x/components/navigation-bar.md",sourceDirName:"components",slug:"/components/navigation-bar",permalink:"/taro/docs/2.x/components/navigation-bar",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/navigation-bar.md",version:"2.x",frontMatter:{title:"NavigationBar",sidebar_label:"NavigationBar"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"NavigationBarProps",id:"navigationbarprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u9875\u9762\u5bfc\u822a\u6761\u914d\u7f6e\u8282\u70b9\uff0c\u7528\u4e8e\u6307\u5b9a\u5bfc\u822a\u680f\u7684\u4e00\u4e9b\u5c5e\u6027\u3002\u53ea\u80fd\u662f PageMeta \u7ec4\u4ef6\u5185\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\uff0c\u9700\u8981\u914d\u5408\u5b83\u4e00\u540c\u4f7f\u7528\u3002\n\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u83b7\u5f97\u7c7b\u4f3c\u4e8e\u8c03\u7528 Taro.setNavigationBarTitle Taro.setNavigationBarColor \u7b49\u63a5\u53e3\u8c03\u7528\u7684\u6548\u679c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<NavigationBarProps>\n")),(0,l.kt)("h2",{id:"navigationbarprops"},"NavigationBarProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5bfc\u822a\u6761\u6807\u9898")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"loading"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u5728\u5bfc\u822a\u6761\u663e\u793a loading \u52a0\u8f7d\u63d0\u793a")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"frontColor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5bfc\u822a\u6761\u524d\u666f\u989c\u8272\u503c\uff0c\u5305\u62ec\u6309\u94ae\u3001\u6807\u9898\u3001\u72b6\u6001\u680f\u7684\u989c\u8272\uff0c\u4ec5\u652f\u6301 #ffffff \u548c #000000")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundColor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5bfc\u822a\u6761\u80cc\u666f\u989c\u8272\u503c\uff0c\u6709\u6548\u503c\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"colorAnimationDuration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6539\u53d8\u5bfc\u822a\u680f\u989c\u8272\u65f6\u7684\u52a8\u753b\u65f6\u957f\uff0c\u9ed8\u8ba4\u4e3a 0 \uff08\u5373\u6ca1\u6709\u52a8\u753b\u6548\u679c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"colorAnimationTimingFunc"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"linear" | "easeIn" | "easeOut" | "easeInOut"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"linear"')),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u6539\u53d8\u5bfc\u822a\u680f\u989c\u8272\u65f6\u7684\u52a8\u753b\u65b9\u5f0f\uff0c\u652f\u6301 linear \u3001 easeIn \u3001 easeOut \u548c easeInOut")))),(0,l.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.title"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.loading"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.frontColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.backgroundColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.colorAnimationDuration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBarProps.colorAnimationTimingFunc"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"NavigationBar"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0}}]);