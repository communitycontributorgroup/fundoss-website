!function(){"use strict";var e={r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const n=e=>{"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())},o="menu-open--";let c;const s=(e,t)=>-1<e.indexOf(t),r=()=>{const e=document.body.classList;for(let t=0;t<e.length;t++)s(e[t],o)&&document.body.classList.remove(e[t]);u(),document.activeElement.blur()},l=()=>{c||(c=document.createElement("div"),c.className="overlay-mask",c.addEventListener("click",r,!1)),document.body.appendChild(c)},u=()=>{c&&!(()=>{const e=document.body.classList;for(let t=0;t<e.length;t++)if(s(e[t],o))return!0;return!1})()&&document.body.removeChild(c)},a=o+"comments-menu";n((function(){const e=document.body,t=document.querySelector(".comments-menu"),n=document.querySelectorAll(".comments-menu-toggle"),o=document.querySelector(".comments-contents");if(!t||!n.length||!o)return;const c=t.querySelector(".comments-menu-toggle a"),s=o.querySelector(".comments-menu-toggle a"),r=t=>{t.preventDefault(),e.classList.contains(a)?i():d()},d=()=>{e.classList.add(a),s.focus(),l()},i=()=>{e.classList.remove(a),c.focus(),u()};for(let l=0;l<n.length;l++)n[l].addEventListener("click",r,!1)}));const d=o+"mobile-menu";n((function(){const e=document.body,t=document.querySelector(".mobile-header"),n=document.querySelectorAll(".mobile-menu-toggle"),o=document.querySelector(".mobile-sidebar");if(!t||!n.length||!o)return;const c=t.querySelector(".mobile-menu-toggle a"),s=o.querySelector(".mobile-menu-toggle a"),r=t=>{t.preventDefault(),e.classList.contains(d)?i():a()},a=()=>{e.classList.add(d),s.focus(),l()},i=()=>{e.classList.remove(d),c.focus(),u()};for(let l=0;l<n.length;l++)n[l].addEventListener("click",r,!1)}));const i=o+"search-menu";n((function(){const e=document.body,t=document.querySelector(".search-menu"),n=document.querySelectorAll(".search-menu-toggle"),o=document.querySelector(".search-contents");if(!t||!n.length||!o)return;const c=t.querySelector(".search-menu-toggle a");if(newspackScreenReaderText.jetpack_instant_search)return void c.classList.add("jetpack-search-filter__link");const s=t=>{t.preventDefault(),e.classList.contains(i)?a():r()},r=()=>{e.classList.add(i),c.innerHTML="<span>"+newspackScreenReaderText.close_search+"</span>",o.querySelector('input[type="search"]').focus(),l()},a=()=>{e.classList.contains(i)&&(e.classList.remove(i),c.innerHTML="<span>"+newspackScreenReaderText.open_search+"</span>",u())};document.addEventListener("keydown",(e=>{"Escape"===e.key&&a()}));for(let l=0;l<n.length;l++)n[l].addEventListener("click",s,!1)}));var m=window;for(var y in t)m[y]=t[y];t.__esModule&&Object.defineProperty(m,"__esModule",{value:!0})}();