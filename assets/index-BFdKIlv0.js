var pM=Object.defineProperty;var mM=(s,t,n)=>t in s?pM(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var ye=(s,t,n)=>mM(s,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function gM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function vM(){if(gv)return No;gv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return No.Fragment=t,No.jsx=n,No.jsxs=n,No}var vv;function _M(){return vv||(vv=1,Mh.exports=vM()),Mh.exports}var Gt=_M(),Eh={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function yM(){if(_v)return pe;_v=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(N,at,tt){this.props=N,this.context=at,this.refs=M,this.updater=tt||b}y.prototype.isReactComponent={},y.prototype.setState=function(N,at){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,at,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=y.prototype;function D(N,at,tt){this.props=N,this.context=at,this.refs=M,this.updater=tt||b}var w=D.prototype=new O;w.constructor=D,T(w,y.prototype),w.isPureReactComponent=!0;var q=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function L(N,at,tt){var z=tt.ref;return{$$typeof:s,type:N,key:at,ref:z!==void 0?z:null,props:tt}}function C(N,at){return L(N.type,at,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function ut(N){var at={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(tt){return at[tt]})}var ot=/\/+/g;function _t(N,at){return typeof N=="object"&&N!==null&&N.key!=null?ut(""+N.key):at.toString(36)}function bt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(at){N.status==="pending"&&(N.status="fulfilled",N.value=at)},function(at){N.status==="pending"&&(N.status="rejected",N.reason=at)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,at,tt,z,F){var Y=typeof N;(Y==="undefined"||Y==="boolean")&&(N=null);var W=!1;if(N===null)W=!0;else switch(Y){case"bigint":case"string":case"number":W=!0;break;case"object":switch(N.$$typeof){case s:case t:W=!0;break;case g:return W=N._init,B(W(N._payload),at,tt,z,F)}}if(W)return F=F(N),W=z===""?"."+_t(N,0):z,q(F)?(tt="",W!=null&&(tt=W.replace(ot,"$&/")+"/"),B(F,at,tt,"",function(Ft){return Ft})):F!=null&&(k(F)&&(F=C(F,tt+(F.key==null||N&&N.key===F.key?"":(""+F.key).replace(ot,"$&/")+"/")+W)),at.push(F)),1;W=0;var vt=z===""?".":z+":";if(q(N))for(var wt=0;wt<N.length;wt++)z=N[wt],Y=vt+_t(z,wt),W+=B(z,at,tt,Y,F);else if(wt=x(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(z=N.next()).done;)z=z.value,Y=vt+_t(z,wt++),W+=B(z,at,tt,Y,F);else if(Y==="object"){if(typeof N.then=="function")return B(bt(N),at,tt,z,F);throw at=String(N),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return W}function st(N,at,tt){if(N==null)return N;var z=[],F=0;return B(N,z,"","",function(Y){return at.call(tt,Y,F++)}),z}function K(N){if(N._status===-1){var at=N._result;at=at(),at.then(function(tt){(N._status===0||N._status===-1)&&(N._status=1,N._result=tt)},function(tt){(N._status===0||N._status===-1)&&(N._status=2,N._result=tt)}),N._status===-1&&(N._status=0,N._result=at)}if(N._status===1)return N._result.default;throw N._result}var Rt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Nt={map:st,forEach:function(N,at,tt){st(N,function(){at.apply(this,arguments)},tt)},count:function(N){var at=0;return st(N,function(){at++}),at},toArray:function(N){return st(N,function(at){return at})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return pe.Activity=v,pe.Children=Nt,pe.Component=y,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=D,pe.StrictMode=a,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,pe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},pe.cache=function(N){return function(){return N.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(N,at,tt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var z=T({},N.props),F=N.key;if(at!=null)for(Y in at.key!==void 0&&(F=""+at.key),at)!X.call(at,Y)||Y==="key"||Y==="__self"||Y==="__source"||Y==="ref"&&at.ref===void 0||(z[Y]=at[Y]);var Y=arguments.length-2;if(Y===1)z.children=tt;else if(1<Y){for(var W=Array(Y),vt=0;vt<Y;vt++)W[vt]=arguments[vt+2];z.children=W}return L(N.type,F,z)},pe.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},pe.createElement=function(N,at,tt){var z,F={},Y=null;if(at!=null)for(z in at.key!==void 0&&(Y=""+at.key),at)X.call(at,z)&&z!=="key"&&z!=="__self"&&z!=="__source"&&(F[z]=at[z]);var W=arguments.length-2;if(W===1)F.children=tt;else if(1<W){for(var vt=Array(W),wt=0;wt<W;wt++)vt[wt]=arguments[wt+2];F.children=vt}if(N&&N.defaultProps)for(z in W=N.defaultProps,W)F[z]===void 0&&(F[z]=W[z]);return L(N,Y,F)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(N){return{$$typeof:h,render:N}},pe.isValidElement=k,pe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:K}},pe.memo=function(N,at){return{$$typeof:m,type:N,compare:at===void 0?null:at}},pe.startTransition=function(N){var at=P.T,tt={};P.T=tt;try{var z=N(),F=P.S;F!==null&&F(tt,z),typeof z=="object"&&z!==null&&typeof z.then=="function"&&z.then(I,Rt)}catch(Y){Rt(Y)}finally{at!==null&&tt.types!==null&&(at.types=tt.types),P.T=at}},pe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},pe.use=function(N){return P.H.use(N)},pe.useActionState=function(N,at,tt){return P.H.useActionState(N,at,tt)},pe.useCallback=function(N,at){return P.H.useCallback(N,at)},pe.useContext=function(N){return P.H.useContext(N)},pe.useDebugValue=function(){},pe.useDeferredValue=function(N,at){return P.H.useDeferredValue(N,at)},pe.useEffect=function(N,at){return P.H.useEffect(N,at)},pe.useEffectEvent=function(N){return P.H.useEffectEvent(N)},pe.useId=function(){return P.H.useId()},pe.useImperativeHandle=function(N,at,tt){return P.H.useImperativeHandle(N,at,tt)},pe.useInsertionEffect=function(N,at){return P.H.useInsertionEffect(N,at)},pe.useLayoutEffect=function(N,at){return P.H.useLayoutEffect(N,at)},pe.useMemo=function(N,at){return P.H.useMemo(N,at)},pe.useOptimistic=function(N,at){return P.H.useOptimistic(N,at)},pe.useReducer=function(N,at,tt){return P.H.useReducer(N,at,tt)},pe.useRef=function(N){return P.H.useRef(N)},pe.useState=function(N){return P.H.useState(N)},pe.useSyncExternalStore=function(N,at,tt){return P.H.useSyncExternalStore(N,at,tt)},pe.useTransition=function(){return P.H.useTransition()},pe.version="19.2.7",pe}var yv;function mp(){return yv||(yv=1,Eh.exports=yM()),Eh.exports}var Jt=mp(),bh={exports:{}},Oo={},Th={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function xM(){return xv||(xv=1,(function(s){function t(B,st){var K=B.length;B.push(st);t:for(;0<K;){var Rt=K-1>>>1,Nt=B[Rt];if(0<o(Nt,st))B[Rt]=st,B[K]=Nt,K=Rt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var st=B[0],K=B.pop();if(K!==st){B[0]=K;t:for(var Rt=0,Nt=B.length,N=Nt>>>1;Rt<N;){var at=2*(Rt+1)-1,tt=B[at],z=at+1,F=B[z];if(0>o(tt,K))z<Nt&&0>o(F,tt)?(B[Rt]=F,B[z]=K,Rt=z):(B[Rt]=tt,B[at]=K,Rt=at);else if(z<Nt&&0>o(F,K))B[Rt]=F,B[z]=K,Rt=z;else break t}}return st}function o(B,st){var K=B.sortIndex-st.sortIndex;return K!==0?K:B.id-st.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],m=[],g=1,v=null,_=3,x=!1,b=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var st=n(m);st!==null;){if(st.callback===null)a(m);else if(st.startTime<=B)a(m),st.sortIndex=st.expirationTime,t(p,st);else break;st=n(m)}}function q(B){if(T=!1,w(B),!b)if(n(p)!==null)b=!0,I||(I=!0,ut());else{var st=n(m);st!==null&&bt(q,st.startTime-B)}}var I=!1,P=-1,X=5,L=-1;function C(){return M?!0:!(s.unstable_now()-L<X)}function k(){if(M=!1,I){var B=s.unstable_now();L=B;var st=!0;try{t:{b=!1,T&&(T=!1,O(P),P=-1),x=!0;var K=_;try{e:{for(w(B),v=n(p);v!==null&&!(v.expirationTime>B&&C());){var Rt=v.callback;if(typeof Rt=="function"){v.callback=null,_=v.priorityLevel;var Nt=Rt(v.expirationTime<=B);if(B=s.unstable_now(),typeof Nt=="function"){v.callback=Nt,w(B),st=!0;break e}v===n(p)&&a(p),w(B)}else a(p);v=n(p)}if(v!==null)st=!0;else{var N=n(m);N!==null&&bt(q,N.startTime-B),st=!1}}break t}finally{v=null,_=K,x=!1}st=void 0}}finally{st?ut():I=!1}}}var ut;if(typeof D=="function")ut=function(){D(k)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,_t=ot.port2;ot.port1.onmessage=k,ut=function(){_t.postMessage(null)}}else ut=function(){y(k,0)};function bt(B,st){P=y(function(){B(s.unstable_now())},st)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var st=3;break;default:st=_}var K=_;_=st;try{return B()}finally{_=K}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(B,st){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var K=_;_=B;try{return st()}finally{_=K}},s.unstable_scheduleCallback=function(B,st,K){var Rt=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Rt+K:Rt):K=Rt,B){case 1:var Nt=-1;break;case 2:Nt=250;break;case 5:Nt=1073741823;break;case 4:Nt=1e4;break;default:Nt=5e3}return Nt=K+Nt,B={id:g++,callback:st,priorityLevel:B,startTime:K,expirationTime:Nt,sortIndex:-1},K>Rt?(B.sortIndex=K,t(m,B),n(p)===null&&B===n(m)&&(T?(O(P),P=-1):T=!0,bt(q,K-Rt))):(B.sortIndex=Nt,t(p,B),b||x||(b=!0,I||(I=!0,ut()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var st=_;return function(){var K=_;_=st;try{return B.apply(this,arguments)}finally{_=K}}}})(Ah)),Ah}var Sv;function SM(){return Sv||(Sv=1,Th.exports=xM()),Th.exports}var Rh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function MM(){if(Mv)return Un;Mv=1;var s=mp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Un.flushSync=function(p){var m=u.T,g=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=g,a.d.f()}},Un.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Un.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Un.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Un.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Un.requestFormReset=function(p){a.d.r(p)},Un.unstable_batchedUpdates=function(p,m){return p(m)},Un.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},Un.useFormStatus=function(){return u.H.useHostTransitionStatus()},Un.version="19.2.7",Un}var Ev;function EM(){if(Ev)return Rh.exports;Ev=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Rh.exports=MM(),Rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function bM(){if(bv)return Oo;bv=1;var s=SM(),t=mp(),n=EM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return p(f),e;if(d===l)return p(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var S=!1,R=f.child;R;){if(R===r){S=!0,r=f,l=d;break}if(R===l){S=!0,l=f,r=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===r){S=!0,r=d,l=f;break}if(R===l){S=!0,l=d,r=f;break}R=R.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ut(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:_t(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return _t(e(i))}catch{}}return null}var bt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Rt=[],Nt=-1;function N(e){return{current:e}}function at(e){0>Nt||(e.current=Rt[Nt],Rt[Nt]=null,Nt--)}function tt(e,i){Nt++,Rt[Nt]=e.current,e.current=i}var z=N(null),F=N(null),Y=N(null),W=N(null);function vt(e,i){switch(tt(Y,i),tt(F,e),tt(z,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?I0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=I0(i),e=H0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(z),tt(z,e)}function wt(){at(z),at(F),at(Y)}function Ft(e){e.memoizedState!==null&&tt(W,e);var i=z.current,r=H0(i,e.type);i!==r&&(tt(F,e),tt(z,r))}function Ot(e){F.current===e&&(at(z),at(F)),W.current===e&&(at(W),wo._currentValue=K)}var Ht,kt;function H(e){if(Ht===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ht=i&&i[1]||"",kt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ht+e+kt}var xe=!1;function ee(e,i){if(!e||xe)return"";xe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Ut=function(){throw Error()};if(Object.defineProperty(Ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ut,[])}catch(Mt){var gt=Mt}Reflect.construct(e,[],Ut)}else{try{Ut.call()}catch(Mt){gt=Mt}e.call(Ut.prototype)}}else{try{throw Error()}catch(Mt){gt=Mt}(Ut=e())&&typeof Ut.catch=="function"&&Ut.catch(function(){})}}catch(Mt){if(Mt&&gt&&typeof Mt.stack=="string")return[Mt.stack,gt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var V=S.split(`
`),ht=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ht.length&&!ht[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ht.length)for(l=V.length-1,f=ht.length-1;1<=l&&0<=f&&V[l]!==ht[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ht[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ht[f]){var At=`
`+V[l].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=l&&0<=f);break}}}finally{xe=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?H(r):""}function dt(e,i){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==i&&i!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return H("Activity");default:return""}}function ct(e){try{var i="",r=null;do i+=dt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Tt=Object.prototype.hasOwnProperty,mt=s.unstable_scheduleCallback,A=s.unstable_cancelCallback,E=s.unstable_shouldYield,G=s.unstable_requestPaint,Q=s.unstable_now,pt=s.unstable_getCurrentPriorityLevel,yt=s.unstable_ImmediatePriority,Lt=s.unstable_UserBlockingPriority,rt=s.unstable_NormalPriority,et=s.unstable_LowPriority,Pt=s.unstable_IdlePriority,lt=s.log,zt=s.unstable_setDisableYieldValue,Xt=null,Wt=null;function Bt(e){if(typeof lt=="function"&&zt(e),Wt&&typeof Wt.setStrictMode=="function")try{Wt.setStrictMode(Xt,e)}catch{}}var ne=Math.clz32?Math.clz32:Z,oe=Math.log,be=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(oe(e)/be|0)|0}var qt=256,Et=262144,Dt=4194304;function jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=jt(l):(S&=R,S!==0?f=jt(S):r||(r=R&~e,r!==0&&(f=jt(r))))):(R=l&~d,R!==0?f=jt(R):S!==0?f=jt(S):r||(r=l&~e,r!==0&&(f=jt(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function le(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function We(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(){var e=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),e}function Te(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function $e(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mn(e,i,r,l,f,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,ht=e.hiddenUpdates;for(r=S&~r;0<r;){var At=31-ne(r),Ut=1<<At;R[At]=0,V[At]=-1;var gt=ht[At];if(gt!==null)for(ht[At]=null,At=0;At<gt.length;At++){var Mt=gt[At];Mt!==null&&(Mt.lane&=-536870913)}r&=~Ut}l!==0&&xi(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function xi(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ne(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function ln(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-ne(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function wn(e,i){var r=i&-i;return r=(r&42)!==0?1:Jn(r),(r&(e.suspendedLanes|i))!==0?0:r}function Jn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=st.p;return e!==0?e:(e=window.event,e===void 0?32:cv(e.type))}function $a(e,i){var r=st.p;try{return st.p=e,i()}finally{st.p=r}}var Si=Math.random().toString(36).slice(2),tn="__reactFiber$"+Si,En="__reactProps$"+Si,Hi="__reactContainer$"+Si,ks="__reactEvents$"+Si,mu="__reactListeners$"+Si,gu="__reactHandles$"+Si,cl="__reactResources$"+Si,tr="__reactMarker$"+Si;function Xs(e){delete e[tn],delete e[En],delete e[ks],delete e[mu],delete e[gu]}function U(e){var i=e[tn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Hi]||r[tn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Y0(e);e!==null;){if(r=e[tn])return r;e=Y0(e)}return i}e=r,r=e.parentNode}return null}function nt(e){if(e=e[tn]||e[Hi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function xt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function St(e){var i=e[cl];return i||(i=e[cl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function J(e){e[tr]=!0}var Vt=new Set,Zt={};function Qt(e,i){$t(e,i),$t(e+"Capture",i)}function $t(e,i){for(Zt[e]=i,e=0;e<i.length;e++)Vt.add(i[e])}var fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},ae={};function Ce(e){return Tt.call(ae,e)?!0:Tt.call(ue,e)?!1:fe.test(e)?ae[e]=!0:(ue[e]=!0,!1)}function we(e,i,r){if(Ce(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function je(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Le(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pn(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ue(e){if(!e._valueTracker){var i=se(e)?"checked":"value";e._valueTracker=pn(e,i,""+e[i])}}function Vn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=se(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function yn(e){return e.replace(Pn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function He(e,i,r,l,f,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+de(i)):e.value!==""+de(i)&&(e.value=""+de(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,S,de(i)):r!=null?Dn(e,S,de(r)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+de(R):e.removeAttribute("name")}function zn(e,i,r,l,f,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ue(e);return}r=r!=null?""+de(r):"",i=i!=null?""+de(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=R?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ue(e)}function Dn(e,i,r){i==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function en(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function bn(e,i,r){if(i!=null&&(i=""+de(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+de(r):""}function Fr(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(bt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=de(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ue(e)}function kn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var cx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pp(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||cx.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function zp(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Pp(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Pp(e,d,i[d])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(e){return fx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var _u=null;function yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function Bp(e){var i=nt(e);if(i&&(e=i.stateNode)){var r=e[En]||null;t:switch(e=i.stateNode,i.type){case"input":if(He(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+yn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[En]||null;if(!f)throw Error(a(90));He(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Vn(l)}break t;case"textarea":bn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&en(e,!!r.multiple,i,!1)}}}var xu=!1;function Ip(e,i,r){if(xu)return e(i,r);xu=!0;try{var l=e(i);return l}finally{if(xu=!1,(Pr!==null||zr!==null)&&(Ql(),Pr&&(i=Pr,e=zr,zr=Pr=null,Bp(i),e)))for(i=0;i<e.length;i++)Bp(e[i])}}function Ws(e,i){var r=e.stateNode;if(r===null)return null;var l=r[En]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(Vi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Su=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Su=!1}var ya=null,Mu=null,fl=null;function Hp(){if(fl)return fl;var e,i=Mu,r=i.length,l,f="value"in ya?ya.value:ya.textContent,d=f.length;for(e=0;e<r&&i[e]===f[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===f[d-l];l++);return fl=f.slice(e,1<l?1-l:void 0)}function hl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function Gp(){return!1}function Xn(e){function i(r,l,f,d,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?dl:Gp,this.isPropagationStopped=Gp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),i}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Xn(er),Ys=v({},er,{view:0,detail:0}),hx=Xn(Ys),Eu,bu,js,ml=v({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(Eu=e.screenX-js.screenX,bu=e.screenY-js.screenY):bu=Eu=0,js=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:bu}}),Vp=Xn(ml),dx=v({},ml,{dataTransfer:0}),px=Xn(dx),mx=v({},Ys,{relatedTarget:0}),Tu=Xn(mx),gx=v({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Xn(gx),_x=v({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yx=Xn(_x),xx=v({},er,{data:0}),kp=Xn(xx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ex[e])?!!i[e]:!1}function Au(){return bx}var Tx=v({},Ys,{key:function(e){if(e.key){var i=Sx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ax=Xn(Tx),Rx=v({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Xn(Rx),Cx=v({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),wx=Xn(Cx),Dx=v({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=Xn(Dx),Lx=v({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=Xn(Lx),Ox=v({},er,{newState:0,oldState:0}),Fx=Xn(Ox),Px=[9,13,27,32],Ru=Vi&&"CompositionEvent"in window,Zs=null;Vi&&"documentMode"in document&&(Zs=document.documentMode);var zx=Vi&&"TextEvent"in window&&!Zs,Wp=Vi&&(!Ru||Zs&&8<Zs&&11>=Zs),qp=" ",Yp=!1;function jp(e,i){switch(e){case"keyup":return Px.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function Bx(e,i){switch(e){case"compositionend":return Zp(i);case"keypress":return i.which!==32?null:(Yp=!0,qp);case"textInput":return e=i.data,e===qp&&Yp?null:e;default:return null}}function Ix(e,i){if(Br)return e==="compositionend"||!Ru&&jp(e,i)?(e=Hp(),fl=Mu=ya=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wp&&i.locale!=="ko"?null:i.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Hx[e.type]:i==="textarea"}function Qp(e,i,r,l){Pr?zr?zr.push(l):zr=[l]:Pr=l,i=ac(i,"onChange"),0<i.length&&(r=new pl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Ks=null,Qs=null;function Gx(e){N0(e,0)}function gl(e){var i=xt(e);if(Vn(i))return e}function Jp(e,i){if(e==="change")return i}var $p=!1;if(Vi){var Cu;if(Vi){var wu="oninput"in document;if(!wu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),wu=typeof tm.oninput=="function"}Cu=wu}else Cu=!1;$p=Cu&&(!document.documentMode||9<document.documentMode)}function em(){Ks&&(Ks.detachEvent("onpropertychange",nm),Qs=Ks=null)}function nm(e){if(e.propertyName==="value"&&gl(Qs)){var i=[];Qp(i,Qs,e,yu(e)),Ip(Gx,i)}}function Vx(e,i,r){e==="focusin"?(em(),Ks=i,Qs=r,Ks.attachEvent("onpropertychange",nm)):e==="focusout"&&em()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(Qs)}function Xx(e,i){if(e==="click")return gl(i)}function Wx(e,i){if(e==="input"||e==="change")return gl(i)}function qx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var $n=typeof Object.is=="function"?Object.is:qx;function Js(e,i){if($n(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Tt.call(i,f)||!$n(e[f],i[f]))return!1}return!0}function im(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function am(e,i){var r=im(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=im(r)}}function rm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?rm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function sm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Mi(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Mi(e.document)}return i}function Du(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Yx=Vi&&"documentMode"in document&&11>=document.documentMode,Ir=null,Uu=null,$s=null,Lu=!1;function om(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lu||Ir==null||Ir!==Mi(l)||(l=Ir,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$s&&Js($s,l)||($s=l,l=ac(Uu,"onSelect"),0<l.length&&(i=new pl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ir)))}function nr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Hr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Nu={},lm={};Vi&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ir(e){if(Nu[e])return Nu[e];if(!Hr[e])return e;var i=Hr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in lm)return Nu[e]=i[r];return e}var cm=ir("animationend"),um=ir("animationiteration"),fm=ir("animationstart"),jx=ir("transitionrun"),Zx=ir("transitionstart"),Kx=ir("transitioncancel"),hm=ir("transitionend"),dm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Ei(e,i){dm.set(e,i),Qt(i,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],Gr=0,Fu=0;function _l(){for(var e=Gr,i=Fu=Gr=0;i<e;){var r=ci[i];ci[i++]=null;var l=ci[i];ci[i++]=null;var f=ci[i];ci[i++]=null;var d=ci[i];if(ci[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&pm(r,f,d)}}function yl(e,i,r,l){ci[Gr++]=e,ci[Gr++]=i,ci[Gr++]=r,ci[Gr++]=l,Fu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Pu(e,i,r,l){return yl(e,i,r,l),xl(e)}function ar(e,i){return yl(e,null,null,i),xl(e)}function pm(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-ne(r),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function xl(e){if(50<Mo)throw Mo=0,qf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Qx(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,r,l){return new Qx(e,i,r,l)}function zu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,i){var r=e.alternate;return r===null?(r=ti(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function mm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Sl(e,i,r,l,f,d){var S=0;if(l=e,typeof e=="function")zu(e)&&(S=1);else if(typeof e=="string")S=nM(e,r,z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ti(31,r,i,f),e.elementType=L,e.lanes=d,e;case T:return rr(r.children,f,d,i);case M:S=8,f|=24;break;case y:return e=ti(12,r,i,f|2),e.elementType=y,e.lanes=d,e;case q:return e=ti(13,r,i,f),e.elementType=q,e.lanes=d,e;case I:return e=ti(19,r,i,f),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case O:S=9;break t;case w:S=11;break t;case P:S=14;break t;case X:S=16,l=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ti(S,r,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function rr(e,i,r,l){return e=ti(7,e,l,i),e.lanes=r,e}function Bu(e,i,r){return e=ti(6,e,null,i),e.lanes=r,e}function gm(e){var i=ti(18,null,null,0);return i.stateNode=e,i}function Iu(e,i,r){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var vm=new WeakMap;function ui(e,i){if(typeof e=="object"&&e!==null){var r=vm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:ct(i)},vm.set(e,i),i)}return{value:e,source:i,stack:ct(i)}}var kr=[],Xr=0,Ml=null,to=0,fi=[],hi=0,xa=null,Li=1,Ni="";function Xi(e,i){kr[Xr++]=to,kr[Xr++]=Ml,Ml=e,to=i}function _m(e,i,r){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=xa,xa=e;var l=Li;e=Ni;var f=32-ne(l)-1;l&=~(1<<f),r+=1;var d=32-ne(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Li=1<<32-ne(i)+f|r<<f|l,Ni=d+e}else Li=1<<d|r<<f|l,Ni=e}function Hu(e){e.return!==null&&(Xi(e,1),_m(e,1,0))}function Gu(e){for(;e===Ml;)Ml=kr[--Xr],kr[Xr]=null,to=kr[--Xr],kr[Xr]=null;for(;e===xa;)xa=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null,Li=fi[--hi],fi[hi]=null}function ym(e,i){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=xa,Li=i.id,Ni=i.overflow,xa=e}var Tn=null,Ze=null,De=!1,Sa=null,di=!1,Vu=Error(a(519));function Ma(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ui(i,e)),Vu}function xm(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[tn]=e,i[En]=l,r){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(r=0;r<bo.length;r++)Me(bo[r],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),zn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Fr(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||z0(i.textContent,r)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Gi),i=!0):i=!1,i||Ma(e,!0)}function Sm(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Tn=Tn.return}}function Wr(e){if(e!==Tn)return!1;if(!De)return Sm(e),De=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||oh(e.type,e.memoizedProps)),r=!r),r&&Ze&&Ma(e),Sm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=q0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=q0(e)}else i===27?(i=Ze,Pa(e.type)?(e=hh,hh=null,Ze=e):Ze=i):Ze=Tn?mi(e.stateNode.nextSibling):null;return!0}function sr(){Ze=Tn=null,De=!1}function ku(){var e=Sa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Sa=null),e}function eo(e){Sa===null?Sa=[e]:Sa.push(e)}var Xu=N(null),or=null,Wi=null;function Ea(e,i,r){tt(Xu,i._currentValue),i._currentValue=r}function qi(e){e._currentValue=Xu.current,at(Xu)}function Wu(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function qu(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=f;for(var V=0;V<i.length;V++)if(R.context===i[V]){d.lanes|=r,R=d.alternate,R!==null&&(R.lanes|=r),Wu(d.return,r,e),l||(S=null);break t}d=R.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),Wu(S,r,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function qr(e,i,r,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=f.type;$n(f.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(f===W.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}f=f.return}e!==null&&qu(i,e,r,l),i.flags|=262144}function El(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Mm(or,e)}function bl(e,i){return or===null&&lr(e),Mm(e,i)}function Mm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Wi===null){if(e===null)throw Error(a(308));Wi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Wi=Wi.next=i;return r}var Jx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},$x=s.unstable_scheduleCallback,tS=s.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new Jx,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&$x(tS,function(){e.controller.abort()})}var io=null,ju=0,Yr=0,jr=null;function eS(e,i){if(io===null){var r=io=[];ju=0,Yr=Jf(),jr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ju++,i.then(Em,Em),i}function Em(){if(--ju===0&&io!==null){jr!==null&&(jr.status="fulfilled");var e=io;io=null,Yr=0,jr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nS(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var bm=B.S;B.S=function(e,i){o0=Q(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&eS(e,i),bm!==null&&bm(e,i)};var cr=N(null);function Zu(){var e=cr.current;return e!==null?e:qe.pooledCache}function Tl(e,i){i===null?tt(cr,cr.current):tt(cr,i.pool)}function Tm(){var e=Zu();return e===null?null:{parent:cn._currentValue,pool:e}}var Zr=Error(a(460)),Ku=Error(a(474)),Al=Error(a(542)),Rl={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Gi,Gi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,wm(e),e;default:if(typeof i.status=="string")i.then(Gi,Gi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,wm(e),e}throw fr=i,Zr}}function ur(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(fr=r,Zr):r}}var fr=null;function Cm(){if(fr===null)throw Error(a(459));var e=fr;return fr=null,e}function wm(e){if(e===Zr||e===Al)throw Error(a(483))}var Kr=null,ao=0;function Cl(e){var i=ao;return ao+=1,Kr===null&&(Kr=[]),Rm(Kr,e,i)}function ro(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function wl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Dm(e){function i(it,j){if(e){var ft=it.deletions;ft===null?(it.deletions=[j],it.flags|=16):ft.push(j)}}function r(it,j){if(!e)return null;for(;j!==null;)i(it,j),j=j.sibling;return null}function l(it){for(var j=new Map;it!==null;)it.key!==null?j.set(it.key,it):j.set(it.index,it),it=it.sibling;return j}function f(it,j){return it=ki(it,j),it.index=0,it.sibling=null,it}function d(it,j,ft){return it.index=ft,e?(ft=it.alternate,ft!==null?(ft=ft.index,ft<j?(it.flags|=67108866,j):ft):(it.flags|=67108866,j)):(it.flags|=1048576,j)}function S(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function R(it,j,ft,Ct){return j===null||j.tag!==6?(j=Bu(ft,it.mode,Ct),j.return=it,j):(j=f(j,ft),j.return=it,j)}function V(it,j,ft,Ct){var re=ft.type;return re===T?At(it,j,ft.props.children,Ct,ft.key):j!==null&&(j.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===X&&ur(re)===j.type)?(j=f(j,ft.props),ro(j,ft),j.return=it,j):(j=Sl(ft.type,ft.key,ft.props,null,it.mode,Ct),ro(j,ft),j.return=it,j)}function ht(it,j,ft,Ct){return j===null||j.tag!==4||j.stateNode.containerInfo!==ft.containerInfo||j.stateNode.implementation!==ft.implementation?(j=Iu(ft,it.mode,Ct),j.return=it,j):(j=f(j,ft.children||[]),j.return=it,j)}function At(it,j,ft,Ct,re){return j===null||j.tag!==7?(j=rr(ft,it.mode,Ct,re),j.return=it,j):(j=f(j,ft),j.return=it,j)}function Ut(it,j,ft){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Bu(""+j,it.mode,ft),j.return=it,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return ft=Sl(j.type,j.key,j.props,null,it.mode,ft),ro(ft,j),ft.return=it,ft;case b:return j=Iu(j,it.mode,ft),j.return=it,j;case X:return j=ur(j),Ut(it,j,ft)}if(bt(j)||ut(j))return j=rr(j,it.mode,ft,null),j.return=it,j;if(typeof j.then=="function")return Ut(it,Cl(j),ft);if(j.$$typeof===D)return Ut(it,bl(it,j),ft);wl(it,j)}return null}function gt(it,j,ft,Ct){var re=j!==null?j.key:null;if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return re!==null?null:R(it,j,""+ft,Ct);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return ft.key===re?V(it,j,ft,Ct):null;case b:return ft.key===re?ht(it,j,ft,Ct):null;case X:return ft=ur(ft),gt(it,j,ft,Ct)}if(bt(ft)||ut(ft))return re!==null?null:At(it,j,ft,Ct,null);if(typeof ft.then=="function")return gt(it,j,Cl(ft),Ct);if(ft.$$typeof===D)return gt(it,j,bl(it,ft),Ct);wl(it,ft)}return null}function Mt(it,j,ft,Ct,re){if(typeof Ct=="string"&&Ct!==""||typeof Ct=="number"||typeof Ct=="bigint")return it=it.get(ft)||null,R(j,it,""+Ct,re);if(typeof Ct=="object"&&Ct!==null){switch(Ct.$$typeof){case x:return it=it.get(Ct.key===null?ft:Ct.key)||null,V(j,it,Ct,re);case b:return it=it.get(Ct.key===null?ft:Ct.key)||null,ht(j,it,Ct,re);case X:return Ct=ur(Ct),Mt(it,j,ft,Ct,re)}if(bt(Ct)||ut(Ct))return it=it.get(ft)||null,At(j,it,Ct,re,null);if(typeof Ct.then=="function")return Mt(it,j,ft,Cl(Ct),re);if(Ct.$$typeof===D)return Mt(it,j,ft,bl(j,Ct),re);wl(j,Ct)}return null}function te(it,j,ft,Ct){for(var re=null,Ne=null,ie=j,ge=j=0,Re=null;ie!==null&&ge<ft.length;ge++){ie.index>ge?(Re=ie,ie=null):Re=ie.sibling;var Oe=gt(it,ie,ft[ge],Ct);if(Oe===null){ie===null&&(ie=Re);break}e&&ie&&Oe.alternate===null&&i(it,ie),j=d(Oe,j,ge),Ne===null?re=Oe:Ne.sibling=Oe,Ne=Oe,ie=Re}if(ge===ft.length)return r(it,ie),De&&Xi(it,ge),re;if(ie===null){for(;ge<ft.length;ge++)ie=Ut(it,ft[ge],Ct),ie!==null&&(j=d(ie,j,ge),Ne===null?re=ie:Ne.sibling=ie,Ne=ie);return De&&Xi(it,ge),re}for(ie=l(ie);ge<ft.length;ge++)Re=Mt(ie,it,ge,ft[ge],Ct),Re!==null&&(e&&Re.alternate!==null&&ie.delete(Re.key===null?ge:Re.key),j=d(Re,j,ge),Ne===null?re=Re:Ne.sibling=Re,Ne=Re);return e&&ie.forEach(function(Ga){return i(it,Ga)}),De&&Xi(it,ge),re}function ce(it,j,ft,Ct){if(ft==null)throw Error(a(151));for(var re=null,Ne=null,ie=j,ge=j=0,Re=null,Oe=ft.next();ie!==null&&!Oe.done;ge++,Oe=ft.next()){ie.index>ge?(Re=ie,ie=null):Re=ie.sibling;var Ga=gt(it,ie,Oe.value,Ct);if(Ga===null){ie===null&&(ie=Re);break}e&&ie&&Ga.alternate===null&&i(it,ie),j=d(Ga,j,ge),Ne===null?re=Ga:Ne.sibling=Ga,Ne=Ga,ie=Re}if(Oe.done)return r(it,ie),De&&Xi(it,ge),re;if(ie===null){for(;!Oe.done;ge++,Oe=ft.next())Oe=Ut(it,Oe.value,Ct),Oe!==null&&(j=d(Oe,j,ge),Ne===null?re=Oe:Ne.sibling=Oe,Ne=Oe);return De&&Xi(it,ge),re}for(ie=l(ie);!Oe.done;ge++,Oe=ft.next())Oe=Mt(ie,it,ge,Oe.value,Ct),Oe!==null&&(e&&Oe.alternate!==null&&ie.delete(Oe.key===null?ge:Oe.key),j=d(Oe,j,ge),Ne===null?re=Oe:Ne.sibling=Oe,Ne=Oe);return e&&ie.forEach(function(dM){return i(it,dM)}),De&&Xi(it,ge),re}function ke(it,j,ft,Ct){if(typeof ft=="object"&&ft!==null&&ft.type===T&&ft.key===null&&(ft=ft.props.children),typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:t:{for(var re=ft.key;j!==null;){if(j.key===re){if(re=ft.type,re===T){if(j.tag===7){r(it,j.sibling),Ct=f(j,ft.props.children),Ct.return=it,it=Ct;break t}}else if(j.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===X&&ur(re)===j.type){r(it,j.sibling),Ct=f(j,ft.props),ro(Ct,ft),Ct.return=it,it=Ct;break t}r(it,j);break}else i(it,j);j=j.sibling}ft.type===T?(Ct=rr(ft.props.children,it.mode,Ct,ft.key),Ct.return=it,it=Ct):(Ct=Sl(ft.type,ft.key,ft.props,null,it.mode,Ct),ro(Ct,ft),Ct.return=it,it=Ct)}return S(it);case b:t:{for(re=ft.key;j!==null;){if(j.key===re)if(j.tag===4&&j.stateNode.containerInfo===ft.containerInfo&&j.stateNode.implementation===ft.implementation){r(it,j.sibling),Ct=f(j,ft.children||[]),Ct.return=it,it=Ct;break t}else{r(it,j);break}else i(it,j);j=j.sibling}Ct=Iu(ft,it.mode,Ct),Ct.return=it,it=Ct}return S(it);case X:return ft=ur(ft),ke(it,j,ft,Ct)}if(bt(ft))return te(it,j,ft,Ct);if(ut(ft)){if(re=ut(ft),typeof re!="function")throw Error(a(150));return ft=re.call(ft),ce(it,j,ft,Ct)}if(typeof ft.then=="function")return ke(it,j,Cl(ft),Ct);if(ft.$$typeof===D)return ke(it,j,bl(it,ft),Ct);wl(it,ft)}return typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint"?(ft=""+ft,j!==null&&j.tag===6?(r(it,j.sibling),Ct=f(j,ft),Ct.return=it,it=Ct):(r(it,j),Ct=Bu(ft,it.mode,Ct),Ct.return=it,it=Ct),S(it)):r(it,j)}return function(it,j,ft,Ct){try{ao=0;var re=ke(it,j,ft,Ct);return Kr=null,re}catch(ie){if(ie===Zr||ie===Al)throw ie;var Ne=ti(29,ie,null,it.mode);return Ne.lanes=Ct,Ne.return=it,Ne}finally{}}}var hr=Dm(!0),Um=Dm(!1),ba=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ta(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Aa(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Pe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=xl(e),pm(e,null,r),i}return yl(e,l,i,r),xl(e)}function so(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,ln(e,r)}}function $u(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var tf=!1;function oo(){if(tf){var e=jr;if(e!==null)throw e}}function lo(e,i,r,l){tf=!1;var f=e.updateQueue;ba=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,ht=V.next;V.next=null,S===null?d=ht:S.next=ht,S=V;var At=e.alternate;At!==null&&(At=At.updateQueue,R=At.lastBaseUpdate,R!==S&&(R===null?At.firstBaseUpdate=ht:R.next=ht,At.lastBaseUpdate=V))}if(d!==null){var Ut=f.baseState;S=0,At=ht=V=null,R=d;do{var gt=R.lane&-536870913,Mt=gt!==R.lane;if(Mt?(Ae&gt)===gt:(l&gt)===gt){gt!==0&&gt===Yr&&(tf=!0),At!==null&&(At=At.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var te=e,ce=R;gt=i;var ke=r;switch(ce.tag){case 1:if(te=ce.payload,typeof te=="function"){Ut=te.call(ke,Ut,gt);break t}Ut=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ce.payload,gt=typeof te=="function"?te.call(ke,Ut,gt):te,gt==null)break t;Ut=v({},Ut,gt);break t;case 2:ba=!0}}gt=R.callback,gt!==null&&(e.flags|=64,Mt&&(e.flags|=8192),Mt=f.callbacks,Mt===null?f.callbacks=[gt]:Mt.push(gt))}else Mt={lane:gt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},At===null?(ht=At=Mt,V=Ut):At=At.next=Mt,S|=gt;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Mt=R,R=Mt.next,Mt.next=null,f.lastBaseUpdate=Mt,f.shared.pending=null}}while(!0);At===null&&(V=Ut),f.baseState=V,f.firstBaseUpdate=ht,f.lastBaseUpdate=At,d===null&&(f.shared.lanes=0),Ua|=S,e.lanes=S,e.memoizedState=Ut}}function Lm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Nm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Lm(r[e],i)}var Qr=N(null),Dl=N(0);function Om(e,i){e=ea,tt(Dl,e),tt(Qr,i),ea=e|i.baseLanes}function ef(){tt(Dl,ea),tt(Qr,Qr.current)}function nf(){ea=Dl.current,at(Qr),at(Dl)}var ei=N(null),pi=null;function Ra(e){var i=e.alternate;tt(rn,rn.current&1),tt(ei,e),pi===null&&(i===null||Qr.current!==null||i.memoizedState!==null)&&(pi=e)}function af(e){tt(rn,rn.current),tt(ei,e),pi===null&&(pi=e)}function Fm(e){e.tag===22?(tt(rn,rn.current),tt(ei,e),pi===null&&(pi=e)):Ca()}function Ca(){tt(rn,rn.current),tt(ei,ei.current)}function ni(e){at(ei),pi===e&&(pi=null),at(rn)}var rn=N(0);function Ul(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||uh(r)||fh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,me=null,Ge=null,un=null,Ll=!1,Jr=!1,dr=!1,Nl=0,co=0,$r=null,iS=0;function nn(){throw Error(a(321))}function rf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!$n(e[r],i[r]))return!1;return!0}function sf(e,i,r,l,f,d){return Yi=d,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?_g:Sf,dr=!1,d=r(l,f),dr=!1,Jr&&(d=zm(i,r,l,f)),Pm(e),d}function Pm(e){B.H=ho;var i=Ge!==null&&Ge.next!==null;if(Yi=0,un=Ge=me=null,Ll=!1,co=0,$r=null,i)throw Error(a(300));e===null||fn||(e=e.dependencies,e!==null&&El(e)&&(fn=!0))}function zm(e,i,r,l){me=e;var f=0;do{if(Jr&&($r=null),co=0,Jr=!1,25<=f)throw Error(a(301));if(f+=1,un=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=yg,d=i(r,l)}while(Jr);return d}function aS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?uo(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(me.flags|=1024),i}function of(){var e=Nl!==0;return Nl=0,e}function lf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function cf(e){if(Ll){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ll=!1}Yi=0,un=Ge=me=null,Jr=!1,co=Nl=0,$r=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?me.memoizedState=un=e:un=un.next=e,un}function sn(){if(Ge===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=un===null?me.memoizedState:un.next;if(i!==null)un=i,Ge=e;else{if(e===null)throw me.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?me.memoizedState=un=e:un=un.next=e}return un}function Ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var i=co;return co+=1,$r===null&&($r=[]),e=Rm($r,e,i),i=me,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?_g:Sf),e}function Fl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===D)return An(e)}throw Error(a(438,String(e)))}function uf(e){var i=null,r=me.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Ol(),me.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=C;return i.index++,r}function ji(e,i){return typeof i=="function"?i(e):i}function Pl(e){var i=sn();return ff(i,Ge,e)}function ff(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var R=S=null,V=null,ht=i,At=!1;do{var Ut=ht.lane&-536870913;if(Ut!==ht.lane?(Ae&Ut)===Ut:(Yi&Ut)===Ut){var gt=ht.revertLane;if(gt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null}),Ut===Yr&&(At=!0);else if((Yi&gt)===gt){ht=ht.next,gt===Yr&&(At=!0);continue}else Ut={lane:0,revertLane:ht.revertLane,gesture:null,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},V===null?(R=V=Ut,S=d):V=V.next=Ut,me.lanes|=gt,Ua|=gt;Ut=ht.action,dr&&r(d,Ut),d=ht.hasEagerState?ht.eagerState:r(d,Ut)}else gt={lane:Ut,revertLane:ht.revertLane,gesture:ht.gesture,action:ht.action,hasEagerState:ht.hasEagerState,eagerState:ht.eagerState,next:null},V===null?(R=V=gt,S=d):V=V.next=gt,me.lanes|=Ut,Ua|=Ut;ht=ht.next}while(ht!==null&&ht!==i);if(V===null?S=d:V.next=R,!$n(d,e.memoizedState)&&(fn=!0,At&&(r=jr,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function hf(e){var i=sn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);$n(d,i.memoizedState)||(fn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Bm(e,i,r){var l=me,f=sn(),d=De;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!$n((Ge||f).memoizedState,r);if(S&&(f.memoizedState=r,fn=!0),f=f.queue,mf(Gm.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ts(9,{destroy:void 0},Hm.bind(null,l,f,r,i),null),qe===null)throw Error(a(349));d||(Yi&127)!==0||Im(l,i,r)}return r}function Im(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=me.updateQueue,i===null?(i=Ol(),me.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Hm(e,i,r,l){i.value=r,i.getSnapshot=l,Vm(i)&&km(e)}function Gm(e,i,r){return r(function(){Vm(i)&&km(e)})}function Vm(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!$n(e,r)}catch{return!0}}function km(e){var i=ar(e,2);i!==null&&Zn(i,e,2)}function df(e){var i=Bn();if(typeof e=="function"){var r=e;if(e=r(),dr){Bt(!0);try{r()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},i}function Xm(e,i,r,l){return e.baseState=r,ff(e,Ge,typeof l=="function"?l:ji)}function rS(e,i,r,l,f){if(Il(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};B.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,Wm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function Wm(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=B.T,S={};B.T=S;try{var R=r(f,l),V=B.S;V!==null&&V(S,R),qm(e,i,R)}catch(ht){pf(e,i,ht)}finally{d!==null&&S.types!==null&&(d.types=S.types),B.T=d}}else try{d=r(f,l),qm(e,i,d)}catch(ht){pf(e,i,ht)}}function qm(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Ym(e,i,l)},function(l){return pf(e,i,l)}):Ym(e,i,r)}function Ym(e,i,r){i.status="fulfilled",i.value=r,jm(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Wm(e,r)))}function pf(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,jm(i),i=i.next;while(i!==l)}e.action=null}function jm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Zm(e,i){return i}function Km(e,i){if(De){var r=qe.formState;if(r!==null){t:{var l=me;if(De){if(Ze){e:{for(var f=Ze,d=di;f.nodeType!==8;){if(!d){f=null;break e}if(f=mi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Ze=mi(f.nextSibling),l=f.data==="F!";break t}}Ma(l)}l=!1}l&&(i=r[0])}}return r=Bn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:i},r.queue=l,r=mg.bind(null,me,l),l.dispatch=r,l=df(!1),d=xf.bind(null,me,!1,l.queue),l=Bn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=rS.bind(null,me,f,d,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function Qm(e){var i=sn();return Jm(i,Ge,e)}function Jm(e,i,r){if(i=ff(e,i,Zm)[0],e=Pl(ji)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=uo(i)}catch(S){throw S===Zr?Al:S}else l=i;i=sn();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(me.flags|=2048,ts(9,{destroy:void 0},sS.bind(null,f,r),null)),[l,d,e]}function sS(e,i){e.action=i}function $m(e){var i=sn(),r=Ge;if(r!==null)return Jm(i,r,e);sn(),i=i.memoizedState,r=sn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function ts(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=Ol(),me.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function tg(){return sn().memoizedState}function zl(e,i,r,l){var f=Bn();me.flags|=e,f.memoizedState=ts(1|i,{destroy:void 0},r,l===void 0?null:l)}function Bl(e,i,r,l){var f=sn();l=l===void 0?null:l;var d=f.memoizedState.inst;Ge!==null&&l!==null&&rf(l,Ge.memoizedState.deps)?f.memoizedState=ts(i,d,r,l):(me.flags|=e,f.memoizedState=ts(1|i,d,r,l))}function eg(e,i){zl(8390656,8,e,i)}function mf(e,i){Bl(2048,8,e,i)}function oS(e){me.flags|=4;var i=me.updateQueue;if(i===null)i=Ol(),me.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function ng(e){var i=sn().memoizedState;return oS({ref:i,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function ig(e,i){return Bl(4,2,e,i)}function ag(e,i){return Bl(4,4,e,i)}function rg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function sg(e,i,r){r=r!=null?r.concat([e]):null,Bl(4,4,rg.bind(null,i,e),r)}function gf(){}function og(e,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&rf(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function lg(e,i){var r=sn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&rf(i,l[1]))return l[0];if(l=e(),dr){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,i],l}function vf(e,i,r){return r===void 0||(Yi&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=c0(),me.lanes|=e,Ua|=e,r)}function cg(e,i,r,l){return $n(r,i)?r:Qr.current!==null?(e=vf(e,r,l),$n(e,i)||(fn=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Ae&261930)===0?(fn=!0,e.memoizedState=r):(e=c0(),me.lanes|=e,Ua|=e,i)}function ug(e,i,r,l,f){var d=st.p;st.p=d!==0&&8>d?d:8;var S=B.T,R={};B.T=R,xf(e,!1,i,r);try{var V=f(),ht=B.S;if(ht!==null&&ht(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var At=nS(V,l);fo(e,i,At,ri(e))}else fo(e,i,l,ri(e))}catch(Ut){fo(e,i,{then:function(){},status:"rejected",reason:Ut},ri())}finally{st.p=d,S!==null&&R.types!==null&&(S.types=R.types),B.T=S}}function lS(){}function _f(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=fg(e).queue;ug(e,f,i,K,r===null?lS:function(){return hg(e),r(l)})}function fg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:K},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function hg(e){var i=fg(e);i.next===null&&(i=e.alternate.memoizedState),fo(e,i.next.queue,{},ri())}function yf(){return An(wo)}function dg(){return sn().memoizedState}function pg(){return sn().memoizedState}function cS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=ri();e=Ta(r);var l=Aa(i,e,r);l!==null&&(Zn(l,i,r),so(l,i,r)),i={cache:Yu()},e.payload=i;return}i=i.return}}function uS(e,i,r){var l=ri();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Il(e)?gg(i,r):(r=Pu(e,i,r,l),r!==null&&(Zn(r,e,l),vg(r,i,l)))}function mg(e,i,r){var l=ri();fo(e,i,r,l)}function fo(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Il(e))gg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,R=d(S,r);if(f.hasEagerState=!0,f.eagerState=R,$n(R,S))return yl(e,i,f,0),qe===null&&_l(),!1}catch{}finally{}if(r=Pu(e,i,f,l),r!==null)return Zn(r,e,l),vg(r,i,l),!0}return!1}function xf(e,i,r,l){if(l={lane:2,revertLane:Jf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(i)throw Error(a(479))}else i=Pu(e,r,l,2),i!==null&&Zn(i,e,2)}function Il(e){var i=e.alternate;return e===me||i!==null&&i===me}function gg(e,i){Jr=Ll=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function vg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,ln(e,r)}}var ho={readContext:An,use:Fl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};ho.useEffectEvent=nn;var _g={readContext:An,use:Fl,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:eg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,zl(4194308,4,rg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return zl(4194308,4,e,i)},useInsertionEffect:function(e,i){zl(4,2,e,i)},useMemo:function(e,i){var r=Bn();i=i===void 0?null:i;var l=e();if(dr){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Bn();if(r!==void 0){var f=r(i);if(dr){Bt(!0);try{r(i)}finally{Bt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=uS.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,r=mg.bind(null,me,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:gf,useDeferredValue:function(e,i){var r=Bn();return vf(r,e,i)},useTransition:function(){var e=df(!1);return e=ug.bind(null,me,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=me,f=Bn();if(De){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),qe===null)throw Error(a(349));(Ae&127)!==0||Im(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,eg(Gm.bind(null,l,d,e),[e]),l.flags|=2048,ts(9,{destroy:void 0},Hm.bind(null,l,d,r,i),null),r},useId:function(){var e=Bn(),i=qe.identifierPrefix;if(De){var r=Ni,l=Li;r=(l&~(1<<32-ne(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Nl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=iS++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:yf,useFormState:Km,useActionState:Km,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=xf.bind(null,me,!0,r),r.dispatch=i,[e,i]},useMemoCache:uf,useCacheRefresh:function(){return Bn().memoizedState=cS.bind(null,me)},useEffectEvent:function(e){var i=Bn(),r={impl:e};return i.memoizedState=r,function(){if((Pe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Sf={readContext:An,use:Fl,useCallback:og,useContext:An,useEffect:mf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:Pl,useRef:tg,useState:function(){return Pl(ji)},useDebugValue:gf,useDeferredValue:function(e,i){var r=sn();return cg(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Pl(ji)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:uo(e),i]},useSyncExternalStore:Bm,useId:dg,useHostTransitionStatus:yf,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,i){var r=sn();return Xm(r,Ge,e,i)},useMemoCache:uf,useCacheRefresh:pg};Sf.useEffectEvent=ng;var yg={readContext:An,use:Fl,useCallback:og,useContext:An,useEffect:mf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:hf,useRef:tg,useState:function(){return hf(ji)},useDebugValue:gf,useDeferredValue:function(e,i){var r=sn();return Ge===null?vf(r,e,i):cg(r,Ge.memoizedState,e,i)},useTransition:function(){var e=hf(ji)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:uo(e),i]},useSyncExternalStore:Bm,useId:dg,useHostTransitionStatus:yf,useFormState:$m,useActionState:$m,useOptimistic:function(e,i){var r=sn();return Ge!==null?Xm(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:uf,useCacheRefresh:pg};yg.useEffectEvent=ng;function Mf(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ef={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=ri(),f=Ta(l);f.payload=i,r!=null&&(f.callback=r),i=Aa(e,f,l),i!==null&&(Zn(i,e,l),so(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=ri(),f=Ta(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Aa(e,f,l),i!==null&&(Zn(i,e,l),so(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=ri(),l=Ta(r);l.tag=2,i!=null&&(l.callback=i),i=Aa(e,l,r),i!==null&&(Zn(i,e,r),so(i,e,r))}};function xg(e,i,r,l,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Js(r,l)||!Js(f,d):!0}function Sg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Ef.enqueueReplaceState(i,i.state,null)}function pr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function Mg(e){vl(e)}function Eg(e){console.error(e)}function bg(e){vl(e)}function Hl(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Tg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function bf(e,i,r){return r=Ta(r),r.tag=3,r.payload={element:null},r.callback=function(){Hl(e,i)},r}function Ag(e){return e=Ta(e),e.tag=3,e}function Rg(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){Tg(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Tg(i,r,l),typeof f!="function"&&(La===null?La=new Set([this]):La.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function fS(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&qr(i,r,f,!0),r=ei.current,r!==null){switch(r.tag){case 31:case 13:return pi===null?Jl():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Rl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Zf(e,l,f)),!1;case 22:return r.flags|=65536,l===Rl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Zf(e,l,f)),!1}throw Error(a(435,r.tag))}return Zf(e,l,f),Jl(),!1}if(De)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Vu&&(e=Error(a(422),{cause:l}),eo(ui(e,r)))):(l!==Vu&&(i=Error(a(423),{cause:l}),eo(ui(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=ui(l,r),f=bf(e.stateNode,l,f),$u(e,f),an!==4&&(an=2)),!1;var d=Error(a(520),{cause:l});if(d=ui(d,r),So===null?So=[d]:So.push(d),an!==4&&(an=2),i===null)return!0;l=ui(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=bf(r.stateNode,l,e),$u(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(La===null||!La.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Ag(f),Rg(f,e,r,l),$u(r,f),!1}r=r.return}while(r!==null);return!1}var Tf=Error(a(461)),fn=!1;function Rn(e,i,r,l){i.child=e===null?Um(i,null,r,l):hr(i,e.child,r,l)}function Cg(e,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var S={};for(var R in l)R!=="ref"&&(S[R]=l[R])}else S=l;return lr(i),l=sf(e,i,r,S,d,f),R=of(),e!==null&&!fn?(lf(e,i,f),Zi(e,i,f)):(De&&R&&Hu(i),i.flags|=1,Rn(e,i,l,f),i.child)}function wg(e,i,r,l,f){if(e===null){var d=r.type;return typeof d=="function"&&!zu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Dg(e,i,d,l,f)):(e=Sl(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Nf(e,f)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Js,r(S,l)&&e.ref===i.ref)return Zi(e,i,f)}return i.flags|=1,e=ki(d,l),e.ref=i.ref,e.return=i,i.child=e}function Dg(e,i,r,l,f){if(e!==null){var d=e.memoizedProps;if(Js(d,l)&&e.ref===i.ref)if(fn=!1,i.pendingProps=l=d,Nf(e,f))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,Zi(e,i,f)}return Af(e,i,r,l,f)}function Ug(e,i,r,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Lg(e,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tl(i,d!==null?d.cachePool:null),d!==null?Om(i,d):ef(),Fm(i);else return l=i.lanes=536870912,Lg(e,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(Tl(i,d.cachePool),Om(i,d),Ca(),i.memoizedState=null):(e!==null&&Tl(i,null),ef(),Ca());return Rn(e,i,f,r),i.child}function po(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Lg(e,i,r,l,f){var d=Zu();return d=d===null?null:{parent:cn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&Tl(i,null),ef(),Fm(i),e!==null&&qr(e,i,l,!0),i.childLanes=f,null}function Gl(e,i){return i=kl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Ng(e,i,r){return hr(i,e.child,null,r),e=Gl(i,i.pendingProps),e.flags|=2,ni(i),i.memoizedState=null,e}function hS(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(De){if(l.mode==="hidden")return e=Gl(i,l),i.lanes=536870912,po(null,e);if(af(i),(e=Ze)?(e=W0(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=gm(e),r.return=i,i.child=r,Tn=i,Ze=null)):e=null,e===null)throw Ma(i);return i.lanes=536870912,null}return Gl(i,l)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(af(i),f)if(i.flags&256)i.flags&=-257,i=Ng(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(fn||qr(e,i,r,!1),f=(r&e.childLanes)!==0,fn||f){if(l=qe,l!==null&&(S=wn(l,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,ar(e,S),Zn(l,e,S),Tf;Jl(),i=Ng(e,i,r)}else e=d.treeContext,Ze=mi(S.nextSibling),Tn=i,De=!0,Sa=null,di=!1,e!==null&&ym(i,e),i=Gl(i,l),i.flags|=4096;return i}return e=ki(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Vl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Af(e,i,r,l,f){return lr(i),r=sf(e,i,r,l,void 0,f),l=of(),e!==null&&!fn?(lf(e,i,f),Zi(e,i,f)):(De&&l&&Hu(i),i.flags|=1,Rn(e,i,r,f),i.child)}function Og(e,i,r,l,f,d){return lr(i),i.updateQueue=null,r=zm(i,l,r,f),Pm(e),l=of(),e!==null&&!fn?(lf(e,i,d),Zi(e,i,d)):(De&&l&&Hu(i),i.flags|=1,Rn(e,i,r,d),i.child)}function Fg(e,i,r,l,f){if(lr(i),i.stateNode===null){var d=Vr,S=r.contextType;typeof S=="object"&&S!==null&&(d=An(S)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Qu(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?An(S):Vr,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Mf(i,r,S,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Ef.enqueueReplaceState(d,d.state,null),lo(i,l,d,f),oo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,V=pr(r,R);d.props=V;var ht=d.context,At=r.contextType;S=Vr,typeof At=="object"&&At!==null&&(S=An(At));var Ut=r.getDerivedStateFromProps;At=typeof Ut=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,At||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ht!==S)&&Sg(i,d,l,S),ba=!1;var gt=i.memoizedState;d.state=gt,lo(i,l,d,f),oo(),ht=i.memoizedState,R||gt!==ht||ba?(typeof Ut=="function"&&(Mf(i,r,Ut,l),ht=i.memoizedState),(V=ba||xg(i,r,V,l,gt,ht,S))?(At||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ht),d.props=l,d.state=ht,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ju(e,i),S=i.memoizedProps,At=pr(r,S),d.props=At,Ut=i.pendingProps,gt=d.context,ht=r.contextType,V=Vr,typeof ht=="object"&&ht!==null&&(V=An(ht)),R=r.getDerivedStateFromProps,(ht=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Ut||gt!==V)&&Sg(i,d,l,V),ba=!1,gt=i.memoizedState,d.state=gt,lo(i,l,d,f),oo();var Mt=i.memoizedState;S!==Ut||gt!==Mt||ba||e!==null&&e.dependencies!==null&&El(e.dependencies)?(typeof R=="function"&&(Mf(i,r,R,l),Mt=i.memoizedState),(At=ba||xg(i,r,At,l,gt,Mt,V)||e!==null&&e.dependencies!==null&&El(e.dependencies))?(ht||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Mt,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Mt,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&gt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&gt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Mt),d.props=l,d.state=Mt,d.context=V,l=At):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&gt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&gt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Vl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=hr(i,e.child,null,f),i.child=hr(i,null,r,f)):Rn(e,i,r,f),i.memoizedState=d.state,e=i.child):e=Zi(e,i,f),e}function Pg(e,i,r,l){return sr(),i.flags|=256,Rn(e,i,r,l),i.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(e){return{baseLanes:e,cachePool:Tm()}}function wf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=ai),e}function zg(e,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(De){if(f?Ra(i):Ca(),(e=Ze)?(e=W0(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},r=gm(e),r.return=i,i.child=r,Tn=i,Ze=null)):e=null,e===null)throw Ma(i);return fh(e)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ca(),f=i.mode,R=kl({mode:"hidden",children:R},f),l=rr(l,f,r,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=Cf(r),l.childLanes=wf(e,S,r),i.memoizedState=Rf,po(null,l)):(Ra(i),Df(i,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)i.flags&256?(Ra(i),i.flags&=-257,i=Uf(e,i,r)):i.memoizedState!==null?(Ca(),i.child=e.child,i.flags|=128,i=null):(Ca(),R=l.fallback,f=i.mode,l=kl({mode:"visible",children:l.children},f),R=rr(R,f,r,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,hr(i,e.child,null,r),l=i.child,l.memoizedState=Cf(r),l.childLanes=wf(e,S,r),i.memoizedState=Rf,i=po(null,l));else if(Ra(i),fh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ht=S.dgst;S=ht,l=Error(a(419)),l.stack="",l.digest=S,eo({value:l,source:null,stack:null}),i=Uf(e,i,r)}else if(fn||qr(e,i,r,!1),S=(r&e.childLanes)!==0,fn||S){if(S=qe,S!==null&&(l=wn(S,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,ar(e,l),Zn(S,e,l),Tf;uh(R)||Jl(),i=Uf(e,i,r)}else uh(R)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ze=mi(R.nextSibling),Tn=i,De=!0,Sa=null,di=!1,e!==null&&ym(i,e),i=Df(i,l.children),i.flags|=4096);return i}return f?(Ca(),R=l.fallback,f=i.mode,V=e.child,ht=V.sibling,l=ki(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ht!==null?R=ki(ht,R):(R=rr(R,f,r,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,po(null,l),l=i.child,R=e.child.memoizedState,R===null?R=Cf(r):(f=R.cachePool,f!==null?(V=cn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Tm(),R={baseLanes:R.baseLanes|r,cachePool:f}),l.memoizedState=R,l.childLanes=wf(e,S,r),i.memoizedState=Rf,po(e.child,l)):(Ra(i),r=e.child,e=r.sibling,r=ki(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function Df(e,i){return i=kl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function kl(e,i){return e=ti(22,e,null,i),e.lanes=0,e}function Uf(e,i,r){return hr(i,e.child,null,r),e=Df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Bg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Wu(e.return,i,r)}function Lf(e,i,r,l,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=d)}function Ig(e,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=rn.current,R=(S&2)!==0;if(R?(S=S&1|2,i.flags|=128):S&=1,tt(rn,S),Rn(e,i,l,r),l=De?to:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bg(e,r,i);else if(e.tag===19)Bg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&Ul(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Lf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Ul(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}Lf(i,!0,r,null,d,l);break;case"together":Lf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Zi(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Ua|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(qr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=ki(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ki(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Nf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&El(e)))}function dS(e,i,r){switch(i.tag){case 3:vt(i,i.stateNode.containerInfo),Ea(i,cn,e.memoizedState.cache),sr();break;case 27:case 5:Ft(i);break;case 4:vt(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,af(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ra(i),i.flags|=128,null):(r&i.child.childLanes)!==0?zg(e,i,r):(Ra(i),e=Zi(e,i,r),e!==null?e.sibling:null);Ra(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(qr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return Ig(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),tt(rn,rn.current),l)break;return null;case 22:return i.lanes=0,Ug(e,i,r,i.pendingProps);case 24:Ea(i,cn,e.memoizedState.cache)}return Zi(e,i,r)}function Hg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!Nf(e,r)&&(i.flags&128)===0)return fn=!1,dS(e,i,r);fn=(e.flags&131072)!==0}else fn=!1,De&&(i.flags&1048576)!==0&&_m(i,to,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=ur(i.elementType),i.type=e,typeof e=="function")zu(e)?(l=pr(e,l),i.tag=1,i=Fg(null,i,e,l,r)):(i.tag=0,i=Af(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===w){i.tag=11,i=Cg(null,i,e,l,r);break t}else if(f===P){i.tag=14,i=wg(null,i,e,l,r);break t}}throw i=_t(e)||e,Error(a(306,i,""))}}return i;case 0:return Af(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=pr(l,i.pendingProps),Fg(e,i,l,f,r);case 3:t:{if(vt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Ju(e,i),lo(i,l,null,r);var S=i.memoizedState;if(l=S.cache,Ea(i,cn,l),l!==d.cache&&qu(i,[cn],r,!0),oo(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Pg(e,i,l,r);break t}else if(l!==f){f=ui(Error(a(424)),i),eo(f),i=Pg(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=mi(e.firstChild),Tn=i,De=!0,Sa=null,di=!0,r=Um(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(sr(),l===f){i=Zi(e,i,r);break t}Rn(e,i,l,r)}i=i.child}return i;case 26:return Vl(e,i),e===null?(r=Q0(i.type,null,i.pendingProps,null))?i.memoizedState=r:De||(r=i.type,e=i.pendingProps,l=rc(Y.current).createElement(r),l[tn]=i,l[En]=e,Cn(l,r,e),J(l),i.stateNode=l):i.memoizedState=Q0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ft(i),e===null&&De&&(l=i.stateNode=j0(i.type,i.pendingProps,Y.current),Tn=i,di=!0,f=Ze,Pa(i.type)?(hh=f,Ze=mi(l.firstChild)):Ze=f),Rn(e,i,i.pendingProps.children,r),Vl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&De&&((f=l=Ze)&&(l=kS(l,i.type,i.pendingProps,di),l!==null?(i.stateNode=l,Tn=i,Ze=mi(l.firstChild),di=!1,f=!0):f=!1),f||Ma(i)),Ft(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,l=d.children,oh(f,d)?l=null:S!==null&&oh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=sf(e,i,aS,null,null,r),wo._currentValue=f),Vl(e,i),Rn(e,i,l,r),i.child;case 6:return e===null&&De&&((e=r=Ze)&&(r=XS(r,i.pendingProps,di),r!==null?(i.stateNode=r,Tn=i,Ze=null,e=!0):e=!1),e||Ma(i)),null;case 13:return zg(e,i,r);case 4:return vt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=hr(i,null,l,r):Rn(e,i,l,r),i.child;case 11:return Cg(e,i,i.type,i.pendingProps,r);case 7:return Rn(e,i,i.pendingProps,r),i.child;case 8:return Rn(e,i,i.pendingProps.children,r),i.child;case 12:return Rn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ea(i,i.type,l.value),Rn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,lr(i),f=An(f),l=l(f),i.flags|=1,Rn(e,i,l,r),i.child;case 14:return wg(e,i,i.type,i.pendingProps,r);case 15:return Dg(e,i,i.type,i.pendingProps,r);case 19:return Ig(e,i,r);case 31:return hS(e,i,r);case 22:return Ug(e,i,r,i.pendingProps);case 24:return lr(i),l=An(cn),e===null?(f=Zu(),f===null&&(f=qe,d=Yu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},Qu(i),Ea(i,cn,f)):((e.lanes&r)!==0&&(Ju(e,i),lo(i,null,null,r),oo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ea(i,cn,l)):(l=d.cache,Ea(i,cn,l),l!==f.cache&&qu(i,[cn],r,!0))),Rn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ki(e){e.flags|=4}function Of(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(d0())e.flags|=8192;else throw fr=Rl,Ku}else e.flags&=-16777217}function Gg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!nv(i))if(d0())e.flags|=8192;else throw fr=Rl,Ku}function Xl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ye():536870912,e.lanes|=i,as|=i)}function mo(e,i){if(!De)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function pS(e,i,r){var l=i.pendingProps;switch(Gu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qi(cn),wt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wr(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ku())),Ke(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(Ki(i),d!==null?(Ke(i),Gg(i,d)):(Ke(i),Of(i,f,null,l,r))):d?d!==e.memoizedState?(Ki(i),Ke(i),Gg(i,d)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ki(i),Ke(i),Of(i,f,e,l,r)),null;case 27:if(Ot(i),r=Y.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}e=z.current,Wr(i)?xm(i):(e=j0(f,l,r),i.stateNode=e,Ki(i))}return Ke(i),null;case 5:if(Ot(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}if(d=z.current,Wr(i))xm(i);else{var S=rc(Y.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[tn]=i,d[En]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Cn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ki(i)}}return Ke(i),Of(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=Y.current,Wr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Tn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[tn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||z0(e.nodeValue,r)),e||Ma(i,!0)}else e=rc(e).createTextNode(l),e[tn]=i,i.stateNode=e}return Ke(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Wr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[tn]=i}else sr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else r=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ni(i),i):(ni(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ke(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Wr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[tn]=i}else sr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),f=!1}else f=ku(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ni(i),i):(ni(i),null)}return ni(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Xl(i,i.updateQueue),Ke(i),null);case 4:return wt(),e===null&&nh(i.stateNode.containerInfo),Ke(i),null;case 10:return qi(i.type),Ke(i),null;case 19:if(at(rn),l=i.memoizedState,l===null)return Ke(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)mo(l,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Ul(e),d!==null){for(i.flags|=128,mo(l,!1),e=d.updateQueue,i.updateQueue=e,Xl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)mm(r,e),r=r.sibling;return tt(rn,rn.current&1|2),De&&Xi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Q()>Zl&&(i.flags|=128,f=!0,mo(l,!1),i.lanes=4194304)}else{if(!f)if(e=Ul(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Xl(i,e),mo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!De)return Ke(i),null}else 2*Q()-l.renderingStartTime>Zl&&r!==536870912&&(i.flags|=128,f=!0,mo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Q(),e.sibling=null,r=rn.current,tt(rn,f?r&1|2:r&1),De&&Xi(i,l.treeForkCount),e):(Ke(i),null);case 22:case 23:return ni(i),nf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),r=i.updateQueue,r!==null&&Xl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&at(cr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),qi(cn),Ke(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function mS(e,i){switch(Gu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return qi(cn),wt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ot(i),null;case 31:if(i.memoizedState!==null){if(ni(i),i.alternate===null)throw Error(a(340));sr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));sr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return at(rn),null;case 4:return wt(),null;case 10:return qi(i.type),null;case 22:case 23:return ni(i),nf(),e!==null&&at(cr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return qi(cn),null;case 25:return null;default:return null}}function Vg(e,i){switch(Gu(i),i.tag){case 3:qi(cn),wt();break;case 26:case 27:case 5:Ot(i);break;case 4:wt();break;case 31:i.memoizedState!==null&&ni(i);break;case 13:ni(i);break;case 19:at(rn);break;case 10:qi(i.type);break;case 22:case 23:ni(i),nf(),e!==null&&at(cr);break;case 24:qi(cn)}}function go(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var d=r.create,S=r.inst;l=d(),S.destroy=l}r=r.next}while(r!==f)}}catch(R){Ie(i,i.return,R)}}function wa(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var S=l.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,f=i;var V=r,ht=R;try{ht()}catch(At){Ie(f,V,At)}}}l=l.next}while(l!==d)}}catch(At){Ie(i,i.return,At)}}function kg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Nm(i,r)}catch(l){Ie(e,e.return,l)}}}function Xg(e,i,r){r.props=pr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ie(e,i,l)}}function vo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Ie(e,i,f)}}function Oi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ie(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ie(e,i,f)}else r.current=null}function Wg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ie(e,e.return,f)}}function Ff(e,i,r){try{var l=e.stateNode;zS(l,e.type,r,i),l[En]=i}catch(f){Ie(e,e.return,f)}}function qg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Gi));else if(l!==4&&(l===27&&Pa(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(zf(e,i,r),e=e.sibling;e!==null;)zf(e,i,r),e=e.sibling}function Wl(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Pa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Wl(e,i,r),e=e.sibling;e!==null;)Wl(e,i,r),e=e.sibling}function Yg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Cn(i,l,r),i[tn]=e,i[En]=r}catch(d){Ie(e,e.return,d)}}var Qi=!1,hn=!1,Bf=!1,jg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function gS(e,i){if(e=e.containerInfo,rh=hc,e=sm(e),Du(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var S=0,R=-1,V=-1,ht=0,At=0,Ut=e,gt=null;e:for(;;){for(var Mt;Ut!==r||f!==0&&Ut.nodeType!==3||(R=S+f),Ut!==d||l!==0&&Ut.nodeType!==3||(V=S+l),Ut.nodeType===3&&(S+=Ut.nodeValue.length),(Mt=Ut.firstChild)!==null;)gt=Ut,Ut=Mt;for(;;){if(Ut===e)break e;if(gt===r&&++ht===f&&(R=S),gt===d&&++At===l&&(V=S),(Mt=Ut.nextSibling)!==null)break;Ut=gt,gt=Ut.parentNode}Ut=Mt}r=R===-1||V===-1?null:{start:R,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(sh={focusedElem:e,selectionRange:r},hc=!1,xn=i;xn!==null;)if(i=xn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,xn=e;else for(;xn!==null;){switch(i=xn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var te=pr(r.type,f);e=l.getSnapshotBeforeUpdate(te,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ie(r,r.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)ch(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ch(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,xn=e;break}xn=i.return}}function Zg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:$i(e,r),l&4&&go(5,r);break;case 1:if($i(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Ie(r,r.return,S)}else{var f=pr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ie(r,r.return,S)}}l&64&&kg(r),l&512&&vo(r,r.return);break;case 3:if($i(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Nm(e,i)}catch(S){Ie(r,r.return,S)}}break;case 27:i===null&&l&4&&Yg(r);case 26:case 5:$i(e,r),i===null&&l&4&&Wg(r),l&512&&vo(r,r.return);break;case 12:$i(e,r);break;case 31:$i(e,r),l&4&&Jg(e,r);break;case 13:$i(e,r),l&4&&$g(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=TS.bind(null,r),WS(e,r))));break;case 22:if(l=r.memoizedState!==null||Qi,!l){i=i!==null&&i.memoizedState!==null||hn,f=Qi;var d=hn;Qi=l,(hn=i)&&!d?ta(e,r,(r.subtreeFlags&8772)!==0):$i(e,r),Qi=f,hn=d}break;case 30:break;default:$i(e,r)}}function Kg(e){var i=e.alternate;i!==null&&(e.alternate=null,Kg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Xs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Wn=!1;function Ji(e,i,r){for(r=r.child;r!==null;)Qg(e,i,r),r=r.sibling}function Qg(e,i,r){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Xt,r)}catch{}switch(r.tag){case 26:hn||Oi(r,i),Ji(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:hn||Oi(r,i);var l=Je,f=Wn;Pa(r.type)&&(Je=r.stateNode,Wn=!1),Ji(e,i,r),Ao(r.stateNode),Je=l,Wn=f;break;case 5:hn||Oi(r,i);case 6:if(l=Je,f=Wn,Je=null,Ji(e,i,r),Je=l,Wn=f,Je!==null)if(Wn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(d){Ie(r,i,d)}else try{Je.removeChild(r.stateNode)}catch(d){Ie(r,i,d)}break;case 18:Je!==null&&(Wn?(e=Je,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),hs(e)):k0(Je,r.stateNode));break;case 4:l=Je,f=Wn,Je=r.stateNode.containerInfo,Wn=!0,Ji(e,i,r),Je=l,Wn=f;break;case 0:case 11:case 14:case 15:wa(2,r,i),hn||wa(4,r,i),Ji(e,i,r);break;case 1:hn||(Oi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Xg(r,i,l)),Ji(e,i,r);break;case 21:Ji(e,i,r);break;case 22:hn=(l=hn)||r.memoizedState!==null,Ji(e,i,r),hn=l;break;default:Ji(e,i,r)}}function Jg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hs(e)}catch(r){Ie(i,i.return,r)}}}function $g(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hs(e)}catch(r){Ie(i,i.return,r)}}function vS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new jg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new jg),i;default:throw Error(a(435,e.tag))}}function ql(e,i){var r=vS(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=AS.bind(null,e,l);l.then(f,f)}})}function qn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=e,S=i,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(Pa(R.type)){Je=R.stateNode,Wn=!1;break t}break;case 5:Je=R.stateNode,Wn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Wn=!0;break t}R=R.return}if(Je===null)throw Error(a(160));Qg(d,S,f),Je=null,Wn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)t0(i,e),i=i.sibling}var bi=null;function t0(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),l&4&&(wa(3,e,e.return),go(3,e),wa(5,e,e.return));break;case 1:qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),l&64&&Qi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=bi;if(qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[tr]||d[tn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Cn(d,l,r),d[tn]=e,J(d),l=d;break t;case"link":var S=tv("link","href",f).get(l+(r.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(R,1);break e}}d=f.createElement(l),Cn(d,l,r),f.head.appendChild(d);break;case"meta":if(S=tv("meta","content",f).get(l+(r.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(R,1);break e}}d=f.createElement(l),Cn(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[tn]=e,J(d),l=d}e.stateNode=l}else ev(f,e.type,e.stateNode);else e.stateNode=$0(f,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?ev(f,e.type,e.stateNode):$0(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,r.memoizedProps)}break;case 27:qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),r!==null&&l&4&&Ff(e,e.memoizedProps,r.memoizedProps);break;case 5:if(qn(i,e),Yn(e),l&512&&(hn||r===null||Oi(r,r.return)),e.flags&32){f=e.stateNode;try{kn(f,"")}catch(te){Ie(e,e.return,te)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Ff(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Bf=!0);break;case 6:if(qn(i,e),Yn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(te){Ie(e,e.return,te)}}break;case 3:if(lc=null,f=bi,bi=sc(i.containerInfo),qn(i,e),bi=f,Yn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{hs(i.containerInfo)}catch(te){Ie(e,e.return,te)}Bf&&(Bf=!1,e0(e));break;case 4:l=bi,bi=sc(e.stateNode.containerInfo),qn(i,e),Yn(e),bi=l;break;case 12:qn(i,e),Yn(e);break;case 31:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ql(e,l)));break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(jl=Q()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ql(e,l)));break;case 22:f=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,ht=Qi,At=hn;if(Qi=ht||f,hn=At||V,qn(i,e),hn=At,Qi=ht,Yn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||V||Qi||hn||mr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(d=V.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var Ut=V.memoizedProps.style,gt=Ut!=null&&Ut.hasOwnProperty("display")?Ut.display:null;R.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(te){Ie(V,V.return,te)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(te){Ie(V,V.return,te)}}}else if(i.tag===18){if(r===null){V=i;try{var Mt=V.stateNode;f?X0(Mt,!0):X0(V.stateNode,!1)}catch(te){Ie(V,V.return,te)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,ql(e,r))));break;case 19:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ql(e,l)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(qg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=Pf(e);Wl(e,d,f);break;case 5:var S=r.stateNode;r.flags&32&&(kn(S,""),r.flags&=-33);var R=Pf(e);Wl(e,R,S);break;case 3:case 4:var V=r.stateNode.containerInfo,ht=Pf(e);zf(e,ht,V);break;default:throw Error(a(161))}}catch(At){Ie(e,e.return,At)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function e0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;e0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function $i(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Zg(e,i.alternate,i),i=i.sibling}function mr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),mr(i);break;case 1:Oi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Xg(i,i.return,r),mr(i);break;case 27:Ao(i.stateNode);case 26:case 5:Oi(i,i.return),mr(i);break;case 22:i.memoizedState===null&&mr(i);break;case 30:mr(i);break;default:mr(i)}e=e.sibling}}function ta(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:ta(f,d,r),go(4,d);break;case 1:if(ta(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ht){Ie(l,l.return,ht)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Lm(V[f],R)}catch(ht){Ie(l,l.return,ht)}}r&&S&64&&kg(d),vo(d,d.return);break;case 27:Yg(d);case 26:case 5:ta(f,d,r),r&&l===null&&S&4&&Wg(d),vo(d,d.return);break;case 12:ta(f,d,r);break;case 31:ta(f,d,r),r&&S&4&&Jg(f,d);break;case 13:ta(f,d,r),r&&S&4&&$g(f,d);break;case 22:d.memoizedState===null&&ta(f,d,r),vo(d,d.return);break;case 30:break;default:ta(f,d,r)}i=i.sibling}}function If(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&no(r))}function Hf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&no(e))}function Ti(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)n0(e,i,r,l),i=i.sibling}function n0(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ti(e,i,r,l),f&2048&&go(9,i);break;case 1:Ti(e,i,r,l);break;case 3:Ti(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&no(e)));break;case 12:if(f&2048){Ti(e,i,r,l),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ie(i,i.return,V)}}else Ti(e,i,r,l);break;case 31:Ti(e,i,r,l);break;case 13:Ti(e,i,r,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ti(e,i,r,l):_o(e,i):d._visibility&2?Ti(e,i,r,l):(d._visibility|=2,es(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&If(S,i);break;case 24:Ti(e,i,r,l),f&2048&&Hf(i.alternate,i);break;default:Ti(e,i,r,l)}}function es(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,R=r,V=l,ht=S.flags;switch(S.tag){case 0:case 11:case 15:es(d,S,R,V,f),go(8,S);break;case 23:break;case 22:var At=S.stateNode;S.memoizedState!==null?At._visibility&2?es(d,S,R,V,f):_o(d,S):(At._visibility|=2,es(d,S,R,V,f)),f&&ht&2048&&If(S.alternate,S);break;case 24:es(d,S,R,V,f),f&&ht&2048&&Hf(S.alternate,S);break;default:es(d,S,R,V,f)}i=i.sibling}}function _o(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:_o(r,l),f&2048&&If(l.alternate,l);break;case 24:_o(r,l),f&2048&&Hf(l.alternate,l);break;default:_o(r,l)}i=i.sibling}}var yo=8192;function ns(e,i,r){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)i0(e,i,r),e=e.sibling}function i0(e,i,r){switch(e.tag){case 26:ns(e,i,r),e.flags&yo&&e.memoizedState!==null&&iM(r,bi,e.memoizedState,e.memoizedProps);break;case 5:ns(e,i,r);break;case 3:case 4:var l=bi;bi=sc(e.stateNode.containerInfo),ns(e,i,r),bi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yo,yo=16777216,ns(e,i,r),yo=l):ns(e,i,r));break;default:ns(e,i,r)}}function a0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function xo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];xn=l,s0(l,e)}a0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&wa(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Yl(e)):xo(e);break;default:xo(e)}}function Yl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];xn=l,s0(l,e)}a0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:wa(8,i,i.return),Yl(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Yl(i));break;default:Yl(i)}e=e.sibling}}function s0(e,i){for(;xn!==null;){var r=xn;switch(r.tag){case 0:case 11:case 15:wa(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:no(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,xn=l;else t:for(r=e;xn!==null;){l=xn;var f=l.sibling,d=l.return;if(Kg(l),l===r){xn=null;break t}if(f!==null){f.return=d,xn=f;break t}xn=d}}}var _S={getCacheForType:function(e){var i=An(cn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return An(cn).controller.signal}},yS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,Se=null,Ae=0,Be=0,ii=null,Da=!1,is=!1,Gf=!1,ea=0,an=0,Ua=0,gr=0,Vf=0,ai=0,as=0,So=null,jn=null,kf=!1,jl=0,o0=0,Zl=1/0,Kl=null,La=null,mn=0,Na=null,rs=null,na=0,Xf=0,Wf=null,l0=null,Mo=0,qf=null;function ri(){return(Pe&2)!==0&&Ae!==0?Ae&-Ae:B.T!==null?Jf():Vs()}function c0(){if(ai===0)if((Ae&536870912)===0||De){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,i,r){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Oa(e,Ae,ai,!1)),$e(e,r),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(gr|=r),an===4&&Oa(e,Ae,ai,!1)),Fi(e))}function u0(e,i,r){if((Pe&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||le(e,i),f=l?MS(e,i):jf(e,i,!0),d=l;do{if(f===0){is&&!l&&Oa(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!xS(r)){f=jf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var R=e;f=So;var V=R.current.memoizedState.isDehydrated;if(V&&(ss(R,S).flags|=256),S=jf(R,S,!1),S!==2){if(Gf&&!V){R.errorRecoveryDisabledLanes|=d,gr|=d,f=4;break t}d=jn,jn=f,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){ss(e,0),Oa(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Oa(l,i,ai,!Da);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=jl+300-Q(),10<f)){if(Oa(l,i,ai,!Da),Yt(l,0,!0)!==0)break t;na=i,l.timeoutHandle=G0(f0.bind(null,l,r,jn,Kl,kf,i,ai,gr,as,Da,d,"Throttled",-0,0),f);break t}f0(l,r,jn,Kl,kf,i,ai,gr,as,Da,d,null,-0,0)}}break}while(!0);Fi(e)}function f0(e,i,r,l,f,d,S,R,V,ht,At,Ut,gt,Mt){if(e.timeoutHandle=-1,Ut=i.subtreeFlags,Ut&8192||(Ut&16785408)===16785408){Ut={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},i0(i,d,Ut);var te=(d&62914560)===d?jl-Q():(d&4194048)===d?o0-Q():0;if(te=aM(Ut,te),te!==null){na=d,e.cancelPendingCommit=te(y0.bind(null,e,i,d,r,l,f,S,R,V,At,Ut,null,gt,Mt)),Oa(e,d,S,!ht);return}}y0(e,i,d,r,l,f,S,R,V)}function xS(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!$n(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Oa(e,i,r,l){i&=~Vf,i&=~gr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-ne(f),S=1<<d;l[d]=-1,f&=~S}r!==0&&xi(e,r,i)}function Ql(){return(Pe&6)===0?(Eo(0),!1):!0}function Yf(){if(Se!==null){if(Be===0)var e=Se.return;else e=Se,Wi=or=null,cf(e),Kr=null,ao=0,e=Se;for(;e!==null;)Vg(e.alternate,e),e=e.return;Se=null}}function ss(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,HS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),na=0,Yf(),qe=e,Se=r=ki(e.current,null),Ae=i,Be=0,ii=null,Da=!1,is=le(e,i),Gf=!1,as=ai=Vf=gr=Ua=an=0,jn=So=null,kf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-ne(l),d=1<<f;i|=e[f],l&=~d}return ea=i,_l(),r}function h0(e,i){me=null,B.H=ho,i===Zr||i===Al?(i=Cm(),Be=3):i===Ku?(i=Cm(),Be=4):Be=i===Tf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,Se===null&&(an=1,Hl(e,ui(i,e.current)))}function d0(){var e=ei.current;return e===null?!0:(Ae&4194048)===Ae?pi===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===pi:!1}function p0(){var e=B.H;return B.H=ho,e===null?ho:e}function m0(){var e=B.A;return B.A=_S,e}function Jl(){an=4,Da||(Ae&4194048)!==Ae&&ei.current!==null||(is=!0),(Ua&134217727)===0&&(gr&134217727)===0||qe===null||Oa(qe,Ae,ai,!1)}function jf(e,i,r){var l=Pe;Pe|=2;var f=p0(),d=m0();(qe!==e||Ae!==i)&&(Kl=null,ss(e,i)),i=!1;var S=an;t:do try{if(Be!==0&&Se!==null){var R=Se,V=ii;switch(Be){case 8:Yf(),S=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var ht=Be;if(Be=0,ii=null,os(e,R,V,ht),r&&is){S=0;break t}break;default:ht=Be,Be=0,ii=null,os(e,R,V,ht)}}SS(),S=an;break}catch(At){h0(e,At)}while(!0);return i&&e.shellSuspendCounter++,Wi=or=null,Pe=l,B.H=f,B.A=d,Se===null&&(qe=null,Ae=0,_l()),S}function SS(){for(;Se!==null;)g0(Se)}function MS(e,i){var r=Pe;Pe|=2;var l=p0(),f=m0();qe!==e||Ae!==i?(Kl=null,Zl=Q()+500,ss(e,i)):is=le(e,i);t:do try{if(Be!==0&&Se!==null){i=Se;var d=ii;e:switch(Be){case 1:Be=0,ii=null,os(e,i,d,1);break;case 2:case 9:if(Am(d)){Be=0,ii=null,v0(i);break}i=function(){Be!==2&&Be!==9||qe!==e||(Be=7),Fi(e)},d.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Am(d)?(Be=0,ii=null,v0(i)):(Be=0,ii=null,os(e,i,d,7));break;case 5:var S=null;switch(Se.tag){case 26:S=Se.memoizedState;case 5:case 27:var R=Se;if(S?nv(S):R.stateNode.complete){Be=0,ii=null;var V=R.sibling;if(V!==null)Se=V;else{var ht=R.return;ht!==null?(Se=ht,$l(ht)):Se=null}break e}}Be=0,ii=null,os(e,i,d,5);break;case 6:Be=0,ii=null,os(e,i,d,6);break;case 8:Yf(),an=6;break t;default:throw Error(a(462))}}ES();break}catch(At){h0(e,At)}while(!0);return Wi=or=null,B.H=l,B.A=f,Pe=r,Se!==null?0:(qe=null,Ae=0,_l(),an)}function ES(){for(;Se!==null&&!E();)g0(Se)}function g0(e){var i=Hg(e.alternate,e,ea);e.memoizedProps=e.pendingProps,i===null?$l(e):Se=i}function v0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Og(r,i,i.pendingProps,i.type,void 0,Ae);break;case 11:i=Og(r,i,i.pendingProps,i.type.render,i.ref,Ae);break;case 5:cf(i);default:Vg(r,i),i=Se=mm(i,ea),i=Hg(r,i,ea)}e.memoizedProps=e.pendingProps,i===null?$l(e):Se=i}function os(e,i,r,l){Wi=or=null,cf(i),Kr=null,ao=0;var f=i.return;try{if(fS(e,f,i,r,Ae)){an=1,Hl(e,ui(r,e.current)),Se=null;return}}catch(d){if(f!==null)throw Se=f,d;an=1,Hl(e,ui(r,e.current)),Se=null;return}i.flags&32768?(De||l===1?e=!0:is||(Ae&536870912)!==0?e=!1:(Da=e=!0,(l===2||l===9||l===3||l===6)&&(l=ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),_0(i,e)):$l(i)}function $l(e){var i=e;do{if((i.flags&32768)!==0){_0(i,Da);return}e=i.return;var r=pS(i.alternate,i,ea);if(r!==null){Se=r;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);an===0&&(an=5)}function _0(e,i){do{var r=mS(e.alternate,e);if(r!==null){r.flags&=32767,Se=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=r}while(e!==null);an=6,Se=null}function y0(e,i,r,l,f,d,S,R,V){e.cancelPendingCommit=null;do tc();while(mn!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Fu,Mn(e,r,d,S,R,V),e===qe&&(Se=qe=null,Ae=0),rs=i,Na=e,na=r,Xf=d,Wf=f,l0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RS(rt,function(){return b0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=st.p,st.p=2,S=Pe,Pe|=4;try{gS(e,i,r)}finally{Pe=S,st.p=f,B.T=l}}mn=1,x0(),S0(),M0()}}function x0(){if(mn===1){mn=0;var e=Na,i=rs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=st.p;st.p=2;var f=Pe;Pe|=4;try{t0(i,e);var d=sh,S=sm(e.containerInfo),R=d.focusedElem,V=d.selectionRange;if(S!==R&&R&&R.ownerDocument&&rm(R.ownerDocument.documentElement,R)){if(V!==null&&Du(R)){var ht=V.start,At=V.end;if(At===void 0&&(At=ht),"selectionStart"in R)R.selectionStart=ht,R.selectionEnd=Math.min(At,R.value.length);else{var Ut=R.ownerDocument||document,gt=Ut&&Ut.defaultView||window;if(gt.getSelection){var Mt=gt.getSelection(),te=R.textContent.length,ce=Math.min(V.start,te),ke=V.end===void 0?ce:Math.min(V.end,te);!Mt.extend&&ce>ke&&(S=ke,ke=ce,ce=S);var it=am(R,ce),j=am(R,ke);if(it&&j&&(Mt.rangeCount!==1||Mt.anchorNode!==it.node||Mt.anchorOffset!==it.offset||Mt.focusNode!==j.node||Mt.focusOffset!==j.offset)){var ft=Ut.createRange();ft.setStart(it.node,it.offset),Mt.removeAllRanges(),ce>ke?(Mt.addRange(ft),Mt.extend(j.node,j.offset)):(ft.setEnd(j.node,j.offset),Mt.addRange(ft))}}}}for(Ut=[],Mt=R;Mt=Mt.parentNode;)Mt.nodeType===1&&Ut.push({element:Mt,left:Mt.scrollLeft,top:Mt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ut.length;R++){var Ct=Ut[R];Ct.element.scrollLeft=Ct.left,Ct.element.scrollTop=Ct.top}}hc=!!rh,sh=rh=null}finally{Pe=f,st.p=l,B.T=r}}e.current=i,mn=2}}function S0(){if(mn===2){mn=0;var e=Na,i=rs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=st.p;st.p=2;var f=Pe;Pe|=4;try{Zg(e,i.alternate,i)}finally{Pe=f,st.p=l,B.T=r}}mn=3}}function M0(){if(mn===4||mn===3){mn=0,G();var e=Na,i=rs,r=na,l=l0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?mn=5:(mn=0,rs=Na=null,E0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(La=null),Or(r),i=i.stateNode,Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Xt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,f=st.p,st.p=2,B.T=null;try{for(var d=e.onRecoverableError,S=0;S<l.length;S++){var R=l[S];d(R.value,{componentStack:R.stack})}}finally{B.T=i,st.p=f}}(na&3)!==0&&tc(),Fi(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===qf?Mo++:(Mo=0,qf=e):Mo=0,Eo(0)}}function E0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,no(i)))}function tc(){return x0(),S0(),M0(),b0()}function b0(){if(mn!==5)return!1;var e=Na,i=Xf;Xf=0;var r=Or(na),l=B.T,f=st.p;try{st.p=32>r?32:r,B.T=null,r=Wf,Wf=null;var d=Na,S=na;if(mn=0,rs=Na=null,na=0,(Pe&6)!==0)throw Error(a(331));var R=Pe;if(Pe|=4,r0(d.current),n0(d,d.current,S,r),Pe=R,Eo(0,!1),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Xt,d)}catch{}return!0}finally{st.p=f,B.T=l,E0(e,i)}}function T0(e,i,r){i=ui(r,i),i=bf(e.stateNode,i,2),e=Aa(e,i,2),e!==null&&($e(e,2),Fi(e))}function Ie(e,i,r){if(e.tag===3)T0(e,e,r);else for(;i!==null;){if(i.tag===3){T0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(La===null||!La.has(l))){e=ui(r,e),r=Ag(2),l=Aa(i,r,2),l!==null&&(Rg(r,l,i,e),$e(l,2),Fi(l));break}}i=i.return}}function Zf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new yS;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Gf=!0,f.add(r),e=bS.bind(null,e,i,r),i.then(e,e))}function bS(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(Ae&r)===r&&(an===4||an===3&&(Ae&62914560)===Ae&&300>Q()-jl?(Pe&2)===0&&ss(e,0):Vf|=r,as===Ae&&(as=0)),Fi(e)}function A0(e,i){i===0&&(i=Ye()),e=ar(e,i),e!==null&&($e(e,i),Fi(e))}function TS(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),A0(e,r)}function AS(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),A0(e,r)}function RS(e,i){return mt(e,i)}var ec=null,ls=null,Kf=!1,nc=!1,Qf=!1,Fa=0;function Fi(e){e!==ls&&e.next===null&&(ls===null?ec=ls=e:ls=ls.next=e),nc=!0,Kf||(Kf=!0,wS())}function Eo(e,i){if(!Qf&&nc){Qf=!0;do for(var r=!1,l=ec;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-ne(42|e)+1)-1,d&=f&~(S&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,D0(l,d))}else d=Ae,d=Yt(l,l===qe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||le(l,d)||(r=!0,D0(l,d));l=l.next}while(r);Qf=!1}}function CS(){R0()}function R0(){nc=Kf=!1;var e=0;Fa!==0&&IS()&&(e=Fa);for(var i=Q(),r=null,l=ec;l!==null;){var f=l.next,d=C0(l,i);d===0?(l.next=null,r===null?ec=f:r.next=f,f===null&&(ls=r)):(r=l,(e!==0||(d&3)!==0)&&(nc=!0)),l=f}mn!==0&&mn!==5||Eo(e),Fa!==0&&(Fa=0)}function C0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-ne(d),R=1<<S,V=f[S];V===-1?((R&r)===0||(R&l)!==0)&&(f[S]=We(R,i)):V<=i&&(e.expiredLanes|=R),d&=~R}if(i=qe,r=Ae,r=Yt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&A(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||le(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&A(l),Or(r)){case 2:case 8:r=Lt;break;case 32:r=rt;break;case 268435456:r=Pt;break;default:r=rt}return l=w0.bind(null,e),r=mt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&A(l),e.callbackPriority=2,e.callbackNode=null,2}function w0(e,i){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(tc()&&e.callbackNode!==r)return null;var l=Ae;return l=Yt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(u0(e,l,i),C0(e,Q()),e.callbackNode!=null&&e.callbackNode===r?w0.bind(null,e):null)}function D0(e,i){if(tc())return null;u0(e,i,!0)}function wS(){GS(function(){(Pe&6)!==0?mt(yt,CS):R0()})}function Jf(){if(Fa===0){var e=Yr;e===0&&(e=qt,qt<<=1,(qt&261888)===0&&(qt=256)),Fa=e}return Fa}function U0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ul(""+e)}function L0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function DS(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=U0((f[En]||null).action),S=l.submitter;S&&(i=(i=S[En]||null)?U0(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var R=new pl("action","action",null,l,f);e.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Fa!==0){var V=S?L0(f,S):new FormData(f);_f(r,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=S?L0(f,S):new FormData(f),_f(r,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var $f=0;$f<Ou.length;$f++){var th=Ou[$f],US=th.toLowerCase(),LS=th[0].toUpperCase()+th.slice(1);Ei(US,"on"+LS)}Ei(cm,"onAnimationEnd"),Ei(um,"onAnimationIteration"),Ei(fm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(jx,"onTransitionRun"),Ei(Zx,"onTransitionStart"),Ei(Kx,"onTransitionCancel"),Ei(hm,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function N0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var R=l[S],V=R.instance,ht=R.currentTarget;if(R=R.listener,V!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=ht;try{d(f)}catch(At){vl(At)}f.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(R=l[S],V=R.instance,ht=R.currentTarget,R=R.listener,V!==d&&f.isPropagationStopped())break t;d=R,f.currentTarget=ht;try{d(f)}catch(At){vl(At)}f.currentTarget=null,d=V}}}}function Me(e,i){var r=i[ks];r===void 0&&(r=i[ks]=new Set);var l=e+"__bubble";r.has(l)||(O0(i,e,2,!1),r.add(l))}function eh(e,i,r){var l=0;i&&(l|=4),O0(r,e,l,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function nh(e){if(!e[ic]){e[ic]=!0,Vt.forEach(function(r){r!=="selectionchange"&&(NS.has(r)||eh(r,!1,e),eh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,eh("selectionchange",!1,i))}}function O0(e,i,r,l){switch(cv(i)){case 2:var f=oM;break;case 8:f=lM;break;default:f=vh}r=f.bind(null,i,r,e),f=void 0,!Su||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function ih(e,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var R=l.stateNode.containerInfo;if(R===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;R!==null;){if(S=U(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue t}R=R.parentNode}}l=l.return}Ip(function(){var ht=d,At=yu(r),Ut=[];t:{var gt=dm.get(e);if(gt!==void 0){var Mt=pl,te=e;switch(e){case"keypress":if(hl(r)===0)break t;case"keydown":case"keyup":Mt=Ax;break;case"focusin":te="focus",Mt=Tu;break;case"focusout":te="blur",Mt=Tu;break;case"beforeblur":case"afterblur":Mt=Tu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Mt=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Mt=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Mt=wx;break;case cm:case um:case fm:Mt=vx;break;case hm:Mt=Ux;break;case"scroll":case"scrollend":Mt=hx;break;case"wheel":Mt=Nx;break;case"copy":case"cut":case"paste":Mt=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Mt=Xp;break;case"toggle":case"beforetoggle":Mt=Fx}var ce=(i&4)!==0,ke=!ce&&(e==="scroll"||e==="scrollend"),it=ce?gt!==null?gt+"Capture":null:gt;ce=[];for(var j=ht,ft;j!==null;){var Ct=j;if(ft=Ct.stateNode,Ct=Ct.tag,Ct!==5&&Ct!==26&&Ct!==27||ft===null||it===null||(Ct=Ws(j,it),Ct!=null&&ce.push(To(j,Ct,ft))),ke)break;j=j.return}0<ce.length&&(gt=new Mt(gt,te,null,r,At),Ut.push({event:gt,listeners:ce}))}}if((i&7)===0){t:{if(gt=e==="mouseover"||e==="pointerover",Mt=e==="mouseout"||e==="pointerout",gt&&r!==_u&&(te=r.relatedTarget||r.fromElement)&&(U(te)||te[Hi]))break t;if((Mt||gt)&&(gt=At.window===At?At:(gt=At.ownerDocument)?gt.defaultView||gt.parentWindow:window,Mt?(te=r.relatedTarget||r.toElement,Mt=ht,te=te?U(te):null,te!==null&&(ke=c(te),ce=te.tag,te!==ke||ce!==5&&ce!==27&&ce!==6)&&(te=null)):(Mt=null,te=ht),Mt!==te)){if(ce=Vp,Ct="onMouseLeave",it="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Xp,Ct="onPointerLeave",it="onPointerEnter",j="pointer"),ke=Mt==null?gt:xt(Mt),ft=te==null?gt:xt(te),gt=new ce(Ct,j+"leave",Mt,r,At),gt.target=ke,gt.relatedTarget=ft,Ct=null,U(At)===ht&&(ce=new ce(it,j+"enter",te,r,At),ce.target=ft,ce.relatedTarget=ke,Ct=ce),ke=Ct,Mt&&te)e:{for(ce=OS,it=Mt,j=te,ft=0,Ct=it;Ct;Ct=ce(Ct))ft++;Ct=0;for(var re=j;re;re=ce(re))Ct++;for(;0<ft-Ct;)it=ce(it),ft--;for(;0<Ct-ft;)j=ce(j),Ct--;for(;ft--;){if(it===j||j!==null&&it===j.alternate){ce=it;break e}it=ce(it),j=ce(j)}ce=null}else ce=null;Mt!==null&&F0(Ut,gt,Mt,ce,!1),te!==null&&ke!==null&&F0(Ut,ke,te,ce,!0)}}t:{if(gt=ht?xt(ht):window,Mt=gt.nodeName&&gt.nodeName.toLowerCase(),Mt==="select"||Mt==="input"&&gt.type==="file")var Ne=Jp;else if(Kp(gt))if($p)Ne=Wx;else{Ne=kx;var ie=Vx}else Mt=gt.nodeName,!Mt||Mt.toLowerCase()!=="input"||gt.type!=="checkbox"&&gt.type!=="radio"?ht&&vu(ht.elementType)&&(Ne=Jp):Ne=Xx;if(Ne&&(Ne=Ne(e,ht))){Qp(Ut,Ne,r,At);break t}ie&&ie(e,gt,ht),e==="focusout"&&ht&&gt.type==="number"&&ht.memoizedProps.value!=null&&Dn(gt,"number",gt.value)}switch(ie=ht?xt(ht):window,e){case"focusin":(Kp(ie)||ie.contentEditable==="true")&&(Ir=ie,Uu=ht,$s=null);break;case"focusout":$s=Uu=Ir=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,om(Ut,r,At);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":om(Ut,r,At)}var ge;if(Ru)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else Br?jp(e,r)&&(Re="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Re="onCompositionStart");Re&&(Wp&&r.locale!=="ko"&&(Br||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Br&&(ge=Hp()):(ya=At,Mu="value"in ya?ya.value:ya.textContent,Br=!0)),ie=ac(ht,Re),0<ie.length&&(Re=new kp(Re,e,null,r,At),Ut.push({event:Re,listeners:ie}),ge?Re.data=ge:(ge=Zp(r),ge!==null&&(Re.data=ge)))),(ge=zx?Bx(e,r):Ix(e,r))&&(Re=ac(ht,"onBeforeInput"),0<Re.length&&(ie=new kp("onBeforeInput","beforeinput",null,r,At),Ut.push({event:ie,listeners:Re}),ie.data=ge)),DS(Ut,e,ht,r,At)}N0(Ut,i)})}function To(e,i,r){return{instance:e,listener:i,currentTarget:r}}function ac(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Ws(e,r),f!=null&&l.unshift(To(e,f,d)),f=Ws(e,i),f!=null&&l.push(To(e,f,d))),e.tag===3)return l;e=e.return}return[]}function OS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,i,r,l,f){for(var d=i._reactName,S=[];r!==null&&r!==l;){var R=r,V=R.alternate,ht=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||ht===null||(V=ht,f?(ht=Ws(r,d),ht!=null&&S.unshift(To(r,ht,V))):f||(ht=Ws(r,d),ht!=null&&S.push(To(r,ht,V)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var FS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function P0(e){return(typeof e=="string"?e:""+e).replace(FS,`
`).replace(PS,"")}function z0(e,i){return i=P0(i),P0(e)===i}function Ve(e,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(e,""+l);break;case"className":je(e,"class",l);break;case"tabIndex":je(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":je(e,r,l);break;case"style":zp(e,l,d);break;case"data":if(i!=="object"){je(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=ul(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Ve(e,i,"name",f.name,f,null),Ve(e,i,"formEncType",f.formEncType,f,null),Ve(e,i,"formMethod",f.formMethod,f,null),Ve(e,i,"formTarget",f.formTarget,f,null)):(Ve(e,i,"encType",f.encType,f,null),Ve(e,i,"method",f.method,f,null),Ve(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=ul(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Gi);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=ul(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),we(e,"popover",l);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":we(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ux.get(r)||r,we(e,r,l))}}function ah(e,i,r,l,f,d){switch(r){case"style":zp(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?kn(e,l):(typeof l=="number"||typeof l=="bigint")&&kn(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=e[En]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):we(e,r,l)}}}function Cn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,d,S,r,null)}}f&&Ve(e,i,"srcSet",r.srcSet,r,null),l&&Ve(e,i,"src",r.src,r,null);return;case"input":Me("invalid",e);var R=d=S=f=null,V=null,ht=null;for(l in r)if(r.hasOwnProperty(l)){var At=r[l];if(At!=null)switch(l){case"name":f=At;break;case"type":S=At;break;case"checked":V=At;break;case"defaultChecked":ht=At;break;case"value":d=At;break;case"defaultValue":R=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(a(137,i));break;default:Ve(e,i,l,At,r,null)}}zn(e,d,R,V,ht,S,f,!1);return;case"select":Me("invalid",e),l=S=d=null;for(f in r)if(r.hasOwnProperty(f)&&(R=r[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":l=R;default:Ve(e,i,f,R,r,null)}i=d,r=S,e.multiple=!!l,i!=null?en(e,!!l,i,!1):r!=null&&en(e,!!l,r,!0);return;case"textarea":Me("invalid",e),d=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(R=r[S],R!=null))switch(S){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Ve(e,i,S,R,r,null)}Fr(e,l,f,d);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,V,l,r,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<bo.length;l++)Me(bo[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ht in r)if(r.hasOwnProperty(ht)&&(l=r[ht],l!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,ht,l,r,null)}return;default:if(vu(i)){for(At in r)r.hasOwnProperty(At)&&(l=r[At],l!==void 0&&ah(e,i,At,l,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(l=r[R],l!=null&&Ve(e,i,R,l,r,null))}function zS(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,R=null,V=null,ht=null,At=null;for(Mt in r){var Ut=r[Mt];if(r.hasOwnProperty(Mt)&&Ut!=null)switch(Mt){case"checked":break;case"value":break;case"defaultValue":V=Ut;default:l.hasOwnProperty(Mt)||Ve(e,i,Mt,null,l,Ut)}}for(var gt in l){var Mt=l[gt];if(Ut=r[gt],l.hasOwnProperty(gt)&&(Mt!=null||Ut!=null))switch(gt){case"type":d=Mt;break;case"name":f=Mt;break;case"checked":ht=Mt;break;case"defaultChecked":At=Mt;break;case"value":S=Mt;break;case"defaultValue":R=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(a(137,i));break;default:Mt!==Ut&&Ve(e,i,gt,Mt,l,Ut)}}He(e,S,R,V,ht,At,d,f);return;case"select":Mt=S=R=gt=null;for(d in r)if(V=r[d],r.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":Mt=V;default:l.hasOwnProperty(d)||Ve(e,i,d,null,l,V)}for(f in l)if(d=l[f],V=r[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":gt=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==V&&Ve(e,i,f,d,l,V)}i=R,r=S,l=Mt,gt!=null?en(e,!!r,gt,!1):!!l!=!!r&&(i!=null?en(e,!!r,i,!0):en(e,!!r,r?[]:"",!1));return;case"textarea":Mt=gt=null;for(R in r)if(f=r[R],r.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,i,R,null,l,f)}for(S in l)if(f=l[S],d=r[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":gt=f;break;case"defaultValue":Mt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Ve(e,i,S,f,l,d)}bn(e,gt,Mt);return;case"option":for(var te in r)if(gt=r[te],r.hasOwnProperty(te)&&gt!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ve(e,i,te,null,l,gt)}for(V in l)if(gt=l[V],Mt=r[V],l.hasOwnProperty(V)&&gt!==Mt&&(gt!=null||Mt!=null))switch(V){case"selected":e.selected=gt&&typeof gt!="function"&&typeof gt!="symbol";break;default:Ve(e,i,V,gt,l,Mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in r)gt=r[ce],r.hasOwnProperty(ce)&&gt!=null&&!l.hasOwnProperty(ce)&&Ve(e,i,ce,null,l,gt);for(ht in l)if(gt=l[ht],Mt=r[ht],l.hasOwnProperty(ht)&&gt!==Mt&&(gt!=null||Mt!=null))switch(ht){case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:Ve(e,i,ht,gt,l,Mt)}return;default:if(vu(i)){for(var ke in r)gt=r[ke],r.hasOwnProperty(ke)&&gt!==void 0&&!l.hasOwnProperty(ke)&&ah(e,i,ke,void 0,l,gt);for(At in l)gt=l[At],Mt=r[At],!l.hasOwnProperty(At)||gt===Mt||gt===void 0&&Mt===void 0||ah(e,i,At,gt,l,Mt);return}}for(var it in r)gt=r[it],r.hasOwnProperty(it)&&gt!=null&&!l.hasOwnProperty(it)&&Ve(e,i,it,null,l,gt);for(Ut in l)gt=l[Ut],Mt=r[Ut],!l.hasOwnProperty(Ut)||gt===Mt||gt==null&&Mt==null||Ve(e,i,Ut,gt,l,Mt)}function B0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,S=f.initiatorType,R=f.duration;if(d&&R&&B0(S)){for(S=0,R=f.responseEnd,l+=1;l<r.length;l++){var V=r[l],ht=V.startTime;if(ht>R)break;var At=V.transferSize,Ut=V.initiatorType;At&&B0(Ut)&&(V=V.responseEnd,S+=At*(V<R?1:(R-ht)/(V-ht)))}if(--l,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rh=null,sh=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function I0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function oh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===lh?!1:(lh=e,!0):(lh=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(e){return V0.resolve(null).then(e).catch(VS)}:G0;function VS(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function k0(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),hs(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ao(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ao(r);for(var d=r.firstChild;d;){var S=d.nextSibling,R=d.nodeName;d[tr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Ao(e.ownerDocument.body);r=f}while(r);hs(i)}function X0(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function ch(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ch(r),Xs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function kS(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[tr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function XS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=mi(e.nextSibling),e===null))return null;return e}function W0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=mi(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function WS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function mi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var hh=null;function q0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return mi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Y0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function j0(e,i,r){switch(i=rc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ao(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Xs(e)}var gi=new Map,Z0=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=st.d;st.d={f:qS,r:YS,D:jS,C:ZS,L:KS,m:QS,X:$S,S:JS,M:tM};function qS(){var e=ia.f(),i=Ql();return e||i}function YS(e){var i=nt(e);i!==null&&i.tag===5&&i.type==="form"?hg(i):ia.r(e)}var cs=typeof document>"u"?null:document;function K0(e,i,r){var l=cs;if(l&&typeof i=="string"&&i){var f=yn(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Z0.has(f)||(Z0.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Cn(i,"link",e),J(i),l.head.appendChild(i)))}}function jS(e){ia.D(e),K0("dns-prefetch",e,null)}function ZS(e,i){ia.C(e,i),K0("preconnect",e,i)}function KS(e,i,r){ia.L(e,i,r);var l=cs;if(l&&e&&i){var f='link[rel="preload"][as="'+yn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+yn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+yn(r.imageSizes)+'"]')):f+='[href="'+yn(e)+'"]';var d=f;switch(i){case"style":d=us(e);break;case"script":d=fs(e)}gi.has(d)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),gi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Ro(d))||i==="script"&&l.querySelector(Co(d))||(i=l.createElement("link"),Cn(i,"link",e),J(i),l.head.appendChild(i)))}}function QS(e,i){ia.m(e,i);var r=cs;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+yn(l)+'"][href="'+yn(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=fs(e)}if(!gi.has(d)&&(e=v({rel:"modulepreload",href:e},i),gi.set(d,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Co(d)))return}l=r.createElement("link"),Cn(l,"link",e),J(l),r.head.appendChild(l)}}}function JS(e,i,r){ia.S(e,i,r);var l=cs;if(l&&e){var f=St(l).hoistableStyles,d=us(e);i=i||"default";var S=f.get(d);if(!S){var R={loading:0,preload:null};if(S=l.querySelector(Ro(d)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=gi.get(d))&&dh(e,r);var V=S=l.createElement("link");J(V),Cn(V,"link",e),V._p=new Promise(function(ht,At){V.onload=ht,V.onerror=At}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,oc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:R},f.set(d,S)}}}function $S(e,i){ia.X(e,i);var r=cs;if(r&&e){var l=St(r).hoistableScripts,f=fs(e),d=l.get(f);d||(d=r.querySelector(Co(f)),d||(e=v({src:e,async:!0},i),(i=gi.get(f))&&ph(e,i),d=r.createElement("script"),J(d),Cn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function tM(e,i){ia.M(e,i);var r=cs;if(r&&e){var l=St(r).hoistableScripts,f=fs(e),d=l.get(f);d||(d=r.querySelector(Co(f)),d||(e=v({src:e,async:!0,type:"module"},i),(i=gi.get(f))&&ph(e,i),d=r.createElement("script"),J(d),Cn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Q0(e,i,r,l){var f=(f=Y.current)?sc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=us(r.href),r=St(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=us(r.href);var d=St(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(Ro(e)))&&!d._p&&(S.instance=d,S.state.loading=5),gi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(e,r),d||eM(f,e,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=fs(r),r=St(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function us(e){return'href="'+yn(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function eM(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Cn(i,"link",r),J(i),e.head.appendChild(i))}function fs(e){return'[src="'+yn(e)+'"]'}function Co(e){return"script[async]"+e}function $0(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+yn(r.href)+'"]');if(l)return i.instance=l,J(l),l;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),J(l),Cn(l,"style",f),oc(l,r.precedence,e),i.instance=l;case"stylesheet":f=us(r.href);var d=e.querySelector(Ro(f));if(d)return i.state.loading|=4,i.instance=d,J(d),d;l=J0(r),(f=gi.get(f))&&dh(l,f),d=(e.ownerDocument||e).createElement("link"),J(d);var S=d;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Cn(d,"link",l),i.state.loading|=4,oc(d,r.precedence,e),i.instance=d;case"script":return d=fs(r.src),(f=e.querySelector(Co(d)))?(i.instance=f,J(f),f):(l=r,(f=gi.get(d))&&(l=v({},r),ph(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),J(f),Cn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,oc(l,r.precedence,e));return i.instance}function oc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var R=l[S];if(R.dataset.precedence===i)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var lc=null;function tv(e,i,r){if(lc===null){var l=new Map,f=lc=new Map;f.set(r,l)}else f=lc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var d=r[f];if(!(d[tr]||d[tn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var R=l.get(S);R?R.push(d):l.set(S,[d])}}return l}function ev(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function nM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function nv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iM(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=us(l.href),d=i.querySelector(Ro(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=cc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,J(d);return}d=i.ownerDocument||i,l=J0(l),(f=gi.get(f))&&dh(l,f),d=d.createElement("link"),J(d);var S=d;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),Cn(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=cc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var mh=0;function aM(e,i){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&mh===0&&(mh=62500*BS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>mh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uc=null;function fc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,i.forEach(rM,e),uc=null,cc.call(e))}function rM(e,i){if(!(i.state.loading&4)){var r=uc.get(e);if(r)var l=r.get(null);else{r=new Map,uc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=r.get(S)||l,d===l&&r.set(null,f),r.set(S,f),this.count++,l=cc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var wo={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function sM(e,i,r,l,f,d,S,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function iv(e,i,r,l,f,d,S,R,V,ht,At,Ut){return e=new sM(e,i,r,S,V,ht,At,Ut,R),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),e.current=d,d.stateNode=e,i=Yu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},Qu(d),e}function av(e){return e?(e=Vr,e):Vr}function rv(e,i,r,l,f,d){f=av(f),l.context===null?l.context=f:l.pendingContext=f,l=Ta(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Aa(e,l,i),r!==null&&(Zn(r,e,i),so(r,e,i))}function sv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function gh(e,i){sv(e,i),(e=e.alternate)&&sv(e,i)}function ov(e){if(e.tag===13||e.tag===31){var i=ar(e,67108864);i!==null&&Zn(i,e,67108864),gh(e,67108864)}}function lv(e){if(e.tag===13||e.tag===31){var i=ri();i=Jn(i);var r=ar(e,i);r!==null&&Zn(r,e,i),gh(e,i)}}var hc=!0;function oM(e,i,r,l){var f=B.T;B.T=null;var d=st.p;try{st.p=2,vh(e,i,r,l)}finally{st.p=d,B.T=f}}function lM(e,i,r,l){var f=B.T;B.T=null;var d=st.p;try{st.p=8,vh(e,i,r,l)}finally{st.p=d,B.T=f}}function vh(e,i,r,l){if(hc){var f=_h(l);if(f===null)ih(e,i,l,dc,r),uv(e,l);else if(uM(f,e,i,r,l))l.stopPropagation();else if(uv(e,l),i&4&&-1<cM.indexOf(e)){for(;f!==null;){var d=nt(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=jt(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-ne(S);R.entanglements[1]|=V,S&=~V}Fi(d),(Pe&6)===0&&(Zl=Q()+500,Eo(0))}}break;case 31:case 13:R=ar(d,2),R!==null&&Zn(R,d,2),Ql(),gh(d,2)}if(d=_h(l),d===null&&ih(e,i,l,dc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else ih(e,i,l,null,r)}}function _h(e){return e=yu(e),yh(e)}var dc=null;function yh(e){if(dc=null,e=U(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function cv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pt()){case yt:return 2;case Lt:return 8;case rt:case et:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var xh=!1,za=null,Ba=null,Ia=null,Do=new Map,Uo=new Map,Ha=[],cM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(e,i){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Do.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(i.pointerId)}}function Lo(e,i,r,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=nt(i),i!==null&&ov(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function uM(e,i,r,l,f){switch(i){case"focusin":return za=Lo(za,e,i,r,l,f),!0;case"dragenter":return Ba=Lo(Ba,e,i,r,l,f),!0;case"mouseover":return Ia=Lo(Ia,e,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Do.set(d,Lo(Do.get(d)||null,e,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Uo.set(d,Lo(Uo.get(d)||null,e,i,r,l,f)),!0}return!1}function fv(e){var i=U(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,$a(e.priority,function(){lv(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,$a(e.priority,function(){lv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=_h(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);_u=l,r.target.dispatchEvent(l),_u=null}else return i=nt(r),i!==null&&ov(i),e.blockedOn=r,!1;i.shift()}return!0}function hv(e,i,r){pc(e)&&r.delete(i)}function fM(){xh=!1,za!==null&&pc(za)&&(za=null),Ba!==null&&pc(Ba)&&(Ba=null),Ia!==null&&pc(Ia)&&(Ia=null),Do.forEach(hv),Uo.forEach(hv)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,xh||(xh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,fM)))}var gc=null;function dv(e){gc!==e&&(gc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(yh(l||r)===null)continue;break}var d=nt(r);d!==null&&(e.splice(i,3),i-=3,_f(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function hs(e){function i(V){return mc(V,e)}za!==null&&mc(za,e),Ba!==null&&mc(Ba,e),Ia!==null&&mc(Ia,e),Do.forEach(i),Uo.forEach(i);for(var r=0;r<Ha.length;r++){var l=Ha[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ha.length&&(r=Ha[0],r.blockedOn===null);)fv(r),r.blockedOn===null&&Ha.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],S=f[En]||null;if(typeof d=="function")S||dv(r);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[En]||null)R=S.formAction;else if(yh(f)!==null)continue}else R=S.action;typeof R=="function"?r[l+1]=R:(r.splice(l,3),l-=3),dv(r)}}}function pv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Sh(e){this._internalRoot=e}vc.prototype.render=Sh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ri();rv(r,l,e,i,null,null)},vc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;rv(e.current,2,null,e,null,null),Ql(),i[Hi]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Vs();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ha.length&&i!==0&&i<Ha[r].priority;r++);Ha.splice(r,0,e),r===0&&fv(e)}};var mv=t.version;if(mv!=="19.2.7")throw Error(a(527,mv,"19.2.7"));st.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var hM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Xt=_c.inject(hM),Wt=_c}catch{}}return Oo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=Mg,d=Eg,S=bg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=iv(e,1,!1,null,null,r,l,null,f,d,S,pv),e[Hi]=i.current,nh(e),new Sh(i)},Oo.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",d=Mg,S=Eg,R=bg,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=iv(e,1,!0,i,r??null,l,f,V,d,S,R,pv),i.context=av(null),r=i.current,l=ri(),l=Jn(l),f=Ta(l),f.callback=null,Aa(r,f,l),r=l,i.current.lanes=r,$e(i,r),Fi(i),e[Hi]=i.current,nh(e),new vc(i)},Oo.version="19.2.7",Oo}var Tv;function TM(){if(Tv)return bh.exports;Tv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bh.exports=bM(),bh.exports}var AM=TM();const RM="modulepreload",CM=function(s){return"/makemecubemaster/"+s},Av={},wM=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let u=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=u(n.map(m=>{if(m=CM(m),m in Av)return;Av[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":RM,g||(_.as="script"),_.crossOrigin="",_.href=m,p&&_.setAttribute("nonce",p),document.head.appendChild(_),g)return new Promise((x,b)=>{_.addEventListener("load",x),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function DM(s={}){const{immediate:t=!1,onNeedReload:n,onNeedRefresh:a,onOfflineReady:o,onRegistered:c,onRegisteredSW:u,onRegisterError:h}=s;let p,m;const g=async(_=!0)=>{await m};async function v(){if("serviceWorker"in navigator){if(p=await wM(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(_=>{h==null||h(_)}),!p)return;p.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&(n?n():window.location.reload())}),p.addEventListener("installed",_=>{_.isUpdate||o==null||o()}),p.register({immediate:t}).then(_=>{u?u("/makemecubemaster/sw.js",_):c==null||c(_)}).catch(_=>{h==null||h(_)})}}return m=v(),g}const K_=.3,Rv=.52,UM=.22;function Is(s,t,n=K_){const a=Math.min(s,t)*n;return{x:(s-a)/2,y:(t-a)/2,size:a}}function Q_(s){const t=s.size*UM;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function J_(s){const{x:t,y:n,size:a}=s;return[{x:t,y:n},{x:t+a,y:n},{x:t+a,y:n+a},{x:t,y:n+a}]}function LM(s,t,n){return s.map(a=>({x:a.x+t,y:a.y+n}))}function Cv(s,t,n,a){s.drawImage(t,0,0,n,a)}function Yo(s){if(s.length!==9)return s;const t=[];for(let n=0;n<3;n++)for(let a=2;a>=0;a--)t.push(s[n*3+a]);return t}function $_(s){const t=new Map;for(const[n,a]of s)t.set(n,[...a]);return t}function ty(s,t,n,a){const o=Math.max(n/s,a/t),c=s*o,u=t*o;return{scale:o,offsetX:(n-c)/2,offsetY:(a-u)/2}}function ey(s,t,n,a,o,c,u,h){const{scale:p,offsetX:m,offsetY:g}=ty(o,c,u,h),v=m+s*p,_=g+t*p,x=n*p,b=a*p;return{left:u-v-x,top:_,width:x,height:b}}function NM(s,t,n,a){if(!s||!t||!n||!a)return null;const o=Is(s,t);return ey(o.x,o.y,o.size,o.size,s,t,n,a)}function OM(s,t,n,a){if(!s||!t||!n||!a)return null;const o=Is(s,t),c=Q_(o);return ey(c.x,c.y,c.size,c.size,s,t,n,a)}function FM(s,t){const n=Math.min(s,t)*.3;return{left:(s-n)/2,top:(t-n)/2,width:n,height:n}}function wv(s){return{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}}function PM({rect:s,viewportWidth:t,viewportHeight:n}){const a={position:"absolute",background:"rgba(0, 0, 0, 0.38)",pointerEvents:"none"},{left:o,top:c,width:u,height:h}=s,p=o+u,m=c+h;return Gt.jsxs(Gt.Fragment,{children:[Gt.jsx("div",{style:{...a,top:0,left:0,width:t,height:c}}),Gt.jsx("div",{style:{...a,top:m,left:0,width:t,height:Math.max(0,n-m)}}),Gt.jsx("div",{style:{...a,top:c,left:0,width:o,height:h}}),Gt.jsx("div",{style:{...a,top:c,left:p,width:Math.max(0,t-p),height:h}})]})}function zM({rect:s,viewportWidth:t,viewportHeight:n,visible:a,showSpot:o=!1,spotRect:c=null,spotColor:u="#ffffff"}){if(!a||!t||!n)return null;const h=s??FM(t,n),p=o?c??h:null;return Gt.jsxs("div",{className:"guide-overlay-root","aria-hidden":"true",children:[Gt.jsx(PM,{rect:h,viewportWidth:t,viewportHeight:n}),Gt.jsx("div",{className:"guide-frame-css",style:wv(h)}),p&&Gt.jsx("div",{className:"guide-spot-css",style:{...wv(p),borderColor:u,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.45), 0 0 14px ${u}88`}})]})}function BM(s,t,n,a){return Jt.useMemo(()=>({guideRect:NM(s,t,n,a),spotRect:OM(s,t,n,a)}),[s,t,n,a])}function IM(s){return s==="colorLearn"||s==="scanReady"||s==="liveScan"}function HM({phase:s,frameWidth:t,frameHeight:n,viewportWidth:a,viewportHeight:o,colorLearnSpot:c=!1,spotColor:u="#ffffff"}){const{guideRect:h,spotRect:p}=BM(t,n,a,o);return Gt.jsx(zM,{rect:h,viewportWidth:a,viewportHeight:o,visible:IM(s),showSpot:c,spotRect:p,spotColor:u})}function GM({setVideoRef:s,onDimensions:t}){const n=Jt.useCallback(o=>{o.videoWidth&&o.videoHeight&&(t==null||t(o.videoWidth,o.videoHeight))},[t]),a=Jt.useCallback(o=>{s(o),o&&o.readyState>=1&&n(o)},[s,n]);return Gt.jsx("video",{ref:a,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:o=>n(o.currentTarget)})}const da=["R","O","Y","G","B","W"],VM={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},$o={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},kM={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let Ns={},gp=!1;function vp(){return gp&&da.every(s=>Ns[s])}function XM(){const s={...kM};for(const t of da)Ns[t]&&(s[t]=Ns[t]);return s}function Dv(){Ns={},gp=!1}function WM(s,t){Ns[s]=t,da.every(n=>Ns[n])&&(gp=!0)}function Ch(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function qM(s,t,n){const a=Ch(s/255),o=Ch(t/255),c=Ch(n/255),u=a*.4124564+o*.3575761+c*.1804375,h=a*.2126729+o*.7151522+c*.072175,p=a*.0193339+o*.119192+c*.9503041,m=u/.95047>.008856?(u/.95047)**(1/3):7.787*(u/.95047)+16/116,g=h>.008856?h**(1/3):7.787*h+16/116,v=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*g-16,500*(m-g),200*(g-v)]}function wh(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function YM(s,t,n){return Math.max(s,t,n)-Math.min(s,t,n)<28?"W":s>=t&&s>=n?t>s*.92?"O":"R":t>=s&&t>=n?"G":"B"}function jM(s,t,n,a){const o=Math.max(s,t,n);if(o<45)return!1;const c=(s+t+n)/3,u=o-Math.min(s,t,n);switch(a){case"W":return u<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=n;case"O":return s>70&&t>55&&s>=n-5;case"G":return t>45&&t>=s-12&&t>=n-5;case"B":return n>40&&n>=s-8&&n>=t-15;default:return!0}}function ZM(s,t,n,a){if(a==="W")return Math.max(s,t,n)-Math.min(s,t,n)<60;if(a==="Y")return s>70&&t>60;const o=YM(s,t,n);return a==="O"?o==="O"||o==="R"||o==="Y":a==="R"?o==="R"||o==="O":o===a}function ny(s,t,n,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const c=Is(t,n),u=Q_(c),h=Math.floor(u.x),p=Math.floor(u.y),m=Math.floor(u.size),g=Math.floor(u.size);if(m<=0||g<=0)return null;const v=o.getImageData(h,p,m,g).data,_=[],x=[],b=[],T=[],M=[],y=[];for(let C=0;C<v.length;C+=8){const k=v[C],ut=v[C+1],ot=v[C+2];Math.max(k,ut,ot)<40||(T.push(k),M.push(ut),y.push(ot),jM(k,ut,ot,a)&&(_.push(k),x.push(ut),b.push(ot)))}const O=_.length>=4?_:T,D=_.length>=4?x:M,w=_.length>=4?b:y;if(O.length<4)return null;const q=wh(O),I=wh(D),P=wh(w),X=qM(q,I,P),L=O.length;return{r:q,g:I,b:P,lab:X,ready:L>=6&&ZM(q,I,P,a)}}function KM(s,t,n,a){const o=ny(s,t,n,a);return o!=null&&o.ready?(WM(a,o.lab),o):null}function iy(s,t){Jt.useEffect(()=>{if(!t)return;const n=a=>{var c;if(a.key!=="Enter"&&a.key!==" ")return;const o=(c=a.target)==null?void 0:c.tagName;o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||(a.preventDefault(),s())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[s,t])}function QM({visible:s,stepIndex:t,sample:n,ready:a,error:o,onConfirm:c}){const u=da[t]??"R";return iy(c,s&&a),s?Gt.jsx("div",{className:"color-learn-overlay","aria-live":"polite",children:Gt.jsxs("div",{className:"color-learn-panel",children:[Gt.jsx("p",{className:"color-learn-target",style:{color:$o[u]},children:VM[u]}),Gt.jsxs("p",{className:"color-learn-step",children:[t+1," / ",da.length]}),n&&Gt.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${n.r},${n.g},${n.b})`}}),Gt.jsx("button",{type:"button",className:"capture-button",disabled:!a,onClick:c,children:a?"Confirm":"Hold steady…"}),o&&Gt.jsx("p",{className:"color-learn-error",children:o})]})}):null}function ay({colors:s,cellClassName:t,variant:n="overlay",orientation:a="real"}){const o=t??(n==="mini"?"face-grid-mini-cell":n==="solving"?"solving-face-cell":"cell-grid-item"),c=a==="mirror"?Yo(s):s;return Gt.jsx("div",{className:`face-color-grid face-color-grid--${n}`,children:c.map((u,h)=>Gt.jsx("span",{className:o,style:{background:$o[u]}},h))})}const JM={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function $M({feedback:s,visible:t}){if(!t)return null;const n=s.cellColors.length===9;return Gt.jsx("div",{className:"detection-overlay","aria-live":"polite",children:Gt.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[Gt.jsxs("div",{className:`detection-status ${s.status}`,children:[Gt.jsx("span",{className:"status-text",children:JM[s.status]}),s.status==="rotate"&&Gt.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&Gt.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),n&&Gt.jsx(ay,{colors:s.cellColors,variant:"overlay",orientation:"mirror"})]})})}function tE({phase:s,knownFaces:t,progress:n,needsNewFace:a=!1,needsClearerCenter:o=!1}){return s!=="liveScan"?null:Gt.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[Gt.jsx("div",{className:"calibration-bar",children:Gt.jsx("div",{className:"calibration-fill",style:{width:`${n*100}%`}})}),Gt.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),Gt.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),a&&Gt.jsx("p",{className:"calibration-hint",children:"Show a different face"}),o&&!a&&Gt.jsx("p",{className:"calibration-hint",children:"Center the face color in the guide"})]})}const Ed=["U","F","R","B","L","D"],eE={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function pa(s){return eE[s]??null}function nE({colors:s,label:t,empty:n=!1}){const a=s&&s.length===9;return Gt.jsxs("div",{className:`face-grid-mini ${n?"face-grid-mini--empty":""}`,children:[a?Gt.jsx(ay,{colors:s,variant:"mini",orientation:"real"}):Gt.jsx("div",{className:"face-color-grid face-color-grid--mini face-color-grid--placeholder",children:Array.from({length:9},(o,c)=>Gt.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},c))}),Gt.jsx("span",{className:"face-grid-mini-label",children:t})]})}const iE={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function Dh({visible:s,scannedFaces:t}){if(!s)return null;const n=Ed.filter(a=>t[a]).length;return Gt.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[Gt.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",n,"/6"]}),Gt.jsx("div",{className:"scanned-faces-bar-grid",children:Ed.map(a=>Gt.jsx(nE,{colors:t[a]??null,label:iE[a],empty:!t[a]},a))})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _p="175",aE=0,Uv=1,rE=2,ry=1,sE=2,ca=3,Qa=0,Qn=1,zi=2,Za=0,Ds=1,Lv=2,Nv=3,Ov=4,oE=5,Tr=100,lE=101,cE=102,uE=103,fE=104,hE=200,dE=201,pE=202,mE=203,bd=204,Td=205,gE=206,vE=207,_E=208,yE=209,xE=210,SE=211,ME=212,EE=213,bE=214,Ad=0,Rd=1,Cd=2,Os=3,wd=4,Dd=5,Ud=6,Ld=7,sy=0,TE=1,AE=2,Ka=0,RE=1,CE=2,wE=3,DE=4,UE=5,LE=6,NE=7,oy=300,Fs=301,Ps=302,Nd=303,Od=304,cu=306,Fd=1e3,Cr=1001,Pd=1002,Ui=1003,OE=1004,yc=1005,Bi=1006,Uh=1007,wr=1008,ga=1009,ly=1010,cy=1011,jo=1012,yp=1013,Lr=1014,fa=1015,tl=1016,xp=1017,Sp=1018,Zo=1020,uy=35902,fy=1021,hy=1022,Di=1023,dy=1024,py=1025,Ko=1026,Qo=1027,my=1028,Mp=1029,gy=1030,Ep=1031,bp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,zd=35840,Bd=35841,Id=35842,Hd=35843,Gd=36196,Vd=37492,kd=37496,Xd=37808,Wd=37809,qd=37810,Yd=37811,jd=37812,Zd=37813,Kd=37814,Qd=37815,Jd=37816,$d=37817,tp=37818,ep=37819,np=37820,ip=37821,Qc=36492,ap=36494,rp=36495,vy=36283,sp=36284,op=36285,lp=36286,FE=3200,PE=3201,zE=0,BE=1,ja="",li="srgb",zs="srgb-linear",nu="linear",Xe="srgb",ds=7680,Fv=519,IE=512,HE=513,GE=514,_y=515,VE=516,kE=517,XE=518,WE=519,Pv=35044,zv="300 es",ha=2e3,iu=2001;class Hs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=Math.PI/180,cp=180/Math.PI;function el(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function Ee(s,t,n){return Math.max(t,Math.min(n,s))}function qE(s,t){return(s%t+t)%t}function Nh(s,t,n){return(1-n)*s+n*t}function Fo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class he{constructor(t=0,n=0){he.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t,n,a,o,c,u,h,p,m){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,m)}set(t,n,a,o,c,u,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=a,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],m=a[1],g=a[4],v=a[7],_=a[2],x=a[5],b=a[8],T=o[0],M=o[3],y=o[6],O=o[1],D=o[4],w=o[7],q=o[2],I=o[5],P=o[8];return c[0]=u*T+h*O+p*q,c[3]=u*M+h*D+p*I,c[6]=u*y+h*w+p*P,c[1]=m*T+g*O+v*q,c[4]=m*M+g*D+v*I,c[7]=m*y+g*w+v*P,c[2]=_*T+x*O+b*q,c[5]=_*M+x*D+b*I,c[8]=_*y+x*w+b*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*u*g-n*h*m-a*c*g+a*h*p+o*c*m-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*u-h*m,_=h*p-g*c,x=m*c-u*p,b=n*v+a*_+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=v*T,t[1]=(o*m-g*a)*T,t[2]=(h*a-o*u)*T,t[3]=_*T,t[4]=(g*n-o*p)*T,t[5]=(o*c-h*n)*T,t[6]=x*T,t[7]=(a*p-m*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*u+m*h)+u+t,-o*m,o*p,-o*(-m*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Oh.makeScale(t,n)),this}rotate(t){return this.premultiply(Oh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Oh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oh=new ve;function yy(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function au(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function YE(){const s=au("canvas");return s.style.display="block",s}const Bv={};function Jc(s){s in Bv||(Bv[s]=!0,console.warn(s))}function jE(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function ZE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function KE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Iv=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hv=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const s={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=ma(o.r),o.g=ma(o.g),o.b=ma(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=Us(o.r),o.g=Us(o.g),o.b=Us(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ja?nu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[zs]:{primaries:t,whitePoint:a,transfer:nu,toXYZ:Iv,fromXYZ:Hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:Iv,fromXYZ:Hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Fe=QE();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class JE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ps===void 0&&(ps=au("canvas")),ps.width=t.width,ps.height=t.height;const o=ps.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=ps}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=au("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ma(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ma(n[a]/255)*255):n[a]=ma(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $E=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=el(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Fh(o[u].image)):c.push(Fh(o[u]))}else c=Fh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?JE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t1=0;class Hn extends Hs{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=Cr,o=Cr,c=Bi,u=wr,h=Di,p=ga,m=Hn.DEFAULT_ANISOTROPY,g=ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=el(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fd:t.x=t.x-Math.floor(t.x);break;case Cr:t.x=t.x<0?0:1;break;case Pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fd:t.y=t.y-Math.floor(t.y);break;case Cr:t.y=t.y<0?0:1;break;case Pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=oy;Hn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,a=0,o=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,m=p[0],g=p[4],v=p[8],_=p[1],x=p[5],b=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(b+M)<.1&&Math.abs(m+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,w=(x+1)/2,q=(y+1)/2,I=(g+_)/4,P=(v+T)/4,X=(b+M)/4;return D>w&&D>q?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=I/a,c=P/a):w>q?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=I/o,c=X/o):q<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(q),a=P/c,o=X/c),this.set(a,o,c,n),this}let O=Math.sqrt((M-b)*(M-b)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(M-b)/O,this.y=(v-T)/O,this.z=(_-g)/O,this.w=Math.acos((m+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this.w=Ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this.w=Ee(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends Hs{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Hn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Tp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends e1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class xy extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends Hn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let p=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];const _=c[u+0],x=c[u+1],b=c[u+2],T=c[u+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=v;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=b,t[n+3]=T;return}if(v!==T||p!==_||m!==x||g!==b){let M=1-h;const y=p*_+m*x+g*b+v*T,O=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const q=Math.sqrt(D),I=Math.atan2(q,y*O);M=Math.sin(M*I)/q,h=Math.sin(h*I)/q}const w=h*O;if(p=p*M+_*w,m=m*M+x*w,g=g*M+b*w,v=v*M+T*w,M===1-h){const q=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=q,m*=q,g*=q,v*=q}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],v=c[u],_=c[u+1],x=c[u+2],b=c[u+3];return t[n]=h*b+g*v+p*x-m*_,t[n+1]=p*b+g*_+m*v-h*x,t[n+2]=m*b+g*x+h*_-p*v,t[n+3]=g*b-h*v-p*_-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),v=h(c/2),_=p(a/2),x=p(o/2),b=p(c/2);switch(u){case"XYZ":this._x=_*g*v+m*x*b,this._y=m*x*v-_*g*b,this._z=m*g*b+_*x*v,this._w=m*g*v-_*x*b;break;case"YXZ":this._x=_*g*v+m*x*b,this._y=m*x*v-_*g*b,this._z=m*g*b-_*x*v,this._w=m*g*v+_*x*b;break;case"ZXY":this._x=_*g*v-m*x*b,this._y=m*x*v+_*g*b,this._z=m*g*b+_*x*v,this._w=m*g*v-_*x*b;break;case"ZYX":this._x=_*g*v-m*x*b,this._y=m*x*v+_*g*b,this._z=m*g*b-_*x*v,this._w=m*g*v+_*x*b;break;case"YZX":this._x=_*g*v+m*x*b,this._y=m*x*v+_*g*b,this._z=m*g*b-_*x*v,this._w=m*g*v-_*x*b;break;case"XZY":this._x=_*g*v-m*x*b,this._y=m*x*v-_*g*b,this._z=m*g*b+_*x*v,this._w=m*g*v+_*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],m=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-m)*x,this._z=(u-o)*x}else if(a>h&&a>v){const x=2*Math.sqrt(1+a-h-v);this._w=(g-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+m)/x}else if(h>v){const x=2*Math.sqrt(1+h-a-v);this._w=(c-m)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+v-a-h);this._w=(u-o)/x,this._x=(c+m)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=a*g+u*h+o*m-c*p,this._y=o*g+u*p+c*h-a*m,this._z=c*g+u*m+a*p-o*h,this._w=u*g-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-n)*g)/m,_=Math.sin(n*g)/m;return this._w=u*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,n=0,a=0){$.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Gv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Gv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,p=t.w,m=2*(u*o-h*a),g=2*(h*n-c*o),v=2*(c*a-u*n);return this.x=n+p*m+u*v-h*g,this.y=a+p*g+h*m-c*v,this.z=o+p*v+c*g-u*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ee(this.x,t.x,n.x),this.y=Ee(this.y,t.y,n.y),this.z=Ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ee(this.x,t,n),this.y=Ee(this.y,t,n),this.z=Ee(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ee(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ph.copy(this).projectOnVector(t),this.sub(Ph)}reflect(t){return this.sub(Ph.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ee(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new $,Gv=new nl;class il{constructor(t=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ai):Ai.fromBufferAttribute(c,u),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),xc.copy(a.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),Sc.subVectors(this.max,Po),ms.subVectors(t.a,Po),gs.subVectors(t.b,Po),vs.subVectors(t.c,Po),Va.subVectors(gs,ms),ka.subVectors(vs,gs),vr.subVectors(ms,vs);let n=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-vr.z,vr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,vr.z,0,-vr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-vr.y,vr.x,0];return!zh(n,ms,gs,vs,Sc)||(n=[1,0,0,0,1,0,0,0,1],!zh(n,ms,gs,vs,Sc))?!1:(Mc.crossVectors(Va,ka),n=[Mc.x,Mc.y,Mc.z],zh(n,ms,gs,vs,Sc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const aa=[new $,new $,new $,new $,new $,new $,new $,new $],Ai=new $,xc=new il,ms=new $,gs=new $,vs=new $,Va=new $,ka=new $,vr=new $,Po=new $,Sc=new $,Mc=new $,_r=new $;function zh(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){_r.fromArray(s,c);const h=o.x*Math.abs(_r.x)+o.y*Math.abs(_r.y)+o.z*Math.abs(_r.z),p=t.dot(_r),m=n.dot(_r),g=a.dot(_r);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const i1=new il,zo=new $,Bh=new $;class uu{constructor(t=new $,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):i1.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(zo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Bh)),this.expandByPoint(zo.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ra=new $,Ih=new $,Ec=new $,Xa=new $,Hh=new $,bc=new $,Gh=new $;class Sy{constructor(t=new $,n=new $(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Ih.copy(t).add(n).multiplyScalar(.5),Ec.copy(n).sub(t).normalize(),Xa.copy(this.origin).sub(Ih);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Ec),h=Xa.dot(this.direction),p=-Xa.dot(Ec),m=Xa.lengthSq(),g=Math.abs(1-u*u);let v,_,x,b;if(g>0)if(v=u*p-h,_=u*h-p,b=c*g,v>=0)if(_>=-b)if(_<=b){const T=1/g;v*=T,_*=T,x=v*(v+u*_+2*h)+_*(u*v+_+2*p)+m}else _=c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*p)+m;else _=-c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*p)+m;else _<=-b?(v=Math.max(0,-(-u*c+h)),_=v>0?-c:Math.min(Math.max(-c,-p),c),x=-v*v+_*(_+2*p)+m):_<=b?(v=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+m):(v=Math.max(0,-(u*c+h)),_=v>0?c:Math.min(Math.max(-c,-p),c),x=-v*v+_*(_+2*p)+m);else _=u>0?-c:c,v=Math.max(0,-(u*_+h)),x=-v*v+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ih).addScaledVector(Ec,_),x}intersectSphere(t,n){ra.subVectors(t.center,this.origin);const a=ra.dot(this.direction),o=ra.dot(ra)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),g>=0?(c=(t.min.y-_.y)*g,u=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,u=(t.min.y-_.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,n,a,o,c){Hh.subVectors(n,t),bc.subVectors(a,t),Gh.crossVectors(Hh,bc);let u=this.direction.dot(Gh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Xa.subVectors(this.origin,t);const p=h*this.direction.dot(bc.crossVectors(Xa,bc));if(p<0)return null;const m=h*this.direction.dot(Hh.cross(Xa));if(m<0||p+m>u)return null;const g=-h*Xa.dot(Gh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,n,a,o,c,u,h,p,m,g,v,_,x,b,T,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,m,g,v,_,x,b,T,M)}set(t,n,a,o,c,u,h,p,m,g,v,_,x,b,T,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=p,y[2]=m,y[6]=g,y[10]=v,y[14]=_,y[3]=x,y[7]=b,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),u=1/_s.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=u*g,x=u*v,b=h*g,T=h*v;n[0]=p*g,n[4]=-p*v,n[8]=m,n[1]=x+b*m,n[5]=_-T*m,n[9]=-h*p,n[2]=T-_*m,n[6]=b+x*m,n[10]=u*p}else if(t.order==="YXZ"){const _=p*g,x=p*v,b=m*g,T=m*v;n[0]=_+T*h,n[4]=b*h-x,n[8]=u*m,n[1]=u*v,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=T+_*h,n[10]=u*p}else if(t.order==="ZXY"){const _=p*g,x=p*v,b=m*g,T=m*v;n[0]=_-T*h,n[4]=-u*v,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=T-_*h,n[2]=-u*m,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const _=u*g,x=u*v,b=h*g,T=h*v;n[0]=p*g,n[4]=b*m-x,n[8]=_*m+T,n[1]=p*v,n[5]=T*m+_,n[9]=x*m-b,n[2]=-m,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,x=u*m,b=h*p,T=h*m;n[0]=p*g,n[4]=T-_*v,n[8]=b*v+x,n[1]=v,n[5]=u*g,n[9]=-h*g,n[2]=-m*g,n[6]=x*v+b,n[10]=_-T*v}else if(t.order==="XZY"){const _=u*p,x=u*m,b=h*p,T=h*m;n[0]=p*g,n[4]=-v,n[8]=m*g,n[1]=_*v+T,n[5]=u*g,n[9]=x*v-b,n[2]=b*v-x,n[6]=h*g,n[10]=T*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a1,t,r1)}lookAt(t,n,a){const o=this.elements;return si.subVectors(t,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Wa.crossVectors(a,si),Wa.lengthSq()===0&&(Math.abs(a.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Wa.crossVectors(a,si)),Wa.normalize(),Tc.crossVectors(si,Wa),o[0]=Wa.x,o[4]=Tc.x,o[8]=si.x,o[1]=Wa.y,o[5]=Tc.y,o[9]=si.y,o[2]=Wa.z,o[6]=Tc.z,o[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],m=a[12],g=a[1],v=a[5],_=a[9],x=a[13],b=a[2],T=a[6],M=a[10],y=a[14],O=a[3],D=a[7],w=a[11],q=a[15],I=o[0],P=o[4],X=o[8],L=o[12],C=o[1],k=o[5],ut=o[9],ot=o[13],_t=o[2],bt=o[6],B=o[10],st=o[14],K=o[3],Rt=o[7],Nt=o[11],N=o[15];return c[0]=u*I+h*C+p*_t+m*K,c[4]=u*P+h*k+p*bt+m*Rt,c[8]=u*X+h*ut+p*B+m*Nt,c[12]=u*L+h*ot+p*st+m*N,c[1]=g*I+v*C+_*_t+x*K,c[5]=g*P+v*k+_*bt+x*Rt,c[9]=g*X+v*ut+_*B+x*Nt,c[13]=g*L+v*ot+_*st+x*N,c[2]=b*I+T*C+M*_t+y*K,c[6]=b*P+T*k+M*bt+y*Rt,c[10]=b*X+T*ut+M*B+y*Nt,c[14]=b*L+T*ot+M*st+y*N,c[3]=O*I+D*C+w*_t+q*K,c[7]=O*P+D*k+w*bt+q*Rt,c[11]=O*X+D*ut+w*B+q*Nt,c[15]=O*L+D*ot+w*st+q*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],_=t[10],x=t[14],b=t[3],T=t[7],M=t[11],y=t[15];return b*(+c*p*v-o*m*v-c*h*_+a*m*_+o*h*x-a*p*x)+T*(+n*p*x-n*m*_+c*u*_-o*u*x+o*m*g-c*p*g)+M*(+n*m*v-n*h*x-c*u*v+a*u*x+c*h*g-a*m*g)+y*(-o*h*g-n*p*v+n*h*_+o*u*v-a*u*_+a*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],_=t[10],x=t[11],b=t[12],T=t[13],M=t[14],y=t[15],O=v*M*m-T*_*m+T*p*x-h*M*x-v*p*y+h*_*y,D=b*_*m-g*M*m-b*p*x+u*M*x+g*p*y-u*_*y,w=g*T*m-b*v*m+b*h*x-u*T*x-g*h*y+u*v*y,q=b*v*p-g*T*p-b*h*_+u*T*_+g*h*M-u*v*M,I=n*O+a*D+o*w+c*q;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return t[0]=O*P,t[1]=(T*_*c-v*M*c-T*o*x+a*M*x+v*o*y-a*_*y)*P,t[2]=(h*M*c-T*p*c+T*o*m-a*M*m-h*o*y+a*p*y)*P,t[3]=(v*p*c-h*_*c-v*o*m+a*_*m+h*o*x-a*p*x)*P,t[4]=D*P,t[5]=(g*M*c-b*_*c+b*o*x-n*M*x-g*o*y+n*_*y)*P,t[6]=(b*p*c-u*M*c-b*o*m+n*M*m+u*o*y-n*p*y)*P,t[7]=(u*_*c-g*p*c+g*o*m-n*_*m-u*o*x+n*p*x)*P,t[8]=w*P,t[9]=(b*v*c-g*T*c-b*a*x+n*T*x+g*a*y-n*v*y)*P,t[10]=(u*T*c-b*h*c+b*a*m-n*T*m-u*a*y+n*h*y)*P,t[11]=(g*h*c-u*v*c-g*a*m+n*v*m+u*a*x-n*h*x)*P,t[12]=q*P,t[13]=(g*T*o-b*v*o+b*a*_-n*T*_-g*a*M+n*v*M)*P,t[14]=(b*h*o-u*T*o-b*a*p+n*T*p+u*a*M-n*h*M)*P,t[15]=(u*v*o-g*h*o+g*a*p-n*v*p-u*a*_+n*h*_)*P,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,m=c*u,g=c*h;return this.set(m*u+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*u,0,m*p-o*h,g*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,m=c+c,g=u+u,v=h+h,_=c*m,x=c*g,b=c*v,T=u*g,M=u*v,y=h*v,O=p*m,D=p*g,w=p*v,q=a.x,I=a.y,P=a.z;return o[0]=(1-(T+y))*q,o[1]=(x+w)*q,o[2]=(b-D)*q,o[3]=0,o[4]=(x-w)*I,o[5]=(1-(_+y))*I,o[6]=(M+O)*I,o[7]=0,o[8]=(b+D)*P,o[9]=(M-O)*P,o[10]=(1-(_+T))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=_s.set(o[0],o[1],o[2]).length();const u=_s.set(o[4],o[5],o[6]).length(),h=_s.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ri.copy(this);const m=1/c,g=1/u,v=1/h;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,n.setFromRotationMatrix(Ri),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=ha){const p=this.elements,m=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),_=(a+o)/(a-o);let x,b;if(h===ha)x=-(u+c)/(u-c),b=-2*u*c/(u-c);else if(h===iu)x=-u/(u-c),b=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ha){const p=this.elements,m=1/(n-t),g=1/(a-o),v=1/(u-c),_=(n+t)*m,x=(a+o)*g;let b,T;if(h===ha)b=(u+c)*v,T=-2*v;else if(h===iu)b=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const _s=new $,Ri=new Qe,a1=new $(0,0,0),r1=new $(1,1,1),Wa=new $,Tc=new $,si=new $,Vv=new Qe,kv=new nl;class va{constructor(t=0,n=0,a=0,o=va.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],p=o[1],m=o[5],g=o[9],v=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Vv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return kv.setFromEuler(this),this.setFromQuaternion(kv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}va.DEFAULT_ORDER="XYZ";class My{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s1=0;const Xv=new $,ys=new nl,sa=new Qe,Ac=new $,Bo=new $,o1=new $,l1=new nl,Wv=new $(1,0,0),qv=new $(0,1,0),Yv=new $(0,0,1),jv={type:"added"},c1={type:"removed"},xs={type:"childadded",child:null},Vh={type:"childremoved",child:null};class Gn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new $,n=new va,a=new nl,o=new $(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ve}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new My,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,n){return ys.setFromAxisAngle(t,n),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Wv,t)}rotateY(t){return this.rotateOnAxis(qv,t)}rotateZ(t){return this.rotateOnAxis(Yv,t)}translateOnAxis(t,n){return Xv.copy(t).applyQuaternion(this.quaternion),this.position.add(Xv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Wv,t)}translateY(t){return this.translateOnAxis(qv,t)}translateZ(t){return this.translateOnAxis(Yv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Ac.copy(t):Ac.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Bo,Ac,this.up):sa.lookAt(Ac,Bo,this.up),this.quaternion.setFromRotationMatrix(sa),o&&(sa.extractRotation(o.matrixWorld),ys.setFromRotationMatrix(sa),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jv),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(c1),Vh.child=t,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jv),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,o1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,l1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),m=u(t.textures),g=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),b=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new $(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new $,oa=new $,kh=new $,la=new $,Ss=new $,Ms=new $,Zv=new $,Xh=new $,Wh=new $,qh=new $,Yh=new on,jh=new on,Zh=new on;class wi{constructor(t=new $,n=new $,a=new $){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ci.subVectors(t,n),o.cross(Ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ci.subVectors(o,n),oa.subVectors(a,n),kh.subVectors(t,n);const u=Ci.dot(Ci),h=Ci.dot(oa),p=Ci.dot(kh),m=oa.dot(oa),g=oa.dot(kh),v=u*m-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,x=(m*p-h*g)*_,b=(u*g-h*p)*_;return c.set(1-x-b,b,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,n,a,o,c,u,h,p){return this.getBarycoord(t,n,a,o,la)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,la.x),p.addScaledVector(u,la.y),p.addScaledVector(h,la.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return Yh.setScalar(0),jh.setScalar(0),Zh.setScalar(0),Yh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,a),Zh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Yh,c.x),u.addScaledVector(jh,c.y),u.addScaledVector(Zh,c.z),u}static isFrontFacing(t,n,a,o){return Ci.subVectors(a,n),oa.subVectors(t,n),Ci.cross(oa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ci.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return wi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return wi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Ss.subVectors(o,a),Ms.subVectors(c,a),Xh.subVectors(t,a);const p=Ss.dot(Xh),m=Ms.dot(Xh);if(p<=0&&m<=0)return n.copy(a);Wh.subVectors(t,o);const g=Ss.dot(Wh),v=Ms.dot(Wh);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(a).addScaledVector(Ss,u);qh.subVectors(t,c);const x=Ss.dot(qh),b=Ms.dot(qh);if(b>=0&&x<=b)return n.copy(c);const T=x*m-p*b;if(T<=0&&m>=0&&b<=0)return h=m/(m-b),n.copy(a).addScaledVector(Ms,h);const M=g*b-x*v;if(M<=0&&v-g>=0&&x-b>=0)return Zv.subVectors(c,o),h=(v-g)/(v-g+(x-b)),n.copy(o).addScaledVector(Zv,h);const y=1/(M+T+_);return u=T*y,h=_*y,n.copy(a).addScaledVector(Ss,u).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Kh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ze{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Fe.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=Fe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Fe.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=Fe.workingColorSpace){if(t=qE(t,1),n=Ee(n,0,1),a=Ee(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Kh(u,c,t+1/3),this.g=Kh(u,c,t),this.b=Kh(u,c,t-1/3)}return Fe.toWorkingColorSpace(this,o),this}setStyle(t,n=li){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=li){const a=Ey[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Fe.fromWorkingColorSpace(Nn.copy(this),t),Math.round(Ee(Nn.r*255,0,255))*65536+Math.round(Ee(Nn.g*255,0,255))*256+Math.round(Ee(Nn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Fe.workingColorSpace){Fe.fromWorkingColorSpace(Nn.copy(this),n);const a=Nn.r,o=Nn.g,c=Nn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const g=(h+u)/2;if(h===u)p=0,m=0;else{const v=u-h;switch(m=g<=.5?v/(u+h):v/(2-u-h),u){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Fe.workingColorSpace){return Fe.fromWorkingColorSpace(Nn.copy(this),n),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=li){Fe.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,a=Nn.g,o=Nn.b;return t!==li?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(qa),this.setHSL(qa.h+t,qa.s+n,qa.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(qa),t.getHSL(Rc);const a=Nh(qa.h,Rc.h,n),o=Nh(qa.s,Rc.s,n),c=Nh(qa.l,Rc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ze;ze.NAMES=Ey;let u1=0;class al extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=el(),this.name="",this.type="Material",this.blending=Ds,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Td,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(a.blending=this.blending),this.side!==Qa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==bd&&(a.blendSrc=this.blendSrc),this.blendDst!==Td&&(a.blendDst=this.blendDst),this.blendEquation!==Tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ar extends al{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new va,this.combine=sy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new $,Cc=new he;let f1=0;class Ii{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Pv,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Cc.fromBufferAttribute(this,n),Cc.applyMatrix3(t),this.setXY(n,Cc.x,Cc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(t),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Fo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Fo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Fo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Fo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Fo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),o=Kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),o=Kn(o,this.array),c=Kn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pv&&(t.usage=this.usage),t}}class by extends Ii{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ty extends Ii{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class gn extends Ii{constructor(t,n,a){super(new Float32Array(t),n,a)}}let h1=0;const vi=new Qe,Qh=new Gn,Es=new $,oi=new il,Io=new il,Sn=new $;class yi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yy(t)?Ty:by)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ve().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,n,a){return vi.makeTranslation(t,n,a),this.applyMatrix4(vi),this}scale(t,n,a){return vi.makeScale(t,n,a),this.applyMatrix4(vi),this}lookAt(t){return Qh.lookAt(t),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const a=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(oi.min,Io.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Io.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Io.min),oi.expandByPoint(Io.max))}oi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Sn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Sn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Sn.fromBufferAttribute(h,m),p&&(Es.fromBufferAttribute(t,m),Sn.add(Es)),o=Math.max(o,a.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new $,p[X]=new $;const m=new $,g=new $,v=new $,_=new he,x=new he,b=new he,T=new $,M=new $;function y(X,L,C){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,L),v.fromBufferAttribute(a,C),_.fromBufferAttribute(c,X),x.fromBufferAttribute(c,L),b.fromBufferAttribute(c,C),g.sub(m),v.sub(m),x.sub(_),b.sub(_);const k=1/(x.x*b.y-b.x*x.y);isFinite(k)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(k),M.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(k),h[X].add(T),h[L].add(T),h[C].add(T),p[X].add(M),p[L].add(M),p[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let X=0,L=O.length;X<L;++X){const C=O[X],k=C.start,ut=C.count;for(let ot=k,_t=k+ut;ot<_t;ot+=3)y(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new $,w=new $,q=new $,I=new $;function P(X){q.fromBufferAttribute(o,X),I.copy(q);const L=h[X];D.copy(L),D.sub(q.multiplyScalar(q.dot(L))).normalize(),w.crossVectors(I,L);const k=w.dot(p[X])<0?-1:1;u.setXYZW(X,D.x,D.y,D.z,k)}for(let X=0,L=O.length;X<L;++X){const C=O[X],k=C.start,ut=C.count;for(let ot=k,_t=k+ut;ot<_t;ot+=3)P(t.getX(ot+0)),P(t.getX(ot+1)),P(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new $,c=new $,u=new $,h=new $,p=new $,m=new $,g=new $,v=new $;if(t)for(let _=0,x=t.count;_<x;_+=3){const b=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,M),h.add(g),p.add(g),m.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Sn.fromBufferAttribute(t,n),Sn.normalize(),t.setXYZ(n,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let x=0,b=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*g;for(let y=0;y<g;y++)_[b++]=m[x++]}return new Ii(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],x=t(_,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const x=m[v];g.push(x.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kv=new Qe,yr=new Sy,wc=new uu,Qv=new $,Dc=new $,Uc=new $,Lc=new $,Jh=new $,Nc=new $,Jv=new $,Oc=new $;class Fn extends Gn{constructor(t=new yi,n=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Nc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],v=c[p];g!==0&&(Jh.fromBufferAttribute(v,t),u?Nc.addScaledVector(Jh,g):Nc.addScaledVector(Jh.sub(n),g))}n.add(Nc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),wc.copy(a.boundingSphere),wc.applyMatrix4(c),yr.copy(t.ray).recast(t.near),!(wc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(wc,Qv)===null||yr.origin.distanceToSquared(Qv)>(t.far-t.near)**2))&&(Kv.copy(c).invert(),yr.copy(t.ray).applyMatrix4(Kv),!(a.boundingBox!==null&&yr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,yr)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,T=_.length;b<T;b++){const M=_[b],y=u[M.materialIndex],O=Math.max(M.start,x.start),D=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let w=O,q=D;w<q;w+=3){const I=h.getX(w),P=h.getX(w+1),X=h.getX(w+2);o=Fc(this,y,t,a,m,g,v,I,P,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let M=b,y=T;M<y;M+=3){const O=h.getX(M),D=h.getX(M+1),w=h.getX(M+2);o=Fc(this,u,t,a,m,g,v,O,D,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,T=_.length;b<T;b++){const M=_[b],y=u[M.materialIndex],O=Math.max(M.start,x.start),D=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let w=O,q=D;w<q;w+=3){const I=w,P=w+1,X=w+2;o=Fc(this,y,t,a,m,g,v,I,P,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=b,y=T;M<y;M+=3){const O=M,D=M+1,w=M+2;o=Fc(this,u,t,a,m,g,v,O,D,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function d1(s,t,n,a,o,c,u,h){let p;if(t.side===Qn?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,t.side===Qa,h),p===null)return null;Oc.copy(h),Oc.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Oc);return m<n.near||m>n.far?null:{distance:m,point:Oc.clone(),object:s}}function Fc(s,t,n,a,o,c,u,h,p,m){s.getVertexPosition(h,Dc),s.getVertexPosition(p,Uc),s.getVertexPosition(m,Lc);const g=d1(s,t,n,a,Dc,Uc,Lc,Jv);if(g){const v=new $;wi.getBarycoord(Jv,Dc,Uc,Lc,v),o&&(g.uv=wi.getInterpolatedAttribute(o,h,p,m,v,new he)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,p,m,v,new he)),u&&(g.normal=wi.getInterpolatedAttribute(u,h,p,m,v,new $),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new $,materialIndex:0};wi.getNormal(Dc,Uc,Lc,_.normal),g.face=_,g.barycoord=v}return g}class rl extends yi{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],g=[],v=[];let _=0,x=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,o,u,2),b("x","z","y",1,-1,t,a,-n,o,u,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(v,2));function b(T,M,y,O,D,w,q,I,P,X,L){const C=w/P,k=q/X,ut=w/2,ot=q/2,_t=I/2,bt=P+1,B=X+1;let st=0,K=0;const Rt=new $;for(let Nt=0;Nt<B;Nt++){const N=Nt*k-ot;for(let at=0;at<bt;at++){const tt=at*C-ut;Rt[T]=tt*O,Rt[M]=N*D,Rt[y]=_t,m.push(Rt.x,Rt.y,Rt.z),Rt[T]=0,Rt[M]=0,Rt[y]=I>0?1:-1,g.push(Rt.x,Rt.y,Rt.z),v.push(at/P),v.push(1-Nt/X),st+=1}}for(let Nt=0;Nt<X;Nt++)for(let N=0;N<P;N++){const at=_+N+bt*Nt,tt=_+N+bt*(Nt+1),z=_+(N+1)+bt*(Nt+1),F=_+(N+1)+bt*Nt;p.push(at,tt,F),p.push(tt,z,F),K+=6}h.addGroup(x,K,L),x+=K,_+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function In(s){const t={};for(let n=0;n<s.length;n++){const a=Bs(s[n]);for(const o in a)t[o]=a[o]}return t}function p1(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function Ay(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Fe.workingColorSpace}const m1={clone:Bs,merge:In};var g1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends al{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g1,this.fragmentShader=v1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=p1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Ry extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ha}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new $,$v=new he,t_=new he;class _i extends Ry{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=cp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cp*2*Math.atan(Math.tan(Lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ya.x,Ya.y).multiplyScalar(-t/Ya.z)}getViewSize(t,n){return this.getViewBounds(t,$v,t_),n.subVectors(t_,$v)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Lh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/m,o*=u.width/p,a*=u.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ts=1;class _1 extends Gn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new _i(bs,Ts,t,n);o.layers=this.layers,this.add(o);const c=new _i(bs,Ts,t,n);c.layers=this.layers,this.add(c);const u=new _i(bs,Ts,t,n);u.layers=this.layers,this.add(u);const h=new _i(bs,Ts,t,n);h.layers=this.layers,this.add(h);const p=new _i(bs,Ts,t,n);p.layers=this.layers,this.add(p);const m=new _i(bs,Ts,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const m of n)this.remove(m);if(t===ha)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===iu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,m),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(v,_,x),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Cy extends Hn{constructor(t=[],n=Fs,a,o,c,u,h,p,m,g){super(t,n,a,o,c,u,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y1 extends Nr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Cy(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new rl(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:Bs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Qn,blending:Za});c.uniforms.tEquirect.value=n;const u=new Fn(o,c),h=n.minFilter;return n.minFilter===wr&&(n.minFilter=Bi),new _1(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Cs extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x1={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),y=this._getHandJoint(m,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,b=.005;m.inputState.pinching&&_>x+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=x-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Cs;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class S1 extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new va,this.environmentIntensity=1,this.environmentRotation=new va,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const td=new $,M1=new $,E1=new ve;class Er{constructor(t=new $(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=td.subVectors(a,n).cross(M1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(td),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||E1.getNormalMatrix(t),o=this.coplanarPoint(td).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new uu,Pc=new $;class wy{constructor(t=new Er,n=new Er,a=new Er,o=new Er,c=new Er,u=new Er){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ha){const a=this.planes,o=t.elements,c=o[0],u=o[1],h=o[2],p=o[3],m=o[4],g=o[5],v=o[6],_=o[7],x=o[8],b=o[9],T=o[10],M=o[11],y=o[12],O=o[13],D=o[14],w=o[15];if(a[0].setComponents(p-c,_-m,M-x,w-y).normalize(),a[1].setComponents(p+c,_+m,M+x,w+y).normalize(),a[2].setComponents(p+u,_+g,M+b,w+O).normalize(),a[3].setComponents(p-u,_-g,M-b,w-O).normalize(),a[4].setComponents(p-h,_-v,M-T,w-D).normalize(),n===ha)a[5].setComponents(p+h,_+v,M+T,w+D).normalize();else if(n===iu)a[5].setComponents(h,v,T,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Pc.x=o.normal.x>0?t.max.x:t.min.x,Pc.y=o.normal.y>0?t.max.y:t.min.y,Pc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dy extends al{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ru=new $,su=new $,e_=new Qe,Ho=new Sy,zc=new uu,ed=new $,n_=new $;class b1 extends Gn{constructor(t=new yi,n=new Dy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ru.fromBufferAttribute(n,o-1),su.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ru.distanceTo(su);t.setAttribute("lineDistance",new gn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),zc.copy(a.boundingSphere),zc.applyMatrix4(o),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;e_.copy(o).invert(),Ho.copy(t.ray).applyMatrix4(e_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const x=Math.max(0,u.start),b=Math.min(g.count,u.start+u.count);for(let T=x,M=b-1;T<M;T+=m){const y=g.getX(T),O=g.getX(T+1),D=Bc(this,t,Ho,p,y,O,T);D&&n.push(D)}if(this.isLineLoop){const T=g.getX(b-1),M=g.getX(x),y=Bc(this,t,Ho,p,T,M,b-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),b=Math.min(_.count,u.start+u.count);for(let T=x,M=b-1;T<M;T+=m){const y=Bc(this,t,Ho,p,T,T+1,T);y&&n.push(y)}if(this.isLineLoop){const T=Bc(this,t,Ho,p,b-1,x,b-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Bc(s,t,n,a,o,c,u){const h=s.geometry.attributes.position;if(ru.fromBufferAttribute(h,o),su.fromBufferAttribute(h,c),n.distanceSqToSegment(ru,su,ed,n_)>a)return;ed.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(ed);if(!(m<t.near||m>t.far))return{distance:m,point:n_.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const i_=new $,a_=new $;class Uy extends b1{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)i_.fromBufferAttribute(n,o),a_.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+i_.distanceTo(a_);t.setAttribute("lineDistance",new gn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r_ extends Hn{constructor(t,n,a,o,c,u,h,p,m){super(t,n,a,o,c,u,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ly extends Hn{constructor(t,n,a=Lr,o,c,u,h=Ui,p=Ui,m,g=Ko){if(g!==Ko&&g!==Qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,u,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _a{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-u,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const g=a[o],_=a[o+1]-g,x=(u-g)/_;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),p=n||(u.isVector2?new he:new $);return p.copy(h).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new $,o=[],c=[],u=[],h=new $,p=new Qe;for(let x=0;x<=t;x++){const b=x/t;o[x]=this.getTangentAt(b,new $)}c[0]=new $,u[0]=new $;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=m&&(m=g,a.set(1,0,0)),v<=m&&(m=v,a.set(0,1,0)),_<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Ee(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Ee(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let b=1;b<=t;b++)c[b].applyMatrix4(p.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ny extends _a{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new he){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,x=m-this.aY;p=_*g-x*v+this.aX,m=_*v+x*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class T1 extends Ny{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Ap(){let s=0,t=0,n=0,a=0;function o(c,u,h,p){s=c,t=h,n=-3*c+3*u-2*h-p,a=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,m){o(u,h,m*(h-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,m,g,v){let _=(u-c)/m-(h-c)/(m+g)+(h-u)/g,x=(h-u)/g-(p-u)/(g+v)+(p-h)/v;_*=g,x*=g,o(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return s+t*c+n*u+a*h}}}const Ic=new $,nd=new Ap,id=new Ap,ad=new Ap;class up extends _a{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new $){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=o[(h-1)%c]:(Ic.subVectors(o[0],o[1]).add(o[0]),m=Ic);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Ic.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Ic),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(m.distanceToSquared(v),x),T=Math.pow(v.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(g),x);T<1e-4&&(T=1),b<1e-4&&(b=T),M<1e-4&&(M=T),nd.initNonuniformCatmullRom(m.x,v.x,_.x,g.x,b,T,M),id.initNonuniformCatmullRom(m.y,v.y,_.y,g.y,b,T,M),ad.initNonuniformCatmullRom(m.z,v.z,_.z,g.z,b,T,M)}else this.curveType==="catmullrom"&&(nd.initCatmullRom(m.x,v.x,_.x,g.x,this.tension),id.initCatmullRom(m.y,v.y,_.y,g.y,this.tension),ad.initCatmullRom(m.z,v.z,_.z,g.z,this.tension));return a.set(nd.calc(p),id.calc(p),ad.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new $().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function s_(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=s*s,p=s*h;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*h+c*s+n}function A1(s,t){const n=1-s;return n*n*t}function R1(s,t){return 2*(1-s)*s*t}function C1(s,t){return s*s*t}function Xo(s,t,n,a){return A1(s,t)+R1(s,n)+C1(s,a)}function w1(s,t){const n=1-s;return n*n*n*t}function D1(s,t){const n=1-s;return 3*n*n*s*t}function U1(s,t){return 3*(1-s)*s*s*t}function L1(s,t){return s*s*s*t}function Wo(s,t,n,a,o){return w1(s,t)+D1(s,n)+U1(s,a)+L1(s,o)}class N1 extends _a{constructor(t=new he,n=new he,a=new he,o=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new he){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Wo(t,o.x,c.x,u.x,h.x),Wo(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O1 extends _a{constructor(t=new $,n=new $,a=new $,o=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new $){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Wo(t,o.x,c.x,u.x,h.x),Wo(t,o.y,c.y,u.y,h.y),Wo(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class F1 extends _a{constructor(t=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new he){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P1 extends _a{constructor(t=new $,n=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new $){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new $){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z1 extends _a{constructor(t=new he,n=new he,a=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new he){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(Xo(t,o.x,c.x,u.x),Xo(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oy extends _a{constructor(t=new $,n=new $,a=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new $){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(Xo(t,o.x,c.x,u.x),Xo(t,o.y,c.y,u.y),Xo(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B1 extends _a{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new he){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,p=o[u===0?u:u-1],m=o[u],g=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return a.set(s_(h,p.x,m.x,g.x,v.x),s_(h,p.y,m.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new he().fromArray(o))}return this}}var I1=Object.freeze({__proto__:null,ArcCurve:T1,CatmullRomCurve3:up,CubicBezierCurve:N1,CubicBezierCurve3:O1,EllipseCurve:Ny,LineCurve:F1,LineCurve3:P1,QuadraticBezierCurve:z1,QuadraticBezierCurve3:Oy,SplineCurve:B1});class Rp extends yi{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],p=[],m=new $,g=new he;u.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const x=a+v/n*o;m.x=t*Math.cos(x),m.y=t*Math.sin(x),u.push(m.x,m.y,m.z),h.push(0,0,1),g.x=(u[_]/t+1)/2,g.y=(u[_+1]/t+1)/2,p.push(g.x,g.y)}for(let v=1;v<=n;v++)c.push(v,v+1,0);this.setIndex(c),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Cp extends yi{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],x=[];let b=0;const T=[],M=a/2;let y=0;O(),u===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(x,2));function O(){const w=new $,q=new $;let I=0;const P=(n-t)/a;for(let X=0;X<=c;X++){const L=[],C=X/c,k=C*(n-t)+t;for(let ut=0;ut<=o;ut++){const ot=ut/o,_t=ot*p+h,bt=Math.sin(_t),B=Math.cos(_t);q.x=k*bt,q.y=-C*a+M,q.z=k*B,v.push(q.x,q.y,q.z),w.set(bt,P,B).normalize(),_.push(w.x,w.y,w.z),x.push(ot,1-C),L.push(b++)}T.push(L)}for(let X=0;X<o;X++)for(let L=0;L<c;L++){const C=T[L][X],k=T[L+1][X],ut=T[L+1][X+1],ot=T[L][X+1];(t>0||L!==0)&&(g.push(C,k,ot),I+=3),(n>0||L!==c-1)&&(g.push(k,ut,ot),I+=3)}m.addGroup(y,I,0),y+=I}function D(w){const q=b,I=new he,P=new $;let X=0;const L=w===!0?t:n,C=w===!0?1:-1;for(let ut=1;ut<=o;ut++)v.push(0,M*C,0),_.push(0,C,0),x.push(.5,.5),b++;const k=b;for(let ut=0;ut<=o;ut++){const _t=ut/o*p+h,bt=Math.cos(_t),B=Math.sin(_t);P.x=L*B,P.y=M*C,P.z=L*bt,v.push(P.x,P.y,P.z),_.push(0,C,0),I.x=bt*.5+.5,I.y=B*.5*C+.5,x.push(I.x,I.y),b++}for(let ut=0;ut<o;ut++){const ot=q+ut,_t=k+ut;w===!0?g.push(_t,_t+1,ot):g.push(_t+1,_t,ot),X+=3}m.addGroup(y,X,w===!0?1:2),y+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Cp{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new ou(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sl extends yi{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,v=t/h,_=n/p,x=[],b=[],T=[],M=[];for(let y=0;y<g;y++){const O=y*_-u;for(let D=0;D<m;D++){const w=D*v-c;b.push(w,-O,0),T.push(0,0,1),M.push(D/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let O=0;O<h;O++){const D=O+m*y,w=O+m*(y+1),q=O+1+m*(y+1),I=O+1+m*y;x.push(D,w,I),x.push(w,q,I)}this.setIndex(x),this.setAttribute("position",new gn(b,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.widthSegments,t.heightSegments)}}class lu extends yi{constructor(t=new Oy(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new $,p=new $,m=new he;let g=new $;const v=[],_=[],x=[],b=[];T(),this.setIndex(b),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(x,2));function T(){for(let D=0;D<n;D++)M(D);M(c===!1?n:0),O(),y()}function M(D){g=t.getPointAt(D/n,g);const w=u.normals[D],q=u.binormals[D];for(let I=0;I<=o;I++){const P=I/o*Math.PI*2,X=Math.sin(P),L=-Math.cos(P);p.x=L*w.x+X*q.x,p.y=L*w.y+X*q.y,p.z=L*w.z+X*q.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function y(){for(let D=1;D<=n;D++)for(let w=1;w<=o;w++){const q=(o+1)*(D-1)+(w-1),I=(o+1)*D+(w-1),P=(o+1)*D+w,X=(o+1)*(D-1)+w;b.push(q,I,X),b.push(I,P,X)}}function O(){for(let D=0;D<=n;D++)for(let w=0;w<=o;w++)m.x=D/n,m.y=w/o,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lu(new I1[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class H1 extends al{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class G1 extends al{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class V1 extends Gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class k1 extends Ry{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class X1 extends V1{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class W1 extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function o_(s,t,n,a){const o=q1(a);switch(n){case fy:return s*t;case dy:return s*t;case py:return s*t*2;case my:return s*t/o.components*o.byteLength;case Mp:return s*t/o.components*o.byteLength;case gy:return s*t*2/o.components*o.byteLength;case Ep:return s*t*2/o.components*o.byteLength;case hy:return s*t*3/o.components*o.byteLength;case Di:return s*t*4/o.components*o.byteLength;case bp:return s*t*4/o.components*o.byteLength;case Yc:case jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bd:case Hd:return Math.max(s,16)*Math.max(t,8)/4;case zd:case Id:return Math.max(s,8)*Math.max(t,8)/2;case Gd:case Vd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case tp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ep:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case np:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ip:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Qc:case ap:case rp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vy:case sp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case op:case lp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function q1(s){switch(s){case ga:case ly:return{byteLength:1,components:1};case jo:case cy:case tl:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case Lr:case yp:case fa:return{byteLength:4,components:1};case uy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fy(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Y1(s){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,g),h.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((x,b)=>x.start-b.start);let _=0;for(let x=1;x<v.length;x++){const b=v[_],T=v[x];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++_,v[_]=T)}v.length=_+1;for(let x=0,b=v.length;x<b;x++){const T=v[x];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:u}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z1=`#ifdef USE_ALPHAHASH
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
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tb=`#ifdef USE_AOMAP
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
#endif`,eb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nb=`#ifdef USE_BATCHING
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
#endif`,ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ob=`#ifdef USE_IRIDESCENCE
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
#endif`,lb=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vb=`#define PI 3.141592653589793
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
} // validated`,_b=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
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
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
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
#endif`,qb=`struct PhysicalMaterial {
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
}`,Yb=`
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iT=`#if defined( USE_POINTS_UV )
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
#endif`,aT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`#ifdef USE_MORPHTARGETS
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
#endif`,uT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gT=`#ifdef USE_NORMALMAP
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
#endif`,vT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_T=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ST=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ET=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LT=`float getShadowMask() {
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
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,FT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PT=`#ifdef USE_SKINNING
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
#endif`,zT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#ifdef USE_TRANSMISSION
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jT=`uniform sampler2D t2D;
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`#include <common>
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
}`,tA=`#if DEPTH_PACKING == 3200
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
}`,eA=`#define DISTANCE
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
}`,nA=`#define DISTANCE
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
}`,iA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`uniform float scale;
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
}`,sA=`uniform vec3 diffuse;
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
}`,oA=`#include <common>
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
}`,lA=`uniform vec3 diffuse;
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
}`,cA=`#define LAMBERT
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
}`,uA=`#define LAMBERT
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
}`,fA=`#define MATCAP
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
}`,hA=`#define MATCAP
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
}`,dA=`#define NORMAL
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
}`,pA=`#define NORMAL
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
}`,mA=`#define PHONG
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
}`,gA=`#define PHONG
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
}`,vA=`#define STANDARD
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
}`,_A=`#define STANDARD
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
}`,yA=`#define TOON
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
}`,xA=`#define TOON
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
}`,SA=`uniform float size;
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
}`,MA=`uniform vec3 diffuse;
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
}`,EA=`#include <common>
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
}`,bA=`uniform vec3 color;
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
}`,TA=`uniform float rotation;
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
}`,AA=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:j1,alphahash_pars_fragment:Z1,alphamap_fragment:K1,alphamap_pars_fragment:Q1,alphatest_fragment:J1,alphatest_pars_fragment:$1,aomap_fragment:tb,aomap_pars_fragment:eb,batching_pars_vertex:nb,batching_vertex:ib,begin_vertex:ab,beginnormal_vertex:rb,bsdfs:sb,iridescence_fragment:ob,bumpmap_pars_fragment:lb,clipping_planes_fragment:cb,clipping_planes_pars_fragment:ub,clipping_planes_pars_vertex:fb,clipping_planes_vertex:hb,color_fragment:db,color_pars_fragment:pb,color_pars_vertex:mb,color_vertex:gb,common:vb,cube_uv_reflection_fragment:_b,defaultnormal_vertex:yb,displacementmap_pars_vertex:xb,displacementmap_vertex:Sb,emissivemap_fragment:Mb,emissivemap_pars_fragment:Eb,colorspace_fragment:bb,colorspace_pars_fragment:Tb,envmap_fragment:Ab,envmap_common_pars_fragment:Rb,envmap_pars_fragment:Cb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Hb,envmap_vertex:Db,fog_vertex:Ub,fog_pars_vertex:Lb,fog_fragment:Nb,fog_pars_fragment:Ob,gradientmap_pars_fragment:Fb,lightmap_pars_fragment:Pb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Bb,lights_pars_begin:Ib,lights_toon_fragment:Gb,lights_toon_pars_fragment:Vb,lights_phong_fragment:kb,lights_phong_pars_fragment:Xb,lights_physical_fragment:Wb,lights_physical_pars_fragment:qb,lights_fragment_begin:Yb,lights_fragment_maps:jb,lights_fragment_end:Zb,logdepthbuf_fragment:Kb,logdepthbuf_pars_fragment:Qb,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:$b,map_fragment:tT,map_pars_fragment:eT,map_particle_fragment:nT,map_particle_pars_fragment:iT,metalnessmap_fragment:aT,metalnessmap_pars_fragment:rT,morphinstance_vertex:sT,morphcolor_vertex:oT,morphnormal_vertex:lT,morphtarget_pars_vertex:cT,morphtarget_vertex:uT,normal_fragment_begin:fT,normal_fragment_maps:hT,normal_pars_fragment:dT,normal_pars_vertex:pT,normal_vertex:mT,normalmap_pars_fragment:gT,clearcoat_normal_fragment_begin:vT,clearcoat_normal_fragment_maps:_T,clearcoat_pars_fragment:yT,iridescence_pars_fragment:xT,opaque_fragment:ST,packing:MT,premultiplied_alpha_fragment:ET,project_vertex:bT,dithering_fragment:TT,dithering_pars_fragment:AT,roughnessmap_fragment:RT,roughnessmap_pars_fragment:CT,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:DT,shadowmap_vertex:UT,shadowmask_pars_fragment:LT,skinbase_vertex:NT,skinning_pars_vertex:OT,skinning_vertex:FT,skinnormal_vertex:PT,specularmap_fragment:zT,specularmap_pars_fragment:BT,tonemapping_fragment:IT,tonemapping_pars_fragment:HT,transmission_fragment:GT,transmission_pars_fragment:VT,uv_pars_fragment:kT,uv_pars_vertex:XT,uv_vertex:WT,worldpos_vertex:qT,background_vert:YT,background_frag:jT,backgroundCube_vert:ZT,backgroundCube_frag:KT,cube_vert:QT,cube_frag:JT,depth_vert:$T,depth_frag:tA,distanceRGBA_vert:eA,distanceRGBA_frag:nA,equirect_vert:iA,equirect_frag:aA,linedashed_vert:rA,linedashed_frag:sA,meshbasic_vert:oA,meshbasic_frag:lA,meshlambert_vert:cA,meshlambert_frag:uA,meshmatcap_vert:fA,meshmatcap_frag:hA,meshnormal_vert:dA,meshnormal_frag:pA,meshphong_vert:mA,meshphong_frag:gA,meshphysical_vert:vA,meshphysical_frag:_A,meshtoon_vert:yA,meshtoon_frag:xA,points_vert:SA,points_frag:MA,shadow_vert:EA,shadow_frag:bA,sprite_vert:TA,sprite_frag:AA},Kt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:In([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:In([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:In([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new ze(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:In([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:In([Kt.points,Kt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:In([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:In([Kt.common,Kt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:In([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:In([Kt.sprite,Kt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:In([Kt.common,Kt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:In([Kt.lights,Kt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Hc={r:0,b:0,g:0},Sr=new va,RA=new Qe;function CA(s,t,n,a,o,c,u){const h=new ze(0);let p=c===!0?0:1,m,g,v=null,_=0,x=null;function b(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?n:t).get(w)),w}function T(D){let w=!1;const q=b(D);q===null?y(h,p):q&&q.isColor&&(y(q,1),w=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,w){const q=b(w);q&&(q.isCubeTexture||q.mapping===cu)?(g===void 0&&(g=new Fn(new rl(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:Bs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,P,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Sr.copy(w.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=q,g.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(RA.makeRotationFromEuler(Sr)),g.material.toneMapped=Fe.getTransfer(q.colorSpace)!==Xe,(v!==q||_!==q.version||x!==s.toneMapping)&&(g.material.needsUpdate=!0,v=q,_=q.version,x=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):q&&q.isTexture&&(m===void 0&&(m=new Fn(new sl(2,2),new Ja({name:"BackgroundMaterial",uniforms:Bs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=q,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Fe.getTransfer(q.colorSpace)!==Xe,q.matrixAutoUpdate===!0&&q.updateMatrix(),m.material.uniforms.uvTransform.value.copy(q.matrix),(v!==q||_!==q.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,v=q,_=q.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,w){D.getRGB(Hc,Ay(s)),a.buffers.color.setClear(Hc.r,Hc.g,Hc.b,w,u)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,w=1){h.set(D),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(h,p)},render:T,addToRenderList:M,dispose:O}}function wA(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function h(C,k,ut,ot,_t){let bt=!1;const B=v(ot,ut,k);c!==B&&(c=B,m(c.object)),bt=x(C,ot,ut,_t),bt&&b(C,ot,ut,_t),_t!==null&&t.update(_t,s.ELEMENT_ARRAY_BUFFER),(bt||u)&&(u=!1,w(C,k,ut,ot),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,k,ut){const ot=ut.wireframe===!0;let _t=a[C.id];_t===void 0&&(_t={},a[C.id]=_t);let bt=_t[k.id];bt===void 0&&(bt={},_t[k.id]=bt);let B=bt[ot];return B===void 0&&(B=_(p()),bt[ot]=B),B}function _(C){const k=[],ut=[],ot=[];for(let _t=0;_t<n;_t++)k[_t]=0,ut[_t]=0,ot[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ut,attributeDivisors:ot,object:C,attributes:{},index:null}}function x(C,k,ut,ot){const _t=c.attributes,bt=k.attributes;let B=0;const st=ut.getAttributes();for(const K in st)if(st[K].location>=0){const Nt=_t[K];let N=bt[K];if(N===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),Nt===void 0||Nt.attribute!==N||N&&Nt.data!==N.data)return!0;B++}return c.attributesNum!==B||c.index!==ot}function b(C,k,ut,ot){const _t={},bt=k.attributes;let B=0;const st=ut.getAttributes();for(const K in st)if(st[K].location>=0){let Nt=bt[K];Nt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Nt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Nt=C.instanceColor));const N={};N.attribute=Nt,Nt&&Nt.data&&(N.data=Nt.data),_t[K]=N,B++}c.attributes=_t,c.attributesNum=B,c.index=ot}function T(){const C=c.newAttributes;for(let k=0,ut=C.length;k<ut;k++)C[k]=0}function M(C){y(C,0)}function y(C,k){const ut=c.newAttributes,ot=c.enabledAttributes,_t=c.attributeDivisors;ut[C]=1,ot[C]===0&&(s.enableVertexAttribArray(C),ot[C]=1),_t[C]!==k&&(s.vertexAttribDivisor(C,k),_t[C]=k)}function O(){const C=c.newAttributes,k=c.enabledAttributes;for(let ut=0,ot=k.length;ut<ot;ut++)k[ut]!==C[ut]&&(s.disableVertexAttribArray(ut),k[ut]=0)}function D(C,k,ut,ot,_t,bt,B){B===!0?s.vertexAttribIPointer(C,k,ut,_t,bt):s.vertexAttribPointer(C,k,ut,ot,_t,bt)}function w(C,k,ut,ot){T();const _t=ot.attributes,bt=ut.getAttributes(),B=k.defaultAttributeValues;for(const st in bt){const K=bt[st];if(K.location>=0){let Rt=_t[st];if(Rt===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(Rt=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(Rt=C.instanceColor)),Rt!==void 0){const Nt=Rt.normalized,N=Rt.itemSize,at=t.get(Rt);if(at===void 0)continue;const tt=at.buffer,z=at.type,F=at.bytesPerElement,Y=z===s.INT||z===s.UNSIGNED_INT||Rt.gpuType===yp;if(Rt.isInterleavedBufferAttribute){const W=Rt.data,vt=W.stride,wt=Rt.offset;if(W.isInstancedInterleavedBuffer){for(let Ft=0;Ft<K.locationSize;Ft++)y(K.location+Ft,W.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ft=0;Ft<K.locationSize;Ft++)M(K.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let Ft=0;Ft<K.locationSize;Ft++)D(K.location+Ft,N/K.locationSize,z,Nt,vt*F,(wt+N/K.locationSize*Ft)*F,Y)}else{if(Rt.isInstancedBufferAttribute){for(let W=0;W<K.locationSize;W++)y(K.location+W,Rt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let W=0;W<K.locationSize;W++)M(K.location+W);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let W=0;W<K.locationSize;W++)D(K.location+W,N/K.locationSize,z,Nt,N*F,N/K.locationSize*W*F,Y)}}else if(B!==void 0){const Nt=B[st];if(Nt!==void 0)switch(Nt.length){case 2:s.vertexAttrib2fv(K.location,Nt);break;case 3:s.vertexAttrib3fv(K.location,Nt);break;case 4:s.vertexAttrib4fv(K.location,Nt);break;default:s.vertexAttrib1fv(K.location,Nt)}}}}O()}function q(){X();for(const C in a){const k=a[C];for(const ut in k){const ot=k[ut];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete k[ut]}delete a[C]}}function I(C){if(a[C.id]===void 0)return;const k=a[C.id];for(const ut in k){const ot=k[ut];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete k[ut]}delete a[C.id]}function P(C){for(const k in a){const ut=a[k];if(ut[C.id]===void 0)continue;const ot=ut[C.id];for(const _t in ot)g(ot[_t].object),delete ot[_t];delete ut[C.id]}}function X(){L(),u=!0,c!==o&&(c=o,m(c.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function DA(s,t,n){let a;function o(m){a=m}function c(m,g){s.drawArrays(a,m,g),n.update(g,a,1)}function u(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),n.update(g,a,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let x=0;for(let b=0;b<v;b++)x+=g[b];n.update(x,a,1)}function p(m,g,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<m.length;b++)u(m[b],g[b],_[b]);else{x.multiDrawArraysInstancedWEBGL(a,m,0,g,0,_,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*_[T];n.update(b,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function UA(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Di&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const X=P===tl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ga&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fa&&!X)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),q=b>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:q,maxSamples:I}}function LA(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Er,h=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||o;return o=_,a=v.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,x){const b=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,y=s.get(v);if(!o||b===null||b.length===0||c&&!M)c?g(null):m();else{const O=c?0:a,D=O*4;let w=y.clippingState||null;p.value=w,w=g(b,_,D,x);for(let q=0;q!==D;++q)w[q]=n[q];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,x,b){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=p.value,b!==!0||M===null){const y=x+T*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let D=0,w=x;D!==T;++D,w+=4)u.copy(v[D]).applyMatrix4(O,h),u.normal.toArray(M,w),M[w+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function NA(s){let t=new WeakMap;function n(u,h){return h===Nd?u.mapping=Fs:h===Od&&(u.mapping=Ps),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Nd||h===Od)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new y1(p.height);return m.fromEquirectangularTexture(s,u),t.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const ws=4,l_=[.125,.215,.35,.446,.526,.582],Rr=20,rd=new k1,c_=new ze;let sd=null,od=0,ld=0,cd=!1;const br=(1+Math.sqrt(5))/2,As=1/br,u_=[new $(-br,As,0),new $(br,As,0),new $(-As,0,br),new $(As,0,br),new $(0,br,-As),new $(0,br,As),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],OA=new $;class f_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=OA}=c;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,t.scissorTest=!1,Gc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Fs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:tl,format:Di,colorSpace:zs,depthBuffer:!1},o=h_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FA(c)),this._blurMaterial=PA(c,t,n)}return o}_compileMaterial(t){const n=new Fn(this._lodPlanes[0],t);this._renderer.compile(n,rd)}_sceneToCubeUV(t,n,a,o,c){const p=new _i(90,1,n,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(c_),v.toneMapping=Ka,v.autoClear=!1;const b=new Ar({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),T=new Fn(new rl,b);let M=!1;const y=t.background;y?y.isColor&&(b.color.copy(y),t.background=null,M=!0):(b.color.copy(c_),M=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):D===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const w=this._cubeSize;Gc(o,D*w,O>2?w:0,w,w),v.setRenderTarget(o),M&&v.render(T,p),v.render(t,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=x,v.autoClear=_,t.background=y}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Fs||t.mapping===Ps;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new Fn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Gc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,rd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=u_[(o-c-1)%u_.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Fn(this._lodPlanes[o],m),_=m.uniforms,x=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Rr-1),T=c/b,M=isFinite(c)?1+Math.floor(g*T):Rr;M>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Rr}`);const y=[];let O=0;for(let P=0;P<Rr;++P){const X=P/T,L=Math.exp(-X*X/2);y.push(L),P===0?O+=L:P<M&&(O+=2*L)}for(let P=0;P<y.length;P++)y[P]=y[P]/O;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=b,_.mipInt.value=D-a;const w=this._sizeLods[o],q=3*w*(o>D-ws?o-D+ws:0),I=4*(this._cubeSize-w);Gc(n,q,I,3*w,2*w),p.setRenderTarget(n),p.render(v,rd)}}function FA(s){const t=[],n=[],a=[];let o=s;const c=s-ws+1+l_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let p=1/h;u>s-ws?p=l_[u-s+ws-1]:u===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,b=6,T=3,M=2,y=1,O=new Float32Array(T*b*x),D=new Float32Array(M*b*x),w=new Float32Array(y*b*x);for(let I=0;I<x;I++){const P=I%3*2/3-1,X=I>2?0:-1,L=[P,X,0,P+2/3,X,0,P+2/3,X+1,0,P,X,0,P+2/3,X+1,0,P,X+1,0];O.set(L,T*b*I),D.set(_,M*b*I);const C=[I,I,I,I,I,I];w.set(C,y*b*I)}const q=new yi;q.setAttribute("position",new Ii(O,T)),q.setAttribute("uv",new Ii(D,M)),q.setAttribute("faceIndex",new Ii(w,y)),t.push(q),o>ws&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function h_(s,t,n){const a=new Nr(s,t,n);return a.texture.mapping=cu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Gc(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function PA(s,t,n){const a=new Float32Array(Rr),o=new $(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function d_(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wp(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function p_(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function wp(){return`

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
	`}function zA(s){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===Nd||p===Od,g=p===Fs||p===Ps;if(m||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new f_(s)),v=m?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const x=h.image;return m&&x&&x.height>0||g&&x&&o(x)?(n===null&&(n=new f_(s)),v=m?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function BA(s){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Jc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function IA(s,t,n,a){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const x in _)t.update(_[x],s.ARRAY_BUFFER)}function m(v){const _=[],x=v.index,b=v.attributes.position;let T=0;if(x!==null){const O=x.array;T=x.version;for(let D=0,w=O.length;D<w;D+=3){const q=O[D+0],I=O[D+1],P=O[D+2];_.push(q,I,I,P,P,q)}}else if(b!==void 0){const O=b.array;T=b.version;for(let D=0,w=O.length/3-1;D<w;D+=3){const q=D+0,I=D+1,P=D+2;_.push(q,I,I,P,P,q)}}else return;const M=new(yy(_)?Ty:by)(_,1);M.version=T;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function HA(s,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,x){s.drawElements(a,x,c,_*u),n.update(x,a,1)}function m(_,x,b){b!==0&&(s.drawElementsInstanced(a,x,c,_*u,b),n.update(x,a,b))}function g(_,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,b);let M=0;for(let y=0;y<b;y++)M+=x[y];n.update(M,a,1)}function v(_,x,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)m(_[y]/u,x[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,b);let y=0;for(let O=0;O<b;O++)y+=x[O]*T[O];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function GA(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function VA(s,t,n){const a=new WeakMap,o=new on;function c(u,h,p){const m=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let L=function(){P.dispose(),a.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;x===!0&&(D=1),b===!0&&(D=2),T===!0&&(D=3);let w=h.attributes.position.count*D,q=1;w>t.maxTextureSize&&(q=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const I=new Float32Array(w*q*4*v),P=new xy(I,w,q,v);P.type=fa,P.needsUpdate=!0;const X=D*4;for(let C=0;C<v;C++){const k=M[C],ut=y[C],ot=O[C],_t=w*q*4*C;for(let bt=0;bt<k.count;bt++){const B=bt*X;x===!0&&(o.fromBufferAttribute(k,bt),I[_t+B+0]=o.x,I[_t+B+1]=o.y,I[_t+B+2]=o.z,I[_t+B+3]=0),b===!0&&(o.fromBufferAttribute(ut,bt),I[_t+B+4]=o.x,I[_t+B+5]=o.y,I[_t+B+6]=o.z,I[_t+B+7]=0),T===!0&&(o.fromBufferAttribute(ot,bt),I[_t+B+8]=o.x,I[_t+B+9]=o.y,I[_t+B+10]=o.z,I[_t+B+11]=ot.itemSize===4?o.w:1)}}_={count:v,texture:P,size:new he(w,q)},a.set(h,_),h.addEventListener("dispose",L)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let x=0;for(let T=0;T<m.length;T++)x+=m[T];const b=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function kA(s,t,n,a){let o=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==m&&(t.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function u(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const Py=new Hn,m_=new Ly(1,1),zy=new xy,By=new n1,Iy=new Cy,g_=[],v_=[],__=new Float32Array(16),y_=new Float32Array(9),x_=new Float32Array(4);function Gs(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=g_[o];if(c===void 0&&(c=new Float32Array(o),g_[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function _n(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function fu(s,t){let n=v_[t];n===void 0&&(n=new Int32Array(t),v_[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function XA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function WA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;s.uniform2fv(this.addr,t),_n(n,t)}}function qA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(vn(n,t))return;s.uniform3fv(this.addr,t),_n(n,t)}}function YA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;s.uniform4fv(this.addr,t),_n(n,t)}}function jA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,a))return;x_.set(a),s.uniformMatrix2fv(this.addr,!1,x_),_n(n,a)}}function ZA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,a))return;y_.set(a),s.uniformMatrix3fv(this.addr,!1,y_),_n(n,a)}}function KA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(vn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(vn(n,a))return;__.set(a),s.uniformMatrix4fv(this.addr,!1,__),_n(n,a)}}function QA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function JA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;s.uniform2iv(this.addr,t),_n(n,t)}}function $A(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;s.uniform3iv(this.addr,t),_n(n,t)}}function tR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;s.uniform4iv(this.addr,t),_n(n,t)}}function eR(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function nR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(vn(n,t))return;s.uniform2uiv(this.addr,t),_n(n,t)}}function iR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(vn(n,t))return;s.uniform3uiv(this.addr,t),_n(n,t)}}function aR(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(vn(n,t))return;s.uniform4uiv(this.addr,t),_n(n,t)}}function rR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(m_.compareFunction=_y,c=m_):c=Py,n.setTexture2D(t||c,o)}function sR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||By,o)}function oR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Iy,o)}function lR(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||zy,o)}function cR(s){switch(s){case 5126:return XA;case 35664:return WA;case 35665:return qA;case 35666:return YA;case 35674:return jA;case 35675:return ZA;case 35676:return KA;case 5124:case 35670:return QA;case 35667:case 35671:return JA;case 35668:case 35672:return $A;case 35669:case 35673:return tR;case 5125:return eR;case 36294:return nR;case 36295:return iR;case 36296:return aR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return lR}}function uR(s,t){s.uniform1fv(this.addr,t)}function fR(s,t){const n=Gs(t,this.size,2);s.uniform2fv(this.addr,n)}function hR(s,t){const n=Gs(t,this.size,3);s.uniform3fv(this.addr,n)}function dR(s,t){const n=Gs(t,this.size,4);s.uniform4fv(this.addr,n)}function pR(s,t){const n=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function mR(s,t){const n=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function gR(s,t){const n=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function vR(s,t){s.uniform1iv(this.addr,t)}function _R(s,t){s.uniform2iv(this.addr,t)}function yR(s,t){s.uniform3iv(this.addr,t)}function xR(s,t){s.uniform4iv(this.addr,t)}function SR(s,t){s.uniform1uiv(this.addr,t)}function MR(s,t){s.uniform2uiv(this.addr,t)}function ER(s,t){s.uniform3uiv(this.addr,t)}function bR(s,t){s.uniform4uiv(this.addr,t)}function TR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||Py,c[u])}function AR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||By,c[u])}function RR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Iy,c[u])}function CR(s,t,n){const a=this.cache,o=t.length,c=fu(n,o);vn(a,c)||(s.uniform1iv(this.addr,c),_n(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||zy,c[u])}function wR(s){switch(s){case 5126:return uR;case 35664:return fR;case 35665:return hR;case 35666:return dR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return vR;case 35667:case 35671:return _R;case 35668:case 35672:return yR;case 35669:case 35673:return xR;case 5125:return SR;case 36294:return MR;case 36295:return ER;case 36296:return bR;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return RR;case 36289:case 36303:case 36311:case 36292:return CR}}class DR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=cR(n.type)}}class UR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wR(n.type)}}class LR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function S_(s,t){s.seq.push(t),s.map[t.id]=t}function NR(s,t,n){const a=s.name,o=a.length;for(ud.lastIndex=0;;){const c=ud.exec(a),u=ud.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===o){S_(n,m===void 0?new DR(h,s,t):new UR(h,s,t));break}else{let v=n.map[h];v===void 0&&(v=new LR(h),S_(n,v)),n=v}}}class $c{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);NR(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function M_(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const OR=37297;let FR=0;function PR(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const E_=new ve;function zR(s){Fe._getMatrix(E_,Fe.workingColorSpace,s);const t=`mat3( ${E_.elements.map(n=>n.toFixed(4))} )`;switch(Fe.getTransfer(s)){case nu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function b_(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+PR(s.getShaderSource(t),u)}else return o}function BR(s,t){const n=zR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function IR(s,t){let n;switch(t){case RE:n="Linear";break;case CE:n="Reinhard";break;case wE:n="Cineon";break;case DE:n="ACESFilmic";break;case LE:n="AgX";break;case NE:n="Neutral";break;case UE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vc=new $;function HR(){Fe.getLuminanceCoefficients(Vc);const s=Vc.x.toFixed(4),t=Vc.y.toFixed(4),n=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function VR(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function kR(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function Vo(s){return s!==""}function T_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function A_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XR=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(s){return s.replace(XR,qR)}const WR=new Map;function qR(s,t){let n=_e[t];if(n===void 0){const a=WR.get(t);if(a!==void 0)n=_e[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return fp(n)}const YR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R_(s){return s.replace(YR,jR)}function jR(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function C_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function ZR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ry?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function KR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Ps:t="ENVMAP_TYPE_CUBE";break;case cu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function QR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function JR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sy:t="ENVMAP_BLENDING_MULTIPLY";break;case TE:t="ENVMAP_BLENDING_MIX";break;case AE:t="ENVMAP_BLENDING_ADD";break}return t}function $R(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function tC(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=ZR(n),m=KR(n),g=QR(n),v=JR(n),_=$R(n),x=GR(n),b=VR(c),T=o.createProgram();let M,y,O=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Vo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Vo).join(`
`),y.length>0&&(y+=`
`)):(M=[C_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),y=[C_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ka?"#define TONE_MAPPING":"",n.toneMapping!==Ka?_e.tonemapping_pars_fragment:"",n.toneMapping!==Ka?IR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,BR("linearToOutputTexel",n.outputColorSpace),HR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),u=fp(u),u=T_(u,n),u=A_(u,n),h=fp(h),h=T_(h,n),h=A_(h,n),u=R_(u),h=R_(h),n.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=O+M+u,w=O+y+h,q=M_(o,o.VERTEX_SHADER,D),I=M_(o,o.FRAGMENT_SHADER,w);o.attachShader(T,q),o.attachShader(T,I),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function P(k){if(s.debug.checkShaderErrors){const ut=o.getProgramInfoLog(T).trim(),ot=o.getShaderInfoLog(q).trim(),_t=o.getShaderInfoLog(I).trim();let bt=!0,B=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(bt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,q,I);else{const st=b_(o,q,"vertex"),K=b_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ut+`
`+st+`
`+K)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(ot===""||_t==="")&&(B=!1);B&&(k.diagnostics={runnable:bt,programLog:ut,vertexShader:{log:ot,prefix:M},fragmentShader:{log:_t,prefix:y}})}o.deleteShader(q),o.deleteShader(I),X=new $c(o,T),L=kR(o,T)}let X;this.getUniforms=function(){return X===void 0&&P(this),X};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,OR)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FR++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=I,this}let eC=0;class nC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new iC(t),n.set(t,a)),a}}class iC{constructor(t){this.id=eC++,this.code=t,this.usedTimes=0}}function aC(s,t,n,a,o,c,u){const h=new My,p=new nC,m=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function M(L,C,k,ut,ot){const _t=ut.fog,bt=ot.geometry,B=L.isMeshStandardMaterial?ut.environment:null,st=(L.isMeshStandardMaterial?n:t).get(L.envMap||B),K=st&&st.mapping===cu?st.image.height:null,Rt=b[L.type];L.precision!==null&&(x=o.getMaxPrecision(L.precision),x!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",x,"instead."));const Nt=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,N=Nt!==void 0?Nt.length:0;let at=0;bt.morphAttributes.position!==void 0&&(at=1),bt.morphAttributes.normal!==void 0&&(at=2),bt.morphAttributes.color!==void 0&&(at=3);let tt,z,F,Y;if(Rt){const Te=Pi[Rt];tt=Te.vertexShader,z=Te.fragmentShader}else tt=L.vertexShader,z=L.fragmentShader,p.update(L),F=p.getVertexShaderID(L),Y=p.getFragmentShaderID(L);const W=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),wt=ot.isInstancedMesh===!0,Ft=ot.isBatchedMesh===!0,Ot=!!L.map,Ht=!!L.matcap,kt=!!st,H=!!L.aoMap,xe=!!L.lightMap,ee=!!L.bumpMap,dt=!!L.normalMap,ct=!!L.displacementMap,Tt=!!L.emissiveMap,mt=!!L.metalnessMap,A=!!L.roughnessMap,E=L.anisotropy>0,G=L.clearcoat>0,Q=L.dispersion>0,pt=L.iridescence>0,yt=L.sheen>0,Lt=L.transmission>0,rt=E&&!!L.anisotropyMap,et=G&&!!L.clearcoatMap,Pt=G&&!!L.clearcoatNormalMap,lt=G&&!!L.clearcoatRoughnessMap,zt=pt&&!!L.iridescenceMap,Xt=pt&&!!L.iridescenceThicknessMap,Wt=yt&&!!L.sheenColorMap,Bt=yt&&!!L.sheenRoughnessMap,ne=!!L.specularMap,oe=!!L.specularColorMap,be=!!L.specularIntensityMap,Z=Lt&&!!L.transmissionMap,qt=Lt&&!!L.thicknessMap,Et=!!L.gradientMap,Dt=!!L.alphaMap,jt=L.alphaTest>0,Yt=!!L.alphaHash,le=!!L.extensions;let We=Ka;L.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=s.toneMapping);const Ye={shaderID:Rt,shaderType:L.type,shaderName:L.name,vertexShader:tt,fragmentShader:z,defines:L.defines,customVertexShaderID:F,customFragmentShaderID:Y,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:x,batching:Ft,batchingColor:Ft&&ot._colorsTexture!==null,instancing:wt,instancingColor:wt&&ot.instanceColor!==null,instancingMorph:wt&&ot.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zs,alphaToCoverage:!!L.alphaToCoverage,map:Ot,matcap:Ht,envMap:kt,envMapMode:kt&&st.mapping,envMapCubeUVHeight:K,aoMap:H,lightMap:xe,bumpMap:ee,normalMap:dt,displacementMap:_&&ct,emissiveMap:Tt,normalMapObjectSpace:dt&&L.normalMapType===BE,normalMapTangentSpace:dt&&L.normalMapType===zE,metalnessMap:mt,roughnessMap:A,anisotropy:E,anisotropyMap:rt,clearcoat:G,clearcoatMap:et,clearcoatNormalMap:Pt,clearcoatRoughnessMap:lt,dispersion:Q,iridescence:pt,iridescenceMap:zt,iridescenceThicknessMap:Xt,sheen:yt,sheenColorMap:Wt,sheenRoughnessMap:Bt,specularMap:ne,specularColorMap:oe,specularIntensityMap:be,transmission:Lt,transmissionMap:Z,thicknessMap:qt,gradientMap:Et,opaque:L.transparent===!1&&L.blending===Ds&&L.alphaToCoverage===!1,alphaMap:Dt,alphaTest:jt,alphaHash:Yt,combine:L.combine,mapUv:Ot&&T(L.map.channel),aoMapUv:H&&T(L.aoMap.channel),lightMapUv:xe&&T(L.lightMap.channel),bumpMapUv:ee&&T(L.bumpMap.channel),normalMapUv:dt&&T(L.normalMap.channel),displacementMapUv:ct&&T(L.displacementMap.channel),emissiveMapUv:Tt&&T(L.emissiveMap.channel),metalnessMapUv:mt&&T(L.metalnessMap.channel),roughnessMapUv:A&&T(L.roughnessMap.channel),anisotropyMapUv:rt&&T(L.anisotropyMap.channel),clearcoatMapUv:et&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&T(L.sheenRoughnessMap.channel),specularMapUv:ne&&T(L.specularMap.channel),specularColorMapUv:oe&&T(L.specularColorMap.channel),specularIntensityMapUv:be&&T(L.specularIntensityMap.channel),transmissionMapUv:Z&&T(L.transmissionMap.channel),thicknessMapUv:qt&&T(L.thicknessMap.channel),alphaMapUv:Dt&&T(L.alphaMap.channel),vertexTangents:!!bt.attributes.tangent&&(dt||E),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!bt.attributes.uv&&(Ot||Dt),fog:!!_t,useFog:L.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:vt,skinning:ot.isSkinnedMesh===!0,morphTargets:bt.morphAttributes.position!==void 0,morphNormals:bt.morphAttributes.normal!==void 0,morphColors:bt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:We,decodeVideoTexture:Ot&&L.map.isVideoTexture===!0&&Fe.getTransfer(L.map.colorSpace)===Xe,decodeVideoTextureEmissive:Tt&&L.emissiveMap.isVideoTexture===!0&&Fe.getTransfer(L.emissiveMap.colorSpace)===Xe,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===zi,flipSided:L.side===Qn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:le&&L.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&L.extensions.multiDraw===!0||Ft)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function y(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)C.push(k),C.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(O(C,L),D(C,L),C.push(s.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function O(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function D(L,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),L.push(h.mask)}function w(L){const C=b[L.type];let k;if(C){const ut=Pi[C];k=m1.clone(ut.uniforms)}else k=L.uniforms;return k}function q(L,C){let k;for(let ut=0,ot=g.length;ut<ot;ut++){const _t=g[ut];if(_t.cacheKey===C){k=_t,++k.usedTimes;break}}return k===void 0&&(k=new tC(s,C,L,c),g.push(k)),k}function I(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function P(L){p.remove(L)}function X(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:q,releaseProgram:I,releaseShaderCache:P,programs:g,dispose:X}}function rC(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,p){s.get(u)[h]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function sC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function w_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function D_(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v,_,x,b,T,M){let y=s[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:x,groupOrder:b,renderOrder:v.renderOrder,z:T,group:M},s[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=x,y.groupOrder=b,y.renderOrder=v.renderOrder,y.z=T,y.group=M),t++,y}function h(v,_,x,b,T,M){const y=u(v,_,x,b,T,M);x.transmission>0?a.push(y):x.transparent===!0?o.push(y):n.push(y)}function p(v,_,x,b,T,M){const y=u(v,_,x,b,T,M);x.transmission>0?a.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function m(v,_){n.length>1&&n.sort(v||sC),a.length>1&&a.sort(_||w_),o.length>1&&o.sort(_||w_)}function g(){for(let v=t,_=s.length;v<_;v++){const x=s[v];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:g,sort:m}}function oC(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new D_,s.set(a,[u])):o>=c.length?(u=new D_,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function lC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new $,color:new ze};break;case"SpotLight":n={position:new $,direction:new $,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=n,n}}}function cC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let uC=0;function fC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hC(s){const t=new lC,n=cC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new $);const o=new $,c=new Qe,u=new Qe;function h(m){let g=0,v=0,_=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let x=0,b=0,T=0,M=0,y=0,O=0,D=0,w=0,q=0,I=0,P=0;m.sort(fC);for(let L=0,C=m.length;L<C;L++){const k=m[L],ut=k.color,ot=k.intensity,_t=k.distance,bt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ut.r*ot,v+=ut.g*ot,_+=ut.b*ot;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],ot);P++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const st=k.shadow,K=n.get(k);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,a.directionalShadow[x]=K,a.directionalShadowMap[x]=bt,a.directionalShadowMatrix[x]=k.shadow.matrix,O++}a.directional[x]=B,x++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(ut).multiplyScalar(ot),B.distance=_t,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[T]=B;const st=k.shadow;if(k.map&&(a.spotLightMap[q]=k.map,q++,st.updateMatrices(k),k.castShadow&&I++),a.spotLightMatrix[T]=st.matrix,k.castShadow){const K=n.get(k);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,a.spotShadow[T]=K,a.spotShadowMap[T]=bt,w++}T++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(ut).multiplyScalar(ot),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[M]=B,M++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const st=k.shadow,K=n.get(k);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,a.pointShadow[b]=K,a.pointShadowMap[b]=bt,a.pointShadowMatrix[b]=k.shadow.matrix,D++}a.point[b]=B,b++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(ot),B.groundColor.copy(k.groundColor).multiplyScalar(ot),a.hemi[y]=B,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Kt.LTC_FLOAT_1,a.rectAreaLTC2=Kt.LTC_FLOAT_2):(a.rectAreaLTC1=Kt.LTC_HALF_1,a.rectAreaLTC2=Kt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const X=a.hash;(X.directionalLength!==x||X.pointLength!==b||X.spotLength!==T||X.rectAreaLength!==M||X.hemiLength!==y||X.numDirectionalShadows!==O||X.numPointShadows!==D||X.numSpotShadows!==w||X.numSpotMaps!==q||X.numLightProbes!==P)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=b,a.hemi.length=y,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=w+q-I,a.spotLightMap.length=q,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=P,X.directionalLength=x,X.pointLength=b,X.spotLength=T,X.rectAreaLength=M,X.hemiLength=y,X.numDirectionalShadows=O,X.numPointShadows=D,X.numSpotShadows=w,X.numSpotMaps=q,X.numLightProbes=P,a.version=uC++)}function p(m,g){let v=0,_=0,x=0,b=0,T=0;const M=g.matrixWorldInverse;for(let y=0,O=m.length;y<O;y++){const D=m[y];if(D.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(D.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),x++}else if(D.isRectAreaLight){const w=a.rectArea[b];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(D.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),_++}else if(D.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function U_(s){const t=new hC(s),n=[],a=[];function o(g){m.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function dC(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new U_(s),t.set(o,[h])):c>=u.length?(h=new U_(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const pC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mC=`uniform sampler2D shadow_pass;
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
}`;function gC(s,t,n){let a=new wy;const o=new he,c=new he,u=new on,h=new H1({depthPacking:PE}),p=new G1,m={},g=n.maxTextureSize,v={[Qa]:Qn,[Qn]:Qa,[zi]:zi},_=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:pC,fragmentShader:mC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const b=new yi;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Fn(b,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ry;let y=this.type;this.render=function(I,P,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const L=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ut=s.state;ut.setBlending(Za),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const ot=y!==ca&&this.type===ca,_t=y===ca&&this.type!==ca;for(let bt=0,B=I.length;bt<B;bt++){const st=I[bt],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Rt=K.getFrameExtents();if(o.multiply(Rt),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Rt.x),o.x=c.x*Rt.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Rt.y),o.y=c.y*Rt.y,K.mapSize.y=c.y)),K.map===null||ot===!0||_t===!0){const N=this.type!==ca?{minFilter:Ui,magFilter:Ui}:{};K.map!==null&&K.map.dispose(),K.map=new Nr(o.x,o.y,N),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Nt=K.getViewportCount();for(let N=0;N<Nt;N++){const at=K.getViewport(N);u.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),ut.viewport(u),K.updateMatrices(st,N),a=K.getFrustum(),w(P,X,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===ca&&O(K,X),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(L,C,k)};function O(I,P){const X=t.update(T);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Nr(o.x,o.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(P,null,X,_,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(P,null,X,x,T,null)}function D(I,P,X,L){let C=null;const k=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)C=k;else if(C=X.isPointLight===!0?p:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ut=C.uuid,ot=P.uuid;let _t=m[ut];_t===void 0&&(_t={},m[ut]=_t);let bt=_t[ot];bt===void 0&&(bt=C.clone(),_t[ot]=bt,P.addEventListener("dispose",q)),C=bt}if(C.visible=P.visible,C.wireframe=P.wireframe,L===ca?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:v[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ut=s.properties.get(C);ut.light=X}return C}function w(I,P,X,L,C){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===ca)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const ot=t.update(I),_t=I.material;if(Array.isArray(_t)){const bt=ot.groups;for(let B=0,st=bt.length;B<st;B++){const K=bt[B],Rt=_t[K.materialIndex];if(Rt&&Rt.visible){const Nt=D(I,Rt,L,C);I.onBeforeShadow(s,I,P,X,ot,Nt,K),s.renderBufferDirect(X,null,ot,Nt,I,K),I.onAfterShadow(s,I,P,X,ot,Nt,K)}}}else if(_t.visible){const bt=D(I,_t,L,C);I.onBeforeShadow(s,I,P,X,ot,bt,null),s.renderBufferDirect(X,null,ot,bt,I,null),I.onAfterShadow(s,I,P,X,ot,bt,null)}}const ut=I.children;for(let ot=0,_t=ut.length;ot<_t;ot++)w(ut[ot],P,X,L,C)}function q(I){I.target.removeEventListener("dispose",q);for(const X in m){const L=m[X],C=I.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const vC={[Ad]:Rd,[Cd]:Ud,[wd]:Ld,[Os]:Dd,[Rd]:Ad,[Ud]:Cd,[Ld]:wd,[Dd]:Os};function _C(s,t){function n(){let Z=!1;const qt=new on;let Et=null;const Dt=new on(0,0,0,0);return{setMask:function(jt){Et!==jt&&!Z&&(s.colorMask(jt,jt,jt,jt),Et=jt)},setLocked:function(jt){Z=jt},setClear:function(jt,Yt,le,We,Ye){Ye===!0&&(jt*=We,Yt*=We,le*=We),qt.set(jt,Yt,le,We),Dt.equals(qt)===!1&&(s.clearColor(jt,Yt,le,We),Dt.copy(qt))},reset:function(){Z=!1,Et=null,Dt.set(-1,0,0,0)}}}function a(){let Z=!1,qt=!1,Et=null,Dt=null,jt=null;return{setReversed:function(Yt){if(qt!==Yt){const le=t.get("EXT_clip_control");Yt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),qt=Yt;const We=jt;jt=null,this.setClear(We)}},getReversed:function(){return qt},setTest:function(Yt){Yt?W(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(Yt){Et!==Yt&&!Z&&(s.depthMask(Yt),Et=Yt)},setFunc:function(Yt){if(qt&&(Yt=vC[Yt]),Dt!==Yt){switch(Yt){case Ad:s.depthFunc(s.NEVER);break;case Rd:s.depthFunc(s.ALWAYS);break;case Cd:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Dt=Yt}},setLocked:function(Yt){Z=Yt},setClear:function(Yt){jt!==Yt&&(qt&&(Yt=1-Yt),s.clearDepth(Yt),jt=Yt)},reset:function(){Z=!1,Et=null,Dt=null,jt=null,qt=!1}}}function o(){let Z=!1,qt=null,Et=null,Dt=null,jt=null,Yt=null,le=null,We=null,Ye=null;return{setTest:function(Te){Z||(Te?W(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(Te){qt!==Te&&!Z&&(s.stencilMask(Te),qt=Te)},setFunc:function(Te,$e,Mn){(Et!==Te||Dt!==$e||jt!==Mn)&&(s.stencilFunc(Te,$e,Mn),Et=Te,Dt=$e,jt=Mn)},setOp:function(Te,$e,Mn){(Yt!==Te||le!==$e||We!==Mn)&&(s.stencilOp(Te,$e,Mn),Yt=Te,le=$e,We=Mn)},setLocked:function(Te){Z=Te},setClear:function(Te){Ye!==Te&&(s.clearStencil(Te),Ye=Te)},reset:function(){Z=!1,qt=null,Et=null,Dt=null,jt=null,Yt=null,le=null,We=null,Ye=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,x=[],b=null,T=!1,M=null,y=null,O=null,D=null,w=null,q=null,I=null,P=new ze(0,0,0),X=0,L=!1,C=null,k=null,ut=null,ot=null,_t=null;const bt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,st=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),B=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),B=st>=2);let Rt=null,Nt={};const N=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),tt=new on().fromArray(N),z=new on().fromArray(at);function F(Z,qt,Et,Dt){const jt=new Uint8Array(4),Yt=s.createTexture();s.bindTexture(Z,Yt),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<Et;le++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(qt,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,jt):s.texImage2D(qt+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,jt);return Yt}const Y={};Y[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),W(s.DEPTH_TEST),u.setFunc(Os),ee(!1),dt(Uv),W(s.CULL_FACE),H(Za);function W(Z){g[Z]!==!0&&(s.enable(Z),g[Z]=!0)}function vt(Z){g[Z]!==!1&&(s.disable(Z),g[Z]=!1)}function wt(Z,qt){return v[Z]!==qt?(s.bindFramebuffer(Z,qt),v[Z]=qt,Z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=qt),Z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=qt),!0):!1}function Ft(Z,qt){let Et=x,Dt=!1;if(Z){Et=_.get(qt),Et===void 0&&(Et=[],_.set(qt,Et));const jt=Z.textures;if(Et.length!==jt.length||Et[0]!==s.COLOR_ATTACHMENT0){for(let Yt=0,le=jt.length;Yt<le;Yt++)Et[Yt]=s.COLOR_ATTACHMENT0+Yt;Et.length=jt.length,Dt=!0}}else Et[0]!==s.BACK&&(Et[0]=s.BACK,Dt=!0);Dt&&s.drawBuffers(Et)}function Ot(Z){return b!==Z?(s.useProgram(Z),b=Z,!0):!1}const Ht={[Tr]:s.FUNC_ADD,[lE]:s.FUNC_SUBTRACT,[cE]:s.FUNC_REVERSE_SUBTRACT};Ht[uE]=s.MIN,Ht[fE]=s.MAX;const kt={[hE]:s.ZERO,[dE]:s.ONE,[pE]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[xE]:s.SRC_ALPHA_SATURATE,[_E]:s.DST_COLOR,[gE]:s.DST_ALPHA,[mE]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[yE]:s.ONE_MINUS_DST_COLOR,[vE]:s.ONE_MINUS_DST_ALPHA,[SE]:s.CONSTANT_COLOR,[ME]:s.ONE_MINUS_CONSTANT_COLOR,[EE]:s.CONSTANT_ALPHA,[bE]:s.ONE_MINUS_CONSTANT_ALPHA};function H(Z,qt,Et,Dt,jt,Yt,le,We,Ye,Te){if(Z===Za){T===!0&&(vt(s.BLEND),T=!1);return}if(T===!1&&(W(s.BLEND),T=!0),Z!==oE){if(Z!==M||Te!==L){if((y!==Tr||w!==Tr)&&(s.blendEquation(s.FUNC_ADD),y=Tr,w=Tr),Te)switch(Z){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lv:s.blendFunc(s.ONE,s.ONE);break;case Nv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ov:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ov:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}O=null,D=null,q=null,I=null,P.set(0,0,0),X=0,M=Z,L=Te}return}jt=jt||qt,Yt=Yt||Et,le=le||Dt,(qt!==y||jt!==w)&&(s.blendEquationSeparate(Ht[qt],Ht[jt]),y=qt,w=jt),(Et!==O||Dt!==D||Yt!==q||le!==I)&&(s.blendFuncSeparate(kt[Et],kt[Dt],kt[Yt],kt[le]),O=Et,D=Dt,q=Yt,I=le),(We.equals(P)===!1||Ye!==X)&&(s.blendColor(We.r,We.g,We.b,Ye),P.copy(We),X=Ye),M=Z,L=!1}function xe(Z,qt){Z.side===zi?vt(s.CULL_FACE):W(s.CULL_FACE);let Et=Z.side===Qn;qt&&(Et=!Et),ee(Et),Z.blending===Ds&&Z.transparent===!1?H(Za):H(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Dt=Z.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Tt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(Z){C!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),C=Z)}function dt(Z){Z!==aE?(W(s.CULL_FACE),Z!==k&&(Z===Uv?s.cullFace(s.BACK):Z===rE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),k=Z}function ct(Z){Z!==ut&&(B&&s.lineWidth(Z),ut=Z)}function Tt(Z,qt,Et){Z?(W(s.POLYGON_OFFSET_FILL),(ot!==qt||_t!==Et)&&(s.polygonOffset(qt,Et),ot=qt,_t=Et)):vt(s.POLYGON_OFFSET_FILL)}function mt(Z){Z?W(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function A(Z){Z===void 0&&(Z=s.TEXTURE0+bt-1),Rt!==Z&&(s.activeTexture(Z),Rt=Z)}function E(Z,qt,Et){Et===void 0&&(Rt===null?Et=s.TEXTURE0+bt-1:Et=Rt);let Dt=Nt[Et];Dt===void 0&&(Dt={type:void 0,texture:void 0},Nt[Et]=Dt),(Dt.type!==Z||Dt.texture!==qt)&&(Rt!==Et&&(s.activeTexture(Et),Rt=Et),s.bindTexture(Z,qt||Y[Z]),Dt.type=Z,Dt.texture=qt)}function G(){const Z=Nt[Rt];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Q(){try{s.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{s.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function yt(){try{s.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Lt(){try{s.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function rt(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function et(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Pt(){try{s.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function lt(){try{s.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function zt(){try{s.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Xt(){try{s.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Wt(Z){tt.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),tt.copy(Z))}function Bt(Z){z.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),z.copy(Z))}function ne(Z,qt){let Et=m.get(qt);Et===void 0&&(Et=new WeakMap,m.set(qt,Et));let Dt=Et.get(Z);Dt===void 0&&(Dt=s.getUniformBlockIndex(qt,Z.name),Et.set(Z,Dt))}function oe(Z,qt){const Dt=m.get(qt).get(Z);p.get(qt)!==Dt&&(s.uniformBlockBinding(qt,Dt,Z.__bindingPointIndex),p.set(qt,Dt))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Rt=null,Nt={},v={},_=new WeakMap,x=[],b=null,T=!1,M=null,y=null,O=null,D=null,w=null,q=null,I=null,P=new ze(0,0,0),X=0,L=!1,C=null,k=null,ut=null,ot=null,_t=null,tt.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:W,disable:vt,bindFramebuffer:wt,drawBuffers:Ft,useProgram:Ot,setBlending:H,setMaterial:xe,setFlipSided:ee,setCullFace:dt,setLineWidth:ct,setPolygonOffset:Tt,setScissorTest:mt,activeTexture:A,bindTexture:E,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:pt,texImage2D:zt,texImage3D:Xt,updateUBOMapping:ne,uniformBlockBinding:oe,texStorage2D:Pt,texStorage3D:lt,texSubImage2D:yt,texSubImage3D:Lt,compressedTexSubImage2D:rt,compressedTexSubImage3D:et,scissor:Wt,viewport:Bt,reset:be}}function yC(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new he,g=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,E){return x?new OffscreenCanvas(A,E):au("canvas")}function T(A,E,G){let Q=1;const pt=mt(A);if((pt.width>G||pt.height>G)&&(Q=G/Math.max(pt.width,pt.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const yt=Math.floor(Q*pt.width),Lt=Math.floor(Q*pt.height);v===void 0&&(v=b(yt,Lt));const rt=E?b(yt,Lt):v;return rt.width=yt,rt.height=Lt,rt.getContext("2d").drawImage(A,0,0,yt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+yt+"x"+Lt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),A;return A}function M(A){return A.generateMipmaps}function y(A){s.generateMipmap(A)}function O(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(A,E,G,Q,pt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let yt=E;if(E===s.RED&&(G===s.FLOAT&&(yt=s.R32F),G===s.HALF_FLOAT&&(yt=s.R16F),G===s.UNSIGNED_BYTE&&(yt=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.R8UI),G===s.UNSIGNED_SHORT&&(yt=s.R16UI),G===s.UNSIGNED_INT&&(yt=s.R32UI),G===s.BYTE&&(yt=s.R8I),G===s.SHORT&&(yt=s.R16I),G===s.INT&&(yt=s.R32I)),E===s.RG&&(G===s.FLOAT&&(yt=s.RG32F),G===s.HALF_FLOAT&&(yt=s.RG16F),G===s.UNSIGNED_BYTE&&(yt=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.RG8UI),G===s.UNSIGNED_SHORT&&(yt=s.RG16UI),G===s.UNSIGNED_INT&&(yt=s.RG32UI),G===s.BYTE&&(yt=s.RG8I),G===s.SHORT&&(yt=s.RG16I),G===s.INT&&(yt=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.RGB8UI),G===s.UNSIGNED_SHORT&&(yt=s.RGB16UI),G===s.UNSIGNED_INT&&(yt=s.RGB32UI),G===s.BYTE&&(yt=s.RGB8I),G===s.SHORT&&(yt=s.RGB16I),G===s.INT&&(yt=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(yt=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(yt=s.RGBA16UI),G===s.UNSIGNED_INT&&(yt=s.RGBA32UI),G===s.BYTE&&(yt=s.RGBA8I),G===s.SHORT&&(yt=s.RGBA16I),G===s.INT&&(yt=s.RGBA32I)),E===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(yt=s.RGB9_E5),E===s.RGBA){const Lt=pt?nu:Fe.getTransfer(Q);G===s.FLOAT&&(yt=s.RGBA32F),G===s.HALF_FLOAT&&(yt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(yt=Lt===Xe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(yt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(yt=s.RGB5_A1)}return(yt===s.R16F||yt===s.R32F||yt===s.RG16F||yt===s.RG32F||yt===s.RGBA16F||yt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function w(A,E){let G;return A?E===null||E===Lr||E===Zo?G=s.DEPTH24_STENCIL8:E===fa?G=s.DEPTH32F_STENCIL8:E===jo&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Lr||E===Zo?G=s.DEPTH_COMPONENT24:E===fa?G=s.DEPTH_COMPONENT32F:E===jo&&(G=s.DEPTH_COMPONENT16),G}function q(A,E){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ui&&A.minFilter!==Bi?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function I(A){const E=A.target;E.removeEventListener("dispose",I),X(E),E.isVideoTexture&&g.delete(E)}function P(A){const E=A.target;E.removeEventListener("dispose",P),C(E)}function X(A){const E=a.get(A);if(E.__webglInit===void 0)return;const G=A.source,Q=_.get(G);if(Q){const pt=Q[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&L(A),Object.keys(Q).length===0&&_.delete(G)}a.remove(A)}function L(A){const E=a.get(A);s.deleteTexture(E.__webglTexture);const G=A.source,Q=_.get(G);delete Q[E.__cacheKey],u.memory.textures--}function C(A){const E=a.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),a.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let pt=0;pt<E.__webglFramebuffer[Q].length;pt++)s.deleteFramebuffer(E.__webglFramebuffer[Q][pt]);else s.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Q]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=A.textures;for(let Q=0,pt=G.length;Q<pt;Q++){const yt=a.get(G[Q]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),u.memory.textures--),a.remove(G[Q])}a.remove(A)}let k=0;function ut(){k=0}function ot(){const A=k;return A>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+o.maxTextures),k+=1,A}function _t(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function bt(A,E){const G=a.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,A,E);return}}n.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function B(A,E){const G=a.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function st(A,E){const G=a.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,E);return}n.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function K(A,E){const G=a.get(A);if(A.version>0&&G.__version!==A.version){F(G,A,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const Rt={[Fd]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[Pd]:s.MIRRORED_REPEAT},Nt={[Ui]:s.NEAREST,[OE]:s.NEAREST_MIPMAP_NEAREST,[yc]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[Uh]:s.LINEAR_MIPMAP_NEAREST,[wr]:s.LINEAR_MIPMAP_LINEAR},N={[IE]:s.NEVER,[WE]:s.ALWAYS,[HE]:s.LESS,[_y]:s.LEQUAL,[GE]:s.EQUAL,[XE]:s.GEQUAL,[VE]:s.GREATER,[kE]:s.NOTEQUAL};function at(A,E){if(E.type===fa&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bi||E.magFilter===Uh||E.magFilter===yc||E.magFilter===wr||E.minFilter===Bi||E.minFilter===Uh||E.minFilter===yc||E.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Rt[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Rt[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Rt[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Nt[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Nt[E.minFilter]),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ui||E.minFilter!==yc&&E.minFilter!==wr||E.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function tt(A,E){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const Q=E.source;let pt=_.get(Q);pt===void 0&&(pt={},_.set(Q,pt));const yt=_t(E);if(yt!==A.__cacheKey){pt[yt]===void 0&&(pt[yt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),pt[yt].usedTimes++;const Lt=pt[A.__cacheKey];Lt!==void 0&&(pt[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&L(E)),A.__cacheKey=yt,A.__webglTexture=pt[yt].texture}return G}function z(A,E,G){let Q=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=s.TEXTURE_3D);const pt=tt(A,E),yt=E.source;n.bindTexture(Q,A.__webglTexture,s.TEXTURE0+G);const Lt=a.get(yt);if(yt.version!==Lt.__version||pt===!0){n.activeTexture(s.TEXTURE0+G);const rt=Fe.getPrimaries(Fe.workingColorSpace),et=E.colorSpace===ja?null:Fe.getPrimaries(E.colorSpace),Pt=E.colorSpace===ja||rt===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let lt=T(E.image,!1,o.maxTextureSize);lt=Tt(E,lt);const zt=c.convert(E.format,E.colorSpace),Xt=c.convert(E.type);let Wt=D(E.internalFormat,zt,Xt,E.colorSpace,E.isVideoTexture);at(Q,E);let Bt;const ne=E.mipmaps,oe=E.isVideoTexture!==!0,be=Lt.__version===void 0||pt===!0,Z=yt.dataReady,qt=q(E,lt);if(E.isDepthTexture)Wt=w(E.format===Qo,E.type),be&&(oe?n.texStorage2D(s.TEXTURE_2D,1,Wt,lt.width,lt.height):n.texImage2D(s.TEXTURE_2D,0,Wt,lt.width,lt.height,0,zt,Xt,null));else if(E.isDataTexture)if(ne.length>0){oe&&be&&n.texStorage2D(s.TEXTURE_2D,qt,Wt,ne[0].width,ne[0].height);for(let Et=0,Dt=ne.length;Et<Dt;Et++)Bt=ne[Et],oe?Z&&n.texSubImage2D(s.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,zt,Xt,Bt.data):n.texImage2D(s.TEXTURE_2D,Et,Wt,Bt.width,Bt.height,0,zt,Xt,Bt.data);E.generateMipmaps=!1}else oe?(be&&n.texStorage2D(s.TEXTURE_2D,qt,Wt,lt.width,lt.height),Z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,zt,Xt,lt.data)):n.texImage2D(s.TEXTURE_2D,0,Wt,lt.width,lt.height,0,zt,Xt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,qt,Wt,ne[0].width,ne[0].height,lt.depth);for(let Et=0,Dt=ne.length;Et<Dt;Et++)if(Bt=ne[Et],E.format!==Di)if(zt!==null)if(oe){if(Z)if(E.layerUpdates.size>0){const jt=o_(Bt.width,Bt.height,E.format,E.type);for(const Yt of E.layerUpdates){const le=Bt.data.subarray(Yt*jt/Bt.data.BYTES_PER_ELEMENT,(Yt+1)*jt/Bt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,Yt,Bt.width,Bt.height,1,zt,le)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,lt.depth,zt,Bt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,Wt,Bt.width,Bt.height,lt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,lt.depth,zt,Xt,Bt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Et,Wt,Bt.width,Bt.height,lt.depth,0,zt,Xt,Bt.data)}else{oe&&be&&n.texStorage2D(s.TEXTURE_2D,qt,Wt,ne[0].width,ne[0].height);for(let Et=0,Dt=ne.length;Et<Dt;Et++)Bt=ne[Et],E.format!==Di?zt!==null?oe?Z&&n.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,zt,Bt.data):n.compressedTexImage2D(s.TEXTURE_2D,Et,Wt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Z&&n.texSubImage2D(s.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,zt,Xt,Bt.data):n.texImage2D(s.TEXTURE_2D,Et,Wt,Bt.width,Bt.height,0,zt,Xt,Bt.data)}else if(E.isDataArrayTexture)if(oe){if(be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,qt,Wt,lt.width,lt.height,lt.depth),Z)if(E.layerUpdates.size>0){const Et=o_(lt.width,lt.height,E.format,E.type);for(const Dt of E.layerUpdates){const jt=lt.data.subarray(Dt*Et/lt.data.BYTES_PER_ELEMENT,(Dt+1)*Et/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Dt,lt.width,lt.height,1,zt,Xt,jt)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,zt,Xt,lt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Wt,lt.width,lt.height,lt.depth,0,zt,Xt,lt.data);else if(E.isData3DTexture)oe?(be&&n.texStorage3D(s.TEXTURE_3D,qt,Wt,lt.width,lt.height,lt.depth),Z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,zt,Xt,lt.data)):n.texImage3D(s.TEXTURE_3D,0,Wt,lt.width,lt.height,lt.depth,0,zt,Xt,lt.data);else if(E.isFramebufferTexture){if(be)if(oe)n.texStorage2D(s.TEXTURE_2D,qt,Wt,lt.width,lt.height);else{let Et=lt.width,Dt=lt.height;for(let jt=0;jt<qt;jt++)n.texImage2D(s.TEXTURE_2D,jt,Wt,Et,Dt,0,zt,Xt,null),Et>>=1,Dt>>=1}}else if(ne.length>0){if(oe&&be){const Et=mt(ne[0]);n.texStorage2D(s.TEXTURE_2D,qt,Wt,Et.width,Et.height)}for(let Et=0,Dt=ne.length;Et<Dt;Et++)Bt=ne[Et],oe?Z&&n.texSubImage2D(s.TEXTURE_2D,Et,0,0,zt,Xt,Bt):n.texImage2D(s.TEXTURE_2D,Et,Wt,zt,Xt,Bt);E.generateMipmaps=!1}else if(oe){if(be){const Et=mt(lt);n.texStorage2D(s.TEXTURE_2D,qt,Wt,Et.width,Et.height)}Z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,Xt,lt)}else n.texImage2D(s.TEXTURE_2D,0,Wt,zt,Xt,lt);M(E)&&y(Q),Lt.__version=yt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function F(A,E,G){if(E.image.length!==6)return;const Q=tt(A,E),pt=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+G);const yt=a.get(pt);if(pt.version!==yt.__version||Q===!0){n.activeTexture(s.TEXTURE0+G);const Lt=Fe.getPrimaries(Fe.workingColorSpace),rt=E.colorSpace===ja?null:Fe.getPrimaries(E.colorSpace),et=E.colorSpace===ja||Lt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let Dt=0;Dt<6;Dt++)!Pt&&!lt?zt[Dt]=T(E.image[Dt],!0,o.maxCubemapSize):zt[Dt]=lt?E.image[Dt].image:E.image[Dt],zt[Dt]=Tt(E,zt[Dt]);const Xt=zt[0],Wt=c.convert(E.format,E.colorSpace),Bt=c.convert(E.type),ne=D(E.internalFormat,Wt,Bt,E.colorSpace),oe=E.isVideoTexture!==!0,be=yt.__version===void 0||Q===!0,Z=pt.dataReady;let qt=q(E,Xt);at(s.TEXTURE_CUBE_MAP,E);let Et;if(Pt){oe&&be&&n.texStorage2D(s.TEXTURE_CUBE_MAP,qt,ne,Xt.width,Xt.height);for(let Dt=0;Dt<6;Dt++){Et=zt[Dt].mipmaps;for(let jt=0;jt<Et.length;jt++){const Yt=Et[jt];E.format!==Di?Wt!==null?oe?Z&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,0,0,Yt.width,Yt.height,Wt,Yt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,ne,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?Z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,0,0,Yt.width,Yt.height,Wt,Bt,Yt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt,ne,Yt.width,Yt.height,0,Wt,Bt,Yt.data)}}}else{if(Et=E.mipmaps,oe&&be){Et.length>0&&qt++;const Dt=mt(zt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,qt,ne,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(lt){oe?Z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,zt[Dt].width,zt[Dt].height,Wt,Bt,zt[Dt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,ne,zt[Dt].width,zt[Dt].height,0,Wt,Bt,zt[Dt].data);for(let jt=0;jt<Et.length;jt++){const le=Et[jt].image[Dt].image;oe?Z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,0,0,le.width,le.height,Wt,Bt,le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,ne,le.width,le.height,0,Wt,Bt,le.data)}}else{oe?Z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Wt,Bt,zt[Dt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,ne,Wt,Bt,zt[Dt]);for(let jt=0;jt<Et.length;jt++){const Yt=Et[jt];oe?Z&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,0,0,Wt,Bt,Yt.image[Dt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,jt+1,ne,Wt,Bt,Yt.image[Dt])}}}M(E)&&y(s.TEXTURE_CUBE_MAP),yt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Y(A,E,G,Q,pt,yt){const Lt=c.convert(G.format,G.colorSpace),rt=c.convert(G.type),et=D(G.internalFormat,Lt,rt,G.colorSpace),Pt=a.get(E),lt=a.get(G);if(lt.__renderTarget=E,!Pt.__hasExternalTextures){const zt=Math.max(1,E.width>>yt),Xt=Math.max(1,E.height>>yt);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?n.texImage3D(pt,yt,et,zt,Xt,E.depth,0,Lt,rt,null):n.texImage2D(pt,yt,et,zt,Xt,0,Lt,rt,null)}n.bindFramebuffer(s.FRAMEBUFFER,A),dt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,pt,lt.__webglTexture,0,ee(E)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,pt,lt.__webglTexture,yt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function W(A,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer){const Q=E.depthTexture,pt=Q&&Q.isDepthTexture?Q.type:null,yt=w(E.stencilBuffer,pt),Lt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=ee(E);dt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,yt,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,yt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,yt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,A)}else{const Q=E.textures;for(let pt=0;pt<Q.length;pt++){const yt=Q[pt],Lt=c.convert(yt.format,yt.colorSpace),rt=c.convert(yt.type),et=D(yt.internalFormat,Lt,rt,yt.colorSpace),Pt=ee(E);G&&dt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,et,E.width,E.height):dt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=a.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),bt(E.depthTexture,0);const pt=Q.__webglTexture,yt=ee(E);if(E.depthTexture.format===Ko)dt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Qo)dt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function wt(A){const E=a.get(A),G=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const pt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",pt)};Q.addEventListener("dispose",pt),E.__depthDisposeCallback=pt}E.__boundDepthTexture=Q}if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");vt(E.__webglFramebuffer,A)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=s.createRenderbuffer(),W(E.__webglDepthbuffer[Q],A,!1);else{const pt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=E.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,yt),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,yt)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),W(E.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,pt)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(A,E,G){const Q=a.get(A);E!==void 0&&Y(Q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&wt(A)}function Ot(A){const E=A.texture,G=a.get(A),Q=a.get(E);A.addEventListener("dispose",P);const pt=A.textures,yt=A.isWebGLCubeRenderTarget===!0,Lt=pt.length>1;if(Lt||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=E.version,u.memory.textures++),yt){G.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[rt]=[];for(let et=0;et<E.mipmaps.length;et++)G.__webglFramebuffer[rt][et]=s.createFramebuffer()}else G.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let rt=0;rt<E.mipmaps.length;rt++)G.__webglFramebuffer[rt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let rt=0,et=pt.length;rt<et;rt++){const Pt=a.get(pt[rt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(A.samples>0&&dt(A)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let rt=0;rt<pt.length;rt++){const et=pt[rt];G.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[rt]);const Pt=c.convert(et.format,et.colorSpace),lt=c.convert(et.type),zt=D(et.internalFormat,Pt,lt,et.colorSpace,A.isXRRenderTarget===!0),Xt=ee(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,zt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,G.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),W(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(yt){n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),at(s.TEXTURE_CUBE_MAP,E);for(let rt=0;rt<6;rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)Y(G.__webglFramebuffer[rt][et],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,et);else Y(G.__webglFramebuffer[rt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);M(E)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Lt){for(let rt=0,et=pt.length;rt<et;rt++){const Pt=pt[rt],lt=a.get(Pt);n.bindTexture(s.TEXTURE_2D,lt.__webglTexture),at(s.TEXTURE_2D,Pt),Y(G.__webglFramebuffer,A,Pt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),M(Pt)&&y(s.TEXTURE_2D)}n.unbindTexture()}else{let rt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(rt,Q.__webglTexture),at(rt,E),E.mipmaps&&E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)Y(G.__webglFramebuffer[et],A,E,s.COLOR_ATTACHMENT0,rt,et);else Y(G.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,rt,0);M(E)&&y(rt),n.unbindTexture()}A.depthBuffer&&wt(A)}function Ht(A){const E=A.textures;for(let G=0,Q=E.length;G<Q;G++){const pt=E[G];if(M(pt)){const yt=O(A),Lt=a.get(pt).__webglTexture;n.bindTexture(yt,Lt),y(yt),n.unbindTexture()}}}const kt=[],H=[];function xe(A){if(A.samples>0){if(dt(A)===!1){const E=A.textures,G=A.width,Q=A.height;let pt=s.COLOR_BUFFER_BIT;const yt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=a.get(A),rt=E.length>1;if(rt)for(let et=0;et<E.length;et++)n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let et=0;et<E.length;et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[et]);const Pt=a.get(E[et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,G,Q,0,0,G,Q,pt,s.NEAREST),p===!0&&(kt.length=0,H.length=0,kt.push(s.COLOR_ATTACHMENT0+et),A.depthBuffer&&A.resolveDepthBuffer===!1&&(kt.push(yt),H.push(yt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let et=0;et<E.length;et++){n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[et]);const Pt=a.get(E[et]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,Pt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&p){const E=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ee(A){return Math.min(o.maxSamples,A.samples)}function dt(A){const E=a.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(A){const E=u.render.frame;g.get(A)!==E&&(g.set(A,E),A.update())}function Tt(A,E){const G=A.colorSpace,Q=A.format,pt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==zs&&G!==ja&&(Fe.getTransfer(G)===Xe?(Q!==Di||pt!==ga)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(m.width=A.naturalWidth||A.width,m.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(m.width=A.displayWidth,m.height=A.displayHeight):(m.width=A.width,m.height=A.height),m}this.allocateTextureUnit=ot,this.resetTextureUnits=ut,this.setTexture2D=bt,this.setTexture2DArray=B,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=Ft,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=dt}function xC(s,t){function n(a,o=ja){let c;const u=Fe.getTransfer(o);if(a===ga)return s.UNSIGNED_BYTE;if(a===xp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Sp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===uy)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===ly)return s.BYTE;if(a===cy)return s.SHORT;if(a===jo)return s.UNSIGNED_SHORT;if(a===yp)return s.INT;if(a===Lr)return s.UNSIGNED_INT;if(a===fa)return s.FLOAT;if(a===tl)return s.HALF_FLOAT;if(a===fy)return s.ALPHA;if(a===hy)return s.RGB;if(a===Di)return s.RGBA;if(a===dy)return s.LUMINANCE;if(a===py)return s.LUMINANCE_ALPHA;if(a===Ko)return s.DEPTH_COMPONENT;if(a===Qo)return s.DEPTH_STENCIL;if(a===my)return s.RED;if(a===Mp)return s.RED_INTEGER;if(a===gy)return s.RG;if(a===Ep)return s.RG_INTEGER;if(a===bp)return s.RGBA_INTEGER;if(a===Yc||a===jc||a===Zc||a===Kc)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zd||a===Bd||a===Id||a===Hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===zd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gd||a===Vd||a===kd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Gd||a===Vd)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===kd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Xd||a===Wd||a===qd||a===Yd||a===jd||a===Zd||a===Kd||a===Qd||a===Jd||a===$d||a===tp||a===ep||a===np||a===ip)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Xd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Wd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Yd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===jd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Zd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Kd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Qd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Jd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===$d)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===tp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ep)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===np)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ip)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Qc||a===ap||a===rp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Qc)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===vy||a===sp||a===op||a===lp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===op)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===lp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Zo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
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

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new Hn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ja({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new sl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bC extends Hs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,x=null,b=null;const T=new EC,M=n.getContextAttributes();let y=null,O=null;const D=[],w=[],q=new he;let I=null;const P=new _i;P.viewport=new on;const X=new _i;X.viewport=new on;const L=[P,X],C=new W1;let k=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let F=D[z];return F===void 0&&(F=new $h,D[z]=F),F.getTargetRaySpace()},this.getControllerGrip=function(z){let F=D[z];return F===void 0&&(F=new $h,D[z]=F),F.getGripSpace()},this.getHand=function(z){let F=D[z];return F===void 0&&(F=new $h,D[z]=F),F.getHandSpace()};function ot(z){const F=w.indexOf(z.inputSource);if(F===-1)return;const Y=D[F];Y!==void 0&&(Y.update(z.inputSource,z.frame,m||u),Y.dispatchEvent({type:z.type,data:z.inputSource}))}function _t(){o.removeEventListener("select",ot),o.removeEventListener("selectstart",ot),o.removeEventListener("selectend",ot),o.removeEventListener("squeeze",ot),o.removeEventListener("squeezestart",ot),o.removeEventListener("squeezeend",ot),o.removeEventListener("end",_t),o.removeEventListener("inputsourceschange",bt);for(let z=0;z<D.length;z++){const F=w[z];F!==null&&(w[z]=null,D[z].disconnect(F))}k=null,ut=null,T.reset(),t.setRenderTarget(y),x=null,_=null,v=null,o=null,O=null,tt.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(q.width,q.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){c=z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){h=z,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(z){m=z},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(z){if(o=z,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",ot),o.addEventListener("selectstart",ot),o.addEventListener("selectend",ot),o.addEventListener("squeeze",ot),o.addEventListener("squeezestart",ot),o.addEventListener("squeezeend",ot),o.addEventListener("end",_t),o.addEventListener("inputsourceschange",bt),M.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(q),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,W=null,vt=null;M.depth&&(vt=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=M.stencil?Qo:Ko,W=M.stencil?Zo:Lr);const wt={colorFormat:n.RGBA8,depthFormat:vt,scaleFactor:c};v=new XRWebGLBinding(o,n),_=v.createProjectionLayer(wt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),O=new Nr(_.textureWidth,_.textureHeight,{format:Di,type:ga,depthTexture:new Ly(_.textureWidth,_.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Y={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Y),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Nr(x.framebufferWidth,x.framebufferHeight,{format:Di,type:ga,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(h),tt.setContext(o),tt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function bt(z){for(let F=0;F<z.removed.length;F++){const Y=z.removed[F],W=w.indexOf(Y);W>=0&&(w[W]=null,D[W].disconnect(Y))}for(let F=0;F<z.added.length;F++){const Y=z.added[F];let W=w.indexOf(Y);if(W===-1){for(let wt=0;wt<D.length;wt++)if(wt>=w.length){w.push(Y),W=wt;break}else if(w[wt]===null){w[wt]=Y,W=wt;break}if(W===-1)break}const vt=D[W];vt&&vt.connect(Y)}}const B=new $,st=new $;function K(z,F,Y){B.setFromMatrixPosition(F.matrixWorld),st.setFromMatrixPosition(Y.matrixWorld);const W=B.distanceTo(st),vt=F.projectionMatrix.elements,wt=Y.projectionMatrix.elements,Ft=vt[14]/(vt[10]-1),Ot=vt[14]/(vt[10]+1),Ht=(vt[9]+1)/vt[5],kt=(vt[9]-1)/vt[5],H=(vt[8]-1)/vt[0],xe=(wt[8]+1)/wt[0],ee=Ft*H,dt=Ft*xe,ct=W/(-H+xe),Tt=ct*-H;if(F.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Tt),z.translateZ(ct),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),vt[10]===-1)z.projectionMatrix.copy(F.projectionMatrix),z.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const mt=Ft+ct,A=Ot+ct,E=ee-Tt,G=dt+(W-Tt),Q=Ht*Ot/A*mt,pt=kt*Ot/A*mt;z.projectionMatrix.makePerspective(E,G,Q,pt,mt,A),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Rt(z,F){F===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(F.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(o===null)return;let F=z.near,Y=z.far;T.texture!==null&&(T.depthNear>0&&(F=T.depthNear),T.depthFar>0&&(Y=T.depthFar)),C.near=X.near=P.near=F,C.far=X.far=P.far=Y,(k!==C.near||ut!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ut=C.far),P.layers.mask=z.layers.mask|2,X.layers.mask=z.layers.mask|4,C.layers.mask=P.layers.mask|X.layers.mask;const W=z.parent,vt=C.cameras;Rt(C,W);for(let wt=0;wt<vt.length;wt++)Rt(vt[wt],W);vt.length===2?K(C,P,X):C.projectionMatrix.copy(P.projectionMatrix),Nt(z,C,W)};function Nt(z,F,Y){Y===null?z.matrix.copy(F.matrixWorld):(z.matrix.copy(Y.matrixWorld),z.matrix.invert(),z.matrix.multiply(F.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(F.projectionMatrix),z.projectionMatrixInverse.copy(F.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=cp*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(z){p=z,_!==null&&(_.fixedFoveation=z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let N=null;function at(z,F){if(g=F.getViewerPose(m||u),b=F,g!==null){const Y=g.views;x!==null&&(t.setRenderTargetFramebuffer(O,x.framebuffer),t.setRenderTarget(O));let W=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,W=!0);for(let Ft=0;Ft<Y.length;Ft++){const Ot=Y[Ft];let Ht=null;if(x!==null)Ht=x.getViewport(Ot);else{const H=v.getViewSubImage(_,Ot);Ht=H.viewport,Ft===0&&(t.setRenderTargetTextures(O,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(O))}let kt=L[Ft];kt===void 0&&(kt=new _i,kt.layers.enable(Ft),kt.viewport=new on,L[Ft]=kt),kt.matrix.fromArray(Ot.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ot.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Ft===0&&(C.matrix.copy(kt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),W===!0&&C.cameras.push(kt)}const vt=o.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ft=v.getDepthInformation(Y[0]);Ft&&Ft.isValid&&Ft.texture&&T.init(t,Ft,o.renderState)}}for(let Y=0;Y<D.length;Y++){const W=w[Y],vt=D[Y];W!==null&&vt!==void 0&&vt.update(W,F,m||u)}N&&N(z,F),F.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:F}),b=null}const tt=new Fy;tt.setAnimationLoop(at),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}const Mr=new va,TC=new Qe;function AC(s,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,Ay(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,O,D,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),b(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,O,D):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=t.get(y),D=O.envMap,w=O.envMapRotation;D&&(M.envMap.value=D,Mr.copy(w),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),M.envMapRotation.value.setFromMatrix4(TC.makeRotationFromEuler(Mr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,O,D){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=D*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const O=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function RC(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const w=D.program;a.uniformBlockBinding(O,w)}function m(O,D){let w=o[O.id];w===void 0&&(b(O),w=g(O),o[O.id]=w,O.addEventListener("dispose",M));const q=D.program;a.updateUBOMapping(O,q);const I=t.render.frame;c[O.id]!==I&&(_(O),c[O.id]=I)}function g(O){const D=v();O.__bindingPointIndex=D;const w=s.createBuffer(),q=O.__size,I=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,q,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,w),w}function v(){for(let O=0;O<h;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=o[O.id],w=O.uniforms,q=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let I=0,P=w.length;I<P;I++){const X=Array.isArray(w[I])?w[I]:[w[I]];for(let L=0,C=X.length;L<C;L++){const k=X[L];if(x(k,I,L,q)===!0){const ut=k.__offset,ot=Array.isArray(k.value)?k.value:[k.value];let _t=0;for(let bt=0;bt<ot.length;bt++){const B=ot[bt],st=T(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ut+_t,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,_t),_t+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ut,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(O,D,w,q){const I=O.value,P=D+"_"+w;if(q[P]===void 0)return typeof I=="number"||typeof I=="boolean"?q[P]=I:q[P]=I.clone(),!0;{const X=q[P];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return q[P]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function b(O){const D=O.uniforms;let w=0;const q=16;for(let P=0,X=D.length;P<X;P++){const L=Array.isArray(D[P])?D[P]:[D[P]];for(let C=0,k=L.length;C<k;C++){const ut=L[C],ot=Array.isArray(ut.value)?ut.value:[ut.value];for(let _t=0,bt=ot.length;_t<bt;_t++){const B=ot[_t],st=T(B),K=w%q,Rt=K%st.boundary,Nt=K+Rt;w+=Rt,Nt!==0&&q-Nt<st.storage&&(w+=q-Nt),ut.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=w,w+=st.storage}}}const I=w%q;return I>0&&(w+=q-I),O.__size=w,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function M(O){const D=O.target;D.removeEventListener("dispose",M);const w=u.indexOf(D.__bindingPointIndex);u.splice(w,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function y(){for(const O in o)s.deleteBuffer(o[O]);u=[],o={},c={}}return{bind:p,update:m,dispose:y}}class CC{constructor(t={}){const{canvas:n=YE(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const b=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const O=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let q=!1;this._outputColorSpace=li;let I=0,P=0,X=null,L=-1,C=null;const k=new on,ut=new on;let ot=null;const _t=new ze(0);let bt=0,B=n.width,st=n.height,K=1,Rt=null,Nt=null;const N=new on(0,0,B,st),at=new on(0,0,B,st);let tt=!1;const z=new wy;let F=!1,Y=!1;const W=new Qe,vt=new Qe,wt=new $,Ft=new on,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function kt(){return X===null?K:1}let H=a;function xe(U,nt){return n.getContext(U,nt)}try{const U={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_p}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",jt,!1),n.addEventListener("webglcontextcreationerror",Yt,!1),H===null){const nt="webgl2";if(H=xe(nt,U),H===null)throw xe(nt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ee,dt,ct,Tt,mt,A,E,G,Q,pt,yt,Lt,rt,et,Pt,lt,zt,Xt,Wt,Bt,ne,oe,be,Z;function qt(){ee=new BA(H),ee.init(),oe=new xC(H,ee),dt=new UA(H,ee,t,oe),ct=new _C(H,ee),dt.reverseDepthBuffer&&_&&ct.buffers.depth.setReversed(!0),Tt=new GA(H),mt=new rC,A=new yC(H,ee,ct,mt,dt,oe,Tt),E=new NA(w),G=new zA(w),Q=new Y1(H),be=new wA(H,Q),pt=new IA(H,Q,Tt,be),yt=new kA(H,pt,Q,Tt),Wt=new VA(H,dt,A),lt=new LA(mt),Lt=new aC(w,E,G,ee,dt,be,lt),rt=new AC(w,mt),et=new oC,Pt=new dC(ee),Xt=new CA(w,E,G,ct,yt,x,p),zt=new gC(w,yt,dt),Z=new RC(H,Tt,dt,ct),Bt=new DA(H,ee,Tt),ne=new HA(H,ee,Tt),Tt.programs=Lt.programs,w.capabilities=dt,w.extensions=ee,w.properties=mt,w.renderLists=et,w.shadowMap=zt,w.state=ct,w.info=Tt}qt();const Et=new bC(w,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const U=ee.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ee.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(U){U!==void 0&&(K=U,this.setSize(B,st,!1))},this.getSize=function(U){return U.set(B,st)},this.setSize=function(U,nt,xt=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,st=nt,n.width=Math.floor(U*K),n.height=Math.floor(nt*K),xt===!0&&(n.style.width=U+"px",n.style.height=nt+"px"),this.setViewport(0,0,U,nt)},this.getDrawingBufferSize=function(U){return U.set(B*K,st*K).floor()},this.setDrawingBufferSize=function(U,nt,xt){B=U,st=nt,K=xt,n.width=Math.floor(U*xt),n.height=Math.floor(nt*xt),this.setViewport(0,0,U,nt)},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(N)},this.setViewport=function(U,nt,xt,St){U.isVector4?N.set(U.x,U.y,U.z,U.w):N.set(U,nt,xt,St),ct.viewport(k.copy(N).multiplyScalar(K).round())},this.getScissor=function(U){return U.copy(at)},this.setScissor=function(U,nt,xt,St){U.isVector4?at.set(U.x,U.y,U.z,U.w):at.set(U,nt,xt,St),ct.scissor(ut.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(U){ct.setScissorTest(tt=U)},this.setOpaqueSort=function(U){Rt=U},this.setTransparentSort=function(U){Nt=U},this.getClearColor=function(U){return U.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(U=!0,nt=!0,xt=!0){let St=0;if(U){let J=!1;if(X!==null){const Vt=X.texture.format;J=Vt===bp||Vt===Ep||Vt===Mp}if(J){const Vt=X.texture.type,Zt=Vt===ga||Vt===Lr||Vt===jo||Vt===Zo||Vt===xp||Vt===Sp,Qt=Xt.getClearColor(),$t=Xt.getClearAlpha(),fe=Qt.r,ue=Qt.g,ae=Qt.b;Zt?(b[0]=fe,b[1]=ue,b[2]=ae,b[3]=$t,H.clearBufferuiv(H.COLOR,0,b)):(T[0]=fe,T[1]=ue,T[2]=ae,T[3]=$t,H.clearBufferiv(H.COLOR,0,T))}else St|=H.COLOR_BUFFER_BIT}nt&&(St|=H.DEPTH_BUFFER_BIT),xt&&(St|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(St)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",jt,!1),n.removeEventListener("webglcontextcreationerror",Yt,!1),Xt.dispose(),et.dispose(),Pt.dispose(),mt.dispose(),E.dispose(),G.dispose(),yt.dispose(),be.dispose(),Z.dispose(),Lt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",xi),Et.removeEventListener("sessionend",ln),wn.stop()};function Dt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const U=Tt.autoReset,nt=zt.enabled,xt=zt.autoUpdate,St=zt.needsUpdate,J=zt.type;qt(),Tt.autoReset=U,zt.enabled=nt,zt.autoUpdate=xt,zt.needsUpdate=St,zt.type=J}function Yt(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function le(U){const nt=U.target;nt.removeEventListener("dispose",le),We(nt)}function We(U){Ye(U),mt.remove(U)}function Ye(U){const nt=mt.get(U).programs;nt!==void 0&&(nt.forEach(function(xt){Lt.releaseProgram(xt)}),U.isShaderMaterial&&Lt.releaseShaderCache(U))}this.renderBufferDirect=function(U,nt,xt,St,J,Vt){nt===null&&(nt=Ot);const Zt=J.isMesh&&J.matrixWorld.determinant()<0,Qt=ks(U,nt,xt,St,J);ct.setMaterial(St,Zt);let $t=xt.index,fe=1;if(St.wireframe===!0){if($t=pt.getWireframeAttribute(xt),$t===void 0)return;fe=2}const ue=xt.drawRange,ae=xt.attributes.position;let Ce=ue.start*fe,we=(ue.start+ue.count)*fe;Vt!==null&&(Ce=Math.max(Ce,Vt.start*fe),we=Math.min(we,(Vt.start+Vt.count)*fe)),$t!==null?(Ce=Math.max(Ce,0),we=Math.min(we,$t.count)):ae!=null&&(Ce=Math.max(Ce,0),we=Math.min(we,ae.count));const je=we-Ce;if(je<0||je===1/0)return;be.setup(J,St,Qt,xt,$t);let Le,de=Bt;if($t!==null&&(Le=Q.get($t),de=ne,de.setIndex(Le)),J.isMesh)St.wireframe===!0?(ct.setLineWidth(St.wireframeLinewidth*kt()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(J.isLine){let se=St.linewidth;se===void 0&&(se=1),ct.setLineWidth(se*kt()),J.isLineSegments?de.setMode(H.LINES):J.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else J.isPoints?de.setMode(H.POINTS):J.isSprite&&de.setMode(H.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Jc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))de.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const se=J._multiDrawStarts,pn=J._multiDrawCounts,Ue=J._multiDrawCount,Vn=$t?Q.get($t).bytesPerElement:1,Mi=mt.get(St).currentProgram.getUniforms();for(let Pn=0;Pn<Ue;Pn++)Mi.setValue(H,"_gl_DrawID",Pn),de.render(se[Pn]/Vn,pn[Pn])}else if(J.isInstancedMesh)de.renderInstances(Ce,je,J.count);else if(xt.isInstancedBufferGeometry){const se=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,pn=Math.min(xt.instanceCount,se);de.renderInstances(Ce,je,pn)}else de.render(Ce,je)};function Te(U,nt,xt){U.transparent===!0&&U.side===zi&&U.forceSinglePass===!1?(U.side=Qn,U.needsUpdate=!0,tn(U,nt,xt),U.side=Qa,U.needsUpdate=!0,tn(U,nt,xt),U.side=zi):tn(U,nt,xt)}this.compile=function(U,nt,xt=null){xt===null&&(xt=U),y=Pt.get(xt),y.init(nt),D.push(y),xt.traverseVisible(function(J){J.isLight&&J.layers.test(nt.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),U!==xt&&U.traverseVisible(function(J){J.isLight&&J.layers.test(nt.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights();const St=new Set;return U.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Vt=J.material;if(Vt)if(Array.isArray(Vt))for(let Zt=0;Zt<Vt.length;Zt++){const Qt=Vt[Zt];Te(Qt,xt,J),St.add(Qt)}else Te(Vt,xt,J),St.add(Vt)}),y=D.pop(),St},this.compileAsync=function(U,nt,xt=null){const St=this.compile(U,nt,xt);return new Promise(J=>{function Vt(){if(St.forEach(function(Zt){mt.get(Zt).currentProgram.isReady()&&St.delete(Zt)}),St.size===0){J(U);return}setTimeout(Vt,10)}ee.get("KHR_parallel_shader_compile")!==null?Vt():setTimeout(Vt,10)})};let $e=null;function Mn(U){$e&&$e(U)}function xi(){wn.stop()}function ln(){wn.start()}const wn=new Fy;wn.setAnimationLoop(Mn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(U){$e=U,Et.setAnimationLoop(U),U===null?wn.stop():wn.start()},Et.addEventListener("sessionstart",xi),Et.addEventListener("sessionend",ln),this.render=function(U,nt){if(nt!==void 0&&nt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.parent===null&&nt.matrixWorldAutoUpdate===!0&&nt.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(nt),nt=Et.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,nt,X),y=Pt.get(U,D.length),y.init(nt),D.push(y),vt.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),z.setFromProjectionMatrix(vt),Y=this.localClippingEnabled,F=lt.init(this.clippingPlanes,Y),M=et.get(U,O.length),M.init(),O.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Vt=w.xr.getDepthSensingMesh();Vt!==null&&Jn(Vt,nt,-1/0,w.sortObjects)}Jn(U,nt,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Rt,Nt),Ht=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ht&&Xt.addToRenderList(M,U),this.info.render.frame++,F===!0&&lt.beginShadows();const xt=y.state.shadowsArray;zt.render(xt,U,nt),F===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const St=M.opaque,J=M.transmissive;if(y.setupLights(),nt.isArrayCamera){const Vt=nt.cameras;if(J.length>0)for(let Zt=0,Qt=Vt.length;Zt<Qt;Zt++){const $t=Vt[Zt];Vs(St,J,U,$t)}Ht&&Xt.render(U);for(let Zt=0,Qt=Vt.length;Zt<Qt;Zt++){const $t=Vt[Zt];Or(M,U,$t,$t.viewport)}}else J.length>0&&Vs(St,J,U,nt),Ht&&Xt.render(U),Or(M,U,nt);X!==null&&P===0&&(A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X)),U.isScene===!0&&U.onAfterRender(w,U,nt),be.resetDefaultState(),L=-1,C=null,D.pop(),D.length>0?(y=D[D.length-1],F===!0&&lt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Jn(U,nt,xt,St){if(U.visible===!1)return;if(U.layers.test(nt.layers)){if(U.isGroup)xt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(nt);else if(U.isLight)y.pushLight(U),U.castShadow&&y.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||z.intersectsSprite(U)){St&&Ft.setFromMatrixPosition(U.matrixWorld).applyMatrix4(vt);const Zt=yt.update(U),Qt=U.material;Qt.visible&&M.push(U,Zt,Qt,xt,Ft.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||z.intersectsObject(U))){const Zt=yt.update(U),Qt=U.material;if(St&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ft.copy(U.boundingSphere.center)):(Zt.boundingSphere===null&&Zt.computeBoundingSphere(),Ft.copy(Zt.boundingSphere.center)),Ft.applyMatrix4(U.matrixWorld).applyMatrix4(vt)),Array.isArray(Qt)){const $t=Zt.groups;for(let fe=0,ue=$t.length;fe<ue;fe++){const ae=$t[fe],Ce=Qt[ae.materialIndex];Ce&&Ce.visible&&M.push(U,Zt,Ce,xt,Ft.z,ae)}}else Qt.visible&&M.push(U,Zt,Qt,xt,Ft.z,null)}}const Vt=U.children;for(let Zt=0,Qt=Vt.length;Zt<Qt;Zt++)Jn(Vt[Zt],nt,xt,St)}function Or(U,nt,xt,St){const J=U.opaque,Vt=U.transmissive,Zt=U.transparent;y.setupLightsView(xt),F===!0&&lt.setGlobalState(w.clippingPlanes,xt),St&&ct.viewport(k.copy(St)),J.length>0&&$a(J,nt,xt),Vt.length>0&&$a(Vt,nt,xt),Zt.length>0&&$a(Zt,nt,xt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Vs(U,nt,xt,St){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[St.id]===void 0&&(y.state.transmissionRenderTarget[St.id]=new Nr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?tl:ga,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Fe.workingColorSpace}));const Vt=y.state.transmissionRenderTarget[St.id],Zt=St.viewport||k;Vt.setSize(Zt.z*w.transmissionResolutionScale,Zt.w*w.transmissionResolutionScale);const Qt=w.getRenderTarget();w.setRenderTarget(Vt),w.getClearColor(_t),bt=w.getClearAlpha(),bt<1&&w.setClearColor(16777215,.5),w.clear(),Ht&&Xt.render(xt);const $t=w.toneMapping;w.toneMapping=Ka;const fe=St.viewport;if(St.viewport!==void 0&&(St.viewport=void 0),y.setupLightsView(St),F===!0&&lt.setGlobalState(w.clippingPlanes,St),$a(U,xt,St),A.updateMultisampleRenderTarget(Vt),A.updateRenderTargetMipmap(Vt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let ae=0,Ce=nt.length;ae<Ce;ae++){const we=nt[ae],je=we.object,Le=we.geometry,de=we.material,se=we.group;if(de.side===zi&&je.layers.test(St.layers)){const pn=de.side;de.side=Qn,de.needsUpdate=!0,Si(je,xt,St,Le,de,se),de.side=pn,de.needsUpdate=!0,ue=!0}}ue===!0&&(A.updateMultisampleRenderTarget(Vt),A.updateRenderTargetMipmap(Vt))}w.setRenderTarget(Qt),w.setClearColor(_t,bt),fe!==void 0&&(St.viewport=fe),w.toneMapping=$t}function $a(U,nt,xt){const St=nt.isScene===!0?nt.overrideMaterial:null;for(let J=0,Vt=U.length;J<Vt;J++){const Zt=U[J],Qt=Zt.object,$t=Zt.geometry,fe=Zt.group;let ue=Zt.material;ue.allowOverride===!0&&St!==null&&(ue=St),Qt.layers.test(xt.layers)&&Si(Qt,nt,xt,$t,ue,fe)}}function Si(U,nt,xt,St,J,Vt){U.onBeforeRender(w,nt,xt,St,J,Vt),U.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.onBeforeRender(w,nt,xt,St,U,Vt),J.transparent===!0&&J.side===zi&&J.forceSinglePass===!1?(J.side=Qn,J.needsUpdate=!0,w.renderBufferDirect(xt,nt,St,J,U,Vt),J.side=Qa,J.needsUpdate=!0,w.renderBufferDirect(xt,nt,St,J,U,Vt),J.side=zi):w.renderBufferDirect(xt,nt,St,J,U,Vt),U.onAfterRender(w,nt,xt,St,J,Vt)}function tn(U,nt,xt){nt.isScene!==!0&&(nt=Ot);const St=mt.get(U),J=y.state.lights,Vt=y.state.shadowsArray,Zt=J.state.version,Qt=Lt.getParameters(U,J.state,Vt,nt,xt),$t=Lt.getProgramCacheKey(Qt);let fe=St.programs;St.environment=U.isMeshStandardMaterial?nt.environment:null,St.fog=nt.fog,St.envMap=(U.isMeshStandardMaterial?G:E).get(U.envMap||St.environment),St.envMapRotation=St.environment!==null&&U.envMap===null?nt.environmentRotation:U.envMapRotation,fe===void 0&&(U.addEventListener("dispose",le),fe=new Map,St.programs=fe);let ue=fe.get($t);if(ue!==void 0){if(St.currentProgram===ue&&St.lightsStateVersion===Zt)return Hi(U,Qt),ue}else Qt.uniforms=Lt.getUniforms(U),U.onBeforeCompile(Qt,w),ue=Lt.acquireProgram(Qt,$t),fe.set($t,ue),St.uniforms=Qt.uniforms;const ae=St.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ae.clippingPlanes=lt.uniform),Hi(U,Qt),St.needsLights=gu(U),St.lightsStateVersion=Zt,St.needsLights&&(ae.ambientLightColor.value=J.state.ambient,ae.lightProbe.value=J.state.probe,ae.directionalLights.value=J.state.directional,ae.directionalLightShadows.value=J.state.directionalShadow,ae.spotLights.value=J.state.spot,ae.spotLightShadows.value=J.state.spotShadow,ae.rectAreaLights.value=J.state.rectArea,ae.ltc_1.value=J.state.rectAreaLTC1,ae.ltc_2.value=J.state.rectAreaLTC2,ae.pointLights.value=J.state.point,ae.pointLightShadows.value=J.state.pointShadow,ae.hemisphereLights.value=J.state.hemi,ae.directionalShadowMap.value=J.state.directionalShadowMap,ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ae.spotShadowMap.value=J.state.spotShadowMap,ae.spotLightMatrix.value=J.state.spotLightMatrix,ae.spotLightMap.value=J.state.spotLightMap,ae.pointShadowMap.value=J.state.pointShadowMap,ae.pointShadowMatrix.value=J.state.pointShadowMatrix),St.currentProgram=ue,St.uniformsList=null,ue}function En(U){if(U.uniformsList===null){const nt=U.currentProgram.getUniforms();U.uniformsList=$c.seqWithValue(nt.seq,U.uniforms)}return U.uniformsList}function Hi(U,nt){const xt=mt.get(U);xt.outputColorSpace=nt.outputColorSpace,xt.batching=nt.batching,xt.batchingColor=nt.batchingColor,xt.instancing=nt.instancing,xt.instancingColor=nt.instancingColor,xt.instancingMorph=nt.instancingMorph,xt.skinning=nt.skinning,xt.morphTargets=nt.morphTargets,xt.morphNormals=nt.morphNormals,xt.morphColors=nt.morphColors,xt.morphTargetsCount=nt.morphTargetsCount,xt.numClippingPlanes=nt.numClippingPlanes,xt.numIntersection=nt.numClipIntersection,xt.vertexAlphas=nt.vertexAlphas,xt.vertexTangents=nt.vertexTangents,xt.toneMapping=nt.toneMapping}function ks(U,nt,xt,St,J){nt.isScene!==!0&&(nt=Ot),A.resetTextureUnits();const Vt=nt.fog,Zt=St.isMeshStandardMaterial?nt.environment:null,Qt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:zs,$t=(St.isMeshStandardMaterial?G:E).get(St.envMap||Zt),fe=St.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,ue=!!xt.attributes.tangent&&(!!St.normalMap||St.anisotropy>0),ae=!!xt.morphAttributes.position,Ce=!!xt.morphAttributes.normal,we=!!xt.morphAttributes.color;let je=Ka;St.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(je=w.toneMapping);const Le=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,de=Le!==void 0?Le.length:0,se=mt.get(St),pn=y.state.lights;if(F===!0&&(Y===!0||U!==C)){const en=U===C&&St.id===L;lt.setState(St,U,en)}let Ue=!1;St.version===se.__version?(se.needsLights&&se.lightsStateVersion!==pn.state.version||se.outputColorSpace!==Qt||J.isBatchedMesh&&se.batching===!1||!J.isBatchedMesh&&se.batching===!0||J.isBatchedMesh&&se.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&se.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&se.instancing===!1||!J.isInstancedMesh&&se.instancing===!0||J.isSkinnedMesh&&se.skinning===!1||!J.isSkinnedMesh&&se.skinning===!0||J.isInstancedMesh&&se.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&se.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&se.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&se.instancingMorph===!1&&J.morphTexture!==null||se.envMap!==$t||St.fog===!0&&se.fog!==Vt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==lt.numPlanes||se.numIntersection!==lt.numIntersection)||se.vertexAlphas!==fe||se.vertexTangents!==ue||se.morphTargets!==ae||se.morphNormals!==Ce||se.morphColors!==we||se.toneMapping!==je||se.morphTargetsCount!==de)&&(Ue=!0):(Ue=!0,se.__version=St.version);let Vn=se.currentProgram;Ue===!0&&(Vn=tn(St,nt,J));let Mi=!1,Pn=!1,yn=!1;const He=Vn.getUniforms(),zn=se.uniforms;if(ct.useProgram(Vn.program)&&(Mi=!0,Pn=!0,yn=!0),St.id!==L&&(L=St.id,Pn=!0),Mi||C!==U){ct.buffers.depth.getReversed()?(W.copy(U.projectionMatrix),ZE(W),KE(W),He.setValue(H,"projectionMatrix",W)):He.setValue(H,"projectionMatrix",U.projectionMatrix),He.setValue(H,"viewMatrix",U.matrixWorldInverse);const bn=He.map.cameraPosition;bn!==void 0&&bn.setValue(H,wt.setFromMatrixPosition(U.matrixWorld)),dt.logarithmicDepthBuffer&&He.setValue(H,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(St.isMeshPhongMaterial||St.isMeshToonMaterial||St.isMeshLambertMaterial||St.isMeshBasicMaterial||St.isMeshStandardMaterial||St.isShaderMaterial)&&He.setValue(H,"isOrthographic",U.isOrthographicCamera===!0),C!==U&&(C=U,Pn=!0,yn=!0)}if(J.isSkinnedMesh){He.setOptional(H,J,"bindMatrix"),He.setOptional(H,J,"bindMatrixInverse");const en=J.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),He.setValue(H,"boneTexture",en.boneTexture,A))}J.isBatchedMesh&&(He.setOptional(H,J,"batchingTexture"),He.setValue(H,"batchingTexture",J._matricesTexture,A),He.setOptional(H,J,"batchingIdTexture"),He.setValue(H,"batchingIdTexture",J._indirectTexture,A),He.setOptional(H,J,"batchingColorTexture"),J._colorsTexture!==null&&He.setValue(H,"batchingColorTexture",J._colorsTexture,A));const Dn=xt.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Wt.update(J,xt,Vn),(Pn||se.receiveShadow!==J.receiveShadow)&&(se.receiveShadow=J.receiveShadow,He.setValue(H,"receiveShadow",J.receiveShadow)),St.isMeshGouraudMaterial&&St.envMap!==null&&(zn.envMap.value=$t,zn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),St.isMeshStandardMaterial&&St.envMap===null&&nt.environment!==null&&(zn.envMapIntensity.value=nt.environmentIntensity),Pn&&(He.setValue(H,"toneMappingExposure",w.toneMappingExposure),se.needsLights&&mu(zn,yn),Vt&&St.fog===!0&&rt.refreshFogUniforms(zn,Vt),rt.refreshMaterialUniforms(zn,St,K,st,y.state.transmissionRenderTarget[U.id]),$c.upload(H,En(se),zn,A)),St.isShaderMaterial&&St.uniformsNeedUpdate===!0&&($c.upload(H,En(se),zn,A),St.uniformsNeedUpdate=!1),St.isSpriteMaterial&&He.setValue(H,"center",J.center),He.setValue(H,"modelViewMatrix",J.modelViewMatrix),He.setValue(H,"normalMatrix",J.normalMatrix),He.setValue(H,"modelMatrix",J.matrixWorld),St.isShaderMaterial||St.isRawShaderMaterial){const en=St.uniformsGroups;for(let bn=0,Fr=en.length;bn<Fr;bn++){const kn=en[bn];Z.update(kn,Vn),Z.bind(kn,Vn)}}return Vn}function mu(U,nt){U.ambientLightColor.needsUpdate=nt,U.lightProbe.needsUpdate=nt,U.directionalLights.needsUpdate=nt,U.directionalLightShadows.needsUpdate=nt,U.pointLights.needsUpdate=nt,U.pointLightShadows.needsUpdate=nt,U.spotLights.needsUpdate=nt,U.spotLightShadows.needsUpdate=nt,U.rectAreaLights.needsUpdate=nt,U.hemisphereLights.needsUpdate=nt}function gu(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(U,nt,xt){const St=mt.get(U);St.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,St.__autoAllocateDepthBuffer===!1&&(St.__useRenderToTexture=!1),mt.get(U.texture).__webglTexture=nt,mt.get(U.depthTexture).__webglTexture=St.__autoAllocateDepthBuffer?void 0:xt,St.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,nt){const xt=mt.get(U);xt.__webglFramebuffer=nt,xt.__useDefaultFramebuffer=nt===void 0};const cl=H.createFramebuffer();this.setRenderTarget=function(U,nt=0,xt=0){X=U,I=nt,P=xt;let St=!0,J=null,Vt=!1,Zt=!1;if(U){const $t=mt.get(U);if($t.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(H.FRAMEBUFFER,null),St=!1;else if($t.__webglFramebuffer===void 0)A.setupRenderTarget(U);else if($t.__hasExternalTextures)A.rebindTextures(U,mt.get(U.texture).__webglTexture,mt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ae=U.depthTexture;if($t.__boundDepthTexture!==ae){if(ae!==null&&mt.has(ae)&&(U.width!==ae.image.width||U.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(U)}}const fe=U.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(Zt=!0);const ue=mt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(ue[nt])?J=ue[nt][xt]:J=ue[nt],Vt=!0):U.samples>0&&A.useMultisampledRTT(U)===!1?J=mt.get(U).__webglMultisampledFramebuffer:Array.isArray(ue)?J=ue[xt]:J=ue,k.copy(U.viewport),ut.copy(U.scissor),ot=U.scissorTest}else k.copy(N).multiplyScalar(K).floor(),ut.copy(at).multiplyScalar(K).floor(),ot=tt;if(xt!==0&&(J=cl),ct.bindFramebuffer(H.FRAMEBUFFER,J)&&St&&ct.drawBuffers(U,J),ct.viewport(k),ct.scissor(ut),ct.setScissorTest(ot),Vt){const $t=mt.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+nt,$t.__webglTexture,xt)}else if(Zt){const $t=mt.get(U.texture),fe=nt;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,$t.__webglTexture,xt,fe)}else if(U!==null&&xt!==0){const $t=mt.get(U.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$t.__webglTexture,xt)}L=-1},this.readRenderTargetPixels=function(U,nt,xt,St,J,Vt,Zt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=mt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt){ct.bindFramebuffer(H.FRAMEBUFFER,Qt);try{const $t=U.texture,fe=$t.format,ue=$t.type;if(!dt.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}nt>=0&&nt<=U.width-St&&xt>=0&&xt<=U.height-J&&H.readPixels(nt,xt,St,J,oe.convert(fe),oe.convert(ue),Vt)}finally{const $t=X!==null?mt.get(X).__webglFramebuffer:null;ct.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(U,nt,xt,St,J,Vt,Zt){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=mt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Zt!==void 0&&(Qt=Qt[Zt]),Qt)if(nt>=0&&nt<=U.width-St&&xt>=0&&xt<=U.height-J){ct.bindFramebuffer(H.FRAMEBUFFER,Qt);const $t=U.texture,fe=$t.format,ue=$t.type;if(!dt.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.bufferData(H.PIXEL_PACK_BUFFER,Vt.byteLength,H.STREAM_READ),H.readPixels(nt,xt,St,J,oe.convert(fe),oe.convert(ue),0);const Ce=X!==null?mt.get(X).__webglFramebuffer:null;ct.bindFramebuffer(H.FRAMEBUFFER,Ce);const we=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await jE(H,we,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Vt),H.deleteBuffer(ae),H.deleteSync(we),Vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,nt=null,xt=0){const St=Math.pow(2,-xt),J=Math.floor(U.image.width*St),Vt=Math.floor(U.image.height*St),Zt=nt!==null?nt.x:0,Qt=nt!==null?nt.y:0;A.setTexture2D(U,0),H.copyTexSubImage2D(H.TEXTURE_2D,xt,0,0,Zt,Qt,J,Vt),ct.unbindTexture()};const tr=H.createFramebuffer(),Xs=H.createFramebuffer();this.copyTextureToTexture=function(U,nt,xt=null,St=null,J=0,Vt=null){Vt===null&&(J!==0?(Jc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Vt=J,J=0):Vt=0);let Zt,Qt,$t,fe,ue,ae,Ce,we,je;const Le=U.isCompressedTexture?U.mipmaps[Vt]:U.image;if(xt!==null)Zt=xt.max.x-xt.min.x,Qt=xt.max.y-xt.min.y,$t=xt.isBox3?xt.max.z-xt.min.z:1,fe=xt.min.x,ue=xt.min.y,ae=xt.isBox3?xt.min.z:0;else{const Dn=Math.pow(2,-J);Zt=Math.floor(Le.width*Dn),Qt=Math.floor(Le.height*Dn),U.isDataArrayTexture?$t=Le.depth:U.isData3DTexture?$t=Math.floor(Le.depth*Dn):$t=1,fe=0,ue=0,ae=0}St!==null?(Ce=St.x,we=St.y,je=St.z):(Ce=0,we=0,je=0);const de=oe.convert(nt.format),se=oe.convert(nt.type);let pn;nt.isData3DTexture?(A.setTexture3D(nt,0),pn=H.TEXTURE_3D):nt.isDataArrayTexture||nt.isCompressedArrayTexture?(A.setTexture2DArray(nt,0),pn=H.TEXTURE_2D_ARRAY):(A.setTexture2D(nt,0),pn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,nt.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,nt.unpackAlignment);const Ue=H.getParameter(H.UNPACK_ROW_LENGTH),Vn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Mi=H.getParameter(H.UNPACK_SKIP_PIXELS),Pn=H.getParameter(H.UNPACK_SKIP_ROWS),yn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,fe),H.pixelStorei(H.UNPACK_SKIP_ROWS,ue),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ae);const He=U.isDataArrayTexture||U.isData3DTexture,zn=nt.isDataArrayTexture||nt.isData3DTexture;if(U.isDepthTexture){const Dn=mt.get(U),en=mt.get(nt),bn=mt.get(Dn.__renderTarget),Fr=mt.get(en.__renderTarget);ct.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let kn=0;kn<$t;kn++)He&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,J,ae+kn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,mt.get(nt).__webglTexture,Vt,je+kn)),H.blitFramebuffer(fe,ue,Zt,Qt,Ce,we,Zt,Qt,H.DEPTH_BUFFER_BIT,H.NEAREST);ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(J!==0||U.isRenderTargetTexture||mt.has(U)){const Dn=mt.get(U),en=mt.get(nt);ct.bindFramebuffer(H.READ_FRAMEBUFFER,tr),ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,Xs);for(let bn=0;bn<$t;bn++)He?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Dn.__webglTexture,J,ae+bn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Dn.__webglTexture,J),zn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Vt,je+bn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Vt),J!==0?H.blitFramebuffer(fe,ue,Zt,Qt,Ce,we,Zt,Qt,H.COLOR_BUFFER_BIT,H.NEAREST):zn?H.copyTexSubImage3D(pn,Vt,Ce,we,je+bn,fe,ue,Zt,Qt):H.copyTexSubImage2D(pn,Vt,Ce,we,fe,ue,Zt,Qt);ct.bindFramebuffer(H.READ_FRAMEBUFFER,null),ct.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else zn?U.isDataTexture||U.isData3DTexture?H.texSubImage3D(pn,Vt,Ce,we,je,Zt,Qt,$t,de,se,Le.data):nt.isCompressedArrayTexture?H.compressedTexSubImage3D(pn,Vt,Ce,we,je,Zt,Qt,$t,de,Le.data):H.texSubImage3D(pn,Vt,Ce,we,je,Zt,Qt,$t,de,se,Le):U.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Vt,Ce,we,Zt,Qt,de,se,Le.data):U.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Vt,Ce,we,Le.width,Le.height,de,Le.data):H.texSubImage2D(H.TEXTURE_2D,Vt,Ce,we,Zt,Qt,de,se,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ue),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Vn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Mi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,yn),Vt===0&&nt.generateMipmaps&&H.generateMipmap(pn),ct.unbindTexture()},this.copyTextureToTexture3D=function(U,nt,xt=null,St=null,J=0){return Jc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,nt,xt,St,J)},this.initRenderTarget=function(U){mt.get(U).__webglFramebuffer===void 0&&A.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?A.setTextureCube(U,0):U.isData3DTexture?A.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?A.setTexture2DArray(U,0):A.setTexture2D(U,0),ct.unbindTexture()},this.resetState=function(){I=0,P=0,X=null,ct.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ha}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Fe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Fe._getUnpackColorSpace()}}const It=.5,Hy={F:[[-It,It,It],[It,It,It],[It,-It,It],[-It,-It,It]],B:[[It,It,-It],[-It,It,-It],[-It,-It,-It],[It,-It,-It]],R:[[It,It,It],[It,It,-It],[It,-It,-It],[It,-It,It]],L:[[-It,It,-It],[-It,It,It],[-It,-It,It],[-It,-It,-It]],U:[[-It,It,-It],[It,It,-It],[It,It,It],[-It,It,It]],D:[[-It,-It,It],[It,-It,It],[It,-It,-It],[-It,-It,-It]]},hp=["U","R","F","D","L","B"],wC=[[-It,It,It],[It,It,It],[It,It,-It],[-It,It,-It],[-It,-It,It],[It,-It,It],[It,-It,-It],[-It,-It,-It]],DC=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];function UC(s,t){const n=(t%4+4)%4;return n===0?s:n===1?[s[3],s[0],s[1],s[2]]:n===2?[s[2],s[3],s[0],s[1]]:[s[1],s[2],s[3],s[0]]}const Dp={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},LC={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function hu(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function Dr(s){return s.replace("'","").replace("2","")}function NC(s){return s.endsWith("'")&&!s.endsWith("2")}function dp(s){return s.endsWith("2")}function du(s){const t=Dr(s);let n=[...LC[t]];return(t==="L"||t==="D"||t==="B")&&(n=[-n[0],-n[1],-n[2]]),n}function OC(s){if(dp(s))return s;const t=Dr(s);return NC(s)?t:`${t}'`}function FC(s){return OC(s)}const fd=.51;function PC(s){const t=Dp[s];return[t[0]*fd,t[1]*fd,t[2]*fd]}function Up(s,t=3){const n=s.rotationMatrix,a=s.translation,o=[];for(const c of hp){const u=PC(c),h=n[2]*u[0]+n[5]*u[1]+n[8]*u[2]+a[2],p=Dp[c],m=n[6]*p[0]+n[7]*p[1]+n[8]*p[2];h>.02&&m<-.12&&o.push({id:c,score:h*-m})}return o.sort((c,u)=>u.score-c.score).slice(0,t).map(c=>c.id)}function zC(s){const t=s.rotationMatrix,n=s.translation,a=new Qe().set(t[0],t[1],t[2],n[0],t[3],t[4],t[5],n[1],t[6],t[7],t[8],n[2],0,0,0,1),o=new Qe().set(1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1);return new Qe().multiplyMatrices(o,a).invert()}function BC(s,t,n,a){const o=t.cameraFy||n*.9,c=2*Math.atan(a/(2*o));s.fov=c*180/Math.PI,s.aspect=n/a,s.near=.01,s.far=100,s.position.set(0,0,0),s.up.set(0,1,0),s.lookAt(0,0,-1),s.updateProjectionMatrix()}const pp=96,On=pp/3;function IC(s){const t=document.createElement("canvas");t.width=pp,t.height=pp;const n=t.getContext("2d");if(!n)return new r_(t);for(let o=0;o<3;o++)for(let c=0;c<3;c++){const u=s[o*3+c]??"W";n.fillStyle=$o[u],n.fillRect(c*On,(2-o)*On,On,On),n.strokeStyle="rgba(0, 0, 0, 0.35)",n.lineWidth=1,n.strokeRect(c*On+.5,(2-o)*On+.5,On-1,On-1)}const a=new r_(t);return a.colorSpace=li,a.needsUpdate=!0,a}function HC(s,t){const a=s.image.getContext("2d");if(a){for(let o=0;o<3;o++)for(let c=0;c<3;c++){const u=t[o*3+c]??"W";a.fillStyle=$o[u],a.fillRect(c*On,(2-o)*On,On,On),a.strokeStyle="rgba(0, 0, 0, 0.35)",a.lineWidth=1,a.strokeRect(c*On+.5,(2-o)*On+.5,On-1,On-1)}s.needsUpdate=!0}}const GC=16777215,hd=4482696,L_=16763955,VC=16777215,N_=16772676,dd=16724787,kC=16771899,XC=16777215,O_={F:{position:[0,0,.501],rotation:[0,0,0]},B:{position:[0,0,-.501],rotation:[0,Math.PI,0]},R:{position:[.501,0,0],rotation:[0,Math.PI/2,0]},L:{position:[-.501,0,0],rotation:[0,-Math.PI/2,0]},U:{position:[0,.501,0],rotation:[-Math.PI/2,0,0]},D:{position:[0,-.501,0],rotation:[Math.PI/2,0,0]}};class WC{constructor(t,n){ye(this,"renderer");ye(this,"scene");ye(this,"camera");ye(this,"cubeRoot");ye(this,"faceMeshes",new Map);ye(this,"faceTextures",new Map);ye(this,"arrowRoot");ye(this,"trackMesh",null);ye(this,"progressMesh",null);ye(this,"headMesh",null);ye(this,"currentMove",null);ye(this,"traceProgress",0);ye(this,"frameWidth",1);ye(this,"frameHeight",1);ye(this,"faceColorsKey","");ye(this,"guideMode");this.guideMode=(n==null?void 0:n.guideMode)??!1,this.renderer=new CC({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new S1,this.camera=new _i(45,1,.01,100),this.camera.position.set(0,0,0),this.scene.add(new X1(16777215,1.15)),this.cubeRoot=new Cs,this.buildCubeWireframe(),this.buildFacePlanes(),this.scene.add(this.cubeRoot),this.arrowRoot=new Cs,this.cubeRoot.add(this.arrowRoot)}resize(t,n,a,o){this.frameWidth=a,this.frameHeight=o,this.renderer.setSize(t,n,!1)}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.highlightMoveFace(t?Dr(t):null),this.rebuildArrow(t))}setRotationProgress(t){const n=Math.max(0,Math.min(1,t));Math.abs(n-this.traceProgress)<.008||(this.traceProgress=n,this.updateArrowProgress())}setFaceColors(t,n){if(this.guideMode)return;const a={...n};for(const[c,u]of Object.entries(t))u.length===9&&(a[c]=u);const o=JSON.stringify(a);if(o!==this.faceColorsKey){this.faceColorsKey=o;for(const[c,u]of this.faceMeshes){const h=a[c],p=u.material;if(!h||h.length!==9){p.map=null,p.color.setHex(hd),p.opacity=.14,p.needsUpdate=!0;continue}let m=this.faceTextures.get(c);m?HC(m,h):(m=IC(h),this.faceTextures.set(c,m)),p.map=m,p.color.setHex(16777215),p.opacity=.92,p.needsUpdate=!0}}}render(t,n=!0){if(!t){this.renderer.render(this.scene,this.camera);return}BC(this.camera,t,this.frameWidth,this.frameHeight);const a=zC(t);this.cubeRoot.matrixAutoUpdate=!1,this.cubeRoot.matrix.copy(a),this.cubeRoot.matrixWorldNeedsUpdate=!0;const o=Up(t);for(const[u,h]of this.faceMeshes)h.visible=o.includes(u);const c=this.currentMove?Dr(this.currentMove):null;if(this.arrowRoot.visible=!!(this.currentMove&&(this.guideMode||n)),c&&this.highlightMoveFace(c),this.guideMode)for(const[u,h]of this.faceMeshes)h.visible=u===c&&o.includes(u);this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.faceTextures.values())t.dispose();this.faceTextures.clear(),this.renderer.dispose(),this.cubeRoot.traverse(kc)}buildCubeWireframe(){const t=wC.map(u=>new $(u[0],u[1],u[2])),n=[];for(const[u,h]of DC)n.push(t[u].x,t[u].y,t[u].z),n.push(t[h].x,t[h].y,t[h].z);const a=new yi;a.setAttribute("position",new gn(n,3));const o=new Dy({color:this.guideMode?XC:GC,transparent:!0,opacity:this.guideMode?.55:.95,linewidth:2,depthWrite:!1}),c=new Uy(a,o);this.cubeRoot.add(c)}buildFacePlanes(){const t=new sl(.98,.98);for(const n of Object.keys(O_)){const a=O_[n],o=new Ar({color:hd,transparent:!0,opacity:.14,side:zi,depthWrite:!1}),c=new Fn(t.clone(),o);c.position.set(...a.position),c.rotation.set(...a.rotation),c.userData.faceId=n,c.visible=!1,this.faceMeshes.set(n,c),this.cubeRoot.add(c)}}highlightMoveFace(t){for(const[n,a]of this.faceMeshes){const o=a.material;if(this.guideMode){n===t?(o.map=null,o.color.setHex(L_),o.opacity=.22):o.opacity=0,o.needsUpdate=!0;continue}o.map?n===t?o.opacity=.98:o.opacity=.82:n===t?(o.color.setHex(L_),o.opacity=.35):(o.color.setHex(hd),o.opacity=.14)}}rebuildArrow(t){if(this.clearArrow(),!t)return;const n=this.guideMode?FC(t):t,a=Dr(t),o=new $(...du(n)).normalize(),{ref:c,perp:u}=qC(o),h=this.guideMode?.42:.36,p=hu(n),m=p<0?p:0,g=p<0?0:p,v=48,_=new $(...Dp[a]).normalize(),x=_.clone().multiplyScalar(.545),b=[];for(let D=0;D<=v;D++){const w=m+(g-m)*D/v;b.push(YC(c,u,h,w).add(x))}this.arrowRoot.userData={fullPoints:b,segments:v,startAngle:m,endAngle:g,radius:h,ref:c,perp:u,surface:x};const T=new up(b),M=this.guideMode?.045:.028,y=new lu(T,v,M,10,!1),O=new Ar({color:this.guideMode?dd:VC,transparent:!0,opacity:this.guideMode?.92:.35,depthWrite:!1});if(this.trackMesh=new Fn(y,O),this.arrowRoot.add(this.trackMesh),this.guideMode&&!dp(n)){const D=b[b.length-1],w=b[b.length-2]??D,q=new $().subVectors(D,w).normalize(),I=new Fn(new ou(.12,.26,14),new Ar({color:dd,transparent:!0,opacity:.98,depthWrite:!1}));I.position.copy(D),I.quaternion.setFromUnitVectors(new $(0,1,0),q),this.arrowRoot.add(I)}if(dp(n)){const D=new Fn(new Rp(this.guideMode?.12:.09,24),new Ar({color:this.guideMode?dd:N_,transparent:!0,opacity:.95,depthWrite:!1}));D.position.copy(x),D.lookAt(x.clone().add(_)),this.arrowRoot.add(D)}this.updateArrowProgress()}updateArrowProgress(){if(!this.currentMove||!this.arrowRoot.userData.fullPoints)return;this.progressMesh&&(this.arrowRoot.remove(this.progressMesh),kc(this.progressMesh),this.progressMesh=null),this.headMesh&&(this.arrowRoot.remove(this.headMesh),kc(this.headMesh),this.headMesh=null);const{fullPoints:t,segments:n,startAngle:a,endAngle:o}=this.arrowRoot.userData,c=a+(o-a)*this.traceProgress;if(!this.guideMode&&Math.abs(c-a)<.04)return;const u=Math.max(2,Math.floor(n*Math.max(this.guideMode?.05:0,this.traceProgress))),h=t.slice(0,u+1);if(h.length<2)return;const p=new up(h),m=this.guideMode?.058:.052,g=new lu(p,u,m,10,!1),v=new Ar({color:this.guideMode?kC:N_,transparent:!0,opacity:.98,depthWrite:!1});this.progressMesh=new Fn(g,v),this.arrowRoot.add(this.progressMesh);const _=h[h.length-1],x=h[h.length-2]??_,b=new $().subVectors(_,x).normalize(),T=new Fn(new ou(this.guideMode?.13:.1,this.guideMode?.28:.22,12),v.clone());T.position.copy(_),T.quaternion.setFromUnitVectors(new $(0,1,0),b),this.headMesh=T,this.arrowRoot.add(T)}clearArrow(){for(this.trackMesh=null,this.progressMesh=null,this.headMesh=null;this.arrowRoot.children.length>0;){const t=this.arrowRoot.children[0];this.arrowRoot.remove(t),kc(t)}}}function qC(s){let t=new $(0,1,0);Math.abs(s.dot(t))>.9&&t.set(0,0,1);const n=new $().crossVectors(s,t).normalize();return t=new $().crossVectors(n,s).normalize(),{ref:t,perp:n}}function YC(s,t,n,a){return s.clone().multiplyScalar(Math.cos(a)*n).add(t.clone().multiplyScalar(Math.sin(a)*n))}function kc(s){s.traverse(t=>{(t instanceof Fn||t instanceof Uy)&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}function jC(s){if(s.length<4)return null;const t=[...s].sort((o,c)=>o.y-c.y),n=t.slice(0,2).sort((o,c)=>o.x-c.x),a=t.slice(2,4).sort((o,c)=>o.x-c.x);return[n[0],n[1],a[1],a[0]]}function Lp(s,t){const n=s*.9,a=s*.9,o=s/2,c=t/2;return{fx:n,fy:a,cx:o,cy:c}}function Gy(s,t,n,a=null){try{return ZC(s,t,n,a)}catch{return Vy(s,t,n,a)}}function Vy(s,t,n,a){const o={x:s.reduce((g,v)=>g+v.x,0)/4,y:s.reduce((g,v)=>g+v.y,0)/4},c=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2,{fx:u,fy:h,cx:p,cy:m}=Lp(t,n);return{corners:s,center:o,size:c,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[0,0,c*3],confidence:.55,visibleFace:a,cameraFx:u,cameraFy:h,cameraCx:p,cameraCy:m}}function ZC(s,t,n,a){const{fx:o,fy:c,cx:u,cy:h}=Lp(t,n),p=a?[a,...hp.filter(v=>v!==a)]:hp;let m=null,g=1/0;for(const v of p){const _=Hy[v];for(let x=0;x<4;x++){const b=UC(s,x),T=KC(_,b,v,o,c,u,h);if(!T)continue;const M=QC(_,T,b,o,c,u,h);M<g&&(g=M,m={...T,confidence:Math.max(.5,1-M/40)})}}return m||Vy(s,t,n,a)}function KC(s,t,n,a,o,c,u){const h=window.cv,p=h.matFromArray(4,1,h.CV_32FC1,s.flat()),m=h.matFromArray(4,1,h.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),g=h.matFromArray(3,3,h.CV_32FC1,[a,0,c,0,o,u,0,0,1]),v=h.matFromArray(4,1,h.CV_32FC1,[0,0,0,0]),_=new h.Mat,x=new h.Mat,b=new h.Mat;h.solvePnP(p,m,g,v,_,x),h.Rodrigues(_,b);const T=[];for(let D=0;D<9;D++)T.push(b.data32F[D]??b.floatAt(Math.floor(D/3),D%3));const M=[x.data32F[0]??x.floatAt(0,0),x.data32F[1]??x.floatAt(1,0),x.data32F[2]??x.floatAt(2,0)],y={x:t.reduce((D,w)=>D+w.x,0)/4,y:t.reduce((D,w)=>D+w.y,0)/4},O=(Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y)+Math.hypot(t[2].x-t[3].x,t[2].y-t[3].y))/2;return p.delete(),m.delete(),g.delete(),v.delete(),_.delete(),x.delete(),b.delete(),{corners:t,center:y,size:O,rotationMatrix:T,translation:M,confidence:.8,visibleFace:n,cameraFx:a,cameraFy:o,cameraCx:c,cameraCy:u}}function QC(s,t,n,a,o,c,u){const h=t.rotationMatrix,p=t.translation;let m=0;for(let g=0;g<4;g++){const v=s[g],_=h[0]*v[0]+h[1]*v[1]+h[2]*v[2]+p[0],x=h[3]*v[0]+h[4]*v[1]+h[5]*v[2]+p[1],b=h[6]*v[0]+h[7]*v[1]+h[8]*v[2]+p[2];if(b<1e-4)return 1/0;const T=a*_/b+c,M=o*x/b+u;m+=Math.hypot(T-n[g].x,M-n[g].y)}return m/4}function JC(s,t,n,a,o,c,u){const h=t[0]*s[0]+t[1]*s[1]+t[2]*s[2]+n[0],p=t[3]*s[0]+t[4]*s[1]+t[5]*s[2]+n[1],m=t[6]*s[0]+t[7]*s[1]+t[8]*s[2]+n[2];return m<.02?null:{x:a*h/m+c,y:o*p/m+u}}function ky(s,t,n,a){const o=Hy[s],{fx:c,fy:u,cx:h,cy:p}=Lp(n,a),m=t.cameraFx??c,g=t.cameraFy??u,v=t.cameraCx??h,_=t.cameraCy??p,x=[];for(const b of o){const T=JC(b,t.rotationMatrix,t.translation,m,g,v,_);if(!T||T.x<-40||T.y<-40||T.x>n+40||T.y>a+40)return null;x.push(T)}return x}function F_(s){const[t,n,a,o]=s;return(Math.hypot(n.x-t.x,n.y-t.y)+Math.hypot(a.x-o.x,a.y-o.y))/2}function Np(s,t,n){const a=s.visibleFace;if(!a)return s;const o=ky(a,s,t,n);if(!o)return s;const c=F_(s.corners),u=F_(o);if(u<8||c<8)return s;const h=c/u;if(h<.25||h>4)return s;const p=s.translation;return{...s,translation:[p[0]/h,p[1]/h,p[2]/h],size:s.size*h}}function $C({pose:s,move:t,rotationProgress:n,frameWidth:a,frameHeight:o,viewportWidth:c,viewportHeight:u,active:h}){const p=Jt.useRef(null),m=Jt.useRef(null),g=Jt.useRef(s),v=Jt.useRef(t),_=Jt.useRef(n),x=Jt.useRef(null),b=Jt.useRef(0);g.current=s,v.current=t,_.current=n,s?(x.current=s,b.current=0):x.current&&(b.current++,b.current>120&&(x.current=null));const T=Jt.useMemo(()=>{if(!a||!o||!c||!u)return null;const{scale:y,offsetX:O,offsetY:D}=ty(a,o,c,u);return{left:O,top:D,width:a*y,height:o*y}},[a,o,c,u]);Jt.useEffect(()=>{const y=p.current;if(!y)return;const O=new WC(y,{guideMode:!0});return m.current=O,()=>{O.dispose(),m.current=null}},[]),Jt.useEffect(()=>{var y;T&&((y=m.current)==null||y.resize(T.width,T.height,a,o))},[T,a,o]),Jt.useEffect(()=>{var y;(y=m.current)==null||y.setMove(t)},[t]),Jt.useEffect(()=>{var y;(y=m.current)==null||y.setRotationProgress(n)},[n]),Jt.useEffect(()=>{if(!h)return;let y=0;const O=()=>{var w,q;const D=g.current??x.current;if(D&&a&&o){const I=Np(D,a,o);(w=m.current)==null||w.render(I,!0)}else(q=m.current)==null||q.render(null);y=requestAnimationFrame(O)};return y=requestAnimationFrame(O),()=>cancelAnimationFrame(y)},[h,a,o]);const M=T?{left:`${T.left}px`,top:`${T.top}px`,width:`${T.width}px`,height:`${T.height}px`}:void 0;return Gt.jsx("canvas",{ref:p,className:`solving-cube-ar-overlay${h?" active":""}`,style:M,"aria-hidden":"true"})}function t2(s){return s==="locked"?"인식":s==="scanning"?"스캔":"없음"}function e2({visible:s,tracking:t,faceScanInfos:n,onSkip:a}){if(!s)return null;const o=n.filter(p=>p.status==="locked").length,c=n.filter(p=>p.status==="scanning").length,u=3,h=o>=3?"solving-face-status--all-locked":t==="lost"?"solving-face-status--lost":o>=2?"solving-face-status--partial":"solving-face-status--searching";return Gt.jsxs("div",{className:`solving-face-status ${h}`,"aria-live":"polite",children:[Gt.jsxs("div",{className:"solving-face-status-header",children:[Gt.jsx("span",{className:"solving-face-status-title",children:"3면 추적"}),Gt.jsxs("span",{className:"solving-face-status-summary",children:[o,"/",u," 인식됨",c>0?` · ${c} 스캔 중`:"",t==="lost"?" · 큐브를 중앙에 맞춰주세요":""]}),a&&Gt.jsx("button",{type:"button",className:"solving-face-status-skip",onClick:a,children:"Skip"})]}),Gt.jsx("div",{className:"solving-face-status-chips",children:n.map(p=>Gt.jsxs("div",{className:`solving-face-chip solving-face-chip--${p.status}`,children:[Gt.jsx("span",{className:"solving-face-chip-id",children:p.faceId}),Gt.jsx("span",{className:"solving-face-chip-state",children:t2(p.status)}),p.status!=="missing"&&Gt.jsxs("span",{className:"solving-face-chip-score",children:[Math.round(p.matchScore*100),"%"]}),Gt.jsx("div",{className:"solving-face-chip-bar",style:{"--match":`${Math.round(p.matchScore*100)}%`}})]},p.faceId))})]})}function P_({message:s="Loading…",overlay:t=!1}){return Gt.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[Gt.jsx("div",{className:"loading-spinner"}),Gt.jsx("p",{children:s})]})}function n2({visible:s,feedback:t,onStart:n}){const a=t.status==="detected"&&t.cellColors.length===9;return iy(n,s),s?Gt.jsx("div",{className:"scan-ready-overlay","aria-live":"polite",children:Gt.jsxs("div",{className:"scan-ready-panel",children:[Gt.jsx("p",{className:"scan-ready-hint",children:a?"Cube detected":"Align cube in guide"}),Gt.jsx("button",{type:"button",className:"capture-button",onClick:n,children:"Start scan"})]})}):null}function i2({phase:s,currentStep:t,totalSteps:n}){return s!=="solving"||n===0?null:Gt.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",n]})}function a2(s){const t=["U","R","F","D","L","B"];let n="";for(const a of t){const o=s.get(a);if(!o||o.length!==9)throw new Error(`Missing face data for ${a}`);for(const c of o)n+=r2(c)}return n}function r2(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function s2(s,t){const n=new Array(9).fill(0);for(let a=0;a<3;a++)for(let o=0;o<3;o++){let c=0;for(let u=0;u<3;u++)c+=s[a*3+u]*t[u*3+o];n[a*3+o]=c}return n}function z_(){return[1,0,0,0,1,0,0,0,1]}function o2(s,t){const[n,a,o]=s,c=Math.hypot(n,a,o)||1,u=n/c,h=a/c,p=o/c,m=Math.cos(t),g=Math.sin(t),v=1-m;return[v*u*u+m,v*u*h-g*p,v*u*p+g*h,v*u*h+g*p,v*h*h+m,v*h*p-g*u,v*u*p-g*h,v*h*p+g*u,v*p*p+m]}var tu={exports:{}},l2=tu.exports,B_;function Xy(){return B_||(B_=1,(function(s){(function(){var t,n,a,o,c,u,h,p,m,g,v,_,x,b,T,M,y,O,D,w,q,I,P,X,L,C,k,ut,ot,_t,bt,B,st;[D,O,b,c,y,t]=[0,1,2,3,4,5],[k,P,L,q,m,v,h,x]=[0,1,2,3,4,5,6,7],[C,I,X,w,_,p,g,u,M,T,n,a]=[0,1,2,3,4,5,6,7,8,9,10,11],[ot,bt,st]=(function(){var K,Rt,Nt,N,at,tt;return tt=function(z){return z-1},at=function(z){return tt(9)+z},Nt=function(z){return at(9)+z},Rt=function(z){return Nt(9)+z},N=function(z){return Rt(9)+z},K=function(z){return N(9)+z},[[4,13,22,31,40,49],[[tt(9),at(1),Nt(3)],[tt(7),Nt(1),N(3)],[tt(1),N(1),K(3)],[tt(3),K(1),at(3)],[Rt(3),Nt(9),at(7)],[Rt(1),N(9),Nt(7)],[Rt(7),K(9),N(7)],[Rt(9),at(9),K(7)]],[[tt(6),at(2)],[tt(8),Nt(2)],[tt(4),N(2)],[tt(2),K(2)],[Rt(6),at(8)],[Rt(2),Nt(8)],[Rt(4),N(8)],[Rt(8),K(8)],[Nt(6),at(4)],[Nt(4),N(6)],[K(6),N(4)],[K(4),at(6)]]]})(),ut=["U","R","F","D","L","B"],_t=[["U","R","F"],["U","F","L"],["U","L","B"],["U","B","R"],["D","F","R"],["D","L","F"],["D","B","L"],["D","R","B"]],B=[["U","R"],["U","F"],["U","L"],["U","B"],["D","R"],["D","F"],["D","L"],["D","B"],["F","R"],["F","L"],["B","L"],["B","R"]],o=(function(){var K,Rt,Nt;class N{constructor(tt){tt!=null?this.init(tt):this.identity(),this.newCenter=(function(){var z,F;for(F=[],z=0;z<=5;++z)F.push(0);return F})(),this.newCp=(function(){var z,F;for(F=[],z=0;z<=7;++z)F.push(0);return F})(),this.newEp=(function(){var z,F;for(F=[],z=0;z<=11;++z)F.push(0);return F})(),this.newCo=(function(){var z,F;for(F=[],z=0;z<=7;++z)F.push(0);return F})(),this.newEo=(function(){var z,F;for(F=[],z=0;z<=11;++z)F.push(0);return F})()}init(tt){return this.center=tt.center.slice(0),this.co=tt.co.slice(0),this.ep=tt.ep.slice(0),this.cp=tt.cp.slice(0),this.eo=tt.eo.slice(0)}identity(){return this.center=[0,1,2,3,4,5],this.cp=[0,1,2,3,4,5,6,7],this.co=(function(){var tt,z;for(z=[],tt=0;tt<=7;++tt)z.push(0);return z})(),this.ep=[0,1,2,3,4,5,6,7,8,9,10,11],this.eo=(function(){var tt,z;for(z=[],tt=0;tt<=11;++tt)z.push(0);return z})()}toJSON(){return{center:this.center,cp:this.cp,co:this.co,ep:this.ep,eo:this.eo}}asString(){var tt,z,F,Y,W,vt,wt,Ft,Ot,Ht,kt;for(kt=[],F=Y=0;Y<=5;F=++Y)kt[9*F+4]=ut[this.center[F]];for(F=W=0;W<=7;F=++W)for(tt=this.cp[F],Ot=this.co[F],wt=vt=0;vt<=2;wt=++vt)kt[bt[F][(wt+Ot)%3]]=_t[tt][wt];for(F=Ft=0;Ft<=11;F=++Ft)for(z=this.ep[F],Ot=this.eo[F],wt=Ht=0;Ht<=1;wt=++Ht)kt[st[F][(wt+Ot)%2]]=B[z][wt];return kt.join("")}static fromString(tt){var z,F,Y,W,vt,wt,Ft,Ot,Ht,kt,H,xe,ee,dt;for(Y=new N,W=wt=0;wt<=5;W=++wt)for(vt=Ft=0;Ft<=5;vt=++Ft)tt[9*W+4]===ut[vt]&&(Y.center[W]=vt);for(W=Ot=0;Ot<=7;W=++Ot){for(kt=Ht=0;Ht<=2&&!((dt=tt[bt[W][kt]])==="U"||dt==="D");kt=++Ht);for(z=tt[bt[W][(kt+1)%3]],F=tt[bt[W][(kt+2)%3]],vt=H=0;H<=7;vt=++H)z===_t[vt][1]&&F===_t[vt][2]&&(Y.cp[W]=vt,Y.co[W]=kt%3)}for(W=xe=0;xe<=11;W=++xe)for(vt=ee=0;ee<=11;vt=++ee){if(tt[st[W][0]]===B[vt][0]&&tt[st[W][1]]===B[vt][1]){Y.ep[W]=vt,Y.eo[W]=0;break}if(tt[st[W][0]]===B[vt][1]&&tt[st[W][1]]===B[vt][0]){Y.ep[W]=vt,Y.eo[W]=1;break}}return Y}clone(){return new N(this.toJSON())}static random(){return new N().randomize()}isSolved(){var tt,z,F,Y,W,vt,wt;for(F=this.clone(),F.move(F.upright()),z=W=0;W<=5;z=++W)if(F.center[z]!==z)return!1;for(tt=vt=0;vt<=7;tt=++vt)if(F.cp[tt]!==tt||F.co[tt]!==0)return!1;for(Y=wt=0;wt<=11;Y=++wt)if(F.ep[Y]!==Y||F.eo[Y]!==0)return!1;return!0}centerMultiply(tt){var z,F,Y;for(Y=F=0;F<=5;Y=++F)z=tt.center[Y],this.newCenter[Y]=this.center[z];return[this.center,this.newCenter]=[this.newCenter,this.center],this}cornerMultiply(tt){var z,F,Y;for(Y=F=0;F<=7;Y=++F)z=tt.cp[Y],this.newCp[Y]=this.cp[z],this.newCo[Y]=(this.co[z]+tt.co[Y])%3;return[this.cp,this.newCp]=[this.newCp,this.cp],[this.co,this.newCo]=[this.newCo,this.co],this}edgeMultiply(tt){var z,F,Y;for(Y=F=0;F<=11;Y=++F)z=tt.ep[Y],this.newEp[Y]=this.ep[z],this.newEo[Y]=(this.eo[z]+tt.eo[Y])%2;return[this.ep,this.newEp]=[this.newEp,this.ep],[this.eo,this.newEo]=[this.newEo,this.eo],this}multiply(tt){return this.centerMultiply(tt),this.cornerMultiply(tt),this.edgeMultiply(tt),this}move(tt){var z,F,Y,W,vt,wt,Ft,Ot;for(Ft=Nt(tt),F=0,W=Ft.length;F<W;F++)for(vt=Ft[F],z=vt/3|0,wt=vt%3,Y=0,Ot=wt;0<=Ot?Y<=Ot:Y>=Ot;0<=Ot?++Y:--Y)this.multiply(N.moves[z]);return this}upright(){var tt,z,F,Y,W,vt;for(tt=this.clone(),vt=[],z=Y=0;Y<=5&&tt.center[z]!==b;z=++Y);switch(z){case c:vt.push("x");break;case D:vt.push("x'");break;case t:vt.push("x2");break;case O:vt.push("y");break;case y:vt.push("y'")}for(vt.length&&tt.move(vt[0]),F=W=0;W<=5&&tt.center[F]!==D;F=++W);switch(F){case y:vt.push("z");break;case O:vt.push("z'");break;case c:vt.push("z2")}return vt.join(" ")}static inverse(tt){var z,F,Y,W,vt,wt,Ft;if(wt=(function(){var Ot,Ht,kt,H;for(kt=Nt(tt),H=[],Ot=0,Ht=kt.length;Ot<Ht;Ot++)W=kt[Ot],z=W/3|0,vt=W%3,H.push(z*3+-(vt-1)+1);return H})(),wt.reverse(),typeof tt=="string"){for(Ft="",F=0,Y=wt.length;F<Y;F++)W=wt[F],z=W/3|0,vt=W%3,Ft+=K[z],vt===1?Ft+="2":vt===2&&(Ft+="'"),Ft+=" ";return Ft.substring(0,Ft.length-1)}else return tt.length!=null?wt:wt[0]}}return N.prototype.randomize=(function(){var at,tt,z,F,Y,W,vt,wt,Ft;return W=function(Ot,Ht){return Ot+Math.floor(Math.random()*(Ht-Ot+1))},Ft=function(Ot){var Ht,kt;for(Ht=Ot.length;Ht!==0;)kt=W(0,Ht-1),Ht-=1,Ot[Ht],[Ot[Ht],Ot[kt]]=[Ot[kt],Ot[Ht]]},F=function(Ot){var Ht,kt,H,xe,ee,dt,ct;for(ee=0,ct=(function(){var Tt,mt,A;for(A=[],Tt=0,mt=Ot.length-1;0<=mt?Tt<=mt:Tt>=mt;0<=mt?++Tt:--Tt)A.push(!1);return A})();;){for(Ht=-1,H=xe=0,dt=Ot.length-1;0<=dt?xe<=dt:xe>=dt;H=0<=dt?++xe:--xe)if(!ct[H]){Ht=H;break}if(Ht===-1)break;for(kt=0;!ct[Ht];)ct[Ht]=!0,kt++,Ht=Ot[Ht];ee+=kt+1}return ee},at=function(Ot,Ht){var kt;return kt=F(Ht)+F(Ot),kt%2===0},z=function(Ot,Ht){for(Ft(Ht),Ft(Ot);!at(Ot,Ht);)Ft(Ht),Ft(Ot)},vt=function(Ot,Ht){var kt,H,xe,ee;for(xe=0,kt=H=0,ee=Ot.length-1;0<=ee?H<=ee:H>=ee;kt=0<=ee?++H:--H)xe+=Ot[kt]=W(0,Ht-1)},Y=function(Ot,Ht){return Ot.reduce(function(kt,H){return kt+H})%Ht===0},tt=function(Ot,Ht){for(vt(Ot,3);!Y(Ot,3);)vt(Ot,3);for(vt(Ht,2);!Y(Ht,2);)vt(Ht,2)},wt=function(){return z(this.cp,this.ep),tt(this.co,this.eo),this},wt})(),N.moves=[{center:[0,1,2,3,4,5],cp:[q,k,P,L,m,v,h,x],co:[0,0,0,0,0,0,0,0],ep:[w,C,I,X,_,p,g,u,M,T,n,a],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[m,P,L,k,x,v,h,q],co:[2,0,0,1,1,0,0,2],ep:[M,I,X,w,a,p,g,u,_,T,n,C],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[P,v,L,q,k,m,h,x],co:[1,2,0,0,2,1,0,0],ep:[C,T,X,w,_,M,g,u,I,p,n,a],eo:[0,1,0,0,0,1,0,0,1,1,0,0]},{center:[0,1,2,3,4,5],cp:[k,P,L,q,v,h,x,m],co:[0,0,0,0,0,0,0,0],ep:[C,I,X,w,p,g,u,_,M,T,n,a],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[k,L,h,q,m,P,v,x],co:[0,1,2,0,0,2,1,0],ep:[C,I,n,w,_,p,T,u,M,X,g,a],eo:[0,0,0,0,0,0,0,0,0,0,0,0]},{center:[0,1,2,3,4,5],cp:[k,P,q,x,m,v,L,h],co:[0,0,1,2,0,0,2,1],ep:[C,I,X,a,_,p,g,n,M,T,w,u],eo:[0,0,0,1,0,0,0,1,0,0,1,1]},{center:[D,b,y,c,t,O],cp:[k,P,L,q,m,v,h,x],co:[0,0,0,0,0,0,0,0],ep:[C,I,X,w,_,p,g,u,T,n,a,M],eo:[0,0,0,0,0,0,0,0,1,1,1,1]},{center:[t,O,D,b,y,c],cp:[k,P,L,q,m,v,h,x],co:[0,0,0,0,0,0,0,0],ep:[C,w,X,u,_,I,g,p,M,T,n,a],eo:[0,1,0,1,0,1,0,1,0,0,0,0]},{center:[y,D,b,O,c,t],cp:[k,P,L,q,m,v,h,x],co:[0,0,0,0,0,0,0,0],ep:[X,I,g,w,C,p,_,u,M,T,n,a],eo:[1,0,1,0,1,0,1,0,0,0,0,0]}],Rt={U:0,R:1,F:2,D:3,L:4,B:5,E:6,M:7,S:8,x:9,y:10,z:11,u:12,r:13,f:14,d:15,l:16,b:17},K={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B",6:"E",7:"M",8:"S",9:"x",10:"y",11:"z",12:"u",13:"r",14:"f",15:"d",16:"l",17:"b"},Nt=function(at){var tt,z,F,Y,W,vt,wt;if(typeof at=="string"){for(vt=at.split(/\s+/),wt=[],tt=0,z=vt.length;tt<z;tt++)if(Y=vt[tt],Y.length!==0){if(Y.length>2)throw new Error(`Invalid move: ${Y}`);if(F=Rt[Y[0]],F===void 0)throw new Error(`Invalid move: ${Y}`);if(Y.length===1)W=0;else if(Y[1]==="2")W=1;else if(Y[1]==="'")W=2;else throw new Error(`Invalid move: ${Y}`);wt.push(F*3+W)}return wt}else return at.length!=null?at:[at]},N.moves.push(new N().move("R M' L'").toJSON()),N.moves.push(new N().move("U E' D'").toJSON()),N.moves.push(new N().move("F S B'").toJSON()),N.moves.push(new N().move("U E'").toJSON()),N.moves.push(new N().move("R M'").toJSON()),N.moves.push(new N().move("F S").toJSON()),N.moves.push(new N().move("D E").toJSON()),N.moves.push(new N().move("L M").toJSON()),N.moves.push(new N().move("B S'").toJSON()),N}).call(this),s!==null?s.exports=o:this.Cube=o}).call(l2)})(tu)),tu.exports}var pd={},I_;function c2(){return I_||(I_=1,(function(){var s,t,n,a,o,c,u,h,p,m,g,v,_,x,b,T,M,y,O,D,w,q,I,P,X,L,C,k,ut,ot,_t,bt,B,st,K,Rt,Nt,N,at,tt,z,F,Y,W,vt,wt,Ft,Ot,Ht,kt,H,xe,ee=[].indexOf;a=this.Cube||Xy(),[B,ut,_t,C,h,m,c,v]=[0,1,2,3,4,5,6,7],[bt,k,ot,L,g,u,p,o,x,_,s,t]=[0,1,2,3,4,5,6,7,8,9,10,11],n=function(dt,ct){var Tt,mt,A;if(dt<ct)return 0;for(ct>dt/2&&(ct=dt-ct),A=1,Tt=dt,mt=1;Tt!==dt-ct;)A*=Tt,A/=mt,Tt--,mt++;return A},tt=function(dt){var ct,Tt,mt,A;for(ct=1,Tt=mt=2,A=dt;2<=A?mt<=A:mt>=A;Tt=2<=A?++mt:--mt)ct*=Tt;return ct},F=function(dt,ct){return dt>ct?dt:ct},kt=function(dt,ct,Tt){var mt,A,E,G,Q;for(Q=dt[ct],mt=A=E=ct,G=Tt-1;E<=G?A<=G:A>=G;mt=E<=G?++A:--A)dt[mt]=dt[mt+1];return dt[Tt]=Q},H=function(dt,ct,Tt){var mt,A,E,G,Q;for(Q=dt[Tt],mt=A=E=Tt,G=ct+1;E<=G?A<=G:A>=G;mt=E<=G?++A:--A)dt[mt]=dt[mt-1];return dt[ct]=Q},Ft=function(dt,ct,Tt,mt=!1){var A,E,G,Q,pt,yt;return Q=Tt-ct,G=tt(Q+1),dt==="corners"?(E=7,yt="cp"):(E=11,yt="ep"),pt=(function(){var Lt,rt,et;for(et=[],A=Lt=0,rt=Q;0<=rt?Lt<=rt:Lt>=rt;A=0<=rt?++Lt:--Lt)et.push(0);return et})(),function(Lt){var rt,et,Pt,lt,zt,Xt,Wt,Bt,ne,oe,be,Z,qt,Et,Dt,jt,Yt,le,We,Ye,Te,$e,Mn,xi,ln,wn,Jn;if(Lt!=null){for(A=Xt=0,be=Q;0<=be?Xt<=be:Xt>=be;A=0<=be?++Xt:--Xt)pt[A]=A+ct;for(et=Lt%G,rt=Lt/G|0,ne=this[yt],A=Wt=0,Z=E;0<=Z?Wt<=Z:Wt>=Z;A=0<=Z?++Wt:--Wt)ne[A]=-1;for(lt=Bt=1,Et=Q;1<=Et?Bt<=Et:Bt>=Et;lt=1<=Et?++Bt:--Bt)for(zt=et%(lt+1),et=et/(lt+1)|0;zt>0;)H(pt,0,lt),zt--;if(ln=Q,mt)for(lt=oe=0,Dt=E;0<=Dt?oe<=Dt:oe>=Dt;lt=0<=Dt?++oe:--oe)Pt=n(E-lt,ln+1),rt-Pt>=0&&(ne[lt]=pt[Q-ln],rt-=Pt,ln--);else for(lt=$e=jt=E;jt<=0?$e<=0:$e>=0;lt=jt<=0?++$e:--$e)Pt=n(lt,ln+1),rt-Pt>=0&&(ne[lt]=pt[ln],rt-=Pt,ln--);return this}else{for(ne=this[yt],A=Mn=0,Yt=Q;0<=Yt?Mn<=Yt:Mn>=Yt;A=0<=Yt?++Mn:--Mn)pt[A]=-1;if(rt=et=ln=0,mt)for(lt=xi=le=E;le<=0?xi<=0:xi>=0;lt=le<=0?++xi:--xi)ct<=(We=ne[lt])&&We<=Tt&&(rt+=n(E-lt,ln+1),pt[Q-ln]=ne[lt],ln++);else for(lt=wn=0,Ye=E;0<=Ye?wn<=Ye:wn>=Ye;lt=0<=Ye?++wn:--wn)ct<=(Te=ne[lt])&&Te<=Tt&&(rt+=n(lt,ln+1),pt[ln]=ne[lt],ln++);for(lt=Jn=qt=Q;qt<=0?Jn<=0:Jn>=0;lt=qt<=0?++Jn:--Jn){for(zt=0;pt[lt]!==ct+lt;)kt(pt,0,lt),zt++;et=(lt+1)*et+zt}return rt*G+et}}},b={twist:function(dt){var ct,Tt,mt,A,E,G;if(dt!=null){for(E=0,ct=Tt=6;Tt>=0;ct=--Tt)A=dt%3,dt=dt/3|0,this.co[ct]=A,E+=A;return this.co[7]=(3-E%3)%3,this}else{for(G=0,ct=mt=0;mt<=6;ct=++mt)G=3*G+this.co[ct];return G}},flip:function(dt){var ct,Tt,mt,A,E,G;if(dt!=null){for(E=0,ct=Tt=10;Tt>=0;ct=--Tt)A=dt%2,dt=dt/2|0,this.eo[ct]=A,E+=A;return this.eo[11]=(2-E%2)%2,this}else{for(G=0,ct=mt=0;mt<=10;ct=++mt)G=2*G+this.eo[ct];return G}},cornerParity:function(){var dt,ct,Tt,mt,A,E,G,Q,pt;for(pt=0,dt=Tt=A=v,E=B+1;A<=E?Tt<=E:Tt>=E;dt=A<=E?++Tt:--Tt)for(ct=mt=G=dt-1,Q=B;G<=Q?mt<=Q:mt>=Q;ct=G<=Q?++mt:--mt)this.cp[ct]>this.cp[dt]&&pt++;return pt%2},edgeParity:function(){var dt,ct,Tt,mt,A,E,G,Q,pt;for(pt=0,dt=Tt=A=t,E=bt+1;A<=E?Tt<=E:Tt>=E;dt=A<=E?++Tt:--Tt)for(ct=mt=G=dt-1,Q=bt;G<=Q?mt<=Q:mt>=Q;ct=G<=Q?++mt:--mt)this.ep[ct]>this.ep[dt]&&pt++;return pt%2},URFtoDLF:Ft("corners",B,m),URtoUL:Ft("edges",bt,ot),UBtoDF:Ft("edges",L,u),URtoDF:Ft("edges",bt,u),FRtoBR:Ft("edges",x,t,!0)};for(z in b)xe=b[z],a.prototype[z]=xe;Rt=function(dt,ct,Tt){var mt,A,E,G,Q,pt,yt,Lt,rt,et,Pt;for(mt=dt==="corners"?"cornerMultiply":"edgeMultiply",A=new a,Pt=[],E=pt=0,et=Tt-1;0<=et?pt<=et:pt>=et;E=0<=et?++pt:--pt){for(A[ct](E),G=[],Q=Lt=0;Lt<=5;Q=++Lt){for(yt=a.moves[Q],rt=0;rt<=2;++rt)A[mt](yt),G.push(A[ct]());A[mt](yt)}Pt.push(G)}return Pt},Y=(function(){var dt,ct;return dt=new a,ct=new a,function(Tt,mt){var A,E;for(dt.URtoUL(Tt),ct.UBtoDF(mt),A=E=0;E<=7;A=++E)if(dt.ep[A]!==-1){if(ct.ep[A]!==-1)return-1;ct.ep[A]=dt.ep[A]}return ct.URtoDF()}})(),w=2187,T=2048,y=2,M=11880,O=495,D=24,I=20160,P=20160,X=1320,q=1320,a.moveTables={parity:[[1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],[0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]],twist:null,flip:null,FRtoBR:null,URFtoDLF:null,URtoDF:null,URtoUL:null,UBtoDF:null,mergeURtoDF:null},W={twist:["corners",w],flip:["edges",T],FRtoBR:["edges",M],URFtoDLF:["corners",I],URtoDF:["edges",P],URtoUL:["edges",X],UBtoDF:["edges",q],mergeURtoDF:[]},a.computeMoveTables=function(...dt){var ct,Tt,mt,A,E,G;for(dt.length===0&&(dt=(function(){var Q;Q=[];for(mt in W)Q.push(mt);return Q})()),Tt=0,ct=dt.length;Tt<ct;Tt++)G=dt[Tt],this.moveTables[G]===null&&(G==="mergeURtoDF"?this.moveTables.mergeURtoDF=(function(){var Q,pt,yt,Lt;for(Lt=[],pt=yt=0;yt<=335;pt=++yt)Lt.push((function(){var rt,et;for(et=[],Q=rt=0;rt<=335;Q=++rt)et.push(Y(pt,Q));return et})());return Lt})():([A,E]=W[G],this.moveTables[G]=Rt(A,G,E)));return this},st=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],vt=(function(){var dt,ct,Tt,mt,A,E,G,Q;for(Q=[],ct=Tt=0;Tt<=5;ct=++Tt){for(mt=[],dt=A=0;A<=5;dt=++A)if(dt!==ct&&dt!==ct-3)for(G=E=0;E<=2;G=++E)mt.push(dt*3+G);Q.push(mt)}return Q})(),K=[0,1,2,4,7,9,10,11,13,16],wt=(function(){var dt,ct,Tt,mt,A,E,G,Q,pt,yt;for(yt=[],ct=mt=0;mt<=5;ct=++mt){for(A=[],dt=E=0;E<=5;dt=++E)if(dt!==ct&&dt!==ct-3)for(pt=dt===0||dt===3?[0,1,2]:[1],G=0,Tt=pt.length;G<Tt;G++)Q=pt[G],A.push(dt*3+Q);yt.push(A)}return yt})(),Ot=function(dt,ct,Tt){var mt,A,E;return mt=ct%8,E=ct>>3,A=mt<<2,Tt!=null?(dt[E]&=~(15<<A),dt[E]|=Tt<<A,Tt):(dt[E]&15<<A)>>>A},Nt=function(dt,ct,Tt,mt){var A,E,G,Q,pt,yt,Lt,rt,et,Pt,lt,zt;for(zt=(function(){var Xt,Wt,Bt;for(Bt=[],Xt=0,Wt=Math.ceil(ct/8)-1;0<=Wt?Xt<=Wt:Xt>=Wt;0<=Wt?++Xt:--Xt)Bt.push(4294967295);return Bt})(),dt===1?rt=st:rt=K,E=0,Ot(zt,0,E),G=1;G!==ct;){for(Q=yt=0,lt=ct-1;0<=lt?yt<=lt:yt>=lt;Q=0<=lt?++yt:--yt)if(Ot(zt,Q)===E)for(A=Tt(Q),Pt=0,pt=rt.length;Pt<pt;Pt++)Lt=rt[Pt],et=mt(A,Lt),Ot(zt,et)===15&&(Ot(zt,et,E+1),G++);E++}return zt},a.pruningTables={sliceTwist:null,sliceFlip:null,sliceURFtoDLFParity:null,sliceURtoDFParity:null},Ht={sliceTwist:[1,O*w,function(dt){return[dt%O,dt/O|0]},function(dt,ct){var Tt,mt,A,E;return[A,E]=dt,Tt=a.moveTables.FRtoBR[A*24][ct]/24|0,mt=a.moveTables.twist[E][ct],mt*O+Tt}],sliceFlip:[1,O*T,function(dt){return[dt%O,dt/O|0]},function(dt,ct){var Tt,mt,A,E;return[E,Tt]=dt,A=a.moveTables.FRtoBR[E*24][ct]/24|0,mt=a.moveTables.flip[Tt][ct],mt*O+A}],sliceURFtoDLFParity:[2,D*I*y,function(dt){return[dt%2,(dt/2|0)%D,(dt/2|0)/D|0]},function(dt,ct){var Tt,mt,A,E,G,Q;return[G,Q,Tt]=dt,mt=a.moveTables.parity[G][ct],A=a.moveTables.FRtoBR[Q][ct],E=a.moveTables.URFtoDLF[Tt][ct],(E*D+A)*2+mt}],sliceURtoDFParity:[2,D*P*y,function(dt){return[dt%2,(dt/2|0)%D,(dt/2|0)/D|0]},function(dt,ct){var Tt,mt,A,E,G,Q;return[G,Q,Tt]=dt,mt=a.moveTables.parity[G][ct],A=a.moveTables.FRtoBR[Q][ct],E=a.moveTables.URtoDF[Tt][ct],(E*D+A)*2+mt}]},a.computePruningTables=function(...dt){var ct,Tt,mt,A,E;for(dt.length===0&&(dt=(function(){var G;G=[];for(mt in Ht)G.push(mt);return G})()),Tt=0,ct=dt.length;Tt<ct;Tt++)E=dt[Tt],this.pruningTables[E]===null&&(A=Ht[E],this.pruningTables[E]=Nt(...A));return this},a.initSolver=function(){return a.computeMoveTables(),a.computePruningTables()},a.prototype.solveUpright=function(dt=22){var ct,Tt,mt,A,E,G,Q,pt,yt;return mt=(function(){var Lt,rt,et,Pt,lt,zt,Xt;for(rt=["U","R","F","D","L","B"],zt=["","2","'"],Xt=[],Lt=et=0;et<=5;Lt=++et)for(lt=Pt=0;Pt<=2;lt=++Pt)Xt.push(rt[Lt]+zt[lt]);return Xt})(),ct=class{constructor(rt){this.parent=null,this.lastMove=null,this.depth=0,rt&&this.init(rt)}init(rt){return this.flip=rt.flip(),this.twist=rt.twist(),this.slice=rt.FRtoBR()/D|0,this.parity=rt.cornerParity(),this.URFtoDLF=rt.URFtoDLF(),this.FRtoBR=rt.FRtoBR(),this.URtoUL=rt.URtoUL(),this.UBtoDF=rt.UBtoDF(),this}solution(){return this.parent?this.parent.solution()+mt[this.lastMove]+" ":""}move(rt,et,Pt){return a.moveTables[rt][et][Pt]}pruning(rt,et){return Ot(a.pruningTables[rt],et)}moves1(){return this.lastMove!==null?vt[this.lastMove/3|0]:st}minDist1(){var rt,et;return rt=this.pruning("sliceFlip",O*this.flip+this.slice),et=this.pruning("sliceTwist",O*this.twist+this.slice),F(rt,et)}next1(rt){var et;return et=Tt.pop(),et.parent=this,et.lastMove=rt,et.depth=this.depth+1,et.flip=this.move("flip",this.flip,rt),et.twist=this.move("twist",this.twist,rt),et.slice=this.move("FRtoBR",this.slice*24,rt)/24|0,et}moves2(){return this.lastMove!==null?wt[this.lastMove/3|0]:K}minDist2(){var rt,et,Pt,lt;return Pt=(D*this.URtoDF+this.FRtoBR)*y+this.parity,rt=this.pruning("sliceURtoDFParity",Pt),lt=(D*this.URFtoDLF+this.FRtoBR)*y+this.parity,et=this.pruning("sliceURFtoDLFParity",lt),F(rt,et)}init2(rt=!0){if(this.parent!==null&&(this.parent.init2(!1),this.URFtoDLF=this.move("URFtoDLF",this.parent.URFtoDLF,this.lastMove),this.FRtoBR=this.move("FRtoBR",this.parent.FRtoBR,this.lastMove),this.parity=this.move("parity",this.parent.parity,this.lastMove),this.URtoUL=this.move("URtoUL",this.parent.URtoUL,this.lastMove),this.UBtoDF=this.move("UBtoDF",this.parent.UBtoDF,this.lastMove),rt))return this.URtoDF=this.move("mergeURtoDF",this.URtoUL,this.UBtoDF)}next2(rt){var et;return et=Tt.pop(),et.parent=this,et.lastMove=rt,et.depth=this.depth+1,et.URFtoDLF=this.move("URFtoDLF",this.URFtoDLF,rt),et.FRtoBR=this.move("FRtoBR",this.FRtoBR,rt),et.parity=this.move("parity",this.parity,rt),et.URtoDF=this.move("URtoDF",this.URtoDF,rt),et}},pt=null,E=function(Lt){var rt,et,Pt,lt;for(rt=0,lt=[],rt=et=1,Pt=dt;(1<=Pt?et<=Pt:et>=Pt)&&(A(Lt,rt),pt===null);rt=1<=Pt?++et:--et)lt.push(rt++);return lt},A=function(Lt,rt){var et,Pt,lt,zt,Xt,Wt,Bt;if(rt===0){if(Lt.minDist1()===0&&(Lt.lastMove===null||(Xt=Lt.lastMove,ee.call(K,Xt)<0)))return Q(Lt)}else if(rt>0&&Lt.minDist1()<=rt){for(Wt=Lt.moves1(),Bt=[],Pt=0,et=Wt.length;Pt<et&&(lt=Wt[Pt],zt=Lt.next1(lt),A(zt,rt-1),Tt.push(zt),pt===null);Pt++)Bt.push(void 0);return Bt}},Q=function(Lt){var rt,et,Pt,lt;for(Lt.init2(),lt=[],rt=et=1,Pt=dt-Lt.depth;(1<=Pt?et<=Pt:et>=Pt)&&(G(Lt,rt),pt===null);rt=1<=Pt?++et:--et)lt.push(rt++);return lt},G=function(Lt,rt){var et,Pt,lt,zt,Xt,Wt;if(rt===0){if(Lt.minDist2()===0)return pt=Lt.solution()}else if(rt>0&&Lt.minDist2()<=rt){for(Xt=Lt.moves2(),Wt=[],Pt=0,et=Xt.length;Pt<et&&(lt=Xt[Pt],zt=Lt.next2(lt),G(zt,rt-1),Tt.push(zt),pt===null);Pt++)Wt.push(void 0);return Wt}},Tt=(function(){var Lt,rt,et;for(et=[],Lt=0,rt=dt+1;0<=rt?Lt<=rt:Lt>=rt;0<=rt?++Lt:--Lt)et.push(new ct);return et})(),yt=Tt.pop().init(this),E(yt),Tt.push(yt),pt.length>0&&(pt=pt.substring(0,pt.length-1)),pt},at={U:0,R:1,F:2,D:3,L:4,B:5},N={0:"U",1:"R",2:"F",3:"D",4:"L",5:"B"},a.prototype.solve=function(dt=22){var ct,Tt,mt,A,E,G,Q,pt,yt;for(ct=this.clone(),pt=ct.upright(),ct.move(pt),G=new a().move(pt).center,yt=ct.solveUpright(dt),Q=[],E=yt.split(" "),mt=0,Tt=E.length;mt<Tt;mt++)A=E[mt],Q.push(N[G[at[A[0]]]]),A.length>1&&(Q[Q.length-1]+=A[1]);return Q.join(" ")},a.scramble=function(){return a.inverse(a.random().solve())}}).call(pd)),pd}var md,H_;function u2(){return H_||(H_=1,md=Xy(),c2()),md}var f2=u2();const h2=gM(f2);function d2(s){const t=new Array(9);for(let n=0;n<3;n++)for(let a=0;a<3;a++)t[a*3+(2-n)]=s[n*3+a];return t}function p2(s){const t=[s];let n=s;for(let a=0;a<3;a++)n=d2(n),t.push(n);return t}const m2=["U","R","F","D","L","B"],Ur=[0,1,2,3,5,6,7,8],g2={U:"W",R:"R",F:"G",D:"Y",L:"O",B:"B"};function v2(){return{orientationLocks:{},lockMissFrames:{},stepAnchorFace:null,sawPreMoveAlignment:!1}}function Xc(s){s.orientationLocks={},s.lockMissFrames={},s.stepAnchorFace=null,s.sawPreMoveAlignment=!1}function Jo(s,t){const n=m2.indexOf(t);return[...s.slice(n*9,n*9+9)].map(o=>g2[o])}function _2(s,t,n){if(!s||s.length!==54||n.length!==9)return 0;const a=Jo(s,t),o=[a,Yo(a)];let c=0;for(const u of o){const h=Yy(n,u,Ur);c=Math.max(c,h.matches/Ur.length)}return c}function Op(s,t){const n=h2.fromString(s);return n.move(t),n.asString()}function y2(s){if(s.length===0)return null;const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o=s[0][n],c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}function Wy(s,t){const n=[];for(let a=0;a<9;a++)s[a]!==t[a]&&n.push(a);return n}function x2(s,t){const n=[];for(let a=0;a<9;a++)s[a]===t[a]&&n.push(a);return n}function S2(s,t,n){return Wy(Jo(s,n),Jo(Op(s,t),n)).length}function qy(s){const t=new Set,n=[];for(const a of[s,Yo(s)])for(const o of p2(a)){const c=o.join("");t.has(c)||(t.add(c),n.push(o))}return n}function M2(s,t){return qy(s)[t]??s}function Ls(s,t,n){let a=0;for(const o of n)s[o]===t[o]&&a++;return a}function Yy(s,t,n){let a={index:0,matches:0,oriented:s};return qy(s).forEach((o,c)=>{const u=Ls(o,t,n);u>a.matches&&(a={index:c,matches:u,oriented:o})}),a}function jy(s,t){const n=[...s].sort().join(""),a=[...t].sort().join("");return n!==a?!1:Ur.filter(c=>s[c]===t[c]).length<=2}function E2(s,t,n,a,o){if(o.length>0){const u=Ls(s,t,o),h=o.length===1?1:Math.ceil(o.length*.9);if(u<h)return!1}if(o.length>=4&&Ur.filter(h=>s[h]!==t[h]).length>a.length+1)return!1;const c=Ls(s,n,a);return!(c<Math.ceil(a.length*.65)||jy(s,t)&&c<a.length)}function b2(s,t,n,a,o){const c=Jo(s,n),u=Jo(Op(s,t),n),h=Wy(c,u),p=x2(c,u);if(h.length===0)return{progress:0,completed:!1,rejectedWholeCube:!1};const m=[{before:c,after:u},{before:Yo(c),after:Yo(u)}];let g={progress:0,completed:!1,rejectedWholeCube:!1};const v=o.orientationLocks[n]??null;for(const _ of m){let x;if(v!==null)x=M2(a,v);else{const w=Yy(a,_.before,Ur);x=w.oriented,w.matches>=6&&(o.orientationLocks[n]=w.index,o.lockMissFrames[n]=0)}const b=Ls(x,_.before,Ur),T=Ls(x,_.after,h),M=T/h.length;if(b>=6&&(o.sawPreMoveAlignment=!0),!E2(x,_.before,_.after,h,p)){(jy(x,_.before)||p.length>=3)&&(g={progress:0,completed:!1,rejectedWholeCube:!0});continue}const O=Ls(x,_.after,Ur),D=o.sawPreMoveAlignment&&T>=Math.ceil(h.length*.65)&&O>b&&O>=5;(D||M>g.progress)&&(g={progress:D?1:M,completed:D,rejectedWholeCube:!1}),o.orientationLocks[n]!==void 0&&(b<4?(o.lockMissFrames[n]=(o.lockMissFrames[n]??0)+1,(o.lockMissFrames[n]??0)>8&&(delete o.orientationLocks[n],delete o.lockMissFrames[n])):o.lockMissFrames[n]=0)}return g}function T2(s,t,n,a,o){if(!s||s.length!==54)return{progress:0,completed:!1,visibleFace:a,comparisonFace:null,rejectedWholeCube:!1};if(a){if(o.stepAnchorFace===null)o.stepAnchorFace=a;else if(a!==o.stepAnchorFace&&!o.sawPreMoveAlignment)return{progress:0,completed:!1,visibleFace:a,comparisonFace:null,rejectedWholeCube:!0}}const c=Ed.filter(g=>S2(s,t,g)>0),u=Dr(t),h=Object.keys(n),p=[...h.filter(g=>c.includes(g)),u,...c.filter(g=>g!==u&&!h.includes(g))].filter((g,v,_)=>c.includes(g)&&_.indexOf(g)===v);let m={progress:0,completed:!1,visibleFace:a,comparisonFace:null,rejectedWholeCube:!1};for(const g of p){const v=n[g];if(!v||v.length!==9)continue;const _=b2(s,t,g,v,o);if(_.rejectedWholeCube)return{progress:0,completed:!1,visibleFace:a,comparisonFace:g,rejectedWholeCube:!0};if((_.completed||_.progress>m.progress)&&(m={progress:_.progress,completed:_.completed,visibleFace:a,comparisonFace:g,rejectedWholeCube:!1},_.completed))break}return m}function A2(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-B2h2yb51.js",import.meta.url),{type:"module"})}const Zy=["R","O","Y","G","B","W"],R2={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function Ky(){return vp()?XM():R2}function C2(s,t,n){const a=gd(s/255),o=gd(t/255),c=gd(n/255);return[a*.4124564+o*.3575761+c*.1804375,a*.2126729+o*.7151522+c*.072175,a*.0193339+o*.119192+c*.9503041]}function gd(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function w2(s,t,n){const u=vd(s/.95047),h=vd(t/1),p=vd(n/1.08883);return[116*h-16,500*(u-h),200*(h-p)]}function vd(s){return s>.008856?s**(1/3):7.787*s+16/116}function Qy(s,t,n){const[a,o,c]=C2(s,t,n);return w2(a,o,c)}function Jy(s,t){const n=s[0]-t[0],a=s[1]-t[1],o=s[2]-t[2];return Math.sqrt(n*n+a*a+o*o)}function D2(s,t,n){const a=s/255,o=t/255,c=n/255,u=Math.max(a,o,c),h=Math.min(a,o,c),p=u-h;let m=0;p>0&&(u===a?m=(o-c)/p%6:u===o?m=(c-a)/p+2:m=(a-o)/p+4,m*=60,m<0&&(m+=360));const g=u===0?0:p/u*255,v=u*255;return[m,g,v]}function G_(s,t,n){const a=Qy(s,t,n),o=Ky();let c="W",u=1/0;for(const h of Zy){const p=Jy(a,o[h]);p<u&&(u=p,c=h)}return c}function $y(s,t,n){const a=Math.max(s,t,n),o=Math.min(s,t,n);return a<38||a<70&&a-o<22}function U2(s,t,n){const a=Math.max(s,t,n),o=Math.min(s,t,n),c=a-o,u=(s+t+n)/3;return a<125||c>42||n>s+22&&n>t+12||s>t+22&&s>n+22||t>s+18&&t>n+18?!1:u>145&&c<38}function L2(s,t,n,a){const o=Qy(s,t,n);return 1/(1+Jy(o,Ky()[a]))}function qo(s,t,n){if($y(s,t,n)||vp())return G_(s,t,n);const[a,o]=D2(s,t,n),c=o/255;if(U2(s,t,n))return"W";const u=new Map;for(const m of Zy)u.set(m,L2(s,t,n,m));n>=s+14&&n>=t+10&&n>75&&u.set("B",(u.get("B")??0)+.55),s>=t+12&&s>=n+12&&s>85&&u.set("R",(u.get("R")??0)+.45),t>=s+10&&t>=n+10&&t>70&&u.set("G",(u.get("G")??0)+.45),s>95&&t>85&&n<Math.min(s,t)-18&&u.set("Y",(u.get("Y")??0)+.55),s>t+8&&t>n+5&&s>110&&a>=8&&a<42&&u.set("O",(u.get("O")??0)+.45),c>.18&&(a>=38&&a<=72&&u.set("Y",(u.get("Y")??0)+.25),a>=10&&a<38&&u.set("O",(u.get("O")??0)+.2),(a<=12||a>=345)&&u.set("R",(u.get("R")??0)+.2),a>=78&&a<=155&&u.set("G",(u.get("G")??0)+.2),a>=165&&a<=255&&u.set("B",(u.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,g]of u)g>p&&(p=g,h=m);return h}function _d(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function N2(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function O2(s,t,n){const a=Math.max(s,t,n)-Math.min(s,t,n);return a>52?.15:a>36?.55:1}function F2(s,t,n,a,o,c){const u=new Map,h=[],p=[],m=[],v=o-n>40?1:2;for(let T=Math.floor(a);T<Math.floor(c);T+=v)for(let M=Math.floor(n);M<Math.floor(o);M+=v){const y=(T*t+M)*4,O=s[y],D=s[y+1],w=s[y+2];if($y(O,D,w))continue;h.push(O),p.push(D),m.push(w);const q=qo(O,D,w),I=O2(O,D,w);u.set(q,(u.get(q)??0)+I)}if(h.length===0){const T=Math.floor((n+o)/2),y=(Math.floor((a+c)/2)*t+T)*4;return qo(s[y],s[y+1],s[y+2])}const _=qo(_d(h),_d(p),_d(m));u.set(_,(u.get(_)??0)+3);let x=_,b=0;for(const[T,M]of u)M>b&&(b=M,x=T);return x}function P2(s,t,n){const o=s.getImageData(0,0,t,n).data,c=[],u=t/3,h=n/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=N2(p,m),v=m*u+u*g,_=m*u+u*(1-g),x=p*h+h*g,b=p*h+h*(1-g);c.push(F2(o,t,v,x,_,b))}return c}function ol(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function z2(s){const t=ol();for(const n of s)t[n]++;return t}function tx(s){return!!(s&&s.length===9)}function B2(s){if(!tx(s))return{valid:!1,colorCounts:ol(),detectedCenter:null,uniqueColors:0};const t=z2(s),n=Object.values(t).filter(a=>a>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:n}}const I2={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},ll=["W","Y","R","O","G","B"],pu=9,H2={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function Fp(s){const t=ol();for(const n of s.values())for(const a of n)t[a]++;return t}function G2(s,t){return H2[s][t]??6}function V2(s){let t=null,n=0;for(const a of ll){const o=s[a]-pu;o>n&&(n=o,t=a)}return t}function k2(s){let t=null,n=0;for(const a of ll){const o=pu-s[a];o>n&&(n=o,t=a)}return t}function ex(s){return ll.every(t=>s[t]===pu)}function X2(s){const t=new Map;for(const[a,o]of s){const c=[...o];c[4]=I2[a],t.set(a,c)}const n=[];for(const[a,o]of t)for(let c=0;c<9;c++)c!==4&&n.push({faceId:a,index:c,color:o[c]});for(let a=0;a<256;a++){const o=Fp(t);if(ex(o))break;const c=V2(o),u=k2(o);if(!c||!u)break;let h=null,p=1/0;for(const m of n){if(m.color!==c)continue;const g=G2(c,u);g<p&&(p=g,h=m)}if(!h){const m=n.find(g=>g.color===c);if(!m)break;h=m}h.color=u,t.get(h.faceId)[h.index]=u}return t}function W2(s){const t=Fp(s),n=ol();for(const a of ll)n[a]=t[a]-pu;return n}function V_(s){return ex(Fp(s))}function q2(s){const t=W2(s),n={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},a=ll.filter(o=>t[o]!==0).map(o=>{const c=t[o];return`${n[o]}${c>0?`+${c}`:c}`});return a.length>0?a.join(", "):""}const Rs=256;function nx(s,t){const n=document.createElement("canvas");n.width=Rs,n.height=Rs;const a=n.getContext("2d",{willReadFrequently:!0});return a?(a.drawImage(s,t.x,t.y,t.size,t.size,0,0,Rs,Rs),P2(a,Rs,Rs)):[]}function ix(s,t){const n=s.getContext("2d",{willReadFrequently:!0});if(!n)return 0;const{x:a,y:o,size:c}=t,u=n.getImageData(Math.floor(a),Math.floor(o),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let v=0;v<u.length;v+=32){const _=(u[v]+u[v+1]+u[v+2])/3;h+=_,p+=_*_,m++}if(m===0)return 0;const g=h/m;return p/m-g*g}function ax(s,t){if(s.length!==9)return!1;const n=new Set(s),a=s.filter(o=>o!=="W").length;return t<120?!1:n.size===1?!0:n.size===2&&a<=3&&t<300?!1:n.size>=3&&a>=2||n.size>=2&&a>=4&&t>220}function Y2(s){const t=(o,c)=>Math.hypot(o.x-c.x,o.y-c.y),n=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],a=n.reduce((o,c)=>o+c,0)/4;return a<1?!1:n.every(o=>Math.abs(o-a)/a<.55)}function j2(s,t,n,a){const o=n*a;let c=null,u=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<o*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const v of[.02,.035,.05,.08]){const _=new t.Mat;if(t.approxPolyDP(p,_,v*g,!0),_.rows===4){const x=[];for(let T=0;T<4;T++)x.push({x:_.data32S[T*2],y:_.data32S[T*2+1]});const b=jC(x);b&&Y2(b)&&m>u&&(u=m,c=b)}_.delete()}p.delete()}return c}function k_(s,t,n){var a;if(!((a=window.cv)!=null&&a.Mat))return null;try{const o=window.cv,c=o.imread(s),u=new o.Mat,h=new o.Mat,p=new o.Mat,m=new o.Mat,g=new o.MatVector,v=new o.Mat;o.cvtColor(c,u,o.COLOR_RGBA2RGB),o.cvtColor(u,h,o.COLOR_RGB2GRAY),o.GaussianBlur(h,p,new o.Size(5,5),0),o.Canny(p,m,20,80),o.findContours(m,g,v,o.RETR_LIST,o.CHAIN_APPROX_SIMPLE);const _=j2(g,o,t,n);return c.delete(),u.delete(),h.delete(),p.delete(),m.delete(),g.delete(),v.delete(),_}catch{return null}}function Z2(s,t,n){const a=Is(t,n),o=nx(s,a),c=ix(s,a);return ax(o,c)?{corners:J_(a),colors:o}:null}function rx(s,t,n,a){const o=Is(t,n,a),c=document.createElement("canvas");c.width=o.size,c.height=o.size;const u=c.getContext("2d");if(u){u.drawImage(s,o.x,o.y,o.size,o.size,0,0,o.size,o.size);const m=k_(c,o.size,o.size);if(m)return LM(m,o.x,o.y)}const h=k_(s,t,n);if(h)return h;const p=Z2(s,t,n);return(p==null?void 0:p.corners)??null}function yd(s,t,n,a,o=!1){const c=Is(t,n,a),u=nx(s,c),h=ix(s,c),p=ax(u,h),m=!!(u[4]&&pa(u[4])),g=new Set(u).size,v=o&&u.length===9&&(m||g>=3)&&h>=40;if(!p&&!v)return null;const _=rx(s,t,n,a),x=u[4]?pa(u[4]):null,b=Gy(_??J_(c),t,n,x);return b.confidence=_?.85:.7,{colors:u,pose:b}}function K2(s){const t=window.cv,n=t.imread(s),a=new t.Mat;return t.cvtColor(n,a,t.COLOR_RGBA2GRAY),n.delete(),a}const X_=45;class Q2{constructor(){ye(this,"prevGray",null);ye(this,"trackedCorners",null);ye(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,n){var g;const a=window.cv;if(n)return this.trackedCorners=n,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),n;if(!this.prevGray||!this.trackedCorners)return null;const o=a.matFromArray(4,1,a.CV_32FC2,J2(this.trackedCorners)),c=new a.Mat,u=new a.Mat,h=new a.Mat;a.calcOpticalFlowPyrLK(this.prevGray,t,o,c,u,h);const p=[];let m=0;for(let v=0;v<4;v++){const _=u.data[v]===1,x=c.data32F[v*2],b=c.data32F[v*2+1];_&&Number.isFinite(x)&&Number.isFinite(b)?(p.push({x,y:b}),m++):p.push(this.trackedCorners[v])}return o.delete(),c.delete(),u.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>X_?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames=0,this.lostFrames>X_?(this.reset(),null):this.trackedCorners)}}function J2(s){return s.flatMap(t=>[t.x,t.y])}function ua(s,t,n){return s*(1-n)+t*n}function $2(s,t,n){return s.map((a,o)=>({x:ua(a.x,t[o].x,n),y:ua(a.y,t[o].y,n)}))}class tw{constructor(){ye(this,"state",null)}reset(){this.state=null}update(t,n=.38){if(!this.state||t.confidence<.4)return this.state=t,t;const a=t.confidence>.75?n:n*.55,o=t.rotationMatrix.map((g,v)=>ua(this.state.rotationMatrix[v],g,a)),c=[ua(this.state.translation[0],t.translation[0],a),ua(this.state.translation[1],t.translation[1],a),ua(this.state.translation[2],t.translation[2],a)],u=$2(this.state.corners,t.corners,a),h={x:ua(this.state.center.x,t.center.x,a),y:ua(this.state.center.y,t.center.y,a)},p=ua(this.state.size,t.size,a),m={...t,corners:u,center:h,size:p,rotationMatrix:o,translation:c,confidence:Math.max(this.state.confidence,t.confidence)*.92+t.confidence*.08};return this.state=m,m}}const ew=.9,nw=12,iw=10,aw=.28,rw=.82,sw=.8,W_=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];class ow{constructor(){ye(this,"state",{lastMatrix:z_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0});ye(this,"initialized",!1);ye(this,"expectedMove",null)}reset(){this.state={lastMatrix:z_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0},this.initialized=!1,this.expectedMove=null}setExpectedMove(t){this.expectedMove=t,this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,this.initialized=!0}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,{completedMove:null,progress:0,wrongMove:null};const n=s2(cw(t),this.state.lastMatrix);if(sx(n)<aw)return this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:null,progress:0,wrongMove:null};const o=this.expectedMove?lw(n,this.expectedMove):0,c=this.expectedMove?[this.expectedMove]:W_,u=q_(n,c);if(u){const h=du(u),p=Math.abs(ox(n,h)),m=Math.abs(hu(u))*rw;if(p<m||o<sw)return this.state.pendingMove=null,this.state.stableCount=0,{completedMove:null,progress:o,wrongMove:null};if(this.state.pendingMove===u){if(this.state.stableCount++,this.state.stableCount>=nw)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:u,progress:1,wrongMove:null}}else this.state.pendingMove=u,this.state.stableCount=1;this.state.wrongMove=null,this.state.wrongStableCount=0}else if(this.expectedMove){const h=q_(n,W_);if(h&&h!==this.expectedMove){if(this.state.wrongMove===h?this.state.wrongStableCount++:(this.state.wrongMove=h,this.state.wrongStableCount=1),this.state.wrongStableCount>=iw)return{completedMove:null,progress:o,wrongMove:h}}else this.state.wrongMove=null,this.state.wrongStableCount=0;this.state.pendingMove=null,this.state.stableCount=0}else this.state.pendingMove=null,this.state.stableCount=0;return{completedMove:null,progress:o,wrongMove:null}}}function sx(s){const t=s[0]+s[4]+s[8],n=Math.max(-1,Math.min(1,(t-1)/2));return Math.acos(n)}function ox(s,t){const n=sx(s),a=Math.sin(n);if(Math.abs(a)<1e-5)return 0;const o=[(s[7]-s[5])/(2*a),(s[2]-s[6])/(2*a),(s[3]-s[1])/(2*a)];return(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])*n}function lw(s,t){const n=du(t),a=hu(t),o=ox(s,n);return Math.abs(a)<1e-6||Math.sign(o)!==Math.sign(a)&&Math.abs(o)>.15?0:Math.min(1,Math.abs(o)/Math.abs(a))}function cw(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function q_(s,t){let n=null,a=ew;for(const o of t){const c=du(o),u=o2(c,hu(o)),h=uw(s,u);h>a&&(a=h,n=o)}return n}function uw(s,t){let n=0;for(let a=0;a<9;a++)n+=1-Math.abs(s[a]-t[a])/2;return n/9}function Y_(s,t,n){return s+(t-s)*n}function xd(s,t,n){return{x:Y_(s.x,t.x,n),y:Y_(s.y,t.y,n)}}function fw(s,t,n,a,o,c){const u=xd(s,t,o),h=xd(a,n,o);return xd(u,h,c)}function Sd(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function hw(s,t,n,a,o,c){const u=Math.max(0,Math.floor(a-c)),h=Math.min(t,Math.ceil(a+c)),p=Math.max(0,Math.floor(o-c)),m=Math.min(n,Math.ceil(o+c)),g=[],v=[],_=[];for(let x=p;x<m;x+=2)for(let b=u;b<h;b+=2){const T=(x*t+b)*4,M=s[T],y=s[T+1],O=s[T+2];Math.max(M,y,O)<35||(g.push(M),v.push(y),_.push(O))}if(g.length===0){const x=Math.max(0,Math.min(t-1,Math.floor(a))),T=(Math.max(0,Math.min(n-1,Math.floor(o)))*t+x)*4;return qo(s[T],s[T+1],s[T+2])}return qo(Sd(g),Sd(v),Sd(_))}function dw(s,t,n,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const[c,u,h,p]=a,m=Math.min(Math.hypot(u.x-c.x,u.y-c.y),Math.hypot(p.x-c.x,p.y-c.y));if(m<18)return null;const v=o.getImageData(0,0,t,n).data,_=Math.max(3,m/14),x=[];for(let b=0;b<3;b++)for(let T=0;T<3;T++){const M=(T+.5)/3,y=(b+.5)/3,O=fw(c,u,h,p,M,y);x.push(hw(v,t,n,O.x,O.y,_))}return x}function Md(s,t,n,a){const o={},c=Np(t,n,a),u=Up(c);for(const h of u){const p=ky(h,c,n,a);if(!p)continue;const m=dw(s,n,a,p);(m==null?void 0:m.length)===9&&(o[h]=m)}return o}const pw=30,Go={pose:null,detectedFace:null,rotationMove:null,rotationProgress:0,wrongMove:null,visibleFaceColors:{}};class mw{constructor(){ye(this,"rotationDetector",new ow);ye(this,"flowTracker",new Q2);ye(this,"poseSmoother",new tw);ye(this,"trackingEnabled",!1);ye(this,"processCanvas");ye(this,"processCtx");ye(this,"lastColors",null);ye(this,"expectedMove",null);ye(this,"solvingScanMode",!1);ye(this,"lastSolvingPose",null);ye(this,"solvingLostFrames",0);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset(),this.lastColors=null}setSolvingScanMode(t){this.solvingScanMode=t,t||(this.lastSolvingPose=null,this.solvingLostFrames=0)}seedSolvingPose(t){this.lastSolvingPose=t,this.solvingLostFrames=0,this.lastColors=null,this.poseSmoother.reset(),this.poseSmoother.update(t),this.rotationDetector.sync(t.rotationMatrix)}guideRatio(){return this.solvingScanMode?Rv:void 0}setExpectedMove(t){t!==this.expectedMove&&(this.expectedMove=t,this.rotationDetector.setExpectedMove(t))}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const n=t.videoWidth,a=t.videoHeight;return!n||!a?!1:(this.processCanvas.width=n,this.processCanvas.height=a,Cv(this.processCtx,t,n,a),!0)}getColorLearnSample(t,n,a){return ny(this.processCanvas,t,n,a)}process(t){const n=t.videoWidth,a=t.videoHeight;if(!n||!a)return{...Go};this.processCanvas.width=n,this.processCanvas.height=a,Cv(this.processCtx,t,n,a);try{return this.solvingScanMode?this.processSolving(n,a):this.trackingEnabled?this.processWithTracking(n,a):this.processDetectionOnly(n,a)}catch{return{...Go}}}processSolving(t,n){const a=[Rv,.42,K_];for(const o of a){const c=yd(this.processCanvas,t,n,o,!0);if(!c)continue;this.lastColors=c.colors;let u=this.poseSmoother.update(c.pose);this.lastSolvingPose=u,this.solvingLostFrames=0;const h=Np(u,t,n),p=Md(this.processCanvas,h,t,n),m=this.rotationDetector.update(u.rotationMatrix);return{pose:u,detectedFace:{colors:c.colors,pose:u},rotationMove:m.completedMove,rotationProgress:m.progress,wrongMove:m.wrongMove,visibleFaceColors:p}}if(this.lastSolvingPose){if(this.solvingLostFrames++,this.solvingLostFrames<=90){const o=this.rotationDetector.update(this.lastSolvingPose.rotationMatrix);return{pose:this.lastSolvingPose,detectedFace:null,rotationMove:o.completedMove,rotationProgress:o.progress,wrongMove:o.wrongMove,visibleFaceColors:{}}}this.lastSolvingPose=null}return{...Go}}processDetectionOnly(t,n){const a=this.guideRatio(),o=this.solvingScanMode,c=yd(this.processCanvas,t,n,a,o);if(!c)return{...Go};this.lastColors=c.colors;const u=Md(this.processCanvas,c.pose,t,n);return{pose:c.pose,detectedFace:c,rotationMove:null,rotationProgress:0,wrongMove:null,visibleFaceColors:u}}processWithTracking(t,n){const a=rx(this.processCanvas,t,n,this.guideRatio()),o=K2(this.processCanvas),c=this.flowTracker.update(o,a);if(o.delete(),!c)return{...Go};let u=this.lastColors;if(a){const x=yd(this.processCanvas,t,n);x&&(u=x.colors,this.lastColors=u)}const h=u!=null&&u[4]?pa(u[4]):null;let p=Gy(c,t,n,h);h&&(p={...p,visibleFace:h});const m=this.flowTracker.getLostFrames();p.confidence=a?.85:Math.max(.35,.85-m*.01),p=this.poseSmoother.update(p);const g=u?{colors:u,pose:p}:null,v=this.rotationDetector.update(p.rotationMatrix),_=Md(this.processCanvas,p,t,n);return{pose:p,detectedFace:g,rotationMove:v.completedMove,rotationProgress:v.progress,wrongMove:v.wrongMove,visibleFaceColors:_}}isTrackingLost(){return this.flowTracker.getLostFrames()>pw}readStableFace(t,n=5){const a=[];let o=null;for(let u=0;u<n;u++){const h=this.process(t);if(!h.detectedFace)return null;a.push(h.detectedFace.colors),o=h.detectedFace.pose}return o?{colors:gw(a),pose:o}:null}}function gw(s){const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}const vw=[0,1,2,3,5,6,7,8],Wc=1e3,_w=10,yw=7,xw=6;function Sw(s,t){let n=0;for(const a of vw)s[a]===t[a]&&n++;return n}function Mw(s,t){let n=0;for(let a=0;a<9;a++)s[a]===t[a]&&n++;return n}function Ew(s,t){return Sw(s,t)>=yw}function lx(s,t){for(const[n,a]of t)if(Ew(s,a))return n;return null}function bw(s){const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}function Tw(s){if(s.length===0)return null;const t=new Map;for(const o of s){const c=o[4];t.set(c,(t.get(c)??0)+1)}let n=null,a=0;for(const[o,c]of t)c>a&&(a=c,n=o);return n}function Aw(s,t,n){if(lx(s,t))return null;for(const a of[Tw(n),s[4]]){if(!a)continue;const o=pa(a);if(o&&!t.has(o))return o}return null}function j_(s){if(s.size!==6)return s;const t=new Map,n=new Set,a=[...s.entries()].sort((o,c)=>{const u=pa(o[1][4])===o[0]?0:1,h=pa(c[1][4])===c[0]?0:1;return u-h});for(const[,o]of a){const c=pa(o[4]);c&&!n.has(c)&&(t.set(c,[...o]),n.add(c))}return t.size===6?t:s}class Rw{constructor(){ye(this,"faces",new Map);ye(this,"pendingReadings",[]);ye(this,"stableSinceMs",null);ye(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,n=Date.now()){const a=Wc/1e3,o={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1,needsClearerCenter:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],o;const c=pa(t[4]),u=lx(t,this.faces);if(u)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...o,currentFace:u,needsNewFace:!0};!this.stabilityAnchor||Mw(t,this.stabilityAnchor)<xw?(this.stabilityAnchor=[...t],this.stableSinceMs=n,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=n);const h=this.stableSinceMs!==null?n-this.stableSinceMs:0,p=Math.min(h,Wc)/1e3;let m=null,g=!1;if(h>=Wc){const v=[...this.pendingReadings,[...t]];v.length>_w&&v.shift(),this.pendingReadings=v;const _=bw(v),x=Aw(_,this.faces,v);if(x){const b=!this.faces.has(x);this.faces.set(x,[..._]),b&&(m=x),this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}else g=!0,this.stableSinceMs=n-Wc+400}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1,needsClearerCenter:g}}}const Cw="https://docs.opencv.org/4.9.0/opencv.js";let qc=null;function ww(){return qc||(qc=new Promise((s,t)=>{var a;if((a=window.cv)!=null&&a.Mat){s();return}const n=document.createElement("script");n.src=Cw,n.async=!0,n.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},n.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(n)}),qc)}function Z_(s){return Object.fromEntries($_(s))}const ko={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:ol(),cellColors:[]},eu={tracking:"searching",rotationProgress:0,wrongMove:null,visibleFace:null,faceMatchesMove:!1,liveFaceColors:null,visibleFaceColors:{},visibleFaces:[],stableVisibleFaceColors:{},poseRotationProgress:0,faceScanInfos:[]},Dw={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:ko,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,liveScanNeedsClearerCenter:!1,solvingFeedback:eu,solvingFacelet:""};function Uw(s){const[t,n]=Jt.useState(Dw),a=Jt.useRef(null),o=Jt.useRef(null),c=Jt.useRef(new Rw),u=Jt.useRef(""),h=Jt.useRef(0),p=Jt.useRef(0),m=Jt.useRef("loading"),g=Jt.useRef(0),v=Jt.useRef(null),_=Jt.useRef(0),x=Jt.useRef(0),b=Jt.useRef(null),T=Jt.useRef(null),M=Jt.useRef(!1),y=Jt.useRef(0),O=Jt.useRef(null),D=Jt.useRef(0),w=Jt.useRef(v2()),q=Jt.useRef([]),I=Jt.useRef({}),P=Jt.useCallback(F=>{var Y;F!==O.current&&(O.current=F,(Y=a.current)==null||Y.setExpectedMove(F))},[]),X=Jt.useCallback(()=>{b.current&&(clearTimeout(b.current),b.current=null)},[]),L=Jt.useCallback((F,Y,W,vt)=>{var Ot;const wt=o.current;if(!wt){n(Ht=>({...Ht,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}X();const Ft=++p.current;wt.postMessage({type:"solve",facelet:F,scannedFaces:Object.fromEntries(W),captures:vt,id:Ft}),(Ot=a.current)==null||Ot.syncPose(Y),b.current=setTimeout(()=>{n(Ht=>Ht.phase!=="computing"?Ht:{...Ht,phase:"error",error:"Solve timed out. Colors may have been misread — re-scan in steady light."})},25e3)},[X]);Jt.useEffect(()=>{m.current=t.phase,v.current=t.solution,g.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const C=Jt.useCallback(F=>{var Ot,Ht;const Y=u.current,W=Op(Y,F),vt=++p.current;(Ot=o.current)==null||Ot.postMessage({type:"apply",move:F,facelet:Y,id:vt}),u.current=W;const wt=v.current,Ft=wt?wt.currentIndex+1:0;wt&&Ft>=wt.moves.length&&((Ht=a.current)==null||Ht.setSolvingScanMode(!1)),n(kt=>{if(!kt.solution)return kt;const H=kt.solution.moves[kt.solution.currentIndex];return F!==H?kt:Ft>=kt.solution.moves.length?{...kt,phase:"solved",solution:{...kt.solution,currentIndex:Ft},solvingFeedback:eu,solvingFacelet:W}:{...kt,solution:{...kt.solution,currentIndex:Ft},solvingFeedback:eu,solvingFacelet:W}}),x.current=Date.now(),D.current=0,Xc(w.current),q.current=[],I.current={}},[]),k=Jt.useCallback((F,Y,W,vt,wt,Ft)=>{const{detectedCenter:Ot,colorCounts:Ht}=B2(Y),kt=tx(Y);let H="searching";return!F||!kt?H="searching":Ft?H="rotate":wt?H="captured":W>0&&W<vt?H="stabilizing":H="detected",{status:H,stableProgress:W,stableTarget:vt,detectedCenter:Ot,colorCounts:Ht,cellColors:kt&&Y?[...Y]:[]}},[]),ut=Jt.useCallback(()=>{var F;c.current.reset(),M.current=!1,T.current=null,n(Y=>({...Y,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:ko,liveScanNeedsClearerCenter:!1})),(F=a.current)==null||F.disableTracking(),O.current=null},[]),ot=Jt.useCallback(()=>{var F;c.current.reset(),M.current=!1,T.current=null,n(Y=>({...Y,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:ko,liveScanNeedsClearerCenter:!1})),(F=a.current)==null||F.disableTracking(),O.current=null},[]),_t=Jt.useCallback(async()=>{try{await ww(),a.current=new mw;const F=A2();o.current=F,F.onmessage=Y=>{var vt,wt,Ft;const W=Y.data;if(W.type==="ready")n(Ot=>({...Ot,solverReady:!0}));else if(W.type==="solution"){if(W.id!==p.current)return;if(X(),u.current=W.facelet,_.current=Date.now(),x.current=Date.now(),n(Ot=>({...Ot,phase:W.moves.length===0?"solved":"solving",solution:{moves:W.moves,currentIndex:0},detectionFeedback:ko,solvingFeedback:eu,solvingFacelet:W.facelet,currentPose:T.current??Ot.currentPose})),W.moves.length>0){(vt=a.current)==null||vt.setSolvingScanMode(!0),(wt=a.current)==null||wt.disableTracking();const Ot=T.current;Ot&&((Ft=a.current)==null||Ft.seedSolvingPose(Ot)),P(W.moves[0]??null),D.current=0,Xc(w.current),q.current=[],I.current={}}}else if(W.type==="facelet"){if(W.id!==p.current)return;u.current=W.facelet,n(Ot=>({...Ot,solvingFacelet:W.facelet}))}else if(W.type==="error"){if(W.id!==void 0&&W.id!==p.current)return;X(),M.current=!1,n(Ot=>({...Ot,phase:"error",error:W.message}))}},F.onerror=()=>{X(),n(Y=>({...Y,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},F.postMessage({type:"init"}),Dv(),c.current.reset(),n(Y=>({...Y,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(F){n(Y=>({...Y,phase:"error",error:F instanceof Error?F.message:"Init failed"}))}},[X]);Jt.useEffect(()=>(_t(),()=>{var F,Y;cancelAnimationFrame(h.current),X(),(F=o.current)==null||F.terminate(),(Y=a.current)==null||Y.disableTracking()}),[_t,X]);const bt=Jt.useCallback(()=>{const F=s.current,Y=a.current;if(!F||!Y||F.readyState<2||!Y.captureFrame(F))return;const W=g.current,vt=da[W];if(!vt)return;const wt=Y.getFrameCanvas();if(!KM(wt,F.videoWidth,F.videoHeight,vt)){n(Ht=>({...Ht,colorLearnError:`Could not read ${vt}. Center the sticker in the circle.`}));return}const Ot=W+1;if(Ot>=da.length){ot(),n(Ht=>({...Ht,colorsCalibrated:!0,colorLearnError:null}));return}n(Ht=>({...Ht,colorLearnIndex:Ot,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,ot]),B=Jt.useCallback(()=>{ot()},[ot]),st=Jt.useCallback(()=>{var pt,yt,Lt,rt;const F=s.current,Y=a.current;if(!F||!Y||F.readyState<2)return;const W=Y.process(F),vt=m.current;if(vt==="colorLearn"){Y.captureFrame(F);const et=da[g.current];if(et){const Pt=Y.getColorLearnSample(F.videoWidth,F.videoHeight,et);n(lt=>({...lt,colorLearnSample:Pt,colorLearnReady:(Pt==null?void 0:Pt.ready)??!1,colorLearnError:null}))}return}if(vt==="scanReady"){const et=((pt=W.detectedFace)==null?void 0:pt.colors)??null,Pt=!!W.pose;n(lt=>({...lt,detectionFeedback:k(Pt,et,0,0,!1,!1)}));return}if(vt==="liveScan"){if(!vp()){n(Xt=>({...Xt,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const et=((yt=W.detectedFace)==null?void 0:yt.colors)??null,Pt=!!W.pose;W.pose&&(T.current=W.pose);const lt=c.current.update(et),zt=!!lt.newlyCaptured;if(lt.isComplete&&T.current&&!M.current){M.current=!0;const Xt=j_($_(lt.faces)),Wt=Z_(Xt);try{let Bt=Xt;if(!V_(Bt)&&(Bt=X2(Xt),!V_(Bt))){const Z=q2(Xt);n(qt=>({...qt,phase:"error",scannedFaceColors:Wt,error:Z?`Color mismatch (${Z}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const ne=a2(Bt),oe=T.current,be=[...Bt.values()].map(Z=>[...Z]);n(Z=>({...Z,phase:"computing",knownFaces:lt.knownFaces,scannedFaceColors:Wt,liveScanProgress:1,currentPose:oe})),queueMicrotask(()=>L(ne,oe,Bt,be))}catch(Bt){n(ne=>({...ne,phase:"error",scannedFaceColors:Wt,error:Bt instanceof Error?Bt.message:"Failed to build cube state"}))}return}n(Xt=>({...Xt,currentPose:W.pose,knownFaces:lt.knownFaces,scannedFaceColors:Z_(j_(lt.faces)),currentVisibleFace:lt.currentFace,liveScanProgress:lt.knownFaces.length/6,liveScanNeedsClearerCenter:lt.needsClearerCenter,detectionFeedback:k(Pt,et,lt.stableProgress,lt.stableTarget,zt,lt.needsNewFace)}));return}if(n(et=>({...et,currentPose:W.pose??(vt==="solving"?et.currentPose:null)})),vt!=="solving")return;const wt=v.current,Ft=wt&&wt.currentIndex<wt.moves.length?wt.moves[wt.currentIndex]:null;P(Ft??null);const Ot=(Lt=W.detectedFace)!=null&&Lt.colors[4]?pa(W.detectedFace.colors[4]):((rt=W.pose)==null?void 0:rt.visibleFace)??null,Ht=Ft?Dr(Ft):null,kt=!!(Ot&&Ht&&Ot===Ht),H=W.pose?Up(W.pose):[];for(const et of H){const Pt=W.visibleFaceColors[et];!Pt||Pt.length!==9||(I.current[et]||(I.current[et]=[]),I.current[et].push([...Pt]),I.current[et].length>6&&I.current[et].shift())}const xe={};for(const et of H){const Pt=I.current[et];if(!(Pt!=null&&Pt.length))continue;const lt=y2(Pt);lt&&(xe[et]=lt)}const ee=Ft&&u.current?T2(u.current,Ft,xe,Ot,w.current):null;ee!=null&&ee.rejectedWholeCube&&(w.current.orientationLocks={},w.current.sawPreMoveAlignment=!1,Ot&&(w.current.stepAnchorFace=Ot),I.current={},D.current=0);const dt=W.rotationProgress,ct=(ee==null?void 0:ee.progress)??0,Tt=Math.max(ct,dt),mt=!!(Ft&&W.rotationMove===Ft);let A="searching";W.pose&&(H.length>=2||W.detectedFace)?(A="locked",y.current=0):W.pose?(A="searching",y.current=0):Object.keys(xe).length===0?(y.current++,A=y.current>12?"lost":"searching"):A="searching";const E=!!(ee!=null&&ee.completed||mt);E?D.current++:D.current=0;const G=!!W.pose,Q=(H.length>=3?H.slice(0,3):[...H,...["U","R","F"].filter(et=>!H.includes(et))].slice(0,3)).map(et=>{const Pt=W.visibleFaceColors[et],zt=xe[et]??Pt;if(!zt||zt.length!==9)return{faceId:et,status:G?"scanning":"missing",matchScore:0};const Xt=u.current?_2(u.current,et,zt):0,Wt=Xt>=.65?"locked":"scanning";return{faceId:et,status:Wt,matchScore:Xt}});if(W.pose&&(T.current=W.pose),n(et=>{var Pt;return{...et,currentPose:W.pose??et.currentPose,solvingFeedback:{tracking:A,rotationProgress:Tt,wrongMove:W.wrongMove,visibleFace:Ot,faceMatchesMove:kt,liveFaceColors:((Pt=W.detectedFace)==null?void 0:Pt.colors)??null,visibleFaceColors:W.visibleFaceColors,visibleFaces:H,stableVisibleFaceColors:xe,poseRotationProgress:dt,faceScanInfos:Q}}}),!!Ft&&!(Date.now()-_.current<400)&&!(Date.now()-x.current<300)&&!(!E||D.current<2)&&wt){C(Ft);const et=wt.moves[wt.currentIndex+1]??null;P(et),y.current=0,D.current=0,Xc(w.current),I.current={},x.current=Date.now()}},[s,C,k,L,P]),K=Jt.useCallback(()=>{st(),h.current=requestAnimationFrame(K)},[st]),Rt=Jt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(K)},[K]),Nt=Jt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),N=Jt.useCallback(()=>{X(),ut(),n(F=>({...F,solution:null}))},[X,ut]),at=Jt.useCallback(()=>{var F;X(),M.current=!1,c.current.reset(),T.current=null,Dv(),(F=a.current)==null||F.disableTracking(),n(Y=>({...Y,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:ko,liveScanNeedsClearerCenter:!1}))},[X]),tt=Jt.useCallback(()=>{var wt;const F=v.current;if(!F||F.currentIndex>=F.moves.length)return;const Y=F.moves[F.currentIndex];if(!Y)return;const W=F.moves[F.currentIndex+1]??null;C(Y);const vt=T.current;vt&&((wt=a.current)==null||wt.syncPose(vt)),P(W),y.current=0,D.current=0,Xc(w.current),I.current={},x.current=Date.now()},[C,P]),z=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:z,confirmColorLearn:bt,startLiveScan:B,retryLiveScan:N,retryColorLearn:at,startTracking:Rt,stopTracking:Nt,skipCurrentMove:tt}}function Lw(){const s=Jt.useRef(null),t=Jt.useRef(null),[n,a]=Jt.useState({stream:null,error:null,isReady:!1}),o=Jt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Jt.useCallback(p=>{s.current=p,p&&o(p)},[o]),u=Jt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await o(m),a({stream:p,error:null,isReady:!0})}catch(p){t.current=null,a({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[o]),h=Jt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),a({stream:null,error:null,isReady:!1})},[]);return Jt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:n,start:u,stop:h}}const Nw="1.6.1";function Ow(){var k,ut;const{videoRef:s,setVideoRef:t,state:n,start:a}=Lw(),{state:o,currentMove:c,confirmColorLearn:u,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:g,stopTracking:v,skipCurrentMove:_}=Uw(s),x=Jt.useRef(null),[b,T]=Jt.useState({width:0,height:0}),[M,y]=Jt.useState({width:0,height:0});Jt.useEffect(()=>{a()},[a]),Jt.useEffect(()=>{if(n.isReady&&o.phase!=="loading")return g(),v},[n.isReady,o.phase,g,v]);const O=Jt.useCallback((ot,_t)=>{T({width:ot,height:_t})},[]);Jt.useEffect(()=>{const ot=x.current;if(!ot)return;const _t=()=>{y({width:ot.clientWidth,height:ot.clientHeight})};_t();const bt=new ResizeObserver(_t);return bt.observe(ot),()=>bt.disconnect()},[]);const D=da[o.colorLearnIndex]??"R",w=o.phase==="loading"||!n.isReady,q=!!(o.error||n.error),I=o.phase==="computing",P=o.phase==="solving",X=((k=o.solution)==null?void 0:k.moves.length)??0,L=(((ut=o.solution)==null?void 0:ut.currentIndex)??0)+1,C=o.phase==="liveScan"||o.phase==="computing"||q&&Object.keys(o.scannedFaceColors).length>0;return Gt.jsxs("main",{className:"app",children:[Gt.jsxs("div",{className:`viewport${o.phase==="liveScan"?" viewport--scanning":""}${P?" viewport--solving":""}`,ref:x,children:[Gt.jsx(GM,{setVideoRef:t,onDimensions:O}),!w&&!q&&Gt.jsxs(Gt.Fragment,{children:[Gt.jsx(HM,{phase:o.phase,frameWidth:b.width,frameHeight:b.height,viewportWidth:M.width,viewportHeight:M.height,colorLearnSpot:o.phase==="colorLearn",spotColor:$o[D]}),Gt.jsx(QM,{visible:o.phase==="colorLearn",stepIndex:o.colorLearnIndex,sample:o.colorLearnSample,ready:o.colorLearnReady,error:o.colorLearnError,onConfirm:u}),Gt.jsx(n2,{visible:o.phase==="scanReady",feedback:o.detectionFeedback,onStart:h}),Gt.jsx(Dh,{visible:C,scannedFaces:o.scannedFaceColors}),Gt.jsx($M,{feedback:o.detectionFeedback,visible:o.phase==="liveScan"}),Gt.jsx(i2,{phase:o.phase,currentStep:L,totalSteps:X}),Gt.jsx(tE,{phase:o.phase,knownFaces:o.knownFaces,progress:o.liveScanProgress,needsNewFace:o.detectionFeedback.status==="rotate",needsClearerCenter:o.liveScanNeedsClearerCenter}),Gt.jsx($C,{active:P&&!!c,pose:o.currentPose,move:c,rotationProgress:o.solvingFeedback.rotationProgress,frameWidth:b.width,frameHeight:b.height,viewportWidth:M.width,viewportHeight:M.height}),Gt.jsx(e2,{visible:P&&!!c,tracking:o.solvingFeedback.tracking,faceScanInfos:o.solvingFeedback.faceScanInfos,onSkip:_}),o.phase==="solved"&&Gt.jsx("div",{className:"solved-banner",children:Gt.jsx("p",{children:"Done"})})]}),I&&Gt.jsxs(Gt.Fragment,{children:[Gt.jsx(Dh,{visible:C,scannedFaces:o.scannedFaceColors}),Gt.jsx(P_,{overlay:!0,message:"Computing…"})]}),w&&Gt.jsx(P_,{overlay:!0,message:o.phase==="loading"?"Loading…":"Camera…"}),q&&!w&&Gt.jsxs("div",{className:"error-screen overlay",children:[Gt.jsx(Dh,{visible:C,scannedFaces:o.scannedFaceColors}),Gt.jsx("p",{children:o.error??n.error}),Gt.jsxs("div",{className:"error-actions",children:[o.colorsCalibrated&&Gt.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),Gt.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]}),Gt.jsxs("p",{className:"app-version","aria-hidden":"true",children:["v",Nw]})]})}DM({immediate:!0});AM.createRoot(document.getElementById("root")).render(Gt.jsx(Jt.StrictMode,{children:Gt.jsx(Ow,{})}));
