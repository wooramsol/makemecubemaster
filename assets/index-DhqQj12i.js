var fM=Object.defineProperty;var hM=(s,t,n)=>t in s?fM(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var Ee=(s,t,n)=>hM(s,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function dM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function pM(){if(dv)return No;dv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return No.Fragment=t,No.jsx=n,No.jsxs=n,No}var pv;function mM(){return pv||(pv=1,Mh.exports=pM()),Mh.exports}var Ht=mM(),Eh={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function gM(){if(mv)return pe;mv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(N,at,et){this.props=N,this.context=at,this.refs=M,this.updater=et||b}x.prototype.isReactComponent={},x.prototype.setState=function(N,at){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,at,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=x.prototype;function D(N,at,et){this.props=N,this.context=at,this.refs=M,this.updater=et||b}var w=D.prototype=new O;w.constructor=D,T(w,x.prototype),w.isPureReactComponent=!0;var q=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function L(N,at,et){var z=et.ref;return{$$typeof:s,type:N,key:at,ref:z!==void 0?z:null,props:et}}function C(N,at){return L(N.type,at,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ct(N){var at={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(et){return at[et]})}var ot=/\/+/g;function _t(N,at){return typeof N=="object"&&N!==null&&N.key!=null?ct(""+N.key):at.toString(36)}function bt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(at){N.status==="pending"&&(N.status="fulfilled",N.value=at)},function(at){N.status==="pending"&&(N.status="rejected",N.reason=at)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,at,et,z,F){var Y=typeof N;(Y==="undefined"||Y==="boolean")&&(N=null);var W=!1;if(N===null)W=!0;else switch(Y){case"bigint":case"string":case"number":W=!0;break;case"object":switch(N.$$typeof){case s:case t:W=!0;break;case g:return W=N._init,B(W(N._payload),at,et,z,F)}}if(W)return F=F(N),W=z===""?"."+_t(N,0):z,q(F)?(et="",W!=null&&(et=W.replace(ot,"$&/")+"/"),B(F,at,et,"",function(Ft){return Ft})):F!=null&&(k(F)&&(F=C(F,et+(F.key==null||N&&N.key===F.key?"":(""+F.key).replace(ot,"$&/")+"/")+W)),at.push(F)),1;W=0;var vt=z===""?".":z+":";if(q(N))for(var wt=0;wt<N.length;wt++)z=N[wt],Y=vt+_t(z,wt),W+=B(z,at,et,Y,F);else if(wt=y(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(z=N.next()).done;)z=z.value,Y=vt+_t(z,wt++),W+=B(z,at,et,Y,F);else if(Y==="object"){if(typeof N.then=="function")return B(bt(N),at,et,z,F);throw at=String(N),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return W}function rt(N,at,et){if(N==null)return N;var z=[],F=0;return B(N,z,"","",function(Y){return at.call(et,Y,F++)}),z}function K(N){if(N._status===-1){var at=N._result;at=at(),at.then(function(et){(N._status===0||N._status===-1)&&(N._status=1,N._result=et)},function(et){(N._status===0||N._status===-1)&&(N._status=2,N._result=et)}),N._status===-1&&(N._status=0,N._result=at)}if(N._status===1)return N._result.default;throw N._result}var Rt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Nt={map:rt,forEach:function(N,at,et){rt(N,function(){at.apply(this,arguments)},et)},count:function(N){var at=0;return rt(N,function(){at++}),at},toArray:function(N){return rt(N,function(at){return at})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return pe.Activity=v,pe.Children=Nt,pe.Component=x,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=D,pe.StrictMode=a,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,pe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},pe.cache=function(N){return function(){return N.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(N,at,et){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var z=T({},N.props),F=N.key;if(at!=null)for(Y in at.key!==void 0&&(F=""+at.key),at)!X.call(at,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&at.ref===void 0||(z[Y]=at[Y]);var Y=arguments.length-2;if(Y===1)z.children=et;else if(1<Y){for(var W=Array(Y),vt=0;vt<Y;vt++)W[vt]=arguments[vt+2];z.children=W}return L(N.type,F,z)},pe.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},pe.createElement=function(N,at,et){var z,F={},Y=null;if(at!=null)for(z in at.key!==void 0&&(Y=""+at.key),at)X.call(at,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(F[z]=at[z]);var W=arguments.length-2;if(W===1)F.children=et;else if(1<W){for(var vt=Array(W),wt=0;wt<W;wt++)vt[wt]=arguments[wt+2];F.children=vt}if(N&&N.defaultProps)for(z in W=N.defaultProps,W)F[z]===void 0&&(F[z]=W[z]);return L(N,Y,F)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(N){return{$$typeof:h,render:N}},pe.isValidElement=k,pe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},pe.memo=function(N,at){return{$$typeof:m,type:N,compare:at===void 0?null:at}},pe.startTransition=function(N){var at=P.T,et={};P.T=et;try{var z=N(),F=P.S;F!==null&&F(et,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(I,Rt)}catch(Y){Rt(Y)}finally{at!==null&&et.types!==null&&(at.types=et.types),P.T=at}},pe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},pe.use=function(N){return P.H.use(N)},pe.useActionState=function(N,at,et){return P.H.useActionState(N,at,et)},pe.useCallback=function(N,at){return P.H.useCallback(N,at)},pe.useContext=function(N){return P.H.useContext(N)},pe.useDebugValue=function(){},pe.useDeferredValue=function(N,at){return P.H.useDeferredValue(N,at)},pe.useEffect=function(N,at){return P.H.useEffect(N,at)},pe.useEffectEvent=function(N){return P.H.useEffectEvent(N)},pe.useId=function(){return P.H.useId()},pe.useImperativeHandle=function(N,at,et){return P.H.useImperativeHandle(N,at,et)},pe.useInsertionEffect=function(N,at){return P.H.useInsertionEffect(N,at)},pe.useLayoutEffect=function(N,at){return P.H.useLayoutEffect(N,at)},pe.useMemo=function(N,at){return P.H.useMemo(N,at)},pe.useOptimistic=function(N,at){return P.H.useOptimistic(N,at)},pe.useReducer=function(N,at,et){return P.H.useReducer(N,at,et)},pe.useRef=function(N){return P.H.useRef(N)},pe.useState=function(N){return P.H.useState(N)},pe.useSyncExternalStore=function(N,at,et){return P.H.useSyncExternalStore(N,at,et)},pe.useTransition=function(){return P.H.useTransition()},pe.version="19.2.7",pe}var gv;function dp(){return gv||(gv=1,Eh.exports=gM()),Eh.exports}var Jt=dp(),bh={exports:{}},Oo={},Th={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function vM(){return vv||(vv=1,(function(s){function t(B,rt){var K=B.length;B.push(rt);t:for(;0<K;){var Rt=K-1>>>1,Nt=B[Rt];if(0<o(Nt,rt))B[Rt]=rt,B[K]=Nt,K=Rt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var rt=B[0],K=B.pop();if(K!==rt){B[0]=K;t:for(var Rt=0,Nt=B.length,N=Nt>>>1;Rt<N;){var at=2*(Rt+1)-1,et=B[at],z=at+1,F=B[z];if(0>o(et,K))z<Nt&&0>o(F,et)?(B[Rt]=F,B[z]=K,Rt=z):(B[Rt]=et,B[at]=K,Rt=at);else if(z<Nt&&0>o(F,K))B[Rt]=F,B[z]=K,Rt=z;else break t}}return rt}function o(B,rt){var K=B.sortIndex-rt.sortIndex;return K!==0?K:B.id-rt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],m=[],g=1,v=null,_=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var rt=n(m);rt!==null;){if(rt.callback===null)a(m);else if(rt.startTime<=B)a(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=n(m)}}function q(B){if(T=!1,w(B),!b)if(n(p)!==null)b=!0,I||(I=!0,ct());else{var rt=n(m);rt!==null&&bt(q,rt.startTime-B)}}var I=!1,P=-1,X=5,L=-1;function C(){return M?!0:!(s.unstable_now()-L<X)}function k(){if(M=!1,I){var B=s.unstable_now();L=B;var rt=!0;try{t:{b=!1,T&&(T=!1,O(P),P=-1),y=!0;var K=_;try{e:{for(w(B),v=n(p);v!==null&&!(v.expirationTime>B&&C());){var Rt=v.callback;if(typeof Rt=="function"){v.callback=null,_=v.priorityLevel;var Nt=Rt(v.expirationTime<=B);if(B=s.unstable_now(),typeof Nt=="function"){v.callback=Nt,w(B),rt=!0;break e}v===n(p)&&a(p),w(B)}else a(p);v=n(p)}if(v!==null)rt=!0;else{var N=n(m);N!==null&&bt(q,N.startTime-B),rt=!1}}break t}finally{v=null,_=K,y=!1}rt=void 0}}finally{rt?ct():I=!1}}}var ct;if(typeof D=="function")ct=function(){D(k)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,_t=ot.port2;ot.port1.onmessage=k,ct=function(){_t.postMessage(null)}}else ct=function(){x(k,0)};function bt(B,rt){P=x(function(){B(s.unstable_now())},rt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var rt=3;break;default:rt=_}var K=_;_=rt;try{return B()}finally{_=K}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(B,rt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=_;_=B;try{return rt()}finally{_=K}},s.unstable_scheduleCallback=function(B,rt,K){var Rt=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Rt+K:Rt):K=Rt,B){case 1:var Nt=-1;break;case 2:Nt=250;break;case 5:Nt=1073741823;break;case 4:Nt=1e4;break;default:Nt=5e3}return Nt=K+Nt,B={id:g++,callback:rt,priorityLevel:B,startTime:K,expirationTime:Nt,sortIndex:-1},K>Rt?(B.sortIndex=K,t(m,B),n(p)===null&&B===n(m)&&(T?(O(P),P=-1):T=!0,bt(q,K-Rt))):(B.sortIndex=Nt,t(p,B),b||y||(b=!0,I||(I=!0,ct()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var rt=_;return function(){var K=_;_=rt;try{return B.apply(this,arguments)}finally{_=K}}}})(Ah)),Ah}var _v;function _M(){return _v||(_v=1,Th.exports=vM()),Th.exports}var Rh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function yM(){if(yv)return Un;yv=1;var s=dp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Un.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},Un.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Un.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Un.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:y}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Un.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Un.requestFormReset=function(p){a.d.r(p)},Un.unstable_batchedUpdates=function(p,m){return p(m)},Un.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Un.useFormStatus=function(){return u.H.useHostTransitionStatus()},Un.version="19.2.7",Un}var xv;function xM(){if(xv)return Rh.exports;xv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Rh.exports=yM(),Rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function SM(){if(Sv)return Oo;Sv=1;var s=_M(),t=dp(),n=xM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return p(f),e;if(d===l)return p(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var S=!1,R=f.child;R;){if(R===r){S=!0,r=f,l=d;break}if(R===l){S=!0,l=f,r=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===r){S=!0,r=d,l=f;break}if(R===l){S=!0,l=d,r=f;break}R=R.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:_t(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return _t(e(i))}catch{}}return null}var bt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Rt=[],Nt=-1;function N(e){return{current:e}}function at(e){0>Nt||(e.current=Rt[Nt],Rt[Nt]=null,Nt--)}function et(e,i){Nt++,Rt[Nt]=e.current,e.current=i}var z=N(null),F=N(null),Y=N(null),W=N(null);function vt(e,i){switch(et(Y,i),et(F,e),et(z,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?P0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=P0(i),e=z0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(z),et(z,e)}function wt(){at(z),at(F),at(Y)}function Ft(e){e.memoizedState!==null&&et(W,e);var i=z.current,r=z0(i,e.type);i!==r&&(et(F,e),et(z,r))}function Ot(e){F.current===e&&(at(z),at(F)),W.current===e&&(at(W),wo._currentValue=K)}var It,Vt;function H(e){if(It===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);It=i&&i[1]||"",Vt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+Vt}var xe=!1;function ee(e,i){if(!e||xe)return"";xe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ut=function(){throw Error()};if(Object.defineProperty(Ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ut,[])}catch(Mt){var mt=Mt}Reflect.construct(e,[],Ut)}else{try{Ut.call()}catch(Mt){mt=Mt}e.call(Ut.prototype)}}else{try{throw Error()}catch(Mt){mt=Mt}(Ut=e())&&typeof Ut.catch=="function"&&Ut.catch(function(){})}}catch(Mt){if(Mt&&mt&&typeof Mt.stack=="string")return[Mt.stack,mt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var V=S.split(`
`),ft=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ft.length&&!ft[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ft.length)for(l=V.length-1,f=ft.length-1;1<=l&&0<=f&&V[l]!==ft[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ft[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ft[f]){var At=`
`+V[l].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=l&&0<=f);break}}}finally{xe=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?H(r):""}function ht(e,i){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==i&&i!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return H("Activity");default:return""}}function lt(e){try{var i="",r=null;do i+=ht(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Tt=Object.prototype.hasOwnProperty,pt=s.unstable_scheduleCallback,A=s.unstable_cancelCallback,E=s.unstable_shouldYield,G=s.unstable_requestPaint,J=s.unstable_now,dt=s.unstable_getCurrentPriorityLevel,yt=s.unstable_ImmediatePriority,Lt=s.unstable_UserBlockingPriority,j=s.unstable_NormalPriority,st=s.unstable_LowPriority,Pt=s.unstable_IdlePriority,gt=s.log,zt=s.unstable_setDisableYieldValue,Wt=null,Xt=null;function kt(e){if(typeof gt=="function"&&zt(e),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(Wt,e)}catch{}}var ne=Math.clz32?Math.clz32:Q,ce=Math.log,ge=Math.LN2;function Q(e){return e>>>=0,e===0?32:31-(ce(e)/ge|0)|0}var jt=256,Et=262144,Dt=4194304;function Yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=Yt(l):(S&=R,S!==0?f=Yt(S):r||(r=R&~e,r!==0&&(f=Yt(r))))):(R=l&~d,R!==0?f=Yt(R):S!==0?f=Yt(S):r||(r=l&~e,r!==0&&(f=Yt(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function oe(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function We(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Te(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function $e(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mn(e,i,r,l,f,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,ft=e.hiddenUpdates;for(r=S&~r;0<r;){var At=31-ne(r),Ut=1<<At;R[At]=0,V[At]=-1;var mt=ft[At];if(mt!==null)for(ft[At]=null,At=0;At<mt.length;At++){var Mt=mt[At];Mt!==null&&(Mt.lane&=-536870913)}r&=~Ut}l!==0&&xi(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function xi(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ne(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function ln(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-ne(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function wn(e,i){var r=i&-i;return r=(r&42)!==0?1:Jn(r),(r&(e.suspendedLanes|i))!==0?0:r}function Jn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=rt.p;return e!==0?e:(e=window.event,e===void 0?32:sv(e.type))}function $a(e,i){var r=rt.p;try{return rt.p=e,i()}finally{rt.p=r}}var Si=Math.random().toString(36).slice(2),tn="__reactFiber$"+Si,En="__reactProps$"+Si,Hi="__reactContainer$"+Si,ks="__reactEvents$"+Si,mu="__reactListeners$"+Si,gu="__reactHandles$"+Si,ll="__reactResources$"+Si,tr="__reactMarker$"+Si;function Xs(e){delete e[tn],delete e[En],delete e[ks],delete e[mu],delete e[gu]}function U(e){var i=e[tn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Hi]||r[tn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=X0(e);e!==null;){if(r=e[tn])return r;e=X0(e)}return i}e=r,r=e.parentNode}return null}function nt(e){if(e=e[tn]||e[Hi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function xt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function St(e){var i=e[ll];return i||(i=e[ll]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function $(e){e[tr]=!0}var Gt=new Set,Zt={};function Qt(e,i){$t(e,i),$t(e+"Capture",i)}function $t(e,i){for(Zt[e]=i,e=0;e<i.length;e++)Gt.add(i[e])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},ae={};function Ce(e){return Tt.call(ae,e)?!0:Tt.call(ue,e)?!1:fe.test(e)?ae[e]=!0:(ue[e]=!0,!1)}function we(e,i,r){if(Ce(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function je(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Le(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pn(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ue(e){if(!e._valueTracker){var i=se(e)?"checked":"value";e._valueTracker=pn(e,i,""+e[i])}}function Vn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=se(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function yn(e){return e.replace(Pn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function He(e,i,r,l,f,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+de(i)):e.value!==""+de(i)&&(e.value=""+de(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,S,de(i)):r!=null?Dn(e,S,de(r)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+de(R):e.removeAttribute("name")}function zn(e,i,r,l,f,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ue(e);return}r=r!=null?""+de(r):"",i=i!=null?""+de(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ue(e)}function Dn(e,i,r){i==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function en(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function bn(e,i,r){if(i!=null&&(i=""+de(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+de(r):""}function Fr(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(bt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=de(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ue(e)}function kn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var sx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Np(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||sx.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Op(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Np(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Np(e,d,i[d])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ox=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return lx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var _u=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function Fp(e){var i=nt(e);if(i&&(e=i.stateNode)){var r=e[En]||null;t:switch(e=i.stateNode,i.type){case"input":if(He(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[En]||null;if(!f)throw Error(a(90));He(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Vn(l)}break t;case"textarea":bn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&en(e,!!r.multiple,i,!1)}}}var xu=!1;function Pp(e,i,r){if(xu)return e(i,r);xu=!0;try{var l=e(i);return l}finally{if(xu=!1,(Pr!==null||zr!==null)&&(Kl(),Pr&&(i=Pr,e=zr,zr=Pr=null,Fp(i),e)))for(i=0;i<e.length;i++)Fp(e[i])}}function Ws(e,i){var r=e.stateNode;if(r===null)return null;var l=r[En]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Vi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Su=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Su=!1}var ya=null,Mu=null,ul=null;function zp(){if(ul)return ul;var e,i=Mu,r=i.length,l,f="value"in ya?ya.value:ya.textContent,d=f.length;for(e=0;e<r&&i[e]===f[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===f[d-l];l++);return ul=f.slice(e,1<l?1-l:void 0)}function fl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Bp(){return!1}function Xn(e){function i(r,l,f,d,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hl:Bp,this.isPropagationStopped=Bp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Xn(er),Ys=v({},er,{view:0,detail:0}),cx=Xn(Ys),Eu,bu,js,pl=v({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(Eu=e.screenX-js.screenX,bu=e.screenY-js.screenY):bu=Eu=0,js=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Ip=Xn(pl),ux=v({},pl,{dataTransfer:0}),fx=Xn(ux),hx=v({},Ys,{relatedTarget:0}),Tu=Xn(hx),dx=v({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Xn(dx),mx=v({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=Xn(mx),vx=v({},er,{data:0}),Hp=Xn(vx),_x={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=xx[e])?!!i[e]:!1}function Au(){return Sx}var Mx=v({},Ys,{key:function(e){if(e.key){var i=_x[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ex=Xn(Mx),bx=v({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Xn(bx),Tx=v({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Ax=Xn(Tx),Rx=v({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cx=Xn(Rx),wx=v({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=Xn(wx),Ux=v({},er,{newState:0,oldState:0}),Lx=Xn(Ux),Nx=[9,13,27,32],Ru=Vi&&"CompositionEvent"in window,Zs=null;Vi&&"documentMode"in document&&(Zs=document.documentMode);var Ox=Vi&&"TextEvent"in window&&!Zs,Vp=Vi&&(!Ru||Zs&&8<Zs&&11>=Zs),kp=" ",Xp=!1;function Wp(e,i){switch(e){case"keyup":return Nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Fx(e,i){switch(e){case"compositionend":return qp(i);case"keypress":return i.which!==32?null:(Xp=!0,kp);case"textInput":return e=i.data,e===kp&&Xp?null:e;default:return null}}function Px(e,i){if(Br)return e==="compositionend"||!Ru&&Wp(e,i)?(e=zp(),ul=Mu=ya=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vp&&i.locale!=="ko"?null:i.data;default:return null}}var zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!zx[e.type]:i==="textarea"}function jp(e,i,r,l){Pr?zr?zr.push(l):zr=[l]:Pr=l,i=ic(i,"onChange"),0<i.length&&(r=new dl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Ks=null,Qs=null;function Bx(e){D0(e,0)}function ml(e){var i=xt(e);if(Vn(i))return e}function Zp(e,i){if(e==="change")return i}var Kp=!1;if(Vi){var Cu;if(Vi){var wu="oninput"in document;if(!wu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),wu=typeof Qp.oninput=="function"}Cu=wu}else Cu=!1;Kp=Cu&&(!document.documentMode||9<document.documentMode)}function Jp(){Ks&&(Ks.detachEvent("onpropertychange",$p),Qs=Ks=null)}function $p(e){if(e.propertyName==="value"&&ml(Qs)){var i=[];jp(i,Qs,e,yu(e)),Pp(Bx,i)}}function Ix(e,i,r){e==="focusin"?(Jp(),Ks=i,Qs=r,Ks.attachEvent("onpropertychange",$p)):e==="focusout"&&Jp()}function Hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Qs)}function Gx(e,i){if(e==="click")return ml(i)}function Vx(e,i){if(e==="input"||e==="change")return ml(i)}function kx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var $n=typeof Object.is=="function"?Object.is:kx;function Js(e,i){if($n(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Tt.call(i,f)||!$n(e[f],i[f]))return!1}return!0}function tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function em(e,i){var r=tm(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=tm(r)}}function nm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?nm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function im(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Mi(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Mi(e.document)}return i}function Du(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Xx=Vi&&"documentMode"in document&&11>=document.documentMode,Ir=null,Uu=null,$s=null,Lu=!1;function am(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lu||Ir==null||Ir!==Mi(l)||(l=Ir,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$s&&Js($s,l)||($s=l,l=ic(Uu,"onSelect"),0<l.length&&(i=new dl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ir)))}function nr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Hr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Nu={},rm={};Vi&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ir(e){if(Nu[e])return Nu[e];if(!Hr[e])return e;var i=Hr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in rm)return Nu[e]=i[r];return e}var sm=ir("animationend"),om=ir("animationiteration"),lm=ir("animationstart"),Wx=ir("transitionrun"),qx=ir("transitionstart"),Yx=ir("transitioncancel"),cm=ir("transitionend"),um=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ei(e,i){um.set(e,i),Qt(i,[e])}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Gr=0,Fu=0;function vl(){for(var e=Gr,i=Fu=Gr=0;i<e;){var r=ci[i];ci[i++]=null;var l=ci[i];ci[i++]=null;var f=ci[i];ci[i++]=null;var d=ci[i];if(ci[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&fm(r,f,d)}}function _l(e,i,r,l){ci[Gr++]=e,ci[Gr++]=i,ci[Gr++]=r,ci[Gr++]=l,Fu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Pu(e,i,r,l){return _l(e,i,r,l),yl(e)}function ar(e,i){return _l(e,null,null,i),yl(e)}function fm(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-ne(r),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function yl(e){if(50<Mo)throw Mo=0,qf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Vr={};function jx(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,r,l){return new jx(e,i,r,l)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,i){var r=e.alternate;return r===null?(r=ti(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function hm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function xl(e,i,r,l,f,d){var S=0;if(l=e,typeof e=="function")zu(e)&&(S=1);else if(typeof e=="string")S=$S(e,r,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ti(31,r,i,f),e.elementType=L,e.lanes=d,e;case T:return rr(r.children,f,d,i);case M:S=8,f|=24;break;case x:return e=ti(12,r,i,f|2),e.elementType=x,e.lanes=d,e;case q:return e=ti(13,r,i,f),e.elementType=q,e.lanes=d,e;case I:return e=ti(19,r,i,f),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case O:S=9;break t;case w:S=11;break t;case P:S=14;break t;case X:S=16,l=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ti(S,r,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function rr(e,i,r,l){return e=ti(7,e,l,i),e.lanes=r,e}function Bu(e,i,r){return e=ti(6,e,null,i),e.lanes=r,e}function dm(e){var i=ti(18,null,null,0);return i.stateNode=e,i}function Iu(e,i,r){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pm=new WeakMap;function ui(e,i){if(typeof e=="object"&&e!==null){var r=pm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:lt(i)},pm.set(e,i),i)}return{value:e,source:i,stack:lt(i)}}var kr=[],Xr=0,Sl=null,to=0,fi=[],hi=0,xa=null,Li=1,Ni="";function Xi(e,i){kr[Xr++]=to,kr[Xr++]=Sl,Sl=e,to=i}function mm(e,i,r){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=xa,xa=e;var l=Li;e=Ni;var f=32-ne(l)-1;l&=~(1<<f),r+=1;var d=32-ne(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Li=1<<32-ne(i)+f|r<<f|l,Ni=d+e}else Li=1<<d|r<<f|l,Ni=e}function Hu(e){e.return!==null&&(Xi(e,1),mm(e,1,0))}function Gu(e){for(;e===Sl;)Sl=kr[--Xr],kr[Xr]=null,to=kr[--Xr],kr[Xr]=null;for(;e===xa;)xa=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null,Li=fi[--hi],fi[hi]=null}function gm(e,i){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=xa,Li=i.id,Ni=i.overflow,xa=e}var Tn=null,Ze=null,De=!1,Sa=null,di=!1,Vu=Error(a(519));function Ma(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ui(i,e)),Vu}function vm(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[tn]=e,i[En]=l,r){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(r=0;r<bo.length;r++)Me(bo[r],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Fr(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||O0(i.textContent,r)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Gi),i=!0):i=!1,i||Ma(e,!0)}function _m(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Wr(e){if(e!==Tn)return!1;if(!De)return _m(e),De=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||oh(e.type,e.memoizedProps)),r=!r),r&&Ze&&Ma(e),_m(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=k0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=k0(e)}else i===27?(i=Ze,Pa(e.type)?(e=hh,hh=null,Ze=e):Ze=i):Ze=Tn?mi(e.stateNode.nextSibling):null;return!0}function sr(){Ze=Tn=null,De=!1}function ku(){var e=Sa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Sa=null),e}function eo(e){Sa===null?Sa=[e]:Sa.push(e)}var Xu=N(null),or=null,Wi=null;function Ea(e,i,r){et(Xu,i._currentValue),i._currentValue=r}function qi(e){e._currentValue=Xu.current,at(Xu)}function Wu(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function qu(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=f;for(var V=0;V<i.length;V++)if(R.context===i[V]){d.lanes|=r,R=d.alternate,R!==null&&(R.lanes|=r),Wu(d.return,r,e),l||(S=null);break t}d=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),Wu(S,r,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function qr(e,i,r,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=f.type;$n(f.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(f===W.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}f=f.return}e!==null&&qu(i,e,r,l),i.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return ym(or,e)}function El(e,i){return or===null&&lr(e),ym(e,i)}function ym(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Wi===null){if(e===null)throw Error(a(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return r}var Zx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Kx=s.unstable_scheduleCallback,Qx=s.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new Zx,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Kx(Qx,function(){e.controller.abort()})}var io=null,ju=0,Yr=0,jr=null;function Jx(e,i){if(io===null){var r=io=[];ju=0,Yr=Jf(),jr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ju++,i.then(xm,xm),i}function xm(){if(--ju===0&&io!==null){jr!==null&&(jr.status="fulfilled");var e=io;io=null,Yr=0,jr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function $x(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var Sm=B.S;B.S=function(e,i){a0=J(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Jx(e,i),Sm!==null&&Sm(e,i)};var cr=N(null);function Zu(){var e=cr.current;return e!==null?e:qe.pooledCache}function bl(e,i){i===null?et(cr,cr.current):et(cr,i.pool)}function Mm(){var e=Zu();return e===null?null:{parent:cn._currentValue,pool:e}}var Zr=Error(a(460)),Ku=Error(a(474)),Tl=Error(a(542)),Al={then:function(){}};function Em(e){return e=e.status,e==="fulfilled"||e==="rejected"}function bm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Gi,Gi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Am(e),e;default:if(typeof i.status=="string")i.then(Gi,Gi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Am(e),e}throw fr=i,Zr}}function ur(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(fr=r,Zr):r}}var fr=null;function Tm(){if(fr===null)throw Error(a(459));var e=fr;return fr=null,e}function Am(e){if(e===Zr||e===Tl)throw Error(a(483))}var Kr=null,ao=0;function Rl(e){var i=ao;return ao+=1,Kr===null&&(Kr=[]),bm(Kr,e,i)}function ro(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Cl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Rm(e){function i(it,Z){if(e){var ut=it.deletions;ut===null?(it.deletions=[Z],it.flags|=16):ut.push(Z)}}function r(it,Z){if(!e)return null;for(;Z!==null;)i(it,Z),Z=Z.sibling;return null}function l(it){for(var Z=new Map;it!==null;)it.key!==null?Z.set(it.key,it):Z.set(it.index,it),it=it.sibling;return Z}function f(it,Z){return it=ki(it,Z),it.index=0,it.sibling=null,it}function d(it,Z,ut){return it.index=ut,e?(ut=it.alternate,ut!==null?(ut=ut.index,ut<Z?(it.flags|=67108866,Z):ut):(it.flags|=67108866,Z)):(it.flags|=1048576,Z)}function S(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function R(it,Z,ut,Ct){return Z===null||Z.tag!==6?(Z=Bu(ut,it.mode,Ct),Z.return=it,Z):(Z=f(Z,ut),Z.return=it,Z)}function V(it,Z,ut,Ct){var re=ut.type;return re===T?At(it,Z,ut.props.children,Ct,ut.key):Z!==null&&(Z.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===X&&ur(re)===Z.type)?(Z=f(Z,ut.props),ro(Z,ut),Z.return=it,Z):(Z=xl(ut.type,ut.key,ut.props,null,it.mode,Ct),ro(Z,ut),Z.return=it,Z)}function ft(it,Z,ut,Ct){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ut.containerInfo||Z.stateNode.implementation!==ut.implementation?(Z=Iu(ut,it.mode,Ct),Z.return=it,Z):(Z=f(Z,ut.children||[]),Z.return=it,Z)}function At(it,Z,ut,Ct,re){return Z===null||Z.tag!==7?(Z=rr(ut,it.mode,Ct,re),Z.return=it,Z):(Z=f(Z,ut),Z.return=it,Z)}function Ut(it,Z,ut){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Bu(""+Z,it.mode,ut),Z.return=it,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return ut=xl(Z.type,Z.key,Z.props,null,it.mode,ut),ro(ut,Z),ut.return=it,ut;case b:return Z=Iu(Z,it.mode,ut),Z.return=it,Z;case X:return Z=ur(Z),Ut(it,Z,ut)}if(bt(Z)||ct(Z))return Z=rr(Z,it.mode,ut,null),Z.return=it,Z;if(typeof Z.then=="function")return Ut(it,Rl(Z),ut);if(Z.$$typeof===D)return Ut(it,El(it,Z),ut);Cl(it,Z)}return null}function mt(it,Z,ut,Ct){var re=Z!==null?Z.key:null;if(typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint")return re!==null?null:R(it,Z,""+ut,Ct);if(typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case y:return ut.key===re?V(it,Z,ut,Ct):null;case b:return ut.key===re?ft(it,Z,ut,Ct):null;case X:return ut=ur(ut),mt(it,Z,ut,Ct)}if(bt(ut)||ct(ut))return re!==null?null:At(it,Z,ut,Ct,null);if(typeof ut.then=="function")return mt(it,Z,Rl(ut),Ct);if(ut.$$typeof===D)return mt(it,Z,El(it,ut),Ct);Cl(it,ut)}return null}function Mt(it,Z,ut,Ct,re){if(typeof Ct=="string"&&Ct!==""||typeof Ct=="number"||typeof Ct=="bigint")return it=it.get(ut)||null,R(Z,it,""+Ct,re);if(typeof Ct=="object"&&Ct!==null){switch(Ct.$$typeof){case y:return it=it.get(Ct.key===null?ut:Ct.key)||null,V(Z,it,Ct,re);case b:return it=it.get(Ct.key===null?ut:Ct.key)||null,ft(Z,it,Ct,re);case X:return Ct=ur(Ct),Mt(it,Z,ut,Ct,re)}if(bt(Ct)||ct(Ct))return it=it.get(ut)||null,At(Z,it,Ct,re,null);if(typeof Ct.then=="function")return Mt(it,Z,ut,Rl(Ct),re);if(Ct.$$typeof===D)return Mt(it,Z,ut,El(Z,Ct),re);Cl(Z,Ct)}return null}function te(it,Z,ut,Ct){for(var re=null,Ne=null,ie=Z,ve=Z=0,Re=null;ie!==null&&ve<ut.length;ve++){ie.index>ve?(Re=ie,ie=null):Re=ie.sibling;var Oe=mt(it,ie,ut[ve],Ct);if(Oe===null){ie===null&&(ie=Re);break}e&&ie&&Oe.alternate===null&&i(it,ie),Z=d(Oe,Z,ve),Ne===null?re=Oe:Ne.sibling=Oe,Ne=Oe,ie=Re}if(ve===ut.length)return r(it,ie),De&&Xi(it,ve),re;if(ie===null){for(;ve<ut.length;ve++)ie=Ut(it,ut[ve],Ct),ie!==null&&(Z=d(ie,Z,ve),Ne===null?re=ie:Ne.sibling=ie,Ne=ie);return De&&Xi(it,ve),re}for(ie=l(ie);ve<ut.length;ve++)Re=Mt(ie,it,ve,ut[ve],Ct),Re!==null&&(e&&Re.alternate!==null&&ie.delete(Re.key===null?ve:Re.key),Z=d(Re,Z,ve),Ne===null?re=Re:Ne.sibling=Re,Ne=Re);return e&&ie.forEach(function(Ga){return i(it,Ga)}),De&&Xi(it,ve),re}function le(it,Z,ut,Ct){if(ut==null)throw Error(a(151));for(var re=null,Ne=null,ie=Z,ve=Z=0,Re=null,Oe=ut.next();ie!==null&&!Oe.done;ve++,Oe=ut.next()){ie.index>ve?(Re=ie,ie=null):Re=ie.sibling;var Ga=mt(it,ie,Oe.value,Ct);if(Ga===null){ie===null&&(ie=Re);break}e&&ie&&Ga.alternate===null&&i(it,ie),Z=d(Ga,Z,ve),Ne===null?re=Ga:Ne.sibling=Ga,Ne=Ga,ie=Re}if(Oe.done)return r(it,ie),De&&Xi(it,ve),re;if(ie===null){for(;!Oe.done;ve++,Oe=ut.next())Oe=Ut(it,Oe.value,Ct),Oe!==null&&(Z=d(Oe,Z,ve),Ne===null?re=Oe:Ne.sibling=Oe,Ne=Oe);return De&&Xi(it,ve),re}for(ie=l(ie);!Oe.done;ve++,Oe=ut.next())Oe=Mt(ie,it,ve,Oe.value,Ct),Oe!==null&&(e&&Oe.alternate!==null&&ie.delete(Oe.key===null?ve:Oe.key),Z=d(Oe,Z,ve),Ne===null?re=Oe:Ne.sibling=Oe,Ne=Oe);return e&&ie.forEach(function(uM){return i(it,uM)}),De&&Xi(it,ve),re}function ke(it,Z,ut,Ct){if(typeof ut=="object"&&ut!==null&&ut.type===T&&ut.key===null&&(ut=ut.props.children),typeof ut=="object"&&ut!==null){switch(ut.$$typeof){case y:t:{for(var re=ut.key;Z!==null;){if(Z.key===re){if(re=ut.type,re===T){if(Z.tag===7){r(it,Z.sibling),Ct=f(Z,ut.props.children),Ct.return=it,it=Ct;break t}}else if(Z.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===X&&ur(re)===Z.type){r(it,Z.sibling),Ct=f(Z,ut.props),ro(Ct,ut),Ct.return=it,it=Ct;break t}r(it,Z);break}else i(it,Z);Z=Z.sibling}ut.type===T?(Ct=rr(ut.props.children,it.mode,Ct,ut.key),Ct.return=it,it=Ct):(Ct=xl(ut.type,ut.key,ut.props,null,it.mode,Ct),ro(Ct,ut),Ct.return=it,it=Ct)}return S(it);case b:t:{for(re=ut.key;Z!==null;){if(Z.key===re)if(Z.tag===4&&Z.stateNode.containerInfo===ut.containerInfo&&Z.stateNode.implementation===ut.implementation){r(it,Z.sibling),Ct=f(Z,ut.children||[]),Ct.return=it,it=Ct;break t}else{r(it,Z);break}else i(it,Z);Z=Z.sibling}Ct=Iu(ut,it.mode,Ct),Ct.return=it,it=Ct}return S(it);case X:return ut=ur(ut),ke(it,Z,ut,Ct)}if(bt(ut))return te(it,Z,ut,Ct);if(ct(ut)){if(re=ct(ut),typeof re!="function")throw Error(a(150));return ut=re.call(ut),le(it,Z,ut,Ct)}if(typeof ut.then=="function")return ke(it,Z,Rl(ut),Ct);if(ut.$$typeof===D)return ke(it,Z,El(it,ut),Ct);Cl(it,ut)}return typeof ut=="string"&&ut!==""||typeof ut=="number"||typeof ut=="bigint"?(ut=""+ut,Z!==null&&Z.tag===6?(r(it,Z.sibling),Ct=f(Z,ut),Ct.return=it,it=Ct):(r(it,Z),Ct=Bu(ut,it.mode,Ct),Ct.return=it,it=Ct),S(it)):r(it,Z)}return function(it,Z,ut,Ct){try{ao=0;var re=ke(it,Z,ut,Ct);return Kr=null,re}catch(ie){if(ie===Zr||ie===Tl)throw ie;var Ne=ti(29,ie,null,it.mode);return Ne.lanes=Ct,Ne.return=it,Ne}finally{}}}var hr=Rm(!0),Cm=Rm(!1),ba=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=yl(e),fm(e,null,r),i}return _l(e,l,i,r),yl(e)}function so(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,ln(e,r)}}function $u(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var tf=!1;function oo(){if(tf){var e=jr;if(e!==null)throw e}}function lo(e,i,r,l){tf=!1;var f=e.updateQueue;ba=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,ft=V.next;V.next=null,S===null?d=ft:S.next=ft,S=V;var At=e.alternate;At!==null&&(At=At.updateQueue,R=At.lastBaseUpdate,R!==S&&(R===null?At.firstBaseUpdate=ft:R.next=ft,At.lastBaseUpdate=V))}if(d!==null){var Ut=f.baseState;S=0,At=ft=V=null,R=d;do{var mt=R.lane&-536870913,Mt=mt!==R.lane;if(Mt?(Ae&mt)===mt:(l&mt)===mt){mt!==0&&mt===Yr&&(tf=!0),At!==null&&(At=At.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var te=e,le=R;mt=i;var ke=r;switch(le.tag){case 1:if(te=le.payload,typeof te=="function"){Ut=te.call(ke,Ut,mt);break t}Ut=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=le.payload,mt=typeof te=="function"?te.call(ke,Ut,mt):te,mt==null)break t;Ut=v({},Ut,mt);break t;case 2:ba=!0}}mt=R.callback,mt!==null&&(e.flags|=64,Mt&&(e.flags|=8192),Mt=f.callbacks,Mt===null?f.callbacks=[mt]:Mt.push(mt))}else Mt={lane:mt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},At===null?(ft=At=Mt,V=Ut):At=At.next=Mt,S|=mt;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Mt=R,R=Mt.next,Mt.next=null,f.lastBaseUpdate=Mt,f.shared.pending=null}}while(!0);At===null&&(V=Ut),f.baseState=V,f.firstBaseUpdate=ft,f.lastBaseUpdate=At,d===null&&(f.shared.lanes=0),Ua|=S,e.lanes=S,e.memoizedState=Ut}}function wm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Dm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)wm(r[e],i)}var Qr=N(null),wl=N(0);function Um(e,i){e=ea,et(wl,e),et(Qr,i),ea=e|i.baseLanes}function ef(){et(wl,ea),et(Qr,Qr.current)}function nf(){ea=wl.current,at(Qr),at(wl)}var ei=N(null),pi=null;function Ra(e){var i=e.alternate;et(rn,rn.current&1),et(ei,e),pi===null&&(i===null||Qr.current!==null||i.memoizedState!==null)&&(pi=e)}function af(e){et(rn,rn.current),et(ei,e),pi===null&&(pi=e)}function Lm(e){e.tag===22?(et(rn,rn.current),et(ei,e),pi===null&&(pi=e)):Ca()}function Ca(){et(rn,rn.current),et(ei,ei.current)}function ni(e){at(ei),pi===e&&(pi=null),at(rn)}var rn=N(0);function Dl(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||uh(r)||fh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,me=null,Ge=null,un=null,Ul=!1,Jr=!1,dr=!1,Ll=0,co=0,$r=null,tS=0;function nn(){throw Error(a(321))}function rf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!$n(e[r],i[r]))return!1;return!0}function sf(e,i,r,l,f,d){return Yi=d,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?mg:Sf,dr=!1,d=r(l,f),dr=!1,Jr&&(d=Om(i,r,l,f)),Nm(e),d}function Nm(e){B.H=ho;var i=Ge!==null&&Ge.next!==null;if(Yi=0,un=Ge=me=null,Ul=!1,co=0,$r=null,i)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&Ml(e)&&(fn=!0))}function Om(e,i,r,l){me=e;var f=0;do{if(Jr&&($r=null),co=0,Jr=!1,25<=f)throw Error(a(301));if(f+=1,un=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=gg,d=i(r,l)}while(Jr);return d}function eS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?uo(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(me.flags|=1024),i}function of(){var e=Ll!==0;return Ll=0,e}function lf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function cf(e){if(Ul){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ul=!1}Yi=0,un=Ge=me=null,Jr=!1,co=Ll=0,$r=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?me.memoizedState=un=e:un=un.next=e,un}function sn(){if(Ge===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=un===null?me.memoizedState:un.next;if(i!==null)un=i,Ge=e;else{if(e===null)throw me.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?me.memoizedState=un=e:un=un.next=e}return un}function Nl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var i=co;return co+=1,$r===null&&($r=[]),e=bm($r,e,i),i=me,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?mg:Sf),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===D)return An(e)}throw Error(a(438,String(e)))}function uf(e){var i=null,r=me.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Nl(),me.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=C;return i.index++,r}function ji(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=sn();return ff(i,Ge,e)}function ff(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var R=S=null,V=null,ft=i,At=!1;do{var Ut=ft.lane&-536870913;if(Ut!==ft.lane?(Ae&Ut)===Ut:(Yi&Ut)===Ut){var mt=ft.revertLane;if(mt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null}),Ut===Yr&&(At=!0);else if((Yi&mt)===mt){ft=ft.next,mt===Yr&&(At=!0);continue}else Ut={lane:0,revertLane:ft.revertLane,gesture:null,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null},V===null?(R=V=Ut,S=d):V=V.next=Ut,me.lanes|=mt,Ua|=mt;Ut=ft.action,dr&&r(d,Ut),d=ft.hasEagerState?ft.eagerState:r(d,Ut)}else mt={lane:Ut,revertLane:ft.revertLane,gesture:ft.gesture,action:ft.action,hasEagerState:ft.hasEagerState,eagerState:ft.eagerState,next:null},V===null?(R=V=mt,S=d):V=V.next=mt,me.lanes|=Ut,Ua|=Ut;ft=ft.next}while(ft!==null&&ft!==i);if(V===null?S=d:V.next=R,!$n(d,e.memoizedState)&&(fn=!0,At&&(r=jr,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hf(e){var i=sn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);$n(d,i.memoizedState)||(fn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Fm(e,i,r){var l=me,f=sn(),d=De;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!$n((Ge||f).memoizedState,r);if(S&&(f.memoizedState=r,fn=!0),f=f.queue,mf(Bm.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ts(9,{destroy:void 0},zm.bind(null,l,f,r,i),null),qe===null)throw Error(a(349));d||(Yi&127)!==0||Pm(l,i,r)}return r}function Pm(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=me.updateQueue,i===null?(i=Nl(),me.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function zm(e,i,r,l){i.value=r,i.getSnapshot=l,Im(i)&&Hm(e)}function Bm(e,i,r){return r(function(){Im(i)&&Hm(e)})}function Im(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!$n(e,r)}catch{return!0}}function Hm(e){var i=ar(e,2);i!==null&&Zn(i,e,2)}function df(e){var i=Bn();if(typeof e=="function"){var r=e;if(e=r(),dr){kt(!0);try{r()}finally{kt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},i}function Gm(e,i,r,l){return e.baseState=r,ff(e,Ge,typeof l=="function"?l:ji)}function nS(e,i,r,l,f){if(Bl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};B.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Vm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Vm(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=B.T,S={};B.T=S;try{var R=r(f,l),V=B.S;V!==null&&V(S,R),km(e,i,R)}catch(ft){pf(e,i,ft)}finally{d!==null&&S.types!==null&&(d.types=S.types),B.T=d}}else try{d=r(f,l),km(e,i,d)}catch(ft){pf(e,i,ft)}}function km(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Xm(e,i,l)},function(l){return pf(e,i,l)}):Xm(e,i,r)}function Xm(e,i,r){i.status="fulfilled",i.value=r,Wm(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Vm(e,r)))}function pf(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Wm(i),i=i.next;while(i!==l)}e.action=null}function Wm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function qm(e,i){return i}function Ym(e,i){if(De){var r=qe.formState;if(r!==null){t:{var l=me;if(De){if(Ze){e:{for(var f=Ze,d=di;f.nodeType!==8;){if(!d){f=null;break e}if(f=mi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Ze=mi(f.nextSibling),l=f.data==="F!";break t}}Ma(l)}l=!1}l&&(i=r[0])}}return r=Bn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qm,lastRenderedState:i},r.queue=l,r=hg.bind(null,me,l),l.dispatch=r,l=df(!1),d=xf.bind(null,me,!1,l.queue),l=Bn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=nS.bind(null,me,f,d,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function jm(e){var i=sn();return Zm(i,Ge,e)}function Zm(e,i,r){if(i=ff(e,i,qm)[0],e=Fl(ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=uo(i)}catch(S){throw S===Zr?Tl:S}else l=i;i=sn();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(me.flags|=2048,ts(9,{destroy:void 0},iS.bind(null,f,r),null)),[l,d,e]}function iS(e,i){e.action=i}function Km(e){var i=sn(),r=Ge;if(r!==null)return Zm(i,r,e);sn(),i=i.memoizedState,r=sn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function ts(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=Nl(),me.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Qm(){return sn().memoizedState}function Pl(e,i,r,l){var f=Bn();me.flags|=e,f.memoizedState=ts(1|i,{destroy:void 0},r,l===void 0?null:l)}function zl(e,i,r,l){var f=sn();l=l===void 0?null:l;var d=f.memoizedState.inst;Ge!==null&&l!==null&&rf(l,Ge.memoizedState.deps)?f.memoizedState=ts(i,d,r,l):(me.flags|=e,f.memoizedState=ts(1|i,d,r,l))}function Jm(e,i){Pl(8390656,8,e,i)}function mf(e,i){zl(2048,8,e,i)}function aS(e){me.flags|=4;var i=me.updateQueue;if(i===null)i=Nl(),me.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function $m(e){var i=sn().memoizedState;return aS({ref:i,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function tg(e,i){return zl(4,2,e,i)}function eg(e,i){return zl(4,4,e,i)}function ng(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ig(e,i,r){r=r!=null?r.concat([e]):null,zl(4,4,ng.bind(null,i,e),r)}function gf(){}function ag(e,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&rf(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function rg(e,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&rf(i,l[1]))return l[0];if(l=e(),dr){kt(!0);try{e()}finally{kt(!1)}}return r.memoizedState=[l,i],l}function vf(e,i,r){return r===void 0||(Yi&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=s0(),me.lanes|=e,Ua|=e,r)}function sg(e,i,r,l){return $n(r,i)?r:Qr.current!==null?(e=vf(e,r,l),$n(e,i)||(fn=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Ae&261930)===0?(fn=!0,e.memoizedState=r):(e=s0(),me.lanes|=e,Ua|=e,i)}function og(e,i,r,l,f){var d=rt.p;rt.p=d!==0&&8>d?d:8;var S=B.T,R={};B.T=R,xf(e,!1,i,r);try{var V=f(),ft=B.S;if(ft!==null&&ft(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var At=$x(V,l);fo(e,i,At,ri(e))}else fo(e,i,l,ri(e))}catch(Ut){fo(e,i,{then:function(){},status:"rejected",reason:Ut},ri())}finally{rt.p=d,S!==null&&R.types!==null&&(S.types=R.types),B.T=S}}function rS(){}function _f(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=lg(e).queue;og(e,f,i,K,r===null?rS:function(){return cg(e),r(l)})}function lg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:K},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function cg(e){var i=lg(e);i.next===null&&(i=e.alternate.memoizedState),fo(e,i.next.queue,{},ri())}function yf(){return An(wo)}function ug(){return sn().memoizedState}function fg(){return sn().memoizedState}function sS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=ri();e=Ta(r);var l=Aa(i,e,r);l!==null&&(Zn(l,i,r),so(l,i,r)),i={cache:Yu()},e.payload=i;return}i=i.return}}function oS(e,i,r){var l=ri();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bl(e)?dg(i,r):(r=Pu(e,i,r,l),r!==null&&(Zn(r,e,l),pg(r,i,l)))}function hg(e,i,r){var l=ri();fo(e,i,r,l)}function fo(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))dg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,R=d(S,r);if(f.hasEagerState=!0,f.eagerState=R,$n(R,S))return _l(e,i,f,0),qe===null&&vl(),!1}catch{}finally{}if(r=Pu(e,i,f,l),r!==null)return Zn(r,e,l),pg(r,i,l),!0}return!1}function xf(e,i,r,l){if(l={lane:2,revertLane:Jf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(i)throw Error(a(479))}else i=Pu(e,r,l,2),i!==null&&Zn(i,e,2)}function Bl(e){var i=e.alternate;return e===me||i!==null&&i===me}function dg(e,i){Jr=Ul=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function pg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,ln(e,r)}}var ho={readContext:An,use:Ol,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};ho.useEffectEvent=nn;var mg={readContext:An,use:Ol,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:Jm,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Pl(4194308,4,ng.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Pl(4194308,4,e,i)},useInsertionEffect:function(e,i){Pl(4,2,e,i)},useMemo:function(e,i){var r=Bn();i=i===void 0?null:i;var l=e();if(dr){kt(!0);try{e()}finally{kt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Bn();if(r!==void 0){var f=r(i);if(dr){kt(!0);try{r(i)}finally{kt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=oS.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,r=hg.bind(null,me,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:gf,useDeferredValue:function(e,i){var r=Bn();return vf(r,e,i)},useTransition:function(){var e=df(!1);return e=og.bind(null,me,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=me,f=Bn();if(De){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),qe===null)throw Error(a(349));(Ae&127)!==0||Pm(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,Jm(Bm.bind(null,l,d,e),[e]),l.flags|=2048,ts(9,{destroy:void 0},zm.bind(null,l,d,r,i),null),r},useId:function(){var e=Bn(),i=qe.identifierPrefix;if(De){var r=Ni,l=Li;r=(l&~(1<<32-ne(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Ll++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=tS++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:yf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=xf.bind(null,me,!0,r),r.dispatch=i,[e,i]},useMemoCache:uf,useCacheRefresh:function(){return Bn().memoizedState=sS.bind(null,me)},useEffectEvent:function(e){var i=Bn(),r={impl:e};return i.memoizedState=r,function(){if((Pe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Sf={readContext:An,use:Ol,useCallback:ag,useContext:An,useEffect:mf,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:rg,useReducer:Fl,useRef:Qm,useState:function(){return Fl(ji)},useDebugValue:gf,useDeferredValue:function(e,i){var r=sn();return sg(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Fl(ji)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:uo(e),i]},useSyncExternalStore:Fm,useId:ug,useHostTransitionStatus:yf,useFormState:jm,useActionState:jm,useOptimistic:function(e,i){var r=sn();return Gm(r,Ge,e,i)},useMemoCache:uf,useCacheRefresh:fg};Sf.useEffectEvent=$m;var gg={readContext:An,use:Ol,useCallback:ag,useContext:An,useEffect:mf,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:eg,useMemo:rg,useReducer:hf,useRef:Qm,useState:function(){return hf(ji)},useDebugValue:gf,useDeferredValue:function(e,i){var r=sn();return Ge===null?vf(r,e,i):sg(r,Ge.memoizedState,e,i)},useTransition:function(){var e=hf(ji)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:uo(e),i]},useSyncExternalStore:Fm,useId:ug,useHostTransitionStatus:yf,useFormState:Km,useActionState:Km,useOptimistic:function(e,i){var r=sn();return Ge!==null?Gm(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:uf,useCacheRefresh:fg};gg.useEffectEvent=$m;function Mf(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ef={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=ri(),f=Ta(l);f.payload=i,r!=null&&(f.callback=r),i=Aa(e,f,l),i!==null&&(Zn(i,e,l),so(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=ri(),f=Ta(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Aa(e,f,l),i!==null&&(Zn(i,e,l),so(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=ri(),l=Ta(r);l.tag=2,i!=null&&(l.callback=i),i=Aa(e,l,r),i!==null&&(Zn(i,e,r),so(i,e,r))}};function vg(e,i,r,l,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Js(r,l)||!Js(f,d):!0}function _g(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Ef.enqueueReplaceState(i,i.state,null)}function pr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function yg(e){gl(e)}function xg(e){console.error(e)}function Sg(e){gl(e)}function Il(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Mg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function bf(e,i,r){return r=Ta(r),r.tag=3,r.payload={element:null},r.callback=function(){Il(e,i)},r}function Eg(e){return e=Ta(e),e.tag=3,e}function bg(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){Mg(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Mg(i,r,l),typeof f!="function"&&(La===null?La=new Set([this]):La.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function lS(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&qr(i,r,f,!0),r=ei.current,r!==null){switch(r.tag){case 31:case 13:return pi===null?Ql():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Al?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Zf(e,l,f)),!1;case 22:return r.flags|=65536,l===Al?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Zf(e,l,f)),!1}throw Error(a(435,r.tag))}return Zf(e,l,f),Ql(),!1}if(De)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Vu&&(e=Error(a(422),{cause:l}),eo(ui(e,r)))):(l!==Vu&&(i=Error(a(423),{cause:l}),eo(ui(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ui(l,r),f=bf(e.stateNode,l,f),$u(e,f),an!==4&&(an=2)),!1;var d=Error(a(520),{cause:l});if(d=ui(d,r),So===null?So=[d]:So.push(d),an!==4&&(an=2),i===null)return!0;l=ui(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=bf(r.stateNode,l,e),$u(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(La===null||!La.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Eg(f),bg(f,e,r,l),$u(r,f),!1}r=r.return}while(r!==null);return!1}var Tf=Error(a(461)),fn=!1;function Rn(e,i,r,l){i.child=e===null?Cm(i,null,r,l):hr(i,e.child,r,l)}function Tg(e,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return lr(i),l=sf(e,i,r,S,d,f),R=of(),e!==null&&!fn?(lf(e,i,f),Zi(e,i,f)):(De&&R&&Hu(i),i.flags|=1,Rn(e,i,l,f),i.child)}function Ag(e,i,r,l,f){if(e===null){var d=r.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Rg(e,i,d,l,f)):(e=xl(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nf(e,f)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Js,r(S,l)&&e.ref===i.ref)return Zi(e,i,f)}return i.flags|=1,e=ki(d,l),e.ref=i.ref,e.return=i,i.child=e}function Rg(e,i,r,l,f){if(e!==null){var d=e.memoizedProps;if(Js(d,l)&&e.ref===i.ref)if(fn=!1,i.pendingProps=l=d,Nf(e,f))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,Zi(e,i,f)}return Af(e,i,r,l,f)}function Cg(e,i,r,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return wg(e,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(i,d!==null?d.cachePool:null),d!==null?Um(i,d):ef(),Lm(i);else return l=i.lanes=536870912,wg(e,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(bl(i,d.cachePool),Um(i,d),Ca(),i.memoizedState=null):(e!==null&&bl(i,null),ef(),Ca());return Rn(e,i,f,r),i.child}function po(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function wg(e,i,r,l,f){var d=Zu();return d=d===null?null:{parent:cn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&bl(i,null),ef(),Lm(i),e!==null&&qr(e,i,l,!0),i.childLanes=f,null}function Hl(e,i){return i=Vl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Dg(e,i,r){return hr(i,e.child,null,r),e=Hl(i,i.pendingProps),e.flags|=2,ni(i),i.memoizedState=null,e}function cS(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(De){if(l.mode==="hidden")return e=Hl(i,l),i.lanes=536870912,po(null,e);if(af(i),(e=Ze)?(e=V0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=dm(e),r.return=i,i.child=r,Tn=i,Ze=null)):e=null,e===null)throw Ma(i);return i.lanes=536870912,null}return Hl(i,l)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(af(i),f)if(i.flags&256)i.flags&=-257,i=Dg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(fn||qr(e,i,r,!1),f=(r&e.childLanes)!==0,fn||f){if(l=qe,l!==null&&(S=wn(l,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,ar(e,S),Zn(l,e,S),Tf;Ql(),i=Dg(e,i,r)}else e=d.treeContext,Ze=mi(S.nextSibling),Tn=i,De=!0,Sa=null,di=!1,e!==null&&gm(i,e),i=Hl(i,l),i.flags|=4096;return i}return e=ki(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Gl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Af(e,i,r,l,f){return lr(i),r=sf(e,i,r,l,void 0,f),l=of(),e!==null&&!fn?(lf(e,i,f),Zi(e,i,f)):(De&&l&&Hu(i),i.flags|=1,Rn(e,i,r,f),i.child)}function Ug(e,i,r,l,f,d){return lr(i),i.updateQueue=null,r=Om(i,l,r,f),Nm(e),l=of(),e!==null&&!fn?(lf(e,i,d),Zi(e,i,d)):(De&&l&&Hu(i),i.flags|=1,Rn(e,i,r,d),i.child)}function Lg(e,i,r,l,f){if(lr(i),i.stateNode===null){var d=Vr,S=r.contextType;typeof S=="object"&&S!==null&&(d=An(S)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Qu(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?An(S):Vr,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Mf(i,r,S,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ef.enqueueReplaceState(d,d.state,null),lo(i,l,d,f),oo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,V=pr(r,R);d.props=V;var ft=d.context,At=r.contextType;S=Vr,typeof At=="object"&&At!==null&&(S=An(At));var Ut=r.getDerivedStateFromProps;At=typeof Ut=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,At||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ft!==S)&&_g(i,d,l,S),ba=!1;var mt=i.memoizedState;d.state=mt,lo(i,l,d,f),oo(),ft=i.memoizedState,R||mt!==ft||ba?(typeof Ut=="function"&&(Mf(i,r,Ut,l),ft=i.memoizedState),(V=ba||vg(i,r,V,l,mt,ft,S))?(At||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ft),d.props=l,d.state=ft,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ju(e,i),S=i.memoizedProps,At=pr(r,S),d.props=At,Ut=i.pendingProps,mt=d.context,ft=r.contextType,V=Vr,typeof ft=="object"&&ft!==null&&(V=An(ft)),R=r.getDerivedStateFromProps,(ft=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Ut||mt!==V)&&_g(i,d,l,V),ba=!1,mt=i.memoizedState,d.state=mt,lo(i,l,d,f),oo();var Mt=i.memoizedState;S!==Ut||mt!==Mt||ba||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof R=="function"&&(Mf(i,r,R,l),Mt=i.memoizedState),(At=ba||vg(i,r,At,l,mt,Mt,V)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(ft||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Mt,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Mt,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&mt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&mt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Mt),d.props=l,d.state=Mt,d.context=V,l=At):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&mt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&mt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Gl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=hr(i,e.child,null,f),i.child=hr(i,null,r,f)):Rn(e,i,r,f),i.memoizedState=d.state,e=i.child):e=Zi(e,i,f),e}function Ng(e,i,r,l){return sr(),i.flags|=256,Rn(e,i,r,l),i.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:Mm()}}function wf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=ai),e}function Og(e,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(De){if(f?Ra(i):Ca(),(e=Ze)?(e=V0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=dm(e),r.return=i,i.child=r,Tn=i,Ze=null)):e=null,e===null)throw Ma(i);return fh(e)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ca(),f=i.mode,R=Vl({mode:"hidden",children:R},f),l=rr(l,f,r,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Cf(r),l.childLanes=wf(e,S,r),i.memoizedState=Rf,po(null,l)):(Ra(i),Df(i,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)i.flags&256?(Ra(i),i.flags&=-257,i=Uf(e,i,r)):i.memoizedState!==null?(Ca(),i.child=e.child,i.flags|=128,i=null):(Ca(),R=l.fallback,f=i.mode,l=Vl({mode:"visible",children:l.children},f),R=rr(R,f,r,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,hr(i,e.child,null,r),l=i.child,l.memoizedState=Cf(r),l.childLanes=wf(e,S,r),i.memoizedState=Rf,i=po(null,l));else if(Ra(i),fh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ft=S.dgst;S=ft,l=Error(a(419)),l.stack="",l.digest=S,eo({value:l,source:null,stack:null}),i=Uf(e,i,r)}else if(fn||qr(e,i,r,!1),S=(r&e.childLanes)!==0,fn||S){if(S=qe,S!==null&&(l=wn(S,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,ar(e,l),Zn(S,e,l),Tf;uh(R)||Ql(),i=Uf(e,i,r)}else uh(R)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ze=mi(R.nextSibling),Tn=i,De=!0,Sa=null,di=!1,e!==null&&gm(i,e),i=Df(i,l.children),i.flags|=4096);return i}return f?(Ca(),R=l.fallback,f=i.mode,V=e.child,ft=V.sibling,l=ki(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ft!==null?R=ki(ft,R):(R=rr(R,f,r,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,po(null,l),l=i.child,R=e.child.memoizedState,R===null?R=Cf(r):(f=R.cachePool,f!==null?(V=cn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Mm(),R={baseLanes:R.baseLanes|r,cachePool:f}),l.memoizedState=R,l.childLanes=wf(e,S,r),i.memoizedState=Rf,po(e.child,l)):(Ra(i),r=e.child,e=r.sibling,r=ki(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function Df(e,i){return i=Vl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Vl(e,i){return e=ti(22,e,null,i),e.lanes=0,e}function Uf(e,i,r){return hr(i,e.child,null,r),e=Df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Fg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Wu(e.return,i,r)}function Lf(e,i,r,l,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=d)}function Pg(e,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=rn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,et(rn,S),Rn(e,i,l,r),l=De?to:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fg(e,r,i);else if(e.tag===19)Fg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&Dl(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Lf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Dl(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}Lf(i,!0,r,null,d,l);break;case"together":Lf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Zi(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Ua|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(qr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=ki(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ki(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function uS(e,i,r){switch(i.tag){case 3:vt(i,i.stateNode.containerInfo),Ea(i,cn,e.memoizedState.cache),sr();break;case 27:case 5:Ft(i);break;case 4:vt(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,af(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ra(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Og(e,i,r):(Ra(i),e=Zi(e,i,r),e!==null?e.sibling:null);Ra(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(qr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return Pg(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),et(rn,rn.current),l)break;return null;case 22:return i.lanes=0,Cg(e,i,r,i.pendingProps);case 24:Ea(i,cn,e.memoizedState.cache)}return Zi(e,i,r)}function zg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!Nf(e,r)&&(i.flags&128)===0)return fn=!1,uS(e,i,r);fn=(e.flags&131072)!==0}else fn=!1,De&&(i.flags&1048576)!==0&&mm(i,to,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=ur(i.elementType),i.type=e,typeof e=="function")zu(e)?(l=pr(e,l),i.tag=1,i=Lg(null,i,e,l,r)):(i.tag=0,i=Af(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===w){i.tag=11,i=Tg(null,i,e,l,r);break t}else if(f===P){i.tag=14,i=Ag(null,i,e,l,r);break t}}throw i=_t(e)||e,Error(a(306,i,""))}}return i;case 0:return Af(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=pr(l,i.pendingProps),Lg(e,i,l,f,r);case 3:t:{if(vt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Ju(e,i),lo(i,l,null,r);var S=i.memoizedState;if(l=S.cache,Ea(i,cn,l),l!==d.cache&&qu(i,[cn],r,!0),oo(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Ng(e,i,l,r);break t}else if(l!==f){f=ui(Error(a(424)),i),eo(f),i=Ng(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=mi(e.firstChild),Tn=i,De=!0,Sa=null,di=!0,r=Cm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(sr(),l===f){i=Zi(e,i,r);break t}Rn(e,i,l,r)}i=i.child}return i;case 26:return Gl(e,i),e===null?(r=j0(i.type,null,i.pendingProps,null))?i.memoizedState=r:De||(r=i.type,e=i.pendingProps,l=ac(Y.current).createElement(r),l[tn]=i,l[En]=e,Cn(l,r,e),$(l),i.stateNode=l):i.memoizedState=j0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ft(i),e===null&&De&&(l=i.stateNode=W0(i.type,i.pendingProps,Y.current),Tn=i,di=!0,f=Ze,Pa(i.type)?(hh=f,Ze=mi(l.firstChild)):Ze=f),Rn(e,i,i.pendingProps.children,r),Gl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&De&&((f=l=Ze)&&(l=HS(l,i.type,i.pendingProps,di),l!==null?(i.stateNode=l,Tn=i,Ze=mi(l.firstChild),di=!1,f=!0):f=!1),f||Ma(i)),Ft(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,l=d.children,oh(f,d)?l=null:S!==null&&oh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=sf(e,i,eS,null,null,r),wo._currentValue=f),Gl(e,i),Rn(e,i,l,r),i.child;case 6:return e===null&&De&&((e=r=Ze)&&(r=GS(r,i.pendingProps,di),r!==null?(i.stateNode=r,Tn=i,Ze=null,e=!0):e=!1),e||Ma(i)),null;case 13:return Og(e,i,r);case 4:return vt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=hr(i,null,l,r):Rn(e,i,l,r),i.child;case 11:return Tg(e,i,i.type,i.pendingProps,r);case 7:return Rn(e,i,i.pendingProps,r),i.child;case 8:return Rn(e,i,i.pendingProps.children,r),i.child;case 12:return Rn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ea(i,i.type,l.value),Rn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,lr(i),f=An(f),l=l(f),i.flags|=1,Rn(e,i,l,r),i.child;case 14:return Ag(e,i,i.type,i.pendingProps,r);case 15:return Rg(e,i,i.type,i.pendingProps,r);case 19:return Pg(e,i,r);case 31:return cS(e,i,r);case 22:return Cg(e,i,r,i.pendingProps);case 24:return lr(i),l=An(cn),e===null?(f=Zu(),f===null&&(f=qe,d=Yu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},Qu(i),Ea(i,cn,f)):((e.lanes&r)!==0&&(Ju(e,i),lo(i,null,null,r),oo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ea(i,cn,l)):(l=d.cache,Ea(i,cn,l),l!==f.cache&&qu(i,[cn],r,!0))),Rn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ki(e){e.flags|=4}function Of(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(u0())e.flags|=8192;else throw fr=Al,Ku}else e.flags&=-16777217}function Bg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$0(i))if(u0())e.flags|=8192;else throw fr=Al,Ku}function kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ye():536870912,e.lanes|=i,as|=i)}function mo(e,i){if(!De)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function fS(e,i,r){var l=i.pendingProps;switch(Gu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qi(cn),wt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ku())),Ke(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(Ki(i),d!==null?(Ke(i),Bg(i,d)):(Ke(i),Of(i,f,null,l,r))):d?d!==e.memoizedState?(Ki(i),Ke(i),Bg(i,d)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ki(i),Ke(i),Of(i,f,e,l,r)),null;case 27:if(Ot(i),r=Y.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}e=z.current,Wr(i)?vm(i):(e=W0(f,l,r),i.stateNode=e,Ki(i))}return Ke(i),null;case 5:if(Ot(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}if(d=z.current,Wr(i))vm(i);else{var S=ac(Y.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[tn]=i,d[En]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Cn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ki(i)}}return Ke(i),Of(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=Y.current,Wr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Tn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[tn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||O0(e.nodeValue,r)),e||Ma(i,!0)}else e=ac(e).createTextNode(l),e[tn]=i,i.stateNode=e}return Ke(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Wr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[tn]=i}else sr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else r=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ni(i),i):(ni(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ke(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Wr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[tn]=i}else sr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),f=!1}else f=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ni(i),i):(ni(i),null)}return ni(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),kl(i,i.updateQueue),Ke(i),null);case 4:return wt(),e===null&&nh(i.stateNode.containerInfo),Ke(i),null;case 10:return qi(i.type),Ke(i),null;case 19:if(at(rn),l=i.memoizedState,l===null)return Ke(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)mo(l,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Dl(e),d!==null){for(i.flags|=128,mo(l,!1),e=d.updateQueue,i.updateQueue=e,kl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)hm(r,e),r=r.sibling;return et(rn,rn.current&1|2),De&&Xi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&J()>jl&&(i.flags|=128,f=!0,mo(l,!1),i.lanes=4194304)}else{if(!f)if(e=Dl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,kl(i,e),mo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!De)return Ke(i),null}else 2*J()-l.renderingStartTime>jl&&r!==536870912&&(i.flags|=128,f=!0,mo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=J(),e.sibling=null,r=rn.current,et(rn,f?r&1|2:r&1),De&&Xi(i,l.treeForkCount),e):(Ke(i),null);case 22:case 23:return ni(i),nf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),r=i.updateQueue,r!==null&&kl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&at(cr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),qi(cn),Ke(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function hS(e,i){switch(Gu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return qi(cn),wt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ot(i),null;case 31:if(i.memoizedState!==null){if(ni(i),i.alternate===null)throw Error(a(340));sr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));sr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return at(rn),null;case 4:return wt(),null;case 10:return qi(i.type),null;case 22:case 23:return ni(i),nf(),e!==null&&at(cr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return qi(cn),null;case 25:return null;default:return null}}function Ig(e,i){switch(Gu(i),i.tag){case 3:qi(cn),wt();break;case 26:case 27:case 5:Ot(i);break;case 4:wt();break;case 31:i.memoizedState!==null&&ni(i);break;case 13:ni(i);break;case 19:at(rn);break;case 10:qi(i.type);break;case 22:case 23:ni(i),nf(),e!==null&&at(cr);break;case 24:qi(cn)}}function go(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var d=r.create,S=r.inst;l=d(),S.destroy=l}r=r.next}while(r!==f)}}catch(R){Ie(i,i.return,R)}}function wa(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var V=r,ft=R;try{ft()}catch(At){Ie(f,V,At)}}}l=l.next}while(l!==d)}}catch(At){Ie(i,i.return,At)}}function Hg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Dm(i,r)}catch(l){Ie(e,e.return,l)}}}function Gg(e,i,r){r.props=pr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ie(e,i,l)}}function vo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Ie(e,i,f)}}function Oi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ie(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ie(e,i,f)}else r.current=null}function Vg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ie(e,e.return,f)}}function Ff(e,i,r){try{var l=e.stateNode;OS(l,e.type,r,i),l[En]=i}catch(f){Ie(e,e.return,f)}}function kg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||kg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Gi));else if(l!==4&&(l===27&&Pa(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(zf(e,i,r),e=e.sibling;e!==null;)zf(e,i,r),e=e.sibling}function Xl(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Pa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Xl(e,i,r),e=e.sibling;e!==null;)Xl(e,i,r),e=e.sibling}function Xg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Cn(i,l,r),i[tn]=e,i[En]=r}catch(d){Ie(e,e.return,d)}}var Qi=!1,hn=!1,Bf=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function dS(e,i){if(e=e.containerInfo,rh=fc,e=im(e),Du(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var S=0,R=-1,V=-1,ft=0,At=0,Ut=e,mt=null;e:for(;;){for(var Mt;Ut!==r||f!==0&&Ut.nodeType!==3||(R=S+f),Ut!==d||l!==0&&Ut.nodeType!==3||(V=S+l),Ut.nodeType===3&&(S+=Ut.nodeValue.length),(Mt=Ut.firstChild)!==null;)mt=Ut,Ut=Mt;for(;;){if(Ut===e)break e;if(mt===r&&++ft===f&&(R=S),mt===d&&++At===l&&(V=S),(Mt=Ut.nextSibling)!==null)break;Ut=mt,mt=Ut.parentNode}Ut=Mt}r=R===-1||V===-1?null:{start:R,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(sh={focusedElem:e,selectionRange:r},fc=!1,xn=i;xn!==null;)if(i=xn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,xn=e;else for(;xn!==null;){switch(i=xn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var te=pr(r.type,f);e=l.getSnapshotBeforeUpdate(te,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(le){Ie(r,r.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)ch(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,xn=e;break}xn=i.return}}function qg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:$i(e,r),l&4&&go(5,r);break;case 1:if($i(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Ie(r,r.return,S)}else{var f=pr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(r,r.return,S)}}l&64&&Hg(r),l&512&&vo(r,r.return);break;case 3:if($i(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Dm(e,i)}catch(S){Ie(r,r.return,S)}}break;case 27:i===null&&l&4&&Xg(r);case 26:case 5:$i(e,r),i===null&&l&4&&Vg(r),l&512&&vo(r,r.return);break;case 12:$i(e,r);break;case 31:$i(e,r),l&4&&Zg(e,r);break;case 13:$i(e,r),l&4&&Kg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=MS.bind(null,r),VS(e,r))));break;case 22:if(l=r.memoizedState!==null||Qi,!l){i=i!==null&&i.memoizedState!==null||hn,f=Qi;var d=hn;Qi=l,(hn=i)&&!d?ta(e,r,(r.subtreeFlags&8772)!==0):$i(e,r),Qi=f,hn=d}break;case 30:break;default:$i(e,r)}}function Yg(e){var i=e.alternate;i!==null&&(e.alternate=null,Yg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Xs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Wn=!1;function Ji(e,i,r){for(r=r.child;r!==null;)jg(e,i,r),r=r.sibling}function jg(e,i,r){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Wt,r)}catch{}switch(r.tag){case 26:hn||Oi(r,i),Ji(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||Oi(r,i);var l=Je,f=Wn;Pa(r.type)&&(Je=r.stateNode,Wn=!1),Ji(e,i,r),Ao(r.stateNode),Je=l,Wn=f;break;case 5:hn||Oi(r,i);case 6:if(l=Je,f=Wn,Je=null,Ji(e,i,r),Je=l,Wn=f,Je!==null)if(Wn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(d){Ie(r,i,d)}else try{Je.removeChild(r.stateNode)}catch(d){Ie(r,i,d)}break;case 18:Je!==null&&(Wn?(e=Je,H0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),hs(e)):H0(Je,r.stateNode));break;case 4:l=Je,f=Wn,Je=r.stateNode.containerInfo,Wn=!0,Ji(e,i,r),Je=l,Wn=f;break;case 0:case 11:case 14:case 15:wa(2,r,i),hn||wa(4,r,i),Ji(e,i,r);break;case 1:hn||(Oi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Gg(r,i,l)),Ji(e,i,r);break;case 21:Ji(e,i,r);break;case 22:hn=(l=hn)||r.memoizedState!==null,Ji(e,i,r),hn=l;break;default:Ji(e,i,r)}}function Zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hs(e)}catch(r){Ie(i,i.return,r)}}}function Kg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hs(e)}catch(r){Ie(i,i.return,r)}}function pS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Wg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Wg),i;default:throw Error(a(435,e.tag))}}function Wl(e,i){var r=pS(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=ES.bind(null,e,l);l.then(f,f)}})}function qn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=e,S=i,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(Pa(R.type)){Je=R.stateNode,Wn=!1;break t}break;case 5:Je=R.stateNode,Wn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Wn=!0;break t}R=R.return}if(Je===null)throw Error(a(160));jg(d,S,f),Je=null,Wn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Qg(i,e),i=i.sibling}var bi=null;function Qg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),l&4&&(wa(3,e,e.return),go(3,e),wa(5,e,e.return));break;case 1:qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),l&64&&Qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=bi;if(qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[tr]||d[tn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Cn(d,l,r),d[tn]=e,$(d),l=d;break t;case"link":var S=Q0("link","href",f).get(l+(r.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(R,1);break e}}d=f.createElement(l),Cn(d,l,r),f.head.appendChild(d);break;case"meta":if(S=Q0("meta","content",f).get(l+(r.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(R,1);break e}}d=f.createElement(l),Cn(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[tn]=e,$(d),l=d}e.stateNode=l}else J0(f,e.type,e.stateNode);else e.stateNode=K0(f,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?J0(f,e.type,e.stateNode):K0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,r.memoizedProps)}break;case 27:qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),r!==null&&l&4&&Ff(e,e.memoizedProps,r.memoizedProps);break;case 5:if(qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),e.flags&32){f=e.stateNode;try{kn(f,"")}catch(te){Ie(e,e.return,te)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Ff(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Bf=!0);break;case 6:if(qn(i,e),Yn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(te){Ie(e,e.return,te)}}break;case 3:if(oc=null,f=bi,bi=rc(i.containerInfo),qn(i,e),bi=f,Yn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{hs(i.containerInfo)}catch(te){Ie(e,e.return,te)}Bf&&(Bf=!1,Jg(e));break;case 4:l=bi,bi=rc(e.stateNode.containerInfo),qn(i,e),Yn(e),bi=l;break;case 12:qn(i,e),Yn(e);break;case 31:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wl(e,l)));break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Yl=J()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wl(e,l)));break;case 22:f=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,ft=Qi,At=hn;if(Qi=ft||f,hn=At||V,qn(i,e),hn=At,Qi=ft,Yn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||V||Qi||hn||mr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(d=V.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var Ut=V.memoizedProps.style,mt=Ut!=null&&Ut.hasOwnProperty("display")?Ut.display:null;R.style.display=mt==null||typeof mt=="boolean"?"":(""+mt).trim()}}catch(te){Ie(V,V.return,te)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(te){Ie(V,V.return,te)}}}else if(i.tag===18){if(r===null){V=i;try{var Mt=V.stateNode;f?G0(Mt,!0):G0(V.stateNode,!1)}catch(te){Ie(V,V.return,te)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Wl(e,r))));break;case 19:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Wl(e,l)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(kg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=Pf(e);Xl(e,d,f);break;case 5:var S=r.stateNode;r.flags&32&&(kn(S,""),r.flags&=-33);var R=Pf(e);Xl(e,R,S);break;case 3:case 4:var V=r.stateNode.containerInfo,ft=Pf(e);zf(e,ft,V);break;default:throw Error(a(161))}}catch(At){Ie(e,e.return,At)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Jg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Jg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function $i(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)qg(e,i.alternate,i),i=i.sibling}function mr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),mr(i);break;case 1:Oi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Gg(i,i.return,r),mr(i);break;case 27:Ao(i.stateNode);case 26:case 5:Oi(i,i.return),mr(i);break;case 22:i.memoizedState===null&&mr(i);break;case 30:mr(i);break;default:mr(i)}e=e.sibling}}function ta(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:ta(f,d,r),go(4,d);break;case 1:if(ta(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ft){Ie(l,l.return,ft)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)wm(V[f],R)}catch(ft){Ie(l,l.return,ft)}}r&&S&64&&Hg(d),vo(d,d.return);break;case 27:Xg(d);case 26:case 5:ta(f,d,r),r&&l===null&&S&4&&Vg(d),vo(d,d.return);break;case 12:ta(f,d,r);break;case 31:ta(f,d,r),r&&S&4&&Zg(f,d);break;case 13:ta(f,d,r),r&&S&4&&Kg(f,d);break;case 22:d.memoizedState===null&&ta(f,d,r),vo(d,d.return);break;case 30:break;default:ta(f,d,r)}i=i.sibling}}function If(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&no(r))}function Hf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&no(e))}function Ti(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)$g(e,i,r,l),i=i.sibling}function $g(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ti(e,i,r,l),f&2048&&go(9,i);break;case 1:Ti(e,i,r,l);break;case 3:Ti(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&no(e)));break;case 12:if(f&2048){Ti(e,i,r,l),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ie(i,i.return,V)}}else Ti(e,i,r,l);break;case 31:Ti(e,i,r,l);break;case 13:Ti(e,i,r,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ti(e,i,r,l):_o(e,i):d._visibility&2?Ti(e,i,r,l):(d._visibility|=2,es(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&If(S,i);break;case 24:Ti(e,i,r,l),f&2048&&Hf(i.alternate,i);break;default:Ti(e,i,r,l)}}function es(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,R=r,V=l,ft=S.flags;switch(S.tag){case 0:case 11:case 15:es(d,S,R,V,f),go(8,S);break;case 23:break;case 22:var At=S.stateNode;S.memoizedState!==null?At._visibility&2?es(d,S,R,V,f):_o(d,S):(At._visibility|=2,es(d,S,R,V,f)),f&&ft&2048&&If(S.alternate,S);break;case 24:es(d,S,R,V,f),f&&ft&2048&&Hf(S.alternate,S);break;default:es(d,S,R,V,f)}i=i.sibling}}function _o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:_o(r,l),f&2048&&If(l.alternate,l);break;case 24:_o(r,l),f&2048&&Hf(l.alternate,l);break;default:_o(r,l)}i=i.sibling}}var yo=8192;function ns(e,i,r){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)t0(e,i,r),e=e.sibling}function t0(e,i,r){switch(e.tag){case 26:ns(e,i,r),e.flags&yo&&e.memoizedState!==null&&tM(r,bi,e.memoizedState,e.memoizedProps);break;case 5:ns(e,i,r);break;case 3:case 4:var l=bi;bi=rc(e.stateNode.containerInfo),ns(e,i,r),bi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yo,yo=16777216,ns(e,i,r),yo=l):ns(e,i,r));break;default:ns(e,i,r)}}function e0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function xo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];xn=l,i0(l,e)}e0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)n0(e),e=e.sibling}function n0(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ql(e)):xo(e);break;default:xo(e)}}function ql(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];xn=l,i0(l,e)}e0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:wa(8,i,i.return),ql(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,ql(i));break;default:ql(i)}e=e.sibling}}function i0(e,i){for(;xn!==null;){var r=xn;switch(r.tag){case 0:case 11:case 15:wa(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:no(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,xn=l;else t:for(r=e;xn!==null;){l=xn;var f=l.sibling,d=l.return;if(Yg(l),l===r){xn=null;break t}if(f!==null){f.return=d,xn=f;break t}xn=d}}}var mS={getCacheForType:function(e){var i=An(cn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return An(cn).controller.signal}},gS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,Se=null,Ae=0,Be=0,ii=null,Da=!1,is=!1,Gf=!1,ea=0,an=0,Ua=0,gr=0,Vf=0,ai=0,as=0,So=null,jn=null,kf=!1,Yl=0,a0=0,jl=1/0,Zl=null,La=null,mn=0,Na=null,rs=null,na=0,Xf=0,Wf=null,r0=null,Mo=0,qf=null;function ri(){return(Pe&2)!==0&&Ae!==0?Ae&-Ae:B.T!==null?Jf():Vs()}function s0(){if(ai===0)if((Ae&536870912)===0||De){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,i,r){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Oa(e,Ae,ai,!1)),$e(e,r),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(gr|=r),an===4&&Oa(e,Ae,ai,!1)),Fi(e))}function o0(e,i,r){if((Pe&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||oe(e,i),f=l?yS(e,i):jf(e,i,!0),d=l;do{if(f===0){is&&!l&&Oa(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!vS(r)){f=jf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var R=e;f=So;var V=R.current.memoizedState.isDehydrated;if(V&&(ss(R,S).flags|=256),S=jf(R,S,!1),S!==2){if(Gf&&!V){R.errorRecoveryDisabledLanes|=d,gr|=d,f=4;break t}d=jn,jn=f,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){ss(e,0),Oa(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(l,i,ai,!Da);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Yl+300-J(),10<f)){if(Oa(l,i,ai,!Da),qt(l,0,!0)!==0)break t;na=i,l.timeoutHandle=B0(l0.bind(null,l,r,jn,Zl,kf,i,ai,gr,as,Da,d,"Throttled",-0,0),f);break t}l0(l,r,jn,Zl,kf,i,ai,gr,as,Da,d,null,-0,0)}}break}while(!0);Fi(e)}function l0(e,i,r,l,f,d,S,R,V,ft,At,Ut,mt,Mt){if(e.timeoutHandle=-1,Ut=i.subtreeFlags,Ut&8192||(Ut&16785408)===16785408){Ut={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},t0(i,d,Ut);var te=(d&62914560)===d?Yl-J():(d&4194048)===d?a0-J():0;if(te=eM(Ut,te),te!==null){na=d,e.cancelPendingCommit=te(g0.bind(null,e,i,d,r,l,f,S,R,V,At,Ut,null,mt,Mt)),Oa(e,d,S,!ft);return}}g0(e,i,d,r,l,f,S,R,V)}function vS(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!$n(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(e,i,r,l){i&=~Vf,i&=~gr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-ne(f),S=1<<d;l[d]=-1,f&=~S}r!==0&&xi(e,r,i)}function Kl(){return(Pe&6)===0?(Eo(0),!1):!0}function Yf(){if(Se!==null){if(Be===0)var e=Se.return;else e=Se,Wi=or=null,cf(e),Kr=null,ao=0,e=Se;for(;e!==null;)Ig(e.alternate,e),e=e.return;Se=null}}function ss(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,zS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),na=0,Yf(),qe=e,Se=r=ki(e.current,null),Ae=i,Be=0,ii=null,Da=!1,is=oe(e,i),Gf=!1,as=ai=Vf=gr=Ua=an=0,jn=So=null,kf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-ne(l),d=1<<f;i|=e[f],l&=~d}return ea=i,vl(),r}function c0(e,i){me=null,B.H=ho,i===Zr||i===Tl?(i=Tm(),Be=3):i===Ku?(i=Tm(),Be=4):Be=i===Tf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,Se===null&&(an=1,Il(e,ui(i,e.current)))}function u0(){var e=ei.current;return e===null?!0:(Ae&4194048)===Ae?pi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===pi:!1}function f0(){var e=B.H;return B.H=ho,e===null?ho:e}function h0(){var e=B.A;return B.A=mS,e}function Ql(){an=4,Da||(Ae&4194048)!==Ae&&ei.current!==null||(is=!0),(Ua&134217727)===0&&(gr&134217727)===0||qe===null||Oa(qe,Ae,ai,!1)}function jf(e,i,r){var l=Pe;Pe|=2;var f=f0(),d=h0();(qe!==e||Ae!==i)&&(Zl=null,ss(e,i)),i=!1;var S=an;t:do try{if(Be!==0&&Se!==null){var R=Se,V=ii;switch(Be){case 8:Yf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var ft=Be;if(Be=0,ii=null,os(e,R,V,ft),r&&is){S=0;break t}break;default:ft=Be,Be=0,ii=null,os(e,R,V,ft)}}_S(),S=an;break}catch(At){c0(e,At)}while(!0);return i&&e.shellSuspendCounter++,Wi=or=null,Pe=l,B.H=f,B.A=d,Se===null&&(qe=null,Ae=0,vl()),S}function _S(){for(;Se!==null;)d0(Se)}function yS(e,i){var r=Pe;Pe|=2;var l=f0(),f=h0();qe!==e||Ae!==i?(Zl=null,jl=J()+500,ss(e,i)):is=oe(e,i);t:do try{if(Be!==0&&Se!==null){i=Se;var d=ii;e:switch(Be){case 1:Be=0,ii=null,os(e,i,d,1);break;case 2:case 9:if(Em(d)){Be=0,ii=null,p0(i);break}i=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Fi(e)},d.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Em(d)?(Be=0,ii=null,p0(i)):(Be=0,ii=null,os(e,i,d,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var R=Se;if(S?$0(S):R.stateNode.complete){Be=0,ii=null;var V=R.sibling;if(V!==null)Se=V;else{var ft=R.return;ft!==null?(Se=ft,Jl(ft)):Se=null}break e}}Be=0,ii=null,os(e,i,d,5);break;case 6:Be=0,ii=null,os(e,i,d,6);break;case 8:Yf(),an=6;break t;default:throw Error(a(462))}}xS();break}catch(At){c0(e,At)}while(!0);return Wi=or=null,B.H=l,B.A=f,Pe=r,Se!==null?0:(qe=null,Ae=0,vl(),an)}function xS(){for(;Se!==null&&!E();)d0(Se)}function d0(e){var i=zg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,i===null?Jl(e):Se=i}function p0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Ug(r,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=Ug(r,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:cf(i);default:Ig(r,i),i=Se=hm(i,ea),i=zg(r,i,ea)}e.memoizedProps=e.pendingProps,i===null?Jl(e):Se=i}function os(e,i,r,l){Wi=or=null,cf(i),Kr=null,ao=0;var f=i.return;try{if(lS(e,f,i,r,Ae)){an=1,Il(e,ui(r,e.current)),Se=null;return}}catch(d){if(f!==null)throw Se=f,d;an=1,Il(e,ui(r,e.current)),Se=null;return}i.flags&32768?(De||l===1?e=!0:is||(Ae&536870912)!==0?e=!1:(Da=e=!0,(l===2||l===9||l===3||l===6)&&(l=ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),m0(i,e)):Jl(i)}function Jl(e){var i=e;do{if((i.flags&32768)!==0){m0(i,Da);return}e=i.return;var r=fS(i.alternate,i,ea);if(r!==null){Se=r;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);an===0&&(an=5)}function m0(e,i){do{var r=hS(e.alternate,e);if(r!==null){r.flags&=32767,Se=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=r}while(e!==null);an=6,Se=null}function g0(e,i,r,l,f,d,S,R,V){e.cancelPendingCommit=null;do $l();while(mn!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Fu,Mn(e,r,d,S,R,V),e===qe&&(Se=qe=null,Ae=0),rs=i,Na=e,na=r,Xf=d,Wf=f,r0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bS(j,function(){return S0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=rt.p,rt.p=2,S=Pe,Pe|=4;try{dS(e,i,r)}finally{Pe=S,rt.p=f,B.T=l}}mn=1,v0(),_0(),y0()}}function v0(){if(mn===1){mn=0;var e=Na,i=rs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=rt.p;rt.p=2;var f=Pe;Pe|=4;try{Qg(i,e);var d=sh,S=im(e.containerInfo),R=d.focusedElem,V=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&nm(R.ownerDocument.documentElement,R)){if(V!==null&&Du(R)){var ft=V.start,At=V.end;if(At===void 0&&(At=ft),"selectionStart"in R)R.selectionStart=ft,R.selectionEnd=Math.min(At,R.value.length);else{var Ut=R.ownerDocument||document,mt=Ut&&Ut.defaultView||window;if(mt.getSelection){var Mt=mt.getSelection(),te=R.textContent.length,le=Math.min(V.start,te),ke=V.end===void 0?le:Math.min(V.end,te);!Mt.extend&&le>ke&&(S=ke,ke=le,le=S);var it=em(R,le),Z=em(R,ke);if(it&&Z&&(Mt.rangeCount!==1||Mt.anchorNode!==it.node||Mt.anchorOffset!==it.offset||Mt.focusNode!==Z.node||Mt.focusOffset!==Z.offset)){var ut=Ut.createRange();ut.setStart(it.node,it.offset),Mt.removeAllRanges(),le>ke?(Mt.addRange(ut),Mt.extend(Z.node,Z.offset)):(ut.setEnd(Z.node,Z.offset),Mt.addRange(ut))}}}}for(Ut=[],Mt=R;Mt=Mt.parentNode;)Mt.nodeType===1&&Ut.push({element:Mt,left:Mt.scrollLeft,top:Mt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ut.length;R++){var Ct=Ut[R];Ct.element.scrollLeft=Ct.left,Ct.element.scrollTop=Ct.top}}fc=!!rh,sh=rh=null}finally{Pe=f,rt.p=l,B.T=r}}e.current=i,mn=2}}function _0(){if(mn===2){mn=0;var e=Na,i=rs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=rt.p;rt.p=2;var f=Pe;Pe|=4;try{qg(e,i.alternate,i)}finally{Pe=f,rt.p=l,B.T=r}}mn=3}}function y0(){if(mn===4||mn===3){mn=0,G();var e=Na,i=rs,r=na,l=r0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,rs=Na=null,x0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(La=null),Or(r),i=i.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Wt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=rt.p,rt.p=2,B.T=null;try{for(var d=e.onRecoverableError,S=0;S<l.length;S++){var R=l[S];d(R.value,{componentStack:R.stack})}}finally{B.T=i,rt.p=f}}(na&3)!==0&&$l(),Fi(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===qf?Mo++:(Mo=0,qf=e):Mo=0,Eo(0)}}function x0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,no(i)))}function $l(){return v0(),_0(),y0(),S0()}function S0(){if(mn!==5)return!1;var e=Na,i=Xf;Xf=0;var r=Or(na),l=B.T,f=rt.p;try{rt.p=32>r?32:r,B.T=null,r=Wf,Wf=null;var d=Na,S=na;if(mn=0,rs=Na=null,na=0,(Pe&6)!==0)throw Error(a(331));var R=Pe;if(Pe|=4,n0(d.current),$g(d,d.current,S,r),Pe=R,Eo(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Wt,d)}catch{}return!0}finally{rt.p=f,B.T=l,x0(e,i)}}function M0(e,i,r){i=ui(r,i),i=bf(e.stateNode,i,2),e=Aa(e,i,2),e!==null&&($e(e,2),Fi(e))}function Ie(e,i,r){if(e.tag===3)M0(e,e,r);else for(;i!==null;){if(i.tag===3){M0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(La===null||!La.has(l))){e=ui(r,e),r=Eg(2),l=Aa(i,r,2),l!==null&&(bg(r,l,i,e),$e(l,2),Fi(l));break}}i=i.return}}function Zf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new gS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Gf=!0,f.add(r),e=SS.bind(null,e,i,r),i.then(e,e))}function SS(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(Ae&r)===r&&(an===4||an===3&&(Ae&62914560)===Ae&&300>J()-Yl?(Pe&2)===0&&ss(e,0):Vf|=r,as===Ae&&(as=0)),Fi(e)}function E0(e,i){i===0&&(i=Ye()),e=ar(e,i),e!==null&&($e(e,i),Fi(e))}function MS(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),E0(e,r)}function ES(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),E0(e,r)}function bS(e,i){return pt(e,i)}var tc=null,ls=null,Kf=!1,ec=!1,Qf=!1,Fa=0;function Fi(e){e!==ls&&e.next===null&&(ls===null?tc=ls=e:ls=ls.next=e),ec=!0,Kf||(Kf=!0,AS())}function Eo(e,i){if(!Qf&&ec){Qf=!0;do for(var r=!1,l=tc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-ne(42|e)+1)-1,d&=f&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,R0(l,d))}else d=Ae,d=qt(l,l===qe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||oe(l,d)||(r=!0,R0(l,d));l=l.next}while(r);Qf=!1}}function TS(){b0()}function b0(){ec=Kf=!1;var e=0;Fa!==0&&PS()&&(e=Fa);for(var i=J(),r=null,l=tc;l!==null;){var f=l.next,d=T0(l,i);d===0?(l.next=null,r===null?tc=f:r.next=f,f===null&&(ls=r)):(r=l,(e!==0||(d&3)!==0)&&(ec=!0)),l=f}mn!==0&&mn!==5||Eo(e),Fa!==0&&(Fa=0)}function T0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-ne(d),R=1<<S,V=f[S];V===-1?((R&r)===0||(R&l)!==0)&&(f[S]=We(R,i)):V<=i&&(e.expiredLanes|=R),d&=~R}if(i=qe,r=Ae,r=qt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&A(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||oe(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&A(l),Or(r)){case 2:case 8:r=Lt;break;case 32:r=j;break;case 268435456:r=Pt;break;default:r=j}return l=A0.bind(null,e),r=pt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&A(l),e.callbackPriority=2,e.callbackNode=null,2}function A0(e,i){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if($l()&&e.callbackNode!==r)return null;var l=Ae;return l=qt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(o0(e,l,i),T0(e,J()),e.callbackNode!=null&&e.callbackNode===r?A0.bind(null,e):null)}function R0(e,i){if($l())return null;o0(e,i,!0)}function AS(){BS(function(){(Pe&6)!==0?pt(yt,TS):b0()})}function Jf(){if(Fa===0){var e=Yr;e===0&&(e=jt,jt<<=1,(jt&261888)===0&&(jt=256)),Fa=e}return Fa}function C0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function w0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function RS(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=C0((f[En]||null).action),S=l.submitter;S&&(i=(i=S[En]||null)?C0(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var R=new dl("action","action",null,l,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var V=S?w0(f,S):new FormData(f);_f(r,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=S?w0(f,S):new FormData(f),_f(r,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],CS=th.toLowerCase(),wS=th[0].toUpperCase()+th.slice(1);Ei(CS,"on"+wS)}Ei(sm,"onAnimationEnd"),Ei(om,"onAnimationIteration"),Ei(lm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Wx,"onTransitionRun"),Ei(qx,"onTransitionStart"),Ei(Yx,"onTransitionCancel"),Ei(cm,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function D0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],V=R.instance,ft=R.currentTarget;if(R=R.listener,V!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=ft;try{d(f)}catch(At){gl(At)}f.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(R=l[S],V=R.instance,ft=R.currentTarget,R=R.listener,V!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=ft;try{d(f)}catch(At){gl(At)}f.currentTarget=null,d=V}}}}function Me(e,i){var r=i[ks];r===void 0&&(r=i[ks]=new Set);var l=e+"__bubble";r.has(l)||(U0(i,e,2,!1),r.add(l))}function eh(e,i,r){var l=0;i&&(l|=4),U0(r,e,l,i)}var nc="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[nc]){e[nc]=!0,Gt.forEach(function(r){r!=="selectionchange"&&(DS.has(r)||eh(r,!1,e),eh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[nc]||(i[nc]=!0,eh("selectionchange",!1,i))}}function U0(e,i,r,l){switch(sv(i)){case 2:var f=aM;break;case 8:f=rM;break;default:f=vh}r=f.bind(null,i,r,e),f=void 0,!Su||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function ih(e,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=U(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue t}R=R.parentNode}}l=l.return}Pp(function(){var ft=d,At=yu(r),Ut=[];t:{var mt=um.get(e);if(mt!==void 0){var Mt=dl,te=e;switch(e){case"keypress":if(fl(r)===0)break t;case"keydown":case"keyup":Mt=Ex;break;case"focusin":te="focus",Mt=Tu;break;case"focusout":te="blur",Mt=Tu;break;case"beforeblur":case"afterblur":Mt=Tu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Mt=Ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Mt=fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Mt=Ax;break;case sm:case om:case lm:Mt=px;break;case cm:Mt=Cx;break;case"scroll":case"scrollend":Mt=cx;break;case"wheel":Mt=Dx;break;case"copy":case"cut":case"paste":Mt=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Mt=Gp;break;case"toggle":case"beforetoggle":Mt=Lx}var le=(i&4)!==0,ke=!le&&(e==="scroll"||e==="scrollend"),it=le?mt!==null?mt+"Capture":null:mt;le=[];for(var Z=ft,ut;Z!==null;){var Ct=Z;if(ut=Ct.stateNode,Ct=Ct.tag,Ct!==5&&Ct!==26&&Ct!==27||ut===null||it===null||(Ct=Ws(Z,it),Ct!=null&&le.push(To(Z,Ct,ut))),ke)break;Z=Z.return}0<le.length&&(mt=new Mt(mt,te,null,r,At),Ut.push({event:mt,listeners:le}))}}if((i&7)===0){t:{if(mt=e==="mouseover"||e==="pointerover",Mt=e==="mouseout"||e==="pointerout",mt&&r!==_u&&(te=r.relatedTarget||r.fromElement)&&(U(te)||te[Hi]))break t;if((Mt||mt)&&(mt=At.window===At?At:(mt=At.ownerDocument)?mt.defaultView||mt.parentWindow:window,Mt?(te=r.relatedTarget||r.toElement,Mt=ft,te=te?U(te):null,te!==null&&(ke=c(te),le=te.tag,te!==ke||le!==5&&le!==27&&le!==6)&&(te=null)):(Mt=null,te=ft),Mt!==te)){if(le=Ip,Ct="onMouseLeave",it="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(le=Gp,Ct="onPointerLeave",it="onPointerEnter",Z="pointer"),ke=Mt==null?mt:xt(Mt),ut=te==null?mt:xt(te),mt=new le(Ct,Z+"leave",Mt,r,At),mt.target=ke,mt.relatedTarget=ut,Ct=null,U(At)===ft&&(le=new le(it,Z+"enter",te,r,At),le.target=ut,le.relatedTarget=ke,Ct=le),ke=Ct,Mt&&te)e:{for(le=US,it=Mt,Z=te,ut=0,Ct=it;Ct;Ct=le(Ct))ut++;Ct=0;for(var re=Z;re;re=le(re))Ct++;for(;0<ut-Ct;)it=le(it),ut--;for(;0<Ct-ut;)Z=le(Z),Ct--;for(;ut--;){if(it===Z||Z!==null&&it===Z.alternate){le=it;break e}it=le(it),Z=le(Z)}le=null}else le=null;Mt!==null&&L0(Ut,mt,Mt,le,!1),te!==null&&ke!==null&&L0(Ut,ke,te,le,!0)}}t:{if(mt=ft?xt(ft):window,Mt=mt.nodeName&&mt.nodeName.toLowerCase(),Mt==="select"||Mt==="input"&&mt.type==="file")var Ne=Zp;else if(Yp(mt))if(Kp)Ne=Vx;else{Ne=Hx;var ie=Ix}else Mt=mt.nodeName,!Mt||Mt.toLowerCase()!=="input"||mt.type!=="checkbox"&&mt.type!=="radio"?ft&&vu(ft.elementType)&&(Ne=Zp):Ne=Gx;if(Ne&&(Ne=Ne(e,ft))){jp(Ut,Ne,r,At);break t}ie&&ie(e,mt,ft),e==="focusout"&&ft&&mt.type==="number"&&ft.memoizedProps.value!=null&&Dn(mt,"number",mt.value)}switch(ie=ft?xt(ft):window,e){case"focusin":(Yp(ie)||ie.contentEditable==="true")&&(Ir=ie,Uu=ft,$s=null);break;case"focusout":$s=Uu=Ir=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,am(Ut,r,At);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":am(Ut,r,At)}var ve;if(Ru)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Br?Wp(e,r)&&(Re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Re="onCompositionStart");Re&&(Vp&&r.locale!=="ko"&&(Br||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Br&&(ve=zp()):(ya=At,Mu="value"in ya?ya.value:ya.textContent,Br=!0)),ie=ic(ft,Re),0<ie.length&&(Re=new Hp(Re,e,null,r,At),Ut.push({event:Re,listeners:ie}),ve?Re.data=ve:(ve=qp(r),ve!==null&&(Re.data=ve)))),(ve=Ox?Fx(e,r):Px(e,r))&&(Re=ic(ft,"onBeforeInput"),0<Re.length&&(ie=new Hp("onBeforeInput","beforeinput",null,r,At),Ut.push({event:ie,listeners:Re}),ie.data=ve)),RS(Ut,e,ft,r,At)}D0(Ut,i)})}function To(e,i,r){return{instance:e,listener:i,currentTarget:r}}function ic(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ws(e,r),f!=null&&l.unshift(To(e,f,d)),f=Ws(e,i),f!=null&&l.push(To(e,f,d))),e.tag===3)return l;e=e.return}return[]}function US(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function L0(e,i,r,l,f){for(var d=i._reactName,S=[];r!==null&&r!==l;){var R=r,V=R.alternate,ft=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||ft===null||(V=ft,f?(ft=Ws(r,d),ft!=null&&S.unshift(To(r,ft,V))):f||(ft=Ws(r,d),ft!=null&&S.push(To(r,ft,V)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var LS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function N0(e){return(typeof e=="string"?e:""+e).replace(LS,`
`).replace(NS,"")}function O0(e,i){return i=N0(i),N0(e)===i}function Ve(e,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(e,""+l);break;case"className":je(e,"class",l);break;case"tabIndex":je(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":je(e,r,l);break;case"style":Op(e,l,d);break;case"data":if(i!=="object"){je(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=cl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Ve(e,i,"name",f.name,f,null),Ve(e,i,"formEncType",f.formEncType,f,null),Ve(e,i,"formMethod",f.formMethod,f,null),Ve(e,i,"formTarget",f.formTarget,f,null)):(Ve(e,i,"encType",f.encType,f,null),Ve(e,i,"method",f.method,f,null),Ve(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=cl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Gi);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=cl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),we(e,"popover",l);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":we(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ox.get(r)||r,we(e,r,l))}}function ah(e,i,r,l,f,d){switch(r){case"style":Op(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?kn(e,l):(typeof l=="number"||typeof l=="bigint")&&kn(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=e[En]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):we(e,r,l)}}}function Cn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,d,S,r,null)}}f&&Ve(e,i,"srcSet",r.srcSet,r,null),l&&Ve(e,i,"src",r.src,r,null);return;case"input":Me("invalid",e);var R=d=S=f=null,V=null,ft=null;for(l in r)if(r.hasOwnProperty(l)){var At=r[l];if(At!=null)switch(l){case"name":f=At;break;case"type":S=At;break;case"checked":V=At;break;case"defaultChecked":ft=At;break;case"value":d=At;break;case"defaultValue":R=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(a(137,i));break;default:Ve(e,i,l,At,r,null)}}zn(e,d,R,V,ft,S,f,!1);return;case"select":Me("invalid",e),l=S=d=null;for(f in r)if(r.hasOwnProperty(f)&&(R=r[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Ve(e,i,f,R,r,null)}i=d,r=S,e.multiple=!!l,i!=null?en(e,!!l,i,!1):r!=null&&en(e,!!l,r,!0);return;case"textarea":Me("invalid",e),d=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(R=r[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Ve(e,i,S,R,r,null)}Fr(e,l,f,d);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,V,l,r,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<bo.length;l++)Me(bo[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ft in r)if(r.hasOwnProperty(ft)&&(l=r[ft],l!=null))switch(ft){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,ft,l,r,null)}return;default:if(vu(i)){for(At in r)r.hasOwnProperty(At)&&(l=r[At],l!==void 0&&ah(e,i,At,l,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(l=r[R],l!=null&&Ve(e,i,R,l,r,null))}function OS(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,R=null,V=null,ft=null,At=null;for(Mt in r){var Ut=r[Mt];if(r.hasOwnProperty(Mt)&&Ut!=null)switch(Mt){case"checked":break;case"value":break;case"defaultValue":V=Ut;default:l.hasOwnProperty(Mt)||Ve(e,i,Mt,null,l,Ut)}}for(var mt in l){var Mt=l[mt];if(Ut=r[mt],l.hasOwnProperty(mt)&&(Mt!=null||Ut!=null))switch(mt){case"type":d=Mt;break;case"name":f=Mt;break;case"checked":ft=Mt;break;case"defaultChecked":At=Mt;break;case"value":S=Mt;break;case"defaultValue":R=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(a(137,i));break;default:Mt!==Ut&&Ve(e,i,mt,Mt,l,Ut)}}He(e,S,R,V,ft,At,d,f);return;case"select":Mt=S=R=mt=null;for(d in r)if(V=r[d],r.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":Mt=V;default:l.hasOwnProperty(d)||Ve(e,i,d,null,l,V)}for(f in l)if(d=l[f],V=r[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":mt=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==V&&Ve(e,i,f,d,l,V)}i=R,r=S,l=Mt,mt!=null?en(e,!!r,mt,!1):!!l!=!!r&&(i!=null?en(e,!!r,i,!0):en(e,!!r,r?[]:"",!1));return;case"textarea":Mt=mt=null;for(R in r)if(f=r[R],r.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,i,R,null,l,f)}for(S in l)if(f=l[S],d=r[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":mt=f;break;case"defaultValue":Mt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Ve(e,i,S,f,l,d)}bn(e,mt,Mt);return;case"option":for(var te in r)if(mt=r[te],r.hasOwnProperty(te)&&mt!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ve(e,i,te,null,l,mt)}for(V in l)if(mt=l[V],Mt=r[V],l.hasOwnProperty(V)&&mt!==Mt&&(mt!=null||Mt!=null))switch(V){case"selected":e.selected=mt&&typeof mt!="function"&&typeof mt!="symbol";break;default:Ve(e,i,V,mt,l,Mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in r)mt=r[le],r.hasOwnProperty(le)&&mt!=null&&!l.hasOwnProperty(le)&&Ve(e,i,le,null,l,mt);for(ft in l)if(mt=l[ft],Mt=r[ft],l.hasOwnProperty(ft)&&mt!==Mt&&(mt!=null||Mt!=null))switch(ft){case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Ve(e,i,ft,mt,l,Mt)}return;default:if(vu(i)){for(var ke in r)mt=r[ke],r.hasOwnProperty(ke)&&mt!==void 0&&!l.hasOwnProperty(ke)&&ah(e,i,ke,void 0,l,mt);for(At in l)mt=l[At],Mt=r[At],!l.hasOwnProperty(At)||mt===Mt||mt===void 0&&Mt===void 0||ah(e,i,At,mt,l,Mt);return}}for(var it in r)mt=r[it],r.hasOwnProperty(it)&&mt!=null&&!l.hasOwnProperty(it)&&Ve(e,i,it,null,l,mt);for(Ut in l)mt=l[Ut],Mt=r[Ut],!l.hasOwnProperty(Ut)||mt===Mt||mt==null&&Mt==null||Ve(e,i,Ut,mt,l,Mt)}function F0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,S=f.initiatorType,R=f.duration;if(d&&R&&F0(S)){for(S=0,R=f.responseEnd,l+=1;l<r.length;l++){var V=r[l],ft=V.startTime;if(ft>R)break;var At=V.transferSize,Ut=V.initiatorType;At&&F0(Ut)&&(V=V.responseEnd,S+=At*(V<R?1:(R-ft)/(V-ft)))}if(--l,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rh=null,sh=null;function ac(e){return e.nodeType===9?e:e.ownerDocument}function P0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function oh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function PS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(IS)}:B0;function IS(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function H0(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),hs(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ao(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ao(r);for(var d=r.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[tr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Ao(e.ownerDocument.body);r=f}while(r);hs(i)}function G0(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ch(r),Xs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function HS(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function GS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=mi(e.nextSibling),e===null))return null;return e}function V0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=mi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var hh=null;function k0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return mi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function X0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function W0(e,i,r){switch(i=ac(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ao(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Xs(e)}var gi=new Map,q0=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=rt.d;rt.d={f:kS,r:XS,D:WS,C:qS,L:YS,m:jS,X:KS,S:ZS,M:QS};function kS(){var e=ia.f(),i=Kl();return e||i}function XS(e){var i=nt(e);i!==null&&i.tag===5&&i.type==="form"?cg(i):ia.r(e)}var cs=typeof document>"u"?null:document;function Y0(e,i,r){var l=cs;if(l&&typeof i=="string"&&i){var f=yn(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),q0.has(f)||(q0.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Cn(i,"link",e),$(i),l.head.appendChild(i)))}}function WS(e){ia.D(e),Y0("dns-prefetch",e,null)}function qS(e,i){ia.C(e,i),Y0("preconnect",e,i)}function YS(e,i,r){ia.L(e,i,r);var l=cs;if(l&&e&&i){var f='link[rel="preload"][as="'+yn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+yn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+yn(r.imageSizes)+'"]')):f+='[href="'+yn(e)+'"]';var d=f;switch(i){case"style":d=us(e);break;case"script":d=fs(e)}gi.has(d)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),gi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Ro(d))||i==="script"&&l.querySelector(Co(d))||(i=l.createElement("link"),Cn(i,"link",e),$(i),l.head.appendChild(i)))}}function jS(e,i){ia.m(e,i);var r=cs;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+yn(l)+'"][href="'+yn(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(e)}if(!gi.has(d)&&(e=v({rel:"modulepreload",href:e},i),gi.set(d,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Co(d)))return}l=r.createElement("link"),Cn(l,"link",e),$(l),r.head.appendChild(l)}}}function ZS(e,i,r){ia.S(e,i,r);var l=cs;if(l&&e){var f=St(l).hoistableStyles,d=us(e);i=i||"default";var S=f.get(d);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(Ro(d)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=gi.get(d))&&dh(e,r);var V=S=l.createElement("link");$(V),Cn(V,"link",e),V._p=new Promise(function(ft,At){V.onload=ft,V.onerror=At}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(d,S)}}}function KS(e,i){ia.X(e,i);var r=cs;if(r&&e){var l=St(r).hoistableScripts,f=fs(e),d=l.get(f);d||(d=r.querySelector(Co(f)),d||(e=v({src:e,async:!0},i),(i=gi.get(f))&&ph(e,i),d=r.createElement("script"),$(d),Cn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function QS(e,i){ia.M(e,i);var r=cs;if(r&&e){var l=St(r).hoistableScripts,f=fs(e),d=l.get(f);d||(d=r.querySelector(Co(f)),d||(e=v({src:e,async:!0,type:"module"},i),(i=gi.get(f))&&ph(e,i),d=r.createElement("script"),$(d),Cn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function j0(e,i,r,l){var f=(f=Y.current)?rc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=us(r.href),r=St(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=us(r.href);var d=St(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(Ro(e)))&&!d._p&&(S.instance=d,S.state.loading=5),gi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(e,r),d||JS(f,e,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=fs(r),r=St(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function us(e){return'href="'+yn(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function Z0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function JS(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Cn(i,"link",r),$(i),e.head.appendChild(i))}function fs(e){return'[src="'+yn(e)+'"]'}function Co(e){return"script[async]"+e}function K0(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+yn(r.href)+'"]');if(l)return i.instance=l,$(l),l;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$(l),Cn(l,"style",f),sc(l,r.precedence,e),i.instance=l;case"stylesheet":f=us(r.href);var d=e.querySelector(Ro(f));if(d)return i.state.loading|=4,i.instance=d,$(d),d;l=Z0(r),(f=gi.get(f))&&dh(l,f),d=(e.ownerDocument||e).createElement("link"),$(d);var S=d;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Cn(d,"link",l),i.state.loading|=4,sc(d,r.precedence,e),i.instance=d;case"script":return d=fs(r.src),(f=e.querySelector(Co(d)))?(i.instance=f,$(f),f):(l=r,(f=gi.get(d))&&(l=v({},r),ph(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),$(f),Cn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,sc(l,r.precedence,e));return i.instance}function sc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var oc=null;function Q0(e,i,r){if(oc===null){var l=new Map,f=oc=new Map;f.set(r,l)}else f=oc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var d=r[f];if(!(d[tr]||d[tn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var R=l.get(S);R?R.push(d):l.set(S,[d])}}return l}function J0(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function $S(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function $0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tM(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=us(l.href),d=i.querySelector(Ro(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=lc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,$(d);return}d=i.ownerDocument||i,l=Z0(l),(f=gi.get(f))&&dh(l,f),d=d.createElement("link"),$(d);var S=d;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Cn(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=lc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var mh=0;function eM(e,i){return e.stylesheets&&e.count===0&&uc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&mh===0&&(mh=62500*FS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&uc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>mh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function uc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,i.forEach(nM,e),cc=null,lc.call(e))}function nM(e,i){if(!(i.state.loading&4)){var r=cc.get(e);if(r)var l=r.get(null);else{r=new Map,cc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=r.get(S)||l,d===l&&r.set(null,f),r.set(S,f),this.count++,l=lc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var wo={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function iM(e,i,r,l,f,d,S,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function tv(e,i,r,l,f,d,S,R,V,ft,At,Ut){return e=new iM(e,i,r,S,V,ft,At,Ut,R),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),e.current=d,d.stateNode=e,i=Yu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},Qu(d),e}function ev(e){return e?(e=Vr,e):Vr}function nv(e,i,r,l,f,d){f=ev(f),l.context===null?l.context=f:l.pendingContext=f,l=Ta(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Aa(e,l,i),r!==null&&(Zn(r,e,i),so(r,e,i))}function iv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function gh(e,i){iv(e,i),(e=e.alternate)&&iv(e,i)}function av(e){if(e.tag===13||e.tag===31){var i=ar(e,67108864);i!==null&&Zn(i,e,67108864),gh(e,67108864)}}function rv(e){if(e.tag===13||e.tag===31){var i=ri();i=Jn(i);var r=ar(e,i);r!==null&&Zn(r,e,i),gh(e,i)}}var fc=!0;function aM(e,i,r,l){var f=B.T;B.T=null;var d=rt.p;try{rt.p=2,vh(e,i,r,l)}finally{rt.p=d,B.T=f}}function rM(e,i,r,l){var f=B.T;B.T=null;var d=rt.p;try{rt.p=8,vh(e,i,r,l)}finally{rt.p=d,B.T=f}}function vh(e,i,r,l){if(fc){var f=_h(l);if(f===null)ih(e,i,l,hc,r),ov(e,l);else if(oM(f,e,i,r,l))l.stopPropagation();else if(ov(e,l),i&4&&-1<sM.indexOf(e)){for(;f!==null;){var d=nt(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Yt(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-ne(S);R.entanglements[1]|=V,S&=~V}Fi(d),(Pe&6)===0&&(jl=J()+500,Eo(0))}}break;case 31:case 13:R=ar(d,2),R!==null&&Zn(R,d,2),Kl(),gh(d,2)}if(d=_h(l),d===null&&ih(e,i,l,hc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else ih(e,i,l,null,r)}}function _h(e){return e=yu(e),yh(e)}var hc=null;function yh(e){if(hc=null,e=U(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return hc=e,null}function sv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case yt:return 2;case Lt:return 8;case j:case st:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var xh=!1,za=null,Ba=null,Ia=null,Do=new Map,Uo=new Map,Ha=[],sM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ov(e,i){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Do.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Lo(e,i,r,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=nt(i),i!==null&&av(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function oM(e,i,r,l,f){switch(i){case"focusin":return za=Lo(za,e,i,r,l,f),!0;case"dragenter":return Ba=Lo(Ba,e,i,r,l,f),!0;case"mouseover":return Ia=Lo(Ia,e,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Do.set(d,Lo(Do.get(d)||null,e,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Uo.set(d,Lo(Uo.get(d)||null,e,i,r,l,f)),!0}return!1}function lv(e){var i=U(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,$a(e.priority,function(){rv(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,$a(e.priority,function(){rv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=_h(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);_u=l,r.target.dispatchEvent(l),_u=null}else return i=nt(r),i!==null&&av(i),e.blockedOn=r,!1;i.shift()}return!0}function cv(e,i,r){dc(e)&&r.delete(i)}function lM(){xh=!1,za!==null&&dc(za)&&(za=null),Ba!==null&&dc(Ba)&&(Ba=null),Ia!==null&&dc(Ia)&&(Ia=null),Do.forEach(cv),Uo.forEach(cv)}function pc(e,i){e.blockedOn===i&&(e.blockedOn=null,xh||(xh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lM)))}var mc=null;function uv(e){mc!==e&&(mc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(yh(l||r)===null)continue;break}var d=nt(r);d!==null&&(e.splice(i,3),i-=3,_f(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function hs(e){function i(V){return pc(V,e)}za!==null&&pc(za,e),Ba!==null&&pc(Ba,e),Ia!==null&&pc(Ia,e),Do.forEach(i),Uo.forEach(i);for(var r=0;r<Ha.length;r++){var l=Ha[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(r=Ha[0],r.blockedOn===null);)lv(r),r.blockedOn===null&&Ha.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],S=f[En]||null;if(typeof d=="function")S||uv(r);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[En]||null)R=S.formAction;else if(yh(f)!==null)continue}else R=S.action;typeof R=="function"?r[l+1]=R:(r.splice(l,3),l-=3),uv(r)}}}function fv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Sh(e){this._internalRoot=e}gc.prototype.render=Sh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ri();nv(r,l,e,i,null,null)},gc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;nv(e.current,2,null,e,null,null),Kl(),i[Hi]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Vs();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ha.length&&i!==0&&i<Ha[r].priority;r++);Ha.splice(r,0,e),r===0&&lv(e)}};var hv=t.version;if(hv!=="19.2.7")throw Error(a(527,hv,"19.2.7"));rt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Wt=vc.inject(cM),Xt=vc}catch{}}return Oo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=yg,d=xg,S=Sg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=tv(e,1,!1,null,null,r,l,null,f,d,S,fv),e[Hi]=i.current,nh(e),new Sh(i)},Oo.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",d=yg,S=xg,R=Sg,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=tv(e,1,!0,i,r??null,l,f,V,d,S,R,fv),i.context=ev(null),r=i.current,l=ri(),l=Jn(l),f=Ta(l),f.callback=null,Aa(r,f,l),r=l,i.current.lanes=r,$e(i,r),Fi(i),e[Hi]=i.current,nh(e),new gc(i)},Oo.version="19.2.7",Oo}var Mv;function MM(){if(Mv)return bh.exports;Mv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bh.exports=SM(),bh.exports}var EM=MM();const bM="modulepreload",TM=function(s){return"/makemecubemaster/"+s},Ev={},AM=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=u(n.map(m=>{if(m=TM(m),m in Ev)return;Ev[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":bM,g||(_.as="script"),_.crossOrigin="",_.href=m,p&&_.setAttribute("nonce",p),document.head.appendChild(_),g)return new Promise((y,b)=>{_.addEventListener("load",y),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function RM(s={}){const{immediate:t=!1,onNeedReload:n,onNeedRefresh:a,onOfflineReady:o,onRegistered:c,onRegisteredSW:u,onRegisterError:h}=s;let p,m;const g=async(_=!0)=>{await m};async function v(){if("serviceWorker"in navigator){if(p=await AM(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(_=>{h==null||h(_)}),!p)return;p.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&(n?n():window.location.reload())}),p.addEventListener("installed",_=>{_.isUpdate||o==null||o()}),p.register({immediate:t}).then(_=>{u?u("/makemecubemaster/sw.js",_):c==null||c(_)}).catch(_=>{h==null||h(_)})}}return m=v(),g}const CM=.3,wM=.52,DM=.22;function Is(s,t,n=CM){const a=Math.min(s,t)*n;return{x:(s-a)/2,y:(t-a)/2,size:a}}function j_(s){const t=s.size*DM;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function Z_(s){const{x:t,y:n,size:a}=s;return[{x:t,y:n},{x:t+a,y:n},{x:t+a,y:n+a},{x:t,y:n+a}]}function UM(s,t,n){return s.map(a=>({x:a.x+t,y:a.y+n}))}function bv(s,t,n,a){s.drawImage(t,0,0,n,a)}function qo(s){if(s.length!==9)return s;const t=[];for(let n=0;n<3;n++)for(let a=2;a>=0;a--)t.push(s[n*3+a]);return t}function K_(s){const t=new Map;for(const[n,a]of s)t.set(n,[...a]);return t}function Q_(s,t,n,a){const o=Math.max(n/s,a/t),c=s*o,u=t*o;return{scale:o,offsetX:(n-c)/2,offsetY:(a-u)/2}}function J_(s,t,n,a,o,c,u,h){const{scale:p,offsetX:m,offsetY:g}=Q_(o,c,u,h),v=m+s*p,_=g+t*p,y=n*p,b=a*p;return{left:u-v-y,top:_,width:y,height:b}}function LM(s,t,n,a){if(!s||!t||!n||!a)return null;const o=Is(s,t);return J_(o.x,o.y,o.size,o.size,s,t,n,a)}function NM(s,t,n,a){if(!s||!t||!n||!a)return null;const o=Is(s,t),c=j_(o);return J_(c.x,c.y,c.size,c.size,s,t,n,a)}function OM(s,t){const n=Math.min(s,t)*.3;return{left:(s-n)/2,top:(t-n)/2,width:n,height:n}}function Tv(s){return{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}}function FM({rect:s,viewportWidth:t,viewportHeight:n}){const a={position:"absolute",background:"rgba(0, 0, 0, 0.38)",pointerEvents:"none"},{left:o,top:c,width:u,height:h}=s,p=o+u,m=c+h;return Ht.jsxs(Ht.Fragment,{children:[Ht.jsx("div",{style:{...a,top:0,left:0,width:t,height:c}}),Ht.jsx("div",{style:{...a,top:m,left:0,width:t,height:Math.max(0,n-m)}}),Ht.jsx("div",{style:{...a,top:c,left:0,width:o,height:h}}),Ht.jsx("div",{style:{...a,top:c,left:p,width:Math.max(0,t-p),height:h}})]})}function PM({rect:s,viewportWidth:t,viewportHeight:n,visible:a,showSpot:o=!1,spotRect:c=null,spotColor:u="#ffffff"}){if(!a||!t||!n)return null;const h=s??OM(t,n),p=o?c??h:null;return Ht.jsxs("div",{className:"guide-overlay-root","aria-hidden":"true",children:[Ht.jsx(FM,{rect:h,viewportWidth:t,viewportHeight:n}),Ht.jsx("div",{className:"guide-frame-css",style:Tv(h)}),p&&Ht.jsx("div",{className:"guide-spot-css",style:{...Tv(p),borderColor:u,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.45), 0 0 14px ${u}88`}})]})}function zM(s,t,n,a){return Jt.useMemo(()=>({guideRect:LM(s,t,n,a),spotRect:NM(s,t,n,a)}),[s,t,n,a])}function BM(s){return s==="colorLearn"||s==="scanReady"||s==="liveScan"}function IM({phase:s,frameWidth:t,frameHeight:n,viewportWidth:a,viewportHeight:o,colorLearnSpot:c=!1,spotColor:u="#ffffff"}){const{guideRect:h,spotRect:p}=zM(t,n,a,o);return Ht.jsx(PM,{rect:h,viewportWidth:a,viewportHeight:o,visible:BM(s),showSpot:c,spotRect:p,spotColor:u})}function HM({setVideoRef:s,onDimensions:t}){const n=Jt.useCallback(o=>{o.videoWidth&&o.videoHeight&&(t==null||t(o.videoWidth,o.videoHeight))},[t]),a=Jt.useCallback(o=>{s(o),o&&o.readyState>=1&&n(o)},[s,n]);return Ht.jsx("video",{ref:a,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:o=>n(o.currentTarget)})}const da=["R","O","Y","G","B","W"],GM={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},Jo={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},VM={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let Ns={},pp=!1;function mp(){return pp&&da.every(s=>Ns[s])}function kM(){const s={...VM};for(const t of da)Ns[t]&&(s[t]=Ns[t]);return s}function Av(){Ns={},pp=!1}function XM(s,t){Ns[s]=t,da.every(n=>Ns[n])&&(pp=!0)}function Ch(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function WM(s,t,n){const a=Ch(s/255),o=Ch(t/255),c=Ch(n/255),u=a*.4124564+o*.3575761+c*.1804375,h=a*.2126729+o*.7151522+c*.072175,p=a*.0193339+o*.119192+c*.9503041,m=u/.95047>.008856?(u/.95047)**(1/3):7.787*(u/.95047)+16/116,g=h>.008856?h**(1/3):7.787*h+16/116,v=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*g-16,500*(m-g),200*(g-v)]}function wh(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function qM(s,t,n){return Math.max(s,t,n)-Math.min(s,t,n)<28?"W":s>=t&&s>=n?t>s*.92?"O":"R":t>=s&&t>=n?"G":"B"}function YM(s,t,n,a){const o=Math.max(s,t,n);if(o<45)return!1;const c=(s+t+n)/3,u=o-Math.min(s,t,n);switch(a){case"W":return u<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=n;case"O":return s>70&&t>55&&s>=n-5;case"G":return t>45&&t>=s-12&&t>=n-5;case"B":return n>40&&n>=s-8&&n>=t-15;default:return!0}}function jM(s,t,n,a){if(a==="W")return Math.max(s,t,n)-Math.min(s,t,n)<60;if(a==="Y")return s>70&&t>60;const o=qM(s,t,n);return a==="O"?o==="O"||o==="R"||o==="Y":a==="R"?o==="R"||o==="O":o===a}function $_(s,t,n,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const c=Is(t,n),u=j_(c),h=Math.floor(u.x),p=Math.floor(u.y),m=Math.floor(u.size),g=Math.floor(u.size);if(m<=0||g<=0)return null;const v=o.getImageData(h,p,m,g).data,_=[],y=[],b=[],T=[],M=[],x=[];for(let C=0;C<v.length;C+=8){const k=v[C],ct=v[C+1],ot=v[C+2];Math.max(k,ct,ot)<40||(T.push(k),M.push(ct),x.push(ot),YM(k,ct,ot,a)&&(_.push(k),y.push(ct),b.push(ot)))}const O=_.length>=4?_:T,D=_.length>=4?y:M,w=_.length>=4?b:x;if(O.length<4)return null;const q=wh(O),I=wh(D),P=wh(w),X=WM(q,I,P),L=O.length;return{r:q,g:I,b:P,lab:X,ready:L>=6&&jM(q,I,P,a)}}function ZM(s,t,n,a){const o=$_(s,t,n,a);return o!=null&&o.ready?(XM(a,o.lab),o):null}function ty(s,t){Jt.useEffect(()=>{if(!t)return;const n=a=>{var c;if(a.key!=="Enter"&&a.key!==" ")return;const o=(c=a.target)==null?void 0:c.tagName;o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||(a.preventDefault(),s())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[s,t])}function KM({visible:s,stepIndex:t,sample:n,ready:a,error:o,onConfirm:c}){const u=da[t]??"R";return ty(c,s&&a),s?Ht.jsx("div",{className:"color-learn-overlay","aria-live":"polite",children:Ht.jsxs("div",{className:"color-learn-panel",children:[Ht.jsx("p",{className:"color-learn-target",style:{color:Jo[u]},children:GM[u]}),Ht.jsxs("p",{className:"color-learn-step",children:[t+1," / ",da.length]}),n&&Ht.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${n.r},${n.g},${n.b})`}}),Ht.jsx("button",{type:"button",className:"capture-button",disabled:!a,onClick:c,children:a?"Confirm":"Hold steady…"}),o&&Ht.jsx("p",{className:"color-learn-error",children:o})]})}):null}function ey({colors:s,cellClassName:t,variant:n="overlay",orientation:a="real"}){const o=t??(n==="mini"?"face-grid-mini-cell":n==="solving"?"solving-face-cell":"cell-grid-item"),c=a==="mirror"?qo(s):s;return Ht.jsx("div",{className:`face-color-grid face-color-grid--${n}`,children:c.map((u,h)=>Ht.jsx("span",{className:o,style:{background:Jo[u]}},h))})}const QM={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function JM({feedback:s,visible:t}){if(!t)return null;const n=s.cellColors.length===9;return Ht.jsx("div",{className:"detection-overlay","aria-live":"polite",children:Ht.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[Ht.jsxs("div",{className:`detection-status ${s.status}`,children:[Ht.jsx("span",{className:"status-text",children:QM[s.status]}),s.status==="rotate"&&Ht.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&Ht.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),n&&Ht.jsx(ey,{colors:s.cellColors,variant:"overlay",orientation:"mirror"})]})})}function $M({phase:s,knownFaces:t,progress:n,needsNewFace:a=!1,needsClearerCenter:o=!1}){return s!=="liveScan"?null:Ht.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[Ht.jsx("div",{className:"calibration-bar",children:Ht.jsx("div",{className:"calibration-fill",style:{width:`${n*100}%`}})}),Ht.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),Ht.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),a&&Ht.jsx("p",{className:"calibration-hint",children:"Show a different face"}),o&&!a&&Ht.jsx("p",{className:"calibration-hint",children:"Center the face color in the guide"})]})}const Sd=["U","F","R","B","L","D"],tE={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function pa(s){return tE[s]??null}function eE({colors:s,label:t,empty:n=!1}){const a=s&&s.length===9;return Ht.jsxs("div",{className:`face-grid-mini ${n?"face-grid-mini--empty":""}`,children:[a?Ht.jsx(ey,{colors:s,variant:"mini",orientation:"real"}):Ht.jsx("div",{className:"face-color-grid face-color-grid--mini face-color-grid--placeholder",children:Array.from({length:9},(o,c)=>Ht.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},c))}),Ht.jsx("span",{className:"face-grid-mini-label",children:t})]})}const nE={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function Dh({visible:s,scannedFaces:t}){if(!s)return null;const n=Sd.filter(a=>t[a]).length;return Ht.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[Ht.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",n,"/6"]}),Ht.jsx("div",{className:"scanned-faces-bar-grid",children:Sd.map(a=>Ht.jsx(eE,{colors:t[a]??null,label:nE[a],empty:!t[a]},a))})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gp="175",iE=0,Rv=1,aE=2,ny=1,rE=2,ca=3,Qa=0,Qn=1,zi=2,Za=0,Ds=1,Cv=2,wv=3,Dv=4,sE=5,Tr=100,oE=101,lE=102,cE=103,uE=104,fE=200,hE=201,dE=202,pE=203,Md=204,Ed=205,mE=206,gE=207,vE=208,_E=209,yE=210,xE=211,SE=212,ME=213,EE=214,bd=0,Td=1,Ad=2,Os=3,Rd=4,Cd=5,wd=6,Dd=7,iy=0,bE=1,TE=2,Ka=0,AE=1,RE=2,CE=3,wE=4,DE=5,UE=6,LE=7,ay=300,Fs=301,Ps=302,Ud=303,Ld=304,cu=306,Nd=1e3,Cr=1001,Od=1002,Ui=1003,NE=1004,_c=1005,Bi=1006,Uh=1007,wr=1008,ga=1009,ry=1010,sy=1011,Yo=1012,vp=1013,Lr=1014,fa=1015,$o=1016,_p=1017,yp=1018,jo=1020,oy=35902,ly=1021,cy=1022,Di=1023,uy=1024,fy=1025,Zo=1026,Ko=1027,hy=1028,xp=1029,dy=1030,Sp=1031,Mp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,Fd=35840,Pd=35841,zd=35842,Bd=35843,Id=36196,Hd=37492,Gd=37496,Vd=37808,kd=37809,Xd=37810,Wd=37811,qd=37812,Yd=37813,jd=37814,Zd=37815,Kd=37816,Qd=37817,Jd=37818,$d=37819,tp=37820,ep=37821,Qc=36492,np=36494,ip=36495,py=36283,ap=36284,rp=36285,sp=36286,OE=3200,FE=3201,PE=0,zE=1,ja="",li="srgb",zs="srgb-linear",nu="linear",Xe="srgb",ds=7680,Uv=519,BE=512,IE=513,HE=514,my=515,GE=516,VE=517,kE=518,XE=519,Lv=35044,Nv="300 es",ha=2e3,iu=2001;class Hs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=Math.PI/180,op=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function be(s,t,n){return Math.max(t,Math.min(n,s))}function WE(s,t){return(s%t+t)%t}function Nh(s,t,n){return(1-n)*s+n*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,n=0){he.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,n,a,o,c,u,h,p,m){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,m)}set(t,n,a,o,c,u,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],m=a[1],g=a[4],v=a[7],_=a[2],y=a[5],b=a[8],T=o[0],M=o[3],x=o[6],O=o[1],D=o[4],w=o[7],q=o[2],I=o[5],P=o[8];return c[0]=u*T+h*O+p*q,c[3]=u*M+h*D+p*I,c[6]=u*x+h*w+p*P,c[1]=m*T+g*O+v*q,c[4]=m*M+g*D+v*I,c[7]=m*x+g*w+v*P,c[2]=_*T+y*O+b*q,c[5]=_*M+y*D+b*I,c[8]=_*x+y*w+b*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*u*g-n*h*m-a*c*g+a*h*p+o*c*m-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*u-h*m,_=h*p-g*c,y=m*c-u*p,b=n*v+a*_+o*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=v*T,t[1]=(o*m-g*a)*T,t[2]=(h*a-o*u)*T,t[3]=_*T,t[4]=(g*n-o*p)*T,t[5]=(o*c-h*n)*T,t[6]=y*T,t[7]=(a*p-m*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*u+m*h)+u+t,-o*m,o*p,-o*(-m*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Oh.makeScale(t,n)),this}rotate(t){return this.premultiply(Oh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Oh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new _e;function gy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function au(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qE(){const s=au("canvas");return s.style.display="block",s}const Ov={};function Jc(s){s in Ov||(Ov[s]=!0,console.warn(s))}function YE(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function jE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ZE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fv=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KE(){const s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=Us(o.r),o.g=Us(o.g),o.b=Us(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ja?nu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[zs]:{primaries:t,whitePoint:a,transfer:nu,toXYZ:Fv,fromXYZ:Pv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:Fv,fromXYZ:Pv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Fe=KE();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class QE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ps===void 0&&(ps=au("canvas")),ps.width=t.width,ps.height=t.height;const o=ps.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=ps}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=au("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ma(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ma(n[a]/255)*255):n[a]=ma(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let JE=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Fh(o[u].image)):c.push(Fh(o[u]))}else c=Fh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?QE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $E=0;class Hn extends Hs{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=Cr,o=Cr,c=Bi,u=wr,h=Di,p=ga,m=Hn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=tl(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ay)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nd:t.x=t.x-Math.floor(t.x);break;case Cr:t.x=t.x<0?0:1;break;case Od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nd:t.y=t.y-Math.floor(t.y);break;case Cr:t.y=t.y<0?0:1;break;case Od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ay;Hn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,a=0,o=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,m=p[0],g=p[4],v=p[8],_=p[1],y=p[5],b=p[9],T=p[2],M=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(b+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,w=(y+1)/2,q=(x+1)/2,I=(g+_)/4,P=(v+T)/4,X=(b+M)/4;return D>w&&D>q?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=I/a,c=P/a):w>q?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=I/o,c=X/o):q<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(q),a=P/c,o=X/c),this.set(a,o,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t1 extends Hs{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Hn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Ep(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends t1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class vy extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class e1 extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let p=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],y=c[u+1],b=c[u+2],T=c[u+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=y,t[n+2]=b,t[n+3]=T;return}if(v!==T||p!==_||m!==y||g!==b){let M=1-h;const x=p*_+m*y+g*b+v*T,O=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const q=Math.sqrt(D),I=Math.atan2(q,x*O);M=Math.sin(M*I)/q,h=Math.sin(h*I)/q}const w=h*O;if(p=p*M+_*w,m=m*M+y*w,g=g*M+b*w,v=v*M+T*w,M===1-h){const q=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=q,m*=q,g*=q,v*=q}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],v=c[u],_=c[u+1],y=c[u+2],b=c[u+3];return t[n]=h*b+g*v+p*y-m*_,t[n+1]=p*b+g*_+m*v-h*y,t[n+2]=m*b+g*y+h*_-p*v,t[n+3]=g*b-h*v-p*_-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),v=h(c/2),_=p(a/2),y=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=_*g*v+m*y*b,this._y=m*y*v-_*g*b,this._z=m*g*b+_*y*v,this._w=m*g*v-_*y*b;break;case"YXZ":this._x=_*g*v+m*y*b,this._y=m*y*v-_*g*b,this._z=m*g*b-_*y*v,this._w=m*g*v+_*y*b;break;case"ZXY":this._x=_*g*v-m*y*b,this._y=m*y*v+_*g*b,this._z=m*g*b+_*y*v,this._w=m*g*v-_*y*b;break;case"ZYX":this._x=_*g*v-m*y*b,this._y=m*y*v+_*g*b,this._z=m*g*b-_*y*v,this._w=m*g*v+_*y*b;break;case"YZX":this._x=_*g*v+m*y*b,this._y=m*y*v+_*g*b,this._z=m*g*b-_*y*v,this._w=m*g*v-_*y*b;break;case"XZY":this._x=_*g*v-m*y*b,this._y=m*y*v-_*g*b,this._z=m*g*b+_*y*v,this._w=m*g*v+_*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],m=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(u-o)*y}else if(a>h&&a>v){const y=2*Math.sqrt(1+a-h-v);this._w=(g-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+m)/y}else if(h>v){const y=2*Math.sqrt(1+h-a-v);this._w=(c-m)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-a-h);this._w=(u-o)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+u*h+o*m-c*p,this._y=o*g+u*p+c*h-a*m,this._z=c*g+u*m+a*p-o*h,this._w=u*g-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*u+n*this._w,this._x=y*a+n*this._x,this._y=y*o+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-n)*g)/m,_=Math.sin(n*g)/m;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,n=0,a=0){tt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(zv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(zv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,p=t.w,m=2*(u*o-h*a),g=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+p*m+u*v-h*g,this.y=a+p*g+h*m-c*v,this.z=o+p*v+c*g-u*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new tt,zv=new el;class nl{constructor(t=new tt(1/0,1/0,1/0),n=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(c,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),yc.copy(a.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),xc.subVectors(this.max,Po),ms.subVectors(t.a,Po),gs.subVectors(t.b,Po),vs.subVectors(t.c,Po),Va.subVectors(gs,ms),ka.subVectors(vs,gs),vr.subVectors(ms,vs);let n=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-vr.z,vr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,vr.z,0,-vr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-vr.y,vr.x,0];return!zh(n,ms,gs,vs,xc)||(n=[1,0,0,0,1,0,0,0,1],!zh(n,ms,gs,vs,xc))?!1:(Sc.crossVectors(Va,ka),n=[Sc.x,Sc.y,Sc.z],zh(n,ms,gs,vs,xc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const aa=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ai=new tt,yc=new nl,ms=new tt,gs=new tt,vs=new tt,Va=new tt,ka=new tt,vr=new tt,Po=new tt,xc=new tt,Sc=new tt,_r=new tt;function zh(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){_r.fromArray(s,c);const h=o.x*Math.abs(_r.x)+o.y*Math.abs(_r.y)+o.z*Math.abs(_r.z),p=t.dot(_r),m=n.dot(_r),g=a.dot(_r);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const n1=new nl,zo=new tt,Bh=new tt;class uu{constructor(t=new tt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):n1.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(zo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Bh)),this.expandByPoint(zo.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ra=new tt,Ih=new tt,Mc=new tt,Xa=new tt,Hh=new tt,Ec=new tt,Gh=new tt;class _y{constructor(t=new tt,n=new tt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Ih.copy(t).add(n).multiplyScalar(.5),Mc.copy(n).sub(t).normalize(),Xa.copy(this.origin).sub(Ih);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Mc),h=Xa.dot(this.direction),p=-Xa.dot(Mc),m=Xa.lengthSq(),g=Math.abs(1-u*u);let v,_,y,b;if(g>0)if(v=u*p-h,_=u*h-p,b=c*g,v>=0)if(_>=-b)if(_<=b){const T=1/g;v*=T,_*=T,y=v*(v+u*_+2*h)+_*(u*v+_+2*p)+m}else _=c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*p)+m;else _=-c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*p)+m;else _<=-b?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+m):_<=b?(v=0,_=Math.min(Math.max(-c,-p),c),y=_*(_+2*p)+m):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+_*(_+2*p)+m);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),y=-v*v+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ih).addScaledVector(Mc,_),y}intersectSphere(t,n){ra.subVectors(t.center,this.origin);const a=ra.dot(this.direction),o=ra.dot(ra)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,n,a,o,c){Hh.subVectors(n,t),Ec.subVectors(a,t),Gh.crossVectors(Hh,Ec);let u=this.direction.dot(Gh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Xa.subVectors(this.origin,t);const p=h*this.direction.dot(Ec.crossVectors(Xa,Ec));if(p<0)return null;const m=h*this.direction.dot(Hh.cross(Xa));if(m<0||p+m>u)return null;const g=-h*Xa.dot(Gh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,n,a,o,c,u,h,p,m,g,v,_,y,b,T,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,m,g,v,_,y,b,T,M)}set(t,n,a,o,c,u,h,p,m,g,v,_,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),u=1/_s.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,y=u*v,b=h*g,T=h*v;n[0]=p*g,n[4]=-p*v,n[8]=m,n[1]=y+b*m,n[5]=_-T*m,n[9]=-h*p,n[2]=T-_*m,n[6]=b+y*m,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,y=p*v,b=m*g,T=m*v;n[0]=_+T*h,n[4]=b*h-y,n[8]=u*m,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=y*h-b,n[6]=T+_*h,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,y=p*v,b=m*g,T=m*v;n[0]=_-T*h,n[4]=-u*v,n[8]=b+y*h,n[1]=y+b*h,n[5]=u*g,n[9]=T-_*h,n[2]=-u*m,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,y=u*v,b=h*g,T=h*v;n[0]=p*g,n[4]=b*m-y,n[8]=_*m+T,n[1]=p*v,n[5]=T*m+_,n[9]=y*m-b,n[2]=-m,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,y=u*m,b=h*p,T=h*m;n[0]=p*g,n[4]=T-_*v,n[8]=b*v+y,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-m*g,n[6]=y*v+b,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*p,y=u*m,b=h*p,T=h*m;n[0]=p*g,n[4]=-v,n[8]=m*g,n[1]=_*v+T,n[5]=u*g,n[9]=y*v-b,n[2]=b*v-y,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(i1,t,a1)}lookAt(t,n,a){const o=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Wa.crossVectors(a,si),Wa.lengthSq()===0&&(Math.abs(a.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Wa.crossVectors(a,si)),Wa.normalize(),bc.crossVectors(si,Wa),o[0]=Wa.x,o[4]=bc.x,o[8]=si.x,o[1]=Wa.y,o[5]=bc.y,o[9]=si.y,o[2]=Wa.z,o[6]=bc.z,o[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],m=a[12],g=a[1],v=a[5],_=a[9],y=a[13],b=a[2],T=a[6],M=a[10],x=a[14],O=a[3],D=a[7],w=a[11],q=a[15],I=o[0],P=o[4],X=o[8],L=o[12],C=o[1],k=o[5],ct=o[9],ot=o[13],_t=o[2],bt=o[6],B=o[10],rt=o[14],K=o[3],Rt=o[7],Nt=o[11],N=o[15];return c[0]=u*I+h*C+p*_t+m*K,c[4]=u*P+h*k+p*bt+m*Rt,c[8]=u*X+h*ct+p*B+m*Nt,c[12]=u*L+h*ot+p*rt+m*N,c[1]=g*I+v*C+_*_t+y*K,c[5]=g*P+v*k+_*bt+y*Rt,c[9]=g*X+v*ct+_*B+y*Nt,c[13]=g*L+v*ot+_*rt+y*N,c[2]=b*I+T*C+M*_t+x*K,c[6]=b*P+T*k+M*bt+x*Rt,c[10]=b*X+T*ct+M*B+x*Nt,c[14]=b*L+T*ot+M*rt+x*N,c[3]=O*I+D*C+w*_t+q*K,c[7]=O*P+D*k+w*bt+q*Rt,c[11]=O*X+D*ct+w*B+q*Nt,c[15]=O*L+D*ot+w*rt+q*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],_=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15];return b*(+c*p*v-o*m*v-c*h*_+a*m*_+o*h*y-a*p*y)+T*(+n*p*y-n*m*_+c*u*_-o*u*y+o*m*g-c*p*g)+M*(+n*m*v-n*h*y-c*u*v+a*u*y+c*h*g-a*m*g)+x*(-o*h*g-n*p*v+n*h*_+o*u*v-a*u*_+a*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],_=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],O=v*M*m-T*_*m+T*p*y-h*M*y-v*p*x+h*_*x,D=b*_*m-g*M*m-b*p*y+u*M*y+g*p*x-u*_*x,w=g*T*m-b*v*m+b*h*y-u*T*y-g*h*x+u*v*x,q=b*v*p-g*T*p-b*h*_+u*T*_+g*h*M-u*v*M,I=n*O+a*D+o*w+c*q;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=O*P,t[1]=(T*_*c-v*M*c-T*o*y+a*M*y+v*o*x-a*_*x)*P,t[2]=(h*M*c-T*p*c+T*o*m-a*M*m-h*o*x+a*p*x)*P,t[3]=(v*p*c-h*_*c-v*o*m+a*_*m+h*o*y-a*p*y)*P,t[4]=D*P,t[5]=(g*M*c-b*_*c+b*o*y-n*M*y-g*o*x+n*_*x)*P,t[6]=(b*p*c-u*M*c-b*o*m+n*M*m+u*o*x-n*p*x)*P,t[7]=(u*_*c-g*p*c+g*o*m-n*_*m-u*o*y+n*p*y)*P,t[8]=w*P,t[9]=(b*v*c-g*T*c-b*a*y+n*T*y+g*a*x-n*v*x)*P,t[10]=(u*T*c-b*h*c+b*a*m-n*T*m-u*a*x+n*h*x)*P,t[11]=(g*h*c-u*v*c-g*a*m+n*v*m+u*a*y-n*h*y)*P,t[12]=q*P,t[13]=(g*T*o-b*v*o+b*a*_-n*T*_-g*a*M+n*v*M)*P,t[14]=(b*h*o-u*T*o-b*a*p+n*T*p+u*a*M-n*h*M)*P,t[15]=(u*v*o-g*h*o+g*a*p-n*v*p-u*a*_+n*h*_)*P,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,m=c*u,g=c*h;return this.set(m*u+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*u,0,m*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,m=c+c,g=u+u,v=h+h,_=c*m,y=c*g,b=c*v,T=u*g,M=u*v,x=h*v,O=p*m,D=p*g,w=p*v,q=a.x,I=a.y,P=a.z;return o[0]=(1-(T+x))*q,o[1]=(y+w)*q,o[2]=(b-D)*q,o[3]=0,o[4]=(y-w)*I,o[5]=(1-(_+x))*I,o[6]=(M+O)*I,o[7]=0,o[8]=(b+D)*P,o[9]=(M-O)*P,o[10]=(1-(_+T))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=_s.set(o[0],o[1],o[2]).length();const u=_s.set(o[4],o[5],o[6]).length(),h=_s.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ri.copy(this);const m=1/c,g=1/u,v=1/h;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,n.setFromRotationMatrix(Ri),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=ha){const p=this.elements,m=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),_=(a+o)/(a-o);let y,b;if(h===ha)y=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(h===iu)y=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ha){const p=this.elements,m=1/(n-t),g=1/(a-o),v=1/(u-c),_=(n+t)*m,y=(a+o)*g;let b,T;if(h===ha)b=(u+c)*v,T=-2*v;else if(h===iu)b=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const _s=new tt,Ri=new Qe,i1=new tt(0,0,0),a1=new tt(1,1,1),Wa=new tt,bc=new tt,si=new tt,Bv=new Qe,Iv=new el;class va{constructor(t=0,n=0,a=0,o=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],p=o[1],m=o[5],g=o[9],v=o[2],_=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Bv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Iv.setFromEuler(this),this.setFromQuaternion(Iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class yy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let r1=0;const Hv=new tt,ys=new el,sa=new Qe,Tc=new tt,Bo=new tt,s1=new tt,o1=new el,Gv=new tt(1,0,0),Vv=new tt(0,1,0),kv=new tt(0,0,1),Xv={type:"added"},l1={type:"removed"},xs={type:"childadded",child:null},Vh={type:"childremoved",child:null};class Gn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new tt,n=new va,a=new el,o=new tt(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qe},normalMatrix:{value:new _e}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Gv,t)}rotateY(t){return this.rotateOnAxis(Vv,t)}rotateZ(t){return this.rotateOnAxis(kv,t)}translateOnAxis(t,n){return Hv.copy(t).applyQuaternion(this.quaternion),this.position.add(Hv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Gv,t)}translateY(t){return this.translateOnAxis(Vv,t)}translateZ(t){return this.translateOnAxis(kv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Tc.copy(t):Tc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Bo,Tc,this.up):sa.lookAt(Tc,Bo,this.up),this.quaternion.setFromRotationMatrix(sa),o&&(sa.extractRotation(o.matrixWorld),ys.setFromRotationMatrix(sa),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xv),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(l1),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xv),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,s1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,o1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),m=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),y=u(t.animations),b=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),y.length>0&&(a.animations=y),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new tt(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new tt,oa=new tt,kh=new tt,la=new tt,Ss=new tt,Ms=new tt,Wv=new tt,Xh=new tt,Wh=new tt,qh=new tt,Yh=new on,jh=new on,Zh=new on;class wi{constructor(t=new tt,n=new tt,a=new tt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ci.subVectors(t,n),o.cross(Ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ci.subVectors(o,n),oa.subVectors(a,n),kh.subVectors(t,n);const u=Ci.dot(Ci),h=Ci.dot(oa),p=Ci.dot(kh),m=oa.dot(oa),g=oa.dot(kh),v=u*m-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,y=(m*p-h*g)*_,b=(u*g-h*p)*_;return c.set(1-y-b,b,y)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,n,a,o,c,u,h,p){return this.getBarycoord(t,n,a,o,la)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,la.x),p.addScaledVector(u,la.y),p.addScaledVector(h,la.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return Yh.setScalar(0),jh.setScalar(0),Zh.setScalar(0),Yh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,a),Zh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Yh,c.x),u.addScaledVector(jh,c.y),u.addScaledVector(Zh,c.z),u}static isFrontFacing(t,n,a,o){return Ci.subVectors(a,n),oa.subVectors(t,n),Ci.cross(oa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ci.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return wi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return wi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Ss.subVectors(o,a),Ms.subVectors(c,a),Xh.subVectors(t,a);const p=Ss.dot(Xh),m=Ms.dot(Xh);if(p<=0&&m<=0)return n.copy(a);Wh.subVectors(t,o);const g=Ss.dot(Wh),v=Ms.dot(Wh);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Ss,u);qh.subVectors(t,c);const y=Ss.dot(qh),b=Ms.dot(qh);if(b>=0&&y<=b)return n.copy(c);const T=y*m-p*b;if(T<=0&&m>=0&&b<=0)return h=m/(m-b),n.copy(a).addScaledVector(Ms,h);const M=g*b-y*v;if(M<=0&&v-g>=0&&y-b>=0)return Wv.subVectors(c,o),h=(v-g)/(v-g+(y-b)),n.copy(o).addScaledVector(Wv,h);const x=1/(M+T+_);return u=T*x,h=_*x,n.copy(a).addScaledVector(Ss,u).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Kh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ze{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=Fe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Fe.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=Fe.workingColorSpace){if(t=WE(t,1),n=be(n,0,1),a=be(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Kh(u,c,t+1/3),this.g=Kh(u,c,t),this.b=Kh(u,c,t-1/3)}return Fe.toWorkingColorSpace(this,o),this}setStyle(t,n=li){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=li){const a=xy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Fe.fromWorkingColorSpace(Nn.copy(this),t),Math.round(be(Nn.r*255,0,255))*65536+Math.round(be(Nn.g*255,0,255))*256+Math.round(be(Nn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Fe.workingColorSpace){Fe.fromWorkingColorSpace(Nn.copy(this),n);const a=Nn.r,o=Nn.g,c=Nn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const g=(h+u)/2;if(h===u)p=0,m=0;else{const v=u-h;switch(m=g<=.5?v/(u+h):v/(2-u-h),u){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(Nn.copy(this),n),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=li){Fe.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,a=Nn.g,o=Nn.b;return t!==li?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+n,qa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(qa),t.getHSL(Ac);const a=Nh(qa.h,Ac.h,n),o=Nh(qa.s,Ac.s,n),c=Nh(qa.l,Ac.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ze;ze.NAMES=xy;let c1=0;class il extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ds,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(a.blending=this.blending),this.side!==Qa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Md&&(a.blendSrc=this.blendSrc),this.blendDst!==Ed&&(a.blendDst=this.blendDst),this.blendEquation!==Tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ar extends il{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new tt,Rc=new he;let u1=0;class Ii{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Lv,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Rc.fromBufferAttribute(this,n),Rc.applyMatrix3(t),this.setXY(n,Rc.x,Rc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Fo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),o=Kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),o=Kn(o,this.array),c=Kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lv&&(t.usage=this.usage),t}}class Sy extends Ii{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class My extends Ii{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class gn extends Ii{constructor(t,n,a){super(new Float32Array(t),n,a)}}let f1=0;const vi=new Qe,Qh=new Gn,Es=new tt,oi=new nl,Io=new nl,Sn=new tt;class yi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gy(t)?My:Sy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _e().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,n,a){return vi.makeTranslation(t,n,a),this.applyMatrix4(vi),this}scale(t,n,a){return vi.makeScale(t,n,a),this.applyMatrix4(vi),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const a=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(oi.min,Io.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Io.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Io.min),oi.expandByPoint(Io.max))}oi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Sn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Sn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Sn.fromBufferAttribute(h,m),p&&(Es.fromBufferAttribute(t,m),Sn.add(Es)),o=Math.max(o,a.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new tt,p[X]=new tt;const m=new tt,g=new tt,v=new tt,_=new he,y=new he,b=new he,T=new tt,M=new tt;function x(X,L,C){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,L),v.fromBufferAttribute(a,C),_.fromBufferAttribute(c,X),y.fromBufferAttribute(c,L),b.fromBufferAttribute(c,C),g.sub(m),v.sub(m),y.sub(_),b.sub(_);const k=1/(y.x*b.y-b.x*y.y);isFinite(k)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(k),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(k),h[X].add(T),h[L].add(T),h[C].add(T),p[X].add(M),p[L].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,L=O.length;X<L;++X){const C=O[X],k=C.start,ct=C.count;for(let ot=k,_t=k+ct;ot<_t;ot+=3)x(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new tt,w=new tt,q=new tt,I=new tt;function P(X){q.fromBufferAttribute(o,X),I.copy(q);const L=h[X];D.copy(L),D.sub(q.multiplyScalar(q.dot(L))).normalize(),w.crossVectors(I,L);const k=w.dot(p[X])<0?-1:1;u.setXYZW(X,D.x,D.y,D.z,k)}for(let X=0,L=O.length;X<L;++X){const C=O[X],k=C.start,ct=C.count;for(let ot=k,_t=k+ct;ot<_t;ot+=3)P(t.getX(ot+0)),P(t.getX(ot+1)),P(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,y=a.count;_<y;_++)a.setXYZ(_,0,0,0);const o=new tt,c=new tt,u=new tt,h=new tt,p=new tt,m=new tt,g=new tt,v=new tt;if(t)for(let _=0,y=t.count;_<y;_+=3){const b=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,M),h.add(g),p.add(g),m.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,y=n.count;_<y;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let y=0,b=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?y=p[T]*h.data.stride+h.offset:y=p[T]*g;for(let x=0;x<g;x++)_[b++]=m[y++]}return new Ii(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],y=t(_,a);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const y=m[v];g.push(y.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let _=0,y=v.length;_<y;_++)g.push(v[_].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qv=new Qe,yr=new _y,Cc=new uu,Yv=new tt,wc=new tt,Dc=new tt,Uc=new tt,Jh=new tt,Lc=new tt,jv=new tt,Nc=new tt;class Fn extends Gn{constructor(t=new yi,n=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Lc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],v=c[p];g!==0&&(Jh.fromBufferAttribute(v,t),u?Lc.addScaledVector(Jh,g):Lc.addScaledVector(Jh.sub(n),g))}n.add(Lc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Cc.copy(a.boundingSphere),Cc.applyMatrix4(c),yr.copy(t.ray).recast(t.near),!(Cc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Cc,Yv)===null||yr.origin.distanceToSquared(Yv)>(t.far-t.near)**2))&&(qv.copy(c).invert(),yr.copy(t.ray).applyMatrix4(qv),!(a.boundingBox!==null&&yr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,yr)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,T=_.length;b<T;b++){const M=_[b],x=u[M.materialIndex],O=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let w=O,q=D;w<q;w+=3){const I=h.getX(w),P=h.getX(w+1),X=h.getX(w+2);o=Oc(this,x,t,a,m,g,v,I,P,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=h.getX(M),D=h.getX(M+1),w=h.getX(M+2);o=Oc(this,u,t,a,m,g,v,O,D,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,T=_.length;b<T;b++){const M=_[b],x=u[M.materialIndex],O=Math.max(M.start,y.start),D=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let w=O,q=D;w<q;w+=3){const I=w,P=w+1,X=w+2;o=Oc(this,x,t,a,m,g,v,I,P,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const O=M,D=M+1,w=M+2;o=Oc(this,u,t,a,m,g,v,O,D,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function h1(s,t,n,a,o,c,u,h){let p;if(t.side===Qn?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,t.side===Qa,h),p===null)return null;Nc.copy(h),Nc.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Nc);return m<n.near||m>n.far?null:{distance:m,point:Nc.clone(),object:s}}function Oc(s,t,n,a,o,c,u,h,p,m){s.getVertexPosition(h,wc),s.getVertexPosition(p,Dc),s.getVertexPosition(m,Uc);const g=h1(s,t,n,a,wc,Dc,Uc,jv);if(g){const v=new tt;wi.getBarycoord(jv,wc,Dc,Uc,v),o&&(g.uv=wi.getInterpolatedAttribute(o,h,p,m,v,new he)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,p,m,v,new he)),u&&(g.normal=wi.getInterpolatedAttribute(u,h,p,m,v,new tt),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new tt,materialIndex:0};wi.getNormal(wc,Dc,Uc,_.normal),g.face=_,g.barycoord=v}return g}class al extends yi{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],g=[],v=[];let _=0,y=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,o,u,2),b("x","z","y",1,-1,t,a,-n,o,u,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(v,2));function b(T,M,x,O,D,w,q,I,P,X,L){const C=w/P,k=q/X,ct=w/2,ot=q/2,_t=I/2,bt=P+1,B=X+1;let rt=0,K=0;const Rt=new tt;for(let Nt=0;Nt<B;Nt++){const N=Nt*k-ot;for(let at=0;at<bt;at++){const et=at*C-ct;Rt[T]=et*O,Rt[M]=N*D,Rt[x]=_t,m.push(Rt.x,Rt.y,Rt.z),Rt[T]=0,Rt[M]=0,Rt[x]=I>0?1:-1,g.push(Rt.x,Rt.y,Rt.z),v.push(at/P),v.push(1-Nt/X),rt+=1}}for(let Nt=0;Nt<X;Nt++)for(let N=0;N<P;N++){const at=_+N+bt*Nt,et=_+N+bt*(Nt+1),z=_+(N+1)+bt*(Nt+1),F=_+(N+1)+bt*Nt;p.push(at,et,F),p.push(et,z,F),K+=6}h.addGroup(y,K,L),y+=K,_+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function In(s){const t={};for(let n=0;n<s.length;n++){const a=Bs(s[n]);for(const o in a)t[o]=a[o]}return t}function d1(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function Ey(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}const p1={clone:Bs,merge:In};var m1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends il{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=d1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class by extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ha}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new tt,Zv=new he,Kv=new he;class _i extends by{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=op*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,n){return this.getViewBounds(t,Zv,Kv),n.subVectors(Kv,Zv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Lh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/m,o*=u.width/p,a*=u.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ts=1;class v1 extends Gn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _i(bs,Ts,t,n);o.layers=this.layers,this.add(o);const c=new _i(bs,Ts,t,n);c.layers=this.layers,this.add(c);const u=new _i(bs,Ts,t,n);u.layers=this.layers,this.add(u);const h=new _i(bs,Ts,t,n);h.layers=this.layers,this.add(h);const p=new _i(bs,Ts,t,n);p.layers=this.layers,this.add(p);const m=new _i(bs,Ts,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const m of n)this.remove(m);if(t===ha)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===iu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,m),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,y),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Ty extends Hn{constructor(t=[],n=Fs,a,o,c,u,h,p,m,g){super(t,n,a,o,c,u,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _1 extends Nr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Ty(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new al(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Bs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:Za});c.uniforms.tEquirect.value=n;const u=new Fn(o,c),h=n.minFilter;return n.minFilter===wr&&(n.minFilter=Bi),new v1(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Cs extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y1={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),x=this._getHandJoint(m,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),y=.02,b=.005;m.inputState.pinching&&_>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Cs;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class x1 extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const td=new tt,S1=new tt,M1=new _e;class Er{constructor(t=new tt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=td.subVectors(a,n).cross(S1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(td),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||M1.getNormalMatrix(t),o=this.coplanarPoint(td).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new uu,Fc=new tt;class Ay{constructor(t=new Er,n=new Er,a=new Er,o=new Er,c=new Er,u=new Er){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ha){const a=this.planes,o=t.elements,c=o[0],u=o[1],h=o[2],p=o[3],m=o[4],g=o[5],v=o[6],_=o[7],y=o[8],b=o[9],T=o[10],M=o[11],x=o[12],O=o[13],D=o[14],w=o[15];if(a[0].setComponents(p-c,_-m,M-y,w-x).normalize(),a[1].setComponents(p+c,_+m,M+y,w+x).normalize(),a[2].setComponents(p+u,_+g,M+b,w+O).normalize(),a[3].setComponents(p-u,_-g,M-b,w-O).normalize(),a[4].setComponents(p-h,_-v,M-T,w-D).normalize(),n===ha)a[5].setComponents(p+h,_+v,M+T,w+D).normalize();else if(n===iu)a[5].setComponents(h,v,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Fc.x=o.normal.x>0?t.max.x:t.min.x,Fc.y=o.normal.y>0?t.max.y:t.min.y,Fc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ry extends il{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ru=new tt,su=new tt,Qv=new Qe,Ho=new _y,Pc=new uu,ed=new tt,Jv=new tt;class E1 extends Gn{constructor(t=new yi,n=new Ry){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ru.fromBufferAttribute(n,o-1),su.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ru.distanceTo(su);t.setAttribute("lineDistance",new gn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(o),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;Qv.copy(o).invert(),Ho.copy(t.ray).applyMatrix4(Qv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let T=y,M=b-1;T<M;T+=m){const x=g.getX(T),O=g.getX(T+1),D=zc(this,t,Ho,p,x,O,T);D&&n.push(D)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(y),x=zc(this,t,Ho,p,T,M,b-1);x&&n.push(x)}}else{const y=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let T=y,M=b-1;T<M;T+=m){const x=zc(this,t,Ho,p,T,T+1,T);x&&n.push(x)}if(this.isLineLoop){const T=zc(this,t,Ho,p,b-1,y,b-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function zc(s,t,n,a,o,c,u){const h=s.geometry.attributes.position;if(ru.fromBufferAttribute(h,o),su.fromBufferAttribute(h,c),n.distanceSqToSegment(ru,su,ed,Jv)>a)return;ed.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ed);if(!(m<t.near||m>t.far))return{distance:m,point:Jv.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const $v=new tt,t_=new tt;class Cy extends E1{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)$v.fromBufferAttribute(n,o),t_.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+$v.distanceTo(t_);t.setAttribute("lineDistance",new gn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e_ extends Hn{constructor(t,n,a,o,c,u,h,p,m){super(t,n,a,o,c,u,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wy extends Hn{constructor(t,n,a=Lr,o,c,u,h=Ui,p=Ui,m,g=Zo){if(g!==Zo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,u,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _a{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-u,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const g=a[o],_=a[o+1]-g,y=(u-g)/_;return(o+y)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),p=n||(u.isVector2?new he:new tt);return p.copy(h).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new tt,o=[],c=[],u=[],h=new tt,p=new Qe;for(let y=0;y<=t;y++){const b=y/t;o[y]=this.getTangentAt(b,new tt)}c[0]=new tt,u[0]=new tt;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=m&&(m=g,a.set(1,0,0)),v<=m&&(m=v,a.set(0,1,0)),_<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),u[y]=u[y-1].clone(),h.crossVectors(o[y-1],o[y]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(be(o[y-1].dot(o[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(h,b))}u[y].crossVectors(o[y],c[y])}if(n===!0){let y=Math.acos(be(c[0].dot(c[t]),-1,1));y/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let b=1;b<=t;b++)c[b].applyMatrix4(p.makeRotationAxis(o[b],y*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dy extends _a{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new he){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,y=m-this.aY;p=_*g-y*v+this.aX,m=_*v+y*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class b1 extends Dy{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function bp(){let s=0,t=0,n=0,a=0;function o(c,u,h,p){s=c,t=h,n=-3*c+3*u-2*h-p,a=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,m){o(u,h,m*(h-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,m,g,v){let _=(u-c)/m-(h-c)/(m+g)+(h-u)/g,y=(h-u)/g-(p-u)/(g+v)+(p-h)/v;_*=g,y*=g,o(u,h,_,y)},calc:function(c){const u=c*c,h=u*c;return s+t*c+n*u+a*h}}}const Bc=new tt,nd=new bp,id=new bp,ad=new bp;class lp extends _a{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new tt){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=o[(h-1)%c]:(Bc.subVectors(o[0],o[1]).add(o[0]),m=Bc);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Bc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(m.distanceToSquared(v),y),T=Math.pow(v.distanceToSquared(_),y),M=Math.pow(_.distanceToSquared(g),y);T<1e-4&&(T=1),b<1e-4&&(b=T),M<1e-4&&(M=T),nd.initNonuniformCatmullRom(m.x,v.x,_.x,g.x,b,T,M),id.initNonuniformCatmullRom(m.y,v.y,_.y,g.y,b,T,M),ad.initNonuniformCatmullRom(m.z,v.z,_.z,g.z,b,T,M)}else this.curveType==="catmullrom"&&(nd.initCatmullRom(m.x,v.x,_.x,g.x,this.tension),id.initCatmullRom(m.y,v.y,_.y,g.y,this.tension),ad.initCatmullRom(m.z,v.z,_.z,g.z,this.tension));return a.set(nd.calc(p),id.calc(p),ad.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new tt().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function n_(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=s*s,p=s*h;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*h+c*s+n}function T1(s,t){const n=1-s;return n*n*t}function A1(s,t){return 2*(1-s)*s*t}function R1(s,t){return s*s*t}function ko(s,t,n,a){return T1(s,t)+A1(s,n)+R1(s,a)}function C1(s,t){const n=1-s;return n*n*n*t}function w1(s,t){const n=1-s;return 3*n*n*s*t}function D1(s,t){return 3*(1-s)*s*s*t}function U1(s,t){return s*s*s*t}function Xo(s,t,n,a,o){return C1(s,t)+w1(s,n)+D1(s,a)+U1(s,o)}class L1 extends _a{constructor(t=new he,n=new he,a=new he,o=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new he){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Xo(t,o.x,c.x,u.x,h.x),Xo(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class N1 extends _a{constructor(t=new tt,n=new tt,a=new tt,o=new tt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new tt){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Xo(t,o.x,c.x,u.x,h.x),Xo(t,o.y,c.y,u.y,h.y),Xo(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O1 extends _a{constructor(t=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new he){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F1 extends _a{constructor(t=new tt,n=new tt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new tt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new tt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P1 extends _a{constructor(t=new he,n=new he,a=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new he){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ko(t,o.x,c.x,u.x),ko(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uy extends _a{constructor(t=new tt,n=new tt,a=new tt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new tt){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ko(t,o.x,c.x,u.x),ko(t,o.y,c.y,u.y),ko(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z1 extends _a{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new he){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,p=o[u===0?u:u-1],m=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(n_(h,p.x,m.x,g.x,v.x),n_(h,p.y,m.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new he().fromArray(o))}return this}}var B1=Object.freeze({__proto__:null,ArcCurve:b1,CatmullRomCurve3:lp,CubicBezierCurve:L1,CubicBezierCurve3:N1,EllipseCurve:Dy,LineCurve:O1,LineCurve3:F1,QuadraticBezierCurve:P1,QuadraticBezierCurve3:Uy,SplineCurve:z1});class Tp extends yi{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],p=[],m=new tt,g=new he;u.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const y=a+v/n*o;m.x=t*Math.cos(y),m.y=t*Math.sin(y),u.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(u[_]/t+1)/2,g.y=(u[_+1]/t+1)/2,p.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ap extends yi{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],y=[];let b=0;const T=[],M=a/2;let x=0;O(),u===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(y,2));function O(){const w=new tt,q=new tt;let I=0;const P=(n-t)/a;for(let X=0;X<=c;X++){const L=[],C=X/c,k=C*(n-t)+t;for(let ct=0;ct<=o;ct++){const ot=ct/o,_t=ot*p+h,bt=Math.sin(_t),B=Math.cos(_t);q.x=k*bt,q.y=-C*a+M,q.z=k*B,v.push(q.x,q.y,q.z),w.set(bt,P,B).normalize(),_.push(w.x,w.y,w.z),y.push(ot,1-C),L.push(b++)}T.push(L)}for(let X=0;X<o;X++)for(let L=0;L<c;L++){const C=T[L][X],k=T[L+1][X],ct=T[L+1][X+1],ot=T[L][X+1];(t>0||L!==0)&&(g.push(C,k,ot),I+=3),(n>0||L!==c-1)&&(g.push(k,ct,ot),I+=3)}m.addGroup(x,I,0),x+=I}function D(w){const q=b,I=new he,P=new tt;let X=0;const L=w===!0?t:n,C=w===!0?1:-1;for(let ct=1;ct<=o;ct++)v.push(0,M*C,0),_.push(0,C,0),y.push(.5,.5),b++;const k=b;for(let ct=0;ct<=o;ct++){const _t=ct/o*p+h,bt=Math.cos(_t),B=Math.sin(_t);P.x=L*B,P.y=M*C,P.z=L*bt,v.push(P.x,P.y,P.z),_.push(0,C,0),I.x=bt*.5+.5,I.y=B*.5*C+.5,y.push(I.x,I.y),b++}for(let ct=0;ct<o;ct++){const ot=q+ct,_t=k+ct;w===!0?g.push(_t,_t+1,ot):g.push(_t+1,_t,ot),X+=3}m.addGroup(x,X,w===!0?1:2),x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ap(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Ap{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new ou(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rl extends yi{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,v=t/h,_=n/p,y=[],b=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*_-u;for(let D=0;D<m;D++){const w=D*v-c;b.push(w,-O,0),T.push(0,0,1),M.push(D/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let O=0;O<h;O++){const D=O+m*x,w=O+m*(x+1),q=O+1+m*(x+1),I=O+1+m*x;y.push(D,w,I),y.push(w,q,I)}this.setIndex(y),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.widthSegments,t.heightSegments)}}class lu extends yi{constructor(t=new Uy(new tt(-1,-1,0),new tt(-1,1,0),new tt(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new tt,p=new tt,m=new he;let g=new tt;const v=[],_=[],y=[],b=[];T(),this.setIndex(b),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(y,2));function T(){for(let D=0;D<n;D++)M(D);M(c===!1?n:0),O(),x()}function M(D){g=t.getPointAt(D/n,g);const w=u.normals[D],q=u.binormals[D];for(let I=0;I<=o;I++){const P=I/o*Math.PI*2,X=Math.sin(P),L=-Math.cos(P);p.x=L*w.x+X*q.x,p.y=L*w.y+X*q.y,p.z=L*w.z+X*q.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function x(){for(let D=1;D<=n;D++)for(let w=1;w<=o;w++){const q=(o+1)*(D-1)+(w-1),I=(o+1)*D+(w-1),P=(o+1)*D+w,X=(o+1)*(D-1)+w;b.push(q,I,X),b.push(I,P,X)}}function O(){for(let D=0;D<=n;D++)for(let w=0;w<=o;w++)m.x=D/n,m.y=w/o,y.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lu(new B1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class I1 extends il{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class H1 extends il{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class G1 extends Gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class V1 extends by{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class k1 extends G1{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class X1 extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function i_(s,t,n,a){const o=W1(a);switch(n){case ly:return s*t;case uy:return s*t;case fy:return s*t*2;case hy:return s*t/o.components*o.byteLength;case xp:return s*t/o.components*o.byteLength;case dy:return s*t*2/o.components*o.byteLength;case Sp:return s*t*2/o.components*o.byteLength;case cy:return s*t*3/o.components*o.byteLength;case Di:return s*t*4/o.components*o.byteLength;case Mp:return s*t*4/o.components*o.byteLength;case Yc:case jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pd:case Bd:return Math.max(s,16)*Math.max(t,8)/4;case Fd:case zd:return Math.max(s,8)*Math.max(t,8)/2;case Id:case Hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ep:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qc:case np:case ip:return Math.ceil(s/4)*Math.ceil(t/4)*16;case py:case ap:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rp:case sp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function W1(s){switch(s){case ga:case ry:return{byteLength:1,components:1};case Yo:case sy:case $o:return{byteLength:2,components:1};case _p:case yp:return{byteLength:2,components:4};case Lr:case vp:case fa:return{byteLength:4,components:1};case oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ly(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function q1(s){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,g),h.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((y,b)=>y.start-b.start);let _=0;for(let y=1;y<v.length;y++){const b=v[_],T=v[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++_,v[_]=T)}v.length=_+1;for(let y=0,b=v.length;y<b;y++){const T=v[y];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:u}}var Y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
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
#endif`,Z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$1=`#ifdef USE_AOMAP
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
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
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
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sb=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gb=`#define PI 3.141592653589793
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
} // validated`,vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bb=`uniform bool receiveShadow;
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
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,qb=`
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
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nT=`#if defined( USE_POINTS_UV )
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
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
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
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,OT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FT=`#ifdef USE_SKINNING
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
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YT=`uniform sampler2D t2D;
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
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
}`,tA=`#define DISTANCE
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
}`,eA=`#define DISTANCE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#define LAMBERT
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
}`,cA=`#define LAMBERT
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
}`,uA=`#define MATCAP
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
}`,fA=`#define MATCAP
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
}`,hA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,pA=`#define PHONG
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
}`,mA=`#define PHONG
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
}`,gA=`#define STANDARD
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
}`,vA=`#define STANDARD
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
}`,_A=`#define TOON
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
}`,yA=`#define TOON
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
}`,xA=`uniform float size;
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,EA=`uniform vec3 color;
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
}`,bA=`uniform float rotation;
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
}`,TA=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:Y1,alphahash_pars_fragment:j1,alphamap_fragment:Z1,alphamap_pars_fragment:K1,alphatest_fragment:Q1,alphatest_pars_fragment:J1,aomap_fragment:$1,aomap_pars_fragment:tb,batching_pars_vertex:eb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:ab,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ob,clipping_planes_fragment:lb,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:fb,color_fragment:hb,color_pars_fragment:db,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:vb,defaultnormal_vertex:_b,displacementmap_pars_vertex:yb,displacementmap_vertex:xb,emissivemap_fragment:Sb,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:bb,envmap_fragment:Tb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Rb,envmap_pars_vertex:Cb,envmap_physical_pars_fragment:Ib,envmap_vertex:wb,fog_vertex:Db,fog_pars_vertex:Ub,fog_fragment:Lb,fog_pars_fragment:Nb,gradientmap_pars_fragment:Ob,lightmap_pars_fragment:Fb,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:zb,lights_pars_begin:Bb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Vb,lights_phong_pars_fragment:kb,lights_physical_fragment:Xb,lights_physical_pars_fragment:Wb,lights_fragment_begin:qb,lights_fragment_maps:Yb,lights_fragment_end:jb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:Jb,map_fragment:$b,map_pars_fragment:tT,map_particle_fragment:eT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:aT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:fT,normal_pars_fragment:hT,normal_pars_vertex:dT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:yT,opaque_fragment:xT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:bT,dithering_pars_fragment:TT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:RT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:wT,shadowmap_vertex:DT,shadowmask_pars_fragment:UT,skinbase_vertex:LT,skinning_pars_vertex:NT,skinning_vertex:OT,skinnormal_vertex:FT,specularmap_fragment:PT,specularmap_pars_fragment:zT,tonemapping_fragment:BT,tonemapping_pars_fragment:IT,transmission_fragment:HT,transmission_pars_fragment:GT,uv_pars_fragment:VT,uv_pars_vertex:kT,uv_vertex:XT,worldpos_vertex:WT,background_vert:qT,background_frag:YT,backgroundCube_vert:jT,backgroundCube_frag:ZT,cube_vert:KT,cube_frag:QT,depth_vert:JT,depth_frag:$T,distanceRGBA_vert:tA,distanceRGBA_frag:eA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:cA,meshmatcap_vert:uA,meshmatcap_frag:fA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:vA,meshtoon_vert:_A,meshtoon_frag:yA,points_vert:xA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:bA,sprite_frag:TA},Kt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:In([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:In([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:In([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:In([Kt.points,Kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:In([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:In([Kt.common,Kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:In([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:In([Kt.sprite,Kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:In([Kt.common,Kt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:In([Kt.lights,Kt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Ic={r:0,b:0,g:0},Sr=new va,AA=new Qe;function RA(s,t,n,a,o,c,u){const h=new ze(0);let p=c===!0?0:1,m,g,v=null,_=0,y=null;function b(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?n:t).get(w)),w}function T(D){let w=!1;const q=b(D);q===null?x(h,p):q&&q.isColor&&(x(q,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,w){const q=b(w);q&&(q.isCubeTexture||q.mapping===cu)?(g===void 0&&(g=new Fn(new al(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Bs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Sr.copy(w.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(Sr)),g.material.toneMapped=Fe.getTransfer(q.colorSpace)!==Xe,(v!==q||_!==q.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=q,_=q.version,y=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(m===void 0&&(m=new Fn(new rl(2,2),new Ja({name:"BackgroundMaterial",uniforms:Bs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=q,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Fe.getTransfer(q.colorSpace)!==Xe,q.matrixAutoUpdate===!0&&q.updateMatrix(),m.material.uniforms.uvTransform.value.copy(q.matrix),(v!==q||_!==q.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=q,_=q.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function x(D,w){D.getRGB(Ic,Ey(s)),a.buffers.color.setClear(Ic.r,Ic.g,Ic.b,w,u)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,w=1){h.set(D),p=w,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(h,p)},render:T,addToRenderList:M,dispose:O}}function CA(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function h(C,k,ct,ot,_t){let bt=!1;const B=v(ot,ct,k);c!==B&&(c=B,m(c.object)),bt=y(C,ot,ct,_t),bt&&b(C,ot,ct,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(bt||u)&&(u=!1,w(C,k,ct,ot),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,k,ct){const ot=ct.wireframe===!0;let _t=a[C.id];_t===void 0&&(_t={},a[C.id]=_t);let bt=_t[k.id];bt===void 0&&(bt={},_t[k.id]=bt);let B=bt[ot];return B===void 0&&(B=_(p()),bt[ot]=B),B}function _(C){const k=[],ct=[],ot=[];for(let _t=0;_t<n;_t++)k[_t]=0,ct[_t]=0,ot[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ct,attributeDivisors:ot,object:C,attributes:{},index:null}}function y(C,k,ct,ot){const _t=c.attributes,bt=k.attributes;let B=0;const rt=ct.getAttributes();for(const K in rt)if(rt[K].location>=0){const Nt=_t[K];let N=bt[K];if(N===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Nt===void 0||Nt.attribute!==N||N&&Nt.data!==N.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function b(C,k,ct,ot){const _t={},bt=k.attributes;let B=0;const rt=ct.getAttributes();for(const K in rt)if(rt[K].location>=0){let Nt=bt[K];Nt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Nt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Nt=C.instanceColor));const N={};N.attribute=Nt,Nt&&Nt.data&&(N.data=Nt.data),_t[K]=N,B++}c.attributes=_t,c.attributesNum=B,c.index=ot}function T(){const C=c.newAttributes;for(let k=0,ct=C.length;k<ct;k++)C[k]=0}function M(C){x(C,0)}function x(C,k){const ct=c.newAttributes,ot=c.enabledAttributes,_t=c.attributeDivisors;ct[C]=1,ot[C]===0&&(s.enableVertexAttribArray(C),ot[C]=1),_t[C]!==k&&(s.vertexAttribDivisor(C,k),_t[C]=k)}function O(){const C=c.newAttributes,k=c.enabledAttributes;for(let ct=0,ot=k.length;ct<ot;ct++)k[ct]!==C[ct]&&(s.disableVertexAttribArray(ct),k[ct]=0)}function D(C,k,ct,ot,_t,bt,B){B===!0?s.vertexAttribIPointer(C,k,ct,_t,bt):s.vertexAttribPointer(C,k,ct,ot,_t,bt)}function w(C,k,ct,ot){T();const _t=ot.attributes,bt=ct.getAttributes(),B=k.defaultAttributeValues;for(const rt in bt){const K=bt[rt];if(K.location>=0){let Rt=_t[rt];if(Rt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(Rt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(Rt=C.instanceColor)),Rt!==void 0){const Nt=Rt.normalized,N=Rt.itemSize,at=t.get(Rt);if(at===void 0)continue;const et=at.buffer,z=at.type,F=at.bytesPerElement,Y=z===s.INT||z===s.UNSIGNED_INT||Rt.gpuType===vp;if(Rt.isInterleavedBufferAttribute){const W=Rt.data,vt=W.stride,wt=Rt.offset;if(W.isInstancedInterleavedBuffer){for(let Ft=0;Ft<K.locationSize;Ft++)x(K.location+Ft,W.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ft=0;Ft<K.locationSize;Ft++)M(K.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ft=0;Ft<K.locationSize;Ft++)D(K.location+Ft,N/K.locationSize,z,Nt,vt*F,(wt+N/K.locationSize*Ft)*F,Y)}else{if(Rt.isInstancedBufferAttribute){for(let W=0;W<K.locationSize;W++)x(K.location+W,Rt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let W=0;W<K.locationSize;W++)M(K.location+W);s.bindBuffer(s.ARRAY_BUFFER,et);for(let W=0;W<K.locationSize;W++)D(K.location+W,N/K.locationSize,z,Nt,N*F,N/K.locationSize*W*F,Y)}}else if(B!==void 0){const Nt=B[rt];if(Nt!==void 0)switch(Nt.length){case 2:s.vertexAttrib2fv(K.location,Nt);break;case 3:s.vertexAttrib3fv(K.location,Nt);break;case 4:s.vertexAttrib4fv(K.location,Nt);break;default:s.vertexAttrib1fv(K.location,Nt)}}}}O()}function q(){X();for(const C in a){const k=a[C];for(const ct in k){const ot=k[ct];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete k[ct]}delete a[C]}}function I(C){if(a[C.id]===void 0)return;const k=a[C.id];for(const ct in k){const ot=k[ct];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete k[ct]}delete a[C.id]}function P(C){for(const k in a){const ct=a[k];if(ct[C.id]===void 0)continue;const ot=ct[C.id];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete ct[C.id]}}function X(){L(),u=!0,c!==o&&(c=o,m(c.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function wA(s,t,n){let a;function o(m){a=m}function c(m,g){s.drawArrays(a,m,g),n.update(g,a,1)}function u(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),n.update(g,a,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let y=0;for(let b=0;b<v;b++)y+=g[b];n.update(y,a,1)}function p(m,g,v,_){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<m.length;b++)u(m[b],g[b],_[b]);else{y.multiDrawArraysInstancedWEBGL(a,m,0,g,0,_,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*_[T];n.update(b,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function DA(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Di&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const X=P===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ga&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fa&&!X)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:q,maxSamples:I}}function UA(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Er,h=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||a!==0||o;return o=_,a=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,y){const b=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,x=s.get(v);if(!o||b===null||b.length===0||c&&!M)c?g(null):m();else{const O=c?0:a,D=O*4;let w=x.clippingState||null;p.value=w,w=g(b,_,D,y);for(let q=0;q!==D;++q)w[q]=n[q];x.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,y,b){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=p.value,b!==!0||M===null){const x=y+T*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,w=y;D!==T;++D,w+=4)u.copy(v[D]).applyMatrix4(O,h),u.normal.toArray(M,w),M[w+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function LA(s){let t=new WeakMap;function n(u,h){return h===Ud?u.mapping=Fs:h===Ld&&(u.mapping=Ps),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Ud||h===Ld)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new _1(p.height);return m.fromEquirectangularTexture(s,u),t.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const ws=4,a_=[.125,.215,.35,.446,.526,.582],Rr=20,rd=new V1,r_=new ze;let sd=null,od=0,ld=0,cd=!1;const br=(1+Math.sqrt(5))/2,As=1/br,s_=[new tt(-br,As,0),new tt(br,As,0),new tt(-As,0,br),new tt(As,0,br),new tt(0,br,-As),new tt(0,br,As),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],NA=new tt;class o_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=NA}=c;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,t.scissorTest=!1,Hc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Fs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:$o,format:Di,colorSpace:zs,depthBuffer:!1},o=l_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(c)),this._blurMaterial=FA(c,t,n)}return o}_compileMaterial(t){const n=new Fn(this._lodPlanes[0],t);this._renderer.compile(n,rd)}_sceneToCubeUV(t,n,a,o,c){const p=new _i(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(r_),v.toneMapping=Ka,v.autoClear=!1;const b=new Ar({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),T=new Fn(new al,b);let M=!1;const x=t.background;x?x.isColor&&(b.color.copy(x),t.background=null,M=!0):(b.color.copy(r_),M=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):D===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const w=this._cubeSize;Hc(o,D*w,O>2?w:0,w,w),v.setRenderTarget(o),M&&v.render(T,p),v.render(t,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=y,v.autoClear=_,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Fs||t.mapping===Ps;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Fn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Hc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,rd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=s_[(o-c-1)%s_.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Fn(this._lodPlanes[o],m),_=m.uniforms,y=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Rr-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Rr;M>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Rr}`);const x=[];let O=0;for(let P=0;P<Rr;++P){const X=P/T,L=Math.exp(-X*X/2);x.push(L),P===0?O+=L:P<M&&(O+=2*L)}for(let P=0;P<x.length;P++)x[P]=x[P]/O;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=b,_.mipInt.value=D-a;const w=this._sizeLods[o],q=3*w*(o>D-ws?o-D+ws:0),I=4*(this._cubeSize-w);Hc(n,q,I,3*w,2*w),p.setRenderTarget(n),p.render(v,rd)}}function OA(s){const t=[],n=[],a=[];let o=s;const c=s-ws+1+a_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let p=1/h;u>s-ws?p=a_[u-s+ws-1]:u===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,b=6,T=3,M=2,x=1,O=new Float32Array(T*b*y),D=new Float32Array(M*b*y),w=new Float32Array(x*b*y);for(let I=0;I<y;I++){const P=I%3*2/3-1,X=I>2?0:-1,L=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];O.set(L,T*b*I),D.set(_,M*b*I);const C=[I,I,I,I,I,I];w.set(C,x*b*I)}const q=new yi;q.setAttribute("position",new Ii(O,T)),q.setAttribute("uv",new Ii(D,M)),q.setAttribute("faceIndex",new Ii(w,x)),t.push(q),o>ws&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function l_(s,t,n){const a=new Nr(s,t,n);return a.texture.mapping=cu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Hc(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function FA(s,t,n){const a=new Float32Array(Rr),o=new tt(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function c_(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function u_(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Rp(){return`

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
	`}function PA(s){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===Ud||p===Ld,g=p===Fs||p===Ps;if(m||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new o_(s)),v=m?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const y=h.image;return m&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new o_(s)),v=m?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function zA(s){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Jc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function BA(s,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const y in _)t.update(_[y],s.ARRAY_BUFFER)}function m(v){const _=[],y=v.index,b=v.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let D=0,w=O.length;D<w;D+=3){const q=O[D+0],I=O[D+1],P=O[D+2];_.push(q,I,I,P,P,q)}}else if(b!==void 0){const O=b.array;T=b.version;for(let D=0,w=O.length/3-1;D<w;D+=3){const q=D+0,I=D+1,P=D+2;_.push(q,I,I,P,P,q)}}else return;const M=new(gy(_)?My:Sy)(_,1);M.version=T;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function IA(s,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,y){s.drawElements(a,y,c,_*u),n.update(y,a,1)}function m(_,y,b){b!==0&&(s.drawElementsInstanced(a,y,c,_*u,b),n.update(y,a,b))}function g(_,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,_,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];n.update(M,a,1)}function v(_,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)m(_[x]/u,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,c,_,0,T,0,b);let x=0;for(let O=0;O<b;O++)x+=y[O]*T[O];n.update(x,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function HA(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function GA(s,t,n){const a=new WeakMap,o=new on;function c(u,h,p){const m=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let L=function(){P.dispose(),a.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;y===!0&&(D=1),b===!0&&(D=2),T===!0&&(D=3);let w=h.attributes.position.count*D,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const I=new Float32Array(w*q*4*v),P=new vy(I,w,q,v);P.type=fa,P.needsUpdate=!0;const X=D*4;for(let C=0;C<v;C++){const k=M[C],ct=x[C],ot=O[C],_t=w*q*4*C;for(let bt=0;bt<k.count;bt++){const B=bt*X;y===!0&&(o.fromBufferAttribute(k,bt),I[_t+B+0]=o.x,I[_t+B+1]=o.y,I[_t+B+2]=o.z,I[_t+B+3]=0),b===!0&&(o.fromBufferAttribute(ct,bt),I[_t+B+4]=o.x,I[_t+B+5]=o.y,I[_t+B+6]=o.z,I[_t+B+7]=0),T===!0&&(o.fromBufferAttribute(ot,bt),I[_t+B+8]=o.x,I[_t+B+9]=o.y,I[_t+B+10]=o.z,I[_t+B+11]=ot.itemSize===4?o.w:1)}}_={count:v,texture:P,size:new he(w,q)},a.set(h,_),h.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let y=0;for(let T=0;T<m.length;T++)y+=m[T];const b=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function VA(s,t,n,a){let o=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==m&&(t.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function u(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Ny=new Hn,f_=new wy(1,1),Oy=new vy,Fy=new e1,Py=new Ty,h_=[],d_=[],p_=new Float32Array(16),m_=new Float32Array(9),g_=new Float32Array(4);function Gs(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=h_[o];if(c===void 0&&(c=new Float32Array(o),h_[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function _n(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function fu(s,t){let n=d_[t];n===void 0&&(n=new Int32Array(t),d_[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function kA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function XA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;s.uniform2fv(this.addr,t),_n(n,t)}}function WA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vn(n,t))return;s.uniform3fv(this.addr,t),_n(n,t)}}function qA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;s.uniform4fv(this.addr,t),_n(n,t)}}function YA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,a))return;g_.set(a),s.uniformMatrix2fv(this.addr,!1,g_),_n(n,a)}}function jA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,a))return;m_.set(a),s.uniformMatrix3fv(this.addr,!1,m_),_n(n,a)}}function ZA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,a))return;p_.set(a),s.uniformMatrix4fv(this.addr,!1,p_),_n(n,a)}}function KA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function QA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;s.uniform2iv(this.addr,t),_n(n,t)}}function JA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;s.uniform3iv(this.addr,t),_n(n,t)}}function $A(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;s.uniform4iv(this.addr,t),_n(n,t)}}function tR(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function eR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;s.uniform2uiv(this.addr,t),_n(n,t)}}function nR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;s.uniform3uiv(this.addr,t),_n(n,t)}}function iR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;s.uniform4uiv(this.addr,t),_n(n,t)}}function aR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(f_.compareFunction=my,c=f_):c=Ny,n.setTexture2D(t||c,o)}function rR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Fy,o)}function sR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Py,o)}function oR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Oy,o)}function lR(s){switch(s){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return qA;case 35674:return YA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return tR;case 36294:return eR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}function cR(s,t){s.uniform1fv(this.addr,t)}function uR(s,t){const n=Gs(t,this.size,2);s.uniform2fv(this.addr,n)}function fR(s,t){const n=Gs(t,this.size,3);s.uniform3fv(this.addr,n)}function hR(s,t){const n=Gs(t,this.size,4);s.uniform4fv(this.addr,n)}function dR(s,t){const n=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function pR(s,t){const n=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function mR(s,t){const n=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function gR(s,t){s.uniform1iv(this.addr,t)}function vR(s,t){s.uniform2iv(this.addr,t)}function _R(s,t){s.uniform3iv(this.addr,t)}function yR(s,t){s.uniform4iv(this.addr,t)}function xR(s,t){s.uniform1uiv(this.addr,t)}function SR(s,t){s.uniform2uiv(this.addr,t)}function MR(s,t){s.uniform3uiv(this.addr,t)}function ER(s,t){s.uniform4uiv(this.addr,t)}function bR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||Ny,c[u])}function TR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Fy,c[u])}function AR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Py,c[u])}function RR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Oy,c[u])}function CR(s){switch(s){case 5126:return cR;case 35664:return uR;case 35665:return fR;case 35666:return hR;case 35674:return dR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return vR;case 35668:case 35672:return _R;case 35669:case 35673:return yR;case 5125:return xR;case 36294:return SR;case 36295:return MR;case 36296:return ER;case 35678:case 36198:case 36298:case 36306:case 35682:return bR;case 35679:case 36299:case 36307:return TR;case 35680:case 36300:case 36308:case 36293:return AR;case 36289:case 36303:case 36311:case 36292:return RR}}class wR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=lR(n.type)}}class DR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CR(n.type)}}class UR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function v_(s,t){s.seq.push(t),s.map[t.id]=t}function LR(s,t,n){const a=s.name,o=a.length;for(ud.lastIndex=0;;){const c=ud.exec(a),u=ud.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===o){v_(n,m===void 0?new wR(h,s,t):new DR(h,s,t));break}else{let v=n.map[h];v===void 0&&(v=new UR(h),v_(n,v)),n=v}}}class $c{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);LR(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function __(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const NR=37297;let OR=0;function FR(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const y_=new _e;function PR(s){Fe._getMatrix(y_,Fe.workingColorSpace,s);const t=`mat3( ${y_.elements.map(n=>n.toFixed(4))} )`;switch(Fe.getTransfer(s)){case nu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function x_(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+FR(s.getShaderSource(t),u)}else return o}function zR(s,t){const n=PR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function BR(s,t){let n;switch(t){case AE:n="Linear";break;case RE:n="Reinhard";break;case CE:n="Cineon";break;case wE:n="ACESFilmic";break;case UE:n="AgX";break;case LE:n="Neutral";break;case DE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Gc=new tt;function IR(){Fe.getLuminanceCoefficients(Gc);const s=Gc.x.toFixed(4),t=Gc.y.toFixed(4),n=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function GR(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function VR(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function Go(s){return s!==""}function S_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function M_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kR=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(s){return s.replace(kR,WR)}const XR=new Map;function WR(s,t){let n=ye[t];if(n===void 0){const a=XR.get(t);if(a!==void 0)n=ye[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return cp(n)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function E_(s){return s.replace(qR,YR)}function YR(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function b_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function jR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ny?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===rE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function ZR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Ps:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function QR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case iy:t="ENVMAP_BLENDING_MULTIPLY";break;case bE:t="ENVMAP_BLENDING_MIX";break;case TE:t="ENVMAP_BLENDING_ADD";break}return t}function JR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function $R(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=jR(n),m=ZR(n),g=KR(n),v=QR(n),_=JR(n),y=HR(n),b=GR(c),T=o.createProgram();let M,x,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Go).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(M=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[b_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ka?"#define TONE_MAPPING":"",n.toneMapping!==Ka?ye.tonemapping_pars_fragment:"",n.toneMapping!==Ka?BR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,zR("linearToOutputTexel",n.outputColorSpace),IR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),u=cp(u),u=S_(u,n),u=M_(u,n),h=cp(h),h=S_(h,n),h=M_(h,n),u=E_(u),h=E_(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=O+M+u,w=O+x+h,q=__(o,o.VERTEX_SHADER,D),I=__(o,o.FRAGMENT_SHADER,w);o.attachShader(T,q),o.attachShader(T,I),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function P(k){if(s.debug.checkShaderErrors){const ct=o.getProgramInfoLog(T).trim(),ot=o.getShaderInfoLog(q).trim(),_t=o.getShaderInfoLog(I).trim();let bt=!0,B=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(bt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,q,I);else{const rt=x_(o,q,"vertex"),K=x_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ct+`
`+rt+`
`+K)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(ot===""||_t==="")&&(B=!1);B&&(k.diagnostics={runnable:bt,programLog:ct,vertexShader:{log:ot,prefix:M},fragmentShader:{log:_t,prefix:x}})}o.deleteShader(q),o.deleteShader(I),X=new $c(o,T),L=VR(o,T)}let X;this.getUniforms=function(){return X===void 0&&P(this),X};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,NR)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=I,this}let tC=0;class eC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new nC(t),n.set(t,a)),a}}class nC{constructor(t){this.id=tC++,this.code=t,this.usedTimes=0}}function iC(s,t,n,a,o,c,u){const h=new yy,p=new eC,m=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let y=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function M(L,C,k,ct,ot){const _t=ct.fog,bt=ot.geometry,B=L.isMeshStandardMaterial?ct.environment:null,rt=(L.isMeshStandardMaterial?n:t).get(L.envMap||B),K=rt&&rt.mapping===cu?rt.image.height:null,Rt=b[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const Nt=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,N=Nt!==void 0?Nt.length:0;let at=0;bt.morphAttributes.position!==void 0&&(at=1),bt.morphAttributes.normal!==void 0&&(at=2),bt.morphAttributes.color!==void 0&&(at=3);let et,z,F,Y;if(Rt){const Te=Pi[Rt];et=Te.vertexShader,z=Te.fragmentShader}else et=L.vertexShader,z=L.fragmentShader,p.update(L),F=p.getVertexShaderID(L),Y=p.getFragmentShaderID(L);const W=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),wt=ot.isInstancedMesh===!0,Ft=ot.isBatchedMesh===!0,Ot=!!L.map,It=!!L.matcap,Vt=!!rt,H=!!L.aoMap,xe=!!L.lightMap,ee=!!L.bumpMap,ht=!!L.normalMap,lt=!!L.displacementMap,Tt=!!L.emissiveMap,pt=!!L.metalnessMap,A=!!L.roughnessMap,E=L.anisotropy>0,G=L.clearcoat>0,J=L.dispersion>0,dt=L.iridescence>0,yt=L.sheen>0,Lt=L.transmission>0,j=E&&!!L.anisotropyMap,st=G&&!!L.clearcoatMap,Pt=G&&!!L.clearcoatNormalMap,gt=G&&!!L.clearcoatRoughnessMap,zt=dt&&!!L.iridescenceMap,Wt=dt&&!!L.iridescenceThicknessMap,Xt=yt&&!!L.sheenColorMap,kt=yt&&!!L.sheenRoughnessMap,ne=!!L.specularMap,ce=!!L.specularColorMap,ge=!!L.specularIntensityMap,Q=Lt&&!!L.transmissionMap,jt=Lt&&!!L.thicknessMap,Et=!!L.gradientMap,Dt=!!L.alphaMap,Yt=L.alphaTest>0,qt=!!L.alphaHash,oe=!!L.extensions;let We=Ka;L.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=s.toneMapping);const Ye={shaderID:Rt,shaderType:L.type,shaderName:L.name,vertexShader:et,fragmentShader:z,defines:L.defines,customVertexShaderID:F,customFragmentShaderID:Y,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Ft,batchingColor:Ft&&ot._colorsTexture!==null,instancing:wt,instancingColor:wt&&ot.instanceColor!==null,instancingMorph:wt&&ot.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zs,alphaToCoverage:!!L.alphaToCoverage,map:Ot,matcap:It,envMap:Vt,envMapMode:Vt&&rt.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:xe,bumpMap:ee,normalMap:ht,displacementMap:_&&lt,emissiveMap:Tt,normalMapObjectSpace:ht&&L.normalMapType===zE,normalMapTangentSpace:ht&&L.normalMapType===PE,metalnessMap:pt,roughnessMap:A,anisotropy:E,anisotropyMap:j,clearcoat:G,clearcoatMap:st,clearcoatNormalMap:Pt,clearcoatRoughnessMap:gt,dispersion:J,iridescence:dt,iridescenceMap:zt,iridescenceThicknessMap:Wt,sheen:yt,sheenColorMap:Xt,sheenRoughnessMap:kt,specularMap:ne,specularColorMap:ce,specularIntensityMap:ge,transmission:Lt,transmissionMap:Q,thicknessMap:jt,gradientMap:Et,opaque:L.transparent===!1&&L.blending===Ds&&L.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Yt,alphaHash:qt,combine:L.combine,mapUv:Ot&&T(L.map.channel),aoMapUv:H&&T(L.aoMap.channel),lightMapUv:xe&&T(L.lightMap.channel),bumpMapUv:ee&&T(L.bumpMap.channel),normalMapUv:ht&&T(L.normalMap.channel),displacementMapUv:lt&&T(L.displacementMap.channel),emissiveMapUv:Tt&&T(L.emissiveMap.channel),metalnessMapUv:pt&&T(L.metalnessMap.channel),roughnessMapUv:A&&T(L.roughnessMap.channel),anisotropyMapUv:j&&T(L.anisotropyMap.channel),clearcoatMapUv:st&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:kt&&T(L.sheenRoughnessMap.channel),specularMapUv:ne&&T(L.specularMap.channel),specularColorMapUv:ce&&T(L.specularColorMap.channel),specularIntensityMapUv:ge&&T(L.specularIntensityMap.channel),transmissionMapUv:Q&&T(L.transmissionMap.channel),thicknessMapUv:jt&&T(L.thicknessMap.channel),alphaMapUv:Dt&&T(L.alphaMap.channel),vertexTangents:!!bt.attributes.tangent&&(ht||E),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!bt.attributes.uv&&(Ot||Dt),fog:!!_t,useFog:L.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:vt,skinning:ot.isSkinnedMesh===!0,morphTargets:bt.morphAttributes.position!==void 0,morphNormals:bt.morphAttributes.normal!==void 0,morphColors:bt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:Ot&&L.map.isVideoTexture===!0&&Fe.getTransfer(L.map.colorSpace)===Xe,decodeVideoTextureEmissive:Tt&&L.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(L.emissiveMap.colorSpace)===Xe,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===zi,flipSided:L.side===Qn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:oe&&L.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&L.extensions.multiDraw===!0||Ft)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function x(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)C.push(k),C.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(O(C,L),D(C,L),C.push(s.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function O(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function D(L,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),L.push(h.mask)}function w(L){const C=b[L.type];let k;if(C){const ct=Pi[C];k=p1.clone(ct.uniforms)}else k=L.uniforms;return k}function q(L,C){let k;for(let ct=0,ot=g.length;ct<ot;ct++){const _t=g[ct];if(_t.cacheKey===C){k=_t,++k.usedTimes;break}}return k===void 0&&(k=new $R(s,C,L,c),g.push(k)),k}function I(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function P(L){p.remove(L)}function X(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:q,releaseProgram:I,releaseShaderCache:P,programs:g,dispose:X}}function aC(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,p){s.get(u)[h]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function rC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function T_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function A_(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,y,b,T,M){let x=s[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:y,groupOrder:b,renderOrder:v.renderOrder,z:T,group:M},s[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=y,x.groupOrder=b,x.renderOrder=v.renderOrder,x.z=T,x.group=M),t++,x}function h(v,_,y,b,T,M){const x=u(v,_,y,b,T,M);y.transmission>0?a.push(x):y.transparent===!0?o.push(x):n.push(x)}function p(v,_,y,b,T,M){const x=u(v,_,y,b,T,M);y.transmission>0?a.unshift(x):y.transparent===!0?o.unshift(x):n.unshift(x)}function m(v,_){n.length>1&&n.sort(v||rC),a.length>1&&a.sort(_||T_),o.length>1&&o.sort(_||T_)}function g(){for(let v=t,_=s.length;v<_;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:g,sort:m}}function sC(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new A_,s.set(a,[u])):o>=c.length?(u=new A_,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function oC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new tt,color:new ze};break;case"SpotLight":n={position:new tt,direction:new tt,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new tt,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new tt,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=n,n}}}function lC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let cC=0;function uC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fC(s){const t=new oC,n=lC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new tt);const o=new tt,c=new Qe,u=new Qe;function h(m){let g=0,v=0,_=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,O=0,D=0,w=0,q=0,I=0,P=0;m.sort(uC);for(let L=0,C=m.length;L<C;L++){const k=m[L],ct=k.color,ot=k.intensity,_t=k.distance,bt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ct.r*ot,v+=ct.g*ot,_+=ct.b*ot;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],ot);P++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const rt=k.shadow,K=n.get(k);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,a.directionalShadow[y]=K,a.directionalShadowMap[y]=bt,a.directionalShadowMatrix[y]=k.shadow.matrix,O++}a.directional[y]=B,y++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(ct).multiplyScalar(ot),B.distance=_t,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[T]=B;const rt=k.shadow;if(k.map&&(a.spotLightMap[q]=k.map,q++,rt.updateMatrices(k),k.castShadow&&I++),a.spotLightMatrix[T]=rt.matrix,k.castShadow){const K=n.get(k);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,a.spotShadow[T]=K,a.spotShadowMap[T]=bt,w++}T++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(ct).multiplyScalar(ot),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=B,M++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const rt=k.shadow,K=n.get(k);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,a.pointShadow[b]=K,a.pointShadowMap[b]=bt,a.pointShadowMatrix[b]=k.shadow.matrix,D++}a.point[b]=B,b++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(ot),B.groundColor.copy(k.groundColor).multiplyScalar(ot),a.hemi[x]=B,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Kt.LTC_FLOAT_1,a.rectAreaLTC2=Kt.LTC_FLOAT_2):(a.rectAreaLTC1=Kt.LTC_HALF_1,a.rectAreaLTC2=Kt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const X=a.hash;(X.directionalLength!==y||X.pointLength!==b||X.spotLength!==T||X.rectAreaLength!==M||X.hemiLength!==x||X.numDirectionalShadows!==O||X.numPointShadows!==D||X.numSpotShadows!==w||X.numSpotMaps!==q||X.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=M,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=w+q-I,a.spotLightMap.length=q,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=P,X.directionalLength=y,X.pointLength=b,X.spotLength=T,X.rectAreaLength=M,X.hemiLength=x,X.numDirectionalShadows=O,X.numPointShadows=D,X.numSpotShadows=w,X.numSpotMaps=q,X.numLightProbes=P,a.version=cC++)}function p(m,g){let v=0,_=0,y=0,b=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=m.length;x<O;x++){const D=m[x];if(D.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(D.isSpotLight){const w=a.spot[y];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const w=a.rectArea[b];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),_++}else if(D.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function R_(s){const t=new fC(s),n=[],a=[];function o(g){m.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function hC(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new R_(s),t.set(o,[h])):c>=u.length?(h=new R_(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const dC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
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
}`;function mC(s,t,n){let a=new Ay;const o=new he,c=new he,u=new on,h=new I1({depthPacking:FE}),p=new H1,m={},g=n.maxTextureSize,v={[Qa]:Qn,[Qn]:Qa,[zi]:zi},_=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:dC,fragmentShader:pC}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const b=new yi;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fn(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ny;let x=this.type;this.render=function(I,P,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const L=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(Za),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const ot=x!==ca&&this.type===ca,_t=x===ca&&this.type!==ca;for(let bt=0,B=I.length;bt<B;bt++){const rt=I[bt],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Rt=K.getFrameExtents();if(o.multiply(Rt),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Rt.x),o.x=c.x*Rt.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Rt.y),o.y=c.y*Rt.y,K.mapSize.y=c.y)),K.map===null||ot===!0||_t===!0){const N=this.type!==ca?{minFilter:Ui,magFilter:Ui}:{};K.map!==null&&K.map.dispose(),K.map=new Nr(o.x,o.y,N),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Nt=K.getViewportCount();for(let N=0;N<Nt;N++){const at=K.getViewport(N);u.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),ct.viewport(u),K.updateMatrices(rt,N),a=K.getFrustum(),w(P,X,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===ca&&O(K,X),K.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(L,C,k)};function O(I,P){const X=t.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Nr(o.x,o.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,X,_,T,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,X,y,T,null)}function D(I,P,X,L){let C=null;const k=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)C=k;else if(C=X.isPointLight===!0?p:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ct=C.uuid,ot=P.uuid;let _t=m[ct];_t===void 0&&(_t={},m[ct]=_t);let bt=_t[ot];bt===void 0&&(bt=C.clone(),_t[ot]=bt,P.addEventListener("dispose",q)),C=bt}if(C.visible=P.visible,C.wireframe=P.wireframe,L===ca?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:v[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=s.properties.get(C);ct.light=X}return C}function w(I,P,X,L,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ca)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const ot=t.update(I),_t=I.material;if(Array.isArray(_t)){const bt=ot.groups;for(let B=0,rt=bt.length;B<rt;B++){const K=bt[B],Rt=_t[K.materialIndex];if(Rt&&Rt.visible){const Nt=D(I,Rt,L,C);I.onBeforeShadow(s,I,P,X,ot,Nt,K),s.renderBufferDirect(X,null,ot,Nt,I,K),I.onAfterShadow(s,I,P,X,ot,Nt,K)}}}else if(_t.visible){const bt=D(I,_t,L,C);I.onBeforeShadow(s,I,P,X,ot,bt,null),s.renderBufferDirect(X,null,ot,bt,I,null),I.onAfterShadow(s,I,P,X,ot,bt,null)}}const ct=I.children;for(let ot=0,_t=ct.length;ot<_t;ot++)w(ct[ot],P,X,L,C)}function q(I){I.target.removeEventListener("dispose",q);for(const X in m){const L=m[X],C=I.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const gC={[bd]:Td,[Ad]:wd,[Rd]:Dd,[Os]:Cd,[Td]:bd,[wd]:Ad,[Dd]:Rd,[Cd]:Os};function vC(s,t){function n(){let Q=!1;const jt=new on;let Et=null;const Dt=new on(0,0,0,0);return{setMask:function(Yt){Et!==Yt&&!Q&&(s.colorMask(Yt,Yt,Yt,Yt),Et=Yt)},setLocked:function(Yt){Q=Yt},setClear:function(Yt,qt,oe,We,Ye){Ye===!0&&(Yt*=We,qt*=We,oe*=We),jt.set(Yt,qt,oe,We),Dt.equals(jt)===!1&&(s.clearColor(Yt,qt,oe,We),Dt.copy(jt))},reset:function(){Q=!1,Et=null,Dt.set(-1,0,0,0)}}}function a(){let Q=!1,jt=!1,Et=null,Dt=null,Yt=null;return{setReversed:function(qt){if(jt!==qt){const oe=t.get("EXT_clip_control");qt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),jt=qt;const We=Yt;Yt=null,this.setClear(We)}},getReversed:function(){return jt},setTest:function(qt){qt?W(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(qt){Et!==qt&&!Q&&(s.depthMask(qt),Et=qt)},setFunc:function(qt){if(jt&&(qt=gC[qt]),Dt!==qt){switch(qt){case bd:s.depthFunc(s.NEVER);break;case Td:s.depthFunc(s.ALWAYS);break;case Ad:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case Rd:s.depthFunc(s.EQUAL);break;case Cd:s.depthFunc(s.GEQUAL);break;case wd:s.depthFunc(s.GREATER);break;case Dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Dt=qt}},setLocked:function(qt){Q=qt},setClear:function(qt){Yt!==qt&&(jt&&(qt=1-qt),s.clearDepth(qt),Yt=qt)},reset:function(){Q=!1,Et=null,Dt=null,Yt=null,jt=!1}}}function o(){let Q=!1,jt=null,Et=null,Dt=null,Yt=null,qt=null,oe=null,We=null,Ye=null;return{setTest:function(Te){Q||(Te?W(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Te){jt!==Te&&!Q&&(s.stencilMask(Te),jt=Te)},setFunc:function(Te,$e,Mn){(Et!==Te||Dt!==$e||Yt!==Mn)&&(s.stencilFunc(Te,$e,Mn),Et=Te,Dt=$e,Yt=Mn)},setOp:function(Te,$e,Mn){(qt!==Te||oe!==$e||We!==Mn)&&(s.stencilOp(Te,$e,Mn),qt=Te,oe=$e,We=Mn)},setLocked:function(Te){Q=Te},setClear:function(Te){Ye!==Te&&(s.clearStencil(Te),Ye=Te)},reset:function(){Q=!1,jt=null,Et=null,Dt=null,Yt=null,qt=null,oe=null,We=null,Ye=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,D=null,w=null,q=null,I=null,P=new ze(0,0,0),X=0,L=!1,C=null,k=null,ct=null,ot=null,_t=null;const bt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,rt=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=rt>=2);let Rt=null,Nt={};const N=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),et=new on().fromArray(N),z=new on().fromArray(at);function F(Q,jt,Et,Dt){const Yt=new Uint8Array(4),qt=s.createTexture();s.bindTexture(Q,qt),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<Et;oe++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(jt,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Yt):s.texImage2D(jt+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Yt);return qt}const Y={};Y[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),W(s.DEPTH_TEST),u.setFunc(Os),ee(!1),ht(Rv),W(s.CULL_FACE),H(Za);function W(Q){g[Q]!==!0&&(s.enable(Q),g[Q]=!0)}function vt(Q){g[Q]!==!1&&(s.disable(Q),g[Q]=!1)}function wt(Q,jt){return v[Q]!==jt?(s.bindFramebuffer(Q,jt),v[Q]=jt,Q===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=jt),Q===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=jt),!0):!1}function Ft(Q,jt){let Et=y,Dt=!1;if(Q){Et=_.get(jt),Et===void 0&&(Et=[],_.set(jt,Et));const Yt=Q.textures;if(Et.length!==Yt.length||Et[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,oe=Yt.length;qt<oe;qt++)Et[qt]=s.COLOR_ATTACHMENT0+qt;Et.length=Yt.length,Dt=!0}}else Et[0]!==s.BACK&&(Et[0]=s.BACK,Dt=!0);Dt&&s.drawBuffers(Et)}function Ot(Q){return b!==Q?(s.useProgram(Q),b=Q,!0):!1}const It={[Tr]:s.FUNC_ADD,[oE]:s.FUNC_SUBTRACT,[lE]:s.FUNC_REVERSE_SUBTRACT};It[cE]=s.MIN,It[uE]=s.MAX;const Vt={[fE]:s.ZERO,[hE]:s.ONE,[dE]:s.SRC_COLOR,[Md]:s.SRC_ALPHA,[yE]:s.SRC_ALPHA_SATURATE,[vE]:s.DST_COLOR,[mE]:s.DST_ALPHA,[pE]:s.ONE_MINUS_SRC_COLOR,[Ed]:s.ONE_MINUS_SRC_ALPHA,[_E]:s.ONE_MINUS_DST_COLOR,[gE]:s.ONE_MINUS_DST_ALPHA,[xE]:s.CONSTANT_COLOR,[SE]:s.ONE_MINUS_CONSTANT_COLOR,[ME]:s.CONSTANT_ALPHA,[EE]:s.ONE_MINUS_CONSTANT_ALPHA};function H(Q,jt,Et,Dt,Yt,qt,oe,We,Ye,Te){if(Q===Za){T===!0&&(vt(s.BLEND),T=!1);return}if(T===!1&&(W(s.BLEND),T=!0),Q!==sE){if(Q!==M||Te!==L){if((x!==Tr||w!==Tr)&&(s.blendEquation(s.FUNC_ADD),x=Tr,w=Tr),Te)switch(Q){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cv:s.blendFunc(s.ONE,s.ONE);break;case wv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}O=null,D=null,q=null,I=null,P.set(0,0,0),X=0,M=Q,L=Te}return}Yt=Yt||jt,qt=qt||Et,oe=oe||Dt,(jt!==x||Yt!==w)&&(s.blendEquationSeparate(It[jt],It[Yt]),x=jt,w=Yt),(Et!==O||Dt!==D||qt!==q||oe!==I)&&(s.blendFuncSeparate(Vt[Et],Vt[Dt],Vt[qt],Vt[oe]),O=Et,D=Dt,q=qt,I=oe),(We.equals(P)===!1||Ye!==X)&&(s.blendColor(We.r,We.g,We.b,Ye),P.copy(We),X=Ye),M=Q,L=!1}function xe(Q,jt){Q.side===zi?vt(s.CULL_FACE):W(s.CULL_FACE);let Et=Q.side===Qn;jt&&(Et=!Et),ee(Et),Q.blending===Ds&&Q.transparent===!1?H(Za):H(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),u.setFunc(Q.depthFunc),u.setTest(Q.depthTest),u.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Dt=Q.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(Q.stencilWriteMask),h.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),h.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Tt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(Q){C!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),C=Q)}function ht(Q){Q!==iE?(W(s.CULL_FACE),Q!==k&&(Q===Rv?s.cullFace(s.BACK):Q===aE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),k=Q}function lt(Q){Q!==ct&&(B&&s.lineWidth(Q),ct=Q)}function Tt(Q,jt,Et){Q?(W(s.POLYGON_OFFSET_FILL),(ot!==jt||_t!==Et)&&(s.polygonOffset(jt,Et),ot=jt,_t=Et)):vt(s.POLYGON_OFFSET_FILL)}function pt(Q){Q?W(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function A(Q){Q===void 0&&(Q=s.TEXTURE0+bt-1),Rt!==Q&&(s.activeTexture(Q),Rt=Q)}function E(Q,jt,Et){Et===void 0&&(Rt===null?Et=s.TEXTURE0+bt-1:Et=Rt);let Dt=Nt[Et];Dt===void 0&&(Dt={type:void 0,texture:void 0},Nt[Et]=Dt),(Dt.type!==Q||Dt.texture!==jt)&&(Rt!==Et&&(s.activeTexture(Et),Rt=Et),s.bindTexture(Q,jt||Y[Q]),Dt.type=Q,Dt.texture=jt)}function G(){const Q=Nt[Rt];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function J(){try{s.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function dt(){try{s.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function yt(){try{s.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Lt(){try{s.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function st(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Pt(){try{s.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function gt(){try{s.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function zt(){try{s.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Wt(){try{s.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Xt(Q){et.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),et.copy(Q))}function kt(Q){z.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),z.copy(Q))}function ne(Q,jt){let Et=m.get(jt);Et===void 0&&(Et=new WeakMap,m.set(jt,Et));let Dt=Et.get(Q);Dt===void 0&&(Dt=s.getUniformBlockIndex(jt,Q.name),Et.set(Q,Dt))}function ce(Q,jt){const Dt=m.get(jt).get(Q);p.get(jt)!==Dt&&(s.uniformBlockBinding(jt,Dt,Q.__bindingPointIndex),p.set(jt,Dt))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Rt=null,Nt={},v={},_=new WeakMap,y=[],b=null,T=!1,M=null,x=null,O=null,D=null,w=null,q=null,I=null,P=new ze(0,0,0),X=0,L=!1,C=null,k=null,ct=null,ot=null,_t=null,et.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:W,disable:vt,bindFramebuffer:wt,drawBuffers:Ft,useProgram:Ot,setBlending:H,setMaterial:xe,setFlipSided:ee,setCullFace:ht,setLineWidth:lt,setPolygonOffset:Tt,setScissorTest:pt,activeTexture:A,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:dt,texImage2D:zt,texImage3D:Wt,updateUBOMapping:ne,uniformBlockBinding:ce,texStorage2D:Pt,texStorage3D:gt,texSubImage2D:yt,texSubImage3D:Lt,compressedTexSubImage2D:j,compressedTexSubImage3D:st,scissor:Xt,viewport:kt,reset:ge}}function _C(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new he,g=new WeakMap;let v;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,E){return y?new OffscreenCanvas(A,E):au("canvas")}function T(A,E,G){let J=1;const dt=pt(A);if((dt.width>G||dt.height>G)&&(J=G/Math.max(dt.width,dt.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const yt=Math.floor(J*dt.width),Lt=Math.floor(J*dt.height);v===void 0&&(v=b(yt,Lt));const j=E?b(yt,Lt):v;return j.width=yt,j.height=Lt,j.getContext("2d").drawImage(A,0,0,yt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+yt+"x"+Lt+")."),j}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),A;return A}function M(A){return A.generateMipmaps}function x(A){s.generateMipmap(A)}function O(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(A,E,G,J,dt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let yt=E;if(E===s.RED&&(G===s.FLOAT&&(yt=s.R32F),G===s.HALF_FLOAT&&(yt=s.R16F),G===s.UNSIGNED_BYTE&&(yt=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.R8UI),G===s.UNSIGNED_SHORT&&(yt=s.R16UI),G===s.UNSIGNED_INT&&(yt=s.R32UI),G===s.BYTE&&(yt=s.R8I),G===s.SHORT&&(yt=s.R16I),G===s.INT&&(yt=s.R32I)),E===s.RG&&(G===s.FLOAT&&(yt=s.RG32F),G===s.HALF_FLOAT&&(yt=s.RG16F),G===s.UNSIGNED_BYTE&&(yt=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.RG8UI),G===s.UNSIGNED_SHORT&&(yt=s.RG16UI),G===s.UNSIGNED_INT&&(yt=s.RG32UI),G===s.BYTE&&(yt=s.RG8I),G===s.SHORT&&(yt=s.RG16I),G===s.INT&&(yt=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.RGB8UI),G===s.UNSIGNED_SHORT&&(yt=s.RGB16UI),G===s.UNSIGNED_INT&&(yt=s.RGB32UI),G===s.BYTE&&(yt=s.RGB8I),G===s.SHORT&&(yt=s.RGB16I),G===s.INT&&(yt=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(yt=s.RGBA16UI),G===s.UNSIGNED_INT&&(yt=s.RGBA32UI),G===s.BYTE&&(yt=s.RGBA8I),G===s.SHORT&&(yt=s.RGBA16I),G===s.INT&&(yt=s.RGBA32I)),E===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(yt=s.RGB9_E5),E===s.RGBA){const Lt=dt?nu:Fe.getTransfer(J);G===s.FLOAT&&(yt=s.RGBA32F),G===s.HALF_FLOAT&&(yt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(yt=Lt===Xe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(yt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(yt=s.RGB5_A1)}return(yt===s.R16F||yt===s.R32F||yt===s.RG16F||yt===s.RG32F||yt===s.RGBA16F||yt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function w(A,E){let G;return A?E===null||E===Lr||E===jo?G=s.DEPTH24_STENCIL8:E===fa?G=s.DEPTH32F_STENCIL8:E===Yo&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Lr||E===jo?G=s.DEPTH_COMPONENT24:E===fa?G=s.DEPTH_COMPONENT32F:E===Yo&&(G=s.DEPTH_COMPONENT16),G}function q(A,E){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ui&&A.minFilter!==Bi?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function I(A){const E=A.target;E.removeEventListener("dispose",I),X(E),E.isVideoTexture&&g.delete(E)}function P(A){const E=A.target;E.removeEventListener("dispose",P),C(E)}function X(A){const E=a.get(A);if(E.__webglInit===void 0)return;const G=A.source,J=_.get(G);if(J){const dt=J[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&L(A),Object.keys(J).length===0&&_.delete(G)}a.remove(A)}function L(A){const E=a.get(A);s.deleteTexture(E.__webglTexture);const G=A.source,J=_.get(G);delete J[E.__cacheKey],u.memory.textures--}function C(A){const E=a.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),a.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let dt=0;dt<E.__webglFramebuffer[J].length;dt++)s.deleteFramebuffer(E.__webglFramebuffer[J][dt]);else s.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)s.deleteFramebuffer(E.__webglFramebuffer[J]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=A.textures;for(let J=0,dt=G.length;J<dt;J++){const yt=a.get(G[J]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),u.memory.textures--),a.remove(G[J])}a.remove(A)}let k=0;function ct(){k=0}function ot(){const A=k;return A>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+o.maxTextures),k+=1,A}function _t(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function bt(A,E){const G=a.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,A,E);return}}n.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function B(A,E){const G=a.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function rt(A,E){const G=a.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,E);return}n.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function K(A,E){const G=a.get(A);if(A.version>0&&G.__version!==A.version){F(G,A,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const Rt={[Nd]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[Od]:s.MIRRORED_REPEAT},Nt={[Ui]:s.NEAREST,[NE]:s.NEAREST_MIPMAP_NEAREST,[_c]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[Uh]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},N={[BE]:s.NEVER,[XE]:s.ALWAYS,[IE]:s.LESS,[my]:s.LEQUAL,[HE]:s.EQUAL,[kE]:s.GEQUAL,[GE]:s.GREATER,[VE]:s.NOTEQUAL};function at(A,E){if(E.type===fa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bi||E.magFilter===Uh||E.magFilter===_c||E.magFilter===wr||E.minFilter===Bi||E.minFilter===Uh||E.minFilter===_c||E.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Rt[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Rt[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Rt[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Nt[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Nt[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ui||E.minFilter!==_c&&E.minFilter!==wr||E.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function et(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const J=E.source;let dt=_.get(J);dt===void 0&&(dt={},_.set(J,dt));const yt=_t(E);if(yt!==A.__cacheKey){dt[yt]===void 0&&(dt[yt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),dt[yt].usedTimes++;const Lt=dt[A.__cacheKey];Lt!==void 0&&(dt[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&L(E)),A.__cacheKey=yt,A.__webglTexture=dt[yt].texture}return G}function z(A,E,G){let J=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=s.TEXTURE_3D);const dt=et(A,E),yt=E.source;n.bindTexture(J,A.__webglTexture,s.TEXTURE0+G);const Lt=a.get(yt);if(yt.version!==Lt.__version||dt===!0){n.activeTexture(s.TEXTURE0+G);const j=Fe.getPrimaries(Fe.workingColorSpace),st=E.colorSpace===ja?null:Fe.getPrimaries(E.colorSpace),Pt=E.colorSpace===ja||j===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let gt=T(E.image,!1,o.maxTextureSize);gt=Tt(E,gt);const zt=c.convert(E.format,E.colorSpace),Wt=c.convert(E.type);let Xt=D(E.internalFormat,zt,Wt,E.colorSpace,E.isVideoTexture);at(J,E);let kt;const ne=E.mipmaps,ce=E.isVideoTexture!==!0,ge=Lt.__version===void 0||dt===!0,Q=yt.dataReady,jt=q(E,gt);if(E.isDepthTexture)Xt=w(E.format===Ko,E.type),ge&&(ce?n.texStorage2D(s.TEXTURE_2D,1,Xt,gt.width,gt.height):n.texImage2D(s.TEXTURE_2D,0,Xt,gt.width,gt.height,0,zt,Wt,null));else if(E.isDataTexture)if(ne.length>0){ce&&ge&&n.texStorage2D(s.TEXTURE_2D,jt,Xt,ne[0].width,ne[0].height);for(let Et=0,Dt=ne.length;Et<Dt;Et++)kt=ne[Et],ce?Q&&n.texSubImage2D(s.TEXTURE_2D,Et,0,0,kt.width,kt.height,zt,Wt,kt.data):n.texImage2D(s.TEXTURE_2D,Et,Xt,kt.width,kt.height,0,zt,Wt,kt.data);E.generateMipmaps=!1}else ce?(ge&&n.texStorage2D(s.TEXTURE_2D,jt,Xt,gt.width,gt.height),Q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,gt.width,gt.height,zt,Wt,gt.data)):n.texImage2D(s.TEXTURE_2D,0,Xt,gt.width,gt.height,0,zt,Wt,gt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ce&&ge&&n.texStorage3D(s.TEXTURE_2D_ARRAY,jt,Xt,ne[0].width,ne[0].height,gt.depth);for(let Et=0,Dt=ne.length;Et<Dt;Et++)if(kt=ne[Et],E.format!==Di)if(zt!==null)if(ce){if(Q)if(E.layerUpdates.size>0){const Yt=i_(kt.width,kt.height,E.format,E.type);for(const qt of E.layerUpdates){const oe=kt.data.subarray(qt*Yt/kt.data.BYTES_PER_ELEMENT,(qt+1)*Yt/kt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,qt,kt.width,kt.height,1,zt,oe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,kt.width,kt.height,gt.depth,zt,kt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,Xt,kt.width,kt.height,gt.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Q&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,kt.width,kt.height,gt.depth,zt,Wt,kt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Et,Xt,kt.width,kt.height,gt.depth,0,zt,Wt,kt.data)}else{ce&&ge&&n.texStorage2D(s.TEXTURE_2D,jt,Xt,ne[0].width,ne[0].height);for(let Et=0,Dt=ne.length;Et<Dt;Et++)kt=ne[Et],E.format!==Di?zt!==null?ce?Q&&n.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,kt.width,kt.height,zt,kt.data):n.compressedTexImage2D(s.TEXTURE_2D,Et,Xt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Q&&n.texSubImage2D(s.TEXTURE_2D,Et,0,0,kt.width,kt.height,zt,Wt,kt.data):n.texImage2D(s.TEXTURE_2D,Et,Xt,kt.width,kt.height,0,zt,Wt,kt.data)}else if(E.isDataArrayTexture)if(ce){if(ge&&n.texStorage3D(s.TEXTURE_2D_ARRAY,jt,Xt,gt.width,gt.height,gt.depth),Q)if(E.layerUpdates.size>0){const Et=i_(gt.width,gt.height,E.format,E.type);for(const Dt of E.layerUpdates){const Yt=gt.data.subarray(Dt*Et/gt.data.BYTES_PER_ELEMENT,(Dt+1)*Et/gt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Dt,gt.width,gt.height,1,zt,Wt,Yt)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,zt,Wt,gt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Xt,gt.width,gt.height,gt.depth,0,zt,Wt,gt.data);else if(E.isData3DTexture)ce?(ge&&n.texStorage3D(s.TEXTURE_3D,jt,Xt,gt.width,gt.height,gt.depth),Q&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,zt,Wt,gt.data)):n.texImage3D(s.TEXTURE_3D,0,Xt,gt.width,gt.height,gt.depth,0,zt,Wt,gt.data);else if(E.isFramebufferTexture){if(ge)if(ce)n.texStorage2D(s.TEXTURE_2D,jt,Xt,gt.width,gt.height);else{let Et=gt.width,Dt=gt.height;for(let Yt=0;Yt<jt;Yt++)n.texImage2D(s.TEXTURE_2D,Yt,Xt,Et,Dt,0,zt,Wt,null),Et>>=1,Dt>>=1}}else if(ne.length>0){if(ce&&ge){const Et=pt(ne[0]);n.texStorage2D(s.TEXTURE_2D,jt,Xt,Et.width,Et.height)}for(let Et=0,Dt=ne.length;Et<Dt;Et++)kt=ne[Et],ce?Q&&n.texSubImage2D(s.TEXTURE_2D,Et,0,0,zt,Wt,kt):n.texImage2D(s.TEXTURE_2D,Et,Xt,zt,Wt,kt);E.generateMipmaps=!1}else if(ce){if(ge){const Et=pt(gt);n.texStorage2D(s.TEXTURE_2D,jt,Xt,Et.width,Et.height)}Q&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,Wt,gt)}else n.texImage2D(s.TEXTURE_2D,0,Xt,zt,Wt,gt);M(E)&&x(J),Lt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function F(A,E,G){if(E.image.length!==6)return;const J=et(A,E),dt=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const yt=a.get(dt);if(dt.version!==yt.__version||J===!0){n.activeTexture(s.TEXTURE0+G);const Lt=Fe.getPrimaries(Fe.workingColorSpace),j=E.colorSpace===ja?null:Fe.getPrimaries(E.colorSpace),st=E.colorSpace===ja||Lt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,gt=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let Dt=0;Dt<6;Dt++)!Pt&&!gt?zt[Dt]=T(E.image[Dt],!0,o.maxCubemapSize):zt[Dt]=gt?E.image[Dt].image:E.image[Dt],zt[Dt]=Tt(E,zt[Dt]);const Wt=zt[0],Xt=c.convert(E.format,E.colorSpace),kt=c.convert(E.type),ne=D(E.internalFormat,Xt,kt,E.colorSpace),ce=E.isVideoTexture!==!0,ge=yt.__version===void 0||J===!0,Q=dt.dataReady;let jt=q(E,Wt);at(s.TEXTURE_CUBE_MAP,E);let Et;if(Pt){ce&&ge&&n.texStorage2D(s.TEXTURE_CUBE_MAP,jt,ne,Wt.width,Wt.height);for(let Dt=0;Dt<6;Dt++){Et=zt[Dt].mipmaps;for(let Yt=0;Yt<Et.length;Yt++){const qt=Et[Yt];E.format!==Di?Xt!==null?ce?Q&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt,0,0,qt.width,qt.height,Xt,qt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt,ne,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?Q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt,0,0,qt.width,qt.height,Xt,kt,qt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt,ne,qt.width,qt.height,0,Xt,kt,qt.data)}}}else{if(Et=E.mipmaps,ce&&ge){Et.length>0&&jt++;const Dt=pt(zt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,jt,ne,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(gt){ce?Q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,zt[Dt].width,zt[Dt].height,Xt,kt,zt[Dt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,ne,zt[Dt].width,zt[Dt].height,0,Xt,kt,zt[Dt].data);for(let Yt=0;Yt<Et.length;Yt++){const oe=Et[Yt].image[Dt].image;ce?Q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt+1,0,0,oe.width,oe.height,Xt,kt,oe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt+1,ne,oe.width,oe.height,0,Xt,kt,oe.data)}}else{ce?Q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Xt,kt,zt[Dt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,ne,Xt,kt,zt[Dt]);for(let Yt=0;Yt<Et.length;Yt++){const qt=Et[Yt];ce?Q&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt+1,0,0,Xt,kt,qt.image[Dt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt+1,ne,Xt,kt,qt.image[Dt])}}}M(E)&&x(s.TEXTURE_CUBE_MAP),yt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Y(A,E,G,J,dt,yt){const Lt=c.convert(G.format,G.colorSpace),j=c.convert(G.type),st=D(G.internalFormat,Lt,j,G.colorSpace),Pt=a.get(E),gt=a.get(G);if(gt.__renderTarget=E,!Pt.__hasExternalTextures){const zt=Math.max(1,E.width>>yt),Wt=Math.max(1,E.height>>yt);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?n.texImage3D(dt,yt,st,zt,Wt,E.depth,0,Lt,j,null):n.texImage2D(dt,yt,st,zt,Wt,0,Lt,j,null)}n.bindFramebuffer(s.FRAMEBUFFER,A),ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,dt,gt.__webglTexture,0,ee(E)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,dt,gt.__webglTexture,yt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function W(A,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){const J=E.depthTexture,dt=J&&J.isDepthTexture?J.type:null,yt=w(E.stencilBuffer,dt),Lt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=ee(E);ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,yt,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,j,yt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,yt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,A)}else{const J=E.textures;for(let dt=0;dt<J.length;dt++){const yt=J[dt],Lt=c.convert(yt.format,yt.colorSpace),j=c.convert(yt.type),st=D(yt.internalFormat,Lt,j,yt.colorSpace),Pt=ee(E);G&&ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,st,E.width,E.height):ht(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,st,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,st,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=a.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),bt(E.depthTexture,0);const dt=J.__webglTexture,yt=ee(E);if(E.depthTexture.format===Zo)ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(E.depthTexture.format===Ko)ht(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function wt(A){const E=a.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",dt)};J.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=J}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,A)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=s.createRenderbuffer(),W(E.__webglDepthbuffer[J],A,!1);else{const dt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=E.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,yt)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),W(E.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,dt)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(A,E,G){const J=a.get(A);E!==void 0&&Y(J.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&wt(A)}function Ot(A){const E=A.texture,G=a.get(A),J=a.get(E);A.addEventListener("dispose",P);const dt=A.textures,yt=A.isWebGLCubeRenderTarget===!0,Lt=dt.length>1;if(Lt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=E.version,u.memory.textures++),yt){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let st=0;st<E.mipmaps.length;st++)G.__webglFramebuffer[j][st]=s.createFramebuffer()}else G.__webglFramebuffer[j]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)G.__webglFramebuffer[j]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let j=0,st=dt.length;j<st;j++){const Pt=a.get(dt[j]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(A.samples>0&&ht(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<dt.length;j++){const st=dt[j];G.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[j]);const Pt=c.convert(st.format,st.colorSpace),gt=c.convert(st.type),zt=D(st.internalFormat,Pt,gt,st.colorSpace,A.isXRRenderTarget===!0),Wt=ee(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,zt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,G.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),W(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(yt){n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),at(s.TEXTURE_CUBE_MAP,E);for(let j=0;j<6;j++)if(E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)Y(G.__webglFramebuffer[j][st],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,st);else Y(G.__webglFramebuffer[j],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(E)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Lt){for(let j=0,st=dt.length;j<st;j++){const Pt=dt[j],gt=a.get(Pt);n.bindTexture(s.TEXTURE_2D,gt.__webglTexture),at(s.TEXTURE_2D,Pt),Y(G.__webglFramebuffer,A,Pt,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D,0),M(Pt)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let j=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(j,J.__webglTexture),at(j,E),E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)Y(G.__webglFramebuffer[st],A,E,s.COLOR_ATTACHMENT0,j,st);else Y(G.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,j,0);M(E)&&x(j),n.unbindTexture()}A.depthBuffer&&wt(A)}function It(A){const E=A.textures;for(let G=0,J=E.length;G<J;G++){const dt=E[G];if(M(dt)){const yt=O(A),Lt=a.get(dt).__webglTexture;n.bindTexture(yt,Lt),x(yt),n.unbindTexture()}}}const Vt=[],H=[];function xe(A){if(A.samples>0){if(ht(A)===!1){const E=A.textures,G=A.width,J=A.height;let dt=s.COLOR_BUFFER_BIT;const yt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=a.get(A),j=E.length>1;if(j)for(let st=0;st<E.length;st++)n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let st=0;st<E.length;st++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[st]);const Pt=a.get(E[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,dt,s.NEAREST),p===!0&&(Vt.length=0,H.length=0,Vt.push(s.COLOR_ATTACHMENT0+st),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Vt.push(yt),H.push(yt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let st=0;st<E.length;st++){n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[st]);const Pt=a.get(E[st]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,Pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&p){const E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ee(A){return Math.min(o.maxSamples,A.samples)}function ht(A){const E=a.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function lt(A){const E=u.render.frame;g.get(A)!==E&&(g.set(A,E),A.update())}function Tt(A,E){const G=A.colorSpace,J=A.format,dt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==zs&&G!==ja&&(Fe.getTransfer(G)===Xe?(J!==Di||dt!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(m.width=A.naturalWidth||A.width,m.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(m.width=A.displayWidth,m.height=A.displayHeight):(m.width=A.width,m.height=A.height),m}this.allocateTextureUnit=ot,this.resetTextureUnits=ct,this.setTexture2D=bt,this.setTexture2DArray=B,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=Ft,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ht}function yC(s,t){function n(a,o=ja){let c;const u=Fe.getTransfer(o);if(a===ga)return s.UNSIGNED_BYTE;if(a===_p)return s.UNSIGNED_SHORT_4_4_4_4;if(a===yp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===oy)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===ry)return s.BYTE;if(a===sy)return s.SHORT;if(a===Yo)return s.UNSIGNED_SHORT;if(a===vp)return s.INT;if(a===Lr)return s.UNSIGNED_INT;if(a===fa)return s.FLOAT;if(a===$o)return s.HALF_FLOAT;if(a===ly)return s.ALPHA;if(a===cy)return s.RGB;if(a===Di)return s.RGBA;if(a===uy)return s.LUMINANCE;if(a===fy)return s.LUMINANCE_ALPHA;if(a===Zo)return s.DEPTH_COMPONENT;if(a===Ko)return s.DEPTH_STENCIL;if(a===hy)return s.RED;if(a===xp)return s.RED_INTEGER;if(a===dy)return s.RG;if(a===Sp)return s.RG_INTEGER;if(a===Mp)return s.RGBA_INTEGER;if(a===Yc||a===jc||a===Zc||a===Kc)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fd||a===Pd||a===zd||a===Bd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===zd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Id||a===Hd||a===Gd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Id||a===Hd)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Gd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Vd||a===kd||a===Xd||a===Wd||a===qd||a===Yd||a===jd||a===Zd||a===Kd||a===Qd||a===Jd||a===$d||a===tp||a===ep)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Vd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===kd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Wd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===qd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Yd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===jd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Zd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Kd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===$d)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===tp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ep)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Qc||a===np||a===ip)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Qc)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===np)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ip)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===py||a===ap||a===rp||a===sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===rp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===jo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const xC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SC=`
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

}`;class MC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new Hn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ja({vertexShader:xC,fragmentShader:SC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new rl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EC extends Hs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,y=null,b=null;const T=new MC,M=n.getContextAttributes();let x=null,O=null;const D=[],w=[],q=new he;let I=null;const P=new _i;P.viewport=new on;const X=new _i;X.viewport=new on;const L=[P,X],C=new X1;let k=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let F=D[z];return F===void 0&&(F=new $h,D[z]=F),F.getTargetRaySpace()},this.getControllerGrip=function(z){let F=D[z];return F===void 0&&(F=new $h,D[z]=F),F.getGripSpace()},this.getHand=function(z){let F=D[z];return F===void 0&&(F=new $h,D[z]=F),F.getHandSpace()};function ot(z){const F=w.indexOf(z.inputSource);if(F===-1)return;const Y=D[F];Y!==void 0&&(Y.update(z.inputSource,z.frame,m||u),Y.dispatchEvent({type:z.type,data:z.inputSource}))}function _t(){o.removeEventListener("select",ot),o.removeEventListener("selectstart",ot),o.removeEventListener("selectend",ot),o.removeEventListener("squeeze",ot),o.removeEventListener("squeezestart",ot),o.removeEventListener("squeezeend",ot),o.removeEventListener("end",_t),o.removeEventListener("inputsourceschange",bt);for(let z=0;z<D.length;z++){const F=w[z];F!==null&&(w[z]=null,D[z].disconnect(F))}k=null,ct=null,T.reset(),t.setRenderTarget(x),y=null,_=null,v=null,o=null,O=null,et.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(q.width,q.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){c=z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){h=z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(z){m=z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(z){if(o=z,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",ot),o.addEventListener("selectstart",ot),o.addEventListener("selectend",ot),o.addEventListener("squeeze",ot),o.addEventListener("squeezestart",ot),o.addEventListener("squeezeend",ot),o.addEventListener("end",_t),o.addEventListener("inputsourceschange",bt),M.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(q),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,W=null,vt=null;M.depth&&(vt=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=M.stencil?Ko:Zo,W=M.stencil?jo:Lr);const wt={colorFormat:n.RGBA8,depthFormat:vt,scaleFactor:c};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(wt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new Nr(_.textureWidth,_.textureHeight,{format:Di,type:ga,depthTexture:new wy(_.textureWidth,_.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Y),o.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Nr(y.framebufferWidth,y.framebufferHeight,{format:Di,type:ga,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(h),et.setContext(o),et.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function bt(z){for(let F=0;F<z.removed.length;F++){const Y=z.removed[F],W=w.indexOf(Y);W>=0&&(w[W]=null,D[W].disconnect(Y))}for(let F=0;F<z.added.length;F++){const Y=z.added[F];let W=w.indexOf(Y);if(W===-1){for(let wt=0;wt<D.length;wt++)if(wt>=w.length){w.push(Y),W=wt;break}else if(w[wt]===null){w[wt]=Y,W=wt;break}if(W===-1)break}const vt=D[W];vt&&vt.connect(Y)}}const B=new tt,rt=new tt;function K(z,F,Y){B.setFromMatrixPosition(F.matrixWorld),rt.setFromMatrixPosition(Y.matrixWorld);const W=B.distanceTo(rt),vt=F.projectionMatrix.elements,wt=Y.projectionMatrix.elements,Ft=vt[14]/(vt[10]-1),Ot=vt[14]/(vt[10]+1),It=(vt[9]+1)/vt[5],Vt=(vt[9]-1)/vt[5],H=(vt[8]-1)/vt[0],xe=(wt[8]+1)/wt[0],ee=Ft*H,ht=Ft*xe,lt=W/(-H+xe),Tt=lt*-H;if(F.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Tt),z.translateZ(lt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),vt[10]===-1)z.projectionMatrix.copy(F.projectionMatrix),z.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const pt=Ft+lt,A=Ot+lt,E=ee-Tt,G=ht+(W-Tt),J=It*Ot/A*pt,dt=Vt*Ot/A*pt;z.projectionMatrix.makePerspective(E,G,J,dt,pt,A),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Rt(z,F){F===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(F.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(o===null)return;let F=z.near,Y=z.far;T.texture!==null&&(T.depthNear>0&&(F=T.depthNear),T.depthFar>0&&(Y=T.depthFar)),C.near=X.near=P.near=F,C.far=X.far=P.far=Y,(k!==C.near||ct!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ct=C.far),P.layers.mask=z.layers.mask|2,X.layers.mask=z.layers.mask|4,C.layers.mask=P.layers.mask|X.layers.mask;const W=z.parent,vt=C.cameras;Rt(C,W);for(let wt=0;wt<vt.length;wt++)Rt(vt[wt],W);vt.length===2?K(C,P,X):C.projectionMatrix.copy(P.projectionMatrix),Nt(z,C,W)};function Nt(z,F,Y){Y===null?z.matrix.copy(F.matrixWorld):(z.matrix.copy(Y.matrixWorld),z.matrix.invert(),z.matrix.multiply(F.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(F.projectionMatrix),z.projectionMatrixInverse.copy(F.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=op*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&y===null))return p},this.setFoveation=function(z){p=z,_!==null&&(_.fixedFoveation=z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let N=null;function at(z,F){if(g=F.getViewerPose(m||u),b=F,g!==null){const Y=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let W=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,W=!0);for(let Ft=0;Ft<Y.length;Ft++){const Ot=Y[Ft];let It=null;if(y!==null)It=y.getViewport(Ot);else{const H=v.getViewSubImage(_,Ot);It=H.viewport,Ft===0&&(t.setRenderTargetTextures(O,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(O))}let Vt=L[Ft];Vt===void 0&&(Vt=new _i,Vt.layers.enable(Ft),Vt.viewport=new on,L[Ft]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(It.x,It.y,It.width,It.height),Ft===0&&(C.matrix.copy(Vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),W===!0&&C.cameras.push(Vt)}const vt=o.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ft=v.getDepthInformation(Y[0]);Ft&&Ft.isValid&&Ft.texture&&T.init(t,Ft,o.renderState)}}for(let Y=0;Y<D.length;Y++){const W=w[Y],vt=D[Y];W!==null&&vt!==void 0&&vt.update(W,F,m||u)}N&&N(z,F),F.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:F}),b=null}const et=new Ly;et.setAnimationLoop(at),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}const Mr=new va,bC=new Qe;function TC(s,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Ey(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,O,D,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&y(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,O,D):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Qn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Qn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=t.get(x),D=O.envMap,w=O.envMapRotation;D&&(M.envMap.value=D,Mr.copy(w),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),M.envMapRotation.value.setFromMatrix4(bC.makeRotationFromEuler(Mr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,O,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=D*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function AC(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const w=D.program;a.uniformBlockBinding(O,w)}function m(O,D){let w=o[O.id];w===void 0&&(b(O),w=g(O),o[O.id]=w,O.addEventListener("dispose",M));const q=D.program;a.updateUBOMapping(O,q);const I=t.render.frame;c[O.id]!==I&&(_(O),c[O.id]=I)}function g(O){const D=v();O.__bindingPointIndex=D;const w=s.createBuffer(),q=O.__size,I=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,q,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,w),w}function v(){for(let O=0;O<h;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=o[O.id],w=O.uniforms,q=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let I=0,P=w.length;I<P;I++){const X=Array.isArray(w[I])?w[I]:[w[I]];for(let L=0,C=X.length;L<C;L++){const k=X[L];if(y(k,I,L,q)===!0){const ct=k.__offset,ot=Array.isArray(k.value)?k.value:[k.value];let _t=0;for(let bt=0;bt<ot.length;bt++){const B=ot[bt],rt=T(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ct+_t,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,_t),_t+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,D,w,q){const I=O.value,P=D+"_"+w;if(q[P]===void 0)return typeof I=="number"||typeof I=="boolean"?q[P]=I:q[P]=I.clone(),!0;{const X=q[P];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return q[P]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function b(O){const D=O.uniforms;let w=0;const q=16;for(let P=0,X=D.length;P<X;P++){const L=Array.isArray(D[P])?D[P]:[D[P]];for(let C=0,k=L.length;C<k;C++){const ct=L[C],ot=Array.isArray(ct.value)?ct.value:[ct.value];for(let _t=0,bt=ot.length;_t<bt;_t++){const B=ot[_t],rt=T(B),K=w%q,Rt=K%rt.boundary,Nt=K+Rt;w+=Rt,Nt!==0&&q-Nt<rt.storage&&(w+=q-Nt),ct.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=w,w+=rt.storage}}}const I=w%q;return I>0&&(w+=q-I),O.__size=w,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function M(O){const D=O.target;D.removeEventListener("dispose",M);const w=u.indexOf(D.__bindingPointIndex);u.splice(w,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function x(){for(const O in o)s.deleteBuffer(o[O]);u=[],o={},c={}}return{bind:p,update:m,dispose:x}}class RC{constructor(t={}){const{canvas:n=qE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const b=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const O=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let q=!1;this._outputColorSpace=li;let I=0,P=0,X=null,L=-1,C=null;const k=new on,ct=new on;let ot=null;const _t=new ze(0);let bt=0,B=n.width,rt=n.height,K=1,Rt=null,Nt=null;const N=new on(0,0,B,rt),at=new on(0,0,B,rt);let et=!1;const z=new Ay;let F=!1,Y=!1;const W=new Qe,vt=new Qe,wt=new tt,Ft=new on,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Vt(){return X===null?K:1}let H=a;function xe(U,nt){return n.getContext(U,nt)}try{const U={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gp}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",Yt,!1),n.addEventListener("webglcontextcreationerror",qt,!1),H===null){const nt="webgl2";if(H=xe(nt,U),H===null)throw xe(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ee,ht,lt,Tt,pt,A,E,G,J,dt,yt,Lt,j,st,Pt,gt,zt,Wt,Xt,kt,ne,ce,ge,Q;function jt(){ee=new zA(H),ee.init(),ce=new yC(H,ee),ht=new DA(H,ee,t,ce),lt=new vC(H,ee),ht.reverseDepthBuffer&&_&&lt.buffers.depth.setReversed(!0),Tt=new HA(H),pt=new aC,A=new _C(H,ee,lt,pt,ht,ce,Tt),E=new LA(w),G=new PA(w),J=new q1(H),ge=new CA(H,J),dt=new BA(H,J,Tt,ge),yt=new VA(H,dt,J,Tt),Xt=new GA(H,ht,A),gt=new UA(pt),Lt=new iC(w,E,G,ee,ht,ge,gt),j=new TC(w,pt),st=new sC,Pt=new hC(ee),Wt=new RA(w,E,G,lt,yt,y,p),zt=new mC(w,yt,ht),Q=new AC(H,Tt,ht,lt),kt=new wA(H,ee,Tt),ne=new IA(H,ee,Tt),Tt.programs=Lt.programs,w.capabilities=ht,w.extensions=ee,w.properties=pt,w.renderLists=st,w.shadowMap=zt,w.state=lt,w.info=Tt}jt();const Et=new EC(w,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const U=ee.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ee.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(U){U!==void 0&&(K=U,this.setSize(B,rt,!1))},this.getSize=function(U){return U.set(B,rt)},this.setSize=function(U,nt,xt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,rt=nt,n.width=Math.floor(U*K),n.height=Math.floor(nt*K),xt===!0&&(n.style.width=U+"px",n.style.height=nt+"px"),this.setViewport(0,0,U,nt)},this.getDrawingBufferSize=function(U){return U.set(B*K,rt*K).floor()},this.setDrawingBufferSize=function(U,nt,xt){B=U,rt=nt,K=xt,n.width=Math.floor(U*xt),n.height=Math.floor(nt*xt),this.setViewport(0,0,U,nt)},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(N)},this.setViewport=function(U,nt,xt,St){U.isVector4?N.set(U.x,U.y,U.z,U.w):N.set(U,nt,xt,St),lt.viewport(k.copy(N).multiplyScalar(K).round())},this.getScissor=function(U){return U.copy(at)},this.setScissor=function(U,nt,xt,St){U.isVector4?at.set(U.x,U.y,U.z,U.w):at.set(U,nt,xt,St),lt.scissor(ct.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(U){lt.setScissorTest(et=U)},this.setOpaqueSort=function(U){Rt=U},this.setTransparentSort=function(U){Nt=U},this.getClearColor=function(U){return U.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(U=!0,nt=!0,xt=!0){let St=0;if(U){let $=!1;if(X!==null){const Gt=X.texture.format;$=Gt===Mp||Gt===Sp||Gt===xp}if($){const Gt=X.texture.type,Zt=Gt===ga||Gt===Lr||Gt===Yo||Gt===jo||Gt===_p||Gt===yp,Qt=Wt.getClearColor(),$t=Wt.getClearAlpha(),fe=Qt.r,ue=Qt.g,ae=Qt.b;Zt?(b[0]=fe,b[1]=ue,b[2]=ae,b[3]=$t,H.clearBufferuiv(H.COLOR,0,b)):(T[0]=fe,T[1]=ue,T[2]=ae,T[3]=$t,H.clearBufferiv(H.COLOR,0,T))}else St|=H.COLOR_BUFFER_BIT}nt&&(St|=H.DEPTH_BUFFER_BIT),xt&&(St|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(St)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Yt,!1),n.removeEventListener("webglcontextcreationerror",qt,!1),Wt.dispose(),st.dispose(),Pt.dispose(),pt.dispose(),E.dispose(),G.dispose(),yt.dispose(),ge.dispose(),Q.dispose(),Lt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",xi),Et.removeEventListener("sessionend",ln),wn.stop()};function Dt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Yt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const U=Tt.autoReset,nt=zt.enabled,xt=zt.autoUpdate,St=zt.needsUpdate,$=zt.type;jt(),Tt.autoReset=U,zt.enabled=nt,zt.autoUpdate=xt,zt.needsUpdate=St,zt.type=$}function qt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function oe(U){const nt=U.target;nt.removeEventListener("dispose",oe),We(nt)}function We(U){Ye(U),pt.remove(U)}function Ye(U){const nt=pt.get(U).programs;nt!==void 0&&(nt.forEach(function(xt){Lt.releaseProgram(xt)}),U.isShaderMaterial&&Lt.releaseShaderCache(U))}this.renderBufferDirect=function(U,nt,xt,St,$,Gt){nt===null&&(nt=Ot);const Zt=$.isMesh&&$.matrixWorld.determinant()<0,Qt=ks(U,nt,xt,St,$);lt.setMaterial(St,Zt);let $t=xt.index,fe=1;if(St.wireframe===!0){if($t=dt.getWireframeAttribute(xt),$t===void 0)return;fe=2}const ue=xt.drawRange,ae=xt.attributes.position;let Ce=ue.start*fe,we=(ue.start+ue.count)*fe;Gt!==null&&(Ce=Math.max(Ce,Gt.start*fe),we=Math.min(we,(Gt.start+Gt.count)*fe)),$t!==null?(Ce=Math.max(Ce,0),we=Math.min(we,$t.count)):ae!=null&&(Ce=Math.max(Ce,0),we=Math.min(we,ae.count));const je=we-Ce;if(je<0||je===1/0)return;ge.setup($,St,Qt,xt,$t);let Le,de=kt;if($t!==null&&(Le=J.get($t),de=ne,de.setIndex(Le)),$.isMesh)St.wireframe===!0?(lt.setLineWidth(St.wireframeLinewidth*Vt()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if($.isLine){let se=St.linewidth;se===void 0&&(se=1),lt.setLineWidth(se*Vt()),$.isLineSegments?de.setMode(H.LINES):$.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else $.isPoints?de.setMode(H.POINTS):$.isSprite&&de.setMode(H.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Jc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))de.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const se=$._multiDrawStarts,pn=$._multiDrawCounts,Ue=$._multiDrawCount,Vn=$t?J.get($t).bytesPerElement:1,Mi=pt.get(St).currentProgram.getUniforms();for(let Pn=0;Pn<Ue;Pn++)Mi.setValue(H,"_gl_DrawID",Pn),de.render(se[Pn]/Vn,pn[Pn])}else if($.isInstancedMesh)de.renderInstances(Ce,je,$.count);else if(xt.isInstancedBufferGeometry){const se=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,pn=Math.min(xt.instanceCount,se);de.renderInstances(Ce,je,pn)}else de.render(Ce,je)};function Te(U,nt,xt){U.transparent===!0&&U.side===zi&&U.forceSinglePass===!1?(U.side=Qn,U.needsUpdate=!0,tn(U,nt,xt),U.side=Qa,U.needsUpdate=!0,tn(U,nt,xt),U.side=zi):tn(U,nt,xt)}this.compile=function(U,nt,xt=null){xt===null&&(xt=U),x=Pt.get(xt),x.init(nt),D.push(x),xt.traverseVisible(function($){$.isLight&&$.layers.test(nt.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),U!==xt&&U.traverseVisible(function($){$.isLight&&$.layers.test(nt.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const St=new Set;return U.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Gt=$.material;if(Gt)if(Array.isArray(Gt))for(let Zt=0;Zt<Gt.length;Zt++){const Qt=Gt[Zt];Te(Qt,xt,$),St.add(Qt)}else Te(Gt,xt,$),St.add(Gt)}),x=D.pop(),St},this.compileAsync=function(U,nt,xt=null){const St=this.compile(U,nt,xt);return new Promise($=>{function Gt(){if(St.forEach(function(Zt){pt.get(Zt).currentProgram.isReady()&&St.delete(Zt)}),St.size===0){$(U);return}setTimeout(Gt,10)}ee.get("KHR_parallel_shader_compile")!==null?Gt():setTimeout(Gt,10)})};let $e=null;function Mn(U){$e&&$e(U)}function xi(){wn.stop()}function ln(){wn.start()}const wn=new Ly;wn.setAnimationLoop(Mn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(U){$e=U,Et.setAnimationLoop(U),U===null?wn.stop():wn.start()},Et.addEventListener("sessionstart",xi),Et.addEventListener("sessionend",ln),this.render=function(U,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(nt),nt=Et.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,nt,X),x=Pt.get(U,D.length),x.init(nt),D.push(x),vt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),z.setFromProjectionMatrix(vt),Y=this.localClippingEnabled,F=gt.init(this.clippingPlanes,Y),M=st.get(U,O.length),M.init(),O.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Gt=w.xr.getDepthSensingMesh();Gt!==null&&Jn(Gt,nt,-1/0,w.sortObjects)}Jn(U,nt,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Rt,Nt),It=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,It&&Wt.addToRenderList(M,U),this.info.render.frame++,F===!0&&gt.beginShadows();const xt=x.state.shadowsArray;zt.render(xt,U,nt),F===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const St=M.opaque,$=M.transmissive;if(x.setupLights(),nt.isArrayCamera){const Gt=nt.cameras;if($.length>0)for(let Zt=0,Qt=Gt.length;Zt<Qt;Zt++){const $t=Gt[Zt];Vs(St,$,U,$t)}It&&Wt.render(U);for(let Zt=0,Qt=Gt.length;Zt<Qt;Zt++){const $t=Gt[Zt];Or(M,U,$t,$t.viewport)}}else $.length>0&&Vs(St,$,U,nt),It&&Wt.render(U),Or(M,U,nt);X!==null&&P===0&&(A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X)),U.isScene===!0&&U.onAfterRender(w,U,nt),ge.resetDefaultState(),L=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],F===!0&&gt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Jn(U,nt,xt,St){if(U.visible===!1)return;if(U.layers.test(nt.layers)){if(U.isGroup)xt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(nt);else if(U.isLight)x.pushLight(U),U.castShadow&&x.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||z.intersectsSprite(U)){St&&Ft.setFromMatrixPosition(U.matrixWorld).applyMatrix4(vt);const Zt=yt.update(U),Qt=U.material;Qt.visible&&M.push(U,Zt,Qt,xt,Ft.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||z.intersectsObject(U))){const Zt=yt.update(U),Qt=U.material;if(St&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ft.copy(U.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Ft.copy(Zt.boundingSphere.center)),Ft.applyMatrix4(U.matrixWorld).applyMatrix4(vt)),Array.isArray(Qt)){const $t=Zt.groups;for(let fe=0,ue=$t.length;fe<ue;fe++){const ae=$t[fe],Ce=Qt[ae.materialIndex];Ce&&Ce.visible&&M.push(U,Zt,Ce,xt,Ft.z,ae)}}else Qt.visible&&M.push(U,Zt,Qt,xt,Ft.z,null)}}const Gt=U.children;for(let Zt=0,Qt=Gt.length;Zt<Qt;Zt++)Jn(Gt[Zt],nt,xt,St)}function Or(U,nt,xt,St){const $=U.opaque,Gt=U.transmissive,Zt=U.transparent;x.setupLightsView(xt),F===!0&&gt.setGlobalState(w.clippingPlanes,xt),St&&lt.viewport(k.copy(St)),$.length>0&&$a($,nt,xt),Gt.length>0&&$a(Gt,nt,xt),Zt.length>0&&$a(Zt,nt,xt),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Vs(U,nt,xt,St){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[St.id]===void 0&&(x.state.transmissionRenderTarget[St.id]=new Nr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?$o:ga,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Fe.workingColorSpace}));const Gt=x.state.transmissionRenderTarget[St.id],Zt=St.viewport||k;Gt.setSize(Zt.z*w.transmissionResolutionScale,Zt.w*w.transmissionResolutionScale);const Qt=w.getRenderTarget();w.setRenderTarget(Gt),w.getClearColor(_t),bt=w.getClearAlpha(),bt<1&&w.setClearColor(16777215,.5),w.clear(),It&&Wt.render(xt);const $t=w.toneMapping;w.toneMapping=Ka;const fe=St.viewport;if(St.viewport!==void 0&&(St.viewport=void 0),x.setupLightsView(St),F===!0&&gt.setGlobalState(w.clippingPlanes,St),$a(U,xt,St),A.updateMultisampleRenderTarget(Gt),A.updateRenderTargetMipmap(Gt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let ae=0,Ce=nt.length;ae<Ce;ae++){const we=nt[ae],je=we.object,Le=we.geometry,de=we.material,se=we.group;if(de.side===zi&&je.layers.test(St.layers)){const pn=de.side;de.side=Qn,de.needsUpdate=!0,Si(je,xt,St,Le,de,se),de.side=pn,de.needsUpdate=!0,ue=!0}}ue===!0&&(A.updateMultisampleRenderTarget(Gt),A.updateRenderTargetMipmap(Gt))}w.setRenderTarget(Qt),w.setClearColor(_t,bt),fe!==void 0&&(St.viewport=fe),w.toneMapping=$t}function $a(U,nt,xt){const St=nt.isScene===!0?nt.overrideMaterial:null;for(let $=0,Gt=U.length;$<Gt;$++){const Zt=U[$],Qt=Zt.object,$t=Zt.geometry,fe=Zt.group;let ue=Zt.material;ue.allowOverride===!0&&St!==null&&(ue=St),Qt.layers.test(xt.layers)&&Si(Qt,nt,xt,$t,ue,fe)}}function Si(U,nt,xt,St,$,Gt){U.onBeforeRender(w,nt,xt,St,$,Gt),U.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),$.onBeforeRender(w,nt,xt,St,U,Gt),$.transparent===!0&&$.side===zi&&$.forceSinglePass===!1?($.side=Qn,$.needsUpdate=!0,w.renderBufferDirect(xt,nt,St,$,U,Gt),$.side=Qa,$.needsUpdate=!0,w.renderBufferDirect(xt,nt,St,$,U,Gt),$.side=zi):w.renderBufferDirect(xt,nt,St,$,U,Gt),U.onAfterRender(w,nt,xt,St,$,Gt)}function tn(U,nt,xt){nt.isScene!==!0&&(nt=Ot);const St=pt.get(U),$=x.state.lights,Gt=x.state.shadowsArray,Zt=$.state.version,Qt=Lt.getParameters(U,$.state,Gt,nt,xt),$t=Lt.getProgramCacheKey(Qt);let fe=St.programs;St.environment=U.isMeshStandardMaterial?nt.environment:null,St.fog=nt.fog,St.envMap=(U.isMeshStandardMaterial?G:E).get(U.envMap||St.environment),St.envMapRotation=St.environment!==null&&U.envMap===null?nt.environmentRotation:U.envMapRotation,fe===void 0&&(U.addEventListener("dispose",oe),fe=new Map,St.programs=fe);let ue=fe.get($t);if(ue!==void 0){if(St.currentProgram===ue&&St.lightsStateVersion===Zt)return Hi(U,Qt),ue}else Qt.uniforms=Lt.getUniforms(U),U.onBeforeCompile(Qt,w),ue=Lt.acquireProgram(Qt,$t),fe.set($t,ue),St.uniforms=Qt.uniforms;const ae=St.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ae.clippingPlanes=gt.uniform),Hi(U,Qt),St.needsLights=gu(U),St.lightsStateVersion=Zt,St.needsLights&&(ae.ambientLightColor.value=$.state.ambient,ae.lightProbe.value=$.state.probe,ae.directionalLights.value=$.state.directional,ae.directionalLightShadows.value=$.state.directionalShadow,ae.spotLights.value=$.state.spot,ae.spotLightShadows.value=$.state.spotShadow,ae.rectAreaLights.value=$.state.rectArea,ae.ltc_1.value=$.state.rectAreaLTC1,ae.ltc_2.value=$.state.rectAreaLTC2,ae.pointLights.value=$.state.point,ae.pointLightShadows.value=$.state.pointShadow,ae.hemisphereLights.value=$.state.hemi,ae.directionalShadowMap.value=$.state.directionalShadowMap,ae.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ae.spotShadowMap.value=$.state.spotShadowMap,ae.spotLightMatrix.value=$.state.spotLightMatrix,ae.spotLightMap.value=$.state.spotLightMap,ae.pointShadowMap.value=$.state.pointShadowMap,ae.pointShadowMatrix.value=$.state.pointShadowMatrix),St.currentProgram=ue,St.uniformsList=null,ue}function En(U){if(U.uniformsList===null){const nt=U.currentProgram.getUniforms();U.uniformsList=$c.seqWithValue(nt.seq,U.uniforms)}return U.uniformsList}function Hi(U,nt){const xt=pt.get(U);xt.outputColorSpace=nt.outputColorSpace,xt.batching=nt.batching,xt.batchingColor=nt.batchingColor,xt.instancing=nt.instancing,xt.instancingColor=nt.instancingColor,xt.instancingMorph=nt.instancingMorph,xt.skinning=nt.skinning,xt.morphTargets=nt.morphTargets,xt.morphNormals=nt.morphNormals,xt.morphColors=nt.morphColors,xt.morphTargetsCount=nt.morphTargetsCount,xt.numClippingPlanes=nt.numClippingPlanes,xt.numIntersection=nt.numClipIntersection,xt.vertexAlphas=nt.vertexAlphas,xt.vertexTangents=nt.vertexTangents,xt.toneMapping=nt.toneMapping}function ks(U,nt,xt,St,$){nt.isScene!==!0&&(nt=Ot),A.resetTextureUnits();const Gt=nt.fog,Zt=St.isMeshStandardMaterial?nt.environment:null,Qt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:zs,$t=(St.isMeshStandardMaterial?G:E).get(St.envMap||Zt),fe=St.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,ue=!!xt.attributes.tangent&&(!!St.normalMap||St.anisotropy>0),ae=!!xt.morphAttributes.position,Ce=!!xt.morphAttributes.normal,we=!!xt.morphAttributes.color;let je=Ka;St.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(je=w.toneMapping);const Le=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,de=Le!==void 0?Le.length:0,se=pt.get(St),pn=x.state.lights;if(F===!0&&(Y===!0||U!==C)){const en=U===C&&St.id===L;gt.setState(St,U,en)}let Ue=!1;St.version===se.__version?(se.needsLights&&se.lightsStateVersion!==pn.state.version||se.outputColorSpace!==Qt||$.isBatchedMesh&&se.batching===!1||!$.isBatchedMesh&&se.batching===!0||$.isBatchedMesh&&se.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&se.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&se.instancing===!1||!$.isInstancedMesh&&se.instancing===!0||$.isSkinnedMesh&&se.skinning===!1||!$.isSkinnedMesh&&se.skinning===!0||$.isInstancedMesh&&se.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&se.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&se.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&se.instancingMorph===!1&&$.morphTexture!==null||se.envMap!==$t||St.fog===!0&&se.fog!==Gt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==gt.numPlanes||se.numIntersection!==gt.numIntersection)||se.vertexAlphas!==fe||se.vertexTangents!==ue||se.morphTargets!==ae||se.morphNormals!==Ce||se.morphColors!==we||se.toneMapping!==je||se.morphTargetsCount!==de)&&(Ue=!0):(Ue=!0,se.__version=St.version);let Vn=se.currentProgram;Ue===!0&&(Vn=tn(St,nt,$));let Mi=!1,Pn=!1,yn=!1;const He=Vn.getUniforms(),zn=se.uniforms;if(lt.useProgram(Vn.program)&&(Mi=!0,Pn=!0,yn=!0),St.id!==L&&(L=St.id,Pn=!0),Mi||C!==U){lt.buffers.depth.getReversed()?(W.copy(U.projectionMatrix),jE(W),ZE(W),He.setValue(H,"projectionMatrix",W)):He.setValue(H,"projectionMatrix",U.projectionMatrix),He.setValue(H,"viewMatrix",U.matrixWorldInverse);const bn=He.map.cameraPosition;bn!==void 0&&bn.setValue(H,wt.setFromMatrixPosition(U.matrixWorld)),ht.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(St.isMeshPhongMaterial||St.isMeshToonMaterial||St.isMeshLambertMaterial||St.isMeshBasicMaterial||St.isMeshStandardMaterial||St.isShaderMaterial)&&He.setValue(H,"isOrthographic",U.isOrthographicCamera===!0),C!==U&&(C=U,Pn=!0,yn=!0)}if($.isSkinnedMesh){He.setOptional(H,$,"bindMatrix"),He.setOptional(H,$,"bindMatrixInverse");const en=$.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),He.setValue(H,"boneTexture",en.boneTexture,A))}$.isBatchedMesh&&(He.setOptional(H,$,"batchingTexture"),He.setValue(H,"batchingTexture",$._matricesTexture,A),He.setOptional(H,$,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",$._indirectTexture,A),He.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",$._colorsTexture,A));const Dn=xt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Xt.update($,xt,Vn),(Pn||se.receiveShadow!==$.receiveShadow)&&(se.receiveShadow=$.receiveShadow,He.setValue(H,"receiveShadow",$.receiveShadow)),St.isMeshGouraudMaterial&&St.envMap!==null&&(zn.envMap.value=$t,zn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),St.isMeshStandardMaterial&&St.envMap===null&&nt.environment!==null&&(zn.envMapIntensity.value=nt.environmentIntensity),Pn&&(He.setValue(H,"toneMappingExposure",w.toneMappingExposure),se.needsLights&&mu(zn,yn),Gt&&St.fog===!0&&j.refreshFogUniforms(zn,Gt),j.refreshMaterialUniforms(zn,St,K,rt,x.state.transmissionRenderTarget[U.id]),$c.upload(H,En(se),zn,A)),St.isShaderMaterial&&St.uniformsNeedUpdate===!0&&($c.upload(H,En(se),zn,A),St.uniformsNeedUpdate=!1),St.isSpriteMaterial&&He.setValue(H,"center",$.center),He.setValue(H,"modelViewMatrix",$.modelViewMatrix),He.setValue(H,"normalMatrix",$.normalMatrix),He.setValue(H,"modelMatrix",$.matrixWorld),St.isShaderMaterial||St.isRawShaderMaterial){const en=St.uniformsGroups;for(let bn=0,Fr=en.length;bn<Fr;bn++){const kn=en[bn];Q.update(kn,Vn),Q.bind(kn,Vn)}}return Vn}function mu(U,nt){U.ambientLightColor.needsUpdate=nt,U.lightProbe.needsUpdate=nt,U.directionalLights.needsUpdate=nt,U.directionalLightShadows.needsUpdate=nt,U.pointLights.needsUpdate=nt,U.pointLightShadows.needsUpdate=nt,U.spotLights.needsUpdate=nt,U.spotLightShadows.needsUpdate=nt,U.rectAreaLights.needsUpdate=nt,U.hemisphereLights.needsUpdate=nt}function gu(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(U,nt,xt){const St=pt.get(U);St.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,St.__autoAllocateDepthBuffer===!1&&(St.__useRenderToTexture=!1),pt.get(U.texture).__webglTexture=nt,pt.get(U.depthTexture).__webglTexture=St.__autoAllocateDepthBuffer?void 0:xt,St.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,nt){const xt=pt.get(U);xt.__webglFramebuffer=nt,xt.__useDefaultFramebuffer=nt===void 0};const ll=H.createFramebuffer();this.setRenderTarget=function(U,nt=0,xt=0){X=U,I=nt,P=xt;let St=!0,$=null,Gt=!1,Zt=!1;if(U){const $t=pt.get(U);if($t.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(H.FRAMEBUFFER,null),St=!1;else if($t.__webglFramebuffer===void 0)A.setupRenderTarget(U);else if($t.__hasExternalTextures)A.rebindTextures(U,pt.get(U.texture).__webglTexture,pt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ae=U.depthTexture;if($t.__boundDepthTexture!==ae){if(ae!==null&&pt.has(ae)&&(U.width!==ae.image.width||U.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(U)}}const fe=U.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Zt=!0);const ue=pt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ue[nt])?$=ue[nt][xt]:$=ue[nt],Gt=!0):U.samples>0&&A.useMultisampledRTT(U)===!1?$=pt.get(U).__webglMultisampledFramebuffer:Array.isArray(ue)?$=ue[xt]:$=ue,k.copy(U.viewport),ct.copy(U.scissor),ot=U.scissorTest}else k.copy(N).multiplyScalar(K).floor(),ct.copy(at).multiplyScalar(K).floor(),ot=et;if(xt!==0&&($=ll),lt.bindFramebuffer(H.FRAMEBUFFER,$)&&St&&lt.drawBuffers(U,$),lt.viewport(k),lt.scissor(ct),lt.setScissorTest(ot),Gt){const $t=pt.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+nt,$t.__webglTexture,xt)}else if(Zt){const $t=pt.get(U.texture),fe=nt;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.__webglTexture,xt,fe)}else if(U!==null&&xt!==0){const $t=pt.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$t.__webglTexture,xt)}L=-1},this.readRenderTargetPixels=function(U,nt,xt,St,$,Gt,Zt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=pt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt){lt.bindFramebuffer(H.FRAMEBUFFER,Qt);try{const $t=U.texture,fe=$t.format,ue=$t.type;if(!ht.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=U.width-St&&xt>=0&&xt<=U.height-$&&H.readPixels(nt,xt,St,$,ce.convert(fe),ce.convert(ue),Gt)}finally{const $t=X!==null?pt.get(X).__webglFramebuffer:null;lt.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(U,nt,xt,St,$,Gt,Zt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=pt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt)if(nt>=0&&nt<=U.width-St&&xt>=0&&xt<=U.height-$){lt.bindFramebuffer(H.FRAMEBUFFER,Qt);const $t=U.texture,fe=$t.format,ue=$t.type;if(!ht.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.bufferData(H.PIXEL_PACK_BUFFER,Gt.byteLength,H.STREAM_READ),H.readPixels(nt,xt,St,$,ce.convert(fe),ce.convert(ue),0);const Ce=X!==null?pt.get(X).__webglFramebuffer:null;lt.bindFramebuffer(H.FRAMEBUFFER,Ce);const we=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await YE(H,we,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Gt),H.deleteBuffer(ae),H.deleteSync(we),Gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,nt=null,xt=0){const St=Math.pow(2,-xt),$=Math.floor(U.image.width*St),Gt=Math.floor(U.image.height*St),Zt=nt!==null?nt.x:0,Qt=nt!==null?nt.y:0;A.setTexture2D(U,0),H.copyTexSubImage2D(H.TEXTURE_2D,xt,0,0,Zt,Qt,$,Gt),lt.unbindTexture()};const tr=H.createFramebuffer(),Xs=H.createFramebuffer();this.copyTextureToTexture=function(U,nt,xt=null,St=null,$=0,Gt=null){Gt===null&&($!==0?(Jc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Gt=$,$=0):Gt=0);let Zt,Qt,$t,fe,ue,ae,Ce,we,je;const Le=U.isCompressedTexture?U.mipmaps[Gt]:U.image;if(xt!==null)Zt=xt.max.x-xt.min.x,Qt=xt.max.y-xt.min.y,$t=xt.isBox3?xt.max.z-xt.min.z:1,fe=xt.min.x,ue=xt.min.y,ae=xt.isBox3?xt.min.z:0;else{const Dn=Math.pow(2,-$);Zt=Math.floor(Le.width*Dn),Qt=Math.floor(Le.height*Dn),U.isDataArrayTexture?$t=Le.depth:U.isData3DTexture?$t=Math.floor(Le.depth*Dn):$t=1,fe=0,ue=0,ae=0}St!==null?(Ce=St.x,we=St.y,je=St.z):(Ce=0,we=0,je=0);const de=ce.convert(nt.format),se=ce.convert(nt.type);let pn;nt.isData3DTexture?(A.setTexture3D(nt,0),pn=H.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(A.setTexture2DArray(nt,0),pn=H.TEXTURE_2D_ARRAY):(A.setTexture2D(nt,0),pn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,nt.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,nt.unpackAlignment);const Ue=H.getParameter(H.UNPACK_ROW_LENGTH),Vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Mi=H.getParameter(H.UNPACK_SKIP_PIXELS),Pn=H.getParameter(H.UNPACK_SKIP_ROWS),yn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,fe),H.pixelStorei(H.UNPACK_SKIP_ROWS,ue),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ae);const He=U.isDataArrayTexture||U.isData3DTexture,zn=nt.isDataArrayTexture||nt.isData3DTexture;if(U.isDepthTexture){const Dn=pt.get(U),en=pt.get(nt),bn=pt.get(Dn.__renderTarget),Fr=pt.get(en.__renderTarget);lt.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let kn=0;kn<$t;kn++)He&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,$,ae+kn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pt.get(nt).__webglTexture,Gt,je+kn)),H.blitFramebuffer(fe,ue,Zt,Qt,Ce,we,Zt,Qt,H.DEPTH_BUFFER_BIT,H.NEAREST);lt.bindFramebuffer(H.READ_FRAMEBUFFER,null),lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||U.isRenderTargetTexture||pt.has(U)){const Dn=pt.get(U),en=pt.get(nt);lt.bindFramebuffer(H.READ_FRAMEBUFFER,tr),lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xs);for(let bn=0;bn<$t;bn++)He?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,$,ae+bn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,$),zn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Gt,je+bn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Gt),$!==0?H.blitFramebuffer(fe,ue,Zt,Qt,Ce,we,Zt,Qt,H.COLOR_BUFFER_BIT,H.NEAREST):zn?H.copyTexSubImage3D(pn,Gt,Ce,we,je+bn,fe,ue,Zt,Qt):H.copyTexSubImage2D(pn,Gt,Ce,we,fe,ue,Zt,Qt);lt.bindFramebuffer(H.READ_FRAMEBUFFER,null),lt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zn?U.isDataTexture||U.isData3DTexture?H.texSubImage3D(pn,Gt,Ce,we,je,Zt,Qt,$t,de,se,Le.data):nt.isCompressedArrayTexture?H.compressedTexSubImage3D(pn,Gt,Ce,we,je,Zt,Qt,$t,de,Le.data):H.texSubImage3D(pn,Gt,Ce,we,je,Zt,Qt,$t,de,se,Le):U.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Gt,Ce,we,Zt,Qt,de,se,Le.data):U.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Gt,Ce,we,Le.width,Le.height,de,Le.data):H.texSubImage2D(H.TEXTURE_2D,Gt,Ce,we,Zt,Qt,de,se,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ue),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Mi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,yn),Gt===0&&nt.generateMipmaps&&H.generateMipmap(pn),lt.unbindTexture()},this.copyTextureToTexture3D=function(U,nt,xt=null,St=null,$=0){return Jc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,nt,xt,St,$)},this.initRenderTarget=function(U){pt.get(U).__webglFramebuffer===void 0&&A.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?A.setTextureCube(U,0):U.isData3DTexture?A.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?A.setTexture2DArray(U,0):A.setTexture2D(U,0),lt.unbindTexture()},this.resetState=function(){I=0,P=0,X=null,lt.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Fe._getUnpackColorSpace()}}const Bt=.5,zy={F:[[-Bt,Bt,Bt],[Bt,Bt,Bt],[Bt,-Bt,Bt],[-Bt,-Bt,Bt]],B:[[Bt,Bt,-Bt],[-Bt,Bt,-Bt],[-Bt,-Bt,-Bt],[Bt,-Bt,-Bt]],R:[[Bt,Bt,Bt],[Bt,Bt,-Bt],[Bt,-Bt,-Bt],[Bt,-Bt,Bt]],L:[[-Bt,Bt,-Bt],[-Bt,Bt,Bt],[-Bt,-Bt,Bt],[-Bt,-Bt,-Bt]],U:[[-Bt,Bt,-Bt],[Bt,Bt,-Bt],[Bt,Bt,Bt],[-Bt,Bt,Bt]],D:[[-Bt,-Bt,Bt],[Bt,-Bt,Bt],[Bt,-Bt,-Bt],[-Bt,-Bt,-Bt]]},up=["U","R","F","D","L","B"],CC=[[-Bt,Bt,Bt],[Bt,Bt,Bt],[Bt,Bt,-Bt],[-Bt,Bt,-Bt],[-Bt,-Bt,Bt],[Bt,-Bt,Bt],[Bt,-Bt,-Bt],[-Bt,-Bt,-Bt]],wC=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];function DC(s,t){const n=(t%4+4)%4;return n===0?s:n===1?[s[3],s[0],s[1],s[2]]:n===2?[s[2],s[3],s[0],s[1]]:[s[1],s[2],s[3],s[0]]}const Cp={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},UC={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function hu(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function Dr(s){return s.replace("'","").replace("2","")}function LC(s){return s.endsWith("'")&&!s.endsWith("2")}function fp(s){return s.endsWith("2")}function du(s){const t=Dr(s);let n=[...UC[t]];return(t==="L"||t==="D"||t==="B")&&(n=[-n[0],-n[1],-n[2]]),n}function NC(s){if(fp(s))return s;const t=Dr(s);return LC(s)?t:`${t}'`}function OC(s){return NC(s)}const fd=.51;function FC(s){const t=Cp[s];return[t[0]*fd,t[1]*fd,t[2]*fd]}function wp(s,t=3){const n=s.rotationMatrix,a=s.translation,o=[];for(const c of up){const u=FC(c),h=n[2]*u[0]+n[5]*u[1]+n[8]*u[2]+a[2],p=Cp[c],m=n[6]*p[0]+n[7]*p[1]+n[8]*p[2];h>.02&&m<-.12&&o.push({id:c,score:h*-m})}return o.sort((c,u)=>u.score-c.score).slice(0,t).map(c=>c.id)}function PC(s){const t=s.rotationMatrix,n=s.translation,a=new Qe().set(t[0],t[1],t[2],n[0],t[3],t[4],t[5],n[1],t[6],t[7],t[8],n[2],0,0,0,1),o=new Qe().set(1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1);return new Qe().multiplyMatrices(o,a).invert()}function zC(s,t,n,a){const o=t.cameraFy||n*.9,c=2*Math.atan(a/(2*o));s.fov=c*180/Math.PI,s.aspect=n/a,s.near=.01,s.far=100,s.position.set(0,0,0),s.up.set(0,1,0),s.lookAt(0,0,-1),s.updateProjectionMatrix()}const hp=96,On=hp/3;function BC(s){const t=document.createElement("canvas");t.width=hp,t.height=hp;const n=t.getContext("2d");if(!n)return new e_(t);for(let o=0;o<3;o++)for(let c=0;c<3;c++){const u=s[o*3+c]??"W";n.fillStyle=Jo[u],n.fillRect(c*On,(2-o)*On,On,On),n.strokeStyle="rgba(0, 0, 0, 0.35)",n.lineWidth=1,n.strokeRect(c*On+.5,(2-o)*On+.5,On-1,On-1)}const a=new e_(t);return a.colorSpace=li,a.needsUpdate=!0,a}function IC(s,t){const a=s.image.getContext("2d");if(a){for(let o=0;o<3;o++)for(let c=0;c<3;c++){const u=t[o*3+c]??"W";a.fillStyle=Jo[u],a.fillRect(c*On,(2-o)*On,On,On),a.strokeStyle="rgba(0, 0, 0, 0.35)",a.lineWidth=1,a.strokeRect(c*On+.5,(2-o)*On+.5,On-1,On-1)}s.needsUpdate=!0}}const HC=16777215,hd=4482696,C_=16763955,GC=16777215,w_=16772676,dd=16724787,VC=16771899,kC=16777215,D_={F:{position:[0,0,.501],rotation:[0,0,0]},B:{position:[0,0,-.501],rotation:[0,Math.PI,0]},R:{position:[.501,0,0],rotation:[0,Math.PI/2,0]},L:{position:[-.501,0,0],rotation:[0,-Math.PI/2,0]},U:{position:[0,.501,0],rotation:[-Math.PI/2,0,0]},D:{position:[0,-.501,0],rotation:[Math.PI/2,0,0]}};class XC{constructor(t,n){Ee(this,"renderer");Ee(this,"scene");Ee(this,"camera");Ee(this,"cubeRoot");Ee(this,"faceMeshes",new Map);Ee(this,"faceTextures",new Map);Ee(this,"arrowRoot");Ee(this,"trackMesh",null);Ee(this,"progressMesh",null);Ee(this,"headMesh",null);Ee(this,"currentMove",null);Ee(this,"traceProgress",0);Ee(this,"frameWidth",1);Ee(this,"frameHeight",1);Ee(this,"faceColorsKey","");Ee(this,"guideMode");this.guideMode=(n==null?void 0:n.guideMode)??!1,this.renderer=new RC({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new x1,this.camera=new _i(45,1,.01,100),this.camera.position.set(0,0,0),this.scene.add(new k1(16777215,1.15)),this.cubeRoot=new Cs,this.buildCubeWireframe(),this.buildFacePlanes(),this.scene.add(this.cubeRoot),this.arrowRoot=new Cs,this.cubeRoot.add(this.arrowRoot)}resize(t,n,a,o){this.frameWidth=a,this.frameHeight=o,this.renderer.setSize(t,n,!1)}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.highlightMoveFace(t?Dr(t):null),this.rebuildArrow(t))}setRotationProgress(t){const n=Math.max(0,Math.min(1,t));Math.abs(n-this.traceProgress)<.008||(this.traceProgress=n,this.updateArrowProgress())}setFaceColors(t,n){if(this.guideMode)return;const a={...n};for(const[c,u]of Object.entries(t))u.length===9&&(a[c]=u);const o=JSON.stringify(a);if(o!==this.faceColorsKey){this.faceColorsKey=o;for(const[c,u]of this.faceMeshes){const h=a[c],p=u.material;if(!h||h.length!==9){p.map=null,p.color.setHex(hd),p.opacity=.14,p.needsUpdate=!0;continue}let m=this.faceTextures.get(c);m?IC(m,h):(m=BC(h),this.faceTextures.set(c,m)),p.map=m,p.color.setHex(16777215),p.opacity=.92,p.needsUpdate=!0}}}render(t,n=!0){if(!t){this.renderer.render(this.scene,this.camera);return}zC(this.camera,t,this.frameWidth,this.frameHeight);const a=PC(t);this.cubeRoot.matrixAutoUpdate=!1,this.cubeRoot.matrix.copy(a),this.cubeRoot.matrixWorldNeedsUpdate=!0;const o=wp(t);for(const[u,h]of this.faceMeshes)h.visible=o.includes(u);const c=this.currentMove?Dr(this.currentMove):null;if(this.arrowRoot.visible=!!(this.currentMove&&(this.guideMode||n)),c&&this.highlightMoveFace(c),this.guideMode)for(const[u,h]of this.faceMeshes)h.visible=u===c&&o.includes(u);this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.faceTextures.values())t.dispose();this.faceTextures.clear(),this.renderer.dispose(),this.cubeRoot.traverse(Vc)}buildCubeWireframe(){const t=CC.map(u=>new tt(u[0],u[1],u[2])),n=[];for(const[u,h]of wC)n.push(t[u].x,t[u].y,t[u].z),n.push(t[h].x,t[h].y,t[h].z);const a=new yi;a.setAttribute("position",new gn(n,3));const o=new Ry({color:this.guideMode?kC:HC,transparent:!0,opacity:this.guideMode?.55:.95,linewidth:2,depthWrite:!1}),c=new Cy(a,o);this.cubeRoot.add(c)}buildFacePlanes(){const t=new rl(.98,.98);for(const n of Object.keys(D_)){const a=D_[n],o=new Ar({color:hd,transparent:!0,opacity:.14,side:zi,depthWrite:!1}),c=new Fn(t.clone(),o);c.position.set(...a.position),c.rotation.set(...a.rotation),c.userData.faceId=n,c.visible=!1,this.faceMeshes.set(n,c),this.cubeRoot.add(c)}}highlightMoveFace(t){for(const[n,a]of this.faceMeshes){const o=a.material;if(this.guideMode){n===t?(o.map=null,o.color.setHex(C_),o.opacity=.22):o.opacity=0,o.needsUpdate=!0;continue}o.map?n===t?o.opacity=.98:o.opacity=.82:n===t?(o.color.setHex(C_),o.opacity=.35):(o.color.setHex(hd),o.opacity=.14)}}rebuildArrow(t){if(this.clearArrow(),!t)return;const n=this.guideMode?OC(t):t,a=Dr(t),o=new tt(...du(n)).normalize(),{ref:c,perp:u}=WC(o),h=this.guideMode?.42:.36,p=hu(n),m=p<0?p:0,g=p<0?0:p,v=48,_=new tt(...Cp[a]).normalize(),y=_.clone().multiplyScalar(.545),b=[];for(let D=0;D<=v;D++){const w=m+(g-m)*D/v;b.push(qC(c,u,h,w).add(y))}this.arrowRoot.userData={fullPoints:b,segments:v,startAngle:m,endAngle:g,radius:h,ref:c,perp:u,surface:y};const T=new lp(b),M=this.guideMode?.045:.028,x=new lu(T,v,M,10,!1),O=new Ar({color:this.guideMode?dd:GC,transparent:!0,opacity:this.guideMode?.92:.35,depthWrite:!1});if(this.trackMesh=new Fn(x,O),this.arrowRoot.add(this.trackMesh),this.guideMode&&!fp(n)){const D=b[b.length-1],w=b[b.length-2]??D,q=new tt().subVectors(D,w).normalize(),I=new Fn(new ou(.12,.26,14),new Ar({color:dd,transparent:!0,opacity:.98,depthWrite:!1}));I.position.copy(D),I.quaternion.setFromUnitVectors(new tt(0,1,0),q),this.arrowRoot.add(I)}if(fp(n)){const D=new Fn(new Tp(this.guideMode?.12:.09,24),new Ar({color:this.guideMode?dd:w_,transparent:!0,opacity:.95,depthWrite:!1}));D.position.copy(y),D.lookAt(y.clone().add(_)),this.arrowRoot.add(D)}this.updateArrowProgress()}updateArrowProgress(){if(!this.currentMove||!this.arrowRoot.userData.fullPoints)return;this.progressMesh&&(this.arrowRoot.remove(this.progressMesh),Vc(this.progressMesh),this.progressMesh=null),this.headMesh&&(this.arrowRoot.remove(this.headMesh),Vc(this.headMesh),this.headMesh=null);const{fullPoints:t,segments:n,startAngle:a,endAngle:o}=this.arrowRoot.userData,c=a+(o-a)*this.traceProgress;if(!this.guideMode&&Math.abs(c-a)<.04)return;const u=Math.max(2,Math.floor(n*Math.max(this.guideMode?.05:0,this.traceProgress))),h=t.slice(0,u+1);if(h.length<2)return;const p=new lp(h),m=this.guideMode?.058:.052,g=new lu(p,u,m,10,!1),v=new Ar({color:this.guideMode?VC:w_,transparent:!0,opacity:.98,depthWrite:!1});this.progressMesh=new Fn(g,v),this.arrowRoot.add(this.progressMesh);const _=h[h.length-1],y=h[h.length-2]??_,b=new tt().subVectors(_,y).normalize(),T=new Fn(new ou(this.guideMode?.13:.1,this.guideMode?.28:.22,12),v.clone());T.position.copy(_),T.quaternion.setFromUnitVectors(new tt(0,1,0),b),this.headMesh=T,this.arrowRoot.add(T)}clearArrow(){for(this.trackMesh=null,this.progressMesh=null,this.headMesh=null;this.arrowRoot.children.length>0;){const t=this.arrowRoot.children[0];this.arrowRoot.remove(t),Vc(t)}}}function WC(s){let t=new tt(0,1,0);Math.abs(s.dot(t))>.9&&t.set(0,0,1);const n=new tt().crossVectors(s,t).normalize();return t=new tt().crossVectors(n,s).normalize(),{ref:t,perp:n}}function qC(s,t,n,a){return s.clone().multiplyScalar(Math.cos(a)*n).add(t.clone().multiplyScalar(Math.sin(a)*n))}function Vc(s){s.traverse(t=>{(t instanceof Fn||t instanceof Cy)&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}function YC(s){if(s.length<4)return null;const t=[...s].sort((o,c)=>o.y-c.y),n=t.slice(0,2).sort((o,c)=>o.x-c.x),a=t.slice(2,4).sort((o,c)=>o.x-c.x);return[n[0],n[1],a[1],a[0]]}function Dp(s,t){const n=s*.9,a=s*.9,o=s/2,c=t/2;return{fx:n,fy:a,cx:o,cy:c}}function By(s,t,n,a=null){try{return jC(s,t,n,a)}catch{return Iy(s,t,n,a)}}function Iy(s,t,n,a){const o={x:s.reduce((g,v)=>g+v.x,0)/4,y:s.reduce((g,v)=>g+v.y,0)/4},c=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2,{fx:u,fy:h,cx:p,cy:m}=Dp(t,n);return{corners:s,center:o,size:c,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[0,0,c*3],confidence:.55,visibleFace:a,cameraFx:u,cameraFy:h,cameraCx:p,cameraCy:m}}function jC(s,t,n,a){const{fx:o,fy:c,cx:u,cy:h}=Dp(t,n),p=a?[a,...up.filter(v=>v!==a)]:up;let m=null,g=1/0;for(const v of p){const _=zy[v];for(let y=0;y<4;y++){const b=DC(s,y),T=ZC(_,b,v,o,c,u,h);if(!T)continue;const M=KC(_,T,b,o,c,u,h);M<g&&(g=M,m={...T,confidence:Math.max(.5,1-M/40)})}}return m||Iy(s,t,n,a)}function ZC(s,t,n,a,o,c,u){const h=window.cv,p=h.matFromArray(4,1,h.CV_32FC1,s.flat()),m=h.matFromArray(4,1,h.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),g=h.matFromArray(3,3,h.CV_32FC1,[a,0,c,0,o,u,0,0,1]),v=h.matFromArray(4,1,h.CV_32FC1,[0,0,0,0]),_=new h.Mat,y=new h.Mat,b=new h.Mat;h.solvePnP(p,m,g,v,_,y),h.Rodrigues(_,b);const T=[];for(let D=0;D<9;D++)T.push(b.data32F[D]??b.floatAt(Math.floor(D/3),D%3));const M=[y.data32F[0]??y.floatAt(0,0),y.data32F[1]??y.floatAt(1,0),y.data32F[2]??y.floatAt(2,0)],x={x:t.reduce((D,w)=>D+w.x,0)/4,y:t.reduce((D,w)=>D+w.y,0)/4},O=(Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y)+Math.hypot(t[2].x-t[3].x,t[2].y-t[3].y))/2;return p.delete(),m.delete(),g.delete(),v.delete(),_.delete(),y.delete(),b.delete(),{corners:t,center:x,size:O,rotationMatrix:T,translation:M,confidence:.8,visibleFace:n,cameraFx:a,cameraFy:o,cameraCx:c,cameraCy:u}}function KC(s,t,n,a,o,c,u){const h=t.rotationMatrix,p=t.translation;let m=0;for(let g=0;g<4;g++){const v=s[g],_=h[0]*v[0]+h[1]*v[1]+h[2]*v[2]+p[0],y=h[3]*v[0]+h[4]*v[1]+h[5]*v[2]+p[1],b=h[6]*v[0]+h[7]*v[1]+h[8]*v[2]+p[2];if(b<1e-4)return 1/0;const T=a*_/b+c,M=o*y/b+u;m+=Math.hypot(T-n[g].x,M-n[g].y)}return m/4}function QC(s,t,n,a,o,c,u){const h=t[0]*s[0]+t[1]*s[1]+t[2]*s[2]+n[0],p=t[3]*s[0]+t[4]*s[1]+t[5]*s[2]+n[1],m=t[6]*s[0]+t[7]*s[1]+t[8]*s[2]+n[2];return m<.02?null:{x:a*h/m+c,y:o*p/m+u}}function Hy(s,t,n,a){const o=zy[s],{fx:c,fy:u,cx:h,cy:p}=Dp(n,a),m=t.cameraFx??c,g=t.cameraFy??u,v=t.cameraCx??h,_=t.cameraCy??p,y=[];for(const b of o){const T=QC(b,t.rotationMatrix,t.translation,m,g,v,_);if(!T||T.x<-40||T.y<-40||T.x>n+40||T.y>a+40)return null;y.push(T)}return y}function U_(s){const[t,n,a,o]=s;return(Math.hypot(n.x-t.x,n.y-t.y)+Math.hypot(a.x-o.x,a.y-o.y))/2}function JC(s,t,n){const a=s.visibleFace;if(!a)return s;const o=Hy(a,s,t,n);if(!o)return s;const c=U_(s.corners),u=U_(o);if(u<8||c<8)return s;const h=c/u;if(h<.25||h>4)return s;const p=s.translation;return{...s,translation:[p[0]/h,p[1]/h,p[2]/h],size:s.size*h}}function $C({pose:s,move:t,rotationProgress:n,frameWidth:a,frameHeight:o,viewportWidth:c,viewportHeight:u,active:h}){const p=Jt.useRef(null),m=Jt.useRef(null),g=Jt.useRef(s),v=Jt.useRef(t),_=Jt.useRef(n);g.current=s,v.current=t,_.current=n;const y=Jt.useMemo(()=>{if(!a||!o||!c||!u)return null;const{scale:T,offsetX:M,offsetY:x}=Q_(a,o,c,u);return{left:M,top:x,width:a*T,height:o*T}},[a,o,c,u]);Jt.useEffect(()=>{const T=p.current;if(!T)return;const M=new XC(T,{guideMode:!0});return m.current=M,()=>{M.dispose(),m.current=null}},[]),Jt.useEffect(()=>{var T;y&&((T=m.current)==null||T.resize(y.width,y.height,a,o))},[y,a,o]),Jt.useEffect(()=>{var T;(T=m.current)==null||T.setMove(t)},[t]),Jt.useEffect(()=>{var T;(T=m.current)==null||T.setRotationProgress(n)},[n]),Jt.useEffect(()=>{if(!h)return;let T=0;const M=()=>{var O,D;const x=g.current;if(x&&a&&o){const w=JC(x,a,o);(O=m.current)==null||O.render(w,!0)}else(D=m.current)==null||D.render(null);T=requestAnimationFrame(M)};return T=requestAnimationFrame(M),()=>cancelAnimationFrame(T)},[h,a,o]);const b=y?{left:`${y.left}px`,top:`${y.top}px`,width:`${y.width}px`,height:`${y.height}px`}:void 0;return Ht.jsx("canvas",{ref:p,className:`solving-cube-ar-overlay${h?" active":""}`,style:b,"aria-hidden":"true"})}function t2(s){return s==="locked"?"인식":s==="scanning"?"스캔":"없음"}function e2({visible:s,tracking:t,faceScanInfos:n,onSkip:a}){if(!s)return null;const o=n.filter(p=>p.status==="locked").length,c=n.filter(p=>p.status==="scanning").length,u=3,h=o>=3?"solving-face-status--all-locked":t==="lost"?"solving-face-status--lost":o>=2?"solving-face-status--partial":"solving-face-status--searching";return Ht.jsxs("div",{className:`solving-face-status ${h}`,"aria-live":"polite",children:[Ht.jsxs("div",{className:"solving-face-status-header",children:[Ht.jsx("span",{className:"solving-face-status-title",children:"3면 추적"}),Ht.jsxs("span",{className:"solving-face-status-summary",children:[o,"/",u," 인식됨",c>0?` · ${c} 스캔 중`:""]}),a&&Ht.jsx("button",{type:"button",className:"solving-face-status-skip",onClick:a,children:"Skip"})]}),Ht.jsx("div",{className:"solving-face-status-chips",children:n.map(p=>Ht.jsxs("div",{className:`solving-face-chip solving-face-chip--${p.status}`,children:[Ht.jsx("span",{className:"solving-face-chip-id",children:p.faceId}),Ht.jsx("span",{className:"solving-face-chip-state",children:t2(p.status)}),p.status!=="missing"&&Ht.jsxs("span",{className:"solving-face-chip-score",children:[Math.round(p.matchScore*100),"%"]}),Ht.jsx("div",{className:"solving-face-chip-bar",style:{"--match":`${Math.round(p.matchScore*100)}%`}})]},p.faceId))})]})}function L_({message:s="Loading…",overlay:t=!1}){return Ht.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[Ht.jsx("div",{className:"loading-spinner"}),Ht.jsx("p",{children:s})]})}function n2({visible:s,feedback:t,onStart:n}){const a=t.status==="detected"&&t.cellColors.length===9;return ty(n,s),s?Ht.jsx("div",{className:"scan-ready-overlay","aria-live":"polite",children:Ht.jsxs("div",{className:"scan-ready-panel",children:[Ht.jsx("p",{className:"scan-ready-hint",children:a?"Cube detected":"Align cube in guide"}),Ht.jsx("button",{type:"button",className:"capture-button",onClick:n,children:"Start scan"})]})}):null}function i2({phase:s,currentStep:t,totalSteps:n}){return s!=="solving"||n===0?null:Ht.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",n]})}function a2(s){const t=["U","R","F","D","L","B"];let n="";for(const a of t){const o=s.get(a);if(!o||o.length!==9)throw new Error(`Missing face data for ${a}`);for(const c of o)n+=r2(c)}return n}function r2(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function s2(s,t){const n=new Array(9).fill(0);for(let a=0;a<3;a++)for(let o=0;o<3;o++){let c=0;for(let u=0;u<3;u++)c+=s[a*3+u]*t[u*3+o];n[a*3+o]=c}return n}function N_(){return[1,0,0,0,1,0,0,0,1]}function o2(s,t){const[n,a,o]=s,c=Math.hypot(n,a,o)||1,u=n/c,h=a/c,p=o/c,m=Math.cos(t),g=Math.sin(t),v=1-m;return[v*u*u+m,v*u*h-g*p,v*u*p+g*h,v*u*h+g*p,v*h*h+m,v*h*p-g*u,v*u*p-g*h,v*h*p+g*u,v*p*p+m]}var tu={exports:{}},l2=tu.exports,O_;function Gy(){return O_||(O_=1,(function(s){(function(){var t,n,a,o,c,u,h,p,m,g,v,_,y,b,T,M,x,O,D,w,q,I,P,X,L,C,k,ct,ot,_t,bt,B,rt;[D,O,b,c,x,t]=[0,1,2,3,4,5],[k,P,L,q,m,v,h,y]=[0,1,2,3,4,5,6,7],[C,I,X,w,_,p,g,u,M,T,n,a]=[0,1,2,3,4,5,6,7,8,9,10,11],[ot,bt,rt]=(function(){var K,Rt,Nt,N,at,et;return et=function(z){return z-1},at=function(z){return et(9)+z},Nt=function(z){return at(9)+z},Rt=function(z){return Nt(9)+z},N=function(z){return Rt(9)+z},K=function(z){return N(9)+z},[[4,13,22,31,40,49],[[et(9),at(1),Nt(3)],[et(7),Nt(1),N(3)],[et(1),N(1),K(3)],[et(3),K(1),at(3)],[Rt(3),Nt(9),at(7)],[Rt(1),N(9),Nt(7)],[Rt(7),K(9),N(7)],[Rt(9),at(9),K(7)]],[[et(6),at(2)],[et(8),Nt(2)],[et(4),N(2)],[et(2),K(2)],[Rt(6),at(8)],[Rt(2),Nt(8)],[Rt(4),N(8)],[Rt(8),K(8)],[Nt(6),at(4)],[Nt(4),N(6)],[K(6),N(4)],[K(4),at(6)]]]})(),ct=["U","R","F","D","L","B"],_t=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],B=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],o=(function(){var K,Rt,Nt;class N{constructor(et){et!=null?this.init(et):this.identity(),this.newCenter=(function(){var z,F;for(F=[],z=0;z<=5;++z)F.push(0);return F})(),this.newCp=(function(){var z,F;for(F=[],z=0;z<=7;++z)F.push(0);return F})(),this.newEp=(function(){var z,F;for(F=[],z=0;z<=11;++z)F.push(0);return F})(),this.newCo=(function(){var z,F;for(F=[],z=0;z<=7;++z)F.push(0);return F})(),this.newEo=(function(){var z,F;for(F=[],z=0;z<=11;++z)F.push(0);return F})()}init(et){return this.center=et.center.slice(0),this.co=et.co.slice(0),this.ep=et.ep.slice(0),this.cp=et.cp.slice(0),this.eo=et.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=(function(){var et,z;for(z=[],et=0;et<=7;++et)z.push(0);return z})(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=(function(){var et,z;for(z=[],et=0;et<=11;++et)z.push(0);return z})()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var et,z,F,Y,W,vt,wt,Ft,Ot,It,Vt;for(Vt=[],F=Y=0;Y<=5;F=++Y)Vt[9*F+4]=ct[this.center[F]];for(F=W=0;W<=7;F=++W)for(et=this.cp[F],Ot=this.co[F],wt=vt=0;vt<=2;wt=++vt)Vt[bt[F][(wt+Ot)%3]]=_t[et][wt];for(F=Ft=0;Ft<=11;F=++Ft)for(z=this.ep[F],Ot=this.eo[F],wt=It=0;It<=1;wt=++It)Vt[rt[F][(wt+Ot)%2]]=B[z][wt];return Vt.join("")}static fromString(et){var z,F,Y,W,vt,wt,Ft,Ot,It,Vt,H,xe,ee,ht;for(Y=new N,W=wt=0;wt<=5;W=++wt)for(vt=Ft=0;Ft<=5;vt=++Ft)et[9*W+4]===ct[vt]&&(Y.center[W]=vt);for(W=Ot=0;Ot<=7;W=++Ot){for(Vt=It=0;It<=2&&!((ht=et[bt[W][Vt]])==="U"||ht==="D");Vt=++It);for(z=et[bt[W][(Vt+1)%3]],F=et[bt[W][(Vt+2)%3]],vt=H=0;H<=7;vt=++H)z===_t[vt][1]&&F===_t[vt][2]&&(Y.cp[W]=vt,Y.co[W]=Vt%3)}for(W=xe=0;xe<=11;W=++xe)for(vt=ee=0;ee<=11;vt=++ee){if(et[rt[W][0]]===B[vt][0]&&et[rt[W][1]]===B[vt][1]){Y.ep[W]=vt,Y.eo[W]=0;break}if(et[rt[W][0]]===B[vt][1]&&et[rt[W][1]]===B[vt][0]){Y.ep[W]=vt,Y.eo[W]=1;break}}return Y}clone(){return new N(this.toJSON())}static random(){return new N().randomize()}isSolved(){var et,z,F,Y,W,vt,wt;for(F=this.clone(),F.move(F.upright()),z=W=0;W<=5;z=++W)if(F.center[z]!==z)return!1;for(et=vt=0;vt<=7;et=++vt)if(F.cp[et]!==et||F.co[et]!==0)return!1;for(Y=wt=0;wt<=11;Y=++wt)if(F.ep[Y]!==Y||F.eo[Y]!==0)return!1;return!0}centerMultiply(et){var z,F,Y;for(Y=F=0;F<=5;Y=++F)z=et.center[Y],this.newCenter[Y]=this.center[z];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(et){var z,F,Y;for(Y=F=0;F<=7;Y=++F)z=et.cp[Y],this.newCp[Y]=this.cp[z],this.newCo[Y]=(this.co[z]+et.co[Y])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(et){var z,F,Y;for(Y=F=0;F<=11;Y=++F)z=et.ep[Y],this.newEp[Y]=this.ep[z],this.newEo[Y]=(this.eo[z]+et.eo[Y])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(et){return this.centerMultiply(et),this.cornerMultiply(et),this.edgeMultiply(et),this}move(et){var z,F,Y,W,vt,wt,Ft,Ot;for(Ft=Nt(et),F=0,W=Ft.length;F<W;F++)for(vt=Ft[F],z=vt/3|0,wt=vt%3,Y=0,Ot=wt;0<=Ot?Y<=Ot:Y>=Ot;0<=Ot?++Y:--Y)this.multiply(N.moves[z]);return this}upright(){var et,z,F,Y,W,vt;for(et=this.clone(),vt=[],z=Y=0;Y<=5&&et.center[z]!==b;z=++Y);switch(z){case c:vt.push("x");break;case D:vt.push("x'");break;case t:vt.push("x2");break;case O:vt.push("y");break;case x:vt.push("y'")}for(vt.length&&et.move(vt[0]),F=W=0;W<=5&&et.center[F]!==D;F=++W);switch(F){case x:vt.push("z");break;case O:vt.push("z'");break;case c:vt.push("z2")}return vt.join(" ")}static inverse(et){var z,F,Y,W,vt,wt,Ft;if(wt=(function(){var Ot,It,Vt,H;for(Vt=Nt(et),H=[],Ot=0,It=Vt.length;Ot<It;Ot++)W=Vt[Ot],z=W/3|0,vt=W%3,H.push(z*3+-(vt-1)+1);return H})(),wt.reverse(),typeof et=="string"){for(Ft="",F=0,Y=wt.length;F<Y;F++)W=wt[F],z=W/3|0,vt=W%3,Ft+=K[z],vt===1?Ft+="2":vt===2&&(Ft+="'"),Ft+=" ";return Ft.substring(0,Ft.length-1)}else return et.length!=null?wt:wt[0]}}return N.prototype.randomize=(function(){var at,et,z,F,Y,W,vt,wt,Ft;return W=function(Ot,It){return Ot+Math.floor(Math.random()*(It-Ot+1))},Ft=function(Ot){var It,Vt;for(It=Ot.length;It!==0;)Vt=W(0,It-1),It-=1,Ot[It],[Ot[It],Ot[Vt]]=[Ot[Vt],Ot[It]]},F=function(Ot){var It,Vt,H,xe,ee,ht,lt;for(ee=0,lt=(function(){var Tt,pt,A;for(A=[],Tt=0,pt=Ot.length-1;0<=pt?Tt<=pt:Tt>=pt;0<=pt?++Tt:--Tt)A.push(!1);return A})();;){for(It=-1,H=xe=0,ht=Ot.length-1;0<=ht?xe<=ht:xe>=ht;H=0<=ht?++xe:--xe)if(!lt[H]){It=H;break}if(It===-1)break;for(Vt=0;!lt[It];)lt[It]=!0,Vt++,It=Ot[It];ee+=Vt+1}return ee},at=function(Ot,It){var Vt;return Vt=F(It)+F(Ot),Vt%2===0},z=function(Ot,It){for(Ft(It),Ft(Ot);!at(Ot,It);)Ft(It),Ft(Ot)},vt=function(Ot,It){var Vt,H,xe,ee;for(xe=0,Vt=H=0,ee=Ot.length-1;0<=ee?H<=ee:H>=ee;Vt=0<=ee?++H:--H)xe+=Ot[Vt]=W(0,It-1)},Y=function(Ot,It){return Ot.reduce(function(Vt,H){return Vt+H})%It===0},et=function(Ot,It){for(vt(Ot,3);!Y(Ot,3);)vt(Ot,3);for(vt(It,2);!Y(It,2);)vt(It,2)},wt=function(){return z(this.cp,this.ep),et(this.co,this.eo),this},wt})(),N.moves=[{center:[0,1,2,3,4,5],cp:[q,k,P,L,m,v,h,y],co:[0,0,0,0,0,0,0,0],ep:[w,C,I,X,_,p,g,u,M,T,n,a],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[m,P,L,k,y,v,h,q],co:[2,0,0,1,1,0,0,2],ep:[M,I,X,w,a,p,g,u,_,T,n,C],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[P,v,L,q,k,m,h,y],co:[1,2,0,0,2,1,0,0],ep:[C,T,X,w,_,M,g,u,I,p,n,a],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[k,P,L,q,v,h,y,m],co:[0,0,0,0,0,0,0,0],ep:[C,I,X,w,p,g,u,_,M,T,n,a],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[k,L,h,q,m,P,v,y],co:[0,1,2,0,0,2,1,0],ep:[C,I,n,w,_,p,T,u,M,X,g,a],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[k,P,q,y,m,v,L,h],co:[0,0,1,2,0,0,2,1],ep:[C,I,X,a,_,p,g,n,M,T,w,u],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[D,b,x,c,t,O],cp:[k,P,L,q,m,v,h,y],co:[0,0,0,0,0,0,0,0],ep:[C,I,X,w,_,p,g,u,T,n,a,M],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[t,O,D,b,x,c],cp:[k,P,L,q,m,v,h,y],co:[0,0,0,0,0,0,0,0],ep:[C,w,X,u,_,I,g,p,M,T,n,a],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[x,D,b,O,c,t],cp:[k,P,L,q,m,v,h,y],co:[0,0,0,0,0,0,0,0],ep:[X,I,g,w,C,p,_,u,M,T,n,a],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],Rt={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},K={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},Nt=function(at){var et,z,F,Y,W,vt,wt;if(typeof at=="string"){for(vt=at.split(/\s+/),wt=[],et=0,z=vt.length;et<z;et++)if(Y=vt[et],Y.length!==0){if(Y.length>2)throw new Error(`Invalid move: ${Y}`);if(F=Rt[Y[0]],F===void 0)throw new Error(`Invalid move: ${Y}`);if(Y.length===1)W=0;else if(Y[1]==="2")W=1;else if(Y[1]==="'")W=2;else throw new Error(`Invalid move: ${Y}`);wt.push(F*3+W)}return wt}else return at.length!=null?at:[at]},N.moves.push(new N().move("R M' L'").toJSON()),N.moves.push(new N().move("U E' D'").toJSON()),N.moves.push(new N().move("F S B'").toJSON()),N.moves.push(new N().move("U E'").toJSON()),N.moves.push(new N().move("R M'").toJSON()),N.moves.push(new N().move("F S").toJSON()),N.moves.push(new N().move("D E").toJSON()),N.moves.push(new N().move("L M").toJSON()),N.moves.push(new N().move("B S'").toJSON()),N}).call(this),s!==null?s.exports=o:this.Cube=o}).call(l2)})(tu)),tu.exports}var pd={},F_;function c2(){return F_||(F_=1,(function(){var s,t,n,a,o,c,u,h,p,m,g,v,_,y,b,T,M,x,O,D,w,q,I,P,X,L,C,k,ct,ot,_t,bt,B,rt,K,Rt,Nt,N,at,et,z,F,Y,W,vt,wt,Ft,Ot,It,Vt,H,xe,ee=[].indexOf;a=this.Cube||Gy(),[B,ct,_t,C,h,m,c,v]=[0,1,2,3,4,5,6,7],[bt,k,ot,L,g,u,p,o,y,_,s,t]=[0,1,2,3,4,5,6,7,8,9,10,11],n=function(ht,lt){var Tt,pt,A;if(ht<lt)return 0;for(lt>ht/2&&(lt=ht-lt),A=1,Tt=ht,pt=1;Tt!==ht-lt;)A*=Tt,A/=pt,Tt--,pt++;return A},et=function(ht){var lt,Tt,pt,A;for(lt=1,Tt=pt=2,A=ht;2<=A?pt<=A:pt>=A;Tt=2<=A?++pt:--pt)lt*=Tt;return lt},F=function(ht,lt){return ht>lt?ht:lt},Vt=function(ht,lt,Tt){var pt,A,E,G,J;for(J=ht[lt],pt=A=E=lt,G=Tt-1;E<=G?A<=G:A>=G;pt=E<=G?++A:--A)ht[pt]=ht[pt+1];return ht[Tt]=J},H=function(ht,lt,Tt){var pt,A,E,G,J;for(J=ht[Tt],pt=A=E=Tt,G=lt+1;E<=G?A<=G:A>=G;pt=E<=G?++A:--A)ht[pt]=ht[pt-1];return ht[lt]=J},Ft=function(ht,lt,Tt,pt=!1){var A,E,G,J,dt,yt;return J=Tt-lt,G=et(J+1),ht==="corners"?(E=7,yt="cp"):(E=11,yt="ep"),dt=(function(){var Lt,j,st;for(st=[],A=Lt=0,j=J;0<=j?Lt<=j:Lt>=j;A=0<=j?++Lt:--Lt)st.push(0);return st})(),function(Lt){var j,st,Pt,gt,zt,Wt,Xt,kt,ne,ce,ge,Q,jt,Et,Dt,Yt,qt,oe,We,Ye,Te,$e,Mn,xi,ln,wn,Jn;if(Lt!=null){for(A=Wt=0,ge=J;0<=ge?Wt<=ge:Wt>=ge;A=0<=ge?++Wt:--Wt)dt[A]=A+lt;for(st=Lt%G,j=Lt/G|0,ne=this[yt],A=Xt=0,Q=E;0<=Q?Xt<=Q:Xt>=Q;A=0<=Q?++Xt:--Xt)ne[A]=-1;for(gt=kt=1,Et=J;1<=Et?kt<=Et:kt>=Et;gt=1<=Et?++kt:--kt)for(zt=st%(gt+1),st=st/(gt+1)|0;zt>0;)H(dt,0,gt),zt--;if(ln=J,pt)for(gt=ce=0,Dt=E;0<=Dt?ce<=Dt:ce>=Dt;gt=0<=Dt?++ce:--ce)Pt=n(E-gt,ln+1),j-Pt>=0&&(ne[gt]=dt[J-ln],j-=Pt,ln--);else for(gt=$e=Yt=E;Yt<=0?$e<=0:$e>=0;gt=Yt<=0?++$e:--$e)Pt=n(gt,ln+1),j-Pt>=0&&(ne[gt]=dt[ln],j-=Pt,ln--);return this}else{for(ne=this[yt],A=Mn=0,qt=J;0<=qt?Mn<=qt:Mn>=qt;A=0<=qt?++Mn:--Mn)dt[A]=-1;if(j=st=ln=0,pt)for(gt=xi=oe=E;oe<=0?xi<=0:xi>=0;gt=oe<=0?++xi:--xi)lt<=(We=ne[gt])&&We<=Tt&&(j+=n(E-gt,ln+1),dt[J-ln]=ne[gt],ln++);else for(gt=wn=0,Ye=E;0<=Ye?wn<=Ye:wn>=Ye;gt=0<=Ye?++wn:--wn)lt<=(Te=ne[gt])&&Te<=Tt&&(j+=n(gt,ln+1),dt[ln]=ne[gt],ln++);for(gt=Jn=jt=J;jt<=0?Jn<=0:Jn>=0;gt=jt<=0?++Jn:--Jn){for(zt=0;dt[gt]!==lt+gt;)Vt(dt,0,gt),zt++;st=(gt+1)*st+zt}return j*G+st}}},b={twist:function(ht){var lt,Tt,pt,A,E,G;if(ht!=null){for(E=0,lt=Tt=6;Tt>=0;lt=--Tt)A=ht%3,ht=ht/3|0,this.co[lt]=A,E+=A;return this.co[7]=(3-E%3)%3,this}else{for(G=0,lt=pt=0;pt<=6;lt=++pt)G=3*G+this.co[lt];return G}},flip:function(ht){var lt,Tt,pt,A,E,G;if(ht!=null){for(E=0,lt=Tt=10;Tt>=0;lt=--Tt)A=ht%2,ht=ht/2|0,this.eo[lt]=A,E+=A;return this.eo[11]=(2-E%2)%2,this}else{for(G=0,lt=pt=0;pt<=10;lt=++pt)G=2*G+this.eo[lt];return G}},cornerParity:function(){var ht,lt,Tt,pt,A,E,G,J,dt;for(dt=0,ht=Tt=A=v,E=B+1;A<=E?Tt<=E:Tt>=E;ht=A<=E?++Tt:--Tt)for(lt=pt=G=ht-1,J=B;G<=J?pt<=J:pt>=J;lt=G<=J?++pt:--pt)this.cp[lt]>this.cp[ht]&&dt++;return dt%2},edgeParity:function(){var ht,lt,Tt,pt,A,E,G,J,dt;for(dt=0,ht=Tt=A=t,E=bt+1;A<=E?Tt<=E:Tt>=E;ht=A<=E?++Tt:--Tt)for(lt=pt=G=ht-1,J=bt;G<=J?pt<=J:pt>=J;lt=G<=J?++pt:--pt)this.ep[lt]>this.ep[ht]&&dt++;return dt%2},URFtoDLF:Ft("corners",B,m),URtoUL:Ft("edges",bt,ot),UBtoDF:Ft("edges",L,u),URtoDF:Ft("edges",bt,u),FRtoBR:Ft("edges",y,t,!0)};for(z in b)xe=b[z],a.prototype[z]=xe;Rt=function(ht,lt,Tt){var pt,A,E,G,J,dt,yt,Lt,j,st,Pt;for(pt=ht==="corners"?"cornerMultiply":"edgeMultiply",A=new a,Pt=[],E=dt=0,st=Tt-1;0<=st?dt<=st:dt>=st;E=0<=st?++dt:--dt){for(A[lt](E),G=[],J=Lt=0;Lt<=5;J=++Lt){for(yt=a.moves[J],j=0;j<=2;++j)A[pt](yt),G.push(A[lt]());A[pt](yt)}Pt.push(G)}return Pt},Y=(function(){var ht,lt;return ht=new a,lt=new a,function(Tt,pt){var A,E;for(ht.URtoUL(Tt),lt.UBtoDF(pt),A=E=0;E<=7;A=++E)if(ht.ep[A]!==-1){if(lt.ep[A]!==-1)return-1;lt.ep[A]=ht.ep[A]}return lt.URtoDF()}})(),w=2187,T=2048,x=2,M=11880,O=495,D=24,I=20160,P=20160,X=1320,q=1320,a.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},W={twist:["corners",w],flip:["edges",T],FRtoBR:["edges",M],URFtoDLF:["corners",I],URtoDF:["edges",P],URtoUL:["edges",X],UBtoDF:["edges",q],mergeURtoDF:[]},a.computeMoveTables=function(...ht){var lt,Tt,pt,A,E,G;for(ht.length===0&&(ht=(function(){var J;J=[];for(pt in W)J.push(pt);return J})()),Tt=0,lt=ht.length;Tt<lt;Tt++)G=ht[Tt],this.moveTables[G]===null&&(G==="mergeURtoDF"?this.moveTables.mergeURtoDF=(function(){var J,dt,yt,Lt;for(Lt=[],dt=yt=0;yt<=335;dt=++yt)Lt.push((function(){var j,st;for(st=[],J=j=0;j<=335;J=++j)st.push(Y(dt,J));return st})());return Lt})():([A,E]=W[G],this.moveTables[G]=Rt(A,G,E)));return this},rt=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],vt=(function(){var ht,lt,Tt,pt,A,E,G,J;for(J=[],lt=Tt=0;Tt<=5;lt=++Tt){for(pt=[],ht=A=0;A<=5;ht=++A)if(ht!==lt&&ht!==lt-3)for(G=E=0;E<=2;G=++E)pt.push(ht*3+G);J.push(pt)}return J})(),K=[0,1,2,4,7,9,10,11,13,16],wt=(function(){var ht,lt,Tt,pt,A,E,G,J,dt,yt;for(yt=[],lt=pt=0;pt<=5;lt=++pt){for(A=[],ht=E=0;E<=5;ht=++E)if(ht!==lt&&ht!==lt-3)for(dt=ht===0||ht===3?[0,1,2]:[1],G=0,Tt=dt.length;G<Tt;G++)J=dt[G],A.push(ht*3+J);yt.push(A)}return yt})(),Ot=function(ht,lt,Tt){var pt,A,E;return pt=lt%8,E=lt>>3,A=pt<<2,Tt!=null?(ht[E]&=~(15<<A),ht[E]|=Tt<<A,Tt):(ht[E]&15<<A)>>>A},Nt=function(ht,lt,Tt,pt){var A,E,G,J,dt,yt,Lt,j,st,Pt,gt,zt;for(zt=(function(){var Wt,Xt,kt;for(kt=[],Wt=0,Xt=Math.ceil(lt/8)-1;0<=Xt?Wt<=Xt:Wt>=Xt;0<=Xt?++Wt:--Wt)kt.push(4294967295);return kt})(),ht===1?j=rt:j=K,E=0,Ot(zt,0,E),G=1;G!==lt;){for(J=yt=0,gt=lt-1;0<=gt?yt<=gt:yt>=gt;J=0<=gt?++yt:--yt)if(Ot(zt,J)===E)for(A=Tt(J),Pt=0,dt=j.length;Pt<dt;Pt++)Lt=j[Pt],st=pt(A,Lt),Ot(zt,st)===15&&(Ot(zt,st,E+1),G++);E++}return zt},a.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},It={sliceTwist:[1,O*w,function(ht){return[ht%O,ht/O|0]},function(ht,lt){var Tt,pt,A,E;return[A,E]=ht,Tt=a.moveTables.FRtoBR[A*24][lt]/24|0,pt=a.moveTables.twist[E][lt],pt*O+Tt}],sliceFlip:[1,O*T,function(ht){return[ht%O,ht/O|0]},function(ht,lt){var Tt,pt,A,E;return[E,Tt]=ht,A=a.moveTables.FRtoBR[E*24][lt]/24|0,pt=a.moveTables.flip[Tt][lt],pt*O+A}],sliceURFtoDLFParity:[2,D*I*x,function(ht){return[ht%2,(ht/2|0)%D,(ht/2|0)/D|0]},function(ht,lt){var Tt,pt,A,E,G,J;return[G,J,Tt]=ht,pt=a.moveTables.parity[G][lt],A=a.moveTables.FRtoBR[J][lt],E=a.moveTables.URFtoDLF[Tt][lt],(E*D+A)*2+pt}],sliceURtoDFParity:[2,D*P*x,function(ht){return[ht%2,(ht/2|0)%D,(ht/2|0)/D|0]},function(ht,lt){var Tt,pt,A,E,G,J;return[G,J,Tt]=ht,pt=a.moveTables.parity[G][lt],A=a.moveTables.FRtoBR[J][lt],E=a.moveTables.URtoDF[Tt][lt],(E*D+A)*2+pt}]},a.computePruningTables=function(...ht){var lt,Tt,pt,A,E;for(ht.length===0&&(ht=(function(){var G;G=[];for(pt in It)G.push(pt);return G})()),Tt=0,lt=ht.length;Tt<lt;Tt++)E=ht[Tt],this.pruningTables[E]===null&&(A=It[E],this.pruningTables[E]=Nt(...A));return this},a.initSolver=function(){return a.computeMoveTables(),a.computePruningTables()},a.prototype.solveUpright=function(ht=22){var lt,Tt,pt,A,E,G,J,dt,yt;return pt=(function(){var Lt,j,st,Pt,gt,zt,Wt;for(j=["U","R","F","D","L","B"],zt=["","2","'"],Wt=[],Lt=st=0;st<=5;Lt=++st)for(gt=Pt=0;Pt<=2;gt=++Pt)Wt.push(j[Lt]+zt[gt]);return Wt})(),lt=class{constructor(j){this.parent=null,this.lastMove=null,this.depth=0,j&&this.init(j)}init(j){return this.flip=j.flip(),this.twist=j.twist(),this.slice=j.FRtoBR()/D|0,this.parity=j.cornerParity(),this.URFtoDLF=j.URFtoDLF(),this.FRtoBR=j.FRtoBR(),this.URtoUL=j.URtoUL(),this.UBtoDF=j.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+pt[this.lastMove]+" ":""}move(j,st,Pt){return a.moveTables[j][st][Pt]}pruning(j,st){return Ot(a.pruningTables[j],st)}moves1(){return this.lastMove!==null?vt[this.lastMove/3|0]:rt}minDist1(){var j,st;return j=this.pruning("sliceFlip",O*this.flip+this.slice),st=this.pruning("sliceTwist",O*this.twist+this.slice),F(j,st)}next1(j){var st;return st=Tt.pop(),st.parent=this,st.lastMove=j,st.depth=this.depth+1,st.flip=this.move("flip",this.flip,j),st.twist=this.move("twist",this.twist,j),st.slice=this.move("FRtoBR",this.slice*24,j)/24|0,st}moves2(){return this.lastMove!==null?wt[this.lastMove/3|0]:K}minDist2(){var j,st,Pt,gt;return Pt=(D*this.URtoDF+this.FRtoBR)*x+this.parity,j=this.pruning("sliceURtoDFParity",Pt),gt=(D*this.URFtoDLF+this.FRtoBR)*x+this.parity,st=this.pruning("sliceURFtoDLFParity",gt),F(j,st)}init2(j=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),j))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(j){var st;return st=Tt.pop(),st.parent=this,st.lastMove=j,st.depth=this.depth+1,st.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,j),st.FRtoBR=this.move("FRtoBR",this.FRtoBR,j),st.parity=this.move("parity",this.parity,j),st.URtoDF=this.move("URtoDF",this.URtoDF,j),st}},dt=null,E=function(Lt){var j,st,Pt,gt;for(j=0,gt=[],j=st=1,Pt=ht;(1<=Pt?st<=Pt:st>=Pt)&&(A(Lt,j),dt===null);j=1<=Pt?++st:--st)gt.push(j++);return gt},A=function(Lt,j){var st,Pt,gt,zt,Wt,Xt,kt;if(j===0){if(Lt.minDist1()===0&&(Lt.lastMove===null||(Wt=Lt.lastMove,ee.call(K,Wt)<0)))return J(Lt)}else if(j>0&&Lt.minDist1()<=j){for(Xt=Lt.moves1(),kt=[],Pt=0,st=Xt.length;Pt<st&&(gt=Xt[Pt],zt=Lt.next1(gt),A(zt,j-1),Tt.push(zt),dt===null);Pt++)kt.push(void 0);return kt}},J=function(Lt){var j,st,Pt,gt;for(Lt.init2(),gt=[],j=st=1,Pt=ht-Lt.depth;(1<=Pt?st<=Pt:st>=Pt)&&(G(Lt,j),dt===null);j=1<=Pt?++st:--st)gt.push(j++);return gt},G=function(Lt,j){var st,Pt,gt,zt,Wt,Xt;if(j===0){if(Lt.minDist2()===0)return dt=Lt.solution()}else if(j>0&&Lt.minDist2()<=j){for(Wt=Lt.moves2(),Xt=[],Pt=0,st=Wt.length;Pt<st&&(gt=Wt[Pt],zt=Lt.next2(gt),G(zt,j-1),Tt.push(zt),dt===null);Pt++)Xt.push(void 0);return Xt}},Tt=(function(){var Lt,j,st;for(st=[],Lt=0,j=ht+1;0<=j?Lt<=j:Lt>=j;0<=j?++Lt:--Lt)st.push(new lt);return st})(),yt=Tt.pop().init(this),E(yt),Tt.push(yt),dt.length>0&&(dt=dt.substring(0,dt.length-1)),dt},at={U:0,R:1,F:2,D:3,L:4,B:5},N={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},a.prototype.solve=function(ht=22){var lt,Tt,pt,A,E,G,J,dt,yt;for(lt=this.clone(),dt=lt.upright(),lt.move(dt),G=new a().move(dt).center,yt=lt.solveUpright(ht),J=[],E=yt.split(" "),pt=0,Tt=E.length;pt<Tt;pt++)A=E[pt],J.push(N[G[at[A[0]]]]),A.length>1&&(J[J.length-1]+=A[1]);return J.join(" ")},a.scramble=function(){return a.inverse(a.random().solve())}}).call(pd)),pd}var md,P_;function u2(){return P_||(P_=1,md=Gy(),c2()),md}var f2=u2();const h2=dM(f2);function d2(s){const t=new Array(9);for(let n=0;n<3;n++)for(let a=0;a<3;a++)t[a*3+(2-n)]=s[n*3+a];return t}function p2(s){const t=[s];let n=s;for(let a=0;a<3;a++)n=d2(n),t.push(n);return t}const m2=["U","R","F","D","L","B"],Ur=[0,1,2,3,5,6,7,8],g2={U:"W",R:"R",F:"G",D:"Y",L:"O",B:"B"};function v2(){return{orientationLocks:{},lockMissFrames:{},stepAnchorFace:null,sawPreMoveAlignment:!1}}function kc(s){s.orientationLocks={},s.lockMissFrames={},s.stepAnchorFace=null,s.sawPreMoveAlignment=!1}function Qo(s,t){const n=m2.indexOf(t);return[...s.slice(n*9,n*9+9)].map(o=>g2[o])}function _2(s,t,n){if(!s||s.length!==54||n.length!==9)return 0;const a=Qo(s,t),o=[a,qo(a)];let c=0;for(const u of o){const h=Xy(n,u,Ur);c=Math.max(c,h.matches/Ur.length)}return c}function Up(s,t){const n=h2.fromString(s);return n.move(t),n.asString()}function y2(s){if(s.length===0)return null;const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o=s[0][n],c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}function Vy(s,t){const n=[];for(let a=0;a<9;a++)s[a]!==t[a]&&n.push(a);return n}function x2(s,t){const n=[];for(let a=0;a<9;a++)s[a]===t[a]&&n.push(a);return n}function S2(s,t,n){return Vy(Qo(s,n),Qo(Up(s,t),n)).length}function ky(s){const t=new Set,n=[];for(const a of[s,qo(s)])for(const o of p2(a)){const c=o.join("");t.has(c)||(t.add(c),n.push(o))}return n}function M2(s,t){return ky(s)[t]??s}function Ls(s,t,n){let a=0;for(const o of n)s[o]===t[o]&&a++;return a}function Xy(s,t,n){let a={index:0,matches:0,oriented:s};return ky(s).forEach((o,c)=>{const u=Ls(o,t,n);u>a.matches&&(a={index:c,matches:u,oriented:o})}),a}function Wy(s,t){const n=[...s].sort().join(""),a=[...t].sort().join("");return n!==a?!1:Ur.filter(c=>s[c]===t[c]).length<=2}function E2(s,t,n,a,o){if(o.length>0){const u=Ls(s,t,o),h=o.length===1?1:Math.ceil(o.length*.9);if(u<h)return!1}if(o.length>=4&&Ur.filter(h=>s[h]!==t[h]).length>a.length+1)return!1;const c=Ls(s,n,a);return!(c<Math.ceil(a.length*.65)||Wy(s,t)&&c<a.length)}function b2(s,t,n,a,o){const c=Qo(s,n),u=Qo(Up(s,t),n),h=Vy(c,u),p=x2(c,u);if(h.length===0)return{progress:0,completed:!1,rejectedWholeCube:!1};const m=[{before:c,after:u},{before:qo(c),after:qo(u)}];let g={progress:0,completed:!1,rejectedWholeCube:!1};const v=o.orientationLocks[n]??null;for(const _ of m){let y;if(v!==null)y=M2(a,v);else{const w=Xy(a,_.before,Ur);y=w.oriented,w.matches>=6&&(o.orientationLocks[n]=w.index,o.lockMissFrames[n]=0)}const b=Ls(y,_.before,Ur),T=Ls(y,_.after,h),M=T/h.length;if(b>=6&&(o.sawPreMoveAlignment=!0),!E2(y,_.before,_.after,h,p)){(Wy(y,_.before)||p.length>=3)&&(g={progress:0,completed:!1,rejectedWholeCube:!0});continue}const O=Ls(y,_.after,Ur),D=o.sawPreMoveAlignment&&T>=Math.ceil(h.length*.65)&&O>b&&O>=5;(D||M>g.progress)&&(g={progress:D?1:M,completed:D,rejectedWholeCube:!1}),o.orientationLocks[n]!==void 0&&(b<4?(o.lockMissFrames[n]=(o.lockMissFrames[n]??0)+1,(o.lockMissFrames[n]??0)>8&&(delete o.orientationLocks[n],delete o.lockMissFrames[n])):o.lockMissFrames[n]=0)}return g}function T2(s,t,n,a,o){if(!s||s.length!==54)return{progress:0,completed:!1,visibleFace:a,comparisonFace:null,rejectedWholeCube:!1};if(a){if(o.stepAnchorFace===null)o.stepAnchorFace=a;else if(a!==o.stepAnchorFace&&!o.sawPreMoveAlignment)return{progress:0,completed:!1,visibleFace:a,comparisonFace:null,rejectedWholeCube:!0}}const c=Sd.filter(g=>S2(s,t,g)>0),u=Dr(t),h=Object.keys(n),p=[...h.filter(g=>c.includes(g)),u,...c.filter(g=>g!==u&&!h.includes(g))].filter((g,v,_)=>c.includes(g)&&_.indexOf(g)===v);let m={progress:0,completed:!1,visibleFace:a,comparisonFace:null,rejectedWholeCube:!1};for(const g of p){const v=n[g];if(!v||v.length!==9)continue;const _=b2(s,t,g,v,o);if(_.rejectedWholeCube)return{progress:0,completed:!1,visibleFace:a,comparisonFace:g,rejectedWholeCube:!0};if((_.completed||_.progress>m.progress)&&(m={progress:_.progress,completed:_.completed,visibleFace:a,comparisonFace:g,rejectedWholeCube:!1},_.completed))break}return m}function A2(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-B2h2yb51.js",import.meta.url),{type:"module"})}const qy=["R","O","Y","G","B","W"],R2={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function Yy(){return mp()?kM():R2}function C2(s,t,n){const a=gd(s/255),o=gd(t/255),c=gd(n/255);return[a*.4124564+o*.3575761+c*.1804375,a*.2126729+o*.7151522+c*.072175,a*.0193339+o*.119192+c*.9503041]}function gd(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function w2(s,t,n){const u=vd(s/.95047),h=vd(t/1),p=vd(n/1.08883);return[116*h-16,500*(u-h),200*(h-p)]}function vd(s){return s>.008856?s**(1/3):7.787*s+16/116}function jy(s,t,n){const[a,o,c]=C2(s,t,n);return w2(a,o,c)}function Zy(s,t){const n=s[0]-t[0],a=s[1]-t[1],o=s[2]-t[2];return Math.sqrt(n*n+a*a+o*o)}function D2(s,t,n){const a=s/255,o=t/255,c=n/255,u=Math.max(a,o,c),h=Math.min(a,o,c),p=u-h;let m=0;p>0&&(u===a?m=(o-c)/p%6:u===o?m=(c-a)/p+2:m=(a-o)/p+4,m*=60,m<0&&(m+=360));const g=u===0?0:p/u*255,v=u*255;return[m,g,v]}function z_(s,t,n){const a=jy(s,t,n),o=Yy();let c="W",u=1/0;for(const h of qy){const p=Zy(a,o[h]);p<u&&(u=p,c=h)}return c}function Ky(s,t,n){const a=Math.max(s,t,n),o=Math.min(s,t,n);return a<38||a<70&&a-o<22}function U2(s,t,n){const a=Math.max(s,t,n),o=Math.min(s,t,n),c=a-o,u=(s+t+n)/3;return a<125||c>42||n>s+22&&n>t+12||s>t+22&&s>n+22||t>s+18&&t>n+18?!1:u>145&&c<38}function L2(s,t,n,a){const o=jy(s,t,n);return 1/(1+Zy(o,Yy()[a]))}function Wo(s,t,n){if(Ky(s,t,n)||mp())return z_(s,t,n);const[a,o]=D2(s,t,n),c=o/255;if(U2(s,t,n))return"W";const u=new Map;for(const m of qy)u.set(m,L2(s,t,n,m));n>=s+14&&n>=t+10&&n>75&&u.set("B",(u.get("B")??0)+.55),s>=t+12&&s>=n+12&&s>85&&u.set("R",(u.get("R")??0)+.45),t>=s+10&&t>=n+10&&t>70&&u.set("G",(u.get("G")??0)+.45),s>95&&t>85&&n<Math.min(s,t)-18&&u.set("Y",(u.get("Y")??0)+.55),s>t+8&&t>n+5&&s>110&&a>=8&&a<42&&u.set("O",(u.get("O")??0)+.45),c>.18&&(a>=38&&a<=72&&u.set("Y",(u.get("Y")??0)+.25),a>=10&&a<38&&u.set("O",(u.get("O")??0)+.2),(a<=12||a>=345)&&u.set("R",(u.get("R")??0)+.2),a>=78&&a<=155&&u.set("G",(u.get("G")??0)+.2),a>=165&&a<=255&&u.set("B",(u.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,g]of u)g>p&&(p=g,h=m);return h}function _d(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function N2(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function O2(s,t,n){const a=Math.max(s,t,n)-Math.min(s,t,n);return a>52?.15:a>36?.55:1}function F2(s,t,n,a,o,c){const u=new Map,h=[],p=[],m=[],v=o-n>40?1:2;for(let T=Math.floor(a);T<Math.floor(c);T+=v)for(let M=Math.floor(n);M<Math.floor(o);M+=v){const x=(T*t+M)*4,O=s[x],D=s[x+1],w=s[x+2];if(Ky(O,D,w))continue;h.push(O),p.push(D),m.push(w);const q=Wo(O,D,w),I=O2(O,D,w);u.set(q,(u.get(q)??0)+I)}if(h.length===0){const T=Math.floor((n+o)/2),x=(Math.floor((a+c)/2)*t+T)*4;return Wo(s[x],s[x+1],s[x+2])}const _=Wo(_d(h),_d(p),_d(m));u.set(_,(u.get(_)??0)+3);let y=_,b=0;for(const[T,M]of u)M>b&&(b=M,y=T);return y}function P2(s,t,n){const o=s.getImageData(0,0,t,n).data,c=[],u=t/3,h=n/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=N2(p,m),v=m*u+u*g,_=m*u+u*(1-g),y=p*h+h*g,b=p*h+h*(1-g);c.push(F2(o,t,v,y,_,b))}return c}function sl(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function z2(s){const t=sl();for(const n of s)t[n]++;return t}function Qy(s){return!!(s&&s.length===9)}function B2(s){if(!Qy(s))return{valid:!1,colorCounts:sl(),detectedCenter:null,uniqueColors:0};const t=z2(s),n=Object.values(t).filter(a=>a>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:n}}const I2={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},ol=["W","Y","R","O","G","B"],pu=9,H2={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function Lp(s){const t=sl();for(const n of s.values())for(const a of n)t[a]++;return t}function G2(s,t){return H2[s][t]??6}function V2(s){let t=null,n=0;for(const a of ol){const o=s[a]-pu;o>n&&(n=o,t=a)}return t}function k2(s){let t=null,n=0;for(const a of ol){const o=pu-s[a];o>n&&(n=o,t=a)}return t}function Jy(s){return ol.every(t=>s[t]===pu)}function X2(s){const t=new Map;for(const[a,o]of s){const c=[...o];c[4]=I2[a],t.set(a,c)}const n=[];for(const[a,o]of t)for(let c=0;c<9;c++)c!==4&&n.push({faceId:a,index:c,color:o[c]});for(let a=0;a<256;a++){const o=Lp(t);if(Jy(o))break;const c=V2(o),u=k2(o);if(!c||!u)break;let h=null,p=1/0;for(const m of n){if(m.color!==c)continue;const g=G2(c,u);g<p&&(p=g,h=m)}if(!h){const m=n.find(g=>g.color===c);if(!m)break;h=m}h.color=u,t.get(h.faceId)[h.index]=u}return t}function W2(s){const t=Lp(s),n=sl();for(const a of ol)n[a]=t[a]-pu;return n}function B_(s){return Jy(Lp(s))}function q2(s){const t=W2(s),n={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},a=ol.filter(o=>t[o]!==0).map(o=>{const c=t[o];return`${n[o]}${c>0?`+${c}`:c}`});return a.length>0?a.join(", "):""}const Rs=256;function $y(s,t){const n=document.createElement("canvas");n.width=Rs,n.height=Rs;const a=n.getContext("2d",{willReadFrequently:!0});return a?(a.drawImage(s,t.x,t.y,t.size,t.size,0,0,Rs,Rs),P2(a,Rs,Rs)):[]}function tx(s,t){const n=s.getContext("2d",{willReadFrequently:!0});if(!n)return 0;const{x:a,y:o,size:c}=t,u=n.getImageData(Math.floor(a),Math.floor(o),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let v=0;v<u.length;v+=32){const _=(u[v]+u[v+1]+u[v+2])/3;h+=_,p+=_*_,m++}if(m===0)return 0;const g=h/m;return p/m-g*g}function ex(s,t){if(s.length!==9)return!1;const n=new Set(s),a=s.filter(o=>o!=="W").length;return t<120?!1:n.size===1?!0:n.size===2&&a<=3&&t<300?!1:n.size>=3&&a>=2||n.size>=2&&a>=4&&t>220}function Y2(s){const t=(o,c)=>Math.hypot(o.x-c.x,o.y-c.y),n=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],a=n.reduce((o,c)=>o+c,0)/4;return a<1?!1:n.every(o=>Math.abs(o-a)/a<.55)}function j2(s,t,n,a){const o=n*a;let c=null,u=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<o*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const v of[.02,.035,.05,.08]){const _=new t.Mat;if(t.approxPolyDP(p,_,v*g,!0),_.rows===4){const y=[];for(let T=0;T<4;T++)y.push({x:_.data32S[T*2],y:_.data32S[T*2+1]});const b=YC(y);b&&Y2(b)&&m>u&&(u=m,c=b)}_.delete()}p.delete()}return c}function I_(s,t,n){var a;if(!((a=window.cv)!=null&&a.Mat))return null;try{const o=window.cv,c=o.imread(s),u=new o.Mat,h=new o.Mat,p=new o.Mat,m=new o.Mat,g=new o.MatVector,v=new o.Mat;o.cvtColor(c,u,o.COLOR_RGBA2RGB),o.cvtColor(u,h,o.COLOR_RGB2GRAY),o.GaussianBlur(h,p,new o.Size(5,5),0),o.Canny(p,m,20,80),o.findContours(m,g,v,o.RETR_LIST,o.CHAIN_APPROX_SIMPLE);const _=j2(g,o,t,n);return c.delete(),u.delete(),h.delete(),p.delete(),m.delete(),g.delete(),v.delete(),_}catch{return null}}function Z2(s,t,n){const a=Is(t,n),o=$y(s,a),c=tx(s,a);return ex(o,c)?{corners:Z_(a),colors:o}:null}function nx(s,t,n,a){const o=Is(t,n,a),c=document.createElement("canvas");c.width=o.size,c.height=o.size;const u=c.getContext("2d");if(u){u.drawImage(s,o.x,o.y,o.size,o.size,0,0,o.size,o.size);const m=I_(c,o.size,o.size);if(m)return UM(m,o.x,o.y)}const h=I_(s,t,n);if(h)return h;const p=Z2(s,t,n);return(p==null?void 0:p.corners)??null}function H_(s,t,n,a,o=!1){const c=Is(t,n,a),u=$y(s,c),h=tx(s,c),p=ex(u,h),m=!!(u[4]&&pa(u[4])),g=new Set(u).size,v=o&&u.length===9&&(m||g>=3)&&h>=40;if(!p&&!v)return null;const _=nx(s,t,n,a),y=u[4]?pa(u[4]):null,b=By(_??Z_(c),t,n,y);return b.confidence=_?.85:.7,{colors:u,pose:b}}function K2(s){const t=window.cv,n=t.imread(s),a=new t.Mat;return t.cvtColor(n,a,t.COLOR_RGBA2GRAY),n.delete(),a}const G_=45;class Q2{constructor(){Ee(this,"prevGray",null);Ee(this,"trackedCorners",null);Ee(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,n){var g;const a=window.cv;if(n)return this.trackedCorners=n,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),n;if(!this.prevGray||!this.trackedCorners)return null;const o=a.matFromArray(4,1,a.CV_32FC2,J2(this.trackedCorners)),c=new a.Mat,u=new a.Mat,h=new a.Mat;a.calcOpticalFlowPyrLK(this.prevGray,t,o,c,u,h);const p=[];let m=0;for(let v=0;v<4;v++){const _=u.data[v]===1,y=c.data32F[v*2],b=c.data32F[v*2+1];_&&Number.isFinite(y)&&Number.isFinite(b)?(p.push({x:y,y:b}),m++):p.push(this.trackedCorners[v])}return o.delete(),c.delete(),u.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>G_?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames=0,this.lostFrames>G_?(this.reset(),null):this.trackedCorners)}}function J2(s){return s.flatMap(t=>[t.x,t.y])}function ua(s,t,n){return s*(1-n)+t*n}function $2(s,t,n){return s.map((a,o)=>({x:ua(a.x,t[o].x,n),y:ua(a.y,t[o].y,n)}))}class tw{constructor(){Ee(this,"state",null)}reset(){this.state=null}update(t,n=.38){if(!this.state||t.confidence<.4)return this.state=t,t;const a=t.confidence>.75?n:n*.55,o=t.rotationMatrix.map((g,v)=>ua(this.state.rotationMatrix[v],g,a)),c=[ua(this.state.translation[0],t.translation[0],a),ua(this.state.translation[1],t.translation[1],a),ua(this.state.translation[2],t.translation[2],a)],u=$2(this.state.corners,t.corners,a),h={x:ua(this.state.center.x,t.center.x,a),y:ua(this.state.center.y,t.center.y,a)},p=ua(this.state.size,t.size,a),m={...t,corners:u,center:h,size:p,rotationMatrix:o,translation:c,confidence:Math.max(this.state.confidence,t.confidence)*.92+t.confidence*.08};return this.state=m,m}}const ew=.9,nw=12,iw=10,aw=.28,rw=.82,sw=.8,V_=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];class ow{constructor(){Ee(this,"state",{lastMatrix:N_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0});Ee(this,"initialized",!1);Ee(this,"expectedMove",null)}reset(){this.state={lastMatrix:N_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0},this.initialized=!1,this.expectedMove=null}setExpectedMove(t){this.expectedMove=t,this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,this.initialized=!0}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,{completedMove:null,progress:0,wrongMove:null};const n=s2(cw(t),this.state.lastMatrix);if(ix(n)<aw)return this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:null,progress:0,wrongMove:null};const o=this.expectedMove?lw(n,this.expectedMove):0,c=this.expectedMove?[this.expectedMove]:V_,u=k_(n,c);if(u){const h=du(u),p=Math.abs(ax(n,h)),m=Math.abs(hu(u))*rw;if(p<m||o<sw)return this.state.pendingMove=null,this.state.stableCount=0,{completedMove:null,progress:o,wrongMove:null};if(this.state.pendingMove===u){if(this.state.stableCount++,this.state.stableCount>=nw)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:u,progress:1,wrongMove:null}}else this.state.pendingMove=u,this.state.stableCount=1;this.state.wrongMove=null,this.state.wrongStableCount=0}else if(this.expectedMove){const h=k_(n,V_);if(h&&h!==this.expectedMove){if(this.state.wrongMove===h?this.state.wrongStableCount++:(this.state.wrongMove=h,this.state.wrongStableCount=1),this.state.wrongStableCount>=iw)return{completedMove:null,progress:o,wrongMove:h}}else this.state.wrongMove=null,this.state.wrongStableCount=0;this.state.pendingMove=null,this.state.stableCount=0}else this.state.pendingMove=null,this.state.stableCount=0;return{completedMove:null,progress:o,wrongMove:null}}}function ix(s){const t=s[0]+s[4]+s[8],n=Math.max(-1,Math.min(1,(t-1)/2));return Math.acos(n)}function ax(s,t){const n=ix(s),a=Math.sin(n);if(Math.abs(a)<1e-5)return 0;const o=[(s[7]-s[5])/(2*a),(s[2]-s[6])/(2*a),(s[3]-s[1])/(2*a)];return(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])*n}function lw(s,t){const n=du(t),a=hu(t),o=ax(s,n);return Math.abs(a)<1e-6||Math.sign(o)!==Math.sign(a)&&Math.abs(o)>.15?0:Math.min(1,Math.abs(o)/Math.abs(a))}function cw(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function k_(s,t){let n=null,a=ew;for(const o of t){const c=du(o),u=o2(c,hu(o)),h=uw(s,u);h>a&&(a=h,n=o)}return n}function uw(s,t){let n=0;for(let a=0;a<9;a++)n+=1-Math.abs(s[a]-t[a])/2;return n/9}function X_(s,t,n){return s+(t-s)*n}function yd(s,t,n){return{x:X_(s.x,t.x,n),y:X_(s.y,t.y,n)}}function fw(s,t,n,a,o,c){const u=yd(s,t,o),h=yd(a,n,o);return yd(u,h,c)}function xd(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function hw(s,t,n,a,o,c){const u=Math.max(0,Math.floor(a-c)),h=Math.min(t,Math.ceil(a+c)),p=Math.max(0,Math.floor(o-c)),m=Math.min(n,Math.ceil(o+c)),g=[],v=[],_=[];for(let y=p;y<m;y+=2)for(let b=u;b<h;b+=2){const T=(y*t+b)*4,M=s[T],x=s[T+1],O=s[T+2];Math.max(M,x,O)<35||(g.push(M),v.push(x),_.push(O))}if(g.length===0){const y=Math.max(0,Math.min(t-1,Math.floor(a))),T=(Math.max(0,Math.min(n-1,Math.floor(o)))*t+y)*4;return Wo(s[T],s[T+1],s[T+2])}return Wo(xd(g),xd(v),xd(_))}function dw(s,t,n,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const[c,u,h,p]=a,m=Math.min(Math.hypot(u.x-c.x,u.y-c.y),Math.hypot(p.x-c.x,p.y-c.y));if(m<18)return null;const v=o.getImageData(0,0,t,n).data,_=Math.max(3,m/14),y=[];for(let b=0;b<3;b++)for(let T=0;T<3;T++){const M=(T+.5)/3,x=(b+.5)/3,O=fw(c,u,h,p,M,x);y.push(hw(v,t,n,O.x,O.y,_))}return y}function W_(s,t,n,a){const o={},c=wp(t);for(const u of c){const h=Hy(u,t,n,a);if(!h)continue;const p=dw(s,n,a,h);(p==null?void 0:p.length)===9&&(o[u]=p)}return o}const pw=30,Xc={pose:null,detectedFace:null,rotationMove:null,rotationProgress:0,wrongMove:null,visibleFaceColors:{}};class mw{constructor(){Ee(this,"rotationDetector",new ow);Ee(this,"flowTracker",new Q2);Ee(this,"poseSmoother",new tw);Ee(this,"trackingEnabled",!1);Ee(this,"processCanvas");Ee(this,"processCtx");Ee(this,"lastColors",null);Ee(this,"expectedMove",null);Ee(this,"solvingScanMode",!1);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset(),this.lastColors=null}setSolvingScanMode(t){this.solvingScanMode=t}guideRatio(){return this.solvingScanMode?wM:void 0}setExpectedMove(t){t!==this.expectedMove&&(this.expectedMove=t,this.rotationDetector.setExpectedMove(t))}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const n=t.videoWidth,a=t.videoHeight;return!n||!a?!1:(this.processCanvas.width=n,this.processCanvas.height=a,bv(this.processCtx,t,n,a),!0)}getColorLearnSample(t,n,a){return $_(this.processCanvas,t,n,a)}process(t){const n=t.videoWidth,a=t.videoHeight;if(!n||!a)return{...Xc};this.processCanvas.width=n,this.processCanvas.height=a,bv(this.processCtx,t,n,a);try{if(this.trackingEnabled){const o=this.processWithTracking(n,a);return o.pose||!this.solvingScanMode?o:this.processDetectionOnly(n,a)}return this.processDetectionOnly(n,a)}catch{return{...Xc}}}processDetectionOnly(t,n){const a=this.guideRatio(),o=this.solvingScanMode,c=H_(this.processCanvas,t,n,a,o);if(!c)return{...Xc};this.lastColors=c.colors;const u=W_(this.processCanvas,c.pose,t,n);return{pose:c.pose,detectedFace:c,rotationMove:null,rotationProgress:0,wrongMove:null,visibleFaceColors:u}}processWithTracking(t,n){const a=nx(this.processCanvas,t,n),o=K2(this.processCanvas),c=this.flowTracker.update(o,a);if(o.delete(),!c)return{...Xc};let u=this.lastColors;if(a){const y=H_(this.processCanvas,t,n);y&&(u=y.colors,this.lastColors=u)}const h=u!=null&&u[4]?pa(u[4]):null;let p=By(c,t,n,h);h&&(p={...p,visibleFace:h});const m=this.flowTracker.getLostFrames();p.confidence=a?.85:Math.max(.35,.85-m*.01),p=this.poseSmoother.update(p);const g=u?{colors:u,pose:p}:null,v=this.rotationDetector.update(p.rotationMatrix),_=W_(this.processCanvas,p,t,n);return{pose:p,detectedFace:g,rotationMove:v.completedMove,rotationProgress:v.progress,wrongMove:v.wrongMove,visibleFaceColors:_}}isTrackingLost(){return this.flowTracker.getLostFrames()>pw}readStableFace(t,n=5){const a=[];let o=null;for(let u=0;u<n;u++){const h=this.process(t);if(!h.detectedFace)return null;a.push(h.detectedFace.colors),o=h.detectedFace.pose}return o?{colors:gw(a),pose:o}:null}}function gw(s){const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}const vw=[0,1,2,3,5,6,7,8],Wc=1e3,_w=10,yw=7,xw=6;function Sw(s,t){let n=0;for(const a of vw)s[a]===t[a]&&n++;return n}function Mw(s,t){let n=0;for(let a=0;a<9;a++)s[a]===t[a]&&n++;return n}function Ew(s,t){return Sw(s,t)>=yw}function rx(s,t){for(const[n,a]of t)if(Ew(s,a))return n;return null}function bw(s){const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}function Tw(s){if(s.length===0)return null;const t=new Map;for(const o of s){const c=o[4];t.set(c,(t.get(c)??0)+1)}let n=null,a=0;for(const[o,c]of t)c>a&&(a=c,n=o);return n}function Aw(s,t,n){if(rx(s,t))return null;for(const a of[Tw(n),s[4]]){if(!a)continue;const o=pa(a);if(o&&!t.has(o))return o}return null}function q_(s){if(s.size!==6)return s;const t=new Map,n=new Set,a=[...s.entries()].sort((o,c)=>{const u=pa(o[1][4])===o[0]?0:1,h=pa(c[1][4])===c[0]?0:1;return u-h});for(const[,o]of a){const c=pa(o[4]);c&&!n.has(c)&&(t.set(c,[...o]),n.add(c))}return t.size===6?t:s}class Rw{constructor(){Ee(this,"faces",new Map);Ee(this,"pendingReadings",[]);Ee(this,"stableSinceMs",null);Ee(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,n=Date.now()){const a=Wc/1e3,o={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1,needsClearerCenter:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],o;const c=pa(t[4]),u=rx(t,this.faces);if(u)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...o,currentFace:u,needsNewFace:!0};!this.stabilityAnchor||Mw(t,this.stabilityAnchor)<xw?(this.stabilityAnchor=[...t],this.stableSinceMs=n,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=n);const h=this.stableSinceMs!==null?n-this.stableSinceMs:0,p=Math.min(h,Wc)/1e3;let m=null,g=!1;if(h>=Wc){const v=[...this.pendingReadings,[...t]];v.length>_w&&v.shift(),this.pendingReadings=v;const _=bw(v),y=Aw(_,this.faces,v);if(y){const b=!this.faces.has(y);this.faces.set(y,[..._]),b&&(m=y),this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}else g=!0,this.stableSinceMs=n-Wc+400}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1,needsClearerCenter:g}}}const Cw="https://docs.opencv.org/4.9.0/opencv.js";let qc=null;function ww(){return qc||(qc=new Promise((s,t)=>{var a;if((a=window.cv)!=null&&a.Mat){s();return}const n=document.createElement("script");n.src=Cw,n.async=!0,n.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},n.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(n)}),qc)}function Y_(s){return Object.fromEntries(K_(s))}const Vo={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:sl(),cellColors:[]},eu={tracking:"searching",rotationProgress:0,wrongMove:null,visibleFace:null,faceMatchesMove:!1,liveFaceColors:null,visibleFaceColors:{},visibleFaces:[],stableVisibleFaceColors:{},poseRotationProgress:0,faceScanInfos:[]},Dw={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:Vo,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,liveScanNeedsClearerCenter:!1,solvingFeedback:eu,solvingFacelet:""};function Uw(s){const[t,n]=Jt.useState(Dw),a=Jt.useRef(null),o=Jt.useRef(null),c=Jt.useRef(new Rw),u=Jt.useRef(""),h=Jt.useRef(0),p=Jt.useRef(0),m=Jt.useRef("loading"),g=Jt.useRef(0),v=Jt.useRef(null),_=Jt.useRef(0),y=Jt.useRef(0),b=Jt.useRef(null),T=Jt.useRef(null),M=Jt.useRef(!1),x=Jt.useRef(0),O=Jt.useRef(null),D=Jt.useRef(0),w=Jt.useRef(v2()),q=Jt.useRef([]),I=Jt.useRef({}),P=Jt.useCallback(F=>{var Y;F!==O.current&&(O.current=F,(Y=a.current)==null||Y.setExpectedMove(F))},[]),X=Jt.useCallback(()=>{b.current&&(clearTimeout(b.current),b.current=null)},[]),L=Jt.useCallback((F,Y,W,vt)=>{var Ot;const wt=o.current;if(!wt){n(It=>({...It,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}X();const Ft=++p.current;wt.postMessage({type:"solve",facelet:F,scannedFaces:Object.fromEntries(W),captures:vt,id:Ft}),(Ot=a.current)==null||Ot.syncPose(Y),b.current=setTimeout(()=>{n(It=>It.phase!=="computing"?It:{...It,phase:"error",error:"Solve timed out. Colors may have been misread — re-scan in steady light."})},25e3)},[X]);Jt.useEffect(()=>{m.current=t.phase,v.current=t.solution,g.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const C=Jt.useCallback(F=>{var Ot,It;const Y=u.current,W=Up(Y,F),vt=++p.current;(Ot=o.current)==null||Ot.postMessage({type:"apply",move:F,facelet:Y,id:vt}),u.current=W;const wt=v.current,Ft=wt?wt.currentIndex+1:0;wt&&Ft>=wt.moves.length&&((It=a.current)==null||It.setSolvingScanMode(!1)),n(Vt=>{if(!Vt.solution)return Vt;const H=Vt.solution.moves[Vt.solution.currentIndex];return F!==H?Vt:Ft>=Vt.solution.moves.length?{...Vt,phase:"solved",solution:{...Vt.solution,currentIndex:Ft},solvingFeedback:eu,solvingFacelet:W}:{...Vt,solution:{...Vt.solution,currentIndex:Ft},solvingFeedback:eu,solvingFacelet:W}}),y.current=Date.now(),D.current=0,kc(w.current),q.current=[],I.current={}},[]),k=Jt.useCallback((F,Y,W,vt,wt,Ft)=>{const{detectedCenter:Ot,colorCounts:It}=B2(Y),Vt=Qy(Y);let H="searching";return!F||!Vt?H="searching":Ft?H="rotate":wt?H="captured":W>0&&W<vt?H="stabilizing":H="detected",{status:H,stableProgress:W,stableTarget:vt,detectedCenter:Ot,colorCounts:It,cellColors:Vt&&Y?[...Y]:[]}},[]),ct=Jt.useCallback(()=>{var F;c.current.reset(),M.current=!1,T.current=null,n(Y=>({...Y,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Vo,liveScanNeedsClearerCenter:!1})),(F=a.current)==null||F.disableTracking(),O.current=null},[]),ot=Jt.useCallback(()=>{var F;c.current.reset(),M.current=!1,T.current=null,n(Y=>({...Y,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Vo,liveScanNeedsClearerCenter:!1})),(F=a.current)==null||F.disableTracking(),O.current=null},[]),_t=Jt.useCallback(async()=>{try{await ww(),a.current=new mw;const F=A2();o.current=F,F.onmessage=Y=>{var vt,wt,Ft;const W=Y.data;if(W.type==="ready")n(Ot=>({...Ot,solverReady:!0}));else if(W.type==="solution"){if(W.id!==p.current)return;if(X(),u.current=W.facelet,_.current=Date.now(),y.current=Date.now(),n(Ot=>({...Ot,phase:W.moves.length===0?"solved":"solving",solution:{moves:W.moves,currentIndex:0},detectionFeedback:Vo,solvingFeedback:eu,solvingFacelet:W.facelet})),W.moves.length>0){(vt=a.current)==null||vt.setSolvingScanMode(!0),(wt=a.current)==null||wt.enableTracking();const Ot=T.current;Ot&&((Ft=a.current)==null||Ft.syncPose(Ot)),P(W.moves[0]??null),D.current=0,kc(w.current),q.current=[],I.current={}}}else if(W.type==="facelet"){if(W.id!==p.current)return;u.current=W.facelet,n(Ot=>({...Ot,solvingFacelet:W.facelet}))}else if(W.type==="error"){if(W.id!==void 0&&W.id!==p.current)return;X(),M.current=!1,n(Ot=>({...Ot,phase:"error",error:W.message}))}},F.onerror=()=>{X(),n(Y=>({...Y,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},F.postMessage({type:"init"}),Av(),c.current.reset(),n(Y=>({...Y,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(F){n(Y=>({...Y,phase:"error",error:F instanceof Error?F.message:"Init failed"}))}},[X]);Jt.useEffect(()=>(_t(),()=>{var F,Y;cancelAnimationFrame(h.current),X(),(F=o.current)==null||F.terminate(),(Y=a.current)==null||Y.disableTracking()}),[_t,X]);const bt=Jt.useCallback(()=>{const F=s.current,Y=a.current;if(!F||!Y||F.readyState<2||!Y.captureFrame(F))return;const W=g.current,vt=da[W];if(!vt)return;const wt=Y.getFrameCanvas();if(!ZM(wt,F.videoWidth,F.videoHeight,vt)){n(It=>({...It,colorLearnError:`Could not read ${vt}. Center the sticker in the circle.`}));return}const Ot=W+1;if(Ot>=da.length){ot(),n(It=>({...It,colorsCalibrated:!0,colorLearnError:null}));return}n(It=>({...It,colorLearnIndex:Ot,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,ot]),B=Jt.useCallback(()=>{ot()},[ot]),rt=Jt.useCallback(()=>{var J,dt,yt,Lt;const F=s.current,Y=a.current;if(!F||!Y||F.readyState<2)return;const W=Y.process(F),vt=m.current;if(vt==="colorLearn"){Y.captureFrame(F);const j=da[g.current];if(j){const st=Y.getColorLearnSample(F.videoWidth,F.videoHeight,j);n(Pt=>({...Pt,colorLearnSample:st,colorLearnReady:(st==null?void 0:st.ready)??!1,colorLearnError:null}))}return}if(vt==="scanReady"){const j=((J=W.detectedFace)==null?void 0:J.colors)??null,st=!!W.pose;n(Pt=>({...Pt,detectionFeedback:k(st,j,0,0,!1,!1)}));return}if(vt==="liveScan"){if(!mp()){n(zt=>({...zt,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const j=((dt=W.detectedFace)==null?void 0:dt.colors)??null,st=!!W.pose;W.pose&&(T.current=W.pose);const Pt=c.current.update(j),gt=!!Pt.newlyCaptured;if(Pt.isComplete&&T.current&&!M.current){M.current=!0;const zt=q_(K_(Pt.faces)),Wt=Y_(zt);try{let Xt=zt;if(!B_(Xt)&&(Xt=X2(zt),!B_(Xt))){const ge=q2(zt);n(Q=>({...Q,phase:"error",scannedFaceColors:Wt,error:ge?`Color mismatch (${ge}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const kt=a2(Xt),ne=T.current,ce=[...Xt.values()].map(ge=>[...ge]);n(ge=>({...ge,phase:"computing",knownFaces:Pt.knownFaces,scannedFaceColors:Wt,liveScanProgress:1,currentPose:ne})),queueMicrotask(()=>L(kt,ne,Xt,ce))}catch(Xt){n(kt=>({...kt,phase:"error",scannedFaceColors:Wt,error:Xt instanceof Error?Xt.message:"Failed to build cube state"}))}return}n(zt=>({...zt,currentPose:W.pose,knownFaces:Pt.knownFaces,scannedFaceColors:Y_(q_(Pt.faces)),currentVisibleFace:Pt.currentFace,liveScanProgress:Pt.knownFaces.length/6,liveScanNeedsClearerCenter:Pt.needsClearerCenter,detectionFeedback:k(st,j,Pt.stableProgress,Pt.stableTarget,gt,Pt.needsNewFace)}));return}if(n(j=>({...j,currentPose:W.pose??(vt==="solving"?j.currentPose:null)})),vt!=="solving")return;const wt=v.current,Ft=wt&&wt.currentIndex<wt.moves.length?wt.moves[wt.currentIndex]:null;P(Ft??null);const Ot=(yt=W.detectedFace)!=null&&yt.colors[4]?pa(W.detectedFace.colors[4]):((Lt=W.pose)==null?void 0:Lt.visibleFace)??null,It=Ft?Dr(Ft):null,Vt=!!(Ot&&It&&Ot===It),H=W.pose?wp(W.pose):Object.keys(W.visibleFaceColors);for(const j of H){const st=W.visibleFaceColors[j];!st||st.length!==9||(I.current[j]||(I.current[j]=[]),I.current[j].push([...st]),I.current[j].length>6&&I.current[j].shift())}const xe={};for(const j of H){const st=I.current[j];if(!(st!=null&&st.length))continue;const Pt=y2(st);Pt&&(xe[j]=Pt)}const ee=Ft&&u.current?T2(u.current,Ft,xe,Ot,w.current):null;ee!=null&&ee.rejectedWholeCube&&(w.current.orientationLocks={},w.current.sawPreMoveAlignment=!1,Ot&&(w.current.stepAnchorFace=Ot),I.current={},D.current=0);const ht=W.rotationProgress,lt=(ee==null?void 0:ee.progress)??0,Tt=Math.max(lt,ht),pt=!!(Ft&&W.rotationMove===Ft);let A="searching";W.pose&&H.length>=2||Object.keys(xe).length>=2?(A="locked",x.current=0):!W.pose&&Object.keys(xe).length===0?(x.current++,A=x.current>8?"lost":"searching"):A="searching";const E=!!(ee!=null&&ee.completed||pt);E?D.current++:D.current=0;const G=(H.length>=3?H.slice(0,3):[...H,...["U","R","F"].filter(j=>!H.includes(j))].slice(0,3)).map(j=>{const st=W.visibleFaceColors[j],gt=xe[j]??st;if(!gt||gt.length!==9)return{faceId:j,status:"missing",matchScore:0};const zt=u.current?_2(u.current,j,gt):0,Wt=zt>=.65?"locked":"scanning";return{faceId:j,status:Wt,matchScore:zt}});if(n(j=>{var st;return{...j,currentPose:W.pose??j.currentPose,solvingFeedback:{tracking:A,rotationProgress:Tt,wrongMove:W.wrongMove,visibleFace:Ot,faceMatchesMove:Vt,liveFaceColors:((st=W.detectedFace)==null?void 0:st.colors)??null,visibleFaceColors:W.visibleFaceColors,visibleFaces:H,stableVisibleFaceColors:xe,poseRotationProgress:ht,faceScanInfos:G}}}),!!Ft&&!(Date.now()-_.current<400)&&!(Date.now()-y.current<300)&&!(!E||D.current<2)&&wt){C(Ft);const j=wt.moves[wt.currentIndex+1]??null;P(j),x.current=0,D.current=0,kc(w.current),I.current={},y.current=Date.now()}},[s,C,k,L,P]),K=Jt.useCallback(()=>{rt(),h.current=requestAnimationFrame(K)},[rt]),Rt=Jt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(K)},[K]),Nt=Jt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),N=Jt.useCallback(()=>{X(),ct(),n(F=>({...F,solution:null}))},[X,ct]),at=Jt.useCallback(()=>{var F;X(),M.current=!1,c.current.reset(),T.current=null,Av(),(F=a.current)==null||F.disableTracking(),n(Y=>({...Y,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:Vo,liveScanNeedsClearerCenter:!1}))},[X]),et=Jt.useCallback(()=>{var wt;const F=v.current;if(!F||F.currentIndex>=F.moves.length)return;const Y=F.moves[F.currentIndex];if(!Y)return;const W=F.moves[F.currentIndex+1]??null;C(Y);const vt=T.current;vt&&((wt=a.current)==null||wt.syncPose(vt)),P(W),x.current=0,D.current=0,kc(w.current),I.current={},y.current=Date.now()},[C,P]),z=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:z,confirmColorLearn:bt,startLiveScan:B,retryLiveScan:N,retryColorLearn:at,startTracking:Rt,stopTracking:Nt,skipCurrentMove:et}}function Lw(){const s=Jt.useRef(null),t=Jt.useRef(null),[n,a]=Jt.useState({stream:null,error:null,isReady:!1}),o=Jt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Jt.useCallback(p=>{s.current=p,p&&o(p)},[o]),u=Jt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await o(m),a({stream:p,error:null,isReady:!0})}catch(p){t.current=null,a({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[o]),h=Jt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),a({stream:null,error:null,isReady:!1})},[]);return Jt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:n,start:u,stop:h}}const Nw="1.6.0";function Ow(){var k,ct;const{videoRef:s,setVideoRef:t,state:n,start:a}=Lw(),{state:o,currentMove:c,confirmColorLearn:u,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:g,stopTracking:v,skipCurrentMove:_}=Uw(s),y=Jt.useRef(null),[b,T]=Jt.useState({width:0,height:0}),[M,x]=Jt.useState({width:0,height:0});Jt.useEffect(()=>{a()},[a]),Jt.useEffect(()=>{if(n.isReady&&o.phase!=="loading")return g(),v},[n.isReady,o.phase,g,v]);const O=Jt.useCallback((ot,_t)=>{T({width:ot,height:_t})},[]);Jt.useEffect(()=>{const ot=y.current;if(!ot)return;const _t=()=>{x({width:ot.clientWidth,height:ot.clientHeight})};_t();const bt=new ResizeObserver(_t);return bt.observe(ot),()=>bt.disconnect()},[]);const D=da[o.colorLearnIndex]??"R",w=o.phase==="loading"||!n.isReady,q=!!(o.error||n.error),I=o.phase==="computing",P=o.phase==="solving",X=((k=o.solution)==null?void 0:k.moves.length)??0,L=(((ct=o.solution)==null?void 0:ct.currentIndex)??0)+1,C=o.phase==="liveScan"||o.phase==="computing"||q&&Object.keys(o.scannedFaceColors).length>0;return Ht.jsxs("main",{className:"app",children:[Ht.jsxs("div",{className:`viewport${o.phase==="liveScan"?" viewport--scanning":""}${P?" viewport--solving":""}`,ref:y,children:[Ht.jsx(HM,{setVideoRef:t,onDimensions:O}),!w&&!q&&Ht.jsxs(Ht.Fragment,{children:[Ht.jsx(IM,{phase:o.phase,frameWidth:b.width,frameHeight:b.height,viewportWidth:M.width,viewportHeight:M.height,colorLearnSpot:o.phase==="colorLearn",spotColor:Jo[D]}),Ht.jsx(KM,{visible:o.phase==="colorLearn",stepIndex:o.colorLearnIndex,sample:o.colorLearnSample,ready:o.colorLearnReady,error:o.colorLearnError,onConfirm:u}),Ht.jsx(n2,{visible:o.phase==="scanReady",feedback:o.detectionFeedback,onStart:h}),Ht.jsx(Dh,{visible:C,scannedFaces:o.scannedFaceColors}),Ht.jsx(JM,{feedback:o.detectionFeedback,visible:o.phase==="liveScan"}),Ht.jsx(i2,{phase:o.phase,currentStep:L,totalSteps:X}),Ht.jsx($M,{phase:o.phase,knownFaces:o.knownFaces,progress:o.liveScanProgress,needsNewFace:o.detectionFeedback.status==="rotate",needsClearerCenter:o.liveScanNeedsClearerCenter}),Ht.jsx($C,{active:P&&!!(c&&o.currentPose),pose:o.currentPose,move:c,rotationProgress:o.solvingFeedback.rotationProgress,frameWidth:b.width,frameHeight:b.height,viewportWidth:M.width,viewportHeight:M.height}),Ht.jsx(e2,{visible:P&&!!c,tracking:o.solvingFeedback.tracking,faceScanInfos:o.solvingFeedback.faceScanInfos,onSkip:_}),o.phase==="solved"&&Ht.jsx("div",{className:"solved-banner",children:Ht.jsx("p",{children:"Done"})})]}),I&&Ht.jsxs(Ht.Fragment,{children:[Ht.jsx(Dh,{visible:C,scannedFaces:o.scannedFaceColors}),Ht.jsx(L_,{overlay:!0,message:"Computing…"})]}),w&&Ht.jsx(L_,{overlay:!0,message:o.phase==="loading"?"Loading…":"Camera…"}),q&&!w&&Ht.jsxs("div",{className:"error-screen overlay",children:[Ht.jsx(Dh,{visible:C,scannedFaces:o.scannedFaceColors}),Ht.jsx("p",{children:o.error??n.error}),Ht.jsxs("div",{className:"error-actions",children:[o.colorsCalibrated&&Ht.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),Ht.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]}),Ht.jsxs("p",{className:"app-version","aria-hidden":"true",children:["v",Nw]})]})}RM({immediate:!0});EM.createRoot(document.getElementById("root")).render(Ht.jsx(Jt.StrictMode,{children:Ht.jsx(Ow,{})}));
