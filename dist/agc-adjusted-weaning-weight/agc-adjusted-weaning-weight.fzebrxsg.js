/*! Built with http://stenciljs.com */
(function(window,document,Context,namespace,hydratedCssClass,components,resourcesUrl){"use strict";
(function(s){s&&(resourcesUrl=s.getAttribute('data-resources-url'))})(document.querySelector("script[data-namespace='agc-adjusted-weaning-weight']"));
function t(t,e){return"sc-"+t.t+(e&&e!==C?"-"+e:"")}function e(t,e){return t+(e?"-h":"-s")}function n(e,n,o,i){let c=o.t+i.mode,r=o[c];if((2===o.e||1===o.e&&!e.o.n)&&(i["s-sc"]=r?t(o,i.mode):t(o)),r||(r=o[c=o.t+C]),r){let t=n.i.head,o=e.c.get(t);if(o||e.c.set(t,o={}),!o[c]){let e;{e=r.content.cloneNode(!0),o[c]=!0;const i=t.querySelectorAll("[data-styles]");n.r(t,e,i.length&&i[i.length-1].nextSibling||t.firstChild)}}}}function o(t,e,n,o,r,s,f){if("class"!==n||s)if("style"===n){for(const t in o)r&&null!=r[t]||(/-/.test(t)?e.style.removeProperty(t):e.style[t]="");for(const t in r)o&&r[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!s&&(n in e||-1!==["object","function"].indexOf(typeof r)&&null!==r)){const o=t.s(e);o&&o.f&&o.f[n]?c(e,n,r):"ref"!==n&&(c(e,n,null==r?"":r),null!=r&&!1!==r||t.o.l(e,n))}else null!=r&&"key"!==n?function l(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(N,W(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(N,W(e),n):t.setAttribute(e,n))}(e,n,r):(s||t.o.u(e,n)&&(null==r||!1===r))&&t.o.l(e,n);else n=W(n)in e?W(n.substring(2)):W(n[2])+n.substring(3),r?r!==o&&t.o.a(e,n,r):t.o.p(e,n);else if(o!==r){const t=i(o),n=i(r),c=t.filter(t=>!n.includes(t)),s=i(e.className).filter(t=>!c.includes(t)),f=n.filter(e=>!t.includes(e)&&!s.includes(e));s.push(...f),e.className=s.join(" ")}}function i(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function c(t,e,n){try{t[e]=n}catch(t){}}function r(t,e,n,i,c){const r=11===n.d.nodeType&&n.d.host?n.d.host:n.d,s=e&&e.vattrs||j,f=n.vattrs||j;for(c in s)f&&null!=f[c]||null==s[c]||o(t,r,c,s[c],void 0,i,n.v);for(c in f)c in s&&f[c]===("value"===c||"checked"===c?r[c]:s[c])||o(t,r,c,s[c],f[c],i,n.v)}function s(t,e){function n(i,c,s,f,l,p,y,h,w){if(h=c.vchildren[s],u||(d=!0,"slot"===h.vtag&&(a&&e.m(f,a+"-s"),h.vchildren?h.b=!0:h.y=!0)),O(h.vtext))h.d=e.w(h.vtext);else if(h.y)h.d=e.w("");else{if(p=h.d=S||"svg"===h.vtag?e.g("http://www.w3.org/2000/svg",h.vtag):e.M(h.b?"slot-fb":h.vtag),t.k(p)&&t.C.delete(b),S="svg"===h.vtag||"foreignObject"!==h.vtag&&S,r(t,null,h,S),O(a)&&p["s-si"]!==a&&e.m(p,p["s-si"]=a),h.vchildren)for(l=0;l<h.vchildren.length;++l)(y=n(i,h,l,p))&&e.j(p,y);"svg"===h.vtag&&(S=!1)}return h.d["s-hn"]=m,(h.b||h.y)&&(h.d["s-sr"]=!0,h.d["s-cr"]=v,h.d["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[s])&&w.vtag===h.vtag&&i.d&&o(i.d)),h.d}function o(n,i,c,r){t.x=!0;const s=e.O(n);for(c=s.length-1;c>=0;c--)(r=s[c])["s-hn"]!==m&&r["s-ol"]&&(e.W(r),e.r(l(r),r,f(r)),e.W(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.x=!1}function i(t,o,i,c,r,s,l,u){const a=t["s-cr"];for((l=a&&e.N(a)||t).shadowRoot&&e.S(l)===m&&(l=l.shadowRoot);r<=s;++r)c[r]&&(u=O(c[r].vtext)?e.w(c[r].vtext):n(null,i,r,t))&&(c[r].d=u,e.r(l,u,f(o)))}function c(t,n,i,c){for(;n<=i;++n)O(t[n])&&(c=t[n].d,p=!0,c["s-ol"]?e.W(c["s-ol"]):o(c,!0),e.W(c))}function s(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function f(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.N(t["s-ol"]?t["s-ol"]:t)}let u,a,p,d,v,m,b;const y=[];return function h(w,g,M,$,k,C,j,x,W,E,N,A){if(b=w,m=e.S(b),v=b["s-cr"],u=$,a=b["s-sc"],d=p=!1,function u(a,p,d){const v=p.d=a.d,m=a.vchildren,b=p.vchildren;S=p.d&&O(e.A(p.d))&&void 0!==p.d.ownerSVGElement,S="svg"===p.vtag||"foreignObject"!==p.vtag&&S,O(p.vtext)?(d=v["s-cr"])?e.R(e.N(d),p.vtext):a.vtext!==p.vtext&&e.R(v,p.vtext):("slot"!==p.vtag&&r(t,a,p,S),O(m)&&O(b)?function y(t,r,a,p,d,v,m,b){let y=0,h=0,w=r.length-1,g=r[0],M=r[w],$=p.length-1,k=p[0],C=p[$];for(;y<=w&&h<=$;)if(null==g)g=r[++y];else if(null==M)M=r[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--$];else if(s(g,k))u(g,k),g=r[++y],k=p[++h];else if(s(M,C))u(M,C),M=r[--w],C=p[--$];else if(s(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.N(g.d)),u(g,C),e.r(t,g.d,e.T(M.d)),g=r[++y],C=p[--$];else if(s(M,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.N(M.d)),u(M,k),e.r(t,M.d,g.d),M=r[--w],k=p[++h];else{for(d=null,v=y;v<=w;++v)if(r[v]&&O(r[v].vkey)&&r[v].vkey===k.vkey){d=v;break}O(d)?((b=r[d]).vtag!==k.vtag?m=n(r&&r[h],a,d,t):(u(b,k),r[d]=void 0,m=b.d),k=p[++h]):(m=n(r&&r[h],a,h,t),k=p[++h]),m&&e.r(l(g.d),m,f(g.d))}y>w?i(t,null==p[$+1]?null:p[$+1].d,a,p,h,$):h>$&&c(r,y,w)}(v,m,p,b):O(b)?(O(a.vtext)&&e.R(v,""),i(v,null,p,b,0,b.length-1)):O(m)&&c(m,0,m.length-1)),S&&"svg"===p.vtag&&(S=!1)}(g,M),d){for(function t(n,o,i,c,r,s,f,l,u,a){for(r=0,s=(o=e.O(n)).length;r<s;r++){if((i=o[r])["s-sr"]&&(c=i["s-cr"]))for(l=e.O(e.N(c)),u=i["s-sn"],f=l.length-1;f>=0;f--)(c=l[f])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.L(c))||8===a)&&""===u||1===a&&null===e.D(c,"slot")&&""===u||1===a&&e.D(c,"slot")===u)&&(y.some(t=>t.I===c)||(p=!0,c["s-sn"]=u,y.push({P:i,I:c})));1===e.L(i)&&t(i)}}(M.d),j=0;j<y.length;j++)(x=y[j]).I["s-ol"]||((W=e.w(""))["s-nr"]=x.I,e.r(e.N(x.I),x.I["s-ol"]=W,x.I));for(t.x=!0,j=0;j<y.length;j++){for(x=y[j],N=e.N(x.P),A=e.T(x.P),W=x.I["s-ol"];W=e.q(W);)if((E=W["s-nr"])&&E&&E["s-sn"]===x.I["s-sn"]&&N===e.N(E)&&(E=e.T(E))&&E&&!E["s-nr"]){A=E;break}(!A&&N!==e.N(x.I)||e.T(x.I)!==A)&&x.I!==A&&(e.W(x.I),e.r(N,x.I,A))}t.x=!1}return p&&function t(n,o,i,c,r,s,f,l){for(c=0,r=(i=e.O(n)).length;c<r;c++)if(o=i[c],1===e.L(o)){if(o["s-sr"])for(f=o["s-sn"],o.hidden=!1,s=0;s<r;s++)if(i[s]["s-hn"]!==o["s-hn"])if(l=e.L(i[s]),""!==f){if(1===l&&f===e.D(i[s],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.B(i[s]).trim()){o.hidden=!0;break}t(o)}}(M.d),y.length=0,M}}function f(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.d),t.vchildren&&t.vchildren.forEach(t=>{f(t,e)}))}function l(t,e,n,o,i){const c=t.L(e);let r,s,f,u;if(i&&1===c){(s=t.D(e,k))&&(f=s.split("."))[0]===o&&((u={}).vtag=t.S(u.d=e),n.vchildren||(n.vchildren=[]),n.vchildren[f[1]]=u,n=u,i=""!==f[2]);for(let c=0;c<e.childNodes.length;c++)l(t,e.childNodes[c],n,o,i)}else 3===c&&(r=e.previousSibling)&&8===t.L(r)&&"s"===(f=t.B(r).split("."))[0]&&f[1]===o&&((u={vtext:t.B(e)}).d=e,n.vchildren||(n.vchildren=[]),n.vchildren[f[2]]=u)}function u(t,e){let n,o,i=null,c=!1,r=!1;for(var s=arguments.length;s-- >2;)A.push(arguments[s]);for(;A.length>0;){let e=A.pop();if(e&&void 0!==e.pop)for(s=e.length;s--;)A.push(e[s]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].vtext+=e:null===i?i=[r?{vtext:e}:e]:i.push(r?{vtext:e}:e),c=r}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(s in e.class)e.class[s]&&A.push(s);e.class=A.join(" "),A.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],R):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,d:void 0,v:!1}}function a(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function p(t){const[e,n,,o,i,c]=t,r={color:{F:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];r[e[0]]={H:e[1],U:!!e[2],F:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Q:e[4]}}return{t:e,Z:n,f:Object.assign({},r),e:i,z:c?c.map(d):void 0}}function d(t){return{G:t[0],J:t[1],K:!!t[2],V:!!t[3],X:!!t[4]}}function v(t,e){if(O(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function m(t,e,n){t.Y.add(e),t._.has(e)||(t._.set(e,!0),t.tt?t.queue.write(()=>b(t,e,n)):t.queue.tick(()=>b(t,e,n)))}async function b(t,n,o,i,c,r){if(t._.delete(n),!t.et.has(n)){if(!(c=t.nt.get(n))){if((r=t.ot.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{b(t,n,o)});c=function s(t,e,n,o,i,c,r,f){try{i=new(c=t.s(e).it),function l(t,e,n,o,i,c){t.ct.set(o,n),t.rt.has(n)||t.rt.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,r])=>{(function s(t,e,n,o,i,c,r,f,l){if(e.type||e.state){const s=t.rt.get(n);e.state||(!e.attr||void 0!==s[i]&&""!==s[i]||(f=c&&c.st)&&O(l=f[e.attr])&&(s[i]=v(e.type,l)),n.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=v(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=o[i]),e.watchCallbacks&&(s[T+i]=e.watchCallbacks.slice()),h(o,i,function u(e){return(e=t.rt.get(t.ct.get(this)))&&e[i]},function a(n,o){(o=t.ct.get(this))&&(e.state||e.mutable)&&y(t,o,i,n,r)})}})(t,r,n,o,e,i,c)})}(t,c,e,i,n,o),function u(t,e,n){if(e){const o=t.ct.get(n);e.forEach(e=>{n[e.method]={emit:n=>t.ft(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}})}}(t,c.events,i)}catch(n){i={},t.lt(n,7,e,!0)}return t.nt.set(e,i),i}(t,n,t.ut.get(n),o)}(function f(t,n,o,i,c){try{const c=n.it.host,r=n.it.encapsulation,s="shadow"===r&&t.o.n;let f,l=o;if(!o["s-rn"]){t.at(t,t.o,n,o);const i=o["s-sc"];i&&(t.o.m(o,e(i,!0)),"scoped"===r&&t.o.m(o,e(i)))}if(i.render||i.hostData||c||f){t.pt=!0;const e=i.render&&i.render();let n;t.pt=!1;const c=t.dt.get(o)||{};c.d=l;const f=u(null,n,e);t.dt.set(o,t.render(o,c,f,s,r))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(t=>t()),o["s-rc"]=null)}catch(e){t.pt=!1,t.lt(e,8,o,!0)}})(t,t.s(n),n,c),n["s-init"]()}}function y(t,e,n,o,i,c){let r=t.rt.get(e);r||t.rt.set(e,r={}),o!==r[n]&&(r[n]=o,t.nt.get(e)&&!t.pt&&e["s-rn"]&&m(t,e,i))}function h(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function w(t,e,n,o,i,c){if(t.Y.delete(e),(i=t.ot.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.ot.delete(e)),t.vt.length&&!t.Y.size)for(;c=t.vt.shift();)c()}function g(t,e,n,o,i){if(n.connectedCallback=function(){(function n(t,e,o,i){t.et.delete(o),t.mt.has(o)||(o["s-id"]||(o["s-id"]=t.bt()),t.yt=!0,t.Y.add(o),t.mt.set(o,!0),function c(t,e,n){for(n=e;n=t.o.A(n);)if(t.k(n)){t.C.has(e)||(t.ot.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.ut.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.ht(o)),o["s-cr"]||t.D(o,$)||t.n&&1===e.e||(o["s-cr"]=t.w(""),o["s-cr"]["s-cn"]=!0,t.r(o,o["s-cr"],t.O(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),i={wt:o["s-id"],st:{}},e.f&&Object.keys(e.f).forEach(n=>{(c=e.f[n].F)&&(i.st[c]=t.D(o,c))}),i}(t.o,e,o)),t.gt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n,o){if(!t.x&&function i(t,e){for(;e;){if(!t.N(e))return 9!==t.L(e);e=t.N(e)}}(t.o,n)){t.et.set(n,!0),w(t,n),f(t.dt.get(n),!0),t.o.p(n),t.Mt.delete(n);{const e=t.nt.get(n);e&&e.componentDidUnload&&e.componentDidUnload()}[t.ot,t.$t,t.ut].forEach(t=>t.delete(n))}})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,r,s){if((c=t.nt.get(n))&&!t.et.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.C.set(n,!0),(s=t.kt.has(n))||(t.kt.set(n,!0),n["s-ld"]=void 0,t.o.m(n,o));try{f(t.dt.get(n)),(r=t.$t.get(n))&&(r.forEach(t=>t(n)),t.$t.delete(n)),!s&&c.componentDidLoad&&c.componentDidLoad()}catch(e){t.lt(e,4,n)}w(t,n)}})(t,this,o)},n.forceUpdate=function(){m(t,this,i)},e.f){const o=Object.entries(e.f);{let t={};o.forEach(([e,{F:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[W(n)];i&&(e[i]=o)})(t,this,e,o)}}(function c(t,e,n,o){e.forEach(([e,i])=>{const c=i.H;3&c?h(n,e,function n(){return(t.rt.get(this)||{})[e]},function n(c){y(t,this,e,v(i.Q,c),o)}):32===c&&function r(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}(n,e,E)})})(t,o,n,i)}}function M(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.M(n),t.j(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const $="ssrv",k="ssrc",C="$",j={},x={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=t=>null!=t,W=t=>t.toLowerCase(),E=()=>{},N="http://www.w3.org/1999/xlink";let S=!1;const A=[],R={forEach:(t,e)=>{t.forEach((t,n,o)=>e(a(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(a(t),n,o)))},T="wc-";(function L(t,e,o,i,c,r,f){function a(t,e){const n=t.t;o.customElements.get(n)||(g(O,v[n]=t,e.prototype,r,d),e.observedAttributes=Object.values(t.f).map(t=>t.F).filter(t=>!!t),o.customElements.define(t.t,e))}const d=o.performance,v={html:{}},b={},y=o[t]=o[t]||{},h=function w(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,Ct:!1,L:t=>t.nodeType,M:t=>n.createElement(t),g:(t,e)=>n.createElementNS(t,e),w:t=>n.createTextNode(t),jt:t=>n.createComment(t),r:(t,e,n)=>t.insertBefore(e,n),W:t=>t.remove(),j:(t,e)=>t.appendChild(e),m:(t,e)=>{t.classList.add(e)},O:t=>t.childNodes,N:t=>t.parentNode,T:t=>t.nextSibling,q:t=>t.previousSibling,S:t=>W(t.nodeName),B:t=>t.textContent,R:(t,e)=>t.textContent=e,D:(t,e)=>t.getAttribute(e),xt:(t,e,n)=>t.setAttribute(e,n),Ot:(t,e,n,o)=>t.setAttributeNS(e,n,o),l:(t,e)=>t.removeAttribute(e),u:(t,e)=>t.hasAttribute(e),ht:e=>e.getAttribute("mode")||(t.Context||{}).mode,Wt:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.A(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,a:(e,n,c,r,s,f,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof f?p=i.Wt(e,f):"object"==typeof f?p=f:(u=n.split(":")).length>1&&(p=i.Wt(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===x[u[1]]&&c(t)})),l=i.Ct?{capture:!!r,passive:!!s}:!!r,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},p:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Et:(t,n,o)=>{const i=new e.CustomEvent(n,o);return t&&t.dispatchEvent(i),i},A:(t,e)=>(e=i.N(t))&&11===i.L(e)?e.host:e};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Ct=!0}))}catch(t){}return i}(y,o,i);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=i,e.resourcesUrl=e.publicPath=c,e.emit=((t,n,o)=>h.Et(t,e.eventNameFn?e.eventNameFn(n):n,o)),y.h=u,y.Context=e;const k=o["s-defined"]=o["s-defined"]||{};let j=0;const O={o:h,Nt:a,ft:e.emit,s:t=>v[h.S(t)],St:t=>e[t],isClient:!0,k:t=>!(!k[h.S(t)]&&!O.s(t)),bt:()=>t+j++,lt:(t,e,n)=>void 0,At:t=>(function e(t,n,o){return{create:M(t,n,o,"create"),componentOnReady:M(t,n,o,"componentOnReady")}})(h,b,t),queue:e.queue=function E(t,e){function n(e){return n=>{e.push(n),v||(v=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](r())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=r())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){d++,o(u);const e=s?r()+7*Math.ceil(d*(1/22)):Infinity;i(a,e),i(p,e),a.length>0&&(p.push(...a),a.length=0),(v=u.length+a.length+p.length>0)?t.raf(c):d=0}const r=()=>e.performance.now(),s=!1!==t.asyncQueue,f=Promise.resolve(),l=[],u=[],a=[],p=[];let d=0,v=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){l.push(t),1===l.length&&f.then(()=>o(l))},read:n(u),write:n(a)}}(y,o),gt:function N(t,e,n){if(t.it)m(O,e,d);else{const n="string"==typeof t.Z?t.Z:t.Z[e.mode];import(c+n+".entry.js").then(n=>{try{t.it=n[(t=>W(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c,r){if(i){const n=e.t+(c||C);if(!e[n]){const o=t.M("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.j(t.i.head,o)}}}(h,t,t.e,t.it.style,t.it.styleMode),m(O,e,d)}catch(e){t.it=class{}}},t=>void 0)}},pt:!1,tt:!1,x:!1,at:n,ot:new WeakMap,c:new WeakMap,mt:new WeakMap,Mt:new WeakMap,kt:new WeakMap,C:new WeakMap,ct:new WeakMap,ut:new WeakMap,nt:new WeakMap,et:new WeakMap,_:new WeakMap,$t:new WeakMap,Rt:new WeakMap,dt:new WeakMap,rt:new WeakMap,Y:new Set,vt:[]};y.onReady=(()=>new Promise(t=>O.queue.write(()=>O.Y.size?O.vt.push(t):t()))),O.render=s(O,h);const S=h.i.documentElement;return S["s-ld"]=[],S["s-rn"]=!0,S["s-init"]=(()=>{O.C.set(S,y.loaded=O.tt=!0),h.Et(o,"appload",{detail:{namespace:t}})}),function A(t,e,n){const o=n.querySelectorAll(`[${$}]`),i=o.length;let c,r,s,f,u,a;if(i>0)for(t.C.set(n,!0),f=0;f<i;f++)for(c=o[f],r=e.D(c,$),(s={}).vtag=e.S(s.d=c),t.dt.set(c,s),u=0,a=c.childNodes.length;u<a;u++)l(e,c.childNodes[u],s,r,!0)}(O,h,S),f.map(p).forEach(t=>a(t,class extends HTMLElement{})),O.yt||S["s-init"](),function R(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.s(e);if(o)if(t.C.has(e))n(e);else{const o=t.$t.get(e)||[];o.push(n),t.$t.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(O,y,o,o["s-apps"],o["s-cr"]),y.initialized=!0,O})(namespace,Context,window,document,resourcesUrl,hydratedCssClass,components);
})(window,document,{},"AgcAdjustedWeaningWeight","hydrated",[["agc-adjusted-weaning-weight","qvzbbn0w",0,[["cache",16],["currentStep",16],["mode",1,0,1,2],["results",16],["socket",1,0,1,2],["submitted",16],["tract",1,0,1,2],["units",1,0,1,1]]],["agc-adjusted-weaning-weight-progress","uuomo9np",0,[["currentStep",16],["socket",1,0,1,2]]],["agc-adjusted-weaning-weight-results","9bk4qvdl",0,[["data",16],["ready",16],["socket",1,0,1,2]]],["agc-adjusted-weaning-weight-results-placeholder","n041rnty"]]);