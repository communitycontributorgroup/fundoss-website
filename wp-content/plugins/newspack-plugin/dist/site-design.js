(()=>{"use strict";var e,t={5718:(e,t,a)=>{a.r(t);var n=a(4942),l=(a(5674),a(9307)),s=a(5736),i=a(1732),o=a(9674),r=a(3741),p=a(5609);const c=s.__,u=e=>{const[t,a]=(0,l.useState)(null),{themeSettings:n,setThemeMods:s}=e,{show_author_bio:o=!0,show_author_email:r=!1,author_bio_length:u=200,featured_image_default:d="large",post_template_default:h="default",featured_image_all_posts:g="none",post_template_all_posts:m="none",newspack_image_credits_placeholder_url:w,newspack_image_credits_class_name:b="",newspack_image_credits_prefix_label:k=""}=n;return(0,l.useEffect)((()=>{w&&a(w)}),[w]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.M$,{title:c("Author Bio","newspack-plugin"),description:c("Control how author bios are displayed on posts.","newspack-plugin")}),(0,l.createElement)(i.rj,{gutter:32},(0,l.createElement)(i.rj,{columns:1,gutter:16},(0,l.createElement)(p.ToggleControl,{label:c("Author Bio","newspack-plugin"),help:c("Display an author bio under individual posts.","newspack-plugin"),checked:o,onChange:e=>s({show_author_bio:e})}),o&&(0,l.createElement)(p.ToggleControl,{label:c("Author Email","newspack-plugin"),help:c("Display the author email with bio on individual posts.","newspack-plugin"),checked:r,onChange:e=>s({show_author_email:e})})),(0,l.createElement)(i.rj,{columns:1,gutter:16},o&&(0,l.createElement)(i.w4,{label:c("Length","newspack-plugin"),help:c("Truncates the author bio on single posts to this approximate character length, but without breaking a word. The full bio appears on the author archive page.","newspack-plugin"),type:"number",value:u,onChange:e=>s({author_bio_length:e})}))),(0,l.createElement)(i.M$,{title:c("Default Featured Image Position And Post Template","newspack-plugin"),description:c("Modify how the featured image and post template settings are applied to new posts.","newspack-plugin")}),(0,l.createElement)(i.rj,{gutter:32},(0,l.createElement)(p.SelectControl,{label:c("Default featured image position for new posts","newspack-plugin"),help:c("Set a default featured image position for new posts.","newspack-plugin"),value:d,options:[{label:c("Large","newspack-plugin"),value:"large"},{label:c("Small","newspack-plugin"),value:"small"},{label:c("Behind article title","newspack-plugin"),value:"behind"},{label:c("Beside article title","newspack-plugin"),value:"beside"},{label:c("Hidden","newspack-plugin"),value:"hidden"}],onChange:e=>s({featured_image_default:e})}),(0,l.createElement)(p.SelectControl,{label:c("Default template for new posts","newspack-plugin"),help:c("Set a default template for new posts.","newspack-plugin"),value:h,options:[{label:c("With sidebar","newspack-plugin"),value:"default"},{label:c("One Column","newspack-plugin"),value:"single-feature.php"},{label:c("One Column Wide","newspack-plugin"),value:"single-wide.php"}],onChange:e=>s({post_template_default:e})})),(0,l.createElement)(i.M$,{title:c("Featured Image Position And Post Template For All Posts","newspack-plugin"),description:c("Modify how the featured image and post template settings are applied to existing posts. Warning: saving these options will override all posts.","newspack-plugin")}),n.post_count>1e3&&(0,l.createElement)(p.Notice,{isDismissible:!1,status:"warning",className:"ma0 mb2"},c("You have more than 1000 posts. Applying these settings might take a moment.","newspack-plugin")),(0,l.createElement)(i.rj,{gutter:32},(0,l.createElement)("div",null,(0,l.createElement)(p.SelectControl,{label:c("Featured image position for all posts","newspack-plugin"),help:c("Set a featured image position for all posts.","newspack-plugin"),value:g,options:[{label:c("Select to change all posts","newspack-plugin"),value:"none"},{label:c("Large","newspack-plugin"),value:"large"},{label:c("Small","newspack-plugin"),value:"small"},{label:c("Behind article title","newspack-plugin"),value:"behind"},{label:c("Beside article title","newspack-plugin"),value:"beside"},{label:c("Hidden","newspack-plugin"),value:"hidden"}],onChange:e=>s({featured_image_all_posts:e})}),"none"!==g&&(0,l.createElement)(p.Notice,{isDismissible:!1,status:"warning",className:"ma0 mt2"},c("After saving the settings with this option selected, all posts will be updated. This cannot be undone.","newspack-plugin"))),(0,l.createElement)("div",null,(0,l.createElement)(p.SelectControl,{label:c("Template for all posts","newspack-plugin"),help:c("Set a template for all posts.","newspack-plugin"),value:m,options:[{label:c("Select to change all posts","newspack-plugin"),value:"none"},{label:c("With sidebar","newspack-plugin"),value:"default"},{label:c("One Column","newspack-plugin"),value:"single-feature.php"},{label:c("One Column Wide","newspack-plugin"),value:"single-wide.php"}],onChange:e=>s({post_template_all_posts:e})}),"none"!==m&&(0,l.createElement)(p.Notice,{isDismissible:!1,status:"warning",className:"ma0 mt2"},c("After saving the settings with this option selected, all posts will be updated. This cannot be undone.","newspack-plugin")))),(0,l.createElement)(i.M$,{title:c("Media Credits","newspack-plugin"),description:c("Control how credits are displayed alongside media attachments.","newspack-plugin")}),(0,l.createElement)(i.rj,{gutter:32},(0,l.createElement)(i.rj,{columns:1,gutter:16},(0,l.createElement)(i.w4,{label:c("Credit Class Name","newspack-plugin"),help:c("A CSS class name to be applied to all image credit elements. Leave blank to display no class name.","newspack-plugin"),value:b,onChange:e=>s({newspack_image_credits_class_name:e})}),(0,l.createElement)(i.w4,{label:c("Credit Label","newspack-plugin"),help:c("A label to prefix all media credits. Leave blank to display no prefix.","newspack-plugin"),value:k,onChange:e=>s({newspack_image_credits_prefix_label:e})})),(0,l.createElement)(i.rj,{columns:1,gutter:16},(0,l.createElement)(i.Ur,{image:t?{url:t}:null,label:c("Placeholder Image","newspack-plugin"),buttonLabel:c("Select","newspack-plugin"),onChange:e=>{a(e?.url||null),s({newspack_image_credits_placeholder:e?.id||null})},help:c("A placeholder image to be displayed in place of images without credits. If none is chosen, the image will be displayed normally whether or not it has a credit.","newspack-plugin")}))))};u.defaultProps={themeSettings:{},setThemeMods:()=>null};const d=(0,i.a4)(u),h=s.__,{HashRouter:g,Redirect:m,Route:w,Switch:b}=o.Z;class k extends l.Component{constructor(...e){super(...e),(0,n.Z)(this,"componentDidMount",(()=>{const{setError:e,wizardApiFetch:t}=this.props;t({path:"/newspack/v1/wizard/newspack-setup-wizard/theme",method:"GET"}).then((e=>this.setState({themeSettings:{...e.theme_mods,...e.etc}}))).catch(e)})),(0,n.Z)(this,"setThemeMods",(e=>this.setState({themeSettings:{...this.state.themeSettings,...e}}))),(0,n.Z)(this,"updateThemeSettings",(()=>{const{setError:e,wizardApiFetch:t}=this.props,{themeSettings:a}=this.state;(a.featured_image_all_posts&&"none"!==a.featured_image_all_posts||a.post_template_all_posts&&"none"!==a.post_template_all_posts)&&!i.P6.confirmAction(h("Saving will overwrite existing posts, this cannot be undone. Are you sure you want to proceed?","newspack-plugin"))||t({path:"/newspack/v1/wizard/newspack-setup-wizard/theme/",method:"POST",data:{theme_mods:a},quiet:!0}).then((e=>{const{theme:t,theme_mods:a}=e;this.setState({theme:t,themeSettings:a})})).catch((t=>{console.log("[Theme Update Error]",t),e({error:t})}))})),(0,n.Z)(this,"state",{})}render(){const{pluginRequirements:e,wizardApiFetch:t,setError:a}=this.props,n=[{label:h("Design"),path:"/",exact:!0},{label:h("Settings"),path:"/settings",exact:!0}];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g,{hashType:"slash"},(0,l.createElement)(b,null,e,(0,l.createElement)(w,{path:"/",exact:!0,render:()=>(0,l.createElement)(r.Z,{headerText:h("Site Design","newspack-plugin"),subHeaderText:h("Customize the look and feel of your site","newspack-plugin"),tabbedNavigation:n,wizardApiFetch:t,setError:a,isPartOfSetup:!1})}),(0,l.createElement)(w,{path:"/settings",exact:!0,render:()=>{const{themeSettings:e}=this.state;return(0,l.createElement)(d,{headerText:h("Site Design","newspack-plugin"),subHeaderText:h("Configure your Newspack theme","newspack-plugin"),tabbedNavigation:n,themeSettings:e,setThemeMods:this.setThemeMods,buttonText:h("Save","newspack-plugin"),buttonAction:this.updateThemeSettings,secondaryButtonText:h("Advanced Settings","newspack-plugin"),secondaryButtonAction:"/wp-admin/customize.php"})}}),(0,l.createElement)(m,{to:"/"}))))}}(0,l.render)((0,l.createElement)((0,i.uF)(k)),document.getElementById("newspack-site-design-wizard"))},9196:e=>{e.exports=window.React},6292:e=>{e.exports=window.moment},6989:e=>{e.exports=window.wp.apiFetch},5609:e=>{e.exports=window.wp.components},9818:e=>{e.exports=window.wp.data},9307:e=>{e.exports=window.wp.element},2694:e=>{e.exports=window.wp.hooks},2629:e=>{e.exports=window.wp.htmlEntities},5736:e=>{e.exports=window.wp.i18n},9630:e=>{e.exports=window.wp.keycodes},444:e=>{e.exports=window.wp.primitives},6483:e=>{e.exports=window.wp.url}},a={};function n(e){var l=a[e];if(void 0!==l)return l.exports;var s=a[e]={id:e,loaded:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,e=[],n.O=(t,a,l,s)=>{if(!a){var i=1/0;for(c=0;c<e.length;c++){for(var[a,l,s]=e[c],o=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(o=!1,s<i&&(i=s));if(o){e.splice(c--,1);var p=l();void 0!==p&&(t=p)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,l,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=657,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={657:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var l,s,[i,o,r]=a,p=0;if(i.some((t=>0!==e[t]))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(r)var c=r(n)}for(t&&t(a);p<i.length;p++)s=i[p],n.o(e,s)&&e[s]&&e[s][0](),e[i[p]]=0;return n.O(c)},a=globalThis.webpackChunkwebpack=globalThis.webpackChunkwebpack||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var l=n.O(void 0,[351],(()=>n(5718)));l=n.O(l);var s=window;for(var i in l)s[i]=l[i];l.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();