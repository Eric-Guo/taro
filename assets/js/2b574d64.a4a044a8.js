(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[3674],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||o;return n?r.createElement(m,a(a({ref:e},p),{},{components:n})):r.createElement(m,a({ref:e},p))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2154:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(22122),l=n(19756),o=(n(67294),n(3905)),a=["components"],i={title:"Taro.pageScrollTo(option)",sidebar_label:"pageScrollTo"},c=void 0,u={unversionedId:"apis/ui/scroll/pageScrollTo",id:"version-2.x/apis/ui/scroll/pageScrollTo",isDocsHomePage:!1,title:"Taro.pageScrollTo(option)",description:"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\uff0c\u652f\u6301\u9009\u62e9\u5668\u548c\u6eda\u52a8\u8ddd\u79bb\u4e24\u79cd\u65b9\u5f0f\u5b9a\u4f4d",source:"@site/versioned_docs/version-2.x/apis/ui/scroll/pageScrollTo.md",sourceDirName:"apis/ui/scroll",slug:"/apis/ui/scroll/pageScrollTo",permalink:"/taro/docs/2.x/apis/ui/scroll/pageScrollTo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/ui/scroll/pageScrollTo.md",version:"2.x",frontMatter:{title:"Taro.pageScrollTo(option)",sidebar_label:"pageScrollTo"},sidebar:"version-2.x/API",previous:{title:"startPullDownRefresh",permalink:"/taro/docs/2.x/apis/ui/pull-down-refresh/startPullDownRefresh"},next:{title:"createAnimation",permalink:"/taro/docs/2.x/apis/ui/animation/createAnimation"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={toc:p};function d(t){var e=t.components,n=(0,l.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c06\u9875\u9762\u6eda\u52a8\u5230\u76ee\u6807\u4f4d\u7f6e\uff0c\u652f\u6301\u9009\u62e9\u5668\u548c\u6eda\u52a8\u8ddd\u79bb\u4e24\u79cd\u65b9\u5f0f\u5b9a\u4f4d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"selector \u8bed\u6cd5"),"\nselector\u7c7b\u4f3c\u4e8e CSS \u7684\u9009\u62e9\u5668\uff0c\u4f46\u4ec5\u652f\u6301\u4e0b\u5217\u8bed\u6cd5\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ID\u9009\u62e9\u5668\uff1a#the-id"),(0,o.kt)("li",{parentName:"ul"},"class\u9009\u62e9\u5668\uff08\u53ef\u4ee5\u8fde\u7eed\u6307\u5b9a\u591a\u4e2a\uff09\uff1a.a-class.another-class"),(0,o.kt)("li",{parentName:"ul"},"\u5b50\u5143\u7d20\u9009\u62e9\u5668\uff1a.the-parent > .the-child"),(0,o.kt)("li",{parentName:"ul"},"\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor .the-descendant"),(0,o.kt)("li",{parentName:"ul"},"\u8de8\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u540e\u4ee3\u9009\u62e9\u5668\uff1a.the-ancestor >>> .the-descendant"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u9009\u62e9\u5668\u7684\u5e76\u96c6\uff1a#a-node, .some-other-nodes")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"duration"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u6eda\u52a8\u52a8\u753b\u7684\u65f6\u957f\uff0c\u5355\u4f4d ms")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scrollTop"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u6eda\u52a8\u5230\u9875\u9762\u7684\u76ee\u6807\u4f4d\u7f6e\uff0c\u5355\u4f4d px")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"selector"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u9009\u62e9\u5668, css selector")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: CallbackResult) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,o.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.pageScrollTo({\n  scrollTop: 0,\n  duration: 300\n})\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.pageScrollTo"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);