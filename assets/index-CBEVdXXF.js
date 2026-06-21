var sS=Object.defineProperty;var oS=(s,t,i)=>t in s?sS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var je=(s,t,i)=>oS(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var th={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function lS(){if(F_)return Ao;F_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var I_;function cS(){return I_||(I_=1,th.exports=lS()),th.exports}var At=cS(),eh={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function uS(){if(H_)return re;H_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function y(N,J,pt){this.props=N,this.context=J,this.refs=M,this.updater=pt||E}y.prototype.isReactComponent={},y.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=y.prototype;function U(N,J,pt){this.props=N,this.context=J,this.refs=M,this.updater=pt||E}var w=U.prototype=new P;w.constructor=U,b(w,y.prototype),w.isPureReactComponent=!0;var X=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(N,J,pt){var Q=pt.ref;return{$$typeof:s,type:N,key:J,ref:Q!==void 0?Q:null,props:pt}}function C(N,J){return D(N.type,J,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function nt(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(pt){return J[pt]})}var et=/\/+/g;function ct(N,J){return typeof N=="object"&&N!==null&&N.key!=null?nt(""+N.key):J.toString(36)}function it(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(J){N.status==="pending"&&(N.status="fulfilled",N.value=J)},function(J){N.status==="pending"&&(N.status="rejected",N.reason=J)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function L(N,J,pt,Q,ut){var Mt=typeof N;(Mt==="undefined"||Mt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(Mt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case s:case t:yt=!0;break;case g:return yt=N._init,L(yt(N._payload),J,pt,Q,ut)}}if(yt)return ut=ut(N),yt=Q===""?"."+ct(N,0):Q,X(ut)?(pt="",yt!=null&&(pt=yt.replace(et,"$&/")+"/"),L(ut,J,pt,"",function(Wt){return Wt})):ut!=null&&(H(ut)&&(ut=C(ut,pt+(ut.key==null||N&&N.key===ut.key?"":(""+ut.key).replace(et,"$&/")+"/")+yt)),J.push(ut)),1;yt=0;var Pt=Q===""?".":Q+":";if(X(N))for(var Ht=0;Ht<N.length;Ht++)Q=N[Ht],Mt=Pt+ct(Q,Ht),yt+=L(Q,J,pt,Mt,ut);else if(Ht=S(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(Q=N.next()).done;)Q=Q.value,Mt=Pt+ct(Q,Ht++),yt+=L(Q,J,pt,Mt,ut);else if(Mt==="object"){if(typeof N.then=="function")return L(it(N),J,pt,Q,ut);throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return yt}function W(N,J,pt){if(N==null)return N;var Q=[],ut=0;return L(N,Q,"","",function(Mt){return J.call(pt,Mt,ut++)}),Q}function G(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(pt){(N._status===0||N._status===-1)&&(N._status=1,N._result=pt)},function(pt){(N._status===0||N._status===-1)&&(N._status=2,N._result=pt)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var dt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},St={map:W,forEach:function(N,J,pt){W(N,function(){J.apply(this,arguments)},pt)},count:function(N){var J=0;return W(N,function(){J++}),J},toArray:function(N){return W(N,function(J){return J})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=_,re.Children=St,re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return z.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,J,pt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Q=b({},N.props),ut=N.key;if(J!=null)for(Mt in J.key!==void 0&&(ut=""+J.key),J)!k.call(J,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&J.ref===void 0||(Q[Mt]=J[Mt]);var Mt=arguments.length-2;if(Mt===1)Q.children=pt;else if(1<Mt){for(var yt=Array(Mt),Pt=0;Pt<Mt;Pt++)yt[Pt]=arguments[Pt+2];Q.children=yt}return D(N.type,ut,Q)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,J,pt){var Q,ut={},Mt=null;if(J!=null)for(Q in J.key!==void 0&&(Mt=""+J.key),J)k.call(J,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ut[Q]=J[Q]);var yt=arguments.length-2;if(yt===1)ut.children=pt;else if(1<yt){for(var Pt=Array(yt),Ht=0;Ht<yt;Ht++)Pt[Ht]=arguments[Ht+2];ut.children=Pt}if(N&&N.defaultProps)for(Q in yt=N.defaultProps,yt)ut[Q]===void 0&&(ut[Q]=yt[Q]);return D(N,Mt,ut)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=H,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:G}},re.memo=function(N,J){return{$$typeof:m,type:N,compare:J===void 0?null:J}},re.startTransition=function(N){var J=z.T,pt={};z.T=pt;try{var Q=N(),ut=z.S;ut!==null&&ut(pt,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(B,dt)}catch(Mt){dt(Mt)}finally{J!==null&&pt.types!==null&&(J.types=pt.types),z.T=J}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(N){return z.H.use(N)},re.useActionState=function(N,J,pt){return z.H.useActionState(N,J,pt)},re.useCallback=function(N,J){return z.H.useCallback(N,J)},re.useContext=function(N){return z.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,J){return z.H.useDeferredValue(N,J)},re.useEffect=function(N,J){return z.H.useEffect(N,J)},re.useEffectEvent=function(N){return z.H.useEffectEvent(N)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(N,J,pt){return z.H.useImperativeHandle(N,J,pt)},re.useInsertionEffect=function(N,J){return z.H.useInsertionEffect(N,J)},re.useLayoutEffect=function(N,J){return z.H.useLayoutEffect(N,J)},re.useMemo=function(N,J){return z.H.useMemo(N,J)},re.useOptimistic=function(N,J){return z.H.useOptimistic(N,J)},re.useReducer=function(N,J,pt){return z.H.useReducer(N,J,pt)},re.useRef=function(N){return z.H.useRef(N)},re.useState=function(N){return z.H.useState(N)},re.useSyncExternalStore=function(N,J,pt){return z.H.useSyncExternalStore(N,J,pt)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.7",re}var G_;function Bd(){return G_||(G_=1,eh.exports=uS()),eh.exports}var Yt=Bd(),nh={exports:{}},Ro={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function fS(){return V_||(V_=1,(function(s){function t(L,W){var G=L.length;L.push(W);t:for(;0<G;){var dt=G-1>>>1,St=L[dt];if(0<l(St,W))L[dt]=W,L[G]=St,G=dt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],G=L.pop();if(G!==W){L[0]=G;t:for(var dt=0,St=L.length,N=St>>>1;dt<N;){var J=2*(dt+1)-1,pt=L[J],Q=J+1,ut=L[Q];if(0>l(pt,G))Q<St&&0>l(ut,pt)?(L[dt]=ut,L[Q]=G,dt=Q):(L[dt]=pt,L[J]=G,dt=J);else if(Q<St&&0>l(ut,G))L[dt]=ut,L[Q]=G,dt=Q;else break t}}return W}function l(L,W){var G=L.sortIndex-W.sortIndex;return G!==0?G:L.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,v=3,S=!1,E=!1,b=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(L){for(var W=i(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=L)r(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function X(L){if(b=!1,w(L),!E)if(i(p)!==null)E=!0,B||(B=!0,nt());else{var W=i(m);W!==null&&it(X,W.startTime-L)}}var B=!1,z=-1,k=5,D=-1;function C(){return M?!0:!(s.unstable_now()-D<k)}function H(){if(M=!1,B){var L=s.unstable_now();D=L;var W=!0;try{t:{E=!1,b&&(b=!1,P(z),z=-1),S=!0;var G=v;try{e:{for(w(L),_=i(p);_!==null&&!(_.expirationTime>L&&C());){var dt=_.callback;if(typeof dt=="function"){_.callback=null,v=_.priorityLevel;var St=dt(_.expirationTime<=L);if(L=s.unstable_now(),typeof St=="function"){_.callback=St,w(L),W=!0;break e}_===i(p)&&r(p),w(L)}else r(p);_=i(p)}if(_!==null)W=!0;else{var N=i(m);N!==null&&it(X,N.startTime-L),W=!1}}break t}finally{_=null,v=G,S=!1}W=void 0}}finally{W?nt():B=!1}}}var nt;if(typeof U=="function")nt=function(){U(H)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=H,nt=function(){ct.postMessage(null)}}else nt=function(){y(H,0)};function it(L,W){z=y(function(){L(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(L){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var G=v;v=W;try{return L()}finally{v=G}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=v;v=L;try{return W()}finally{v=G}},s.unstable_scheduleCallback=function(L,W,G){var dt=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?dt+G:dt):G=dt,L){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=G+St,L={id:g++,callback:W,priorityLevel:L,startTime:G,expirationTime:St,sortIndex:-1},G>dt?(L.sortIndex=G,t(m,L),i(p)===null&&L===i(m)&&(b?(P(z),z=-1):b=!0,it(X,G-dt))):(L.sortIndex=St,t(p,L),E||S||(E=!0,B||(B=!0,nt()))),L},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(L){var W=v;return function(){var G=v;v=W;try{return L.apply(this,arguments)}finally{v=G}}}})(ah)),ah}var k_;function hS(){return k_||(k_=1,ih.exports=fS()),ih.exports}var rh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function dS(){if(X_)return An;X_=1;var s=Bd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},An.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.7",An}var W_;function pS(){if(W_)return rh.exports;W_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),rh.exports=dS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function mS(){if(q_)return Ro;q_=1;var s=hS(),t=Bd(),i=pS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,o=h;break}if(T===o){x=!0,o=u,a=h;break}T=T.sibling}if(!x){for(T=h.child;T;){if(T===a){x=!0,a=h,o=u;break}if(T===o){x=!0,o=h,a=u;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var it=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},dt=[],St=-1;function N(e){return{current:e}}function J(e){0>St||(e.current=dt[St],dt[St]=null,St--)}function pt(e,n){St++,dt[St]=e.current,e.current=n}var Q=N(null),ut=N(null),Mt=N(null),yt=N(null);function Pt(e,n){switch(pt(Mt,n),pt(ut,e),pt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?o_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=o_(n),e=l_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Q),pt(Q,e)}function Ht(){J(Q),J(ut),J(Mt)}function Wt(e){e.memoizedState!==null&&pt(yt,e);var n=Q.current,a=l_(n,e.type);n!==a&&(pt(ut,e),pt(Q,a))}function De(e){ut.current===e&&(J(Q),J(ut)),yt.current===e&&(J(yt),Mo._currentValue=G)}var Ue,fe;function I(e){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+fe}var Tn=!1;function he(e,n){if(!e||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var at=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){at=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],T=h[1];if(x&&T){var F=x.split(`
`),tt=T.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===tt.length)for(o=F.length-1,u=tt.length-1;1<=o&&0<=u&&F[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==tt[u]){var ht=`
`+F[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?I(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return I("Activity");default:return""}}function qt(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Le=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,O=s.unstable_cancelCallback,A=s.unstable_shouldYield,rt=s.unstable_requestPaint,mt=s.unstable_now,Et=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,Ft=s.unstable_setDisableYieldValue,Qt=null,kt=null;function Ot(e){if(typeof bt=="function"&&Ft(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Qt,e)}catch{}}var te=Math.clz32?Math.clz32:Y,se=Math.log,Pe=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(se(e)/Pe|0)|0}var wt=256,ft=262144,xt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=Rt(o):(x&=T,x!==0?u=Rt(x):a||(a=T&~e,a!==0&&(u=Rt(a))))):(T=o&~h,T!==0?u=Rt(T):x!==0?u=Rt(x):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-te(a),vt=1<<ht;T[ht]=0,F[ht]=-1;var at=tt[ht];if(at!==null)for(tt[ht]=null,ht=0;ht<at.length;ht++){var lt=at[ht];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&Ns(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Ns(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-te(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Os(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-te(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ai(e,n){var a=n&-n;return a=(a&42)!==0?1:ja(a),(a&(e.suspendedLanes|n))!==0?0:a}function ja(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:U_(e.type))}function Za(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,vn="__reactProps$"+mi,zi="__reactContainer$"+mi,Ps="__reactEvents$"+mi,Yc="__reactListeners$"+mi,jc="__reactHandles$"+mi,Zo="__reactResources$"+mi,Ka="__reactMarker$"+mi;function Bs(e){delete e[Ke],delete e[vn],delete e[Ps],delete e[Yc],delete e[jc]}function R(e){var n=e[Ke];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=m_(e);e!==null;){if(a=e[Ke])return a;e=m_(e)}return n}e=a,a=e.parentNode}return null}function j(e){if(e=e[Ke]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ot(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[Ka]=!0}var Tt=new Set,Ut={};function Nt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Tt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},jt={};function ye(e){return Le.call(jt,e)?!0:Le.call($t,e)?!1:ie.test(e)?jt[e]=!0:($t[e]=!0,!1)}function Se(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=Kt(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,a,o,u,h,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bn(e,x,ae(n)):a!=null?bn(e,x,ae(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ae(T):e.removeAttribute("name")}function Un(e,n,a,o,u,h,x,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ee(e)}function bn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function wr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(it(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ex.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function rp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ap(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&ap(e,h,n[h])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return ix.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,Ur=null;function sp(e){var n=j(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(r(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&On(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Jc=!1;function op(e,n,a){if(Jc)return e(n,a);Jc=!0;try{var o=e(n);return o}finally{if(Jc=!1,(Dr!==null||Ur!==null)&&(Bl(),Dr&&(n=Dr,e=Ur,Ur=Dr=null,sp(n),e)))for(n=0;n<e.length;n++)sp(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Bi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{$c=!1}var da=null,tu=null,Qo=null;function lp(){if(Qo)return Qo;var e,n=tu,a=n.length,o,u="value"in da?da.value:da.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function cp(){return!1}function Pn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$o:cp,this.isPropagationStopped=cp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Pn(Qa),Hs=_({},Qa,{view:0,detail:0}),ax=Pn(Hs),eu,nu,Gs,el=_({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(eu=e.screenX-Gs.screenX,nu=e.screenY-Gs.screenY):nu=eu=0,Gs=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),up=Pn(el),rx=_({},el,{dataTransfer:0}),sx=Pn(rx),ox=_({},Hs,{relatedTarget:0}),iu=Pn(ox),lx=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Pn(lx),ux=_({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fx=Pn(ux),hx=_({},Qa,{data:0}),fp=Pn(hx),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mx[e])?!!n[e]:!1}function au(){return gx}var _x=_({},Hs,{key:function(e){if(e.key){var n=dx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?px[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vx=Pn(_x),xx=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Pn(xx),yx=_({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Sx=Pn(yx),Mx=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=Pn(Mx),Tx=_({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=Pn(Tx),Ax=_({},Qa,{newState:0,oldState:0}),Rx=Pn(Ax),Cx=[9,13,27,32],ru=Bi&&"CompositionEvent"in window,Vs=null;Bi&&"documentMode"in document&&(Vs=document.documentMode);var wx=Bi&&"TextEvent"in window&&!Vs,dp=Bi&&(!ru||Vs&&8<Vs&&11>=Vs),pp=" ",mp=!1;function gp(e,n){switch(e){case"keyup":return Cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function Dx(e,n){switch(e){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return e=n.data,e===pp&&mp?null:e;default:return null}}function Ux(e,n){if(Lr)return e==="compositionend"||!ru&&gp(e,n)?(e=lp(),Qo=tu=da=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lx[e.type]:n==="textarea"}function xp(e,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ks=null,Xs=null;function Nx(e){e_(e,0)}function nl(e){var n=st(e);if(On(n))return e}function yp(e,n){if(e==="change")return n}var Sp=!1;if(Bi){var su;if(Bi){var ou="oninput"in document;if(!ou){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),ou=typeof Mp.oninput=="function"}su=ou}else su=!1;Sp=su&&(!document.documentMode||9<document.documentMode)}function Ep(){ks&&(ks.detachEvent("onpropertychange",Tp),Xs=ks=null)}function Tp(e){if(e.propertyName==="value"&&nl(Xs)){var n=[];xp(n,Xs,e,Qc(e)),op(Nx,n)}}function Ox(e,n,a){e==="focusin"?(Ep(),ks=n,Xs=a,ks.attachEvent("onpropertychange",Tp)):e==="focusout"&&Ep()}function zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Xs)}function Px(e,n){if(e==="click")return nl(n)}function Bx(e,n){if(e==="input"||e==="change")return nl(n)}function Fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Fx;function Ws(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Le.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,n){var a=bp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=bp(a)}}function Rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ix=Bi&&"documentMode"in document&&11>=document.documentMode,Nr=null,cu=null,qs=null,uu=!1;function wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||Nr==null||Nr!==gi(o)||(o=Nr,"selectionStart"in o&&lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qs&&Ws(qs,o)||(qs=o,o=Xl(cu,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Nr)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Or={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},fu={},Dp={};Bi&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function $a(e){if(fu[e])return fu[e];if(!Or[e])return e;var n=Or[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return fu[e]=n[a];return e}var Up=$a("animationend"),Lp=$a("animationiteration"),Np=$a("animationstart"),Hx=$a("transitionrun"),Gx=$a("transitionstart"),Vx=$a("transitioncancel"),Op=$a("transitionend"),zp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function _i(e,n){zp.set(e,n),Nt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],zr=0,du=0;function al(){for(var e=zr,n=du=zr=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var h=ei[n];if(ei[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Pp(a,u,h)}}function rl(e,n,a,o){ei[zr++]=e,ei[zr++]=n,ei[zr++]=a,ei[zr++]=o,du|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pu(e,n,a,o){return rl(e,n,a,o),sl(e)}function tr(e,n){return rl(e,null,null,n),sl(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-te(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function sl(e){if(50<mo)throw mo=0,Tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Pr={};function kx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new kx(e,n,a,o)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")mu(e)&&(x=1);else if(typeof e=="string")x=jy(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,u),e.elementType=D,e.lanes=h,e;case b:return er(a.children,u,h,n);case M:x=8,u|=24;break;case y:return e=qn(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case X:return e=qn(13,a,n,u),e.elementType=X,e.lanes=h,e;case B:return e=qn(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case P:x=9;break t;case w:x=11;break t;case z:x=14;break t;case k:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function er(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function gu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Fp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function _u(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ip=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qt(n)},Ip.set(e,n),n)}return{value:e,source:n,stack:qt(n)}}var Br=[],Fr=0,ll=null,Ys=0,ii=[],ai=0,pa=null,Ri=1,Ci="";function Ii(e,n){Br[Fr++]=Ys,Br[Fr++]=ll,ll=e,Ys=n}function Hp(e,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=pa,pa=e;var o=Ri;e=Ci;var u=32-te(o)-1;o&=~(1<<u),a+=1;var h=32-te(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ri=1<<32-te(n)+u|a<<u|o,Ci=h+e}else Ri=1<<h|a<<u|o,Ci=e}function vu(e){e.return!==null&&(Ii(e,1),Hp(e,1,0))}function xu(e){for(;e===ll;)ll=Br[--Fr],Br[Fr]=null,Ys=Br[--Fr],Br[Fr]=null;for(;e===pa;)pa=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function Gp(e,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=pa,Ri=n.id,Ci=n.overflow,pa=e}var yn=null,Xe=null,Me=!1,ma=null,ri=!1,yu=Error(r(519));function ga(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw js(ni(n,e)),yu}function Vp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ke]=e,n[vn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)pe(_o[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),wr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||r_(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ga(e,!0)}function kp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Ir(e){if(e!==yn)return!1;if(!Me)return kp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&Xe&&ga(e),kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=p_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=p_(e)}else n===27?(n=Xe,Da(e.type)?(e=Xf,Xf=null,Xe=e):Xe=n):Xe=yn?oi(e.stateNode.nextSibling):null;return!0}function nr(){Xe=yn=null,Me=!1}function Su(){var e=ma;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ma=null),e}function js(e){ma===null?ma=[e]:ma.push(e)}var Mu=N(null),ir=null,Hi=null;function _a(e,n,a){pt(Mu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=Mu.current,J(Mu)}function Eu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),Eu(h.return,a,e),o||(x=null);break t}h=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),Eu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Hr(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=u.type;Wn(u.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(u===yt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Tu(n,e,a,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ar(e){ir=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return Xp(ir,e)}function ul(e,n){return ir===null&&ar(e),Xp(e,n)}function Xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var Xx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Wx=s.unstable_scheduleCallback,qx=s.unstable_NormalPriority,an={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new Xx,data:new Map,refCount:0}}function Zs(e){e.refCount--,e.refCount===0&&Wx(qx,function(){e.controller.abort()})}var Ks=null,Au=0,Gr=0,Vr=null;function Yx(e,n){if(Ks===null){var a=Ks=[];Au=0,Gr=Df(),Vr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Au++,n.then(Wp,Wp),n}function Wp(){if(--Au===0&&Ks!==null){Vr!==null&&(Vr.status="fulfilled");var e=Ks;Ks=null,Gr=0,Vr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function jx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var qp=L.S;L.S=function(e,n){wg=mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yx(e,n),qp!==null&&qp(e,n)};var rr=N(null);function Ru(){var e=rr.current;return e!==null?e:Ve.pooledCache}function fl(e,n){n===null?pt(rr,rr.current):pt(rr,n.pool)}function Yp(){var e=Ru();return e===null?null:{parent:an._currentValue,pool:e}}var kr=Error(r(460)),Cu=Error(r(474)),hl=Error(r(542)),dl={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e}throw or=n,kr}}function sr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(or=a,kr):a}}var or=null;function Kp(){if(or===null)throw Error(r(459));var e=or;return or=null,e}function Qp(e){if(e===kr||e===hl)throw Error(r(483))}var Xr=null,Qs=0;function pl(e){var n=Qs;return Qs+=1,Xr===null&&(Xr=[]),Zp(Xr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){function n(Z,V){if(e){var $=Z.deletions;$===null?(Z.deletions=[V],Z.flags|=16):$.push(V)}}function a(Z,V){if(!e)return null;for(;V!==null;)n(Z,V),V=V.sibling;return null}function o(Z){for(var V=new Map;Z!==null;)Z.key!==null?V.set(Z.key,Z):V.set(Z.index,Z),Z=Z.sibling;return V}function u(Z,V){return Z=Fi(Z,V),Z.index=0,Z.sibling=null,Z}function h(Z,V,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<V?(Z.flags|=67108866,V):$):(Z.flags|=67108866,V)):(Z.flags|=1048576,V)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,V,$,gt){return V===null||V.tag!==6?(V=gu($,Z.mode,gt),V.return=Z,V):(V=u(V,$),V.return=Z,V)}function F(Z,V,$,gt){var Zt=$.type;return Zt===b?ht(Z,V,$.props.children,gt,$.key):V!==null&&(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===k&&sr(Zt)===V.type)?(V=u(V,$.props),Js(V,$),V.return=Z,V):(V=ol($.type,$.key,$.props,null,Z.mode,gt),Js(V,$),V.return=Z,V)}function tt(Z,V,$,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=_u($,Z.mode,gt),V.return=Z,V):(V=u(V,$.children||[]),V.return=Z,V)}function ht(Z,V,$,gt,Zt){return V===null||V.tag!==7?(V=er($,Z.mode,gt,Zt),V.return=Z,V):(V=u(V,$),V.return=Z,V)}function vt(Z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=gu(""+V,Z.mode,$),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return $=ol(V.type,V.key,V.props,null,Z.mode,$),Js($,V),$.return=Z,$;case E:return V=_u(V,Z.mode,$),V.return=Z,V;case k:return V=sr(V),vt(Z,V,$)}if(it(V)||nt(V))return V=er(V,Z.mode,$,null),V.return=Z,V;if(typeof V.then=="function")return vt(Z,pl(V),$);if(V.$$typeof===U)return vt(Z,ul(Z,V),$);ml(Z,V)}return null}function at(Z,V,$,gt){var Zt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Zt!==null?null:T(Z,V,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===Zt?F(Z,V,$,gt):null;case E:return $.key===Zt?tt(Z,V,$,gt):null;case k:return $=sr($),at(Z,V,$,gt)}if(it($)||nt($))return Zt!==null?null:ht(Z,V,$,gt,null);if(typeof $.then=="function")return at(Z,V,pl($),gt);if($.$$typeof===U)return at(Z,V,ul(Z,$),gt);ml(Z,$)}return null}function lt(Z,V,$,gt,Zt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get($)||null,T(V,Z,""+gt,Zt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return Z=Z.get(gt.key===null?$:gt.key)||null,F(V,Z,gt,Zt);case E:return Z=Z.get(gt.key===null?$:gt.key)||null,tt(V,Z,gt,Zt);case k:return gt=sr(gt),lt(Z,V,$,gt,Zt)}if(it(gt)||nt(gt))return Z=Z.get($)||null,ht(V,Z,gt,Zt,null);if(typeof gt.then=="function")return lt(Z,V,$,pl(gt),Zt);if(gt.$$typeof===U)return lt(Z,V,$,ul(V,gt),Zt);ml(V,gt)}return null}function It(Z,V,$,gt){for(var Zt=null,Ae=null,Gt=V,le=V=0,xe=null;Gt!==null&&le<$.length;le++){Gt.index>le?(xe=Gt,Gt=null):xe=Gt.sibling;var Re=at(Z,Gt,$[le],gt);if(Re===null){Gt===null&&(Gt=xe);break}e&&Gt&&Re.alternate===null&&n(Z,Gt),V=h(Re,V,le),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re,Gt=xe}if(le===$.length)return a(Z,Gt),Me&&Ii(Z,le),Zt;if(Gt===null){for(;le<$.length;le++)Gt=vt(Z,$[le],gt),Gt!==null&&(V=h(Gt,V,le),Ae===null?Zt=Gt:Ae.sibling=Gt,Ae=Gt);return Me&&Ii(Z,le),Zt}for(Gt=o(Gt);le<$.length;le++)xe=lt(Gt,Z,le,$[le],gt),xe!==null&&(e&&xe.alternate!==null&&Gt.delete(xe.key===null?le:xe.key),V=h(xe,V,le),Ae===null?Zt=xe:Ae.sibling=xe,Ae=xe);return e&&Gt.forEach(function(za){return n(Z,za)}),Me&&Ii(Z,le),Zt}function Jt(Z,V,$,gt){if($==null)throw Error(r(151));for(var Zt=null,Ae=null,Gt=V,le=V=0,xe=null,Re=$.next();Gt!==null&&!Re.done;le++,Re=$.next()){Gt.index>le?(xe=Gt,Gt=null):xe=Gt.sibling;var za=at(Z,Gt,Re.value,gt);if(za===null){Gt===null&&(Gt=xe);break}e&&Gt&&za.alternate===null&&n(Z,Gt),V=h(za,V,le),Ae===null?Zt=za:Ae.sibling=za,Ae=za,Gt=xe}if(Re.done)return a(Z,Gt),Me&&Ii(Z,le),Zt;if(Gt===null){for(;!Re.done;le++,Re=$.next())Re=vt(Z,Re.value,gt),Re!==null&&(V=h(Re,V,le),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re);return Me&&Ii(Z,le),Zt}for(Gt=o(Gt);!Re.done;le++,Re=$.next())Re=lt(Gt,Z,le,Re.value,gt),Re!==null&&(e&&Re.alternate!==null&&Gt.delete(Re.key===null?le:Re.key),V=h(Re,V,le),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re);return e&&Gt.forEach(function(rS){return n(Z,rS)}),Me&&Ii(Z,le),Zt}function He(Z,V,$,gt){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var Zt=$.key;V!==null;){if(V.key===Zt){if(Zt=$.type,Zt===b){if(V.tag===7){a(Z,V.sibling),gt=u(V,$.props.children),gt.return=Z,Z=gt;break t}}else if(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===k&&sr(Zt)===V.type){a(Z,V.sibling),gt=u(V,$.props),Js(gt,$),gt.return=Z,Z=gt;break t}a(Z,V);break}else n(Z,V);V=V.sibling}$.type===b?(gt=er($.props.children,Z.mode,gt,$.key),gt.return=Z,Z=gt):(gt=ol($.type,$.key,$.props,null,Z.mode,gt),Js(gt,$),gt.return=Z,Z=gt)}return x(Z);case E:t:{for(Zt=$.key;V!==null;){if(V.key===Zt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Z,V.sibling),gt=u(V,$.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,V);break}else n(Z,V);V=V.sibling}gt=_u($,Z.mode,gt),gt.return=Z,Z=gt}return x(Z);case k:return $=sr($),He(Z,V,$,gt)}if(it($))return It(Z,V,$,gt);if(nt($)){if(Zt=nt($),typeof Zt!="function")throw Error(r(150));return $=Zt.call($),Jt(Z,V,$,gt)}if(typeof $.then=="function")return He(Z,V,pl($),gt);if($.$$typeof===U)return He(Z,V,ul(Z,$),gt);ml(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Z,V.sibling),gt=u(V,$),gt.return=Z,Z=gt):(a(Z,V),gt=gu($,Z.mode,gt),gt.return=Z,Z=gt),x(Z)):a(Z,V)}return function(Z,V,$,gt){try{Qs=0;var Zt=He(Z,V,$,gt);return Xr=null,Zt}catch(Gt){if(Gt===kr||Gt===hl)throw Gt;var Ae=qn(29,Gt,null,Z.mode);return Ae.lanes=gt,Ae.return=Z,Ae}finally{}}}var lr=Jp(!0),$p=Jp(!1),va=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=sl(e),Pp(e,null,a),n}return rl(e,o,n,a),sl(e)}function $s(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Os(e,a)}}function Uu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function to(){if(Lu){var e=Vr;if(e!==null)throw e}}function eo(e,n,a,o){Lu=!1;var u=e.updateQueue;va=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,tt=F.next;F.next=null,x===null?h=tt:x.next=tt,x=F;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==x&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=F))}if(h!==null){var vt=u.baseState;x=0,ht=tt=F=null,T=h;do{var at=T.lane&-536870913,lt=at!==T.lane;if(lt?(ve&at)===at:(o&at)===at){at!==0&&at===Gr&&(Lu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=e,Jt=T;at=n;var He=a;switch(Jt.tag){case 1:if(It=Jt.payload,typeof It=="function"){vt=It.call(He,vt,at);break t}vt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Jt.payload,at=typeof It=="function"?It.call(He,vt,at):It,at==null)break t;vt=_({},vt,at);break t;case 2:va=!0}}at=T.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=lt,F=vt):ht=ht.next=lt,x|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;lt=T,T=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(F=vt),u.baseState=F,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,h===null&&(u.shared.lanes=0),ba|=x,e.lanes=x,e.memoizedState=vt}}function tm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tm(a[e],n)}var Wr=N(null),gl=N(0);function nm(e,n){e=Ki,pt(gl,e),pt(Wr,n),Ki=e|n.baseLanes}function Nu(){pt(gl,Ki),pt(Wr,Wr.current)}function Ou(){Ki=gl.current,J(Wr),J(gl)}var Yn=N(null),si=null;function Sa(e){var n=e.alternate;pt(en,en.current&1),pt(Yn,e),si===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(si=e)}function zu(e){pt(en,en.current),pt(Yn,e),si===null&&(si=e)}function im(e){e.tag===22?(pt(en,en.current),pt(Yn,e),si===null&&(si=e)):Ma()}function Ma(){pt(en,en.current),pt(Yn,Yn.current)}function jn(e){J(Yn),si===e&&(si=null),J(en)}var en=N(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,oe=null,Fe=null,rn=null,vl=!1,qr=!1,cr=!1,xl=0,no=0,Yr=null,Zx=0;function Je(){throw Error(r(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,o,u,h){return Vi=h,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?Hm:Ju,cr=!1,h=a(o,u),cr=!1,qr&&(h=rm(n,a,o,u)),am(e),h}function am(e){L.H=ro;var n=Fe!==null&&Fe.next!==null;if(Vi=0,rn=Fe=oe=null,vl=!1,no=0,Yr=null,n)throw Error(r(300));e===null||sn||(e=e.dependencies,e!==null&&cl(e)&&(sn=!0))}function rm(e,n,a,o){oe=e;var u=0;do{if(qr&&(Yr=null),no=0,qr=!1,25<=u)throw Error(r(301));if(u+=1,rn=Fe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}L.H=Gm,h=n(a,o)}while(qr);return h}function Kx(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(oe.flags|=1024),n}function Fu(){var e=xl!==0;return xl=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}Vi=0,rn=Fe=oe=null,qr=!1,no=xl=0,Yr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?oe.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(Fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=rn===null?oe.memoizedState:rn.next;if(n!==null)rn=n,Fe=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},rn===null?oe.memoizedState=rn=e:rn=rn.next=e}return rn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,Yr===null&&(Yr=[]),e=Zp(Yr,e,n),n=oe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Hm:Ju),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===U)return Sn(e)}throw Error(r(438,String(e)))}function Gu(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=nn();return Vu(n,Fe,e)}function Vu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var T=x=null,F=null,tt=n,ht=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(ve&vt)===vt:(Vi&vt)===vt){var at=tt.revertLane;if(at===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Gr&&(ht=!0);else if((Vi&at)===at){tt=tt.next,at===Gr&&(ht=!0);continue}else vt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(T=F=vt,x=h):F=F.next=vt,oe.lanes|=at,ba|=at;vt=tt.action,cr&&a(h,vt),h=tt.hasEagerState?tt.eagerState:a(h,vt)}else at={lane:vt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(T=F=at,x=h):F=F.next=at,oe.lanes|=vt,ba|=vt;tt=tt.next}while(tt!==null&&tt!==n);if(F===null?x=h:F.next=T,!Wn(h,e.memoizedState)&&(sn=!0,ht&&(a=Vr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ku(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Wn(h,n.memoizedState)||(sn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function sm(e,n,a){var o=oe,u=nn(),h=Me;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Wn((Fe||u).memoizedState,a);if(x&&(u.memoizedState=a,sn=!0),u=u.queue,qu(cm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,jr(9,{destroy:void 0},lm.bind(null,o,u,a,n),null),Ve===null)throw Error(r(349));h||(Vi&127)!==0||om(o,n,a)}return a}function om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=yl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lm(e,n,a,o){n.value=a,n.getSnapshot=o,um(n)&&fm(e)}function cm(e,n,a){return a(function(){um(n)&&fm(e)})}function um(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function fm(e){var n=tr(e,2);n!==null&&Gn(n,e,2)}function Xu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),cr){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function hm(e,n,a,o){return e.baseState=a,Vu(e,Fe,typeof o=="function"?o:ki)}function Qx(e,n,a,o,u){if(bl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};L.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,dm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function dm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=L.T,x={};L.T=x;try{var T=a(u,o),F=L.S;F!==null&&F(x,T),pm(e,n,T)}catch(tt){Wu(e,n,tt)}finally{h!==null&&x.types!==null&&(h.types=x.types),L.T=h}}else try{h=a(u,o),pm(e,n,h)}catch(tt){Wu(e,n,tt)}}function pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(e,n,o)},function(o){return Wu(e,n,o)}):mm(e,n,a)}function mm(e,n,a){n.status="fulfilled",n.value=a,gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dm(e,a)))}function Wu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}e.action=null}function gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function _m(e,n){return n}function vm(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var o=oe;if(Me){if(Xe){e:{for(var u=Xe,h=ri;u.nodeType!==8;){if(!h){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Xe=oi(u.nextSibling),o=u.data==="F!";break t}}ga(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=o,a=Bm.bind(null,oe,o),o.dispatch=a,o=Xu(!1),h=Qu.bind(null,oe,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Qx.bind(null,oe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function xm(e){var n=nn();return ym(n,Fe,e)}function ym(e,n,a){if(n=Vu(e,n,_m)[0],e=Ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=io(n)}catch(x){throw x===kr?hl:x}else o=n;n=nn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,jr(9,{destroy:void 0},Jx.bind(null,u,a),null)),[o,h,e]}function Jx(e,n){e.action=n}function Sm(e){var n=nn(),a=Fe;if(a!==null)return ym(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function jr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=yl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Mm(){return nn().memoizedState}function El(e,n,a,o){var u=Ln();oe.flags|=e,u.memoizedState=jr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tl(e,n,a,o){var u=nn();o=o===void 0?null:o;var h=u.memoizedState.inst;Fe!==null&&o!==null&&Pu(o,Fe.memoizedState.deps)?u.memoizedState=jr(n,h,a,o):(oe.flags|=e,u.memoizedState=jr(1|n,h,a,o))}function Em(e,n){El(8390656,8,e,n)}function qu(e,n){Tl(2048,8,e,n)}function $x(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=yl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Tm(e){var n=nn().memoizedState;return $x({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function bm(e,n){return Tl(4,2,e,n)}function Am(e,n){return Tl(4,4,e,n)}function Rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cm(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,Rm.bind(null,n,e),a)}function Yu(){}function wm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Dm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pu(n,o[1]))return o[0];if(o=e(),cr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function ju(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ug(),oe.lanes|=e,ba|=e,a)}function Um(e,n,a,o){return Wn(a,n)?a:Wr.current!==null?(e=ju(e,a,o),Wn(e,n)||(sn=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(ve&261930)===0?(sn=!0,e.memoizedState=a):(e=Ug(),oe.lanes|=e,ba|=e,n)}function Lm(e,n,a,o,u){var h=W.p;W.p=h!==0&&8>h?h:8;var x=L.T,T={};L.T=T,Qu(e,!1,n,a);try{var F=u(),tt=L.S;if(tt!==null&&tt(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=jx(F,o);ao(e,n,ht,Qn(e))}else ao(e,n,o,Qn(e))}catch(vt){ao(e,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{W.p=h,x!==null&&T.types!==null&&(x.types=T.types),L.T=x}}function ty(){}function Zu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Nm(e).queue;Lm(e,u,n,G,a===null?ty:function(){return Om(e),a(o)})}function Nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Om(e){var n=Nm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},Qn())}function Ku(){return Sn(Mo)}function zm(){return nn().memoizedState}function Pm(){return nn().memoizedState}function ey(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=xa(a);var o=ya(n,e,a);o!==null&&(Gn(o,n,a),$s(o,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function ny(e,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?Fm(n,a):(a=pu(e,n,a,o),a!==null&&(Gn(a,e,o),Im(a,n,o)))}function Bm(e,n,a){var o=Qn();ao(e,n,a,o)}function ao(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Fm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,T=h(x,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,x))return rl(e,n,u,0),Ve===null&&al(),!1}catch{}finally{}if(a=pu(e,n,u,o),a!==null)return Gn(a,e,o),Im(a,n,o),!0}return!1}function Qu(e,n,a,o){if(o={lane:2,revertLane:Df(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(r(479))}else n=pu(e,a,o,2),n!==null&&Gn(n,e,2)}function bl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Fm(e,n){qr=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Im(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Os(e,a)}}var ro={readContext:Sn,use:Sl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ro.useEffectEvent=Je;var Hm={readContext:Sn,use:Sl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:Em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,Rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var o=e();if(cr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(cr){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ny.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=Bm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Ln();return ju(a,e,n)},useTransition:function(){var e=Xu(!1);return e=Lm.bind(null,oe,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=Ln();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ve&127)!==0||om(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Em(cm.bind(null,o,h,e),[e]),o.flags|=2048,jr(9,{destroy:void 0},lm.bind(null,o,h,a,n),null),a},useId:function(){var e=Ln(),n=Ve.identifierPrefix;if(Me){var a=Ci,o=Ri;a=(o&~(1<<32-te(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Zx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:vm,useActionState:vm,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return Ln().memoizedState=ey.bind(null,oe)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ju={readContext:Sn,use:Sl,useCallback:wm,useContext:Sn,useEffect:qu,useImperativeHandle:Cm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ml,useRef:Mm,useState:function(){return Ml(ki)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=nn();return Um(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Ml(ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:sm,useId:zm,useHostTransitionStatus:Ku,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var a=nn();return hm(a,Fe,e,n)},useMemoCache:Gu,useCacheRefresh:Pm};Ju.useEffectEvent=Tm;var Gm={readContext:Sn,use:Sl,useCallback:wm,useContext:Sn,useEffect:qu,useImperativeHandle:Cm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:ku,useRef:Mm,useState:function(){return ku(ki)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=nn();return Fe===null?ju(a,e,n):Um(a,Fe.memoizedState,e,n)},useTransition:function(){var e=ku(ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:sm,useId:zm,useHostTransitionStatus:Ku,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=nn();return Fe!==null?hm(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Pm};Gm.useEffectEvent=Tm;function $u(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Gn(n,e,o),$s(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Gn(n,e,o),$s(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Gn(n,e,a),$s(n,e,a))}};function Vm(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!Ws(a,o)||!Ws(u,h):!0}function km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Xm(e){il(e)}function Wm(e){console.error(e)}function qm(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function jm(e){return e=xa(e),e.tag=3,e}function Zm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Ym(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Ym(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function iy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Hr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Fl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Rf(e,o,u)),!1;case 22:return a.flags|=65536,o===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Rf(e,o,u)),!1}throw Error(r(435,a.tag))}return Rf(e,o,u),Fl(),!1}if(Me)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==yu&&(e=Error(r(422),{cause:o}),js(ni(e,a)))):(o!==yu&&(n=Error(r(423),{cause:o}),js(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=ef(e.stateNode,o,u),Uu(e,u),$e!==4&&($e=2)),!1;var h=Error(r(520),{cause:o});if(h=ni(h,a),po===null?po=[h]:po.push(h),$e!==4&&($e=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ef(a.stateNode,o,e),Uu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jm(u),Zm(u,e,a,o),Uu(a,u),!1}a=a.return}while(a!==null);return!1}var nf=Error(r(461)),sn=!1;function Mn(e,n,a,o){n.child=e===null?$p(n,null,a,o):lr(n,e.child,a,o)}function Km(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return ar(n),o=Bu(e,n,a,x,h,u),T=Fu(),e!==null&&!sn?(Iu(e,n,u),Xi(e,n,u)):(Me&&T&&vu(n),n.flags|=1,Mn(e,n,o,u),n.child)}function Qm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!mu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Jm(e,n,h,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!ff(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(x,o)&&e.ref===n.ref)return Xi(e,n,u)}return n.flags|=1,e=Fi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Ws(h,o)&&e.ref===n.ref)if(sn=!1,n.pendingProps=o=h,ff(e,u))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Xi(e,n,u)}return af(e,n,a,o,u)}function $m(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return tg(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,h!==null?h.cachePool:null),h!==null?nm(n,h):Nu(),im(n);else return o=n.lanes=536870912,tg(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(fl(n,h.cachePool),nm(n,h),Ma(),n.memoizedState=null):(e!==null&&fl(n,null),Nu(),Ma());return Mn(e,n,u,a),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tg(e,n,a,o,u){var h=Ru();return h=h===null?null:{parent:an._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&fl(n,null),Nu(),im(n),e!==null&&Hr(e,n,o,!0),n.childLanes=u,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function eg(e,n,a){return lr(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function ay(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Rl(n,o),n.lanes=536870912,so(null,e);if(zu(n),(e=Xe)?(e=d_(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,yn=n,Xe=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return Rl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(sn||Hr(e,n,a,!1),u=(a&e.childLanes)!==0,sn||u){if(o=Ve,o!==null&&(x=Ai(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,tr(e,x),Gn(o,e,x),nf;Fl(),n=eg(e,n,a)}else e=h.treeContext,Xe=oi(x.nextSibling),yn=n,Me=!0,ma=null,ri=!1,e!==null&&Gp(n,e),n=Rl(n,o),n.flags|=4096;return n}return e=Fi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function af(e,n,a,o,u){return ar(n),a=Bu(e,n,a,o,void 0,u),o=Fu(),e!==null&&!sn?(Iu(e,n,u),Xi(e,n,u)):(Me&&o&&vu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function ng(e,n,a,o,u,h){return ar(n),n.updateQueue=null,a=rm(n,o,a,u),am(e),o=Fu(),e!==null&&!sn?(Iu(e,n,h),Xi(e,n,h)):(Me&&o&&vu(n),n.flags|=1,Mn(e,n,a,h),n.child)}function ig(e,n,a,o,u){if(ar(n),n.stateNode===null){var h=Pr,x=a.contextType;typeof x=="object"&&x!==null&&(h=Sn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=tf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},wu(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Sn(x):Pr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&($u(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&tf.enqueueReplaceState(h,h.state,null),eo(n,o,h,u),to(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,F=ur(a,T);h.props=F;var tt=h.context,ht=a.contextType;x=Pr,typeof ht=="object"&&ht!==null&&(x=Sn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||tt!==x)&&km(n,h,o,x),va=!1;var at=n.memoizedState;h.state=at,eo(n,o,h,u),to(),tt=n.memoizedState,T||at!==tt||va?(typeof vt=="function"&&($u(n,a,vt,o),tt=n.memoizedState),(F=va||Vm(n,a,F,o,at,tt,x))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=x,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Du(e,n),x=n.memoizedProps,ht=ur(a,x),h.props=ht,vt=n.pendingProps,at=h.context,tt=a.contextType,F=Pr,typeof tt=="object"&&tt!==null&&(F=Sn(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==vt||at!==F)&&km(n,h,o,F),va=!1,at=n.memoizedState,h.state=at,eo(n,o,h,u),to();var lt=n.memoizedState;x!==vt||at!==lt||va||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof T=="function"&&($u(n,a,T,o),lt=n.memoizedState),(ht=va||Vm(n,a,ht,o,at,lt,F)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=F,o=ht):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Cl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=lr(n,e.child,null,u),n.child=lr(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Xi(e,n,u),e}function ag(e,n,a,o){return nr(),n.flags|=256,Mn(e,n,a,o),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:Yp()}}function of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function rg(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Sa(n):Ma(),(e=Xe)?(e=d_(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,yn=n,Xe=null)):e=null,e===null)throw ga(n);return kf(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ma(),u=n.mode,T=wl({mode:"hidden",children:T},u),o=er(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=sf(a),o.childLanes=of(e,x,a),n.memoizedState=rf,so(null,o)):(Sa(n),lf(n,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(h)n.flags&256?(Sa(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),T=o.fallback,u=n.mode,o=wl({mode:"visible",children:o.children},u),T=er(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,lr(n,e.child,null,a),o=n.child,o.memoizedState=sf(a),o.childLanes=of(e,x,a),n.memoizedState=rf,n=so(null,o));else if(Sa(n),kf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(r(419)),o.stack="",o.digest=x,js({value:o,source:null,stack:null}),n=cf(e,n,a)}else if(sn||Hr(e,n,a,!1),x=(a&e.childLanes)!==0,sn||x){if(x=Ve,x!==null&&(o=Ai(x,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,tr(e,o),Gn(x,e,o),nf;Vf(T)||Fl(),n=cf(e,n,a)}else Vf(T)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Xe=oi(T.nextSibling),yn=n,Me=!0,ma=null,ri=!1,e!==null&&Gp(n,e),n=lf(n,o.children),n.flags|=4096);return n}return u?(Ma(),T=o.fallback,u=n.mode,F=e.child,tt=F.sibling,o=Fi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,tt!==null?T=Fi(tt,T):(T=er(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,so(null,o),o=n.child,T=e.child.memoizedState,T===null?T=sf(a):(u=T.cachePool,u!==null?(F=an._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Yp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=of(e,x,a),n.memoizedState=rf,so(e.child,o)):(Sa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function lf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function cf(e,n,a){return lr(n,e.child,null,a),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Eu(e.return,n,a)}function uf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function og(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=en.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,pt(en,x),Mn(e,n,o,a),o=Me?Ys:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,a,n);else if(e.tag===19)sg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_l(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}uf(n,!0,a,null,h,o);break;case"together":uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function ry(e,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),_a(n,an,e.memoizedState.cache),nr();break;case 27:case 5:Wt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(e,n,a):(Sa(n),e=Xi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Hr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return og(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pt(en,en.current),o)break;return null;case 22:return n.lanes=0,$m(e,n,a,n.pendingProps);case 24:_a(n,an,e.memoizedState.cache)}return Xi(e,n,a)}function lg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!ff(e,a)&&(n.flags&128)===0)return sn=!1,ry(e,n,a);sn=(e.flags&131072)!==0}else sn=!1,Me&&(n.flags&1048576)!==0&&Hp(n,Ys,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=sr(n.elementType),n.type=e,typeof e=="function")mu(e)?(o=ur(e,o),n.tag=1,n=ig(null,n,e,o,a)):(n.tag=0,n=af(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Km(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=Qm(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(r(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ur(o,n.pendingProps),ig(e,n,o,u,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Du(e,n),eo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,_a(n,an,o),o!==h.cache&&Tu(n,[an],a,!0),to(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ag(e,n,o,a);break t}else if(o!==u){u=ni(Error(r(424)),n),js(u),n=ag(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=oi(e.firstChild),yn=n,Me=!0,ma=null,ri=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(nr(),o===u){n=Xi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=x_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Wl(Mt.current).createElement(a),o[Ke]=n,o[vn]=e,En(o,a,e),q(o),n.stateNode=o):n.memoizedState=x_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wt(n),e===null&&Me&&(o=n.stateNode=g_(n.type,n.pendingProps,Mt.current),yn=n,ri=!0,u=Xe,Da(n.type)?(Xf=u,Xe=oi(o.firstChild)):Xe=u),Mn(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=Xe)&&(o=zy(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,yn=n,Xe=oi(o.firstChild),ri=!1,u=!0):u=!1),u||ga(n)),Wt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,If(u,h)?o=null:x!==null&&If(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,Kx,null,null,a),Mo._currentValue=u),Cl(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=Xe)&&(a=Py(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,Xe=null,e=!0):e=!1),e||ga(n)),null;case 13:return rg(e,n,a);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=lr(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Km(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ar(n),u=Sn(u),o=o(u),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return og(e,n,a);case 31:return ay(e,n,a);case 22:return $m(e,n,a,n.pendingProps);case 24:return ar(n),o=Sn(an),e===null?(u=Ru(),u===null&&(u=Ve,h=bu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},wu(n),_a(n,an,u)):((e.lanes&a)!==0&&(Du(e,n),eo(n,null,null,a),to()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,an,o)):(o=h.cache,_a(n,an,o),o!==u.cache&&Tu(n,[an],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function hf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(zg())e.flags|=8192;else throw or=dl,Cu}else e.flags&=-16777217}function cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T_(n))if(zg())e.flags|=8192;else throw or=dl,Cu}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cn():536870912,e.lanes|=n,Jr|=n)}function oo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function sy(e,n,a){var o=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(an),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ir(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),We(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Wi(n),h!==null?(We(n),cg(n,h)):(We(n),hf(n,u,null,o,a))):h?h!==e.memoizedState?(Wi(n),We(n),cg(n,h)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Wi(n),We(n),hf(n,u,e,o,a)),null;case 27:if(De(n),a=Mt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=Q.current,Ir(n)?Vp(n):(e=g_(u,o,a),n.stateNode=e,Wi(n))}return We(n),null;case 5:if(De(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(h=Q.current,Ir(n))Vp(n);else{var x=Wl(Mt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[Ke]=n,h[vn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(En(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Wi(n)}}return We(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||r_(e.nodeValue,a)),e||ga(n,!0)}else e=Wl(e).createTextNode(o),e[Ke]=n,n.stateNode=e}return We(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ir(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ke]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else a=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ke]=n}else nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),We(n),null);case 4:return Ht(),e===null&&Of(n.stateNode.containerInfo),We(n),null;case 10:return Gi(n.type),We(n),null;case 19:if(J(en),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)oo(o,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=_l(e),h!==null){for(n.flags|=128,oo(o,!1),e=h.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Bp(a,e),a=a.sibling;return pt(en,en.current&1|2),Me&&Ii(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&mt()>zl&&(n.flags|=128,u=!0,oo(o,!1),n.lanes=4194304)}else{if(!u)if(e=_l(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Me)return We(n),null}else 2*mt()-o.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,oo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=mt(),e.sibling=null,a=en.current,pt(en,u?a&1|2:a&1),Me&&Ii(n,o.treeForkCount),e):(We(n),null);case 22:case 23:return jn(n),Ou(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(rr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(an),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function oy(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(an),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return De(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(en),null;case 4:return Ht(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),Ou(),e!==null&&J(rr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(an),null;case 25:return null;default:return null}}function ug(e,n){switch(xu(n),n.tag){case 3:Gi(an),Ht();break;case 26:case 27:case 5:De(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:J(en);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),Ou(),e!==null&&J(rr);break;case 24:Gi(an)}}function lo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(T){Oe(n,n.return,T)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var F=a,tt=T;try{tt()}catch(ht){Oe(u,F,ht)}}}o=o.next}while(o!==h)}}catch(ht){Oe(n,n.return,ht)}}function fg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{em(n,a)}catch(o){Oe(e,e.return,o)}}}function hg(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Oe(e,n,o)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Oe(e,n,u)}}function wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Oe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(e,n,u)}else a.current=null}function dg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Oe(e,e.return,u)}}function df(e,n,a){try{var o=e.stateNode;wy(o,e.type,a,n),o[vn]=n}catch(u){Oe(e,e.return,u)}}function pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,a),e=e.sibling;e!==null;)mf(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[Ke]=e,n[vn]=a}catch(h){Oe(e,e.return,h)}}var qi=!1,on=!1,gf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ly(e,n){if(e=e.containerInfo,Bf=Jl,e=Cp(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,T=-1,F=-1,tt=0,ht=0,vt=e,at=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(T=x+u),vt!==h||o!==0&&vt.nodeType!==3||(F=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)at=vt,vt=lt;for(;;){if(vt===e)break e;if(at===a&&++tt===u&&(T=x),at===h&&++ht===o&&(F=x),(lt=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=lt}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},Jl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var It=ur(a.type,u);e=o.getSnapshotBeforeUpdate(It,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Oe(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function _g(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),o&4&&lo(5,a);break;case 1:if(ji(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Oe(a,a.return,x)}else{var u=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Oe(a,a.return,x)}}o&64&&fg(a),o&512&&co(a,a.return);break;case 3:if(ji(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(e,n)}catch(x){Oe(a,a.return,x)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:ji(e,a),n===null&&o&4&&dg(a),o&512&&co(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),o&4&&yg(e,a);break;case 13:ji(e,a),o&4&&Sg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_y.bind(null,a),By(e,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||on,u=qi;var h=on;qi=o,(on=n)&&!h?Zi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=u,on=h}break;case 30:break;default:ji(e,a)}}function vg(e){var n=e.alternate;n!==null&&(e.alternate=null,vg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Bs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Bn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)xg(e,n,a),a=a.sibling}function xg(e,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:on||wi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||wi(a,n);var o=Ye,u=Bn;Da(a.type)&&(Ye=a.stateNode,Bn=!1),Yi(e,n,a),xo(a.stateNode),Ye=o,Bn=u;break;case 5:on||wi(a,n);case 6:if(o=Ye,u=Bn,Ye=null,Yi(e,n,a),Ye=o,Bn=u,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Oe(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Oe(a,n,h)}break;case 18:Ye!==null&&(Bn?(e=Ye,f_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ss(e)):f_(Ye,a.stateNode));break;case 4:o=Ye,u=Bn,Ye=a.stateNode.containerInfo,Bn=!0,Yi(e,n,a),Ye=o,Bn=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),on||Ea(4,a,n),Yi(e,n,a);break;case 1:on||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hg(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,Yi(e,n,a),on=o;break;default:Yi(e,n,a)}}function yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ss(e)}catch(a){Oe(n,n.return,a)}}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ss(e)}catch(a){Oe(n,n.return,a)}}function cy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gg),n;default:throw Error(r(435,e.tag))}}function Ll(e,n){var a=cy(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=vy.bind(null,e,o);o.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){Ye=T.stateNode,Bn=!1;break t}break;case 5:Ye=T.stateNode,Bn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));xg(h,x,u),Ye=null,Bn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,e),n=n.sibling}var vi=null;function Mg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),In(e),o&4&&(Ea(3,e,e.return),lo(3,e),Ea(5,e,e.return));break;case 1:Fn(n,e),In(e),o&512&&(on||a===null||wi(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Fn(n,e),In(e),o&512&&(on||a===null||wi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ka]||h[Ke]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),En(h,o,a),h[Ke]=e,q(h),o=h;break t;case"link":var x=M_("link","href",u).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(h=x[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;case"meta":if(x=M_("meta","content",u).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(h=x[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[Ke]=e,q(h),o=h}e.stateNode=o}else E_(u,e.type,e.stateNode);else e.stateNode=S_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?E_(u,e.type,e.stateNode):S_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),In(e),o&512&&(on||a===null||wi(a,a.return)),a!==null&&o&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),In(e),o&512&&(on||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(It){Oe(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,a!==null?a.memoizedProps:u)),o&1024&&(gf=!0);break;case 6:if(Fn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(It){Oe(e,e.return,It)}}break;case 3:if(jl=null,u=vi,vi=ql(n.containerInfo),Fn(n,e),vi=u,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(n.containerInfo)}catch(It){Oe(e,e.return,It)}gf&&(gf=!1,Eg(e));break;case 4:o=vi,vi=ql(e.stateNode.containerInfo),Fn(n,e),In(e),vi=o;break;case 12:Fn(n,e),In(e);break;case 31:Fn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 13:Fn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=mt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,tt=qi,ht=on;if(qi=tt||u,on=ht||F,Fn(n,e),on=ht,qi=tt,In(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||qi||on||fr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=F.stateNode;var vt=F.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(It){Oe(F,F.return,It)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(It){Oe(F,F.return,It)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?h_(lt,!0):h_(F.stateNode,!1)}catch(It){Oe(F,F.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ll(e,a))));break;case 19:Fn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 30:break;case 21:break;default:Fn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=pf(e);Ul(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var T=pf(e);Ul(e,T,x);break;case 3:case 4:var F=a.stateNode.containerInfo,tt=pf(e);mf(e,tt,F);break;default:throw Error(r(161))}}catch(ht){Oe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(e,n.alternate,n),n=n.sibling}function fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),fr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),fr(n);break;case 27:xo(n.stateNode);case 26:case 5:wi(n,n.return),fr(n);break;case 22:n.memoizedState===null&&fr(n);break;case 30:fr(n);break;default:fr(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Zi(u,h,a),lo(4,h);break;case 1:if(Zi(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Oe(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)tm(F[u],T)}catch(tt){Oe(o,o.return,tt)}}a&&x&64&&fg(h),co(h,h.return);break;case 27:mg(h);case 26:case 5:Zi(u,h,a),a&&o===null&&x&4&&dg(h),co(h,h.return);break;case 12:Zi(u,h,a);break;case 31:Zi(u,h,a),a&&x&4&&yg(u,h);break;case 13:Zi(u,h,a),a&&x&4&&Sg(u,h);break;case 22:h.memoizedState===null&&Zi(u,h,a),co(h,h.return);break;case 30:break;default:Zi(u,h,a)}n=n.sibling}}function _f(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zs(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e))}function xi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(e,n,a,o),n=n.sibling}function Tg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,o),u&2048&&lo(9,n);break;case 1:xi(e,n,a,o);break;case 3:xi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e)));break;case 12:if(u&2048){xi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,T=h.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Oe(n,n.return,F)}}else xi(e,n,a,o);break;case 31:xi(e,n,a,o);break;case 13:xi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?xi(e,n,a,o):uo(e,n):h._visibility&2?xi(e,n,a,o):(h._visibility|=2,Zr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&_f(x,n);break;case 24:xi(e,n,a,o),u&2048&&vf(n.alternate,n);break;default:xi(e,n,a,o)}}function Zr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,T=a,F=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:Zr(h,x,T,F,u),lo(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?Zr(h,x,T,F,u):uo(h,x):(ht._visibility|=2,Zr(h,x,T,F,u)),u&&tt&2048&&_f(x.alternate,x);break;case 24:Zr(h,x,T,F,u),u&&tt&2048&&vf(x.alternate,x);break;default:Zr(h,x,T,F,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:uo(a,o),u&2048&&_f(o.alternate,o);break;case 24:uo(a,o),u&2048&&vf(o.alternate,o);break;default:uo(a,o)}n=n.sibling}}var fo=8192;function Kr(e,n,a){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)bg(e,n,a),e=e.sibling}function bg(e,n,a){switch(e.tag){case 26:Kr(e,n,a),e.flags&fo&&e.memoizedState!==null&&Zy(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Kr(e,n,a);break;case 3:case 4:var o=vi;vi=ql(e.stateNode.containerInfo),Kr(e,n,a),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fo,fo=16777216,Kr(e,n,a),fo=o):Kr(e,n,a));break;default:Kr(e,n,a)}}function Ag(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Cg(o,e)}Ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):ho(e);break;default:ho(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Cg(o,e)}Ag(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function Cg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,h=o.return;if(vg(o),o===a){mn=null;break t}if(u!==null){u.return=h,mn=u;break t}mn=h}}}var uy={getCacheForType:function(e){var n=Sn(an),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Sn(an).controller.signal}},fy=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,de=null,ve=0,Ne=0,Zn=null,Ta=!1,Qr=!1,xf=!1,Ki=0,$e=0,ba=0,hr=0,yf=0,Kn=0,Jr=0,po=null,Hn=null,Sf=!1,Ol=0,wg=0,zl=1/0,Pl=null,Aa=null,fn=0,Ra=null,$r=null,Qi=0,Mf=0,Ef=null,Dg=null,mo=0,Tf=null;function Qn(){return(we&2)!==0&&ve!==0?ve&-ve:L.T!==null?Df():zs()}function Ug(){if(Kn===0)if((ve&536870912)===0||Me){var e=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Gn(e,n,a){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(ts(e,0),Ca(e,ve,Kn,!1)),_n(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(hr|=a),$e===4&&Ca(e,ve,Kn,!1)),Di(e))}function Lg(e,n,a){if((we&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?py(e,n):Af(e,n,!0),h=o;do{if(u===0){Qr&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!hy(a)){u=Af(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=e;u=po;var F=T.current.memoizedState.isDehydrated;if(F&&(ts(T,x).flags|=256),x=Af(T,x,!1),x!==2){if(xf&&!F){T.errorRecoveryDisabledLanes|=h,hr|=h,u=4;break t}h=Hn,Hn=u,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){ts(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,Kn,!Ta);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ol+300-mt(),10<u)){if(Ca(o,n,Kn,!Ta),Dt(o,0,!0)!==0)break t;Qi=n,o.timeoutHandle=c_(Ng.bind(null,o,a,Hn,Pl,Sf,n,Kn,hr,Jr,Ta,h,"Throttled",-0,0),u);break t}Ng(o,a,Hn,Pl,Sf,n,Kn,hr,Jr,Ta,h,null,-0,0)}}break}while(!0);Di(e)}function Ng(e,n,a,o,u,h,x,T,F,tt,ht,vt,at,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},bg(n,h,vt);var It=(h&62914560)===h?Ol-mt():(h&4194048)===h?wg-mt():0;if(It=Ky(vt,It),It!==null){Qi=h,e.cancelPendingCommit=It(Gg.bind(null,e,n,h,a,o,u,x,T,F,ht,vt,null,at,lt)),Ca(e,h,x,!tt);return}}Gg(e,n,h,a,o,u,x,T,F)}function hy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Wn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~yf,n&=~hr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-te(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Ns(e,a,n)}function Bl(){return(we&6)===0?(go(0),!1):!0}function bf(){if(de!==null){if(Ne===0)var e=de.return;else e=de,Hi=ir=null,Hu(e),Xr=null,Qs=0,e=de;for(;e!==null;)ug(e.alternate,e),e=e.return;de=null}}function ts(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ly(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,bf(),Ve=e,de=a=Fi(e.current,null),ve=n,Ne=0,Zn=null,Ta=!1,Qr=ne(e,n),xf=!1,Jr=Kn=yf=hr=ba=$e=0,Hn=po=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-te(o),h=1<<u;n|=e[u],o&=~h}return Ki=n,al(),a}function Og(e,n){oe=null,L.H=ro,n===kr||n===hl?(n=Kp(),Ne=3):n===Cu?(n=Kp(),Ne=4):Ne=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,de===null&&($e=1,Al(e,ni(n,e.current)))}function zg(){var e=Yn.current;return e===null?!0:(ve&4194048)===ve?si===null:(ve&62914560)===ve||(ve&536870912)!==0?e===si:!1}function Pg(){var e=L.H;return L.H=ro,e===null?ro:e}function Bg(){var e=L.A;return L.A=uy,e}function Fl(){$e=4,Ta||(ve&4194048)!==ve&&Yn.current!==null||(Qr=!0),(ba&134217727)===0&&(hr&134217727)===0||Ve===null||Ca(Ve,ve,Kn,!1)}function Af(e,n,a){var o=we;we|=2;var u=Pg(),h=Bg();(Ve!==e||ve!==n)&&(Pl=null,ts(e,n)),n=!1;var x=$e;t:do try{if(Ne!==0&&de!==null){var T=de,F=Zn;switch(Ne){case 8:bf(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var tt=Ne;if(Ne=0,Zn=null,es(e,T,F,tt),a&&Qr){x=0;break t}break;default:tt=Ne,Ne=0,Zn=null,es(e,T,F,tt)}}dy(),x=$e;break}catch(ht){Og(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Hi=ir=null,we=o,L.H=u,L.A=h,de===null&&(Ve=null,ve=0,al()),x}function dy(){for(;de!==null;)Fg(de)}function py(e,n){var a=we;we|=2;var o=Pg(),u=Bg();Ve!==e||ve!==n?(Pl=null,zl=mt()+500,ts(e,n)):Qr=ne(e,n);t:do try{if(Ne!==0&&de!==null){n=de;var h=Zn;e:switch(Ne){case 1:Ne=0,Zn=null,es(e,n,h,1);break;case 2:case 9:if(jp(h)){Ne=0,Zn=null,Ig(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Di(e)},h.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:jp(h)?(Ne=0,Zn=null,Ig(n)):(Ne=0,Zn=null,es(e,n,h,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var T=de;if(x?T_(x):T.stateNode.complete){Ne=0,Zn=null;var F=T.sibling;if(F!==null)de=F;else{var tt=T.return;tt!==null?(de=tt,Il(tt)):de=null}break e}}Ne=0,Zn=null,es(e,n,h,5);break;case 6:Ne=0,Zn=null,es(e,n,h,6);break;case 8:bf(),$e=6;break t;default:throw Error(r(462))}}my();break}catch(ht){Og(e,ht)}while(!0);return Hi=ir=null,L.H=o,L.A=u,we=a,de!==null?0:(Ve=null,ve=0,al(),$e)}function my(){for(;de!==null&&!A();)Fg(de)}function Fg(e){var n=lg(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Il(e):de=n}function Ig(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Hu(n);default:ug(a,n),n=de=Bp(n,Ki),n=lg(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Il(e):de=n}function es(e,n,a,o){Hi=ir=null,Hu(n),Xr=null,Qs=0;var u=n.return;try{if(iy(e,u,n,a,ve)){$e=1,Al(e,ni(a,e.current)),de=null;return}}catch(h){if(u!==null)throw de=u,h;$e=1,Al(e,ni(a,e.current)),de=null;return}n.flags&32768?(Me||o===1?e=!0:Qr||(ve&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Hg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Hg(n,Ta);return}e=n.return;var a=sy(n.alternate,n,Ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);$e===0&&($e=5)}function Hg(e,n){do{var a=oy(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);$e=6,de=null}function Gg(e,n,a,o,u,h,x,T,F){e.cancelPendingCommit=null;do Hl();while(fn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=du,pi(e,a,h,x,T,F),e===Ve&&(de=Ve=null,ve=0),$r=n,Ra=e,Qi=a,Mf=h,Ef=u,Dg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,xy(Ct,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=W.p,W.p=2,x=we,we|=4;try{ly(e,n,a)}finally{we=x,W.p=u,L.T=o}}fn=1,Vg(),kg(),Xg()}}function Vg(){if(fn===1){fn=0;var e=Ra,n=$r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=W.p;W.p=2;var u=we;we|=4;try{Mg(n,e);var h=Ff,x=Cp(e.containerInfo),T=h.focusedElem,F=h.selectionRange;if(x!==T&&T&&T.ownerDocument&&Rp(T.ownerDocument.documentElement,T)){if(F!==null&&lu(T)){var tt=F.start,ht=F.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var vt=T.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),It=T.textContent.length,Jt=Math.min(F.start,It),He=F.end===void 0?Jt:Math.min(F.end,It);!lt.extend&&Jt>He&&(x=He,He=Jt,Jt=x);var Z=Ap(T,Jt),V=Ap(T,He);if(Z&&V&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var $=vt.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),Jt>He?(lt.addRange($),lt.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),lt.addRange($))}}}}for(vt=[],lt=T;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<vt.length;T++){var gt=vt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Jl=!!Bf,Ff=Bf=null}finally{we=u,W.p=o,L.T=a}}e.current=n,fn=2}}function kg(){if(fn===2){fn=0;var e=Ra,n=$r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=W.p;W.p=2;var u=we;we|=4;try{_g(e,n.alternate,n)}finally{we=u,W.p=o,L.T=a}}fn=3}}function Xg(){if(fn===4||fn===3){fn=0,rt();var e=Ra,n=$r,a=Qi,o=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,$r=Ra=null,Wg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Cr(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=W.p,W.p=2,L.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var T=o[x];h(T.value,{componentStack:T.stack})}}finally{L.T=n,W.p=u}}(Qi&3)!==0&&Hl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?mo++:(mo=0,Tf=e):mo=0,go(0)}}function Wg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zs(n)))}function Hl(){return Vg(),kg(),Xg(),qg()}function qg(){if(fn!==5)return!1;var e=Ra,n=Mf;Mf=0;var a=Cr(Qi),o=L.T,u=W.p;try{W.p=32>a?32:a,L.T=null,a=Ef,Ef=null;var h=Ra,x=Qi;if(fn=0,$r=Ra=null,Qi=0,(we&6)!==0)throw Error(r(331));var T=we;if(we|=4,Rg(h.current),Tg(h,h.current,x,a),we=T,go(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Qt,h)}catch{}return!0}finally{W.p=u,L.T=o,Wg(e,n)}}function Yg(e,n,a){n=ni(a,n),n=ef(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(_n(e,2),Di(e))}function Oe(e,n,a){if(e.tag===3)Yg(e,e,a);else for(;n!==null;){if(n.tag===3){Yg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ni(a,e),a=jm(2),o=ya(n,a,2),o!==null&&(Zm(a,o,n,e),_n(o,2),Di(o));break}}n=n.return}}function Rf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new fy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(xf=!0,u.add(a),e=gy.bind(null,e,n,a),n.then(e,e))}function gy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ve&a)===a&&($e===4||$e===3&&(ve&62914560)===ve&&300>mt()-Ol?(we&2)===0&&ts(e,0):yf|=a,Jr===ve&&(Jr=0)),Di(e)}function jg(e,n){n===0&&(n=cn()),e=tr(e,n),e!==null&&(_n(e,n),Di(e))}function _y(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),jg(e,a)}function vy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),jg(e,a)}function xy(e,n){return Xt(e,n)}var Gl=null,ns=null,Cf=!1,Vl=!1,wf=!1,wa=0;function Di(e){e!==ns&&e.next===null&&(ns===null?Gl=ns=e:ns=ns.next=e),Vl=!0,Cf||(Cf=!0,Sy())}function go(e,n){if(!wf&&Vl){wf=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-te(42|e)+1)-1,h&=u&~(x&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Jg(o,h))}else h=ve,h=Dt(o,o===Ve?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ne(o,h)||(a=!0,Jg(o,h));o=o.next}while(a);wf=!1}}function yy(){Zg()}function Zg(){Vl=Cf=!1;var e=0;wa!==0&&Uy()&&(e=wa);for(var n=mt(),a=null,o=Gl;o!==null;){var u=o.next,h=Kg(o,n);h===0?(o.next=null,a===null?Gl=u:a.next=u,u===null&&(ns=a)):(a=o,(e!==0||(h&3)!==0)&&(Vl=!0)),o=u}fn!==0&&fn!==5||go(e),wa!==0&&(wa=0)}function Kg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-te(h),T=1<<x,F=u[x];F===-1?((T&a)===0||(T&o)!==0)&&(u[x]=qe(T,n)):F<=n&&(e.expiredLanes|=T),h&=~T}if(n=Ve,a=ve,a=Dt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&O(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&O(o),Cr(a)){case 2:case 8:a=Vt;break;case 32:a=Ct;break;case 268435456:a=_e;break;default:a=Ct}return o=Qg.bind(null,e),a=Xt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&O(o),e.callbackPriority=2,e.callbackNode=null,2}function Qg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var o=ve;return o=Dt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Lg(e,o,n),Kg(e,mt()),e.callbackNode!=null&&e.callbackNode===a?Qg.bind(null,e):null)}function Jg(e,n){if(Hl())return null;Lg(e,n,!0)}function Sy(){Ny(function(){(we&6)!==0?Xt(_t,yy):Zg()})}function Df(){if(wa===0){var e=Gr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),wa=e}return wa}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function t_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function My(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=$g((u[vn]||null).action),x=o.submitter;x&&(n=(n=x[vn]||null)?$g(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var T=new tl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wa!==0){var F=x?t_(u,x):new FormData(u);Zu(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(T.preventDefault(),F=x?t_(u,x):new FormData(u),Zu(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var Uf=0;Uf<hu.length;Uf++){var Lf=hu[Uf],Ey=Lf.toLowerCase(),Ty=Lf[0].toUpperCase()+Lf.slice(1);_i(Ey,"on"+Ty)}_i(Up,"onAnimationEnd"),_i(Lp,"onAnimationIteration"),_i(Np,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Hx,"onTransitionRun"),_i(Gx,"onTransitionStart"),_i(Vx,"onTransitionCancel"),_i(Op,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function e_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],F=T.instance,tt=T.currentTarget;if(T=T.listener,F!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=tt;try{h(u)}catch(ht){il(ht)}u.currentTarget=null,h=F}else for(x=0;x<o.length;x++){if(T=o[x],F=T.instance,tt=T.currentTarget,T=T.listener,F!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=tt;try{h(u)}catch(ht){il(ht)}u.currentTarget=null,h=F}}}}function pe(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var o=e+"__bubble";a.has(o)||(n_(n,e,2,!1),a.add(o))}function Nf(e,n,a){var o=0;n&&(o|=4),n_(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[kl]){e[kl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(by.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Nf("selectionchange",!1,n))}}function n_(e,n,a,o){switch(U_(n)){case 2:var u=$y;break;case 8:u=tS;break;default:u=Zf}a=u.bind(null,n,a,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=R(T),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=h=x;continue t}T=T.parentNode}}o=o.return}op(function(){var tt=h,ht=Qc(a),vt=[];t:{var at=zp.get(e);if(at!==void 0){var lt=tl,It=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":lt=vx;break;case"focusin":It="focus",lt=iu;break;case"focusout":It="blur",lt=iu;break;case"beforeblur":case"afterblur":lt=iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Sx;break;case Up:case Lp:case Np:lt=cx;break;case Op:lt=Ex;break;case"scroll":case"scrollend":lt=ax;break;case"wheel":lt=bx;break;case"copy":case"cut":case"paste":lt=fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=hp;break;case"toggle":case"beforetoggle":lt=Rx}var Jt=(n&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),Z=Jt?at!==null?at+"Capture":null:at;Jt=[];for(var V=tt,$;V!==null;){var gt=V;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||Z===null||(gt=Fs(V,Z),gt!=null&&Jt.push(vo(V,gt,$))),He)break;V=V.return}0<Jt.length&&(at=new lt(at,It,null,a,ht),vt.push({event:at,listeners:Jt}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==Kc&&(It=a.relatedTarget||a.fromElement)&&(R(It)||It[zi]))break t;if((lt||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(It=a.relatedTarget||a.toElement,lt=tt,It=It?R(It):null,It!==null&&(He=c(It),Jt=It.tag,It!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(It=null)):(lt=null,It=tt),lt!==It)){if(Jt=up,gt="onMouseLeave",Z="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=hp,gt="onPointerLeave",Z="onPointerEnter",V="pointer"),He=lt==null?at:st(lt),$=It==null?at:st(It),at=new Jt(gt,V+"leave",lt,a,ht),at.target=He,at.relatedTarget=$,gt=null,R(ht)===tt&&(Jt=new Jt(Z,V+"enter",It,a,ht),Jt.target=$,Jt.relatedTarget=He,gt=Jt),He=gt,lt&&It)e:{for(Jt=Ay,Z=lt,V=It,$=0,gt=Z;gt;gt=Jt(gt))$++;gt=0;for(var Zt=V;Zt;Zt=Jt(Zt))gt++;for(;0<$-gt;)Z=Jt(Z),$--;for(;0<gt-$;)V=Jt(V),gt--;for(;$--;){if(Z===V||V!==null&&Z===V.alternate){Jt=Z;break e}Z=Jt(Z),V=Jt(V)}Jt=null}else Jt=null;lt!==null&&i_(vt,at,lt,Jt,!1),It!==null&&He!==null&&i_(vt,He,It,Jt,!0)}}t:{if(at=tt?st(tt):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Ae=yp;else if(vp(at))if(Sp)Ae=Bx;else{Ae=zx;var Gt=Ox}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&Zc(tt.elementType)&&(Ae=yp):Ae=Px;if(Ae&&(Ae=Ae(e,tt))){xp(vt,Ae,a,ht);break t}Gt&&Gt(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&bn(at,"number",at.value)}switch(Gt=tt?st(tt):window,e){case"focusin":(vp(Gt)||Gt.contentEditable==="true")&&(Nr=Gt,cu=tt,qs=null);break;case"focusout":qs=cu=Nr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,wp(vt,a,ht);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":wp(vt,a,ht)}var le;if(ru)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Lr?gp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(dp&&a.locale!=="ko"&&(Lr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Lr&&(le=lp()):(da=ht,tu="value"in da?da.value:da.textContent,Lr=!0)),Gt=Xl(tt,xe),0<Gt.length&&(xe=new fp(xe,e,null,a,ht),vt.push({event:xe,listeners:Gt}),le?xe.data=le:(le=_p(a),le!==null&&(xe.data=le)))),(le=wx?Dx(e,a):Ux(e,a))&&(xe=Xl(tt,"onBeforeInput"),0<xe.length&&(Gt=new fp("onBeforeInput","beforeinput",null,a,ht),vt.push({event:Gt,listeners:xe}),Gt.data=le)),My(vt,e,tt,a,ht)}e_(vt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Fs(e,a),u!=null&&o.unshift(vo(e,u,h)),u=Fs(e,n),u!=null&&o.push(vo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Ay(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function i_(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var T=a,F=T.alternate,tt=T.stateNode;if(T=T.tag,F!==null&&F===o)break;T!==5&&T!==26&&T!==27||tt===null||(F=tt,u?(tt=Fs(a,h),tt!=null&&x.unshift(vo(a,tt,F))):u||(tt=Fs(a,h),tt!=null&&x.push(vo(a,tt,F)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Ry=/\r\n?/g,Cy=/\u0000|\uFFFD/g;function a_(e){return(typeof e=="string"?e:""+e).replace(Ry,`
`).replace(Cy,"")}function r_(e,n){return n=a_(n),a_(e)===n}function Ie(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,o);break;case"style":rp(e,o,h);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Pi);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=nx.get(a)||a,Se(e,a,o))}}function Pf(e,n,a,o,u,h){switch(a){case"style":rp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[vn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,h,x,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var T=h=x=u=null,F=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":x=ht;break;case"checked":F=ht;break;case"defaultChecked":tt=ht;break;case"value":h=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ie(e,n,o,ht,a,null)}}Un(e,h,T,F,tt,x,u,!1);return;case"select":pe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Ie(e,n,u,T,a,null)}n=h,a=x,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":pe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ie(e,n,x,T,a,null)}wr(e,o,u,h);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,F,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<_o.length;o++)pe(_o[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,tt,o,a,null)}return;default:if(Zc(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Pf(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ie(e,n,T,o,a,null))}function wy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,T=null,F=null,tt=null,ht=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=vt;default:o.hasOwnProperty(lt)||Ie(e,n,lt,null,o,vt)}}for(var at in o){var lt=o[at];if(vt=a[at],o.hasOwnProperty(at)&&(lt!=null||vt!=null))switch(at){case"type":h=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":x=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==vt&&Ie(e,n,at,lt,o,vt)}}Be(e,x,T,F,tt,ht,h,u);return;case"select":lt=x=T=at=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":lt=F;default:o.hasOwnProperty(h)||Ie(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":at=h;break;case"defaultValue":T=h;break;case"multiple":x=h;default:h!==F&&Ie(e,n,u,h,o,F)}n=T,a=x,o=lt,at!=null?Qe(e,!!a,at,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ie(e,n,x,u,o,h)}xn(e,at,lt);return;case"option":for(var It in a)if(at=a[It],a.hasOwnProperty(It)&&at!=null&&!o.hasOwnProperty(It))switch(It){case"selected":e.selected=!1;break;default:Ie(e,n,It,null,o,at)}for(F in o)if(at=o[F],lt=a[F],o.hasOwnProperty(F)&&at!==lt&&(at!=null||lt!=null))switch(F){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ie(e,n,F,at,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)at=a[Jt],a.hasOwnProperty(Jt)&&at!=null&&!o.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,o,at);for(tt in o)if(at=o[tt],lt=a[tt],o.hasOwnProperty(tt)&&at!==lt&&(at!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ie(e,n,tt,at,o,lt)}return;default:if(Zc(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&Pf(e,n,He,void 0,o,at);for(ht in o)at=o[ht],lt=a[ht],!o.hasOwnProperty(ht)||at===lt||at===void 0&&lt===void 0||Pf(e,n,ht,at,o,lt);return}}for(var Z in a)at=a[Z],a.hasOwnProperty(Z)&&at!=null&&!o.hasOwnProperty(Z)&&Ie(e,n,Z,null,o,at);for(vt in o)at=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||at===lt||at==null&&lt==null||Ie(e,n,vt,at,o,lt)}function s_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,T=u.duration;if(h&&T&&s_(x)){for(x=0,T=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],tt=F.startTime;if(tt>T)break;var ht=F.transferSize,vt=F.initiatorType;ht&&s_(vt)&&(F=F.responseEnd,x+=ht*(F<T?1:(T-tt)/(F-tt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,Ff=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function o_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function Uy(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var c_=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,u_=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof u_<"u"?function(e){return u_.resolve(null).then(e).catch(Oy)}:c_;function Oy(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function f_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),ss(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")xo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,T=h.nodeName;h[Ka]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&xo(e.ownerDocument.body);a=u}while(a);ss(n)}function h_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function zy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function Py(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oi(e.nextSibling),e===null))return null;return e}function d_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function Vf(e){return e.data==="$?"||e.data==="$~"}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function By(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xf=null;function p_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function m_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function g_(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Bs(e)}var li=new Map,__=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=W.d;W.d={f:Fy,r:Iy,D:Hy,C:Gy,L:Vy,m:ky,X:Wy,S:Xy,M:qy};function Fy(){var e=Ji.f(),n=Bl();return e||n}function Iy(e){var n=j(e);n!==null&&n.tag===5&&n.type==="form"?Om(n):Ji.r(e)}var is=typeof document>"u"?null:document;function v_(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),__.has(u)||(__.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),q(n),o.head.appendChild(n)))}}function Hy(e){Ji.D(e),v_("dns-prefetch",e,null)}function Gy(e,n){Ji.C(e,n),v_("preconnect",e,n)}function Vy(e,n,a){Ji.L(e,n,a);var o=is;if(o&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var h=u;switch(n){case"style":h=as(e);break;case"script":h=rs(e)}li.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(yo(h))||n==="script"&&o.querySelector(So(h))||(n=o.createElement("link"),En(n,"link",e),q(n),o.head.appendChild(n)))}}function ky(e,n){Ji.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=rs(e)}if(!li.has(h)&&(e=_({rel:"modulepreload",href:e},n),li.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(h)))return}o=a.createElement("link"),En(o,"link",e),q(o),a.head.appendChild(o)}}}function Xy(e,n,a){Ji.S(e,n,a);var o=is;if(o&&e){var u=ot(o).hoistableStyles,h=as(e);n=n||"default";var x=u.get(h);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(yo(h)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(h))&&Wf(e,a);var F=x=o.createElement("link");q(F),En(F,"link",e),F._p=new Promise(function(tt,ht){F.onload=tt,F.onerror=ht}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(h,x)}}}function Wy(e,n){Ji.X(e,n);var a=is;if(a&&e){var o=ot(a).hoistableScripts,u=rs(e),h=o.get(u);h||(h=a.querySelector(So(u)),h||(e=_({src:e,async:!0},n),(n=li.get(u))&&qf(e,n),h=a.createElement("script"),q(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function qy(e,n){Ji.M(e,n);var a=is;if(a&&e){var o=ot(a).hoistableScripts,u=rs(e),h=o.get(u);h||(h=a.querySelector(So(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=li.get(u))&&qf(e,n),h=a.createElement("script"),q(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function x_(e,n,a,o){var u=(u=Mt.current)?ql(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=ot(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var h=ot(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(yo(e)))&&!h._p&&(x.instance=h,x.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),h||Yy(u,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=ot(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+pn(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function y_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Yy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),q(n),e.head.appendChild(n))}function rs(e){return'[src="'+pn(e)+'"]'}function So(e){return"script[async]"+e}function S_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,q(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),q(o),En(o,"style",u),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":u=as(a.href);var h=e.querySelector(yo(u));if(h)return n.state.loading|=4,n.instance=h,q(h),h;o=y_(a),(u=li.get(u))&&Wf(o,u),h=(e.ownerDocument||e).createElement("link"),q(h);var x=h;return x._p=new Promise(function(T,F){x.onload=T,x.onerror=F}),En(h,"link",o),n.state.loading|=4,Yl(h,a.precedence,e),n.instance=h;case"script":return h=rs(a.src),(u=e.querySelector(So(h)))?(n.instance=u,q(u),u):(o=a,(u=li.get(h))&&(o=_({},a),qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function M_(e,n,a){if(jl===null){var o=new Map,u=jl=new Map;u.set(a,o)}else u=jl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ka]||h[Ke]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var T=o.get(x);T?T.push(h):o.set(x,[h])}}return o}function E_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function jy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function T_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=as(o.href),h=n.querySelector(yo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,q(h);return}h=n.ownerDocument||n,o=y_(o),(u=li.get(u))&&Wf(o,u),h=h.createElement("link"),q(h);var x=h;x._p=new Promise(function(T,F){x.onload=T,x.onerror=F}),En(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function Ky(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Yf===0&&(Yf=62500*Dy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Yf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(Qy,e),Kl=null,Zl.call(e))}function Qy(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:U,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Jy(e,n,a,o,u,h,x,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function b_(e,n,a,o,u,h,x,T,F,tt,ht,vt){return e=new Jy(e,n,a,x,F,tt,ht,vt,T),n=1,h===!0&&(n|=24),h=qn(3,null,null,n),e.current=h,h.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},wu(h),e}function A_(e){return e?(e=Pr,e):Pr}function R_(e,n,a,o,u,h){u=A_(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ya(e,o,n),a!==null&&(Gn(a,e,n),$s(a,e,n))}function C_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){C_(e,n),(e=e.alternate)&&C_(e,n)}function w_(e){if(e.tag===13||e.tag===31){var n=tr(e,67108864);n!==null&&Gn(n,e,67108864),jf(e,67108864)}}function D_(e){if(e.tag===13||e.tag===31){var n=Qn();n=ja(n);var a=tr(e,n);a!==null&&Gn(a,e,n),jf(e,n)}}var Jl=!0;function $y(e,n,a,o){var u=L.T;L.T=null;var h=W.p;try{W.p=2,Zf(e,n,a,o)}finally{W.p=h,L.T=u}}function tS(e,n,a,o){var u=L.T;L.T=null;var h=W.p;try{W.p=8,Zf(e,n,a,o)}finally{W.p=h,L.T=u}}function Zf(e,n,a,o){if(Jl){var u=Kf(o);if(u===null)zf(e,n,o,$l,a),L_(e,o);else if(nS(u,e,n,a,o))o.stopPropagation();else if(L_(e,o),n&4&&-1<eS.indexOf(e)){for(;u!==null;){var h=j(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=Rt(h.pendingLanes);if(x!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var F=1<<31-te(x);T.entanglements[1]|=F,x&=~F}Di(h),(we&6)===0&&(zl=mt()+500,go(0))}}break;case 31:case 13:T=tr(h,2),T!==null&&Gn(T,h,2),Bl(),jf(h,2)}if(h=Kf(o),h===null&&zf(e,n,o,$l,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else zf(e,n,o,null,a)}}function Kf(e){return e=Qc(e),Qf(e)}var $l=null;function Qf(e){if($l=null,e=R(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function U_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case _t:return 2;case Vt:return 8;case Ct:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ua=null,La=null,Na=null,Eo=new Map,To=new Map,Oa=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=j(n),n!==null&&w_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function nS(e,n,a,o,u){switch(n){case"focusin":return Ua=bo(Ua,e,n,a,o,u),!0;case"dragenter":return La=bo(La,e,n,a,o,u),!0;case"mouseover":return Na=bo(Na,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Eo.set(h,bo(Eo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,To.set(h,bo(To.get(h)||null,e,n,a,o,u)),!0}return!1}function N_(e){var n=R(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Za(e.priority,function(){D_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Za(e.priority,function(){D_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Kc=o,a.target.dispatchEvent(o),Kc=null}else return n=j(a),n!==null&&w_(n),e.blockedOn=a,!1;n.shift()}return!0}function O_(e,n,a){tc(e)&&a.delete(n)}function iS(){Jf=!1,Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),Na!==null&&tc(Na)&&(Na=null),Eo.forEach(O_),To.forEach(O_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Jf||(Jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,iS)))}var nc=null;function z_(e){nc!==e&&(nc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Qf(o||a)===null)continue;break}var h=j(a);h!==null&&(e.splice(n,3),n-=3,Zu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ss(e){function n(F){return ec(F,e)}Ua!==null&&ec(Ua,e),La!==null&&ec(La,e),Na!==null&&ec(Na,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[vn]||null;if(typeof h=="function")x||z_(a);else if(x){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[vn]||null)T=x.formAction;else if(Qf(u)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),z_(a)}}}function P_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $f(e){this._internalRoot=e}ic.prototype.render=$f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();R_(a,o,e,n,null,null)},ic.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;R_(e.current,2,null,e,null,null),Bl(),n[zi]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=zs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&N_(e)}};var B_=t.version;if(B_!=="19.2.7")throw Error(r(527,B_,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var aS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Qt=ac.inject(aS),kt=ac}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Xm,h=Wm,x=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=b_(e,1,!1,null,null,a,o,null,u,h,x,P_),e[zi]=n.current,Of(e),new $f(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Xm,x=Wm,T=qm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=b_(e,1,!0,n,a??null,o,u,F,h,x,T,P_),n.context=A_(null),a=n.current,o=Qn(),o=ja(o),u=xa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,_n(n,a),Di(n),e[zi]=n.current,Of(e),new ic(n)},Ro.version="19.2.7",Ro}var Y_;function gS(){if(Y_)return nh.exports;Y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=mS(),nh.exports}var _S=gS();const vS="modulepreload",xS=function(s){return"/makemecubemaster/"+s},j_={},yS=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=f(i.map(m=>{if(m=xS(m),m in j_)return;j_[m]=!0;const g=m.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":vS,g||(v.as="script"),v.crossOrigin="",v.href=m,p&&v.setAttribute("nonce",p),document.head.appendChild(v),g)return new Promise((S,E)=>{v.addEventListener("load",S),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=f,window.dispatchEvent(d),!d.defaultPrevented)throw f}return l.then(f=>{for(const d of f||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};function SS(s={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:r,onOfflineReady:l,onRegistered:c,onRegisteredSW:f,onRegisterError:d}=s;let p,m;const g=async(v=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(p=await yS(async()=>{const{Workbox:v}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:v}},[]).then(({Workbox:v})=>new v("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(v=>{d==null||d(v)}),!p)return;p.addEventListener("activated",v=>{(v.isUpdate||v.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",v=>{v.isUpdate||l==null||l()}),p.register({immediate:t}).then(v=>{f?f("/makemecubemaster/sw.js",v):c==null||c(v)}).catch(v=>{d==null||d(v)})}}return m=_(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="175",MS=0,Z_=1,ES=2,n0=1,TS=2,aa=3,qa=0,kn=1,ra=2,ka=0,Es=1,K_=2,Q_=3,J_=4,bS=5,Sr=100,AS=101,RS=102,CS=103,wS=104,DS=200,US=201,LS=202,NS=203,Zh=204,Kh=205,OS=206,zS=207,PS=208,BS=209,FS=210,IS=211,HS=212,GS=213,VS=214,Qh=0,Jh=1,$h=2,As=3,td=4,ed=5,nd=6,id=7,i0=0,kS=1,XS=2,Xa=0,WS=1,qS=2,YS=3,jS=4,ZS=5,KS=6,QS=7,a0=300,Rs=301,Cs=302,ad=303,rd=304,Gc=306,sd=1e3,Er=1001,od=1002,bi=1003,JS=1004,rc=1005,Ni=1006,sh=1007,Tr=1008,ca=1009,r0=1010,s0=1011,Fo=1012,Id=1013,Ar=1014,sa=1015,Vo=1016,Hd=1017,Gd=1018,Io=1020,o0=35902,l0=1021,c0=1022,Ti=1023,u0=1024,f0=1025,Ho=1026,Go=1027,h0=1028,Vd=1029,d0=1030,kd=1031,Xd=1033,wc=33776,Dc=33777,Uc=33778,Lc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,Td=37817,bd=37818,Ad=37819,Rd=37820,Cd=37821,Nc=36492,wd=36494,Dd=36495,p0=36283,Ud=36284,Ld=36285,Nd=36286,$S=3200,tM=3201,eM=0,nM=1,Va="",fi="srgb",ws="srgb-linear",Bc="linear",Ge="srgb",os=7680,$_=519,iM=512,aM=513,rM=514,m0=515,sM=516,oM=517,lM=518,cM=519,tv=35044,ev="300 es",oa=2e3,Fc=2001;class Us{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=Math.PI/180,Od=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function uM(s,t){return(s%t+t)%t}function lh(s,t,i){return(1-i)*s+i*t}function Co(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ee{constructor(t=0,i=0){ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,r,l,c,f,d,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m)}set(t,i,r,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],b=l[0],M=l[3],y=l[6],P=l[1],U=l[4],w=l[7],X=l[2],B=l[5],z=l[8];return c[0]=f*b+d*P+p*X,c[3]=f*M+d*U+p*B,c[6]=f*y+d*w+p*z,c[1]=m*b+g*P+_*X,c[4]=m*M+g*U+_*B,c[7]=m*y+g*w+_*z,c[2]=v*b+S*P+E*X,c[5]=v*M+S*U+E*B,c[8]=v*y+S*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-r*c*g+r*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,v=d*p-g*c,S=m*c-f*p,E=i*_+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=_*b,t[1]=(l*m-g*r)*b,t[2]=(d*r-l*f)*b,t[3]=v*b,t[4]=(g*i-l*p)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(r*p-m*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new ce;function g0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function fM(){const s=Ic("canvas");return s.style.display="block",s}const nv={};function Oc(s){s in nv||(nv[s]=!0,console.warn(s))}function hM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function dM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const iv=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mM(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Bc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ws]:{primaries:t,whitePoint:r,transfer:Bc,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Ce=mM();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class gM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ls===void 0&&(ls=Ic("canvas")),ls.width=t.width,ls.height=t.height;const l=ls.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ic("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(uh(l[f].image)):c.push(uh(l[f]))}else c=uh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class Xn extends Us{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Er,l=Er,c=Ni,f=Tr,d=Ti,p=ca,m=Xn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ko(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sd:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sd:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=a0;Xn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],E=p[9],b=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,w=(S+1)/2,X=(y+1)/2,B=(g+v)/4,z=(_+b)/4,k=(E+M)/4;return U>w&&U>X?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=B/r,c=z/r):w>X?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=B/l,c=k/l):X<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(X),r=z/c,l=k/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(_-b)/P,this.z=(v-g)/P,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Us{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends xM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class _0 extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(_!==b||p!==v||m!==S||g!==E){let M=1-d;const y=p*v+m*S+g*E+_*b,P=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const X=Math.sqrt(U),B=Math.atan2(X,y*P);M=Math.sin(M*B)/X,d=Math.sin(d*B)/X}const w=d*P;if(p=p*M+v*w,m=m*M+S*w,g=g*M+E*w,_=_*M+b*w,M===1-d){const X=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=X,m*=X,g*=X,_*=X}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*_+p*S-m*v,t[i+1]=p*E+g*v+m*_-d*S,t[i+2]=m*E+g*S+d*v-p*_,t[i+3]=g*E-d*_-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(c/2),v=p(r/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"YZX":this._x=v*g*_+m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_-v*S*E;break;case"XZY":this._x=v*g*_-m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-r*m,this._z=c*g+f*m+r*p-l*d,this._w=f*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(rv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(rv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-d*g,this.y=r+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new K,rv=new Xo;class Wo{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sc.copy(r.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),oc.subVectors(this.max,wo),cs.subVectors(t.a,wo),us.subVectors(t.b,wo),fs.subVectors(t.c,wo),Pa.subVectors(us,cs),Ba.subVectors(fs,us),dr.subVectors(cs,fs);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-dr.z,dr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,dr.z,0,-dr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-dr.y,dr.x,0];return!hh(i,cs,us,fs,oc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,cs,us,fs,oc))?!1:(lc.crossVectors(Pa,Ba),i=[lc.x,lc.y,lc.z],hh(i,cs,us,fs,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new K,new K,new K,new K,new K,new K,new K,new K],yi=new K,sc=new Wo,cs=new K,us=new K,fs=new K,Pa=new K,Ba=new K,dr=new K,wo=new K,oc=new K,lc=new K,pr=new K;function hh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){pr.fromArray(s,c);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),p=t.dot(pr),m=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const SM=new Wo,Do=new K,dh=new K;class qd{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):SM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(dh)),this.expandByPoint(Do.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new K,ph=new K,cc=new K,Fa=new K,mh=new K,uc=new K,gh=new K;class MM{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ph.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(ph);const c=t.distanceTo(i)*.5,f=-this.direction.dot(cc),d=Fa.dot(this.direction),p=-Fa.dot(cc),m=Fa.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*p-d,v=f*d-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,S=_*(_+f*v+2*d)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ph).addScaledVector(cc,v),S}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,c){mh.subVectors(i,t),uc.subVectors(r,t),gh.crossVectors(mh,uc);let f=this.direction.dot(gh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const p=d*this.direction.dot(uc.crossVectors(Fa,uc));if(p<0)return null;const m=d*this.direction.dot(mh.cross(Fa));if(m<0||p+m>f)return null;const g=-d*Fa.dot(gh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,c,f,d,p,m,g,_,v,S,E,b,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m,g,_,v,S,E,b,M)}set(t,i,r,l,c,f,d,p,m,g,_,v,S,E,b,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=b,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),c=1/hs.setFromMatrixColumn(t,1).length(),f=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=d*g,b=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+E*m,i[5]=v-b*m,i[9]=-d*p,i[2]=b-v*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*_,E=m*g,b=m*_;i[0]=v+b*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=b+v*d,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*_,E=m*g,b=m*_;i[0]=v-b*d,i[4]=-f*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=b-v*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=d*g,b=d*_;i[0]=p*g,i[4]=E*m-S,i[8]=v*m+b,i[1]=p*_,i[5]=b*m+v,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=d*p,b=d*m;i[0]=p*g,i[4]=b-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=S*_+E,i[10]=v-b*_}else if(t.order==="XZY"){const v=f*p,S=f*m,E=d*p,b=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+b,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=b*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,TM)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ia.crossVectors(r,Jn),Ia.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ia.crossVectors(r,Jn)),Ia.normalize(),fc.crossVectors(Jn,Ia),l[0]=Ia.x,l[4]=fc.x,l[8]=Jn.x,l[1]=Ia.y,l[5]=fc.y,l[9]=Jn.y,l[2]=Ia.z,l[6]=fc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],b=r[6],M=r[10],y=r[14],P=r[3],U=r[7],w=r[11],X=r[15],B=l[0],z=l[4],k=l[8],D=l[12],C=l[1],H=l[5],nt=l[9],et=l[13],ct=l[2],it=l[6],L=l[10],W=l[14],G=l[3],dt=l[7],St=l[11],N=l[15];return c[0]=f*B+d*C+p*ct+m*G,c[4]=f*z+d*H+p*it+m*dt,c[8]=f*k+d*nt+p*L+m*St,c[12]=f*D+d*et+p*W+m*N,c[1]=g*B+_*C+v*ct+S*G,c[5]=g*z+_*H+v*it+S*dt,c[9]=g*k+_*nt+v*L+S*St,c[13]=g*D+_*et+v*W+S*N,c[2]=E*B+b*C+M*ct+y*G,c[6]=E*z+b*H+M*it+y*dt,c[10]=E*k+b*nt+M*L+y*St,c[14]=E*D+b*et+M*W+y*N,c[3]=P*B+U*C+w*ct+X*G,c[7]=P*z+U*H+w*it+X*dt,c[11]=P*k+U*nt+w*L+X*St,c[15]=P*D+U*et+w*W+X*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],b=t[7],M=t[11],y=t[15];return E*(+c*p*_-l*m*_-c*d*v+r*m*v+l*d*S-r*p*S)+b*(+i*p*S-i*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+M*(+i*m*_-i*d*S-c*f*_+r*f*S+c*d*g-r*m*g)+y*(-l*d*g-i*p*_+i*d*v+l*f*_-r*f*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],b=t[13],M=t[14],y=t[15],P=_*M*m-b*v*m+b*p*S-d*M*S-_*p*y+d*v*y,U=E*v*m-g*M*m-E*p*S+f*M*S+g*p*y-f*v*y,w=g*b*m-E*_*m+E*d*S-f*b*S-g*d*y+f*_*y,X=E*_*p-g*b*p-E*d*v+f*b*v+g*d*M-f*_*M,B=i*P+r*U+l*w+c*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(b*v*c-_*M*c-b*l*S+r*M*S+_*l*y-r*v*y)*z,t[2]=(d*M*c-b*p*c+b*l*m-r*M*m-d*l*y+r*p*y)*z,t[3]=(_*p*c-d*v*c-_*l*m+r*v*m+d*l*S-r*p*S)*z,t[4]=U*z,t[5]=(g*M*c-E*v*c+E*l*S-i*M*S-g*l*y+i*v*y)*z,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*y-i*p*y)*z,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*S+i*p*S)*z,t[8]=w*z,t[9]=(E*_*c-g*b*c-E*r*S+i*b*S+g*r*y-i*_*y)*z,t[10]=(f*b*c-E*d*c+E*r*m-i*b*m-f*r*y+i*d*y)*z,t[11]=(g*d*c-f*_*c-g*r*m+i*_*m+f*r*S-i*d*S)*z,t[12]=X*z,t[13]=(g*b*l-E*_*l+E*r*v-i*b*v-g*r*M+i*_*M)*z,t[14]=(E*d*l-f*b*l-E*r*p+i*b*p+f*r*M-i*d*M)*z,t[15]=(f*_*l-g*d*l+g*r*p-i*_*p-f*r*v+i*d*v)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,v=c*m,S=c*g,E=c*_,b=f*g,M=f*_,y=d*_,P=p*m,U=p*g,w=p*_,X=r.x,B=r.y,z=r.z;return l[0]=(1-(b+y))*X,l[1]=(S+w)*X,l[2]=(E-U)*X,l[3]=0,l[4]=(S-w)*B,l[5]=(1-(v+y))*B,l[6]=(M+P)*B,l[7]=0,l[8]=(E+U)*z,l[9]=(M-P)*z,l[10]=(1-(v+b))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const f=hs.set(l[4],l[5],l[6]).length(),d=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const m=1/c,g=1/f,_=1/d;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),v=(r+l)/(r-l);let S,E;if(d===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Fc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(f-c),v=(i+t)*m,S=(r+l)*g;let E,b;if(d===oa)E=(f+c)*_,b=-2*_;else if(d===Fc)E=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new K,Si=new Ze,EM=new K(0,0,0),TM=new K(1,1,1),Ia=new K,fc=new K,Jn=new K,sv=new Ze,ov=new Xo;class ua{constructor(t=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return sv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sv,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ov.setFromEuler(this),this.setFromQuaternion(ov,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bM=0;const lv=new K,ds=new Xo,ea=new Ze,hc=new K,Uo=new K,AM=new K,RM=new Xo,cv=new K(1,0,0),uv=new K(0,1,0),fv=new K(0,0,1),hv={type:"added"},CM={type:"removed"},ps={type:"childadded",child:null},_h={type:"childremoved",child:null};class wn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new K,i=new ua,r=new Xo,l=new K(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ce}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(cv,t)}rotateY(t){return this.rotateOnAxis(uv,t)}rotateZ(t){return this.rotateOnAxis(fv,t)}translateOnAxis(t,i){return lv.copy(t).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(cv,t)}translateY(t){return this.translateOnAxis(uv,t)}translateZ(t){return this.translateOnAxis(fv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?hc.copy(t):hc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Uo,hc,this.up):ea.lookAt(hc,Uo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(ea),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hv),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(CM),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hv),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,AM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,RM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new K(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new K,na=new K,vh=new K,ia=new K,ms=new K,gs=new K,dv=new K,xh=new K,yh=new K,Sh=new K,Mh=new tn,Eh=new tn,Th=new tn;class Ei{constructor(t=new K,i=new K,r=new K){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Mi.subVectors(l,i),na.subVectors(r,i),vh.subVectors(t,i);const f=Mi.dot(Mi),d=Mi.dot(na),p=Mi.dot(vh),m=na.dot(na),g=na.dot(vh),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(m*p-d*g)*v,E=(f*g-d*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,c,f,d,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ia.x),p.addScaledVector(f,ia.y),p.addScaledVector(d,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,r),Th.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Mh,c.x),f.addScaledVector(Eh,c.y),f.addScaledVector(Th,c.z),f}static isFrontFacing(t,i,r,l){return Mi.subVectors(r,i),na.subVectors(t,i),Mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;ms.subVectors(l,r),gs.subVectors(c,r),xh.subVectors(t,r);const p=ms.dot(xh),m=gs.dot(xh);if(p<=0&&m<=0)return i.copy(r);yh.subVectors(t,l);const g=ms.dot(yh),_=gs.dot(yh);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ms,f);Sh.subVectors(t,c);const S=ms.dot(Sh),E=gs.dot(Sh);if(E>=0&&S<=E)return i.copy(c);const b=S*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(gs,d);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return dv.subVectors(c,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(dv,d);const y=1/(M+b+v);return f=b*y,d=v*y,i.copy(r).addScaledVector(ms,f).addScaledVector(gs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},dc={h:0,s:0,l:0};function bh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ze{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=uM(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=bh(f,c,t+1/3),this.g=bh(f,c,t),this.b=bh(f,c,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=x0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Ce.fromWorkingColorSpace(Cn.copy(this),t),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){Ce.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(dc);const r=lh(Ha.h,dc.h,i),l=lh(Ha.s,dc.s,i),c=lh(Ha.l,dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ze;ze.NAMES=x0;let wM=0;class Vc extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Es,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Kh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yd extends Vc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new K,pc=new ee;let DM=0;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=tv,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tv&&(t.usage=this.usage),t}}class y0 extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class S0 extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ti extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let UM=0;const ci=new Ze,Ah=new wn,_s=new K,$n=new Wo,Lo=new Wo,gn=new K;class fa extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g0(t)?S0:y0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ti(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors($n.min,Lo.min),$n.expandByPoint(gn),gn.addVectors($n.max,Lo.max),$n.expandByPoint(gn)):($n.expandByPoint(Lo.min),$n.expandByPoint(Lo.max))}$n.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)gn.fromBufferAttribute(d,m),p&&(_s.fromBufferAttribute(t,m),gn.add(_s)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<r.count;k++)d[k]=new K,p[k]=new K;const m=new K,g=new K,_=new K,v=new ee,S=new ee,E=new ee,b=new K,M=new K;function y(k,D,C){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),v.fromBufferAttribute(c,k),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(m),_.sub(m),S.sub(v),E.sub(v);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(H),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),d[k].add(b),d[D].add(b),d[C].add(b),p[k].add(M),p[D].add(M),p[C].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let k=0,D=P.length;k<D;++k){const C=P[k],H=C.start,nt=C.count;for(let et=H,ct=H+nt;et<ct;et+=3)y(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new K,w=new K,X=new K,B=new K;function z(k){X.fromBufferAttribute(l,k),B.copy(X);const D=d[k];U.copy(D),U.sub(X.multiplyScalar(X.dot(D))).normalize(),w.crossVectors(B,D);const H=w.dot(p[k])<0?-1:1;f.setXYZW(k,U.x,U.y,U.z,H)}for(let k=0,D=P.length;k<D;++k){const C=P[k],H=C.start,nt=C.count;for(let et=H,ct=H+nt;et<ct;et+=3)z(t.getX(et+0)),z(t.getX(et+1)),z(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new K,c=new K,f=new K,d=new K,p=new K,m=new K,g=new K,_=new K;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),b=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*g;for(let y=0;y<g;y++)v[E++]=m[S++]}return new Oi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=t(v,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pv=new Ze,mr=new MM,mc=new qd,mv=new K,gc=new K,_c=new K,vc=new K,Rh=new K,xc=new K,gv=new K,yc=new K;class di extends wn{constructor(t=new fa,i=new Yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){xc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Rh.fromBufferAttribute(_,t),f?xc.addScaledVector(Rh,g):xc.addScaledVector(Rh.sub(i),g))}i.add(xc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(c),mr.copy(t.ray).recast(t.near),!(mc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(mc,mv)===null||mr.origin.distanceToSquared(mv)>(t.far-t.near)**2))&&(pv.copy(c).invert(),mr.copy(t.ray).applyMatrix4(pv),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const M=v[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,X=U;w<X;w+=3){const B=d.getX(w),z=d.getX(w+1),k=d.getX(w+2);l=Sc(this,y,t,r,m,g,_,B,z,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,y=b;M<y;M+=3){const P=d.getX(M),U=d.getX(M+1),w=d.getX(M+2);l=Sc(this,f,t,r,m,g,_,P,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const M=v[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,X=U;w<X;w+=3){const B=w,z=w+1,k=w+2;l=Sc(this,y,t,r,m,g,_,B,z,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=E,y=b;M<y;M+=3){const P=M,U=M+1,w=M+2;l=Sc(this,f,t,r,m,g,_,P,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function LM(s,t,i,r,l,c,f,d){let p;if(t.side===kn?p=r.intersectTriangle(f,c,l,!0,d):p=r.intersectTriangle(l,c,f,t.side===qa,d),p===null)return null;yc.copy(d),yc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(yc);return m<i.near||m>i.far?null:{distance:m,point:yc.clone(),object:s}}function Sc(s,t,i,r,l,c,f,d,p,m){s.getVertexPosition(d,gc),s.getVertexPosition(p,_c),s.getVertexPosition(m,vc);const g=LM(s,t,i,r,gc,_c,vc,gv);if(g){const _=new K;Ei.getBarycoord(gv,gc,_c,vc,_),l&&(g.uv=Ei.getInterpolatedAttribute(l,d,p,m,_,new ee)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,d,p,m,_,new ee)),f&&(g.normal=Ei.getInterpolatedAttribute(f,d,p,m,_,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new K,materialIndex:0};Ei.getNormal(gc,_c,vc,v.normal),g.face=v,g.barycoord=_}return g}class qo extends fa{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(_,2));function E(b,M,y,P,U,w,X,B,z,k,D){const C=w/z,H=X/k,nt=w/2,et=X/2,ct=B/2,it=z+1,L=k+1;let W=0,G=0;const dt=new K;for(let St=0;St<L;St++){const N=St*H-et;for(let J=0;J<it;J++){const pt=J*C-nt;dt[b]=pt*P,dt[M]=N*U,dt[y]=ct,m.push(dt.x,dt.y,dt.z),dt[b]=0,dt[M]=0,dt[y]=B>0?1:-1,g.push(dt.x,dt.y,dt.z),_.push(J/z),_.push(1-St/k),W+=1}}for(let St=0;St<k;St++)for(let N=0;N<z;N++){const J=v+N+it*St,pt=v+N+it*(St+1),Q=v+(N+1)+it*(St+1),ut=v+(N+1)+it*St;p.push(J,pt,ut),p.push(pt,Q,ut),G+=6}d.addGroup(S,G,D),S+=G,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Ds(s[i]);for(const l in r)t[l]=r[l]}return t}function NM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function M0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const OM={clone:Ds,merge:Nn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Vc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=NM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class E0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new K,_v=new ee,vv=new ee;class hi extends E0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,_v,vv),i.subVectors(vv,_v)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(oh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class BM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(vs,xs,t,i);l.layers=this.layers,this.add(l);const c=new hi(vs,xs,t,i);c.layers=this.layers,this.add(c);const f=new hi(vs,xs,t,i);f.layers=this.layers,this.add(f);const d=new hi(vs,xs,t,i);d.layers=this.layers,this.add(d);const p=new hi(vs,xs,t,i);p.layers=this.layers,this.add(p);const m=new hi(vs,xs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class T0 extends Xn{constructor(t=[],i=Rs,r,l,c,f,d,p,m,g){super(t,i,r,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class FM extends Rr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new T0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ka});c.uniforms.tEquirect.value=i;const f=new di(l,c),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Ni),new BM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class br extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,r),y=this._getHandJoint(m,b);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new br;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class HM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wh=new K,GM=new K,VM=new ce;class xr{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=wh.subVectors(r,i).cross(GM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(wh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||VM.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new qd,Mc=new K;class jd{constructor(t=new xr,i=new xr,r=new xr,l=new xr,c=new xr,f=new xr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],b=l[10],M=l[11],y=l[12],P=l[13],U=l[14],w=l[15];if(r[0].setComponents(p-c,v-m,M-S,w-y).normalize(),r[1].setComponents(p+c,v+m,M+S,w+y).normalize(),r[2].setComponents(p+f,v+g,M+E,w+P).normalize(),r[3].setComponents(p-f,v-g,M-E,w-P).normalize(),r[4].setComponents(p-d,v-_,M-b,w-U).normalize(),i===oa)r[5].setComponents(p+d,v+_,M+b,w+U).normalize();else if(i===Fc)r[5].setComponents(d,_,b,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b0 extends Xn{constructor(t,i,r=Ar,l,c,f,d=bi,p=bi,m,g=Ho){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ha{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(c-1);const g=r[l],v=r[l+1]-g,S=(f-g)/v;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new ee:new K);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new K,l=[],c=[],f=[],d=new K,p=new Ze;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new K)}c[0]=new K,f[0]=new K;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class A0 extends ha{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new ee){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*g-S*_+this.aX,m=v*_+S*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kM extends A0{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Zd(){let s=0,t=0,i=0,r=0;function l(c,f,d,p){s=c,t=d,i=-3*c+3*f-2*d-p,r=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,g,_){let v=(f-c)/m-(d-c)/(m+g)+(d-f)/g,S=(d-f)/g-(p-f)/(g+_)+(p-d)/_;v*=g,S*=g,l(f,d,v,S)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+r*d}}}const Ec=new K,Dh=new Zd,Uh=new Zd,Lh=new Zd;class R0 extends ha{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new K){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(Ec.subVectors(l[0],l[1]).add(l[0]),m=Ec);const _=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Ec.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),b=Math.pow(_.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),Dh.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,E,b,M),Uh.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,E,b,M),Lh.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,E,b,M)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),Uh.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),Lh.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return r.set(Dh.calc(p),Uh.calc(p),Lh.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xv(s,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,d=s*s,p=s*d;return(2*i-2*r+c+f)*p+(-3*i+3*r-2*c-f)*d+c*s+i}function XM(s,t){const i=1-s;return i*i*t}function WM(s,t){return 2*(1-s)*s*t}function qM(s,t){return s*s*t}function Po(s,t,i,r){return XM(s,t)+WM(s,i)+qM(s,r)}function YM(s,t){const i=1-s;return i*i*i*t}function jM(s,t){const i=1-s;return 3*i*i*s*t}function ZM(s,t){return 3*(1-s)*s*s*t}function KM(s,t){return s*s*s*t}function Bo(s,t,i,r,l){return YM(s,t)+jM(s,i)+ZM(s,r)+KM(s,l)}class QM extends ha{constructor(t=new ee,i=new ee,r=new ee,l=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new ee){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Bo(t,l.x,c.x,f.x,d.x),Bo(t,l.y,c.y,f.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class JM extends ha{constructor(t=new K,i=new K,r=new K,l=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new K){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Bo(t,l.x,c.x,f.x,d.x),Bo(t,l.y,c.y,f.y,d.y),Bo(t,l.z,c.z,f.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $M extends ha{constructor(t=new ee,i=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new ee){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new ee){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tE extends ha{constructor(t=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new K){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eE extends ha{constructor(t=new ee,i=new ee,r=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new ee){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Po(t,l.x,c.x,f.x),Po(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends ha{constructor(t=new K,i=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new K){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Po(t,l.x,c.x,f.x),Po(t,l.y,c.y,f.y),Po(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nE extends ha{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new ee){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return r.set(xv(d,p.x,m.x,g.x,_.x),xv(d,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new ee().fromArray(l))}return this}}var iE=Object.freeze({__proto__:null,ArcCurve:kM,CatmullRomCurve3:R0,CubicBezierCurve:QM,CubicBezierCurve3:JM,EllipseCurve:A0,LineCurve:$M,LineCurve3:tE,QuadraticBezierCurve:eE,QuadraticBezierCurve3:C0,SplineCurve:nE});class Kd extends fa{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],S=[];let E=0;const b=[],M=r/2;let y=0;P(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(S,2));function P(){const w=new K,X=new K;let B=0;const z=(i-t)/r;for(let k=0;k<=c;k++){const D=[],C=k/c,H=C*(i-t)+t;for(let nt=0;nt<=l;nt++){const et=nt/l,ct=et*p+d,it=Math.sin(ct),L=Math.cos(ct);X.x=H*it,X.y=-C*r+M,X.z=H*L,_.push(X.x,X.y,X.z),w.set(it,z,L).normalize(),v.push(w.x,w.y,w.z),S.push(et,1-C),D.push(E++)}b.push(D)}for(let k=0;k<l;k++)for(let D=0;D<c;D++){const C=b[D][k],H=b[D+1][k],nt=b[D+1][k+1],et=b[D][k+1];(t>0||D!==0)&&(g.push(C,H,et),B+=3),(i>0||D!==c-1)&&(g.push(H,nt,et),B+=3)}m.addGroup(y,B,0),y+=B}function U(w){const X=E,B=new ee,z=new K;let k=0;const D=w===!0?t:i,C=w===!0?1:-1;for(let nt=1;nt<=l;nt++)_.push(0,M*C,0),v.push(0,C,0),S.push(.5,.5),E++;const H=E;for(let nt=0;nt<=l;nt++){const ct=nt/l*p+d,it=Math.cos(ct),L=Math.sin(ct);z.x=D*L,z.y=M*C,z.z=D*it,_.push(z.x,z.y,z.z),v.push(0,C,0),B.x=it*.5+.5,B.y=L*.5*C+.5,S.push(B.x,B.y),E++}for(let nt=0;nt<l;nt++){const et=X+nt,ct=H+nt;w===!0?g.push(ct,ct+1,et):g.push(ct+1,ct,et),k+=3}m.addGroup(y,k,w===!0?1:2),y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qd extends Kd{constructor(t=1,i=1,r=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,r,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new Qd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kc extends fa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=t/d,v=i/p,S=[],E=[],b=[],M=[];for(let y=0;y<g;y++){const P=y*v-f;for(let U=0;U<m;U++){const w=U*_-c;E.push(w,-P,0),b.push(0,0,1),M.push(U/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<d;P++){const U=P+m*y,w=P+m*(y+1),X=P+1+m*(y+1),B=P+1+m*y;S.push(U,w,B),S.push(w,X,B)}this.setIndex(S),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(b,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jd extends fa{constructor(t=new C0(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new K,p=new K,m=new ee;let g=new K;const _=[],v=[],S=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(S,2));function b(){for(let U=0;U<i;U++)M(U);M(c===!1?i:0),P(),y()}function M(U){g=t.getPointAt(U/i,g);const w=f.normals[U],X=f.binormals[U];for(let B=0;B<=l;B++){const z=B/l*Math.PI*2,k=Math.sin(z),D=-Math.cos(z);p.x=D*w.x+k*X.x,p.y=D*w.y+k*X.y,p.z=D*w.z+k*X.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=g.x+r*p.x,d.y=g.y+r*p.y,d.z=g.z+r*p.z,_.push(d.x,d.y,d.z)}}function y(){for(let U=1;U<=i;U++)for(let w=1;w<=l;w++){const X=(l+1)*(U-1)+(w-1),B=(l+1)*U+(w-1),z=(l+1)*U+w,k=(l+1)*(U-1)+w;E.push(X,B,k),E.push(B,z,k)}}function P(){for(let U=0;U<=i;U++)for(let w=0;w<=l;w++)m.x=U/i,m.y=w/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Jd(new iE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class aE extends Vc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rE extends Vc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class w0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nh=new Ze,yv=new K,Sv=new K;class sE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jd,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;yv.setFromMatrixPosition(t.matrixWorld),i.position.copy(yv),Sv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Sv),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class D0 extends E0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends sE{constructor(){super(new D0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lE extends w0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new oE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cE extends w0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uE extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Mv(s,t,i,r){const l=fE(r);switch(i){case l0:return s*t;case u0:return s*t;case f0:return s*t*2;case h0:return s*t/l.components*l.byteLength;case Vd:return s*t/l.components*l.byteLength;case d0:return s*t*2/l.components*l.byteLength;case kd:return s*t*2/l.components*l.byteLength;case c0:return s*t*3/l.components*l.byteLength;case Ti:return s*t*4/l.components*l.byteLength;case Xd:return s*t*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(s,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(s,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nc:case wd:case Dd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case p0:case Ud:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fE(s){switch(s){case ca:case r0:return{byteLength:1,components:1};case Fo:case s0:case Vo:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Ar:case Id:case sa:return{byteLength:4,components:1};case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function hE(s){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],b=_[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const b=_[S];s.bufferSubData(m,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var dE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ME=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$E=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ST=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ub=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:dE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:gE,alphatest_fragment:_E,alphatest_pars_fragment:vE,aomap_fragment:xE,aomap_pars_fragment:yE,batching_pars_vertex:SE,batching_vertex:ME,begin_vertex:EE,beginnormal_vertex:TE,bsdfs:bE,iridescence_fragment:AE,bumpmap_pars_fragment:RE,clipping_planes_fragment:CE,clipping_planes_pars_fragment:wE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:UE,color_fragment:LE,color_pars_fragment:NE,color_pars_vertex:OE,color_vertex:zE,common:PE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:FE,displacementmap_pars_vertex:IE,displacementmap_vertex:HE,emissivemap_fragment:GE,emissivemap_pars_fragment:VE,colorspace_fragment:kE,colorspace_pars_fragment:XE,envmap_fragment:WE,envmap_common_pars_fragment:qE,envmap_pars_fragment:YE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:rT,envmap_vertex:ZE,fog_vertex:KE,fog_pars_vertex:QE,fog_fragment:JE,fog_pars_fragment:$E,gradientmap_pars_fragment:tT,lightmap_pars_fragment:eT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:aT,lights_toon_fragment:sT,lights_toon_pars_fragment:oT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:fT,lights_fragment_begin:hT,lights_fragment_maps:dT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:vT,map_fragment:xT,map_pars_fragment:yT,map_particle_fragment:ST,map_particle_pars_fragment:MT,metalnessmap_fragment:ET,metalnessmap_pars_fragment:TT,morphinstance_vertex:bT,morphcolor_vertex:AT,morphnormal_vertex:RT,morphtarget_pars_vertex:CT,morphtarget_vertex:wT,normal_fragment_begin:DT,normal_fragment_maps:UT,normal_pars_fragment:LT,normal_pars_vertex:NT,normal_vertex:OT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:BT,clearcoat_pars_fragment:FT,iridescence_pars_fragment:IT,opaque_fragment:HT,packing:GT,premultiplied_alpha_fragment:VT,project_vertex:kT,dithering_fragment:XT,dithering_pars_fragment:WT,roughnessmap_fragment:qT,roughnessmap_pars_fragment:YT,shadowmap_pars_fragment:jT,shadowmap_pars_vertex:ZT,shadowmap_vertex:KT,shadowmask_pars_fragment:QT,skinbase_vertex:JT,skinning_pars_vertex:$T,skinning_vertex:tb,skinnormal_vertex:eb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:ab,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:fb,background_vert:hb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:xb,distanceRGBA_vert:yb,distanceRGBA_frag:Sb,equirect_vert:Mb,equirect_frag:Eb,linedashed_vert:Tb,linedashed_frag:bb,meshbasic_vert:Ab,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:wb,meshmatcap_vert:Db,meshmatcap_frag:Ub,meshnormal_vert:Lb,meshnormal_frag:Nb,meshphong_vert:Ob,meshphong_frag:zb,meshphysical_vert:Pb,meshphysical_frag:Bb,meshtoon_vert:Fb,meshtoon_frag:Ib,points_vert:Hb,points_frag:Gb,shadow_vert:Vb,shadow_frag:kb,sprite_vert:Xb,sprite_frag:Wb},Lt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Tc={r:0,b:0,g:0},_r=new ua,qb=new Ze;function Yb(s,t,i,r,l,c,f){const d=new ze(0);let p=c===!0?0:1,m,g,_=null,v=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function b(U){let w=!1;const X=E(U);X===null?y(d,p):X&&X.isColor&&(y(X,1),w=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(U,w){const X=E(w);X&&(X.isCubeTexture||X.mapping===Gc)?(g===void 0&&(g=new di(new qo(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Ds(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(w.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(_r)),g.material.toneMapped=Ce.getTransfer(X.colorSpace)!==Ge,(_!==X||v!==X.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=X,v=X.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new di(new kc(2,2),new Ya({name:"BackgroundMaterial",uniforms:Ds(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(X.colorSpace)!==Ge,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(_!==X||v!==X.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=X,v=X.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function y(U,w){U.getRGB(Tc,M0(s)),r.buffers.color.setClear(Tc.r,Tc.g,Tc.b,w,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),p=w,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(d,p)},render:b,addToRenderList:M,dispose:P}}function jb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function d(C,H,nt,et,ct){let it=!1;const L=_(et,nt,H);c!==L&&(c=L,m(c.object)),it=S(C,et,nt,ct),it&&E(C,et,nt,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(it||f)&&(f=!1,w(C,H,nt,et),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function _(C,H,nt){const et=nt.wireframe===!0;let ct=r[C.id];ct===void 0&&(ct={},r[C.id]=ct);let it=ct[H.id];it===void 0&&(it={},ct[H.id]=it);let L=it[et];return L===void 0&&(L=v(p()),it[et]=L),L}function v(C){const H=[],nt=[],et=[];for(let ct=0;ct<i;ct++)H[ct]=0,nt[ct]=0,et[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:et,object:C,attributes:{},index:null}}function S(C,H,nt,et){const ct=c.attributes,it=H.attributes;let L=0;const W=nt.getAttributes();for(const G in W)if(W[G].location>=0){const St=ct[G];let N=it[G];if(N===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),St===void 0||St.attribute!==N||N&&St.data!==N.data)return!0;L++}return c.attributesNum!==L||c.index!==et}function E(C,H,nt,et){const ct={},it=H.attributes;let L=0;const W=nt.getAttributes();for(const G in W)if(W[G].location>=0){let St=it[G];St===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const N={};N.attribute=St,St&&St.data&&(N.data=St.data),ct[G]=N,L++}c.attributes=ct,c.attributesNum=L,c.index=et}function b(){const C=c.newAttributes;for(let H=0,nt=C.length;H<nt;H++)C[H]=0}function M(C){y(C,0)}function y(C,H){const nt=c.newAttributes,et=c.enabledAttributes,ct=c.attributeDivisors;nt[C]=1,et[C]===0&&(s.enableVertexAttribArray(C),et[C]=1),ct[C]!==H&&(s.vertexAttribDivisor(C,H),ct[C]=H)}function P(){const C=c.newAttributes,H=c.enabledAttributes;for(let nt=0,et=H.length;nt<et;nt++)H[nt]!==C[nt]&&(s.disableVertexAttribArray(nt),H[nt]=0)}function U(C,H,nt,et,ct,it,L){L===!0?s.vertexAttribIPointer(C,H,nt,ct,it):s.vertexAttribPointer(C,H,nt,et,ct,it)}function w(C,H,nt,et){b();const ct=et.attributes,it=nt.getAttributes(),L=H.defaultAttributeValues;for(const W in it){const G=it[W];if(G.location>=0){let dt=ct[W];if(dt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(dt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(dt=C.instanceColor)),dt!==void 0){const St=dt.normalized,N=dt.itemSize,J=t.get(dt);if(J===void 0)continue;const pt=J.buffer,Q=J.type,ut=J.bytesPerElement,Mt=Q===s.INT||Q===s.UNSIGNED_INT||dt.gpuType===Id;if(dt.isInterleavedBufferAttribute){const yt=dt.data,Pt=yt.stride,Ht=dt.offset;if(yt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<G.locationSize;Wt++)y(G.location+Wt,yt.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Wt=0;Wt<G.locationSize;Wt++)M(G.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Wt=0;Wt<G.locationSize;Wt++)U(G.location+Wt,N/G.locationSize,Q,St,Pt*ut,(Ht+N/G.locationSize*Wt)*ut,Mt)}else{if(dt.isInstancedBufferAttribute){for(let yt=0;yt<G.locationSize;yt++)y(G.location+yt,dt.meshPerAttribute);C.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let yt=0;yt<G.locationSize;yt++)M(G.location+yt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let yt=0;yt<G.locationSize;yt++)U(G.location+yt,N/G.locationSize,Q,St,N*ut,N/G.locationSize*yt*ut,Mt)}}else if(L!==void 0){const St=L[W];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(G.location,St);break;case 3:s.vertexAttrib3fv(G.location,St);break;case 4:s.vertexAttrib4fv(G.location,St);break;default:s.vertexAttrib1fv(G.location,St)}}}}P()}function X(){k();for(const C in r){const H=r[C];for(const nt in H){const et=H[nt];for(const ct in et)g(et[ct].object),delete et[ct];delete H[nt]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const nt in H){const et=H[nt];for(const ct in et)g(et[ct].object),delete et[ct];delete H[nt]}delete r[C.id]}function z(C){for(const H in r){const nt=r[H];if(nt[C.id]===void 0)continue;const et=nt[C.id];for(const ct in et)g(et[ct].object),delete et[ct];delete nt[C.id]}}function k(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:M,disableUnusedAttributes:P}}function Zb(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,r,1)}function p(m,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Kb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ti&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ca&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!k)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:X,maxSamples:B}}function Qb(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new xr,d=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||l;return l=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,y=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const P=c?0:r,U=P*4;let w=y.clippingState||null;p.value=w,w=g(E,v,U,S);for(let X=0;X!==U;++X)w[X]=i[X];y.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,S,E){const b=_!==null?_.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const y=S+b*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,w=S;U!==b;++U,w+=4)f.copy(_[U]).applyMatrix4(P,d),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function Jb(s){let t=new WeakMap;function i(f,d){return d===ad?f.mapping=Rs:d===rd&&(f.mapping=Cs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ad||d===rd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new FM(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ms=4,Ev=[.125,.215,.35,.446,.526,.582],Mr=20,Oh=new D0,Tv=new ze;let zh=null,Ph=0,Bh=0,Fh=!1;const yr=(1+Math.sqrt(5))/2,ys=1/yr,bv=[new K(-yr,ys,0),new K(yr,ys,0),new K(-ys,0,yr),new K(ys,0,yr),new K(0,yr,-ys),new K(0,yr,ys),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],$b=new K;class Av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=$b}=c;zh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Ph,Bh),this._renderer.xr.enabled=Fh,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Vo,format:Ti,colorSpace:ws,depthBuffer:!1},l=Rv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tA(c)),this._blurMaterial=eA(c,t,i)}return l}_compileMaterial(t){const i=new di(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,r,l,c){const p=new hi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Tv),_.toneMapping=Xa,_.autoClear=!1;const E=new Yd({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new di(new qo,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(Tv),M=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):U===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const w=this._cubeSize;bc(l,U*w,P>2?w:0,w,w),_.setRenderTarget(l),M&&_.render(b,p),_.render(t,p)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=y}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Rs||t.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new di(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;bc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Oh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=bv[(l-c-1)%bv.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new di(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Mr-1),b=c/E,M=isFinite(c)?1+Math.floor(g*b):Mr;M>Mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Mr}`);const y=[];let P=0;for(let z=0;z<Mr;++z){const k=z/b,D=Math.exp(-k*k/2);y.push(D),z===0?P+=D:z<M&&(P+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/P;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const w=this._sizeLods[l],X=3*w*(l>U-Ms?l-U+Ms:0),B=4*(this._cubeSize-w);bc(i,X,B,3*w,2*w),p.setRenderTarget(i),p.render(_,Oh)}}function tA(s){const t=[],i=[],r=[];let l=s;const c=s-Ms+1+Ev.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Ms?p=Ev[f-s+Ms-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,M=2,y=1,P=new Float32Array(b*E*S),U=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,k=B>2?0:-1,D=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];P.set(D,b*E*B),U.set(v,M*E*B);const C=[B,B,B,B,B,B];w.set(C,y*E*B)}const X=new fa;X.setAttribute("position",new Oi(P,b)),X.setAttribute("uv",new Oi(U,M)),X.setAttribute("faceIndex",new Oi(w,y)),t.push(X),l>Ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Rv(s,t,i){const r=new Rr(s,t,i);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function eA(s,t,i){const r=new Float32Array(Mr),l=new K(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Cv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function wv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ad||p===rd,g=p===Rs||p===Cs;if(m||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new Av(s)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Av(s)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function iA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Oc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function aA(s,t,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,E=_.attributes.position;let b=0;if(S!==null){const P=S.array;b=S.version;for(let U=0,w=P.length;U<w;U+=3){const X=P[U+0],B=P[U+1],z=P[U+2];v.push(X,B,B,z,z,X)}}else if(E!==void 0){const P=E.array;b=E.version;for(let U=0,w=P.length/3-1;U<w;U+=3){const X=U+0,B=U+1,z=U+2;v.push(X,B,B,z,z,X)}}else return;const M=new(g0(v)?S0:y0)(v,1);M.version=b;const y=c.get(_);y&&t.remove(y),c.set(_,M)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function rA(s,t,i){let r;function l(v){r=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,c,v*f),i.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,r,1)}function _(v,S,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)m(v[y]/f,S[y],b[y]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,b,0,E);let y=0;for(let P=0;P<E;P++)y+=S[P]*b[P];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function sA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function oA(s,t,i){const r=new WeakMap,l=new tn;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let D=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let U=0;S===!0&&(U=1),E===!0&&(U=2),b===!0&&(U=3);let w=d.attributes.position.count*U,X=1;w>t.maxTextureSize&&(X=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*X*4*_),z=new _0(B,w,X,_);z.type=sa,z.needsUpdate=!0;const k=U*4;for(let C=0;C<_;C++){const H=M[C],nt=y[C],et=P[C],ct=w*X*4*C;for(let it=0;it<H.count;it++){const L=it*k;S===!0&&(l.fromBufferAttribute(H,it),B[ct+L+0]=l.x,B[ct+L+1]=l.y,B[ct+L+2]=l.z,B[ct+L+3]=0),E===!0&&(l.fromBufferAttribute(nt,it),B[ct+L+4]=l.x,B[ct+L+5]=l.y,B[ct+L+6]=l.z,B[ct+L+7]=0),b===!0&&(l.fromBufferAttribute(et,it),B[ct+L+8]=l.x,B[ct+L+9]=l.y,B[ct+L+10]=l.z,B[ct+L+11]=et.itemSize===4?l.w:1)}}v={count:_,texture:z,size:new ee(w,X)},r.set(d,v),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let b=0;b<m.length;b++)S+=m[b];const E=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function lA(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const L0=new Xn,Dv=new b0(1,1),N0=new _0,O0=new yM,z0=new T0,Uv=[],Lv=[],Nv=new Float32Array(16),Ov=new Float32Array(9),zv=new Float32Array(4);function Ls(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Uv[l];if(c===void 0&&(c=new Float32Array(l),Uv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Xc(s,t){let i=Lv[t];i===void 0&&(i=new Int32Array(t),Lv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function cA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function uA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function fA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function hA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function dA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;zv.set(r),s.uniformMatrix2fv(this.addr,!1,zv),dn(i,r)}}function pA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;Ov.set(r),s.uniformMatrix3fv(this.addr,!1,Ov),dn(i,r)}}function mA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;Nv.set(r),s.uniformMatrix4fv(this.addr,!1,Nv),dn(i,r)}}function gA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function vA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function xA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function yA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function SA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function MA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function EA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function TA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Dv.compareFunction=m0,c=Dv):c=L0,i.setTexture2D(t||c,l)}function bA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||O0,l)}function AA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||z0,l)}function RA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||N0,l)}function CA(s){switch(s){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return hA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return yA;case 36294:return SA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(s,t){s.uniform1fv(this.addr,t)}function DA(s,t){const i=Ls(t,this.size,2);s.uniform2fv(this.addr,i)}function UA(s,t){const i=Ls(t,this.size,3);s.uniform3fv(this.addr,i)}function LA(s,t){const i=Ls(t,this.size,4);s.uniform4fv(this.addr,i)}function NA(s,t){const i=Ls(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function OA(s,t){const i=Ls(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function zA(s,t){const i=Ls(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function PA(s,t){s.uniform1iv(this.addr,t)}function BA(s,t){s.uniform2iv(this.addr,t)}function FA(s,t){s.uniform3iv(this.addr,t)}function IA(s,t){s.uniform4iv(this.addr,t)}function HA(s,t){s.uniform1uiv(this.addr,t)}function GA(s,t){s.uniform2uiv(this.addr,t)}function VA(s,t){s.uniform3uiv(this.addr,t)}function kA(s,t){s.uniform4uiv(this.addr,t)}function XA(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||L0,c[f])}function WA(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||O0,c[f])}function qA(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||z0,c[f])}function YA(s,t,i){const r=this.cache,l=t.length,c=Xc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||N0,c[f])}function jA(s){switch(s){case 5126:return wA;case 35664:return DA;case 35665:return UA;case 35666:return LA;case 35674:return NA;case 35675:return OA;case 35676:return zA;case 5124:case 35670:return PA;case 35667:case 35671:return BA;case 35668:case 35672:return FA;case 35669:case 35673:return IA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}class ZA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class QA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function Pv(s,t){s.seq.push(t),s.map[t.id]=t}function JA(s,t,i){const r=s.name,l=r.length;for(Ih.lastIndex=0;;){const c=Ih.exec(r),f=Ih.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){Pv(i,m===void 0?new ZA(d,s,t):new KA(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new QA(d),Pv(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);JA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Bv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const $A=37297;let t1=0;function e1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Fv=new ce;function n1(s){Ce._getMatrix(Fv,Ce.workingColorSpace,s);const t=`mat3( ${Fv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Bc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Iv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+e1(s.getShaderSource(t),f)}else return l}function i1(s,t){const i=n1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function a1(s,t){let i;switch(t){case WS:i="Linear";break;case qS:i="Reinhard";break;case YS:i="Cineon";break;case jS:i="ACESFilmic";break;case KS:i="AgX";break;case QS:i="Neutral";break;case ZS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new K;function r1(){Ce.getLuminanceCoefficients(Ac);const s=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function o1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function l1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Oo(s){return s!==""}function Hv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace(c1,f1)}const u1=new Map;function f1(s,t){let i=ue[t];if(i===void 0){const r=u1.get(t);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return zd(i)}const h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vv(s){return s.replace(h1,d1)}function d1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function kv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function p1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===n0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===TS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function m1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Gc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function g1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function _1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case i0:t="ENVMAP_BLENDING_MULTIPLY";break;case kS:t="ENVMAP_BLENDING_MIX";break;case XS:t="ENVMAP_BLENDING_ADD";break}return t}function v1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function x1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=p1(i),m=m1(i),g=g1(i),_=_1(i),v=v1(i),S=s1(i),E=o1(c),b=l.createProgram();let M,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`)):(M=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),y=[kv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Xa?a1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,i1("linearToOutputTexel",i.outputColorSpace),r1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),f=zd(f),f=Hv(f,i),f=Gv(f,i),d=zd(d),d=Hv(d,i),d=Gv(d,i),f=Vv(f),d=Vv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===ev?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ev?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=P+M+f,w=P+y+d,X=Bv(l,l.VERTEX_SHADER,U),B=Bv(l,l.FRAGMENT_SHADER,w);l.attachShader(b,X),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(H){if(s.debug.checkShaderErrors){const nt=l.getProgramInfoLog(b).trim(),et=l.getShaderInfoLog(X).trim(),ct=l.getShaderInfoLog(B).trim();let it=!0,L=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,X,B);else{const W=Iv(l,X,"vertex"),G=Iv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+nt+`
`+W+`
`+G)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(et===""||ct==="")&&(L=!1);L&&(H.diagnostics={runnable:it,programLog:nt,vertexShader:{log:et,prefix:M},fragmentShader:{log:ct,prefix:y}})}l.deleteShader(X),l.deleteShader(B),k=new zc(l,b),D=l1(l,b)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,$A)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=X,this.fragmentShader=B,this}let y1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new M1(t),i.set(t,r)),r}}class M1{constructor(t){this.id=y1++,this.code=t,this.usedTimes=0}}function E1(s,t,i,r,l,c,f){const d=new v0,p=new S1,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,H,nt,et){const ct=nt.fog,it=et.geometry,L=D.isMeshStandardMaterial?nt.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||L),G=W&&W.mapping===Gc?W.image.height:null,dt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const St=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,N=St!==void 0?St.length:0;let J=0;it.morphAttributes.position!==void 0&&(J=1),it.morphAttributes.normal!==void 0&&(J=2),it.morphAttributes.color!==void 0&&(J=3);let pt,Q,ut,Mt;if(dt){const Te=Li[dt];pt=Te.vertexShader,Q=Te.fragmentShader}else pt=D.vertexShader,Q=D.fragmentShader,p.update(D),ut=p.getVertexShaderID(D),Mt=p.getFragmentShaderID(D);const yt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ht=et.isInstancedMesh===!0,Wt=et.isBatchedMesh===!0,De=!!D.map,Ue=!!D.matcap,fe=!!W,I=!!D.aoMap,Tn=!!D.lightMap,he=!!D.bumpMap,ge=!!D.normalMap,qt=!!D.displacementMap,Le=!!D.emissiveMap,Xt=!!D.metalnessMap,O=!!D.roughnessMap,A=D.anisotropy>0,rt=D.clearcoat>0,mt=D.dispersion>0,Et=D.iridescence>0,_t=D.sheen>0,Vt=D.transmission>0,Ct=A&&!!D.anisotropyMap,Bt=rt&&!!D.clearcoatMap,_e=rt&&!!D.clearcoatNormalMap,bt=rt&&!!D.clearcoatRoughnessMap,Ft=Et&&!!D.iridescenceMap,Qt=Et&&!!D.iridescenceThicknessMap,kt=_t&&!!D.sheenColorMap,Ot=_t&&!!D.sheenRoughnessMap,te=!!D.specularMap,se=!!D.specularColorMap,Pe=!!D.specularIntensityMap,Y=Vt&&!!D.transmissionMap,wt=Vt&&!!D.thicknessMap,ft=!!D.gradientMap,xt=!!D.alphaMap,Rt=D.alphaTest>0,Dt=!!D.alphaHash,ne=!!D.extensions;let qe=Xa;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(qe=s.toneMapping);const cn={shaderID:dt,shaderType:D.type,shaderName:D.name,vertexShader:pt,fragmentShader:Q,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Wt,batchingColor:Wt&&et._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&et.instanceColor!==null,instancingMorph:Ht&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ws,alphaToCoverage:!!D.alphaToCoverage,map:De,matcap:Ue,envMap:fe,envMapMode:fe&&W.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Tn,bumpMap:he,normalMap:ge,displacementMap:v&&qt,emissiveMap:Le,normalMapObjectSpace:ge&&D.normalMapType===nM,normalMapTangentSpace:ge&&D.normalMapType===eM,metalnessMap:Xt,roughnessMap:O,anisotropy:A,anisotropyMap:Ct,clearcoat:rt,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:Et,iridescenceMap:Ft,iridescenceThicknessMap:Qt,sheen:_t,sheenColorMap:kt,sheenRoughnessMap:Ot,specularMap:te,specularColorMap:se,specularIntensityMap:Pe,transmission:Vt,transmissionMap:Y,thicknessMap:wt,gradientMap:ft,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:xt,alphaTest:Rt,alphaHash:Dt,combine:D.combine,mapUv:De&&b(D.map.channel),aoMapUv:I&&b(D.aoMap.channel),lightMapUv:Tn&&b(D.lightMap.channel),bumpMapUv:he&&b(D.bumpMap.channel),normalMapUv:ge&&b(D.normalMap.channel),displacementMapUv:qt&&b(D.displacementMap.channel),emissiveMapUv:Le&&b(D.emissiveMap.channel),metalnessMapUv:Xt&&b(D.metalnessMap.channel),roughnessMapUv:O&&b(D.roughnessMap.channel),anisotropyMapUv:Ct&&b(D.anisotropyMap.channel),clearcoatMapUv:Bt&&b(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&b(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(D.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&b(D.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&b(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(D.sheenRoughnessMap.channel),specularMapUv:te&&b(D.specularMap.channel),specularColorMapUv:se&&b(D.specularColorMap.channel),specularIntensityMapUv:Pe&&b(D.specularIntensityMap.channel),transmissionMapUv:Y&&b(D.transmissionMap.channel),thicknessMapUv:wt&&b(D.thicknessMap.channel),alphaMapUv:xt&&b(D.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(ge||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!it.attributes.uv&&(De||xt),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Pt,skinning:et.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:De&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Le&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ne&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&D.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(P(C,D),U(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let H;if(C){const nt=Li[C];H=OM.clone(nt.uniforms)}else H=D.uniforms;return H}function X(D,C){let H;for(let nt=0,et=g.length;nt<et;nt++){const ct=g[nt];if(ct.cacheKey===C){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new x1(s,C,D,c),g.push(H)),H}function B(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:X,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:k}}function T1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function b1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Xv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,v,S,E,b,M){let y=s[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:b,group:M},s[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=b,y.group=M),t++,y}function d(_,v,S,E,b,M){const y=f(_,v,S,E,b,M);S.transmission>0?r.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(_,v,S,E,b,M){const y=f(_,v,S,E,b,M);S.transmission>0?r.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(_,v){i.length>1&&i.sort(_||b1),r.length>1&&r.sort(v||Xv),l.length>1&&l.sort(v||Xv)}function g(){for(let _=t,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function A1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Wv,s.set(r,[f])):l>=c.length?(f=new Wv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function R1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new ze};break;case"SpotLight":i={position:new K,direction:new K,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function C1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let w1=0;function D1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function U1(s){const t=new R1,i=C1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const l=new K,c=new Ze,f=new Ze;function d(m){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,b=0,M=0,y=0,P=0,U=0,w=0,X=0,B=0,z=0;m.sort(D1);for(let D=0,C=m.length;D<C;D++){const H=m[D],nt=H.color,et=H.intensity,ct=H.distance,it=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=nt.r*et,_+=nt.g*et,v+=nt.b*et;else if(H.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(H.sh.coefficients[L],et);z++}else if(H.isDirectionalLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const W=H.shadow,G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.directionalShadow[S]=G,r.directionalShadowMap[S]=it,r.directionalShadowMatrix[S]=H.shadow.matrix,P++}r.directional[S]=L,S++}else if(H.isSpotLight){const L=t.get(H);L.position.setFromMatrixPosition(H.matrixWorld),L.color.copy(nt).multiplyScalar(et),L.distance=ct,L.coneCos=Math.cos(H.angle),L.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),L.decay=H.decay,r.spot[b]=L;const W=H.shadow;if(H.map&&(r.spotLightMap[X]=H.map,X++,W.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[b]=W.matrix,H.castShadow){const G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,r.spotShadow[b]=G,r.spotShadowMap[b]=it,w++}b++}else if(H.isRectAreaLight){const L=t.get(H);L.color.copy(nt).multiplyScalar(et),L.halfWidth.set(H.width*.5,0,0),L.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=L,M++}else if(H.isPointLight){const L=t.get(H);if(L.color.copy(H.color).multiplyScalar(H.intensity),L.distance=H.distance,L.decay=H.decay,H.castShadow){const W=H.shadow,G=i.get(H);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,r.pointShadow[E]=G,r.pointShadowMap[E]=it,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=L,E++}else if(H.isHemisphereLight){const L=t.get(H);L.skyColor.copy(H.color).multiplyScalar(et),L.groundColor.copy(H.groundColor).multiplyScalar(et),r.hemi[y]=L,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==b||k.rectAreaLength!==M||k.hemiLength!==y||k.numDirectionalShadows!==P||k.numPointShadows!==U||k.numSpotShadows!==w||k.numSpotMaps!==X||k.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+X-B,r.spotLightMap.length=X,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,k.directionalLength=S,k.pointLength=E,k.spotLength=b,k.rectAreaLength=M,k.hemiLength=y,k.numDirectionalShadows=P,k.numPointShadows=U,k.numSpotShadows=w,k.numSpotMaps=X,k.numLightProbes=z,r.version=w1++)}function p(m,g){let _=0,v=0,S=0,E=0,b=0;const M=g.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const U=m[y];if(U.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(U.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const w=r.hemi[b];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:r}}function qv(s){const t=new U1(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function L1(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new qv(s),t.set(l,[d])):c>=f.length?(d=new qv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const N1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z1(s,t,i){let r=new jd;const l=new ee,c=new ee,f=new tn,d=new aE({depthPacking:tM}),p=new rE,m={},g=i.maxTextureSize,_={[qa]:kn,[kn]:qa,[ra]:ra},v=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:N1,fragmentShader:O1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new fa;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let y=this.type;this.render=function(B,z,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(ka),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const et=y!==aa&&this.type===aa,ct=y===aa&&this.type!==aa;for(let it=0,L=B.length;it<L;it++){const W=B[it],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const dt=G.getFrameExtents();if(l.multiply(dt),c.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/dt.x),l.x=c.x*dt.x,G.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/dt.y),l.y=c.y*dt.y,G.mapSize.y=c.y)),G.map===null||et===!0||ct===!0){const N=this.type!==aa?{minFilter:bi,magFilter:bi}:{};G.map!==null&&G.map.dispose(),G.map=new Rr(l.x,l.y,N),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const St=G.getViewportCount();for(let N=0;N<St;N++){const J=G.getViewport(N);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),nt.viewport(f),G.updateMatrices(W,N),r=G.getFrustum(),w(z,k,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===aa&&P(G,k),G.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(D,C,H)};function P(B,z){const k=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Rr(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,k,v,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,k,S,b,null)}function U(B,z,k,D){let C=null;const H=k.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)C=H;else if(C=k.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const nt=C.uuid,et=z.uuid;let ct=m[nt];ct===void 0&&(ct={},m[nt]=ct);let it=ct[et];it===void 0&&(it=C.clone(),ct[et]=it,z.addEventListener("dispose",X)),C=it}if(C.visible=z.visible,C.wireframe=z.wireframe,D===aa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=s.properties.get(C);nt.light=k}return C}function w(B,z,k,D,C){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===aa)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,B.matrixWorld);const et=t.update(B),ct=B.material;if(Array.isArray(ct)){const it=et.groups;for(let L=0,W=it.length;L<W;L++){const G=it[L],dt=ct[G.materialIndex];if(dt&&dt.visible){const St=U(B,dt,D,C);B.onBeforeShadow(s,B,z,k,et,St,G),s.renderBufferDirect(k,null,et,St,B,G),B.onAfterShadow(s,B,z,k,et,St,G)}}}else if(ct.visible){const it=U(B,ct,D,C);B.onBeforeShadow(s,B,z,k,et,it,null),s.renderBufferDirect(k,null,et,it,B,null),B.onAfterShadow(s,B,z,k,et,it,null)}}const nt=B.children;for(let et=0,ct=nt.length;et<ct;et++)w(nt[et],z,k,D,C)}function X(B){B.target.removeEventListener("dispose",X);for(const k in m){const D=m[k],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const P1={[Qh]:Jh,[$h]:nd,[td]:id,[As]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:As};function B1(s,t){function i(){let Y=!1;const wt=new tn;let ft=null;const xt=new tn(0,0,0,0);return{setMask:function(Rt){ft!==Rt&&!Y&&(s.colorMask(Rt,Rt,Rt,Rt),ft=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,Dt,ne,qe,cn){cn===!0&&(Rt*=qe,Dt*=qe,ne*=qe),wt.set(Rt,Dt,ne,qe),xt.equals(wt)===!1&&(s.clearColor(Rt,Dt,ne,qe),xt.copy(wt))},reset:function(){Y=!1,ft=null,xt.set(-1,0,0,0)}}}function r(){let Y=!1,wt=!1,ft=null,xt=null,Rt=null;return{setReversed:function(Dt){if(wt!==Dt){const ne=t.get("EXT_clip_control");Dt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),wt=Dt;const qe=Rt;Rt=null,this.setClear(qe)}},getReversed:function(){return wt},setTest:function(Dt){Dt?yt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(Dt){ft!==Dt&&!Y&&(s.depthMask(Dt),ft=Dt)},setFunc:function(Dt){if(wt&&(Dt=P1[Dt]),xt!==Dt){switch(Dt){case Qh:s.depthFunc(s.NEVER);break;case Jh:s.depthFunc(s.ALWAYS);break;case $h:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case td:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case nd:s.depthFunc(s.GREATER);break;case id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Dt}},setLocked:function(Dt){Y=Dt},setClear:function(Dt){Rt!==Dt&&(wt&&(Dt=1-Dt),s.clearDepth(Dt),Rt=Dt)},reset:function(){Y=!1,ft=null,xt=null,Rt=null,wt=!1}}}function l(){let Y=!1,wt=null,ft=null,xt=null,Rt=null,Dt=null,ne=null,qe=null,cn=null;return{setTest:function(Te){Y||(Te?yt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!Y&&(s.stencilMask(Te),wt=Te)},setFunc:function(Te,_n,pi){(ft!==Te||xt!==_n||Rt!==pi)&&(s.stencilFunc(Te,_n,pi),ft=Te,xt=_n,Rt=pi)},setOp:function(Te,_n,pi){(Dt!==Te||ne!==_n||qe!==pi)&&(s.stencilOp(Te,_n,pi),Dt=Te,ne=_n,qe=pi)},setLocked:function(Te){Y=Te},setClear:function(Te){cn!==Te&&(s.clearStencil(Te),cn=Te)},reset:function(){Y=!1,wt=null,ft=null,xt=null,Rt=null,Dt=null,ne=null,qe=null,cn=null}}}const c=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,b=!1,M=null,y=null,P=null,U=null,w=null,X=null,B=null,z=new ze(0,0,0),k=0,D=!1,C=null,H=null,nt=null,et=null,ct=null;const it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,W=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),L=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),L=W>=2);let dt=null,St={};const N=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),pt=new tn().fromArray(N),Q=new tn().fromArray(J);function ut(Y,wt,ft,xt){const Rt=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(Y,Dt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<ft;ne++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(wt+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Dt}const Mt={};Mt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),yt(s.DEPTH_TEST),f.setFunc(As),he(!1),ge(Z_),yt(s.CULL_FACE),I(ka);function yt(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Pt(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function Ht(Y,wt){return _[Y]!==wt?(s.bindFramebuffer(Y,wt),_[Y]=wt,Y===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),Y===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Wt(Y,wt){let ft=S,xt=!1;if(Y){ft=v.get(wt),ft===void 0&&(ft=[],v.set(wt,ft));const Rt=Y.textures;if(ft.length!==Rt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,ne=Rt.length;Dt<ne;Dt++)ft[Dt]=s.COLOR_ATTACHMENT0+Dt;ft.length=Rt.length,xt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ft)}function De(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const Ue={[Sr]:s.FUNC_ADD,[AS]:s.FUNC_SUBTRACT,[RS]:s.FUNC_REVERSE_SUBTRACT};Ue[CS]=s.MIN,Ue[wS]=s.MAX;const fe={[DS]:s.ZERO,[US]:s.ONE,[LS]:s.SRC_COLOR,[Zh]:s.SRC_ALPHA,[FS]:s.SRC_ALPHA_SATURATE,[PS]:s.DST_COLOR,[OS]:s.DST_ALPHA,[NS]:s.ONE_MINUS_SRC_COLOR,[Kh]:s.ONE_MINUS_SRC_ALPHA,[BS]:s.ONE_MINUS_DST_COLOR,[zS]:s.ONE_MINUS_DST_ALPHA,[IS]:s.CONSTANT_COLOR,[HS]:s.ONE_MINUS_CONSTANT_COLOR,[GS]:s.CONSTANT_ALPHA,[VS]:s.ONE_MINUS_CONSTANT_ALPHA};function I(Y,wt,ft,xt,Rt,Dt,ne,qe,cn,Te){if(Y===ka){b===!0&&(Pt(s.BLEND),b=!1);return}if(b===!1&&(yt(s.BLEND),b=!0),Y!==bS){if(Y!==M||Te!==D){if((y!==Sr||w!==Sr)&&(s.blendEquation(s.FUNC_ADD),y=Sr,w=Sr),Te)switch(Y){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFunc(s.ONE,s.ONE);break;case Q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case K_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case J_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}P=null,U=null,X=null,B=null,z.set(0,0,0),k=0,M=Y,D=Te}return}Rt=Rt||wt,Dt=Dt||ft,ne=ne||xt,(wt!==y||Rt!==w)&&(s.blendEquationSeparate(Ue[wt],Ue[Rt]),y=wt,w=Rt),(ft!==P||xt!==U||Dt!==X||ne!==B)&&(s.blendFuncSeparate(fe[ft],fe[xt],fe[Dt],fe[ne]),P=ft,U=xt,X=Dt,B=ne),(qe.equals(z)===!1||cn!==k)&&(s.blendColor(qe.r,qe.g,qe.b,cn),z.copy(qe),k=cn),M=Y,D=!1}function Tn(Y,wt){Y.side===ra?Pt(s.CULL_FACE):yt(s.CULL_FACE);let ft=Y.side===kn;wt&&(ft=!ft),he(ft),Y.blending===Es&&Y.transparent===!1?I(ka):I(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const xt=Y.stencilWrite;d.setTest(xt),xt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Le(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(Y){C!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),C=Y)}function ge(Y){Y!==MS?(yt(s.CULL_FACE),Y!==H&&(Y===Z_?s.cullFace(s.BACK):Y===ES?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),H=Y}function qt(Y){Y!==nt&&(L&&s.lineWidth(Y),nt=Y)}function Le(Y,wt,ft){Y?(yt(s.POLYGON_OFFSET_FILL),(et!==wt||ct!==ft)&&(s.polygonOffset(wt,ft),et=wt,ct=ft)):Pt(s.POLYGON_OFFSET_FILL)}function Xt(Y){Y?yt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function O(Y){Y===void 0&&(Y=s.TEXTURE0+it-1),dt!==Y&&(s.activeTexture(Y),dt=Y)}function A(Y,wt,ft){ft===void 0&&(dt===null?ft=s.TEXTURE0+it-1:ft=dt);let xt=St[ft];xt===void 0&&(xt={type:void 0,texture:void 0},St[ft]=xt),(xt.type!==Y||xt.texture!==wt)&&(dt!==ft&&(s.activeTexture(ft),dt=ft),s.bindTexture(Y,wt||Mt[Y]),xt.type=Y,xt.texture=wt)}function rt(){const Y=St[dt];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function mt(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function kt(Y){pt.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),pt.copy(Y))}function Ot(Y){Q.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Q.copy(Y))}function te(Y,wt){let ft=m.get(wt);ft===void 0&&(ft=new WeakMap,m.set(wt,ft));let xt=ft.get(Y);xt===void 0&&(xt=s.getUniformBlockIndex(wt,Y.name),ft.set(Y,xt))}function se(Y,wt){const xt=m.get(wt).get(Y);p.get(wt)!==xt&&(s.uniformBlockBinding(wt,xt,Y.__bindingPointIndex),p.set(wt,xt))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},dt=null,St={},_={},v=new WeakMap,S=[],E=null,b=!1,M=null,y=null,P=null,U=null,w=null,X=null,B=null,z=new ze(0,0,0),k=0,D=!1,C=null,H=null,nt=null,et=null,ct=null,pt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:yt,disable:Pt,bindFramebuffer:Ht,drawBuffers:Wt,useProgram:De,setBlending:I,setMaterial:Tn,setFlipSided:he,setCullFace:ge,setLineWidth:qt,setPolygonOffset:Le,setScissorTest:Xt,activeTexture:O,bindTexture:A,unbindTexture:rt,compressedTexImage2D:mt,compressedTexImage3D:Et,texImage2D:Ft,texImage3D:Qt,updateUBOMapping:te,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:bt,texSubImage2D:_t,texSubImage3D:Vt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Bt,scissor:kt,viewport:Ot,reset:Pe}}function F1(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ee,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return S?new OffscreenCanvas(O,A):Ic("canvas")}function b(O,A,rt){let mt=1;const Et=Xt(O);if((Et.width>rt||Et.height>rt)&&(mt=rt/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const _t=Math.floor(mt*Et.width),Vt=Math.floor(mt*Et.height);_===void 0&&(_=E(_t,Vt));const Ct=A?E(_t,Vt):_;return Ct.width=_t,Ct.height=Vt,Ct.getContext("2d").drawImage(O,0,0,_t,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+_t+"x"+Vt+")."),Ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),O;return O}function M(O){return O.generateMipmaps}function y(O){s.generateMipmap(O)}function P(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(O,A,rt,mt,Et=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _t=A;if(A===s.RED&&(rt===s.FLOAT&&(_t=s.R32F),rt===s.HALF_FLOAT&&(_t=s.R16F),rt===s.UNSIGNED_BYTE&&(_t=s.R8)),A===s.RED_INTEGER&&(rt===s.UNSIGNED_BYTE&&(_t=s.R8UI),rt===s.UNSIGNED_SHORT&&(_t=s.R16UI),rt===s.UNSIGNED_INT&&(_t=s.R32UI),rt===s.BYTE&&(_t=s.R8I),rt===s.SHORT&&(_t=s.R16I),rt===s.INT&&(_t=s.R32I)),A===s.RG&&(rt===s.FLOAT&&(_t=s.RG32F),rt===s.HALF_FLOAT&&(_t=s.RG16F),rt===s.UNSIGNED_BYTE&&(_t=s.RG8)),A===s.RG_INTEGER&&(rt===s.UNSIGNED_BYTE&&(_t=s.RG8UI),rt===s.UNSIGNED_SHORT&&(_t=s.RG16UI),rt===s.UNSIGNED_INT&&(_t=s.RG32UI),rt===s.BYTE&&(_t=s.RG8I),rt===s.SHORT&&(_t=s.RG16I),rt===s.INT&&(_t=s.RG32I)),A===s.RGB_INTEGER&&(rt===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),rt===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),rt===s.UNSIGNED_INT&&(_t=s.RGB32UI),rt===s.BYTE&&(_t=s.RGB8I),rt===s.SHORT&&(_t=s.RGB16I),rt===s.INT&&(_t=s.RGB32I)),A===s.RGBA_INTEGER&&(rt===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),rt===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),rt===s.UNSIGNED_INT&&(_t=s.RGBA32UI),rt===s.BYTE&&(_t=s.RGBA8I),rt===s.SHORT&&(_t=s.RGBA16I),rt===s.INT&&(_t=s.RGBA32I)),A===s.RGB&&rt===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),A===s.RGBA){const Vt=Et?Bc:Ce.getTransfer(mt);rt===s.FLOAT&&(_t=s.RGBA32F),rt===s.HALF_FLOAT&&(_t=s.RGBA16F),rt===s.UNSIGNED_BYTE&&(_t=Vt===Ge?s.SRGB8_ALPHA8:s.RGBA8),rt===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),rt===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function w(O,A){let rt;return O?A===null||A===Ar||A===Io?rt=s.DEPTH24_STENCIL8:A===sa?rt=s.DEPTH32F_STENCIL8:A===Fo&&(rt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ar||A===Io?rt=s.DEPTH_COMPONENT24:A===sa?rt=s.DEPTH_COMPONENT32F:A===Fo&&(rt=s.DEPTH_COMPONENT16),rt}function X(O,A){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==bi&&O.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function B(O){const A=O.target;A.removeEventListener("dispose",B),k(A),A.isVideoTexture&&g.delete(A)}function z(O){const A=O.target;A.removeEventListener("dispose",z),C(A)}function k(O){const A=r.get(O);if(A.__webglInit===void 0)return;const rt=O.source,mt=v.get(rt);if(mt){const Et=mt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(O),Object.keys(mt).length===0&&v.delete(rt)}r.remove(O)}function D(O){const A=r.get(O);s.deleteTexture(A.__webglTexture);const rt=O.source,mt=v.get(rt);delete mt[A.__cacheKey],f.memory.textures--}function C(O){const A=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(A.__webglFramebuffer[mt]))for(let Et=0;Et<A.__webglFramebuffer[mt].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[mt][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[mt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[mt])}else{if(Array.isArray(A.__webglFramebuffer))for(let mt=0;mt<A.__webglFramebuffer.length;mt++)s.deleteFramebuffer(A.__webglFramebuffer[mt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let mt=0;mt<A.__webglColorRenderbuffer.length;mt++)A.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[mt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const rt=O.textures;for(let mt=0,Et=rt.length;mt<Et;mt++){const _t=r.get(rt[mt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),f.memory.textures--),r.remove(rt[mt])}r.remove(O)}let H=0;function nt(){H=0}function et(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function ct(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function it(O,A){const rt=r.get(O);if(O.isVideoTexture&&qt(O),O.isRenderTargetTexture===!1&&O.version>0&&rt.__version!==O.version){const mt=O.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(rt,O,A);return}}i.bindTexture(s.TEXTURE_2D,rt.__webglTexture,s.TEXTURE0+A)}function L(O,A){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){Q(rt,O,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,rt.__webglTexture,s.TEXTURE0+A)}function W(O,A){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){Q(rt,O,A);return}i.bindTexture(s.TEXTURE_3D,rt.__webglTexture,s.TEXTURE0+A)}function G(O,A){const rt=r.get(O);if(O.version>0&&rt.__version!==O.version){ut(rt,O,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture,s.TEXTURE0+A)}const dt={[sd]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[od]:s.MIRRORED_REPEAT},St={[bi]:s.NEAREST,[JS]:s.NEAREST_MIPMAP_NEAREST,[rc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},N={[iM]:s.NEVER,[cM]:s.ALWAYS,[aM]:s.LESS,[m0]:s.LEQUAL,[rM]:s.EQUAL,[lM]:s.GEQUAL,[sM]:s.GREATER,[oM]:s.NOTEQUAL};function J(O,A){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===sh||A.magFilter===rc||A.magFilter===Tr||A.minFilter===Ni||A.minFilter===sh||A.minFilter===rc||A.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,dt[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,dt[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,dt[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,St[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bi||A.minFilter!==rc&&A.minFilter!==Tr||A.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function pt(O,A){let rt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",B));const mt=A.source;let Et=v.get(mt);Et===void 0&&(Et={},v.set(mt,Et));const _t=ct(A);if(_t!==O.__cacheKey){Et[_t]===void 0&&(Et[_t]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,rt=!0),Et[_t].usedTimes++;const Vt=Et[O.__cacheKey];Vt!==void 0&&(Et[O.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(A)),O.__cacheKey=_t,O.__webglTexture=Et[_t].texture}return rt}function Q(O,A,rt){let mt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(mt=s.TEXTURE_3D);const Et=pt(O,A),_t=A.source;i.bindTexture(mt,O.__webglTexture,s.TEXTURE0+rt);const Vt=r.get(_t);if(_t.version!==Vt.__version||Et===!0){i.activeTexture(s.TEXTURE0+rt);const Ct=Ce.getPrimaries(Ce.workingColorSpace),Bt=A.colorSpace===Va?null:Ce.getPrimaries(A.colorSpace),_e=A.colorSpace===Va||Ct===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=b(A.image,!1,l.maxTextureSize);bt=Le(A,bt);const Ft=c.convert(A.format,A.colorSpace),Qt=c.convert(A.type);let kt=U(A.internalFormat,Ft,Qt,A.colorSpace,A.isVideoTexture);J(mt,A);let Ot;const te=A.mipmaps,se=A.isVideoTexture!==!0,Pe=Vt.__version===void 0||Et===!0,Y=_t.dataReady,wt=X(A,bt);if(A.isDepthTexture)kt=w(A.format===Go,A.type),Pe&&(se?i.texStorage2D(s.TEXTURE_2D,1,kt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Qt,null));else if(A.isDataTexture)if(te.length>0){se&&Pe&&i.texStorage2D(s.TEXTURE_2D,wt,kt,te[0].width,te[0].height);for(let ft=0,xt=te.length;ft<xt;ft++)Ot=te[ft],se?Y&&i.texSubImage2D(s.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Ft,Qt,Ot.data):i.texImage2D(s.TEXTURE_2D,ft,kt,Ot.width,Ot.height,0,Ft,Qt,Ot.data);A.generateMipmaps=!1}else se?(Pe&&i.texStorage2D(s.TEXTURE_2D,wt,kt,bt.width,bt.height),Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Qt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Qt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,kt,te[0].width,te[0].height,bt.depth);for(let ft=0,xt=te.length;ft<xt;ft++)if(Ot=te[ft],A.format!==Ti)if(Ft!==null)if(se){if(Y)if(A.layerUpdates.size>0){const Rt=Mv(Ot.width,Ot.height,A.format,A.type);for(const Dt of A.layerUpdates){const ne=Ot.data.subarray(Dt*Rt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Dt,Ot.width,Ot.height,1,Ft,ne)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,kt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Y&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Qt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ft,kt,Ot.width,Ot.height,bt.depth,0,Ft,Qt,Ot.data)}else{se&&Pe&&i.texStorage2D(s.TEXTURE_2D,wt,kt,te[0].width,te[0].height);for(let ft=0,xt=te.length;ft<xt;ft++)Ot=te[ft],A.format!==Ti?Ft!==null?se?Y&&i.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Ft,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,ft,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Y&&i.texSubImage2D(s.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Ft,Qt,Ot.data):i.texImage2D(s.TEXTURE_2D,ft,kt,Ot.width,Ot.height,0,Ft,Qt,Ot.data)}else if(A.isDataArrayTexture)if(se){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,kt,bt.width,bt.height,bt.depth),Y)if(A.layerUpdates.size>0){const ft=Mv(bt.width,bt.height,A.format,A.type);for(const xt of A.layerUpdates){const Rt=bt.data.subarray(xt*ft/bt.data.BYTES_PER_ELEMENT,(xt+1)*ft/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,bt.width,bt.height,1,Ft,Qt,Rt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(A.isData3DTexture)se?(Pe&&i.texStorage3D(s.TEXTURE_3D,wt,kt,bt.width,bt.height,bt.depth),Y&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,kt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(A.isFramebufferTexture){if(Pe)if(se)i.texStorage2D(s.TEXTURE_2D,wt,kt,bt.width,bt.height);else{let ft=bt.width,xt=bt.height;for(let Rt=0;Rt<wt;Rt++)i.texImage2D(s.TEXTURE_2D,Rt,kt,ft,xt,0,Ft,Qt,null),ft>>=1,xt>>=1}}else if(te.length>0){if(se&&Pe){const ft=Xt(te[0]);i.texStorage2D(s.TEXTURE_2D,wt,kt,ft.width,ft.height)}for(let ft=0,xt=te.length;ft<xt;ft++)Ot=te[ft],se?Y&&i.texSubImage2D(s.TEXTURE_2D,ft,0,0,Ft,Qt,Ot):i.texImage2D(s.TEXTURE_2D,ft,kt,Ft,Qt,Ot);A.generateMipmaps=!1}else if(se){if(Pe){const ft=Xt(bt);i.texStorage2D(s.TEXTURE_2D,wt,kt,ft.width,ft.height)}Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Qt,bt)}else i.texImage2D(s.TEXTURE_2D,0,kt,Ft,Qt,bt);M(A)&&y(mt),Vt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ut(O,A,rt){if(A.image.length!==6)return;const mt=pt(O,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+rt);const _t=r.get(Et);if(Et.version!==_t.__version||mt===!0){i.activeTexture(s.TEXTURE0+rt);const Vt=Ce.getPrimaries(Ce.workingColorSpace),Ct=A.colorSpace===Va?null:Ce.getPrimaries(A.colorSpace),Bt=A.colorSpace===Va||Vt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let xt=0;xt<6;xt++)!_e&&!bt?Ft[xt]=b(A.image[xt],!0,l.maxCubemapSize):Ft[xt]=bt?A.image[xt].image:A.image[xt],Ft[xt]=Le(A,Ft[xt]);const Qt=Ft[0],kt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),te=U(A.internalFormat,kt,Ot,A.colorSpace),se=A.isVideoTexture!==!0,Pe=_t.__version===void 0||mt===!0,Y=Et.dataReady;let wt=X(A,Qt);J(s.TEXTURE_CUBE_MAP,A);let ft;if(_e){se&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,te,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){ft=Ft[xt].mipmaps;for(let Rt=0;Rt<ft.length;Rt++){const Dt=ft[Rt];A.format!==Ti?kt!==null?se?Y&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,te,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,0,0,Dt.width,Dt.height,kt,Ot,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt,te,Dt.width,Dt.height,0,kt,Ot,Dt.data)}}}else{if(ft=A.mipmaps,se&&Pe){ft.length>0&&wt++;const xt=Xt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,te,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(bt){se?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ft[xt].width,Ft[xt].height,kt,Ot,Ft[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,te,Ft[xt].width,Ft[xt].height,0,kt,Ot,Ft[xt].data);for(let Rt=0;Rt<ft.length;Rt++){const ne=ft[Rt].image[xt].image;se?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,ne.width,ne.height,kt,Ot,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,te,ne.width,ne.height,0,kt,Ot,ne.data)}}else{se?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,kt,Ot,Ft[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,te,kt,Ot,Ft[xt]);for(let Rt=0;Rt<ft.length;Rt++){const Dt=ft[Rt];se?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,0,0,kt,Ot,Dt.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt+1,te,kt,Ot,Dt.image[xt])}}}M(A)&&y(s.TEXTURE_CUBE_MAP),_t.__version=Et.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Mt(O,A,rt,mt,Et,_t){const Vt=c.convert(rt.format,rt.colorSpace),Ct=c.convert(rt.type),Bt=U(rt.internalFormat,Vt,Ct,rt.colorSpace),_e=r.get(A),bt=r.get(rt);if(bt.__renderTarget=A,!_e.__hasExternalTextures){const Ft=Math.max(1,A.width>>_t),Qt=Math.max(1,A.height>>_t);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,_t,Bt,Ft,Qt,A.depth,0,Vt,Ct,null):i.texImage2D(Et,_t,Bt,Ft,Qt,0,Vt,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,Et,bt.__webglTexture,0,he(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,Et,bt.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(O,A,rt){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer){const mt=A.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,_t=w(A.stencilBuffer,Et),Vt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=he(A);ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,_t,A.width,A.height):rt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,_t,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,O)}else{const mt=A.textures;for(let Et=0;Et<mt.length;Et++){const _t=mt[Et],Vt=c.convert(_t.format,_t.colorSpace),Ct=c.convert(_t.type),Bt=U(_t.internalFormat,Vt,Ct,_t.colorSpace),_e=he(A);rt&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Bt,A.width,A.height):ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Bt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(A.depthTexture);mt.__renderTarget=A,(!mt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),it(A.depthTexture,0);const Et=mt.__webglTexture,_t=he(A);if(A.depthTexture.format===Ho)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Go)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ht(O){const A=r.get(O),rt=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const mt=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),mt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=mt}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");Pt(A.__webglFramebuffer,O)}else if(rt){A.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[mt]),A.__webglDepthbuffer[mt]===void 0)A.__webglDepthbuffer[mt]=s.createRenderbuffer(),yt(A.__webglDepthbuffer[mt],O,!1);else{const Et=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),yt(A.__webglDepthbuffer,O,!1);else{const mt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,Et)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(O,A,rt){const mt=r.get(O);A!==void 0&&Mt(mt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),rt!==void 0&&Ht(O)}function De(O){const A=O.texture,rt=r.get(O),mt=r.get(A);O.addEventListener("dispose",z);const Et=O.textures,_t=O.isWebGLCubeRenderTarget===!0,Vt=Et.length>1;if(Vt||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=A.version,f.memory.textures++),_t){rt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[Ct]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)rt.__webglFramebuffer[Ct][Bt]=s.createFramebuffer()}else rt.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)rt.__webglFramebuffer[Ct]=s.createFramebuffer()}else rt.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const _e=r.get(Et[Ct]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&ge(O)===!1){rt.__webglMultisampledFramebuffer=s.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Bt=Et[Ct];rt.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,rt.__webglColorRenderbuffer[Ct]);const _e=c.convert(Bt.format,Bt.colorSpace),bt=c.convert(Bt.type),Ft=U(Bt.internalFormat,_e,bt,Bt.colorSpace,O.isXRRenderTarget===!0),Qt=he(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Ft,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,rt.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(rt.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(rt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),J(s.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)Mt(rt.__webglFramebuffer[Ct][Bt],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Bt);else Mt(rt.__webglFramebuffer[Ct],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(A)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const _e=Et[Ct],bt=r.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),J(s.TEXTURE_2D,_e),Mt(rt.__webglFramebuffer,O,_e,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,0),M(_e)&&y(s.TEXTURE_2D)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,mt.__webglTexture),J(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)Mt(rt.__webglFramebuffer[Bt],O,A,s.COLOR_ATTACHMENT0,Ct,Bt);else Mt(rt.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,Ct,0);M(A)&&y(Ct),i.unbindTexture()}O.depthBuffer&&Ht(O)}function Ue(O){const A=O.textures;for(let rt=0,mt=A.length;rt<mt;rt++){const Et=A[rt];if(M(Et)){const _t=P(O),Vt=r.get(Et).__webglTexture;i.bindTexture(_t,Vt),y(_t),i.unbindTexture()}}}const fe=[],I=[];function Tn(O){if(O.samples>0){if(ge(O)===!1){const A=O.textures,rt=O.width,mt=O.height;let Et=s.COLOR_BUFFER_BIT;const _t=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(O),Ct=A.length>1;if(Ct)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const _e=r.get(A[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,rt,mt,0,0,rt,mt,Et,s.NEAREST),p===!0&&(fe.length=0,I.length=0,fe.push(s.COLOR_ATTACHMENT0+Bt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(fe.push(_t),I.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const _e=r.get(A[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const A=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function he(O){return Math.min(l.maxSamples,O.samples)}function ge(O){const A=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(O){const A=f.render.frame;g.get(O)!==A&&(g.set(O,A),O.update())}function Le(O,A){const rt=O.colorSpace,mt=O.format,Et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||rt!==ws&&rt!==Va&&(Ce.getTransfer(rt)===Ge?(mt!==Ti||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),A}function Xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=et,this.resetTextureUnits=nt,this.setTexture2D=it,this.setTexture2DArray=L,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=Wt,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ge}function I1(s,t){function i(r,l=Va){let c;const f=Ce.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===o0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===r0)return s.BYTE;if(r===s0)return s.SHORT;if(r===Fo)return s.UNSIGNED_SHORT;if(r===Id)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Vo)return s.HALF_FLOAT;if(r===l0)return s.ALPHA;if(r===c0)return s.RGB;if(r===Ti)return s.RGBA;if(r===u0)return s.LUMINANCE;if(r===f0)return s.LUMINANCE_ALPHA;if(r===Ho)return s.DEPTH_COMPONENT;if(r===Go)return s.DEPTH_STENCIL;if(r===h0)return s.RED;if(r===Vd)return s.RED_INTEGER;if(r===d0)return s.RG;if(r===kd)return s.RG_INTEGER;if(r===Xd)return s.RGBA_INTEGER;if(r===wc||r===Dc||r===Uc||r===Lc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Uc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ld||r===cd||r===ud||r===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hd||r===dd||r===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===hd||r===dd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===bd||r===Ad||r===Rd||r===Cd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_d)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ed)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ad)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===wd||r===Dd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Nc)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===p0||r===Ud||r===Ld||r===Nd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ya({vertexShader:H1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k1 extends Us{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,E=null;const b=new V1,M=i.getContextAttributes();let y=null,P=null;const U=[],w=[],X=new ee;let B=null;const z=new hi;z.viewport=new tn;const k=new hi;k.viewport=new tn;const D=[z,k],C=new uE;let H=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=U[Q];return ut===void 0&&(ut=new Ch,U[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=U[Q];return ut===void 0&&(ut=new Ch,U[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=U[Q];return ut===void 0&&(ut=new Ch,U[Q]=ut),ut.getHandSpace()};function et(Q){const ut=w.indexOf(Q.inputSource);if(ut===-1)return;const Mt=U[ut];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,m||f),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ct(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",it);for(let Q=0;Q<U.length;Q++){const ut=w[Q];ut!==null&&(w[Q]=null,U[Q].disconnect(ut))}H=null,nt=null,b.reset(),t.setRenderTarget(y),S=null,v=null,_=null,l=null,P=null,pt.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(X.width,X.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,yt=null,Pt=null;M.depth&&(Pt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=M.stencil?Go:Ho,yt=M.stencil?Io:Ar);const Ht={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(Ht),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new Rr(v.textureWidth,v.textureHeight,{format:Ti,type:ca,depthTexture:new b0(v.textureWidth,v.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Rr(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),pt.setContext(l),pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function it(Q){for(let ut=0;ut<Q.removed.length;ut++){const Mt=Q.removed[ut],yt=w.indexOf(Mt);yt>=0&&(w[yt]=null,U[yt].disconnect(Mt))}for(let ut=0;ut<Q.added.length;ut++){const Mt=Q.added[ut];let yt=w.indexOf(Mt);if(yt===-1){for(let Ht=0;Ht<U.length;Ht++)if(Ht>=w.length){w.push(Mt),yt=Ht;break}else if(w[Ht]===null){w[Ht]=Mt,yt=Ht;break}if(yt===-1)break}const Pt=U[yt];Pt&&Pt.connect(Mt)}}const L=new K,W=new K;function G(Q,ut,Mt){L.setFromMatrixPosition(ut.matrixWorld),W.setFromMatrixPosition(Mt.matrixWorld);const yt=L.distanceTo(W),Pt=ut.projectionMatrix.elements,Ht=Mt.projectionMatrix.elements,Wt=Pt[14]/(Pt[10]-1),De=Pt[14]/(Pt[10]+1),Ue=(Pt[9]+1)/Pt[5],fe=(Pt[9]-1)/Pt[5],I=(Pt[8]-1)/Pt[0],Tn=(Ht[8]+1)/Ht[0],he=Wt*I,ge=Wt*Tn,qt=yt/(-I+Tn),Le=qt*-I;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Le),Q.translateZ(qt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pt[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Xt=Wt+qt,O=De+qt,A=he-Le,rt=ge+(yt-Le),mt=Ue*De/O*Xt,Et=fe*De/O*Xt;Q.projectionMatrix.makePerspective(A,rt,mt,Et,Xt,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ut=Q.near,Mt=Q.far;b.texture!==null&&(b.depthNear>0&&(ut=b.depthNear),b.depthFar>0&&(Mt=b.depthFar)),C.near=k.near=z.near=ut,C.far=k.far=z.far=Mt,(H!==C.near||nt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,nt=C.far),z.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,C.layers.mask=z.layers.mask|k.layers.mask;const yt=Q.parent,Pt=C.cameras;dt(C,yt);for(let Ht=0;Ht<Pt.length;Ht++)dt(Pt[Ht],yt);Pt.length===2?G(C,z,k):C.projectionMatrix.copy(z.projectionMatrix),St(Q,C,yt)};function St(Q,ut,Mt){Mt===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Od*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(Q){p=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(C)};let N=null;function J(Q,ut){if(g=ut.getViewerPose(m||f),E=ut,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let yt=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,yt=!0);for(let Wt=0;Wt<Mt.length;Wt++){const De=Mt[Wt];let Ue=null;if(S!==null)Ue=S.getViewport(De);else{const I=_.getViewSubImage(v,De);Ue=I.viewport,Wt===0&&(t.setRenderTargetTextures(P,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(P))}let fe=D[Wt];fe===void 0&&(fe=new hi,fe.layers.enable(Wt),fe.viewport=new tn,D[Wt]=fe),fe.matrix.fromArray(De.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(De.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Wt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),yt===!0&&C.cameras.push(fe)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Wt=_.getDepthInformation(Mt[0]);Wt&&Wt.isValid&&Wt.texture&&b.init(t,Wt,l.renderState)}}for(let Mt=0;Mt<U.length;Mt++){const yt=w[Mt],Pt=U[Mt];yt!==null&&Pt!==void 0&&Pt.update(yt,ut,m||f)}N&&N(Q,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),E=null}const pt=new U0;pt.setAnimationLoop(J),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const vr=new ua,X1=new Ze;function W1(s,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,M0(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,P,U,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),b(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,P,U):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=t.get(y),U=P.envMap,w=P.envMapRotation;U&&(M.envMap.value=U,vr.copy(w),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),M.envMapRotation.value.setFromMatrix4(X1.makeRotationFromEuler(vr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,P,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=U*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function b(M,y){const P=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function q1(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,U){const w=U.program;r.uniformBlockBinding(P,w)}function m(P,U){let w=l[P.id];w===void 0&&(E(P),w=g(P),l[P.id]=w,P.addEventListener("dispose",M));const X=U.program;r.updateUBOMapping(P,X);const B=t.render.frame;c[P.id]!==B&&(v(P),c[P.id]=B)}function g(P){const U=_();P.__bindingPointIndex=U;const w=s.createBuffer(),X=P.__size,B=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,X,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function _(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const U=l[P.id],w=P.uniforms,X=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let B=0,z=w.length;B<z;B++){const k=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=k.length;D<C;D++){const H=k[D];if(S(H,B,D,X)===!0){const nt=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let it=0;it<et.length;it++){const L=et[it],W=b(L);typeof L=="number"||typeof L=="boolean"?(H.__data[0]=L,s.bufferSubData(s.UNIFORM_BUFFER,nt+ct,H.__data)):L.isMatrix3?(H.__data[0]=L.elements[0],H.__data[1]=L.elements[1],H.__data[2]=L.elements[2],H.__data[3]=0,H.__data[4]=L.elements[3],H.__data[5]=L.elements[4],H.__data[6]=L.elements[5],H.__data[7]=0,H.__data[8]=L.elements[6],H.__data[9]=L.elements[7],H.__data[10]=L.elements[8],H.__data[11]=0):(L.toArray(H.__data,ct),ct+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,U,w,X){const B=P.value,z=U+"_"+w;if(X[z]===void 0)return typeof B=="number"||typeof B=="boolean"?X[z]=B:X[z]=B.clone(),!0;{const k=X[z];if(typeof B=="number"||typeof B=="boolean"){if(k!==B)return X[z]=B,!0}else if(k.equals(B)===!1)return k.copy(B),!0}return!1}function E(P){const U=P.uniforms;let w=0;const X=16;for(let z=0,k=U.length;z<k;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,H=D.length;C<H;C++){const nt=D[C],et=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,it=et.length;ct<it;ct++){const L=et[ct],W=b(L),G=w%X,dt=G%W.boundary,St=G+dt;w+=dt,St!==0&&X-St<W.storage&&(w+=X-St),nt.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=W.storage}}}const B=w%X;return B>0&&(w+=X-B),P.__size=w,P.__cache={},this}function b(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const P in l)s.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:y}}class Y1{constructor(t={}){const{canvas:i=fM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,y=null;const P=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let X=!1;this._outputColorSpace=fi;let B=0,z=0,k=null,D=-1,C=null;const H=new tn,nt=new tn;let et=null;const ct=new ze(0);let it=0,L=i.width,W=i.height,G=1,dt=null,St=null;const N=new tn(0,0,L,W),J=new tn(0,0,L,W);let pt=!1;const Q=new jd;let ut=!1,Mt=!1;const yt=new Ze,Pt=new Ze,Ht=new K,Wt=new tn,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function fe(){return k===null?G:1}let I=r;function Tn(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fd}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const j="webgl2";if(I=Tn(j,R),I===null)throw Tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let he,ge,qt,Le,Xt,O,A,rt,mt,Et,_t,Vt,Ct,Bt,_e,bt,Ft,Qt,kt,Ot,te,se,Pe,Y;function wt(){he=new iA(I),he.init(),se=new I1(I,he),ge=new Kb(I,he,t,se),qt=new B1(I,he),ge.reverseDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),Le=new sA(I),Xt=new T1,O=new F1(I,he,qt,Xt,ge,se,Le),A=new Jb(w),rt=new nA(w),mt=new hE(I),Pe=new jb(I,mt),Et=new aA(I,mt,Le,Pe),_t=new lA(I,Et,mt,Le),kt=new oA(I,ge,O),bt=new Qb(Xt),Vt=new E1(w,A,rt,he,ge,Pe,bt),Ct=new W1(w,Xt),Bt=new A1,_e=new L1(he),Qt=new Yb(w,A,rt,qt,_t,S,p),Ft=new z1(w,_t,ge),Y=new q1(I,Le,ge,qt),Ot=new Zb(I,he,Le),te=new rA(I,he,Le),Le.programs=Vt.programs,w.capabilities=ge,w.extensions=he,w.properties=Xt,w.renderLists=Bt,w.shadowMap=Ft,w.state=qt,w.info=Le}wt();const ft=new k1(w,I);this.xr=ft,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=he.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=he.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(L,W,!1))},this.getSize=function(R){return R.set(L,W)},this.setSize=function(R,j,st=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=R,W=j,i.width=Math.floor(R*G),i.height=Math.floor(j*G),st===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(L*G,W*G).floor()},this.setDrawingBufferSize=function(R,j,st){L=R,W=j,G=st,i.width=Math.floor(R*st),i.height=Math.floor(j*st),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,j,st,ot){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,j,st,ot),qt.viewport(H.copy(N).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,j,st,ot){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,j,st,ot),qt.scissor(nt.copy(J).multiplyScalar(G).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){qt.setScissorTest(pt=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,st=!0){let ot=0;if(R){let q=!1;if(k!==null){const Tt=k.texture.format;q=Tt===Xd||Tt===kd||Tt===Vd}if(q){const Tt=k.texture.type,Ut=Tt===ca||Tt===Ar||Tt===Fo||Tt===Io||Tt===Hd||Tt===Gd,Nt=Qt.getClearColor(),zt=Qt.getClearAlpha(),ie=Nt.r,$t=Nt.g,jt=Nt.b;Ut?(E[0]=ie,E[1]=$t,E[2]=jt,E[3]=zt,I.clearBufferuiv(I.COLOR,0,E)):(b[0]=ie,b[1]=$t,b[2]=jt,b[3]=zt,I.clearBufferiv(I.COLOR,0,b))}else ot|=I.COLOR_BUFFER_BIT}j&&(ot|=I.DEPTH_BUFFER_BIT),st&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Qt.dispose(),Bt.dispose(),_e.dispose(),Xt.dispose(),A.dispose(),rt.dispose(),_t.dispose(),Pe.dispose(),Y.dispose(),Vt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ns),ft.removeEventListener("sessionend",Os),Ai.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=Le.autoReset,j=Ft.enabled,st=Ft.autoUpdate,ot=Ft.needsUpdate,q=Ft.type;wt(),Le.autoReset=R,Ft.enabled=j,Ft.autoUpdate=st,Ft.needsUpdate=ot,Ft.type=q}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ne(R){const j=R.target;j.removeEventListener("dispose",ne),qe(j)}function qe(R){cn(R),Xt.remove(R)}function cn(R){const j=Xt.get(R).programs;j!==void 0&&(j.forEach(function(st){Vt.releaseProgram(st)}),R.isShaderMaterial&&Vt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,st,ot,q,Tt){j===null&&(j=De);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Nt=Ps(R,j,st,ot,q);qt.setMaterial(ot,Ut);let zt=st.index,ie=1;if(ot.wireframe===!0){if(zt=Et.getWireframeAttribute(st),zt===void 0)return;ie=2}const $t=st.drawRange,jt=st.attributes.position;let ye=$t.start*ie,Se=($t.start+$t.count)*ie;Tt!==null&&(ye=Math.max(ye,Tt.start*ie),Se=Math.min(Se,(Tt.start+Tt.count)*ie)),zt!==null?(ye=Math.max(ye,0),Se=Math.min(Se,zt.count)):jt!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,jt.count));const ke=Se-ye;if(ke<0||ke===1/0)return;Pe.setup(q,ot,Nt,st,zt);let be,ae=Ot;if(zt!==null&&(be=mt.get(zt),ae=te,ae.setIndex(be)),q.isMesh)ot.wireframe===!0?(qt.setLineWidth(ot.wireframeLinewidth*fe()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(q.isLine){let Kt=ot.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*fe()),q.isLineSegments?ae.setMode(I.LINES):q.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else q.isPoints?ae.setMode(I.POINTS):q.isSprite&&ae.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Oc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ae.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Kt=q._multiDrawStarts,un=q._multiDrawCounts,Ee=q._multiDrawCount,On=zt?mt.get(zt).bytesPerElement:1,gi=Xt.get(ot).currentProgram.getUniforms();for(let Dn=0;Dn<Ee;Dn++)gi.setValue(I,"_gl_DrawID",Dn),ae.render(Kt[Dn]/On,un[Dn])}else if(q.isInstancedMesh)ae.renderInstances(ye,ke,q.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,un=Math.min(st.instanceCount,Kt);ae.renderInstances(ye,ke,un)}else ae.render(ye,ke)};function Te(R,j,st){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=kn,R.needsUpdate=!0,Ke(R,j,st),R.side=qa,R.needsUpdate=!0,Ke(R,j,st),R.side=ra):Ke(R,j,st)}this.compile=function(R,j,st=null){st===null&&(st=R),y=_e.get(st),y.init(j),U.push(y),st.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),R!==st&&R.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const ot=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Nt=Tt[Ut];Te(Nt,st,q),ot.add(Nt)}else Te(Tt,st,q),ot.add(Tt)}),y=U.pop(),ot},this.compileAsync=function(R,j,st=null){const ot=this.compile(R,j,st);return new Promise(q=>{function Tt(){if(ot.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){q(R);return}setTimeout(Tt,10)}he.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _n=null;function pi(R){_n&&_n(R)}function Ns(){Ai.stop()}function Os(){Ai.start()}const Ai=new U0;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){_n=R,ft.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ft.addEventListener("sessionstart",Ns),ft.addEventListener("sessionend",Os),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(j),j=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,j,k),y=_e.get(R,U.length),y.init(j),U.push(y),Pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Pt),Mt=this.localClippingEnabled,ut=bt.init(this.clippingPlanes,Mt),M=Bt.get(R,P.length),M.init(),P.push(M),ft.enabled===!0&&ft.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,j,-1/0,w.sortObjects)}ja(R,j,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(dt,St),Ue=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ue&&Qt.addToRenderList(M,R),this.info.render.frame++,ut===!0&&bt.beginShadows();const st=y.state.shadowsArray;Ft.render(st,R,j),ut===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,q=M.transmissive;if(y.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(q.length>0)for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];zs(ot,q,R,zt)}Ue&&Qt.render(R);for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];Cr(M,R,zt,zt.viewport)}}else q.length>0&&zs(ot,q,R,j),Ue&&Qt.render(R),Cr(M,R,j);k!==null&&z===0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k)),R.isScene===!0&&R.onAfterRender(w,R,j),Pe.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(y=U[U.length-1],ut===!0&&bt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function ja(R,j,st,ot){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ot&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const Ut=_t.update(R),Nt=R.material;Nt.visible&&M.push(R,Ut,Nt,st,Wt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ut=_t.update(R),Nt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Wt.copy(Ut.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Nt)){const zt=Ut.groups;for(let ie=0,$t=zt.length;ie<$t;ie++){const jt=zt[ie],ye=Nt[jt.materialIndex];ye&&ye.visible&&M.push(R,Ut,ye,st,Wt.z,jt)}}else Nt.visible&&M.push(R,Ut,Nt,st,Wt.z,null)}}const Tt=R.children;for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++)ja(Tt[Ut],j,st,ot)}function Cr(R,j,st,ot){const q=R.opaque,Tt=R.transmissive,Ut=R.transparent;y.setupLightsView(st),ut===!0&&bt.setGlobalState(w.clippingPlanes,st),ot&&qt.viewport(H.copy(ot)),q.length>0&&Za(q,j,st),Tt.length>0&&Za(Tt,j,st),Ut.length>0&&Za(Ut,j,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function zs(R,j,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Rr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Vo:ca,minFilter:Tr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||H;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(ct),it=w.getClearAlpha(),it<1&&w.setClearColor(16777215,.5),w.clear(),Ue&&Qt.render(st);const zt=w.toneMapping;w.toneMapping=Xa;const ie=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),ut===!0&&bt.setGlobalState(w.clippingPlanes,ot),Za(R,st,ot),O.updateMultisampleRenderTarget(Tt),O.updateRenderTargetMipmap(Tt),he.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let jt=0,ye=j.length;jt<ye;jt++){const Se=j[jt],ke=Se.object,be=Se.geometry,ae=Se.material,Kt=Se.group;if(ae.side===ra&&ke.layers.test(ot.layers)){const un=ae.side;ae.side=kn,ae.needsUpdate=!0,mi(ke,st,ot,be,ae,Kt),ae.side=un,ae.needsUpdate=!0,$t=!0}}$t===!0&&(O.updateMultisampleRenderTarget(Tt),O.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt),w.setClearColor(ct,it),ie!==void 0&&(ot.viewport=ie),w.toneMapping=zt}function Za(R,j,st){const ot=j.isScene===!0?j.overrideMaterial:null;for(let q=0,Tt=R.length;q<Tt;q++){const Ut=R[q],Nt=Ut.object,zt=Ut.geometry,ie=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&ot!==null&&($t=ot),Nt.layers.test(st.layers)&&mi(Nt,j,st,zt,$t,ie)}}function mi(R,j,st,ot,q,Tt){R.onBeforeRender(w,j,st,ot,q,Tt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(w,j,st,ot,R,Tt),q.transparent===!0&&q.side===ra&&q.forceSinglePass===!1?(q.side=kn,q.needsUpdate=!0,w.renderBufferDirect(st,j,ot,q,R,Tt),q.side=qa,q.needsUpdate=!0,w.renderBufferDirect(st,j,ot,q,R,Tt),q.side=ra):w.renderBufferDirect(st,j,ot,q,R,Tt),R.onAfterRender(w,j,st,ot,q,Tt)}function Ke(R,j,st){j.isScene!==!0&&(j=De);const ot=Xt.get(R),q=y.state.lights,Tt=y.state.shadowsArray,Ut=q.state.version,Nt=Vt.getParameters(R,q.state,Tt,j,st),zt=Vt.getProgramCacheKey(Nt);let ie=ot.programs;ot.environment=R.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(R.isMeshStandardMaterial?rt:A).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",ne),ie=new Map,ot.programs=ie);let $t=ie.get(zt);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===Ut)return zi(R,Nt),$t}else Nt.uniforms=Vt.getUniforms(R),R.onBeforeCompile(Nt,w),$t=Vt.acquireProgram(Nt,zt),ie.set(zt,$t),ot.uniforms=Nt.uniforms;const jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=bt.uniform),zi(R,Nt),ot.needsLights=jc(R),ot.lightsStateVersion=Ut,ot.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function vn(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function zi(R,j){const st=Xt.get(R);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function Ps(R,j,st,ot,q){j.isScene!==!0&&(j=De),O.resetTextureUnits();const Tt=j.fog,Ut=ot.isMeshStandardMaterial?j.environment:null,Nt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ws,zt=(ot.isMeshStandardMaterial?rt:A).get(ot.envMap||Ut),ie=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,$t=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),jt=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Se=!!st.morphAttributes.color;let ke=Xa;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=w.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ae=be!==void 0?be.length:0,Kt=Xt.get(ot),un=y.state.lights;if(ut===!0&&(Mt===!0||R!==C)){const Qe=R===C&&ot.id===D;bt.setState(ot,R,Qe)}let Ee=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||Kt.outputColorSpace!==Nt||q.isBatchedMesh&&Kt.batching===!1||!q.isBatchedMesh&&Kt.batching===!0||q.isBatchedMesh&&Kt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Kt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Kt.instancing===!1||!q.isInstancedMesh&&Kt.instancing===!0||q.isSkinnedMesh&&Kt.skinning===!1||!q.isSkinnedMesh&&Kt.skinning===!0||q.isInstancedMesh&&Kt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Kt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Kt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Kt.instancingMorph===!1&&q.morphTexture!==null||Kt.envMap!==zt||ot.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==ie||Kt.vertexTangents!==$t||Kt.morphTargets!==jt||Kt.morphNormals!==ye||Kt.morphColors!==Se||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Kt.__version=ot.version);let On=Kt.currentProgram;Ee===!0&&(On=Ke(ot,j,q));let gi=!1,Dn=!1,pn=!1;const Be=On.getUniforms(),Un=Kt.uniforms;if(qt.useProgram(On.program)&&(gi=!0,Dn=!0,pn=!0),ot.id!==D&&(D=ot.id,Dn=!0),gi||C!==R){qt.buffers.depth.getReversed()?(yt.copy(R.projectionMatrix),dM(yt),pM(yt),Be.setValue(I,"projectionMatrix",yt)):Be.setValue(I,"projectionMatrix",R.projectionMatrix),Be.setValue(I,"viewMatrix",R.matrixWorldInverse);const xn=Be.map.cameraPosition;xn!==void 0&&xn.setValue(I,Ht.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&Be.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Dn=!0,pn=!0)}if(q.isSkinnedMesh){Be.setOptional(I,q,"bindMatrix"),Be.setOptional(I,q,"bindMatrixInverse");const Qe=q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Be.setValue(I,"boneTexture",Qe.boneTexture,O))}q.isBatchedMesh&&(Be.setOptional(I,q,"batchingTexture"),Be.setValue(I,"batchingTexture",q._matricesTexture,O),Be.setOptional(I,q,"batchingIdTexture"),Be.setValue(I,"batchingIdTexture",q._indirectTexture,O),Be.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Be.setValue(I,"batchingColorTexture",q._colorsTexture,O));const bn=st.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&kt.update(q,st,On),(Dn||Kt.receiveShadow!==q.receiveShadow)&&(Kt.receiveShadow=q.receiveShadow,Be.setValue(I,"receiveShadow",q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Un.envMap.value=zt,Un.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&j.environment!==null&&(Un.envMapIntensity.value=j.environmentIntensity),Dn&&(Be.setValue(I,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Yc(Un,pn),Tt&&ot.fog===!0&&Ct.refreshFogUniforms(Un,Tt),Ct.refreshMaterialUniforms(Un,ot,G,W,y.state.transmissionRenderTarget[R.id]),zc.upload(I,vn(Kt),Un,O)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(zc.upload(I,vn(Kt),Un,O),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(I,"center",q.center),Be.setValue(I,"modelViewMatrix",q.modelViewMatrix),Be.setValue(I,"normalMatrix",q.normalMatrix),Be.setValue(I,"modelMatrix",q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Qe=ot.uniformsGroups;for(let xn=0,wr=Qe.length;xn<wr;xn++){const zn=Qe[xn];Y.update(zn,On),Y.bind(zn,On)}}return On}function Yc(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function jc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,j,st){const ot=Xt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Xt.get(R.texture).__webglTexture=j,Xt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const st=Xt.get(R);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const Zo=I.createFramebuffer();this.setRenderTarget=function(R,j=0,st=0){k=R,B=j,z=st;let ot=!0,q=null,Tt=!1,Ut=!1;if(R){const zt=Xt.get(R);if(zt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(zt.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(zt.__hasExternalTextures)O.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(zt.__boundDepthTexture!==jt){if(jt!==null&&Xt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const $t=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[j])?q=$t[j][st]:q=$t[j],Tt=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?q=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?q=$t[st]:q=$t,H.copy(R.viewport),nt.copy(R.scissor),et=R.scissorTest}else H.copy(N).multiplyScalar(G).floor(),nt.copy(J).multiplyScalar(G).floor(),et=pt;if(st!==0&&(q=Zo),qt.bindFramebuffer(I.FRAMEBUFFER,q)&&ot&&qt.drawBuffers(R,q),qt.viewport(H),qt.scissor(nt),qt.setScissorTest(et),Tt){const zt=Xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,st)}else if(Ut){const zt=Xt.get(R.texture),ie=j;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,st,ie)}else if(R!==null&&st!==0){const zt=Xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(R,j,st,ot,q,Tt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){qt.bindFramebuffer(I.FRAMEBUFFER,Nt);try{const zt=R.texture,ie=zt.format,$t=zt.type;if(!ge.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ot&&st>=0&&st<=R.height-q&&I.readPixels(j,st,ot,q,se.convert(ie),se.convert($t),Tt)}finally{const zt=k!==null?Xt.get(k).__webglFramebuffer:null;qt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,j,st,ot,q,Tt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(j>=0&&j<=R.width-ot&&st>=0&&st<=R.height-q){qt.bindFramebuffer(I.FRAMEBUFFER,Nt);const zt=R.texture,ie=zt.format,$t=zt.type;if(!ge.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(j,st,ot,q,se.convert(ie),se.convert($t),0);const ye=k!==null?Xt.get(k).__webglFramebuffer:null;qt.bindFramebuffer(I.FRAMEBUFFER,ye);const Se=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hM(I,Se,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(jt),I.deleteSync(Se),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,st=0){const ot=Math.pow(2,-st),q=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Ut=j!==null?j.x:0,Nt=j!==null?j.y:0;O.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Ut,Nt,q,Tt),qt.unbindTexture()};const Ka=I.createFramebuffer(),Bs=I.createFramebuffer();this.copyTextureToTexture=function(R,j,st=null,ot=null,q=0,Tt=null){Tt===null&&(q!==0?(Oc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=q,q=0):Tt=0);let Ut,Nt,zt,ie,$t,jt,ye,Se,ke;const be=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(st!==null)Ut=st.max.x-st.min.x,Nt=st.max.y-st.min.y,zt=st.isBox3?st.max.z-st.min.z:1,ie=st.min.x,$t=st.min.y,jt=st.isBox3?st.min.z:0;else{const bn=Math.pow(2,-q);Ut=Math.floor(be.width*bn),Nt=Math.floor(be.height*bn),R.isDataArrayTexture?zt=be.depth:R.isData3DTexture?zt=Math.floor(be.depth*bn):zt=1,ie=0,$t=0,jt=0}ot!==null?(ye=ot.x,Se=ot.y,ke=ot.z):(ye=0,Se=0,ke=0);const ae=se.convert(j.format),Kt=se.convert(j.type);let un;j.isData3DTexture?(O.setTexture3D(j,0),un=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),un=I.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),un=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Dn=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const Be=R.isDataArrayTexture||R.isData3DTexture,Un=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const bn=Xt.get(R),Qe=Xt.get(j),xn=Xt.get(bn.__renderTarget),wr=Xt.get(Qe.__renderTarget);qt.bindFramebuffer(I.READ_FRAMEBUFFER,xn.__webglFramebuffer),qt.bindFramebuffer(I.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let zn=0;zn<zt;zn++)Be&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(R).__webglTexture,q,jt+zn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(j).__webglTexture,Tt,ke+zn)),I.blitFramebuffer(ie,$t,Ut,Nt,ye,Se,Ut,Nt,I.DEPTH_BUFFER_BIT,I.NEAREST);qt.bindFramebuffer(I.READ_FRAMEBUFFER,null),qt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Xt.has(R)){const bn=Xt.get(R),Qe=Xt.get(j);qt.bindFramebuffer(I.READ_FRAMEBUFFER,Ka),qt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bs);for(let xn=0;xn<zt;xn++)Be?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,q,jt+xn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,q),Un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+xn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qe.__webglTexture,Tt),q!==0?I.blitFramebuffer(ie,$t,Ut,Nt,ye,Se,Ut,Nt,I.COLOR_BUFFER_BIT,I.NEAREST):Un?I.copyTexSubImage3D(un,Tt,ye,Se,ke+xn,ie,$t,Ut,Nt):I.copyTexSubImage2D(un,Tt,ye,Se,ie,$t,Ut,Nt);qt.bindFramebuffer(I.READ_FRAMEBUFFER,null),qt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Un?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(un,Tt,ye,Se,ke,Ut,Nt,zt,ae,Kt,be.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(un,Tt,ye,Se,ke,Ut,Nt,zt,ae,be.data):I.texSubImage3D(un,Tt,ye,Se,ke,Ut,Nt,zt,ae,Kt,be):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,ye,Se,Ut,Nt,ae,Kt,be.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,ye,Se,be.width,be.height,ae,be.data):I.texSubImage2D(I.TEXTURE_2D,Tt,ye,Se,Ut,Nt,ae,Kt,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),Tt===0&&j.generateMipmaps&&I.generateMipmap(un),qt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,st=null,ot=null,q=0){return Oc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,st,ot,q)},this.initRenderTarget=function(R){Xt.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){B=0,z=0,k=null,qt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const j1={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},Z1={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function P0(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function B0(s){return s.replace("'","").replace("2","")}function Yv(s){return s.endsWith("'")&&!s.endsWith("2")}function K1(s){return s.endsWith("2")}const Q1=16777215,J1=.72;class $1{constructor(t){je(this,"renderer");je(this,"scene");je(this,"camera");je(this,"arrowGroup");je(this,"currentMove",null);je(this,"width",1);je(this,"height",1);this.renderer=new Y1({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new HM,this.camera=new hi(45,1,.01,100),this.camera.position.set(0,0,3);const i=new cE(16777215,.9),r=new lE(16777215,.6);r.position.set(2,3,4),this.scene.add(i,r),this.arrowGroup=new br,this.scene.add(this.arrowGroup)}resize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.rebuildArrow(t))}render(t){if(!t||!this.currentMove){this.renderer.render(this.scene,this.camera);return}const i=new br,r=new Ze;r.set(t.rotationMatrix[0],t.rotationMatrix[1],t.rotationMatrix[2],0,t.rotationMatrix[3],t.rotationMatrix[4],t.rotationMatrix[5],0,t.rotationMatrix[6],t.rotationMatrix[7],t.rotationMatrix[8],0,0,0,0,1),i.setRotationFromMatrix(r);const l=t.size/this.width;i.position.set((t.translation[0]-this.width/2)*l,-(t.translation[1]-this.height/2)*l,t.translation[2]*l),i.scale.setScalar(l*2),this.arrowGroup.matrixAutoUpdate=!1,this.arrowGroup.matrix.copy(i.matrix),this.arrowGroup.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.clearArrow()}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=B0(t),r=new K(...j1[i]),l=new K(0,1,0);Math.abs(r.dot(l))>.9&&l.set(0,0,1);const c=new K().crossVectors(l,r).normalize(),f=new K().crossVectors(r,c).normalize(),d=r.clone().multiplyScalar(.51),p=new br;p.position.copy(d);const m=P0(t),g=.28,_=[],v=24,S=Yv(t)?m:0,E=Yv(t)?0:m;for(let z=0;z<=v;z++){const k=S+(E-S)*z/v,D=c.clone().multiplyScalar(Math.cos(k)*g).add(f.clone().multiplyScalar(Math.sin(k)*g));_.push(D)}const b=new R0(_),M=new Jd(b,v,.025,8,!1),y=new Yd({color:Q1,transparent:!0,opacity:J1,depthTest:!0,depthWrite:!1}),P=new di(M,y);p.add(P);const U=_[_.length-1],w=_[_.length-2]??U,X=new K().subVectors(U,w).normalize(),B=new di(new Qd(.06,.14,12),y.clone());if(B.position.copy(U),B.quaternion.setFromUnitVectors(new K(0,1,0),X),p.add(B),K1(t)){const z=p.clone();z.rotation.z=Math.PI,p.add(z)}this.arrowGroup.add(p)}clearArrow(){for(;this.arrowGroup.children.length>0;){const t=this.arrowGroup.children[0];this.arrowGroup.remove(t),tR(t)}}}function tR(s){s.traverse(t=>{t instanceof di&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function eR({pose:s,move:t,width:i,height:r,active:l}){const c=Yt.useRef(null),f=Yt.useRef(null);return Yt.useEffect(()=>{const d=c.current;if(!d)return;const p=new $1(d);return f.current=p,()=>{p.dispose(),f.current=null}},[]),Yt.useEffect(()=>{var d;(d=f.current)==null||d.resize(i,r)},[i,r]),Yt.useEffect(()=>{var d;(d=f.current)==null||d.setMove(t)},[t]),Yt.useEffect(()=>{if(!l)return;let d=0;const p=()=>{var m;(m=f.current)==null||m.render(s),d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[s,l]),At.jsx("canvas",{ref:c,className:`ar-overlay${l?" active":""}`,"aria-hidden":"true"})}function nR({setVideoRef:s,onDimensions:t}){const i=Yt.useCallback(l=>{l.videoWidth&&l.videoHeight&&(t==null||t(l.videoWidth,l.videoHeight))},[t]),r=Yt.useCallback(l=>{s(l),l&&l.readyState>=1&&i(l)},[s,i]);return At.jsx("video",{ref:r,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:l=>i(l.currentTarget)})}function iR(s){if(s.length!==9)return s;const t=[];for(let i=0;i<3;i++)for(let r=2;r>=0;r--)t.push(s[i*3+r]);return t}function tp({rect:s}){const t=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}:void 0;return At.jsx("div",{className:"guide-frame-css",style:t})}const aR={W:"#f5f5f5",Y:"#facc15",R:"#ef4444",O:"#f97316",G:"#22c55e",B:"#3b82f6"},rR={R:"빨",O:"주",Y:"노",G:"초",B:"파",W:"흰"},sR={searching:"큐브를 찾는 중...",detected:"면 감지됨",stabilizing:"인식 중",captured:"면 저장됨!"};function oR({feedback:s,visible:t,guideRect:i}){if(!t)return null;const r=s.status,l=s.cellColors.length===9,c=l?iR(s.cellColors):[];return At.jsxs("div",{className:"detection-overlay","aria-live":"polite",children:[At.jsx(tp,{rect:i}),At.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[At.jsxs("div",{className:`detection-status ${r}`,children:[At.jsx("span",{className:"status-dot"}),At.jsx("span",{className:"status-text",children:sR[s.status]}),s.status==="stabilizing"&&At.jsxs("span",{className:"status-progress",children:[s.stableProgress,"/",s.stableTarget]})]}),l&&At.jsx("div",{className:"cell-grid","aria-label":"칸별 인식 결과",children:c.map((f,d)=>At.jsx("span",{className:"cell-grid-item",style:{background:aR[f]},title:rR[f]},d))})]})]})}const jv=["U","F","R","B","L","D"],lR={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function F0(s){return lR[s]??null}const cR={U:1,F:2,R:3,B:4,L:5,D:6};function Hh(s){return`면 ${cR[s]}`}function uR({phase:s,knownFaces:t,currentFace:i,progress:r}){if(s!=="liveScan")return null;const l=new Set(t),c=jv.filter(f=>!l.has(f));return At.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[At.jsx("p",{className:"calibration-step",children:"3단계 — 라이브 스캔"}),At.jsx("p",{className:"calibration-hint",children:"큐브를 천천히 돌려 6면을 인식하세요"}),At.jsx("p",{className:"calibration-distance",children:"팔 길이 거리 유지 · 각 면 1~2초 안정"}),At.jsx("div",{className:"calibration-bar",children:At.jsx("div",{className:"calibration-fill",style:{width:`${r*100}%`}})}),At.jsxs("p",{className:"calibration-sub",children:[t.length," / 6 면 인식됨",i&&!l.has(i)&&` · ${Hh(i)} 인식 중`]}),At.jsx("div",{className:"face-chips","aria-label":"인식된 면",children:jv.map(f=>At.jsx("span",{className:`face-chip${l.has(f)?" known":""}${i===f?" active":""}`,children:Hh(f).replace("면 ","")},f))}),c.length>0&&c.length<6&&At.jsxs("p",{className:"live-scan-remaining",children:["아직: ",c.map(f=>Hh(f)).join(", ")]})]})}function Zv({message:s="준비 중...",overlay:t=!1}){return At.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[At.jsx("div",{className:"loading-spinner"}),At.jsx("p",{children:s})]})}function fR({visible:s,feedback:t,guideRect:i,onStart:r}){if(!s)return null;const l=t.status==="detected"&&t.cellColors.length===9;return At.jsxs("div",{className:"scan-ready-overlay","aria-live":"polite",children:[At.jsx(tp,{rect:i}),At.jsxs("div",{className:"scan-ready-panel scan-ui-panel",children:[At.jsx("p",{className:"scan-ready-step",children:"2단계 — 큐브 준비"}),At.jsx("p",{className:"scan-ready-hint",children:"큐브 한 면을 점선 안에 맞춘 뒤 스캔을 시작하세요"}),At.jsx("p",{className:"scan-ready-distance",children:"팔 길이 거리 — 가까이 대면 옆 색이 번져요"}),At.jsx("p",{className:"scan-ready-sub",children:l?"큐브가 감지되었습니다. 준비되면 시작 버튼을 누르세요.":"아직 큐브가 감지되지 않았습니다. 얼굴이 아닌 큐브 면을 맞춰 주세요."}),At.jsx("button",{type:"button",className:"capture-button",onClick:r,children:"스캔 시작"})]})]})}function hR({phase:s,currentStep:t,totalSteps:i}){return s!=="solving"||i===0?null:At.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}function dR({rect:s}){const t=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}:void 0;return At.jsx("div",{className:"guide-spot-css",style:t})}function pR(s){return s>18?"노란 조명 — 흰 스티커 중심으로 보정합니다":s<-12?"푸른 조명 — 흰 스티커 중심으로 보정합니다":"흰 스티커 중심 색을 읽는 중"}function mR({visible:s,sample:t,ready:i,error:r,onConfirm:l,guideRect:c,spotRect:f}){return s?At.jsxs("div",{className:"wb-overlay","aria-live":"polite",children:[At.jsx(tp,{rect:c}),At.jsx(dR,{rect:f}),At.jsxs("div",{className:"wb-panel scan-ui-panel",children:[At.jsx("p",{className:"wb-step",children:"1단계 — 흰색 기준 맞추기"}),At.jsx("p",{className:"wb-hint",children:"흰 스티커 한 조각을 가운데 동그라미에 맞추세요"}),At.jsx("p",{className:"wb-distance-hint",children:"팔 길이 정도 거리 — 너무 가까이 대지 마세요"}),At.jsx("div",{className:"wb-meter",children:t?At.jsxs(At.Fragment,{children:[At.jsx("div",{className:"wb-preview-swatch",style:{background:`rgb(${Math.round(t.r)}, ${Math.round(t.g)}, ${Math.round(t.b)})`}}),At.jsx("p",{className:`wb-status ${i?"ready":""}`,children:i?"이 조명의 흰색을 인식했습니다":"가운데 동그라미에 흰 스티커를..."}),At.jsx("p",{className:"wb-warmth",children:pR(t.warmth)})]}):At.jsx("p",{className:"wb-status",children:"흰 종이·흰 스티커 조각도 사용할 수 있어요"})}),At.jsx("button",{type:"button",className:"capture-button",disabled:!i,onClick:l,children:i?"흰색 기준 저장 → 큐브 준비":"동그라미에 흰색을 맞추세요"}),r&&At.jsx("p",{className:"wb-error",children:r})]}),At.jsx("div",{className:"wb-guide-note",style:c?{top:c.top+c.height+10,transform:"translateX(-50%)"}:void 0,children:At.jsx("p",{children:"옆 색이 섞이지 않게 스티커 중심만 읽습니다"})})]}):null}function gR(s){const t=["U","R","F","D","L","B"];let i="";for(const r of t){const l=s.get(r);if(!l||l.length!==9)throw new Error(`Missing face data for ${r}`);for(const c of l)i+=_R(c)}return i}function _R(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function vR(s,t){const i=new Array(9).fill(0);for(let r=0;r<3;r++)for(let l=0;l<3;l++){let c=0;for(let f=0;f<3;f++)c+=s[r*3+f]*t[f*3+l];i[r*3+l]=c}return i}function Kv(){return[1,0,0,0,1,0,0,0,1]}function xR(s,t){const[i,r,l]=s,c=Math.hypot(i,r,l)||1,f=i/c,d=r/c,p=l/c,m=Math.cos(t),g=Math.sin(t),_=1-m;return[_*f*f+m,_*f*d-g*p,_*f*p+g*d,_*f*d+g*p,_*d*d+m,_*d*p-g*f,_*f*p-g*d,_*d*p+g*f,_*p*p+m]}function yR(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-DtGqYb1U.js",import.meta.url),{type:"module"})}const SR=.62,MR=.22;function Wa(s,t){const i=Math.min(s,t)*SR;return{x:(s-i)/2,y:(t-i)/2,size:i}}function I0(s){const t=s.size*MR;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function ER(s){const{x:t,y:i,size:r}=s;return[{x:t,y:i},{x:t+r,y:i},{x:t+r,y:i+r},{x:t,y:i+r}]}function TR(s,t,i){return s.map(r=>({x:r.x+t,y:r.y+i}))}const H0={r:1,g:1,b:1},bR=.45,AR=2.2,Gh=240;let bs={...H0},ep=null,np=!1;function RR(){return bs}function CR(){return ep}function Wc(){return np}function wR(s){ep={r:s.r,g:s.g,b:s.b};let t=No(Gh/Math.max(s.r,1)),i=No(Gh/Math.max(s.g,1)),r=No(Gh/Math.max(s.b,1));if(s.warmth>10){const l=1+Math.min(.14,s.warmth/180);r=No(r*l),i=No(i*(1+Math.min(.04,s.warmth/400)))}bs={r:t,g:i,b:r},np=!0}function Qv(){bs={...H0},ep=null,np=!1}function No(s){return Math.min(AR,Math.max(bR,s))}function Vh(s){return Math.min(255,Math.max(0,Math.round(s)))}function Hc(s,t,i){return[Vh(s*bs.r),Vh(t*bs.g),Vh(i*bs.b)]}function G0(s,t,i){const r=s.getContext("2d",{willReadFrequently:!0});if(!r)return null;const l=Wa(t,i),c=I0(l),f=Math.floor(c.x),d=Math.floor(c.y),p=Math.floor(c.size),m=Math.floor(c.size);if(p<=0||m<=0)return null;const g=r.getImageData(f,d,p,m).data,_=[],v=[],S=[];for(let U=0;U<g.length;U+=8){const w=g[U],X=g[U+1],B=g[U+2];(w+X+B)/3<105||Math.max(w,X,B)-Math.min(w,X,B)>38||(_.push(w),v.push(X),S.push(B))}if(_.length<8)return null;const E=kh(_),b=kh(v),M=kh(S),y=(E+b+M)/3,P=(E+b)/2-M;return{r:E,g:b,b:M,brightness:y,warmth:P,ready:y>125&&_.length>=14}}function DR(s,t,i){const r=G0(s,t,i);return!r||!r.ready?null:(wR(r),{gains:RR(),sample:r})}function kh(s){const t=[...s].sort((r,l)=>r-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function V0(s,t,i){if(!Wc())return!1;const[r,l,c]=Hc(s,t,i),f=Math.max(r,l,c),d=Math.min(r,l,c),p=f-d,m=(r+l+c)/3;if(m<165||p>52)return!1;const g=CR();if(!g)return m>200&&p<32;const[_,v,S]=Hc(g.r,g.g,g.b);return Math.hypot(r-_,l-v,c-S)<58}function k0(s,t,i){const[r,l,c]=Hc(s,t,i);return Math.max(r,l,c)-Math.min(r,l,c)<35?!1:r>150&&l>130&&c<r-25&&c<l-15}function UR(s,t,i){return Wc()?V0(s,t,i)?.85:k0(s,t,i)?-.25:0:0}const X0=["R","O","Y","G","B","W"],W0={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function LR(s,t,i){const r=Xh(s/255),l=Xh(t/255),c=Xh(i/255);return[r*.4124564+l*.3575761+c*.1804375,r*.2126729+l*.7151522+c*.072175,r*.0193339+l*.119192+c*.9503041]}function Xh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function NR(s,t,i){const f=Wh(s/.95047),d=Wh(t/1),p=Wh(i/1.08883);return[116*d-16,500*(f-d),200*(d-p)]}function Wh(s){return s>.008856?s**(1/3):7.787*s+16/116}function q0(s,t,i){const[r,l,c]=LR(s,t,i);return NR(r,l,c)}function Y0(s,t){const i=s[0]-t[0],r=s[1]-t[1],l=s[2]-t[2];return Math.sqrt(i*i+r*r+l*l)}function OR(s,t,i){const r=s/255,l=t/255,c=i/255,f=Math.max(r,l,c),d=Math.min(r,l,c),p=f-d;let m=0;p>0&&(f===r?m=(l-c)/p%6:f===l?m=(c-r)/p+2:m=(r-l)/p+4,m*=60,m<0&&(m+=360));const g=f===0?0:p/f*255,_=f*255;return[m,g,_]}function zR(s,t,i){const r=q0(s,t,i);let l="W",c=1/0;for(const f of X0){const d=Y0(r,W0[f]);d<c&&(c=d,l=f)}return l}function j0(s,t,i){const r=Math.max(s,t,i),l=Math.min(s,t,i);return r<38||r<70&&r-l<22}function Jv(s,t,i){const r=Math.max(s,t,i),l=Math.min(s,t,i),c=r-l,f=(s+t+i)/3;return r<125||c>42||i>s+22&&i>t+12||s>t+22&&s>i+22||t>s+18&&t>i+18?!1:f>145&&c<38}function PR(s,t,i,r){const l=q0(s,t,i);return 1/(1+Y0(l,W0[r]))}function qh(s,t,i){if([s,t,i]=Hc(s,t,i),j0(s,t,i))return zR(s,t,i);if(V0(s,t,i))return"W";const[r,l]=OR(s,t,i),c=l/255,f=Math.max(s,t,i),d=Math.min(s,t,i),p=f-d,m=(s+t+i)/3;if(Wc()&&(m>175&&p<45||m>155&&p<28)||Jv(s,t,i))return"W";const g=new Map;for(const S of X0)g.set(S,PR(s,t,i,S));i>=s+14&&i>=t+10&&i>75&&g.set("B",(g.get("B")??0)+.55),s>=t+12&&s>=i+12&&s>85&&g.set("R",(g.get("R")??0)+.45),t>=s+10&&t>=i+10&&t>70&&g.set("G",(g.get("G")??0)+.45),(k0(s,t,i)||s>95&&t>85&&i<Math.min(s,t)-18)&&g.set("Y",(g.get("Y")??0)+.55),s>t+8&&t>i+5&&s>110&&r>=8&&r<42&&g.set("O",(g.get("O")??0)+.45),c>.18&&(r>=38&&r<=72&&g.set("Y",(g.get("Y")??0)+.25),r>=10&&r<38&&g.set("O",(g.get("O")??0)+.2),(r<=12||r>=345)&&g.set("R",(g.get("R")??0)+.2),r>=78&&r<=155&&g.set("G",(g.get("G")??0)+.2),r>=165&&r<=255&&g.set("B",(g.get("B")??0)+.3)),f>175&&c<.22&&!Jv(s,t,i)&&g.set("W",(g.get("W")??0)-.35),g.set("Y",(g.get("Y")??0)-UR(s,t,i));let _="W",v=-1/0;for(const[S,E]of g)E>v&&(v=E,_=S);return _}function Yh(s){if(s.length===0)return 0;const t=[...s].sort((r,l)=>r-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function BR(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function FR(s,t,i){const r=Math.max(s,t,i)-Math.min(s,t,i);return r>52?.15:r>36?.55:1}function IR(s,t,i,r,l,c){const f=new Map,d=[],p=[],m=[],_=l-i>40?1:2;for(let b=Math.floor(r);b<Math.floor(c);b+=_)for(let M=Math.floor(i);M<Math.floor(l);M+=_){const y=(b*t+M)*4,P=s[y],U=s[y+1],w=s[y+2];if(j0(P,U,w))continue;d.push(P),p.push(U),m.push(w);const X=qh(P,U,w),B=FR(P,U,w);f.set(X,(f.get(X)??0)+B)}if(d.length===0){const b=Math.floor((i+l)/2),y=(Math.floor((r+c)/2)*t+b)*4;return qh(s[y],s[y+1],s[y+2])}const v=qh(Yh(d),Yh(p),Yh(m));f.set(v,(f.get(v)??0)+3);let S=v,E=0;for(const[b,M]of f)M>E&&(E=M,S=b);return S}function Z0(s,t,i){const l=s.getImageData(0,0,t,i).data,c=[],f=t/3,d=i/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=BR(p,m),_=m*f+f*g,v=m*f+f*(1-g),S=p*d+d*g,E=p*d+d*(1-g);c.push(IR(l,t,_,S,v,E))}return c}function Yo(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function HR(s){const t=Yo();for(const i of s)t[i]++;return t}function K0(s){return!!(s&&s.length===9)}function GR(s){if(!K0(s))return{valid:!1,colorCounts:Yo(),detectedCenter:null,uniqueColors:0};const t=HR(s),i=Object.values(t).filter(r=>r>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:i}}const VR={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},jo=["W","Y","R","O","G","B"],qc=9,kR={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function ip(s){const t=Yo();for(const i of s.values())for(const r of i)t[r]++;return t}function XR(s,t){return kR[s][t]??6}function WR(s){let t=null,i=0;for(const r of jo){const l=s[r]-qc;l>i&&(i=l,t=r)}return t}function qR(s){let t=null,i=0;for(const r of jo){const l=qc-s[r];l>i&&(i=l,t=r)}return t}function Q0(s){return jo.every(t=>s[t]===qc)}function YR(s){const t=new Map;for(const[r,l]of s){const c=[...l];c[4]=VR[r],t.set(r,c)}const i=[];for(const[r,l]of t)for(let c=0;c<9;c++)c!==4&&i.push({faceId:r,index:c,color:l[c]});for(let r=0;r<256;r++){const l=ip(t);if(Q0(l))break;const c=WR(l),f=qR(l);if(!c||!f)break;let d=null,p=1/0;for(const m of i){if(m.color!==c)continue;const g=XR(c,f);g<p&&(p=g,d=m)}if(!d){const m=i.find(g=>g.color===c);if(!m)break;d=m}d.color=f,t.get(d.faceId)[d.index]=f}return t}function jR(s){const t=ip(s),i=Yo();for(const r of jo)i[r]=t[r]-qc;return i}function ZR(s){return Q0(ip(s))}function jh(s){const t=jR(s),i={W:"흰",Y:"노",R:"빨",O:"주",G:"초",B:"파"},r=jo.filter(l=>t[l]!==0).map(l=>{const c=t[l];return`${i[l]}${c>0?`+${c}`:c}`});return r.length>0?`색 개수 오차: ${r.join(", ")}`:""}const Ss=256;function Pc(s,t){const i=document.createElement("canvas");i.width=Ss,i.height=Ss;const r=i.getContext("2d",{willReadFrequently:!0});return r?(r.drawImage(s,t.x,t.y,t.size,t.size,0,0,Ss,Ss),Z0(r,Ss,Ss)):[]}function KR(s,t){const i=s.getContext("2d",{willReadFrequently:!0});if(!i)return 0;const{x:r,y:l,size:c}=t,f=i.getImageData(Math.floor(r),Math.floor(l),Math.floor(c),Math.floor(c)).data;let d=0,p=0,m=0;for(let _=0;_<f.length;_+=32){const v=(f[_]+f[_+1]+f[_+2])/3;d+=v,p+=v*v,m++}if(m===0)return 0;const g=d/m;return p/m-g*g}function QR(s,t){if(s.length!==9)return!1;const i=new Set(s),r=s.filter(l=>l!=="W").length;return t<120?!1:i.size===1?!0:i.size===2&&r<=3&&t<300?!1:i.size>=3&&r>=2||i.size>=2&&r>=4&&t>220}const ui=.5,JR=[[-ui,ui,ui],[ui,ui,ui],[ui,-ui,ui],[-ui,-ui,ui]];function $R(s){if(s.length<4)return null;const t=[...s].sort((l,c)=>l.y-c.y),i=t.slice(0,2).sort((l,c)=>l.x-c.x),r=t.slice(2,4).sort((l,c)=>l.x-c.x);return[i[0],i[1],r[1],r[0]]}function Pd(s,t,i){try{return eC(s,t,i)}catch{return tC(s,t)}}function tC(s,t,i){const r={x:s.reduce((c,f)=>c+f.x,0)/4,y:s.reduce((c,f)=>c+f.y,0)/4},l=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return{corners:s,center:r,size:l,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[r.x-t/2,r.y,l*3],confidence:.65}}function eC(s,t,i){const r=window.cv,l=t*.9,c=t*.9,f=t/2,d=i/2,p=r.matFromArray(4,1,r.CV_32FC1,JR.flat()),m=r.matFromArray(4,1,r.CV_32FC1,[s[0].x,s[0].y,s[1].x,s[1].y,s[2].x,s[2].y,s[3].x,s[3].y]),g=r.matFromArray(3,3,r.CV_32FC1,[l,0,f,0,c,d,0,0,1]),_=r.matFromArray(4,1,r.CV_32FC1,[0,0,0,0]),v=new r.Mat,S=new r.Mat,E=new r.Mat;r.solvePnP(p,m,g,_,v,S),r.Rodrigues(v,E);const b=[];for(let U=0;U<9;U++)b.push(E.data32F[U]??E.floatAt(Math.floor(U/3),U%3));const M=[S.data32F[0]??S.floatAt(0,0),S.data32F[1]??S.floatAt(1,0),S.data32F[2]??S.floatAt(2,0)],y={x:s.reduce((U,w)=>U+w.x,0)/4,y:s.reduce((U,w)=>U+w.y,0)/4},P=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return p.delete(),m.delete(),g.delete(),_.delete(),v.delete(),S.delete(),E.delete(),{corners:s,center:y,size:P,rotationMatrix:b,translation:M,confidence:.8}}const Ui=256;function nC(s){const t=(l,c)=>Math.hypot(l.x-c.x,l.y-c.y),i=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],r=i.reduce((l,c)=>l+c,0)/4;return r<1?!1:i.every(l=>Math.abs(l-r)/r<.55)}function iC(s,t,i,r){const l=i*r;let c=null,f=0;for(let d=0;d<s.size();d++){const p=s.get(d),m=t.contourArea(p);if(m<l*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const _ of[.02,.035,.05,.08]){const v=new t.Mat;if(t.approxPolyDP(p,v,_*g,!0),v.rows===4){const S=[];for(let b=0;b<4;b++)S.push({x:v.data32S[b*2],y:v.data32S[b*2+1]});const E=$R(S);E&&nC(E)&&m>f&&(f=m,c=E)}v.delete()}p.delete()}return c}function $v(s,t,i){var r;if(!((r=window.cv)!=null&&r.Mat))return null;try{const l=window.cv,c=l.imread(s),f=new l.Mat,d=new l.Mat,p=new l.Mat,m=new l.Mat,g=new l.MatVector,_=new l.Mat;l.cvtColor(c,f,l.COLOR_RGBA2RGB),l.cvtColor(f,d,l.COLOR_RGB2GRAY),l.GaussianBlur(d,p,new l.Size(5,5),0),l.Canny(p,m,20,80),l.findContours(m,g,_,l.RETR_LIST,l.CHAIN_APPROX_SIMPLE);const v=iC(g,l,t,i);return c.delete(),f.delete(),d.delete(),p.delete(),m.delete(),g.delete(),_.delete(),v}catch{return null}}function J0(s,t,i){const r=Wa(t,i),l=Pc(s,r),c=KR(s,r);return QR(l,c)?{corners:ER(r),colors:l}:null}function $0(s,t,i){const r=Wa(t,i),l=document.createElement("canvas");l.width=r.size,l.height=r.size;const c=l.getContext("2d");if(c){c.drawImage(s,r.x,r.y,r.size,r.size,0,0,r.size,r.size);const p=$v(l,r.size,r.size);if(p)return TR(p,r.x,r.y)}const f=$v(s,t,i);if(f)return f;const d=J0(s,t,i);return(d==null?void 0:d.corners)??null}function t0(s,t,i){const r=$0(s,t,i);if(r){const c=rC(s,r),f=Pd(r,t,i);return{colors:c,pose:f}}const l=J0(s,t,i);if(l){const c=Pd(l.corners,t,i);return c.confidence=.7,{colors:l.colors,pose:c}}return null}function aC(s){const t=window.cv,i=t.imread(s),r=new t.Mat;return t.cvtColor(i,r,t.COLOR_RGBA2GRAY),i.delete(),r}function rC(s,t){var i;if(!((i=window.cv)!=null&&i.Mat)){const r=Wa(s.width,s.height);return Pc(s,r)}try{const r=window.cv,l=r.imread(s),c=new r.Mat;r.cvtColor(l,c,r.COLOR_RGBA2RGB);const f=r.matFromArray(4,1,r.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),d=r.matFromArray(4,1,r.CV_32FC1,[0,0,Ui,0,Ui,Ui,0,Ui]),p=r.getPerspectiveTransform(f,d),m=new r.Mat;r.warpPerspective(c,m,p,new r.Size(Ui,Ui));const g=document.createElement("canvas");g.width=Ui,g.height=Ui,r.imshow(g,m);const _=g.getContext("2d",{willReadFrequently:!0}),v=_?Z0(_,Ui,Ui):[];return l.delete(),c.delete(),f.delete(),d.delete(),p.delete(),m.delete(),v.length===9?v:Pc(s,Wa(s.width,s.height))}catch{return Pc(s,Wa(s.width,s.height))}}const e0=45;class sC{constructor(){je(this,"prevGray",null);je(this,"trackedCorners",null);je(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const r=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const l=r.matFromArray(4,1,r.CV_32FC2,oC(this.trackedCorners)),c=new r.Mat,f=new r.Mat,d=new r.Mat;r.calcOpticalFlowPyrLK(this.prevGray,t,l,c,f,d);const p=[];let m=0;for(let _=0;_<4;_++){const v=f.data[_]===1,S=c.data32F[_*2],E=c.data32F[_*2+1];v&&Number.isFinite(S)&&Number.isFinite(E)?(p.push({x:S,y:E}),m++):p.push(this.trackedCorners[_])}return l.delete(),c.delete(),f.delete(),d.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>e0?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames++,this.lostFrames>e0?(this.reset(),null):this.trackedCorners)}}function oC(s){return s.flatMap(t=>[t.x,t.y])}const lC=.65,cC=4;class uC{constructor(){je(this,"state",{lastMatrix:Kv(),stableCount:0,pendingMove:null});je(this,"initialized",!1)}reset(){this.state={lastMatrix:Kv(),stableCount:0,pendingMove:null},this.initialized=!1}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,null;const i=vR(fC(t),this.state.lastMatrix),r=dC(i);if(r)if(this.state.pendingMove===r){if(this.state.stableCount++,this.state.stableCount>=cC)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,r}else this.state.pendingMove=r,this.state.stableCount=1;else this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=hC(this.state.lastMatrix,t,.15);return null}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.initialized=!0}}function fC(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function hC(s,t,i){return s.map((r,l)=>r*(1-i)+t[l]*i)}function dC(s){const t=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];let i=null,r=lC;for(const l of t){const c=B0(l);let f=Z1[c];(c==="L"||c==="D"||c==="B")&&(f=[-f[0],-f[1],-f[2]]);const d=xR(f,P0(l)),p=pC(s,d);p>r&&(r=p,i=l)}return i}function pC(s,t){let i=0;for(let r=0;r<9;r++)i+=1-Math.abs(s[r]-t[r])/2;return i/9}class mC{constructor(){je(this,"rotationDetector",new uC);je(this,"flowTracker",new sC);je(this,"trackingEnabled",!1);je(this,"processCanvas");je(this,"processCtx");je(this,"lastColors",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.lastColors=null}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const i=t.videoWidth,r=t.videoHeight;return!i||!r?!1:(this.processCanvas.width=i,this.processCanvas.height=r,this.processCtx.drawImage(t,0,0,i,r),!0)}getWhiteBalanceSample(t,i){return G0(this.processCanvas,t,i)}process(t){const i=t.videoWidth,r=t.videoHeight;if(!i||!r)return{pose:null,detectedFace:null,rotationMove:null};this.processCanvas.width=i,this.processCanvas.height=r,this.processCtx.drawImage(t,0,0,i,r);try{return this.trackingEnabled?this.processWithTracking(i,r):this.processDetectionOnly(i,r)}catch{return{pose:null,detectedFace:null,rotationMove:null}}}processDetectionOnly(t,i){const r=t0(this.processCanvas,t,i);return r?(this.lastColors=r.colors,{pose:r.pose,detectedFace:r,rotationMove:null}):{pose:null,detectedFace:null,rotationMove:null}}processWithTracking(t,i){const r=$0(this.processCanvas,t,i),l=aC(this.processCanvas),c=this.flowTracker.update(l,r);if(l.delete(),!c)return{pose:null,detectedFace:null,rotationMove:null};let f=this.lastColors;if(r){const g=t0(this.processCanvas,t,i);g&&(f=g.colors,this.lastColors=f)}const d=Pd(c,t,i);d.confidence=r?.85:Math.max(.35,.85-this.flowTracker.getLostFrames()*.01);const p=f?{colors:f,pose:d}:null,m=this.rotationDetector.update(d.rotationMatrix);return{pose:d,detectedFace:p,rotationMove:m}}readStableFace(t,i=5){const r=[];let l=null;for(let f=0;f<i;f++){const d=this.process(t);if(!d.detectedFace)return null;r.push(d.detectedFace.colors),l=d.detectedFace.pose}return l?{colors:gC(r),pose:l}:null}}function gC(s){const t=[];for(let i=0;i<9;i++){const r=new Map;for(const f of s){const d=f[i];r.set(d,(r.get(d)??0)+1)}let l="W",c=0;for(const[f,d]of r)d>c&&(c=d,l=f);t.push(l)}return t}const _C={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},Rc=16,vC=2,xC=10;function yC(s,t){let i=0;for(let r=0;r<9;r++)s[r]!==t[r]&&i++;return i<=vC}function SC(s){const t=[];for(let i=0;i<9;i++){const r=new Map;for(const f of s){const d=f[i];r.set(d,(r.get(d)??0)+1)}let l="W",c=0;for(const[f,d]of r)d>c&&(c=d,l=f);t.push(l)}return t}function MC(s){const t=new Map;for(const l of s){const c=l[4];t.set(c,(t.get(c)??0)+1)}let i="W",r=0;for(const[l,c]of t)c>r&&(r=c,i=l);return F0(i)}function EC(s,t){const i=[...s];return i[4]=_C[t],i}class TC{constructor(){je(this,"faces",new Map);je(this,"readings",new Map);je(this,"stableCount",0);je(this,"lastFaceId",null);je(this,"lastColors",null)}reset(){this.faces.clear(),this.readings.clear(),this.stableCount=0,this.lastFaceId=null,this.lastColors=null}update(t){const i={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:Rc,isComplete:this.faces.size===6,newlyCaptured:null};if(!t||t.length!==9)return this.stableCount=0,this.lastFaceId=null,this.lastColors=null,i;const r=F0(t[4]);if(!r)return this.stableCount=0,this.lastFaceId=null,this.lastColors=null,{...i,currentFace:null};r===this.lastFaceId&&this.lastColors&&yC(t,this.lastColors)?this.stableCount++:(this.lastFaceId=r,this.lastColors=[...t],this.stableCount=1);let l=null;if(this.stableCount>=Rc){const c=[...this.readings.get(r)??[],[...t]];c.length>xC&&c.shift(),this.readings.set(r,c);const f=MC(c)??r,d=EC(SC(c),f),p=!this.faces.has(f);this.faces.set(f,d),p&&(l=f),this.stableCount=0}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:r,stableProgress:Math.min(this.stableCount,Rc),stableTarget:Rc,isComplete:this.faces.size===6,newlyCaptured:l}}}const bC="https://docs.opencv.org/4.9.0/opencv.js";let Cc=null;function AC(){return Cc||(Cc=new Promise((s,t)=>{var r;if((r=window.cv)!=null&&r.Mat){s();return}const i=document.createElement("script");i.src=bC,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},i.onerror=()=>t(new Error("OpenCV.js 로드에 실패했습니다.")),document.head.appendChild(i)}),Cc)}const RC=["U","R","F","D","L","B"];function CC(s){if(s.length!==54)return"큐브 색상 데이터가 부족합니다. 6면을 다시 스캔해 주세요.";const t=new Map;for(const i of s)t.set(i,(t.get(i)??0)+1);for(const i of RC)if(t.get(i)!==9)return"색상 인식이 맞지 않습니다. 조명을 밝게 하고 6면을 다시 스캔해 주세요";return null}const zo={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:Yo(),cellColors:[]},wC={phase:"loading",error:null,knownFaces:[],currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:zo,whiteBalanceSample:null,whiteBalanceReady:!1,whiteBalanceError:null,whiteBalanceCalibrated:!1};function DC(s){const[t,i]=Yt.useState(wC),r=Yt.useRef(null),l=Yt.useRef(null),c=Yt.useRef(new TC),f=Yt.useRef(""),d=Yt.useRef(0),p=Yt.useRef(0),m=Yt.useRef("loading"),g=Yt.useRef(null),_=Yt.useRef(0),v=Yt.useRef(null),S=Yt.useRef(null),E=Yt.useRef(!1),b=Yt.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),M=Yt.useCallback((it,L)=>{var G,dt;b();const W=++p.current;(G=l.current)==null||G.postMessage({type:"solve",facelet:it,id:W}),(dt=r.current)==null||dt.syncPose(L),v.current=setTimeout(()=>{i(St=>St.phase!=="computing"?St:{...St,phase:"error",error:"해법 계산 시간이 초과되었습니다. 다시 시도해 주세요."})},2e4)},[b]);Yt.useEffect(()=>{m.current=t.phase,g.current=t.solution},[t.phase,t.solution]);const y=Yt.useCallback(it=>{var W;const L=++p.current;(W=l.current)==null||W.postMessage({type:"apply",move:it,facelet:f.current,id:L}),i(G=>{if(!G.solution)return G;const dt=G.solution.moves[G.solution.currentIndex];if(it!==dt)return G;const St=G.solution.currentIndex+1;return St>=G.solution.moves.length?{...G,phase:"solved",solution:{...G.solution,currentIndex:St}}:{...G,solution:{...G.solution,currentIndex:St}}})},[]),P=Yt.useCallback((it,L,W,G,dt)=>{const{detectedCenter:St,colorCounts:N}=GR(L),J=K0(L);let pt="searching";return!it||!J?pt="searching":dt?pt="captured":W>0&&W<G?pt="stabilizing":pt="detected",{status:pt,stableProgress:W,stableTarget:G,detectedCenter:St,colorCounts:N,cellColors:J&&L?[...L]:[]}},[]),U=Yt.useCallback(()=>{var it;c.current.reset(),E.current=!1,S.current=null,i(L=>({...L,phase:"scanReady",error:null,knownFaces:[],currentVisibleFace:null,liveScanProgress:0,detectionFeedback:zo})),(it=r.current)==null||it.disableTracking()},[]),w=Yt.useCallback(()=>{var it;c.current.reset(),E.current=!1,S.current=null,i(L=>({...L,phase:"liveScan",error:null,knownFaces:[],currentVisibleFace:null,liveScanProgress:0,detectionFeedback:zo})),(it=r.current)==null||it.disableTracking()},[]),X=Yt.useCallback(async()=>{try{await AC(),r.current=new mC;const it=yR();l.current=it,it.onmessage=L=>{var G;const W=L.data;W.type==="ready"?i(dt=>({...dt,solverReady:!0})):W.type==="solution"?(b(),_.current=Date.now(),i(dt=>({...dt,phase:W.moves.length===0?"solved":"solving",solution:{moves:W.moves,currentIndex:0},detectionFeedback:zo})),W.moves.length>0&&((G=r.current)==null||G.enableTracking())):W.type==="facelet"?f.current=W.facelet:W.type==="error"&&(b(),i(dt=>({...dt,phase:"error",error:W.message.includes("Invalid")||W.message.includes("invalid")?"인식된 큐브 상태가 올바르지 않습니다. 큐브를 돌려 다시 스캔해 주세요.":W.message})))},it.postMessage({type:"init"}),Qv(),c.current.reset(),i(L=>({...L,phase:"whiteBalance",whiteBalanceCalibrated:!1,whiteBalanceSample:null,whiteBalanceReady:!1,whiteBalanceError:null}))}catch(it){i(L=>({...L,phase:"error",error:it instanceof Error?it.message:"초기화 실패"}))}},[b]);Yt.useEffect(()=>(X(),()=>{var it,L;cancelAnimationFrame(d.current),b(),(it=l.current)==null||it.terminate(),(L=r.current)==null||L.disableTracking()}),[X,b]);const B=Yt.useCallback(()=>{const it=s.current,L=r.current;if(!it||!L||it.readyState<2||!L.captureFrame(it))return;const W=L.getFrameCanvas(),G=DR(W,it.videoWidth,it.videoHeight);if(!G){i(dt=>({...dt,whiteBalanceError:"흰색 영역을 찾지 못했습니다. 흰 스티커 면을 가이드 안에 밝게 맞춰 주세요."}));return}U(),i(dt=>({...dt,whiteBalanceSample:G.sample,whiteBalanceReady:!0,whiteBalanceError:null,whiteBalanceCalibrated:!0}))},[s,U]),z=Yt.useCallback(()=>{w()},[w]),k=Yt.useCallback(()=>{var dt,St;const it=s.current,L=r.current;if(!it||!L||it.readyState<2)return;const W=L.process(it),G=m.current;if(G==="whiteBalance"){L.captureFrame(it);const N=L.getWhiteBalanceSample(it.videoWidth,it.videoHeight);i(J=>({...J,whiteBalanceSample:N,whiteBalanceReady:(N==null?void 0:N.ready)??!1,whiteBalanceError:null}));return}if(G==="scanReady"){const N=((dt=W.detectedFace)==null?void 0:dt.colors)??null,J=!!W.pose;i(pt=>({...pt,detectionFeedback:P(J,N,0,0,!1)}));return}if(G==="liveScan"){if(!Wc()){i(ut=>({...ut,phase:"whiteBalance",whiteBalanceCalibrated:!1}));return}const N=((St=W.detectedFace)==null?void 0:St.colors)??null,J=!!W.pose;W.pose&&(S.current=W.pose);const pt=c.current.update(N),Q=!!pt.newlyCaptured;if(pt.isComplete&&S.current&&!E.current){E.current=!0;try{const ut=YR(pt.faces);if(!ZR(ut)){const Ht=jh(pt.faces),Wt=jh(ut),De=Ht?`색상 인식이 맞지 않습니다. (${Ht}) 조명을 밝게 하고 흰 면 기준 보정 후 다시 스캔해 주세요.`:Wt?`색상 인식이 맞지 않습니다. (${Wt}) 조명을 밝게 하고 다시 스캔해 주세요.`:"색상 인식이 맞지 않습니다. 6면이 모두 다른 면인지 확인하고 다시 스캔해 주세요.";i(Ue=>({...Ue,phase:"error",error:De}));return}const Mt=gR(ut),yt=CC(Mt);if(yt){const Ht=jh(ut),Wt=Ht?`${yt} (${Ht})`:yt;i(De=>({...De,phase:"error",error:Wt}));return}f.current=Mt;const Pt=S.current;i(Ht=>({...Ht,phase:"computing",knownFaces:pt.knownFaces,liveScanProgress:1,currentPose:Pt})),queueMicrotask(()=>M(Mt,Pt))}catch(ut){i(Mt=>({...Mt,phase:"error",error:ut instanceof Error?ut.message:"큐브 상태 생성 실패"}))}return}i(ut=>({...ut,currentPose:W.pose,knownFaces:pt.knownFaces,currentVisibleFace:pt.currentFace,liveScanProgress:pt.knownFaces.length/6,detectionFeedback:P(J,N,pt.stableProgress,pt.stableTarget,Q)}));return}if(i(N=>({...N,currentPose:W.pose})),G==="solving"&&W.rotationMove){if(Date.now()-_.current<3e3)return;const N=g.current;if(N){const J=N.moves[N.currentIndex];W.rotationMove===J&&(y(W.rotationMove),W.pose&&L.syncPose(W.pose))}}},[s,y,P,M]),D=Yt.useCallback(()=>{k(),d.current=requestAnimationFrame(D)},[k]),C=Yt.useCallback(()=>{cancelAnimationFrame(d.current),d.current=requestAnimationFrame(D)},[D]),H=Yt.useCallback(()=>{cancelAnimationFrame(d.current)},[]),nt=Yt.useCallback(()=>{b(),U(),i(it=>({...it,solution:null}))},[b,U]),et=Yt.useCallback(()=>{var it;b(),E.current=!1,c.current.reset(),S.current=null,Qv(),(it=r.current)==null||it.disableTracking(),i(L=>({...L,phase:"whiteBalance",error:null,solution:null,knownFaces:[],currentVisibleFace:null,liveScanProgress:0,whiteBalanceCalibrated:!1,whiteBalanceSample:null,whiteBalanceReady:!1,whiteBalanceError:null,detectionFeedback:zo}))},[b]),ct=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:ct,confirmWhiteBalance:B,startLiveScan:z,retryLiveScan:nt,retryFromWhiteBalance:et,startTracking:C,stopTracking:H}}function UC(){const s=Yt.useRef(null),t=Yt.useRef(null),[i,r]=Yt.useState({stream:null,error:null,isReady:!1}),l=Yt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Yt.useCallback(p=>{s.current=p,p&&l(p)},[l]),f=Yt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await l(m),r({stream:p,error:null,isReady:!0})}catch(p){t.current=null,r({stream:null,error:p instanceof Error?p.message:"카메라 접근 실패",isReady:!1})}},[l]),d=Yt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),r({stream:null,error:null,isReady:!1})},[]);return Yt.useEffect(()=>()=>d(),[d]),{videoRef:s,setVideoRef:c,state:i,start:f,stop:d}}function tx(s,t,i,r){const l=Math.max(i/s,r/t),c=s*l,f=t*l;return{scale:l,offsetX:(i-c)/2,offsetY:(r-f)/2}}function LC(s,t,i,r){if(!s||!t||!i||!r)return null;const l=Wa(s,t),{scale:c,offsetX:f,offsetY:d}=tx(s,t,i,r);return{left:f+l.x*c,top:d+l.y*c,width:l.size*c,height:l.size*c}}function NC(s,t,i,r){if(!s||!t||!i||!r)return null;const l=Wa(s,t),c=I0(l),{scale:f,offsetX:d,offsetY:p}=tx(s,t,i,r);return{left:d+c.x*f,top:p+c.y*f,width:c.size*f,height:c.size*f}}function OC(){var C,H;const{videoRef:s,setVideoRef:t,state:i,start:r}=UC(),{state:l,currentMove:c,confirmWhiteBalance:f,startLiveScan:d,retryLiveScan:p,retryFromWhiteBalance:m,startTracking:g,stopTracking:_}=DC(s),v=Yt.useRef(null),[S,E]=Yt.useState({width:0,height:0}),[b,M]=Yt.useState({width:0,height:0});Yt.useEffect(()=>{r()},[r]),Yt.useEffect(()=>{if(i.isReady&&l.phase!=="loading")return g(),_},[i.isReady,l.phase,g,_]);const y=Yt.useCallback((nt,et)=>{E({width:nt,height:et})},[]);Yt.useEffect(()=>{const nt=v.current;if(!nt)return;const et=()=>{M({width:nt.clientWidth,height:nt.clientHeight})};et();const ct=new ResizeObserver(et);return ct.observe(nt),()=>ct.disconnect()},[]);const P=Yt.useMemo(()=>LC(S.width,S.height,b.width,b.height),[S.width,S.height,b.width,b.height]),U=Yt.useMemo(()=>NC(S.width,S.height,b.width,b.height),[S.width,S.height,b.width,b.height]),w=l.phase==="loading"||!i.isReady,X=!!(l.error||i.error),B=l.phase==="computing",z=((C=l.solution)==null?void 0:C.moves.length)??0,k=(((H=l.solution)==null?void 0:H.currentIndex)??0)+1,D=l.phase==="solving";return At.jsx("main",{className:"app",children:At.jsxs("div",{className:"viewport",ref:v,children:[At.jsx(nR,{setVideoRef:t,onDimensions:y}),!w&&!X&&At.jsxs(At.Fragment,{children:[At.jsx(eR,{pose:l.currentPose,move:c,width:S.width,height:S.height,active:D}),At.jsx(mR,{visible:l.phase==="whiteBalance",sample:l.whiteBalanceSample,ready:l.whiteBalanceReady,error:l.whiteBalanceError,onConfirm:f,guideRect:P,spotRect:U}),At.jsx(fR,{visible:l.phase==="scanReady",feedback:l.detectionFeedback,guideRect:P,onStart:d}),At.jsx(oR,{feedback:l.detectionFeedback,visible:l.phase==="liveScan",guideRect:P}),At.jsx(hR,{phase:l.phase,currentStep:k,totalSteps:z}),At.jsx(uR,{phase:l.phase,knownFaces:l.knownFaces,currentFace:l.currentVisibleFace,progress:l.liveScanProgress}),l.phase==="solving"&&c&&At.jsxs("div",{className:"solving-banner",children:[At.jsx("p",{className:"solving-move",children:c}),At.jsx("p",{className:"solving-hint",children:"화살표 방향으로 면을 돌리세요"})]}),l.phase==="solved"&&At.jsx("div",{className:"solved-banner",children:At.jsx("p",{children:"완료!"})})]}),B&&At.jsx(Zv,{overlay:!0,message:"6면 인식 완료 — 해법 계산 중..."}),w&&At.jsx(Zv,{overlay:!0,message:l.phase==="loading"?"AI 엔진 로딩 중...":"카메라 연결 중..."}),X&&!w&&At.jsxs("div",{className:"error-screen overlay",children:[At.jsx("p",{children:l.error??i.error}),At.jsxs("div",{className:"error-actions",children:[l.whiteBalanceCalibrated&&At.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"다시 스캔"}),At.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"흰색 기준부터 다시"})]})]})]})})}SS({immediate:!0});_S.createRoot(document.getElementById("root")).render(At.jsx(Yt.StrictMode,{children:At.jsx(OC,{})}));
