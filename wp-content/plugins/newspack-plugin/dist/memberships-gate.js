(()=>{"use strict";function e(e){!function(e){[...e.querySelectorAll("form"),...document.querySelectorAll(".newspack-reader-auth form")].forEach((e=>{const t=document.createElement("input");t.type="hidden",t.name="memberships_content_gate",t.value="1",e.appendChild(t)}))}(e);const t={action:"seen"};"function"==typeof window.gtag&&t&&window.gtag("event","np_gate_interaction",t)}var t;t=function(){const t=document.querySelector(".newspack-memberships__gate");if(t)if(t.classList.contains("newspack-memberships__overlay-gate"))!function(t){let n=document.querySelector(".entry-content");n||(n=document.querySelector("#content")),t.style.removeProperty("display");let o=!1;const c=()=>{let c=!1;(n?.getBoundingClientRect().top||0)-window.innerHeight/2<0&&(c=!0,o||e(t),o=!0),t.setAttribute("data-visible",c)};document.addEventListener("scroll",c),c()}(t);else{const n=()=>{(t?.getBoundingClientRect().top||0)-window.innerHeight/2<0&&(e(t),document.removeEventListener("scroll",n))};document.addEventListener("scroll",n),n()}},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",t):t())})();