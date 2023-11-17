!function(){var e,t={8929:function(e,t,n){var r=n(8403),o=n(5393)((function(e,t,n){return t=t.toLowerCase(),e+(n?r(t):t)}));e.exports=o},8403:function(e,t,n){var r=n(9833),o=n(1700);e.exports=function(e){return o(r(e).toLowerCase())}},1865:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));e.exports=r},7889:function(e,t,n){"use strict";n.r(t);var r=n(7462),o=n(4942),i=(n(5674),n(9307)),a=n(5736),s=n(264),c=n(9674),u=n(5609);const l=a.__;class p extends i.Component{render(){const{data:e,onChange:t}=this.props,{verification:n,underConstruction:r,urls:o}=e,{google:a,bing:c}=n,{facebook:p,linkedin:w,twitter:d,youtube:h,instagram:f,pinterest:m}=o;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(s.M$,{title:l("Webmaster Tools","newspack"),description:l("Add verification meta tags to your site","newspack")}),(0,i.createElement)(s.rj,null,(0,i.createElement)(s.w4,{label:"Google",onChange:e=>t({verification:{...n,google:e}}),value:a,help:(0,i.createElement)(i.Fragment,null,l("Get your verification code in","newspack")+" ",(0,i.createElement)(u.ExternalLink,{href:"https://www.google.com/webmasters/verification/verification?tid=alternate"},l("Google Search Console","newspack")))}),(0,i.createElement)(s.w4,{label:"Bing",onChange:e=>t({verification:{...n,bing:e}}),value:c,help:(0,i.createElement)(i.Fragment,null,l("Get your verification code in","newspack")+" ",(0,i.createElement)(u.ExternalLink,{href:"https://www.bing.com/toolbox/webmaster/#/Dashboard/"},l("Bing Webmaster Tool","newspack")))})),(0,i.createElement)(s.M$,{title:l("Social Accounts","newspack"),description:l("Let search engines know which social profiles are associated to your site","newspack")}),(0,i.createElement)(s.rj,{columns:1,gutter:64},(0,i.createElement)(s.rj,{columns:3,rowGap:16},(0,i.createElement)(s.w4,{label:l("Facebook Page","newspack"),onChange:e=>t({urls:{...o,facebook:e}}),value:p,placeholder:l("https://facebook.com/page","newspack")}),(0,i.createElement)(s.w4,{label:l("Twitter","newspack"),onChange:e=>t({urls:{...o,twitter:e}}),value:d,placeholder:l("username","newspack")}),(0,i.createElement)(s.w4,{label:"Instagram",onChange:e=>t({urls:{...o,instagram:e}}),value:f,placeholder:l("https://instagram.com/user","newspack")}),(0,i.createElement)(s.w4,{label:"LinkedIn",onChange:e=>t({urls:{...o,linkedin:e}}),value:w,placeholder:l("https://linkedin.com/user","newspack")}),(0,i.createElement)(s.w4,{label:"YouTube",onChange:e=>t({urls:{...o,youtube:e}}),value:h,placeholder:l("https://youtube.com/c/channel","newspack")}),(0,i.createElement)(s.w4,{label:"Pinterest",onChange:e=>t({urls:{...o,pinterest:e}}),value:m,placeholder:l("https://pinterest.com/user","newspack")})),(0,i.createElement)(s.fM,{isMedium:!0,title:l("Under construction","newspack"),description:l("Discourage search engines from indexing this site.","newspack"),toggleChecked:r,toggleOnChange:e=>t({underConstruction:e})})))}}p.defaultProps={data:{}};var w=(0,s.a4)(p),d=n(8929),h=n.n(d),f=n(1865),m=n.n(f);const g=a.__,{HashRouter:b,Redirect:v,Route:k,Switch:E}=c.Z,y=(e,t)=>{if(!(e=>null!==e&&"object"==typeof e&&Object.getPrototypeOf(e).isPrototypeOf(Object))(e))return e;const n={};for(const r in e)e.hasOwnProperty(r)&&(n[t(r)]=y(e[r],t));return n};class x extends i.Component{constructor(){super(...arguments),(0,o.Z)(this,"state",{underConstruction:!1,urls:{facebook:"",twitter:"",instagram:"",youtube:"",linkedin:"",pinterest:""},verification:{bing:"",google:""}}),(0,o.Z)(this,"onWizardReady",(()=>this.fetch())),(0,o.Z)(this,"sanitizeResponse",(e=>y(e,(e=>h()(e)))))}fetch(){const{setError:e,wizardApiFetch:t}=this.props;return t({path:"/newspack/v1/wizard/newspack-seo-wizard/settings"}).then((e=>this.setState(this.sanitizeResponse(e)))).catch((t=>e(t)))}update(){const{setError:e,wizardApiFetch:t}=this.props;return t({path:"/newspack/v1/wizard/newspack-seo-wizard/settings",method:"POST",data:y(this.state,(e=>m()(e))),quiet:!0}).then((e=>this.setState(this.sanitizeResponse(e)))).catch((t=>e(t)))}render(){const{pluginRequirements:e}=this.props,t=g("SEO","newspack"),n=g("Configure basic SEO settings","newspack"),o=g("Save Settings","newspack"),a=g("Advanced Settings","newspack"),s={data:this.state,headerText:t,subHeaderText:n};return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(b,{hashType:"slash"},(0,i.createElement)(E,null,e,(0,i.createElement)(k,{exact:!0,path:"/",render:()=>(0,i.createElement)(w,(0,r.Z)({},s,{buttonAction:()=>this.update(),buttonText:o,onChange:e=>this.setState(e),secondaryButtonText:a}))}),(0,i.createElement)(v,{to:"/"}))))}}(0,i.render)((0,i.createElement)((0,s.uF)(x,["wordpress-seo","jetpack"])),document.getElementById("newspack-seo-wizard"))},9196:function(e){"use strict";e.exports=window.React},6292:function(e){"use strict";e.exports=window.moment},6989:function(e){"use strict";e.exports=window.wp.apiFetch},5609:function(e){"use strict";e.exports=window.wp.components},9818:function(e){"use strict";e.exports=window.wp.data},9307:function(e){"use strict";e.exports=window.wp.element},2694:function(e){"use strict";e.exports=window.wp.hooks},2629:function(e){"use strict";e.exports=window.wp.htmlEntities},5736:function(e){"use strict";e.exports=window.wp.i18n},9630:function(e){"use strict";e.exports=window.wp.keycodes},444:function(e){"use strict";e.exports=window.wp.primitives},6483:function(e){"use strict";e.exports=window.wp.url}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},r.j=485,function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={485:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],s=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[a[u]]=0;return r.O(l)},n=self.webpackChunkwebpack=self.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[351],(function(){return r(7889)}));o=r.O(o);var i=window;for(var a in o)i[a]=o[a];o.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})}();