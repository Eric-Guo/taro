(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{1792:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,s=d["".concat(b,".").concat(p)]||d[p]||m[p]||c;return n?r.a.createElement(s,i(i({ref:t},o),{},{components:n})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1793:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},1794:function(e,t,n){"use strict";var a=n(0),r=n(1795);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1795:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},1796:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1794),b=n(1793),i=n(53),l=n.n(i),o=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,d=e.defaultValue,m=e.values,p=e.groupId,s=e.className,O=Object(c.a)(),j=O.tabGroupChoices,h=O.setTabGroupChoices,f=Object(a.useState)(d),g=f[0],v=f[1];if(null!=p){var y=j[p];null!=y&&y!==g&&m.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=p&&h(p,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},s)},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(b.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(i.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},1797:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},527:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(1792)),b=n(1796),i=n(1797),l=["components"],o={title:"matchMedia",sidebar_label:"matchMedia"},u={unversionedId:"components/viewContainer/match-media",id:"components/viewContainer/match-media",isDocsHomePage:!1,title:"matchMedia",description:"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002",source:"@site/docs/components/viewContainer/match-media.md",slug:"/components/viewContainer/match-media",permalink:"/taro/docs/next/components/viewContainer/match-media",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/components/viewContainer/match-media.md",version:"current",sidebar_label:"matchMedia",sidebar:"components",previous:{title:"CoverImage",permalink:"/taro/docs/next/components/viewContainer/cover-image"},next:{title:"Icon",permalink:"/taro/docs/next/components/base/icon"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"matchMediaProps",id:"matchmediaprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]}],m={rightToc:d};function p(e){var t=e.components,n=Object(r.a)(e,l);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002"),Object(c.b)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b9e\u73b0\u201c\u9875\u9762\u5bbd\u9ad8\u5728\u67d0\u4e2a\u8303\u56f4\u65f6\u624d\u5c55\u793a\u67d0\u4e2a\u533a\u57df\u201d\u8fd9\u6837\u7684\u6548\u679c\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MatchMediaProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(b.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia minWidth="300" maxWidth="600">\n          <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n        <MatchMedia minHeight="400" orientation="landscape">\n          <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),Object(c.b)(i.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n  </view>\n</template>\n')))),Object(c.b)("h2",{id:"matchmediaprops"},"matchMediaProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"minWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5c0f\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5927\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"minHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5c0f\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5927\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"Height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"orientation"),Object(c.b)("td",null,"string"),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5c4f\u5e55\u65b9\u5411\uff08 landscape \u6216 portrait \uff09")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.minWidth"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.maxWidth"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.width"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.minHeight"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.maxHeight"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.Height"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"matchMediaProps.orientation"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);