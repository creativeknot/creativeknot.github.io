const a={};function m(t){a.context=t}function I(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const V=(t,e)=>t===e,x={equals:V};let k=R;const p={},f=1,w=2,H={owned:null,cleanups:null,context:null,owner:null};var o=null;let v=null,l=null,g=null,i=null,c=null,E=0;function K(t,e){const s=l,n=o,r=t.length===0?H:{owned:null,cleanups:null,context:null,owner:e||n};o=r,l=null;try{return T(()=>t(()=>N(r)),!0)}finally{l=s,o=n}}function X(t,e){e=e?Object.assign({},x,e):x;const s={value:t,observers:null,observerSlots:null,pending:p,comparator:e.equals||void 0},n=r=>(typeof r=="function"&&(r=r(s.pending!==p?s.pending:s.value)),A(s,r));return[L.bind(s),n]}function $(t,e,s){const n=y(t,e,!0,f);h(n)}function Y(t,e,s){const n=y(t,e,!1,f);h(n)}function Z(t,e,s){k=B;const n=y(t,e,!1,f),r=D&&O(o,D.id);r&&(n.suspense=r),n.user=!0,c?c.push(n):h(n)}function P(t,e,s){s=s?Object.assign({},x,s):x;const n=y(t,e,!0,0);return n.pending=p,n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,h(n),L.bind(n)}function M(t){if(g)return t();let e;const s=g=[];try{e=t()}finally{g=null}return T(()=>{for(let n=0;n<s.length;n+=1){const r=s[n];if(r.pending!==p){const u=r.pending;r.pending=p,A(r,u)}}},!1),e}function d(t){let e,s=l;return l=null,e=t(),l=s,e}function _(t){const e=Symbol("context");return{id:e,Provider:J(e),defaultValue:t}}function q(t){let e;return(e=O(o,t.id))!==void 0?e:t.defaultValue}function Q(t){const e=P(t);return P(()=>C(e()))}let D;function L(){const t=v;if(this.sources&&(this.state||t)){const e=i;i=null,this.state===f||t?h(this):S(this),i=e}if(l){const e=this.observers?this.observers.length:0;l.sources?(l.sources.push(this),l.sourceSlots.push(e)):(l.sources=[this],l.sourceSlots=[e]),this.observers?(this.observers.push(l),this.observerSlots.push(l.sources.length-1)):(this.observers=[l],this.observerSlots=[l.sources.length-1])}return this.value}function A(t,e,s){if(g)return t.pending===p&&g.push(t),t.pending=e,e;if(t.comparator&&t.comparator(t.value,e))return e;let n=!1;return t.value=e,t.observers&&t.observers.length&&T(()=>{for(let r=0;r<t.observers.length;r+=1){const u=t.observers[r];n&&v.disposed.has(u),(n&&!u.tState||!n&&!u.state)&&(u.pure?i.push(u):c.push(u),u.observers&&j(u)),n||(u.state=f)}if(i.length>1e6)throw i=[],new Error},!1),e}function h(t){if(!t.fn)return;N(t);const e=o,s=l,n=E;l=o=t,W(t,t.value,n),l=s,o=e}function W(t,e,s){let n;try{n=t.fn(e)}catch(r){F(r)}(!t.updatedAt||t.updatedAt<=s)&&(t.observers&&t.observers.length?A(t,n):t.value=n,t.updatedAt=s)}function y(t,e,s,n=f,r){const u={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:o,context:null,pure:s};return o===null||o!==H&&(o.owned?o.owned.push(u):o.owned=[u]),u}function b(t){const e=v;if(t.state===0||e)return;if(t.state===w||e)return S(t);if(t.suspense&&d(t.suspense.inFallback))return t.suspense.effects.push(t);const s=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<E);)(t.state||e)&&s.push(t);for(let n=s.length-1;n>=0;n--)if(t=s[n],t.state===f||e)h(t);else if(t.state===w||e){const r=i;i=null,S(t,s[0]),i=r}}function T(t,e){if(i)return t();let s=!1;e||(i=[]),c?s=!0:c=[],E++;try{const n=t();return z(s),n}catch(n){F(n)}finally{i=null,s||(c=null)}}function z(t){i&&(R(i),i=null),!t&&(c.length?M(()=>{k(c),c=null}):c=null)}function R(t){for(let e=0;e<t.length;e++)b(t[e])}function B(t){let e,s=0;for(e=0;e<t.length;e++){const r=t[e];r.user?t[s++]=r:b(r)}a.context&&m();const n=t.length;for(e=0;e<s;e++)b(t[e]);for(e=n;e<t.length;e++)b(t[e])}function S(t,e){const s=v;t.state=0;for(let n=0;n<t.sources.length;n+=1){const r=t.sources[n];r.sources&&(r.state===f||s?r!==e&&b(r):(r.state===w||s)&&S(r,e))}}function j(t){const e=v;for(let s=0;s<t.observers.length;s+=1){const n=t.observers[s];(!n.state||e)&&(n.state=w,n.pure?i.push(n):c.push(n),n.observers&&j(n))}}function N(t){let e;if(t.sources)for(;t.sources.length;){const s=t.sources.pop(),n=t.sourceSlots.pop(),r=s.observers;if(r&&r.length){const u=r.pop(),U=s.observerSlots.pop();n<r.length&&(u.sourceSlots[U]=n,r[n]=u,s.observerSlots[n]=U)}}if(t.owned){for(e=0;e<t.owned.length;e++)N(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function F(t){throw t}function O(t,e){return t?t.context&&t.context[e]!==void 0?t.context[e]:O(t.owner,e):void 0}function C(t){if(typeof t=="function"&&!t.length)return C(t());if(Array.isArray(t)){const e=[];for(let s=0;s<t.length;s++){const n=C(t[s]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return t}function J(t){return function(s){let n;return $(()=>n=d(()=>(o.context={[t]:s.value},Q(()=>s.children)))),n}}let G=!1;function tt(){G=!0}function et(t,e){if(G&&a.context){const s=a.context;m(I());const n=d(()=>t(e||{}));return m(s),n}return d(()=>t(e||{}))}export{Y as a,K as b,X as c,Z as d,tt as e,et as f,_ as g,a as s,q as u};
