import{b as N,a as x,s as d,e as S}from"./chunk.891853ec.js";function T(i,t,e){let n=e.length,f=t.length,l=n,s=0,o=0,c=t[f-1].nextSibling,r=null;for(;s<f||o<l;){if(t[s]===e[o]){s++,o++;continue}for(;t[f-1]===e[l-1];)f--,l--;if(f===s){const h=l<n?o?e[o-1].nextSibling:e[l-o]:c;for(;o<l;)i.insertBefore(e[o++],h)}else if(l===o)for(;s<f;)(!r||!r.has(t[s]))&&t[s].remove(),s++;else if(t[s]===e[l-1]&&e[o]===t[f-1]){const h=t[--f].nextSibling;i.insertBefore(e[o++],t[s++].nextSibling),i.insertBefore(e[--l],h),t[f]=e[l]}else{if(!r){r=new Map;let g=o;for(;g<l;)r.set(e[g],g++)}const h=r.get(t[s]);if(h!=null)if(o<h&&h<l){let g=s,a=1,A;for(;++g<f&&g<l&&!((A=r.get(t[g]))==null||A!==h+a);)a++;if(a>h-o){const b=t[s];for(;o<h;)i.insertBefore(e[o++],b)}else i.replaceChild(e[o++],t[s++])}else s++;else t[s++].remove()}}}const E="_$DX_DELEGATE";function H(i,t,e){let n;return N(f=>{n=f,t===document?i():B(t,i(),t.firstChild?null:void 0,e)}),()=>{n(),t.textContent=""}}function P(i,t,e){const n=document.createElement("template");n.innerHTML=i;let f=n.content.firstChild;return e&&(f=f.firstChild),f}function _(i,t=window.document){const e=t[E]||(t[E]=new Set);for(let n=0,f=i.length;n<f;n++){const l=i[n];e.has(l)||(e.add(l),t.addEventListener(l,C))}}function D(i,t,e,n){n?Array.isArray(e)?(i[`$$${t}`]=e[0],i[`$$${t}Data`]=e[1]):i[`$$${t}`]=e:Array.isArray(e)?i.addEventListener(t,f=>e[0](e[1],f)):i.addEventListener(t,e)}function B(i,t,e,n){if(e!==void 0&&!n&&(n=[]),typeof t!="function")return u(i,t,n,e);x(f=>u(i,t(),f,e),n)}function m(i,t,e={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=f=>w(t,f),d.registry=new Map,d.context={id:e.renderId||"",count:0},w(t,e.renderId);const n=H(i,t,[...t.childNodes]);return d.context=null,n}function M(i){let t,e;return!d.context||!(t=d.registry.get(e=q()))?i.cloneNode(!0):(d.completed&&d.completed.add(t),d.registry.delete(e),t)}function I(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:i,events:t}=d;for(t.queued=!1;t.length;){const[e,n]=t[0];if(!i.has(e))return;C(n),t.shift()}}),d.events.queued=!0)}function C(i){const t=`$$${i.type}`;let e=i.composedPath&&i.composedPath()[0]||i.target;for(i.target!==e&&Object.defineProperty(i,"target",{configurable:!0,value:e}),Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return e||document}}),d.registry&&!d.done&&(d.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));e!==null;){const n=e[t];if(n&&!e.disabled){const f=e[`${t}Data`];if(f!==void 0?n(f,i):n(i),i.cancelBubble)return}e=e.host&&e.host!==e&&e.host instanceof Node?e.host:e.parentNode}}function u(i,t,e,n,f){for(d.context&&!e&&(e=[...i.childNodes]);typeof e=="function";)e=e();if(t===e)return e;const l=typeof t,s=n!==void 0;if(i=s&&e[0]&&e[0].parentNode||i,l==="string"||l==="number"){if(d.context)return e;if(l==="number"&&(t=t.toString()),s){let o=e[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),e=y(i,e,n,o)}else e!==""&&typeof e=="string"?e=i.firstChild.data=t:e=i.textContent=t}else if(t==null||l==="boolean"){if(d.context)return e;e=y(i,e,n)}else{if(l==="function")return x(()=>{let o=t();for(;typeof o=="function";)o=o();e=u(i,o,e,n)}),()=>e;if(Array.isArray(t)){const o=[];if($(o,t,f))return x(()=>e=u(i,o,e,n,!0)),()=>e;if(d.context){for(let c=0;c<o.length;c++)if(o[c].parentNode)return e=o}if(o.length===0){if(e=y(i,e,n),s)return e}else Array.isArray(e)?e.length===0?p(i,o,n):T(i,e,o):(e&&y(i),p(i,o));e=o}else if(t instanceof Node){if(d.context&&t.parentNode)return e=s?[t]:t;if(Array.isArray(e)){if(s)return e=y(i,e,n,t);y(i,e,null,t)}else e==null||e===""||!i.firstChild?i.appendChild(t):i.replaceChild(t,i.firstChild);e=t}}return e}function $(i,t,e){let n=!1;for(let f=0,l=t.length;f<l;f++){let s=t[f],o;if(s instanceof Node)i.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))n=$(i,s)||n;else if((o=typeof s)=="string")i.push(document.createTextNode(s));else if(o==="function")if(e){for(;typeof s=="function";)s=s();n=$(i,Array.isArray(s)?s:[s])||n}else i.push(s),n=!0;else i.push(document.createTextNode(s.toString()))}return n}function p(i,t,e){for(let n=0,f=t.length;n<f;n++)i.insertBefore(t[n],e)}function y(i,t,e,n){if(e===void 0)return i.textContent="";const f=n||document.createTextNode("");if(t.length){let l=!1;for(let s=t.length-1;s>=0;s--){const o=t[s];if(f!==o){const c=o.parentNode===i;!l&&!s?c?i.replaceChild(f,o):i.insertBefore(f,e):c&&o.remove()}else l=!0}}else i.insertBefore(f,e);return[f]}function w(i,t){const e=i.querySelectorAll("*[data-hk]");for(let n=0;n<e.length;n++){const f=e[n],l=f.getAttribute("data-hk");(!t||l.startsWith(t))&&!d.registry.has(l)&&d.registry.set(l,f)}}function q(){const i=d.context;return`${i.id}${i.count++}`}const Y=(...i)=>(S(),m(...i));export{D as a,H as b,_ as d,M as g,Y as h,B as i,I as r,P as t};
