!function(){var e={};const t=newspack_metering_settings,n="metering-"+t.gate_id||0;function o(e){const o=function(e){const o=function(){const e=new Date;switch(e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),t.period){case"day":e.setDate(e.getDate()+1);break;case"week":const t=6-e.getDay();e.setDate(e.getDate()+t);break;case"month":e.setMonth(e.getMonth()+1),e.setDate(1)}return parseInt(e.getTime()/1e3,10)}(),i=e.get(n)||{content:[],expiration:o};return i.expiration=parseInt(i.expiration,10)||0,i.expiration!==o&&(i.expiration<o&&(i.content=[]),i.expiration=o),e.set(n,i),i}(e.store);let i=!1;t.count<=o.content.length&&!o.content.includes(t.post_id)?(!function(){const e=document.querySelector(".entry-content");if(!e)return;document.querySelectorAll(".newspack-popup").forEach((e=>{e.parentNode.removeChild(e)}));const n=t.visible_paragraphs,o=document.querySelectorAll(".entry-content > *"),i=e.innerHTML.indexOf("\x3c!--more--\x3e"),r=document.querySelector(".newspack-memberships__inline-gate");if(i>-1&&t.use_more_tag)e.innerHTML=e.innerHTML.substring(0,i);else{let t=0;o.forEach((o=>{"P"===o.tagName&&t++,t>n&&e.removeChild(o)}))}r&&e.appendChild(r)}(),i=!0):document.querySelectorAll(".newspack-memberships__gate").forEach((e=>{e.parentNode.removeChild(e)})),i||(t.article_view&&e.dispatchActivity(t.article_view.action,t.article_view.data),o.content.includes(t.post_id)||(o.content.push(t.post_id),e.store.set(n,o)))}window.newspackRAS=window.newspackRAS||[],window.newspackRAS.push((e=>o(e)));var i=window;for(var r in e)i[r]=e[r];e.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})}();