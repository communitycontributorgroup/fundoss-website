(()=>{"use strict";const e=["signin_modal","register_modal"];let t;window.newspackRAS=window.newspackRAS||[],window.newspackRAS.push((function(n){var a;a=function(){const a=[...document.querySelectorAll(".newspack-reader-auth")],o=[...document.querySelectorAll(".woocommerce-message")];if(!a.length)return;let r,l;const i=function(){r=document.querySelectorAll(".newspack-reader__account-link"),l=document.querySelectorAll(`[data-newspack-reader-account-link],[href="${newspack_ras_config.account_url}"]`),l.forEach((e=>{e.addEventListener("click",d)}))},c=function(n){t=window.location.hash.replace("#",""),e.includes(t)&&(n&&n.preventDefault(),d())};function s(){const e=[...document.querySelectorAll(".newspack-reader-auth")];e.length&&e.forEach((e=>{const t=e.querySelector("form"),a=e.querySelector('input[name="npe"]'),o=e.querySelector('input[name="redirect"]'),l=n.getReader();if(a&&(a.value=l?.email||""),r?.length&&r.forEach((e=>{l?.email&&!l?.authenticated?(e.setAttribute("data-redirect",e.getAttribute("href")),o.value=e.getAttribute("href")):e.removeAttribute("data-redirect");try{const t=JSON.parse(e.getAttribute("data-labels"));e.querySelector(".newspack-reader__account-link__label").textContent=l?.email&&l?.authenticated?t.signedin:t.signedout}catch{}})),l?.authenticated){const n=e.querySelector(".newspack-reader__auth-form__response__content");n&&t&&t.replaceWith(n.parentNode)}}))}function d(e){const t=n.getReader();if(t?.authenticated)return;const a=document.querySelector(".newspack-reader-auth:not(.newspack-reader__auth-form__inline)");if(!a)return;e&&e.preventDefault();const o=a.querySelector("[data-has-auth-link]"),r=a.querySelector('input[name="npe"]'),l=a.querySelector('input[name="redirect"]'),i=a.querySelector('input[name="password"]'),c=a.querySelector('input[name="action"]');o&&(n.hasAuthLink()?o.style.display="flex":o.style.display="none"),r&&(r.value=t?.email||""),l&&e?.target?.getAttribute("data-redirect")&&(l.value=e.target.getAttribute("data-redirect")),a.hidden=!1,a.style.display="flex",document.body.classList.add("newspack-signin"),i&&r?.value&&"pwd"===c?.value?i.focus():r.focus(),a.overlayId=n.overlays.add()}window.addEventListener("hashchange",c),c(),i(),setTimeout(i,1e3),n.on("reader",s),s(),a.forEach((a=>{const r=a.querySelector("form");if(!r)return;let l;r.getAttribute("action-xhr")?(r.removeAttribute("action-xhr"),l=r.cloneNode(!0),r.replaceWith(l)):l=r;const i=l.querySelector('input[name="action"]'),c=l.querySelector('input[name="npe"]'),s=l.querySelector('input[name="otp_code"]'),d=l.querySelector('input[name="password"]'),u=l.querySelectorAll('[type="submit"]'),p=a.querySelector("button[data-close]");p&&p.addEventListener("click",(function(t){t.preventDefault(),a.classList.remove("newspack-reader__auth-form__visible"),a.style.display="none",document.body.classList.remove("newspack-signin"),e.includes(window.location.hash.replace("#",""))&&history.pushState("",document.title,window.location.pathname+window.location.search),a.overlayId&&n.overlays.remove(a.overlayId)}));const h=a.querySelector(".newspack-reader__auth-form__response__content");function g(e,t=!1){if(a.setAttribute("data-action",e),"otp"===e){if(!n.getOTPHash())return;document.querySelectorAll('input[name="otp_code"]').forEach((e=>{const t=parseInt(e.getAttribute("maxlength"));if(!t)return;const n=e.parentNode;n.removeChild(e);const a=[],o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","otp_code"),o.setAttribute("maxlength",t),n.appendChild(o);for(let e=0;e<t;e++){const r=document.createElement("input");r.setAttribute("name","otp_code_input"),r.setAttribute("type","text"),r.setAttribute("maxlength","1"),r.setAttribute("pattern","[0-9]"),r.setAttribute("autocomplete","off"),r.setAttribute("inputmode","numeric"),r.setAttribute("data-index",e),r.addEventListener("keydown",(t=>{const r=n.querySelector(`[data-index="${e-1}"]`),l=n.querySelector(`[data-index="${e+1}"]`);switch(t.key){case"Backspace":t.preventDefault(),t.target.value="",r&&r.focus(),a[e]="",o.value=a.join("");break;case"ArrowLeft":t.preventDefault(),r&&r.focus();break;case"ArrowRight":t.preventDefault(),l&&l.focus();break;default:t.key.match(/^[0-9]$/)&&(t.preventDefault(),t.target.value=t.key,t.target.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),l&&l.focus())}})),r.addEventListener("input",(t=>{t.target.value.match(/^[0-9]$/)?a[e]=t.target.value:t.target.value="",o.value=a.join("")})),r.addEventListener("paste",(e=>{e.preventDefault();const r=(e.clipboardData||window.clipboardData).getData("text");if(r.length===t){for(let e=0;e<t;e++)r[e].match(/^[0-9]$/)&&(n.querySelector(`[data-index="${e}"]`).value=r[e],a[e]=r[e]);o.value=a.join("")}})),n.appendChild(r)}}))}["link","pwd"].includes(e)&&(n.setAuthStrategy(e),"link"===e&&document.querySelectorAll('input[name="otp_code"]').forEach((e=>{e.value="";const t=e.parentNode;t.querySelectorAll('input[name="otp_code_input"]').forEach((e=>{t.removeChild(e)}))}))),i.value=e,a.removeAttribute("data-form-status"),h.innerHTML="",a.querySelectorAll("[data-action]").forEach((e=>{"none"!==e.style.display&&(e.prevDisplay=e.style.display),e.style.display="none"})),a.querySelectorAll('[data-action~="'+e+'"]').forEach((e=>{e.style.display=e.prevDisplay}));try{const t=JSON.parse(a.getAttribute("data-labels")),n="register"===e?t.register:t.signin;a.querySelector("h2").textContent=n}catch{}t&&("pwd"===e&&c.value?d.focus():"otp"===e?s.focus():c.focus())}a.querySelector("[data-has-auth-link]").hidden=!0,g("register_modal"===t?"register":n.getAuthStrategy()||"link"),window.addEventListener("hashchange",(()=>{e.includes(t)&&g("register_modal"===t?"register":n.getAuthStrategy()||"link")})),a.querySelectorAll("[data-set-action]").forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),g(e.target.getAttribute("data-set-action"),!0)}))})),l.startLoginFlow=()=>{a.removeAttribute("data-form-status"),u.forEach((e=>{e.disabled=!0})),h.innerHTML="",l.style.opacity=.5},l.endLoginFlow=(e=null,t=500,o=null,r)=>{if(e){const t=document.createElement("p");t.textContent=e,h.appendChild(t)}if(200===t&&o){const e=!!o?.authenticated;n.setReaderEmail(o.email),n.setAuthenticated(e),e?r&&(window.location=r):l.replaceWith(h.parentNode)}a.setAttribute("data-form-status",t),l.style.opacity=1,u.forEach((e=>{e.disabled=!1}))},l.addEventListener("submit",(e=>{e.preventDefault(),l.startLoginFlow(),0<o.length&&o.forEach((e=>e.style.display="none"));const r=l.action?.value;return l.npe?.value?"pwd"!==r||l.password?.value?void n.getCaptchaV3Token().then((e=>{if(!e)return;let t=l["g-recaptcha-response"];t||(t=document.createElement("input"),t.setAttribute("type","hidden"),t.setAttribute("name","g-recaptcha-response"),t.setAttribute("autocomplete","off"),l.appendChild(t)),t.value=e})).catch((e=>{l.endLoginFlow(e,400)})).finally((()=>{const o=new FormData(e.target);if(!o.has("npe")||!o.get("npe"))return l.endFlow(newspack_reader_auth_labels.invalid_email,400);"otp"===r?n.authenticateOTP(o.get("otp_code")).then((e=>{l.endLoginFlow(e.message,200,e,t?"":o.get("redirect"))})).catch((e=>{e.expired&&g("link"),l.endLoginFlow(e.message,400)})):fetch(l.getAttribute("action")||window.location.pathname,{method:"POST",headers:{Accept:"application/json"},body:o}).then((e=>{a.setAttribute("data-form-status",e.status),e.json().then((({message:a,data:i})=>{let c=e.status,s=o.get("redirect");"register"===r&&(s=newspack_ras_config.account_url),t&&(s=""),200===c&&n.setReaderEmail(o.get("npe")),n.getOTPHash()&&["register","link"].includes(r)&&(200===c&&g("otp"),200===c&&"link"===r&&(c=null,a=null)),l.endLoginFlow(a,c,i,s)})).catch((()=>{l.endLoginFlow()}))})).catch((()=>{l.endLoginFlow()}))})):l.endLoginFlow(newspack_reader_auth_labels.invalid_password,400):l.endLoginFlow(newspack_reader_auth_labels.invalid_email,400)}))})),[...document.querySelectorAll(".newspack-reader__logins")].forEach((e=>{e.classList.remove("newspack-reader__logins--disabled")})),document.querySelectorAll(".newspack-reader__logins__google").forEach((e=>{const t=e.closest("form"),n=t.querySelector('input[name="redirect"]');e.addEventListener("click",(()=>{t?.startLoginFlow&&t.startLoginFlow();const e=t?((e,t=[])=>Array.from(e.entries()).reduce(((e,[n,a])=>t.includes(n)?(n.indexOf("[]")>-1?(e[n=n.replace("[]","")]=e[n]||[],e[n].push(a)):e[n]=a,e):e),{}))(new FormData(t),["lists[]"]):{};e.current_page_url=window.location.href;const a=window.open("about:blank","newspack_google_login","width=500,height=600");let o=!1;window.addEventListener("google-oauth-success",(()=>{o=!0,(e=>{fetch(`/wp-json/newspack/v1/login/google/register?metadata=${JSON.stringify(e)}`).then((e=>{e.json().then((({message:a,data:o})=>{const r=n?.value||null;t?.endLoginFlow&&t.endLoginFlow(a,e.status,o,r)})).catch((n=>{t?.endLoginFlow&&t.endLoginFlow(n?.message,e.status)}))})).catch((e=>{t?.endLoginFlow&&t.endLoginFlow(e?.message)}))})(e)})),fetch("/wp-json/newspack/v1/login/google?r="+Math.random()).then((e=>e.json().then((t=>Promise.resolve({data:t,status:e.status}))))).then((({data:e,status:n})=>{if(200!==n)a&&a.close(),t?.endLoginFlow&&t.endLoginFlow(e.message,n);else if(a){a.location=e;const n=setInterval((()=>{!o&&a.closed&&(t?.endLoginFlow&&t.endLoginFlow(newspack_reader_auth_labels.login_canceled,401),clearInterval(n))}),500)}else t?.endLoginFlow&&t.endLoginFlow(newspack_reader_auth_labels.blocked_popup)})).catch((e=>{t?.endLoginFlow&&t.endLoginFlow(e?.message,400),a&&a.close()}))}))}))},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",a):a())}))})();