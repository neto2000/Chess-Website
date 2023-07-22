var Se=Object.defineProperty;var Ne=(e,t,i)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Y=(e,t,i)=>(Ne(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const s of u)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const s={};return u.integrity&&(s.integrity=u.integrity),u.referrerPolicy&&(s.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?s.credentials="include":u.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(u){if(u.ep)return;u.ep=!0;const s=i(u);fetch(u.href,s)}})();function j(){}function je(e,t){for(const i in t)e[i]=t[i];return e}function ce(e){return e()}function le(){return Object.create(null)}function H(e){e.forEach(ce)}function me(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let J;function $(e,t){return e===t?!0:(J||(J=document.createElement("a")),J.href=t,e===J.href)}function Ae(e){return Object.keys(e).length===0}function Be(e,...t){if(e==null){for(const o of t)o(void 0);return j}const i=e.subscribe(...t);return i.unsubscribe?()=>i.unsubscribe():i}function Le(e,t,i){e.$$.on_destroy.push(Be(t,i))}function Pe(e,t,i,o){if(e){const u=de(e,t,i,o);return e[0](u)}}function de(e,t,i,o){return e[1]&&o?je(i.ctx.slice(),e[1](o(t))):i.ctx}function qe(e,t,i,o){if(e[2]&&o){const u=e[2](o(i));if(t.dirty===void 0)return u;if(typeof u=="object"){const s=[],f=Math.max(t.dirty.length,u.length);for(let r=0;r<f;r+=1)s[r]=t.dirty[r]|u[r];return s}return t.dirty|u}return t.dirty}function Ke(e,t,i,o,u,s){if(u){const f=de(t,i,o,s);e.p(f,u)}}function Re(e){if(e.ctx.length>32){const t=[],i=e.ctx.length/32;for(let o=0;o<i;o++)t[o]=-1;return t}return-1}function S(e,t){e.appendChild(t)}function w(e,t,i){e.insertBefore(t,i||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function M(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function F(){return V(" ")}function ne(){return V("")}function ie(e,t,i,o){return e.addEventListener(t,i,o),()=>e.removeEventListener(t,i,o)}function b(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function Ie(e){return Array.from(e.childNodes)}let re;function z(e){re=e}const C=[],v=[];let I=[];const x=[],Fe=Promise.resolve();let ee=!1;function ze(){ee||(ee=!0,Fe.then(pe))}function te(e){I.push(e)}function E(e){x.push(e)}const Z=new Set;let K=0;function pe(){if(K!==0)return;const e=re;do{try{for(;K<C.length;){const t=C[K];K++,z(t),He(t.$$)}}catch(t){throw C.length=0,K=0,t}for(z(null),C.length=0,K=0;v.length;)v.pop()();for(let t=0;t<I.length;t+=1){const i=I[t];Z.has(i)||(Z.add(i),i())}I.length=0}while(C.length);for(;x.length;)x.pop()();ee=!1,Z.clear(),z(e)}function He(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Qe(e){const t=[],i=[];I.forEach(o=>e.indexOf(o)===-1?t.push(o):i.push(o)),i.forEach(o=>o()),I=t}const T=new Set;let q;function Q(){q={r:0,c:[],p:q}}function G(){q.r||H(q.c),q=q.p}function d(e,t){e&&e.i&&(T.delete(e),e.i(t))}function p(e,t,i,o){if(e&&e.o){if(T.has(e))return;T.add(e),q.c.push(()=>{T.delete(e),o&&(i&&e.d(1),o())}),e.o(t)}else o&&o()}function ue(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function O(e,t,i){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=i,i(e.$$.ctx[o]))}function P(e){e&&e.c()}function B(e,t,i){const{fragment:o,after_update:u}=e.$$;o&&o.m(t,i),te(()=>{const s=e.$$.on_mount.map(ce).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...s):H(s),e.$$.on_mount=[]}),u.forEach(te)}function L(e,t){const i=e.$$;i.fragment!==null&&(Qe(i.after_update),H(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(C.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,i,o,u,s,f,r=[-1]){const n=re;z(e);const l=e.$$={fragment:null,ctx:[],props:s,update:j,not_equal:u,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(n?n.$$.context:[])),callbacks:le(),dirty:r,skip_bound:!1,root:t.target||n.$$.root};f&&f(l.root);let g=!1;if(l.ctx=i?i(e,t.props||{},(_,a,...c)=>{const A=c.length?c[0]:a;return l.ctx&&u(l.ctx[_],l.ctx[_]=A)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](A),g&&Ge(e,_)),a}):[],l.update(),g=!0,H(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const _=Ie(t.target);l.fragment&&l.fragment.l(_),_.forEach(y)}else l.fragment&&l.fragment.c();t.intro&&d(e.$$.fragment),B(e,t.target,t.anchor),pe()}z(n)}class fe{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){L(this,1),this.$destroy=j}$on(t,i){if(!me(i))return j;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(i),()=>{const u=o.indexOf(i);u!==-1&&o.splice(u,1)}}$set(t){this.$$set&&!Ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Je);function Te(e){let t,i,o,u,s;return{c(){t=M("button"),i=M("img"),b(i,"class","figure-image svelte-1rysv6i"),$(i.src,o=e[1]+e[0]+".png")||b(i,"src",o),b(i,"alt",""),b(t,"class","figure-button svelte-1rysv6i")},m(f,r){w(f,t,r),S(t,i),u||(s=ie(t,"click",e[2]),u=!0)},p(f,[r]){r&3&&!$(i.src,o=f[1]+f[0]+".png")&&b(i,"src",o)},i:j,o:j,d(f){f&&y(t),u=!1,s()}}}function Ue(e,t,i){let o,{type:u}=t,{team:s}=t,{current_team:f}=t,{position:r={x:0,y:0}}=t,{field_array:n}=t,{move_to:l={bool:!1}}=t,g=!1;function _(){if(f!=s){console.log("cur: "+f+", team: "+s);return}g?c():a()}function a(){console.log("show highlight"),A(-1,0)}function c(){X(-1,0)}function A(m,k){if(r.y+m>=0&&r.y+m<=8&&r.x+k>=0&&r.x+k<=8){if(n[r.y+m][r.x+k].team==s)return;i(4,n[r.y+m][r.x+k].is_highlight=!0,n),i(4,n[r.y+m][r.x+k].origin=r,n),g=!0}}function X(m,k){if(r.y+m>=0&&r.y+m<=8&&r.x+k>=0&&r.x+k<=8){if(n[r.y+m][r.x+k].team==s)return;i(4,n[r.y+m][r.x+k].is_highlight=!1,n),g=!1}}return e.$$set=m=>{"type"in m&&i(0,u=m.type),"team"in m&&i(5,s=m.team),"current_team"in m&&i(6,f=m.current_team),"position"in m&&i(7,r=m.position),"field_array"in m&&i(4,n=m.field_array),"move_to"in m&&i(3,l=m.move_to)},e.$$.update=()=>{e.$$.dirty&32&&i(1,o="/images/"+s+"-pixel/"),e.$$.dirty&169&&l.bool&&(i(3,l.bool=!1,l),c(),i(4,n[r.y][r.x]={figure:"none",is_highlight:!1},n),i(4,n[l.pos.y][l.pos.x]={figure:u,team:s,move_to:{bool:!1},is_highlight:!1},n))},[u,o,_,l,n,s,f,r]}class W extends fe{constructor(t){super(),oe(this,t,Ue,Te,U,{type:0,team:5,current_team:6,position:7,field_array:4,move_to:3})}}function Ve(e){let t,i,o,u,s,f,r;const n=e[5].default,l=Pe(n,e,e[4],null);return{c(){t=M("button"),i=M("img"),u=F(),l&&l.c(),b(i,"class","highlight-image svelte-1h4ejhx"),$(i.src,o="/images/highlight.svg")||b(i,"src",o),b(i,"alt",""),b(t,"class","highlight-button svelte-1h4ejhx")},m(g,_){w(g,t,_),S(t,i),S(t,u),l&&l.m(t,null),s=!0,f||(r=ie(t,"click",e[0]),f=!0)},p(g,[_]){l&&l.p&&(!s||_&16)&&Ke(l,n,g,g[4],s?qe(n,g[4],_,null):Re(g[4]),null)},i(g){s||(d(l,g),s=!0)},o(g){p(l,g),s=!1},d(g){g&&y(t),l&&l.d(g),f=!1,r()}}}function We(e,t,i){let{$$slots:o={},$$scope:u}=t,{origin:s={x:0,y:0}}=t,{field_array:f}=t,{position:r}=t;function n(){i(1,f[s.y][s.x].move_to={bool:!0,pos:r},f),i(1,f),console.log("move from "),console.log(s),console.log(r),console.log(f[7][6].move_to),console.log(f[7][1].move_to)}return e.$$set=l=>{"origin"in l&&i(2,s=l.origin),"field_array"in l&&i(1,f=l.field_array),"position"in l&&i(3,r=l.position),"$$scope"in l&&i(4,u=l.$$scope)},[n,f,s,r,u,o]}class D extends fe{constructor(t){super(),oe(this,t,We,Ve,U,{origin:2,field_array:1,position:3})}}const R=[];function De(e,t=j){let i;const o=new Set;function u(r){if(U(e,r)&&(e=r,i)){const n=!R.length;for(const l of o)l[1](),R.push(l,e);if(n){for(let l=0;l<R.length;l+=2)R[l][0](R[l+1]);R.length=0}}}function s(r){u(r(e))}function f(r,n=j){const l=[r,n];return o.add(l),o.size===1&&(i=t(u,s)||j),r(e),()=>{o.delete(l),o.size===0&&i&&(i(),i=null)}}return{set:u,update:s,subscribe:f}}const Xe=()=>{let e=new WebSocket("ws://localhost:9000/ws");const t=De(0),i=()=>t,o=u=>{console.log("send"),e.send(u)};return e.onmessage=function(u){t.set(u.data)},{getResponse:i,sendMessage:o}};function se(e,t,i){const o=e.slice();return o[24]=t[i],o[26]=i,o}function Ye(e){let t,i,o,u,s,f,r;const n=[et,xe,$e],l=[];function g(_,a){return a&4&&(i=null),a&4&&(o=null),i==null&&(i=_[2][Math.floor(_[26]/8)][_[26]%8].figure=="none"),i?0:(o==null&&(o=!!_[2][Math.floor(_[26]/8)][_[26]%8].is_highlight),o?1:2)}return u=g(e,-1),s=l[u]=n[u](e),{c(){t=M("div"),s.c(),f=F(),b(t,"class","square-odd svelte-9e2cii")},m(_,a){w(_,t,a),l[u].m(t,null),S(t,f),r=!0},p(_,a){let c=u;u=g(_,a),u===c?l[u].p(_,a):(Q(),p(l[c],1,1,()=>{l[c]=null}),G(),s=l[u],s?s.p(_,a):(s=l[u]=n[u](_),s.c()),d(s,1),s.m(t,f))},i(_){r||(d(s),r=!0)},o(_){p(s),r=!1},d(_){_&&y(t),l[u].d()}}}function Ze(e){let t,i,o,u,s,f,r;const n=[rt,it,nt],l=[];function g(_,a){return a&4&&(i=null),a&4&&(o=null),i==null&&(i=_[2][Math.floor(_[26]/8)][_[26]%8].figure=="none"),i?0:(o==null&&(o=!!_[2][Math.floor(_[26]/8)][_[26]%8].is_highlight),o?1:2)}return u=g(e,-1),s=l[u]=n[u](e),{c(){t=M("div"),s.c(),f=F(),b(t,"class","square-even svelte-9e2cii")},m(_,a){w(_,t,a),l[u].m(t,null),S(t,f),r=!0},p(_,a){let c=u;u=g(_,a),u===c?l[u].p(_,a):(Q(),p(l[c],1,1,()=>{l[c]=null}),G(),s=l[u],s?s.p(_,a):(s=l[u]=n[u](_),s.c()),d(s,1),s.m(t,f))},i(_){r||(d(s),r=!0)},o(_){p(s),r=!1},d(_){_&&y(t),l[u].d()}}}function $e(e){let t,i,o,u;function s(n){e[17](n)}function f(n){e[18](n)}let r={type:e[2][Math.floor(e[26]/8)][e[26]%8].figure,team:e[2][Math.floor(e[26]/8)][e[26]%8].team,position:{x:e[26]%8,y:Math.floor(e[26]/8)},move_to:e[2][Math.floor(e[26]/8)][e[26]%8].move_to};return e[1]!==void 0&&(r.current_team=e[1]),e[2]!==void 0&&(r.field_array=e[2]),t=new W({props:r}),v.push(()=>O(t,"current_team",s)),v.push(()=>O(t,"field_array",f)),{c(){P(t.$$.fragment)},m(n,l){B(t,n,l),u=!0},p(n,l){const g={};l&4&&(g.type=n[2][Math.floor(n[26]/8)][n[26]%8].figure),l&4&&(g.team=n[2][Math.floor(n[26]/8)][n[26]%8].team),l&4&&(g.move_to=n[2][Math.floor(n[26]/8)][n[26]%8].move_to),!i&&l&2&&(i=!0,g.current_team=n[1],E(()=>i=!1)),!o&&l&4&&(o=!0,g.field_array=n[2],E(()=>o=!1)),t.$set(g)},i(n){u||(d(t.$$.fragment,n),u=!0)},o(n){p(t.$$.fragment,n),u=!1},d(n){L(t,n)}}}function xe(e){let t,i,o;function u(f){e[16](f)}let s={origin:e[2][Math.floor(e[26]/8)][e[26]%8].origin,position:{x:e[26]%8,y:Math.floor(e[26]/8)},$$slots:{default:[tt]},$$scope:{ctx:e}};return e[2]!==void 0&&(s.field_array=e[2]),t=new D({props:s}),v.push(()=>O(t,"field_array",u)),{c(){P(t.$$.fragment)},m(f,r){B(t,f,r),o=!0},p(f,r){const n={};r&4&&(n.origin=f[2][Math.floor(f[26]/8)][f[26]%8].origin),r&134217734&&(n.$$scope={dirty:r,ctx:f}),!i&&r&4&&(i=!0,n.field_array=f[2],E(()=>i=!1)),t.$set(n)},i(f){o||(d(t.$$.fragment,f),o=!0)},o(f){p(t.$$.fragment,f),o=!1},d(f){L(t,f)}}}function et(e){let t="",i,o,u=e[2][Math.floor(e[26]/8)][e[26]%8].is_highlight,s,f,r=u&&ae(e);return{c(){i=V(t),o=F(),r&&r.c(),s=ne()},m(n,l){w(n,i,l),w(n,o,l),r&&r.m(n,l),w(n,s,l),f=!0},p(n,l){l&4&&(u=n[2][Math.floor(n[26]/8)][n[26]%8].is_highlight),u?r?(r.p(n,l),l&4&&d(r,1)):(r=ae(n),r.c(),d(r,1),r.m(s.parentNode,s)):r&&(Q(),p(r,1,1,()=>{r=null}),G())},i(n){f||(d(r),f=!0)},o(n){p(r),f=!1},d(n){n&&(y(i),y(o),y(s)),r&&r.d(n)}}}function tt(e){let t,i,o,u;function s(n){e[14](n)}function f(n){e[15](n)}let r={type:e[2][Math.floor(e[26]/8)][e[26]%8].figure,team:e[2][Math.floor(e[26]/8)][e[26]%8].team,position:{x:e[26]%8,y:Math.floor(e[26]/8)},move_to:e[2][Math.floor(e[26]/8)][e[26]%8].move_to};return e[1]!==void 0&&(r.current_team=e[1]),e[2]!==void 0&&(r.field_array=e[2]),t=new W({props:r}),v.push(()=>O(t,"current_team",s)),v.push(()=>O(t,"field_array",f)),{c(){P(t.$$.fragment)},m(n,l){B(t,n,l),u=!0},p(n,l){const g={};l&4&&(g.type=n[2][Math.floor(n[26]/8)][n[26]%8].figure),l&4&&(g.team=n[2][Math.floor(n[26]/8)][n[26]%8].team),l&4&&(g.move_to=n[2][Math.floor(n[26]/8)][n[26]%8].move_to),!i&&l&2&&(i=!0,g.current_team=n[1],E(()=>i=!1)),!o&&l&4&&(o=!0,g.field_array=n[2],E(()=>o=!1)),t.$set(g)},i(n){u||(d(t.$$.fragment,n),u=!0)},o(n){p(t.$$.fragment,n),u=!1},d(n){L(t,n)}}}function ae(e){let t,i,o;function u(f){e[13](f)}let s={origin:e[2][Math.floor(e[26]/8)][e[26]%8].origin,position:{x:e[26]%8,y:Math.floor(e[26]/8)}};return e[2]!==void 0&&(s.field_array=e[2]),t=new D({props:s}),v.push(()=>O(t,"field_array",u)),{c(){P(t.$$.fragment)},m(f,r){B(t,f,r),o=!0},p(f,r){const n={};r&4&&(n.origin=f[2][Math.floor(f[26]/8)][f[26]%8].origin),!i&&r&4&&(i=!0,n.field_array=f[2],E(()=>i=!1)),t.$set(n)},i(f){o||(d(t.$$.fragment,f),o=!0)},o(f){p(t.$$.fragment,f),o=!1},d(f){L(t,f)}}}function nt(e){let t,i,o,u;function s(n){e[11](n)}function f(n){e[12](n)}let r={type:e[2][Math.floor(e[26]/8)][e[26]%8].figure,team:e[2][Math.floor(e[26]/8)][e[26]%8].team,position:{x:e[26]%8,y:Math.floor(e[26]/8)},move_to:e[2][Math.floor(e[26]/8)][e[26]%8].move_to};return e[1]!==void 0&&(r.current_team=e[1]),e[2]!==void 0&&(r.field_array=e[2]),t=new W({props:r}),v.push(()=>O(t,"current_team",s)),v.push(()=>O(t,"field_array",f)),{c(){P(t.$$.fragment)},m(n,l){B(t,n,l),u=!0},p(n,l){const g={};l&4&&(g.type=n[2][Math.floor(n[26]/8)][n[26]%8].figure),l&4&&(g.team=n[2][Math.floor(n[26]/8)][n[26]%8].team),l&4&&(g.move_to=n[2][Math.floor(n[26]/8)][n[26]%8].move_to),!i&&l&2&&(i=!0,g.current_team=n[1],E(()=>i=!1)),!o&&l&4&&(o=!0,g.field_array=n[2],E(()=>o=!1)),t.$set(g)},i(n){u||(d(t.$$.fragment,n),u=!0)},o(n){p(t.$$.fragment,n),u=!1},d(n){L(t,n)}}}function it(e){let t,i,o;function u(f){e[10](f)}let s={origin:e[2][Math.floor(e[26]/8)][e[26]%8].origin,position:{x:e[26]%8,y:Math.floor(e[26]/8)},$$slots:{default:[ot]},$$scope:{ctx:e}};return e[2]!==void 0&&(s.field_array=e[2]),t=new D({props:s}),v.push(()=>O(t,"field_array",u)),{c(){P(t.$$.fragment)},m(f,r){B(t,f,r),o=!0},p(f,r){const n={};r&4&&(n.origin=f[2][Math.floor(f[26]/8)][f[26]%8].origin),r&134217734&&(n.$$scope={dirty:r,ctx:f}),!i&&r&4&&(i=!0,n.field_array=f[2],E(()=>i=!1)),t.$set(n)},i(f){o||(d(t.$$.fragment,f),o=!0)},o(f){p(t.$$.fragment,f),o=!1},d(f){L(t,f)}}}function rt(e){let t="",i,o,u=e[2][Math.floor(e[26]/8)][e[26]%8].is_highlight,s,f,r=u&&_e(e);return{c(){i=V(t),o=F(),r&&r.c(),s=ne()},m(n,l){w(n,i,l),w(n,o,l),r&&r.m(n,l),w(n,s,l),f=!0},p(n,l){l&4&&(u=n[2][Math.floor(n[26]/8)][n[26]%8].is_highlight),u?r?(r.p(n,l),l&4&&d(r,1)):(r=_e(n),r.c(),d(r,1),r.m(s.parentNode,s)):r&&(Q(),p(r,1,1,()=>{r=null}),G())},i(n){f||(d(r),f=!0)},o(n){p(r),f=!1},d(n){n&&(y(i),y(o),y(s)),r&&r.d(n)}}}function ot(e){let t,i,o,u;function s(n){e[8](n)}function f(n){e[9](n)}let r={type:e[2][Math.floor(e[26]/8)][e[26]%8].figure,team:e[2][Math.floor(e[26]/8)][e[26]%8].team,position:{x:e[26]%8,y:Math.floor(e[26]/8)},move_to:e[2][Math.floor(e[26]/8)][e[26]%8].move_to};return e[1]!==void 0&&(r.current_team=e[1]),e[2]!==void 0&&(r.field_array=e[2]),t=new W({props:r}),v.push(()=>O(t,"current_team",s)),v.push(()=>O(t,"field_array",f)),{c(){P(t.$$.fragment)},m(n,l){B(t,n,l),u=!0},p(n,l){const g={};l&4&&(g.type=n[2][Math.floor(n[26]/8)][n[26]%8].figure),l&4&&(g.team=n[2][Math.floor(n[26]/8)][n[26]%8].team),l&4&&(g.move_to=n[2][Math.floor(n[26]/8)][n[26]%8].move_to),!i&&l&2&&(i=!0,g.current_team=n[1],E(()=>i=!1)),!o&&l&4&&(o=!0,g.field_array=n[2],E(()=>o=!1)),t.$set(g)},i(n){u||(d(t.$$.fragment,n),u=!0)},o(n){p(t.$$.fragment,n),u=!1},d(n){L(t,n)}}}function _e(e){let t,i,o;function u(f){e[7](f)}let s={origin:e[2][Math.floor(e[26]/8)][e[26]%8].origin,position:{x:e[26]%8,y:Math.floor(e[26]/8)}};return e[2]!==void 0&&(s.field_array=e[2]),t=new D({props:s}),v.push(()=>O(t,"field_array",u)),{c(){P(t.$$.fragment)},m(f,r){B(t,f,r),o=!0},p(f,r){const n={};r&4&&(n.origin=f[2][Math.floor(f[26]/8)][f[26]%8].origin),!i&&r&4&&(i=!0,n.field_array=f[2],E(()=>i=!1)),t.$set(n)},i(f){o||(d(t.$$.fragment,f),o=!0)},o(f){p(t.$$.fragment,f),o=!1},d(f){L(t,f)}}}function ge(e){let t,i,o,u;const s=[Ze,Ye],f=[];function r(n,l){return(n[26]+Math.floor(n[26]/8))%2==0?0:1}return t=r(e),i=f[t]=s[t](e),{c(){i.c(),o=ne()},m(n,l){f[t].m(n,l),w(n,o,l),u=!0},p(n,l){i.p(n,l)},i(n){u||(d(i),u=!0)},o(n){p(i),u=!1},d(n){n&&y(o),f[t].d(n)}}}function he(e){let t,i,o,u,s;return{c(){t=M("div"),i=M("div"),o=M("button"),o.textContent="Join",b(o,"class","overlay-text svelte-9e2cii"),b(i,"class","overlay-container svelte-9e2cii"),b(t,"class","GameOverScreen svelte-9e2cii")},m(f,r){w(f,t,r),S(t,i),S(i,o),u||(s=ie(o,"click",e[19]),u=!0)},p:j,d(f){f&&y(t),u=!1,s()}}}function ft(e){let t,i,o,u,s,f,r=ue({length:64}),n=[];for(let _=0;_<r.length;_+=1)n[_]=ge(se(e,r,_));const l=_=>p(n[_],1,1,()=>{n[_]=null});let g=e[0]&&he(e);return{c(){t=M("main"),i=M("div"),o=M("div");for(let _=0;_<n.length;_+=1)n[_].c();u=F(),s=M("div"),g&&g.c(),b(o,"class","chess-board svelte-9e2cii"),b(i,"class","board-container svelte-9e2cii")},m(_,a){w(_,t,a),S(t,i),S(i,o);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(o,null);S(t,u),S(t,s),g&&g.m(s,null),f=!0},p(_,[a]){if(a&6){r=ue({length:64});let c;for(c=0;c<r.length;c+=1){const A=se(_,r,c);n[c]?(n[c].p(A,a),d(n[c],1)):(n[c]=ge(A),n[c].c(),d(n[c],1),n[c].m(o,null))}for(Q(),c=r.length;c<n.length;c+=1)l(c);G()}_[0]?g?g.p(_,a):(g=he(_),g.c(),g.m(s,null)):g&&(g.d(1),g=null)},i(_){if(!f){for(let a=0;a<r.length;a+=1)d(n[a]);f=!0}},o(_){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)p(n[a]);f=!1},d(_){_&&y(t),Ce(n,_),g&&g.d()}}}function lt(e,t,i){let o,u;const s=Xe(),f=s.getResponse();Le(e,f,h=>i(6,u=h));let r=!0,n="white";function l(h){h=="which team"&&i(0,r=!1),s.sendMessage(h)}function g(h){for(let N=0;N<8;N++)i(2,a[6][N]={figure:"Pawn",team:h,move_to:{bool:!1}},a);i(2,a[7][0]={figure:"Rook",team:h,move_to:{bool:!1}},a),i(2,a[7][7]={figure:"Rook",team:h,move_to:{bool:!1}},a),i(2,a[7][1]={figure:"Knight",team:h,move_to:{bool:!1}},a),i(2,a[7][6]={figure:"Knight",team:h,move_to:{bool:!1}},a),i(2,a[7][2]={figure:"Bishop",team:h,move_to:{bool:!1}},a),i(2,a[7][5]={figure:"Bishop",team:h,move_to:{bool:!1}},a),i(2,a[7][3]={figure:"Queen",team:h,move_to:{bool:!1}},a),i(2,a[7][4]={figure:"King",team:h,move_to:{bool:!1}},a)}function _(h){for(let N=0;N<8;N++)i(2,a[1][N]={figure:"Pawn",team:h,move_to:{bool:!1}},a);i(2,a[0][0]={figure:"Rook",team:h,move_to:{bool:!1}},a),i(2,a[0][7]={figure:"Rook",team:h,move_to:{bool:!1}},a),i(2,a[0][1]={figure:"Knight",team:h,move_to:{bool:!1}},a),i(2,a[0][6]={figure:"Knight",team:h,move_to:{bool:!1}},a),i(2,a[0][2]={figure:"Bishop",team:h,move_to:{bool:!1}},a),i(2,a[0][5]={figure:"Bishop",team:h,move_to:{bool:!1}},a),i(2,a[0][3]={figure:"Queen",team:h,move_to:{bool:!1}},a),i(2,a[0][4]={figure:"King",team:h,move_to:{bool:!1}},a)}let a=[];for(let h=0;h<8;h++){a.push([]);for(let N=0;N<8;N++)a[h].push({figure:"none",move_to:{bool:!1},is_highlight:!1})}a=a;function c(h){a=h,i(2,a)}function A(h){n=h,i(1,n)}function X(h){a=h,i(2,a)}function m(h){a=h,i(2,a)}function k(h){n=h,i(1,n)}function be(h){a=h,i(2,a)}function ye(h){a=h,i(2,a)}function ve(h){n=h,i(1,n)}function Me(h){a=h,i(2,a)}function we(h){a=h,i(2,a)}function ke(h){n=h,i(1,n)}function Ee(h){a=h,i(2,a)}const Oe=()=>l("which team");return e.$$.update=()=>{e.$$.dirty&64&&i(5,o=u.toString()),e.$$.dirty&32&&(console.log(o),o=="black"?(g("black"),_("white")):o=="white"&&(g("white"),_("black")))},[r,n,a,f,l,o,u,c,A,X,m,k,be,ye,ve,Me,we,ke,Ee,Oe]}class ut extends fe{constructor(t){super(),oe(this,t,lt,ft,U,{})}}new ut({target:document.getElementById("app")});