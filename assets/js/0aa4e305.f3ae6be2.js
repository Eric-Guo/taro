(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[44010],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),a=n(80944),l=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,c=39;var m=function(e){var t=e.lazy,n=e.block,m=e.defaultValue,p=e.values,u=e.groupId,d=e.className,h=(0,a.Z)(),k=h.tabGroupChoices,f=h.setTabGroupChoices,v=(0,r.useState)(m),b=v[0],T=v[1],g=r.Children.toArray(e.children),N=[];if(null!=u){var y=k[u];null!=y&&y!==b&&p.some((function(e){return e.value===y}))&&T(y)}var w=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;T(r),null!=u&&(f(u,r),setTimeout((function(){var e,n,r,a,l,o,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&l<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case s:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},28769:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=n(41395),i=n(58215),s=["components"],c={title:"\u6e32\u67d3 HTML"},m=void 0,p={unversionedId:"html",id:"version-3.x/html",isDocsHomePage:!1,title:"\u6e32\u67d3 HTML",description:"\u8bf7\u6ce8\u610f\uff1a\u672c\u7ae0\u8282\u6240\u6709\u5185\u5bb9\u53ea\u5728\u5c0f\u7a0b\u5e8f\u7aef\u8d77\u6548\u679c\u3002",source:"@site/versioned_docs/version-3.x/html.mdx",sourceDirName:".",slug:"/html",permalink:"/taro/docs/html",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/html.mdx",version:"3.x",frontMatter:{title:"\u6e32\u67d3 HTML"},sidebar:"version-3.x/docs",previous:{title:"Hooks",permalink:"/taro/docs/hooks"},next:{title:"\u63d2\u4ef6\u529f\u80fd",permalink:"/taro/docs/plugin"}},u=[{value:"\u81ea\u5b9a\u4e49 HTML \u6837\u5f0f",id:"\u81ea\u5b9a\u4e49-html-\u6837\u5f0f",children:[]},{value:"\bHTML \u8f6c\u4e49",id:"\bhtml-\u8f6c\u4e49",children:[]},{value:"\u7ed1\u5b9a\u4e8b\u4ef6",id:"\u7ed1\u5b9a\u4e8b\u4ef6",children:[]},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",children:[{value:"skipElements",id:"skipelements",children:[]},{value:"voidElements",id:"voidelements",children:[]},{value:"closingElements",id:"closingelements",children:[]},{value:"transformText",id:"transformtext",children:[]},{value:"transformElement",id:"transformelement",children:[]},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b\uff1a",children:[]}]}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff1a\u672c\u7ae0\u8282\u6240\u6709\u5185\u5bb9\u53ea\u5728\u5c0f\u7a0b\u5e8f\u7aef\u8d77\u6548\u679c\u3002")),(0,l.kt)("p",null,"Taro \u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Element#innerHTML")," \u6216 Vue \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"v-html")," \u6216 React/Nerv \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," \u76f4\u63a5\u6e32\u67d3 HTML:  "),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'function helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,l.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view v-html="html"></view>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49-html-\u6837\u5f0f"},"\u81ea\u5b9a\u4e49 HTML \u6837\u5f0f"),(0,l.kt)("p",null,"\u76f4\u63a5\u8bbe\u7f6e HTML \u4e0d\u4f1a\u8ba9 HTML \u6807\u7b7e\u5e26\u4e0a\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\uff0cTaro \u63d0\u4f9b\u4e24\u79cd\u5185\u7f6e\u6837\u5f0f\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5f15\u5165\u751f\u6548\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html.css"),": ",(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/CSS2/sample.html"},"W3C HTML4 \u7684\u5185\u7f6e\u6837\u5f0f"),"\uff0c\u53ea\u6709 HTML4 \u6807\u7b7e\u6837\u5f0f\uff0c\u4f53\u79ef\u8f83\u5c0f\uff0c\u517c\u5bb9\u6027\u5f3a\uff0c\u80fd\u9002\u5e94\u5927\u591a\u6570\u60c5\u51b5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@tarojs/taro/html5.css"),": ",(0,l.kt)("a",{parentName:"li",href:"https://chromium.googlesource.com/chromium/blink/+/master/Source/core/css/html.css"},"Chrome(Blink) HTML5 \u7684\u5185\u7f6e\u6837\u5f0f"),"\uff0c\u5185\u7f6e\u6837\u5f0f\u4e30\u5bcc\uff0c\u5305\u62ec\u4e86\u5927\u591a\u6570 HTML5 \u6807\u7b7e\uff0c\u4f53\u79ef\u8f83\u5927\uff0c\u4e0d\u4e00\u5b9a\u652f\u6301\u6240\u6709\u5c0f\u7a0b\u5e8f\u5bb9\u5668\u3002")),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u5185\u7f6e\u7684\u6807\u7b7e\u6837\u5f0f\u8d77\u4f5c\u7528\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06 HTML \u5bb9\u5668\u7684 CSS \u7c7b\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},".taro_html"),":"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import \'@tarojs/taro/html.css\'\n\nfunction helloWorld() {\n  const html = `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n\n  return <View className="taro_html" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n'))),(0,l.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view v-html="html" class="taro_html"></view>\n</template>\n\n<script>\nimport \'@tarojs/taro/html.css\'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 style="color: red">Wallace is way taller than other reporters.</h1>`\n    }\n  }\n}\n<\/script>\n')))),(0,l.kt)("p",null,"\u540c\u6837\u5730\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5df1\u7f16\u5199 CSS \u6837\u5f0f\uff0cTaro \u6700\u7ec8\u6e32\u67d3\u7684 HTML \u6807\u7b7e\u7684\u7c7b\u540d\u90fd\u548c HTML \u6807\u7b7e\u540d\u4fdd\u6301\u4e00\u81f4\uff0c\u4f8b\u5982\u6211\u4eec\u7684\u5bb9\u5668 CSS \u7c7b\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"my_css"),"\uff0c\u60f3\u8981\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"h1")," \u6807\u7b7e\u7684\u6837\u5f0f\uff0c\u90a3\u5c31\u8fd9\u6837\u8fd9\u6837\u505a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".my_css .h1 {\n  font-size: 30px;\n}\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u503e\u5411\u4e8e\u5176\u4ed6\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dxr.mozilla.org/mozilla-central/source/layout/style/res/html.css"},"Firefox")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.archive.org/web/20170122223926/https://www.iecss.com/"},"Internet Explorer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css"},"Safari/Chrome(Webkit)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://web.archive.org/web/20161031005401/https://www.iecss.com/opera-10.51.css"},"Opera")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/html5/rendering.html"},"W3C HTML5 Spec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/necolas/normalize.css/blob/master/normalize.css"},"normalize.css"))),(0,l.kt)("h2",{id:"\bhtml-\u8f6c\u4e49"},"\bHTML \u8f6c\u4e49"),(0,l.kt)("p",null,"\u7531\u4e8e\u8fdb\u884c HTML \u8f6c\u4e49\u9700\u8981\u6d88\u8017\u8f83\u591a\u7684\u6027\u80fd\u548c\u8f83\u5927\u7684\u4f53\u79ef\uff0c\u9ed8\u8ba4\u800c\u8a00 Taro \u7684 HTML \u63a5\u53e3\u53ea\u63a5\u53d7\u8f6c\u4e49\u540e\u7684 HTML \u5b57\u7b26\u4e32\uff0c\u6211\u4eec\u63a8\u8350\u76f4\u63a5\u5728\u670d\u52a1\u7aef\u8fd4\u56de\u8f6c\u4e49\u540e\u7684 HTML\u3002\u5982\u679c\u786e\u5b9e\u9700\u8981\u5728\u5ba2\u6237\u7aef\u8f6c\u4e49\uff0c\u5f00\u6e90\u793e\u533a\u6709\u4e24\u4e2a\u8f83\u597d\u7684\u9009\u62e9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/he"},"he"),": \u4f53\u79ef\u8f83\u5927\uff0c\u4f46\u5f00\u6e90\u534f\u8bae\u66f4\u4e3a\u5bbd\u677e"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/entities"},"entities"),": \u4f53\u79ef\u8f83\u5c0f\uff0c\u4f46\u5f00\u6e90\u534f\u8bae\u66f4\u4e3a\u4e25\u683c")),(0,l.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u9700\u8981",(0,l.kt)("a",{parentName:"p",href:"#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9"},"\u9ad8\u7ea7\u9009\u9879"),"\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"transformText")," \u914d\u5408 HTML \u8f6c\u4e49\u8fdb\u884c\u5b57\u7b26\u4e32\u6e32\u67d3\u3002"),(0,l.kt)("h2",{id:"\u7ed1\u5b9a\u4e8b\u4ef6"},"\u7ed1\u5b9a\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u51fa\u4e8e\u4f5c\u7528\u57df\u548c\u5b89\u5168\u56e0\u7d20\u8003\u8651\uff0cTaro \u4f1a\u628a HTML \u5b57\u7b26\u4e32\u4e2d\u7684\u4e8b\u4ef6\u548c JavaScript \u5168\u90e8\u6e05\u9664\u3002\u4f46\u6211\u4eec\u4ecd\u7136\u6709\u529e\u6cd5\u7ed9 HTML \u7ed1\u5b9a\u4e8b\u4ef6\uff1a"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@tarojs/taro/html.css'\n\nfunction helloWorld() {\n  const html = `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n\n  useEffect(() => {\n    const el = document.getElementById('test')\n    function testOnTap (event) {\n      // do something\n      ...\n    }\n    el.addEventListener('tap', testOnTap)\n\n    return () => {\n      el.removeEventListener('tap', testOnTap)\n    }\n  }, [])\n\n  return <View className=\"taro_html\" dangerouslySetInnerHTML={{ __html: html }}></View>\n}\n"))),(0,l.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <view v-html=\"html\" class=\"taro_html\"></view>\n</template>\n\n<script>\nimport '@tarojs/taro/html.css'\n\nexport default {\n  data () {\n    return {\n      html: `<h1 id=\"test\">Wallace is way taller than other reporters.</h1>`\n    }\n  },\n  mounted () {\n    const el = document.getElementById('test')\n    el.addEventListener('tap', this.testOnTap)\n  },\n  testOnTap (event) {\n    // do something\n    ...\n  },\n  beforeDestroy () {\n    const el = document.getElementById('test')\n    el.removeEventListener('tap', this.testOnTap)\n  }\n}\n<\/script>\n")))),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u52a8\u6001\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5143\u7d20\u6ca1\u6709 ID \u7684\u8bdd\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9"},"\u9ad8\u7ea7\u9009\u9879"),"\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"transformElement"),"\u3002"),(0,l.kt)("h2",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,l.kt)("p",null,"\u5982\u679c\u5185\u7f6e\u7684\u529f\u80fd\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u6216\u6e32\u67d3\u7ed3\u679c\u4e0d\u5982\u9884\u671f\uff0cTaro \u8fd8\u63d0\u4f9b\u4e86 HTML \u6e32\u67d3\u7684\u9ad8\u7ea7\u9009\u9879\uff0c\u9ad8\u7ea7\u9009\u9879\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.options.html")," \u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Taro from '@tarojs/taro'\n\n// \u4e0d\u89e3\u6790 souce \u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\nTaro.options.html.skipElements.add('source')\n")),(0,l.kt)("h3",{id:"skipelements"},"skipElements"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"new Set(['style', 'script'])")),(0,l.kt)("p",null,"HashSet \u4e2d\u5305\u542b\u7684 HTML \u6807\u7b7e\u5c06\u4e0d\u4f1a\u88ab\u89e3\u6790\u3002"),(0,l.kt)("h3",{id:"voidelements"},"voidElements"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"new Set([\n  '!doctype', 'area', 'base', 'br', 'col', 'command',\n  'embed', 'hr', 'img', 'input', 'keygen', 'link',\n  'meta', 'param', 'source', 'track', 'wbr'\n])")),(0,l.kt)("p",null,"HashSet \u4e2d\u5305\u542b\u7684 HTML \u6807\u7b7e\u4e0d\u9700\u8981\u95ed\u5408\u6807\u7b7e\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"<img />"),"\u3002"),(0,l.kt)("h3",{id:"closingelements"},"closingElements"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"Set<string>")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"new Set([\n  'html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option',\n  'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup'\n])")),(0,l.kt)("p",null,"HashSet \u4e2d\u5305\u542b\u7684 HTML \u6807\u7b7e\u53ef\u4ee5\u81ea\u52a8\u95ed\u5408\uff0c\u4e14\u4e0d\u80fd\u88ab\u5d4c\u5957\u3002"),(0,l.kt)("h3",{id:"transformtext"},"transformText"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"(taroText: TaroText, text: Text) => TaroText")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4e3a Taro \u9ed8\u8ba4\u5904\u7406\u597d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/text.ts#L5"},"TaroText"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f HTML \u89e3\u6790\u5668\u89e3\u6790\u597d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L33-L36"},"Text"),"\uff0c\u6700\u540e\u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"TaroText")," \u5bf9\u8c61\u53c2\u4e0e HTML \u4e2d\u7684\u5b57\u7b26\u4e32\u6e32\u67d3\u3002"),(0,l.kt)("h3",{id:"transformelement"},"transformElement"),(0,l.kt)("p",null,"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"(taroElement: TaroElement, element: Element) => TaroElement")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"\u8be5\u51fd\u6570\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u503c\u4e3a Taro \u9ed8\u8ba4\u5904\u7406\u597d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/element.ts#L15"},"TaroElement"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f HTML \u89e3\u6790\u5668\u89e3\u6790\u597d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/blob/7349f716111accb6a39c72ed0f1e6cbc166fa32b/packages/taro-runtime/src/dom/html/parser.ts#L38-L43"},"Element"),"\uff0c\u6700\u540e\u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"TaroElement")," \u5bf9\u8c61\u53c2\u4e0e HTML \u5143\u7d20\u6e32\u67d3\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b\uff1a"},"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u7ed9\u6240\u6709 img \u6807\u7b7e\u6dfb\u52a0 aotu \u7c7b\nTaro.options.html.transformElement = (el) => {\n  if (el.nodeName === 'image') {\n    el.setAttribute('class', 'aotu')\n  }\n  return el\n}\n")))}h.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);