var NS=Object.defineProperty;var OS=(s,t,i)=>t in s?NS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var Le=(s,t,i)=>OS(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var ch={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function zS(){if(Wv)return wo;Wv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:f,ref:o!==void 0?o:null,props:c}}return wo.Fragment=t,wo.jsx=i,wo.jsxs=i,wo}var qv;function PS(){return qv||(qv=1,ch.exports=zS()),ch.exports}var Rt=PS(),uh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function FS(){if(Yv)return oe;Yv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(D,W,at){this.props=D,this.context=W,this.refs=M,this.updater=at||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=y.prototype;function L(D,W,at){this.props=D,this.context=W,this.refs=M,this.updater=at||E}var w=L.prototype=new P;w.constructor=L,T(w,y.prototype),w.isPureReactComponent=!0;var X=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function U(D,W,at){var G=at.ref;return{$$typeof:s,type:D,key:W,ref:G!==void 0?G:null,props:at}}function R(D,W){return U(D.type,W,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function nt(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(at){return W[at]})}var $=/\/+/g;function ct(D,W){return typeof D=="object"&&D!==null&&D.key!=null?nt(""+D.key):W.toString(36)}function mt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(F,F):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function O(D,W,at,G,lt){var gt=typeof D;(gt==="undefined"||gt==="boolean")&&(D=null);var yt=!1;if(D===null)yt=!0;else switch(gt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(D.$$typeof){case s:case t:yt=!0;break;case g:return yt=D._init,O(yt(D._payload),W,at,G,lt)}}if(yt)return lt=lt(D),yt=G===""?"."+ct(D,0):G,X(lt)?(at="",yt!=null&&(at=yt.replace($,"$&/")+"/"),O(lt,W,at,"",function(Ht){return Ht})):lt!=null&&(H(lt)&&(lt=R(lt,at+(lt.key==null||D&&D.key===lt.key?"":(""+lt.key).replace($,"$&/")+"/")+yt)),W.push(lt)),1;yt=0;var Ct=G===""?".":G+":";if(X(D))for(var qt=0;qt<D.length;qt++)G=D[qt],gt=Ct+ct(G,qt),yt+=O(G,W,at,gt,lt);else if(qt=S(D),typeof qt=="function")for(D=qt.call(D),qt=0;!(G=D.next()).done;)G=G.value,gt=Ct+ct(G,qt++),yt+=O(G,W,at,gt,lt);else if(gt==="object"){if(typeof D.then=="function")return O(mt(D),W,at,G,lt);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return yt}function J(D,W,at){if(D==null)return D;var G=[],lt=0;return O(D,G,"","",function(gt){return W.call(at,gt,lt++)}),G}function Q(D){if(D._status===-1){var W=D._result;W=W(),W.then(function(at){(D._status===0||D._status===-1)&&(D._status=1,D._result=at)},function(at){(D._status===0||D._status===-1)&&(D._status=2,D._result=at)}),D._status===-1&&(D._status=0,D._result=W)}if(D._status===1)return D._result.default;throw D._result}var St=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Tt={map:J,forEach:function(D,W,at){J(D,function(){W.apply(this,arguments)},at)},count:function(D){var W=0;return J(D,function(){W++}),W},toArray:function(D){return J(D,function(W){return W})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return oe.Activity=v,oe.Children=Tt,oe.Component=y,oe.Fragment=i,oe.Profiler=o,oe.PureComponent=L,oe.StrictMode=a,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(D,W,at){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var G=T({},D.props),lt=D.key;if(W!=null)for(gt in W.key!==void 0&&(lt=""+W.key),W)!k.call(W,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&W.ref===void 0||(G[gt]=W[gt]);var gt=arguments.length-2;if(gt===1)G.children=at;else if(1<gt){for(var yt=Array(gt),Ct=0;Ct<gt;Ct++)yt[Ct]=arguments[Ct+2];G.children=yt}return U(D.type,lt,G)},oe.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},oe.createElement=function(D,W,at){var G,lt={},gt=null;if(W!=null)for(G in W.key!==void 0&&(gt=""+W.key),W)k.call(W,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(lt[G]=W[G]);var yt=arguments.length-2;if(yt===1)lt.children=at;else if(1<yt){for(var Ct=Array(yt),qt=0;qt<yt;qt++)Ct[qt]=arguments[qt+2];lt.children=Ct}if(D&&D.defaultProps)for(G in yt=D.defaultProps,yt)lt[G]===void 0&&(lt[G]=yt[G]);return U(D,gt,lt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:h,render:D}},oe.isValidElement=H,oe.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Q}},oe.memo=function(D,W){return{$$typeof:m,type:D,compare:W===void 0?null:W}},oe.startTransition=function(D){var W=z.T,at={};z.T=at;try{var G=D(),lt=z.S;lt!==null&&lt(at,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(F,St)}catch(gt){St(gt)}finally{W!==null&&at.types!==null&&(W.types=at.types),z.T=W}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(D){return z.H.use(D)},oe.useActionState=function(D,W,at){return z.H.useActionState(D,W,at)},oe.useCallback=function(D,W){return z.H.useCallback(D,W)},oe.useContext=function(D){return z.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,W){return z.H.useDeferredValue(D,W)},oe.useEffect=function(D,W){return z.H.useEffect(D,W)},oe.useEffectEvent=function(D){return z.H.useEffectEvent(D)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(D,W,at){return z.H.useImperativeHandle(D,W,at)},oe.useInsertionEffect=function(D,W){return z.H.useInsertionEffect(D,W)},oe.useLayoutEffect=function(D,W){return z.H.useLayoutEffect(D,W)},oe.useMemo=function(D,W){return z.H.useMemo(D,W)},oe.useOptimistic=function(D,W){return z.H.useOptimistic(D,W)},oe.useReducer=function(D,W,at){return z.H.useReducer(D,W,at)},oe.useRef=function(D){return z.H.useRef(D)},oe.useState=function(D){return z.H.useState(D)},oe.useSyncExternalStore=function(D,W,at){return z.H.useSyncExternalStore(D,W,at)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.7",oe}var jv;function Wd(){return jv||(jv=1,uh.exports=FS()),uh.exports}var Xt=Wd(),fh={exports:{}},Do={},hh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function BS(){return Zv||(Zv=1,(function(s){function t(O,J){var Q=O.length;O.push(J);t:for(;0<Q;){var St=Q-1>>>1,Tt=O[St];if(0<o(Tt,J))O[St]=J,O[Q]=Tt,Q=St;else break t}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var J=O[0],Q=O.pop();if(Q!==J){O[0]=Q;t:for(var St=0,Tt=O.length,D=Tt>>>1;St<D;){var W=2*(St+1)-1,at=O[W],G=W+1,lt=O[G];if(0>o(at,Q))G<Tt&&0>o(lt,at)?(O[St]=lt,O[G]=Q,St=G):(O[St]=at,O[W]=Q,St=W);else if(G<Tt&&0>o(lt,Q))O[St]=lt,O[G]=Q,St=G;else break t}}return J}function o(O,J){var Q=O.sortIndex-J.sortIndex;return Q!==0?Q:O.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,v=null,_=3,S=!1,E=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var J=i(m);J!==null;){if(J.callback===null)a(m);else if(J.startTime<=O)a(m),J.sortIndex=J.expirationTime,t(p,J);else break;J=i(m)}}function X(O){if(T=!1,w(O),!E)if(i(p)!==null)E=!0,F||(F=!0,nt());else{var J=i(m);J!==null&&mt(X,J.startTime-O)}}var F=!1,z=-1,k=5,U=-1;function R(){return M?!0:!(s.unstable_now()-U<k)}function H(){if(M=!1,F){var O=s.unstable_now();U=O;var J=!0;try{t:{E=!1,T&&(T=!1,P(z),z=-1),S=!0;var Q=_;try{e:{for(w(O),v=i(p);v!==null&&!(v.expirationTime>O&&R());){var St=v.callback;if(typeof St=="function"){v.callback=null,_=v.priorityLevel;var Tt=St(v.expirationTime<=O);if(O=s.unstable_now(),typeof Tt=="function"){v.callback=Tt,w(O),J=!0;break e}v===i(p)&&a(p),w(O)}else a(p);v=i(p)}if(v!==null)J=!0;else{var D=i(m);D!==null&&mt(X,D.startTime-O),J=!1}}break t}finally{v=null,_=Q,S=!1}J=void 0}}finally{J?nt():F=!1}}}var nt;if(typeof L=="function")nt=function(){L(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=H,nt=function(){ct.postMessage(null)}}else nt=function(){y(H,0)};function mt(O,J){z=y(function(){O(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var Q=_;_=J;try{return O()}finally{_=Q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=_;_=O;try{return J()}finally{_=Q}},s.unstable_scheduleCallback=function(O,J,Q){var St=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?St+Q:St):Q=St,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Q+Tt,O={id:g++,callback:J,priorityLevel:O,startTime:Q,expirationTime:Tt,sortIndex:-1},Q>St?(O.sortIndex=Q,t(m,O),i(p)===null&&O===i(m)&&(T?(P(z),z=-1):T=!0,mt(X,Q-St))):(O.sortIndex=Tt,t(p,O),E||S||(E=!0,F||(F=!0,nt()))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var J=_;return function(){var Q=_;_=J;try{return O.apply(this,arguments)}finally{_=Q}}}})(dh)),dh}var Kv;function IS(){return Kv||(Kv=1,hh.exports=BS()),hh.exports}var ph={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function HS(){if(Qv)return Cn;Qv=1;var s=Wd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Cn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Cn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Cn.requestFormReset=function(p){a.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.2.7",Cn}var Jv;function GS(){if(Jv)return ph.exports;Jv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ph.exports=HS(),ph.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function VS(){if($v)return Do;$v=1;var s=IS(),t=Wd(),i=GS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===l)return p(u),n;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=d;else{for(var x=!1,b=u.child;b;){if(b===r){x=!0,r=u,l=d;break}if(b===l){x=!0,l=u,r=d;break}b=b.sibling}if(!x){for(b=d.child;b;){if(b===r){x=!0,r=d,l=u;break}if(b===l){x=!0,l=d,r=u;break}b=b.sibling}if(!x)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var mt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function D(e){return{current:e}}function W(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function at(e,n){Tt++,St[Tt]=e.current,e.current=n}var G=D(null),lt=D(null),gt=D(null),yt=D(null);function Ct(e,n){switch(at(gt,n),at(lt,e),at(G,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?pv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=pv(n),e=mv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(G),at(G,e)}function qt(){W(G),W(lt),W(gt)}function Ht(e){e.memoizedState!==null&&at(yt,e);var n=G.current,r=mv(n,e.type);n!==r&&(at(lt,e),at(G,r))}function ze(e){lt.current===e&&(W(G),W(lt)),yt.current===e&&(W(yt),bo._currentValue=Q)}var Ne,he;function I(e){if(Ne===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Ne=n&&n[1]||"",he=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+e+he}var We=!1;function Qt(e,n){if(!e||We)return"";We=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var rt=ut}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ut){rt=ut}e.call(_t.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],b=d[1];if(x&&b){var B=x.split(`
`),et=b.split(`
`);for(u=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(l===B.length||u===et.length)for(l=B.length-1,u=et.length-1;1<=l&&0<=u&&B[l]!==et[u];)u--;for(;1<=l&&0<=u;l--,u--)if(B[l]!==et[u]){if(l!==1||u!==1)do if(l--,u--,0>u||B[l]!==et[u]){var dt=`
`+B[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=u);break}}}finally{We=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?I(r):""}function pe(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return I("Activity");default:return""}}function Gt(e){try{var n="",r=null;do n+=pe(e,r),r=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var be=Object.prototype.hasOwnProperty,Bt=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,A=s.unstable_shouldYield,it=s.unstable_requestPaint,ht=s.unstable_now,Mt=s.unstable_getCurrentPriorityLevel,vt=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,Dt=s.unstable_NormalPriority,It=s.unstable_LowPriority,_e=s.unstable_IdlePriority,At=s.log,Vt=s.unstable_setDisableYieldValue,$t=null,jt=null;function Pt(e){if(typeof At=="function"&&Vt(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode($t,e)}catch{}}var ne=Math.clz32?Math.clz32:Y,le=Math.log,Be=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(le(e)/Be|0)|0}var Ut=256,ft=262144,xt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?u=wt(l):(x&=b,x!==0?u=wt(x):r||(r=b&~e,r!==0&&(u=wt(r))))):(b=l&~d,b!==0?u=wt(b):x!==0?u=wt(x):r||(r=l&~e,r!==0&&(u=wt(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ke(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Ae(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function xn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,n,r,l,u,d){var x=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(r=x&~r;0<r;){var dt=31-ne(r),_t=1<<dt;b[dt]=0,B[dt]=-1;var rt=et[dt];if(rt!==null)for(et[dt]=null,dt=0;dt<rt.length;dt++){var ut=rt[dt];ut!==null&&(ut.lane&=-536870913)}r&=~_t}l!==0&&Ps(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Ps(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-ne(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Fs(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-ne(r),u=1<<l;u&n|e[l]&n&&(e[l]|=n),r&=~u}}function Ci(e,n){var r=n&-n;return r=(r&42)!==0?1:Za(r),(r&(e.suspendedLanes|n))!==0?0:r}function Za(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bs(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Bv(e.type))}function Ka(e,n){var r=J.p;try{return J.p=e,n()}finally{J.p=r}}var gi=Math.random().toString(36).slice(2),Je="__reactFiber$"+gi,Sn="__reactProps$"+gi,Pi="__reactContainer$"+gi,Is="__reactEvents$"+gi,nu="__reactListeners$"+gi,iu="__reactHandles$"+gi,el="__reactResources$"+gi,Qa="__reactMarker$"+gi;function Hs(e){delete e[Je],delete e[Sn],delete e[Is],delete e[nu],delete e[iu]}function C(e){var n=e[Je];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Pi]||r[Je]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Mv(e);e!==null;){if(r=e[Je])return r;e=Mv(e)}return n}e=r,r=e.parentNode}return null}function Z(e){if(e=e[Je]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function ot(e){var n=e[el];return n||(n=e[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[Qa]=!0}var bt=new Set,Nt={};function zt(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(Nt[e]=n,e=0;e<n.length;e++)bt.add(n[e])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Zt={};function Se(e){return be.call(Zt,e)?!0:be.call(ee,e)?!1:ae.test(e)?Zt[e]=!0:(ee[e]=!0,!1)}function Me(e,n,r){if(Se(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function qe(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Re(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(e,n,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Te(e){if(!e._valueTracker){var n=Jt(e)?"checked":"value";e._valueTracker=hn(e,n,""+e[n])}}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=Jt(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function vn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ie(e,n,r,l,u,d,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+se(n)):e.value!==""+se(n)&&(e.value=""+se(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?Rn(e,x,se(n)):r!=null?Rn(e,x,se(r)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+se(b):e.removeAttribute("name")}function Ln(e,n,r,l,u,d,x,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Te(e);return}r=r!=null?""+se(r):"",n=n!=null?""+se(n):r,b||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Te(e)}function Rn(e,n,r){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function $e(e,n,r,l){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Mn(e,n,r){if(n!=null&&(n=""+se(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+se(r):""}function Dr(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(mt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=se(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Te(e)}function Fn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Cy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fp(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||Cy.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function hp(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&r[u]!==l&&fp(e,u,l)}else for(var d in n)n.hasOwnProperty(d)&&fp(e,d,n[d])}function au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return Dy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var ru=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Lr=null;function dp(e){var n=Z(e);if(n&&(e=n.stateNode)){var r=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ie(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var u=l[Sn]||null;if(!u)throw Error(a(90));Ie(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&Pn(l)}break t;case"textarea":Mn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&$e(e,!!r.multiple,n,!1)}}}var ou=!1;function pp(e,n,r){if(ou)return e(n,r);ou=!0;try{var l=e(n);return l}finally{if(ou=!1,(Ur!==null||Lr!==null)&&(kl(),Ur&&(n=Ur,e=Lr,Lr=Ur=null,dp(n),e)))for(n=0;n<e.length;n++)dp(e[n])}}function Gs(e,n){var r=e.stateNode;if(r===null)return null;var l=r[Sn]||null;if(l===null)return null;r=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(Bi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{lu=!1}var da=null,cu=null,il=null;function mp(){if(il)return il;var e,n=cu,r=n.length,l,u="value"in da?da.value:da.textContent,d=u.length;for(e=0;e<r&&n[e]===u[e];e++);var x=r-e;for(l=1;l<=x&&n[r-l]===u[d-l];l++);return il=u.slice(e,1<l?1-l:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function gp(){return!1}function Bn(e){function n(r,l,u,d,x){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?rl:gp,this.isPropagationStopped=gp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Bn(Ja),ks=v({},Ja,{view:0,detail:0}),Uy=Bn(ks),uu,fu,Xs,ol=v({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(uu=e.screenX-Xs.screenX,fu=e.screenY-Xs.screenY):fu=uu=0,Xs=e),uu)},movementY:function(e){return"movementY"in e?e.movementY:fu}}),vp=Bn(ol),Ly=v({},ol,{dataTransfer:0}),Ny=Bn(Ly),Oy=v({},ks,{relatedTarget:0}),hu=Bn(Oy),zy=v({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Py=Bn(zy),Fy=v({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),By=Bn(Fy),Iy=v({},Ja,{data:0}),_p=Bn(Iy),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vy[e])?!!n[e]:!1}function du(){return ky}var Xy=v({},ks,{key:function(e){if(e.key){var n=Hy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wy=Bn(Xy),qy=v({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Bn(qy),Yy=v({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),jy=Bn(Yy),Zy=v({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=Bn(Zy),Qy=v({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=Bn(Qy),$y=v({},Ja,{newState:0,oldState:0}),tx=Bn($y),ex=[9,13,27,32],pu=Bi&&"CompositionEvent"in window,Ws=null;Bi&&"documentMode"in document&&(Ws=document.documentMode);var nx=Bi&&"TextEvent"in window&&!Ws,xp=Bi&&(!pu||Ws&&8<Ws&&11>=Ws),Sp=" ",Mp=!1;function Ep(e,n){switch(e){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function ix(e,n){switch(e){case"compositionend":return Tp(n);case"keypress":return n.which!==32?null:(Mp=!0,Sp);case"textInput":return e=n.data,e===Sp&&Mp?null:e;default:return null}}function ax(e,n){if(Nr)return e==="compositionend"||!pu&&Ep(e,n)?(e=mp(),il=cu=da=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rx[e.type]:n==="textarea"}function Ap(e,n,r,l){Ur?Lr?Lr.push(l):Lr=[l]:Ur=l,n=Kl(n,"onChange"),0<n.length&&(r=new sl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var qs=null,Ys=null;function sx(e){lv(e,0)}function ll(e){var n=st(e);if(Pn(n))return e}function Rp(e,n){if(e==="change")return n}var Cp=!1;if(Bi){var mu;if(Bi){var gu="oninput"in document;if(!gu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),gu=typeof wp.oninput=="function"}mu=gu}else mu=!1;Cp=mu&&(!document.documentMode||9<document.documentMode)}function Dp(){qs&&(qs.detachEvent("onpropertychange",Up),Ys=qs=null)}function Up(e){if(e.propertyName==="value"&&ll(Ys)){var n=[];Ap(n,Ys,e,su(e)),pp(sx,n)}}function ox(e,n,r){e==="focusin"?(Dp(),qs=n,Ys=r,qs.attachEvent("onpropertychange",Up)):e==="focusout"&&Dp()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Ys)}function cx(e,n){if(e==="click")return ll(n)}function ux(e,n){if(e==="input"||e==="change")return ll(n)}function fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:fx;function js(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!be.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Np(e,n){var r=Lp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Lp(r)}}function Op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=vi(e.document)}return n}function vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hx=Bi&&"documentMode"in document&&11>=document.documentMode,Or=null,_u=null,Zs=null,yu=!1;function Pp(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;yu||Or==null||Or!==vi(l)||(l=Or,"selectionStart"in l&&vu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zs&&js(Zs,l)||(Zs=l,l=Kl(_u,"onSelect"),0<l.length&&(n=new sl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=Or)))}function $a(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var zr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},xu={},Fp={};Bi&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function tr(e){if(xu[e])return xu[e];if(!zr[e])return e;var n=zr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Fp)return xu[e]=n[r];return e}var Bp=tr("animationend"),Ip=tr("animationiteration"),Hp=tr("animationstart"),dx=tr("transitionrun"),px=tr("transitionstart"),mx=tr("transitioncancel"),Gp=tr("transitionend"),Vp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function _i(e,n){Vp.set(e,n),zt(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Pr=0,Mu=0;function ul(){for(var e=Pr,n=Mu=Pr=0;n<e;){var r=ii[n];ii[n++]=null;var l=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,l!==null&&u!==null){var x=l.pending;x===null?u.next=u:(u.next=x.next,x.next=u),l.pending=u}d!==0&&kp(r,u,d)}}function fl(e,n,r,l){ii[Pr++]=e,ii[Pr++]=n,ii[Pr++]=r,ii[Pr++]=l,Mu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Eu(e,n,r,l){return fl(e,n,r,l),hl(e)}function er(e,n){return fl(e,null,null,n),hl(e)}function kp(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-ne(r),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=r|536870912),d):null}function hl(e){if(50<_o)throw _o=0,Nf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fr={};function gx(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,r,l){return new gx(e,n,r,l)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var r=e.alternate;return r===null?(r=Zn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Xp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function dl(e,n,r,l,u,d){var x=0;if(l=e,typeof e=="function")Tu(e)&&(x=1);else if(typeof e=="string")x=SS(e,r,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Zn(31,r,n,u),e.elementType=U,e.lanes=d,e;case T:return nr(r.children,u,d,n);case M:x=8,u|=24;break;case y:return e=Zn(12,r,n,u|2),e.elementType=y,e.lanes=d,e;case X:return e=Zn(13,r,n,u),e.elementType=X,e.lanes=d,e;case F:return e=Zn(19,r,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case P:x=9;break t;case w:x=11;break t;case z:x=14;break t;case k:x=16,l=null;break t}x=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Zn(x,r,n,u),n.elementType=e,n.type=l,n.lanes=d,n}function nr(e,n,r,l){return e=Zn(7,e,l,n),e.lanes=r,e}function bu(e,n,r){return e=Zn(6,e,null,n),e.lanes=r,e}function Wp(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function Au(e,n,r){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var qp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var r=qp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Gt(n)},qp.set(e,n),n)}return{value:e,source:n,stack:Gt(n)}}var Br=[],Ir=0,pl=null,Ks=0,ri=[],si=0,pa=null,wi=1,Di="";function Hi(e,n){Br[Ir++]=Ks,Br[Ir++]=pl,pl=e,Ks=n}function Yp(e,n,r){ri[si++]=wi,ri[si++]=Di,ri[si++]=pa,pa=e;var l=wi;e=Di;var u=32-ne(l)-1;l&=~(1<<u),r+=1;var d=32-ne(n)+u;if(30<d){var x=u-u%5;d=(l&(1<<x)-1).toString(32),l>>=x,u-=x,wi=1<<32-ne(n)+u|r<<u|l,Di=d+e}else wi=1<<d|r<<u|l,Di=e}function Ru(e){e.return!==null&&(Hi(e,1),Yp(e,1,0))}function Cu(e){for(;e===pl;)pl=Br[--Ir],Br[Ir]=null,Ks=Br[--Ir],Br[Ir]=null;for(;e===pa;)pa=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null,wi=ri[--si],ri[si]=null}function jp(e,n){ri[si++]=wi,ri[si++]=Di,ri[si++]=pa,wi=n.id,Di=n.overflow,pa=e}var En=null,Ye=null,Ee=!1,ma=null,oi=!1,wu=Error(a(519));function ga(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ai(n,e)),wu}function Zp(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[Je]=e,n[Sn]=l,r){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(r=0;r<xo.length;r++)ge(xo[r],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ln(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Dr(n,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||hv(n.textContent,r)?(l.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),l.onScroll!=null&&ge("scroll",n),l.onScrollEnd!=null&&ge("scrollend",n),l.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||ga(e,!0)}function Kp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:En=En.return}}function Hr(e){if(e!==En)return!1;if(!Ee)return Kp(e),Ee=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||jf(e.type,e.memoizedProps)),r=!r),r&&Ye&&ga(e),Kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=Sv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=Sv(e)}else n===27?(n=Ye,Da(e.type)?(e=$f,$f=null,Ye=e):Ye=n):Ye=En?ci(e.stateNode.nextSibling):null;return!0}function ir(){Ye=En=null,Ee=!1}function Du(){var e=ma;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ma=null),e}function Qs(e){ma===null?ma=[e]:ma.push(e)}var Uu=D(null),ar=null,Gi=null;function va(e,n,r){at(Uu,n._currentValue),n._currentValue=r}function Vi(e){e._currentValue=Uu.current,W(Uu)}function Lu(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Nu(e,n,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Lu(d.return,r,e),l||(x=null);break t}d=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=r,d=x.alternate,d!==null&&(d.lanes|=r),Lu(x,r,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Gr(e,n,r,l){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var b=u.type;jn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===yt.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}u=u.return}e!==null&&Nu(n,e,r,l),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){ar=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Qp(ar,e)}function gl(e,n){return ar===null&&rr(e),Qp(e,n)}function Qp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Gi===null){if(e===null)throw Error(a(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return r}var vx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},_x=s.unstable_scheduleCallback,yx=s.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new vx,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&_x(yx,function(){e.controller.abort()})}var $s=null,zu=0,Vr=0,kr=null;function xx(e,n){if($s===null){var r=$s=[];zu=0,Vr=If(),kr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return zu++,n.then(Jp,Jp),n}function Jp(){if(--zu===0&&$s!==null){kr!==null&&(kr.status="fulfilled");var e=$s;$s=null,Vr=0,kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Sx(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var $p=O.S;O.S=function(e,n){Pg=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xx(e,n),$p!==null&&$p(e,n)};var sr=D(null);function Pu(){var e=sr.current;return e!==null?e:Xe.pooledCache}function vl(e,n){n===null?at(sr,sr.current):at(sr,n.pool)}function tm(){var e=Pu();return e===null?null:{parent:sn._currentValue,pool:e}}var Xr=Error(a(460)),Fu=Error(a(474)),_l=Error(a(542)),yl={then:function(){}};function em(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Fi,Fi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,am(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,am(e),e}throw lr=n,Xr}}function or(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(lr=r,Xr):r}}var lr=null;function im(){if(lr===null)throw Error(a(459));var e=lr;return lr=null,e}function am(e){if(e===Xr||e===_l)throw Error(a(483))}var Wr=null,to=0;function xl(e){var n=to;return to+=1,Wr===null&&(Wr=[]),nm(Wr,e,n)}function eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function rm(e){function n(K,V){if(e){var tt=K.deletions;tt===null?(K.deletions=[V],K.flags|=16):tt.push(V)}}function r(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function l(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=Ii(K,V),K.index=0,K.sibling=null,K}function d(K,V,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<V?(K.flags|=67108866,V):tt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,V,tt,pt){return V===null||V.tag!==6?(V=bu(tt,K.mode,pt),V.return=K,V):(V=u(V,tt),V.return=K,V)}function B(K,V,tt,pt){var Kt=tt.type;return Kt===T?dt(K,V,tt.props.children,pt,tt.key):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&or(Kt)===V.type)?(V=u(V,tt.props),eo(V,tt),V.return=K,V):(V=dl(tt.type,tt.key,tt.props,null,K.mode,pt),eo(V,tt),V.return=K,V)}function et(K,V,tt,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Au(tt,K.mode,pt),V.return=K,V):(V=u(V,tt.children||[]),V.return=K,V)}function dt(K,V,tt,pt,Kt){return V===null||V.tag!==7?(V=nr(tt,K.mode,pt,Kt),V.return=K,V):(V=u(V,tt),V.return=K,V)}function _t(K,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=bu(""+V,K.mode,tt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return tt=dl(V.type,V.key,V.props,null,K.mode,tt),eo(tt,V),tt.return=K,tt;case E:return V=Au(V,K.mode,tt),V.return=K,V;case k:return V=or(V),_t(K,V,tt)}if(mt(V)||nt(V))return V=nr(V,K.mode,tt,null),V.return=K,V;if(typeof V.then=="function")return _t(K,xl(V),tt);if(V.$$typeof===L)return _t(K,gl(K,V),tt);Sl(K,V)}return null}function rt(K,V,tt,pt){var Kt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Kt!==null?null:b(K,V,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===Kt?B(K,V,tt,pt):null;case E:return tt.key===Kt?et(K,V,tt,pt):null;case k:return tt=or(tt),rt(K,V,tt,pt)}if(mt(tt)||nt(tt))return Kt!==null?null:dt(K,V,tt,pt,null);if(typeof tt.then=="function")return rt(K,V,xl(tt),pt);if(tt.$$typeof===L)return rt(K,V,gl(K,tt),pt);Sl(K,tt)}return null}function ut(K,V,tt,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(tt)||null,b(V,K,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return K=K.get(pt.key===null?tt:pt.key)||null,B(V,K,pt,Kt);case E:return K=K.get(pt.key===null?tt:pt.key)||null,et(V,K,pt,Kt);case k:return pt=or(pt),ut(K,V,tt,pt,Kt)}if(mt(pt)||nt(pt))return K=K.get(tt)||null,dt(V,K,pt,Kt,null);if(typeof pt.then=="function")return ut(K,V,tt,xl(pt),Kt);if(pt.$$typeof===L)return ut(K,V,tt,gl(V,pt),Kt);Sl(V,pt)}return null}function kt(K,V,tt,pt){for(var Kt=null,Ce=null,Wt=V,ue=V=0,xe=null;Wt!==null&&ue<tt.length;ue++){Wt.index>ue?(xe=Wt,Wt=null):xe=Wt.sibling;var we=rt(K,Wt,tt[ue],pt);if(we===null){Wt===null&&(Wt=xe);break}e&&Wt&&we.alternate===null&&n(K,Wt),V=d(we,V,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we,Wt=xe}if(ue===tt.length)return r(K,Wt),Ee&&Hi(K,ue),Kt;if(Wt===null){for(;ue<tt.length;ue++)Wt=_t(K,tt[ue],pt),Wt!==null&&(V=d(Wt,V,ue),Ce===null?Kt=Wt:Ce.sibling=Wt,Ce=Wt);return Ee&&Hi(K,ue),Kt}for(Wt=l(Wt);ue<tt.length;ue++)xe=ut(Wt,K,ue,tt[ue],pt),xe!==null&&(e&&xe.alternate!==null&&Wt.delete(xe.key===null?ue:xe.key),V=d(xe,V,ue),Ce===null?Kt=xe:Ce.sibling=xe,Ce=xe);return e&&Wt.forEach(function(za){return n(K,za)}),Ee&&Hi(K,ue),Kt}function te(K,V,tt,pt){if(tt==null)throw Error(a(151));for(var Kt=null,Ce=null,Wt=V,ue=V=0,xe=null,we=tt.next();Wt!==null&&!we.done;ue++,we=tt.next()){Wt.index>ue?(xe=Wt,Wt=null):xe=Wt.sibling;var za=rt(K,Wt,we.value,pt);if(za===null){Wt===null&&(Wt=xe);break}e&&Wt&&za.alternate===null&&n(K,Wt),V=d(za,V,ue),Ce===null?Kt=za:Ce.sibling=za,Ce=za,Wt=xe}if(we.done)return r(K,Wt),Ee&&Hi(K,ue),Kt;if(Wt===null){for(;!we.done;ue++,we=tt.next())we=_t(K,we.value,pt),we!==null&&(V=d(we,V,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return Ee&&Hi(K,ue),Kt}for(Wt=l(Wt);!we.done;ue++,we=tt.next())we=ut(Wt,K,ue,we.value,pt),we!==null&&(e&&we.alternate!==null&&Wt.delete(we.key===null?ue:we.key),V=d(we,V,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return e&&Wt.forEach(function(LS){return n(K,LS)}),Ee&&Hi(K,ue),Kt}function Ve(K,V,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var Kt=tt.key;V!==null;){if(V.key===Kt){if(Kt=tt.type,Kt===T){if(V.tag===7){r(K,V.sibling),pt=u(V,tt.props.children),pt.return=K,K=pt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&or(Kt)===V.type){r(K,V.sibling),pt=u(V,tt.props),eo(pt,tt),pt.return=K,K=pt;break t}r(K,V);break}else n(K,V);V=V.sibling}tt.type===T?(pt=nr(tt.props.children,K.mode,pt,tt.key),pt.return=K,K=pt):(pt=dl(tt.type,tt.key,tt.props,null,K.mode,pt),eo(pt,tt),pt.return=K,K=pt)}return x(K);case E:t:{for(Kt=tt.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){r(K,V.sibling),pt=u(V,tt.children||[]),pt.return=K,K=pt;break t}else{r(K,V);break}else n(K,V);V=V.sibling}pt=Au(tt,K.mode,pt),pt.return=K,K=pt}return x(K);case k:return tt=or(tt),Ve(K,V,tt,pt)}if(mt(tt))return kt(K,V,tt,pt);if(nt(tt)){if(Kt=nt(tt),typeof Kt!="function")throw Error(a(150));return tt=Kt.call(tt),te(K,V,tt,pt)}if(typeof tt.then=="function")return Ve(K,V,xl(tt),pt);if(tt.$$typeof===L)return Ve(K,V,gl(K,tt),pt);Sl(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(r(K,V.sibling),pt=u(V,tt),pt.return=K,K=pt):(r(K,V),pt=bu(tt,K.mode,pt),pt.return=K,K=pt),x(K)):r(K,V)}return function(K,V,tt,pt){try{to=0;var Kt=Ve(K,V,tt,pt);return Wr=null,Kt}catch(Wt){if(Wt===Xr||Wt===_l)throw Wt;var Ce=Zn(29,Wt,null,K.mode);return Ce.lanes=pt,Ce.return=K,Ce}finally{}}}var cr=rm(!0),sm=rm(!1),_a=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=hl(e),kp(e,null,r),n}return fl(e,l,n,r),hl(e)}function no(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Fs(e,r)}}function Hu(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Gu=!1;function io(){if(Gu){var e=kr;if(e!==null)throw e}}function ao(e,n,r,l){Gu=!1;var u=e.updateQueue;_a=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,et=B.next;B.next=null,x===null?d=et:x.next=et,x=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==x&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=B))}if(d!==null){var _t=u.baseState;x=0,dt=et=B=null,b=d;do{var rt=b.lane&-536870913,ut=rt!==b.lane;if(ut?(ye&rt)===rt:(l&rt)===rt){rt!==0&&rt===Vr&&(Gu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,te=b;rt=n;var Ve=r;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){_t=kt.call(Ve,_t,rt);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,rt=typeof kt=="function"?kt.call(Ve,_t,rt):kt,rt==null)break t;_t=v({},_t,rt);break t;case 2:_a=!0}}rt=b.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=u.callbacks,ut===null?u.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=ut,B=_t):dt=dt.next=ut,x|=rt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ut=b,b=ut.next,ut.next=null,u.lastBaseUpdate=ut,u.shared.pending=null}}while(!0);dt===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),ba|=x,e.lanes=x,e.memoizedState=_t}}function om(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function lm(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)om(r[e],n)}var qr=D(null),Ml=D(0);function cm(e,n){e=Qi,at(Ml,e),at(qr,n),Qi=e|n.baseLanes}function Vu(){at(Ml,Qi),at(qr,qr.current)}function ku(){Qi=Ml.current,W(qr),W(Ml)}var Kn=D(null),li=null;function Sa(e){var n=e.alternate;at(nn,nn.current&1),at(Kn,e),li===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(li=e)}function Xu(e){at(nn,nn.current),at(Kn,e),li===null&&(li=e)}function um(e){e.tag===22?(at(nn,nn.current),at(Kn,e),li===null&&(li=e)):Ma()}function Ma(){at(nn,nn.current),at(Kn,Kn.current)}function Qn(e){W(Kn),li===e&&(li=null),W(nn)}var nn=D(0);function El(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Qf(r)||Jf(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,ce=null,He=null,on=null,Tl=!1,Yr=!1,ur=!1,bl=0,ro=0,jr=null,Mx=0;function tn(){throw Error(a(321))}function Wu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!jn(e[r],n[r]))return!1;return!0}function qu(e,n,r,l,u,d){return ki=d,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Ym:lf,ur=!1,d=r(l,u),ur=!1,Yr&&(d=hm(n,r,l,u)),fm(e),d}function fm(e){O.H=lo;var n=He!==null&&He.next!==null;if(ki=0,on=He=ce=null,Tl=!1,ro=0,jr=null,n)throw Error(a(300));e===null||ln||(e=e.dependencies,e!==null&&ml(e)&&(ln=!0))}function hm(e,n,r,l){ce=e;var u=0;do{if(Yr&&(jr=null),ro=0,Yr=!1,25<=u)throw Error(a(301));if(u+=1,on=He=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=jm,d=n(r,l)}while(Yr);return d}function Ex(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ce.flags|=1024),n}function Yu(){var e=bl!==0;return bl=0,e}function ju(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Zu(e){if(Tl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Tl=!1}ki=0,on=He=ce=null,Yr=!1,ro=bl=0,jr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ce.memoizedState=on=e:on=on.next=e,on}function an(){if(He===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=on===null?ce.memoizedState:on.next;if(n!==null)on=n,He=e;else{if(e===null)throw ce.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?ce.memoizedState=on=e:on=on.next=e}return on}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,jr===null&&(jr=[]),e=nm(jr,e,n),n=ce,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Ym:lf),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===L)return Tn(e)}throw Error(a(438,String(e)))}function Ku(e){var n=null,r=ce.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Al(),ce.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=R;return n.index++,r}function Xi(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=an();return Qu(n,He,e)}function Qu(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=x=null,B=null,et=n,dt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ye&_t)===_t:(ki&_t)===_t){var rt=et.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Vr&&(dt=!0);else if((ki&rt)===rt){et=et.next,rt===Vr&&(dt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=_t,x=d):B=B.next=_t,ce.lanes|=rt,ba|=rt;_t=et.action,ur&&r(d,_t),d=et.hasEagerState?et.eagerState:r(d,_t)}else rt={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=rt,x=d):B=B.next=rt,ce.lanes|=_t,ba|=_t;et=et.next}while(et!==null&&et!==n);if(B===null?x=d:B.next=b,!jn(d,e.memoizedState)&&(ln=!0,dt&&(r=kr,r!==null)))throw r;e.memoizedState=d,e.baseState=x,e.baseQueue=B,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ju(e){var n=an(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);jn(d,n.memoizedState)||(ln=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,l]}function dm(e,n,r){var l=ce,u=an(),d=Ee;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var x=!jn((He||u).memoizedState,r);if(x&&(u.memoizedState=r,ln=!0),u=u.queue,ef(gm.bind(null,l,u,e),[e]),u.getSnapshot!==n||x||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,Zr(9,{destroy:void 0},mm.bind(null,l,u,r,n),null),Xe===null)throw Error(a(349));d||(ki&127)!==0||pm(l,n,r)}return r}function pm(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ce.updateQueue,n===null?(n=Al(),ce.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function mm(e,n,r,l){n.value=r,n.getSnapshot=l,vm(n)&&_m(e)}function gm(e,n,r){return r(function(){vm(n)&&_m(e)})}function vm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!jn(e,r)}catch{return!0}}function _m(e){var n=er(e,2);n!==null&&kn(n,e,2)}function $u(e){var n=Nn();if(typeof e=="function"){var r=e;if(e=r(),ur){Pt(!0);try{r()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function ym(e,n,r,l){return e.baseState=r,Qu(e,He,typeof l=="function"?l:Xi)}function Tx(e,n,r,l,u){if(Ul(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};O.T!==null?r(!0):d.isTransition=!1,l(d),r=n.pending,r===null?(d.next=n.pending=d,xm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function xm(e,n){var r=n.action,l=n.payload,u=e.state;if(n.isTransition){var d=O.T,x={};O.T=x;try{var b=r(u,l),B=O.S;B!==null&&B(x,b),Sm(e,n,b)}catch(et){tf(e,n,et)}finally{d!==null&&x.types!==null&&(d.types=x.types),O.T=d}}else try{d=r(u,l),Sm(e,n,d)}catch(et){tf(e,n,et)}}function Sm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Mm(e,n,l)},function(l){return tf(e,n,l)}):Mm(e,n,r)}function Mm(e,n,r){n.status="fulfilled",n.value=r,Em(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,xm(e,r)))}function tf(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,Em(n),n=n.next;while(n!==l)}e.action=null}function Em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Tm(e,n){return n}function bm(e,n){if(Ee){var r=Xe.formState;if(r!==null){t:{var l=ce;if(Ee){if(Ye){e:{for(var u=Ye,d=oi;u.nodeType!==8;){if(!d){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ye=ci(u.nextSibling),l=u.data==="F!";break t}}ga(l)}l=!1}l&&(n=r[0])}}return r=Nn(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tm,lastRenderedState:n},r.queue=l,r=Xm.bind(null,ce,l),l.dispatch=r,l=$u(!1),d=of.bind(null,ce,!1,l.queue),l=Nn(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,r=Tx.bind(null,ce,u,d,r),u.dispatch=r,l.memoizedState=e,[n,r,!1]}function Am(e){var n=an();return Rm(n,He,e)}function Rm(e,n,r){if(n=Qu(e,n,Tm)[0],e=Cl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=so(n)}catch(x){throw x===Xr?_l:x}else l=n;n=an();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(ce.flags|=2048,Zr(9,{destroy:void 0},bx.bind(null,u,r),null)),[l,d,e]}function bx(e,n){e.action=n}function Cm(e){var n=an(),r=He;if(r!==null)return Rm(n,r,e);an(),n=n.memoizedState,r=an();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function Zr(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Al(),ce.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function wm(){return an().memoizedState}function wl(e,n,r,l){var u=Nn();ce.flags|=e,u.memoizedState=Zr(1|n,{destroy:void 0},r,l===void 0?null:l)}function Dl(e,n,r,l){var u=an();l=l===void 0?null:l;var d=u.memoizedState.inst;He!==null&&l!==null&&Wu(l,He.memoizedState.deps)?u.memoizedState=Zr(n,d,r,l):(ce.flags|=e,u.memoizedState=Zr(1|n,d,r,l))}function Dm(e,n){wl(8390656,8,e,n)}function ef(e,n){Dl(2048,8,e,n)}function Ax(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Al(),ce.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function Um(e){var n=an().memoizedState;return Ax({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Lm(e,n){return Dl(4,2,e,n)}function Nm(e,n){return Dl(4,4,e,n)}function Om(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function zm(e,n,r){r=r!=null?r.concat([e]):null,Dl(4,4,Om.bind(null,n,e),r)}function nf(){}function Pm(e,n){var r=an();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&Wu(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function Fm(e,n){var r=an();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&Wu(n,l[1]))return l[0];if(l=e(),ur){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,n],l}function af(e,n,r){return r===void 0||(ki&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=Bg(),ce.lanes|=e,ba|=e,r)}function Bm(e,n,r,l){return jn(r,n)?r:qr.current!==null?(e=af(e,r,l),jn(e,n)||(ln=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(ye&261930)===0?(ln=!0,e.memoizedState=r):(e=Bg(),ce.lanes|=e,ba|=e,n)}function Im(e,n,r,l,u){var d=J.p;J.p=d!==0&&8>d?d:8;var x=O.T,b={};O.T=b,of(e,!1,n,r);try{var B=u(),et=O.S;if(et!==null&&et(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Sx(B,l);oo(e,n,dt,ti(e))}else oo(e,n,l,ti(e))}catch(_t){oo(e,n,{then:function(){},status:"rejected",reason:_t},ti())}finally{J.p=d,x!==null&&b.types!==null&&(x.types=b.types),O.T=x}}function Rx(){}function rf(e,n,r,l){if(e.tag!==5)throw Error(a(476));var u=Hm(e).queue;Im(e,u,n,Q,r===null?Rx:function(){return Gm(e),r(l)})}function Hm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Q},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gm(e){var n=Hm(e);n.next===null&&(n=e.alternate.memoizedState),oo(e,n.next.queue,{},ti())}function sf(){return Tn(bo)}function Vm(){return an().memoizedState}function km(){return an().memoizedState}function Cx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=ti();e=ya(r);var l=xa(n,e,r);l!==null&&(kn(l,n,r),no(l,n,r)),n={cache:Ou()},e.payload=n;return}n=n.return}}function wx(e,n,r){var l=ti();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Wm(n,r):(r=Eu(e,n,r,l),r!==null&&(kn(r,e,l),qm(r,n,l)))}function Xm(e,n,r){var l=ti();oo(e,n,r,l)}function oo(e,n,r,l){var u={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Wm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,b=d(x,r);if(u.hasEagerState=!0,u.eagerState=b,jn(b,x))return fl(e,n,u,0),Xe===null&&ul(),!1}catch{}finally{}if(r=Eu(e,n,u,l),r!==null)return kn(r,e,l),qm(r,n,l),!0}return!1}function of(e,n,r,l){if(l={lane:2,revertLane:If(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(a(479))}else n=Eu(e,r,l,2),n!==null&&kn(n,e,2)}function Ul(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Wm(e,n){Yr=Tl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function qm(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Fs(e,r)}}var lo={readContext:Tn,use:Rl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};lo.useEffectEvent=tn;var Ym={readContext:Tn,use:Rl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Dm,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,wl(4194308,4,Om.bind(null,n,e),r)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var r=Nn();n=n===void 0?null:n;var l=e();if(ur){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=Nn();if(r!==void 0){var u=r(n);if(ur){Pt(!0);try{r(n)}finally{Pt(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=wx.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=$u(e);var n=e.queue,r=Xm.bind(null,ce,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:nf,useDeferredValue:function(e,n){var r=Nn();return af(r,e,n)},useTransition:function(){var e=$u(!1);return e=Im.bind(null,ce,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=ce,u=Nn();if(Ee){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Xe===null)throw Error(a(349));(ye&127)!==0||pm(l,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,Dm(gm.bind(null,l,d,e),[e]),l.flags|=2048,Zr(9,{destroy:void 0},mm.bind(null,l,d,r,n),null),r},useId:function(){var e=Nn(),n=Xe.identifierPrefix;if(Ee){var r=Di,l=wi;r=(l&~(1<<32-ne(l)-1)).toString(32)+r,n="_"+n+"R_"+r,r=bl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=Mx++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:bm,useActionState:bm,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=of.bind(null,ce,!0,r),r.dispatch=n,[e,n]},useMemoCache:Ku,useCacheRefresh:function(){return Nn().memoizedState=Cx.bind(null,ce)},useEffectEvent:function(e){var n=Nn(),r={impl:e};return n.memoizedState=r,function(){if((Ue&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},lf={readContext:Tn,use:Rl,useCallback:Pm,useContext:Tn,useEffect:ef,useImperativeHandle:zm,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:Fm,useReducer:Cl,useRef:wm,useState:function(){return Cl(Xi)},useDebugValue:nf,useDeferredValue:function(e,n){var r=an();return Bm(r,He.memoizedState,e,n)},useTransition:function(){var e=Cl(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:dm,useId:Vm,useHostTransitionStatus:sf,useFormState:Am,useActionState:Am,useOptimistic:function(e,n){var r=an();return ym(r,He,e,n)},useMemoCache:Ku,useCacheRefresh:km};lf.useEffectEvent=Um;var jm={readContext:Tn,use:Rl,useCallback:Pm,useContext:Tn,useEffect:ef,useImperativeHandle:zm,useInsertionEffect:Lm,useLayoutEffect:Nm,useMemo:Fm,useReducer:Ju,useRef:wm,useState:function(){return Ju(Xi)},useDebugValue:nf,useDeferredValue:function(e,n){var r=an();return He===null?af(r,e,n):Bm(r,He.memoizedState,e,n)},useTransition:function(){var e=Ju(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:dm,useId:Vm,useHostTransitionStatus:sf,useFormState:Cm,useActionState:Cm,useOptimistic:function(e,n){var r=an();return He!==null?ym(r,He,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:km};jm.useEffectEvent=Um;function cf(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:v({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var uf={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=ti(),u=ya(l);u.payload=n,r!=null&&(u.callback=r),n=xa(e,u,l),n!==null&&(kn(n,e,l),no(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=ti(),u=ya(l);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=xa(e,u,l),n!==null&&(kn(n,e,l),no(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=ti(),l=ya(r);l.tag=2,n!=null&&(l.callback=n),n=xa(e,l,r),n!==null&&(kn(n,e,r),no(n,e,r))}};function Zm(e,n,r,l,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,x):n.prototype&&n.prototype.isPureReactComponent?!js(r,l)||!js(u,d):!0}function Km(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&uf.enqueueReplaceState(n,n.state,null)}function fr(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=v({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function Qm(e){cl(e)}function Jm(e){console.error(e)}function $m(e){cl(e)}function Ll(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function tg(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(e,n,r){return r=ya(r),r.tag=3,r.payload={element:null},r.callback=function(){Ll(e,n)},r}function eg(e){return e=ya(e),e.tag=3,e}function ng(e,n,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){tg(n,r,l)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){tg(n,r,l),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Dx(e,n,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Gr(n,r,u,!0),r=Kn.current,r!==null){switch(r.tag){case 31:case 13:return li===null?Xl():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===yl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Pf(e,l,u)),!1;case 22:return r.flags|=65536,l===yl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Pf(e,l,u)),!1}throw Error(a(435,r.tag))}return Pf(e,l,u),Xl(),!1}if(Ee)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==wu&&(e=Error(a(422),{cause:l}),Qs(ai(e,r)))):(l!==wu&&(n=Error(a(423),{cause:l}),Qs(ai(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ai(l,r),u=ff(e.stateNode,l,u),Hu(e,u),en!==4&&(en=2)),!1;var d=Error(a(520),{cause:l});if(d=ai(d,r),vo===null?vo=[d]:vo.push(d),en!==4&&(en=2),n===null)return!0;l=ai(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=ff(r.stateNode,l,e),Hu(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Aa===null||!Aa.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=eg(u),ng(u,e,r,l),Hu(r,u),!1}r=r.return}while(r!==null);return!1}var hf=Error(a(461)),ln=!1;function bn(e,n,r,l){n.child=e===null?sm(n,null,r,l):cr(n,e.child,r,l)}function ig(e,n,r,l,u){r=r.render;var d=n.ref;if("ref"in l){var x={};for(var b in l)b!=="ref"&&(x[b]=l[b])}else x=l;return rr(n),l=qu(e,n,r,x,d,u),b=Yu(),e!==null&&!ln?(ju(e,n,u),Wi(e,n,u)):(Ee&&b&&Ru(n),n.flags|=1,bn(e,n,l,u),n.child)}function ag(e,n,r,l,u){if(e===null){var d=r.type;return typeof d=="function"&&!Tu(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,rg(e,n,d,l,u)):(e=dl(r.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!xf(e,u)){var x=d.memoizedProps;if(r=r.compare,r=r!==null?r:js,r(x,l)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Ii(d,l),e.ref=n.ref,e.return=n,n.child=e}function rg(e,n,r,l,u){if(e!==null){var d=e.memoizedProps;if(js(d,l)&&e.ref===n.ref)if(ln=!1,n.pendingProps=l=d,xf(e,u))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return df(e,n,r,l,u)}function sg(e,n,r,l){var u=l.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,n.child=null;return og(e,n,d,r,l)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,d!==null?d.cachePool:null),d!==null?cm(n,d):Vu(),um(n);else return l=n.lanes=536870912,og(e,n,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(vl(n,d.cachePool),cm(n,d),Ma(),n.memoizedState=null):(e!==null&&vl(n,null),Vu(),Ma());return bn(e,n,u,r),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function og(e,n,r,l,u){var d=Pu();return d=d===null?null:{parent:sn._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&vl(n,null),Vu(),um(n),e!==null&&Gr(e,n,l,!0),n.childLanes=u,null}function Nl(e,n){return n=zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function lg(e,n,r){return cr(n,e.child,null,r),e=Nl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function Ux(e,n,r){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=Nl(n,l),n.lanes=536870912,co(null,e);if(Xu(n),(e=Ye)?(e=xv(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},r=Wp(e),r.return=n,n.child=r,En=n,Ye=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return Nl(n,l)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=lg(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(ln||Gr(e,n,r,!1),u=(r&e.childLanes)!==0,ln||u){if(l=Xe,l!==null&&(x=Ci(l,r),x!==0&&x!==d.retryLane))throw d.retryLane=x,er(e,x),kn(l,e,x),hf;Xl(),n=lg(e,n,r)}else e=d.treeContext,Ye=ci(x.nextSibling),En=n,Ee=!0,ma=null,oi=!1,e!==null&&jp(n,e),n=Nl(n,l),n.flags|=4096;return n}return e=Ii(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function df(e,n,r,l,u){return rr(n),r=qu(e,n,r,l,void 0,u),l=Yu(),e!==null&&!ln?(ju(e,n,u),Wi(e,n,u)):(Ee&&l&&Ru(n),n.flags|=1,bn(e,n,r,u),n.child)}function cg(e,n,r,l,u,d){return rr(n),n.updateQueue=null,r=hm(n,l,r,u),fm(e),l=Yu(),e!==null&&!ln?(ju(e,n,d),Wi(e,n,d)):(Ee&&l&&Ru(n),n.flags|=1,bn(e,n,r,d),n.child)}function ug(e,n,r,l,u){if(rr(n),n.stateNode===null){var d=Fr,x=r.contextType;typeof x=="object"&&x!==null&&(d=Tn(x)),d=new r(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=uf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Bu(n),x=r.contextType,d.context=typeof x=="object"&&x!==null?Tn(x):Fr,d.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(cf(n,r,x,l),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&uf.enqueueReplaceState(d,d.state,null),ao(n,l,d,u),io(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,B=fr(r,b);d.props=B;var et=d.context,dt=r.contextType;x=Fr,typeof dt=="object"&&dt!==null&&(x=Tn(dt));var _t=r.getDerivedStateFromProps;dt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==x)&&Km(n,d,l,x),_a=!1;var rt=n.memoizedState;d.state=rt,ao(n,l,d,u),io(),et=n.memoizedState,b||rt!==et||_a?(typeof _t=="function"&&(cf(n,r,_t,l),et=n.memoizedState),(B=_a||Zm(n,r,B,l,rt,et,x))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=et),d.props=l,d.state=et,d.context=x,l=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,Iu(e,n),x=n.memoizedProps,dt=fr(r,x),d.props=dt,_t=n.pendingProps,rt=d.context,et=r.contextType,B=Fr,typeof et=="object"&&et!==null&&(B=Tn(et)),b=r.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==_t||rt!==B)&&Km(n,d,l,B),_a=!1,rt=n.memoizedState,d.state=rt,ao(n,l,d,u),io();var ut=n.memoizedState;x!==_t||rt!==ut||_a||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof b=="function"&&(cf(n,r,b,l),ut=n.memoizedState),(dt=_a||Zm(n,r,dt,l,rt,ut,B)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ut,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ut,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ut),d.props=l,d.state=ut,d.context=B,l=dt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),l=!1)}return d=l,Ol(e,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&l?(n.child=cr(n,e.child,null,u),n.child=cr(n,null,r,u)):bn(e,n,r,u),n.memoizedState=d.state,e=n.child):e=Wi(e,n,u),e}function fg(e,n,r,l){return ir(),n.flags|=256,bn(e,n,r,l),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:tm()}}function gf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=$n),e}function hg(e,n,r){var l=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Sa(n):Ma(),(e=Ye)?(e=xv(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},r=Wp(e),r.return=n,n.child=r,En=n,Ye=null)):e=null,e===null)throw ga(n);return Jf(e)?n.lanes=32:n.lanes=536870912,null}var b=l.children;return l=l.fallback,u?(Ma(),u=n.mode,b=zl({mode:"hidden",children:b},u),l=nr(l,u,r,null),b.return=n,l.return=n,b.sibling=l,n.child=b,l=n.child,l.memoizedState=mf(r),l.childLanes=gf(e,x,r),n.memoizedState=pf,co(null,l)):(Sa(n),vf(n,b))}var B=e.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(d)n.flags&256?(Sa(n),n.flags&=-257,n=_f(e,n,r)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),b=l.fallback,u=n.mode,l=zl({mode:"visible",children:l.children},u),b=nr(b,u,r,null),b.flags|=2,l.return=n,b.return=n,l.sibling=b,n.child=l,cr(n,e.child,null,r),l=n.child,l.memoizedState=mf(r),l.childLanes=gf(e,x,r),n.memoizedState=pf,n=co(null,l));else if(Sa(n),Jf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var et=x.dgst;x=et,l=Error(a(419)),l.stack="",l.digest=x,Qs({value:l,source:null,stack:null}),n=_f(e,n,r)}else if(ln||Gr(e,n,r,!1),x=(r&e.childLanes)!==0,ln||x){if(x=Xe,x!==null&&(l=Ci(x,r),l!==0&&l!==B.retryLane))throw B.retryLane=l,er(e,l),kn(x,e,l),hf;Qf(b)||Xl(),n=_f(e,n,r)}else Qf(b)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ye=ci(b.nextSibling),En=n,Ee=!0,ma=null,oi=!1,e!==null&&jp(n,e),n=vf(n,l.children),n.flags|=4096);return n}return u?(Ma(),b=l.fallback,u=n.mode,B=e.child,et=B.sibling,l=Ii(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,et!==null?b=Ii(et,b):(b=nr(b,u,r,null),b.flags|=2),b.return=n,l.return=n,l.sibling=b,n.child=l,co(null,l),l=n.child,b=e.child.memoizedState,b===null?b=mf(r):(u=b.cachePool,u!==null?(B=sn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=tm(),b={baseLanes:b.baseLanes|r,cachePool:u}),l.memoizedState=b,l.childLanes=gf(e,x,r),n.memoizedState=pf,co(e.child,l)):(Sa(n),r=e.child,e=r.sibling,r=Ii(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=r,n.memoizedState=null,r)}function vf(e,n){return n=zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function _f(e,n,r){return cr(n,e.child,null,r),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dg(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Lu(e.return,n,r)}function yf(e,n,r,l,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=r,x.tailMode=u,x.treeForkCount=d)}function pg(e,n,r){var l=n.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var x=nn.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,at(nn,x),bn(e,n,l,r),l=Ee?Ks:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,r,n);else if(e.tag===19)dg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&El(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),yf(n,!1,u,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&El(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}yf(n,!0,r,null,d,l);break;case"together":yf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Wi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Gr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Ii(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Ii(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function xf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Lx(e,n,r){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),va(n,sn,e.memoizedState.cache),ir();break;case 27:case 5:Ht(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Sa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?hg(e,n,r):(Sa(n),e=Wi(e,n,r),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Gr(e,n,r,!1),l=(r&n.childLanes)!==0),u){if(l)return pg(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),at(nn,nn.current),l)break;return null;case 22:return n.lanes=0,sg(e,n,r,n.pendingProps);case 24:va(n,sn,e.memoizedState.cache)}return Wi(e,n,r)}function mg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!xf(e,r)&&(n.flags&128)===0)return ln=!1,Lx(e,n,r);ln=(e.flags&131072)!==0}else ln=!1,Ee&&(n.flags&1048576)!==0&&Yp(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(e=or(n.elementType),n.type=e,typeof e=="function")Tu(e)?(l=fr(e,l),n.tag=1,n=ug(null,n,e,l,r)):(n.tag=0,n=df(null,n,e,l,r));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=ig(null,n,e,l,r);break t}else if(u===z){n.tag=14,n=ag(null,n,e,l,r);break t}}throw n=ct(e)||e,Error(a(306,n,""))}}return n;case 0:return df(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,u=fr(l,n.pendingProps),ug(e,n,l,u,r);case 3:t:{if(Ct(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var d=n.memoizedState;u=d.element,Iu(e,n),ao(n,l,null,r);var x=n.memoizedState;if(l=x.cache,va(n,sn,l),l!==d.cache&&Nu(n,[sn],r,!0),io(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=fg(e,n,l,r);break t}else if(l!==u){u=ai(Error(a(424)),n),Qs(u),n=fg(e,n,l,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=ci(e.firstChild),En=n,Ee=!0,ma=null,oi=!0,r=sm(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ir(),l===u){n=Wi(e,n,r);break t}bn(e,n,l,r)}n=n.child}return n;case 26:return Ol(e,n),e===null?(r=Av(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ee||(r=n.type,e=n.pendingProps,l=Ql(gt.current).createElement(r),l[Je]=n,l[Sn]=e,An(l,r,e),q(l),n.stateNode=l):n.memoizedState=Av(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Ee&&(l=n.stateNode=Ev(n.type,n.pendingProps,gt.current),En=n,oi=!0,u=Ye,Da(n.type)?($f=u,Ye=ci(l.firstChild)):Ye=u),bn(e,n,n.pendingProps.children,r),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=l=Ye)&&(l=lS(l,n.type,n.pendingProps,oi),l!==null?(n.stateNode=l,En=n,Ye=ci(l.firstChild),oi=!1,u=!0):u=!1),u||ga(n)),Ht(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,l=d.children,jf(u,d)?l=null:x!==null&&jf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,Ex,null,null,r),bo._currentValue=u),Ol(e,n),bn(e,n,l,r),n.child;case 6:return e===null&&Ee&&((e=r=Ye)&&(r=cS(r,n.pendingProps,oi),r!==null?(n.stateNode=r,En=n,Ye=null,e=!0):e=!1),e||ga(n)),null;case 13:return hg(e,n,r);case 4:return Ct(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=cr(n,null,l,r):bn(e,n,l,r),n.child;case 11:return ig(e,n,n.type,n.pendingProps,r);case 7:return bn(e,n,n.pendingProps,r),n.child;case 8:return bn(e,n,n.pendingProps.children,r),n.child;case 12:return bn(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,va(n,n.type,l.value),bn(e,n,l.children,r),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,rr(n),u=Tn(u),l=l(u),n.flags|=1,bn(e,n,l,r),n.child;case 14:return ag(e,n,n.type,n.pendingProps,r);case 15:return rg(e,n,n.type,n.pendingProps,r);case 19:return pg(e,n,r);case 31:return Ux(e,n,r);case 22:return sg(e,n,r,n.pendingProps);case 24:return rr(n),l=Tn(sn),e===null?(u=Pu(),u===null&&(u=Xe,d=Ou(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:l,cache:u},Bu(n),va(n,sn,u)):((e.lanes&r)!==0&&(Iu(e,n),ao(n,null,null,r),io()),u=e.memoizedState,d=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,sn,l)):(l=d.cache,va(n,sn,l),l!==u.cache&&Nu(n,[sn],r,!0))),bn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function qi(e){e.flags|=4}function Sf(e,n,r,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Vg())e.flags|=8192;else throw lr=yl,Fu}else e.flags&=-16777217}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uv(n))if(Vg())e.flags|=8192;else throw lr=yl,Fu}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?fn():536870912,e.lanes|=n,$r|=n)}function uo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function Nx(e,n,r){var l=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Vi(sn),qt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),je(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(qi(n),d!==null?(je(n),gg(n,d)):(je(n),Sf(n,u,null,l,r))):d?d!==e.memoizedState?(qi(n),je(n),gg(n,d)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&qi(n),je(n),Sf(n,u,e,l,r)),null;case 27:if(ze(n),r=gt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&qi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return je(n),null}e=G.current,Hr(n)?Zp(n):(e=Ev(u,l,r),n.stateNode=e,qi(n))}return je(n),null;case 5:if(ze(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&qi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return je(n),null}if(d=G.current,Hr(n))Zp(n);else{var x=Ql(gt.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(u,{is:l.is}):x.createElement(u)}}d[Je]=n,d[Sn]=l;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(An(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&qi(n)}}return je(n),Sf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&qi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=gt.current,Hr(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,u=En,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[Je]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||hv(e.nodeValue,r)),e||ga(n,!0)}else e=Ql(e).createTextNode(l),e[Je]=n,n.stateNode=e}return je(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(l=Hr(n),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Je]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else r=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return je(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hr(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[Je]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Du(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Pl(n,n.updateQueue),je(n),null);case 4:return qt(),e===null&&kf(n.stateNode.containerInfo),je(n),null;case 10:return Vi(n.type),je(n),null;case 19:if(W(nn),l=n.memoizedState,l===null)return je(n),null;if(u=(n.flags&128)!==0,d=l.rendering,d===null)if(u)uo(l,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=El(e),d!==null){for(n.flags|=128,uo(l,!1),e=d.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Xp(r,e),r=r.sibling;return at(nn,nn.current&1|2),Ee&&Hi(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&ht()>Gl&&(n.flags|=128,u=!0,uo(l,!1),n.lanes=4194304)}else{if(!u)if(e=El(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ee)return je(n),null}else 2*ht()-l.renderingStartTime>Gl&&r!==536870912&&(n.flags|=128,u=!0,uo(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(e=l.last,e!==null?e.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ht(),e.sibling=null,r=nn.current,at(nn,u?r&1|2:r&1),Ee&&Hi(n,l.treeForkCount),e):(je(n),null);case 22:case 23:return Qn(n),ku(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),r=n.updateQueue,r!==null&&Pl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&W(sr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(sn),je(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Ox(e,n){switch(Cu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(sn),qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ze(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(a(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(nn),null;case 4:return qt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Qn(n),ku(),e!==null&&W(sr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(sn),null;case 25:return null;default:return null}}function vg(e,n){switch(Cu(n),n.tag){case 3:Vi(sn),qt();break;case 26:case 27:case 5:ze(n);break;case 4:qt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:W(nn);break;case 10:Vi(n.type);break;case 22:case 23:Qn(n),ku(),e!==null&&W(sr);break;case 24:Vi(sn)}}function fo(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var d=r.create,x=r.inst;l=d(),x.destroy=l}r=r.next}while(r!==u)}}catch(b){Fe(n,n.return,b)}}function Ea(e,n,r){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var x=l.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var B=r,et=b;try{et()}catch(dt){Fe(u,B,dt)}}}l=l.next}while(l!==d)}}catch(dt){Fe(n,n.return,dt)}}function _g(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{lm(n,r)}catch(l){Fe(e,e.return,l)}}}function yg(e,n,r){r.props=fr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Fe(e,n,l)}}function ho(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){Fe(e,n,u)}}function Ui(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Fe(e,n,u)}else r.current=null}function xg(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){Fe(e,e.return,u)}}function Mf(e,n,r){try{var l=e.stateNode;nS(l,e.type,r,n),l[Sn]=n}catch(u){Fe(e,e.return,u)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function Ef(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tf(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Fi));else if(l!==4&&(l===27&&Da(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Tf(e,n,r),e=e.sibling;e!==null;)Tf(e,n,r),e=e.sibling}function Fl(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&Da(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Fl(e,n,r),e=e.sibling;e!==null;)Fl(e,n,r),e=e.sibling}function Mg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,l,r),n[Je]=e,n[Sn]=r}catch(d){Fe(e,e.return,d)}}var Yi=!1,cn=!1,bf=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function zx(e,n){if(e=e.containerInfo,qf=ac,e=zp(e),vu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var x=0,b=-1,B=-1,et=0,dt=0,_t=e,rt=null;e:for(;;){for(var ut;_t!==r||u!==0&&_t.nodeType!==3||(b=x+u),_t!==d||l!==0&&_t.nodeType!==3||(B=x+l),_t.nodeType===3&&(x+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)rt=_t,_t=ut;for(;;){if(_t===e)break e;if(rt===r&&++et===u&&(b=x),rt===d&&++dt===l&&(B=x),(ut=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ut}r=b===-1||B===-1?null:{start:b,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yf={focusedElem:e,selectionRange:r},ac=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var kt=fr(r.type,u);e=l.getSnapshotBeforeUpdate(kt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Kf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function Tg(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Zi(e,r),l&4&&fo(5,r);break;case 1:if(Zi(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(x){Fe(r,r.return,x)}else{var u=fr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Fe(r,r.return,x)}}l&64&&_g(r),l&512&&ho(r,r.return);break;case 3:if(Zi(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{lm(e,n)}catch(x){Fe(r,r.return,x)}}break;case 27:n===null&&l&4&&Mg(r);case 26:case 5:Zi(e,r),n===null&&l&4&&xg(r),l&512&&ho(r,r.return);break;case 12:Zi(e,r);break;case 31:Zi(e,r),l&4&&Rg(e,r);break;case 13:Zi(e,r),l&4&&Cg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Xx.bind(null,r),uS(e,r))));break;case 22:if(l=r.memoizedState!==null||Yi,!l){n=n!==null&&n.memoizedState!==null||cn,u=Yi;var d=cn;Yi=l,(cn=n)&&!d?Ki(e,r,(r.subtreeFlags&8772)!==0):Zi(e,r),Yi=u,cn=d}break;case 30:break;default:Zi(e,r)}}function bg(e){var n=e.alternate;n!==null&&(e.alternate=null,bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Hs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,In=!1;function ji(e,n,r){for(r=r.child;r!==null;)Ag(e,n,r),r=r.sibling}function Ag(e,n,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount($t,r)}catch{}switch(r.tag){case 26:cn||Ui(r,n),ji(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:cn||Ui(r,n);var l=Qe,u=In;Da(r.type)&&(Qe=r.stateNode,In=!1),ji(e,n,r),Mo(r.stateNode),Qe=l,In=u;break;case 5:cn||Ui(r,n);case 6:if(l=Qe,u=In,Qe=null,ji(e,n,r),Qe=l,In=u,Qe!==null)if(In)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(d){Fe(r,n,d)}else try{Qe.removeChild(r.stateNode)}catch(d){Fe(r,n,d)}break;case 18:Qe!==null&&(In?(e=Qe,_v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),os(e)):_v(Qe,r.stateNode));break;case 4:l=Qe,u=In,Qe=r.stateNode.containerInfo,In=!0,ji(e,n,r),Qe=l,In=u;break;case 0:case 11:case 14:case 15:Ea(2,r,n),cn||Ea(4,r,n),ji(e,n,r);break;case 1:cn||(Ui(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&yg(r,n,l)),ji(e,n,r);break;case 21:ji(e,n,r);break;case 22:cn=(l=cn)||r.memoizedState!==null,ji(e,n,r),cn=l;break;default:ji(e,n,r)}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{os(e)}catch(r){Fe(n,n.return,r)}}}function Cg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{os(e)}catch(r){Fe(n,n.return,r)}}function Px(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Eg),n;default:throw Error(a(435,e.tag))}}function Bl(e,n){var r=Px(e);n.forEach(function(l){if(!r.has(l)){r.add(l);var u=Wx.bind(null,e,l);l.then(u,u)}})}function Hn(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],d=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){Qe=b.stateNode,In=!1;break t}break;case 5:Qe=b.stateNode,In=!1;break t;case 3:case 4:Qe=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Qe===null)throw Error(a(160));Ag(d,x,u),Qe=null,In=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)wg(n,e),n=n.sibling}var yi=null;function wg(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),l&4&&(Ea(3,e,e.return),fo(3,e),Ea(5,e,e.return));break;case 1:Hn(n,e),Gn(e),l&512&&(cn||r===null||Ui(r,r.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=yi;if(Hn(n,e),Gn(e),l&512&&(cn||r===null||Ui(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Qa]||d[Je]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),An(d,l,r),d[Je]=e,q(d),l=d;break t;case"link":var x=wv("link","href",u).get(l+(r.href||""));if(x){for(var b=0;b<x.length;b++)if(d=x[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){x.splice(b,1);break e}}d=u.createElement(l),An(d,l,r),u.head.appendChild(d);break;case"meta":if(x=wv("meta","content",u).get(l+(r.content||""))){for(b=0;b<x.length;b++)if(d=x[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){x.splice(b,1);break e}}d=u.createElement(l),An(d,l,r),u.head.appendChild(d);break;default:throw Error(a(468,l))}d[Je]=e,q(d),l=d}e.stateNode=l}else Dv(u,e.type,e.stateNode);else e.stateNode=Cv(u,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?Dv(u,e.type,e.stateNode):Cv(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mf(e,e.memoizedProps,r.memoizedProps)}break;case 27:Hn(n,e),Gn(e),l&512&&(cn||r===null||Ui(r,r.return)),r!==null&&l&4&&Mf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),l&512&&(cn||r===null||Ui(r,r.return)),e.flags&32){u=e.stateNode;try{Fn(u,"")}catch(kt){Fe(e,e.return,kt)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Mf(e,u,r!==null?r.memoizedProps:u)),l&1024&&(bf=!0);break;case 6:if(Hn(n,e),Gn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(tc=null,u=yi,yi=Jl(n.containerInfo),Hn(n,e),yi=u,Gn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{os(n.containerInfo)}catch(kt){Fe(e,e.return,kt)}bf&&(bf=!1,Dg(e));break;case 4:l=yi,yi=Jl(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=l;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bl(e,l)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hl=ht()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bl(e,l)));break;case 22:u=e.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,et=Yi,dt=cn;if(Yi=et||u,cn=dt||B,Hn(n,e),cn=dt,Yi=et,Gn(e),l&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||B||Yi||cn||hr(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(d=B.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=B.stateNode;var _t=B.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(kt){Fe(B,B.return,kt)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(kt){Fe(B,B.return,kt)}}}else if(n.tag===18){if(r===null){B=n;try{var ut=B.stateNode;u?yv(ut,!0):yv(B.stateNode,!1)}catch(kt){Fe(B,B.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Bl(e,r))));break;case 19:Hn(n,e),Gn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Bl(e,l)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(Sg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,d=Ef(e);Fl(e,d,u);break;case 5:var x=r.stateNode;r.flags&32&&(Fn(x,""),r.flags&=-33);var b=Ef(e);Fl(e,b,x);break;case 3:case 4:var B=r.stateNode.containerInfo,et=Ef(e);Tf(e,et,B);break;default:throw Error(a(161))}}catch(dt){Fe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tg(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),hr(n);break;case 1:Ui(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&yg(n,n.return,r),hr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ui(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Ki(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(u,d,r),fo(4,d);break;case 1:if(Ki(u,d,r),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Fe(l,l.return,et)}if(l=d,u=l.updateQueue,u!==null){var b=l.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)om(B[u],b)}catch(et){Fe(l,l.return,et)}}r&&x&64&&_g(d),ho(d,d.return);break;case 27:Mg(d);case 26:case 5:Ki(u,d,r),r&&l===null&&x&4&&xg(d),ho(d,d.return);break;case 12:Ki(u,d,r);break;case 31:Ki(u,d,r),r&&x&4&&Rg(u,d);break;case 13:Ki(u,d,r),r&&x&4&&Cg(u,d);break;case 22:d.memoizedState===null&&Ki(u,d,r),ho(d,d.return);break;case 30:break;default:Ki(u,d,r)}n=n.sibling}}function Af(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Js(r))}function Rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function xi(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ug(e,n,r,l),n=n.sibling}function Ug(e,n,r,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,r,l),u&2048&&fo(9,n);break;case 1:xi(e,n,r,l);break;case 3:xi(e,n,r,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(u&2048){xi(e,n,r,l),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,b=d.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else xi(e,n,r,l);break;case 31:xi(e,n,r,l);break;case 13:xi(e,n,r,l);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?xi(e,n,r,l):po(e,n):d._visibility&2?xi(e,n,r,l):(d._visibility|=2,Kr(e,n,r,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(x,n);break;case 24:xi(e,n,r,l),u&2048&&Rf(n.alternate,n);break;default:xi(e,n,r,l)}}function Kr(e,n,r,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,b=r,B=l,et=x.flags;switch(x.tag){case 0:case 11:case 15:Kr(d,x,b,B,u),fo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?Kr(d,x,b,B,u):po(d,x):(dt._visibility|=2,Kr(d,x,b,B,u)),u&&et&2048&&Af(x.alternate,x);break;case 24:Kr(d,x,b,B,u),u&&et&2048&&Rf(x.alternate,x);break;default:Kr(d,x,b,B,u)}n=n.sibling}}function po(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,u=l.flags;switch(l.tag){case 22:po(r,l),u&2048&&Af(l.alternate,l);break;case 24:po(r,l),u&2048&&Rf(l.alternate,l);break;default:po(r,l)}n=n.sibling}}var mo=8192;function Qr(e,n,r){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)Lg(e,n,r),e=e.sibling}function Lg(e,n,r){switch(e.tag){case 26:Qr(e,n,r),e.flags&mo&&e.memoizedState!==null&&MS(r,yi,e.memoizedState,e.memoizedProps);break;case 5:Qr(e,n,r);break;case 3:case 4:var l=yi;yi=Jl(e.stateNode.containerInfo),Qr(e,n,r),yi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=mo,mo=16777216,Qr(e,n,r),mo=l):Qr(e,n,r));break;default:Qr(e,n,r)}}function Ng(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function go(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];_n=l,zg(l,e)}Ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Og(e),e=e.sibling}function Og(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):go(e);break;default:go(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];_n=l,zg(l,e)}Ng(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Il(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function zg(e,n){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:Ea(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Js(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,_n=l;else t:for(r=e;_n!==null;){l=_n;var u=l.sibling,d=l.return;if(bg(l),l===r){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var Fx={getCacheForType:function(e){var n=Tn(sn),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Tn(sn).controller.signal}},Bx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,me=null,ye=0,Pe=0,Jn=null,Ta=!1,Jr=!1,Cf=!1,Qi=0,en=0,ba=0,dr=0,wf=0,$n=0,$r=0,vo=null,Vn=null,Df=!1,Hl=0,Pg=0,Gl=1/0,Vl=null,Aa=null,dn=0,Ra=null,ts=null,Ji=0,Uf=0,Lf=null,Fg=null,_o=0,Nf=null;function ti(){return(Ue&2)!==0&&ye!==0?ye&-ye:O.T!==null?If():Bs()}function Bg(){if($n===0)if((ye&536870912)===0||Ee){var e=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function kn(e,n,r){(e===Xe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(es(e,0),Ca(e,ye,$n,!1)),xn(e,r),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(dr|=r),en===4&&Ca(e,ye,$n,!1)),Li(e))}function Ig(e,n,r){if((Ue&6)!==0)throw Error(a(327));var l=!r&&(n&127)===0&&(n&e.expiredLanes)===0||ie(e,n),u=l?Gx(e,n):zf(e,n,!0),d=l;do{if(u===0){Jr&&!l&&Ca(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!Ix(r)){u=zf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=vo;var B=b.current.memoizedState.isDehydrated;if(B&&(es(b,x).flags|=256),x=zf(b,x,!1),x!==2){if(Cf&&!B){b.errorRecoveryDisabledLanes|=d,dr|=d,u=4;break t}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){es(e,0),Ca(e,n,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ca(l,n,$n,!Ta);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Hl+300-ht(),10<u)){if(Ca(l,n,$n,!Ta),Lt(l,0,!0)!==0)break t;Ji=n,l.timeoutHandle=gv(Hg.bind(null,l,r,Vn,Vl,Df,n,$n,dr,$r,Ta,d,"Throttled",-0,0),u);break t}Hg(l,r,Vn,Vl,Df,n,$n,dr,$r,Ta,d,null,-0,0)}}break}while(!0);Li(e)}function Hg(e,n,r,l,u,d,x,b,B,et,dt,_t,rt,ut){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},Lg(n,d,_t);var kt=(d&62914560)===d?Hl-ht():(d&4194048)===d?Pg-ht():0;if(kt=ES(_t,kt),kt!==null){Ji=d,e.cancelPendingCommit=kt(jg.bind(null,e,n,d,r,l,u,x,b,B,dt,_t,null,rt,ut)),Ca(e,d,x,!et);return}}jg(e,n,d,r,l,u,x,b,B)}function Ix(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],d=u.getSnapshot;u=u.value;try{if(!jn(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,r,l){n&=~wf,n&=~dr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var d=31-ne(u),x=1<<d;l[d]=-1,u&=~x}r!==0&&Ps(e,r,n)}function kl(){return(Ue&6)===0?(yo(0),!1):!0}function Of(){if(me!==null){if(Pe===0)var e=me.return;else e=me,Gi=ar=null,Zu(e),Wr=null,to=0,e=me;for(;e!==null;)vg(e.alternate,e),e=e.return;me=null}}function es(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,rS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ji=0,Of(),Xe=e,me=r=Ii(e.current,null),ye=n,Pe=0,Jn=null,Ta=!1,Jr=ie(e,n),Cf=!1,$r=$n=wf=dr=ba=en=0,Vn=vo=null,Df=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-ne(l),d=1<<u;n|=e[u],l&=~d}return Qi=n,ul(),r}function Gg(e,n){ce=null,O.H=lo,n===Xr||n===_l?(n=im(),Pe=3):n===Fu?(n=im(),Pe=4):Pe=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,me===null&&(en=1,Ll(e,ai(n,e.current)))}function Vg(){var e=Kn.current;return e===null?!0:(ye&4194048)===ye?li===null:(ye&62914560)===ye||(ye&536870912)!==0?e===li:!1}function kg(){var e=O.H;return O.H=lo,e===null?lo:e}function Xg(){var e=O.A;return O.A=Fx,e}function Xl(){en=4,Ta||(ye&4194048)!==ye&&Kn.current!==null||(Jr=!0),(ba&134217727)===0&&(dr&134217727)===0||Xe===null||Ca(Xe,ye,$n,!1)}function zf(e,n,r){var l=Ue;Ue|=2;var u=kg(),d=Xg();(Xe!==e||ye!==n)&&(Vl=null,es(e,n)),n=!1;var x=en;t:do try{if(Pe!==0&&me!==null){var b=me,B=Jn;switch(Pe){case 8:Of(),x=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var et=Pe;if(Pe=0,Jn=null,ns(e,b,B,et),r&&Jr){x=0;break t}break;default:et=Pe,Pe=0,Jn=null,ns(e,b,B,et)}}Hx(),x=en;break}catch(dt){Gg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Gi=ar=null,Ue=l,O.H=u,O.A=d,me===null&&(Xe=null,ye=0,ul()),x}function Hx(){for(;me!==null;)Wg(me)}function Gx(e,n){var r=Ue;Ue|=2;var l=kg(),u=Xg();Xe!==e||ye!==n?(Vl=null,Gl=ht()+500,es(e,n)):Jr=ie(e,n);t:do try{if(Pe!==0&&me!==null){n=me;var d=Jn;e:switch(Pe){case 1:Pe=0,Jn=null,ns(e,n,d,1);break;case 2:case 9:if(em(d)){Pe=0,Jn=null,qg(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==e||(Pe=7),Li(e)},d.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:em(d)?(Pe=0,Jn=null,qg(n)):(Pe=0,Jn=null,ns(e,n,d,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var b=me;if(x?Uv(x):b.stateNode.complete){Pe=0,Jn=null;var B=b.sibling;if(B!==null)me=B;else{var et=b.return;et!==null?(me=et,Wl(et)):me=null}break e}}Pe=0,Jn=null,ns(e,n,d,5);break;case 6:Pe=0,Jn=null,ns(e,n,d,6);break;case 8:Of(),en=6;break t;default:throw Error(a(462))}}Vx();break}catch(dt){Gg(e,dt)}while(!0);return Gi=ar=null,O.H=l,O.A=u,Ue=r,me!==null?0:(Xe=null,ye=0,ul(),en)}function Vx(){for(;me!==null&&!A();)Wg(me)}function Wg(e){var n=mg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Wl(e):me=n}function qg(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=cg(r,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=cg(r,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Zu(n);default:vg(r,n),n=me=Xp(n,Qi),n=mg(r,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Wl(e):me=n}function ns(e,n,r,l){Gi=ar=null,Zu(n),Wr=null,to=0;var u=n.return;try{if(Dx(e,u,n,r,ye)){en=1,Ll(e,ai(r,e.current)),me=null;return}}catch(d){if(u!==null)throw me=u,d;en=1,Ll(e,ai(r,e.current)),me=null;return}n.flags&32768?(Ee||l===1?e=!0:Jr||(ye&536870912)!==0?e=!1:(Ta=e=!0,(l===2||l===9||l===3||l===6)&&(l=Kn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Yg(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){Yg(n,Ta);return}e=n.return;var r=Nx(n.alternate,n,Qi);if(r!==null){me=r;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);en===0&&(en=5)}function Yg(e,n){do{var r=Ox(e.alternate,e);if(r!==null){r.flags&=32767,me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=r}while(e!==null);en=6,me=null}function jg(e,n,r,l,u,d,x,b,B){e.cancelPendingCommit=null;do ql();while(dn!==0);if((Ue&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=Mu,mi(e,r,d,x,b,B),e===Xe&&(me=Xe=null,ye=0),ts=n,Ra=e,Ji=r,Uf=d,Lf=u,Fg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qx(Dt,function(){return $g(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=J.p,J.p=2,x=Ue,Ue|=4;try{zx(e,n,r)}finally{Ue=x,J.p=u,O.T=l}}dn=1,Zg(),Kg(),Qg()}}function Zg(){if(dn===1){dn=0;var e=Ra,n=ts,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=J.p;J.p=2;var u=Ue;Ue|=4;try{wg(n,e);var d=Yf,x=zp(e.containerInfo),b=d.focusedElem,B=d.selectionRange;if(x!==b&&b&&b.ownerDocument&&Op(b.ownerDocument.documentElement,b)){if(B!==null&&vu(b)){var et=B.start,dt=B.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var _t=b.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),kt=b.textContent.length,te=Math.min(B.start,kt),Ve=B.end===void 0?te:Math.min(B.end,kt);!ut.extend&&te>Ve&&(x=Ve,Ve=te,te=x);var K=Np(b,te),V=Np(b,Ve);if(K&&V&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==V.node||ut.focusOffset!==V.offset)){var tt=_t.createRange();tt.setStart(K.node,K.offset),ut.removeAllRanges(),te>Ve?(ut.addRange(tt),ut.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ut.addRange(tt))}}}}for(_t=[],ut=b;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var pt=_t[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ac=!!qf,Yf=qf=null}finally{Ue=u,J.p=l,O.T=r}}e.current=n,dn=2}}function Kg(){if(dn===2){dn=0;var e=Ra,n=ts,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=J.p;J.p=2;var u=Ue;Ue|=4;try{Tg(e,n.alternate,n)}finally{Ue=u,J.p=l,O.T=r}}dn=3}}function Qg(){if(dn===4||dn===3){dn=0,it();var e=Ra,n=ts,r=Ji,l=Fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ts=Ra=null,Jg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),wr(r),n=n.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot($t,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,u=J.p,J.p=2,O.T=null;try{for(var d=e.onRecoverableError,x=0;x<l.length;x++){var b=l[x];d(b.value,{componentStack:b.stack})}}finally{O.T=n,J.p=u}}(Ji&3)!==0&&ql(),Li(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Nf?_o++:(_o=0,Nf=e):_o=0,yo(0)}}function Jg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function ql(){return Zg(),Kg(),Qg(),$g()}function $g(){if(dn!==5)return!1;var e=Ra,n=Uf;Uf=0;var r=wr(Ji),l=O.T,u=J.p;try{J.p=32>r?32:r,O.T=null,r=Lf,Lf=null;var d=Ra,x=Ji;if(dn=0,ts=Ra=null,Ji=0,(Ue&6)!==0)throw Error(a(331));var b=Ue;if(Ue|=4,Og(d.current),Ug(d,d.current,x,r),Ue=b,yo(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot($t,d)}catch{}return!0}finally{J.p=u,O.T=l,Jg(e,n)}}function tv(e,n,r){n=ai(r,n),n=ff(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(xn(e,2),Li(e))}function Fe(e,n,r){if(e.tag===3)tv(e,e,r);else for(;n!==null;){if(n.tag===3){tv(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Aa===null||!Aa.has(l))){e=ai(r,e),r=eg(2),l=xa(n,r,2),l!==null&&(ng(r,l,n,e),xn(l,2),Li(l));break}}n=n.return}}function Pf(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Bx;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(r)||(Cf=!0,u.add(r),e=kx.bind(null,e,n,r),n.then(e,e))}function kx(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(ye&r)===r&&(en===4||en===3&&(ye&62914560)===ye&&300>ht()-Hl?(Ue&2)===0&&es(e,0):wf|=r,$r===ye&&($r=0)),Li(e)}function ev(e,n){n===0&&(n=fn()),e=er(e,n),e!==null&&(xn(e,n),Li(e))}function Xx(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),ev(e,r)}function Wx(e,n){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),ev(e,r)}function qx(e,n){return Bt(e,n)}var Yl=null,is=null,Ff=!1,jl=!1,Bf=!1,wa=0;function Li(e){e!==is&&e.next===null&&(is===null?Yl=is=e:is=is.next=e),jl=!0,Ff||(Ff=!0,jx())}function yo(e,n){if(!Bf&&jl){Bf=!0;do for(var r=!1,l=Yl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var x=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-ne(42|e)+1)-1,d&=u&~(x&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,rv(l,d))}else d=ye,d=Lt(l,l===Xe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ie(l,d)||(r=!0,rv(l,d));l=l.next}while(r);Bf=!1}}function Yx(){nv()}function nv(){jl=Ff=!1;var e=0;wa!==0&&aS()&&(e=wa);for(var n=ht(),r=null,l=Yl;l!==null;){var u=l.next,d=iv(l,n);d===0?(l.next=null,r===null?Yl=u:r.next=u,u===null&&(is=r)):(r=l,(e!==0||(d&3)!==0)&&(jl=!0)),l=u}dn!==0&&dn!==5||yo(e),wa!==0&&(wa=0)}function iv(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-ne(d),b=1<<x,B=u[x];B===-1?((b&r)===0||(b&l)!==0)&&(u[x]=Ke(b,n)):B<=n&&(e.expiredLanes|=b),d&=~b}if(n=Xe,r=ye,r=Lt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&N(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ie(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&N(l),wr(r)){case 2:case 8:r=Yt;break;case 32:r=Dt;break;case 268435456:r=_e;break;default:r=Dt}return l=av.bind(null,e),r=Bt(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&N(l),e.callbackPriority=2,e.callbackNode=null,2}function av(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ql()&&e.callbackNode!==r)return null;var l=ye;return l=Lt(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ig(e,l,n),iv(e,ht()),e.callbackNode!=null&&e.callbackNode===r?av.bind(null,e):null)}function rv(e,n){if(ql())return null;Ig(e,n,!0)}function jx(){sS(function(){(Ue&6)!==0?Bt(vt,Yx):nv()})}function If(){if(wa===0){var e=Vr;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),wa=e}return wa}function sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function ov(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function Zx(e,n,r,l,u){if(n==="submit"&&r&&r.stateNode===u){var d=sv((u[Sn]||null).action),x=l.submitter;x&&(n=(n=x[Sn]||null)?sv(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var b=new sl("action","action",null,l,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(wa!==0){var B=x?ov(u,x):new FormData(u);rf(r,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(b.preventDefault(),B=x?ov(u,x):new FormData(u),rf(r,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Hf=0;Hf<Su.length;Hf++){var Gf=Su[Hf],Kx=Gf.toLowerCase(),Qx=Gf[0].toUpperCase()+Gf.slice(1);_i(Kx,"on"+Qx)}_i(Bp,"onAnimationEnd"),_i(Ip,"onAnimationIteration"),_i(Hp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(dx,"onTransitionRun"),_i(px,"onTransitionStart"),_i(mx,"onTransitionCancel"),_i(Gp,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function lv(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;t:{var d=void 0;if(n)for(var x=l.length-1;0<=x;x--){var b=l[x],B=b.instance,et=b.currentTarget;if(b=b.listener,B!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){cl(dt)}u.currentTarget=null,d=B}else for(x=0;x<l.length;x++){if(b=l[x],B=b.instance,et=b.currentTarget,b=b.listener,B!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){cl(dt)}u.currentTarget=null,d=B}}}}function ge(e,n){var r=n[Is];r===void 0&&(r=n[Is]=new Set);var l=e+"__bubble";r.has(l)||(cv(n,e,2,!1),r.add(l))}function Vf(e,n,r){var l=0;n&&(l|=4),cv(r,e,l,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Zl]){e[Zl]=!0,bt.forEach(function(r){r!=="selectionchange"&&(Jx.has(r)||Vf(r,!1,e),Vf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Vf("selectionchange",!1,n))}}function cv(e,n,r,l){switch(Bv(n)){case 2:var u=AS;break;case 8:u=RS;break;default:u=ah}r=u.bind(null,n,r,e),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Xf(e,n,r,l,u){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var b=l.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=l.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=C(b),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){l=d=x;continue t}b=b.parentNode}}l=l.return}pp(function(){var et=d,dt=su(r),_t=[];t:{var rt=Vp.get(e);if(rt!==void 0){var ut=sl,kt=e;switch(e){case"keypress":if(al(r)===0)break t;case"keydown":case"keyup":ut=Wy;break;case"focusin":kt="focus",ut=hu;break;case"focusout":kt="blur",ut=hu;break;case"beforeblur":case"afterblur":ut=hu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=jy;break;case Bp:case Ip:case Hp:ut=Py;break;case Gp:ut=Ky;break;case"scroll":case"scrollend":ut=Uy;break;case"wheel":ut=Jy;break;case"copy":case"cut":case"paste":ut=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=yp;break;case"toggle":case"beforetoggle":ut=tx}var te=(n&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),K=te?rt!==null?rt+"Capture":null:rt;te=[];for(var V=et,tt;V!==null;){var pt=V;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||K===null||(pt=Gs(V,K),pt!=null&&te.push(So(V,pt,tt))),Ve)break;V=V.return}0<te.length&&(rt=new ut(rt,kt,null,r,dt),_t.push({event:rt,listeners:te}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&r!==ru&&(kt=r.relatedTarget||r.fromElement)&&(C(kt)||kt[Pi]))break t;if((ut||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(kt=r.relatedTarget||r.toElement,ut=et,kt=kt?C(kt):null,kt!==null&&(Ve=c(kt),te=kt.tag,kt!==Ve||te!==5&&te!==27&&te!==6)&&(kt=null)):(ut=null,kt=et),ut!==kt)){if(te=vp,pt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=yp,pt="onPointerLeave",K="onPointerEnter",V="pointer"),Ve=ut==null?rt:st(ut),tt=kt==null?rt:st(kt),rt=new te(pt,V+"leave",ut,r,dt),rt.target=Ve,rt.relatedTarget=tt,pt=null,C(dt)===et&&(te=new te(K,V+"enter",kt,r,dt),te.target=tt,te.relatedTarget=Ve,pt=te),Ve=pt,ut&&kt)e:{for(te=$x,K=ut,V=kt,tt=0,pt=K;pt;pt=te(pt))tt++;pt=0;for(var Kt=V;Kt;Kt=te(Kt))pt++;for(;0<tt-pt;)K=te(K),tt--;for(;0<pt-tt;)V=te(V),pt--;for(;tt--;){if(K===V||V!==null&&K===V.alternate){te=K;break e}K=te(K),V=te(V)}te=null}else te=null;ut!==null&&uv(_t,rt,ut,te,!1),kt!==null&&Ve!==null&&uv(_t,Ve,kt,te,!0)}}t:{if(rt=et?st(et):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var Ce=Rp;else if(bp(rt))if(Cp)Ce=ux;else{Ce=lx;var Wt=ox}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&au(et.elementType)&&(Ce=Rp):Ce=cx;if(Ce&&(Ce=Ce(e,et))){Ap(_t,Ce,r,dt);break t}Wt&&Wt(e,rt,et),e==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&Rn(rt,"number",rt.value)}switch(Wt=et?st(et):window,e){case"focusin":(bp(Wt)||Wt.contentEditable==="true")&&(Or=Wt,_u=et,Zs=null);break;case"focusout":Zs=_u=Or=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Pp(_t,r,dt);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":Pp(_t,r,dt)}var ue;if(pu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Nr?Ep(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(xp&&r.locale!=="ko"&&(Nr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Nr&&(ue=mp()):(da=dt,cu="value"in da?da.value:da.textContent,Nr=!0)),Wt=Kl(et,xe),0<Wt.length&&(xe=new _p(xe,e,null,r,dt),_t.push({event:xe,listeners:Wt}),ue?xe.data=ue:(ue=Tp(r),ue!==null&&(xe.data=ue)))),(ue=nx?ix(e,r):ax(e,r))&&(xe=Kl(et,"onBeforeInput"),0<xe.length&&(Wt=new _p("onBeforeInput","beforeinput",null,r,dt),_t.push({event:Wt,listeners:xe}),Wt.data=ue)),Zx(_t,e,et,r,dt)}lv(_t,n)})}function So(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Kl(e,n){for(var r=n+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Gs(e,r),u!=null&&l.unshift(So(e,u,d)),u=Gs(e,n),u!=null&&l.push(So(e,u,d))),e.tag===3)return l;e=e.return}return[]}function $x(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uv(e,n,r,l,u){for(var d=n._reactName,x=[];r!==null&&r!==l;){var b=r,B=b.alternate,et=b.stateNode;if(b=b.tag,B!==null&&B===l)break;b!==5&&b!==26&&b!==27||et===null||(B=et,u?(et=Gs(r,d),et!=null&&x.unshift(So(r,et,B))):u||(et=Gs(r,d),et!=null&&x.push(So(r,et,B)))),r=r.return}x.length!==0&&e.push({event:n,listeners:x})}var tS=/\r\n?/g,eS=/\u0000|\uFFFD/g;function fv(e){return(typeof e=="string"?e:""+e).replace(tS,`
`).replace(eS,"")}function hv(e,n){return n=fv(n),fv(e)===n}function Ge(e,n,r,l,u,d){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Fn(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Fn(e,""+l);break;case"className":qe(e,"class",l);break;case"tabIndex":qe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(e,r,l);break;case"style":hp(e,l,d);break;case"data":if(n!=="object"){qe(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=nl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=nl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Fi);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=nl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Me(e,"popover",l);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Me(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=wy.get(r)||r,Me(e,r,l))}}function Wf(e,n,r,l,u,d){switch(r){case"style":hp(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Fn(e,l):(typeof l=="number"||typeof l=="bigint")&&Fn(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=e[Sn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,u);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Me(e,r,l)}}}function An(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var x=r[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ge(e,n,d,x,r,null)}}u&&Ge(e,n,"srcSet",r.srcSet,r,null),l&&Ge(e,n,"src",r.src,r,null);return;case"input":ge("invalid",e);var b=d=x=u=null,B=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":u=dt;break;case"type":x=dt;break;case"checked":B=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,n));break;default:Ge(e,n,l,dt,r,null)}}Ln(e,d,b,B,et,x,u,!1);return;case"select":ge("invalid",e),l=x=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":x=b;break;case"multiple":l=b;default:Ge(e,n,u,b,r,null)}n=d,r=x,e.multiple=!!l,n!=null?$e(e,!!l,n,!1):r!=null&&$e(e,!!l,r,!0);return;case"textarea":ge("invalid",e),d=u=l=null;for(x in r)if(r.hasOwnProperty(x)&&(b=r[x],b!=null))switch(x){case"value":l=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Ge(e,n,x,b,r,null)}Dr(e,l,u,d);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(l=r[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(e,n,B,l,r,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<xo.length;l++)ge(xo[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ge(e,n,et,l,r,null)}return;default:if(au(n)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&Wf(e,n,dt,l,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(l=r[b],l!=null&&Ge(e,n,b,l,r,null))}function nS(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,b=null,B=null,et=null,dt=null;for(ut in r){var _t=r[ut];if(r.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=_t;default:l.hasOwnProperty(ut)||Ge(e,n,ut,null,l,_t)}}for(var rt in l){var ut=l[rt];if(_t=r[rt],l.hasOwnProperty(rt)&&(ut!=null||_t!=null))switch(rt){case"type":d=ut;break;case"name":u=ut;break;case"checked":et=ut;break;case"defaultChecked":dt=ut;break;case"value":x=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,n));break;default:ut!==_t&&Ge(e,n,rt,ut,l,_t)}}Ie(e,x,b,B,et,dt,d,u);return;case"select":ut=x=b=rt=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ut=B;default:l.hasOwnProperty(d)||Ge(e,n,d,null,l,B)}for(u in l)if(d=l[u],B=r[u],l.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":rt=d;break;case"defaultValue":b=d;break;case"multiple":x=d;default:d!==B&&Ge(e,n,u,d,l,B)}n=b,r=x,l=ut,rt!=null?$e(e,!!r,rt,!1):!!l!=!!r&&(n!=null?$e(e,!!r,n,!0):$e(e,!!r,r?[]:"",!1));return;case"textarea":ut=rt=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(e,n,b,null,l,u)}for(x in l)if(u=l[x],d=r[x],l.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":rt=u;break;case"defaultValue":ut=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Ge(e,n,x,u,l,d)}Mn(e,rt,ut);return;case"option":for(var kt in r)if(rt=r[kt],r.hasOwnProperty(kt)&&rt!=null&&!l.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ge(e,n,kt,null,l,rt)}for(B in l)if(rt=l[B],ut=r[B],l.hasOwnProperty(B)&&rt!==ut&&(rt!=null||ut!=null))switch(B){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ge(e,n,B,rt,l,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)rt=r[te],r.hasOwnProperty(te)&&rt!=null&&!l.hasOwnProperty(te)&&Ge(e,n,te,null,l,rt);for(et in l)if(rt=l[et],ut=r[et],l.hasOwnProperty(et)&&rt!==ut&&(rt!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,n));break;default:Ge(e,n,et,rt,l,ut)}return;default:if(au(n)){for(var Ve in r)rt=r[Ve],r.hasOwnProperty(Ve)&&rt!==void 0&&!l.hasOwnProperty(Ve)&&Wf(e,n,Ve,void 0,l,rt);for(dt in l)rt=l[dt],ut=r[dt],!l.hasOwnProperty(dt)||rt===ut||rt===void 0&&ut===void 0||Wf(e,n,dt,rt,l,ut);return}}for(var K in r)rt=r[K],r.hasOwnProperty(K)&&rt!=null&&!l.hasOwnProperty(K)&&Ge(e,n,K,null,l,rt);for(_t in l)rt=l[_t],ut=r[_t],!l.hasOwnProperty(_t)||rt===ut||rt==null&&ut==null||Ge(e,n,_t,rt,l,ut)}function dv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var u=r[l],d=u.transferSize,x=u.initiatorType,b=u.duration;if(d&&b&&dv(x)){for(x=0,b=u.responseEnd,l+=1;l<r.length;l++){var B=r[l],et=B.startTime;if(et>b)break;var dt=B.transferSize,_t=B.initiatorType;dt&&dv(_t)&&(B=B.responseEnd,x+=dt*(B<b?1:(b-et)/(B-et)))}if(--l,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qf=null,Yf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function pv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var gv=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,vv=typeof Promise=="function"?Promise:void 0,sS=typeof queueMicrotask=="function"?queueMicrotask:typeof vv<"u"?function(e){return vv.resolve(null).then(e).catch(oS)}:gv;function oS(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function _v(e,n){var r=n,l=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(u),os(n);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Mo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Mo(r);for(var d=r.firstChild;d;){var x=d.nextSibling,b=d.nodeName;d[Qa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=x}}else r==="body"&&Mo(e.ownerDocument.body);r=u}while(r);os(n)}function yv(e,n){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Kf(r),Hs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function lS(e,n,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function cS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=ci(e.nextSibling),e===null))return null;return e}function xv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$?"||e.data==="$~"}function Jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uS(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $f=null;function Sv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return ci(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function Mv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function Ev(e,n,r){switch(n=Ql(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Hs(e)}var ui=new Map,Tv=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=J.d;J.d={f:fS,r:hS,D:dS,C:pS,L:mS,m:gS,X:_S,S:vS,M:yS};function fS(){var e=$i.f(),n=kl();return e||n}function hS(e){var n=Z(e);n!==null&&n.tag===5&&n.type==="form"?Gm(n):$i.r(e)}var as=typeof document>"u"?null:document;function bv(e,n,r){var l=as;if(l&&typeof n=="string"&&n){var u=vn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),Tv.has(u)||(Tv.add(u),e={rel:e,crossOrigin:r,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),An(n,"link",e),q(n),l.head.appendChild(n)))}}function dS(e){$i.D(e),bv("dns-prefetch",e,null)}function pS(e,n){$i.C(e,n),bv("preconnect",e,n)}function mS(e,n,r){$i.L(e,n,r);var l=as;if(l&&e&&n){var u='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+vn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+vn(r.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var d=u;switch(n){case"style":d=rs(e);break;case"script":d=ss(e)}ui.has(d)||(e=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ui.set(d,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Eo(d))||n==="script"&&l.querySelector(To(d))||(n=l.createElement("link"),An(n,"link",e),q(n),l.head.appendChild(n)))}}function gS(e,n){$i.m(e,n);var r=as;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vn(l)+'"][href="'+vn(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ss(e)}if(!ui.has(d)&&(e=v({rel:"modulepreload",href:e},n),ui.set(d,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(To(d)))return}l=r.createElement("link"),An(l,"link",e),q(l),r.head.appendChild(l)}}}function vS(e,n,r){$i.S(e,n,r);var l=as;if(l&&e){var u=ot(l).hoistableStyles,d=rs(e);n=n||"default";var x=u.get(d);if(!x){var b={loading:0,preload:null};if(x=l.querySelector(Eo(d)))b.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ui.get(d))&&th(e,r);var B=x=l.createElement("link");q(B),An(B,"link",e),B._p=new Promise(function(et,dt){B.onload=et,B.onerror=dt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$l(x,n,l)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(d,x)}}}function _S(e,n){$i.X(e,n);var r=as;if(r&&e){var l=ot(r).hoistableScripts,u=ss(e),d=l.get(u);d||(d=r.querySelector(To(u)),d||(e=v({src:e,async:!0},n),(n=ui.get(u))&&eh(e,n),d=r.createElement("script"),q(d),An(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function yS(e,n){$i.M(e,n);var r=as;if(r&&e){var l=ot(r).hoistableScripts,u=ss(e),d=l.get(u);d||(d=r.querySelector(To(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&eh(e,n),d=r.createElement("script"),q(d),An(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function Av(e,n,r,l){var u=(u=gt.current)?Jl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=rs(r.href),r=ot(u).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=rs(r.href);var d=ot(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(Eo(e)))&&!d._p&&(x.instance=d,x.state.loading=5),ui.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ui.set(e,r),d||xS(u,e,r,x.state))),n&&l===null)throw Error(a(528,""));return x}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(r),r=ot(u).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function rs(e){return'href="'+vn(e)+'"'}function Eo(e){return'link[rel="stylesheet"]['+e+"]"}function Rv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function xS(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),An(n,"link",r),q(n),e.head.appendChild(n))}function ss(e){return'[src="'+vn(e)+'"]'}function To(e){return"script[async]"+e}function Cv(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+vn(r.href)+'"]');if(l)return n.instance=l,q(l),l;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),q(l),An(l,"style",u),$l(l,r.precedence,e),n.instance=l;case"stylesheet":u=rs(r.href);var d=e.querySelector(Eo(u));if(d)return n.state.loading|=4,n.instance=d,q(d),d;l=Rv(r),(u=ui.get(u))&&th(l,u),d=(e.ownerDocument||e).createElement("link"),q(d);var x=d;return x._p=new Promise(function(b,B){x.onload=b,x.onerror=B}),An(d,"link",l),n.state.loading|=4,$l(d,r.precedence,e),n.instance=d;case"script":return d=ss(r.src),(u=e.querySelector(To(d)))?(n.instance=u,q(u),u):(l=r,(u=ui.get(d))&&(l=v({},r),eh(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),An(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,$l(l,r.precedence,e));return n.instance}function $l(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,x=0;x<l.length;x++){var b=l[x];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function eh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function wv(e,n,r){if(tc===null){var l=new Map,u=tc=new Map;u.set(r,l)}else u=tc,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Qa]||d[Je]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var b=l.get(x);b?b.push(d):l.set(x,[d])}}return l}function Dv(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function SS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Uv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function MS(e,n,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=rs(l.href),d=n.querySelector(Eo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,q(d);return}d=n.ownerDocument||n,l=Rv(l),(u=ui.get(u))&&th(l,u),d=d.createElement("link"),q(d);var x=d;x._p=new Promise(function(b,B){x.onload=b,x.onerror=B}),An(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=ec.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var nh=0;function ES(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&nh===0&&(nh=62500*iS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>nh?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(TS,e),nc=null,ec.call(e))}function TS(e,n){if(!(n.state.loading&4)){var r=nc.get(e);if(r)var l=r.get(null);else{r=new Map,nc.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),l=x)}l&&r.set(null,l)}u=n.instance,x=u.getAttribute("data-precedence"),d=r.get(x)||l,d===l&&r.set(null,u),r.set(x,u),this.count++,l=ec.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function bS(e,n,r,l,u,d,x,b,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Lv(e,n,r,l,u,d,x,b,B,et,dt,_t){return e=new bS(e,n,r,x,B,et,dt,_t,b),n=1,d===!0&&(n|=24),d=Zn(3,null,null,n),e.current=d,d.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:n},Bu(d),e}function Nv(e){return e?(e=Fr,e):Fr}function Ov(e,n,r,l,u,d){u=Nv(u),l.context===null?l.context=u:l.pendingContext=u,l=ya(n),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=xa(e,l,n),r!==null&&(kn(r,e,n),no(r,e,n))}function zv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function ih(e,n){zv(e,n),(e=e.alternate)&&zv(e,n)}function Pv(e){if(e.tag===13||e.tag===31){var n=er(e,67108864);n!==null&&kn(n,e,67108864),ih(e,67108864)}}function Fv(e){if(e.tag===13||e.tag===31){var n=ti();n=Za(n);var r=er(e,n);r!==null&&kn(r,e,n),ih(e,n)}}var ac=!0;function AS(e,n,r,l){var u=O.T;O.T=null;var d=J.p;try{J.p=2,ah(e,n,r,l)}finally{J.p=d,O.T=u}}function RS(e,n,r,l){var u=O.T;O.T=null;var d=J.p;try{J.p=8,ah(e,n,r,l)}finally{J.p=d,O.T=u}}function ah(e,n,r,l){if(ac){var u=rh(l);if(u===null)Xf(e,n,l,rc,r),Iv(e,l);else if(wS(u,e,n,r,l))l.stopPropagation();else if(Iv(e,l),n&4&&-1<CS.indexOf(e)){for(;u!==null;){var d=Z(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=wt(d.pendingLanes);if(x!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var B=1<<31-ne(x);b.entanglements[1]|=B,x&=~B}Li(d),(Ue&6)===0&&(Gl=ht()+500,yo(0))}}break;case 31:case 13:b=er(d,2),b!==null&&kn(b,d,2),kl(),ih(d,2)}if(d=rh(l),d===null&&Xf(e,n,l,rc,r),d===u)break;u=d}u!==null&&l.stopPropagation()}else Xf(e,n,l,null,r)}}function rh(e){return e=su(e),sh(e)}var rc=null;function sh(e){if(rc=null,e=C(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function Bv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case vt:return 2;case Yt:return 8;case Dt:case It:return 32;case _e:return 268435456;default:return 32}default:return 32}}var oh=!1,Ua=null,La=null,Na=null,Ao=new Map,Ro=new Map,Oa=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iv(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,r,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Z(n),n!==null&&Pv(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wS(e,n,r,l,u){switch(n){case"focusin":return Ua=Co(Ua,e,n,r,l,u),!0;case"dragenter":return La=Co(La,e,n,r,l,u),!0;case"mouseover":return Na=Co(Na,e,n,r,l,u),!0;case"pointerover":var d=u.pointerId;return Ao.set(d,Co(Ao.get(d)||null,e,n,r,l,u)),!0;case"gotpointercapture":return d=u.pointerId,Ro.set(d,Co(Ro.get(d)||null,e,n,r,l,u)),!0}return!1}function Hv(e){var n=C(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,Ka(e.priority,function(){Fv(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,Ka(e.priority,function(){Fv(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=rh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);ru=l,r.target.dispatchEvent(l),ru=null}else return n=Z(r),n!==null&&Pv(n),e.blockedOn=r,!1;n.shift()}return!0}function Gv(e,n,r){sc(e)&&r.delete(n)}function DS(){oh=!1,Ua!==null&&sc(Ua)&&(Ua=null),La!==null&&sc(La)&&(La=null),Na!==null&&sc(Na)&&(Na=null),Ao.forEach(Gv),Ro.forEach(Gv)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,oh||(oh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,DS)))}var lc=null;function Vv(e){lc!==e&&(lc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(sh(l||r)===null)continue;break}var d=Z(r);d!==null&&(e.splice(n,3),n-=3,rf(d,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function os(e){function n(B){return oc(B,e)}Ua!==null&&oc(Ua,e),La!==null&&oc(La,e),Na!==null&&oc(Na,e),Ao.forEach(n),Ro.forEach(n);for(var r=0;r<Oa.length;r++){var l=Oa[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Oa.length&&(r=Oa[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&Oa.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],d=r[l+1],x=u[Sn]||null;if(typeof d=="function")x||Vv(r);else if(x){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Sn]||null)b=x.formAction;else if(sh(u)!==null)continue}else b=x.action;typeof b=="function"?r[l+1]=b:(r.splice(l,3),l-=3),Vv(r)}}}function kv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lh(e){this._internalRoot=e}cc.prototype.render=lh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=ti();Ov(r,l,e,n,null,null)},cc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ov(e.current,2,null,e,null,null),kl(),n[Pi]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bs();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Oa.length&&n!==0&&n<Oa[r].priority;r++);Oa.splice(r,0,e),r===0&&Hv(e)}};var Xv=t.version;if(Xv!=="19.2.7")throw Error(a(527,Xv,"19.2.7"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var US={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{$t=uc.inject(US),jt=uc}catch{}}return Do.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",u=Qm,d=Jm,x=$m;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Lv(e,1,!1,null,null,r,l,null,u,d,x,kv),e[Pi]=n.current,kf(e),new lh(n)},Do.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,u="",d=Qm,x=Jm,b=$m,B=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),n=Lv(e,1,!0,n,r??null,l,u,B,d,x,b,kv),n.context=Nv(null),r=n.current,l=ti(),l=Za(l),u=ya(l),u.callback=null,xa(r,u,l),r=l,n.current.lanes=r,xn(n,r),Li(n),e[Pi]=n.current,kf(e),new cc(n)},Do.version="19.2.7",Do}var t0;function kS(){if(t0)return fh.exports;t0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),fh.exports=VS(),fh.exports}var XS=kS();const WS="modulepreload",qS=function(s){return"/makemecubemaster/"+s},e0={},YS=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=f(i.map(m=>{if(m=qS(m),m in e0)return;e0[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":WS,g||(_.as="script"),_.crossOrigin="",_.href=m,p&&_.setAttribute("nonce",p),document.head.appendChild(_),g)return new Promise((S,E)=>{_.addEventListener("load",S),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return o.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function jS(s={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:a,onOfflineReady:o,onRegistered:c,onRegisteredSW:f,onRegisterError:h}=s;let p,m;const g=async(_=!0)=>{await m};async function v(){if("serviceWorker"in navigator){if(p=await YS(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(_=>{h==null||h(_)}),!p)return;p.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",_=>{_.isUpdate||o==null||o()}),p.register({immediate:t}).then(_=>{f?f("/makemecubemaster/sw.js",_):c==null||c(_)}).catch(_=>{h==null||h(_)})}}return m=v(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="175",ZS=0,n0=1,KS=2,S_=1,QS=2,ra=3,Ya=0,qn=1,Ti=2,ka=0,Ts=1,i0=2,a0=3,r0=4,JS=5,Mr=100,$S=101,tM=102,eM=103,nM=104,iM=200,aM=201,rM=202,sM=203,id=204,ad=205,oM=206,lM=207,cM=208,uM=209,fM=210,hM=211,dM=212,pM=213,mM=214,rd=0,sd=1,od=2,As=3,ld=4,cd=5,ud=6,fd=7,M_=0,gM=1,vM=2,Xa=0,_M=1,yM=2,xM=3,SM=4,MM=5,EM=6,TM=7,E_=300,Rs=301,Cs=302,hd=303,dd=304,Qc=306,pd=1e3,Tr=1001,md=1002,Ri=1003,bM=1004,fc=1005,Oi=1006,mh=1007,br=1008,ua=1009,T_=1010,b_=1011,Vo=1012,Yd=1013,Rr=1014,oa=1015,qo=1016,jd=1017,Zd=1018,ko=1020,A_=35902,R_=1021,C_=1022,Ai=1023,w_=1024,D_=1025,Xo=1026,Wo=1027,U_=1028,Kd=1029,L_=1030,Qd=1031,Jd=1033,Bc=33776,Ic=33777,Hc=33778,Gc=33779,gd=35840,vd=35841,_d=35842,yd=35843,xd=36196,Sd=37492,Md=37496,Ed=37808,Td=37809,bd=37810,Ad=37811,Rd=37812,Cd=37813,wd=37814,Dd=37815,Ud=37816,Ld=37817,Nd=37818,Od=37819,zd=37820,Pd=37821,Vc=36492,Fd=36494,Bd=36495,N_=36283,Id=36284,Hd=36285,Gd=36286,AM=3200,RM=3201,CM=0,wM=1,Va="",hi="srgb",ws="srgb-linear",qc="linear",ke="srgb",ls=7680,s0=519,DM=512,UM=513,LM=514,O_=515,NM=516,OM=517,zM=518,PM=519,o0=35044,l0="300 es",la=2e3,Yc=2001;class Ns{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=Math.PI/180,Vd=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]).toLowerCase()}function ve(s,t,i){return Math.max(t,Math.min(i,s))}function FM(s,t){return(s%t+t)%t}function vh(s,t,i){return(1-i)*s+i*t}function Uo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,o=t.elements;return this.x=o[0]*i+o[3]*a+o[6],this.y=o[1]*i+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),o=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,i,a,o,c,f,h,p,m){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,o,c,f,h,p,m)}set(t,i,a,o,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,o=i.elements,c=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],g=a[4],v=a[7],_=a[2],S=a[5],E=a[8],T=o[0],M=o[3],y=o[6],P=o[1],L=o[4],w=o[7],X=o[2],F=o[5],z=o[8];return c[0]=f*T+h*P+p*X,c[3]=f*M+h*L+p*F,c[6]=f*y+h*w+p*z,c[1]=m*T+g*P+v*X,c[4]=m*M+g*L+v*F,c[7]=m*y+g*w+v*z,c[2]=_*T+S*P+E*X,c[5]=_*M+S*L+E*F,c[8]=_*y+S*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-a*c*g+a*h*p+o*c*m-o*f*p}invert(){const t=this.elements,i=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*f-h*m,_=h*p-g*c,S=m*c-f*p,E=i*v+a*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(o*m-g*a)*T,t[2]=(h*a-o*f)*T,t[3]=_*T,t[4]=(g*i-o*p)*T,t[5]=(o*c-h*i)*T,t[6]=S*T,t[7]=(a*p-m*i)*T,t[8]=(f*i-a*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,o,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-o*m,o*p,-o*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(_h.makeScale(t,i)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,i){return this.premultiply(_h.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let o=0;o<9;o++)if(i[o]!==a[o])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new fe;function z_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function jc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function BM(){const s=jc("canvas");return s.style.display="block",s}const c0={};function kc(s){s in c0||(c0[s]=!0,console.warn(s))}function IM(s,t,i){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}function HM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function GM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const u0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VM(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(o.r=ca(o.r),o.g=ca(o.g),o.b=ca(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(o.r=bs(o.r),o.g=bs(o.g),o.b=bs(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Va?qc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[ws]:{primaries:t,whitePoint:a,transfer:qc,toXYZ:u0,fromXYZ:f0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:u0,fromXYZ:f0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const De=VM();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class kM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{cs===void 0&&(cs=jc("canvas")),cs.width=t.width,cs.height=t.height;const o=cs.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=cs}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return a.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(ca(i[a]/255)*255):i[a]=ca(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let XM=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(yh(o[f].image)):c.push(yh(o[f]))}else c=yh(o);a.url=c}return i||(t.images[this.uuid]=a),a}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let WM=0;class Yn extends Ns{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,a=Tr,o=Tr,c=Oi,f=br,h=Ai,p=ua,m=Yn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Yo(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case Tr:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case Tr:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=E_;Yn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,a=0,o=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,o){return this.x=t,this.y=i,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,o,c;const p=t.elements,m=p[0],g=p[4],v=p[8],_=p[1],S=p[5],E=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(S+1)/2,X=(y+1)/2,F=(g+_)/4,z=(v+T)/4,k=(E+M)/4;return L>w&&L>X?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=F/a,c=z/a):w>X?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=F/o,c=k/o):X<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(X),a=z/c,o=k/c),this.set(a,o,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(v-T)/P,this.z=(_-g)/P,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qM extends Ns{constructor(t=1,i=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const o={width:t,height:i,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Yn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=i,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},t.textures[i].image);this.textures[i].source=new $d(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends qM{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class P_ extends Yn{constructor(t=null,i=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YM extends Yn{constructor(t=null,i=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=0,i=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=o}static slerpFlat(t,i,a,o,c,f,h){let p=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];const _=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(v!==T||p!==_||m!==S||g!==E){let M=1-h;const y=p*_+m*S+g*E+v*T,P=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const X=Math.sqrt(L),F=Math.atan2(X,y*P);M=Math.sin(M*F)/X,h=Math.sin(h*F)/X}const w=h*P;if(p=p*M+_*w,m=m*M+S*w,g=g*M+E*w,v=v*M+T*w,M===1-h){const X=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=X,m*=X,g*=X,v*=X}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,a,o,c,f){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],v=c[f],_=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*v+p*S-m*_,t[i+1]=p*E+g*_+m*v-h*S,t[i+2]=m*E+g*S+h*_-p*v,t[i+3]=g*E-h*v-p*_-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,o){return this._x=t,this._y=i,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),v=h(c/2),_=p(a/2),S=p(o/2),E=p(c/2);switch(f){case"XYZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"YZX":this._x=_*g*v+m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v-_*S*E;break;case"XZY":this._x=_*g*v-m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],o=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],_=a+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-o)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(g-p)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-o)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,i/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,o=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*h+o*m-c*p,this._y=o*g+f*p+c*h-a*m,this._z=c*g+f*m+a*p-o*h,this._w=f*g-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*a+i*this._x,this._y=S*o+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,_=Math.sin(i*g)/m;return this._w=f*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,a=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(h0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(h0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*o,this.y=c[1]*i+c[4]*a+c[7]*o,this.z=c[2]*i+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*i+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*o-h*a),g=2*(h*i-c*o),v=2*(c*a-f*i);return this.x=i+p*m+f*v-h*g,this.y=a+p*g+h*m-c*v,this.z=o+p*v+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*o,this.y=c[1]*i+c[5]*a+c[9]*o,this.z=c[2]*i+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,o=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=o*p-c*h,this.y=c*f-a*p,this.z=a*h-o*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return i*i+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const o=Math.sin(i)*t;return this.x=o*Math.sin(a),this.y=Math.cos(i)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new j,h0=new jo;class Zo{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(Si.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(Si.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=Si.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Si):Si.fromBufferAttribute(c,f),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),hc.copy(a.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),dc.subVectors(this.max,Lo),us.subVectors(t.a,Lo),fs.subVectors(t.b,Lo),hs.subVectors(t.c,Lo),Pa.subVectors(fs,us),Fa.subVectors(hs,fs),pr.subVectors(us,hs);let i=[0,-Pa.z,Pa.y,0,-Fa.z,Fa.y,0,-pr.z,pr.y,Pa.z,0,-Pa.x,Fa.z,0,-Fa.x,pr.z,0,-pr.x,-Pa.y,Pa.x,0,-Fa.y,Fa.x,0,-pr.y,pr.x,0];return!Sh(i,us,fs,hs,dc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,us,fs,hs,dc))?!1:(pc.crossVectors(Pa,Fa),i=[pc.x,pc.y,pc.z],Sh(i,us,fs,hs,dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new j,new j,new j,new j,new j,new j,new j,new j],Si=new j,hc=new Zo,us=new j,fs=new j,hs=new j,Pa=new j,Fa=new j,pr=new j,Lo=new j,dc=new j,pc=new j,mr=new j;function Sh(s,t,i,a,o){for(let c=0,f=s.length-3;c<=f;c+=3){mr.fromArray(s,c);const h=o.x*Math.abs(mr.x)+o.y*Math.abs(mr.y)+o.z*Math.abs(mr.z),p=t.dot(mr),m=i.dot(mr),g=a.dot(mr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const jM=new Zo,No=new j,Mh=new j;class Jc{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):jM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),o=(a-this.radius)*.5;this.center.addScaledVector(No,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(Mh)),this.expandByPoint(No.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new j,Eh=new j,mc=new j,Ba=new j,Th=new j,gc=new j,bh=new j;class F_{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,a,o){Eh.copy(t).add(i).multiplyScalar(.5),mc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(mc),h=Ba.dot(this.direction),p=-Ba.dot(mc),m=Ba.lengthSq(),g=Math.abs(1-f*f);let v,_,S,E;if(g>0)if(v=f*p-h,_=f*h-p,E=c*g,v>=0)if(_>=-E)if(_<=E){const T=1/g;v*=T,_*=T,S=v*(v+f*_+2*h)+_*(f*v+_+2*p)+m}else _=c,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _=-c,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _<=-E?(v=Math.max(0,-(-f*c+h)),_=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+_*(_+2*p)+m):_<=E?(v=0,_=Math.min(Math.max(-c,-p),c),S=_*(_+2*p)+m):(v=Math.max(0,-(f*c+h)),_=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+_*(_+2*p)+m);else _=f>0?-c:c,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Eh).addScaledVector(mc,_),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const a=ea.dot(this.direction),o=ea.dot(ea)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,o,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,a,o,c){Th.subVectors(i,t),gc.subVectors(a,t),bh.crossVectors(Th,gc);let f=this.direction.dot(bh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ba.subVectors(this.origin,t);const p=h*this.direction.dot(gc.crossVectors(Ba,gc));if(p<0)return null;const m=h*this.direction.dot(Th.cross(Ba));if(m<0||p+m>f)return null;const g=-h*Ba.dot(bh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,a,o,c,f,h,p,m,g,v,_,S,E,T,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,o,c,f,h,p,m,g,v,_,S,E,T,M)}set(t,i,a,o,c,f,h,p,m,g,v,_,S,E,T,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=a,y[12]=o,y[1]=c,y[5]=f,y[9]=h,y[13]=p,y[2]=m,y[6]=g,y[10]=v,y[14]=_,y[3]=S,y[7]=E,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,o=1/ds.setFromMatrixColumn(t,0).length(),c=1/ds.setFromMatrixColumn(t,1).length(),f=1/ds.setFromMatrixColumn(t,2).length();return i[0]=a[0]*o,i[1]=a[1]*o,i[2]=a[2]*o,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=f*g,S=f*v,E=h*g,T=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=_-T*m,i[9]=-h*p,i[2]=T-_*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const _=p*g,S=p*v,E=m*g,T=m*v;i[0]=_+T*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+_*h,i[10]=f*p}else if(t.order==="ZXY"){const _=p*g,S=p*v,E=m*g,T=m*v;i[0]=_-T*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-_*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const _=f*g,S=f*v,E=h*g,T=h*v;i[0]=p*g,i[4]=E*m-S,i[8]=_*m+T,i[1]=p*v,i[5]=T*m+_,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=T-_*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*v+E,i[10]=_-T*v}else if(t.order==="XZY"){const _=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=_*v+T,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*g,i[10]=T*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ZM,t,KM)}lookAt(t,i,a){const o=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ia.crossVectors(a,ei),Ia.lengthSq()===0&&(Math.abs(a.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ia.crossVectors(a,ei)),Ia.normalize(),vc.crossVectors(ei,Ia),o[0]=Ia.x,o[4]=vc.x,o[8]=ei.x,o[1]=Ia.y,o[5]=vc.y,o[9]=ei.y,o[2]=Ia.z,o[6]=vc.z,o[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,o=i.elements,c=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],g=a[1],v=a[5],_=a[9],S=a[13],E=a[2],T=a[6],M=a[10],y=a[14],P=a[3],L=a[7],w=a[11],X=a[15],F=o[0],z=o[4],k=o[8],U=o[12],R=o[1],H=o[5],nt=o[9],$=o[13],ct=o[2],mt=o[6],O=o[10],J=o[14],Q=o[3],St=o[7],Tt=o[11],D=o[15];return c[0]=f*F+h*R+p*ct+m*Q,c[4]=f*z+h*H+p*mt+m*St,c[8]=f*k+h*nt+p*O+m*Tt,c[12]=f*U+h*$+p*J+m*D,c[1]=g*F+v*R+_*ct+S*Q,c[5]=g*z+v*H+_*mt+S*St,c[9]=g*k+v*nt+_*O+S*Tt,c[13]=g*U+v*$+_*J+S*D,c[2]=E*F+T*R+M*ct+y*Q,c[6]=E*z+T*H+M*mt+y*St,c[10]=E*k+T*nt+M*O+y*Tt,c[14]=E*U+T*$+M*J+y*D,c[3]=P*F+L*R+w*ct+X*Q,c[7]=P*z+L*H+w*mt+X*St,c[11]=P*k+L*nt+w*O+X*Tt,c[15]=P*U+L*$+w*J+X*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],_=t[10],S=t[14],E=t[3],T=t[7],M=t[11],y=t[15];return E*(+c*p*v-o*m*v-c*h*_+a*m*_+o*h*S-a*p*S)+T*(+i*p*S-i*m*_+c*f*_-o*f*S+o*m*g-c*p*g)+M*(+i*m*v-i*h*S-c*f*v+a*f*S+c*h*g-a*m*g)+y*(-o*h*g-i*p*v+i*h*_+o*f*v-a*f*_+a*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],_=t[10],S=t[11],E=t[12],T=t[13],M=t[14],y=t[15],P=v*M*m-T*_*m+T*p*S-h*M*S-v*p*y+h*_*y,L=E*_*m-g*M*m-E*p*S+f*M*S+g*p*y-f*_*y,w=g*T*m-E*v*m+E*h*S-f*T*S-g*h*y+f*v*y,X=E*v*p-g*T*p-E*h*_+f*T*_+g*h*M-f*v*M,F=i*P+a*L+o*w+c*X;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=P*z,t[1]=(T*_*c-v*M*c-T*o*S+a*M*S+v*o*y-a*_*y)*z,t[2]=(h*M*c-T*p*c+T*o*m-a*M*m-h*o*y+a*p*y)*z,t[3]=(v*p*c-h*_*c-v*o*m+a*_*m+h*o*S-a*p*S)*z,t[4]=L*z,t[5]=(g*M*c-E*_*c+E*o*S-i*M*S-g*o*y+i*_*y)*z,t[6]=(E*p*c-f*M*c-E*o*m+i*M*m+f*o*y-i*p*y)*z,t[7]=(f*_*c-g*p*c+g*o*m-i*_*m-f*o*S+i*p*S)*z,t[8]=w*z,t[9]=(E*v*c-g*T*c-E*a*S+i*T*S+g*a*y-i*v*y)*z,t[10]=(f*T*c-E*h*c+E*a*m-i*T*m-f*a*y+i*h*y)*z,t[11]=(g*h*c-f*v*c-g*a*m+i*v*m+f*a*S-i*h*S)*z,t[12]=X*z,t[13]=(g*T*o-E*v*o+E*a*_-i*T*_-g*a*M+i*v*M)*z,t[14]=(E*h*o-f*T*o-E*a*p+i*T*p+f*a*M-i*h*M)*z,t[15]=(f*v*o-g*h*o+g*a*p-i*v*p-f*a*_+i*h*_)*z,this}scale(t){const i=this.elements,a=t.x,o=t.y,c=t.z;return i[0]*=a,i[4]*=o,i[8]*=c,i[1]*=a,i[5]*=o,i[9]*=c,i[2]*=a,i[6]*=o,i[10]*=c,i[3]*=a,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,o))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),o=Math.sin(i),c=1-a,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*f,0,m*p-o*h,g*p+o*f,c*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,i,o,1,0,0,0,0,1),this}compose(t,i,a){const o=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,v=h+h,_=c*m,S=c*g,E=c*v,T=f*g,M=f*v,y=h*v,P=p*m,L=p*g,w=p*v,X=a.x,F=a.y,z=a.z;return o[0]=(1-(T+y))*X,o[1]=(S+w)*X,o[2]=(E-L)*X,o[3]=0,o[4]=(S-w)*F,o[5]=(1-(_+y))*F,o[6]=(M+P)*F,o[7]=0,o[8]=(E+L)*z,o[9]=(M-P)*z,o[10]=(1-(_+T))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,a){const o=this.elements;let c=ds.set(o[0],o[1],o[2]).length();const f=ds.set(o[4],o[5],o[6]).length(),h=ds.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Mi.copy(this);const m=1/c,g=1/f,v=1/h;return Mi.elements[0]*=m,Mi.elements[1]*=m,Mi.elements[2]*=m,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,i.setFromRotationMatrix(Mi),a.x=c,a.y=f,a.z=h,this}makePerspective(t,i,a,o,c,f,h=la){const p=this.elements,m=2*c/(i-t),g=2*c/(a-o),v=(i+t)/(i-t),_=(a+o)/(a-o);let S,E;if(h===la)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Yc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,o,c,f,h=la){const p=this.elements,m=1/(i-t),g=1/(a-o),v=1/(f-c),_=(i+t)*m,S=(a+o)*g;let E,T;if(h===la)E=(f+c)*v,T=-2*v;else if(h===Yc)E=c*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let o=0;o<16;o++)if(i[o]!==a[o])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const ds=new j,Mi=new Ze,ZM=new j(0,0,0),KM=new j(1,1,1),Ia=new j,vc=new j,ei=new j,d0=new Ze,p0=new jo;class fa{constructor(t=0,i=0,a=0,o=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,o=this._order){return this._x=t,this._y=i,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],p=o[1],m=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return d0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(d0,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return p0.setFromEuler(this),this.setFromQuaternion(p0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class B_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let QM=0;const m0=new j,ps=new jo,na=new Ze,_c=new j,Oo=new j,JM=new j,$M=new jo,g0=new j(1,0,0),v0=new j(0,1,0),_0=new j(0,0,1),y0={type:"added"},tE={type:"removed"},ms={type:"childadded",child:null},Ah={type:"childremoved",child:null};class zn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new j,i=new fa,a=new jo,o=new j(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ze},normalMatrix:{value:new fe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(g0,t)}rotateY(t){return this.rotateOnAxis(v0,t)}rotateZ(t){return this.rotateOnAxis(_0,t)}translateOnAxis(t,i){return m0.copy(t).applyQuaternion(this.quaternion),this.position.add(m0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(g0,t)}translateY(t){return this.translateOnAxis(v0,t)}translateZ(t){return this.translateOnAxis(_0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?_c.copy(t):_c.set(t,i,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Oo,_c,this.up):na.lookAt(_c,Oo,this.up),this.quaternion.setFromRotationMatrix(na),o&&(na.extractRotation(o.matrixWorld),ps.setFromRotationMatrix(na),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(y0),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(tE),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(y0),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,JM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,$M,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}zn.DEFAULT_UP=new j(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new j,ia=new j,Rh=new j,aa=new j,gs=new j,vs=new j,x0=new j,Ch=new j,wh=new j,Dh=new j,Uh=new rn,Lh=new rn,Nh=new rn;class bi{constructor(t=new j,i=new j,a=new j){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,o){o.subVectors(a,i),Ei.subVectors(t,i),o.cross(Ei);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,i,a,o,c){Ei.subVectors(o,i),ia.subVectors(a,i),Rh.subVectors(t,i);const f=Ei.dot(Ei),h=Ei.dot(ia),p=Ei.dot(Rh),m=ia.dot(ia),g=ia.dot(Rh),v=f*m-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(m*p-h*g)*_,E=(f*g-h*p)*_;return c.set(1-S-E,E,S)}static containsPoint(t,i,a,o){return this.getBarycoord(t,i,a,o,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,a,o,c,f,h,p){return this.getBarycoord(t,i,a,o,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,aa.x),p.addScaledVector(f,aa.y),p.addScaledVector(h,aa.z),p)}static getInterpolatedAttribute(t,i,a,o,c,f){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,a),Nh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Uh,c.x),f.addScaledVector(Lh,c.y),f.addScaledVector(Nh,c.z),f}static isFrontFacing(t,i,a,o){return Ei.subVectors(a,i),ia.subVectors(t,i),Ei.cross(ia).dot(o)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,o){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,a,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ei.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,o,c){return bi.getInterpolation(t,this.a,this.b,this.c,i,a,o,c)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,o=this.b,c=this.c;let f,h;gs.subVectors(o,a),vs.subVectors(c,a),Ch.subVectors(t,a);const p=gs.dot(Ch),m=vs.dot(Ch);if(p<=0&&m<=0)return i.copy(a);wh.subVectors(t,o);const g=gs.dot(wh),v=vs.dot(wh);if(g>=0&&v<=g)return i.copy(o);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(gs,f);Dh.subVectors(t,c);const S=gs.dot(Dh),E=vs.dot(Dh);if(E>=0&&S<=E)return i.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(a).addScaledVector(vs,h);const M=g*E-S*v;if(M<=0&&v-g>=0&&S-E>=0)return x0.subVectors(c,o),h=(v-g)/(v-g+(S-E)),i.copy(o).addScaledVector(x0,h);const y=1/(M+T+_);return f=T*y,h=_*y,i.copy(a).addScaledVector(gs,f).addScaledVector(vs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const I_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Oh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Oe{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,i),this}setRGB(t,i,a,o=De.workingColorSpace){return this.r=t,this.g=i,this.b=a,De.toWorkingColorSpace(this,o),this}setHSL(t,i,a,o=De.workingColorSpace){if(t=FM(t,1),i=ve(i,0,1),a=ve(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Oh(f,c,t+1/3),this.g=Oh(f,c,t),this.b=Oh(f,c,t-1/3)}return De.toWorkingColorSpace(this,o),this}setStyle(t,i=hi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const a=I_[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return De.fromWorkingColorSpace(Dn.copy(this),t),Math.round(ve(Dn.r*255,0,255))*65536+Math.round(ve(Dn.g*255,0,255))*256+Math.round(ve(Dn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.fromWorkingColorSpace(Dn.copy(this),i);const a=Dn.r,o=Dn.g,c=Dn.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=g<=.5?v/(f+h):v/(2-f-h),f){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.fromWorkingColorSpace(Dn.copy(this),i),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=hi){De.fromWorkingColorSpace(Dn.copy(this),t);const i=Dn.r,a=Dn.g,o=Dn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,i,a){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(yc);const a=vh(Ha.h,yc.h,i),o=vh(Ha.s,yc.s,i),c=vh(Ha.l,yc.l,i);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*o,this.g=c[1]*i+c[4]*a+c[7]*o,this.b=c[2]*i+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Oe;Oe.NAMES=I_;let eE=0;class Ko extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Ts,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=ad,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(a.blending=this.blending),this.side!==Ya&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==id&&(a.blendSrc=this.blendSrc),this.blendDst!==ad&&(a.blendDst=this.blendDst),this.blendEquation!==Mr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const o=i.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Io extends Ko{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new j,xc=new re;let nE=0;class zi{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=o0,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=i.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=Uo(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=Xn(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),a=Xn(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,o){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),a=Xn(a,this.array),o=Xn(o,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,i,a,o,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),a=Xn(a,this.array),o=Xn(o,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==o0&&(t.usage=this.usage),t}}class H_ extends zi{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class G_ extends zi{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class pn extends zi{constructor(t,i,a){super(new Float32Array(t),i,a)}}let iE=0;const fi=new Ze,zh=new zn,_s=new j,ni=new Zo,zo=new Zo,yn=new j;class pi extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z_(t)?G_:H_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new fe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,a){return fi.makeTranslation(t,i,a),this.applyMatrix4(fi),this}scale(t,i,a){return fi.makeScale(t,i,a),this.applyMatrix4(fi),this}lookAt(t){return zh.lookAt(t),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new pn(a,3))}else{const a=Math.min(t.length,i.count);for(let o=0;o<a;o++){const c=t[o];i.setXYZ(o,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,o=i.length;a<o;a++){const c=i[a];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];zo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ni.min,zo.min),ni.expandByPoint(yn),yn.addVectors(ni.max,zo.max),ni.expandByPoint(yn)):(ni.expandByPoint(zo.min),ni.expandByPoint(zo.max))}ni.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)yn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(yn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)yn.fromBufferAttribute(h,m),p&&(_s.fromBufferAttribute(t,m),yn.add(_s)),o=Math.max(o,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,o=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<a.count;k++)h[k]=new j,p[k]=new j;const m=new j,g=new j,v=new j,_=new re,S=new re,E=new re,T=new j,M=new j;function y(k,U,R){m.fromBufferAttribute(a,k),g.fromBufferAttribute(a,U),v.fromBufferAttribute(a,R),_.fromBufferAttribute(c,k),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,R),g.sub(m),v.sub(m),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),h[k].add(T),h[U].add(T),h[R].add(T),p[k].add(M),p[U].add(M),p[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let k=0,U=P.length;k<U;++k){const R=P[k],H=R.start,nt=R.count;for(let $=H,ct=H+nt;$<ct;$+=3)y(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new j,w=new j,X=new j,F=new j;function z(k){X.fromBufferAttribute(o,k),F.copy(X);const U=h[k];L.copy(U),L.sub(X.multiplyScalar(X.dot(U))).normalize(),w.crossVectors(F,U);const H=w.dot(p[k])<0?-1:1;f.setXYZW(k,L.x,L.y,L.z,H)}for(let k=0,U=P.length;k<U;++k){const R=P[k],H=R.start,nt=R.count;for(let $=H,ct=H+nt;$<ct;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new j,c=new j,f=new j,h=new j,p=new j,m=new j,g=new j,v=new j;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,M),h.add(g),p.add(g),m.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,S=i.count;_<S;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let S=0,E=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let y=0;y<g;y++)_[E++]=m[S++]}return new zi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],S=t(_,a);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new Ze,gr=new F_,Sc=new Jc,M0=new j,Mc=new j,Ec=new j,Tc=new j,Ph=new j,bc=new j,E0=new j,Ac=new j;class Wn extends zn{constructor(t=new pi,i=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){bc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],v=c[p];g!==0&&(Ph.fromBufferAttribute(v,t),f?bc.addScaledVector(Ph,g):bc.addScaledVector(Ph.sub(i),g))}i.add(bc)}return i}raycast(t,i){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Sc.copy(a.boundingSphere),Sc.applyMatrix4(c),gr.copy(t.ray).recast(t.near),!(Sc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Sc,M0)===null||gr.origin.distanceToSquared(M0)>(t.far-t.near)**2))&&(S0.copy(c).invert(),gr.copy(t.ray).applyMatrix4(S0),!(a.boundingBox!==null&&gr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,a){let o;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),L=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,X=L;w<X;w+=3){const F=h.getX(w),z=h.getX(w+1),k=h.getX(w+2);o=Rc(this,y,t,a,m,g,v,F,z,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const P=h.getX(M),L=h.getX(M+1),w=h.getX(M+2);o=Rc(this,f,t,a,m,g,v,P,L,w),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,X=L;w<X;w+=3){const F=w,z=w+1,k=w+2;o=Rc(this,y,t,a,m,g,v,F,z,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const P=M,L=M+1,w=M+2;o=Rc(this,f,t,a,m,g,v,P,L,w),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}}}function aE(s,t,i,a,o,c,f,h){let p;if(t.side===qn?p=a.intersectTriangle(f,c,o,!0,h):p=a.intersectTriangle(o,c,f,t.side===Ya,h),p===null)return null;Ac.copy(h),Ac.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Ac);return m<i.near||m>i.far?null:{distance:m,point:Ac.clone(),object:s}}function Rc(s,t,i,a,o,c,f,h,p,m){s.getVertexPosition(h,Mc),s.getVertexPosition(p,Ec),s.getVertexPosition(m,Tc);const g=aE(s,t,i,a,Mc,Ec,Tc,E0);if(g){const v=new j;bi.getBarycoord(E0,Mc,Ec,Tc,v),o&&(g.uv=bi.getInterpolatedAttribute(o,h,p,m,v,new re)),c&&(g.uv1=bi.getInterpolatedAttribute(c,h,p,m,v,new re)),f&&(g.normal=bi.getInterpolatedAttribute(f,h,p,m,v,new j),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new j,materialIndex:0};bi.getNormal(Mc,Ec,Tc,_.normal),g.face=_,g.barycoord=v}return g}class Qo extends pi{constructor(t=1,i=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,a,i,t,f,c,0),E("z","y","x",1,-1,a,i,-t,f,c,1),E("x","z","y",1,1,t,a,i,o,f,2),E("x","z","y",1,-1,t,a,-i,o,f,3),E("x","y","z",1,-1,t,i,a,o,c,4),E("x","y","z",-1,-1,t,i,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(v,2));function E(T,M,y,P,L,w,X,F,z,k,U){const R=w/z,H=X/k,nt=w/2,$=X/2,ct=F/2,mt=z+1,O=k+1;let J=0,Q=0;const St=new j;for(let Tt=0;Tt<O;Tt++){const D=Tt*H-$;for(let W=0;W<mt;W++){const at=W*R-nt;St[T]=at*P,St[M]=D*L,St[y]=ct,m.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[y]=F>0?1:-1,g.push(St.x,St.y,St.z),v.push(W/z),v.push(1-Tt/k),J+=1}}for(let Tt=0;Tt<k;Tt++)for(let D=0;D<z;D++){const W=_+D+mt*Tt,at=_+D+mt*(Tt+1),G=_+(D+1)+mt*(Tt+1),lt=_+(D+1)+mt*Tt;p.push(W,at,lt),p.push(at,G,lt),Q+=6}h.addGroup(S,Q,U),S+=Q,_+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const o=s[i][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=o.clone():Array.isArray(o)?t[i][a]=o.slice():t[i][a]=o}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const a=Ds(s[i]);for(const o in a)t[o]=a[o]}return t}function rE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function V_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const sE={clone:Ds,merge:On};var oE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends Ko{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oE,this.fragmentShader=lE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=rE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?i.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[o]={type:"m4",value:f.toArray()}:i.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class k_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=la}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new j,T0=new re,b0=new re;class di extends k_{constructor(t=50,i=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Vd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,T0,b0),i.subVectors(b0,T0)}setViewOffset(t,i,a,o,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(gh*.5*this.fov)/this.zoom,a=2*i,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,i-=f.offsetY*a/m,o*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ys=-90,xs=1;class cE extends zn{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(ys,xs,t,i);o.layers=this.layers,this.add(o);const c=new di(ys,xs,t,i);c.layers=this.layers,this.add(c);const f=new di(ys,xs,t,i);f.layers=this.layers,this.add(f);const h=new di(ys,xs,t,i);h.layers=this.layers,this.add(h);const p=new di(ys,xs,t,i);p.layers=this.layers,this.add(p);const m=new di(ys,xs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,o,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===la)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Yc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(i,c),t.setRenderTarget(a,1,o),t.render(i,f),t.setRenderTarget(a,2,o),t.render(i,h),t.setRenderTarget(a,3,o),t.render(i,p),t.setRenderTarget(a,4,o),t.render(i,m),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(i,g),t.setRenderTarget(v,_,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class X_ extends Yn{constructor(t=[],i=Rs,a,o,c,f,h,p,m,g){super(t,i,a,o,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uE extends Cr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new X_(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Oi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qo(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Ds(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:qn,blending:ka});c.uniforms.tEquirect.value=i;const f=new Wn(o,c),h=i.minFilter;return i.minFilter===br&&(i.minFilter=Oi),new cE(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,o);t.setRenderTarget(c)}}class Ar extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fE={type:"move"};class Fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let o=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,a),y=this._getHandJoint(m,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=i.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(fE)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new Ar;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class hE extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new j,dE=new j,pE=new fe;class xr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,o){return this.normal.set(t,i,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const o=Bh.subVectors(a,i).cross(dE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Bh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||pE.getNormalMatrix(t),o=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Jc,Cc=new j;class W_{constructor(t=new xr,i=new xr,a=new xr,o=new xr,c=new xr,f=new xr){this.planes=[t,i,a,o,c,f]}set(t,i,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=la){const a=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],p=o[3],m=o[4],g=o[5],v=o[6],_=o[7],S=o[8],E=o[9],T=o[10],M=o[11],y=o[12],P=o[13],L=o[14],w=o[15];if(a[0].setComponents(p-c,_-m,M-S,w-y).normalize(),a[1].setComponents(p+c,_+m,M+S,w+y).normalize(),a[2].setComponents(p+f,_+g,M+E,w+P).normalize(),a[3].setComponents(p-f,_-g,M-E,w-P).normalize(),a[4].setComponents(p-h,_-v,M-T,w-L).normalize(),i===la)a[5].setComponents(p+h,_+v,M+T,w+L).normalize();else if(i===Yc)a[5].setComponents(h,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(t){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(t){const i=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const o=i[a];if(Cc.x=o.normal.x>0?t.max.x:t.min.x,Cc.y=o.normal.y>0?t.max.y:t.min.y,Cc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q_ extends Ko{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zc=new j,Kc=new j,A0=new Ze,Po=new F_,wc=new Jc,Ih=new j,R0=new j;class mE extends zn{constructor(t=new pi,i=new q_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[0];for(let o=1,c=i.count;o<c;o++)Zc.fromBufferAttribute(i,o-1),Kc.fromBufferAttribute(i,o),a[o]=a[o-1],a[o]+=Zc.distanceTo(Kc);t.setAttribute("lineDistance",new pn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),wc.copy(a.boundingSphere),wc.applyMatrix4(o),wc.radius+=c,t.ray.intersectsSphere(wc)===!1)return;A0.copy(o).invert(),Po.copy(t.ray).applyMatrix4(A0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=a.index,_=a.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=m){const y=g.getX(T),P=g.getX(T+1),L=Dc(this,t,Po,p,y,P,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),M=g.getX(S),y=Dc(this,t,Po,p,T,M,E-1);y&&i.push(y)}}else{const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let T=S,M=E-1;T<M;T+=m){const y=Dc(this,t,Po,p,T,T+1,T);y&&i.push(y)}if(this.isLineLoop){const T=Dc(this,t,Po,p,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Dc(s,t,i,a,o,c,f){const h=s.geometry.attributes.position;if(Zc.fromBufferAttribute(h,o),Kc.fromBufferAttribute(h,c),i.distanceSqToSegment(Zc,Kc,Ih,R0)>a)return;Ih.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ih);if(!(m<t.near||m>t.far))return{distance:m,point:R0.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}const C0=new j,w0=new j;class Y_ extends mE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[];for(let o=0,c=i.count;o<c;o+=2)C0.fromBufferAttribute(i,o),w0.fromBufferAttribute(i,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+C0.distanceTo(w0);t.setAttribute("lineDistance",new pn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j_ extends Yn{constructor(t,i,a=Rr,o,c,f,h=Ri,p=Ri,m,g=Xo){if(g!==Xo&&g!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,f,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $d(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ha{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,o=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),i.push(c),o=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const a=this.getLengths();let o=0;const c=a.length;let f;i?f=i:f=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-f,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===f)return o/(c-1);const g=a[o],_=a[o+1]-g,S=(f-g)/_;return(o+S)/(c-1)}getTangent(t,i){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),p=i||(f.isVector2?new re:new j);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i=!1){const a=new j,o=[],c=[],f=[],h=new j,p=new Ze;for(let S=0;S<=t;S++){const E=S/t;o[S]=this.getTangentAt(E,new j)}c[0]=new j,f[0]=new j;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=m&&(m=g,a.set(1,0,0)),v<=m&&(m=v,a.set(0,1,0)),_<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(ve(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(ve(c[0].dot(c[t]),-1,1));S/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(o[E],S*E)),f[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Z_ extends ha{constructor(t=0,i=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new re){const a=i,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,S=m-this.aY;p=_*g-S*v+this.aX,m=_*v+S*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gE extends Z_{constructor(t,i,a,o,c,f){super(t,i,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function tp(){let s=0,t=0,i=0,a=0;function o(c,f,h,p){s=c,t=h,i=-3*c+3*f-2*h-p,a=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){o(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,v){let _=(f-c)/m-(h-c)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+v)+(p-h)/v;_*=g,S*=g,o(f,h,_,S)},calc:function(c){const f=c*c,h=f*c;return s+t*c+i*f+a*h}}}const Uc=new j,Hh=new tp,Gh=new tp,Vh=new tp;class K_ extends ha{constructor(t=[],i=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=o}getPoint(t,i=new j){const a=i,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=o[(h-1)%c]:(Uc.subVectors(o[0],o[1]).add(o[0]),m=Uc);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Uc.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Uc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),T=Math.pow(v.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Hh.initNonuniformCatmullRom(m.x,v.x,_.x,g.x,E,T,M),Gh.initNonuniformCatmullRom(m.y,v.y,_.y,g.y,E,T,M),Vh.initNonuniformCatmullRom(m.z,v.z,_.z,g.z,E,T,M)}else this.curveType==="catmullrom"&&(Hh.initCatmullRom(m.x,v.x,_.x,g.x,this.tension),Gh.initCatmullRom(m.y,v.y,_.y,g.y,this.tension),Vh.initCatmullRom(m.z,v.z,_.z,g.z,this.tension));return a.set(Hh.calc(p),Gh.calc(p),Vh.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const o=this.points[i];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(new j().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function D0(s,t,i,a,o){const c=(a-t)*.5,f=(o-i)*.5,h=s*s,p=s*h;return(2*i-2*a+c+f)*p+(-3*i+3*a-2*c-f)*h+c*s+i}function vE(s,t){const i=1-s;return i*i*t}function _E(s,t){return 2*(1-s)*s*t}function yE(s,t){return s*s*t}function Ho(s,t,i,a){return vE(s,t)+_E(s,i)+yE(s,a)}function xE(s,t){const i=1-s;return i*i*i*t}function SE(s,t){const i=1-s;return 3*i*i*s*t}function ME(s,t){return 3*(1-s)*s*s*t}function EE(s,t){return s*s*s*t}function Go(s,t,i,a,o){return xE(s,t)+SE(s,i)+ME(s,a)+EE(s,o)}class TE extends ha{constructor(t=new re,i=new re,a=new re,o=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=o}getPoint(t,i=new re){const a=i,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Go(t,o.x,c.x,f.x,h.x),Go(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bE extends ha{constructor(t=new j,i=new j,a=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=o}getPoint(t,i=new j){const a=i,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Go(t,o.x,c.x,f.x,h.x),Go(t,o.y,c.y,f.y,h.y),Go(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class AE extends ha{constructor(t=new re,i=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new re){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new re){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class RE extends ha{constructor(t=new j,i=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new j){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new j){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class CE extends ha{constructor(t=new re,i=new re,a=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new re){const a=i,o=this.v0,c=this.v1,f=this.v2;return a.set(Ho(t,o.x,c.x,f.x),Ho(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends ha{constructor(t=new j,i=new j,a=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new j){const a=i,o=this.v0,c=this.v1,f=this.v2;return a.set(Ho(t,o.x,c.x,f.x),Ho(t,o.y,c.y,f.y),Ho(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wE extends ha{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new re){const a=i,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,p=o[f===0?f:f-1],m=o[f],g=o[f>o.length-2?o.length-1:f+1],v=o[f>o.length-3?o.length-1:f+2];return a.set(D0(h,p.x,m.x,g.x,v.x),D0(h,p.y,m.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const o=this.points[i];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(new re().fromArray(o))}return this}}var DE=Object.freeze({__proto__:null,ArcCurve:gE,CatmullRomCurve3:K_,CubicBezierCurve:TE,CubicBezierCurve3:bE,EllipseCurve:Z_,LineCurve:AE,LineCurve3:RE,QuadraticBezierCurve:CE,QuadraticBezierCurve3:Q_,SplineCurve:wE});class ep extends pi{constructor(t=1,i=1,a=1,o=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],S=[];let E=0;const T=[],M=a/2;let y=0;P(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(S,2));function P(){const w=new j,X=new j;let F=0;const z=(i-t)/a;for(let k=0;k<=c;k++){const U=[],R=k/c,H=R*(i-t)+t;for(let nt=0;nt<=o;nt++){const $=nt/o,ct=$*p+h,mt=Math.sin(ct),O=Math.cos(ct);X.x=H*mt,X.y=-R*a+M,X.z=H*O,v.push(X.x,X.y,X.z),w.set(mt,z,O).normalize(),_.push(w.x,w.y,w.z),S.push($,1-R),U.push(E++)}T.push(U)}for(let k=0;k<o;k++)for(let U=0;U<c;U++){const R=T[U][k],H=T[U+1][k],nt=T[U+1][k+1],$=T[U][k+1];(t>0||U!==0)&&(g.push(R,H,$),F+=3),(i>0||U!==c-1)&&(g.push(H,nt,$),F+=3)}m.addGroup(y,F,0),y+=F}function L(w){const X=E,F=new re,z=new j;let k=0;const U=w===!0?t:i,R=w===!0?1:-1;for(let nt=1;nt<=o;nt++)v.push(0,M*R,0),_.push(0,R,0),S.push(.5,.5),E++;const H=E;for(let nt=0;nt<=o;nt++){const ct=nt/o*p+h,mt=Math.cos(ct),O=Math.sin(ct);z.x=U*O,z.y=M*R,z.z=U*mt,v.push(z.x,z.y,z.z),_.push(0,R,0),F.x=mt*.5+.5,F.y=O*.5*R+.5,S.push(F.x,F.y),E++}for(let nt=0;nt<o;nt++){const $=X+nt,ct=H+nt;w===!0?g.push(ct,ct+1,$):g.push(ct+1,ct,$),k+=3}m.addGroup(y,k,w===!0?1:2),y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ep(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class np extends ep{constructor(t=1,i=1,a=32,o=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,a,o,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new np(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jo extends pi{constructor(t=1,i=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:o};const c=t/2,f=i/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,v=t/h,_=i/p,S=[],E=[],T=[],M=[];for(let y=0;y<g;y++){const P=y*_-f;for(let L=0;L<m;L++){const w=L*v-c;E.push(w,-P,0),T.push(0,0,1),M.push(L/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<h;P++){const L=P+m*y,w=P+m*(y+1),X=P+1+m*(y+1),F=P+1+m*y;S.push(L,w,F),S.push(w,X,F)}this.setIndex(S),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.width,t.height,t.widthSegments,t.heightSegments)}}class ip extends pi{constructor(t=.5,i=1,a=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:f},a=Math.max(3,a),o=Math.max(1,o);const h=[],p=[],m=[],g=[];let v=t;const _=(i-t)/o,S=new j,E=new re;for(let T=0;T<=o;T++){for(let M=0;M<=a;M++){const y=c+M/a*f;S.x=v*Math.cos(y),S.y=v*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,g.push(E.x,E.y)}v+=_}for(let T=0;T<o;T++){const M=T*(a+1);for(let y=0;y<a;y++){const P=y+M,L=P,w=P+a+1,X=P+a+2,F=P+1;h.push(L,w,F),h.push(w,X,F)}}this.setIndex(h),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(m,3)),this.setAttribute("uv",new pn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ip(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ap extends pi{constructor(t=new Q_(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),i=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:o,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new j,p=new j,m=new re;let g=new j;const v=[],_=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(S,2));function T(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),P(),y()}function M(L){g=t.getPointAt(L/i,g);const w=f.normals[L],X=f.binormals[L];for(let F=0;F<=o;F++){const z=F/o*Math.PI*2,k=Math.sin(z),U=-Math.cos(z);p.x=U*w.x+k*X.x,p.y=U*w.y+k*X.y,p.z=U*w.z+k*X.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function y(){for(let L=1;L<=i;L++)for(let w=1;w<=o;w++){const X=(o+1)*(L-1)+(w-1),F=(o+1)*L+(w-1),z=(o+1)*L+w,k=(o+1)*(L-1)+w;E.push(X,F,k),E.push(F,z,k)}}function P(){for(let L=0;L<=i;L++)for(let w=0;w<=o;w++)m.x=L/i,m.y=w/o,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ap(new DE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class UE extends Ko{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class LE extends Ko{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class NE extends zn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class OE extends k_{constructor(t=-1,i=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+i,p=o-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zE extends NE{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class PE extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function U0(s,t,i,a){const o=FE(a);switch(i){case R_:return s*t;case w_:return s*t;case D_:return s*t*2;case U_:return s*t/o.components*o.byteLength;case Kd:return s*t/o.components*o.byteLength;case L_:return s*t*2/o.components*o.byteLength;case Qd:return s*t*2/o.components*o.byteLength;case C_:return s*t*3/o.components*o.byteLength;case Ai:return s*t*4/o.components*o.byteLength;case Jd:return s*t*4/o.components*o.byteLength;case Bc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vd:case yd:return Math.max(s,16)*Math.max(t,8)/4;case gd:case _d:return Math.max(s,8)*Math.max(t,8)/2;case xd:case Sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Od:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vc:case Fd:case Bd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case N_:case Id:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Hd:case Gd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function FE(s){switch(s){case ua:case T_:return{byteLength:1,components:1};case Vo:case b_:case qo:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case Rr:case Yd:case oa:return{byteLength:4,components:1};case A_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let s=null,t=!1,i=null,a=null;function o(c,f){i(c,f),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function BE(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,v[_]=T)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:f}}var IE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HE=`#ifdef USE_ALPHAHASH
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
#endif`,GE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
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
#endif`,qE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YE=`#ifdef USE_BATCHING
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
#endif`,jE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JE=`#ifdef USE_IRIDESCENCE
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
#endif`,$E=`#ifdef USE_BUMPMAP
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
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lT=`#define PI 3.141592653589793
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
} // validated`,cT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uT=`vec3 transformedNormal = objectNormal;
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
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mT="gl_FragColor = linearToOutputTexel( gl_FragColor );",gT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ET=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AT=`#ifdef USE_GRADIENTMAP
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
}`,RT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
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
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,LT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PT=`PhysicalMaterial material;
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
#endif`,FT=`struct PhysicalMaterial {
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
}`,BT=`
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
#endif`,IT=`#if defined( RE_IndirectDiffuse )
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
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jT=`#if defined( USE_POINTS_UV )
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
#endif`,ZT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$T=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tb=`#ifdef USE_MORPHTARGETS
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
#endif`,eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eb=`float getShadowMask() {
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
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lb=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#ifdef USE_TRANSMISSION
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ib=`uniform sampler2D t2D;
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,Wb=`#if DEPTH_PACKING == 3200
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
}`,qb=`#define DISTANCE
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
}`,Yb=`#define DISTANCE
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`uniform float scale;
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
}`,Qb=`uniform vec3 diffuse;
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
}`,Jb=`#include <common>
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
}`,$b=`uniform vec3 diffuse;
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
}`,t1=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,n1=`#define MATCAP
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
}`,i1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,l1=`#define STANDARD
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
}`,c1=`#define STANDARD
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
}`,u1=`#define TOON
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
}`,f1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 color;
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
}`,g1=`uniform float rotation;
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
}`,v1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:IE,alphahash_pars_fragment:HE,alphamap_fragment:GE,alphamap_pars_fragment:VE,alphatest_fragment:kE,alphatest_pars_fragment:XE,aomap_fragment:WE,aomap_pars_fragment:qE,batching_pars_vertex:YE,batching_vertex:jE,begin_vertex:ZE,beginnormal_vertex:KE,bsdfs:QE,iridescence_fragment:JE,bumpmap_pars_fragment:$E,clipping_planes_fragment:tT,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:nT,clipping_planes_vertex:iT,color_fragment:aT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:lT,cube_uv_reflection_fragment:cT,defaultnormal_vertex:uT,displacementmap_pars_vertex:fT,displacementmap_vertex:hT,emissivemap_fragment:dT,emissivemap_pars_fragment:pT,colorspace_fragment:mT,colorspace_pars_fragment:gT,envmap_fragment:vT,envmap_common_pars_fragment:_T,envmap_pars_fragment:yT,envmap_pars_vertex:xT,envmap_physical_pars_fragment:UT,envmap_vertex:ST,fog_vertex:MT,fog_pars_vertex:ET,fog_fragment:TT,fog_pars_fragment:bT,gradientmap_pars_fragment:AT,lightmap_pars_fragment:RT,lights_lambert_fragment:CT,lights_lambert_pars_fragment:wT,lights_pars_begin:DT,lights_toon_fragment:LT,lights_toon_pars_fragment:NT,lights_phong_fragment:OT,lights_phong_pars_fragment:zT,lights_physical_fragment:PT,lights_physical_pars_fragment:FT,lights_fragment_begin:BT,lights_fragment_maps:IT,lights_fragment_end:HT,logdepthbuf_fragment:GT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:kT,logdepthbuf_vertex:XT,map_fragment:WT,map_pars_fragment:qT,map_particle_fragment:YT,map_particle_pars_fragment:jT,metalnessmap_fragment:ZT,metalnessmap_pars_fragment:KT,morphinstance_vertex:QT,morphcolor_vertex:JT,morphnormal_vertex:$T,morphtarget_pars_vertex:tb,morphtarget_vertex:eb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:ab,normal_pars_vertex:rb,normal_vertex:sb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:cb,clearcoat_pars_fragment:ub,iridescence_pars_fragment:fb,opaque_fragment:hb,packing:db,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:gb,dithering_pars_fragment:vb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:yb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:Sb,shadowmap_vertex:Mb,shadowmask_pars_fragment:Eb,skinbase_vertex:Tb,skinning_pars_vertex:bb,skinning_vertex:Ab,skinnormal_vertex:Rb,specularmap_fragment:Cb,specularmap_pars_fragment:wb,tonemapping_fragment:Db,tonemapping_pars_fragment:Ub,transmission_fragment:Lb,transmission_pars_fragment:Nb,uv_pars_fragment:Ob,uv_pars_vertex:zb,uv_vertex:Pb,worldpos_vertex:Fb,background_vert:Bb,background_frag:Ib,backgroundCube_vert:Hb,backgroundCube_frag:Gb,cube_vert:Vb,cube_frag:kb,depth_vert:Xb,depth_frag:Wb,distanceRGBA_vert:qb,distanceRGBA_frag:Yb,equirect_vert:jb,equirect_frag:Zb,linedashed_vert:Kb,linedashed_frag:Qb,meshbasic_vert:Jb,meshbasic_frag:$b,meshlambert_vert:t1,meshlambert_frag:e1,meshmatcap_vert:n1,meshmatcap_frag:i1,meshnormal_vert:a1,meshnormal_frag:r1,meshphong_vert:s1,meshphong_frag:o1,meshphysical_vert:l1,meshphysical_frag:c1,meshtoon_vert:u1,meshtoon_frag:f1,points_vert:h1,points_frag:d1,shadow_vert:p1,shadow_frag:m1,sprite_vert:g1,sprite_frag:v1},Ot={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ni={basic:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:On([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:On([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:On([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:On([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:On([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:On([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:On([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:On([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:On([Ot.common,Ot.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:On([Ot.lights,Ot.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:On([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Lc={r:0,b:0,g:0},_r=new fa,_1=new Ze;function y1(s,t,i,a,o,c,f){const h=new Oe(0);let p=c===!0?0:1,m,g,v=null,_=0,S=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const X=E(L);X===null?y(h,p):X&&X.isColor&&(y(X,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,w){const X=E(w);X&&(X.isCubeTexture||X.mapping===Qc)?(g===void 0&&(g=new Wn(new Qo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Ds(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),_r.copy(w.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=X,g.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(_r)),g.material.toneMapped=De.getTransfer(X.colorSpace)!==ke,(v!==X||_!==X.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=X,_=X.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new Wn(new Jo(2,2),new ja({name:"BackgroundMaterial",uniforms:Ds(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=De.getTransfer(X.colorSpace)!==ke,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(v!==X||_!==X.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=X,_=X.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function y(L,w){L.getRGB(Lc,V_(s)),a.buffers.color.setClear(Lc.r,Lc.g,Lc.b,w,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(h,p)},render:T,addToRenderList:M,dispose:P}}function x1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,f=!1;function h(R,H,nt,$,ct){let mt=!1;const O=v($,nt,H);c!==O&&(c=O,m(c.object)),mt=S(R,$,nt,ct),mt&&E(R,$,nt,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(mt||f)&&(f=!1,w(R,H,nt,$),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function v(R,H,nt){const $=nt.wireframe===!0;let ct=a[R.id];ct===void 0&&(ct={},a[R.id]=ct);let mt=ct[H.id];mt===void 0&&(mt={},ct[H.id]=mt);let O=mt[$];return O===void 0&&(O=_(p()),mt[$]=O),O}function _(R){const H=[],nt=[],$=[];for(let ct=0;ct<i;ct++)H[ct]=0,nt[ct]=0,$[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:$,object:R,attributes:{},index:null}}function S(R,H,nt,$){const ct=c.attributes,mt=H.attributes;let O=0;const J=nt.getAttributes();for(const Q in J)if(J[Q].location>=0){const Tt=ct[Q];let D=mt[Q];if(D===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),Tt===void 0||Tt.attribute!==D||D&&Tt.data!==D.data)return!0;O++}return c.attributesNum!==O||c.index!==$}function E(R,H,nt,$){const ct={},mt=H.attributes;let O=0;const J=nt.getAttributes();for(const Q in J)if(J[Q].location>=0){let Tt=mt[Q];Tt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const D={};D.attribute=Tt,Tt&&Tt.data&&(D.data=Tt.data),ct[Q]=D,O++}c.attributes=ct,c.attributesNum=O,c.index=$}function T(){const R=c.newAttributes;for(let H=0,nt=R.length;H<nt;H++)R[H]=0}function M(R){y(R,0)}function y(R,H){const nt=c.newAttributes,$=c.enabledAttributes,ct=c.attributeDivisors;nt[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),ct[R]!==H&&(s.vertexAttribDivisor(R,H),ct[R]=H)}function P(){const R=c.newAttributes,H=c.enabledAttributes;for(let nt=0,$=H.length;nt<$;nt++)H[nt]!==R[nt]&&(s.disableVertexAttribArray(nt),H[nt]=0)}function L(R,H,nt,$,ct,mt,O){O===!0?s.vertexAttribIPointer(R,H,nt,ct,mt):s.vertexAttribPointer(R,H,nt,$,ct,mt)}function w(R,H,nt,$){T();const ct=$.attributes,mt=nt.getAttributes(),O=H.defaultAttributeValues;for(const J in mt){const Q=mt[J];if(Q.location>=0){let St=ct[J];if(St===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const Tt=St.normalized,D=St.itemSize,W=t.get(St);if(W===void 0)continue;const at=W.buffer,G=W.type,lt=W.bytesPerElement,gt=G===s.INT||G===s.UNSIGNED_INT||St.gpuType===Yd;if(St.isInterleavedBufferAttribute){const yt=St.data,Ct=yt.stride,qt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<Q.locationSize;Ht++)y(Q.location+Ht,yt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ht=0;Ht<Q.locationSize;Ht++)M(Q.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,at);for(let Ht=0;Ht<Q.locationSize;Ht++)L(Q.location+Ht,D/Q.locationSize,G,Tt,Ct*lt,(qt+D/Q.locationSize*Ht)*lt,gt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<Q.locationSize;yt++)y(Q.location+yt,St.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<Q.locationSize;yt++)M(Q.location+yt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let yt=0;yt<Q.locationSize;yt++)L(Q.location+yt,D/Q.locationSize,G,Tt,D*lt,D/Q.locationSize*yt*lt,gt)}}else if(O!==void 0){const Tt=O[J];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(Q.location,Tt);break;case 3:s.vertexAttrib3fv(Q.location,Tt);break;case 4:s.vertexAttrib4fv(Q.location,Tt);break;default:s.vertexAttrib1fv(Q.location,Tt)}}}}P()}function X(){k();for(const R in a){const H=a[R];for(const nt in H){const $=H[nt];for(const ct in $)g($[ct].object),delete $[ct];delete H[nt]}delete a[R]}}function F(R){if(a[R.id]===void 0)return;const H=a[R.id];for(const nt in H){const $=H[nt];for(const ct in $)g($[ct].object),delete $[ct];delete H[nt]}delete a[R.id]}function z(R){for(const H in a){const nt=a[H];if(nt[R.id]===void 0)continue;const $=nt[R.id];for(const ct in $)g($[ct].object),delete $[ct];delete nt[R.id]}}function k(){U(),f=!0,c!==o&&(c=o,m(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:X,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:P}}function S1(s,t,i){let a;function o(m){a=m}function c(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),i.update(g,a,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,a,1)}function p(m,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(a,m,0,g,0,_,0,v);let E=0;for(let T=0;T<v;T++)E+=g[T]*_[T];i.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function M1(s,t,i,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Ai&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const k=z===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ua&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==oa&&!k)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:X,maxSamples:F}}function E1(s){const t=this;let i=null,a=0,o=!1,c=!1;const f=new xr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||a!==0||o;return o=_,a=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,T=v.clipIntersection,M=v.clipShadows,y=s.get(v);if(!o||E===null||E.length===0||c&&!M)c?g(null):m();else{const P=c?0:a,L=P*4;let w=y.clippingState||null;p.value=w,w=g(E,_,L,S);for(let X=0;X!==L;++X)w[X]=i[X];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,S,E){const T=v!==null?v.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const y=S+T*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=S;L!==T;++L,w+=4)f.copy(v[L]).applyMatrix4(P,h),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function T1(s){let t=new WeakMap;function i(f,h){return h===hd?f.mapping=Rs:h===dd&&(f.mapping=Cs),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===hd||h===dd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new uE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",o),i(m.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Es=4,L0=[.125,.215,.35,.446,.526,.582],Er=20,kh=new OE,N0=new Oe;let Xh=null,Wh=0,qh=0,Yh=!1;const Sr=(1+Math.sqrt(5))/2,Ss=1/Sr,O0=[new j(-Sr,Ss,0),new j(Sr,Ss,0),new j(-Ss,0,Sr),new j(Ss,0,Sr),new j(0,Sr,-Ss),new j(0,Sr,Ss),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],b1=new j;class z0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,o=100,c={}){const{size:f=256,position:h=b1}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xh,Wh,qh),this._renderer.xr.enabled=Yh,t.scissorTest=!1,Nc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Rs||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:qo,format:Ai,colorSpace:ws,depthBuffer:!1},o=P0(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(c)),this._blurMaterial=R1(c,t,i)}return o}_compileMaterial(t){const i=new Wn(this._lodPlanes[0],t);this._renderer.compile(i,kh)}_sceneToCubeUV(t,i,a,o,c){const p=new di(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(N0),v.toneMapping=Xa,v.autoClear=!1;const E=new Io({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new Wn(new Qo,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(N0),M=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):L===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const w=this._cubeSize;Nc(o,L*w,P>2?w:0,w,w),v.setRenderTarget(o),M&&v.render(T,p),v.render(t,p)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=y}_textureToCubeUV(t,i){const a=this._renderer,o=t.mapping===Rs||t.mapping===Cs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new Wn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Nc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,kh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=O0[(o-c-1)%O0.length];this._blur(t,c-1,c,f,h)}i.autoClear=a}_blur(t,i,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,i,a,o,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Wn(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Er-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Er;M>Er&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Er}`);const y=[];let P=0;for(let z=0;z<Er;++z){const k=z/T,U=Math.exp(-k*k/2);y.push(U),z===0?P+=U:z<M&&(P+=2*U)}for(let z=0;z<y.length;z++)y[z]=y[z]/P;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-a;const w=this._sizeLods[o],X=3*w*(o>L-Es?o-L+Es:0),F=4*(this._cubeSize-w);Nc(i,X,F,3*w,2*w),p.setRenderTarget(i),p.render(v,kh)}}function A1(s){const t=[],i=[],a=[];let o=s;const c=s-Es+1+L0.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);i.push(h);let p=1/h;f>s-Es?p=L0[f-s+Es-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,T=3,M=2,y=1,P=new Float32Array(T*E*S),L=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,k=F>2?0:-1,U=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];P.set(U,T*E*F),L.set(_,M*E*F);const R=[F,F,F,F,F,F];w.set(R,y*E*F)}const X=new pi;X.setAttribute("position",new zi(P,T)),X.setAttribute("uv",new zi(L,M)),X.setAttribute("faceIndex",new zi(w,y)),t.push(X),o>Es&&o--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function P0(s,t,i){const a=new Cr(s,t,i);return a.texture.mapping=Qc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Nc(s,t,i,a,o){s.viewport.set(t,i,a,o),s.scissor.set(t,i,a,o)}function R1(s,t,i){const a=new Float32Array(Er),o=new j(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:rp(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function F0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function B0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function rp(){return`

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
	`}function C1(s){let t=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===hd||p===dd,g=p===Rs||p===Cs;if(m||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new z0(s)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&o(S)?(i===null&&(i=new z0(s)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function w1(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return t[a]=o,o}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const o=i(a);return o===null&&kc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function D1(s,t,i,a){const o={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete o[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function m(v){const _=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const P=S.array;T=S.version;for(let L=0,w=P.length;L<w;L+=3){const X=P[L+0],F=P[L+1],z=P[L+2];_.push(X,F,F,z,z,X)}}else if(E!==void 0){const P=E.array;T=E.version;for(let L=0,w=P.length/3-1;L<w;L+=3){const X=L+0,F=L+1,z=L+2;_.push(X,F,F,z,z,X)}}else return;const M=new(z_(_)?G_:H_)(_,1);M.version=T;const y=c.get(v);y&&t.remove(y),c.set(v,M)}function g(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function U1(s,t,i){let a;function o(_){a=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function p(_,S){s.drawElements(a,S,c,_*f),i.update(S,a,1)}function m(_,S,E){E!==0&&(s.drawElementsInstanced(a,S,c,_*f,E),i.update(S,a,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,_,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,a,1)}function v(_,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)m(_[y]/f,S[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,_,0,T,0,E);let y=0;for(let P=0;P<E;P++)y+=S[P]*T[P];i.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function L1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:a}}function N1(s,t,i){const a=new WeakMap,o=new rn;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let U=function(){z.dispose(),a.delete(h),h.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let w=h.attributes.position.count*L,X=1;w>t.maxTextureSize&&(X=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*X*4*v),z=new P_(F,w,X,v);z.type=oa,z.needsUpdate=!0;const k=L*4;for(let R=0;R<v;R++){const H=M[R],nt=y[R],$=P[R],ct=w*X*4*R;for(let mt=0;mt<H.count;mt++){const O=mt*k;S===!0&&(o.fromBufferAttribute(H,mt),F[ct+O+0]=o.x,F[ct+O+1]=o.y,F[ct+O+2]=o.z,F[ct+O+3]=0),E===!0&&(o.fromBufferAttribute(nt,mt),F[ct+O+4]=o.x,F[ct+O+5]=o.y,F[ct+O+6]=o.z,F[ct+O+7]=0),T===!0&&(o.fromBufferAttribute($,mt),F[ct+O+8]=o.x,F[ct+O+9]=o.y,F[ct+O+10]=o.z,F[ct+O+11]=$.itemSize===4?o.w:1)}}_={count:v,texture:z,size:new re(w,X)},a.set(h,_),h.addEventListener("dispose",U)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let T=0;T<m.length;T++)S+=m[T];const E=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function O1(s,t,i,a){let o=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==m&&(t.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function f(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const $_=new Yn,I0=new j_(1,1),ty=new P_,ey=new YM,ny=new X_,H0=[],G0=[],V0=new Float32Array(16),k0=new Float32Array(9),X0=new Float32Array(4);function Os(s,t,i){const a=s[0];if(a<=0||a>0)return s;const o=t*i;let c=H0[o];if(c===void 0&&(c=new Float32Array(o),H0[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function mn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function gn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function $c(s,t){let i=G0[t];i===void 0&&(i=new Int32Array(t),G0[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function z1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function P1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2fv(this.addr,t),gn(i,t)}}function F1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;s.uniform3fv(this.addr,t),gn(i,t)}}function B1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4fv(this.addr,t),gn(i,t)}}function I1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(mn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,a))return;X0.set(a),s.uniformMatrix2fv(this.addr,!1,X0),gn(i,a)}}function H1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(mn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,a))return;k0.set(a),s.uniformMatrix3fv(this.addr,!1,k0),gn(i,a)}}function G1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(mn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,a))return;V0.set(a),s.uniformMatrix4fv(this.addr,!1,V0),gn(i,a)}}function V1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function k1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2iv(this.addr,t),gn(i,t)}}function X1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3iv(this.addr,t),gn(i,t)}}function W1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4iv(this.addr,t),gn(i,t)}}function q1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function Y1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2uiv(this.addr,t),gn(i,t)}}function j1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3uiv(this.addr,t),gn(i,t)}}function Z1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4uiv(this.addr,t),gn(i,t)}}function K1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(I0.compareFunction=O_,c=I0):c=$_,i.setTexture2D(t||c,o)}function Q1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTexture3D(t||ey,o)}function J1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTextureCube(t||ny,o)}function $1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTexture2DArray(t||ty,o)}function tA(s){switch(s){case 5126:return z1;case 35664:return P1;case 35665:return F1;case 35666:return B1;case 35674:return I1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return V1;case 35667:case 35671:return k1;case 35668:case 35672:return X1;case 35669:case 35673:return W1;case 5125:return q1;case 36294:return Y1;case 36295:return j1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return J1;case 36289:case 36303:case 36311:case 36292:return $1}}function eA(s,t){s.uniform1fv(this.addr,t)}function nA(s,t){const i=Os(t,this.size,2);s.uniform2fv(this.addr,i)}function iA(s,t){const i=Os(t,this.size,3);s.uniform3fv(this.addr,i)}function aA(s,t){const i=Os(t,this.size,4);s.uniform4fv(this.addr,i)}function rA(s,t){const i=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function sA(s,t){const i=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function oA(s,t){const i=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function lA(s,t){s.uniform1iv(this.addr,t)}function cA(s,t){s.uniform2iv(this.addr,t)}function uA(s,t){s.uniform3iv(this.addr,t)}function fA(s,t){s.uniform4iv(this.addr,t)}function hA(s,t){s.uniform1uiv(this.addr,t)}function dA(s,t){s.uniform2uiv(this.addr,t)}function pA(s,t){s.uniform3uiv(this.addr,t)}function mA(s,t){s.uniform4uiv(this.addr,t)}function gA(s,t,i){const a=this.cache,o=t.length,c=$c(i,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==o;++f)i.setTexture2D(t[f]||$_,c[f])}function vA(s,t,i){const a=this.cache,o=t.length,c=$c(i,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==o;++f)i.setTexture3D(t[f]||ey,c[f])}function _A(s,t,i){const a=this.cache,o=t.length,c=$c(i,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==o;++f)i.setTextureCube(t[f]||ny,c[f])}function yA(s,t,i){const a=this.cache,o=t.length,c=$c(i,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let f=0;f!==o;++f)i.setTexture2DArray(t[f]||ty,c[f])}function xA(s){switch(s){case 5126:return eA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return yA}}class SA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=tA(i.type)}}class MA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=xA(i.type)}}class EA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,i[h.id],a)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function W0(s,t){s.seq.push(t),s.map[t.id]=t}function TA(s,t,i){const a=s.name,o=a.length;for(jh.lastIndex=0;;){const c=jh.exec(a),f=jh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===o){W0(i,m===void 0?new SA(h,s,t):new MA(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new EA(h),W0(i,v)),i=v}}}class Xc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(i,o),f=t.getUniformLocation(i,c.name);TA(c,f,this)}}setValue(t,i,a,o){const c=this.map[i];c!==void 0&&c.setValue(t,a,o)}setOptional(t,i,a){const o=i[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,i,a,o){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,i){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in i&&a.push(f)}return a}}function q0(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const bA=37297;let AA=0;function RA(s,t){const i=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const Y0=new fe;function CA(s){De._getMatrix(Y0,De.workingColorSpace,s);const t=`mat3( ${Y0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case qc:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function j0(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+o+`

`+RA(s.getShaderSource(t),f)}else return o}function wA(s,t){const i=CA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function DA(s,t){let i;switch(t){case _M:i="Linear";break;case yM:i="Reinhard";break;case xM:i="Cineon";break;case SM:i="ACESFilmic";break;case EM:i="AgX";break;case TM:i="Neutral";break;case MM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new j;function UA(){De.getLuminanceCoefficients(Oc);const s=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function NA(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function OA(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Fo(s){return s!==""}function Z0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(s){return s.replace(zA,FA)}const PA=new Map;function FA(s,t){let i=de[t];if(i===void 0){const a=PA.get(t);if(a!==void 0)i=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return kd(i)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(s){return s.replace(BA,IA)}function IA(s,t,i,a){let o="";for(let c=parseInt(t);c<parseInt(i);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function J0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function HA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===S_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===QS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function GA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Cs:t="ENVMAP_TYPE_CUBE";break;case Qc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:t="ENVMAP_MODE_REFRACTION";break}return t}function kA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case M_:t="ENVMAP_BLENDING_MULTIPLY";break;case gM:t="ENVMAP_BLENDING_MIX";break;case vM:t="ENVMAP_BLENDING_ADD";break}return t}function XA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function WA(s,t,i,a){const o=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=HA(i),m=GA(i),g=VA(i),v=kA(i),_=XA(i),S=LA(i),E=NA(c),T=o.createProgram();let M,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),y.length>0&&(y+=`
`)):(M=[J0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),y=[J0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?de.tonemapping_pars_fragment:"",i.toneMapping!==Xa?DA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,wA("linearToOutputTexel",i.outputColorSpace),UA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),f=kd(f),f=Z0(f,i),f=K0(f,i),h=kd(h),h=Z0(h,i),h=K0(h,i),f=Q0(f),h=Q0(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=P+M+f,w=P+y+h,X=q0(o,o.VERTEX_SHADER,L),F=q0(o,o.FRAGMENT_SHADER,w);o.attachShader(T,X),o.attachShader(T,F),i.index0AttributeName!==void 0?o.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(H){if(s.debug.checkShaderErrors){const nt=o.getProgramInfoLog(T).trim(),$=o.getShaderInfoLog(X).trim(),ct=o.getShaderInfoLog(F).trim();let mt=!0,O=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(mt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,X,F);else{const J=j0(o,X,"vertex"),Q=j0(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+nt+`
`+J+`
`+Q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):($===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:mt,programLog:nt,vertexShader:{log:$,prefix:M},fragmentShader:{log:ct,prefix:y}})}o.deleteShader(X),o.deleteShader(F),k=new Xc(o,T),U=OA(o,T)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,bA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=AA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=X,this.fragmentShader=F,this}let qA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new jA(t),i.set(t,a)),a}}class jA{constructor(t){this.id=qA++,this.code=t,this.usedTimes=0}}function ZA(s,t,i,a,o,c,f){const h=new B_,p=new YA,m=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,R,H,nt,$){const ct=nt.fog,mt=$.geometry,O=U.isMeshStandardMaterial?nt.environment:null,J=(U.isMeshStandardMaterial?i:t).get(U.envMap||O),Q=J&&J.mapping===Qc?J.image.height:null,St=E[U.type];U.precision!==null&&(S=o.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const Tt=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,D=Tt!==void 0?Tt.length:0;let W=0;mt.morphAttributes.position!==void 0&&(W=1),mt.morphAttributes.normal!==void 0&&(W=2),mt.morphAttributes.color!==void 0&&(W=3);let at,G,lt,gt;if(St){const Ae=Ni[St];at=Ae.vertexShader,G=Ae.fragmentShader}else at=U.vertexShader,G=U.fragmentShader,p.update(U),lt=p.getVertexShaderID(U),gt=p.getFragmentShaderID(U);const yt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),qt=$.isInstancedMesh===!0,Ht=$.isBatchedMesh===!0,ze=!!U.map,Ne=!!U.matcap,he=!!J,I=!!U.aoMap,We=!!U.lightMap,Qt=!!U.bumpMap,pe=!!U.normalMap,Gt=!!U.displacementMap,be=!!U.emissiveMap,Bt=!!U.metalnessMap,N=!!U.roughnessMap,A=U.anisotropy>0,it=U.clearcoat>0,ht=U.dispersion>0,Mt=U.iridescence>0,vt=U.sheen>0,Yt=U.transmission>0,Dt=A&&!!U.anisotropyMap,It=it&&!!U.clearcoatMap,_e=it&&!!U.clearcoatNormalMap,At=it&&!!U.clearcoatRoughnessMap,Vt=Mt&&!!U.iridescenceMap,$t=Mt&&!!U.iridescenceThicknessMap,jt=vt&&!!U.sheenColorMap,Pt=vt&&!!U.sheenRoughnessMap,ne=!!U.specularMap,le=!!U.specularColorMap,Be=!!U.specularIntensityMap,Y=Yt&&!!U.transmissionMap,Ut=Yt&&!!U.thicknessMap,ft=!!U.gradientMap,xt=!!U.alphaMap,wt=U.alphaTest>0,Lt=!!U.alphaHash,ie=!!U.extensions;let Ke=Xa;U.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const fn={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:at,fragmentShader:G,defines:U.defines,customVertexShaderID:lt,customFragmentShaderID:gt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Ht,batchingColor:Ht&&$._colorsTexture!==null,instancing:qt,instancingColor:qt&&$.instanceColor!==null,instancingMorph:qt&&$.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:ws,alphaToCoverage:!!U.alphaToCoverage,map:ze,matcap:Ne,envMap:he,envMapMode:he&&J.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:We,bumpMap:Qt,normalMap:pe,displacementMap:_&&Gt,emissiveMap:be,normalMapObjectSpace:pe&&U.normalMapType===wM,normalMapTangentSpace:pe&&U.normalMapType===CM,metalnessMap:Bt,roughnessMap:N,anisotropy:A,anisotropyMap:Dt,clearcoat:it,clearcoatMap:It,clearcoatNormalMap:_e,clearcoatRoughnessMap:At,dispersion:ht,iridescence:Mt,iridescenceMap:Vt,iridescenceThicknessMap:$t,sheen:vt,sheenColorMap:jt,sheenRoughnessMap:Pt,specularMap:ne,specularColorMap:le,specularIntensityMap:Be,transmission:Yt,transmissionMap:Y,thicknessMap:Ut,gradientMap:ft,opaque:U.transparent===!1&&U.blending===Ts&&U.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:Lt,combine:U.combine,mapUv:ze&&T(U.map.channel),aoMapUv:I&&T(U.aoMap.channel),lightMapUv:We&&T(U.lightMap.channel),bumpMapUv:Qt&&T(U.bumpMap.channel),normalMapUv:pe&&T(U.normalMap.channel),displacementMapUv:Gt&&T(U.displacementMap.channel),emissiveMapUv:be&&T(U.emissiveMap.channel),metalnessMapUv:Bt&&T(U.metalnessMap.channel),roughnessMapUv:N&&T(U.roughnessMap.channel),anisotropyMapUv:Dt&&T(U.anisotropyMap.channel),clearcoatMapUv:It&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(U.sheenRoughnessMap.channel),specularMapUv:ne&&T(U.specularMap.channel),specularColorMapUv:le&&T(U.specularColorMap.channel),specularIntensityMapUv:Be&&T(U.specularIntensityMap.channel),transmissionMapUv:Y&&T(U.transmissionMap.channel),thicknessMapUv:Ut&&T(U.thicknessMap.channel),alphaMapUv:xt&&T(U.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(pe||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!mt.attributes.uv&&(ze||xt),fog:!!ct,useFog:U.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:$.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:ze&&U.map.isVideoTexture===!0&&De.getTransfer(U.map.colorSpace)===ke,decodeVideoTextureEmissive:be&&U.emissiveMap.isVideoTexture===!0&&De.getTransfer(U.emissiveMap.colorSpace)===ke,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Ti,flipSided:U.side===qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ie&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&U.extensions.multiDraw===!0||Ht)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return fn.vertexUv1s=m.has(1),fn.vertexUv2s=m.has(2),fn.vertexUv3s=m.has(3),m.clear(),fn}function y(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)R.push(H),R.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(P(R,U),L(R,U),R.push(s.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function P(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function L(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const R=E[U.type];let H;if(R){const nt=Ni[R];H=sE.clone(nt.uniforms)}else H=U.uniforms;return H}function X(U,R){let H;for(let nt=0,$=g.length;nt<$;nt++){const ct=g[nt];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new WA(s,R,U,c),g.push(H)),H}function F(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function z(U){p.remove(U)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:X,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:k}}function KA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function o(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:o,dispose:c}}function QA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function t_(){const s=[];let t=0;const i=[],a=[],o=[];function c(){t=0,i.length=0,a.length=0,o.length=0}function f(v,_,S,E,T,M){let y=s[t];return y===void 0?(y={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:M},s[t]=y):(y.id=v.id,y.object=v,y.geometry=_,y.material=S,y.groupOrder=E,y.renderOrder=v.renderOrder,y.z=T,y.group=M),t++,y}function h(v,_,S,E,T,M){const y=f(v,_,S,E,T,M);S.transmission>0?a.push(y):S.transparent===!0?o.push(y):i.push(y)}function p(v,_,S,E,T,M){const y=f(v,_,S,E,T,M);S.transmission>0?a.unshift(y):S.transparent===!0?o.unshift(y):i.unshift(y)}function m(v,_){i.length>1&&i.sort(v||QA),a.length>1&&a.sort(_||$0),o.length>1&&o.sort(_||$0)}function g(){for(let v=t,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:g,sort:m}}function JA(){let s=new WeakMap;function t(a,o){const c=s.get(a);let f;return c===void 0?(f=new t_,s.set(a,[f])):o>=c.length?(f=new t_,c.push(f)):f=c[o],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function $A(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new Oe};break;case"SpotLight":i={position:new j,direction:new j,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=i,i}}}function tR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let eR=0;function nR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function iR(s){const t=new $A,i=tR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new j);const o=new j,c=new Ze,f=new Ze;function h(m){let g=0,v=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let S=0,E=0,T=0,M=0,y=0,P=0,L=0,w=0,X=0,F=0,z=0;m.sort(nR);for(let U=0,R=m.length;U<R;U++){const H=m[U],nt=H.color,$=H.intensity,ct=H.distance,mt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=nt.r*$,v+=nt.g*$,_+=nt.b*$;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],$);z++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const J=H.shadow,Q=i.get(H);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,a.directionalShadow[S]=Q,a.directionalShadowMap[S]=mt,a.directionalShadowMatrix[S]=H.shadow.matrix,P++}a.directional[S]=O,S++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(nt).multiplyScalar($),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[T]=O;const J=H.shadow;if(H.map&&(a.spotLightMap[X]=H.map,X++,J.updateMatrices(H),H.castShadow&&F++),a.spotLightMatrix[T]=J.matrix,H.castShadow){const Q=i.get(H);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,a.spotShadow[T]=Q,a.spotShadowMap[T]=mt,w++}T++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(nt).multiplyScalar($),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=O,M++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const J=H.shadow,Q=i.get(H);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,a.pointShadow[E]=Q,a.pointShadowMap[E]=mt,a.pointShadowMatrix[E]=H.shadow.matrix,L++}a.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar($),O.groundColor.copy(H.groundColor).multiplyScalar($),a.hemi[y]=O,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const k=a.hash;(k.directionalLength!==S||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==M||k.hemiLength!==y||k.numDirectionalShadows!==P||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==X||k.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+X-F,a.spotLightMap.length=X,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=z,k.directionalLength=S,k.pointLength=E,k.spotLength=T,k.rectAreaLength=M,k.hemiLength=y,k.numDirectionalShadows=P,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=X,k.numLightProbes=z,a.version=eR++)}function p(m,g){let v=0,_=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const L=m[y];if(L.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(L.isSpotLight){const w=a.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function e_(s){const t=new iR(s),i=[],a=[];function o(g){m.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function aR(s){let t=new WeakMap;function i(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new e_(s),t.set(o,[h])):c>=f.length?(h=new e_(s),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:i,dispose:a}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
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
}`;function oR(s,t,i){let a=new W_;const o=new re,c=new re,f=new rn,h=new UE({depthPacking:RM}),p=new LE,m={},g=i.maxTextureSize,v={[Ya]:qn,[qn]:Ya,[Ti]:Ti},_=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:rR,fragmentShader:sR}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new pi;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Wn(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S_;let y=this.type;this.render=function(F,z,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const U=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(ka),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const $=y!==ra&&this.type===ra,ct=y===ra&&this.type!==ra;for(let mt=0,O=F.length;mt<O;mt++){const J=F[mt],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const St=Q.getFrameExtents();if(o.multiply(St),c.copy(Q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/St.x),o.x=c.x*St.x,Q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/St.y),o.y=c.y*St.y,Q.mapSize.y=c.y)),Q.map===null||$===!0||ct===!0){const D=this.type!==ra?{minFilter:Ri,magFilter:Ri}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Cr(o.x,o.y,D),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const Tt=Q.getViewportCount();for(let D=0;D<Tt;D++){const W=Q.getViewport(D);f.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),nt.viewport(f),Q.updateMatrices(J,D),a=Q.getFrustum(),w(z,k,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===ra&&P(Q,k),Q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(U,R,H)};function P(F,z){const k=t.update(T);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Cr(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(z,null,k,_,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(z,null,k,S,T,null)}function L(F,z,k,U){let R=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=k.isPointLight===!0?p:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const nt=R.uuid,$=z.uuid;let ct=m[nt];ct===void 0&&(ct={},m[nt]=ct);let mt=ct[$];mt===void 0&&(mt=R.clone(),ct[$]=mt,z.addEventListener("dispose",X)),R=mt}if(R.visible=z.visible,R.wireframe=z.wireframe,U===ra?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:v[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const nt=s.properties.get(R);nt.light=k}return R}function w(F,z,k,U,R){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ra)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const $=t.update(F),ct=F.material;if(Array.isArray(ct)){const mt=$.groups;for(let O=0,J=mt.length;O<J;O++){const Q=mt[O],St=ct[Q.materialIndex];if(St&&St.visible){const Tt=L(F,St,U,R);F.onBeforeShadow(s,F,z,k,$,Tt,Q),s.renderBufferDirect(k,null,$,Tt,F,Q),F.onAfterShadow(s,F,z,k,$,Tt,Q)}}}else if(ct.visible){const mt=L(F,ct,U,R);F.onBeforeShadow(s,F,z,k,$,mt,null),s.renderBufferDirect(k,null,$,mt,F,null),F.onAfterShadow(s,F,z,k,$,mt,null)}}const nt=F.children;for(let $=0,ct=nt.length;$<ct;$++)w(nt[$],z,k,U,R)}function X(F){F.target.removeEventListener("dispose",X);for(const k in m){const U=m[k],R=F.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const lR={[rd]:sd,[od]:ud,[ld]:fd,[As]:cd,[sd]:rd,[ud]:od,[fd]:ld,[cd]:As};function cR(s,t){function i(){let Y=!1;const Ut=new rn;let ft=null;const xt=new rn(0,0,0,0);return{setMask:function(wt){ft!==wt&&!Y&&(s.colorMask(wt,wt,wt,wt),ft=wt)},setLocked:function(wt){Y=wt},setClear:function(wt,Lt,ie,Ke,fn){fn===!0&&(wt*=Ke,Lt*=Ke,ie*=Ke),Ut.set(wt,Lt,ie,Ke),xt.equals(Ut)===!1&&(s.clearColor(wt,Lt,ie,Ke),xt.copy(Ut))},reset:function(){Y=!1,ft=null,xt.set(-1,0,0,0)}}}function a(){let Y=!1,Ut=!1,ft=null,xt=null,wt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const Ke=wt;wt=null,this.setClear(Ke)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?yt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(Lt){ft!==Lt&&!Y&&(s.depthMask(Lt),ft=Lt)},setFunc:function(Lt){if(Ut&&(Lt=lR[Lt]),xt!==Lt){switch(Lt){case rd:s.depthFunc(s.NEVER);break;case sd:s.depthFunc(s.ALWAYS);break;case od:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case ld:s.depthFunc(s.EQUAL);break;case cd:s.depthFunc(s.GEQUAL);break;case ud:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Lt}},setLocked:function(Lt){Y=Lt},setClear:function(Lt){wt!==Lt&&(Ut&&(Lt=1-Lt),s.clearDepth(Lt),wt=Lt)},reset:function(){Y=!1,ft=null,xt=null,wt=null,Ut=!1}}}function o(){let Y=!1,Ut=null,ft=null,xt=null,wt=null,Lt=null,ie=null,Ke=null,fn=null;return{setTest:function(Ae){Y||(Ae?yt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!Y&&(s.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,xn,mi){(ft!==Ae||xt!==xn||wt!==mi)&&(s.stencilFunc(Ae,xn,mi),ft=Ae,xt=xn,wt=mi)},setOp:function(Ae,xn,mi){(Lt!==Ae||ie!==xn||Ke!==mi)&&(s.stencilOp(Ae,xn,mi),Lt=Ae,ie=xn,Ke=mi)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){fn!==Ae&&(s.clearStencil(Ae),fn=Ae)},reset:function(){Y=!1,Ut=null,ft=null,xt=null,wt=null,Lt=null,ie=null,Ke=null,fn=null}}}const c=new i,f=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,S=[],E=null,T=!1,M=null,y=null,P=null,L=null,w=null,X=null,F=null,z=new Oe(0,0,0),k=0,U=!1,R=null,H=null,nt=null,$=null,ct=null;const mt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,J=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=J>=2);let St=null,Tt={};const D=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),at=new rn().fromArray(D),G=new rn().fromArray(W);function lt(Y,Ut,ft,xt){const wt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(Y,Lt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ft;ie++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(Ut+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Lt}const gt={};gt[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),yt(s.DEPTH_TEST),f.setFunc(As),Qt(!1),pe(n0),yt(s.CULL_FACE),I(ka);function yt(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Ct(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function qt(Y,Ut){return v[Y]!==Ut?(s.bindFramebuffer(Y,Ut),v[Y]=Ut,Y===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ut),Y===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht(Y,Ut){let ft=S,xt=!1;if(Y){ft=_.get(Ut),ft===void 0&&(ft=[],_.set(Ut,ft));const wt=Y.textures;if(ft.length!==wt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,ie=wt.length;Lt<ie;Lt++)ft[Lt]=s.COLOR_ATTACHMENT0+Lt;ft.length=wt.length,xt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ft)}function ze(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const Ne={[Mr]:s.FUNC_ADD,[$S]:s.FUNC_SUBTRACT,[tM]:s.FUNC_REVERSE_SUBTRACT};Ne[eM]=s.MIN,Ne[nM]=s.MAX;const he={[iM]:s.ZERO,[aM]:s.ONE,[rM]:s.SRC_COLOR,[id]:s.SRC_ALPHA,[fM]:s.SRC_ALPHA_SATURATE,[cM]:s.DST_COLOR,[oM]:s.DST_ALPHA,[sM]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[uM]:s.ONE_MINUS_DST_COLOR,[lM]:s.ONE_MINUS_DST_ALPHA,[hM]:s.CONSTANT_COLOR,[dM]:s.ONE_MINUS_CONSTANT_COLOR,[pM]:s.CONSTANT_ALPHA,[mM]:s.ONE_MINUS_CONSTANT_ALPHA};function I(Y,Ut,ft,xt,wt,Lt,ie,Ke,fn,Ae){if(Y===ka){T===!0&&(Ct(s.BLEND),T=!1);return}if(T===!1&&(yt(s.BLEND),T=!0),Y!==JS){if(Y!==M||Ae!==U){if((y!==Mr||w!==Mr)&&(s.blendEquation(s.FUNC_ADD),y=Mr,w=Mr),Ae)switch(Y){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i0:s.blendFunc(s.ONE,s.ONE);break;case a0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case r0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case i0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case a0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case r0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}P=null,L=null,X=null,F=null,z.set(0,0,0),k=0,M=Y,U=Ae}return}wt=wt||Ut,Lt=Lt||ft,ie=ie||xt,(Ut!==y||wt!==w)&&(s.blendEquationSeparate(Ne[Ut],Ne[wt]),y=Ut,w=wt),(ft!==P||xt!==L||Lt!==X||ie!==F)&&(s.blendFuncSeparate(he[ft],he[xt],he[Lt],he[ie]),P=ft,L=xt,X=Lt,F=ie),(Ke.equals(z)===!1||fn!==k)&&(s.blendColor(Ke.r,Ke.g,Ke.b,fn),z.copy(Ke),k=fn),M=Y,U=!1}function We(Y,Ut){Y.side===Ti?Ct(s.CULL_FACE):yt(s.CULL_FACE);let ft=Y.side===qn;Ut&&(ft=!ft),Qt(ft),Y.blending===Ts&&Y.transparent===!1?I(ka):I(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const xt=Y.stencilWrite;h.setTest(xt),xt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),be(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(Y){R!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),R=Y)}function pe(Y){Y!==ZS?(yt(s.CULL_FACE),Y!==H&&(Y===n0?s.cullFace(s.BACK):Y===KS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),H=Y}function Gt(Y){Y!==nt&&(O&&s.lineWidth(Y),nt=Y)}function be(Y,Ut,ft){Y?(yt(s.POLYGON_OFFSET_FILL),($!==Ut||ct!==ft)&&(s.polygonOffset(Ut,ft),$=Ut,ct=ft)):Ct(s.POLYGON_OFFSET_FILL)}function Bt(Y){Y?yt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=s.TEXTURE0+mt-1),St!==Y&&(s.activeTexture(Y),St=Y)}function A(Y,Ut,ft){ft===void 0&&(St===null?ft=s.TEXTURE0+mt-1:ft=St);let xt=Tt[ft];xt===void 0&&(xt={type:void 0,texture:void 0},Tt[ft]=xt),(xt.type!==Y||xt.texture!==Ut)&&(St!==ft&&(s.activeTexture(ft),St=ft),s.bindTexture(Y,Ut||gt[Y]),xt.type=Y,xt.texture=Ut)}function it(){const Y=Tt[St];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ht(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $t(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(Y){at.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),at.copy(Y))}function Pt(Y){G.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function ne(Y,Ut){let ft=m.get(Ut);ft===void 0&&(ft=new WeakMap,m.set(Ut,ft));let xt=ft.get(Y);xt===void 0&&(xt=s.getUniformBlockIndex(Ut,Y.name),ft.set(Y,xt))}function le(Y,Ut){const xt=m.get(Ut).get(Y);p.get(Ut)!==xt&&(s.uniformBlockBinding(Ut,xt,Y.__bindingPointIndex),p.set(Ut,xt))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},St=null,Tt={},v={},_=new WeakMap,S=[],E=null,T=!1,M=null,y=null,P=null,L=null,w=null,X=null,F=null,z=new Oe(0,0,0),k=0,U=!1,R=null,H=null,nt=null,$=null,ct=null,at.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:yt,disable:Ct,bindFramebuffer:qt,drawBuffers:Ht,useProgram:ze,setBlending:I,setMaterial:We,setFlipSided:Qt,setCullFace:pe,setLineWidth:Gt,setPolygonOffset:be,setScissorTest:Bt,activeTexture:N,bindTexture:A,unbindTexture:it,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:Vt,texImage3D:$t,updateUBOMapping:ne,uniformBlockBinding:le,texStorage2D:_e,texStorage3D:At,texSubImage2D:vt,texSubImage3D:Yt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:It,scissor:jt,viewport:Pt,reset:Be}}function uR(s,t,i,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new re,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return S?new OffscreenCanvas(N,A):jc("canvas")}function T(N,A,it){let ht=1;const Mt=Bt(N);if((Mt.width>it||Mt.height>it)&&(ht=it/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const vt=Math.floor(ht*Mt.width),Yt=Math.floor(ht*Mt.height);v===void 0&&(v=E(vt,Yt));const Dt=A?E(vt,Yt):v;return Dt.width=vt,Dt.height=Yt,Dt.getContext("2d").drawImage(N,0,0,vt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+vt+"x"+Yt+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,A,it,ht,Mt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let vt=A;if(A===s.RED&&(it===s.FLOAT&&(vt=s.R32F),it===s.HALF_FLOAT&&(vt=s.R16F),it===s.UNSIGNED_BYTE&&(vt=s.R8)),A===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(vt=s.R8UI),it===s.UNSIGNED_SHORT&&(vt=s.R16UI),it===s.UNSIGNED_INT&&(vt=s.R32UI),it===s.BYTE&&(vt=s.R8I),it===s.SHORT&&(vt=s.R16I),it===s.INT&&(vt=s.R32I)),A===s.RG&&(it===s.FLOAT&&(vt=s.RG32F),it===s.HALF_FLOAT&&(vt=s.RG16F),it===s.UNSIGNED_BYTE&&(vt=s.RG8)),A===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(vt=s.RG8UI),it===s.UNSIGNED_SHORT&&(vt=s.RG16UI),it===s.UNSIGNED_INT&&(vt=s.RG32UI),it===s.BYTE&&(vt=s.RG8I),it===s.SHORT&&(vt=s.RG16I),it===s.INT&&(vt=s.RG32I)),A===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(vt=s.RGB8UI),it===s.UNSIGNED_SHORT&&(vt=s.RGB16UI),it===s.UNSIGNED_INT&&(vt=s.RGB32UI),it===s.BYTE&&(vt=s.RGB8I),it===s.SHORT&&(vt=s.RGB16I),it===s.INT&&(vt=s.RGB32I)),A===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(vt=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(vt=s.RGBA16UI),it===s.UNSIGNED_INT&&(vt=s.RGBA32UI),it===s.BYTE&&(vt=s.RGBA8I),it===s.SHORT&&(vt=s.RGBA16I),it===s.INT&&(vt=s.RGBA32I)),A===s.RGB&&it===s.UNSIGNED_INT_5_9_9_9_REV&&(vt=s.RGB9_E5),A===s.RGBA){const Yt=Mt?qc:De.getTransfer(ht);it===s.FLOAT&&(vt=s.RGBA32F),it===s.HALF_FLOAT&&(vt=s.RGBA16F),it===s.UNSIGNED_BYTE&&(vt=Yt===ke?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(vt=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(vt=s.RGB5_A1)}return(vt===s.R16F||vt===s.R32F||vt===s.RG16F||vt===s.RG32F||vt===s.RGBA16F||vt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function w(N,A){let it;return N?A===null||A===Rr||A===ko?it=s.DEPTH24_STENCIL8:A===oa?it=s.DEPTH32F_STENCIL8:A===Vo&&(it=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===ko?it=s.DEPTH_COMPONENT24:A===oa?it=s.DEPTH_COMPONENT32F:A===Vo&&(it=s.DEPTH_COMPONENT16),it}function X(N,A){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ri&&N.minFilter!==Oi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function F(N){const A=N.target;A.removeEventListener("dispose",F),k(A),A.isVideoTexture&&g.delete(A)}function z(N){const A=N.target;A.removeEventListener("dispose",z),R(A)}function k(N){const A=a.get(N);if(A.__webglInit===void 0)return;const it=N.source,ht=_.get(it);if(ht){const Mt=ht[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(N),Object.keys(ht).length===0&&_.delete(it)}a.remove(N)}function U(N){const A=a.get(N);s.deleteTexture(A.__webglTexture);const it=N.source,ht=_.get(it);delete ht[A.__cacheKey],f.memory.textures--}function R(N){const A=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(A.__webglFramebuffer[ht]))for(let Mt=0;Mt<A.__webglFramebuffer[ht].length;Mt++)s.deleteFramebuffer(A.__webglFramebuffer[ht][Mt]);else s.deleteFramebuffer(A.__webglFramebuffer[ht]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ht])}else{if(Array.isArray(A.__webglFramebuffer))for(let ht=0;ht<A.__webglFramebuffer.length;ht++)s.deleteFramebuffer(A.__webglFramebuffer[ht]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ht=0;ht<A.__webglColorRenderbuffer.length;ht++)A.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ht]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const it=N.textures;for(let ht=0,Mt=it.length;ht<Mt;ht++){const vt=a.get(it[ht]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),f.memory.textures--),a.remove(it[ht])}a.remove(N)}let H=0;function nt(){H=0}function $(){const N=H;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ct(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function mt(N,A){const it=a.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(it,N,A);return}}i.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+A)}function O(N,A){const it=a.get(N);if(N.version>0&&it.__version!==N.version){G(it,N,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+A)}function J(N,A){const it=a.get(N);if(N.version>0&&it.__version!==N.version){G(it,N,A);return}i.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+A)}function Q(N,A){const it=a.get(N);if(N.version>0&&it.__version!==N.version){lt(it,N,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+A)}const St={[pd]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[md]:s.MIRRORED_REPEAT},Tt={[Ri]:s.NEAREST,[bM]:s.NEAREST_MIPMAP_NEAREST,[fc]:s.NEAREST_MIPMAP_LINEAR,[Oi]:s.LINEAR,[mh]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},D={[DM]:s.NEVER,[PM]:s.ALWAYS,[UM]:s.LESS,[O_]:s.LEQUAL,[LM]:s.EQUAL,[zM]:s.GEQUAL,[NM]:s.GREATER,[OM]:s.NOTEQUAL};function W(N,A){if(A.type===oa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Oi||A.magFilter===mh||A.magFilter===fc||A.magFilter===br||A.minFilter===Oi||A.minFilter===mh||A.minFilter===fc||A.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,St[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,St[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,St[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Tt[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,D[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==fc&&A.minFilter!==br||A.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function at(N,A){let it=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",F));const ht=A.source;let Mt=_.get(ht);Mt===void 0&&(Mt={},_.set(ht,Mt));const vt=ct(A);if(vt!==N.__cacheKey){Mt[vt]===void 0&&(Mt[vt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,it=!0),Mt[vt].usedTimes++;const Yt=Mt[N.__cacheKey];Yt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Yt.usedTimes===0&&U(A)),N.__cacheKey=vt,N.__webglTexture=Mt[vt].texture}return it}function G(N,A,it){let ht=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ht=s.TEXTURE_3D);const Mt=at(N,A),vt=A.source;i.bindTexture(ht,N.__webglTexture,s.TEXTURE0+it);const Yt=a.get(vt);if(vt.version!==Yt.__version||Mt===!0){i.activeTexture(s.TEXTURE0+it);const Dt=De.getPrimaries(De.workingColorSpace),It=A.colorSpace===Va?null:De.getPrimaries(A.colorSpace),_e=A.colorSpace===Va||Dt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let At=T(A.image,!1,o.maxTextureSize);At=be(A,At);const Vt=c.convert(A.format,A.colorSpace),$t=c.convert(A.type);let jt=L(A.internalFormat,Vt,$t,A.colorSpace,A.isVideoTexture);W(ht,A);let Pt;const ne=A.mipmaps,le=A.isVideoTexture!==!0,Be=Yt.__version===void 0||Mt===!0,Y=vt.dataReady,Ut=X(A,At);if(A.isDepthTexture)jt=w(A.format===Wo,A.type),Be&&(le?i.texStorage2D(s.TEXTURE_2D,1,jt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,jt,At.width,At.height,0,Vt,$t,null));else if(A.isDataTexture)if(ne.length>0){le&&Be&&i.texStorage2D(s.TEXTURE_2D,Ut,jt,ne[0].width,ne[0].height);for(let ft=0,xt=ne.length;ft<xt;ft++)Pt=ne[ft],le?Y&&i.texSubImage2D(s.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Vt,$t,Pt.data):i.texImage2D(s.TEXTURE_2D,ft,jt,Pt.width,Pt.height,0,Vt,$t,Pt.data);A.generateMipmaps=!1}else le?(Be&&i.texStorage2D(s.TEXTURE_2D,Ut,jt,At.width,At.height),Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,At.width,At.height,Vt,$t,At.data)):i.texImage2D(s.TEXTURE_2D,0,jt,At.width,At.height,0,Vt,$t,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&Be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,jt,ne[0].width,ne[0].height,At.depth);for(let ft=0,xt=ne.length;ft<xt;ft++)if(Pt=ne[ft],A.format!==Ai)if(Vt!==null)if(le){if(Y)if(A.layerUpdates.size>0){const wt=U0(Pt.width,Pt.height,A.format,A.type);for(const Lt of A.layerUpdates){const ie=Pt.data.subarray(Lt*wt/Pt.data.BYTES_PER_ELEMENT,(Lt+1)*wt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Lt,Pt.width,Pt.height,1,Vt,ie)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Pt.width,Pt.height,At.depth,Vt,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,jt,Pt.width,Pt.height,At.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Y&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Pt.width,Pt.height,At.depth,Vt,$t,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ft,jt,Pt.width,Pt.height,At.depth,0,Vt,$t,Pt.data)}else{le&&Be&&i.texStorage2D(s.TEXTURE_2D,Ut,jt,ne[0].width,ne[0].height);for(let ft=0,xt=ne.length;ft<xt;ft++)Pt=ne[ft],A.format!==Ai?Vt!==null?le?Y&&i.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Vt,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,ft,jt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Y&&i.texSubImage2D(s.TEXTURE_2D,ft,0,0,Pt.width,Pt.height,Vt,$t,Pt.data):i.texImage2D(s.TEXTURE_2D,ft,jt,Pt.width,Pt.height,0,Vt,$t,Pt.data)}else if(A.isDataArrayTexture)if(le){if(Be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,jt,At.width,At.height,At.depth),Y)if(A.layerUpdates.size>0){const ft=U0(At.width,At.height,A.format,A.type);for(const xt of A.layerUpdates){const wt=At.data.subarray(xt*ft/At.data.BYTES_PER_ELEMENT,(xt+1)*ft/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,At.width,At.height,1,Vt,$t,wt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Vt,$t,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,At.width,At.height,At.depth,0,Vt,$t,At.data);else if(A.isData3DTexture)le?(Be&&i.texStorage3D(s.TEXTURE_3D,Ut,jt,At.width,At.height,At.depth),Y&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Vt,$t,At.data)):i.texImage3D(s.TEXTURE_3D,0,jt,At.width,At.height,At.depth,0,Vt,$t,At.data);else if(A.isFramebufferTexture){if(Be)if(le)i.texStorage2D(s.TEXTURE_2D,Ut,jt,At.width,At.height);else{let ft=At.width,xt=At.height;for(let wt=0;wt<Ut;wt++)i.texImage2D(s.TEXTURE_2D,wt,jt,ft,xt,0,Vt,$t,null),ft>>=1,xt>>=1}}else if(ne.length>0){if(le&&Be){const ft=Bt(ne[0]);i.texStorage2D(s.TEXTURE_2D,Ut,jt,ft.width,ft.height)}for(let ft=0,xt=ne.length;ft<xt;ft++)Pt=ne[ft],le?Y&&i.texSubImage2D(s.TEXTURE_2D,ft,0,0,Vt,$t,Pt):i.texImage2D(s.TEXTURE_2D,ft,jt,Vt,$t,Pt);A.generateMipmaps=!1}else if(le){if(Be){const ft=Bt(At);i.texStorage2D(s.TEXTURE_2D,Ut,jt,ft.width,ft.height)}Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,$t,At)}else i.texImage2D(s.TEXTURE_2D,0,jt,Vt,$t,At);M(A)&&y(ht),Yt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function lt(N,A,it){if(A.image.length!==6)return;const ht=at(N,A),Mt=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+it);const vt=a.get(Mt);if(Mt.version!==vt.__version||ht===!0){i.activeTexture(s.TEXTURE0+it);const Yt=De.getPrimaries(De.workingColorSpace),Dt=A.colorSpace===Va?null:De.getPrimaries(A.colorSpace),It=A.colorSpace===Va||Yt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Vt=[];for(let xt=0;xt<6;xt++)!_e&&!At?Vt[xt]=T(A.image[xt],!0,o.maxCubemapSize):Vt[xt]=At?A.image[xt].image:A.image[xt],Vt[xt]=be(A,Vt[xt]);const $t=Vt[0],jt=c.convert(A.format,A.colorSpace),Pt=c.convert(A.type),ne=L(A.internalFormat,jt,Pt,A.colorSpace),le=A.isVideoTexture!==!0,Be=vt.__version===void 0||ht===!0,Y=Mt.dataReady;let Ut=X(A,$t);W(s.TEXTURE_CUBE_MAP,A);let ft;if(_e){le&&Be&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ne,$t.width,$t.height);for(let xt=0;xt<6;xt++){ft=Vt[xt].mipmaps;for(let wt=0;wt<ft.length;wt++){const Lt=ft[wt];A.format!==Ai?jt!==null?le?Y&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,Lt.width,Lt.height,jt,Lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ne,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,Lt.width,Lt.height,jt,Pt,Lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ne,Lt.width,Lt.height,0,jt,Pt,Lt.data)}}}else{if(ft=A.mipmaps,le&&Be){ft.length>0&&Ut++;const xt=Bt(Vt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(At){le?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt[xt].width,Vt[xt].height,jt,Pt,Vt[xt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Vt[xt].width,Vt[xt].height,0,jt,Pt,Vt[xt].data);for(let wt=0;wt<ft.length;wt++){const ie=ft[wt].image[xt].image;le?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,ie.width,ie.height,jt,Pt,ie.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ne,ie.width,ie.height,0,jt,Pt,ie.data)}}else{le?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,Pt,Vt[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,jt,Pt,Vt[xt]);for(let wt=0;wt<ft.length;wt++){const Lt=ft[wt];le?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,jt,Pt,Lt.image[xt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ne,jt,Pt,Lt.image[xt])}}}M(A)&&y(s.TEXTURE_CUBE_MAP),vt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function gt(N,A,it,ht,Mt,vt){const Yt=c.convert(it.format,it.colorSpace),Dt=c.convert(it.type),It=L(it.internalFormat,Yt,Dt,it.colorSpace),_e=a.get(A),At=a.get(it);if(At.__renderTarget=A,!_e.__hasExternalTextures){const Vt=Math.max(1,A.width>>vt),$t=Math.max(1,A.height>>vt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?i.texImage3D(Mt,vt,It,Vt,$t,A.depth,0,Yt,Dt,null):i.texImage2D(Mt,vt,It,Vt,$t,0,Yt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,Mt,At.__webglTexture,0,Qt(A)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,Mt,At.__webglTexture,vt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(N,A,it){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){const ht=A.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,vt=w(A.stencilBuffer,Mt),Yt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Qt(A);pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,vt,A.width,A.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,vt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,N)}else{const ht=A.textures;for(let Mt=0;Mt<ht.length;Mt++){const vt=ht[Mt],Yt=c.convert(vt.format,vt.colorSpace),Dt=c.convert(vt.type),It=L(vt.internalFormat,Yt,Dt,vt.colorSpace),_e=Qt(A);it&&pe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,It,A.width,A.height):pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,It,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,It,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(A.depthTexture);ht.__renderTarget=A,(!ht.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),mt(A.depthTexture,0);const Mt=ht.__webglTexture,vt=Qt(A);if(A.depthTexture.format===Xo)pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===Wo)pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function qt(N){const A=a.get(N),it=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ht){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=ht}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,N)}else if(it){A.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ht]),A.__webglDepthbuffer[ht]===void 0)A.__webglDepthbuffer[ht]=s.createRenderbuffer(),yt(A.__webglDepthbuffer[ht],N,!1);else{const Mt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,vt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),yt(A.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Mt)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(N,A,it){const ht=a.get(N);A!==void 0&&gt(ht.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&qt(N)}function ze(N){const A=N.texture,it=a.get(N),ht=a.get(A);N.addEventListener("dispose",z);const Mt=N.textures,vt=N.isWebGLCubeRenderTarget===!0,Yt=Mt.length>1;if(Yt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=A.version,f.memory.textures++),vt){it.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer[Dt]=[];for(let It=0;It<A.mipmaps.length;It++)it.__webglFramebuffer[Dt][It]=s.createFramebuffer()}else it.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){it.__webglFramebuffer=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)it.__webglFramebuffer[Dt]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Dt=0,It=Mt.length;Dt<It;Dt++){const _e=a.get(Mt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&pe(N)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const It=Mt[Dt];it.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Dt]);const _e=c.convert(It.format,It.colorSpace),At=c.convert(It.type),Vt=L(It.internalFormat,_e,At,It.colorSpace,N.isXRRenderTarget===!0),$t=Qt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Vt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,it.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(it.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(vt){i.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),W(s.TEXTURE_CUBE_MAP,A);for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)gt(it.__webglFramebuffer[Dt][It],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,It);else gt(it.__webglFramebuffer[Dt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(A)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Dt=0,It=Mt.length;Dt<It;Dt++){const _e=Mt[Dt],At=a.get(_e);i.bindTexture(s.TEXTURE_2D,At.__webglTexture),W(s.TEXTURE_2D,_e),gt(it.__webglFramebuffer,N,_e,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),M(_e)&&y(s.TEXTURE_2D)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,ht.__webglTexture),W(Dt,A),A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)gt(it.__webglFramebuffer[It],N,A,s.COLOR_ATTACHMENT0,Dt,It);else gt(it.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,Dt,0);M(A)&&y(Dt),i.unbindTexture()}N.depthBuffer&&qt(N)}function Ne(N){const A=N.textures;for(let it=0,ht=A.length;it<ht;it++){const Mt=A[it];if(M(Mt)){const vt=P(N),Yt=a.get(Mt).__webglTexture;i.bindTexture(vt,Yt),y(vt),i.unbindTexture()}}}const he=[],I=[];function We(N){if(N.samples>0){if(pe(N)===!1){const A=N.textures,it=N.width,ht=N.height;let Mt=s.COLOR_BUFFER_BIT;const vt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=a.get(N),Dt=A.length>1;if(Dt)for(let It=0;It<A.length;It++)i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let It=0;It<A.length;It++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const _e=a.get(A[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,it,ht,0,0,it,ht,Mt,s.NEAREST),p===!0&&(he.length=0,I.length=0,he.push(s.COLOR_ATTACHMENT0+It),N.depthBuffer&&N.resolveDepthBuffer===!1&&(he.push(vt),I.push(vt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let It=0;It<A.length;It++){i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const _e=a.get(A[It]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Qt(N){return Math.min(o.maxSamples,N.samples)}function pe(N){const A=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Gt(N){const A=f.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function be(N,A){const it=N.colorSpace,ht=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||it!==ws&&it!==Va&&(De.getTransfer(it)===ke?(ht!==Ai||Mt!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),A}function Bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=nt,this.setTexture2D=mt,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=Ht,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=pe}function fR(s,t){function i(a,o=Va){let c;const f=De.getTransfer(o);if(a===ua)return s.UNSIGNED_BYTE;if(a===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===A_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===T_)return s.BYTE;if(a===b_)return s.SHORT;if(a===Vo)return s.UNSIGNED_SHORT;if(a===Yd)return s.INT;if(a===Rr)return s.UNSIGNED_INT;if(a===oa)return s.FLOAT;if(a===qo)return s.HALF_FLOAT;if(a===R_)return s.ALPHA;if(a===C_)return s.RGB;if(a===Ai)return s.RGBA;if(a===w_)return s.LUMINANCE;if(a===D_)return s.LUMINANCE_ALPHA;if(a===Xo)return s.DEPTH_COMPONENT;if(a===Wo)return s.DEPTH_STENCIL;if(a===U_)return s.RED;if(a===Kd)return s.RED_INTEGER;if(a===L_)return s.RG;if(a===Qd)return s.RG_INTEGER;if(a===Jd)return s.RGBA_INTEGER;if(a===Bc||a===Ic||a===Hc||a===Gc)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gd||a===vd||a===_d||a===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===vd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===xd||a===Sd||a===Md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===xd||a===Sd)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Md)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ed||a===Td||a===bd||a===Ad||a===Rd||a===Cd||a===wd||a===Dd||a===Ud||a===Ld||a===Nd||a===Od||a===zd||a===Pd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ed)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Td)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===bd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ad)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Rd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Cd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===wd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Dd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ud)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Ld)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Nd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Od)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===zd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Pd)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Vc||a===Fd||a===Bd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Vc)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Fd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===N_||a===Id||a===Hd||a===Gd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Vc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Id)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Gd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ko?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,a){if(this.texture===null){const o=new Yn,c=t.properties.get(o);c.__webglTexture=i.texture,(i.depthNear!==a.depthNear||i.depthFar!==a.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new ja({vertexShader:hR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wn(new Jo(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Ns{constructor(t,i){super();const a=this;let o=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,S=null,E=null;const T=new pR,M=i.getContextAttributes();let y=null,P=null;const L=[],w=[],X=new re;let F=null;const z=new di;z.viewport=new rn;const k=new di;k.viewport=new rn;const U=[z,k],R=new PE;let H=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let lt=L[G];return lt===void 0&&(lt=new Fh,L[G]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(G){let lt=L[G];return lt===void 0&&(lt=new Fh,L[G]=lt),lt.getGripSpace()},this.getHand=function(G){let lt=L[G];return lt===void 0&&(lt=new Fh,L[G]=lt),lt.getHandSpace()};function $(G){const lt=w.indexOf(G.inputSource);if(lt===-1)return;const gt=L[lt];gt!==void 0&&(gt.update(G.inputSource,G.frame,m||f),gt.dispatchEvent({type:G.type,data:G.inputSource}))}function ct(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",ct),o.removeEventListener("inputsourceschange",mt);for(let G=0;G<L.length;G++){const lt=w[G];lt!==null&&(w[G]=null,L[G].disconnect(lt))}H=null,nt=null,T.reset(),t.setRenderTarget(y),S=null,_=null,v=null,o=null,P=null,at.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(X.width,X.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",ct),o.addEventListener("inputsourceschange",mt),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,yt=null,Ct=null;M.depth&&(Ct=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=M.stencil?Wo:Xo,yt=M.stencil?ko:Rr);const qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};v=new XRWebGLBinding(o,i),_=v.createProjectionLayer(qt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new Cr(_.textureWidth,_.textureHeight,{format:Ai,type:ua,depthTexture:new j_(_.textureWidth,_.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,gt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Cr(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(h),at.setContext(o),at.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function mt(G){for(let lt=0;lt<G.removed.length;lt++){const gt=G.removed[lt],yt=w.indexOf(gt);yt>=0&&(w[yt]=null,L[yt].disconnect(gt))}for(let lt=0;lt<G.added.length;lt++){const gt=G.added[lt];let yt=w.indexOf(gt);if(yt===-1){for(let qt=0;qt<L.length;qt++)if(qt>=w.length){w.push(gt),yt=qt;break}else if(w[qt]===null){w[qt]=gt,yt=qt;break}if(yt===-1)break}const Ct=L[yt];Ct&&Ct.connect(gt)}}const O=new j,J=new j;function Q(G,lt,gt){O.setFromMatrixPosition(lt.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);const yt=O.distanceTo(J),Ct=lt.projectionMatrix.elements,qt=gt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),ze=Ct[14]/(Ct[10]+1),Ne=(Ct[9]+1)/Ct[5],he=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],We=(qt[8]+1)/qt[0],Qt=Ht*I,pe=Ht*We,Gt=yt/(-I+We),be=Gt*-I;if(lt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(be),G.translateZ(Gt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ct[10]===-1)G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Bt=Ht+Gt,N=ze+Gt,A=Qt-be,it=pe+(yt-be),ht=Ne*ze/N*Bt,Mt=he*ze/N*Bt;G.projectionMatrix.makePerspective(A,it,ht,Mt,Bt,N),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function St(G,lt){lt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(lt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;let lt=G.near,gt=G.far;T.texture!==null&&(T.depthNear>0&&(lt=T.depthNear),T.depthFar>0&&(gt=T.depthFar)),R.near=k.near=z.near=lt,R.far=k.far=z.far=gt,(H!==R.near||nt!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,nt=R.far),z.layers.mask=G.layers.mask|2,k.layers.mask=G.layers.mask|4,R.layers.mask=z.layers.mask|k.layers.mask;const yt=G.parent,Ct=R.cameras;St(R,yt);for(let qt=0;qt<Ct.length;qt++)St(Ct[qt],yt);Ct.length===2?Q(R,z,k):R.projectionMatrix.copy(z.projectionMatrix),Tt(G,R,yt)};function Tt(G,lt,gt){gt===null?G.matrix.copy(lt.matrixWorld):(G.matrix.copy(gt.matrixWorld),G.matrix.invert(),G.matrix.multiply(lt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Vd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(G){p=G,_!==null&&(_.fixedFoveation=G),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=G)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let D=null;function W(G,lt){if(g=lt.getViewerPose(m||f),E=lt,g!==null){const gt=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let yt=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,yt=!0);for(let Ht=0;Ht<gt.length;Ht++){const ze=gt[Ht];let Ne=null;if(S!==null)Ne=S.getViewport(ze);else{const I=v.getViewSubImage(_,ze);Ne=I.viewport,Ht===0&&(t.setRenderTargetTextures(P,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(P))}let he=U[Ht];he===void 0&&(he=new di,he.layers.enable(Ht),he.viewport=new rn,U[Ht]=he),he.matrix.fromArray(ze.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ze.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ht===0&&(R.matrix.copy(he.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),yt===!0&&R.cameras.push(he)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ht=v.getDepthInformation(gt[0]);Ht&&Ht.isValid&&Ht.texture&&T.init(t,Ht,o.renderState)}}for(let gt=0;gt<L.length;gt++){const yt=w[gt],Ct=L[gt];yt!==null&&Ct!==void 0&&Ct.update(yt,lt,m||f)}D&&D(G,lt),lt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:lt}),E=null}const at=new J_;at.setAnimationLoop(W),this.setAnimationLoop=function(G){D=G},this.dispose=function(){}}}const yr=new fa,gR=new Ze;function vR(s,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,V_(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,P,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,P,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=t.get(y),L=P.envMap,w=P.envMapRotation;L&&(M.envMap.value=L,yr.copy(w),yr.x*=-1,yr.y*=-1,yr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),M.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(yr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,P,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const P=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function _R(s,t,i,a){let o={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,L){const w=L.program;a.uniformBlockBinding(P,w)}function m(P,L){let w=o[P.id];w===void 0&&(E(P),w=g(P),o[P.id]=w,P.addEventListener("dispose",M));const X=L.program;a.updateUBOMapping(P,X);const F=t.render.frame;c[P.id]!==F&&(_(P),c[P.id]=F)}function g(P){const L=v();P.__bindingPointIndex=L;const w=s.createBuffer(),X=P.__size,F=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,X,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function v(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const L=o[P.id],w=P.uniforms,X=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,z=w.length;F<z;F++){const k=Array.isArray(w[F])?w[F]:[w[F]];for(let U=0,R=k.length;U<R;U++){const H=k[U];if(S(H,F,U,X)===!0){const nt=H.__offset,$=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let mt=0;mt<$.length;mt++){const O=$[mt],J=T(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,nt+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,L,w,X){const F=P.value,z=L+"_"+w;if(X[z]===void 0)return typeof F=="number"||typeof F=="boolean"?X[z]=F:X[z]=F.clone(),!0;{const k=X[z];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return X[z]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function E(P){const L=P.uniforms;let w=0;const X=16;for(let z=0,k=L.length;z<k;z++){const U=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,H=U.length;R<H;R++){const nt=U[R],$=Array.isArray(nt.value)?nt.value:[nt.value];for(let ct=0,mt=$.length;ct<mt;ct++){const O=$[ct],J=T(O),Q=w%X,St=Q%J.boundary,Tt=Q+St;w+=St,Tt!==0&&X-Tt<J.storage&&(w+=X-Tt),nt.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=J.storage}}}const F=w%X;return F>0&&(w+=X-F),P.__size=w,P.__cache={},this}function T(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function M(P){const L=P.target;L.removeEventListener("dispose",M);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function y(){for(const P in o)s.deleteBuffer(o[P]);f=[],o={},c={}}return{bind:p,update:m,dispose:y}}class yR{constructor(t={}){const{canvas:i=BM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let X=!1;this._outputColorSpace=hi;let F=0,z=0,k=null,U=-1,R=null;const H=new rn,nt=new rn;let $=null;const ct=new Oe(0);let mt=0,O=i.width,J=i.height,Q=1,St=null,Tt=null;const D=new rn(0,0,O,J),W=new rn(0,0,O,J);let at=!1;const G=new W_;let lt=!1,gt=!1;const yt=new Ze,Ct=new Ze,qt=new j,Ht=new rn,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function he(){return k===null?Q:1}let I=a;function We(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${qd}`),i.addEventListener("webglcontextlost",xt,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),I===null){const Z="webgl2";if(I=We(Z,C),I===null)throw We(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Qt,pe,Gt,be,Bt,N,A,it,ht,Mt,vt,Yt,Dt,It,_e,At,Vt,$t,jt,Pt,ne,le,Be,Y;function Ut(){Qt=new w1(I),Qt.init(),le=new fR(I,Qt),pe=new M1(I,Qt,t,le),Gt=new cR(I,Qt),pe.reverseDepthBuffer&&_&&Gt.buffers.depth.setReversed(!0),be=new L1(I),Bt=new KA,N=new uR(I,Qt,Gt,Bt,pe,le,be),A=new T1(w),it=new C1(w),ht=new BE(I),Be=new x1(I,ht),Mt=new D1(I,ht,be,Be),vt=new O1(I,Mt,ht,be),jt=new N1(I,pe,N),At=new E1(Bt),Yt=new ZA(w,A,it,Qt,pe,Be,At),Dt=new vR(w,Bt),It=new JA,_e=new aR(Qt),$t=new y1(w,A,it,Gt,vt,S,p),Vt=new oR(w,vt,pe),Y=new _R(I,be,pe,Gt),Pt=new S1(I,Qt,be),ne=new U1(I,Qt,be),be.programs=Yt.programs,w.capabilities=pe,w.extensions=Qt,w.properties=Bt,w.renderLists=It,w.shadowMap=Vt,w.state=Gt,w.info=be}Ut();const ft=new mR(w,I);this.xr=ft,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Qt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Qt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(O,J,!1))},this.getSize=function(C){return C.set(O,J)},this.setSize=function(C,Z,st=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,J=Z,i.width=Math.floor(C*Q),i.height=Math.floor(Z*Q),st===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(O*Q,J*Q).floor()},this.setDrawingBufferSize=function(C,Z,st){O=C,J=Z,Q=st,i.width=Math.floor(C*st),i.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,Z,st,ot){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,Z,st,ot),Gt.viewport(H.copy(D).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,Z,st,ot){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,Z,st,ot),Gt.scissor(nt.copy(W).multiplyScalar(Q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(C){Gt.setScissorTest(at=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,st=!0){let ot=0;if(C){let q=!1;if(k!==null){const bt=k.texture.format;q=bt===Jd||bt===Qd||bt===Kd}if(q){const bt=k.texture.type,Nt=bt===ua||bt===Rr||bt===Vo||bt===ko||bt===jd||bt===Zd,zt=$t.getClearColor(),Ft=$t.getClearAlpha(),ae=zt.r,ee=zt.g,Zt=zt.b;Nt?(E[0]=ae,E[1]=ee,E[2]=Zt,E[3]=Ft,I.clearBufferuiv(I.COLOR,0,E)):(T[0]=ae,T[1]=ee,T[2]=Zt,T[3]=Ft,I.clearBufferiv(I.COLOR,0,T))}else ot|=I.COLOR_BUFFER_BIT}Z&&(ot|=I.DEPTH_BUFFER_BIT),st&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",xt,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),$t.dispose(),It.dispose(),_e.dispose(),Bt.dispose(),A.dispose(),it.dispose(),vt.dispose(),Be.dispose(),Y.dispose(),Yt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Ps),ft.removeEventListener("sessionend",Fs),Ci.stop()};function xt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const C=be.autoReset,Z=Vt.enabled,st=Vt.autoUpdate,ot=Vt.needsUpdate,q=Vt.type;Ut(),be.autoReset=C,Vt.enabled=Z,Vt.autoUpdate=st,Vt.needsUpdate=ot,Vt.type=q}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const Z=C.target;Z.removeEventListener("dispose",ie),Ke(Z)}function Ke(C){fn(C),Bt.remove(C)}function fn(C){const Z=Bt.get(C).programs;Z!==void 0&&(Z.forEach(function(st){Yt.releaseProgram(st)}),C.isShaderMaterial&&Yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,ot,q,bt){Z===null&&(Z=ze);const Nt=q.isMesh&&q.matrixWorld.determinant()<0,zt=Is(C,Z,st,ot,q);Gt.setMaterial(ot,Nt);let Ft=st.index,ae=1;if(ot.wireframe===!0){if(Ft=Mt.getWireframeAttribute(st),Ft===void 0)return;ae=2}const ee=st.drawRange,Zt=st.attributes.position;let Se=ee.start*ae,Me=(ee.start+ee.count)*ae;bt!==null&&(Se=Math.max(Se,bt.start*ae),Me=Math.min(Me,(bt.start+bt.count)*ae)),Ft!==null?(Se=Math.max(Se,0),Me=Math.min(Me,Ft.count)):Zt!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,Zt.count));const qe=Me-Se;if(qe<0||qe===1/0)return;Be.setup(q,ot,zt,st,Ft);let Re,se=Pt;if(Ft!==null&&(Re=ht.get(Ft),se=ne,se.setIndex(Re)),q.isMesh)ot.wireframe===!0?(Gt.setLineWidth(ot.wireframeLinewidth*he()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(q.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*he()),q.isLineSegments?se.setMode(I.LINES):q.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else q.isPoints?se.setMode(I.POINTS):q.isSprite&&se.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)kc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,hn=q._multiDrawCounts,Te=q._multiDrawCount,Pn=Ft?ht.get(Ft).bytesPerElement:1,vi=Bt.get(ot).currentProgram.getUniforms();for(let Un=0;Un<Te;Un++)vi.setValue(I,"_gl_DrawID",Un),se.render(Jt[Un]/Pn,hn[Un])}else if(q.isInstancedMesh)se.renderInstances(Se,qe,q.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,hn=Math.min(st.instanceCount,Jt);se.renderInstances(Se,qe,hn)}else se.render(Se,qe)};function Ae(C,Z,st){C.transparent===!0&&C.side===Ti&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,Je(C,Z,st),C.side=Ya,C.needsUpdate=!0,Je(C,Z,st),C.side=Ti):Je(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),y=_e.get(st),y.init(Z),L.push(y),st.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),C!==st&&C.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const ot=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const bt=q.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){const zt=bt[Nt];Ae(zt,st,q),ot.add(zt)}else Ae(bt,st,q),ot.add(bt)}),y=L.pop(),ot},this.compileAsync=function(C,Z,st=null){const ot=this.compile(C,Z,st);return new Promise(q=>{function bt(){if(ot.forEach(function(Nt){Bt.get(Nt).currentProgram.isReady()&&ot.delete(Nt)}),ot.size===0){q(C);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xn=null;function mi(C){xn&&xn(C)}function Ps(){Ci.stop()}function Fs(){Ci.start()}const Ci=new J_;Ci.setAnimationLoop(mi),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){xn=C,ft.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},ft.addEventListener("sessionstart",Ps),ft.addEventListener("sessionend",Fs),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Z),Z=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Z,k),y=_e.get(C,L.length),y.init(Z),L.push(y),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G.setFromProjectionMatrix(Ct),gt=this.localClippingEnabled,lt=At.init(this.clippingPlanes,gt),M=It.get(C,P.length),M.init(),P.push(M),ft.enabled===!0&&ft.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&Za(bt,Z,-1/0,w.sortObjects)}Za(C,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(St,Tt),Ne=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ne&&$t.addToRenderList(M,C),this.info.render.frame++,lt===!0&&At.beginShadows();const st=y.state.shadowsArray;Vt.render(st,C,Z),lt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,q=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const bt=Z.cameras;if(q.length>0)for(let Nt=0,zt=bt.length;Nt<zt;Nt++){const Ft=bt[Nt];Bs(ot,q,C,Ft)}Ne&&$t.render(C);for(let Nt=0,zt=bt.length;Nt<zt;Nt++){const Ft=bt[Nt];wr(M,C,Ft,Ft.viewport)}}else q.length>0&&Bs(ot,q,C,Z),Ne&&$t.render(C),wr(M,C,Z);k!==null&&z===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(w,C,Z),Be.resetDefaultState(),U=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],lt===!0&&At.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Za(C,Z,st,ot){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){ot&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const Nt=vt.update(C),zt=C.material;zt.visible&&M.push(C,Nt,zt,st,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){const Nt=vt.update(C),zt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ht.copy(Nt.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(zt)){const Ft=Nt.groups;for(let ae=0,ee=Ft.length;ae<ee;ae++){const Zt=Ft[ae],Se=zt[Zt.materialIndex];Se&&Se.visible&&M.push(C,Nt,Se,st,Ht.z,Zt)}}else zt.visible&&M.push(C,Nt,zt,st,Ht.z,null)}}const bt=C.children;for(let Nt=0,zt=bt.length;Nt<zt;Nt++)Za(bt[Nt],Z,st,ot)}function wr(C,Z,st,ot){const q=C.opaque,bt=C.transmissive,Nt=C.transparent;y.setupLightsView(st),lt===!0&&At.setGlobalState(w.clippingPlanes,st),ot&&Gt.viewport(H.copy(ot)),q.length>0&&Ka(q,Z,st),bt.length>0&&Ka(bt,Z,st),Nt.length>0&&Ka(Nt,Z,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Bs(C,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Cr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?qo:ua,minFilter:br,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=y.state.transmissionRenderTarget[ot.id],Nt=ot.viewport||H;bt.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);const zt=w.getRenderTarget();w.setRenderTarget(bt),w.getClearColor(ct),mt=w.getClearAlpha(),mt<1&&w.setClearColor(16777215,.5),w.clear(),Ne&&$t.render(st);const Ft=w.toneMapping;w.toneMapping=Xa;const ae=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),lt===!0&&At.setGlobalState(w.clippingPlanes,ot),Ka(C,st,ot),N.updateMultisampleRenderTarget(bt),N.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Zt=0,Se=Z.length;Zt<Se;Zt++){const Me=Z[Zt],qe=Me.object,Re=Me.geometry,se=Me.material,Jt=Me.group;if(se.side===Ti&&qe.layers.test(ot.layers)){const hn=se.side;se.side=qn,se.needsUpdate=!0,gi(qe,st,ot,Re,se,Jt),se.side=hn,se.needsUpdate=!0,ee=!0}}ee===!0&&(N.updateMultisampleRenderTarget(bt),N.updateRenderTargetMipmap(bt))}w.setRenderTarget(zt),w.setClearColor(ct,mt),ae!==void 0&&(ot.viewport=ae),w.toneMapping=Ft}function Ka(C,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let q=0,bt=C.length;q<bt;q++){const Nt=C[q],zt=Nt.object,Ft=Nt.geometry,ae=Nt.group;let ee=Nt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),zt.layers.test(st.layers)&&gi(zt,Z,st,Ft,ee,ae)}}function gi(C,Z,st,ot,q,bt){C.onBeforeRender(w,Z,st,ot,q,bt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(w,Z,st,ot,C,bt),q.transparent===!0&&q.side===Ti&&q.forceSinglePass===!1?(q.side=qn,q.needsUpdate=!0,w.renderBufferDirect(st,Z,ot,q,C,bt),q.side=Ya,q.needsUpdate=!0,w.renderBufferDirect(st,Z,ot,q,C,bt),q.side=Ti):w.renderBufferDirect(st,Z,ot,q,C,bt),C.onAfterRender(w,Z,st,ot,q,bt)}function Je(C,Z,st){Z.isScene!==!0&&(Z=ze);const ot=Bt.get(C),q=y.state.lights,bt=y.state.shadowsArray,Nt=q.state.version,zt=Yt.getParameters(C,q.state,bt,Z,st),Ft=Yt.getProgramCacheKey(zt);let ae=ot.programs;ot.environment=C.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(C.isMeshStandardMaterial?it:A).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ae===void 0&&(C.addEventListener("dispose",ie),ae=new Map,ot.programs=ae);let ee=ae.get(Ft);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Nt)return Pi(C,zt),ee}else zt.uniforms=Yt.getUniforms(C),C.onBeforeCompile(zt,w),ee=Yt.acquireProgram(zt,Ft),ae.set(Ft,ee),ot.uniforms=zt.uniforms;const Zt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=At.uniform),Pi(C,zt),ot.needsLights=iu(C),ot.lightsStateVersion=Nt,ot.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Sn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Xc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Pi(C,Z){const st=Bt.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function Is(C,Z,st,ot,q){Z.isScene!==!0&&(Z=ze),N.resetTextureUnits();const bt=Z.fog,Nt=ot.isMeshStandardMaterial?Z.environment:null,zt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ws,Ft=(ot.isMeshStandardMaterial?it:A).get(ot.envMap||Nt),ae=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Zt=!!st.morphAttributes.position,Se=!!st.morphAttributes.normal,Me=!!st.morphAttributes.color;let qe=Xa;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qe=w.toneMapping);const Re=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,se=Re!==void 0?Re.length:0,Jt=Bt.get(ot),hn=y.state.lights;if(lt===!0&&(gt===!0||C!==R)){const $e=C===R&&ot.id===U;At.setState(ot,C,$e)}let Te=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==hn.state.version||Jt.outputColorSpace!==zt||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isBatchedMesh&&Jt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Jt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Jt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Jt.instancingMorph===!1&&q.morphTexture!==null||Jt.envMap!==Ft||ot.fog===!0&&Jt.fog!==bt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==At.numPlanes||Jt.numIntersection!==At.numIntersection)||Jt.vertexAlphas!==ae||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==Se||Jt.morphColors!==Me||Jt.toneMapping!==qe||Jt.morphTargetsCount!==se)&&(Te=!0):(Te=!0,Jt.__version=ot.version);let Pn=Jt.currentProgram;Te===!0&&(Pn=Je(ot,Z,q));let vi=!1,Un=!1,vn=!1;const Ie=Pn.getUniforms(),Ln=Jt.uniforms;if(Gt.useProgram(Pn.program)&&(vi=!0,Un=!0,vn=!0),ot.id!==U&&(U=ot.id,Un=!0),vi||R!==C){Gt.buffers.depth.getReversed()?(yt.copy(C.projectionMatrix),HM(yt),GM(yt),Ie.setValue(I,"projectionMatrix",yt)):Ie.setValue(I,"projectionMatrix",C.projectionMatrix),Ie.setValue(I,"viewMatrix",C.matrixWorldInverse);const Mn=Ie.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,qt.setFromMatrixPosition(C.matrixWorld)),pe.logarithmicDepthBuffer&&Ie.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ie.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Un=!0,vn=!0)}if(q.isSkinnedMesh){Ie.setOptional(I,q,"bindMatrix"),Ie.setOptional(I,q,"bindMatrixInverse");const $e=q.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ie.setValue(I,"boneTexture",$e.boneTexture,N))}q.isBatchedMesh&&(Ie.setOptional(I,q,"batchingTexture"),Ie.setValue(I,"batchingTexture",q._matricesTexture,N),Ie.setOptional(I,q,"batchingIdTexture"),Ie.setValue(I,"batchingIdTexture",q._indirectTexture,N),Ie.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Ie.setValue(I,"batchingColorTexture",q._colorsTexture,N));const Rn=st.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&jt.update(q,st,Pn),(Un||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,Ie.setValue(I,"receiveShadow",q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Ln.envMap.value=Ft,Ln.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Ln.envMapIntensity.value=Z.environmentIntensity),Un&&(Ie.setValue(I,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&nu(Ln,vn),bt&&ot.fog===!0&&Dt.refreshFogUniforms(Ln,bt),Dt.refreshMaterialUniforms(Ln,ot,Q,J,y.state.transmissionRenderTarget[C.id]),Xc.upload(I,Sn(Jt),Ln,N)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Xc.upload(I,Sn(Jt),Ln,N),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ie.setValue(I,"center",q.center),Ie.setValue(I,"modelViewMatrix",q.modelViewMatrix),Ie.setValue(I,"normalMatrix",q.normalMatrix),Ie.setValue(I,"modelMatrix",q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const $e=ot.uniformsGroups;for(let Mn=0,Dr=$e.length;Mn<Dr;Mn++){const Fn=$e[Mn];Y.update(Fn,Pn),Y.bind(Fn,Pn)}}return Pn}function nu(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function iu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,Z,st){const ot=Bt.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Bt.get(C.texture).__webglTexture=Z,Bt.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const st=Bt.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const el=I.createFramebuffer();this.setRenderTarget=function(C,Z=0,st=0){k=C,F=Z,z=st;let ot=!0,q=null,bt=!1,Nt=!1;if(C){const Ft=Bt.get(C);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(Ft.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Ft.__hasExternalTextures)N.rebindTextures(C,Bt.get(C.texture).__webglTexture,Bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Zt=C.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&Bt.has(Zt)&&(C.width!==Zt.image.width||C.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Nt=!0);const ee=Bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?q=ee[Z][st]:q=ee[Z],bt=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?q=Bt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[st]:q=ee,H.copy(C.viewport),nt.copy(C.scissor),$=C.scissorTest}else H.copy(D).multiplyScalar(Q).floor(),nt.copy(W).multiplyScalar(Q).floor(),$=at;if(st!==0&&(q=el),Gt.bindFramebuffer(I.FRAMEBUFFER,q)&&ot&&Gt.drawBuffers(C,q),Gt.viewport(H),Gt.scissor(nt),Gt.setScissorTest($),bt){const Ft=Bt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,st)}else if(Nt){const Ft=Bt.get(C.texture),ae=Z;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,st,ae)}else if(C!==null&&st!==0){const Ft=Bt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,st)}U=-1},this.readRenderTargetPixels=function(C,Z,st,ot,q,bt,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){Gt.bindFramebuffer(I.FRAMEBUFFER,zt);try{const Ft=C.texture,ae=Ft.format,ee=Ft.type;if(!pe.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-q&&I.readPixels(Z,st,ot,q,le.convert(ae),le.convert(ee),bt)}finally{const Ft=k!==null?Bt.get(k).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,ot,q,bt,Nt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt)if(Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-q){Gt.bindFramebuffer(I.FRAMEBUFFER,zt);const Ft=C.texture,ae=Ft.format,ee=Ft.type;if(!pe.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(Z,st,ot,q,le.convert(ae),le.convert(ee),0);const Se=k!==null?Bt.get(k).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Se);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await IM(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(Zt),I.deleteSync(Me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,st=0){const ot=Math.pow(2,-st),q=Math.floor(C.image.width*ot),bt=Math.floor(C.image.height*ot),Nt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;N.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Nt,zt,q,bt),Gt.unbindTexture()};const Qa=I.createFramebuffer(),Hs=I.createFramebuffer();this.copyTextureToTexture=function(C,Z,st=null,ot=null,q=0,bt=null){bt===null&&(q!==0?(kc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=q,q=0):bt=0);let Nt,zt,Ft,ae,ee,Zt,Se,Me,qe;const Re=C.isCompressedTexture?C.mipmaps[bt]:C.image;if(st!==null)Nt=st.max.x-st.min.x,zt=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,ae=st.min.x,ee=st.min.y,Zt=st.isBox3?st.min.z:0;else{const Rn=Math.pow(2,-q);Nt=Math.floor(Re.width*Rn),zt=Math.floor(Re.height*Rn),C.isDataArrayTexture?Ft=Re.depth:C.isData3DTexture?Ft=Math.floor(Re.depth*Rn):Ft=1,ae=0,ee=0,Zt=0}ot!==null?(Se=ot.x,Me=ot.y,qe=ot.z):(Se=0,Me=0,qe=0);const se=le.convert(Z.format),Jt=le.convert(Z.type);let hn;Z.isData3DTexture?(N.setTexture3D(Z,0),hn=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),hn=I.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),hn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),Pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vi=I.getParameter(I.UNPACK_SKIP_PIXELS),Un=I.getParameter(I.UNPACK_SKIP_ROWS),vn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Re.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const Ie=C.isDataArrayTexture||C.isData3DTexture,Ln=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Rn=Bt.get(C),$e=Bt.get(Z),Mn=Bt.get(Rn.__renderTarget),Dr=Bt.get($e.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let Fn=0;Fn<Ft;Fn++)Ie&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.get(C).__webglTexture,q,Zt+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.get(Z).__webglTexture,bt,qe+Fn)),I.blitFramebuffer(ae,ee,Nt,zt,Se,Me,Nt,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Bt.has(C)){const Rn=Bt.get(C),$e=Bt.get(Z);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Qa),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hs);for(let Mn=0;Mn<Ft;Mn++)Ie?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,q,Zt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,q),Ln?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$e.__webglTexture,bt,qe+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$e.__webglTexture,bt),q!==0?I.blitFramebuffer(ae,ee,Nt,zt,Se,Me,Nt,zt,I.COLOR_BUFFER_BIT,I.NEAREST):Ln?I.copyTexSubImage3D(hn,bt,Se,Me,qe+Mn,ae,ee,Nt,zt):I.copyTexSubImage2D(hn,bt,Se,Me,ae,ee,Nt,zt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ln?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(hn,bt,Se,Me,qe,Nt,zt,Ft,se,Jt,Re.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(hn,bt,Se,Me,qe,Nt,zt,Ft,se,Re.data):I.texSubImage3D(hn,bt,Se,Me,qe,Nt,zt,Ft,se,Jt,Re):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,Se,Me,Nt,zt,se,Jt,Re.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,Se,Me,Re.width,Re.height,se,Re.data):I.texSubImage2D(I.TEXTURE_2D,bt,Se,Me,Nt,zt,se,Jt,Re);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vn),bt===0&&Z.generateMipmaps&&I.generateMipmap(hn),Gt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,st=null,ot=null,q=0){return kc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,st,ot,q)},this.initRenderTarget=function(C){Bt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Gt.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,Gt.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const Et=.5,xR={F:[[-Et,Et,Et],[Et,Et,Et],[Et,-Et,Et],[-Et,-Et,Et]],B:[[Et,Et,-Et],[-Et,Et,-Et],[-Et,-Et,-Et],[Et,-Et,-Et]],R:[[Et,Et,Et],[Et,Et,-Et],[Et,-Et,-Et],[Et,-Et,Et]],L:[[-Et,Et,-Et],[-Et,Et,Et],[-Et,-Et,Et],[-Et,-Et,-Et]],U:[[-Et,Et,-Et],[Et,Et,-Et],[Et,Et,Et],[-Et,Et,Et]],D:[[-Et,-Et,Et],[Et,-Et,Et],[Et,-Et,-Et],[-Et,-Et,-Et]]},n_=["U","R","F","D","L","B"],SR=[[-Et,Et,Et],[Et,Et,Et],[Et,Et,-Et],[-Et,Et,-Et],[-Et,-Et,Et],[Et,-Et,Et],[Et,-Et,-Et],[-Et,-Et,-Et]],MR=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];function ER(s,t){const i=(t%4+4)%4;return i===0?s:i===1?[s[3],s[0],s[1],s[2]]:i===2?[s[2],s[3],s[0],s[1]]:[s[1],s[2],s[3],s[0]]}const TR={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},bR={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function tu(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function Us(s){return s.replace("'","").replace("2","")}function i_(s){return s.endsWith("'")&&!s.endsWith("2")}function AR(s){return s.endsWith("2")}function RR(s){const t=s.rotationMatrix,i=s.translation,a=new Ze().set(t[0],t[1],t[2],i[0],t[3],t[4],t[5],i[1],t[6],t[7],t[8],i[2],0,0,0,1),o=new Ze().set(1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1);return new Ze().multiplyMatrices(o,a).invert()}function CR(s,t,i,a){const o=t.cameraFy||i*.9,c=2*Math.atan(a/(2*o));s.fov=c*180/Math.PI,s.aspect=i/a,s.near=.01,s.far=100,s.position.set(0,0,0),s.up.set(0,1,0),s.lookAt(0,0,-1),s.updateProjectionMatrix()}const wR=16777215,a_=8965375,DR=16772693,r_=16777215,s_={F:{position:[0,0,.501],rotation:[0,0,0]},B:{position:[0,0,-.501],rotation:[0,Math.PI,0]},R:{position:[.501,0,0],rotation:[0,Math.PI/2,0]},L:{position:[-.501,0,0],rotation:[0,-Math.PI/2,0]},U:{position:[0,.501,0],rotation:[-Math.PI/2,0,0]},D:{position:[0,-.501,0],rotation:[Math.PI/2,0,0]}};class UR{constructor(t){Le(this,"renderer");Le(this,"scene");Le(this,"camera");Le(this,"cubeRoot");Le(this,"faceMeshes",new Map);Le(this,"arrowRoot");Le(this,"traceGroup",null);Le(this,"currentMove",null);Le(this,"traceProgress",0);Le(this,"frameWidth",1);Le(this,"frameHeight",1);this.renderer=new yR({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new hE,this.camera=new di(45,1,.01,100),this.camera.position.set(0,0,0);const i=new zE(16777215,1);this.scene.add(i),this.cubeRoot=new Ar,this.buildCubeWireframe(),this.buildFacePlanes(),this.scene.add(this.cubeRoot),this.arrowRoot=new Ar,this.cubeRoot.add(this.arrowRoot)}resize(t,i){this.frameWidth=t,this.frameHeight=i,this.renderer.setSize(t,i,!1)}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.highlightMoveFace(t?Us(t):null),this.rebuildArrow(t))}setRotationProgress(t){const i=Math.max(0,Math.min(1,t));Math.abs(i-this.traceProgress)<.01||(this.traceProgress=i,this.updateTrace())}render(t){if(!t){this.renderer.render(this.scene,this.camera);return}CR(this.camera,t,this.frameWidth,this.frameHeight);const i=RR(t);this.cubeRoot.matrixAutoUpdate=!1,this.cubeRoot.matrix.copy(i),this.cubeRoot.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.cubeRoot.traverse(Zh)}buildCubeWireframe(){const t=SR.map(f=>new j(f[0],f[1],f[2])),i=[];for(const[f,h]of MR)i.push(t[f].x,t[f].y,t[f].z),i.push(t[h].x,t[h].y,t[h].z);const a=new pi;a.setAttribute("position",new pn(i,3));const o=new q_({color:wR,transparent:!0,opacity:.92,depthWrite:!1}),c=new Y_(a,o);this.cubeRoot.add(c)}buildFacePlanes(){const t=new Jo(.98,.98);for(const i of Object.keys(s_)){const a=s_[i],o=new Io({color:a_,transparent:!0,opacity:.12,side:Ti,depthWrite:!1}),c=new Wn(t.clone(),o);c.position.set(...a.position),c.rotation.set(...a.rotation),c.userData.faceId=i,this.faceMeshes.set(i,c),this.cubeRoot.add(c)}}highlightMoveFace(t){for(const[i,a]of this.faceMeshes){const o=a.material;i===t?(o.color.setHex(DR),o.opacity=.38):(o.color.setHex(a_),o.opacity=.1)}}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=Us(t),a=new j(...TR[i]),o=new j(0,1,0);Math.abs(a.dot(o))>.9&&o.set(0,0,1);const c=new j().crossVectors(o,a).normalize(),f=new j().crossVectors(a,c).normalize(),h=new Ar;h.position.copy(a.clone().multiplyScalar(.52)),h.userData={tangent:c,bitangent:f,move:t,segments:32};const p=tu(t),m=.34,g=32,v=i_(t)?p:0,_=i_(t)?0:p,S=[];for(let T=0;T<=g;T++){const M=v+(_-v)*T/g;S.push(c.clone().multiplyScalar(Math.cos(M)*m).add(f.clone().multiplyScalar(Math.sin(M)*m)))}h.userData.points=S;const E=new Wn(new ip(.36,.43,48),new Io({color:r_,transparent:!0,opacity:.55,side:Ti,depthWrite:!1}));if(h.add(E),AR(t)){const T=E.clone();T.rotation.z=Math.PI,h.add(T)}this.traceGroup=h,this.arrowRoot.add(h),this.updateTrace()}updateTrace(){if(!this.traceGroup||!this.currentMove)return;for(const S of[...this.traceGroup.children])S.name==="trace"&&(this.traceGroup.remove(S),Zh(S));const t=this.traceGroup.userData.points,i=this.traceGroup.userData.segments;if(!(t!=null&&t.length))return;const a=Math.max(2,Math.floor(i*this.traceProgress)),o=t.slice(0,a+1);if(o.length<2)return;const c=new K_(o),f=new ap(c,a,.035,10,!1),h=new Io({color:r_,transparent:!0,opacity:.95,depthWrite:!1}),p=new Wn(f,h);p.name="trace",this.traceGroup.add(p);const m=o[o.length-1],g=o[o.length-2]??m,v=new j().subVectors(m,g).normalize(),_=new Wn(new np(.08,.18,12),h.clone());_.name="trace",_.position.copy(m),_.quaternion.setFromUnitVectors(new j(0,1,0),v),this.traceGroup.add(_)}clearArrow(){for(this.traceGroup=null;this.arrowRoot.children.length>0;){const t=this.arrowRoot.children[0];this.arrowRoot.remove(t),Zh(t)}}}function Zh(s){s.traverse(t=>{(t instanceof Wn||t instanceof Y_)&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function LR({pose:s,move:t,rotationProgress:i,frameWidth:a,frameHeight:o,active:c}){const f=Xt.useRef(null),h=Xt.useRef(null);return Xt.useEffect(()=>{const p=f.current;if(!p)return;const m=new UR(p);return h.current=m,()=>{m.dispose(),h.current=null}},[]),Xt.useEffect(()=>{var p;(p=h.current)==null||p.resize(a,o)},[a,o]),Xt.useEffect(()=>{var p;(p=h.current)==null||p.setMove(t)},[t]),Xt.useEffect(()=>{var p;(p=h.current)==null||p.setRotationProgress(i)},[i]),Xt.useEffect(()=>{if(!c)return;let p=0;const m=()=>{var g;(g=h.current)==null||g.render(s),p=requestAnimationFrame(m)};return p=requestAnimationFrame(m),()=>cancelAnimationFrame(p)},[s,c]),Rt.jsx("canvas",{ref:f,className:`cube-ar-overlay${c?" active":""}`,"aria-hidden":"true"})}function NR({setVideoRef:s,onDimensions:t}){const i=Xt.useCallback(o=>{o.videoWidth&&o.videoHeight&&(t==null||t(o.videoWidth,o.videoHeight))},[t]),a=Xt.useCallback(o=>{s(o),o&&o.readyState>=1&&i(o)},[s,i]);return Rt.jsx("video",{ref:a,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:o=>i(o.currentTarget)})}const OR=.3,zR=.22;function zs(s,t){const i=Math.min(s,t)*OR;return{x:(s-i)/2,y:(t-i)/2,size:i}}function iy(s){const t=s.size*zR;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function ay(s){const{x:t,y:i,size:a}=s;return[{x:t,y:i},{x:t+a,y:i},{x:t+a,y:i+a},{x:t,y:i+a}]}function PR(s,t,i){return s.map(a=>({x:a.x+t,y:a.y+i}))}const Wa=["R","O","Y","G","B","W"],FR={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},Xd={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},BR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let Ls={},sp=!1;function op(){return sp&&Wa.every(s=>Ls[s])}function IR(){const s={...BR};for(const t of Wa)Ls[t]&&(s[t]=Ls[t]);return s}function o_(){Ls={},sp=!1}function HR(s,t){Ls[s]=t,Wa.every(i=>Ls[i])&&(sp=!0)}function Kh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function GR(s,t,i){const a=Kh(s/255),o=Kh(t/255),c=Kh(i/255),f=a*.4124564+o*.3575761+c*.1804375,h=a*.2126729+o*.7151522+c*.072175,p=a*.0193339+o*.119192+c*.9503041,m=f/.95047>.008856?(f/.95047)**(1/3):7.787*(f/.95047)+16/116,g=h>.008856?h**(1/3):7.787*h+16/116,v=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*g-16,500*(m-g),200*(g-v)]}function Qh(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function VR(s,t,i){return Math.max(s,t,i)-Math.min(s,t,i)<28?"W":s>=t&&s>=i?t>s*.92?"O":"R":t>=s&&t>=i?"G":"B"}function kR(s,t,i,a){const o=Math.max(s,t,i);if(o<45)return!1;const c=(s+t+i)/3,f=o-Math.min(s,t,i);switch(a){case"W":return f<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=i;case"O":return s>70&&t>55&&s>=i-5;case"G":return t>45&&t>=s-12&&t>=i-5;case"B":return i>40&&i>=s-8&&i>=t-15;default:return!0}}function XR(s,t,i,a){if(a==="W")return Math.max(s,t,i)-Math.min(s,t,i)<60;if(a==="Y")return s>70&&t>60;const o=VR(s,t,i);return a==="O"?o==="O"||o==="R"||o==="Y":a==="R"?o==="R"||o==="O":o===a}function ry(s,t,i,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const c=zs(t,i),f=iy(c),h=Math.floor(f.x),p=Math.floor(f.y),m=Math.floor(f.size),g=Math.floor(f.size);if(m<=0||g<=0)return null;const v=o.getImageData(h,p,m,g).data,_=[],S=[],E=[],T=[],M=[],y=[];for(let R=0;R<v.length;R+=8){const H=v[R],nt=v[R+1],$=v[R+2];Math.max(H,nt,$)<40||(T.push(H),M.push(nt),y.push($),kR(H,nt,$,a)&&(_.push(H),S.push(nt),E.push($)))}const P=_.length>=4?_:T,L=_.length>=4?S:M,w=_.length>=4?E:y;if(P.length<4)return null;const X=Qh(P),F=Qh(L),z=Qh(w),k=GR(X,F,z),U=P.length;return{r:X,g:F,b:z,lab:k,ready:U>=6&&XR(X,F,z,a)}}function WR(s,t,i,a){const o=ry(s,t,i,a);return o!=null&&o.ready?(HR(a,o.lab),o):null}function sy(s,t){Xt.useEffect(()=>{if(!t)return;const i=a=>{var c;if(a.key!=="Enter"&&a.key!==" ")return;const o=(c=a.target)==null?void 0:c.tagName;o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||(a.preventDefault(),s())};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[s,t])}function lp({rect:s}){const t=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}:void 0;return Rt.jsx("div",{className:"guide-frame-css",style:t})}function qR({rect:s,strokeColor:t="#ffffff"}){const i=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none",borderColor:t,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.35), 0 0 12px ${t}55`}:void 0;return Rt.jsx("div",{className:"guide-spot-css",style:i})}function YR({visible:s,stepIndex:t,sample:i,ready:a,error:o,onConfirm:c,guideRect:f,spotRect:h}){const p=Wa[t]??"R";return sy(c,s&&a),s?Rt.jsxs("div",{className:"color-learn-overlay","aria-live":"polite",children:[Rt.jsx(lp,{rect:f}),Rt.jsx(qR,{rect:h,strokeColor:Xd[p]}),Rt.jsxs("div",{className:"color-learn-panel",children:[Rt.jsx("p",{className:"color-learn-target",style:{color:Xd[p]},children:FR[p]}),Rt.jsxs("p",{className:"color-learn-step",children:[t+1," / ",Wa.length]}),i&&Rt.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${i.r},${i.g},${i.b})`}}),Rt.jsx("button",{type:"button",className:"capture-button",disabled:!a,onClick:c,children:a?"Confirm":"Hold steady…"}),o&&Rt.jsx("p",{className:"color-learn-error",children:o})]})]}):null}function l_(s,t,i,a){s.drawImage(t,0,0,i,a)}function jR(s){if(s.length!==9)return s;const t=[];for(let i=0;i<3;i++)for(let a=2;a>=0;a--)t.push(s[i*3+a]);return t}function oy(s){const t=new Map;for(const[i,a]of s)t.set(i,[...a]);return t}function ly({colors:s,cellClassName:t,variant:i="overlay",orientation:a="real"}){const o=t??(i==="mini"?"face-grid-mini-cell":"cell-grid-item"),c=a==="mirror"?jR(s):s;return Rt.jsx("div",{className:`face-color-grid face-color-grid--${i}`,children:c.map((f,h)=>Rt.jsx("span",{className:o,style:{background:Xd[f]}},h))})}const ZR={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function KR({feedback:s,visible:t,guideRect:i}){if(!t)return null;const a=s.cellColors.length===9;return Rt.jsxs("div",{className:"detection-overlay","aria-live":"polite",children:[Rt.jsx(lp,{rect:i}),Rt.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[Rt.jsxs("div",{className:`detection-status ${s.status}`,children:[Rt.jsx("span",{className:"status-text",children:ZR[s.status]}),s.status==="rotate"&&Rt.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&Rt.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),a&&Rt.jsx(ly,{colors:s.cellColors,variant:"overlay",orientation:"mirror"})]})]})}function QR({phase:s,knownFaces:t,progress:i,needsNewFace:a=!1,needsClearerCenter:o=!1}){return s!=="liveScan"?null:Rt.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[Rt.jsx("div",{className:"calibration-bar",children:Rt.jsx("div",{className:"calibration-fill",style:{width:`${i*100}%`}})}),Rt.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),Rt.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),a&&Rt.jsx("p",{className:"calibration-hint",children:"Show a different face"}),o&&!a&&Rt.jsx("p",{className:"calibration-hint",children:"Center the face color in the guide"})]})}const c_=["U","F","R","B","L","D"],JR={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function qa(s){return JR[s]??null}function $R({colors:s,label:t,empty:i=!1}){const a=s&&s.length===9;return Rt.jsxs("div",{className:`face-grid-mini ${i?"face-grid-mini--empty":""}`,children:[a?Rt.jsx(ly,{colors:s,variant:"mini",orientation:"real"}):Rt.jsx("div",{className:"face-color-grid face-color-grid--mini face-color-grid--placeholder",children:Array.from({length:9},(o,c)=>Rt.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},c))}),Rt.jsx("span",{className:"face-grid-mini-label",children:t})]})}const tC={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function Jh({visible:s,scannedFaces:t}){if(!s)return null;const i=c_.filter(a=>t[a]).length;return Rt.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[Rt.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",i,"/6"]}),Rt.jsx("div",{className:"scanned-faces-bar-grid",children:c_.map(a=>Rt.jsx($R,{colors:t[a]??null,label:tC[a],empty:!t[a]},a))})]})}const cy={U:"Top",D:"Bottom",F:"Front",B:"Back",L:"Left",R:"Right"};function eC(s){const t=Us(s),i=cy[t]??t;return s.endsWith("2")?`Turn ${i} 180°`:s.endsWith("'")?`Turn ${i} counter-clockwise`:`Turn ${i} clockwise`}function nC(s){return cy[s]??s}function iC(s,t,i,a){return i?s==="lost"?"Cube lost — hold it steady in view":s==="searching"?"Center the cube in the guide":t>.15?"Keep turning…":"Follow the highlighted face and arrow":`Turn the ${nC(Us(a))} face — 3D arrow shows on the cube`}function aC({visible:s,currentMove:t,feedback:i,onSkip:a}){if(!s)return null;const{tracking:o,rotationProgress:c,wrongMove:f,faceMatchesMove:h}=i,p=f?`Wrong move (${f}) — try ${t}`:iC(o,c,h,t);return Rt.jsxs("div",{className:"solving-overlay","aria-live":"polite",children:[Rt.jsxs("div",{className:"solving-banner",children:[Rt.jsx("p",{className:"solving-move",children:t}),Rt.jsx("p",{className:"solving-description",children:eC(t)}),Rt.jsx("p",{className:`solving-hint${f?" solving-hint--wrong":""}`,children:p}),o==="locked"&&h&&Rt.jsx("div",{className:"solving-progress","aria-hidden":"true",children:Rt.jsx("div",{className:"solving-progress-fill",style:{width:`${Math.round(c*100)}%`}})})]}),a&&Rt.jsx("button",{type:"button",className:"solving-skip",onClick:a,children:"Skip step"})]})}function u_({message:s="Loading…",overlay:t=!1}){return Rt.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[Rt.jsx("div",{className:"loading-spinner"}),Rt.jsx("p",{children:s})]})}function rC({visible:s,feedback:t,guideRect:i,onStart:a}){const o=t.status==="detected"&&t.cellColors.length===9;return sy(a,s),s?Rt.jsxs("div",{className:"scan-ready-overlay","aria-live":"polite",children:[Rt.jsx(lp,{rect:i}),Rt.jsxs("div",{className:"scan-ready-panel",children:[Rt.jsx("p",{className:"scan-ready-hint",children:o?"Cube detected":"Align cube in guide"}),Rt.jsx("button",{type:"button",className:"capture-button",onClick:a,children:"Start scan"})]})]}):null}function sC({phase:s,currentStep:t,totalSteps:i}){return s!=="solving"||i===0?null:Rt.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}function oC(s){const t=["U","R","F","D","L","B"];let i="";for(const a of t){const o=s.get(a);if(!o||o.length!==9)throw new Error(`Missing face data for ${a}`);for(const c of o)i+=lC(c)}return i}function lC(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function cC(s,t){const i=new Array(9).fill(0);for(let a=0;a<3;a++)for(let o=0;o<3;o++){let c=0;for(let f=0;f<3;f++)c+=s[a*3+f]*t[f*3+o];i[a*3+o]=c}return i}function f_(){return[1,0,0,0,1,0,0,0,1]}function uC(s,t){const[i,a,o]=s,c=Math.hypot(i,a,o)||1,f=i/c,h=a/c,p=o/c,m=Math.cos(t),g=Math.sin(t),v=1-m;return[v*f*f+m,v*f*h-g*p,v*f*p+g*h,v*f*h+g*p,v*h*h+m,v*h*p-g*f,v*f*p-g*h,v*h*p+g*f,v*p*p+m]}function fC(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-B2h2yb51.js",import.meta.url),{type:"module"})}const uy=["R","O","Y","G","B","W"],hC={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function fy(){return op()?IR():hC}function dC(s,t,i){const a=$h(s/255),o=$h(t/255),c=$h(i/255);return[a*.4124564+o*.3575761+c*.1804375,a*.2126729+o*.7151522+c*.072175,a*.0193339+o*.119192+c*.9503041]}function $h(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function pC(s,t,i){const f=td(s/.95047),h=td(t/1),p=td(i/1.08883);return[116*h-16,500*(f-h),200*(h-p)]}function td(s){return s>.008856?s**(1/3):7.787*s+16/116}function hy(s,t,i){const[a,o,c]=dC(s,t,i);return pC(a,o,c)}function dy(s,t){const i=s[0]-t[0],a=s[1]-t[1],o=s[2]-t[2];return Math.sqrt(i*i+a*a+o*o)}function mC(s,t,i){const a=s/255,o=t/255,c=i/255,f=Math.max(a,o,c),h=Math.min(a,o,c),p=f-h;let m=0;p>0&&(f===a?m=(o-c)/p%6:f===o?m=(c-a)/p+2:m=(a-o)/p+4,m*=60,m<0&&(m+=360));const g=f===0?0:p/f*255,v=f*255;return[m,g,v]}function h_(s,t,i){const a=hy(s,t,i),o=fy();let c="W",f=1/0;for(const h of uy){const p=dy(a,o[h]);p<f&&(f=p,c=h)}return c}function py(s,t,i){const a=Math.max(s,t,i),o=Math.min(s,t,i);return a<38||a<70&&a-o<22}function gC(s,t,i){const a=Math.max(s,t,i),o=Math.min(s,t,i),c=a-o,f=(s+t+i)/3;return a<125||c>42||i>s+22&&i>t+12||s>t+22&&s>i+22||t>s+18&&t>i+18?!1:f>145&&c<38}function vC(s,t,i,a){const o=hy(s,t,i);return 1/(1+dy(o,fy()[a]))}function ed(s,t,i){if(py(s,t,i)||op())return h_(s,t,i);const[a,o]=mC(s,t,i),c=o/255;if(gC(s,t,i))return"W";const f=new Map;for(const m of uy)f.set(m,vC(s,t,i,m));i>=s+14&&i>=t+10&&i>75&&f.set("B",(f.get("B")??0)+.55),s>=t+12&&s>=i+12&&s>85&&f.set("R",(f.get("R")??0)+.45),t>=s+10&&t>=i+10&&t>70&&f.set("G",(f.get("G")??0)+.45),s>95&&t>85&&i<Math.min(s,t)-18&&f.set("Y",(f.get("Y")??0)+.55),s>t+8&&t>i+5&&s>110&&a>=8&&a<42&&f.set("O",(f.get("O")??0)+.45),c>.18&&(a>=38&&a<=72&&f.set("Y",(f.get("Y")??0)+.25),a>=10&&a<38&&f.set("O",(f.get("O")??0)+.2),(a<=12||a>=345)&&f.set("R",(f.get("R")??0)+.2),a>=78&&a<=155&&f.set("G",(f.get("G")??0)+.2),a>=165&&a<=255&&f.set("B",(f.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,g]of f)g>p&&(p=g,h=m);return h}function nd(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function _C(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function yC(s,t,i){const a=Math.max(s,t,i)-Math.min(s,t,i);return a>52?.15:a>36?.55:1}function xC(s,t,i,a,o,c){const f=new Map,h=[],p=[],m=[],v=o-i>40?1:2;for(let T=Math.floor(a);T<Math.floor(c);T+=v)for(let M=Math.floor(i);M<Math.floor(o);M+=v){const y=(T*t+M)*4,P=s[y],L=s[y+1],w=s[y+2];if(py(P,L,w))continue;h.push(P),p.push(L),m.push(w);const X=ed(P,L,w),F=yC(P,L,w);f.set(X,(f.get(X)??0)+F)}if(h.length===0){const T=Math.floor((i+o)/2),y=(Math.floor((a+c)/2)*t+T)*4;return ed(s[y],s[y+1],s[y+2])}const _=ed(nd(h),nd(p),nd(m));f.set(_,(f.get(_)??0)+3);let S=_,E=0;for(const[T,M]of f)M>E&&(E=M,S=T);return S}function SC(s,t,i){const o=s.getImageData(0,0,t,i).data,c=[],f=t/3,h=i/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=_C(p,m),v=m*f+f*g,_=m*f+f*(1-g),S=p*h+h*g,E=p*h+h*(1-g);c.push(xC(o,t,v,S,_,E))}return c}function $o(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function MC(s){const t=$o();for(const i of s)t[i]++;return t}function my(s){return!!(s&&s.length===9)}function EC(s){if(!my(s))return{valid:!1,colorCounts:$o(),detectedCenter:null,uniqueColors:0};const t=MC(s),i=Object.values(t).filter(a=>a>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:i}}const TC={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},tl=["W","Y","R","O","G","B"],eu=9,bC={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function cp(s){const t=$o();for(const i of s.values())for(const a of i)t[a]++;return t}function AC(s,t){return bC[s][t]??6}function RC(s){let t=null,i=0;for(const a of tl){const o=s[a]-eu;o>i&&(i=o,t=a)}return t}function CC(s){let t=null,i=0;for(const a of tl){const o=eu-s[a];o>i&&(i=o,t=a)}return t}function gy(s){return tl.every(t=>s[t]===eu)}function wC(s){const t=new Map;for(const[a,o]of s){const c=[...o];c[4]=TC[a],t.set(a,c)}const i=[];for(const[a,o]of t)for(let c=0;c<9;c++)c!==4&&i.push({faceId:a,index:c,color:o[c]});for(let a=0;a<256;a++){const o=cp(t);if(gy(o))break;const c=RC(o),f=CC(o);if(!c||!f)break;let h=null,p=1/0;for(const m of i){if(m.color!==c)continue;const g=AC(c,f);g<p&&(p=g,h=m)}if(!h){const m=i.find(g=>g.color===c);if(!m)break;h=m}h.color=f,t.get(h.faceId)[h.index]=f}return t}function DC(s){const t=cp(s),i=$o();for(const a of tl)i[a]=t[a]-eu;return i}function d_(s){return gy(cp(s))}function UC(s){const t=DC(s),i={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},a=tl.filter(o=>t[o]!==0).map(o=>{const c=t[o];return`${i[o]}${c>0?`+${c}`:c}`});return a.length>0?a.join(", "):""}const Ms=256;function vy(s,t){const i=document.createElement("canvas");i.width=Ms,i.height=Ms;const a=i.getContext("2d",{willReadFrequently:!0});return a?(a.drawImage(s,t.x,t.y,t.size,t.size,0,0,Ms,Ms),SC(a,Ms,Ms)):[]}function _y(s,t){const i=s.getContext("2d",{willReadFrequently:!0});if(!i)return 0;const{x:a,y:o,size:c}=t,f=i.getImageData(Math.floor(a),Math.floor(o),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let v=0;v<f.length;v+=32){const _=(f[v]+f[v+1]+f[v+2])/3;h+=_,p+=_*_,m++}if(m===0)return 0;const g=h/m;return p/m-g*g}function yy(s,t){if(s.length!==9)return!1;const i=new Set(s),a=s.filter(o=>o!=="W").length;return t<120?!1:i.size===1?!0:i.size===2&&a<=3&&t<300?!1:i.size>=3&&a>=2||i.size>=2&&a>=4&&t>220}function LC(s){if(s.length<4)return null;const t=[...s].sort((o,c)=>o.y-c.y),i=t.slice(0,2).sort((o,c)=>o.x-c.x),a=t.slice(2,4).sort((o,c)=>o.x-c.x);return[i[0],i[1],a[1],a[0]]}function xy(s,t){const i=s*.9,a=s*.9,o=s/2,c=t/2;return{fx:i,fy:a,cx:o,cy:c}}function Sy(s,t,i,a=null){try{return NC(s,t,i,a)}catch{return My(s,t,i,a)}}function My(s,t,i,a){const o={x:s.reduce((g,v)=>g+v.x,0)/4,y:s.reduce((g,v)=>g+v.y,0)/4},c=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2,{fx:f,fy:h,cx:p,cy:m}=xy(t,i);return{corners:s,center:o,size:c,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[0,0,c*3],confidence:.55,visibleFace:a,cameraFx:f,cameraFy:h,cameraCx:p,cameraCy:m}}function NC(s,t,i,a){const{fx:o,fy:c,cx:f,cy:h}=xy(t,i),p=a?[a,...n_.filter(v=>v!==a)]:n_;let m=null,g=1/0;for(const v of p){const _=xR[v];for(let S=0;S<4;S++){const E=ER(s,S),T=OC(_,E,v,o,c,f,h);if(!T)continue;const M=zC(_,T,E,o,c,f,h);M<g&&(g=M,m={...T,confidence:Math.max(.5,1-M/40)})}}return m||My(s,t,i,a)}function OC(s,t,i,a,o,c,f){const h=window.cv,p=h.matFromArray(4,1,h.CV_32FC1,s.flat()),m=h.matFromArray(4,1,h.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),g=h.matFromArray(3,3,h.CV_32FC1,[a,0,c,0,o,f,0,0,1]),v=h.matFromArray(4,1,h.CV_32FC1,[0,0,0,0]),_=new h.Mat,S=new h.Mat,E=new h.Mat;h.solvePnP(p,m,g,v,_,S),h.Rodrigues(_,E);const T=[];for(let L=0;L<9;L++)T.push(E.data32F[L]??E.floatAt(Math.floor(L/3),L%3));const M=[S.data32F[0]??S.floatAt(0,0),S.data32F[1]??S.floatAt(1,0),S.data32F[2]??S.floatAt(2,0)],y={x:t.reduce((L,w)=>L+w.x,0)/4,y:t.reduce((L,w)=>L+w.y,0)/4},P=(Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y)+Math.hypot(t[2].x-t[3].x,t[2].y-t[3].y))/2;return p.delete(),m.delete(),g.delete(),v.delete(),_.delete(),S.delete(),E.delete(),{corners:t,center:y,size:P,rotationMatrix:T,translation:M,confidence:.8,visibleFace:i,cameraFx:a,cameraFy:o,cameraCx:c,cameraCy:f}}function zC(s,t,i,a,o,c,f){const h=t.rotationMatrix,p=t.translation;let m=0;for(let g=0;g<4;g++){const v=s[g],_=h[0]*v[0]+h[1]*v[1]+h[2]*v[2]+p[0],S=h[3]*v[0]+h[4]*v[1]+h[5]*v[2]+p[1],E=h[6]*v[0]+h[7]*v[1]+h[8]*v[2]+p[2];if(E<1e-4)return 1/0;const T=a*_/E+c,M=o*S/E+f;m+=Math.hypot(T-i[g].x,M-i[g].y)}return m/4}function PC(s){const t=(o,c)=>Math.hypot(o.x-c.x,o.y-c.y),i=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],a=i.reduce((o,c)=>o+c,0)/4;return a<1?!1:i.every(o=>Math.abs(o-a)/a<.55)}function FC(s,t,i,a){const o=i*a;let c=null,f=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<o*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const v of[.02,.035,.05,.08]){const _=new t.Mat;if(t.approxPolyDP(p,_,v*g,!0),_.rows===4){const S=[];for(let T=0;T<4;T++)S.push({x:_.data32S[T*2],y:_.data32S[T*2+1]});const E=LC(S);E&&PC(E)&&m>f&&(f=m,c=E)}_.delete()}p.delete()}return c}function p_(s,t,i){var a;if(!((a=window.cv)!=null&&a.Mat))return null;try{const o=window.cv,c=o.imread(s),f=new o.Mat,h=new o.Mat,p=new o.Mat,m=new o.Mat,g=new o.MatVector,v=new o.Mat;o.cvtColor(c,f,o.COLOR_RGBA2RGB),o.cvtColor(f,h,o.COLOR_RGB2GRAY),o.GaussianBlur(h,p,new o.Size(5,5),0),o.Canny(p,m,20,80),o.findContours(m,g,v,o.RETR_LIST,o.CHAIN_APPROX_SIMPLE);const _=FC(g,o,t,i);return c.delete(),f.delete(),h.delete(),p.delete(),m.delete(),g.delete(),v.delete(),_}catch{return null}}function BC(s,t,i){const a=zs(t,i),o=vy(s,a),c=_y(s,a);return yy(o,c)?{corners:ay(a),colors:o}:null}function Ey(s,t,i){const a=zs(t,i),o=document.createElement("canvas");o.width=a.size,o.height=a.size;const c=o.getContext("2d");if(c){c.drawImage(s,a.x,a.y,a.size,a.size,0,0,a.size,a.size);const p=p_(o,a.size,a.size);if(p)return PR(p,a.x,a.y)}const f=p_(s,t,i);if(f)return f;const h=BC(s,t,i);return(h==null?void 0:h.corners)??null}function m_(s,t,i){const a=zs(t,i),o=vy(s,a),c=_y(s,a);if(!yy(o,c))return null;const f=Ey(s,t,i),h=o[4]?qa(o[4]):null,p=Sy(f??ay(a),t,i,h);return p.confidence=f?.85:.7,{colors:o,pose:p}}function IC(s){const t=window.cv,i=t.imread(s),a=new t.Mat;return t.cvtColor(i,a,t.COLOR_RGBA2GRAY),i.delete(),a}const g_=45;class HC{constructor(){Le(this,"prevGray",null);Le(this,"trackedCorners",null);Le(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const a=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const o=a.matFromArray(4,1,a.CV_32FC2,GC(this.trackedCorners)),c=new a.Mat,f=new a.Mat,h=new a.Mat;a.calcOpticalFlowPyrLK(this.prevGray,t,o,c,f,h);const p=[];let m=0;for(let v=0;v<4;v++){const _=f.data[v]===1,S=c.data32F[v*2],E=c.data32F[v*2+1];_&&Number.isFinite(S)&&Number.isFinite(E)?(p.push({x:S,y:E}),m++):p.push(this.trackedCorners[v])}return o.delete(),c.delete(),f.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>g_?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames=0,this.lostFrames>g_?(this.reset(),null):this.trackedCorners)}}function GC(s){return s.flatMap(t=>[t.x,t.y])}function sa(s,t,i){return s*(1-i)+t*i}function VC(s,t,i){return s.map((a,o)=>({x:sa(a.x,t[o].x,i),y:sa(a.y,t[o].y,i)}))}class kC{constructor(){Le(this,"state",null)}reset(){this.state=null}update(t,i=.38){if(!this.state||t.confidence<.4)return this.state=t,t;const a=t.confidence>.75?i:i*.55,o=t.rotationMatrix.map((g,v)=>sa(this.state.rotationMatrix[v],g,a)),c=[sa(this.state.translation[0],t.translation[0],a),sa(this.state.translation[1],t.translation[1],a),sa(this.state.translation[2],t.translation[2],a)],f=VC(this.state.corners,t.corners,a),h={x:sa(this.state.center.x,t.center.x,a),y:sa(this.state.center.y,t.center.y,a)},p=sa(this.state.size,t.size,a),m={...t,corners:f,center:h,size:p,rotationMatrix:o,translation:c,confidence:Math.max(this.state.confidence,t.confidence)*.92+t.confidence*.08};return this.state=m,m}}const XC=.9,WC=12,qC=10,YC=.28,jC=.82,ZC=.8,v_=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];class KC{constructor(){Le(this,"state",{lastMatrix:f_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0});Le(this,"initialized",!1);Le(this,"expectedMove",null)}reset(){this.state={lastMatrix:f_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0},this.initialized=!1,this.expectedMove=null}setExpectedMove(t){this.expectedMove=t,this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,this.initialized=!0}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,{completedMove:null,progress:0,wrongMove:null};const i=cC(JC(t),this.state.lastMatrix);if(Ty(i)<YC)return this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:null,progress:0,wrongMove:null};const o=this.expectedMove?QC(i,this.expectedMove):0,c=this.expectedMove?[this.expectedMove]:v_,f=__(i,c);if(f){const h=up(f),p=Math.abs(by(i,h)),m=Math.abs(tu(f))*jC;if(p<m||o<ZC)return this.state.pendingMove=null,this.state.stableCount=0,{completedMove:null,progress:o,wrongMove:null};if(this.state.pendingMove===f){if(this.state.stableCount++,this.state.stableCount>=WC)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:f,progress:1,wrongMove:null}}else this.state.pendingMove=f,this.state.stableCount=1;this.state.wrongMove=null,this.state.wrongStableCount=0}else if(this.expectedMove){const h=__(i,v_);if(h&&h!==this.expectedMove){if(this.state.wrongMove===h?this.state.wrongStableCount++:(this.state.wrongMove=h,this.state.wrongStableCount=1),this.state.wrongStableCount>=qC)return{completedMove:null,progress:o,wrongMove:h}}else this.state.wrongMove=null,this.state.wrongStableCount=0;this.state.pendingMove=null,this.state.stableCount=0}else this.state.pendingMove=null,this.state.stableCount=0;return{completedMove:null,progress:o,wrongMove:null}}}function Ty(s){const t=s[0]+s[4]+s[8],i=Math.max(-1,Math.min(1,(t-1)/2));return Math.acos(i)}function up(s){const t=Us(s);let i=bR[t];return(t==="L"||t==="D"||t==="B")&&(i=[-i[0],-i[1],-i[2]]),i}function by(s,t){const i=Ty(s),a=Math.sin(i);if(Math.abs(a)<1e-5)return 0;const o=[(s[7]-s[5])/(2*a),(s[2]-s[6])/(2*a),(s[3]-s[1])/(2*a)];return(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])*i}function QC(s,t){const i=up(t),a=tu(t),o=by(s,i);return Math.abs(a)<1e-6||Math.sign(o)!==Math.sign(a)&&Math.abs(o)>.15?0:Math.min(1,Math.abs(o)/Math.abs(a))}function JC(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function __(s,t){let i=null,a=XC;for(const o of t){const c=up(o),f=uC(c,tu(o)),h=$C(s,f);h>a&&(a=h,i=o)}return i}function $C(s,t){let i=0;for(let a=0;a<9;a++)i+=1-Math.abs(s[a]-t[a])/2;return i/9}const t2=30,zc={pose:null,detectedFace:null,rotationMove:null,rotationProgress:0,wrongMove:null};class e2{constructor(){Le(this,"rotationDetector",new KC);Le(this,"flowTracker",new HC);Le(this,"poseSmoother",new kC);Le(this,"trackingEnabled",!1);Le(this,"processCanvas");Le(this,"processCtx");Le(this,"lastColors",null);Le(this,"expectedMove",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset(),this.lastColors=null}setExpectedMove(t){t!==this.expectedMove&&(this.expectedMove=t,this.rotationDetector.setExpectedMove(t))}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const i=t.videoWidth,a=t.videoHeight;return!i||!a?!1:(this.processCanvas.width=i,this.processCanvas.height=a,l_(this.processCtx,t,i,a),!0)}getColorLearnSample(t,i,a){return ry(this.processCanvas,t,i,a)}process(t){const i=t.videoWidth,a=t.videoHeight;if(!i||!a)return{...zc};this.processCanvas.width=i,this.processCanvas.height=a,l_(this.processCtx,t,i,a);try{return this.trackingEnabled?this.processWithTracking(i,a):this.processDetectionOnly(i,a)}catch{return{...zc}}}processDetectionOnly(t,i){const a=m_(this.processCanvas,t,i);return a?(this.lastColors=a.colors,{pose:a.pose,detectedFace:a,rotationMove:null,rotationProgress:0,wrongMove:null}):{...zc}}processWithTracking(t,i){const a=Ey(this.processCanvas,t,i),o=IC(this.processCanvas),c=this.flowTracker.update(o,a);if(o.delete(),!c)return{...zc};let f=this.lastColors;if(a){const _=m_(this.processCanvas,t,i);_&&(f=_.colors,this.lastColors=f)}const h=f!=null&&f[4]?qa(f[4]):null;let p=Sy(c,t,i,h);const m=this.flowTracker.getLostFrames();p.confidence=a?.85:Math.max(.35,.85-m*.01),p=this.poseSmoother.update(p);const g=f?{colors:f,pose:p}:null,v=this.rotationDetector.update(p.rotationMatrix);return{pose:p,detectedFace:g,rotationMove:v.completedMove,rotationProgress:v.progress,wrongMove:v.wrongMove}}isTrackingLost(){return this.flowTracker.getLostFrames()>t2}readStableFace(t,i=5){const a=[];let o=null;for(let f=0;f<i;f++){const h=this.process(t);if(!h.detectedFace)return null;a.push(h.detectedFace.colors),o=h.detectedFace.pose}return o?{colors:n2(a),pose:o}:null}}function n2(s){const t=[];for(let i=0;i<9;i++){const a=new Map;for(const f of s){const h=f[i];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[f,h]of a)h>c&&(c=h,o=f);t.push(o)}return t}const i2=[0,1,2,3,5,6,7,8],Pc=2e3,a2=10,r2=7,s2=6;function o2(s,t){let i=0;for(const a of i2)s[a]===t[a]&&i++;return i}function l2(s,t){let i=0;for(let a=0;a<9;a++)s[a]===t[a]&&i++;return i}function c2(s,t){return o2(s,t)>=r2}function Ay(s,t){for(const[i,a]of t)if(c2(s,a))return i;return null}function u2(s){const t=[];for(let i=0;i<9;i++){const a=new Map;for(const f of s){const h=f[i];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[f,h]of a)h>c&&(c=h,o=f);t.push(o)}return t}function f2(s){if(s.length===0)return null;const t=new Map;for(const o of s){const c=o[4];t.set(c,(t.get(c)??0)+1)}let i=null,a=0;for(const[o,c]of t)c>a&&(a=c,i=o);return i}function h2(s,t,i){if(Ay(s,t))return null;for(const a of[f2(i),s[4]]){if(!a)continue;const o=qa(a);if(o&&!t.has(o))return o}return null}function y_(s){if(s.size!==6)return s;const t=new Map,i=new Set,a=[...s.entries()].sort((o,c)=>{const f=qa(o[1][4])===o[0]?0:1,h=qa(c[1][4])===c[0]?0:1;return f-h});for(const[,o]of a){const c=qa(o[4]);c&&!i.has(c)&&(t.set(c,[...o]),i.add(c))}return t.size===6?t:s}class d2{constructor(){Le(this,"faces",new Map);Le(this,"pendingReadings",[]);Le(this,"stableSinceMs",null);Le(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,i=Date.now()){const a=Pc/1e3,o={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1,needsClearerCenter:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],o;const c=qa(t[4]),f=Ay(t,this.faces);if(f)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...o,currentFace:f,needsNewFace:!0};!this.stabilityAnchor||l2(t,this.stabilityAnchor)<s2?(this.stabilityAnchor=[...t],this.stableSinceMs=i,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=i);const h=this.stableSinceMs!==null?i-this.stableSinceMs:0,p=Math.min(h,Pc)/1e3;let m=null,g=!1;if(h>=Pc){const v=[...this.pendingReadings,[...t]];v.length>a2&&v.shift(),this.pendingReadings=v;const _=u2(v),S=h2(_,this.faces,v);if(S){const E=!this.faces.has(S);this.faces.set(S,[..._]),E&&(m=S),this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}else g=!0,this.stableSinceMs=i-Pc+400}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1,needsClearerCenter:g}}}const p2="https://docs.opencv.org/4.9.0/opencv.js";let Fc=null;function m2(){return Fc||(Fc=new Promise((s,t)=>{var a;if((a=window.cv)!=null&&a.Mat){s();return}const i=document.createElement("script");i.src=p2,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},i.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(i)}),Fc)}function x_(s){return Object.fromEntries(oy(s))}const Bo={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:$o(),cellColors:[]},Wc={tracking:"searching",rotationProgress:0,wrongMove:null,visibleFace:null,faceMatchesMove:!1},g2={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:Bo,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,liveScanNeedsClearerCenter:!1,solvingFeedback:Wc};function v2(s){const[t,i]=Xt.useState(g2),a=Xt.useRef(null),o=Xt.useRef(null),c=Xt.useRef(new d2),f=Xt.useRef(""),h=Xt.useRef(0),p=Xt.useRef(0),m=Xt.useRef("loading"),g=Xt.useRef(0),v=Xt.useRef(null),_=Xt.useRef(0),S=Xt.useRef(0),E=Xt.useRef(null),T=Xt.useRef(null),M=Xt.useRef(!1),y=Xt.useRef(0),P=Xt.useRef(null),L=Xt.useCallback(D=>{var W;D!==P.current&&(P.current=D,(W=a.current)==null||W.setExpectedMove(D))},[]),w=Xt.useCallback(()=>{E.current&&(clearTimeout(E.current),E.current=null)},[]),X=Xt.useCallback((D,W,at,G)=>{var yt;const lt=o.current;if(!lt){i(Ct=>({...Ct,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}w();const gt=++p.current;lt.postMessage({type:"solve",facelet:D,scannedFaces:Object.fromEntries(at),captures:G,id:gt}),(yt=a.current)==null||yt.syncPose(W),E.current=setTimeout(()=>{i(Ct=>Ct.phase!=="computing"?Ct:{...Ct,phase:"error",error:"Solve timed out. Colors may have been misread — re-scan in steady light."})},25e3)},[w]);Xt.useEffect(()=>{m.current=t.phase,v.current=t.solution,g.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const F=Xt.useCallback(D=>{var at;const W=++p.current;(at=o.current)==null||at.postMessage({type:"apply",move:D,facelet:f.current,id:W}),i(G=>{if(!G.solution)return G;const lt=G.solution.moves[G.solution.currentIndex];if(D!==lt)return G;const gt=G.solution.currentIndex+1;return gt>=G.solution.moves.length?{...G,phase:"solved",solution:{...G.solution,currentIndex:gt},solvingFeedback:Wc}:{...G,solution:{...G.solution,currentIndex:gt},solvingFeedback:{...Wc,tracking:"locked"}}}),S.current=Date.now()},[]),z=Xt.useCallback((D,W,at,G,lt,gt)=>{const{detectedCenter:yt,colorCounts:Ct}=EC(W),qt=my(W);let Ht="searching";return!D||!qt?Ht="searching":gt?Ht="rotate":lt?Ht="captured":at>0&&at<G?Ht="stabilizing":Ht="detected",{status:Ht,stableProgress:at,stableTarget:G,detectedCenter:yt,colorCounts:Ct,cellColors:qt&&W?[...W]:[]}},[]),k=Xt.useCallback(()=>{var D;c.current.reset(),M.current=!1,T.current=null,i(W=>({...W,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Bo,liveScanNeedsClearerCenter:!1})),(D=a.current)==null||D.disableTracking(),P.current=null},[]),U=Xt.useCallback(()=>{var D;c.current.reset(),M.current=!1,T.current=null,i(W=>({...W,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Bo,liveScanNeedsClearerCenter:!1})),(D=a.current)==null||D.disableTracking(),P.current=null},[]),R=Xt.useCallback(async()=>{try{await m2(),a.current=new e2;const D=fC();o.current=D,D.onmessage=W=>{var G,lt;const at=W.data;if(at.type==="ready")i(gt=>({...gt,solverReady:!0}));else if(at.type==="solution"){if(at.id!==p.current)return;w(),f.current=at.facelet,_.current=Date.now(),S.current=Date.now(),i(gt=>({...gt,phase:at.moves.length===0?"solved":"solving",solution:{moves:at.moves,currentIndex:0},detectionFeedback:Bo,solvingFeedback:Wc})),at.moves.length>0&&((G=a.current)==null||G.enableTracking(),T.current&&((lt=a.current)==null||lt.syncPose(T.current)),L(at.moves[0]??null))}else if(at.type==="facelet"){if(at.id!==p.current)return;f.current=at.facelet}else if(at.type==="error"){if(at.id!==void 0&&at.id!==p.current)return;w(),M.current=!1,i(gt=>({...gt,phase:"error",error:at.message}))}},D.onerror=()=>{w(),i(W=>({...W,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},D.postMessage({type:"init"}),o_(),c.current.reset(),i(W=>({...W,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(D){i(W=>({...W,phase:"error",error:D instanceof Error?D.message:"Init failed"}))}},[w]);Xt.useEffect(()=>(R(),()=>{var D,W;cancelAnimationFrame(h.current),w(),(D=o.current)==null||D.terminate(),(W=a.current)==null||W.disableTracking()}),[R,w]);const H=Xt.useCallback(()=>{const D=s.current,W=a.current;if(!D||!W||D.readyState<2||!W.captureFrame(D))return;const at=g.current,G=Wa[at];if(!G)return;const lt=W.getFrameCanvas();if(!WR(lt,D.videoWidth,D.videoHeight,G)){i(Ct=>({...Ct,colorLearnError:`Could not read ${G}. Center the sticker in the circle.`}));return}const yt=at+1;if(yt>=Wa.length){k(),i(Ct=>({...Ct,colorsCalibrated:!0,colorLearnError:null}));return}i(Ct=>({...Ct,colorLearnIndex:yt,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,k]),nt=Xt.useCallback(()=>{U()},[U]),$=Xt.useCallback(()=>{var ze,Ne,he;const D=s.current,W=a.current;if(!D||!W||D.readyState<2)return;const at=W.process(D),G=m.current;if(G==="colorLearn"){W.captureFrame(D);const I=Wa[g.current];if(I){const We=W.getColorLearnSample(D.videoWidth,D.videoHeight,I);i(Qt=>({...Qt,colorLearnSample:We,colorLearnReady:(We==null?void 0:We.ready)??!1,colorLearnError:null}))}return}if(G==="scanReady"){const I=((ze=at.detectedFace)==null?void 0:ze.colors)??null,We=!!at.pose;i(Qt=>({...Qt,detectionFeedback:z(We,I,0,0,!1,!1)}));return}if(G==="liveScan"){if(!op()){i(Gt=>({...Gt,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const I=((Ne=at.detectedFace)==null?void 0:Ne.colors)??null,We=!!at.pose;at.pose&&(T.current=at.pose);const Qt=c.current.update(I),pe=!!Qt.newlyCaptured;if(Qt.isComplete&&T.current&&!M.current){M.current=!0;const Gt=y_(oy(Qt.faces)),be=x_(Gt);try{let Bt=Gt;if(!d_(Bt)&&(Bt=wC(Gt),!d_(Bt))){const ht=UC(Gt);i(Mt=>({...Mt,phase:"error",scannedFaceColors:be,error:ht?`Color mismatch (${ht}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const N=oC(Bt),A=T.current,it=[...Bt.values()].map(ht=>[...ht]);i(ht=>({...ht,phase:"computing",knownFaces:Qt.knownFaces,scannedFaceColors:be,liveScanProgress:1,currentPose:A})),queueMicrotask(()=>X(N,A,Bt,it))}catch(Bt){i(N=>({...N,phase:"error",scannedFaceColors:be,error:Bt instanceof Error?Bt.message:"Failed to build cube state"}))}return}i(Gt=>({...Gt,currentPose:at.pose,knownFaces:Qt.knownFaces,scannedFaceColors:x_(y_(Qt.faces)),currentVisibleFace:Qt.currentFace,liveScanProgress:Qt.knownFaces.length/6,liveScanNeedsClearerCenter:Qt.needsClearerCenter,detectionFeedback:z(We,I,Qt.stableProgress,Qt.stableTarget,pe,Qt.needsNewFace)}));return}if(i(I=>({...I,currentPose:at.pose})),G!=="solving")return;const lt=v.current,gt=lt&&lt.currentIndex<lt.moves.length?lt.moves[lt.currentIndex]:null;L(gt??null);const yt=(he=at.detectedFace)!=null&&he.colors[4]?qa(at.detectedFace.colors[4]):null,Ct=gt?Us(gt):null,qt=!!(yt&&Ct&&yt===Ct);let Ht="searching";if(at.pose?at.pose.confidence<.55||W.isTrackingLost()?Ht="searching":(y.current=0,Ht="locked"):(y.current++,Ht=y.current>12?"lost":"searching"),i(I=>({...I,solvingFeedback:{tracking:Ht,rotationProgress:at.rotationProgress,wrongMove:at.wrongMove,visibleFace:yt,faceMatchesMove:qt}})),!!at.rotationMove&&!(Date.now()-_.current<2e3)&&!(Date.now()-S.current<1800)&&Ht==="locked"&&!(at.rotationProgress<.78)&&qt&&lt&&gt&&at.rotationMove===gt){F(at.rotationMove),at.pose&&W.syncPose(at.pose);const I=lt.moves[lt.currentIndex+1]??null;L(I),y.current=0,S.current=Date.now()}},[s,F,z,X,L]),ct=Xt.useCallback(()=>{$(),h.current=requestAnimationFrame(ct)},[$]),mt=Xt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(ct)},[ct]),O=Xt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),J=Xt.useCallback(()=>{w(),k(),i(D=>({...D,solution:null}))},[w,k]),Q=Xt.useCallback(()=>{var D;w(),M.current=!1,c.current.reset(),T.current=null,o_(),(D=a.current)==null||D.disableTracking(),i(W=>({...W,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:Bo,liveScanNeedsClearerCenter:!1}))},[w]),St=Xt.useCallback(()=>{var lt;const D=v.current;if(!D||D.currentIndex>=D.moves.length)return;const W=D.moves[D.currentIndex];if(!W)return;const at=D.moves[D.currentIndex+1]??null;F(W);const G=T.current;G&&((lt=a.current)==null||lt.syncPose(G)),L(at),y.current=0,S.current=Date.now()},[F,L]),Tt=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:Tt,confirmColorLearn:H,startLiveScan:nt,retryLiveScan:J,retryColorLearn:Q,startTracking:mt,stopTracking:O,skipCurrentMove:St}}function _2(){const s=Xt.useRef(null),t=Xt.useRef(null),[i,a]=Xt.useState({stream:null,error:null,isReady:!1}),o=Xt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Xt.useCallback(p=>{s.current=p,p&&o(p)},[o]),f=Xt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await o(m),a({stream:p,error:null,isReady:!0})}catch(p){t.current=null,a({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[o]),h=Xt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),a({stream:null,error:null,isReady:!1})},[]);return Xt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:i,start:f,stop:h}}function Ry(s,t,i,a){const o=Math.max(i/s,a/t),c=s*o,f=t*o;return{scale:o,offsetX:(i-c)/2,offsetY:(a-f)/2}}function y2(s,t,i,a){if(!s||!t||!i||!a)return null;const o=zs(s,t),{scale:c,offsetX:f,offsetY:h}=Ry(s,t,i,a);return{left:f+o.x*c,top:h+o.y*c,width:o.size*c,height:o.size*c}}function x2(s,t,i,a){if(!s||!t||!i||!a)return null;const o=zs(s,t),c=iy(o),{scale:f,offsetX:h,offsetY:p}=Ry(s,t,i,a);return{left:h+c.x*f,top:p+c.y*f,width:c.size*f,height:c.size*f}}const S2="1.1.0";function M2(){var nt,$;const{videoRef:s,setVideoRef:t,state:i,start:a}=_2(),{state:o,currentMove:c,confirmColorLearn:f,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:g,stopTracking:v,skipCurrentMove:_}=v2(s),S=Xt.useRef(null),[E,T]=Xt.useState({width:0,height:0}),[M,y]=Xt.useState({width:0,height:0});Xt.useEffect(()=>{a()},[a]),Xt.useEffect(()=>{if(i.isReady&&o.phase!=="loading")return g(),v},[i.isReady,o.phase,g,v]);const P=Xt.useCallback((ct,mt)=>{T({width:ct,height:mt})},[]);Xt.useEffect(()=>{const ct=S.current;if(!ct)return;const mt=()=>{y({width:ct.clientWidth,height:ct.clientHeight})};mt();const O=new ResizeObserver(mt);return O.observe(ct),()=>O.disconnect()},[]);const L=Xt.useMemo(()=>y2(E.width,E.height,M.width,M.height),[E.width,E.height,M.width,M.height]),w=Xt.useMemo(()=>x2(E.width,E.height,M.width,M.height),[E.width,E.height,M.width,M.height]),X=o.phase==="loading"||!i.isReady,F=!!(o.error||i.error),z=o.phase==="computing",k=o.phase==="solving",U=((nt=o.solution)==null?void 0:nt.moves.length)??0,R=((($=o.solution)==null?void 0:$.currentIndex)??0)+1,H=o.phase==="liveScan"||o.phase==="computing"||F&&Object.keys(o.scannedFaceColors).length>0;return Rt.jsxs("main",{className:"app",children:[Rt.jsxs("div",{className:`viewport${o.phase==="liveScan"?" viewport--scanning":""}`,ref:S,children:[Rt.jsx(NR,{setVideoRef:t,onDimensions:P}),!X&&!F&&Rt.jsxs(Rt.Fragment,{children:[Rt.jsx(LR,{pose:o.currentPose,move:c,rotationProgress:o.solvingFeedback.rotationProgress,frameWidth:E.width,frameHeight:E.height,active:k}),Rt.jsx(YR,{visible:o.phase==="colorLearn",stepIndex:o.colorLearnIndex,sample:o.colorLearnSample,ready:o.colorLearnReady,error:o.colorLearnError,onConfirm:f,guideRect:L,spotRect:w}),Rt.jsx(rC,{visible:o.phase==="scanReady",feedback:o.detectionFeedback,guideRect:L,onStart:h}),Rt.jsx(Jh,{visible:H,scannedFaces:o.scannedFaceColors}),Rt.jsx(KR,{feedback:o.detectionFeedback,visible:o.phase==="liveScan",guideRect:L}),Rt.jsx(sC,{phase:o.phase,currentStep:R,totalSteps:U}),Rt.jsx(QR,{phase:o.phase,knownFaces:o.knownFaces,progress:o.liveScanProgress,needsNewFace:o.detectionFeedback.status==="rotate",needsClearerCenter:o.liveScanNeedsClearerCenter}),Rt.jsx(aC,{visible:o.phase==="solving"&&!!c,currentMove:c,feedback:o.solvingFeedback,onSkip:_}),o.phase==="solved"&&Rt.jsx("div",{className:"solved-banner",children:Rt.jsx("p",{children:"Done"})})]}),z&&Rt.jsxs(Rt.Fragment,{children:[Rt.jsx(Jh,{visible:H,scannedFaces:o.scannedFaceColors}),Rt.jsx(u_,{overlay:!0,message:"Computing…"})]}),X&&Rt.jsx(u_,{overlay:!0,message:o.phase==="loading"?"Loading…":"Camera…"}),F&&!X&&Rt.jsxs("div",{className:"error-screen overlay",children:[Rt.jsx(Jh,{visible:H,scannedFaces:o.scannedFaceColors}),Rt.jsx("p",{children:o.error??i.error}),Rt.jsxs("div",{className:"error-actions",children:[o.colorsCalibrated&&Rt.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),Rt.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]}),Rt.jsxs("p",{className:"app-version","aria-hidden":"true",children:["v",S2]})]})}jS({immediate:!0});XS.createRoot(document.getElementById("root")).render(Rt.jsx(Xt.StrictMode,{children:Rt.jsx(M2,{})}));
