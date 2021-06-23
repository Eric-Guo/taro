(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27632],{3905:function(t,a,e){"use strict";e.d(a,{Zo:function(){return i},kt:function(){return o}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=n.createContext({}),k=function(t){var a=n.useContext(m),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},i=function(t){var a=k(t.components);return n.createElement(m.Provider,{value:a},t.children)},N={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,i=d(t,["components","mdxType","originalType","parentName"]),u=k(e),o=r,g=u["".concat(m,".").concat(o)]||u[o]||N[o]||l;return e?n.createElement(g,p(p({ref:a},i),{},{components:e})):n.createElement(g,p({ref:a},i))}));function o(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=u;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=t,d.mdxType="string"==typeof t?t:r,p[1]=d;for(var k=2;k<l;k++)p[k]=e[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},37037:function(t,a,e){"use strict";e.r(a),e.d(a,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return k},toc:function(){return i},default:function(){return u}});var n=e(22122),r=e(19756),l=(e(67294),e(3905)),p=["components"],d={title:"Color",sidebar_label:"Color"},m=void 0,k={unversionedId:"apis/canvas/Color",id:"version-3.x/apis/canvas/Color",isDocsHomePage:!1,title:"Color",description:"\u989c\u8272\u3002\u53ef\u4ee5\u7528\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u6765\u8868\u793a canvas \u4e2d\u4f7f\u7528\u7684\u989c\u8272\uff1a",source:"@site/versioned_docs/version-3.x/apis/canvas/Color.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/Color",permalink:"/taro/docs/apis/canvas/Color",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/Color.md",version:"3.x",frontMatter:{title:"Color",sidebar_label:"Color"},sidebar:"version-3.x/API",previous:{title:"CanvasGradient",permalink:"/taro/docs/apis/canvas/CanvasGradient"},next:{title:"Image",permalink:"/taro/docs/apis/canvas/Image"}},i=[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],N={toc:i};function u(t){var a=t.components,e=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},N,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u989c\u8272\u3002\u53ef\u4ee5\u7528\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u6765\u8868\u793a canvas \u4e2d\u4f7f\u7528\u7684\u989c\u8272\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RGB \u989c\u8272\uff1a \u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"'rgb(255, 0, 0)'")),(0,l.kt)("li",{parentName:"ul"},"RGBA \u989c\u8272\uff1a\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"'rgba(255, 0, 0, 0.3)'")),(0,l.kt)("li",{parentName:"ul"},"16 \u8fdb\u5236\u989c\u8272\uff1a \u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"'#FF0000'")),(0,l.kt)("li",{parentName:"ul"},"\u9884\u5b9a\u4e49\u7684\u989c\u8272\uff1a \u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"'red'"))),(0,l.kt)("p",null,"\u5176\u4e2d\u9884\u5b9a\u4e49\u989c\u8272\u6709\u4ee5\u4e0b148\u4e2a\uff1a\n*\u6ce8\u610f**: Color Name \u5927\u5c0f\u5199\u4e0d\u654f\u611f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Color Name"),(0,l.kt)("th",{parentName:"tr",align:null},"HEX"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AliceBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#F0F8FF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AntiqueWhite"),(0,l.kt)("td",{parentName:"tr",align:null},"#FAEBD7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Aqua"),(0,l.kt)("td",{parentName:"tr",align:null},"#00FFFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Aquamarine"),(0,l.kt)("td",{parentName:"tr",align:null},"#7FFFD4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure"),(0,l.kt)("td",{parentName:"tr",align:null},"#F0FFFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Beige"),(0,l.kt)("td",{parentName:"tr",align:null},"#F5F5DC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bisque"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFE4C4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Black"),(0,l.kt)("td",{parentName:"tr",align:null},"#000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlanchedAlmond"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFEBCD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"#0000FF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BlueViolet"),(0,l.kt)("td",{parentName:"tr",align:null},"#8A2BE2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brown"),(0,l.kt)("td",{parentName:"tr",align:null},"#A52A2A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BurlyWood"),(0,l.kt)("td",{parentName:"tr",align:null},"#DEB887")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CadetBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#5F9EA0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chartreuse"),(0,l.kt)("td",{parentName:"tr",align:null},"#7FFF00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chocolate"),(0,l.kt)("td",{parentName:"tr",align:null},"#D2691E")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Coral"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF7F50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CornflowerBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#6495ED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cornsilk"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFF8DC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Crimson"),(0,l.kt)("td",{parentName:"tr",align:null},"#DC143C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cyan"),(0,l.kt)("td",{parentName:"tr",align:null},"#00FFFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#00008B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkCyan"),(0,l.kt)("td",{parentName:"tr",align:null},"#008B8B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkGoldenRod"),(0,l.kt)("td",{parentName:"tr",align:null},"#B8860B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkGray"),(0,l.kt)("td",{parentName:"tr",align:null},"#A9A9A9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkGrey"),(0,l.kt)("td",{parentName:"tr",align:null},"#A9A9A9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#006400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkKhaki"),(0,l.kt)("td",{parentName:"tr",align:null},"#BDB76B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkMagenta"),(0,l.kt)("td",{parentName:"tr",align:null},"#8B008B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkOliveGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#556B2F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkOrange"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF8C00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkOrchid"),(0,l.kt)("td",{parentName:"tr",align:null},"#9932CC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkRed"),(0,l.kt)("td",{parentName:"tr",align:null},"#8B0000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkSalmon"),(0,l.kt)("td",{parentName:"tr",align:null},"#E9967A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkSeaGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#8FBC8F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkSlateBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#483D8B")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkSlateGray"),(0,l.kt)("td",{parentName:"tr",align:null},"#2F4F4F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkSlateGrey"),(0,l.kt)("td",{parentName:"tr",align:null},"#2F4F4F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkTurquoise"),(0,l.kt)("td",{parentName:"tr",align:null},"#00CED1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DarkViolet"),(0,l.kt)("td",{parentName:"tr",align:null},"#9400D3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeepPink"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF1493")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DeepSkyBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#00BFFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DimGray"),(0,l.kt)("td",{parentName:"tr",align:null},"#696969")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DimGrey"),(0,l.kt)("td",{parentName:"tr",align:null},"#696969")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DodgerBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#1E90FF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FireBrick"),(0,l.kt)("td",{parentName:"tr",align:null},"#B22222")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FloralWhite"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFAF0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ForestGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#228B22")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fuchsia"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF00FF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gainsboro"),(0,l.kt)("td",{parentName:"tr",align:null},"#DCDCDC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GhostWhite"),(0,l.kt)("td",{parentName:"tr",align:null},"#F8F8FF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gold"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFD700")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GoldenRod"),(0,l.kt)("td",{parentName:"tr",align:null},"#DAA520")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gray"),(0,l.kt)("td",{parentName:"tr",align:null},"#808080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Grey"),(0,l.kt)("td",{parentName:"tr",align:null},"#808080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Green"),(0,l.kt)("td",{parentName:"tr",align:null},"#008000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GreenYellow"),(0,l.kt)("td",{parentName:"tr",align:null},"#ADFF2F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HoneyDew"),(0,l.kt)("td",{parentName:"tr",align:null},"#F0FFF0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HotPink"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF69B4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IndianRed"),(0,l.kt)("td",{parentName:"tr",align:null},"#CD5C5C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Indigo"),(0,l.kt)("td",{parentName:"tr",align:null},"#4B0082")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ivory"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFFF0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Khaki"),(0,l.kt)("td",{parentName:"tr",align:null},"#F0E68C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lavender"),(0,l.kt)("td",{parentName:"tr",align:null},"#E6E6FA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LavenderBlush"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFF0F5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LawnGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#7CFC00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LemonChiffon"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFACD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#ADD8E6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightCoral"),(0,l.kt)("td",{parentName:"tr",align:null},"#F08080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightCyan"),(0,l.kt)("td",{parentName:"tr",align:null},"#E0FFFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightGoldenRodYellow"),(0,l.kt)("td",{parentName:"tr",align:null},"#FAFAD2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightGray"),(0,l.kt)("td",{parentName:"tr",align:null},"#D3D3D3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightGrey"),(0,l.kt)("td",{parentName:"tr",align:null},"#D3D3D3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#90EE90")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightPink"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFB6C1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightSalmon"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFA07A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightSeaGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#20B2AA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightSkyBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#87CEFA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightSlateGray"),(0,l.kt)("td",{parentName:"tr",align:null},"#778899")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightSlateGrey"),(0,l.kt)("td",{parentName:"tr",align:null},"#778899")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightSteelBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#B0C4DE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LightYellow"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFFE0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lime"),(0,l.kt)("td",{parentName:"tr",align:null},"#00FF00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LimeGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#32CD32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linen"),(0,l.kt)("td",{parentName:"tr",align:null},"#FAF0E6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Magenta"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF00FF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maroon"),(0,l.kt)("td",{parentName:"tr",align:null},"#800000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumAquaMarine"),(0,l.kt)("td",{parentName:"tr",align:null},"#66CDAA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#0000CD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumOrchid"),(0,l.kt)("td",{parentName:"tr",align:null},"#BA55D3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumPurple"),(0,l.kt)("td",{parentName:"tr",align:null},"#9370DB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumSeaGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#3CB371")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumSlateBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#7B68EE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumSpringGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#00FA9A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumTurquoise"),(0,l.kt)("td",{parentName:"tr",align:null},"#48D1CC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MediumVioletRed"),(0,l.kt)("td",{parentName:"tr",align:null},"#C71585")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MidnightBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#191970")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MintCream"),(0,l.kt)("td",{parentName:"tr",align:null},"#F5FFFA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MistyRose"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFE4E1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Moccasin"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFE4B5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NavajoWhite"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFDEAD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Navy"),(0,l.kt)("td",{parentName:"tr",align:null},"#000080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OldLace"),(0,l.kt)("td",{parentName:"tr",align:null},"#FDF5E6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Olive"),(0,l.kt)("td",{parentName:"tr",align:null},"#808000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OliveDrab"),(0,l.kt)("td",{parentName:"tr",align:null},"#6B8E23")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Orange"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFA500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OrangeRed"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF4500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Orchid"),(0,l.kt)("td",{parentName:"tr",align:null},"#DA70D6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PaleGoldenRod"),(0,l.kt)("td",{parentName:"tr",align:null},"#EEE8AA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PaleGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#98FB98")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PaleTurquoise"),(0,l.kt)("td",{parentName:"tr",align:null},"#AFEEEE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PaleVioletRed"),(0,l.kt)("td",{parentName:"tr",align:null},"#DB7093")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PapayaWhip"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFEFD5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PeachPuff"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFDAB9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Peru"),(0,l.kt)("td",{parentName:"tr",align:null},"#CD853F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pink"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFC0CB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Plum"),(0,l.kt)("td",{parentName:"tr",align:null},"#DDA0DD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PowderBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#B0E0E6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Purple"),(0,l.kt)("td",{parentName:"tr",align:null},"#800080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RebeccaPurple"),(0,l.kt)("td",{parentName:"tr",align:null},"#663399")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Red"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF0000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RosyBrown"),(0,l.kt)("td",{parentName:"tr",align:null},"#BC8F8F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RoyalBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#4169E1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SaddleBrown"),(0,l.kt)("td",{parentName:"tr",align:null},"#8B4513")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Salmon"),(0,l.kt)("td",{parentName:"tr",align:null},"#FA8072")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SandyBrown"),(0,l.kt)("td",{parentName:"tr",align:null},"#F4A460")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SeaGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#2E8B57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SeaShell"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFF5EE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sienna"),(0,l.kt)("td",{parentName:"tr",align:null},"#A0522D")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Silver"),(0,l.kt)("td",{parentName:"tr",align:null},"#C0C0C0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SkyBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#87CEEB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SlateBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#6A5ACD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SlateGray"),(0,l.kt)("td",{parentName:"tr",align:null},"#708090")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SlateGrey"),(0,l.kt)("td",{parentName:"tr",align:null},"#708090")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Snow"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFAFA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SpringGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#00FF7F")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SteelBlue"),(0,l.kt)("td",{parentName:"tr",align:null},"#4682B4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tan"),(0,l.kt)("td",{parentName:"tr",align:null},"#D2B48C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Teal"),(0,l.kt)("td",{parentName:"tr",align:null},"#008080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thistle"),(0,l.kt)("td",{parentName:"tr",align:null},"#D8BFD8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tomato"),(0,l.kt)("td",{parentName:"tr",align:null},"#FF6347")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Turquoise"),(0,l.kt)("td",{parentName:"tr",align:null},"#40E0D0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Violet"),(0,l.kt)("td",{parentName:"tr",align:null},"#EE82EE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Wheat"),(0,l.kt)("td",{parentName:"tr",align:null},"#F5DEB3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"White"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFFFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WhiteSmoke"),(0,l.kt)("td",{parentName:"tr",align:null},"#F5F5F5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,l.kt)("td",{parentName:"tr",align:null},"#FFFF00")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YellowGreen"),(0,l.kt)("td",{parentName:"tr",align:null},"#9ACD32")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Color.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Color"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);