(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19048],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=d(n),s=a,k=p["".concat(c,".").concat(s)]||p[s]||m[s]||i;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(67294),a=n(80944),i=n(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,d=39;var u=function(t){var e=t.lazy,n=t.block,u=t.defaultValue,m=t.values,p=t.groupId,s=t.className,k=(0,a.Z)(),h=k.tabGroupChoices,v=k.setTabGroupChoices,f=(0,r.useState)(u),g=f[0],b=f[1],y=r.Children.toArray(t.children),N=[];if(null!=p){var x=h[p];null!=x&&x!==g&&m.some((function(t){return t.value===x}))&&b(x)}var w=function(t){var e=t.currentTarget,n=N.indexOf(e),r=m[n].value;b(r),null!=p&&(v(p,r),setTimeout((function(){var t,n,r,a,i,l,c,d;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,i=t.right,l=window,c=l.innerHeight,d=l.innerWidth,n>=0&&i<=d&&a<=c&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},M=function(t){var e,n;switch(t.keyCode){case d:var r=N.indexOf(t.target)+1;n=N[r]||N[0];break;case c:var a=N.indexOf(t.target)-1;n=N[a]||N[N.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},s)},m.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:g===e?0:-1,"aria-selected":g===e,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:M,onFocus:w,onClick:w},n)}))),e?(0,r.cloneElement)(y.filter((function(t){return t.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==g})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),a=n(79443);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t}},75338:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l=n(41395),o=n(58215),c=["components"],d={title:"matchMedia",sidebar_label:"matchMedia"},u=void 0,m={unversionedId:"components/viewContainer/match-media",id:"version-3.x/components/viewContainer/match-media",isDocsHomePage:!1,title:"matchMedia",description:"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/match-media.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/match-media",permalink:"/taro/docs/components/viewContainer/match-media",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/match-media.md",version:"3.x",frontMatter:{title:"matchMedia",sidebar_label:"matchMedia"},sidebar:"version-3.x/components",previous:{title:"CoverImage",permalink:"/taro/docs/components/viewContainer/cover-image"},next:{title:"Icon",permalink:"/taro/docs/components/base/icon"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"matchMediaProps",id:"matchmediaprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]}],s={toc:p};function k(t){var e=t.components,n=(0,a.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b9e\u73b0\u201c\u9875\u9762\u5bbd\u9ad8\u5728\u67d0\u4e2a\u8303\u56f4\u65f6\u624d\u5c55\u793a\u67d0\u4e2a\u533a\u57df\u201d\u8fd9\u6837\u7684\u6548\u679c\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MatchMediaProps>\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia minWidth="300" maxWidth="600">\n          <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n        <MatchMedia minHeight="400" orientation="landscape">\n          <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),(0,i.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n  </view>\n</template>\n')))),(0,i.kt)("h2",{id:"matchmediaprops"},"matchMediaProps"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u53c2\u6570"),(0,i.kt)("th",null,"\u7c7b\u578b"),(0,i.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,i.kt)("th",null,"\u8bf4\u660e"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"minWidth"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u9875\u9762\u6700\u5c0f\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"maxWidth"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u9875\u9762\u6700\u5927\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"width"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u9875\u9762\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"minHeight"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u9875\u9762\u6700\u5c0f\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"maxHeight"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u9875\u9762\u6700\u5927\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Height"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u9875\u9762\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"orientation"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,i.kt)("td",null,"\u5c4f\u5e55\u65b9\u5411\uff08 landscape \u6216 portrait \uff09")))),(0,i.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.minWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.maxWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.width"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.minHeight"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.maxHeight"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.Height"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"matchMediaProps.orientation"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);