!function(){"use strict";var e={};(function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=["signin_modal","register_modal"];let n;window.newspackRAS=window.newspackRAS||[],window.newspackRAS.push((function(e){var a;a=function(){const a=[...document.querySelectorAll(".newspack-reader-auth")],o=[...document.querySelectorAll(".woocommerce-message")];if(!a.length)return;let r,l;const i=function(){r=document.querySelectorAll(".newspack-reader__account-link"),l=document.querySelectorAll(`[data-newspack-reader-account-link],[href="${newspack_ras_config.account_url}"]`),l.forEach((e=>{e.addEventListener("click",d)}))},c=function(e){n=window.location.hash.replace("#",""),t.includes(n)&&(e&&e.preventDefault(),d())};function s(){const t=[...document.querySelectorAll(".newspack-reader-auth")];t.length&&t.forEach((t=>{const n=t.querySelector("form"),a=t.querySelector('input[name="npe"]'),o=t.querySelector('input[name="redirect"]'),l=e.getReader();if(a&&(a.value=l?.email||""),r?.length&&r.forEach((e=>{l?.email&&!l?.authenticated?(e.setAttribute("data-redirect",e.getAttribute("href")),o.value=e.getAttribute("href")):e.removeAttribute("data-redirect");try{const t=JSON.parse(e.getAttribute("data-labels"));e.querySelector(".newspack-reader__account-link__label").textContent=l?.email?t.signedin:t.signedout}catch{}})),l?.authenticated){const e=t.querySelector(".newspack-reader__auth-form__response__content");e&&n&&n.replaceWith(e.parentNode)}}))}function d(t){const n=e.getReader();if(n?.authenticated)return;const a=document.querySelector(".newspack-reader-auth:not(.newspack-reader__auth-form__inline)");if(!a)return;t&&t.preventDefault();const o=a.querySelector("[data-has-auth-link]"),r=a.querySelector('input[name="npe"]'),l=a.querySelector('input[name="redirect"]'),i=a.querySelector('input[name="password"]'),c=a.querySelector('input[name="action"]');o&&(e.hasAuthLink()?o.style.display="flex":o.style.display="none"),r&&(r.value=n?.email||""),l&&t?.target?.getAttribute("data-redirect")&&(l.value=t.target.getAttribute("data-redirect")),a.hidden=!1,a.style.display="flex",document.body.classList.add("newspack-signin"),i&&r?.value&&"pwd"===c?.value?i.focus():r.focus(),a.overlayId=e.overlays.add()}window.addEventListener("hashchange",c),c(),i(),setTimeout(i,1e3),e.on("reader",s),s(),a.forEach((a=>{const r=a.querySelector("form");if(!r)return;let l;r.getAttribute("action-xhr")?(r.removeAttribute("action-xhr"),l=r.cloneNode(!0),r.replaceWith(l)):l=r;const i=l.querySelector('input[name="action"]'),c=l.querySelector('input[name="npe"]'),s=l.querySelector('input[name="otp_code"]'),d=l.querySelector('input[name="password"]'),u=l.querySelectorAll('[type="submit"]'),p=a.querySelector("button[data-close]");p&&p.addEventListener("click",(function(n){n.preventDefault(),a.classList.remove("newspack-reader__auth-form__visible"),a.style.display="none",document.body.classList.remove("newspack-signin"),t.includes(window.location.hash.replace("#",""))&&history.pushState("",document.title,window.location.pathname+window.location.search),a.overlayId&&e.overlays.remove(a.overlayId)}));const g=a.querySelector(".newspack-reader__auth-form__response__content");function h(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("otp"!==t||e.getOTPHash()){["link","pwd"].includes(t)&&e.setAuthStrategy(t),i.value=t,a.removeAttribute("data-form-status"),g.innerHTML="",a.querySelectorAll("[data-action]").forEach((e=>{"none"!==e.style.display&&(e.prevDisplay=e.style.display),e.style.display="none"})),a.querySelectorAll('[data-action~="'+t+'"]').forEach((e=>{e.style.display=e.prevDisplay}));try{const e=JSON.parse(a.getAttribute("data-labels")),n="register"===t?e.register:e.signin;a.querySelector("h2").textContent=n}catch{}n&&("pwd"===t&&c.value?d.focus():"otp"===t?s.focus():c.focus())}}a.querySelector("[data-has-auth-link]").hidden=!0,h("register_modal"===n?"register":e.getAuthStrategy()||"link"),window.addEventListener("hashchange",(()=>{t.includes(n)&&h("register_modal"===n?"register":e.getAuthStrategy()||"link")})),e.on("reader",(()=>{e.getOTPHash()&&h("otp")})),a.querySelectorAll("[data-set-action]").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),h(e.target.getAttribute("data-set-action"),!0)}))})),l.startLoginFlow=()=>{a.removeAttribute("data-form-status"),u.forEach((e=>{e.disabled=!0})),g.innerHTML="",l.style.opacity=.5},l.endLoginFlow=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;if(t){const e=document.createElement("p");e.textContent=t,g.appendChild(e)}if(200===n&&o){const t=!!o?.authenticated;e.setReaderEmail(o.email),e.setAuthenticated(t),t?r&&(window.location=r):l.replaceWith(g.parentNode)}a.setAttribute("data-form-status",n),l.style.opacity=1,u.forEach((e=>{e.disabled=!1}))},l.addEventListener("submit",(t=>{t.preventDefault(),l.startLoginFlow(),0<o.length&&o.forEach((e=>e.style.display="none"));const r=l.action?.value;return l.npe?.value?"pwd"!==r||l.password?.value?void e.getCaptchaToken().then((e=>{if(!e)return;let t=l.captcha_token;t||(t=document.createElement("input"),t.setAttribute("type","hidden"),t.setAttribute("name","captcha_token"),t.setAttribute("autocomplete","off"),l.appendChild(t)),t.value=e})).catch((e=>{l.endLoginFlow(e,400)})).finally((()=>{const o=new FormData(t.target);if(!o.has("npe")||!o.get("npe"))return l.endFlow(newspack_reader_auth_labels.invalid_email,400);e.setReaderEmail(o.get("npe")),"otp"===r?e.authenticateOTP(o.get("otp_code")).then((e=>{l.endLoginFlow(e.message,200,e,n?"":o.get("redirect"))})).catch((e=>{e.expired&&h("link"),l.endLoginFlow(e.message,400)})):fetch(l.getAttribute("action")||window.location.pathname,{method:"POST",headers:{Accept:"application/json"},body:o}).then((t=>{a.setAttribute("data-form-status",t.status),t.json().then((a=>{let{message:i,data:c}=a,s=t.status,d=o.get("redirect");"register"===r&&(d=newspack_ras_config.account_url),n&&(d=""),e.getOTPHash()&&["register","link"].includes(r)&&(h("otp"),200===s&&"link"===r&&(s=null,i=null)),l.endLoginFlow(i,s,c,d)})).catch((()=>{l.endLoginFlow()}))})).catch((()=>{l.endLoginFlow()}))})):l.endLoginFlow(newspack_reader_auth_labels.invalid_password,400):l.endLoginFlow(newspack_reader_auth_labels.invalid_email,400)}))})),document.querySelectorAll('input[name="otp_code"]').forEach((e=>{const t=parseInt(e.getAttribute("maxlength"));if(!t)return;const n=e.parentNode;n.removeChild(e);const a=[],o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","otp_code"),n.appendChild(o);for(let e=0;e<t;e++){const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("maxlength","1"),r.setAttribute("pattern","[0-9]"),r.setAttribute("autocomplete","off"),r.setAttribute("inputmode","numeric"),r.setAttribute("data-index",e),r.addEventListener("keydown",(t=>{const r=n.querySelector(`[data-index="${e-1}"]`),l=n.querySelector(`[data-index="${e+1}"]`);switch(t.key){case"Backspace":t.preventDefault(),t.target.value="",r&&r.focus(),a[e]="",o.value=a.join("");break;case"ArrowLeft":t.preventDefault(),r&&r.focus();break;case"ArrowRight":t.preventDefault(),l&&l.focus();break;default:t.key.match(/^[0-9]$/)&&(t.preventDefault(),t.target.value=t.key,t.target.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),l&&l.focus())}})),r.addEventListener("input",(t=>{t.target.value.match(/^[0-9]$/)?a[e]=t.target.value:t.target.value="",o.value=a.join("")})),r.addEventListener("paste",(e=>{e.preventDefault();const r=(e.clipboardData||window.clipboardData).getData("text");if(r.length===t){for(let e=0;e<t;e++)r[e].match(/^[0-9]$/)&&(n.querySelector(`[data-index="${e}"]`).value=r[e],a[e]=r[e]);o.value=a.join("")}})),n.appendChild(r)}})),[...document.querySelectorAll(".newspack-reader__logins")].forEach((e=>{e.classList.remove("newspack-reader__logins--disabled")})),document.querySelectorAll(".newspack-reader__logins__google").forEach((e=>{const t=e.closest("form"),n=t.querySelector('input[name="redirect"]');e.addEventListener("click",(()=>{t?.startLoginFlow&&t.startLoginFlow();const e=t?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Array.from(e.entries()).reduce(((e,n)=>{let[a,o]=n;return t.includes(a)?(a.indexOf("[]")>-1?(a=a.replace("[]",""),e[a]=e[a]||[],e[a].push(o)):e[a]=o,e):e}),{})}(new FormData(t),["lists[]"]):{};e.current_page_url=window.location.href;const a=window.open("about:blank","newspack_google_login","width=500,height=600");fetch("/wp-json/newspack/v1/login/google").then((e=>e.json().then((t=>Promise.resolve({data:t,status:e.status}))))).then((o=>{let{data:r,status:l}=o;if(200!==l)a&&a.close(),t?.endLoginFlow&&t.endLoginFlow(r.message,l);else if(a){a.location=r;const o=setInterval((()=>{a.closed&&((e=>{fetch(`/wp-json/newspack/v1/login/google/register?metadata=${JSON.stringify(e)}`).then((e=>{e.json().then((a=>{let{message:o,data:r}=a;const l=n?.value||null;t?.endLoginFlow&&t.endLoginFlow(o,e.status,r,l)})).catch((n=>{t?.endLoginFlow&&t.endLoginFlow(n?.message,e.status)}))})).catch((e=>{t?.endLoginFlow&&t.endLoginFlow(e?.message)}))})(e),clearInterval(o))}),500)}else t?.endLoginFlow&&t.endLoginFlow(newspack_reader_auth_labels.blocked_popup)})).catch((e=>{console.log(e),t?.endLoginFlow&&t.endLoginFlow(e?.message,400),a&&a.close()}))}))}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",a):a())}));var a=window;for(var o in e)a[o]=e[o];e.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})}();