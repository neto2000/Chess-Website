var ze=Object.defineProperty;var Ge=(e,t,r)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var se=(e,t,r)=>(Ge(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const c of h)if(c.type==="childList")for(const _ of c.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&u(_)}).observe(document,{childList:!0,subtree:!0});function r(h){const c={};return h.integrity&&(c.integrity=h.integrity),h.referrerPolicy&&(c.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?c.credentials="include":h.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(h){if(h.ep)return;h.ep=!0;const c=r(h);fetch(h.href,c)}})();function F(){}function Te(e,t){for(const r in t)e[r]=t[r];return e}function qe(e){return e()}function ye(){return Object.create(null)}function X(e){e.forEach(qe)}function Ee(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ee;function he(e,t){return e===t?!0:(ee||(ee=document.createElement("a")),ee.href=t,e===ee.href)}function Ue(e){return Object.keys(e).length===0}function Ve(e,...t){if(e==null){for(const u of t)u(void 0);return F}const r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function We(e,t,r){e.$$.on_destroy.push(Ve(t,r))}function Ye(e,t,r,u){if(e){const h=Be(e,t,r,u);return e[0](h)}}function Be(e,t,r,u){return e[1]&&u?Te(r.ctx.slice(),e[1](u(t))):r.ctx}function De(e,t,r,u){if(e[2]&&u){const h=e[2](u(r));if(t.dirty===void 0)return h;if(typeof h=="object"){const c=[],_=Math.max(t.dirty.length,h.length);for(let i=0;i<_;i+=1)c[i]=t.dirty[i]|h[i];return c}return t.dirty|h}return t.dirty}function Xe(e,t,r,u,h,c){if(h){const _=Be(t,r,u,c);e.p(_,h)}}function Ze(e){if(e.ctx.length>32){const t=[],r=e.ctx.length/32;for(let u=0;u<r;u++)t[u]=-1;return t}return-1}function C(e,t){e.appendChild(t)}function L(e,t,r){e.insertBefore(t,r||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function xe(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function A(e){return document.createElement(e)}function te(e){return document.createTextNode(e)}function J(){return te(" ")}function me(){return te("")}function pe(e,t,r,u){return e.addEventListener(t,r,u),()=>e.removeEventListener(t,r,u)}function R(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function $e(e){return Array.from(e.childNodes)}let be;function D(e){be=e}const V=[],K=[];let W=[];const ge=[],er=Promise.resolve();let ce=!1;function rr(){ce||(ce=!0,er.then(Qe))}function ae(e){W.push(e)}function Q(e){ge.push(e)}const _e=new Set;let T=0;function Qe(){if(T!==0)return;const e=be;do{try{for(;T<V.length;){const t=V[T];T++,D(t),tr(t.$$)}}catch(t){throw V.length=0,T=0,t}for(D(null),V.length=0,T=0;K.length;)K.pop()();for(let t=0;t<W.length;t+=1){const r=W[t];_e.has(r)||(_e.add(r),r())}W.length=0}while(V.length);for(;ge.length;)ge.pop()();ce=!1,_e.clear(),D(e)}function tr(e){if(e.fragment!==null){e.update(),X(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function fr(e){const t=[],r=[];W.forEach(u=>e.indexOf(u)===-1?t.push(u):r.push(u)),r.forEach(u=>u()),W=t}const re=new Set;let G;function x(){G={r:0,c:[],p:G}}function $(){G.r||X(G.c),G=G.p}function v(e,t){e&&e.i&&(re.delete(e),e.i(t))}function q(e,t,r,u){if(e&&e.o){if(re.has(e))return;re.add(e),G.c.push(()=>{re.delete(e),u&&(r&&e.d(1),u())}),e.o(t)}else u&&u()}function de(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function O(e,t,r){const u=e.$$.props[t];u!==void 0&&(e.$$.bound[u]=r,r(e.$$.ctx[u]))}function I(e){e&&e.c()}function j(e,t,r){const{fragment:u,after_update:h}=e.$$;u&&u.m(t,r),ae(()=>{const c=e.$$.on_mount.map(qe).filter(Ee);e.$$.on_destroy?e.$$.on_destroy.push(...c):X(c),e.$$.on_mount=[]}),h.forEach(ae)}function H(e,t){const r=e.$$;r.fragment!==null&&(fr(r.after_update),X(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function or(e,t){e.$$.dirty[0]===-1&&(V.push(e),rr(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function fe(e,t,r,u,h,c,_,i=[-1]){const l=be;D(e);const o=e.$$={fragment:null,ctx:[],props:c,update:F,not_equal:h,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:ye(),dirty:i,skip_bound:!1,root:t.target||l.$$.root};_&&_(o.root);let f=!1;if(o.ctx=r?r(e,t.props||{},(g,s,...p)=>{const M=p.length?p[0]:s;return o.ctx&&h(o.ctx[g],o.ctx[g]=M)&&(!o.skip_bound&&o.bound[g]&&o.bound[g](M),f&&or(e,g)),s}):[],o.update(),f=!0,X(o.before_update),o.fragment=u?u(o.ctx):!1,t.target){if(t.hydrate){const g=$e(t.target);o.fragment&&o.fragment.l(g),g.forEach(S)}else o.fragment&&o.fragment.c();t.intro&&v(e.$$.fragment),j(e,t.target,t.anchor),Qe()}D(l)}class oe{constructor(){se(this,"$$");se(this,"$$set")}$destroy(){H(this,1),this.$destroy=F}$on(t,r){if(!Ee(r))return F;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(r),()=>{const h=u.indexOf(r);h!==-1&&u.splice(h,1)}}$set(t){this.$$set&&!Ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nr="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nr);function lr(e,t,r){let{check_list:u=[!1]}=t,{prevent_position:h=[]}=t;const c=(l,o,f,g)=>{r(0,u=[!1]),console.log("CHECK CHECK"),_("Pawn",f,g,l,{x:o.x-1,y:o.y-1}),_("Pawn",f,g,l,{x:o.x+1,y:o.y-1});for(let s=-1;s<2;s++)for(let p=-1;p<2;p++)p==0&&s==0||_("King",f,g,l,{x:o.x+p,y:o.y+s});for(let s=-1;s>-8;s--){let p=_("Rook",f,g,l,{x:o.x+s,y:o.y});if(!_("Queen",f,g,l,{x:o.x+s,y:o.y})&&!p)break}for(let s=1;s<8;s++){let p=_("Rook",f,g,l,{x:o.x+s,y:o.y});if(!_("Queen",f,g,l,{x:o.x+s,y:o.y})&&!p)break}for(let s=-1;s>-8;s--){let p=_("Rook",f,g,l,{x:o.x,y:o.y+s});if(!_("Queen",f,g,l,{x:o.x,y:o.y+s})&&!p)break}for(let s=1;s<8;s++){let p=_("Rook",f,g,l,{x:o.x,y:o.y+s});if(!_("Queen",f,g,l,{x:o.x,y:o.y+s})&&!p)break}for(let s=-1;s>-8;s--){let p=_("Bishop",f,g,l,{x:o.x+s,y:o.y+s});if(!_("Queen",f,g,l,{x:o.x+s,y:o.y+s})&&!p)break}for(let s=1;s<8;s++){let p=_("Bishop",f,g,l,{x:o.x+s,y:o.y+s});if(!_("Queen",f,g,l,{x:o.x+s,y:o.y+s})&&!p)break}for(let s=-1;s>-8;s--){let p=_("Bishop",f,g,l,{x:o.x-s,y:o.y+s});if(!_("Queen",f,g,l,{x:o.x-s,y:o.y+s})&&!p)break}for(let s=1;s<8;s++){let p=_("Bishop",f,g,l,{x:o.x-s,y:o.y+s});if(!_("Queen",f,g,l,{x:o.x-s,y:o.y+s})&&!p)break}_("Knight",f,g,l,{x:o.x-2,y:o.y+1}),_("Knight",f,g,l,{x:o.x-2,y:o.y-1}),_("Knight",f,g,l,{x:o.x+2,y:o.y+1}),_("Knight",f,g,l,{x:o.x+2,y:o.y-1}),_("Knight",f,g,l,{x:o.x-1,y:o.y+2}),_("Knight",f,g,l,{x:o.x+1,y:o.y+2}),_("Knight",f,g,l,{x:o.x-1,y:o.y-2}),_("Knight",f,g,l,{x:o.x+1,y:o.y-2})};function _(l,o,f,g,s){return s.y<0||s.y>7||s.x<0||s.x>7?(console.log("check: over borders!"),!1):g[s.y][s.x].team==o?(console.log("check: own team!"),!1):(g[s.y][s.x].figure==l&&g[s.y][s.x].team==f&&(console.log("chess"),r(0,u[0]=!0,u),u.push({type:l,pos:s}),console.log(u)),g[s.y][s.x].team!=f)}const i=l=>{r(1,h=[]);for(let o=0;o<u.length;o++)if(h.push(u[o].pos),u[o].type=="Queen"||u[o].type=="Rook"||u[o].type=="Bishop"){if(u[o].pos.x==l.x){if(u[o].pos.y>l.y)for(let f=l.y+1;f<u[o].pos.y;f++)h.push({x:l.x,y:f});else for(let f=u[o].pos.y+1;f<l.y;f++)h.push({x:l.x,y:f});continue}if(u[o].pos.y==l.y){if(u[o].pos.x>l.x)for(let f=l.x+1;f<u[o].pos.x;f++)h.push({y:l.y,x:f});else for(let f=u[o].pos.x+1;f<l.x;f++)h.push({y:l.y,x:f});continue}if(u[o].pos.y>l.y&&u[o].pos.x>l.x)for(let f=1;l.x+f<u[o].pos.x;f++)h.push({x:l.x+f,y:l.y+f});if(u[o].pos.y<l.y&&u[o].pos.x<l.x)for(let f=1;f+u[o].pos.x<l.x;f++)h.push({x:u[o].pos.x+f,y:u[o].pos.y+f});if(u[o].pos.y>l.y&&u[o].pos.x<l.x)for(let f=1;f+u[o].pos.x<l.x;f++)h.push({x:l.x-f,y:l.y+f});if(u[o].pos.y<l.y&&u[o].pos.x>l.x)for(let f=1;l.x+f<u[o].pos.x;f++)h.push({x:l.x+f,y:l.y-f})}console.log(h)};return e.$$set=l=>{"check_list"in l&&r(0,u=l.check_list),"prevent_position"in l&&r(1,h=l.prevent_position)},[u,h,c,i]}class Oe extends oe{constructor(t){super(),fe(this,t,lr,null,Z,{check_list:0,prevent_position:1,check_check:2,get_check_prevent_position:3})}get check_check(){return this.$$.ctx[2]}get get_check_prevent_position(){return this.$$.ctx[3]}}function ir(e){let t,r,u,h,c,_,i,l,o;function f(s){e[15](s)}let g={};return e[2]!==void 0&&(g.check_list=e[2]),r=new Oe({props:g}),e[14](r),K.push(()=>O(r,"check_list",f)),{c(){t=A("button"),I(r.$$.fragment),h=J(),c=A("img"),R(c,"class","figure-image svelte-1rysv6i"),he(c.src,_=e[3]+e[0]+".png")||R(c,"src",_),R(c,"alt",""),R(t,"class","figure-button svelte-1rysv6i")},m(s,p){L(s,t,p),j(r,t,null),C(t,h),C(t,c),i=!0,l||(o=pe(t,"click",e[4]),l=!0)},p(s,[p]){const M={};!u&&p&4&&(u=!0,M.check_list=s[2],Q(()=>u=!1)),r.$set(M),(!i||p&9&&!he(c.src,_=s[3]+s[0]+".png"))&&R(c,"src",_)},i(s){i||(v(r.$$.fragment,s),i=!0)},o(s){q(r.$$.fragment,s),i=!1},d(s){s&&S(t),e[14](null),H(r),l=!1,o()}}}function ur(e,t,r){let u,{type:h}=t,{team:c}=t,{current_team:_}=t,{position:i={x:0,y:0}}=t,{field_array:l}=t,{move_to:o={bool:!1}}=t,{moved:f}=t,{own_team:g}=t,{enemy_team:s}=t,{prevent_positions:p}=t,M=!1,y,k;function E(){if(_!=c||g!=c){console.log("cur: "+_+", team: "+c);return}M?a():B()}function d(n,P){return y.check_check(l,{y:i.y+n,x:i.x+P},g,s),!!k[0]}function B(){if(h=="King"){for(let n=-1;n<2;n++)d(-1,n)||b(-1,n);d(0,-1)||b(0,-1),d(-1,1)||b(0,1);for(let n=-1;n<2;n++)d(1,n)||b(1,n)}else if(h=="Rook"){for(let n=-1;n>-8&&b(n,0)!=!1;n--);for(let n=1;n<8&&b(n,0)!=!1;n++);for(let n=-1;n>-8&&b(0,n)!=!1;n--);for(let n=1;n<8&&b(0,n)!=!1;n++);}else if(h=="Bishop"){for(let n=-1;n>-8&&b(n,n)!=!1;n--);for(let n=1;n<8&&b(n,n)!=!1;n++);for(let n=-1;n>-8&&b(-n,n)!=!1;n--);for(let n=1;n<8&&b(-n,n)!=!1;n++);}else if(h=="Queen"){for(let n=-1;n>-8&&b(n,n)!=!1;n--);for(let n=1;n<8&&b(n,n)!=!1;n++);for(let n=-1;n>-8&&b(-n,n)!=!1;n--);for(let n=1;n<8&&b(-n,n)!=!1;n++);for(let n=-1;n>-8&&b(n,0)!=!1;n--);for(let n=1;n<8&&b(n,0)!=!1;n++);for(let n=-1;n>-8&&b(0,n)!=!1;n--);for(let n=1;n<8&&b(0,n)!=!1;n++);}else if(h=="Knight")b(-2,-1),b(-2,1),b(2,-1),b(2,1),b(-1,-2),b(1,-2),b(-1,2),b(1,2);else if(h=="Pawn"){for(let n=-1;n<2;n+=2)i.y-1<0||i.x+n<0||i.x+n>7||l[i.y-1][i.x+n].team==s&&b(-1,n);l[i.y-1][i.x].team!=s&&(l[i.y][i.x].origin_pos&&b(-2,0),b(-1,0))}else b(-1,0)}function a(){if(h=="King"){for(let n=-1;n<2;n++)w(-1,n);w(0,-1),w(0,1);for(let n=-1;n<2;n++)w(1,n)}else if(h=="Rook"){for(let n=-1;n>-8&&w(n,0)!=!1;n--);for(let n=1;n<8&&w(n,0)!=!1;n++);for(let n=-1;n>-8&&w(0,n)!=!1;n--);for(let n=1;n<8&&w(0,n)!=!1;n++);}else if(h=="Bishop"){for(let n=-1;n>-8&&w(n,n)!=!1;n--);for(let n=1;n<8&&w(n,n)!=!1;n++);for(let n=-1;n>-8&&w(-n,n)!=!1;n--);for(let n=1;n<8&&w(-n,n)!=!1;n++);}else if(h=="Queen"){for(let n=-1;n>-8&&w(n,n)!=!1;n--);for(let n=1;n<8&&w(n,n)!=!1;n++);for(let n=-1;n>-8&&w(-n,n)!=!1;n--);for(let n=1;n<8&&w(-n,n)!=!1;n++);for(let n=-1;n>-8&&w(n,0)!=!1;n--);for(let n=1;n<8&&w(n,0)!=!1;n++);for(let n=-1;n>-8&&w(0,n)!=!1;n--);for(let n=1;n<8&&w(0,n)!=!1;n++);}else if(h=="Knight")w(-2,-1),w(-2,1),w(2,-1),w(2,1),w(-1,-2),w(1,-2),w(-1,2),w(1,2);else if(h=="Pawn"){for(let n=-1;n<2;n+=2)i.y-1<0||i.x+n<0||i.x+n>7||l[i.y-1][i.x+n].team==s&&w(-1,n);l[i.y-1][i.x].team!=s&&(l[i.y][i.x].origin_pos&&w(-2,0),w(-1,0))}else w(-1,0)}function b(n,P){if(console.log("PLACE "+n+" "+P),i.y+n>=0&&i.y+n<=7&&i.x+P>=0&&i.x+P<=7){if(l[i.y+n][i.x+P].team==c)return!1;let Y=!1;p.length<1&&(console.log("no prevent positions"),Y=!0);for(let z=1;z<p.length;z++)if(p[z].y==i.y+n&&p[z].x==i.x+P){console.log(p[z]),Y=!0;break}return!(!Y||(r(6,l[i.y+n][i.x+P].is_highlight=!0,l),r(6,l[i.y+n][i.x+P].origin=i,l),M=!0,l[i.y+n][i.x+P].team==s))}else return!1}function w(n,P){return i.y+n>=0&&i.y+n<=7&&i.x+P>=0&&i.x+P<=7?!(l[i.y+n][i.x+P].team==c||(r(6,l[i.y+n][i.x+P].is_highlight=!1,l),M=!1,l[i.y+n][i.x+P].team==s)):!1}function ie(n){K[n?"unshift":"push"](()=>{y=n,r(1,y)})}function ue(n){k=n,r(2,k)}return e.$$set=n=>{"type"in n&&r(0,h=n.type),"team"in n&&r(8,c=n.team),"current_team"in n&&r(9,_=n.current_team),"position"in n&&r(10,i=n.position),"field_array"in n&&r(6,l=n.field_array),"move_to"in n&&r(5,o=n.move_to),"moved"in n&&r(7,f=n.moved),"own_team"in n&&r(11,g=n.own_team),"enemy_team"in n&&r(12,s=n.enemy_team),"prevent_positions"in n&&r(13,p=n.prevent_positions)},e.$$.update=()=>{e.$$.dirty&256&&r(3,u="/images/"+c+"-pixel/"),e.$$.dirty&1313&&o.bool&&(r(5,o.bool=!1,o),console.log("move figure"),a(),r(6,l[i.y][i.x]={figure:"none",is_highlight:!1,origin_pos:!1},l),r(6,l[o.pos.y][o.pos.x]={figure:h,team:c,move_to:{bool:!1},is_highlight:!1,origin_pos:!1},l),r(7,f={bool:!0,old_pos:i,new_pos:o.pos}))},[h,y,k,u,E,o,l,f,c,_,i,g,s,p,ie,ue]}class ne extends oe{constructor(t){super(),fe(this,t,ur,ir,Z,{type:0,team:8,current_team:9,position:10,field_array:6,move_to:5,moved:7,own_team:11,enemy_team:12,prevent_positions:13})}}function sr(e){let t,r,u,h,c,_,i;const l=e[5].default,o=Ye(l,e,e[4],null);return{c(){t=A("button"),r=A("img"),h=J(),o&&o.c(),R(r,"class","highlight-image svelte-1h4ejhx"),he(r.src,u="/images/highlight.svg")||R(r,"src",u),R(r,"alt",""),R(t,"class","highlight-button svelte-1h4ejhx")},m(f,g){L(f,t,g),C(t,r),C(t,h),o&&o.m(t,null),c=!0,_||(i=pe(t,"click",e[0]),_=!0)},p(f,[g]){o&&o.p&&(!c||g&16)&&Xe(o,l,f,f[4],c?De(l,f[4],g,null):Ze(f[4]),null)},i(f){c||(v(o,f),c=!0)},o(f){q(o,f),c=!1},d(f){f&&S(t),o&&o.d(f),_=!1,i()}}}function _r(e,t,r){let{$$slots:u={},$$scope:h}=t,{origin:c={x:0,y:0}}=t,{field_array:_}=t,{position:i}=t;function l(){r(1,_[c.y][c.x].move_to={bool:!0,pos:i},_),r(1,_),console.log("move from ")}return e.$$set=o=>{"origin"in o&&r(2,c=o.origin),"field_array"in o&&r(1,_=o.field_array),"position"in o&&r(3,i=o.position),"$$scope"in o&&r(4,h=o.$$scope)},[l,_,c,i,h,u]}class le extends oe{constructor(t){super(),fe(this,t,_r,sr,Z,{origin:2,field_array:1,position:3})}}const U=[];function hr(e,t=F){let r;const u=new Set;function h(i){if(Z(e,i)&&(e=i,r)){const l=!U.length;for(const o of u)o[1](),U.push(o,e);if(l){for(let o=0;o<U.length;o+=2)U[o][0](U[o+1]);U.length=0}}}function c(i){h(i(e))}function _(i,l=F){const o=[i,l];return u.add(o),u.size===1&&(r=t(h,c)||F),i(e),()=>{u.delete(o),u.size===0&&r&&(r(),r=null)}}return{set:h,update:c,subscribe:_}}const gr=()=>{let e=new WebSocket("ws://localhost:9000/ws");const t=hr(0),r=()=>t,u=h=>{console.log("send"),e.send(h)};return e.onmessage=function(h){t.set(h.data)},{getResponse:r,sendMessage:u}};function ke(e,t,r){const u=e.slice();return u[39]=t[r],u[41]=r,u}function cr(e){let t,r,u,h,c,_,i;const l=[br,pr,mr],o=[];function f(g,s){return s[0]&128&&(r=null),s[0]&128&&(u=null),r==null&&(r=g[7][Math.floor(g[41]/8)][g[41]%8].figure=="none"),r?0:(u==null&&(u=!!g[7][Math.floor(g[41]/8)][g[41]%8].is_highlight),u?1:2)}return h=f(e,[-1,-1]),c=o[h]=l[h](e),{c(){t=A("div"),c.c(),_=J(),R(t,"class","square-odd svelte-9e2cii")},m(g,s){L(g,t,s),o[h].m(t,null),C(t,_),i=!0},p(g,s){let p=h;h=f(g,s),h===p?o[h].p(g,s):(x(),q(o[p],1,1,()=>{o[p]=null}),$(),c=o[h],c?c.p(g,s):(c=o[h]=l[h](g),c.c()),v(c,1),c.m(t,_))},i(g){i||(v(c),i=!0)},o(g){q(c),i=!1},d(g){g&&S(t),o[h].d()}}}function ar(e){let t,r,u,h,c,_,i;const l=[wr,kr,dr],o=[];function f(g,s){return s[0]&128&&(r=null),s[0]&128&&(u=null),r==null&&(r=g[7][Math.floor(g[41]/8)][g[41]%8].figure=="none"),r?0:(u==null&&(u=!!g[7][Math.floor(g[41]/8)][g[41]%8].is_highlight),u?1:2)}return h=f(e,[-1,-1]),c=o[h]=l[h](e),{c(){t=A("div"),c.c(),_=J(),R(t,"class","square-even svelte-9e2cii")},m(g,s){L(g,t,s),o[h].m(t,null),C(t,_),i=!0},p(g,s){let p=h;h=f(g,s),h===p?o[h].p(g,s):(x(),q(o[p],1,1,()=>{o[p]=null}),$(),c=o[h],c?c.p(g,s):(c=o[h]=l[h](g),c.c()),v(c,1),c.m(t,_))},i(g){i||(v(c),i=!0)},o(g){q(c),i=!1},d(g){g&&S(t),o[h].d()}}}function mr(e){let t,r,u,h,c;function _(f){e[30](f)}function i(f){e[31](f)}function l(f){e[32](f)}let o={type:e[7][Math.floor(e[41]/8)][e[41]%8].figure,team:e[7][Math.floor(e[41]/8)][e[41]%8].team,position:{x:e[41]%8,y:Math.floor(e[41]/8)},move_to:e[7][Math.floor(e[41]/8)][e[41]%8].move_to,own_team:e[0],enemy_team:e[1],prevent_positions:e[3]};return e[5]!==void 0&&(o.current_team=e[5]),e[7]!==void 0&&(o.field_array=e[7]),e[6]!==void 0&&(o.moved=e[6]),t=new ne({props:o}),K.push(()=>O(t,"current_team",_)),K.push(()=>O(t,"field_array",i)),K.push(()=>O(t,"moved",l)),{c(){I(t.$$.fragment)},m(f,g){j(t,f,g),c=!0},p(f,g){const s={};g[0]&128&&(s.type=f[7][Math.floor(f[41]/8)][f[41]%8].figure),g[0]&128&&(s.team=f[7][Math.floor(f[41]/8)][f[41]%8].team),g[0]&128&&(s.move_to=f[7][Math.floor(f[41]/8)][f[41]%8].move_to),g[0]&1&&(s.own_team=f[0]),g[0]&2&&(s.enemy_team=f[1]),g[0]&8&&(s.prevent_positions=f[3]),!r&&g[0]&32&&(r=!0,s.current_team=f[5],Q(()=>r=!1)),!u&&g[0]&128&&(u=!0,s.field_array=f[7],Q(()=>u=!1)),!h&&g[0]&64&&(h=!0,s.moved=f[6],Q(()=>h=!1)),t.$set(s)},i(f){c||(v(t.$$.fragment,f),c=!0)},o(f){q(t.$$.fragment,f),c=!1},d(f){H(t,f)}}}function pr(e){let t,r,u;function h(_){e[29](_)}let c={origin:e[7][Math.floor(e[41]/8)][e[41]%8].origin,position:{x:e[41]%8,y:Math.floor(e[41]/8)},$$slots:{default:[yr]},$$scope:{ctx:e}};return e[7]!==void 0&&(c.field_array=e[7]),t=new le({props:c}),K.push(()=>O(t,"field_array",h)),{c(){I(t.$$.fragment)},m(_,i){j(t,_,i),u=!0},p(_,i){const l={};i[0]&128&&(l.origin=_[7][Math.floor(_[41]/8)][_[41]%8].origin),i[0]&235|i[1]&2048&&(l.$$scope={dirty:i,ctx:_}),!r&&i[0]&128&&(r=!0,l.field_array=_[7],Q(()=>r=!1)),t.$set(l)},i(_){u||(v(t.$$.fragment,_),u=!0)},o(_){q(t.$$.fragment,_),u=!1},d(_){H(t,_)}}}function br(e){let t="",r,u,h=e[7][Math.floor(e[41]/8)][e[41]%8].is_highlight,c,_,i=h&&we(e);return{c(){r=te(t),u=J(),i&&i.c(),c=me()},m(l,o){L(l,r,o),L(l,u,o),i&&i.m(l,o),L(l,c,o),_=!0},p(l,o){o[0]&128&&(h=l[7][Math.floor(l[41]/8)][l[41]%8].is_highlight),h?i?(i.p(l,o),o[0]&128&&v(i,1)):(i=we(l),i.c(),v(i,1),i.m(c.parentNode,c)):i&&(x(),q(i,1,1,()=>{i=null}),$())},i(l){_||(v(i),_=!0)},o(l){q(i),_=!1},d(l){l&&(S(r),S(u),S(c)),i&&i.d(l)}}}function yr(e){let t,r,u,h,c;function _(f){e[26](f)}function i(f){e[27](f)}function l(f){e[28](f)}let o={type:e[7][Math.floor(e[41]/8)][e[41]%8].figure,team:e[7][Math.floor(e[41]/8)][e[41]%8].team,position:{x:e[41]%8,y:Math.floor(e[41]/8)},move_to:e[7][Math.floor(e[41]/8)][e[41]%8].move_to,own_team:e[0],enemy_team:e[1],prevent_positions:e[3]};return e[5]!==void 0&&(o.current_team=e[5]),e[7]!==void 0&&(o.field_array=e[7]),e[6]!==void 0&&(o.moved=e[6]),t=new ne({props:o}),K.push(()=>O(t,"current_team",_)),K.push(()=>O(t,"field_array",i)),K.push(()=>O(t,"moved",l)),{c(){I(t.$$.fragment)},m(f,g){j(t,f,g),c=!0},p(f,g){const s={};g[0]&128&&(s.type=f[7][Math.floor(f[41]/8)][f[41]%8].figure),g[0]&128&&(s.team=f[7][Math.floor(f[41]/8)][f[41]%8].team),g[0]&128&&(s.move_to=f[7][Math.floor(f[41]/8)][f[41]%8].move_to),g[0]&1&&(s.own_team=f[0]),g[0]&2&&(s.enemy_team=f[1]),g[0]&8&&(s.prevent_positions=f[3]),!r&&g[0]&32&&(r=!0,s.current_team=f[5],Q(()=>r=!1)),!u&&g[0]&128&&(u=!0,s.field_array=f[7],Q(()=>u=!1)),!h&&g[0]&64&&(h=!0,s.moved=f[6],Q(()=>h=!1)),t.$set(s)},i(f){c||(v(t.$$.fragment,f),c=!0)},o(f){q(t.$$.fragment,f),c=!1},d(f){H(t,f)}}}function we(e){let t,r,u;function h(_){e[25](_)}let c={origin:e[7][Math.floor(e[41]/8)][e[41]%8].origin,position:{x:e[41]%8,y:Math.floor(e[41]/8)}};return e[7]!==void 0&&(c.field_array=e[7]),t=new le({props:c}),K.push(()=>O(t,"field_array",h)),{c(){I(t.$$.fragment)},m(_,i){j(t,_,i),u=!0},p(_,i){const l={};i[0]&128&&(l.origin=_[7][Math.floor(_[41]/8)][_[41]%8].origin),!r&&i[0]&128&&(r=!0,l.field_array=_[7],Q(()=>r=!1)),t.$set(l)},i(_){u||(v(t.$$.fragment,_),u=!0)},o(_){q(t.$$.fragment,_),u=!1},d(_){H(t,_)}}}function dr(e){let t,r,u,h,c;function _(f){e[22](f)}function i(f){e[23](f)}function l(f){e[24](f)}let o={type:e[7][Math.floor(e[41]/8)][e[41]%8].figure,team:e[7][Math.floor(e[41]/8)][e[41]%8].team,position:{x:e[41]%8,y:Math.floor(e[41]/8)},move_to:e[7][Math.floor(e[41]/8)][e[41]%8].move_to,own_team:e[0],enemy_team:e[1],prevent_positions:e[3]};return e[5]!==void 0&&(o.current_team=e[5]),e[7]!==void 0&&(o.field_array=e[7]),e[6]!==void 0&&(o.moved=e[6]),t=new ne({props:o}),K.push(()=>O(t,"current_team",_)),K.push(()=>O(t,"field_array",i)),K.push(()=>O(t,"moved",l)),{c(){I(t.$$.fragment)},m(f,g){j(t,f,g),c=!0},p(f,g){const s={};g[0]&128&&(s.type=f[7][Math.floor(f[41]/8)][f[41]%8].figure),g[0]&128&&(s.team=f[7][Math.floor(f[41]/8)][f[41]%8].team),g[0]&128&&(s.move_to=f[7][Math.floor(f[41]/8)][f[41]%8].move_to),g[0]&1&&(s.own_team=f[0]),g[0]&2&&(s.enemy_team=f[1]),g[0]&8&&(s.prevent_positions=f[3]),!r&&g[0]&32&&(r=!0,s.current_team=f[5],Q(()=>r=!1)),!u&&g[0]&128&&(u=!0,s.field_array=f[7],Q(()=>u=!1)),!h&&g[0]&64&&(h=!0,s.moved=f[6],Q(()=>h=!1)),t.$set(s)},i(f){c||(v(t.$$.fragment,f),c=!0)},o(f){q(t.$$.fragment,f),c=!1},d(f){H(t,f)}}}function kr(e){let t,r,u;function h(_){e[21](_)}let c={origin:e[7][Math.floor(e[41]/8)][e[41]%8].origin,position:{x:e[41]%8,y:Math.floor(e[41]/8)},$$slots:{default:[Mr]},$$scope:{ctx:e}};return e[7]!==void 0&&(c.field_array=e[7]),t=new le({props:c}),K.push(()=>O(t,"field_array",h)),{c(){I(t.$$.fragment)},m(_,i){j(t,_,i),u=!0},p(_,i){const l={};i[0]&128&&(l.origin=_[7][Math.floor(_[41]/8)][_[41]%8].origin),i[0]&235|i[1]&2048&&(l.$$scope={dirty:i,ctx:_}),!r&&i[0]&128&&(r=!0,l.field_array=_[7],Q(()=>r=!1)),t.$set(l)},i(_){u||(v(t.$$.fragment,_),u=!0)},o(_){q(t.$$.fragment,_),u=!1},d(_){H(t,_)}}}function wr(e){let t="",r,u,h=e[7][Math.floor(e[41]/8)][e[41]%8].is_highlight,c,_,i=h&&Me(e);return{c(){r=te(t),u=J(),i&&i.c(),c=me()},m(l,o){L(l,r,o),L(l,u,o),i&&i.m(l,o),L(l,c,o),_=!0},p(l,o){o[0]&128&&(h=l[7][Math.floor(l[41]/8)][l[41]%8].is_highlight),h?i?(i.p(l,o),o[0]&128&&v(i,1)):(i=Me(l),i.c(),v(i,1),i.m(c.parentNode,c)):i&&(x(),q(i,1,1,()=>{i=null}),$())},i(l){_||(v(i),_=!0)},o(l){q(i),_=!1},d(l){l&&(S(r),S(u),S(c)),i&&i.d(l)}}}function Mr(e){let t,r,u,h,c;function _(f){e[18](f)}function i(f){e[19](f)}function l(f){e[20](f)}let o={type:e[7][Math.floor(e[41]/8)][e[41]%8].figure,team:e[7][Math.floor(e[41]/8)][e[41]%8].team,position:{x:e[41]%8,y:Math.floor(e[41]/8)},move_to:e[7][Math.floor(e[41]/8)][e[41]%8].move_to,own_team:e[0],enemy_team:e[1],prevent_positions:e[3]};return e[5]!==void 0&&(o.current_team=e[5]),e[7]!==void 0&&(o.field_array=e[7]),e[6]!==void 0&&(o.moved=e[6]),t=new ne({props:o}),K.push(()=>O(t,"current_team",_)),K.push(()=>O(t,"field_array",i)),K.push(()=>O(t,"moved",l)),{c(){I(t.$$.fragment)},m(f,g){j(t,f,g),c=!0},p(f,g){const s={};g[0]&128&&(s.type=f[7][Math.floor(f[41]/8)][f[41]%8].figure),g[0]&128&&(s.team=f[7][Math.floor(f[41]/8)][f[41]%8].team),g[0]&128&&(s.move_to=f[7][Math.floor(f[41]/8)][f[41]%8].move_to),g[0]&1&&(s.own_team=f[0]),g[0]&2&&(s.enemy_team=f[1]),g[0]&8&&(s.prevent_positions=f[3]),!r&&g[0]&32&&(r=!0,s.current_team=f[5],Q(()=>r=!1)),!u&&g[0]&128&&(u=!0,s.field_array=f[7],Q(()=>u=!1)),!h&&g[0]&64&&(h=!0,s.moved=f[6],Q(()=>h=!1)),t.$set(s)},i(f){c||(v(t.$$.fragment,f),c=!0)},o(f){q(t.$$.fragment,f),c=!1},d(f){H(t,f)}}}function Me(e){let t,r,u;function h(_){e[17](_)}let c={origin:e[7][Math.floor(e[41]/8)][e[41]%8].origin,position:{x:e[41]%8,y:Math.floor(e[41]/8)}};return e[7]!==void 0&&(c.field_array=e[7]),t=new le({props:c}),K.push(()=>O(t,"field_array",h)),{c(){I(t.$$.fragment)},m(_,i){j(t,_,i),u=!0},p(_,i){const l={};i[0]&128&&(l.origin=_[7][Math.floor(_[41]/8)][_[41]%8].origin),!r&&i[0]&128&&(r=!0,l.field_array=_[7],Q(()=>r=!1)),t.$set(l)},i(_){u||(v(t.$$.fragment,_),u=!0)},o(_){q(t.$$.fragment,_),u=!1},d(_){H(t,_)}}}function ve(e){let t,r,u,h;const c=[ar,cr],_=[];function i(l,o){return(l[41]+Math.floor(l[41]/8))%2==0?0:1}return t=i(e),r=_[t]=c[t](e),{c(){r.c(),u=me()},m(l,o){_[t].m(l,o),L(l,u,o),h=!0},p(l,o){r.p(l,o)},i(l){h||(v(r),h=!0)},o(l){q(r),h=!1},d(l){l&&S(u),_[t].d(l)}}}function Ke(e){let t,r,u,h,c;return{c(){t=A("div"),r=A("div"),u=A("button"),u.textContent="Join",R(u,"class","overlay-text svelte-9e2cii"),R(r,"class","overlay-container svelte-9e2cii"),R(t,"class","GameOverScreen svelte-9e2cii")},m(_,i){L(_,t,i),C(t,r),C(r,u),h||(c=pe(u,"click",e[33]),h=!0)},p:F,d(_){_&&S(t),h=!1,c()}}}function vr(e){let t,r,u,h,c,_,i,l,o,f;function g(d){e[15](d)}function s(d){e[16](d)}let p={};e[3]!==void 0&&(p.prevent_position=e[3]),e[4]!==void 0&&(p.check_list=e[4]),r=new Oe({props:p}),e[14](r),K.push(()=>O(r,"prevent_position",g)),K.push(()=>O(r,"check_list",s));let M=de({length:64}),y=[];for(let d=0;d<M.length;d+=1)y[d]=ve(ke(e,M,d));const k=d=>q(y[d],1,1,()=>{y[d]=null});let E=e[8]&&Ke(e);return{c(){t=A("main"),I(r.$$.fragment),c=J(),_=A("div"),i=A("div");for(let d=0;d<y.length;d+=1)y[d].c();l=J(),o=A("div"),E&&E.c(),R(i,"class","chess-board svelte-9e2cii"),R(_,"class","board-container svelte-9e2cii")},m(d,B){L(d,t,B),j(r,t,null),C(t,c),C(t,_),C(_,i);for(let a=0;a<y.length;a+=1)y[a]&&y[a].m(i,null);C(t,l),C(t,o),E&&E.m(o,null),f=!0},p(d,B){const a={};if(!u&&B[0]&8&&(u=!0,a.prevent_position=d[3],Q(()=>u=!1)),!h&&B[0]&16&&(h=!0,a.check_list=d[4],Q(()=>h=!1)),r.$set(a),B[0]&235){M=de({length:64});let b;for(b=0;b<M.length;b+=1){const w=ke(d,M,b);y[b]?(y[b].p(w,B),v(y[b],1)):(y[b]=ve(w),y[b].c(),v(y[b],1),y[b].m(i,null))}for(x(),b=M.length;b<y.length;b+=1)k(b);$()}d[8]?E?E.p(d,B):(E=Ke(d),E.c(),E.m(o,null)):E&&(E.d(1),E=null)},i(d){if(!f){v(r.$$.fragment,d);for(let B=0;B<M.length;B+=1)v(y[B]);f=!0}},o(d){q(r.$$.fragment,d),y=y.filter(Boolean);for(let B=0;B<y.length;B+=1)q(y[B]);f=!1},d(d){d&&S(t),e[14](null),H(r),xe(y,d),E&&E.d()}}}function Kr(e,t,r){let u,h;const c=gr(),_=c.getResponse();We(e,_,m=>r(13,h=m));let i,l,o={x:0,y:0},f,g,s;function p(m){if(console.log("message: "+m),m=="black")r(0,i="black"),r(1,l="white"),d("black"),B("white");else if(m=="white")r(0,i="white"),r(1,l="black"),d("white"),B("black");else if(m!="none")if(m==0)console.log("0");else{let N=JSON.parse(m);i!=N.team&&(console.log("PLACE ENEMY"+i),y=="white"?r(5,y="black"):y=="black"&&r(5,y="white"),r(7,a[N.old_pos.y][N.old_pos.x].move_to={bool:!0,pos:N.new_pos},a),r(7,a))}}let M=!0,y="white",k={bool:!1,old_pos:{y:0,x:0},new_pos:{y:0,x:0}};function E(m){m=="which team"&&r(8,M=!1),c.sendMessage(m)}function d(m){for(let N=0;N<8;N++)r(7,a[6][N]={figure:"Pawn",team:m,move_to:{bool:!1},origin_pos:!0},a);r(7,a[7][0]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][7]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][1]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][6]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][2]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][5]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},a),m=="white"?(r(7,a[7][3]={figure:"Queen",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][4]={figure:"King",team:m,move_to:{bool:!1},origin_pos:!0},a)):(r(7,a[7][4]={figure:"Queen",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[7][3]={figure:"King",team:m,move_to:{bool:!1},origin_pos:!0},a))}function B(m){for(let N=0;N<8;N++)r(7,a[1][N]={figure:"Pawn",team:m,move_to:{bool:!1},origin_pos:!0},a);r(7,a[0][0]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][7]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][1]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][6]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][2]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][5]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},a),m=="black"?(r(7,a[0][3]={figure:"Queen",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][4]={figure:"King",team:m,move_to:{bool:!1},origin_pos:!0},a)):(r(7,a[0][4]={figure:"Queen",team:m,move_to:{bool:!1},origin_pos:!0},a),r(7,a[0][3]={figure:"King",team:m,move_to:{bool:!1},origin_pos:!0},a))}let a=[];for(let m=0;m<8;m++){a.push([]);for(let N=0;N<8;N++)a[m].push({figure:"none",move_to:{bool:!1},is_highlight:!1,origin_pos:!1})}a=a;function b(m){K[m?"unshift":"push"](()=>{f=m,r(2,f)})}function w(m){g=m,r(3,g)}function ie(m){s=m,r(4,s)}function ue(m){a=m,r(7,a)}function n(m){y=m,r(5,y),r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g)}function P(m){a=m,r(7,a)}function Y(m){k=m,r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g),r(5,y)}function z(m){a=m,r(7,a)}function Pe(m){y=m,r(5,y),r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g)}function Re(m){a=m,r(7,a)}function Ne(m){k=m,r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g),r(5,y)}function Se(m){a=m,r(7,a)}function Ce(m){y=m,r(5,y),r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g)}function Ae(m){a=m,r(7,a)}function Le(m){k=m,r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g),r(5,y)}function je(m){a=m,r(7,a)}function He(m){y=m,r(5,y),r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g)}function Ie(m){a=m,r(7,a)}function Fe(m){k=m,r(6,k),r(7,a),r(0,i),r(1,l),r(2,f),r(11,o),r(4,s),r(3,g),r(5,y)}const Je=()=>E("which team");return e.$$.update=()=>{if(e.$$.dirty[0]&8192&&r(12,u=h.toString()),e.$$.dirty[0]&4096&&p(u),e.$$.dirty[0]&2303&&k.bool&&(a[k.new_pos.y][k.new_pos.x].figure=="King"&&a[k.new_pos.y][k.new_pos.x].team==i&&r(11,o=k.new_pos),a[k.new_pos.y][k.new_pos.x].team==l&&(f.check_check(a,o,i,l),s[0]&&(console.log("get prevent pos"),f.get_check_prevent_position(o),console.log(g)),r(6,k.bool=!1,k)),a[k.new_pos.y][k.new_pos.x].team==i)){let m=JSON.stringify({team:i,old_pos:{y:Math.abs(k.old_pos.y-7),x:Math.abs(k.old_pos.x-7)},new_pos:{y:Math.abs(k.new_pos.y-7),x:Math.abs(k.new_pos.x-7)}});E(m),y=="white"?r(5,y="black"):y=="black"&&r(5,y="white"),r(6,k.bool=!1,k)}},[i,l,f,g,s,y,k,a,M,_,E,o,u,h,b,w,ie,ue,n,P,Y,z,Pe,Re,Ne,Se,Ce,Ae,Le,je,He,Ie,Fe,Je]}class qr extends oe{constructor(t){super(),fe(this,t,Kr,vr,Z,{},null,[-1,-1])}}new qr({target:document.getElementById("app")});
