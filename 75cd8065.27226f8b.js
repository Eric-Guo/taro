(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{1792:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var b=n(0),l=n.n(b);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{};var n,b,l=function(e,t){if(null==e)return{};var n,b,l={},r=Object.keys(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)n=r[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=l.a.createContext({}),j=function(e){var t=l.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=j(e.components);return l.a.createElement(d.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},o=l.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,d=O(e,["components","mdxType","originalType","parentName"]),u=j(n),o=b,p=u["".concat(c,".").concat(o)]||u[o]||i[o]||r;return n?l.a.createElement(p,a(a({ref:t},d),{},{components:n})):l.a.createElement(p,a({ref:t},d))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=n.length,c=new Array(r);c[0]=o;var a={};for(var O in t)hasOwnProperty.call(t,O)&&(a[O]=t[O]);a.originalType=e,a.mdxType="string"==typeof e?e:b,c[1]=a;for(var d=2;d<r;d++)c[d]=n[d];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},1793:function(e,t,n){"use strict";function b(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(l&&(l+=" "),l+=t);return l}},1794:function(e,t,n){"use strict";var b=n(0),l=n(1795);t.a=function(){var e=Object(b.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1795:function(e,t,n){"use strict";var b=n(0),l=Object(b.createContext)(void 0);t.a=l},1796:function(e,t,n){"use strict";var b=n(0),l=n.n(b),r=n(1794),c=n(1793),a=n(53),O=n.n(a),d=37,j=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,u=e.defaultValue,i=e.values,o=e.groupId,p=e.className,s=Object(r.a)(),m=s.tabGroupChoices,g=s.setTabGroupChoices,N=Object(b.useState)(u),y=N[0],v=N[1];if(null!=o){var h=m[o];null!=h&&h!==y&&i.some((function(e){return e.value===h}))&&v(h)}var P=function(e){v(e),null!=o&&g(o,e)},f=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},p)},i.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",O.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case j:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(f,e.target,e)},onFocus:function(){return P(t)},onClick:function(){P(t)}},n)}))),t?Object(b.cloneElement)(a.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(b.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},1797:function(e,t,n){"use strict";var b=n(0),l=n.n(b);t.a=function(e){var t=e.children,n=e.hidden,b=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:b},t)}},870:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return j})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return o}));var b=n(3),l=n(7),r=(n(0),n(1792)),c=n(1796),a=n(1797),O=["components"],d={title:"LivePusher",sidebar_label:"LivePusher"},j={unversionedId:"components/media/live-pusher",id:"version-3.x/components/media/live-pusher",isDocsHomePage:!1,title:"LivePusher",description:"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record",source:"@site/versioned_docs/version-3.x/components/media/live-pusher.md",slug:"/components/media/live-pusher",permalink:"/taro/docs/components/media/live-pusher",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/media/live-pusher.md",version:"3.x",sidebar_label:"LivePusher",sidebar:"version-3.x/components",previous:{title:"LivePlayer",permalink:"/taro/docs/components/media/live-player"},next:{title:"Video",permalink:"/taro/docs/components/media/video"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"LivePusherProps",id:"livepusherprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"orientation",id:"orientation",children:[]},{value:"localMirror",id:"localmirror",children:[]},{value:"audioReverbType",id:"audioreverbtype",children:[]},{value:"audioVolumeType",id:"audiovolumetype",children:[]},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",children:[]},{value:"onNetstatusEventDetail",id:"onnetstatuseventdetail",children:[]},{value:"onErrorEventDetail",id:"onerroreventdetail",children:[]},{value:"onBgmProgressEventDetail",id:"onbgmprogresseventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:u};function o(e){var t=e.components,n=Object(l.a)(e,O);return Object(r.b)("wrapper",Object(b.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record"),Object(r.b)("p",null,"\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u300c\u5f00\u53d1\u300d-\u300c\u63a5\u53e3\u8bbe\u7f6e\u300d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<LivePusherProps>\n")),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)(c.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(r.b)(a.a,{value:"React",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <LivePusher url='url' mode='RTC' autopush  />\n    )\n  }\n}\n"))),Object(r.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<template>\n  <live-pusher url="url" mode="RTC" :autopush="true"  />\n</template>\n')))),Object(r.b)("h2",{id:"livepusherprops"},"LivePusherProps"),Object(r.b)("p",null,"\u5b9e\u65f6\u97f3\u89c6\u9891\u5f55\u5236\u3002\n\u9700\u8981\u7528\u6237\u6388\u6743 scope.camera\u3001scope.record\n\u6682\u53ea\u9488\u5bf9\u56fd\u5185\u4e3b\u4f53\u5982\u4e0b\u7c7b\u76ee\u7684\u5c0f\u7a0b\u5e8f\u5f00\u653e\uff0c\u9700\u8981\u5148\u901a\u8fc7\u7c7b\u76ee\u5ba1\u6838\uff0c\u518d\u5728\u5c0f\u7a0b\u5e8f\u7ba1\u7406\u540e\u53f0\uff0c\u201c\u8bbe\u7f6e\u201d-\u201c\u63a5\u53e3\u8bbe\u7f6e\u201d\u4e2d\u81ea\u52a9\u5f00\u901a\u8be5\u7ec4\u4ef6\u6743\u9650\u3002"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"url"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a8\u6d41\u5730\u5740\u3002\u76ee\u524d\u4ec5\u652f\u6301 rtmp \u683c\u5f0f")),Object(r.b)("tr",null,Object(r.b)("td",null,"mode"),Object(r.b)("td",null,Object(r.b)("code",null,'"SD" | "HD" | "FHD" | "RTC"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"RTC"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"SD\uff08\u6807\u6e05\uff09, HD\uff08\u9ad8\u6e05\uff09, FHD\uff08\u8d85\u6e05\uff09, RTC\uff08\u5b9e\u65f6\u901a\u8bdd\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"autopush"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u81ea\u52a8\u63a8\u6d41")),Object(r.b)("tr",null,Object(r.b)("td",null,"muted"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u9759\u97f3\u3002\u5373\u5c06\u5e9f\u5f03\uff0c\u53ef\u7528 enable-mic \u66ff\u4ee3",Object(r.b)("br",null),Object(r.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(r.b)("tr",null,Object(r.b)("td",null,"enableCamera"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"true")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5f00\u542f\u6444\u50cf\u5934")),Object(r.b)("tr",null,Object(r.b)("td",null,"autoFocus"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"true")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u81ea\u52a8\u805a\u96c6")),Object(r.b)("tr",null,Object(r.b)("td",null,"orientation"),Object(r.b)("td",null,Object(r.b)("code",null,'"vertical" | "horizontal"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"vertical"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u753b\u9762\u65b9\u5411")),Object(r.b)("tr",null,Object(r.b)("td",null,"beauty"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"0")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u7f8e\u989c\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),Object(r.b)("tr",null,Object(r.b)("td",null,"whiteness"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"0")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u7f8e\u767d\uff0c\u53d6\u503c\u8303\u56f4 0-9 \uff0c0 \u8868\u793a\u5173\u95ed")),Object(r.b)("tr",null,Object(r.b)("td",null,"aspect"),Object(r.b)("td",null,Object(r.b)("code",null,'"9:16" | "3:4"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"9:16"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5bbd\u9ad8\u6bd4\uff0c\u53ef\u9009\u503c\u6709 3:4, 9:16")),Object(r.b)("tr",null,Object(r.b)("td",null,"minBitrate"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"200")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6700\u5c0f\u7801\u7387")),Object(r.b)("tr",null,Object(r.b)("td",null,"maxBitrate"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"1000")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6700\u5927\u7801\u7387")),Object(r.b)("tr",null,Object(r.b)("td",null,"audioQuality"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"high"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u9ad8\u97f3\u8d28(48KHz)\u6216\u4f4e\u97f3\u8d28(16KHz)\uff0c\u503c\u4e3ahigh, low")),Object(r.b)("tr",null,Object(r.b)("td",null,"waitingImage"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u63a8\u6d41\u7684\u7b49\u5f85\u753b\u9762")),Object(r.b)("tr",null,Object(r.b)("td",null,"waitingImageHash"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u7b49\u5f85\u753b\u9762\u8d44\u6e90\u7684MD5\u503c")),Object(r.b)("tr",null,Object(r.b)("td",null,"zoom"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8c03\u6574\u7126\u8ddd")),Object(r.b)("tr",null,Object(r.b)("td",null,"devicePosition"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"front"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u524d\u7f6e\u6216\u540e\u7f6e\uff0c\u503c\u4e3afront, back")),Object(r.b)("tr",null,Object(r.b)("td",null,"backgroundMute"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8fdb\u5165\u540e\u53f0\u65f6\u662f\u5426\u9759\u97f3")),Object(r.b)("tr",null,Object(r.b)("td",null,"mirror"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",Object(r.b)("br",null),Object(r.b)("strong",null,"\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(r.b)("tr",null,Object(r.b)("td",null,"remoteMirror"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u8bbe\u7f6e\u63a8\u6d41\u753b\u9762\u662f\u5426\u955c\u50cf\uff0c\u4ea7\u751f\u7684\u6548\u679c\u5728 LivePlayer \u53cd\u5e94\u5230",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("strong",null,"Note:")," \u540c mirror \u5c5e\u6027\uff0c\u540e\u7eed mirror \u5c06\u5e9f\u5f03")),Object(r.b)("tr",null,Object(r.b)("td",null,"localMirror"),Object(r.b)("td",null,Object(r.b)("code",null,'"auto" | "enable" | "disable"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"auto"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a7\u5236\u672c\u5730\u9884\u89c8\u753b\u9762\u662f\u5426\u955c\u50cf")),Object(r.b)("tr",null,Object(r.b)("td",null,"audioReverbType"),Object(r.b)("td",null,Object(r.b)("code",null,"0 | 1 | 2 | 3 | 4 | 5 | 6 | 7")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"0")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u97f3\u9891\u6df7\u54cd\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"enableMic"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"true")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u5f00\u542f\u6216\u5173\u95ed\u9ea6\u514b\u98ce")),Object(r.b)("tr",null,Object(r.b)("td",null,"enableAgc"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u81ea\u52a8\u589e\u76ca")),Object(r.b)("tr",null,Object(r.b)("td",null,"enableAns"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"false")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u662f\u5426\u5f00\u542f\u97f3\u9891\u566a\u58f0\u6291\u5236")),Object(r.b)("tr",null,Object(r.b)("td",null,"audioVolumeType"),Object(r.b)("td",null,Object(r.b)("code",null,'"media" | "voicecall"')),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,'"voicecall"')),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u97f3\u91cf\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"videoWidth"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"360")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u5bbd\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"videoHeight"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",{style:{textAlign:"center"}},Object(r.b)("code",null,"640")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u4e0a\u63a8\u7684\u89c6\u9891\u6d41\u7684\u5206\u8fa8\u7387\u9ad8\u5ea6")),Object(r.b)("tr",null,Object(r.b)("td",null,"onStateChange"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0cdetail = ","{code}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onNetstatus"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onNetstatusEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u7f51\u7edc\u72b6\u6001\u901a\u77e5\uff0cdetail = ","{info}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onError"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u6e32\u67d3\u9519\u8bef\u4e8b\u4ef6\uff0cdetail = ","{errMsg, errCode}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onBgmStart"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<any>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u80cc\u666f\u97f3\u5f00\u59cb\u64ad\u653e\u65f6\u89e6\u53d1")),Object(r.b)("tr",null,Object(r.b)("td",null,"onBgmProgress"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<onBgmProgressEventDetail>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u80cc\u666f\u97f3\u8fdb\u5ea6\u53d8\u5316\u65f6\u89e6\u53d1\uff0cdetail = ","{progress, duration}")),Object(r.b)("tr",null,Object(r.b)("td",null,"onBgmComplete"),Object(r.b)("td",null,Object(r.b)("code",null,"BaseEventOrigFunction<any>")),Object(r.b)("td",{style:{textAlign:"center"}}),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u80cc\u666f\u97f3\u64ad\u653e\u5b8c\u6210\u65f6\u89e6\u53d1")))),Object(r.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.url"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.mode"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.autopush"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.muted"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableCamera"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.autoFocus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.orientation"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.beauty"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.whiteness"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.aspect"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.minBitrate"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.maxBitrate"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioQuality"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.waitingImage"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.waitingImageHash"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.zoom"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.devicePosition"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.backgroundMute"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.mirror"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.remoteMirror"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.localMirror"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioReverbType"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableMic"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableAgc"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.enableAns"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.audioVolumeType"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.videoWidth"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.videoHeight"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.onStateChange"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.onNetstatus"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.onError"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmStart"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmProgress"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusherProps.onBgmComplete"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("h3",{id:"orientation"},"orientation"),Object(r.b)("p",null,"orientation \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"vertical"),Object(r.b)("td",null,"\u7ad6\u76f4")),Object(r.b)("tr",null,Object(r.b)("td",null,"horizontal"),Object(r.b)("td",null,"\u6c34\u5e73")))),Object(r.b)("h3",{id:"localmirror"},"localMirror"),Object(r.b)("p",null,"localMirror \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"auto"),Object(r.b)("td",null,"\u524d\u7f6e\u6444\u50cf\u5934\u955c\u50cf\uff0c\u540e\u7f6e\u6444\u50cf\u5934\u4e0d\u955c\u50cf")),Object(r.b)("tr",null,Object(r.b)("td",null,"enable"),Object(r.b)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u955c\u50cf")),Object(r.b)("tr",null,Object(r.b)("td",null,"disable"),Object(r.b)("td",null,"\u524d\u540e\u7f6e\u6444\u50cf\u5934\u5747\u4e0d\u955c\u50cf")))),Object(r.b)("h3",{id:"audioreverbtype"},"audioReverbType"),Object(r.b)("p",null,"audioReverbType \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"0"),Object(r.b)("td",null,"\u5173\u95ed")),Object(r.b)("tr",null,Object(r.b)("td",null,"1"),Object(r.b)("td",null,"KTV")),Object(r.b)("tr",null,Object(r.b)("td",null,"2"),Object(r.b)("td",null,"\u5c0f\u623f\u95f4")),Object(r.b)("tr",null,Object(r.b)("td",null,"3"),Object(r.b)("td",null,"\u5927\u4f1a\u5802")),Object(r.b)("tr",null,Object(r.b)("td",null,"4"),Object(r.b)("td",null,"\u4f4e\u6c89")),Object(r.b)("tr",null,Object(r.b)("td",null,"5"),Object(r.b)("td",null,"\u6d2a\u4eae")),Object(r.b)("tr",null,Object(r.b)("td",null,"6"),Object(r.b)("td",null,"\u91d1\u5c5e\u58f0")),Object(r.b)("tr",null,Object(r.b)("td",null,"7"),Object(r.b)("td",null,"\u78c1\u6027")))),Object(r.b)("h3",{id:"audiovolumetype"},"audioVolumeType"),Object(r.b)("p",null,"audioVolumeType \u7684\u5408\u6cd5\u503c"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"media"),Object(r.b)("td",null,"\u5a92\u4f53\u97f3\u91cf")),Object(r.b)("tr",null,Object(r.b)("td",null,"voicecall"),Object(r.b)("td",null,"\u901a\u8bdd\u97f3\u91cf")))),Object(r.b)("h3",{id:"onstatechangeeventdetail"},"onStateChangeEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"code"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u72b6\u6001\u7801")))),Object(r.b)("h3",{id:"onnetstatuseventdetail"},"onNetstatusEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"info"),Object(r.b)("td",null,Object(r.b)("code",null,"netStatus")),Object(r.b)("td",null,"\u7f51\u7edc\u72b6\u6001")))),Object(r.b)("h3",{id:"onerroreventdetail"},"onErrorEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u9519\u8bef\u4fe1\u606f")),Object(r.b)("tr",null,Object(r.b)("td",null,"errCode"),Object(r.b)("td",null,Object(r.b)("code",null,"string | number")),Object(r.b)("td",null,"\u9519\u8bef\u7801")))),Object(r.b)("h3",{id:"onbgmprogresseventdetail"},"onBgmProgressEventDetail"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"progress"),Object(r.b)("td",null,Object(r.b)("code",null,"any")),Object(r.b)("td",null,"\u8fdb\u5c55")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,Object(r.b)("code",null,"number")),Object(r.b)("td",null,"\u6301\u7eed\u65f6\u95f4")))),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"LivePusher"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))))}o.isMDXComponent=!0}}]);