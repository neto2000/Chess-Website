var Re=Object.defineProperty;var qe=(e,t,o)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var x=(e,t,o)=>(qe(e,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const _ of s)if(_.type==="childList")for(const l of _.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const _={};return s.integrity&&(_.integrity=s.integrity),s.referrerPolicy&&(_.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?_.credentials="include":s.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(s){if(s.ep)return;s.ep=!0;const _=o(s);fetch(s.href,_)}})();function B(){}function Ce(e,t){for(const o in t)e[o]=t[o];return e}function pe(e){return e()}function _e(){return Object.create(null)}function H(e){e.forEach(pe)}function be(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function te(e,t){return e===t?!0:(V||(V=document.createElement("a")),V.href=t,e===V.href)}function Ie(e){return Object.keys(e).length===0}function Fe(e,...t){if(e==null){for(const r of t)r(void 0);return B}const o=e.subscribe(...t);return o.unsubscribe?()=>o.unsubscribe():o}function Je(e,t,o){e.$$.on_destroy.push(Fe(t,o))}function Qe(e,t,o,r){if(e){const s=ye(e,t,o,r);return e[0](s)}}function ye(e,t,o,r){return e[1]&&r?Ce(o.ctx.slice(),e[1](r(t))):o.ctx}function ze(e,t,o,r){if(e[2]&&r){const s=e[2](r(o));if(t.dirty===void 0)return s;if(typeof s=="object"){const _=[],l=Math.max(t.dirty.length,s.length);for(let n=0;n<l;n+=1)_[n]=t.dirty[n]|s[n];return _}return t.dirty|s}return t.dirty}function He(e,t,o,r,s,_){if(s){const l=ye(t,o,r,_);e.p(l,s)}}function Ge(e){if(e.ctx.length>32){const t=[],o=e.ctx.length/32;for(let r=0;r<o;r++)t[r]=-1;return t}return-1}function j(e,t){e.appendChild(t)}function P(e,t,o){e.insertBefore(t,o||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function Te(e,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].d(t)}function N(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function Q(){return X(" ")}function re(){return X("")}function fe(e,t,o,r){return e.addEventListener(t,o,r),()=>e.removeEventListener(t,o,r)}function v(e,t,o){o==null?e.removeAttribute(t):e.getAttribute(t)!==o&&e.setAttribute(t,o)}function Ue(e){return Array.from(e.childNodes)}let le;function z(e){le=e}const F=[],w=[];let J=[];const oe=[],Ve=Promise.resolve();let ne=!1;function We(){ne||(ne=!0,Ve.then(we))}function ie(e){J.push(e)}function M(e){oe.push(e)}const ee=new Set;let C=0;function we(){if(C!==0)return;const e=le;do{try{for(;C<F.length;){const t=F[C];C++,z(t),De(t.$$)}}catch(t){throw F.length=0,C=0,t}for(z(null),F.length=0,C=0;w.length;)w.pop()();for(let t=0;t<J.length;t+=1){const o=J[t];ee.has(o)||(ee.add(o),o())}J.length=0}while(F.length);for(;oe.length;)oe.pop()();ne=!1,ee.clear(),z(e)}function De(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}function Xe(e){const t=[],o=[];J.forEach(r=>e.indexOf(r)===-1?t.push(r):o.push(r)),o.forEach(r=>r()),J=t}const W=new Set;let q;function G(){q={r:0,c:[],p:q}}function T(){q.r||H(q.c),q=q.p}function b(e,t){e&&e.i&&(W.delete(e),e.i(t))}function y(e,t,o,r){if(e&&e.o){if(W.has(e))return;W.add(e),q.c.push(()=>{W.delete(e),r&&(o&&e.d(1),r())}),e.o(t)}else r&&r()}function ae(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function E(e,t,o){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=o,o(e.$$.ctx[r]))}function R(e){e&&e.c()}function K(e,t,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,o),ie(()=>{const _=e.$$.on_mount.map(pe).filter(be);e.$$.on_destroy?e.$$.on_destroy.push(..._):H(_),e.$$.on_mount=[]}),s.forEach(ie)}function L(e,t){const o=e.$$;o.fragment!==null&&(Xe(o.after_update),H(o.on_destroy),o.fragment&&o.fragment.d(t),o.on_destroy=o.fragment=null,o.ctx=[])}function Ye(e,t){e.$$.dirty[0]===-1&&(F.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,o,r,s,_,l,n=[-1]){const u=le;z(e);const a=e.$$={fragment:null,ctx:[],props:_,update:B,not_equal:s,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:_e(),dirty:n,skip_bound:!1,root:t.target||u.$$.root};l&&l(a.root);let i=!1;if(a.ctx=o?o(e,t.props||{},(f,h,...d)=>{const A=d.length?d[0]:h;return a.ctx&&s(a.ctx[f],a.ctx[f]=A)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](A),i&&Ye(e,f)),h}):[],a.update(),i=!0,H(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const f=Ue(t.target);a.fragment&&a.fragment.l(f),f.forEach(S)}else a.fragment&&a.fragment.c();t.intro&&b(e.$$.fragment),K(e,t.target,t.anchor),we()}z(u)}class se{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){L(this,1),this.$destroy=B}$on(t,o){if(!be(o))return B;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(o),()=>{const s=r.indexOf(o);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ze);function $e(e){let t,o,r,s,_;return{c(){t=N("button"),o=N("img"),v(o,"class","figure-image svelte-1rysv6i"),te(o.src,r=e[1]+e[0]+".png")||v(o,"src",r),v(o,"alt",""),v(t,"class","figure-button svelte-1rysv6i")},m(l,n){P(l,t,n),j(t,o),s||(_=fe(t,"click",e[2]),s=!0)},p(l,[n]){n&3&&!te(o.src,r=l[1]+l[0]+".png")&&v(o,"src",r)},i:B,o:B,d(l){l&&S(t),s=!1,_()}}}function xe(e,t,o){let r,{type:s}=t,{team:_}=t,{current_team:l}=t,{position:n={x:0,y:0}}=t,{field_array:u}=t,{move_to:a={bool:!1}}=t,{moved:i}=t,{own_team:f}=t,{enemy_team:h}=t,d=!1;function A(){if(l!=_||f!=_){console.log("cur: "+l+", team: "+_);return}d?c():U()}function U(){if(console.log("show highlight"),s=="King"){for(let g=-1;g<2;g++)p(-1,g);p(0,-1),p(0,1);for(let g=-1;g<2;g++)p(1,g)}else if(s=="Rook"){for(let g=-1;g>-8&&p(g,0)!=!1;g--);for(let g=1;g<8&&p(g,0)!=!1;g++);for(let g=-1;g>-8&&p(0,g)!=!1;g--);for(let g=1;g<8&&p(0,g)!=!1;g++);}else if(s=="Bishop"){for(let g=-1;g>-8&&p(g,g)!=!1;g--);for(let g=1;g<8&&p(g,g)!=!1;g++);for(let g=-1;g>-8&&p(-g,g)!=!1;g--);for(let g=1;g<8&&p(-g,g)!=!1;g++);}else if(s=="Queen"){for(let g=-1;g>-8&&p(g,g)!=!1;g--);for(let g=1;g<8&&p(g,g)!=!1;g++);for(let g=-1;g>-8&&p(-g,g)!=!1;g--);for(let g=1;g<8&&p(-g,g)!=!1;g++);for(let g=-1;g>-8&&p(g,0)!=!1;g--);for(let g=1;g<8&&p(g,0)!=!1;g++);for(let g=-1;g>-8&&p(0,g)!=!1;g--);for(let g=1;g<8&&p(0,g)!=!1;g++);}else if(s=="Knight")p(-2,-1),p(-2,1),p(2,-1),p(2,1),p(-1,-2),p(1,-2),p(-1,2),p(1,2);else if(s=="Pawn"){for(let g=-1;g<2;g+=2)n.y-1<0||n.x+g<0||n.x+g>7||u[n.y-1][n.x+g].team==h&&p(-1,g);u[n.y-1][n.x].team!=h&&(u[n.y][n.x].origin_pos&&p(-2,0),p(-1,0))}else p(-1,0)}function c(){$(-1,0)}function p(g,O){return console.log("PLACE "+g+" "+O),n.y+g>=0&&n.y+g<=7&&n.x+O>=0&&n.x+O<=7?u[n.y+g][n.x+O].team==_?(console.log("own team!"),!1):(o(4,u[n.y+g][n.x+O].is_highlight=!0,u),o(4,u[n.y+g][n.x+O].origin=n,u),d=!0,u[n.y+g][n.x+O].team!=h):(console.log("out of bounds!"),!1)}function $(g,O){if(n.y+g>=0&&n.y+g<=8&&n.x+O>=0&&n.x+O<=8){if(u[n.y+g][n.x+O].team==_)return;o(4,u[n.y+g][n.x+O].is_highlight=!1,u),d=!1}}return e.$$set=g=>{"type"in g&&o(0,s=g.type),"team"in g&&o(6,_=g.team),"current_team"in g&&o(7,l=g.current_team),"position"in g&&o(8,n=g.position),"field_array"in g&&o(4,u=g.field_array),"move_to"in g&&o(3,a=g.move_to),"moved"in g&&o(5,i=g.moved),"own_team"in g&&o(9,f=g.own_team),"enemy_team"in g&&o(10,h=g.enemy_team)},e.$$.update=()=>{e.$$.dirty&64&&o(1,r="/images/"+_+"-pixel/"),e.$$.dirty&329&&a.bool&&(o(3,a.bool=!1,a),console.log("move figure"),c(),o(4,u[n.y][n.x]={figure:"none",is_highlight:!1,origin_pos:!1},u),o(4,u[a.pos.y][a.pos.x]={figure:s,team:_,move_to:{bool:!1},is_highlight:!1,origin_pos:!1},u),o(5,i={bool:!0,old_pos:n,new_pos:a.pos}))},[s,r,A,a,u,i,_,l,n,f,h]}class Y extends se{constructor(t){super(),ue(this,t,xe,$e,D,{type:0,team:6,current_team:7,position:8,field_array:4,move_to:3,moved:5,own_team:9,enemy_team:10})}}function et(e){let t,o,r,s,_,l,n;const u=e[5].default,a=Qe(u,e,e[4],null);return{c(){t=N("button"),o=N("img"),s=Q(),a&&a.c(),v(o,"class","highlight-image svelte-1h4ejhx"),te(o.src,r="/images/highlight.svg")||v(o,"src",r),v(o,"alt",""),v(t,"class","highlight-button svelte-1h4ejhx")},m(i,f){P(i,t,f),j(t,o),j(t,s),a&&a.m(t,null),_=!0,l||(n=fe(t,"click",e[0]),l=!0)},p(i,[f]){a&&a.p&&(!_||f&16)&&He(a,u,i,i[4],_?ze(u,i[4],f,null):Ge(i[4]),null)},i(i){_||(b(a,i),_=!0)},o(i){y(a,i),_=!1},d(i){i&&S(t),a&&a.d(i),l=!1,n()}}}function tt(e,t,o){let{$$slots:r={},$$scope:s}=t,{origin:_={x:0,y:0}}=t,{field_array:l}=t,{position:n}=t;function u(){o(1,l[_.y][_.x].move_to={bool:!0,pos:n},l),o(1,l),console.log("move from ")}return e.$$set=a=>{"origin"in a&&o(2,_=a.origin),"field_array"in a&&o(1,l=a.field_array),"position"in a&&o(3,n=a.position),"$$scope"in a&&o(4,s=a.$$scope)},[u,l,_,n,s,r]}class Z extends se{constructor(t){super(),ue(this,t,tt,et,D,{origin:2,field_array:1,position:3})}}const I=[];function ot(e,t=B){let o;const r=new Set;function s(n){if(D(e,n)&&(e=n,o)){const u=!I.length;for(const a of r)a[1](),I.push(a,e);if(u){for(let a=0;a<I.length;a+=2)I[a][0](I[a+1]);I.length=0}}}function _(n){s(n(e))}function l(n,u=B){const a=[n,u];return r.add(a),r.size===1&&(o=t(s,_)||B),n(e),()=>{r.delete(a),r.size===0&&o&&(o(),o=null)}}return{set:s,update:_,subscribe:l}}const nt=()=>{let e=new WebSocket("ws://localhost:9000/ws");const t=ot(0),o=()=>t,r=s=>{console.log("send"),e.send(s)};return e.onmessage=function(s){t.set(s.data)},{getResponse:o,sendMessage:r}};function ge(e,t,o){const r=e.slice();return r[32]=t[o],r[34]=o,r}function it(e){let t,o,r,s,_,l,n;const u=[ut,lt,ft],a=[];function i(f,h){return h[0]&32&&(o=null),h[0]&32&&(r=null),o==null&&(o=f[5][Math.floor(f[34]/8)][f[34]%8].figure=="none"),o?0:(r==null&&(r=!!f[5][Math.floor(f[34]/8)][f[34]%8].is_highlight),r?1:2)}return s=i(e,[-1,-1]),_=a[s]=u[s](e),{c(){t=N("div"),_.c(),l=Q(),v(t,"class","square-odd svelte-9e2cii")},m(f,h){P(f,t,h),a[s].m(t,null),j(t,l),n=!0},p(f,h){let d=s;s=i(f,h),s===d?a[s].p(f,h):(G(),y(a[d],1,1,()=>{a[d]=null}),T(),_=a[s],_?_.p(f,h):(_=a[s]=u[s](f),_.c()),b(_,1),_.m(t,l))},i(f){n||(b(_),n=!0)},o(f){y(_),n=!1},d(f){f&&S(t),a[s].d()}}}function rt(e){let t,o,r,s,_,l,n;const u=[gt,at,_t],a=[];function i(f,h){return h[0]&32&&(o=null),h[0]&32&&(r=null),o==null&&(o=f[5][Math.floor(f[34]/8)][f[34]%8].figure=="none"),o?0:(r==null&&(r=!!f[5][Math.floor(f[34]/8)][f[34]%8].is_highlight),r?1:2)}return s=i(e,[-1,-1]),_=a[s]=u[s](e),{c(){t=N("div"),_.c(),l=Q(),v(t,"class","square-even svelte-9e2cii")},m(f,h){P(f,t,h),a[s].m(t,null),j(t,l),n=!0},p(f,h){let d=s;s=i(f,h),s===d?a[s].p(f,h):(G(),y(a[d],1,1,()=>{a[d]=null}),T(),_=a[s],_?_.p(f,h):(_=a[s]=u[s](f),_.c()),b(_,1),_.m(t,l))},i(f){n||(b(_),n=!0)},o(f){y(_),n=!1},d(f){f&&S(t),a[s].d()}}}function ft(e){let t,o,r,s,_;function l(i){e[23](i)}function n(i){e[24](i)}function u(i){e[25](i)}let a={type:e[5][Math.floor(e[34]/8)][e[34]%8].figure,team:e[5][Math.floor(e[34]/8)][e[34]%8].team,position:{x:e[34]%8,y:Math.floor(e[34]/8)},move_to:e[5][Math.floor(e[34]/8)][e[34]%8].move_to,own_team:e[0],enemy_team:e[3]};return e[1]!==void 0&&(a.current_team=e[1]),e[5]!==void 0&&(a.field_array=e[5]),e[2]!==void 0&&(a.moved=e[2]),t=new Y({props:a}),w.push(()=>E(t,"current_team",l)),w.push(()=>E(t,"field_array",n)),w.push(()=>E(t,"moved",u)),{c(){R(t.$$.fragment)},m(i,f){K(t,i,f),_=!0},p(i,f){const h={};f[0]&32&&(h.type=i[5][Math.floor(i[34]/8)][i[34]%8].figure),f[0]&32&&(h.team=i[5][Math.floor(i[34]/8)][i[34]%8].team),f[0]&32&&(h.move_to=i[5][Math.floor(i[34]/8)][i[34]%8].move_to),f[0]&1&&(h.own_team=i[0]),f[0]&8&&(h.enemy_team=i[3]),!o&&f[0]&2&&(o=!0,h.current_team=i[1],M(()=>o=!1)),!r&&f[0]&32&&(r=!0,h.field_array=i[5],M(()=>r=!1)),!s&&f[0]&4&&(s=!0,h.moved=i[2],M(()=>s=!1)),t.$set(h)},i(i){_||(b(t.$$.fragment,i),_=!0)},o(i){y(t.$$.fragment,i),_=!1},d(i){L(t,i)}}}function lt(e){let t,o,r;function s(l){e[22](l)}let _={origin:e[5][Math.floor(e[34]/8)][e[34]%8].origin,position:{x:e[34]%8,y:Math.floor(e[34]/8)},$$slots:{default:[st]},$$scope:{ctx:e}};return e[5]!==void 0&&(_.field_array=e[5]),t=new Z({props:_}),w.push(()=>E(t,"field_array",s)),{c(){R(t.$$.fragment)},m(l,n){K(t,l,n),r=!0},p(l,n){const u={};n[0]&32&&(u.origin=l[5][Math.floor(l[34]/8)][l[34]%8].origin),n[0]&47|n[1]&16&&(u.$$scope={dirty:n,ctx:l}),!o&&n[0]&32&&(o=!0,u.field_array=l[5],M(()=>o=!1)),t.$set(u)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){y(t.$$.fragment,l),r=!1},d(l){L(t,l)}}}function ut(e){let t="",o,r,s=e[5][Math.floor(e[34]/8)][e[34]%8].is_highlight,_,l,n=s&&he(e);return{c(){o=X(t),r=Q(),n&&n.c(),_=re()},m(u,a){P(u,o,a),P(u,r,a),n&&n.m(u,a),P(u,_,a),l=!0},p(u,a){a[0]&32&&(s=u[5][Math.floor(u[34]/8)][u[34]%8].is_highlight),s?n?(n.p(u,a),a[0]&32&&b(n,1)):(n=he(u),n.c(),b(n,1),n.m(_.parentNode,_)):n&&(G(),y(n,1,1,()=>{n=null}),T())},i(u){l||(b(n),l=!0)},o(u){y(n),l=!1},d(u){u&&(S(o),S(r),S(_)),n&&n.d(u)}}}function st(e){let t,o,r,s,_;function l(i){e[19](i)}function n(i){e[20](i)}function u(i){e[21](i)}let a={type:e[5][Math.floor(e[34]/8)][e[34]%8].figure,team:e[5][Math.floor(e[34]/8)][e[34]%8].team,position:{x:e[34]%8,y:Math.floor(e[34]/8)},move_to:e[5][Math.floor(e[34]/8)][e[34]%8].move_to,own_team:e[0],enemy_team:e[3]};return e[1]!==void 0&&(a.current_team=e[1]),e[5]!==void 0&&(a.field_array=e[5]),e[2]!==void 0&&(a.moved=e[2]),t=new Y({props:a}),w.push(()=>E(t,"current_team",l)),w.push(()=>E(t,"field_array",n)),w.push(()=>E(t,"moved",u)),{c(){R(t.$$.fragment)},m(i,f){K(t,i,f),_=!0},p(i,f){const h={};f[0]&32&&(h.type=i[5][Math.floor(i[34]/8)][i[34]%8].figure),f[0]&32&&(h.team=i[5][Math.floor(i[34]/8)][i[34]%8].team),f[0]&32&&(h.move_to=i[5][Math.floor(i[34]/8)][i[34]%8].move_to),f[0]&1&&(h.own_team=i[0]),f[0]&8&&(h.enemy_team=i[3]),!o&&f[0]&2&&(o=!0,h.current_team=i[1],M(()=>o=!1)),!r&&f[0]&32&&(r=!0,h.field_array=i[5],M(()=>r=!1)),!s&&f[0]&4&&(s=!0,h.moved=i[2],M(()=>s=!1)),t.$set(h)},i(i){_||(b(t.$$.fragment,i),_=!0)},o(i){y(t.$$.fragment,i),_=!1},d(i){L(t,i)}}}function he(e){let t,o,r;function s(l){e[18](l)}let _={origin:e[5][Math.floor(e[34]/8)][e[34]%8].origin,position:{x:e[34]%8,y:Math.floor(e[34]/8)}};return e[5]!==void 0&&(_.field_array=e[5]),t=new Z({props:_}),w.push(()=>E(t,"field_array",s)),{c(){R(t.$$.fragment)},m(l,n){K(t,l,n),r=!0},p(l,n){const u={};n[0]&32&&(u.origin=l[5][Math.floor(l[34]/8)][l[34]%8].origin),!o&&n[0]&32&&(o=!0,u.field_array=l[5],M(()=>o=!1)),t.$set(u)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){y(t.$$.fragment,l),r=!1},d(l){L(t,l)}}}function _t(e){let t,o,r,s,_;function l(i){e[15](i)}function n(i){e[16](i)}function u(i){e[17](i)}let a={type:e[5][Math.floor(e[34]/8)][e[34]%8].figure,team:e[5][Math.floor(e[34]/8)][e[34]%8].team,position:{x:e[34]%8,y:Math.floor(e[34]/8)},move_to:e[5][Math.floor(e[34]/8)][e[34]%8].move_to,own_team:e[0],enemy_team:e[3]};return e[1]!==void 0&&(a.current_team=e[1]),e[5]!==void 0&&(a.field_array=e[5]),e[2]!==void 0&&(a.moved=e[2]),t=new Y({props:a}),w.push(()=>E(t,"current_team",l)),w.push(()=>E(t,"field_array",n)),w.push(()=>E(t,"moved",u)),{c(){R(t.$$.fragment)},m(i,f){K(t,i,f),_=!0},p(i,f){const h={};f[0]&32&&(h.type=i[5][Math.floor(i[34]/8)][i[34]%8].figure),f[0]&32&&(h.team=i[5][Math.floor(i[34]/8)][i[34]%8].team),f[0]&32&&(h.move_to=i[5][Math.floor(i[34]/8)][i[34]%8].move_to),f[0]&1&&(h.own_team=i[0]),f[0]&8&&(h.enemy_team=i[3]),!o&&f[0]&2&&(o=!0,h.current_team=i[1],M(()=>o=!1)),!r&&f[0]&32&&(r=!0,h.field_array=i[5],M(()=>r=!1)),!s&&f[0]&4&&(s=!0,h.moved=i[2],M(()=>s=!1)),t.$set(h)},i(i){_||(b(t.$$.fragment,i),_=!0)},o(i){y(t.$$.fragment,i),_=!1},d(i){L(t,i)}}}function at(e){let t,o,r;function s(l){e[14](l)}let _={origin:e[5][Math.floor(e[34]/8)][e[34]%8].origin,position:{x:e[34]%8,y:Math.floor(e[34]/8)},$$slots:{default:[ht]},$$scope:{ctx:e}};return e[5]!==void 0&&(_.field_array=e[5]),t=new Z({props:_}),w.push(()=>E(t,"field_array",s)),{c(){R(t.$$.fragment)},m(l,n){K(t,l,n),r=!0},p(l,n){const u={};n[0]&32&&(u.origin=l[5][Math.floor(l[34]/8)][l[34]%8].origin),n[0]&47|n[1]&16&&(u.$$scope={dirty:n,ctx:l}),!o&&n[0]&32&&(o=!0,u.field_array=l[5],M(()=>o=!1)),t.$set(u)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){y(t.$$.fragment,l),r=!1},d(l){L(t,l)}}}function gt(e){let t="",o,r,s=e[5][Math.floor(e[34]/8)][e[34]%8].is_highlight,_,l,n=s&&me(e);return{c(){o=X(t),r=Q(),n&&n.c(),_=re()},m(u,a){P(u,o,a),P(u,r,a),n&&n.m(u,a),P(u,_,a),l=!0},p(u,a){a[0]&32&&(s=u[5][Math.floor(u[34]/8)][u[34]%8].is_highlight),s?n?(n.p(u,a),a[0]&32&&b(n,1)):(n=me(u),n.c(),b(n,1),n.m(_.parentNode,_)):n&&(G(),y(n,1,1,()=>{n=null}),T())},i(u){l||(b(n),l=!0)},o(u){y(n),l=!1},d(u){u&&(S(o),S(r),S(_)),n&&n.d(u)}}}function ht(e){let t,o,r,s,_;function l(i){e[11](i)}function n(i){e[12](i)}function u(i){e[13](i)}let a={type:e[5][Math.floor(e[34]/8)][e[34]%8].figure,team:e[5][Math.floor(e[34]/8)][e[34]%8].team,position:{x:e[34]%8,y:Math.floor(e[34]/8)},move_to:e[5][Math.floor(e[34]/8)][e[34]%8].move_to,own_team:e[0],enemy_team:e[3]};return e[1]!==void 0&&(a.current_team=e[1]),e[5]!==void 0&&(a.field_array=e[5]),e[2]!==void 0&&(a.moved=e[2]),t=new Y({props:a}),w.push(()=>E(t,"current_team",l)),w.push(()=>E(t,"field_array",n)),w.push(()=>E(t,"moved",u)),{c(){R(t.$$.fragment)},m(i,f){K(t,i,f),_=!0},p(i,f){const h={};f[0]&32&&(h.type=i[5][Math.floor(i[34]/8)][i[34]%8].figure),f[0]&32&&(h.team=i[5][Math.floor(i[34]/8)][i[34]%8].team),f[0]&32&&(h.move_to=i[5][Math.floor(i[34]/8)][i[34]%8].move_to),f[0]&1&&(h.own_team=i[0]),f[0]&8&&(h.enemy_team=i[3]),!o&&f[0]&2&&(o=!0,h.current_team=i[1],M(()=>o=!1)),!r&&f[0]&32&&(r=!0,h.field_array=i[5],M(()=>r=!1)),!s&&f[0]&4&&(s=!0,h.moved=i[2],M(()=>s=!1)),t.$set(h)},i(i){_||(b(t.$$.fragment,i),_=!0)},o(i){y(t.$$.fragment,i),_=!1},d(i){L(t,i)}}}function me(e){let t,o,r;function s(l){e[10](l)}let _={origin:e[5][Math.floor(e[34]/8)][e[34]%8].origin,position:{x:e[34]%8,y:Math.floor(e[34]/8)}};return e[5]!==void 0&&(_.field_array=e[5]),t=new Z({props:_}),w.push(()=>E(t,"field_array",s)),{c(){R(t.$$.fragment)},m(l,n){K(t,l,n),r=!0},p(l,n){const u={};n[0]&32&&(u.origin=l[5][Math.floor(l[34]/8)][l[34]%8].origin),!o&&n[0]&32&&(o=!0,u.field_array=l[5],M(()=>o=!1)),t.$set(u)},i(l){r||(b(t.$$.fragment,l),r=!0)},o(l){y(t.$$.fragment,l),r=!1},d(l){L(t,l)}}}function ce(e){let t,o,r,s;const _=[rt,it],l=[];function n(u,a){return(u[34]+Math.floor(u[34]/8))%2==0?0:1}return t=n(e),o=l[t]=_[t](e),{c(){o.c(),r=re()},m(u,a){l[t].m(u,a),P(u,r,a),s=!0},p(u,a){o.p(u,a)},i(u){s||(b(o),s=!0)},o(u){y(o),s=!1},d(u){u&&S(r),l[t].d(u)}}}function de(e){let t,o,r,s,_;return{c(){t=N("div"),o=N("div"),r=N("button"),r.textContent="Join",v(r,"class","overlay-text svelte-9e2cii"),v(o,"class","overlay-container svelte-9e2cii"),v(t,"class","GameOverScreen svelte-9e2cii")},m(l,n){P(l,t,n),j(t,o),j(o,r),s||(_=fe(r,"click",e[26]),s=!0)},p:B,d(l){l&&S(t),s=!1,_()}}}function mt(e){let t,o,r,s,_,l,n=ae({length:64}),u=[];for(let f=0;f<n.length;f+=1)u[f]=ce(ge(e,n,f));const a=f=>y(u[f],1,1,()=>{u[f]=null});let i=e[4]&&de(e);return{c(){t=N("main"),o=N("div"),r=N("div");for(let f=0;f<u.length;f+=1)u[f].c();s=Q(),_=N("div"),i&&i.c(),v(r,"class","chess-board svelte-9e2cii"),v(o,"class","board-container svelte-9e2cii")},m(f,h){P(f,t,h),j(t,o),j(o,r);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(r,null);j(t,s),j(t,_),i&&i.m(_,null),l=!0},p(f,h){if(h[0]&47){n=ae({length:64});let d;for(d=0;d<n.length;d+=1){const A=ge(f,n,d);u[d]?(u[d].p(A,h),b(u[d],1)):(u[d]=ce(A),u[d].c(),b(u[d],1),u[d].m(r,null))}for(G(),d=n.length;d<u.length;d+=1)a(d);T()}f[4]?i?i.p(f,h):(i=de(f),i.c(),i.m(_,null)):i&&(i.d(1),i=null)},i(f){if(!l){for(let h=0;h<n.length;h+=1)b(u[h]);l=!0}},o(f){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)y(u[h]);l=!1},d(f){f&&S(t),Te(u,f),i&&i.d()}}}function ct(e,t,o){let r,s;const _=nt(),l=_.getResponse();Je(e,l,m=>o(9,s=m));let n,u;function a(m){if(console.log("message: "+m),m=="black")o(0,n="black"),o(3,u="white"),A("black"),U("white");else if(m=="white")o(0,n="white"),o(3,u="black"),A("white"),U("black");else if(m!="none")if(m==0)console.log("0");else{let k=JSON.parse(m);console.log("move enemy"),n!=k.team&&(console.log(k),o(5,c[k.old_pos.y][k.old_pos.x].move_to={bool:!0,pos:k.new_pos},c),o(5,c))}}let i=!0,f="white",h={bool:!1,old_pos:{y:0,x:0},new_pos:{y:0,x:0}};function d(m){m=="which team"&&o(4,i=!1),_.sendMessage(m)}function A(m){for(let k=0;k<8;k++)o(5,c[6][k]={figure:"Pawn",team:m,move_to:{bool:!1},origin_pos:!0},c);o(5,c[7][0]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][7]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][1]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][6]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][2]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][5]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][3]={figure:"Queen",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[7][4]={figure:"King",team:m,move_to:{bool:!1},origin_pos:!0},c)}function U(m){for(let k=0;k<8;k++)o(5,c[1][k]={figure:"Pawn",team:m,move_to:{bool:!1},origin_pos:!0},c);o(5,c[0][0]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][7]={figure:"Rook",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][1]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][6]={figure:"Knight",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][2]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][5]={figure:"Bishop",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][3]={figure:"Queen",team:m,move_to:{bool:!1},origin_pos:!0},c),o(5,c[0][4]={figure:"King",team:m,move_to:{bool:!1},origin_pos:!0},c)}let c=[];for(let m=0;m<8;m++){c.push([]);for(let k=0;k<8;k++)c[m].push({figure:"none",move_to:{bool:!1},is_highlight:!1,origin_pos:!1})}c=c;function p(m){c=m,o(5,c)}function $(m){f=m,o(1,f),o(2,h),o(0,n)}function g(m){c=m,o(5,c)}function O(m){h=m,o(2,h),o(0,n),o(1,f)}function ke(m){c=m,o(5,c)}function ve(m){f=m,o(1,f),o(2,h),o(0,n)}function Me(m){c=m,o(5,c)}function Ee(m){h=m,o(2,h),o(0,n),o(1,f)}function Oe(m){c=m,o(5,c)}function Se(m){f=m,o(1,f),o(2,h),o(0,n)}function Ne(m){c=m,o(5,c)}function Pe(m){h=m,o(2,h),o(0,n),o(1,f)}function je(m){c=m,o(5,c)}function Ae(m){f=m,o(1,f),o(2,h),o(0,n)}function Be(m){c=m,o(5,c)}function Ke(m){h=m,o(2,h),o(0,n),o(1,f)}const Le=()=>d("which team");return e.$$.update=()=>{if(e.$$.dirty[0]&512&&o(8,r=s.toString()),e.$$.dirty[0]&256&&a(r),e.$$.dirty[0]&7&&h.bool){console.log("moved");let m=JSON.stringify({team:n,old_pos:{y:Math.abs(h.old_pos.y-7),x:Math.abs(h.old_pos.x-7)},new_pos:{y:Math.abs(h.new_pos.y-7),x:Math.abs(h.new_pos.x-7)}});d(m),f=="white"?o(1,f="black"):f=="black"&&o(1,f="white"),o(2,h.bool=!1,h)}},[n,f,h,u,i,c,l,d,r,s,p,$,g,O,ke,ve,Me,Ee,Oe,Se,Ne,Pe,je,Ae,Be,Ke,Le]}class dt extends se{constructor(t){super(),ue(this,t,ct,mt,D,{},null,[-1,-1])}}new dt({target:document.getElementById("app")});
