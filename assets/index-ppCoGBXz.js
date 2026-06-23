var WS=Object.defineProperty;var qS=(s,t,n)=>t in s?WS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var Te=(s,t,n)=>qS(s,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var mh={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function YS(){if(t0)return Lo;t0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Lo.Fragment=t,Lo.jsx=n,Lo.jsxs=n,Lo}var e0;function jS(){return e0||(e0=1,mh.exports=YS()),mh.exports}var At=jS(),gh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function ZS(){if(n0)return oe;n0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(D,W,nt){this.props=D,this.context=W,this.refs=M,this.updater=nt||E}y.prototype.isReactComponent={},y.prototype.setState=function(D,W){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,W,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function z(){}z.prototype=y.prototype;function L(D,W,nt){this.props=D,this.context=W,this.refs=M,this.updater=nt||E}var w=L.prototype=new z;w.constructor=L,T(w,y.prototype),w.isPureReactComponent=!0;var X=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function U(D,W,nt){var G=nt.ref;return{$$typeof:s,type:D,key:W,ref:G!==void 0?G:null,props:nt}}function R(D,W){return U(D.type,W,D.props)}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function it(D){var W={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(nt){return W[nt]})}var J=/\/+/g;function ct(D,W){return typeof D=="object"&&D!==null&&D.key!=null?it(""+D.key):W.toString(36)}function gt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(F,F):(D.status="pending",D.then(function(W){D.status==="pending"&&(D.status="fulfilled",D.value=W)},function(W){D.status==="pending"&&(D.status="rejected",D.reason=W)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function O(D,W,nt,G,lt){var mt=typeof D;(mt==="undefined"||mt==="boolean")&&(D=null);var yt=!1;if(D===null)yt=!0;else switch(mt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(D.$$typeof){case s:case t:yt=!0;break;case v:return yt=D._init,O(yt(D._payload),W,nt,G,lt)}}if(yt)return lt=lt(D),yt=G===""?"."+ct(D,0):G,X(lt)?(nt="",yt!=null&&(nt=yt.replace(J,"$&/")+"/"),O(lt,W,nt,"",function(Ht){return Ht})):lt!=null&&(H(lt)&&(lt=R(lt,nt+(lt.key==null||D&&D.key===lt.key?"":(""+lt.key).replace(J,"$&/")+"/")+yt)),W.push(lt)),1;yt=0;var Ct=G===""?".":G+":";if(X(D))for(var qt=0;qt<D.length;qt++)G=D[qt],mt=Ct+ct(G,qt),yt+=O(G,W,nt,mt,lt);else if(qt=x(D),typeof qt=="function")for(D=qt.call(D),qt=0;!(G=D.next()).done;)G=G.value,mt=Ct+ct(G,qt++),yt+=O(G,W,nt,mt,lt);else if(mt==="object"){if(typeof D.then=="function")return O(gt(D),W,nt,G,lt);throw W=String(D),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return yt}function $(D,W,nt){if(D==null)return D;var G=[],lt=0;return O(D,G,"","",function(mt){return W.call(nt,mt,lt++)}),G}function Q(D){if(D._status===-1){var W=D._result;W=W(),W.then(function(nt){(D._status===0||D._status===-1)&&(D._status=1,D._result=nt)},function(nt){(D._status===0||D._status===-1)&&(D._status=2,D._result=nt)}),D._status===-1&&(D._status=0,D._result=W)}if(D._status===1)return D._result.default;throw D._result}var St=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Tt={map:$,forEach:function(D,W,nt){$(D,function(){W.apply(this,arguments)},nt)},count:function(D){var W=0;return $(D,function(){W++}),W},toArray:function(D){return $(D,function(W){return W})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return oe.Activity=g,oe.Children=Tt,oe.Component=y,oe.Fragment=n,oe.Profiler=o,oe.PureComponent=L,oe.StrictMode=a,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(D,W,nt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var G=T({},D.props),lt=D.key;if(W!=null)for(mt in W.key!==void 0&&(lt=""+W.key),W)!k.call(W,mt)||mt==="key"||mt==="__self"||mt==="__source"||mt==="ref"&&W.ref===void 0||(G[mt]=W[mt]);var mt=arguments.length-2;if(mt===1)G.children=nt;else if(1<mt){for(var yt=Array(mt),Ct=0;Ct<mt;Ct++)yt[Ct]=arguments[Ct+2];G.children=yt}return U(D.type,lt,G)},oe.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},oe.createElement=function(D,W,nt){var G,lt={},mt=null;if(W!=null)for(G in W.key!==void 0&&(mt=""+W.key),W)k.call(W,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(lt[G]=W[G]);var yt=arguments.length-2;if(yt===1)lt.children=nt;else if(1<yt){for(var Ct=Array(yt),qt=0;qt<yt;qt++)Ct[qt]=arguments[qt+2];lt.children=Ct}if(D&&D.defaultProps)for(G in yt=D.defaultProps,yt)lt[G]===void 0&&(lt[G]=yt[G]);return U(D,mt,lt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:h,render:D}},oe.isValidElement=H,oe.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:Q}},oe.memo=function(D,W){return{$$typeof:m,type:D,compare:W===void 0?null:W}},oe.startTransition=function(D){var W=P.T,nt={};P.T=nt;try{var G=D(),lt=P.S;lt!==null&&lt(nt,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(F,St)}catch(mt){St(mt)}finally{W!==null&&nt.types!==null&&(W.types=nt.types),P.T=W}},oe.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},oe.use=function(D){return P.H.use(D)},oe.useActionState=function(D,W,nt){return P.H.useActionState(D,W,nt)},oe.useCallback=function(D,W){return P.H.useCallback(D,W)},oe.useContext=function(D){return P.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,W){return P.H.useDeferredValue(D,W)},oe.useEffect=function(D,W){return P.H.useEffect(D,W)},oe.useEffectEvent=function(D){return P.H.useEffectEvent(D)},oe.useId=function(){return P.H.useId()},oe.useImperativeHandle=function(D,W,nt){return P.H.useImperativeHandle(D,W,nt)},oe.useInsertionEffect=function(D,W){return P.H.useInsertionEffect(D,W)},oe.useLayoutEffect=function(D,W){return P.H.useLayoutEffect(D,W)},oe.useMemo=function(D,W){return P.H.useMemo(D,W)},oe.useOptimistic=function(D,W){return P.H.useOptimistic(D,W)},oe.useReducer=function(D,W,nt){return P.H.useReducer(D,W,nt)},oe.useRef=function(D){return P.H.useRef(D)},oe.useState=function(D){return P.H.useState(D)},oe.useSyncExternalStore=function(D,W,nt){return P.H.useSyncExternalStore(D,W,nt)},oe.useTransition=function(){return P.H.useTransition()},oe.version="19.2.7",oe}var i0;function ep(){return i0||(i0=1,gh.exports=ZS()),gh.exports}var Xt=ep(),vh={exports:{}},No={},_h={exports:{}},yh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function KS(){return a0||(a0=1,(function(s){function t(O,$){var Q=O.length;O.push($);t:for(;0<Q;){var St=Q-1>>>1,Tt=O[St];if(0<o(Tt,$))O[St]=$,O[Q]=Tt,Q=St;else break t}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var $=O[0],Q=O.pop();if(Q!==$){O[0]=Q;t:for(var St=0,Tt=O.length,D=Tt>>>1;St<D;){var W=2*(St+1)-1,nt=O[W],G=W+1,lt=O[G];if(0>o(nt,Q))G<Tt&&0>o(lt,nt)?(O[St]=lt,O[G]=Q,St=G):(O[St]=nt,O[W]=Q,St=W);else if(G<Tt&&0>o(lt,Q))O[St]=lt,O[G]=Q,St=G;else break t}}return $}function o(O,$){var Q=O.sortIndex-$.sortIndex;return Q!==0?Q:O.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],m=[],v=1,g=null,_=3,x=!1,E=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var $=n(m);$!==null;){if($.callback===null)a(m);else if($.startTime<=O)a(m),$.sortIndex=$.expirationTime,t(p,$);else break;$=n(m)}}function X(O){if(T=!1,w(O),!E)if(n(p)!==null)E=!0,F||(F=!0,it());else{var $=n(m);$!==null&&gt(X,$.startTime-O)}}var F=!1,P=-1,k=5,U=-1;function R(){return M?!0:!(s.unstable_now()-U<k)}function H(){if(M=!1,F){var O=s.unstable_now();U=O;var $=!0;try{t:{E=!1,T&&(T=!1,z(P),P=-1),x=!0;var Q=_;try{e:{for(w(O),g=n(p);g!==null&&!(g.expirationTime>O&&R());){var St=g.callback;if(typeof St=="function"){g.callback=null,_=g.priorityLevel;var Tt=St(g.expirationTime<=O);if(O=s.unstable_now(),typeof Tt=="function"){g.callback=Tt,w(O),$=!0;break e}g===n(p)&&a(p),w(O)}else a(p);g=n(p)}if(g!==null)$=!0;else{var D=n(m);D!==null&&gt(X,D.startTime-O),$=!1}}break t}finally{g=null,_=Q,x=!1}$=void 0}}finally{$?it():F=!1}}}var it;if(typeof L=="function")it=function(){L(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ct=J.port2;J.port1.onmessage=H,it=function(){ct.postMessage(null)}}else it=function(){y(H,0)};function gt(O,$){P=y(function(){O(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var Q=_;_=$;try{return O()}finally{_=Q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=_;_=O;try{return $()}finally{_=Q}},s.unstable_scheduleCallback=function(O,$,Q){var St=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?St+Q:St):Q=St,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Q+Tt,O={id:v++,callback:$,priorityLevel:O,startTime:Q,expirationTime:Tt,sortIndex:-1},Q>St?(O.sortIndex=Q,t(m,O),n(p)===null&&O===n(m)&&(T?(z(P),P=-1):T=!0,gt(X,Q-St))):(O.sortIndex=Tt,t(p,O),E||x||(E=!0,F||(F=!0,it()))),O},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(O){var $=_;return function(){var Q=_;_=$;try{return O.apply(this,arguments)}finally{_=Q}}}})(yh)),yh}var r0;function QS(){return r0||(r0=1,_h.exports=KS()),_h.exports}var xh={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function JS(){if(s0)return Cn;s0=1;var s=ep();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:m,implementation:v}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Cn.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,v)},Cn.flushSync=function(p){var m=u.T,v=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=m,a.p=v,a.d.f()}},Cn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Cn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Cn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:x}):v==="script"&&a.d.X(p,{crossOrigin:g,integrity:_,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Cn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Cn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,g=h(v,m.crossOrigin);a.d.L(p,v,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Cn.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Cn.requestFormReset=function(p){a.d.r(p)},Cn.unstable_batchedUpdates=function(p,m){return p(m)},Cn.useFormState=function(p,m,v){return u.H.useFormState(p,m,v)},Cn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Cn.version="19.2.7",Cn}var o0;function $S(){if(o0)return xh.exports;o0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),xh.exports=JS(),xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function tM(){if(l0)return No;l0=1;var s=QS(),t=ep(),n=$S();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return p(f),e;if(d===l)return p(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var S=!1,b=f.child;b;){if(b===r){S=!0,r=f,l=d;break}if(b===l){S=!0,l=f,r=d;break}b=b.sibling}if(!S){for(b=d.child;b;){if(b===r){S=!0,r=d,l=f;break}if(b===l){S=!0,l=d,r=f;break}b=b.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case k:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var gt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function D(e){return{current:e}}function W(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function nt(e,i){Tt++,St[Tt]=e.current,e.current=i}var G=D(null),lt=D(null),mt=D(null),yt=D(null);function Ct(e,i){switch(nt(mt,i),nt(lt,e),nt(G,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Ev(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Ev(i),e=Tv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(G),nt(G,e)}function qt(){W(G),W(lt),W(mt)}function Ht(e){e.memoizedState!==null&&nt(yt,e);var i=G.current,r=Tv(i,e.type);i!==r&&(nt(lt,e),nt(G,r))}function Pe(e){lt.current===e&&(W(G),W(lt)),yt.current===e&&(W(yt),Co._currentValue=Q)}var Ne,he;function I(e){if(Ne===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ne=i&&i[1]||"",he=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ne+e+he}var Be=!1;function Qt(e,i){if(!e||Be)return"";Be=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var rt=ut}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ut){rt=ut}e.call(_t.prototype)}}else{try{throw Error()}catch(ut){rt=ut}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&rt&&typeof ut.stack=="string")return[ut.stack,rt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],b=d[1];if(S&&b){var B=S.split(`
`),et=b.split(`
`);for(f=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;f<et.length&&!et[f].includes("DetermineComponentFrameRoot");)f++;if(l===B.length||f===et.length)for(l=B.length-1,f=et.length-1;1<=l&&0<=f&&B[l]!==et[f];)f--;for(;1<=l&&0<=f;l--,f--)if(B[l]!==et[f]){if(l!==1||f!==1)do if(l--,f--,0>f||B[l]!==et[f]){var dt=`
`+B[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=f);break}}}finally{Be=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?I(r):""}function pe(e,i){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==i&&i!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return I("Activity");default:return""}}function Gt(e){try{var i="",r=null;do i+=pe(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ae=Object.prototype.hasOwnProperty,Bt=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,A=s.unstable_shouldYield,at=s.unstable_requestPaint,ht=s.unstable_now,Mt=s.unstable_getCurrentPriorityLevel,vt=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,Dt=s.unstable_NormalPriority,It=s.unstable_LowPriority,_e=s.unstable_IdlePriority,Rt=s.log,Vt=s.unstable_setDisableYieldValue,$t=null,jt=null;function zt(e){if(typeof Rt=="function"&&Vt(e),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode($t,e)}catch{}}var ne=Math.clz32?Math.clz32:Y,le=Math.log,Ie=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(le(e)/Ie|0)|0}var Ut=256,ft=262144,xt=4194304;function wt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?f=wt(l):(S&=b,S!==0?f=wt(S):r||(r=b&~e,r!==0&&(f=wt(r))))):(b=l&~d,b!==0?f=wt(b):S!==0?f=wt(S):r||(r=l&~e,r!==0&&(f=wt(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function ie(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ke(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(){var e=xt;return xt<<=1,(xt&62914560)===0&&(xt=4194304),e}function Re(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function xn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function gi(e,i,r,l,f,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(r=S&~r;0<r;){var dt=31-ne(r),_t=1<<dt;b[dt]=0,B[dt]=-1;var rt=et[dt];if(rt!==null)for(et[dt]=null,dt=0;dt<rt.length;dt++){var ut=rt[dt];ut!==null&&(ut.lane&=-536870913)}r&=~_t}l!==0&&Is(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function Is(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ne(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Hs(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-ne(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function Ci(e,i){var r=i&-i;return r=(r&42)!==0?1:Ka(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ka(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Yv(e.type))}function Qa(e,i){var r=$.p;try{return $.p=e,i()}finally{$.p=r}}var vi=Math.random().toString(36).slice(2),Je="__reactFiber$"+vi,Sn="__reactProps$"+vi,Fi="__reactContainer$"+vi,Vs="__reactEvents$"+vi,lu="__reactListeners$"+vi,cu="__reactHandles$"+vi,al="__reactResources$"+vi,Ja="__reactMarker$"+vi;function ks(e){delete e[Je],delete e[Sn],delete e[Vs],delete e[lu],delete e[cu]}function C(e){var i=e[Je];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Fi]||r[Je]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Uv(e);e!==null;){if(r=e[Je])return r;e=Uv(e)}return i}e=r,r=e.parentNode}return null}function Z(e){if(e=e[Je]||e[Fi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function st(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ot(e){var i=e[al];return i||(i=e[al]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function q(e){e[Ja]=!0}var bt=new Set,Nt={};function Pt(e,i){Ft(e,i),Ft(e+"Capture",i)}function Ft(e,i){for(Nt[e]=i,e=0;e<i.length;e++)bt.add(i[e])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Zt={};function Se(e){return Ae.call(Zt,e)?!0:Ae.call(ee,e)?!1:ae.test(e)?Zt[e]=!0:(ee[e]=!0,!1)}function Me(e,i,r){if(Se(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function qe(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Ce(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function hn(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function be(e){if(!e._valueTracker){var i=Jt(e)?"checked":"value";e._valueTracker=hn(e,i,""+e[i])}}function In(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Jt(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function vn(e){return e.replace(Ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function He(e,i,r,l,f,d,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+se(i)):e.value!==""+se(i)&&(e.value=""+se(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Rn(e,S,se(i)):r!=null?Rn(e,S,se(r)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+se(b):e.removeAttribute("name")}function Nn(e,i,r,l,f,d,S,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){be(e);return}r=r!=null?""+se(r):"",i=i!=null?""+se(i):r,b||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),be(e)}function Rn(e,i,r){i==="number"&&_i(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function $e(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function Mn(e,i,r){if(i!=null&&(i=""+se(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+se(r):""}function Dr(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(gt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=se(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),be(e)}function Hn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Hy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Hy.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Sp(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&xp(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&xp(e,d,i[d])}function uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return Vy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Lr=null;function Mp(e){var i=Z(e);if(i&&(e=i.stateNode)){var r=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(He(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+vn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[Sn]||null;if(!f)throw Error(a(90));He(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&In(l)}break t;case"textarea":Mn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&$e(e,!!r.multiple,i,!1)}}}var du=!1;function Ep(e,i,r){if(du)return e(i,r);du=!0;try{var l=e(i);return l}finally{if(du=!1,(Ur!==null||Lr!==null)&&(ql(),Ur&&(i=Ur,e=Lr,Lr=Ur=null,Mp(i),e)))for(i=0;i<e.length;i++)Mp(e[i])}}function Xs(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Sn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Ii)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{pu=!1}var ma=null,mu=null,sl=null;function Tp(){if(sl)return sl;var e,i=mu,r=i.length,l,f="value"in ma?ma.value:ma.textContent,d=f.length;for(e=0;e<r&&i[e]===f[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===f[d-l];l++);return sl=f.slice(e,1<l?1-l:void 0)}function ol(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function bp(){return!1}function Gn(e){function i(r,l,f,d,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ll:bp,this.isPropagationStopped=bp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),i}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Gn($a),qs=g({},$a,{view:0,detail:0}),ky=Gn(qs),gu,vu,Ys,ul=g({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ys&&(Ys&&e.type==="mousemove"?(gu=e.screenX-Ys.screenX,vu=e.screenY-Ys.screenY):vu=gu=0,Ys=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Ap=Gn(ul),Xy=g({},ul,{dataTransfer:0}),Wy=Gn(Xy),qy=g({},qs,{relatedTarget:0}),_u=Gn(qy),Yy=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=Gn(Yy),Zy=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ky=Gn(Zy),Qy=g({},$a,{data:0}),Rp=Gn(Qy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=tx[e])?!!i[e]:!1}function yu(){return ex}var nx=g({},qs,{key:function(e){if(e.key){var i=Jy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ix=Gn(nx),ax=g({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Gn(ax),rx=g({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),sx=Gn(rx),ox=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Gn(ox),cx=g({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Gn(cx),fx=g({},$a,{newState:0,oldState:0}),hx=Gn(fx),dx=[9,13,27,32],xu=Ii&&"CompositionEvent"in window,js=null;Ii&&"documentMode"in document&&(js=document.documentMode);var px=Ii&&"TextEvent"in window&&!js,wp=Ii&&(!xu||js&&8<js&&11>=js),Dp=" ",Up=!1;function Lp(e,i){switch(e){case"keyup":return dx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function mx(e,i){switch(e){case"compositionend":return Np(i);case"keypress":return i.which!==32?null:(Up=!0,Dp);case"textInput":return e=i.data,e===Dp&&Up?null:e;default:return null}}function gx(e,i){if(Nr)return e==="compositionend"||!xu&&Lp(e,i)?(e=Tp(),sl=mu=ma=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return wp&&i.locale!=="ko"?null:i.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!vx[e.type]:i==="textarea"}function Pp(e,i,r,l){Ur?Lr?Lr.push(l):Lr=[l]:Ur=l,i=$l(i,"onChange"),0<i.length&&(r=new cl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Zs=null,Ks=null;function _x(e){vv(e,0)}function fl(e){var i=st(e);if(In(i))return e}function zp(e,i){if(e==="change")return i}var Fp=!1;if(Ii){var Su;if(Ii){var Mu="oninput"in document;if(!Mu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Mu=typeof Bp.oninput=="function"}Su=Mu}else Su=!1;Fp=Su&&(!document.documentMode||9<document.documentMode)}function Ip(){Zs&&(Zs.detachEvent("onpropertychange",Hp),Ks=Zs=null)}function Hp(e){if(e.propertyName==="value"&&fl(Ks)){var i=[];Pp(i,Ks,e,hu(e)),Ep(_x,i)}}function yx(e,i,r){e==="focusin"?(Ip(),Zs=i,Ks=r,Zs.attachEvent("onpropertychange",Hp)):e==="focusout"&&Ip()}function xx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Ks)}function Sx(e,i){if(e==="click")return fl(i)}function Mx(e,i){if(e==="input"||e==="change")return fl(i)}function Ex(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Zn=typeof Object.is=="function"?Object.is:Ex;function Qs(e,i){if(Zn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Ae.call(i,f)||!Zn(e[f],i[f]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,i){var r=Gp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Gp(r)}}function kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_i(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=_i(e.document)}return i}function Eu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Tx=Ii&&"documentMode"in document&&11>=document.documentMode,Or=null,Tu=null,Js=null,bu=!1;function Wp(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;bu||Or==null||Or!==_i(l)||(l=Or,"selectionStart"in l&&Eu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Js&&Qs(Js,l)||(Js=l,l=$l(Tu,"onSelect"),0<l.length&&(i=new cl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Or)))}function tr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Pr={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionrun:tr("Transition","TransitionRun"),transitionstart:tr("Transition","TransitionStart"),transitioncancel:tr("Transition","TransitionCancel"),transitionend:tr("Transition","TransitionEnd")},Au={},qp={};Ii&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function er(e){if(Au[e])return Au[e];if(!Pr[e])return e;var i=Pr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in qp)return Au[e]=i[r];return e}var Yp=er("animationend"),jp=er("animationiteration"),Zp=er("animationstart"),bx=er("transitionrun"),Ax=er("transitionstart"),Rx=er("transitioncancel"),Kp=er("transitionend"),Qp=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function yi(e,i){Qp.set(e,i),Pt(i,[e])}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],zr=0,Cu=0;function dl(){for(var e=zr,i=Cu=zr=0;i<e;){var r=ri[i];ri[i++]=null;var l=ri[i];ri[i++]=null;var f=ri[i];ri[i++]=null;var d=ri[i];if(ri[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&Jp(r,f,d)}}function pl(e,i,r,l){ri[zr++]=e,ri[zr++]=i,ri[zr++]=r,ri[zr++]=l,Cu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function wu(e,i,r,l){return pl(e,i,r,l),ml(e)}function nr(e,i){return pl(e,null,null,i),ml(e)}function Jp(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-ne(r),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function ml(e){if(50<So)throw So=0,If=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Fr={};function Cx(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,i,r,l){return new Cx(e,i,r,l)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,i){var r=e.alternate;return r===null?(r=Kn(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function $p(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function gl(e,i,r,l,f,d){var S=0;if(l=e,typeof e=="function")Du(e)&&(S=1);else if(typeof e=="string")S=NS(e,r,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Kn(31,r,i,f),e.elementType=U,e.lanes=d,e;case T:return ir(r.children,f,d,i);case M:S=8,f|=24;break;case y:return e=Kn(12,r,i,f|2),e.elementType=y,e.lanes=d,e;case X:return e=Kn(13,r,i,f),e.elementType=X,e.lanes=d,e;case F:return e=Kn(19,r,i,f),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break t;case z:S=9;break t;case w:S=11;break t;case P:S=14;break t;case k:S=16,l=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=Kn(S,r,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function ir(e,i,r,l){return e=Kn(7,e,l,i),e.lanes=r,e}function Uu(e,i,r){return e=Kn(6,e,null,i),e.lanes=r,e}function tm(e){var i=Kn(18,null,null,0);return i.stateNode=e,i}function Lu(e,i,r){return i=Kn(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var em=new WeakMap;function si(e,i){if(typeof e=="object"&&e!==null){var r=em.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Gt(i)},em.set(e,i),i)}return{value:e,source:i,stack:Gt(i)}}var Br=[],Ir=0,vl=null,$s=0,oi=[],li=0,ga=null,wi=1,Di="";function Gi(e,i){Br[Ir++]=$s,Br[Ir++]=vl,vl=e,$s=i}function nm(e,i,r){oi[li++]=wi,oi[li++]=Di,oi[li++]=ga,ga=e;var l=wi;e=Di;var f=32-ne(l)-1;l&=~(1<<f),r+=1;var d=32-ne(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,wi=1<<32-ne(i)+f|r<<f|l,Di=d+e}else wi=1<<d|r<<f|l,Di=e}function Nu(e){e.return!==null&&(Gi(e,1),nm(e,1,0))}function Ou(e){for(;e===vl;)vl=Br[--Ir],Br[Ir]=null,$s=Br[--Ir],Br[Ir]=null;for(;e===ga;)ga=oi[--li],oi[li]=null,Di=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null}function im(e,i){oi[li++]=wi,oi[li++]=Di,oi[li++]=ga,wi=i.id,Di=i.overflow,ga=e}var En=null,Ye=null,Ee=!1,va=null,ci=!1,Pu=Error(a(519));function _a(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(si(i,e)),Pu}function am(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[Je]=e,i[Sn]=l,r){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(r=0;r<Eo.length;r++)ge(Eo[r],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),Nn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),Dr(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Sv(i.textContent,r)?(l.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),l.onScroll!=null&&ge("scroll",i),l.onScrollEnd!=null&&ge("scrollend",i),l.onClick!=null&&(i.onclick=Bi),i=!0):i=!1,i||_a(e,!0)}function rm(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:En=En.return}}function Hr(e){if(e!==En)return!1;if(!Ee)return rm(e),Ee=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||th(e.type,e.memoizedProps)),r=!r),r&&Ye&&_a(e),rm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=Dv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ye=Dv(e)}else i===27?(i=Ye,La(e.type)?(e=rh,rh=null,Ye=e):Ye=i):Ye=En?fi(e.stateNode.nextSibling):null;return!0}function ar(){Ye=En=null,Ee=!1}function zu(){var e=va;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),va=null),e}function to(e){va===null?va=[e]:va.push(e)}var Fu=D(null),rr=null,Vi=null;function ya(e,i,r){nt(Fu,i._currentValue),i._currentValue=r}function ki(e){e._currentValue=Fu.current,W(Fu)}function Bu(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Iu(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=f;for(var B=0;B<i.length;B++)if(b.context===i[B]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Bu(d.return,r,e),l||(S=null);break t}d=b.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),Bu(S,r,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Gr(e,i,r,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var b=f.type;Zn(f.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(f===yt.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}f=f.return}e!==null&&Iu(i,e,r,l),i.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return sm(rr,e)}function yl(e,i){return rr===null&&sr(e),sm(e,i)}function sm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Vi===null){if(e===null)throw Error(a(308));Vi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Vi=Vi.next=i;return r}var wx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Dx=s.unstable_scheduleCallback,Ux=s.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new wx,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&Dx(Ux,function(){e.controller.abort()})}var no=null,Gu=0,Vr=0,kr=null;function Lx(e,i){if(no===null){var r=no=[];Gu=0,Vr=Wf(),kr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Gu++,i.then(om,om),i}function om(){if(--Gu===0&&no!==null){kr!==null&&(kr.status="fulfilled");var e=no;no=null,Vr=0,kr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Nx(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var lm=O.S;O.S=function(e,i){Wg=ht(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Lx(e,i),lm!==null&&lm(e,i)};var or=D(null);function Vu(){var e=or.current;return e!==null?e:We.pooledCache}function xl(e,i){i===null?nt(or,or.current):nt(or,i.pool)}function cm(){var e=Vu();return e===null?null:{parent:sn._currentValue,pool:e}}var Xr=Error(a(460)),ku=Error(a(474)),Sl=Error(a(542)),Ml={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Bi,Bi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e;default:if(typeof i.status=="string")i.then(Bi,Bi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e}throw cr=i,Xr}}function lr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(cr=r,Xr):r}}var cr=null;function hm(){if(cr===null)throw Error(a(459));var e=cr;return cr=null,e}function dm(e){if(e===Xr||e===Sl)throw Error(a(483))}var Wr=null,io=0;function El(e){var i=io;return io+=1,Wr===null&&(Wr=[]),fm(Wr,e,i)}function ao(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Tl(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function pm(e){function i(K,V){if(e){var tt=K.deletions;tt===null?(K.deletions=[V],K.flags|=16):tt.push(V)}}function r(K,V){if(!e)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function l(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function f(K,V){return K=Hi(K,V),K.index=0,K.sibling=null,K}function d(K,V,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<V?(K.flags|=67108866,V):tt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,V,tt,pt){return V===null||V.tag!==6?(V=Uu(tt,K.mode,pt),V.return=K,V):(V=f(V,tt),V.return=K,V)}function B(K,V,tt,pt){var Kt=tt.type;return Kt===T?dt(K,V,tt.props.children,pt,tt.key):V!==null&&(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&lr(Kt)===V.type)?(V=f(V,tt.props),ao(V,tt),V.return=K,V):(V=gl(tt.type,tt.key,tt.props,null,K.mode,pt),ao(V,tt),V.return=K,V)}function et(K,V,tt,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Lu(tt,K.mode,pt),V.return=K,V):(V=f(V,tt.children||[]),V.return=K,V)}function dt(K,V,tt,pt,Kt){return V===null||V.tag!==7?(V=ir(tt,K.mode,pt,Kt),V.return=K,V):(V=f(V,tt),V.return=K,V)}function _t(K,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Uu(""+V,K.mode,tt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case x:return tt=gl(V.type,V.key,V.props,null,K.mode,tt),ao(tt,V),tt.return=K,tt;case E:return V=Lu(V,K.mode,tt),V.return=K,V;case k:return V=lr(V),_t(K,V,tt)}if(gt(V)||it(V))return V=ir(V,K.mode,tt,null),V.return=K,V;if(typeof V.then=="function")return _t(K,El(V),tt);if(V.$$typeof===L)return _t(K,yl(K,V),tt);Tl(K,V)}return null}function rt(K,V,tt,pt){var Kt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Kt!==null?null:b(K,V,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case x:return tt.key===Kt?B(K,V,tt,pt):null;case E:return tt.key===Kt?et(K,V,tt,pt):null;case k:return tt=lr(tt),rt(K,V,tt,pt)}if(gt(tt)||it(tt))return Kt!==null?null:dt(K,V,tt,pt,null);if(typeof tt.then=="function")return rt(K,V,El(tt),pt);if(tt.$$typeof===L)return rt(K,V,yl(K,tt),pt);Tl(K,tt)}return null}function ut(K,V,tt,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(tt)||null,b(V,K,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return K=K.get(pt.key===null?tt:pt.key)||null,B(V,K,pt,Kt);case E:return K=K.get(pt.key===null?tt:pt.key)||null,et(V,K,pt,Kt);case k:return pt=lr(pt),ut(K,V,tt,pt,Kt)}if(gt(pt)||it(pt))return K=K.get(tt)||null,dt(V,K,pt,Kt,null);if(typeof pt.then=="function")return ut(K,V,tt,El(pt),Kt);if(pt.$$typeof===L)return ut(K,V,tt,yl(V,pt),Kt);Tl(V,pt)}return null}function kt(K,V,tt,pt){for(var Kt=null,we=null,Wt=V,ue=V=0,xe=null;Wt!==null&&ue<tt.length;ue++){Wt.index>ue?(xe=Wt,Wt=null):xe=Wt.sibling;var De=rt(K,Wt,tt[ue],pt);if(De===null){Wt===null&&(Wt=xe);break}e&&Wt&&De.alternate===null&&i(K,Wt),V=d(De,V,ue),we===null?Kt=De:we.sibling=De,we=De,Wt=xe}if(ue===tt.length)return r(K,Wt),Ee&&Gi(K,ue),Kt;if(Wt===null){for(;ue<tt.length;ue++)Wt=_t(K,tt[ue],pt),Wt!==null&&(V=d(Wt,V,ue),we===null?Kt=Wt:we.sibling=Wt,we=Wt);return Ee&&Gi(K,ue),Kt}for(Wt=l(Wt);ue<tt.length;ue++)xe=ut(Wt,K,ue,tt[ue],pt),xe!==null&&(e&&xe.alternate!==null&&Wt.delete(xe.key===null?ue:xe.key),V=d(xe,V,ue),we===null?Kt=xe:we.sibling=xe,we=xe);return e&&Wt.forEach(function(Fa){return i(K,Fa)}),Ee&&Gi(K,ue),Kt}function te(K,V,tt,pt){if(tt==null)throw Error(a(151));for(var Kt=null,we=null,Wt=V,ue=V=0,xe=null,De=tt.next();Wt!==null&&!De.done;ue++,De=tt.next()){Wt.index>ue?(xe=Wt,Wt=null):xe=Wt.sibling;var Fa=rt(K,Wt,De.value,pt);if(Fa===null){Wt===null&&(Wt=xe);break}e&&Wt&&Fa.alternate===null&&i(K,Wt),V=d(Fa,V,ue),we===null?Kt=Fa:we.sibling=Fa,we=Fa,Wt=xe}if(De.done)return r(K,Wt),Ee&&Gi(K,ue),Kt;if(Wt===null){for(;!De.done;ue++,De=tt.next())De=_t(K,De.value,pt),De!==null&&(V=d(De,V,ue),we===null?Kt=De:we.sibling=De,we=De);return Ee&&Gi(K,ue),Kt}for(Wt=l(Wt);!De.done;ue++,De=tt.next())De=ut(Wt,K,ue,De.value,pt),De!==null&&(e&&De.alternate!==null&&Wt.delete(De.key===null?ue:De.key),V=d(De,V,ue),we===null?Kt=De:we.sibling=De,we=De);return e&&Wt.forEach(function(XS){return i(K,XS)}),Ee&&Gi(K,ue),Kt}function ke(K,V,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case x:t:{for(var Kt=tt.key;V!==null;){if(V.key===Kt){if(Kt=tt.type,Kt===T){if(V.tag===7){r(K,V.sibling),pt=f(V,tt.props.children),pt.return=K,K=pt;break t}}else if(V.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&lr(Kt)===V.type){r(K,V.sibling),pt=f(V,tt.props),ao(pt,tt),pt.return=K,K=pt;break t}r(K,V);break}else i(K,V);V=V.sibling}tt.type===T?(pt=ir(tt.props.children,K.mode,pt,tt.key),pt.return=K,K=pt):(pt=gl(tt.type,tt.key,tt.props,null,K.mode,pt),ao(pt,tt),pt.return=K,K=pt)}return S(K);case E:t:{for(Kt=tt.key;V!==null;){if(V.key===Kt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){r(K,V.sibling),pt=f(V,tt.children||[]),pt.return=K,K=pt;break t}else{r(K,V);break}else i(K,V);V=V.sibling}pt=Lu(tt,K.mode,pt),pt.return=K,K=pt}return S(K);case k:return tt=lr(tt),ke(K,V,tt,pt)}if(gt(tt))return kt(K,V,tt,pt);if(it(tt)){if(Kt=it(tt),typeof Kt!="function")throw Error(a(150));return tt=Kt.call(tt),te(K,V,tt,pt)}if(typeof tt.then=="function")return ke(K,V,El(tt),pt);if(tt.$$typeof===L)return ke(K,V,yl(K,tt),pt);Tl(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(r(K,V.sibling),pt=f(V,tt),pt.return=K,K=pt):(r(K,V),pt=Uu(tt,K.mode,pt),pt.return=K,K=pt),S(K)):r(K,V)}return function(K,V,tt,pt){try{io=0;var Kt=ke(K,V,tt,pt);return Wr=null,Kt}catch(Wt){if(Wt===Xr||Wt===Sl)throw Wt;var we=Kn(29,Wt,null,K.mode);return we.lanes=pt,we.return=K,we}finally{}}}var ur=pm(!0),mm=pm(!1),xa=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=ml(e),Jp(e,null,r),i}return pl(e,l,i,r),ml(e)}function ro(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Hs(e,r)}}function qu(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Yu=!1;function so(){if(Yu){var e=kr;if(e!==null)throw e}}function oo(e,i,r,l){Yu=!1;var f=e.updateQueue;xa=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,b=f.shared.pending;if(b!==null){f.shared.pending=null;var B=b,et=B.next;B.next=null,S===null?d=et:S.next=et,S=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==S&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=B))}if(d!==null){var _t=f.baseState;S=0,dt=et=B=null,b=d;do{var rt=b.lane&-536870913,ut=rt!==b.lane;if(ut?(ye&rt)===rt:(l&rt)===rt){rt!==0&&rt===Vr&&(Yu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,te=b;rt=i;var ke=r;switch(te.tag){case 1:if(kt=te.payload,typeof kt=="function"){_t=kt.call(ke,_t,rt);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=te.payload,rt=typeof kt=="function"?kt.call(ke,_t,rt):kt,rt==null)break t;_t=g({},_t,rt);break t;case 2:xa=!0}}rt=b.callback,rt!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=f.callbacks,ut===null?f.callbacks=[rt]:ut.push(rt))}else ut={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=ut,B=_t):dt=dt.next=ut,S|=rt;if(b=b.next,b===null){if(b=f.shared.pending,b===null)break;ut=b,b=ut.next,ut.next=null,f.lastBaseUpdate=ut,f.shared.pending=null}}while(!0);dt===null&&(B=_t),f.baseState=B,f.firstBaseUpdate=et,f.lastBaseUpdate=dt,d===null&&(f.shared.lanes=0),Ra|=S,e.lanes=S,e.memoizedState=_t}}function gm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function vm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)gm(r[e],i)}var qr=D(null),bl=D(0);function _m(e,i){e=Ji,nt(bl,e),nt(qr,i),Ji=e|i.baseLanes}function ju(){nt(bl,Ji),nt(qr,qr.current)}function Zu(){Ji=bl.current,W(qr),W(bl)}var Qn=D(null),ui=null;function Ea(e){var i=e.alternate;nt(nn,nn.current&1),nt(Qn,e),ui===null&&(i===null||qr.current!==null||i.memoizedState!==null)&&(ui=e)}function Ku(e){nt(nn,nn.current),nt(Qn,e),ui===null&&(ui=e)}function ym(e){e.tag===22?(nt(nn,nn.current),nt(Qn,e),ui===null&&(ui=e)):Ta()}function Ta(){nt(nn,nn.current),nt(Qn,Qn.current)}function Jn(e){W(Qn),ui===e&&(ui=null),W(nn)}var nn=D(0);function Al(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||ih(r)||ah(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xi=0,ce=null,Ge=null,on=null,Rl=!1,Yr=!1,fr=!1,Cl=0,lo=0,jr=null,Ox=0;function tn(){throw Error(a(321))}function Qu(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Zn(e[r],i[r]))return!1;return!0}function Ju(e,i,r,l,f,d){return Xi=d,ce=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=e===null||e.memoizedState===null?ng:pf,fr=!1,d=r(l,f),fr=!1,Yr&&(d=Sm(i,r,l,f)),xm(e),d}function xm(e){O.H=fo;var i=Ge!==null&&Ge.next!==null;if(Xi=0,on=Ge=ce=null,Rl=!1,lo=0,jr=null,i)throw Error(a(300));e===null||ln||(e=e.dependencies,e!==null&&_l(e)&&(ln=!0))}function Sm(e,i,r,l){ce=e;var f=0;do{if(Yr&&(jr=null),lo=0,Yr=!1,25<=f)throw Error(a(301));if(f+=1,on=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=ig,d=i(r,l)}while(Yr);return d}function Px(){var e=O.H,i=e.useState()[0];return i=typeof i.then=="function"?co(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ce.flags|=1024),i}function $u(){var e=Cl!==0;return Cl=0,e}function tf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function ef(e){if(Rl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Rl=!1}Xi=0,on=Ge=ce=null,Yr=!1,lo=Cl=0,jr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ce.memoizedState=on=e:on=on.next=e,on}function an(){if(Ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=on===null?ce.memoizedState:on.next;if(i!==null)on=i,Ge=e;else{if(e===null)throw ce.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},on===null?ce.memoizedState=on=e:on=on.next=e}return on}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var i=lo;return lo+=1,jr===null&&(jr=[]),e=fm(jr,e,i),i=ce,(on===null?i.memoizedState:on.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?ng:pf),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===L)return Tn(e)}throw Error(a(438,String(e)))}function nf(e){var i=null,r=ce.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ce.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=wl(),ce.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=R;return i.index++,r}function Wi(e,i){return typeof i=="function"?i(e):i}function Ul(e){var i=an();return af(i,Ge,e)}function af(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var b=S=null,B=null,et=i,dt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(ye&_t)===_t:(Xi&_t)===_t){var rt=et.revertLane;if(rt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===Vr&&(dt=!0);else if((Xi&rt)===rt){et=et.next,rt===Vr&&(dt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=_t,S=d):B=B.next=_t,ce.lanes|=rt,Ra|=rt;_t=et.action,fr&&r(d,_t),d=et.hasEagerState?et.eagerState:r(d,_t)}else rt={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(b=B=rt,S=d):B=B.next=rt,ce.lanes|=_t,Ra|=_t;et=et.next}while(et!==null&&et!==i);if(B===null?S=d:B.next=b,!Zn(d,e.memoizedState)&&(ln=!0,dt&&(r=kr,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=B,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function rf(e){var i=an(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);Zn(d,i.memoizedState)||(ln=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Mm(e,i,r){var l=ce,f=an(),d=Ee;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!Zn((Ge||f).memoizedState,r);if(S&&(f.memoizedState=r,ln=!0),f=f.queue,lf(bm.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||on!==null&&on.memoizedState.tag&1){if(l.flags|=2048,Zr(9,{destroy:void 0},Tm.bind(null,l,f,r,i),null),We===null)throw Error(a(349));d||(Xi&127)!==0||Em(l,i,r)}return r}function Em(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ce.updateQueue,i===null?(i=wl(),ce.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Tm(e,i,r,l){i.value=r,i.getSnapshot=l,Am(i)&&Rm(e)}function bm(e,i,r){return r(function(){Am(i)&&Rm(e)})}function Am(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Zn(e,r)}catch{return!0}}function Rm(e){var i=nr(e,2);i!==null&&qn(i,e,2)}function sf(e){var i=On();if(typeof e=="function"){var r=e;if(e=r(),fr){zt(!0);try{r()}finally{zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},i}function Cm(e,i,r,l){return e.baseState=r,af(e,Ge,typeof l=="function"?l:Wi)}function zx(e,i,r,l,f){if(Ol(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};O.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,wm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function wm(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=O.T,S={};O.T=S;try{var b=r(f,l),B=O.S;B!==null&&B(S,b),Dm(e,i,b)}catch(et){of(e,i,et)}finally{d!==null&&S.types!==null&&(d.types=S.types),O.T=d}}else try{d=r(f,l),Dm(e,i,d)}catch(et){of(e,i,et)}}function Dm(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Um(e,i,l)},function(l){return of(e,i,l)}):Um(e,i,r)}function Um(e,i,r){i.status="fulfilled",i.value=r,Lm(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,wm(e,r)))}function of(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Lm(i),i=i.next;while(i!==l)}e.action=null}function Lm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Nm(e,i){return i}function Om(e,i){if(Ee){var r=We.formState;if(r!==null){t:{var l=ce;if(Ee){if(Ye){e:{for(var f=Ye,d=ci;f.nodeType!==8;){if(!d){f=null;break e}if(f=fi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Ye=fi(f.nextSibling),l=f.data==="F!";break t}}_a(l)}l=!1}l&&(i=r[0])}}return r=On(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:i},r.queue=l,r=$m.bind(null,ce,l),l.dispatch=r,l=sf(!1),d=df.bind(null,ce,!1,l.queue),l=On(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=zx.bind(null,ce,f,d,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function Pm(e){var i=an();return zm(i,Ge,e)}function zm(e,i,r){if(i=af(e,i,Nm)[0],e=Ul(Wi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=co(i)}catch(S){throw S===Xr?Sl:S}else l=i;i=an();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(ce.flags|=2048,Zr(9,{destroy:void 0},Fx.bind(null,f,r),null)),[l,d,e]}function Fx(e,i){e.action=i}function Fm(e){var i=an(),r=Ge;if(r!==null)return zm(i,r,e);an(),i=i.memoizedState,r=an();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Zr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=ce.updateQueue,i===null&&(i=wl(),ce.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Bm(){return an().memoizedState}function Ll(e,i,r,l){var f=On();ce.flags|=e,f.memoizedState=Zr(1|i,{destroy:void 0},r,l===void 0?null:l)}function Nl(e,i,r,l){var f=an();l=l===void 0?null:l;var d=f.memoizedState.inst;Ge!==null&&l!==null&&Qu(l,Ge.memoizedState.deps)?f.memoizedState=Zr(i,d,r,l):(ce.flags|=e,f.memoizedState=Zr(1|i,d,r,l))}function Im(e,i){Ll(8390656,8,e,i)}function lf(e,i){Nl(2048,8,e,i)}function Bx(e){ce.flags|=4;var i=ce.updateQueue;if(i===null)i=wl(),ce.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Hm(e){var i=an().memoizedState;return Bx({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Gm(e,i){return Nl(4,2,e,i)}function Vm(e,i){return Nl(4,4,e,i)}function km(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xm(e,i,r){r=r!=null?r.concat([e]):null,Nl(4,4,km.bind(null,i,e),r)}function cf(){}function Wm(e,i){var r=an();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Qu(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function qm(e,i){var r=an();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Qu(i,l[1]))return l[0];if(l=e(),fr){zt(!0);try{e()}finally{zt(!1)}}return r.memoizedState=[l,i],l}function uf(e,i,r){return r===void 0||(Xi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Yg(),ce.lanes|=e,Ra|=e,r)}function Ym(e,i,r,l){return Zn(r,i)?r:qr.current!==null?(e=uf(e,r,l),Zn(e,i)||(ln=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(ye&261930)===0?(ln=!0,e.memoizedState=r):(e=Yg(),ce.lanes|=e,Ra|=e,i)}function jm(e,i,r,l,f){var d=$.p;$.p=d!==0&&8>d?d:8;var S=O.T,b={};O.T=b,df(e,!1,i,r);try{var B=f(),et=O.S;if(et!==null&&et(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=Nx(B,l);uo(e,i,dt,ei(e))}else uo(e,i,l,ei(e))}catch(_t){uo(e,i,{then:function(){},status:"rejected",reason:_t},ei())}finally{$.p=d,S!==null&&b.types!==null&&(S.types=b.types),O.T=S}}function Ix(){}function ff(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=Zm(e).queue;jm(e,f,i,Q,r===null?Ix:function(){return Km(e),r(l)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Km(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),uo(e,i.next.queue,{},ei())}function hf(){return Tn(Co)}function Qm(){return an().memoizedState}function Jm(){return an().memoizedState}function Hx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=ei();e=Sa(r);var l=Ma(i,e,r);l!==null&&(qn(l,i,r),ro(l,i,r)),i={cache:Hu()},e.payload=i;return}i=i.return}}function Gx(e,i,r){var l=ei();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ol(e)?tg(i,r):(r=wu(e,i,r,l),r!==null&&(qn(r,e,l),eg(r,i,l)))}function $m(e,i,r){var l=ei();uo(e,i,r,l)}function uo(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))tg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,b=d(S,r);if(f.hasEagerState=!0,f.eagerState=b,Zn(b,S))return pl(e,i,f,0),We===null&&dl(),!1}catch{}finally{}if(r=wu(e,i,f,l),r!==null)return qn(r,e,l),eg(r,i,l),!0}return!1}function df(e,i,r,l){if(l={lane:2,revertLane:Wf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(i)throw Error(a(479))}else i=wu(e,r,l,2),i!==null&&qn(i,e,2)}function Ol(e){var i=e.alternate;return e===ce||i!==null&&i===ce}function tg(e,i){Yr=Rl=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function eg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Hs(e,r)}}var fo={readContext:Tn,use:Dl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};fo.useEffectEvent=tn;var ng={readContext:Tn,use:Dl,useCallback:function(e,i){return On().memoizedState=[e,i===void 0?null:i],e},useContext:Tn,useEffect:Im,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Ll(4194308,4,km.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Ll(4194308,4,e,i)},useInsertionEffect:function(e,i){Ll(4,2,e,i)},useMemo:function(e,i){var r=On();i=i===void 0?null:i;var l=e();if(fr){zt(!0);try{e()}finally{zt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=On();if(r!==void 0){var f=r(i);if(fr){zt(!0);try{r(i)}finally{zt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=Gx.bind(null,ce,e),[l.memoizedState,e]},useRef:function(e){var i=On();return e={current:e},i.memoizedState=e},useState:function(e){e=sf(e);var i=e.queue,r=$m.bind(null,ce,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:cf,useDeferredValue:function(e,i){var r=On();return uf(r,e,i)},useTransition:function(){var e=sf(!1);return e=jm.bind(null,ce,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=ce,f=On();if(Ee){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),We===null)throw Error(a(349));(ye&127)!==0||Em(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,Im(bm.bind(null,l,d,e),[e]),l.flags|=2048,Zr(9,{destroy:void 0},Tm.bind(null,l,d,r,i),null),r},useId:function(){var e=On(),i=We.identifierPrefix;if(Ee){var r=Di,l=wi;r=(l&~(1<<32-ne(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Cl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Ox++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var i=On();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=df.bind(null,ce,!0,r),r.dispatch=i,[e,i]},useMemoCache:nf,useCacheRefresh:function(){return On().memoizedState=Hx.bind(null,ce)},useEffectEvent:function(e){var i=On(),r={impl:e};return i.memoizedState=r,function(){if((Le&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},pf={readContext:Tn,use:Dl,useCallback:Wm,useContext:Tn,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Ul,useRef:Bm,useState:function(){return Ul(Wi)},useDebugValue:cf,useDeferredValue:function(e,i){var r=an();return Ym(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Ul(Wi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:co(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:hf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var r=an();return Cm(r,Ge,e,i)},useMemoCache:nf,useCacheRefresh:Jm};pf.useEffectEvent=Hm;var ig={readContext:Tn,use:Dl,useCallback:Wm,useContext:Tn,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:rf,useRef:Bm,useState:function(){return rf(Wi)},useDebugValue:cf,useDeferredValue:function(e,i){var r=an();return Ge===null?uf(r,e,i):Ym(r,Ge.memoizedState,e,i)},useTransition:function(){var e=rf(Wi)[0],i=an().memoizedState;return[typeof e=="boolean"?e:co(e),i]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:hf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,i){var r=an();return Ge!==null?Cm(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Jm};ig.useEffectEvent=Hm;function mf(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var gf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=ei(),f=Sa(l);f.payload=i,r!=null&&(f.callback=r),i=Ma(e,f,l),i!==null&&(qn(i,e,l),ro(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=ei(),f=Sa(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Ma(e,f,l),i!==null&&(qn(i,e,l),ro(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=ei(),l=Sa(r);l.tag=2,i!=null&&(l.callback=i),i=Ma(e,l,r),i!==null&&(qn(i,e,r),ro(i,e,r))}};function ag(e,i,r,l,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!Qs(r,l)||!Qs(f,d):!0}function rg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&gf.enqueueReplaceState(i,i.state,null)}function hr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function sg(e){hl(e)}function og(e){console.error(e)}function lg(e){hl(e)}function Pl(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function cg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function vf(e,i,r){return r=Sa(r),r.tag=3,r.payload={element:null},r.callback=function(){Pl(e,i)},r}function ug(e){return e=Sa(e),e.tag=3,e}function fg(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){cg(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){cg(i,r,l),typeof f!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Vx(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Gr(i,r,f,!0),r=Qn.current,r!==null){switch(r.tag){case 31:case 13:return ui===null?Yl():r.alternate===null&&en===0&&(en=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Ml?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Vf(e,l,f)),!1;case 22:return r.flags|=65536,l===Ml?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Vf(e,l,f)),!1}throw Error(a(435,r.tag))}return Vf(e,l,f),Yl(),!1}if(Ee)return i=Qn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Pu&&(e=Error(a(422),{cause:l}),to(si(e,r)))):(l!==Pu&&(i=Error(a(423),{cause:l}),to(si(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=si(l,r),f=vf(e.stateNode,l,f),qu(e,f),en!==4&&(en=2)),!1;var d=Error(a(520),{cause:l});if(d=si(d,r),xo===null?xo=[d]:xo.push(d),en!==4&&(en=2),i===null)return!0;l=si(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=vf(r.stateNode,l,e),qu(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ca===null||!Ca.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=ug(f),fg(f,e,r,l),qu(r,f),!1}r=r.return}while(r!==null);return!1}var _f=Error(a(461)),ln=!1;function bn(e,i,r,l){i.child=e===null?mm(i,null,r,l):ur(i,e.child,r,l)}function hg(e,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var S={};for(var b in l)b!=="ref"&&(S[b]=l[b])}else S=l;return sr(i),l=Ju(e,i,r,S,d,f),b=$u(),e!==null&&!ln?(tf(e,i,f),qi(e,i,f)):(Ee&&b&&Nu(i),i.flags|=1,bn(e,i,l,f),i.child)}function dg(e,i,r,l,f){if(e===null){var d=r.type;return typeof d=="function"&&!Du(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,pg(e,i,d,l,f)):(e=gl(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Af(e,f)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:Qs,r(S,l)&&e.ref===i.ref)return qi(e,i,f)}return i.flags|=1,e=Hi(d,l),e.ref=i.ref,e.return=i,i.child=e}function pg(e,i,r,l,f){if(e!==null){var d=e.memoizedProps;if(Qs(d,l)&&e.ref===i.ref)if(ln=!1,i.pendingProps=l=d,Af(e,f))(e.flags&131072)!==0&&(ln=!0);else return i.lanes=e.lanes,qi(e,i,f)}return yf(e,i,r,l,f)}function mg(e,i,r,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return gg(e,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(i,d!==null?d.cachePool:null),d!==null?_m(i,d):ju(),ym(i);else return l=i.lanes=536870912,gg(e,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(xl(i,d.cachePool),_m(i,d),Ta(),i.memoizedState=null):(e!==null&&xl(i,null),ju(),Ta());return bn(e,i,f,r),i.child}function ho(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function gg(e,i,r,l,f){var d=Vu();return d=d===null?null:{parent:sn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&xl(i,null),ju(),ym(i),e!==null&&Gr(e,i,l,!0),i.childLanes=f,null}function zl(e,i){return i=Bl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function vg(e,i,r){return ur(i,e.child,null,r),e=zl(i,i.pendingProps),e.flags|=2,Jn(i),i.memoizedState=null,e}function kx(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=zl(i,l),i.lanes=536870912,ho(null,e);if(Ku(i),(e=Ye)?(e=wv(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ga!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},r=tm(e),r.return=i,i.child=r,En=i,Ye=null)):e=null,e===null)throw _a(i);return i.lanes=536870912,null}return zl(i,l)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(Ku(i),f)if(i.flags&256)i.flags&=-257,i=vg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(ln||Gr(e,i,r,!1),f=(r&e.childLanes)!==0,ln||f){if(l=We,l!==null&&(S=Ci(l,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,nr(e,S),qn(l,e,S),_f;Yl(),i=vg(e,i,r)}else e=d.treeContext,Ye=fi(S.nextSibling),En=i,Ee=!0,va=null,ci=!1,e!==null&&im(i,e),i=zl(i,l),i.flags|=4096;return i}return e=Hi(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Fl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function yf(e,i,r,l,f){return sr(i),r=Ju(e,i,r,l,void 0,f),l=$u(),e!==null&&!ln?(tf(e,i,f),qi(e,i,f)):(Ee&&l&&Nu(i),i.flags|=1,bn(e,i,r,f),i.child)}function _g(e,i,r,l,f,d){return sr(i),i.updateQueue=null,r=Sm(i,l,r,f),xm(e),l=$u(),e!==null&&!ln?(tf(e,i,d),qi(e,i,d)):(Ee&&l&&Nu(i),i.flags|=1,bn(e,i,r,d),i.child)}function yg(e,i,r,l,f){if(sr(i),i.stateNode===null){var d=Fr,S=r.contextType;typeof S=="object"&&S!==null&&(d=Tn(S)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xu(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?Tn(S):Fr,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(mf(i,r,S,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&gf.enqueueReplaceState(d,d.state,null),oo(i,l,d,f),so(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var b=i.memoizedProps,B=hr(r,b);d.props=B;var et=d.context,dt=r.contextType;S=Fr,typeof dt=="object"&&dt!==null&&(S=Tn(dt));var _t=r.getDerivedStateFromProps;dt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=i.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==S)&&rg(i,d,l,S),xa=!1;var rt=i.memoizedState;d.state=rt,oo(i,l,d,f),so(),et=i.memoizedState,b||rt!==et||xa?(typeof _t=="function"&&(mf(i,r,_t,l),et=i.memoizedState),(B=xa||ag(i,r,B,l,rt,et,S))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),d.props=l,d.state=et,d.context=S,l=B):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wu(e,i),S=i.memoizedProps,dt=hr(r,S),d.props=dt,_t=i.pendingProps,rt=d.context,et=r.contextType,B=Fr,typeof et=="object"&&et!==null&&(B=Tn(et)),b=r.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==_t||rt!==B)&&rg(i,d,l,B),xa=!1,rt=i.memoizedState,d.state=rt,oo(i,l,d,f),so();var ut=i.memoizedState;S!==_t||rt!==ut||xa||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof b=="function"&&(mf(i,r,b,l),ut=i.memoizedState),(dt=xa||ag(i,r,dt,l,rt,ut,B)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ut,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ut,B)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ut),d.props=l,d.state=ut,d.context=B,l=dt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Fl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=ur(i,e.child,null,f),i.child=ur(i,null,r,f)):bn(e,i,r,f),i.memoizedState=d.state,e=i.child):e=qi(e,i,f),e}function xg(e,i,r,l){return ar(),i.flags|=256,bn(e,i,r,l),i.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:cm()}}function Mf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=ti),e}function Sg(e,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(f?Ea(i):Ta(),(e=Ye)?(e=wv(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ga!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},r=tm(e),r.return=i,i.child=r,En=i,Ye=null)):e=null,e===null)throw _a(i);return ah(e)?i.lanes=32:i.lanes=536870912,null}var b=l.children;return l=l.fallback,f?(Ta(),f=i.mode,b=Bl({mode:"hidden",children:b},f),l=ir(l,f,r,null),b.return=i,l.return=i,b.sibling=l,i.child=b,l=i.child,l.memoizedState=Sf(r),l.childLanes=Mf(e,S,r),i.memoizedState=xf,ho(null,l)):(Ea(i),Ef(i,b))}var B=e.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(d)i.flags&256?(Ea(i),i.flags&=-257,i=Tf(e,i,r)):i.memoizedState!==null?(Ta(),i.child=e.child,i.flags|=128,i=null):(Ta(),b=l.fallback,f=i.mode,l=Bl({mode:"visible",children:l.children},f),b=ir(b,f,r,null),b.flags|=2,l.return=i,b.return=i,l.sibling=b,i.child=l,ur(i,e.child,null,r),l=i.child,l.memoizedState=Sf(r),l.childLanes=Mf(e,S,r),i.memoizedState=xf,i=ho(null,l));else if(Ea(i),ah(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var et=S.dgst;S=et,l=Error(a(419)),l.stack="",l.digest=S,to({value:l,source:null,stack:null}),i=Tf(e,i,r)}else if(ln||Gr(e,i,r,!1),S=(r&e.childLanes)!==0,ln||S){if(S=We,S!==null&&(l=Ci(S,r),l!==0&&l!==B.retryLane))throw B.retryLane=l,nr(e,l),qn(S,e,l),_f;ih(b)||Yl(),i=Tf(e,i,r)}else ih(b)?(i.flags|=192,i.child=e.child,i=null):(e=B.treeContext,Ye=fi(b.nextSibling),En=i,Ee=!0,va=null,ci=!1,e!==null&&im(i,e),i=Ef(i,l.children),i.flags|=4096);return i}return f?(Ta(),b=l.fallback,f=i.mode,B=e.child,et=B.sibling,l=Hi(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,et!==null?b=Hi(et,b):(b=ir(b,f,r,null),b.flags|=2),b.return=i,l.return=i,l.sibling=b,i.child=l,ho(null,l),l=i.child,b=e.child.memoizedState,b===null?b=Sf(r):(f=b.cachePool,f!==null?(B=sn._currentValue,f=f.parent!==B?{parent:B,pool:B}:f):f=cm(),b={baseLanes:b.baseLanes|r,cachePool:f}),l.memoizedState=b,l.childLanes=Mf(e,S,r),i.memoizedState=xf,ho(e.child,l)):(Ea(i),r=e.child,e=r.sibling,r=Hi(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function Ef(e,i){return i=Bl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Bl(e,i){return e=Kn(22,e,null,i),e.lanes=0,e}function Tf(e,i,r){return ur(i,e.child,null,r),e=Ef(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Mg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Bu(e.return,i,r)}function bf(e,i,r,l,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=d)}function Eg(e,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=nn.current,b=(S&2)!==0;if(b?(S=S&1|2,i.flags|=128):S&=1,nt(nn,S),bn(e,i,l,r),l=Ee?$s:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,r,i);else if(e.tag===19)Mg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&Al(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),bf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Al(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}bf(i,!0,r,null,d,l);break;case"together":bf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function qi(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Ra|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Gr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Hi(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Hi(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Af(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function Xx(e,i,r){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),ya(i,sn,e.memoizedState.cache),ar();break;case 27:case 5:Ht(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:ya(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Ku(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ea(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Sg(e,i,r):(Ea(i),e=qi(e,i,r),e!==null?e.sibling:null);Ea(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Gr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return Eg(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),nt(nn,nn.current),l)break;return null;case 22:return i.lanes=0,mg(e,i,r,i.pendingProps);case 24:ya(i,sn,e.memoizedState.cache)}return qi(e,i,r)}function Tg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)ln=!0;else{if(!Af(e,r)&&(i.flags&128)===0)return ln=!1,Xx(e,i,r);ln=(e.flags&131072)!==0}else ln=!1,Ee&&(i.flags&1048576)!==0&&nm(i,$s,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=lr(i.elementType),i.type=e,typeof e=="function")Du(e)?(l=hr(e,l),i.tag=1,i=yg(null,i,e,l,r)):(i.tag=0,i=yf(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===w){i.tag=11,i=hg(null,i,e,l,r);break t}else if(f===P){i.tag=14,i=dg(null,i,e,l,r);break t}}throw i=ct(e)||e,Error(a(306,i,""))}}return i;case 0:return yf(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=hr(l,i.pendingProps),yg(e,i,l,f,r);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Wu(e,i),oo(i,l,null,r);var S=i.memoizedState;if(l=S.cache,ya(i,sn,l),l!==d.cache&&Iu(i,[sn],r,!0),so(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=xg(e,i,l,r);break t}else if(l!==f){f=si(Error(a(424)),i),to(f),i=xg(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=fi(e.firstChild),En=i,Ee=!0,va=null,ci=!0,r=mm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ar(),l===f){i=qi(e,i,r);break t}bn(e,i,l,r)}i=i.child}return i;case 26:return Fl(e,i),e===null?(r=Pv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ee||(r=i.type,e=i.pendingProps,l=tc(mt.current).createElement(r),l[Je]=i,l[Sn]=e,An(l,r,e),q(l),i.stateNode=l):i.memoizedState=Pv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ht(i),e===null&&Ee&&(l=i.stateNode=Lv(i.type,i.pendingProps,mt.current),En=i,ci=!0,f=Ye,La(i.type)?(rh=f,Ye=fi(l.firstChild)):Ye=f),bn(e,i,i.pendingProps.children,r),Fl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((f=l=Ye)&&(l=xS(l,i.type,i.pendingProps,ci),l!==null?(i.stateNode=l,En=i,Ye=fi(l.firstChild),ci=!1,f=!0):f=!1),f||_a(i)),Ht(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,l=d.children,th(f,d)?l=null:S!==null&&th(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Ju(e,i,Px,null,null,r),Co._currentValue=f),Fl(e,i),bn(e,i,l,r),i.child;case 6:return e===null&&Ee&&((e=r=Ye)&&(r=SS(r,i.pendingProps,ci),r!==null?(i.stateNode=r,En=i,Ye=null,e=!0):e=!1),e||_a(i)),null;case 13:return Sg(e,i,r);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ur(i,null,l,r):bn(e,i,l,r),i.child;case 11:return hg(e,i,i.type,i.pendingProps,r);case 7:return bn(e,i,i.pendingProps,r),i.child;case 8:return bn(e,i,i.pendingProps.children,r),i.child;case 12:return bn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,ya(i,i.type,l.value),bn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,sr(i),f=Tn(f),l=l(f),i.flags|=1,bn(e,i,l,r),i.child;case 14:return dg(e,i,i.type,i.pendingProps,r);case 15:return pg(e,i,i.type,i.pendingProps,r);case 19:return Eg(e,i,r);case 31:return kx(e,i,r);case 22:return mg(e,i,r,i.pendingProps);case 24:return sr(i),l=Tn(sn),e===null?(f=Vu(),f===null&&(f=We,d=Hu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},Xu(i),ya(i,sn,f)):((e.lanes&r)!==0&&(Wu(e,i),oo(i,null,null,r),so()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ya(i,sn,l)):(l=d.cache,ya(i,sn,l),l!==f.cache&&Iu(i,[sn],r,!0))),bn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Yi(e){e.flags|=4}function Rf(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Qg())e.flags|=8192;else throw cr=Ml,ku}else e.flags&=-16777217}function bg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hv(i))if(Qg())e.flags|=8192;else throw cr=Ml,ku}function Il(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?fn():536870912,e.lanes|=i,$r|=i)}function po(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function Wx(e,i,r){var l=i.pendingProps;switch(Ou(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ki(sn),qt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(i)?Yi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zu())),je(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(Yi(i),d!==null?(je(i),bg(i,d)):(je(i),Rf(i,f,null,l,r))):d?d!==e.memoizedState?(Yi(i),je(i),bg(i,d)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Yi(i),je(i),Rf(i,f,e,l,r)),null;case 27:if(Pe(i),r=mt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=G.current,Hr(i)?am(i):(e=Lv(f,l,r),i.stateNode=e,Yi(i))}return je(i),null;case 5:if(Pe(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(d=G.current,Hr(i))am(i);else{var S=tc(mt.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[Je]=i,d[Sn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(An(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Yi(i)}}return je(i),Rf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Yi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=mt.current,Hr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=En,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Je]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Sv(e.nodeValue,r)),e||_a(i,!0)}else e=tc(e).createTextNode(l),e[Je]=i,i.stateNode=e}return je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Hr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Je]=i}else ar(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else r=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Jn(i),i):(Jn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Hr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Je]=i}else ar(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),f=!1}else f=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Jn(i),i):(Jn(i),null)}return Jn(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Il(i,i.updateQueue),je(i),null);case 4:return qt(),e===null&&Zf(i.stateNode.containerInfo),je(i),null;case 10:return ki(i.type),je(i),null;case 19:if(W(nn),l=i.memoizedState,l===null)return je(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)po(l,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Al(e),d!==null){for(i.flags|=128,po(l,!1),e=d.updateQueue,i.updateQueue=e,Il(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)$p(r,e),r=r.sibling;return nt(nn,nn.current&1|2),Ee&&Gi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&ht()>Xl&&(i.flags|=128,f=!0,po(l,!1),i.lanes=4194304)}else{if(!f)if(e=Al(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Il(i,e),po(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ee)return je(i),null}else 2*ht()-l.renderingStartTime>Xl&&r!==536870912&&(i.flags|=128,f=!0,po(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ht(),e.sibling=null,r=nn.current,nt(nn,f?r&1|2:r&1),Ee&&Gi(i,l.treeForkCount),e):(je(i),null);case 22:case 23:return Jn(i),Zu(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&Il(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&W(or),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ki(sn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function qx(e,i){switch(Ou(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(sn),qt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Pe(i),null;case 31:if(i.memoizedState!==null){if(Jn(i),i.alternate===null)throw Error(a(340));ar()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Jn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ar()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return W(nn),null;case 4:return qt(),null;case 10:return ki(i.type),null;case 22:case 23:return Jn(i),Zu(),e!==null&&W(or),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(sn),null;case 25:return null;default:return null}}function Ag(e,i){switch(Ou(i),i.tag){case 3:ki(sn),qt();break;case 26:case 27:case 5:Pe(i);break;case 4:qt();break;case 31:i.memoizedState!==null&&Jn(i);break;case 13:Jn(i);break;case 19:W(nn);break;case 10:ki(i.type);break;case 22:case 23:Jn(i),Zu(),e!==null&&W(or);break;case 24:ki(sn)}}function mo(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var d=r.create,S=r.inst;l=d(),S.destroy=l}r=r.next}while(r!==f)}}catch(b){Fe(i,i.return,b)}}function ba(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var S=l.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,f=i;var B=r,et=b;try{et()}catch(dt){Fe(f,B,dt)}}}l=l.next}while(l!==d)}}catch(dt){Fe(i,i.return,dt)}}function Rg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{vm(i,r)}catch(l){Fe(e,e.return,l)}}}function Cg(e,i,r){r.props=hr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Fe(e,i,l)}}function go(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Fe(e,i,f)}}function Ui(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Fe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Fe(e,i,f)}else r.current=null}function wg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Fe(e,e.return,f)}}function Cf(e,i,r){try{var l=e.stateNode;pS(l,e.type,r,i),l[Sn]=i}catch(f){Fe(e,e.return,f)}}function Dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function wf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Bi));else if(l!==4&&(l===27&&La(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Df(e,i,r),e=e.sibling;e!==null;)Df(e,i,r),e=e.sibling}function Hl(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&La(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Hl(e,i,r),e=e.sibling;e!==null;)Hl(e,i,r),e=e.sibling}function Ug(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);An(i,l,r),i[Je]=e,i[Sn]=r}catch(d){Fe(e,e.return,d)}}var ji=!1,cn=!1,Uf=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Yx(e,i){if(e=e.containerInfo,Jf=oc,e=Xp(e),Eu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var S=0,b=-1,B=-1,et=0,dt=0,_t=e,rt=null;e:for(;;){for(var ut;_t!==r||f!==0&&_t.nodeType!==3||(b=S+f),_t!==d||l!==0&&_t.nodeType!==3||(B=S+l),_t.nodeType===3&&(S+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)rt=_t,_t=ut;for(;;){if(_t===e)break e;if(rt===r&&++et===f&&(b=S),rt===d&&++dt===l&&(B=S),(ut=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ut}r=b===-1||B===-1?null:{start:b,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for($f={focusedElem:e,selectionRange:r},oc=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var kt=hr(r.type,f);e=l.getSnapshotBeforeUpdate(kt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)nh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function Ng(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ki(e,r),l&4&&mo(5,r);break;case 1:if(Ki(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){Fe(r,r.return,S)}else{var f=hr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(r,r.return,S)}}l&64&&Rg(r),l&512&&go(r,r.return);break;case 3:if(Ki(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{vm(e,i)}catch(S){Fe(r,r.return,S)}}break;case 27:i===null&&l&4&&Ug(r);case 26:case 5:Ki(e,r),i===null&&l&4&&wg(r),l&512&&go(r,r.return);break;case 12:Ki(e,r);break;case 31:Ki(e,r),l&4&&zg(e,r);break;case 13:Ki(e,r),l&4&&Fg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=nS.bind(null,r),MS(e,r))));break;case 22:if(l=r.memoizedState!==null||ji,!l){i=i!==null&&i.memoizedState!==null||cn,f=ji;var d=cn;ji=l,(cn=i)&&!d?Qi(e,r,(r.subtreeFlags&8772)!==0):Ki(e,r),ji=f,cn=d}break;case 30:break;default:Ki(e,r)}}function Og(e){var i=e.alternate;i!==null&&(e.alternate=null,Og(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ks(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function Zi(e,i,r){for(r=r.child;r!==null;)Pg(e,i,r),r=r.sibling}function Pg(e,i,r){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount($t,r)}catch{}switch(r.tag){case 26:cn||Ui(r,i),Zi(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:cn||Ui(r,i);var l=Qe,f=Vn;La(r.type)&&(Qe=r.stateNode,Vn=!1),Zi(e,i,r),bo(r.stateNode),Qe=l,Vn=f;break;case 5:cn||Ui(r,i);case 6:if(l=Qe,f=Vn,Qe=null,Zi(e,i,r),Qe=l,Vn=f,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(r.stateNode)}catch(d){Fe(r,i,d)}else try{Qe.removeChild(r.stateNode)}catch(d){Fe(r,i,d)}break;case 18:Qe!==null&&(Vn?(e=Qe,Rv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),os(e)):Rv(Qe,r.stateNode));break;case 4:l=Qe,f=Vn,Qe=r.stateNode.containerInfo,Vn=!0,Zi(e,i,r),Qe=l,Vn=f;break;case 0:case 11:case 14:case 15:ba(2,r,i),cn||ba(4,r,i),Zi(e,i,r);break;case 1:cn||(Ui(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Cg(r,i,l)),Zi(e,i,r);break;case 21:Zi(e,i,r);break;case 22:cn=(l=cn)||r.memoizedState!==null,Zi(e,i,r),cn=l;break;default:Zi(e,i,r)}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{os(e)}catch(r){Fe(i,i.return,r)}}}function Fg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{os(e)}catch(r){Fe(i,i.return,r)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Lg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Lg),i;default:throw Error(a(435,e.tag))}}function Gl(e,i){var r=jx(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=iS.bind(null,e,l);l.then(f,f)}})}function kn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=e,S=i,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(La(b.type)){Qe=b.stateNode,Vn=!1;break t}break;case 5:Qe=b.stateNode,Vn=!1;break t;case 3:case 4:Qe=b.stateNode.containerInfo,Vn=!0;break t}b=b.return}if(Qe===null)throw Error(a(160));Pg(d,S,f),Qe=null,Vn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Bg(i,e),i=i.sibling}var xi=null;function Bg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(i,e),Xn(e),l&4&&(ba(3,e,e.return),mo(3,e),ba(5,e,e.return));break;case 1:kn(i,e),Xn(e),l&512&&(cn||r===null||Ui(r,r.return)),l&64&&ji&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=xi;if(kn(i,e),Xn(e),l&512&&(cn||r===null||Ui(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Ja]||d[Je]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),An(d,l,r),d[Je]=e,q(d),l=d;break t;case"link":var S=Bv("link","href",f).get(l+(r.href||""));if(S){for(var b=0;b<S.length;b++)if(d=S[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(b,1);break e}}d=f.createElement(l),An(d,l,r),f.head.appendChild(d);break;case"meta":if(S=Bv("meta","content",f).get(l+(r.content||""))){for(b=0;b<S.length;b++)if(d=S[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(b,1);break e}}d=f.createElement(l),An(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[Je]=e,q(d),l=d}e.stateNode=l}else Iv(f,e.type,e.stateNode);else e.stateNode=Fv(f,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?Iv(f,e.type,e.stateNode):Fv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,r.memoizedProps)}break;case 27:kn(i,e),Xn(e),l&512&&(cn||r===null||Ui(r,r.return)),r!==null&&l&4&&Cf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(kn(i,e),Xn(e),l&512&&(cn||r===null||Ui(r,r.return)),e.flags&32){f=e.stateNode;try{Hn(f,"")}catch(kt){Fe(e,e.return,kt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Cf(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Uf=!0);break;case 6:if(kn(i,e),Xn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(ic=null,f=xi,xi=ec(i.containerInfo),kn(i,e),xi=f,Xn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{os(i.containerInfo)}catch(kt){Fe(e,e.return,kt)}Uf&&(Uf=!1,Ig(e));break;case 4:l=xi,xi=ec(e.stateNode.containerInfo),kn(i,e),Xn(e),xi=l;break;case 12:kn(i,e),Xn(e);break;case 31:kn(i,e),Xn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gl(e,l)));break;case 13:kn(i,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(kl=ht()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gl(e,l)));break;case 22:f=e.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,et=ji,dt=cn;if(ji=et||f,cn=dt||B,kn(i,e),cn=dt,ji=et,Xn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||B||ji||cn||dr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){B=r=i;try{if(d=B.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=B.stateNode;var _t=B.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(kt){Fe(B,B.return,kt)}}}else if(i.tag===6){if(r===null){B=i;try{B.stateNode.nodeValue=f?"":B.memoizedProps}catch(kt){Fe(B,B.return,kt)}}}else if(i.tag===18){if(r===null){B=i;try{var ut=B.stateNode;f?Cv(ut,!0):Cv(B.stateNode,!1)}catch(kt){Fe(B,B.return,kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Gl(e,r))));break;case 19:kn(i,e),Xn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Gl(e,l)));break;case 30:break;case 21:break;default:kn(i,e),Xn(e)}}function Xn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Dg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=wf(e);Hl(e,d,f);break;case 5:var S=r.stateNode;r.flags&32&&(Hn(S,""),r.flags&=-33);var b=wf(e);Hl(e,b,S);break;case 3:case 4:var B=r.stateNode.containerInfo,et=wf(e);Df(e,et,B);break;default:throw Error(a(161))}}catch(dt){Fe(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ig(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ki(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(e,i.alternate,i),i=i.sibling}function dr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ba(4,i,i.return),dr(i);break;case 1:Ui(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Cg(i,i.return,r),dr(i);break;case 27:bo(i.stateNode);case 26:case 5:Ui(i,i.return),dr(i);break;case 22:i.memoizedState===null&&dr(i);break;case 30:dr(i);break;default:dr(i)}e=e.sibling}}function Qi(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:Qi(f,d,r),mo(4,d);break;case 1:if(Qi(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(et){Fe(l,l.return,et)}if(l=d,f=l.updateQueue,f!==null){var b=l.stateNode;try{var B=f.shared.hiddenCallbacks;if(B!==null)for(f.shared.hiddenCallbacks=null,f=0;f<B.length;f++)gm(B[f],b)}catch(et){Fe(l,l.return,et)}}r&&S&64&&Rg(d),go(d,d.return);break;case 27:Ug(d);case 26:case 5:Qi(f,d,r),r&&l===null&&S&4&&wg(d),go(d,d.return);break;case 12:Qi(f,d,r);break;case 31:Qi(f,d,r),r&&S&4&&zg(f,d);break;case 13:Qi(f,d,r),r&&S&4&&Fg(f,d);break;case 22:d.memoizedState===null&&Qi(f,d,r),go(d,d.return);break;case 30:break;default:Qi(f,d,r)}i=i.sibling}}function Lf(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&eo(r))}function Nf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&eo(e))}function Si(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Hg(e,i,r,l),i=i.sibling}function Hg(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Si(e,i,r,l),f&2048&&mo(9,i);break;case 1:Si(e,i,r,l);break;case 3:Si(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&eo(e)));break;case 12:if(f&2048){Si(e,i,r,l),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,b=d.onPostCommit;typeof b=="function"&&b(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Fe(i,i.return,B)}}else Si(e,i,r,l);break;case 31:Si(e,i,r,l);break;case 13:Si(e,i,r,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Si(e,i,r,l):vo(e,i):d._visibility&2?Si(e,i,r,l):(d._visibility|=2,Kr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Lf(S,i);break;case 24:Si(e,i,r,l),f&2048&&Nf(i.alternate,i);break;default:Si(e,i,r,l)}}function Kr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,b=r,B=l,et=S.flags;switch(S.tag){case 0:case 11:case 15:Kr(d,S,b,B,f),mo(8,S);break;case 23:break;case 22:var dt=S.stateNode;S.memoizedState!==null?dt._visibility&2?Kr(d,S,b,B,f):vo(d,S):(dt._visibility|=2,Kr(d,S,b,B,f)),f&&et&2048&&Lf(S.alternate,S);break;case 24:Kr(d,S,b,B,f),f&&et&2048&&Nf(S.alternate,S);break;default:Kr(d,S,b,B,f)}i=i.sibling}}function vo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:vo(r,l),f&2048&&Lf(l.alternate,l);break;case 24:vo(r,l),f&2048&&Nf(l.alternate,l);break;default:vo(r,l)}i=i.sibling}}var _o=8192;function Qr(e,i,r){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)Gg(e,i,r),e=e.sibling}function Gg(e,i,r){switch(e.tag){case 26:Qr(e,i,r),e.flags&_o&&e.memoizedState!==null&&OS(r,xi,e.memoizedState,e.memoizedProps);break;case 5:Qr(e,i,r);break;case 3:case 4:var l=xi;xi=ec(e.stateNode.containerInfo),Qr(e,i,r),xi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=_o,_o=16777216,Qr(e,i,r),_o=l):Qr(e,i,r));break;default:Qr(e,i,r)}}function Vg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function yo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];_n=l,Xg(l,e)}Vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kg(e),e=e.sibling}function kg(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&ba(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Vl(e)):yo(e);break;default:yo(e)}}function Vl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];_n=l,Xg(l,e)}Vg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ba(8,i,i.return),Vl(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Vl(i));break;default:Vl(i)}e=e.sibling}}function Xg(e,i){for(;_n!==null;){var r=_n;switch(r.tag){case 0:case 11:case 15:ba(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:eo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,_n=l;else t:for(r=e;_n!==null;){l=_n;var f=l.sibling,d=l.return;if(Og(l),l===r){_n=null;break t}if(f!==null){f.return=d,_n=f;break t}_n=d}}}var Zx={getCacheForType:function(e){var i=Tn(sn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Tn(sn).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,me=null,ye=0,ze=0,$n=null,Aa=!1,Jr=!1,Of=!1,Ji=0,en=0,Ra=0,pr=0,Pf=0,ti=0,$r=0,xo=null,Wn=null,zf=!1,kl=0,Wg=0,Xl=1/0,Wl=null,Ca=null,dn=0,wa=null,ts=null,$i=0,Ff=0,Bf=null,qg=null,So=0,If=null;function ei(){return(Le&2)!==0&&ye!==0?ye&-ye:O.T!==null?Wf():Gs()}function Yg(){if(ti===0)if((ye&536870912)===0||Ee){var e=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function qn(e,i,r){(e===We&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(es(e,0),Da(e,ye,ti,!1)),xn(e,r),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(pr|=r),en===4&&Da(e,ye,ti,!1)),Li(e))}function jg(e,i,r){if((Le&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||ie(e,i),f=l?$x(e,i):Gf(e,i,!0),d=l;do{if(f===0){Jr&&!l&&Da(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!Qx(r)){f=Gf(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var b=e;f=xo;var B=b.current.memoizedState.isDehydrated;if(B&&(es(b,S).flags|=256),S=Gf(b,S,!1),S!==2){if(Of&&!B){b.errorRecoveryDisabledLanes|=d,pr|=d,f=4;break t}d=Wn,Wn=f,d!==null&&(Wn===null?Wn=d:Wn.push.apply(Wn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){es(e,0),Da(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Da(l,i,ti,!Aa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=kl+300-ht(),10<f)){if(Da(l,i,ti,!Aa),Lt(l,0,!0)!==0)break t;$i=i,l.timeoutHandle=bv(Zg.bind(null,l,r,Wn,Wl,zf,i,ti,pr,$r,Aa,d,"Throttled",-0,0),f);break t}Zg(l,r,Wn,Wl,zf,i,ti,pr,$r,Aa,d,null,-0,0)}}break}while(!0);Li(e)}function Zg(e,i,r,l,f,d,S,b,B,et,dt,_t,rt,ut){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Gg(i,d,_t);var kt=(d&62914560)===d?kl-ht():(d&4194048)===d?Wg-ht():0;if(kt=PS(_t,kt),kt!==null){$i=d,e.cancelPendingCommit=kt(iv.bind(null,e,i,d,r,l,f,S,b,B,dt,_t,null,rt,ut)),Da(e,d,S,!et);return}}iv(e,i,d,r,l,f,S,b,B)}function Qx(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!Zn(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Da(e,i,r,l){i&=~Pf,i&=~pr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-ne(f),S=1<<d;l[d]=-1,f&=~S}r!==0&&Is(e,r,i)}function ql(){return(Le&6)===0?(Mo(0),!1):!0}function Hf(){if(me!==null){if(ze===0)var e=me.return;else e=me,Vi=rr=null,ef(e),Wr=null,io=0,e=me;for(;e!==null;)Ag(e.alternate,e),e=e.return;me=null}}function es(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,vS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),$i=0,Hf(),We=e,me=r=Hi(e.current,null),ye=i,ze=0,$n=null,Aa=!1,Jr=ie(e,i),Of=!1,$r=ti=Pf=pr=Ra=en=0,Wn=xo=null,zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-ne(l),d=1<<f;i|=e[f],l&=~d}return Ji=i,dl(),r}function Kg(e,i){ce=null,O.H=fo,i===Xr||i===Sl?(i=hm(),ze=3):i===ku?(i=hm(),ze=4):ze=i===_f?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,me===null&&(en=1,Pl(e,si(i,e.current)))}function Qg(){var e=Qn.current;return e===null?!0:(ye&4194048)===ye?ui===null:(ye&62914560)===ye||(ye&536870912)!==0?e===ui:!1}function Jg(){var e=O.H;return O.H=fo,e===null?fo:e}function $g(){var e=O.A;return O.A=Zx,e}function Yl(){en=4,Aa||(ye&4194048)!==ye&&Qn.current!==null||(Jr=!0),(Ra&134217727)===0&&(pr&134217727)===0||We===null||Da(We,ye,ti,!1)}function Gf(e,i,r){var l=Le;Le|=2;var f=Jg(),d=$g();(We!==e||ye!==i)&&(Wl=null,es(e,i)),i=!1;var S=en;t:do try{if(ze!==0&&me!==null){var b=me,B=$n;switch(ze){case 8:Hf(),S=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(i=!0);var et=ze;if(ze=0,$n=null,ns(e,b,B,et),r&&Jr){S=0;break t}break;default:et=ze,ze=0,$n=null,ns(e,b,B,et)}}Jx(),S=en;break}catch(dt){Kg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Vi=rr=null,Le=l,O.H=f,O.A=d,me===null&&(We=null,ye=0,dl()),S}function Jx(){for(;me!==null;)tv(me)}function $x(e,i){var r=Le;Le|=2;var l=Jg(),f=$g();We!==e||ye!==i?(Wl=null,Xl=ht()+500,es(e,i)):Jr=ie(e,i);t:do try{if(ze!==0&&me!==null){i=me;var d=$n;e:switch(ze){case 1:ze=0,$n=null,ns(e,i,d,1);break;case 2:case 9:if(um(d)){ze=0,$n=null,ev(i);break}i=function(){ze!==2&&ze!==9||We!==e||(ze=7),Li(e)},d.then(i,i);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:um(d)?(ze=0,$n=null,ev(i)):(ze=0,$n=null,ns(e,i,d,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var b=me;if(S?Hv(S):b.stateNode.complete){ze=0,$n=null;var B=b.sibling;if(B!==null)me=B;else{var et=b.return;et!==null?(me=et,jl(et)):me=null}break e}}ze=0,$n=null,ns(e,i,d,5);break;case 6:ze=0,$n=null,ns(e,i,d,6);break;case 8:Hf(),en=6;break t;default:throw Error(a(462))}}tS();break}catch(dt){Kg(e,dt)}while(!0);return Vi=rr=null,O.H=l,O.A=f,Le=r,me!==null?0:(We=null,ye=0,dl(),en)}function tS(){for(;me!==null&&!A();)tv(me)}function tv(e){var i=Tg(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,i===null?jl(e):me=i}function ev(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=_g(r,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=_g(r,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:ef(i);default:Ag(r,i),i=me=$p(i,Ji),i=Tg(r,i,Ji)}e.memoizedProps=e.pendingProps,i===null?jl(e):me=i}function ns(e,i,r,l){Vi=rr=null,ef(i),Wr=null,io=0;var f=i.return;try{if(Vx(e,f,i,r,ye)){en=1,Pl(e,si(r,e.current)),me=null;return}}catch(d){if(f!==null)throw me=f,d;en=1,Pl(e,si(r,e.current)),me=null;return}i.flags&32768?(Ee||l===1?e=!0:Jr||(ye&536870912)!==0?e=!1:(Aa=e=!0,(l===2||l===9||l===3||l===6)&&(l=Qn.current,l!==null&&l.tag===13&&(l.flags|=16384))),nv(i,e)):jl(i)}function jl(e){var i=e;do{if((i.flags&32768)!==0){nv(i,Aa);return}e=i.return;var r=Wx(i.alternate,i,Ji);if(r!==null){me=r;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);en===0&&(en=5)}function nv(e,i){do{var r=qx(e.alternate,e);if(r!==null){r.flags&=32767,me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=r}while(e!==null);en=6,me=null}function iv(e,i,r,l,f,d,S,b,B){e.cancelPendingCommit=null;do Zl();while(dn!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Cu,gi(e,r,d,S,b,B),e===We&&(me=We=null,ye=0),ts=i,wa=e,$i=r,Ff=d,Bf=f,qg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aS(Dt,function(){return lv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,f=$.p,$.p=2,S=Le,Le|=4;try{Yx(e,i,r)}finally{Le=S,$.p=f,O.T=l}}dn=1,av(),rv(),sv()}}function av(){if(dn===1){dn=0;var e=wa,i=ts,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=$.p;$.p=2;var f=Le;Le|=4;try{Bg(i,e);var d=$f,S=Xp(e.containerInfo),b=d.focusedElem,B=d.selectionRange;if(S!==b&&b&&b.ownerDocument&&kp(b.ownerDocument.documentElement,b)){if(B!==null&&Eu(b)){var et=B.start,dt=B.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var _t=b.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ut=rt.getSelection(),kt=b.textContent.length,te=Math.min(B.start,kt),ke=B.end===void 0?te:Math.min(B.end,kt);!ut.extend&&te>ke&&(S=ke,ke=te,te=S);var K=Vp(b,te),V=Vp(b,ke);if(K&&V&&(ut.rangeCount!==1||ut.anchorNode!==K.node||ut.anchorOffset!==K.offset||ut.focusNode!==V.node||ut.focusOffset!==V.offset)){var tt=_t.createRange();tt.setStart(K.node,K.offset),ut.removeAllRanges(),te>ke?(ut.addRange(tt),ut.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),ut.addRange(tt))}}}}for(_t=[],ut=b;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var pt=_t[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}oc=!!Jf,$f=Jf=null}finally{Le=f,$.p=l,O.T=r}}e.current=i,dn=2}}function rv(){if(dn===2){dn=0;var e=wa,i=ts,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=$.p;$.p=2;var f=Le;Le|=4;try{Ng(e,i.alternate,i)}finally{Le=f,$.p=l,O.T=r}}dn=3}}function sv(){if(dn===4||dn===3){dn=0,at();var e=wa,i=ts,r=$i,l=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?dn=5:(dn=0,ts=wa=null,ov(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ca=null),wr(r),i=i.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot($t,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=O.T,f=$.p,$.p=2,O.T=null;try{for(var d=e.onRecoverableError,S=0;S<l.length;S++){var b=l[S];d(b.value,{componentStack:b.stack})}}finally{O.T=i,$.p=f}}($i&3)!==0&&Zl(),Li(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===If?So++:(So=0,If=e):So=0,Mo(0)}}function ov(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,eo(i)))}function Zl(){return av(),rv(),sv(),lv()}function lv(){if(dn!==5)return!1;var e=wa,i=Ff;Ff=0;var r=wr($i),l=O.T,f=$.p;try{$.p=32>r?32:r,O.T=null,r=Bf,Bf=null;var d=wa,S=$i;if(dn=0,ts=wa=null,$i=0,(Le&6)!==0)throw Error(a(331));var b=Le;if(Le|=4,kg(d.current),Hg(d,d.current,S,r),Le=b,Mo(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot($t,d)}catch{}return!0}finally{$.p=f,O.T=l,ov(e,i)}}function cv(e,i,r){i=si(r,i),i=vf(e.stateNode,i,2),e=Ma(e,i,2),e!==null&&(xn(e,2),Li(e))}function Fe(e,i,r){if(e.tag===3)cv(e,e,r);else for(;i!==null;){if(i.tag===3){cv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ca===null||!Ca.has(l))){e=si(r,e),r=ug(2),l=Ma(i,r,2),l!==null&&(fg(r,l,i,e),xn(l,2),Li(l));break}}i=i.return}}function Vf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Kx;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Of=!0,f.add(r),e=eS.bind(null,e,i,r),i.then(e,e))}function eS(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,We===e&&(ye&r)===r&&(en===4||en===3&&(ye&62914560)===ye&&300>ht()-kl?(Le&2)===0&&es(e,0):Pf|=r,$r===ye&&($r=0)),Li(e)}function uv(e,i){i===0&&(i=fn()),e=nr(e,i),e!==null&&(xn(e,i),Li(e))}function nS(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),uv(e,r)}function iS(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),uv(e,r)}function aS(e,i){return Bt(e,i)}var Kl=null,is=null,kf=!1,Ql=!1,Xf=!1,Ua=0;function Li(e){e!==is&&e.next===null&&(is===null?Kl=is=e:is=is.next=e),Ql=!0,kf||(kf=!0,sS())}function Mo(e,i){if(!Xf&&Ql){Xf=!0;do for(var r=!1,l=Kl;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-ne(42|e)+1)-1,d&=f&~(S&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,pv(l,d))}else d=ye,d=Lt(l,l===We?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ie(l,d)||(r=!0,pv(l,d));l=l.next}while(r);Xf=!1}}function rS(){fv()}function fv(){Ql=kf=!1;var e=0;Ua!==0&&gS()&&(e=Ua);for(var i=ht(),r=null,l=Kl;l!==null;){var f=l.next,d=hv(l,i);d===0?(l.next=null,r===null?Kl=f:r.next=f,f===null&&(is=r)):(r=l,(e!==0||(d&3)!==0)&&(Ql=!0)),l=f}dn!==0&&dn!==5||Mo(e),Ua!==0&&(Ua=0)}function hv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-ne(d),b=1<<S,B=f[S];B===-1?((b&r)===0||(b&l)!==0)&&(f[S]=Ke(b,i)):B<=i&&(e.expiredLanes|=b),d&=~b}if(i=We,r=ye,r=Lt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&N(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ie(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&N(l),wr(r)){case 2:case 8:r=Yt;break;case 32:r=Dt;break;case 268435456:r=_e;break;default:r=Dt}return l=dv.bind(null,e),r=Bt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&N(l),e.callbackPriority=2,e.callbackNode=null,2}function dv(e,i){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Zl()&&e.callbackNode!==r)return null;var l=ye;return l=Lt(e,e===We?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(jg(e,l,i),hv(e,ht()),e.callbackNode!=null&&e.callbackNode===r?dv.bind(null,e):null)}function pv(e,i){if(Zl())return null;jg(e,i,!0)}function sS(){_S(function(){(Le&6)!==0?Bt(vt,rS):fv()})}function Wf(){if(Ua===0){var e=Vr;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ua=e}return Ua}function mv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function gv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function oS(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=mv((f[Sn]||null).action),S=l.submitter;S&&(i=(i=S[Sn]||null)?mv(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var b=new cl("action","action",null,l,f);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var B=S?gv(f,S):new FormData(f);ff(r,{pending:!0,data:B,method:f.method,action:d},null,B)}}else typeof d=="function"&&(b.preventDefault(),B=S?gv(f,S):new FormData(f),ff(r,{pending:!0,data:B,method:f.method,action:d},d,B))},currentTarget:f}]})}}for(var qf=0;qf<Ru.length;qf++){var Yf=Ru[qf],lS=Yf.toLowerCase(),cS=Yf[0].toUpperCase()+Yf.slice(1);yi(lS,"on"+cS)}yi(Yp,"onAnimationEnd"),yi(jp,"onAnimationIteration"),yi(Zp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(bx,"onTransitionRun"),yi(Ax,"onTransitionStart"),yi(Rx,"onTransitionCancel"),yi(Kp,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function vv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var b=l[S],B=b.instance,et=b.currentTarget;if(b=b.listener,B!==d&&f.isPropagationStopped())break t;d=b,f.currentTarget=et;try{d(f)}catch(dt){hl(dt)}f.currentTarget=null,d=B}else for(S=0;S<l.length;S++){if(b=l[S],B=b.instance,et=b.currentTarget,b=b.listener,B!==d&&f.isPropagationStopped())break t;d=b,f.currentTarget=et;try{d(f)}catch(dt){hl(dt)}f.currentTarget=null,d=B}}}}function ge(e,i){var r=i[Vs];r===void 0&&(r=i[Vs]=new Set);var l=e+"__bubble";r.has(l)||(_v(i,e,2,!1),r.add(l))}function jf(e,i,r){var l=0;i&&(l|=4),_v(r,e,l,i)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[Jl]){e[Jl]=!0,bt.forEach(function(r){r!=="selectionchange"&&(uS.has(r)||jf(r,!1,e),jf(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Jl]||(i[Jl]=!0,jf("selectionchange",!1,i))}}function _v(e,i,r,l){switch(Yv(i)){case 2:var f=BS;break;case 8:f=IS;break;default:f=uh}r=f.bind(null,i,r,e),f=void 0,!pu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function Kf(e,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var b=l.stateNode.containerInfo;if(b===f)break;if(S===4)for(S=l.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;b!==null;){if(S=C(b),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){l=d=S;continue t}b=b.parentNode}}l=l.return}Ep(function(){var et=d,dt=hu(r),_t=[];t:{var rt=Qp.get(e);if(rt!==void 0){var ut=cl,kt=e;switch(e){case"keypress":if(ol(r)===0)break t;case"keydown":case"keyup":ut=ix;break;case"focusin":kt="focus",ut=_u;break;case"focusout":kt="blur",ut=_u;break;case"beforeblur":case"afterblur":ut=_u;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=sx;break;case Yp:case jp:case Zp:ut=jy;break;case Kp:ut=lx;break;case"scroll":case"scrollend":ut=ky;break;case"wheel":ut=ux;break;case"copy":case"cut":case"paste":ut=Ky;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Cp;break;case"toggle":case"beforetoggle":ut=hx}var te=(i&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),K=te?rt!==null?rt+"Capture":null:rt;te=[];for(var V=et,tt;V!==null;){var pt=V;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||K===null||(pt=Xs(V,K),pt!=null&&te.push(To(V,pt,tt))),ke)break;V=V.return}0<te.length&&(rt=new ut(rt,kt,null,r,dt),_t.push({event:rt,listeners:te}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",rt&&r!==fu&&(kt=r.relatedTarget||r.fromElement)&&(C(kt)||kt[Fi]))break t;if((ut||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ut?(kt=r.relatedTarget||r.toElement,ut=et,kt=kt?C(kt):null,kt!==null&&(ke=c(kt),te=kt.tag,kt!==ke||te!==5&&te!==27&&te!==6)&&(kt=null)):(ut=null,kt=et),ut!==kt)){if(te=Ap,pt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(te=Cp,pt="onPointerLeave",K="onPointerEnter",V="pointer"),ke=ut==null?rt:st(ut),tt=kt==null?rt:st(kt),rt=new te(pt,V+"leave",ut,r,dt),rt.target=ke,rt.relatedTarget=tt,pt=null,C(dt)===et&&(te=new te(K,V+"enter",kt,r,dt),te.target=tt,te.relatedTarget=ke,pt=te),ke=pt,ut&&kt)e:{for(te=fS,K=ut,V=kt,tt=0,pt=K;pt;pt=te(pt))tt++;pt=0;for(var Kt=V;Kt;Kt=te(Kt))pt++;for(;0<tt-pt;)K=te(K),tt--;for(;0<pt-tt;)V=te(V),pt--;for(;tt--;){if(K===V||V!==null&&K===V.alternate){te=K;break e}K=te(K),V=te(V)}te=null}else te=null;ut!==null&&yv(_t,rt,ut,te,!1),kt!==null&&ke!==null&&yv(_t,ke,kt,te,!0)}}t:{if(rt=et?st(et):window,ut=rt.nodeName&&rt.nodeName.toLowerCase(),ut==="select"||ut==="input"&&rt.type==="file")var we=zp;else if(Op(rt))if(Fp)we=Mx;else{we=xx;var Wt=yx}else ut=rt.nodeName,!ut||ut.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&uu(et.elementType)&&(we=zp):we=Sx;if(we&&(we=we(e,et))){Pp(_t,we,r,dt);break t}Wt&&Wt(e,rt,et),e==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&Rn(rt,"number",rt.value)}switch(Wt=et?st(et):window,e){case"focusin":(Op(Wt)||Wt.contentEditable==="true")&&(Or=Wt,Tu=et,Js=null);break;case"focusout":Js=Tu=Or=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Wp(_t,r,dt);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Wp(_t,r,dt)}var ue;if(xu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Nr?Lp(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(wp&&r.locale!=="ko"&&(Nr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Nr&&(ue=Tp()):(ma=dt,mu="value"in ma?ma.value:ma.textContent,Nr=!0)),Wt=$l(et,xe),0<Wt.length&&(xe=new Rp(xe,e,null,r,dt),_t.push({event:xe,listeners:Wt}),ue?xe.data=ue:(ue=Np(r),ue!==null&&(xe.data=ue)))),(ue=px?mx(e,r):gx(e,r))&&(xe=$l(et,"onBeforeInput"),0<xe.length&&(Wt=new Rp("onBeforeInput","beforeinput",null,r,dt),_t.push({event:Wt,listeners:xe}),Wt.data=ue)),oS(_t,e,et,r,dt)}vv(_t,i)})}function To(e,i,r){return{instance:e,listener:i,currentTarget:r}}function $l(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Xs(e,r),f!=null&&l.unshift(To(e,f,d)),f=Xs(e,i),f!=null&&l.push(To(e,f,d))),e.tag===3)return l;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yv(e,i,r,l,f){for(var d=i._reactName,S=[];r!==null&&r!==l;){var b=r,B=b.alternate,et=b.stateNode;if(b=b.tag,B!==null&&B===l)break;b!==5&&b!==26&&b!==27||et===null||(B=et,f?(et=Xs(r,d),et!=null&&S.unshift(To(r,et,B))):f||(et=Xs(r,d),et!=null&&S.push(To(r,et,B)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function xv(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function Sv(e,i){return i=xv(i),xv(e)===i}function Ve(e,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Hn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Hn(e,""+l);break;case"className":qe(e,"class",l);break;case"tabIndex":qe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qe(e,r,l);break;case"style":Sp(e,l,d);break;case"data":if(i!=="object"){qe(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=rl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&Ve(e,i,"name",f.name,f,null),Ve(e,i,"formEncType",f.formEncType,f,null),Ve(e,i,"formMethod",f.formMethod,f,null),Ve(e,i,"formTarget",f.formTarget,f,null)):(Ve(e,i,"encType",f.encType,f,null),Ve(e,i,"method",f.method,f,null),Ve(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=rl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Bi);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=rl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Me(e,"popover",l);break;case"xlinkActuate":Ce(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ce(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ce(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ce(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ce(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ce(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ce(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ce(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ce(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Me(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Gy.get(r)||r,Me(e,r,l))}}function Qf(e,i,r,l,f,d){switch(r){case"style":Sp(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Hn(e,l):(typeof l=="number"||typeof l=="bigint")&&Hn(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=e[Sn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Me(e,r,l)}}}function An(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,d,S,r,null)}}f&&Ve(e,i,"srcSet",r.srcSet,r,null),l&&Ve(e,i,"src",r.src,r,null);return;case"input":ge("invalid",e);var b=d=S=f=null,B=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":f=dt;break;case"type":S=dt;break;case"checked":B=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Ve(e,i,l,dt,r,null)}}Nn(e,d,b,B,et,S,f,!1);return;case"select":ge("invalid",e),l=S=d=null;for(f in r)if(r.hasOwnProperty(f)&&(b=r[f],b!=null))switch(f){case"value":d=b;break;case"defaultValue":S=b;break;case"multiple":l=b;default:Ve(e,i,f,b,r,null)}i=d,r=S,e.multiple=!!l,i!=null?$e(e,!!l,i,!1):r!=null&&$e(e,!!l,r,!0);return;case"textarea":ge("invalid",e),d=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(b=r[S],b!=null))switch(S){case"value":l=b;break;case"defaultValue":f=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Ve(e,i,S,b,r,null)}Dr(e,l,f,d);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(l=r[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,B,l,r,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Eo.length;l++)ge(Eo[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,et,l,r,null)}return;default:if(uu(i)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&Qf(e,i,dt,l,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(l=r[b],l!=null&&Ve(e,i,b,l,r,null))}function pS(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,b=null,B=null,et=null,dt=null;for(ut in r){var _t=r[ut];if(r.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":B=_t;default:l.hasOwnProperty(ut)||Ve(e,i,ut,null,l,_t)}}for(var rt in l){var ut=l[rt];if(_t=r[rt],l.hasOwnProperty(rt)&&(ut!=null||_t!=null))switch(rt){case"type":d=ut;break;case"name":f=ut;break;case"checked":et=ut;break;case"defaultChecked":dt=ut;break;case"value":S=ut;break;case"defaultValue":b=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==_t&&Ve(e,i,rt,ut,l,_t)}}He(e,S,b,B,et,dt,d,f);return;case"select":ut=S=b=rt=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ut=B;default:l.hasOwnProperty(d)||Ve(e,i,d,null,l,B)}for(f in l)if(d=l[f],B=r[f],l.hasOwnProperty(f)&&(d!=null||B!=null))switch(f){case"value":rt=d;break;case"defaultValue":b=d;break;case"multiple":S=d;default:d!==B&&Ve(e,i,f,d,l,B)}i=b,r=S,l=ut,rt!=null?$e(e,!!r,rt,!1):!!l!=!!r&&(i!=null?$e(e,!!r,i,!0):$e(e,!!r,r?[]:"",!1));return;case"textarea":ut=rt=null;for(b in r)if(f=r[b],r.hasOwnProperty(b)&&f!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,i,b,null,l,f)}for(S in l)if(f=l[S],d=r[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":rt=f;break;case"defaultValue":ut=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Ve(e,i,S,f,l,d)}Mn(e,rt,ut);return;case"option":for(var kt in r)if(rt=r[kt],r.hasOwnProperty(kt)&&rt!=null&&!l.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ve(e,i,kt,null,l,rt)}for(B in l)if(rt=l[B],ut=r[B],l.hasOwnProperty(B)&&rt!==ut&&(rt!=null||ut!=null))switch(B){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ve(e,i,B,rt,l,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)rt=r[te],r.hasOwnProperty(te)&&rt!=null&&!l.hasOwnProperty(te)&&Ve(e,i,te,null,l,rt);for(et in l)if(rt=l[et],ut=r[et],l.hasOwnProperty(et)&&rt!==ut&&(rt!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:Ve(e,i,et,rt,l,ut)}return;default:if(uu(i)){for(var ke in r)rt=r[ke],r.hasOwnProperty(ke)&&rt!==void 0&&!l.hasOwnProperty(ke)&&Qf(e,i,ke,void 0,l,rt);for(dt in l)rt=l[dt],ut=r[dt],!l.hasOwnProperty(dt)||rt===ut||rt===void 0&&ut===void 0||Qf(e,i,dt,rt,l,ut);return}}for(var K in r)rt=r[K],r.hasOwnProperty(K)&&rt!=null&&!l.hasOwnProperty(K)&&Ve(e,i,K,null,l,rt);for(_t in l)rt=l[_t],ut=r[_t],!l.hasOwnProperty(_t)||rt===ut||rt==null&&ut==null||Ve(e,i,_t,rt,l,ut)}function Mv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,S=f.initiatorType,b=f.duration;if(d&&b&&Mv(S)){for(S=0,b=f.responseEnd,l+=1;l<r.length;l++){var B=r[l],et=B.startTime;if(et>b)break;var dt=B.transferSize,_t=B.initiatorType;dt&&Mv(_t)&&(B=B.responseEnd,S+=dt*(B<b?1:(b-et)/(B-et)))}if(--l,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function tc(e){return e.nodeType===9?e:e.ownerDocument}function Ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function th(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,Av=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof Av<"u"?function(e){return Av.resolve(null).then(e).catch(yS)}:bv;function yS(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function Rv(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),os(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")bo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,bo(r);for(var d=r.firstChild;d;){var S=d.nextSibling,b=d.nodeName;d[Ja]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&bo(e.ownerDocument.body);r=f}while(r);os(i)}function Cv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function nh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":nh(r),ks(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function xS(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ja])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function SS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=fi(e.nextSibling),e===null))return null;return e}function wv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=fi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function fi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var rh=null;function Dv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return fi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Uv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Lv(e,i,r){switch(i=tc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function bo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ks(e)}var hi=new Map,Nv=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=$.d;$.d={f:ES,r:TS,D:bS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function ES(){var e=ta.f(),i=ql();return e||i}function TS(e){var i=Z(e);i!==null&&i.tag===5&&i.type==="form"?Km(i):ta.r(e)}var as=typeof document>"u"?null:document;function Ov(e,i,r){var l=as;if(l&&typeof i=="string"&&i){var f=vn(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Nv.has(f)||(Nv.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),An(i,"link",e),q(i),l.head.appendChild(i)))}}function bS(e){ta.D(e),Ov("dns-prefetch",e,null)}function AS(e,i){ta.C(e,i),Ov("preconnect",e,i)}function RS(e,i,r){ta.L(e,i,r);var l=as;if(l&&e&&i){var f='link[rel="preload"][as="'+vn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+vn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+vn(r.imageSizes)+'"]')):f+='[href="'+vn(e)+'"]';var d=f;switch(i){case"style":d=rs(e);break;case"script":d=ss(e)}hi.has(d)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),hi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Ao(d))||i==="script"&&l.querySelector(Ro(d))||(i=l.createElement("link"),An(i,"link",e),q(i),l.head.appendChild(i)))}}function CS(e,i){ta.m(e,i);var r=as;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+vn(l)+'"][href="'+vn(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ss(e)}if(!hi.has(d)&&(e=g({rel:"modulepreload",href:e},i),hi.set(d,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ro(d)))return}l=r.createElement("link"),An(l,"link",e),q(l),r.head.appendChild(l)}}}function wS(e,i,r){ta.S(e,i,r);var l=as;if(l&&e){var f=ot(l).hoistableStyles,d=rs(e);i=i||"default";var S=f.get(d);if(!S){var b={loading:0,preload:null};if(S=l.querySelector(Ao(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=hi.get(d))&&sh(e,r);var B=S=l.createElement("link");q(B),An(B,"link",e),B._p=new Promise(function(et,dt){B.onload=et,B.onerror=dt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,nc(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:b},f.set(d,S)}}}function DS(e,i){ta.X(e,i);var r=as;if(r&&e){var l=ot(r).hoistableScripts,f=ss(e),d=l.get(f);d||(d=r.querySelector(Ro(f)),d||(e=g({src:e,async:!0},i),(i=hi.get(f))&&oh(e,i),d=r.createElement("script"),q(d),An(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function US(e,i){ta.M(e,i);var r=as;if(r&&e){var l=ot(r).hoistableScripts,f=ss(e),d=l.get(f);d||(d=r.querySelector(Ro(f)),d||(e=g({src:e,async:!0,type:"module"},i),(i=hi.get(f))&&oh(e,i),d=r.createElement("script"),q(d),An(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Pv(e,i,r,l){var f=(f=mt.current)?ec(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=rs(r.href),r=ot(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=rs(r.href);var d=ot(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(Ao(e)))&&!d._p&&(S.instance=d,S.state.loading=5),hi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},hi.set(e,r),d||LS(f,e,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ss(r),r=ot(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function rs(e){return'href="'+vn(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function zv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function LS(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),An(i,"link",r),q(i),e.head.appendChild(i))}function ss(e){return'[src="'+vn(e)+'"]'}function Ro(e){return"script[async]"+e}function Fv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+vn(r.href)+'"]');if(l)return i.instance=l,q(l),l;var f=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),q(l),An(l,"style",f),nc(l,r.precedence,e),i.instance=l;case"stylesheet":f=rs(r.href);var d=e.querySelector(Ao(f));if(d)return i.state.loading|=4,i.instance=d,q(d),d;l=zv(r),(f=hi.get(f))&&sh(l,f),d=(e.ownerDocument||e).createElement("link"),q(d);var S=d;return S._p=new Promise(function(b,B){S.onload=b,S.onerror=B}),An(d,"link",l),i.state.loading|=4,nc(d,r.precedence,e),i.instance=d;case"script":return d=ss(r.src),(f=e.querySelector(Ro(d)))?(i.instance=f,q(f),f):(l=r,(f=hi.get(d))&&(l=g({},r),oh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),q(f),An(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,nc(l,r.precedence,e));return i.instance}function nc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var b=l[S];if(b.dataset.precedence===i)d=b;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function sh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ic=null;function Bv(e,i,r){if(ic===null){var l=new Map,f=ic=new Map;f.set(r,l)}else f=ic,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var d=r[f];if(!(d[Ja]||d[Je]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var b=l.get(S);b?b.push(d):l.set(S,[d])}}return l}function Iv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function NS(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Hv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function OS(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=rs(l.href),d=i.querySelector(Ao(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=ac.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,q(d);return}d=i.ownerDocument||i,l=zv(l),(f=hi.get(f))&&sh(l,f),d=d.createElement("link"),q(d);var S=d;S._p=new Promise(function(b,B){S.onload=b,S.onerror=B}),An(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=ac.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var lh=0;function PS(e,i){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&lh===0&&(lh=62500*mS());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>lh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rc=null;function sc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,i.forEach(zS,e),rc=null,ac.call(e))}function zS(e,i){if(!(i.state.loading&4)){var r=rc.get(e);if(r)var l=r.get(null);else{r=new Map,rc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=r.get(S)||l,d===l&&r.set(null,f),r.set(S,f),this.count++,l=ac.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function FS(e,i,r,l,f,d,S,b,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Gv(e,i,r,l,f,d,S,b,B,et,dt,_t){return e=new FS(e,i,r,S,B,et,dt,_t,b),i=1,d===!0&&(i|=24),d=Kn(3,null,null,i),e.current=d,d.stateNode=e,i=Hu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},Xu(d),e}function Vv(e){return e?(e=Fr,e):Fr}function kv(e,i,r,l,f,d){f=Vv(f),l.context===null?l.context=f:l.pendingContext=f,l=Sa(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Ma(e,l,i),r!==null&&(qn(r,e,i),ro(r,e,i))}function Xv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function ch(e,i){Xv(e,i),(e=e.alternate)&&Xv(e,i)}function Wv(e){if(e.tag===13||e.tag===31){var i=nr(e,67108864);i!==null&&qn(i,e,67108864),ch(e,67108864)}}function qv(e){if(e.tag===13||e.tag===31){var i=ei();i=Ka(i);var r=nr(e,i);r!==null&&qn(r,e,i),ch(e,i)}}var oc=!0;function BS(e,i,r,l){var f=O.T;O.T=null;var d=$.p;try{$.p=2,uh(e,i,r,l)}finally{$.p=d,O.T=f}}function IS(e,i,r,l){var f=O.T;O.T=null;var d=$.p;try{$.p=8,uh(e,i,r,l)}finally{$.p=d,O.T=f}}function uh(e,i,r,l){if(oc){var f=fh(l);if(f===null)Kf(e,i,l,lc,r),jv(e,l);else if(GS(f,e,i,r,l))l.stopPropagation();else if(jv(e,l),i&4&&-1<HS.indexOf(e)){for(;f!==null;){var d=Z(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=wt(d.pendingLanes);if(S!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var B=1<<31-ne(S);b.entanglements[1]|=B,S&=~B}Li(d),(Le&6)===0&&(Xl=ht()+500,Mo(0))}}break;case 31:case 13:b=nr(d,2),b!==null&&qn(b,d,2),ql(),ch(d,2)}if(d=fh(l),d===null&&Kf(e,i,l,lc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else Kf(e,i,l,null,r)}}function fh(e){return e=hu(e),hh(e)}var lc=null;function hh(e){if(lc=null,e=C(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return lc=e,null}function Yv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case vt:return 2;case Yt:return 8;case Dt:case It:return 32;case _e:return 268435456;default:return 32}default:return 32}}var dh=!1,Na=null,Oa=null,Pa=null,wo=new Map,Do=new Map,za=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jv(e,i){switch(e){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(i.pointerId)}}function Uo(e,i,r,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Z(i),i!==null&&Wv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function GS(e,i,r,l,f){switch(i){case"focusin":return Na=Uo(Na,e,i,r,l,f),!0;case"dragenter":return Oa=Uo(Oa,e,i,r,l,f),!0;case"mouseover":return Pa=Uo(Pa,e,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return wo.set(d,Uo(wo.get(d)||null,e,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Do.set(d,Uo(Do.get(d)||null,e,i,r,l,f)),!0}return!1}function Zv(e){var i=C(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,Qa(e.priority,function(){qv(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,Qa(e.priority,function(){qv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=fh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);fu=l,r.target.dispatchEvent(l),fu=null}else return i=Z(r),i!==null&&Wv(i),e.blockedOn=r,!1;i.shift()}return!0}function Kv(e,i,r){cc(e)&&r.delete(i)}function VS(){dh=!1,Na!==null&&cc(Na)&&(Na=null),Oa!==null&&cc(Oa)&&(Oa=null),Pa!==null&&cc(Pa)&&(Pa=null),wo.forEach(Kv),Do.forEach(Kv)}function uc(e,i){e.blockedOn===i&&(e.blockedOn=null,dh||(dh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,VS)))}var fc=null;function Qv(e){fc!==e&&(fc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(hh(l||r)===null)continue;break}var d=Z(r);d!==null&&(e.splice(i,3),i-=3,ff(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function os(e){function i(B){return uc(B,e)}Na!==null&&uc(Na,e),Oa!==null&&uc(Oa,e),Pa!==null&&uc(Pa,e),wo.forEach(i),Do.forEach(i);for(var r=0;r<za.length;r++){var l=za[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<za.length&&(r=za[0],r.blockedOn===null);)Zv(r),r.blockedOn===null&&za.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],S=f[Sn]||null;if(typeof d=="function")S||Qv(r);else if(S){var b=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[Sn]||null)b=S.formAction;else if(hh(f)!==null)continue}else b=S.action;typeof b=="function"?r[l+1]=b:(r.splice(l,3),l-=3),Qv(r)}}}function Jv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function ph(e){this._internalRoot=e}hc.prototype.render=ph.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ei();kv(r,l,e,i,null,null)},hc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;kv(e.current,2,null,e,null,null),ql(),i[Fi]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Gs();e={blockedOn:null,target:e,priority:i};for(var r=0;r<za.length&&i!==0&&i<za[r].priority;r++);za.splice(r,0,e),r===0&&Zv(e)}};var $v=t.version;if($v!=="19.2.7")throw Error(a(527,$v,"19.2.7"));$.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var kS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{$t=dc.inject(kS),jt=dc}catch{}}return No.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=sg,d=og,S=lg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=Gv(e,1,!1,null,null,r,l,null,f,d,S,Jv),e[Fi]=i.current,Zf(e),new ph(i)},No.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",d=sg,S=og,b=lg,B=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),i=Gv(e,1,!0,i,r??null,l,f,B,d,S,b,Jv),i.context=Vv(null),r=i.current,l=ei(),l=Ka(l),f=Sa(l),f.callback=null,Ma(r,f,l),r=l,i.current.lanes=r,xn(i,r),Li(i),e[Fi]=i.current,Zf(e),new hc(i)},No.version="19.2.7",No}var c0;function eM(){if(c0)return vh.exports;c0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vh.exports=tM(),vh.exports}var nM=eM();const iM="modulepreload",aM=function(s){return"/makemecubemaster/"+s},u0={},rM=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let u=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=u(n.map(m=>{if(m=aM(m),m in u0)return;u0[m]=!0;const v=m.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${g}`))return;const _=document.createElement("link");if(_.rel=v?"stylesheet":iM,v||(_.as="script"),_.crossOrigin="",_.href=m,p&&_.setAttribute("nonce",p),document.head.appendChild(_),v)return new Promise((x,E)=>{_.addEventListener("load",x),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function sM(s={}){const{immediate:t=!1,onNeedReload:n,onNeedRefresh:a,onOfflineReady:o,onRegistered:c,onRegisteredSW:u,onRegisterError:h}=s;let p,m;const v=async(_=!0)=>{await m};async function g(){if("serviceWorker"in navigator){if(p=await rM(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(_=>{h==null||h(_)}),!p)return;p.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&(n?n():window.location.reload())}),p.addEventListener("installed",_=>{_.isUpdate||o==null||o()}),p.register({immediate:t}).then(_=>{u?u("/makemecubemaster/sw.js",_):c==null||c(_)}).catch(_=>{h==null||h(_)})}}return m=g(),v}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="175",oM=0,f0=1,lM=2,U_=1,cM=2,sa=3,ja=0,jn=1,Oi=2,Wa=0,As=1,h0=2,d0=3,p0=4,uM=5,Er=100,fM=101,hM=102,dM=103,pM=104,mM=200,gM=201,vM=202,_M=203,fd=204,hd=205,yM=206,xM=207,SM=208,MM=209,EM=210,TM=211,bM=212,AM=213,RM=214,dd=0,pd=1,md=2,ws=3,gd=4,vd=5,_d=6,yd=7,L_=0,CM=1,wM=2,qa=0,DM=1,UM=2,LM=3,NM=4,OM=5,PM=6,zM=7,N_=300,Ds=301,Us=302,xd=303,Sd=304,nu=306,Md=1e3,br=1001,Ed=1002,Ri=1003,FM=1004,pc=1005,Pi=1006,Sh=1007,Ar=1008,ha=1009,O_=1010,P_=1011,Wo=1012,ip=1013,Rr=1014,la=1015,Zo=1016,ap=1017,rp=1018,qo=1020,z_=35902,F_=1021,B_=1022,Ai=1023,I_=1024,H_=1025,Yo=1026,jo=1027,G_=1028,sp=1029,V_=1030,op=1031,lp=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,Td=35840,bd=35841,Ad=35842,Rd=35843,Cd=36196,wd=37492,Dd=37496,Ud=37808,Ld=37809,Nd=37810,Od=37811,Pd=37812,zd=37813,Fd=37814,Bd=37815,Id=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,qc=36492,Wd=36494,qd=36495,k_=36283,Yd=36284,jd=36285,Zd=36286,BM=3200,IM=3201,HM=0,GM=1,Xa="",ai="srgb",Ls="srgb-linear",Kc="linear",Xe="srgb",ls=7680,m0=519,VM=512,kM=513,XM=514,X_=515,WM=516,qM=517,YM=518,jM=519,g0=35044,v0="300 es",ca=2e3,Qc=2001;class Ps{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=Math.PI/180,Kd=180/Math.PI;function Ko(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[a&255]+wn[a>>8&255]+wn[a>>16&255]+wn[a>>24&255]).toLowerCase()}function ve(s,t,n){return Math.max(t,Math.min(n,s))}function ZM(s,t){return(s%t+t)%t}function Eh(s,t,n){return(1-n)*s+n*t}function Oo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class re{constructor(t=0,n=0){re.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,n,a,o,c,u,h,p,m){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,m)}set(t,n,a,o,c,u,h,p,m){const v=this.elements;return v[0]=t,v[1]=o,v[2]=h,v[3]=n,v[4]=c,v[5]=p,v[6]=a,v[7]=u,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],p=a[6],m=a[1],v=a[4],g=a[7],_=a[2],x=a[5],E=a[8],T=o[0],M=o[3],y=o[6],z=o[1],L=o[4],w=o[7],X=o[2],F=o[5],P=o[8];return c[0]=u*T+h*z+p*X,c[3]=u*M+h*L+p*F,c[6]=u*y+h*w+p*P,c[1]=m*T+v*z+g*X,c[4]=m*M+v*L+g*F,c[7]=m*y+v*w+g*P,c[2]=_*T+x*z+E*X,c[5]=_*M+x*L+E*F,c[8]=_*y+x*w+E*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],v=t[8];return n*u*v-n*h*m-a*c*v+a*h*p+o*c*m-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],v=t[8],g=v*u-h*m,_=h*p-v*c,x=m*c-u*p,E=n*g+a*_+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(o*m-v*a)*T,t[2]=(h*a-o*u)*T,t[3]=_*T,t[4]=(v*n-o*p)*T,t[5]=(o*c-h*n)*T,t[6]=x*T,t[7]=(a*p-m*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*u+m*h)+u+t,-o*m,o*p,-o*(-m*u+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Th.makeScale(t,n)),this}rotate(t){return this.premultiply(Th.makeRotation(-t)),this}translate(t,n){return this.premultiply(Th.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Th=new fe;function W_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Jc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function KM(){const s=Jc("canvas");return s.style.display="block",s}const _0={};function Yc(s){s in _0||(_0[s]=!0,console.warn(s))}function QM(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}function JM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $M(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const y0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=ua(o.r),o.g=ua(o.g),o.b=ua(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=Rs(o.r),o.g=Rs(o.g),o.b=Rs(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Xa?Kc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:a,transfer:Kc,toXYZ:y0,fromXYZ:x0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:y0,fromXYZ:x0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Ue=tE();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class eE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{cs===void 0&&(cs=Jc("canvas")),cs.width=t.width,cs.height=t.height;const o=cs.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=cs}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Jc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=ua(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(ua(n[a]/255)*255):n[a]=ua(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nE=0;class cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(bh(o[u].image)):c.push(bh(o[u]))}else c=bh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function bh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iE=0;class Fn extends Ps{constructor(t=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,a=br,o=br,c=Pi,u=Ar,h=Ai,p=ha,m=Fn.DEFAULT_ANISOTROPY,v=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=Ko(),this.name="",this.source=new cp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==N_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Md:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case Ed:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Md:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case Ed:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=N_;Fn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,n=0,a=0,o=1){rn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,m=p[0],v=p[4],g=p[8],_=p[1],x=p[5],E=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(v-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,w=(x+1)/2,X=(y+1)/2,F=(v+_)/4,P=(g+T)/4,k=(E+M)/4;return L>w&&L>X?L<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(L),o=F/a,c=P/a):w>X?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=F/o,c=k/o):X<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(X),a=P/c,o=k/c),this.set(a,o,c,n),this}let z=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-v)*(_-v));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(g-T)/z,this.z=(_-v)/z,this.w=Math.acos((m+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this.w=ve(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this.w=ve(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aE extends Ps{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new rn(0,0,t,n),this.scissorTest=!1,this.viewport=new rn(0,0,t,n);const o={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Fn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new cp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends aE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class q_ extends Fn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rE extends Fn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let p=a[o+0],m=a[o+1],v=a[o+2],g=a[o+3];const _=c[u+0],x=c[u+1],E=c[u+2],T=c[u+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=v,t[n+3]=g;return}if(h===1){t[n+0]=_,t[n+1]=x,t[n+2]=E,t[n+3]=T;return}if(g!==T||p!==_||m!==x||v!==E){let M=1-h;const y=p*_+m*x+v*E+g*T,z=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const X=Math.sqrt(L),F=Math.atan2(X,y*z);M=Math.sin(M*F)/X,h=Math.sin(h*F)/X}const w=h*z;if(p=p*M+_*w,m=m*M+x*w,v=v*M+E*w,g=g*M+T*w,M===1-h){const X=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=X,m*=X,v*=X,g*=X}}t[n]=p,t[n+1]=m,t[n+2]=v,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],p=a[o+1],m=a[o+2],v=a[o+3],g=c[u],_=c[u+1],x=c[u+2],E=c[u+3];return t[n]=h*E+v*g+p*x-m*_,t[n+1]=p*E+v*_+m*g-h*x,t[n+2]=m*E+v*x+h*_-p*g,t[n+3]=v*E-h*g-p*_-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,p=Math.sin,m=h(a/2),v=h(o/2),g=h(c/2),_=p(a/2),x=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=_*v*g+m*x*E,this._y=m*x*g-_*v*E,this._z=m*v*E+_*x*g,this._w=m*v*g-_*x*E;break;case"YXZ":this._x=_*v*g+m*x*E,this._y=m*x*g-_*v*E,this._z=m*v*E-_*x*g,this._w=m*v*g+_*x*E;break;case"ZXY":this._x=_*v*g-m*x*E,this._y=m*x*g+_*v*E,this._z=m*v*E+_*x*g,this._w=m*v*g-_*x*E;break;case"ZYX":this._x=_*v*g-m*x*E,this._y=m*x*g+_*v*E,this._z=m*v*E-_*x*g,this._w=m*v*g+_*x*E;break;case"YZX":this._x=_*v*g+m*x*E,this._y=m*x*g+_*v*E,this._z=m*v*E-_*x*g,this._w=m*v*g-_*x*E;break;case"XZY":this._x=_*v*g-m*x*E,this._y=m*x*g-_*v*E,this._z=m*v*E+_*x*g,this._w=m*v*g+_*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],p=n[9],m=n[2],v=n[6],g=n[10],_=a+h+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(v-p)*x,this._y=(c-m)*x,this._z=(u-o)*x}else if(a>h&&a>g){const x=2*Math.sqrt(1+a-h-g);this._w=(v-p)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+m)/x}else if(h>g){const x=2*Math.sqrt(1+h-a-g);this._w=(c-m)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+g-a-h);this._w=(u-o)/x,this._x=(c+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,p=n._y,m=n._z,v=n._w;return this._x=a*v+u*h+o*m-c*p,this._y=o*v+u*p+c*h-a*m,this._z=c*v+u*m+a*p-o*h,this._w=u*v-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,u=this._w;let h=u*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=u,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-n;return this._w=x*u+n*this._w,this._x=x*a+n*this._x,this._y=x*o+n*this._y,this._z=x*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,h),g=Math.sin((1-n)*v)/m,_=Math.sin(n*v)/m;return this._w=u*g+this._w*_,this._x=a*g+this._x*_,this._y=o*g+this._y*_,this._z=c*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,a=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(S0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(S0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,p=t.w,m=2*(u*o-h*a),v=2*(h*n-c*o),g=2*(c*a-u*n);return this.x=n+p*m+u*g-h*v,this.y=a+p*v+h*m-c*g,this.z=o+p*g+c*v-u*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ve(this.x,t.x,n.x),this.y=ve(this.y,t.y,n.y),this.z=ve(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ve(this.x,t,n),this.y=ve(this.y,t,n),this.z=ve(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,p=n.z;return this.x=o*p-c*h,this.y=c*u-a*p,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new j,S0=new Qo;class Jo{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Mi):Mi.fromBufferAttribute(c,u),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),mc.copy(a.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),gc.subVectors(this.max,Po),us.subVectors(t.a,Po),fs.subVectors(t.b,Po),hs.subVectors(t.c,Po),Ba.subVectors(fs,us),Ia.subVectors(hs,fs),mr.subVectors(us,hs);let n=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-mr.z,mr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,mr.z,0,-mr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-mr.y,mr.x,0];return!Rh(n,us,fs,hs,gc)||(n=[1,0,0,0,1,0,0,0,1],!Rh(n,us,fs,hs,gc))?!1:(vc.crossVectors(Ba,Ia),n=[vc.x,vc.y,vc.z],Rh(n,us,fs,hs,gc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ea=[new j,new j,new j,new j,new j,new j,new j,new j],Mi=new j,mc=new Jo,us=new j,fs=new j,hs=new j,Ba=new j,Ia=new j,mr=new j,Po=new j,gc=new j,vc=new j,gr=new j;function Rh(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){gr.fromArray(s,c);const h=o.x*Math.abs(gr.x)+o.y*Math.abs(gr.y)+o.z*Math.abs(gr.z),p=t.dot(gr),m=n.dot(gr),v=a.dot(gr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const sE=new Jo,zo=new j,Ch=new j;class iu{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):sE.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(zo,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Ch)),this.expandByPoint(zo.copy(t.center).sub(Ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const na=new j,wh=new j,_c=new j,Ha=new j,Dh=new j,yc=new j,Uh=new j;class Y_{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=na.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,n),na.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){wh.copy(t).add(n).multiplyScalar(.5),_c.copy(n).sub(t).normalize(),Ha.copy(this.origin).sub(wh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(_c),h=Ha.dot(this.direction),p=-Ha.dot(_c),m=Ha.lengthSq(),v=Math.abs(1-u*u);let g,_,x,E;if(v>0)if(g=u*p-h,_=u*h-p,E=c*v,g>=0)if(_>=-E)if(_<=E){const T=1/v;g*=T,_*=T,x=g*(g+u*_+2*h)+_*(u*g+_+2*p)+m}else _=c,g=Math.max(0,-(u*_+h)),x=-g*g+_*(_+2*p)+m;else _=-c,g=Math.max(0,-(u*_+h)),x=-g*g+_*(_+2*p)+m;else _<=-E?(g=Math.max(0,-(-u*c+h)),_=g>0?-c:Math.min(Math.max(-c,-p),c),x=-g*g+_*(_+2*p)+m):_<=E?(g=0,_=Math.min(Math.max(-c,-p),c),x=_*(_+2*p)+m):(g=Math.max(0,-(u*c+h)),_=g>0?c:Math.min(Math.max(-c,-p),c),x=-g*g+_*(_+2*p)+m);else _=u>0?-c:c,g=Math.max(0,-(u*_+h)),x=-g*g+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(wh).addScaledVector(_c,_),x}intersectSphere(t,n){na.subVectors(t.center,this.origin);const a=na.dot(this.direction),o=na.dot(na)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,p=a+u;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),v>=0?(c=(t.min.y-_.y)*v,u=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,u=(t.min.y-_.y)*v),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(h=(t.min.z-_.z)*g,p=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,p=(t.min.z-_.z)*g),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,n,a,o,c){Dh.subVectors(n,t),yc.subVectors(a,t),Uh.crossVectors(Dh,yc);let u=this.direction.dot(Uh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Ha.subVectors(this.origin,t);const p=h*this.direction.dot(yc.crossVectors(Ha,yc));if(p<0)return null;const m=h*this.direction.dot(Dh.cross(Ha));if(m<0||p+m>u)return null;const v=-h*Ha.dot(Uh);return v<0?null:this.at(v/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,n,a,o,c,u,h,p,m,v,g,_,x,E,T,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,p,m,v,g,_,x,E,T,M)}set(t,n,a,o,c,u,h,p,m,v,g,_,x,E,T,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=p,y[2]=m,y[6]=v,y[10]=g,y[14]=_,y[3]=x,y[7]=E,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/ds.setFromMatrixColumn(t,0).length(),c=1/ds.setFromMatrixColumn(t,1).length(),u=1/ds.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=u*v,x=u*g,E=h*v,T=h*g;n[0]=p*v,n[4]=-p*g,n[8]=m,n[1]=x+E*m,n[5]=_-T*m,n[9]=-h*p,n[2]=T-_*m,n[6]=E+x*m,n[10]=u*p}else if(t.order==="YXZ"){const _=p*v,x=p*g,E=m*v,T=m*g;n[0]=_+T*h,n[4]=E*h-x,n[8]=u*m,n[1]=u*g,n[5]=u*v,n[9]=-h,n[2]=x*h-E,n[6]=T+_*h,n[10]=u*p}else if(t.order==="ZXY"){const _=p*v,x=p*g,E=m*v,T=m*g;n[0]=_-T*h,n[4]=-u*g,n[8]=E+x*h,n[1]=x+E*h,n[5]=u*v,n[9]=T-_*h,n[2]=-u*m,n[6]=h,n[10]=u*p}else if(t.order==="ZYX"){const _=u*v,x=u*g,E=h*v,T=h*g;n[0]=p*v,n[4]=E*m-x,n[8]=_*m+T,n[1]=p*g,n[5]=T*m+_,n[9]=x*m-E,n[2]=-m,n[6]=h*p,n[10]=u*p}else if(t.order==="YZX"){const _=u*p,x=u*m,E=h*p,T=h*m;n[0]=p*v,n[4]=T-_*g,n[8]=E*g+x,n[1]=g,n[5]=u*v,n[9]=-h*v,n[2]=-m*v,n[6]=x*g+E,n[10]=_-T*g}else if(t.order==="XZY"){const _=u*p,x=u*m,E=h*p,T=h*m;n[0]=p*v,n[4]=-g,n[8]=m*v,n[1]=_*g+T,n[5]=u*v,n[9]=x*g-E,n[2]=E*g-x,n[6]=h*v,n[10]=T*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oE,t,lE)}lookAt(t,n,a){const o=this.elements;return ni.subVectors(t,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ga.crossVectors(a,ni),Ga.lengthSq()===0&&(Math.abs(a.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ga.crossVectors(a,ni)),Ga.normalize(),xc.crossVectors(ni,Ga),o[0]=Ga.x,o[4]=xc.x,o[8]=ni.x,o[1]=Ga.y,o[5]=xc.y,o[9]=ni.y,o[2]=Ga.z,o[6]=xc.z,o[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],p=a[8],m=a[12],v=a[1],g=a[5],_=a[9],x=a[13],E=a[2],T=a[6],M=a[10],y=a[14],z=a[3],L=a[7],w=a[11],X=a[15],F=o[0],P=o[4],k=o[8],U=o[12],R=o[1],H=o[5],it=o[9],J=o[13],ct=o[2],gt=o[6],O=o[10],$=o[14],Q=o[3],St=o[7],Tt=o[11],D=o[15];return c[0]=u*F+h*R+p*ct+m*Q,c[4]=u*P+h*H+p*gt+m*St,c[8]=u*k+h*it+p*O+m*Tt,c[12]=u*U+h*J+p*$+m*D,c[1]=v*F+g*R+_*ct+x*Q,c[5]=v*P+g*H+_*gt+x*St,c[9]=v*k+g*it+_*O+x*Tt,c[13]=v*U+g*J+_*$+x*D,c[2]=E*F+T*R+M*ct+y*Q,c[6]=E*P+T*H+M*gt+y*St,c[10]=E*k+T*it+M*O+y*Tt,c[14]=E*U+T*J+M*$+y*D,c[3]=z*F+L*R+w*ct+X*Q,c[7]=z*P+L*H+w*gt+X*St,c[11]=z*k+L*it+w*O+X*Tt,c[15]=z*U+L*J+w*$+X*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],p=t[9],m=t[13],v=t[2],g=t[6],_=t[10],x=t[14],E=t[3],T=t[7],M=t[11],y=t[15];return E*(+c*p*g-o*m*g-c*h*_+a*m*_+o*h*x-a*p*x)+T*(+n*p*x-n*m*_+c*u*_-o*u*x+o*m*v-c*p*v)+M*(+n*m*g-n*h*x-c*u*g+a*u*x+c*h*v-a*m*v)+y*(-o*h*v-n*p*g+n*h*_+o*u*g-a*u*_+a*p*v)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],m=t[7],v=t[8],g=t[9],_=t[10],x=t[11],E=t[12],T=t[13],M=t[14],y=t[15],z=g*M*m-T*_*m+T*p*x-h*M*x-g*p*y+h*_*y,L=E*_*m-v*M*m-E*p*x+u*M*x+v*p*y-u*_*y,w=v*T*m-E*g*m+E*h*x-u*T*x-v*h*y+u*g*y,X=E*g*p-v*T*p-E*h*_+u*T*_+v*h*M-u*g*M,F=n*z+a*L+o*w+c*X;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return t[0]=z*P,t[1]=(T*_*c-g*M*c-T*o*x+a*M*x+g*o*y-a*_*y)*P,t[2]=(h*M*c-T*p*c+T*o*m-a*M*m-h*o*y+a*p*y)*P,t[3]=(g*p*c-h*_*c-g*o*m+a*_*m+h*o*x-a*p*x)*P,t[4]=L*P,t[5]=(v*M*c-E*_*c+E*o*x-n*M*x-v*o*y+n*_*y)*P,t[6]=(E*p*c-u*M*c-E*o*m+n*M*m+u*o*y-n*p*y)*P,t[7]=(u*_*c-v*p*c+v*o*m-n*_*m-u*o*x+n*p*x)*P,t[8]=w*P,t[9]=(E*g*c-v*T*c-E*a*x+n*T*x+v*a*y-n*g*y)*P,t[10]=(u*T*c-E*h*c+E*a*m-n*T*m-u*a*y+n*h*y)*P,t[11]=(v*h*c-u*g*c-v*a*m+n*g*m+u*a*x-n*h*x)*P,t[12]=X*P,t[13]=(v*T*o-E*g*o+E*a*_-n*T*_-v*a*M+n*g*M)*P,t[14]=(E*h*o-u*T*o-E*a*p+n*T*p+u*a*M-n*h*M)*P,t[15]=(u*g*o-v*h*o+v*a*p-n*g*p-u*a*_+n*h*_)*P,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,p=t.z,m=c*u,v=c*h;return this.set(m*u+a,m*h-o*p,m*p+o*h,0,m*h+o*p,v*h+a,v*p-o*u,0,m*p-o*h,v*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,p=n._w,m=c+c,v=u+u,g=h+h,_=c*m,x=c*v,E=c*g,T=u*v,M=u*g,y=h*g,z=p*m,L=p*v,w=p*g,X=a.x,F=a.y,P=a.z;return o[0]=(1-(T+y))*X,o[1]=(x+w)*X,o[2]=(E-L)*X,o[3]=0,o[4]=(x-w)*F,o[5]=(1-(_+y))*F,o[6]=(M+z)*F,o[7]=0,o[8]=(E+L)*P,o[9]=(M-z)*P,o[10]=(1-(_+T))*P,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=ds.set(o[0],o[1],o[2]).length();const u=ds.set(o[4],o[5],o[6]).length(),h=ds.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ei.copy(this);const m=1/c,v=1/u,g=1/h;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,n.setFromRotationMatrix(Ei),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=ca){const p=this.elements,m=2*c/(n-t),v=2*c/(a-o),g=(n+t)/(n-t),_=(a+o)/(a-o);let x,E;if(h===ca)x=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(h===Qc)x=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ca){const p=this.elements,m=1/(n-t),v=1/(a-o),g=1/(u-c),_=(n+t)*m,x=(a+o)*v;let E,T;if(h===ca)E=(u+c)*g,T=-2*g;else if(h===Qc)E=c*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ds=new j,Ei=new Ze,oE=new j(0,0,0),lE=new j(1,1,1),Ga=new j,xc=new j,ni=new j,M0=new Ze,E0=new Qo;class da{constructor(t=0,n=0,a=0,o=da.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],p=o[1],m=o[5],v=o[9],g=o[2],_=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return M0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return E0.setFromEuler(this),this.setFromQuaternion(E0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cE=0;const T0=new j,ps=new Qo,ia=new Ze,Sc=new j,Fo=new j,uE=new j,fE=new Qo,b0=new j(1,0,0),A0=new j(0,1,0),R0=new j(0,0,1),C0={type:"added"},hE={type:"removed"},ms={type:"childadded",child:null},Lh={type:"childremoved",child:null};class Bn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new j,n=new da,a=new Qo,o=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ze},normalMatrix:{value:new fe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ps.setFromAxisAngle(t,n),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,n){return ps.setFromAxisAngle(t,n),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(b0,t)}rotateY(t){return this.rotateOnAxis(A0,t)}rotateZ(t){return this.rotateOnAxis(R0,t)}translateOnAxis(t,n){return T0.copy(t).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(b0,t)}translateY(t){return this.translateOnAxis(A0,t)}translateZ(t){return this.translateOnAxis(R0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Sc.copy(t):Sc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Fo,Sc,this.up):ia.lookAt(Sc,Fo,this.up),this.quaternion.setFromRotationMatrix(ia),o&&(ia.extractRotation(o.matrixWorld),ps.setFromRotationMatrix(ia),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C0),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(hE),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C0),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,uE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,fE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(n){const h=u(t.geometries),p=u(t.materials),m=u(t.textures),v=u(t.images),g=u(t.shapes),_=u(t.skeletons),x=u(t.animations),E=u(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),v.length>0&&(a.images=v),g.length>0&&(a.shapes=g),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Bn.DEFAULT_UP=new j(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new j,aa=new j,Nh=new j,ra=new j,gs=new j,vs=new j,w0=new j,Oh=new j,Ph=new j,zh=new j,Fh=new rn,Bh=new rn,Ih=new rn;class bi{constructor(t=new j,n=new j,a=new j){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ti.subVectors(t,n),o.cross(Ti);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ti.subVectors(o,n),aa.subVectors(a,n),Nh.subVectors(t,n);const u=Ti.dot(Ti),h=Ti.dot(aa),p=Ti.dot(Nh),m=aa.dot(aa),v=aa.dot(Nh),g=u*m-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,x=(m*p-h*v)*_,E=(u*v-h*p)*_;return c.set(1-x-E,E,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,n,a,o,c,u,h,p){return this.getBarycoord(t,n,a,o,ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ra.x),p.addScaledVector(u,ra.y),p.addScaledVector(h,ra.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return Fh.setScalar(0),Bh.setScalar(0),Ih.setScalar(0),Fh.fromBufferAttribute(t,n),Bh.fromBufferAttribute(t,a),Ih.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Fh,c.x),u.addScaledVector(Bh,c.y),u.addScaledVector(Ih,c.z),u}static isFrontFacing(t,n,a,o){return Ti.subVectors(a,n),aa.subVectors(t,n),Ti.cross(aa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Ti.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return bi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return bi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;gs.subVectors(o,a),vs.subVectors(c,a),Oh.subVectors(t,a);const p=gs.dot(Oh),m=vs.dot(Oh);if(p<=0&&m<=0)return n.copy(a);Ph.subVectors(t,o);const v=gs.dot(Ph),g=vs.dot(Ph);if(v>=0&&g<=v)return n.copy(o);const _=p*g-v*m;if(_<=0&&p>=0&&v<=0)return u=p/(p-v),n.copy(a).addScaledVector(gs,u);zh.subVectors(t,c);const x=gs.dot(zh),E=vs.dot(zh);if(E>=0&&x<=E)return n.copy(c);const T=x*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(a).addScaledVector(vs,h);const M=v*E-x*g;if(M<=0&&g-v>=0&&x-E>=0)return w0.subVectors(c,o),h=(g-v)/(g-v+(x-E)),n.copy(o).addScaledVector(w0,h);const y=1/(M+T+_);return u=T*y,h=_*y,n.copy(a).addScaledVector(gs,u).addScaledVector(vs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Hh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Oe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,n),this}setRGB(t,n,a,o=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ue.toWorkingColorSpace(this,o),this}setHSL(t,n,a,o=Ue.workingColorSpace){if(t=ZM(t,1),n=ve(n,0,1),a=ve(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Hh(u,c,t+1/3),this.g=Hh(u,c,t),this.b=Hh(u,c,t-1/3)}return Ue.toWorkingColorSpace(this,o),this}setStyle(t,n=ai){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ai){const a=Z_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return Ue.fromWorkingColorSpace(Dn.copy(this),t),Math.round(ve(Dn.r*255,0,255))*65536+Math.round(ve(Dn.g*255,0,255))*256+Math.round(ve(Dn.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Dn.copy(this),n);const a=Dn.r,o=Dn.g,c=Dn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const v=(h+u)/2;if(h===u)p=0,m=0;else{const g=u-h;switch(m=v<=.5?g/(u+h):g/(2-u-h),u){case a:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-a)/g+2;break;case c:p=(a-o)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,n=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=ai){Ue.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,a=Dn.g,o=Dn.b;return t!==ai?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Va),this.setHSL(Va.h+t,Va.s+n,Va.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Va),t.getHSL(Mc);const a=Eh(Va.h,Mc.h,n),o=Eh(Va.s,Mc.s,n),c=Eh(Va.l,Mc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Oe;Oe.NAMES=Z_;let dE=0;class $o extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=As,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(a.blending=this.blending),this.side!==ja&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==fd&&(a.blendSrc=this.blendSrc),this.blendDst!==hd&&(a.blendDst=this.blendDst),this.blendEquation!==Er&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Es extends $o{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new j,Ec=new re;let pE=0;class zi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=g0,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ec.fromBufferAttribute(this,n),Ec.applyMatrix3(t),this.setXY(n,Ec.x,Ec.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Oo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),a=Yn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),a=Yn(a,this.array),o=Yn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),a=Yn(a,this.array),o=Yn(o,this.array),c=Yn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==g0&&(t.usage=this.usage),t}}class K_ extends zi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Q_ extends zi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class pn extends zi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let mE=0;const di=new Ze,Gh=new Bn,_s=new j,ii=new Jo,Bo=new Jo,yn=new j;class mi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(W_(t)?Q_:K_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new fe().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,n,a){return di.makeTranslation(t,n,a),this.applyMatrix4(di),this}scale(t,n,a){return di.makeScale(t,n,a),this.applyMatrix4(di),this}lookAt(t){return Gh.lookAt(t),Gh.updateMatrix(),this.applyMatrix4(Gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const a=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];Bo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(ii.min,Bo.min),ii.expandByPoint(yn),yn.addVectors(ii.max,Bo.max),ii.expandByPoint(yn)):(ii.expandByPoint(Bo.min),ii.expandByPoint(Bo.max))}ii.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)yn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(yn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)yn.fromBufferAttribute(h,m),p&&(_s.fromBufferAttribute(t,m),yn.add(_s)),o=Math.max(o,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let k=0;k<a.count;k++)h[k]=new j,p[k]=new j;const m=new j,v=new j,g=new j,_=new re,x=new re,E=new re,T=new j,M=new j;function y(k,U,R){m.fromBufferAttribute(a,k),v.fromBufferAttribute(a,U),g.fromBufferAttribute(a,R),_.fromBufferAttribute(c,k),x.fromBufferAttribute(c,U),E.fromBufferAttribute(c,R),v.sub(m),g.sub(m),x.sub(_),E.sub(_);const H=1/(x.x*E.y-E.x*x.y);isFinite(H)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(H),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(H),h[k].add(T),h[U].add(T),h[R].add(T),p[k].add(M),p[U].add(M),p[R].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let k=0,U=z.length;k<U;++k){const R=z[k],H=R.start,it=R.count;for(let J=H,ct=H+it;J<ct;J+=3)y(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new j,w=new j,X=new j,F=new j;function P(k){X.fromBufferAttribute(o,k),F.copy(X);const U=h[k];L.copy(U),L.sub(X.multiplyScalar(X.dot(U))).normalize(),w.crossVectors(F,U);const H=w.dot(p[k])<0?-1:1;u.setXYZW(k,L.x,L.y,L.z,H)}for(let k=0,U=z.length;k<U;++k){const R=z[k],H=R.start,it=R.count;for(let J=H,ct=H+it;J<ct;J+=3)P(t.getX(J+0)),P(t.getX(J+1)),P(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const o=new j,c=new j,u=new j,h=new j,p=new j,m=new j,v=new j,g=new j;if(t)for(let _=0,x=t.count;_<x;_+=3){const E=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,M),h.add(v),p.add(v),m.add(v),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,x=n.count;_<x;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),u.fromBufferAttribute(n,_+2),v.subVectors(u,c),g.subVectors(o,c),v.cross(g),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,p){const m=h.array,v=h.itemSize,g=h.normalized,_=new m.constructor(p.length*v);let x=0,E=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*v;for(let y=0;y<v;y++)_[E++]=m[x++]}return new zi(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,g=m.length;v<g;v++){const _=m[v],x=t(_,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const m=u[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,_=m.length;g<_;g++){const x=m[g];v.push(x.toJSON(t.data))}v.length>0&&(o[p]=v,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const c=t.morphAttributes;for(const m in c){const v=[],g=c[m];for(let _=0,x=g.length;_<x;_++)v.push(g[_].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let m=0,v=u.length;m<v;m++){const g=u[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const D0=new Ze,vr=new Y_,Tc=new iu,U0=new j,bc=new j,Ac=new j,Rc=new j,Vh=new j,Cc=new j,L0=new j,wc=new j;class zn extends Bn{constructor(t=new mi,n=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Cc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],g=c[p];v!==0&&(Vh.fromBufferAttribute(g,t),u?Cc.addScaledVector(Vh,v):Cc.addScaledVector(Vh.sub(n),v))}n.add(Cc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Tc.copy(a.boundingSphere),Tc.applyMatrix4(c),vr.copy(t.ray).recast(t.near),!(Tc.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Tc,U0)===null||vr.origin.distanceToSquared(U0)>(t.far-t.near)**2))&&(D0.copy(c).invert(),vr.copy(t.ray).applyMatrix4(D0),!(a.boundingBox!==null&&vr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,vr)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=u[M.materialIndex],z=Math.max(M.start,x.start),L=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let w=z,X=L;w<X;w+=3){const F=h.getX(w),P=h.getX(w+1),k=h.getX(w+2);o=Dc(this,y,t,a,m,v,g,F,P,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let M=E,y=T;M<y;M+=3){const z=h.getX(M),L=h.getX(M+1),w=h.getX(M+2);o=Dc(this,u,t,a,m,v,g,z,L,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,T=_.length;E<T;E++){const M=_[E],y=u[M.materialIndex],z=Math.max(M.start,x.start),L=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let w=z,X=L;w<X;w+=3){const F=w,P=w+1,k=w+2;o=Dc(this,y,t,a,m,v,g,F,P,k),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=E,y=T;M<y;M+=3){const z=M,L=M+1,w=M+2;o=Dc(this,u,t,a,m,v,g,z,L,w),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function gE(s,t,n,a,o,c,u,h){let p;if(t.side===jn?p=a.intersectTriangle(u,c,o,!0,h):p=a.intersectTriangle(o,c,u,t.side===ja,h),p===null)return null;wc.copy(h),wc.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(wc);return m<n.near||m>n.far?null:{distance:m,point:wc.clone(),object:s}}function Dc(s,t,n,a,o,c,u,h,p,m){s.getVertexPosition(h,bc),s.getVertexPosition(p,Ac),s.getVertexPosition(m,Rc);const v=gE(s,t,n,a,bc,Ac,Rc,L0);if(v){const g=new j;bi.getBarycoord(L0,bc,Ac,Rc,g),o&&(v.uv=bi.getInterpolatedAttribute(o,h,p,m,g,new re)),c&&(v.uv1=bi.getInterpolatedAttribute(c,h,p,m,g,new re)),u&&(v.normal=bi.getInterpolatedAttribute(u,h,p,m,g,new j),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new j,materialIndex:0};bi.getNormal(bc,Ac,Rc,_.normal),v.face=_,v.barycoord=g}return v}class tl extends mi{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],m=[],v=[],g=[];let _=0,x=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(g,2));function E(T,M,y,z,L,w,X,F,P,k,U){const R=w/P,H=X/k,it=w/2,J=X/2,ct=F/2,gt=P+1,O=k+1;let $=0,Q=0;const St=new j;for(let Tt=0;Tt<O;Tt++){const D=Tt*H-J;for(let W=0;W<gt;W++){const nt=W*R-it;St[T]=nt*z,St[M]=D*L,St[y]=ct,m.push(St.x,St.y,St.z),St[T]=0,St[M]=0,St[y]=F>0?1:-1,v.push(St.x,St.y,St.z),g.push(W/P),g.push(1-Tt/k),$+=1}}for(let Tt=0;Tt<k;Tt++)for(let D=0;D<P;D++){const W=_+D+gt*Tt,nt=_+D+gt*(Tt+1),G=_+(D+1)+gt*(Tt+1),lt=_+(D+1)+gt*Tt;p.push(W,nt,lt),p.push(nt,G,lt),Q+=6}h.addGroup(x,Q,U),x+=Q,_+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Pn(s){const t={};for(let n=0;n<s.length;n++){const a=Ns(s[n]);for(const o in a)t[o]=a[o]}return t}function vE(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function J_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const _E={clone:Ns,merge:Pn};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Za extends $o{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=vE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class $_ extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ca}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new j,N0=new re,O0=new re;class pi extends $_{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(Mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ka.x,ka.y).multiplyScalar(-t/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ka.x,ka.y).multiplyScalar(-t/ka.z)}getViewSize(t,n){return this.getViewBounds(t,N0,O0),n.subVectors(O0,N0)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Mh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/m,o*=u.width/p,a*=u.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,xs=1;class SE extends Bn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(ys,xs,t,n);o.layers=this.layers,this.add(o);const c=new pi(ys,xs,t,n);c.layers=this.layers,this.add(c);const u=new pi(ys,xs,t,n);u.layers=this.layers,this.add(u);const h=new pi(ys,xs,t,n);h.layers=this.layers,this.add(h);const p=new pi(ys,xs,t,n);p.layers=this.layers,this.add(p);const m=new pi(ys,xs,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,p]=n;for(const m of n)this.remove(m);if(t===ca)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Qc)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,p,m,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,m),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,v),t.setRenderTarget(g,_,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class ty extends Fn{constructor(t=[],n=Ds,a,o,c,u,h,p,m,v){super(t,n,a,o,c,u,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ME extends Cr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new ty(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new tl(5,5,5),c=new Za({name:"CubemapFromEquirect",uniforms:Ns(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:Wa});c.uniforms.tEquirect.value=n;const u=new zn(o,c),h=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Pi),new SE(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Ts extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),y=this._getHandJoint(m,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],_=v.position.distanceTo(g.position),x=.02,E=.005;m.inputState.pinching&&_>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ts;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class TE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xh=new j,bE=new j,AE=new fe;class Sr{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Xh.subVectors(a,n).cross(bE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Xh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||AE.getNormalMatrix(t),o=this.coplanarPoint(Xh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new iu,Uc=new j;class ey{constructor(t=new Sr,n=new Sr,a=new Sr,o=new Sr,c=new Sr,u=new Sr){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ca){const a=this.planes,o=t.elements,c=o[0],u=o[1],h=o[2],p=o[3],m=o[4],v=o[5],g=o[6],_=o[7],x=o[8],E=o[9],T=o[10],M=o[11],y=o[12],z=o[13],L=o[14],w=o[15];if(a[0].setComponents(p-c,_-m,M-x,w-y).normalize(),a[1].setComponents(p+c,_+m,M+x,w+y).normalize(),a[2].setComponents(p+u,_+v,M+E,w+z).normalize(),a[3].setComponents(p-u,_-v,M-E,w-z).normalize(),a[4].setComponents(p-h,_-g,M-T,w-L).normalize(),n===ca)a[5].setComponents(p+h,_+g,M+T,w+L).normalize();else if(n===Qc)a[5].setComponents(h,g,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Uc.x=o.normal.x>0?t.max.x:t.min.x,Uc.y=o.normal.y>0?t.max.y:t.min.y,Uc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ny extends $o{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $c=new j,tu=new j,P0=new Ze,Io=new Y_,Lc=new iu,Wh=new j,z0=new j;class RE extends Bn{constructor(t=new mi,n=new ny){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)$c.fromBufferAttribute(n,o-1),tu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=$c.distanceTo(tu);t.setAttribute("lineDistance",new pn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Lc.copy(a.boundingSphere),Lc.applyMatrix4(o),Lc.radius+=c,t.ray.intersectsSphere(Lc)===!1)return;P0.copy(o).invert(),Io.copy(t.ray).applyMatrix4(P0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=a.index,_=a.attributes.position;if(v!==null){const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=x,M=E-1;T<M;T+=m){const y=v.getX(T),z=v.getX(T+1),L=Nc(this,t,Io,p,y,z,T);L&&n.push(L)}if(this.isLineLoop){const T=v.getX(E-1),M=v.getX(x),y=Nc(this,t,Io,p,T,M,E-1);y&&n.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=x,M=E-1;T<M;T+=m){const y=Nc(this,t,Io,p,T,T+1,T);y&&n.push(y)}if(this.isLineLoop){const T=Nc(this,t,Io,p,E-1,x,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Nc(s,t,n,a,o,c,u){const h=s.geometry.attributes.position;if($c.fromBufferAttribute(h,o),tu.fromBufferAttribute(h,c),n.distanceSqToSegment($c,tu,Wh,z0)>a)return;Wh.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Wh);if(!(m<t.near||m>t.far))return{distance:m,point:z0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const F0=new j,B0=new j;class iy extends RE{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)F0.fromBufferAttribute(n,o),B0.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+F0.distanceTo(B0);t.setAttribute("lineDistance",new pn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I0 extends Fn{constructor(t,n,a,o,c,u,h,p,m){super(t,n,a,o,c,u,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ay extends Fn{constructor(t,n,a=Rr,o,c,u,h=Ri,p=Ri,m,v=Yo){if(v!==Yo&&v!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,u,h,p,v,a,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-u,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===u)return o/(c-1);const v=a[o],_=a[o+1]-v,x=(u-v)/_;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),p=n||(u.isVector2?new re:new j);return p.copy(h).sub(u).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new j,o=[],c=[],u=[],h=new j,p=new Ze;for(let x=0;x<=t;x++){const E=x/t;o[x]=this.getTangentAt(E,new j)}c[0]=new j,u[0]=new j;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);v<=m&&(m=v,a.set(1,0,0)),g<=m&&(m=g,a.set(0,1,0)),_<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(ve(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(h,E))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(ve(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ry extends pa{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new re){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=p-this.aX,x=m-this.aY;p=_*v-x*g+this.aX,m=_*g+x*v+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class CE extends ry{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function up(){let s=0,t=0,n=0,a=0;function o(c,u,h,p){s=c,t=h,n=-3*c+3*u-2*h-p,a=2*c-2*u+h+p}return{initCatmullRom:function(c,u,h,p,m){o(u,h,m*(h-c),m*(p-u))},initNonuniformCatmullRom:function(c,u,h,p,m,v,g){let _=(u-c)/m-(h-c)/(m+v)+(h-u)/v,x=(h-u)/v-(p-u)/(v+g)+(p-h)/g;_*=v,x*=v,o(u,h,_,x)},calc:function(c){const u=c*c,h=u*c;return s+t*c+n*u+a*h}}}const Oc=new j,qh=new up,Yh=new up,jh=new up;class Qd extends pa{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new j){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),p=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,v;this.closed||h>0?m=o[(h-1)%c]:(Oc.subVectors(o[0],o[1]).add(o[0]),m=Oc);const g=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?v=o[(h+2)%c]:(Oc.subVectors(o[c-1],o[c-2]).add(o[c-1]),v=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),x),T=Math.pow(g.distanceToSquared(_),x),M=Math.pow(_.distanceToSquared(v),x);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),qh.initNonuniformCatmullRom(m.x,g.x,_.x,v.x,E,T,M),Yh.initNonuniformCatmullRom(m.y,g.y,_.y,v.y,E,T,M),jh.initNonuniformCatmullRom(m.z,g.z,_.z,v.z,E,T,M)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(m.x,g.x,_.x,v.x,this.tension),Yh.initCatmullRom(m.y,g.y,_.y,v.y,this.tension),jh.initCatmullRom(m.z,g.z,_.z,v.z,this.tension));return a.set(qh.calc(p),Yh.calc(p),jh.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new j().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function H0(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=s*s,p=s*h;return(2*n-2*a+c+u)*p+(-3*n+3*a-2*c-u)*h+c*s+n}function wE(s,t){const n=1-s;return n*n*t}function DE(s,t){return 2*(1-s)*s*t}function UE(s,t){return s*s*t}function Vo(s,t,n,a){return wE(s,t)+DE(s,n)+UE(s,a)}function LE(s,t){const n=1-s;return n*n*n*t}function NE(s,t){const n=1-s;return 3*n*n*s*t}function OE(s,t){return 3*(1-s)*s*s*t}function PE(s,t){return s*s*s*t}function ko(s,t,n,a,o){return LE(s,t)+NE(s,n)+OE(s,a)+PE(s,o)}class zE extends pa{constructor(t=new re,n=new re,a=new re,o=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new re){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(ko(t,o.x,c.x,u.x,h.x),ko(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class FE extends pa{constructor(t=new j,n=new j,a=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new j){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(ko(t,o.x,c.x,u.x,h.x),ko(t,o.y,c.y,u.y,h.y),ko(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class BE extends pa{constructor(t=new re,n=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new re){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new re){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class IE extends pa{constructor(t=new j,n=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new j){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new j){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class HE extends pa{constructor(t=new re,n=new re,a=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new re){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(Vo(t,o.x,c.x,u.x),Vo(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sy extends pa{constructor(t=new j,n=new j,a=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new j){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(Vo(t,o.x,c.x,u.x),Vo(t,o.y,c.y,u.y),Vo(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class GE extends pa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new re){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,p=o[u===0?u:u-1],m=o[u],v=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return a.set(H0(h,p.x,m.x,v.x,g.x),H0(h,p.y,m.y,v.y,g.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new re().fromArray(o))}return this}}var VE=Object.freeze({__proto__:null,ArcCurve:CE,CatmullRomCurve3:Qd,CubicBezierCurve:zE,CubicBezierCurve3:FE,EllipseCurve:ry,LineCurve:BE,LineCurve3:IE,QuadraticBezierCurve:HE,QuadraticBezierCurve3:sy,SplineCurve:GE});class fp extends mi{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],p=[],m=new j,v=new re;u.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let g=0,_=3;g<=n;g++,_+=3){const x=a+g/n*o;m.x=t*Math.cos(x),m.y=t*Math.sin(x),u.push(m.x,m.y,m.z),h.push(0,0,1),v.x=(u[_]/t+1)/2,v.y=(u[_+1]/t+1)/2,p.push(v.x,v.y)}for(let g=1;g<=n;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class hp extends mi{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],_=[],x=[];let E=0;const T=[],M=a/2;let y=0;z(),u===!1&&(t>0&&L(!0),n>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(x,2));function z(){const w=new j,X=new j;let F=0;const P=(n-t)/a;for(let k=0;k<=c;k++){const U=[],R=k/c,H=R*(n-t)+t;for(let it=0;it<=o;it++){const J=it/o,ct=J*p+h,gt=Math.sin(ct),O=Math.cos(ct);X.x=H*gt,X.y=-R*a+M,X.z=H*O,g.push(X.x,X.y,X.z),w.set(gt,P,O).normalize(),_.push(w.x,w.y,w.z),x.push(J,1-R),U.push(E++)}T.push(U)}for(let k=0;k<o;k++)for(let U=0;U<c;U++){const R=T[U][k],H=T[U+1][k],it=T[U+1][k+1],J=T[U][k+1];(t>0||U!==0)&&(v.push(R,H,J),F+=3),(n>0||U!==c-1)&&(v.push(H,it,J),F+=3)}m.addGroup(y,F,0),y+=F}function L(w){const X=E,F=new re,P=new j;let k=0;const U=w===!0?t:n,R=w===!0?1:-1;for(let it=1;it<=o;it++)g.push(0,M*R,0),_.push(0,R,0),x.push(.5,.5),E++;const H=E;for(let it=0;it<=o;it++){const ct=it/o*p+h,gt=Math.cos(ct),O=Math.sin(ct);P.x=U*O,P.y=M*R,P.z=U*gt,g.push(P.x,P.y,P.z),_.push(0,R,0),F.x=gt*.5+.5,F.y=O*.5*R+.5,x.push(F.x,F.y),E++}for(let it=0;it<o;it++){const J=X+it,ct=H+it;w===!0?v.push(ct,ct+1,J):v.push(ct+1,ct,J),k+=3}m.addGroup(y,k,w===!0?1:2),y+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hp(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dp extends hp{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new dp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends mi{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),p=Math.floor(o),m=h+1,v=p+1,g=t/h,_=n/p,x=[],E=[],T=[],M=[];for(let y=0;y<v;y++){const z=y*_-u;for(let L=0;L<m;L++){const w=L*g-c;E.push(w,-z,0),T.push(0,0,1),M.push(L/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let z=0;z<h;z++){const L=z+m*y,w=z+m*(y+1),X=z+1+m*(y+1),F=z+1+m*y;x.push(L,w,F),x.push(w,X,F)}this.setIndex(x),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(T,3)),this.setAttribute("uv",new pn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.widthSegments,t.heightSegments)}}class eu extends mi{constructor(t=new sy(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new j,p=new j,m=new re;let v=new j;const g=[],_=[],x=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new pn(g,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(x,2));function T(){for(let L=0;L<n;L++)M(L);M(c===!1?n:0),z(),y()}function M(L){v=t.getPointAt(L/n,v);const w=u.normals[L],X=u.binormals[L];for(let F=0;F<=o;F++){const P=F/o*Math.PI*2,k=Math.sin(P),U=-Math.cos(P);p.x=U*w.x+k*X.x,p.y=U*w.y+k*X.y,p.z=U*w.z+k*X.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=v.x+a*p.x,h.y=v.y+a*p.y,h.z=v.z+a*p.z,g.push(h.x,h.y,h.z)}}function y(){for(let L=1;L<=n;L++)for(let w=1;w<=o;w++){const X=(o+1)*(L-1)+(w-1),F=(o+1)*L+(w-1),P=(o+1)*L+w,k=(o+1)*(L-1)+w;E.push(X,F,k),E.push(F,P,k)}}function z(){for(let L=0;L<=n;L++)for(let w=0;w<=o;w++)m.x=L/n,m.y=w/o,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new eu(new VE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kE extends $o{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XE extends $o{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class WE extends Bn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class qE extends $_{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class YE extends WE{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class jE extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function G0(s,t,n,a){const o=ZE(a);switch(n){case F_:return s*t;case I_:return s*t;case H_:return s*t*2;case G_:return s*t/o.components*o.byteLength;case sp:return s*t/o.components*o.byteLength;case V_:return s*t*2/o.components*o.byteLength;case op:return s*t*2/o.components*o.byteLength;case B_:return s*t*3/o.components*o.byteLength;case Ai:return s*t*4/o.components*o.byteLength;case lp:return s*t*4/o.components*o.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bd:case Rd:return Math.max(s,16)*Math.max(t,8)/4;case Td:case Ad:return Math.max(s,8)*Math.max(t,8)/2;case Cd:case wd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Dd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qc:case Wd:case qd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case k_:case Yd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jd:case Zd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZE(s){switch(s){case ha:case O_:return{byteLength:1,components:1};case Wo:case P_:case Zo:return{byteLength:2,components:1};case ap:case rp:return{byteLength:2,components:4};case Rr:case ip:case la:return{byteLength:4,components:1};case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oy(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function KE(s){const t=new WeakMap;function n(h,p){const m=h.array,v=h.usage,g=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,v),h.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,p,m){const v=p.array,g=p.updateRanges;if(s.bindBuffer(m,h),g.length===0)s.bufferSubData(m,0,v);else{g.sort((x,E)=>x.start-E.start);let _=0;for(let x=1;x<g.length;x++){const E=g[_],T=g[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let x=0,E=g.length;x<E;x++){const T=g[x];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:u}}var QE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
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
#endif`,$E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iT=`#ifdef USE_AOMAP
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
#endif`,aT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rT=`#ifdef USE_BATCHING
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
#endif`,sT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uT=`#ifdef USE_IRIDESCENCE
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
#endif`,fT=`#ifdef USE_BUMPMAP
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
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xT=`#define PI 3.141592653589793
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
} // validated`,ST=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MT=`vec3 transformedNormal = objectNormal;
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
#endif`,ET=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RT="gl_FragColor = linearToOutputTexel( gl_FragColor );",CT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UT=`#ifdef USE_ENVMAP
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
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
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
#endif`,OT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
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
}`,IT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VT=`uniform bool receiveShadow;
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
#endif`,kT=`#ifdef USE_ENVMAP
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
#endif`,XT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jT=`PhysicalMaterial material;
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
#endif`,ZT=`struct PhysicalMaterial {
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
}`,KT=`
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
#endif`,QT=`#if defined( RE_IndirectDiffuse )
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
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$T=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sb=`#if defined( USE_POINTS_UV )
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
#endif`,ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hb=`#ifdef USE_MORPHTARGETS
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
#endif`,db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yb=`#ifdef USE_NORMALMAP
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
#endif`,xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ab=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pb=`float getShadowMask() {
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
}`,zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
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
#endif`,Bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xb=`#ifdef USE_TRANSMISSION
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
#endif`,Wb=`#ifdef USE_TRANSMISSION
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
#endif`,qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,a1=`#define DISTANCE
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
}`,r1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,E1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:QE,alphahash_pars_fragment:JE,alphamap_fragment:$E,alphamap_pars_fragment:tT,alphatest_fragment:eT,alphatest_pars_fragment:nT,aomap_fragment:iT,aomap_pars_fragment:aT,batching_pars_vertex:rT,batching_vertex:sT,begin_vertex:oT,beginnormal_vertex:lT,bsdfs:cT,iridescence_fragment:uT,bumpmap_pars_fragment:fT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:pT,clipping_planes_vertex:mT,color_fragment:gT,color_pars_fragment:vT,color_pars_vertex:_T,color_vertex:yT,common:xT,cube_uv_reflection_fragment:ST,defaultnormal_vertex:MT,displacementmap_pars_vertex:ET,displacementmap_vertex:TT,emissivemap_fragment:bT,emissivemap_pars_fragment:AT,colorspace_fragment:RT,colorspace_pars_fragment:CT,envmap_fragment:wT,envmap_common_pars_fragment:DT,envmap_pars_fragment:UT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:kT,envmap_vertex:NT,fog_vertex:OT,fog_pars_vertex:PT,fog_fragment:zT,fog_pars_fragment:FT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:IT,lights_lambert_fragment:HT,lights_lambert_pars_fragment:GT,lights_pars_begin:VT,lights_toon_fragment:XT,lights_toon_pars_fragment:WT,lights_phong_fragment:qT,lights_phong_pars_fragment:YT,lights_physical_fragment:jT,lights_physical_pars_fragment:ZT,lights_fragment_begin:KT,lights_fragment_maps:QT,lights_fragment_end:JT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:tb,logdepthbuf_pars_vertex:eb,logdepthbuf_vertex:nb,map_fragment:ib,map_pars_fragment:ab,map_particle_fragment:rb,map_particle_pars_fragment:sb,metalnessmap_fragment:ob,metalnessmap_pars_fragment:lb,morphinstance_vertex:cb,morphcolor_vertex:ub,morphnormal_vertex:fb,morphtarget_pars_vertex:hb,morphtarget_vertex:db,normal_fragment_begin:pb,normal_fragment_maps:mb,normal_pars_fragment:gb,normal_pars_vertex:vb,normal_vertex:_b,normalmap_pars_fragment:yb,clearcoat_normal_fragment_begin:xb,clearcoat_normal_fragment_maps:Sb,clearcoat_pars_fragment:Mb,iridescence_pars_fragment:Eb,opaque_fragment:Tb,packing:bb,premultiplied_alpha_fragment:Ab,project_vertex:Rb,dithering_fragment:Cb,dithering_pars_fragment:wb,roughnessmap_fragment:Db,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:Lb,shadowmap_pars_vertex:Nb,shadowmap_vertex:Ob,shadowmask_pars_fragment:Pb,skinbase_vertex:zb,skinning_pars_vertex:Fb,skinning_vertex:Bb,skinnormal_vertex:Ib,specularmap_fragment:Hb,specularmap_pars_fragment:Gb,tonemapping_fragment:Vb,tonemapping_pars_fragment:kb,transmission_fragment:Xb,transmission_pars_fragment:Wb,uv_pars_fragment:qb,uv_pars_vertex:Yb,uv_vertex:jb,worldpos_vertex:Zb,background_vert:Kb,background_frag:Qb,backgroundCube_vert:Jb,backgroundCube_frag:$b,cube_vert:t1,cube_frag:e1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:a1,distanceRGBA_frag:r1,equirect_vert:s1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:d1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:x1,meshphysical_frag:S1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:T1,points_frag:b1,shadow_vert:A1,shadow_frag:R1,sprite_vert:C1,sprite_frag:w1},Ot={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Pn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Pn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Pn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Pn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Pn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Pn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Pn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Pn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Pn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Pn([Ot.common,Ot.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Pn([Ot.lights,Ot.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Pc={r:0,b:0,g:0},yr=new da,D1=new Ze;function U1(s,t,n,a,o,c,u){const h=new Oe(0);let p=c===!0?0:1,m,v,g=null,_=0,x=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?n:t).get(w)),w}function T(L){let w=!1;const X=E(L);X===null?y(h,p):X&&X.isColor&&(y(X,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,w){const X=E(w);X&&(X.isCubeTexture||X.mapping===nu)?(v===void 0&&(v=new zn(new tl(1,1,1),new Za({name:"BackgroundCubeMaterial",uniforms:Ns(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),yr.copy(w.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(yr)),v.material.toneMapped=Ue.getTransfer(X.colorSpace)!==Xe,(g!==X||_!==X.version||x!==s.toneMapping)&&(v.material.needsUpdate=!0,g=X,_=X.version,x=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new zn(new el(2,2),new Za({name:"BackgroundMaterial",uniforms:Ns(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(X.colorSpace)!==Xe,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(g!==X||_!==X.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,g=X,_=X.version,x=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function y(L,w){L.getRGB(Pc,J_(s)),a.buffers.color.setClear(Pc.r,Pc.g,Pc.b,w,u)}function z(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(h,p)},render:T,addToRenderList:M,dispose:z}}function L1(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,u=!1;function h(R,H,it,J,ct){let gt=!1;const O=g(J,it,H);c!==O&&(c=O,m(c.object)),gt=x(R,J,it,ct),gt&&E(R,J,it,ct),ct!==null&&t.update(ct,s.ELEMENT_ARRAY_BUFFER),(gt||u)&&(u=!1,w(R,H,it,J),ct!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function v(R){return s.deleteVertexArray(R)}function g(R,H,it){const J=it.wireframe===!0;let ct=a[R.id];ct===void 0&&(ct={},a[R.id]=ct);let gt=ct[H.id];gt===void 0&&(gt={},ct[H.id]=gt);let O=gt[J];return O===void 0&&(O=_(p()),gt[J]=O),O}function _(R){const H=[],it=[],J=[];for(let ct=0;ct<n;ct++)H[ct]=0,it[ct]=0,J[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:it,attributeDivisors:J,object:R,attributes:{},index:null}}function x(R,H,it,J){const ct=c.attributes,gt=H.attributes;let O=0;const $=it.getAttributes();for(const Q in $)if($[Q].location>=0){const Tt=ct[Q];let D=gt[Q];if(D===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(D=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(D=R.instanceColor)),Tt===void 0||Tt.attribute!==D||D&&Tt.data!==D.data)return!0;O++}return c.attributesNum!==O||c.index!==J}function E(R,H,it,J){const ct={},gt=H.attributes;let O=0;const $=it.getAttributes();for(const Q in $)if($[Q].location>=0){let Tt=gt[Q];Tt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const D={};D.attribute=Tt,Tt&&Tt.data&&(D.data=Tt.data),ct[Q]=D,O++}c.attributes=ct,c.attributesNum=O,c.index=J}function T(){const R=c.newAttributes;for(let H=0,it=R.length;H<it;H++)R[H]=0}function M(R){y(R,0)}function y(R,H){const it=c.newAttributes,J=c.enabledAttributes,ct=c.attributeDivisors;it[R]=1,J[R]===0&&(s.enableVertexAttribArray(R),J[R]=1),ct[R]!==H&&(s.vertexAttribDivisor(R,H),ct[R]=H)}function z(){const R=c.newAttributes,H=c.enabledAttributes;for(let it=0,J=H.length;it<J;it++)H[it]!==R[it]&&(s.disableVertexAttribArray(it),H[it]=0)}function L(R,H,it,J,ct,gt,O){O===!0?s.vertexAttribIPointer(R,H,it,ct,gt):s.vertexAttribPointer(R,H,it,J,ct,gt)}function w(R,H,it,J){T();const ct=J.attributes,gt=it.getAttributes(),O=H.defaultAttributeValues;for(const $ in gt){const Q=gt[$];if(Q.location>=0){let St=ct[$];if(St===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const Tt=St.normalized,D=St.itemSize,W=t.get(St);if(W===void 0)continue;const nt=W.buffer,G=W.type,lt=W.bytesPerElement,mt=G===s.INT||G===s.UNSIGNED_INT||St.gpuType===ip;if(St.isInterleavedBufferAttribute){const yt=St.data,Ct=yt.stride,qt=St.offset;if(yt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<Q.locationSize;Ht++)y(Q.location+Ht,yt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ht=0;Ht<Q.locationSize;Ht++)M(Q.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let Ht=0;Ht<Q.locationSize;Ht++)L(Q.location+Ht,D/Q.locationSize,G,Tt,Ct*lt,(qt+D/Q.locationSize*Ht)*lt,mt)}else{if(St.isInstancedBufferAttribute){for(let yt=0;yt<Q.locationSize;yt++)y(Q.location+yt,St.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let yt=0;yt<Q.locationSize;yt++)M(Q.location+yt);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let yt=0;yt<Q.locationSize;yt++)L(Q.location+yt,D/Q.locationSize,G,Tt,D*lt,D/Q.locationSize*yt*lt,mt)}}else if(O!==void 0){const Tt=O[$];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(Q.location,Tt);break;case 3:s.vertexAttrib3fv(Q.location,Tt);break;case 4:s.vertexAttrib4fv(Q.location,Tt);break;default:s.vertexAttrib1fv(Q.location,Tt)}}}}z()}function X(){k();for(const R in a){const H=a[R];for(const it in H){const J=H[it];for(const ct in J)v(J[ct].object),delete J[ct];delete H[it]}delete a[R]}}function F(R){if(a[R.id]===void 0)return;const H=a[R.id];for(const it in H){const J=H[it];for(const ct in J)v(J[ct].object),delete J[ct];delete H[it]}delete a[R.id]}function P(R){for(const H in a){const it=a[H];if(it[R.id]===void 0)continue;const J=it[R.id];for(const ct in J)v(J[ct].object),delete J[ct];delete it[R.id]}}function k(){U(),u=!0,c!==o&&(c=o,m(c.object))}function U(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:X,releaseStatesOfGeometry:F,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:z}}function N1(s,t,n){let a;function o(m){a=m}function c(m,v){s.drawArrays(a,m,v),n.update(v,a,1)}function u(m,v,g){g!==0&&(s.drawArraysInstanced(a,m,v,g),n.update(v,a,g))}function h(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];n.update(x,a,1)}function p(m,v,g,_){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)u(m[E],v[E],_[E]);else{x.multiDrawArraysInstancedWEBGL(a,m,0,v,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*_[T];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function O1(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(P){return!(P!==Ai&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const k=P===Zo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ha&&a.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==la&&!k)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),X=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:X,maxSamples:F}}function P1(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Sr,h=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||a!==0||o;return o=_,a=g.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,x){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,y=s.get(g);if(!o||E===null||E.length===0||c&&!M)c?v(null):m();else{const z=c?0:a,L=z*4;let w=y.clippingState||null;p.value=w,w=v(E,_,L,x);for(let X=0;X!==L;++X)w[X]=n[X];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function v(g,_,x,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const y=x+T*4,z=_.matrixWorldInverse;h.getNormalMatrix(z),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=x;L!==T;++L,w+=4)u.copy(g[L]).applyMatrix4(z,h),u.normal.toArray(M,w),M[w+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function z1(s){let t=new WeakMap;function n(u,h){return h===xd?u.mapping=Ds:h===Sd&&(u.mapping=Us),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===xd||h===Sd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new ME(p.height);return m.fromEquirectangularTexture(s,u),t.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const bs=4,V0=[.125,.215,.35,.446,.526,.582],Tr=20,Zh=new qE,k0=new Oe;let Kh=null,Qh=0,Jh=0,$h=!1;const Mr=(1+Math.sqrt(5))/2,Ss=1/Mr,X0=[new j(-Mr,Ss,0),new j(Mr,Ss,0),new j(-Ss,0,Mr),new j(Ss,0,Mr),new j(0,Mr,-Ss),new j(0,Mr,Ss),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],F1=new j;class W0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=F1}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,zc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Zo,format:Ai,colorSpace:Ls,depthBuffer:!1},o=q0(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(t,n,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B1(c)),this._blurMaterial=I1(c,t,n)}return o}_compileMaterial(t){const n=new zn(this._lodPlanes[0],t);this._renderer.compile(n,Zh)}_sceneToCubeUV(t,n,a,o,c){const p=new pi(90,1,n,a),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(k0),g.toneMapping=qa,g.autoClear=!1;const E=new Es({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),T=new zn(new tl,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(k0),M=!0);for(let z=0;z<6;z++){const L=z%3;L===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[z],c.y,c.z)):L===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[z]));const w=this._cubeSize;zc(o,L*w,z>2?w:0,w,w),g.setRenderTarget(o),M&&g.render(T,p),g.render(t,p)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=x,g.autoClear=_,t.background=y}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Ds||t.mapping===Us;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new zn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;zc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Zh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=X0[(o-c-1)%X0.length];this._blur(t,c-1,c,u,h)}n.autoClear=a}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new zn(this._lodPlanes[o],m),_=m.uniforms,x=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Tr-1),T=c/E,M=isFinite(c)?1+Math.floor(v*T):Tr;M>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Tr}`);const y=[];let z=0;for(let P=0;P<Tr;++P){const k=P/T,U=Math.exp(-k*k/2);y.push(U),P===0?z+=U:P<M&&(z+=2*U)}for(let P=0;P<y.length;P++)y[P]=y[P]/z;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-a;const w=this._sizeLods[o],X=3*w*(o>L-bs?o-L+bs:0),F=4*(this._cubeSize-w);zc(n,X,F,3*w,2*w),p.setRenderTarget(n),p.render(g,Zh)}}function B1(s){const t=[],n=[],a=[];let o=s;const c=s-bs+1+V0.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);n.push(h);let p=1/h;u>s-bs?p=V0[u-s+bs-1]:u===0&&(p=0),a.push(p);const m=1/(h-2),v=-m,g=1+m,_=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,T=3,M=2,y=1,z=new Float32Array(T*E*x),L=new Float32Array(M*E*x),w=new Float32Array(y*E*x);for(let F=0;F<x;F++){const P=F%3*2/3-1,k=F>2?0:-1,U=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];z.set(U,T*E*F),L.set(_,M*E*F);const R=[F,F,F,F,F,F];w.set(R,y*E*F)}const X=new mi;X.setAttribute("position",new zi(z,T)),X.setAttribute("uv",new zi(L,M)),X.setAttribute("faceIndex",new zi(w,y)),t.push(X),o>bs&&o--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function q0(s,t,n){const a=new Cr(s,t,n);return a.texture.mapping=nu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function zc(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function I1(s,t,n){const a=new Float32Array(Tr),o=new j(0,1,0);return new Za({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function Y0(){return new Za({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

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
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function j0(){return new Za({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wa,depthTest:!1,depthWrite:!1})}function pp(){return`

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
	`}function H1(s){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===xd||p===Sd,v=p===Ds||p===Us;if(m||v){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new W0(s)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return m&&x&&x.height>0||v&&x&&o(x)?(n===null&&(n=new W0(s)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function o(h){let p=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function G1(s){const t={};function n(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Yc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function V1(s,t,n,a){const o={},c=new WeakMap;function u(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const x=c.get(_);x&&(t.remove(x),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,n.memory.geometries++),_}function p(g){const _=g.attributes;for(const x in _)t.update(_[x],s.ARRAY_BUFFER)}function m(g){const _=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const z=x.array;T=x.version;for(let L=0,w=z.length;L<w;L+=3){const X=z[L+0],F=z[L+1],P=z[L+2];_.push(X,F,F,P,P,X)}}else if(E!==void 0){const z=E.array;T=E.version;for(let L=0,w=z.length/3-1;L<w;L+=3){const X=L+0,F=L+1,P=L+2;_.push(X,F,F,P,P,X)}}else return;const M=new(W_(_)?Q_:K_)(_,1);M.version=T;const y=c.get(g);y&&t.remove(y),c.set(g,M)}function v(g){const _=c.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&m(g)}else m(g);return c.get(g)}return{get:h,update:p,getWireframeAttribute:v}}function k1(s,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function p(_,x){s.drawElements(a,x,c,_*u),n.update(x,a,1)}function m(_,x,E){E!==0&&(s.drawElementsInstanced(a,x,c,_*u,E),n.update(x,a,E))}function v(_,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,c,_,0,E);let M=0;for(let y=0;y<E;y++)M+=x[y];n.update(M,a,1)}function g(_,x,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)m(_[y]/u,x[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,x,0,c,_,0,T,0,E);let y=0;for(let z=0;z<E;z++)y+=x[z]*T[z];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function X1(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function W1(s,t,n){const a=new WeakMap,o=new rn;function c(u,h,p){const m=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let _=a.get(h);if(_===void 0||_.count!==g){let U=function(){P.dispose(),a.delete(h),h.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const x=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let L=0;x===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let w=h.attributes.position.count*L,X=1;w>t.maxTextureSize&&(X=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*X*4*g),P=new q_(F,w,X,g);P.type=la,P.needsUpdate=!0;const k=L*4;for(let R=0;R<g;R++){const H=M[R],it=y[R],J=z[R],ct=w*X*4*R;for(let gt=0;gt<H.count;gt++){const O=gt*k;x===!0&&(o.fromBufferAttribute(H,gt),F[ct+O+0]=o.x,F[ct+O+1]=o.y,F[ct+O+2]=o.z,F[ct+O+3]=0),E===!0&&(o.fromBufferAttribute(it,gt),F[ct+O+4]=o.x,F[ct+O+5]=o.y,F[ct+O+6]=o.z,F[ct+O+7]=0),T===!0&&(o.fromBufferAttribute(J,gt),F[ct+O+8]=o.x,F[ct+O+9]=o.y,F[ct+O+10]=o.z,F[ct+O+11]=J.itemSize===4?o.w:1)}}_={count:g,texture:P,size:new re(w,X)},a.set(h,_),h.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let x=0;for(let T=0;T<m.length;T++)x+=m[T];const E=h.morphTargetsRelative?1:1-x;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function q1(s,t,n,a){let o=new WeakMap;function c(p){const m=a.render.frame,v=p.geometry,g=t.get(p,v);if(o.get(g)!==m&&(t.update(g),o.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return g}function u(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}const ly=new Fn,Z0=new ay(1,1),cy=new q_,uy=new rE,fy=new ty,K0=[],Q0=[],J0=new Float32Array(16),$0=new Float32Array(9),t_=new Float32Array(4);function zs(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=K0[o];if(c===void 0&&(c=new Float32Array(o),K0[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function mn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function gn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function au(s,t){let n=Q0[t];n===void 0&&(n=new Int32Array(t),Q0[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function Y1(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function j1(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2fv(this.addr,t),gn(n,t)}}function Z1(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;s.uniform3fv(this.addr,t),gn(n,t)}}function K1(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4fv(this.addr,t),gn(n,t)}}function Q1(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;t_.set(a),s.uniformMatrix2fv(this.addr,!1,t_),gn(n,a)}}function J1(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;$0.set(a),s.uniformMatrix3fv(this.addr,!1,$0),gn(n,a)}}function $1(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;J0.set(a),s.uniformMatrix4fv(this.addr,!1,J0),gn(n,a)}}function tA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function eA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2iv(this.addr,t),gn(n,t)}}function nA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;s.uniform3iv(this.addr,t),gn(n,t)}}function iA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4iv(this.addr,t),gn(n,t)}}function aA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function rA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;s.uniform2uiv(this.addr,t),gn(n,t)}}function sA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;s.uniform3uiv(this.addr,t),gn(n,t)}}function oA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;s.uniform4uiv(this.addr,t),gn(n,t)}}function lA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Z0.compareFunction=X_,c=Z0):c=ly,n.setTexture2D(t||c,o)}function cA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||uy,o)}function uA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||fy,o)}function fA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||cy,o)}function hA(s){switch(s){case 5126:return Y1;case 35664:return j1;case 35665:return Z1;case 35666:return K1;case 35674:return Q1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return tA;case 35667:case 35671:return eA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return aA;case 36294:return rA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return fA}}function dA(s,t){s.uniform1fv(this.addr,t)}function pA(s,t){const n=zs(t,this.size,2);s.uniform2fv(this.addr,n)}function mA(s,t){const n=zs(t,this.size,3);s.uniform3fv(this.addr,n)}function gA(s,t){const n=zs(t,this.size,4);s.uniform4fv(this.addr,n)}function vA(s,t){const n=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function _A(s,t){const n=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function yA(s,t){const n=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function xA(s,t){s.uniform1iv(this.addr,t)}function SA(s,t){s.uniform2iv(this.addr,t)}function MA(s,t){s.uniform3iv(this.addr,t)}function EA(s,t){s.uniform4iv(this.addr,t)}function TA(s,t){s.uniform1uiv(this.addr,t)}function bA(s,t){s.uniform2uiv(this.addr,t)}function AA(s,t){s.uniform3uiv(this.addr,t)}function RA(s,t){s.uniform4uiv(this.addr,t)}function CA(s,t,n){const a=this.cache,o=t.length,c=au(n,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||ly,c[u])}function wA(s,t,n){const a=this.cache,o=t.length,c=au(n,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||uy,c[u])}function DA(s,t,n){const a=this.cache,o=t.length,c=au(n,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||fy,c[u])}function UA(s,t,n){const a=this.cache,o=t.length,c=au(n,o);mn(a,c)||(s.uniform1iv(this.addr,c),gn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||cy,c[u])}function LA(s){switch(s){case 5126:return dA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return _A;case 35676:return yA;case 5124:case 35670:return xA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return bA;case 36295:return AA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}class NA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=hA(n.type)}}class OA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LA(n.type)}}class PA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const td=/(\w+)(\])?(\[|\.)?/g;function e_(s,t){s.seq.push(t),s.map[t.id]=t}function zA(s,t,n){const a=s.name,o=a.length;for(td.lastIndex=0;;){const c=td.exec(a),u=td.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&u+2===o){e_(n,m===void 0?new NA(h,s,t):new OA(h,s,t));break}else{let g=n.map[h];g===void 0&&(g=new PA(h),e_(n,g)),n=g}}}class jc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);zA(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function n_(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const FA=37297;let BA=0;function IA(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const i_=new fe;function HA(s){Ue._getMatrix(i_,Ue.workingColorSpace,s);const t=`mat3( ${i_.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(s)){case Kc:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function a_(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+IA(s.getShaderSource(t),u)}else return o}function GA(s,t){const n=HA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function VA(s,t){let n;switch(t){case DM:n="Linear";break;case UM:n="Reinhard";break;case LM:n="Cineon";break;case NM:n="ACESFilmic";break;case PM:n="AgX";break;case zM:n="Neutral";break;case OM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fc=new j;function kA(){Ue.getLuminanceCoefficients(Fc);const s=Fc.x.toFixed(4),t=Fc.y.toFixed(4),n=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function WA(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function qA(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function Ho(s){return s!==""}function r_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function s_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(s){return s.replace(YA,ZA)}const jA=new Map;function ZA(s,t){let n=de[t];if(n===void 0){const a=jA.get(t);if(a!==void 0)n=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Jd(n)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(s){return s.replace(KA,QA)}function QA(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function l_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function JA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function $A(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case nu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function eR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case L_:t="ENVMAP_BLENDING_MULTIPLY";break;case CM:t="ENVMAP_BLENDING_MIX";break;case wM:t="ENVMAP_BLENDING_ADD";break}return t}function nR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function iR(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const p=JA(n),m=$A(n),v=tR(n),g=eR(n),_=nR(n),x=XA(n),E=WA(c),T=o.createProgram();let M,y,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ho).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Ho).join(`
`),y.length>0&&(y+=`
`)):(M=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),y=[l_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qa?"#define TONE_MAPPING":"",n.toneMapping!==qa?de.tonemapping_pars_fragment:"",n.toneMapping!==qa?VA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,GA("linearToOutputTexel",n.outputColorSpace),kA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),u=Jd(u),u=r_(u,n),u=s_(u,n),h=Jd(h),h=r_(h,n),h=s_(h,n),u=o_(u),h=o_(h),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=z+M+u,w=z+y+h,X=n_(o,o.VERTEX_SHADER,L),F=n_(o,o.FRAGMENT_SHADER,w);o.attachShader(T,X),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function P(H){if(s.debug.checkShaderErrors){const it=o.getProgramInfoLog(T).trim(),J=o.getShaderInfoLog(X).trim(),ct=o.getShaderInfoLog(F).trim();let gt=!0,O=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(gt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,X,F);else{const $=a_(o,X,"vertex"),Q=a_(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+it+`
`+$+`
`+Q)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(J===""||ct==="")&&(O=!1);O&&(H.diagnostics={runnable:gt,programLog:it,vertexShader:{log:J,prefix:M},fragmentShader:{log:ct,prefix:y}})}o.deleteShader(X),o.deleteShader(F),k=new jc(o,T),U=qA(o,T)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,FA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=X,this.fragmentShader=F,this}let aR=0;class rR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new sR(t),n.set(t,a)),a}}class sR{constructor(t){this.id=aR++,this.code=t,this.usedTimes=0}}function oR(s,t,n,a,o,c,u){const h=new j_,p=new rR,m=new Set,v=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,R,H,it,J){const ct=it.fog,gt=J.geometry,O=U.isMeshStandardMaterial?it.environment:null,$=(U.isMeshStandardMaterial?n:t).get(U.envMap||O),Q=$&&$.mapping===nu?$.image.height:null,St=E[U.type];U.precision!==null&&(x=o.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const Tt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,D=Tt!==void 0?Tt.length:0;let W=0;gt.morphAttributes.position!==void 0&&(W=1),gt.morphAttributes.normal!==void 0&&(W=2),gt.morphAttributes.color!==void 0&&(W=3);let nt,G,lt,mt;if(St){const Re=Ni[St];nt=Re.vertexShader,G=Re.fragmentShader}else nt=U.vertexShader,G=U.fragmentShader,p.update(U),lt=p.getVertexShaderID(U),mt=p.getFragmentShaderID(U);const yt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),qt=J.isInstancedMesh===!0,Ht=J.isBatchedMesh===!0,Pe=!!U.map,Ne=!!U.matcap,he=!!$,I=!!U.aoMap,Be=!!U.lightMap,Qt=!!U.bumpMap,pe=!!U.normalMap,Gt=!!U.displacementMap,Ae=!!U.emissiveMap,Bt=!!U.metalnessMap,N=!!U.roughnessMap,A=U.anisotropy>0,at=U.clearcoat>0,ht=U.dispersion>0,Mt=U.iridescence>0,vt=U.sheen>0,Yt=U.transmission>0,Dt=A&&!!U.anisotropyMap,It=at&&!!U.clearcoatMap,_e=at&&!!U.clearcoatNormalMap,Rt=at&&!!U.clearcoatRoughnessMap,Vt=Mt&&!!U.iridescenceMap,$t=Mt&&!!U.iridescenceThicknessMap,jt=vt&&!!U.sheenColorMap,zt=vt&&!!U.sheenRoughnessMap,ne=!!U.specularMap,le=!!U.specularColorMap,Ie=!!U.specularIntensityMap,Y=Yt&&!!U.transmissionMap,Ut=Yt&&!!U.thicknessMap,ft=!!U.gradientMap,xt=!!U.alphaMap,wt=U.alphaTest>0,Lt=!!U.alphaHash,ie=!!U.extensions;let Ke=qa;U.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const fn={shaderID:St,shaderType:U.type,shaderName:U.name,vertexShader:nt,fragmentShader:G,defines:U.defines,customVertexShaderID:lt,customFragmentShaderID:mt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:Ht,batchingColor:Ht&&J._colorsTexture!==null,instancing:qt,instancingColor:qt&&J.instanceColor!==null,instancingMorph:qt&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ls,alphaToCoverage:!!U.alphaToCoverage,map:Pe,matcap:Ne,envMap:he,envMapMode:he&&$.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:Be,bumpMap:Qt,normalMap:pe,displacementMap:_&&Gt,emissiveMap:Ae,normalMapObjectSpace:pe&&U.normalMapType===GM,normalMapTangentSpace:pe&&U.normalMapType===HM,metalnessMap:Bt,roughnessMap:N,anisotropy:A,anisotropyMap:Dt,clearcoat:at,clearcoatMap:It,clearcoatNormalMap:_e,clearcoatRoughnessMap:Rt,dispersion:ht,iridescence:Mt,iridescenceMap:Vt,iridescenceThicknessMap:$t,sheen:vt,sheenColorMap:jt,sheenRoughnessMap:zt,specularMap:ne,specularColorMap:le,specularIntensityMap:Ie,transmission:Yt,transmissionMap:Y,thicknessMap:Ut,gradientMap:ft,opaque:U.transparent===!1&&U.blending===As&&U.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:Lt,combine:U.combine,mapUv:Pe&&T(U.map.channel),aoMapUv:I&&T(U.aoMap.channel),lightMapUv:Be&&T(U.lightMap.channel),bumpMapUv:Qt&&T(U.bumpMap.channel),normalMapUv:pe&&T(U.normalMap.channel),displacementMapUv:Gt&&T(U.displacementMap.channel),emissiveMapUv:Ae&&T(U.emissiveMap.channel),metalnessMapUv:Bt&&T(U.metalnessMap.channel),roughnessMapUv:N&&T(U.roughnessMap.channel),anisotropyMapUv:Dt&&T(U.anisotropyMap.channel),clearcoatMapUv:It&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(U.sheenRoughnessMap.channel),specularMapUv:ne&&T(U.specularMap.channel),specularColorMapUv:le&&T(U.specularColorMap.channel),specularIntensityMapUv:Ie&&T(U.specularIntensityMap.channel),transmissionMapUv:Y&&T(U.transmissionMap.channel),thicknessMapUv:Ut&&T(U.thicknessMap.channel),alphaMapUv:xt&&T(U.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(pe||A),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!gt.attributes.uv&&(Pe||xt),fog:!!ct,useFog:U.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ct,skinning:J.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Pe&&U.map.isVideoTexture===!0&&Ue.getTransfer(U.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ae&&U.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(U.emissiveMap.colorSpace)===Xe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===Oi,flipSided:U.side===jn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ie&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&U.extensions.multiDraw===!0||Ht)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return fn.vertexUv1s=m.has(1),fn.vertexUv2s=m.has(2),fn.vertexUv3s=m.has(3),m.clear(),fn}function y(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)R.push(H),R.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(z(R,U),L(R,U),R.push(s.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function z(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function L(U,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),U.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),U.push(h.mask)}function w(U){const R=E[U.type];let H;if(R){const it=Ni[R];H=_E.clone(it.uniforms)}else H=U.uniforms;return H}function X(U,R){let H;for(let it=0,J=v.length;it<J;it++){const ct=v[it];if(ct.cacheKey===R){H=ct,++H.usedTimes;break}}return H===void 0&&(H=new iR(s,R,U,c),v.push(H)),H}function F(U){if(--U.usedTimes===0){const R=v.indexOf(U);v[R]=v[v.length-1],v.pop(),U.destroy()}}function P(U){p.remove(U)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:X,releaseProgram:F,releaseShaderCache:P,programs:v,dispose:k}}function lR(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,p){s.get(u)[h]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function cR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function c_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function u_(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g,_,x,E,T,M){let y=s[t];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},s[t]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=T,y.group=M),t++,y}function h(g,_,x,E,T,M){const y=u(g,_,x,E,T,M);x.transmission>0?a.push(y):x.transparent===!0?o.push(y):n.push(y)}function p(g,_,x,E,T,M){const y=u(g,_,x,E,T,M);x.transmission>0?a.unshift(y):x.transparent===!0?o.unshift(y):n.unshift(y)}function m(g,_){n.length>1&&n.sort(g||cR),a.length>1&&a.sort(_||c_),o.length>1&&o.sort(_||c_)}function v(){for(let g=t,_=s.length;g<_;g++){const x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:v,sort:m}}function uR(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new u_,s.set(a,[u])):o>=c.length?(u=new u_,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function fR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Oe};break;case"SpotLight":n={position:new j,direction:new j,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=n,n}}}function hR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let dR=0;function pR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mR(s){const t=new fR,n=hR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new j);const o=new j,c=new Ze,u=new Ze;function h(m){let v=0,g=0,_=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let x=0,E=0,T=0,M=0,y=0,z=0,L=0,w=0,X=0,F=0,P=0;m.sort(pR);for(let U=0,R=m.length;U<R;U++){const H=m[U],it=H.color,J=H.intensity,ct=H.distance,gt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=it.r*J,g+=it.g*J,_+=it.b*J;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],J);P++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,Q=n.get(H);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,a.directionalShadow[x]=Q,a.directionalShadowMap[x]=gt,a.directionalShadowMatrix[x]=H.shadow.matrix,z++}a.directional[x]=O,x++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(it).multiplyScalar(J),O.distance=ct,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[T]=O;const $=H.shadow;if(H.map&&(a.spotLightMap[X]=H.map,X++,$.updateMatrices(H),H.castShadow&&F++),a.spotLightMatrix[T]=$.matrix,H.castShadow){const Q=n.get(H);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,a.spotShadow[T]=Q,a.spotShadowMap[T]=gt,w++}T++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(it).multiplyScalar(J),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=O,M++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const $=H.shadow,Q=n.get(H);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,a.pointShadow[E]=Q,a.pointShadowMap[E]=gt,a.pointShadowMatrix[E]=H.shadow.matrix,L++}a.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(J),O.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[y]=O,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=g,a.ambient[2]=_;const k=a.hash;(k.directionalLength!==x||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==M||k.hemiLength!==y||k.numDirectionalShadows!==z||k.numPointShadows!==L||k.numSpotShadows!==w||k.numSpotMaps!==X||k.numLightProbes!==P)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+X-F,a.spotLightMap.length=X,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=P,k.directionalLength=x,k.pointLength=E,k.spotLength=T,k.rectAreaLength=M,k.hemiLength=y,k.numDirectionalShadows=z,k.numPointShadows=L,k.numSpotShadows=w,k.numSpotMaps=X,k.numLightProbes=P,a.version=dR++)}function p(m,v){let g=0,_=0,x=0,E=0,T=0;const M=v.matrixWorldInverse;for(let y=0,z=m.length;y<z;y++){const L=m[y];if(L.isDirectionalLight){const w=a.directional[g];w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),g++}else if(L.isSpotLight){const w=a.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),x++}else if(L.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(L.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(L.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function f_(s){const t=new mR(s),n=[],a=[];function o(v){m.camera=v,n.length=0,a.length=0}function c(v){n.push(v)}function u(v){a.push(v)}function h(){t.setup(n)}function p(v){t.setupView(n,v)}const m={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u}}function gR(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new f_(s),t.set(o,[h])):c>=u.length?(h=new f_(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const vR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_R=`uniform sampler2D shadow_pass;
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
}`;function yR(s,t,n){let a=new ey;const o=new re,c=new re,u=new rn,h=new kE({depthPacking:IM}),p=new XE,m={},v=n.maxTextureSize,g={[ja]:jn,[jn]:ja,[Oi]:Oi},_=new Za({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:vR,fragmentShader:_R}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const E=new mi;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new zn(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let y=this.type;this.render=function(F,P,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const U=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),it=s.state;it.setBlending(Wa),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const J=y!==sa&&this.type===sa,ct=y===sa&&this.type!==sa;for(let gt=0,O=F.length;gt<O;gt++){const $=F[gt],Q=$.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const St=Q.getFrameExtents();if(o.multiply(St),c.copy(Q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/St.x),o.x=c.x*St.x,Q.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/St.y),o.y=c.y*St.y,Q.mapSize.y=c.y)),Q.map===null||J===!0||ct===!0){const D=this.type!==sa?{minFilter:Ri,magFilter:Ri}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Cr(o.x,o.y,D),Q.map.texture.name=$.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const Tt=Q.getViewportCount();for(let D=0;D<Tt;D++){const W=Q.getViewport(D);u.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),it.viewport(u),Q.updateMatrices($,D),a=Q.getFrustum(),w(P,k,Q.camera,$,this.type)}Q.isPointLightShadow!==!0&&this.type===sa&&z(Q,k),Q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(U,R,H)};function z(F,P){const k=t.update(T);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Cr(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(P,null,k,_,T,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(P,null,k,x,T,null)}function L(F,P,k,U){let R=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=k.isPointLight===!0?p:h,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const it=R.uuid,J=P.uuid;let ct=m[it];ct===void 0&&(ct={},m[it]=ct);let gt=ct[J];gt===void 0&&(gt=R.clone(),ct[J]=gt,P.addEventListener("dispose",X)),R=gt}if(R.visible=P.visible,R.wireframe=P.wireframe,U===sa?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:g[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const it=s.properties.get(R);it.light=k}return R}function w(F,P,k,U,R){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===sa)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const J=t.update(F),ct=F.material;if(Array.isArray(ct)){const gt=J.groups;for(let O=0,$=gt.length;O<$;O++){const Q=gt[O],St=ct[Q.materialIndex];if(St&&St.visible){const Tt=L(F,St,U,R);F.onBeforeShadow(s,F,P,k,J,Tt,Q),s.renderBufferDirect(k,null,J,Tt,F,Q),F.onAfterShadow(s,F,P,k,J,Tt,Q)}}}else if(ct.visible){const gt=L(F,ct,U,R);F.onBeforeShadow(s,F,P,k,J,gt,null),s.renderBufferDirect(k,null,J,gt,F,null),F.onAfterShadow(s,F,P,k,J,gt,null)}}const it=F.children;for(let J=0,ct=it.length;J<ct;J++)w(it[J],P,k,U,R)}function X(F){F.target.removeEventListener("dispose",X);for(const k in m){const U=m[k],R=F.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const xR={[dd]:pd,[md]:_d,[gd]:yd,[ws]:vd,[pd]:dd,[_d]:md,[yd]:gd,[vd]:ws};function SR(s,t){function n(){let Y=!1;const Ut=new rn;let ft=null;const xt=new rn(0,0,0,0);return{setMask:function(wt){ft!==wt&&!Y&&(s.colorMask(wt,wt,wt,wt),ft=wt)},setLocked:function(wt){Y=wt},setClear:function(wt,Lt,ie,Ke,fn){fn===!0&&(wt*=Ke,Lt*=Ke,ie*=Ke),Ut.set(wt,Lt,ie,Ke),xt.equals(Ut)===!1&&(s.clearColor(wt,Lt,ie,Ke),xt.copy(Ut))},reset:function(){Y=!1,ft=null,xt.set(-1,0,0,0)}}}function a(){let Y=!1,Ut=!1,ft=null,xt=null,wt=null;return{setReversed:function(Lt){if(Ut!==Lt){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const Ke=wt;wt=null,this.setClear(Ke)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?yt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(Lt){ft!==Lt&&!Y&&(s.depthMask(Lt),ft=Lt)},setFunc:function(Lt){if(Ut&&(Lt=xR[Lt]),xt!==Lt){switch(Lt){case dd:s.depthFunc(s.NEVER);break;case pd:s.depthFunc(s.ALWAYS);break;case md:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case gd:s.depthFunc(s.EQUAL);break;case vd:s.depthFunc(s.GEQUAL);break;case _d:s.depthFunc(s.GREATER);break;case yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=Lt}},setLocked:function(Lt){Y=Lt},setClear:function(Lt){wt!==Lt&&(Ut&&(Lt=1-Lt),s.clearDepth(Lt),wt=Lt)},reset:function(){Y=!1,ft=null,xt=null,wt=null,Ut=!1}}}function o(){let Y=!1,Ut=null,ft=null,xt=null,wt=null,Lt=null,ie=null,Ke=null,fn=null;return{setTest:function(Re){Y||(Re?yt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(Re){Ut!==Re&&!Y&&(s.stencilMask(Re),Ut=Re)},setFunc:function(Re,xn,gi){(ft!==Re||xt!==xn||wt!==gi)&&(s.stencilFunc(Re,xn,gi),ft=Re,xt=xn,wt=gi)},setOp:function(Re,xn,gi){(Lt!==Re||ie!==xn||Ke!==gi)&&(s.stencilOp(Re,xn,gi),Lt=Re,ie=xn,Ke=gi)},setLocked:function(Re){Y=Re},setClear:function(Re){fn!==Re&&(s.clearStencil(Re),fn=Re)},reset:function(){Y=!1,Ut=null,ft=null,xt=null,wt=null,Lt=null,ie=null,Ke=null,fn=null}}}const c=new n,u=new a,h=new o,p=new WeakMap,m=new WeakMap;let v={},g={},_=new WeakMap,x=[],E=null,T=!1,M=null,y=null,z=null,L=null,w=null,X=null,F=null,P=new Oe(0,0,0),k=0,U=!1,R=null,H=null,it=null,J=null,ct=null;const gt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,$=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=$>=2);let St=null,Tt={};const D=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),nt=new rn().fromArray(D),G=new rn().fromArray(W);function lt(Y,Ut,ft,xt){const wt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(Y,Lt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ie=0;ie<ft;ie++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ut,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(Ut+ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Lt}const mt={};mt[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),yt(s.DEPTH_TEST),u.setFunc(ws),Qt(!1),pe(f0),yt(s.CULL_FACE),I(Wa);function yt(Y){v[Y]!==!0&&(s.enable(Y),v[Y]=!0)}function Ct(Y){v[Y]!==!1&&(s.disable(Y),v[Y]=!1)}function qt(Y,Ut){return g[Y]!==Ut?(s.bindFramebuffer(Y,Ut),g[Y]=Ut,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ut),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht(Y,Ut){let ft=x,xt=!1;if(Y){ft=_.get(Ut),ft===void 0&&(ft=[],_.set(Ut,ft));const wt=Y.textures;if(ft.length!==wt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,ie=wt.length;Lt<ie;Lt++)ft[Lt]=s.COLOR_ATTACHMENT0+Lt;ft.length=wt.length,xt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,xt=!0);xt&&s.drawBuffers(ft)}function Pe(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const Ne={[Er]:s.FUNC_ADD,[fM]:s.FUNC_SUBTRACT,[hM]:s.FUNC_REVERSE_SUBTRACT};Ne[dM]=s.MIN,Ne[pM]=s.MAX;const he={[mM]:s.ZERO,[gM]:s.ONE,[vM]:s.SRC_COLOR,[fd]:s.SRC_ALPHA,[EM]:s.SRC_ALPHA_SATURATE,[SM]:s.DST_COLOR,[yM]:s.DST_ALPHA,[_M]:s.ONE_MINUS_SRC_COLOR,[hd]:s.ONE_MINUS_SRC_ALPHA,[MM]:s.ONE_MINUS_DST_COLOR,[xM]:s.ONE_MINUS_DST_ALPHA,[TM]:s.CONSTANT_COLOR,[bM]:s.ONE_MINUS_CONSTANT_COLOR,[AM]:s.CONSTANT_ALPHA,[RM]:s.ONE_MINUS_CONSTANT_ALPHA};function I(Y,Ut,ft,xt,wt,Lt,ie,Ke,fn,Re){if(Y===Wa){T===!0&&(Ct(s.BLEND),T=!1);return}if(T===!1&&(yt(s.BLEND),T=!0),Y!==uM){if(Y!==M||Re!==U){if((y!==Er||w!==Er)&&(s.blendEquation(s.FUNC_ADD),y=Er,w=Er),Re)switch(Y){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h0:s.blendFunc(s.ONE,s.ONE);break;case d0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case p0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case h0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case d0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case p0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}z=null,L=null,X=null,F=null,P.set(0,0,0),k=0,M=Y,U=Re}return}wt=wt||Ut,Lt=Lt||ft,ie=ie||xt,(Ut!==y||wt!==w)&&(s.blendEquationSeparate(Ne[Ut],Ne[wt]),y=Ut,w=wt),(ft!==z||xt!==L||Lt!==X||ie!==F)&&(s.blendFuncSeparate(he[ft],he[xt],he[Lt],he[ie]),z=ft,L=xt,X=Lt,F=ie),(Ke.equals(P)===!1||fn!==k)&&(s.blendColor(Ke.r,Ke.g,Ke.b,fn),P.copy(Ke),k=fn),M=Y,U=!1}function Be(Y,Ut){Y.side===Oi?Ct(s.CULL_FACE):yt(s.CULL_FACE);let ft=Y.side===jn;Ut&&(ft=!ft),Qt(ft),Y.blending===As&&Y.transparent===!1?I(Wa):I(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const xt=Y.stencilWrite;h.setTest(xt),xt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ae(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(Y){R!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),R=Y)}function pe(Y){Y!==oM?(yt(s.CULL_FACE),Y!==H&&(Y===f0?s.cullFace(s.BACK):Y===lM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),H=Y}function Gt(Y){Y!==it&&(O&&s.lineWidth(Y),it=Y)}function Ae(Y,Ut,ft){Y?(yt(s.POLYGON_OFFSET_FILL),(J!==Ut||ct!==ft)&&(s.polygonOffset(Ut,ft),J=Ut,ct=ft)):Ct(s.POLYGON_OFFSET_FILL)}function Bt(Y){Y?yt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=s.TEXTURE0+gt-1),St!==Y&&(s.activeTexture(Y),St=Y)}function A(Y,Ut,ft){ft===void 0&&(St===null?ft=s.TEXTURE0+gt-1:ft=St);let xt=Tt[ft];xt===void 0&&(xt={type:void 0,texture:void 0},Tt[ft]=xt),(xt.type!==Y||xt.texture!==Ut)&&(St!==ft&&(s.activeTexture(ft),St=ft),s.bindTexture(Y,Ut||mt[Y]),xt.type=Y,xt.texture=Ut)}function at(){const Y=Tt[St];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ht(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Vt(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $t(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function jt(Y){nt.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),nt.copy(Y))}function zt(Y){G.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function ne(Y,Ut){let ft=m.get(Ut);ft===void 0&&(ft=new WeakMap,m.set(Ut,ft));let xt=ft.get(Y);xt===void 0&&(xt=s.getUniformBlockIndex(Ut,Y.name),ft.set(Y,xt))}function le(Y,Ut){const xt=m.get(Ut).get(Y);p.get(Ut)!==xt&&(s.uniformBlockBinding(Ut,xt,Y.__bindingPointIndex),p.set(Ut,xt))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},St=null,Tt={},g={},_=new WeakMap,x=[],E=null,T=!1,M=null,y=null,z=null,L=null,w=null,X=null,F=null,P=new Oe(0,0,0),k=0,U=!1,R=null,H=null,it=null,J=null,ct=null,nt.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:yt,disable:Ct,bindFramebuffer:qt,drawBuffers:Ht,useProgram:Pe,setBlending:I,setMaterial:Be,setFlipSided:Qt,setCullFace:pe,setLineWidth:Gt,setPolygonOffset:Ae,setScissorTest:Bt,activeTexture:N,bindTexture:A,unbindTexture:at,compressedTexImage2D:ht,compressedTexImage3D:Mt,texImage2D:Vt,texImage3D:$t,updateUBOMapping:ne,uniformBlockBinding:le,texStorage2D:_e,texStorage3D:Rt,texSubImage2D:vt,texSubImage3D:Yt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:It,scissor:jt,viewport:zt,reset:Ie}}function MR(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new re,v=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return x?new OffscreenCanvas(N,A):Jc("canvas")}function T(N,A,at){let ht=1;const Mt=Bt(N);if((Mt.width>at||Mt.height>at)&&(ht=at/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const vt=Math.floor(ht*Mt.width),Yt=Math.floor(ht*Mt.height);g===void 0&&(g=E(vt,Yt));const Dt=A?E(vt,Yt):g;return Dt.width=vt,Dt.height=Yt,Dt.getContext("2d").drawImage(N,0,0,vt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+vt+"x"+Yt+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){s.generateMipmap(N)}function z(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,A,at,ht,Mt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let vt=A;if(A===s.RED&&(at===s.FLOAT&&(vt=s.R32F),at===s.HALF_FLOAT&&(vt=s.R16F),at===s.UNSIGNED_BYTE&&(vt=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(vt=s.R8UI),at===s.UNSIGNED_SHORT&&(vt=s.R16UI),at===s.UNSIGNED_INT&&(vt=s.R32UI),at===s.BYTE&&(vt=s.R8I),at===s.SHORT&&(vt=s.R16I),at===s.INT&&(vt=s.R32I)),A===s.RG&&(at===s.FLOAT&&(vt=s.RG32F),at===s.HALF_FLOAT&&(vt=s.RG16F),at===s.UNSIGNED_BYTE&&(vt=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(vt=s.RG8UI),at===s.UNSIGNED_SHORT&&(vt=s.RG16UI),at===s.UNSIGNED_INT&&(vt=s.RG32UI),at===s.BYTE&&(vt=s.RG8I),at===s.SHORT&&(vt=s.RG16I),at===s.INT&&(vt=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(vt=s.RGB8UI),at===s.UNSIGNED_SHORT&&(vt=s.RGB16UI),at===s.UNSIGNED_INT&&(vt=s.RGB32UI),at===s.BYTE&&(vt=s.RGB8I),at===s.SHORT&&(vt=s.RGB16I),at===s.INT&&(vt=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(vt=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(vt=s.RGBA16UI),at===s.UNSIGNED_INT&&(vt=s.RGBA32UI),at===s.BYTE&&(vt=s.RGBA8I),at===s.SHORT&&(vt=s.RGBA16I),at===s.INT&&(vt=s.RGBA32I)),A===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(vt=s.RGB9_E5),A===s.RGBA){const Yt=Mt?Kc:Ue.getTransfer(ht);at===s.FLOAT&&(vt=s.RGBA32F),at===s.HALF_FLOAT&&(vt=s.RGBA16F),at===s.UNSIGNED_BYTE&&(vt=Yt===Xe?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(vt=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(vt=s.RGB5_A1)}return(vt===s.R16F||vt===s.R32F||vt===s.RG16F||vt===s.RG32F||vt===s.RGBA16F||vt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function w(N,A){let at;return N?A===null||A===Rr||A===qo?at=s.DEPTH24_STENCIL8:A===la?at=s.DEPTH32F_STENCIL8:A===Wo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Rr||A===qo?at=s.DEPTH_COMPONENT24:A===la?at=s.DEPTH_COMPONENT32F:A===Wo&&(at=s.DEPTH_COMPONENT16),at}function X(N,A){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ri&&N.minFilter!==Pi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function F(N){const A=N.target;A.removeEventListener("dispose",F),k(A),A.isVideoTexture&&v.delete(A)}function P(N){const A=N.target;A.removeEventListener("dispose",P),R(A)}function k(N){const A=a.get(N);if(A.__webglInit===void 0)return;const at=N.source,ht=_.get(at);if(ht){const Mt=ht[A.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&U(N),Object.keys(ht).length===0&&_.delete(at)}a.remove(N)}function U(N){const A=a.get(N);s.deleteTexture(A.__webglTexture);const at=N.source,ht=_.get(at);delete ht[A.__cacheKey],u.memory.textures--}function R(N){const A=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(A.__webglFramebuffer[ht]))for(let Mt=0;Mt<A.__webglFramebuffer[ht].length;Mt++)s.deleteFramebuffer(A.__webglFramebuffer[ht][Mt]);else s.deleteFramebuffer(A.__webglFramebuffer[ht]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ht])}else{if(Array.isArray(A.__webglFramebuffer))for(let ht=0;ht<A.__webglFramebuffer.length;ht++)s.deleteFramebuffer(A.__webglFramebuffer[ht]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ht=0;ht<A.__webglColorRenderbuffer.length;ht++)A.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ht]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=N.textures;for(let ht=0,Mt=at.length;ht<Mt;ht++){const vt=a.get(at[ht]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),u.memory.textures--),a.remove(at[ht])}a.remove(N)}let H=0;function it(){H=0}function J(){const N=H;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ct(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function gt(N,A){const at=a.get(N);if(N.isVideoTexture&&Gt(N),N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(at,N,A);return}}n.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function O(N,A){const at=a.get(N);if(N.version>0&&at.__version!==N.version){G(at,N,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function $(N,A){const at=a.get(N);if(N.version>0&&at.__version!==N.version){G(at,N,A);return}n.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function Q(N,A){const at=a.get(N);if(N.version>0&&at.__version!==N.version){lt(at,N,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const St={[Md]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[Ed]:s.MIRRORED_REPEAT},Tt={[Ri]:s.NEAREST,[FM]:s.NEAREST_MIPMAP_NEAREST,[pc]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[Sh]:s.LINEAR_MIPMAP_NEAREST,[Ar]:s.LINEAR_MIPMAP_LINEAR},D={[VM]:s.NEVER,[jM]:s.ALWAYS,[kM]:s.LESS,[X_]:s.LEQUAL,[XM]:s.EQUAL,[YM]:s.GEQUAL,[WM]:s.GREATER,[qM]:s.NOTEQUAL};function W(N,A){if(A.type===la&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Pi||A.magFilter===Sh||A.magFilter===pc||A.magFilter===Ar||A.minFilter===Pi||A.minFilter===Sh||A.minFilter===pc||A.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,St[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,St[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,St[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Tt[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,D[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==pc&&A.minFilter!==Ar||A.type===la&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function nt(N,A){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",F));const ht=A.source;let Mt=_.get(ht);Mt===void 0&&(Mt={},_.set(ht,Mt));const vt=ct(A);if(vt!==N.__cacheKey){Mt[vt]===void 0&&(Mt[vt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,at=!0),Mt[vt].usedTimes++;const Yt=Mt[N.__cacheKey];Yt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Yt.usedTimes===0&&U(A)),N.__cacheKey=vt,N.__webglTexture=Mt[vt].texture}return at}function G(N,A,at){let ht=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ht=s.TEXTURE_3D);const Mt=nt(N,A),vt=A.source;n.bindTexture(ht,N.__webglTexture,s.TEXTURE0+at);const Yt=a.get(vt);if(vt.version!==Yt.__version||Mt===!0){n.activeTexture(s.TEXTURE0+at);const Dt=Ue.getPrimaries(Ue.workingColorSpace),It=A.colorSpace===Xa?null:Ue.getPrimaries(A.colorSpace),_e=A.colorSpace===Xa||Dt===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Rt=T(A.image,!1,o.maxTextureSize);Rt=Ae(A,Rt);const Vt=c.convert(A.format,A.colorSpace),$t=c.convert(A.type);let jt=L(A.internalFormat,Vt,$t,A.colorSpace,A.isVideoTexture);W(ht,A);let zt;const ne=A.mipmaps,le=A.isVideoTexture!==!0,Ie=Yt.__version===void 0||Mt===!0,Y=vt.dataReady,Ut=X(A,Rt);if(A.isDepthTexture)jt=w(A.format===jo,A.type),Ie&&(le?n.texStorage2D(s.TEXTURE_2D,1,jt,Rt.width,Rt.height):n.texImage2D(s.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Vt,$t,null));else if(A.isDataTexture)if(ne.length>0){le&&Ie&&n.texStorage2D(s.TEXTURE_2D,Ut,jt,ne[0].width,ne[0].height);for(let ft=0,xt=ne.length;ft<xt;ft++)zt=ne[ft],le?Y&&n.texSubImage2D(s.TEXTURE_2D,ft,0,0,zt.width,zt.height,Vt,$t,zt.data):n.texImage2D(s.TEXTURE_2D,ft,jt,zt.width,zt.height,0,Vt,$t,zt.data);A.generateMipmaps=!1}else le?(Ie&&n.texStorage2D(s.TEXTURE_2D,Ut,jt,Rt.width,Rt.height),Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Vt,$t,Rt.data)):n.texImage2D(s.TEXTURE_2D,0,jt,Rt.width,Rt.height,0,Vt,$t,Rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,jt,ne[0].width,ne[0].height,Rt.depth);for(let ft=0,xt=ne.length;ft<xt;ft++)if(zt=ne[ft],A.format!==Ai)if(Vt!==null)if(le){if(Y)if(A.layerUpdates.size>0){const wt=G0(zt.width,zt.height,A.format,A.type);for(const Lt of A.layerUpdates){const ie=zt.data.subarray(Lt*wt/zt.data.BYTES_PER_ELEMENT,(Lt+1)*wt/zt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Lt,zt.width,zt.height,1,Vt,ie)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,zt.width,zt.height,Rt.depth,Vt,zt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,jt,zt.width,zt.height,Rt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,zt.width,zt.height,Rt.depth,Vt,$t,zt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ft,jt,zt.width,zt.height,Rt.depth,0,Vt,$t,zt.data)}else{le&&Ie&&n.texStorage2D(s.TEXTURE_2D,Ut,jt,ne[0].width,ne[0].height);for(let ft=0,xt=ne.length;ft<xt;ft++)zt=ne[ft],A.format!==Ai?Vt!==null?le?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,zt.width,zt.height,Vt,zt.data):n.compressedTexImage2D(s.TEXTURE_2D,ft,jt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?Y&&n.texSubImage2D(s.TEXTURE_2D,ft,0,0,zt.width,zt.height,Vt,$t,zt.data):n.texImage2D(s.TEXTURE_2D,ft,jt,zt.width,zt.height,0,Vt,$t,zt.data)}else if(A.isDataArrayTexture)if(le){if(Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ut,jt,Rt.width,Rt.height,Rt.depth),Y)if(A.layerUpdates.size>0){const ft=G0(Rt.width,Rt.height,A.format,A.type);for(const xt of A.layerUpdates){const wt=Rt.data.subarray(xt*ft/Rt.data.BYTES_PER_ELEMENT,(xt+1)*ft/Rt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xt,Rt.width,Rt.height,1,Vt,$t,wt)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Vt,$t,Rt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,Rt.width,Rt.height,Rt.depth,0,Vt,$t,Rt.data);else if(A.isData3DTexture)le?(Ie&&n.texStorage3D(s.TEXTURE_3D,Ut,jt,Rt.width,Rt.height,Rt.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Vt,$t,Rt.data)):n.texImage3D(s.TEXTURE_3D,0,jt,Rt.width,Rt.height,Rt.depth,0,Vt,$t,Rt.data);else if(A.isFramebufferTexture){if(Ie)if(le)n.texStorage2D(s.TEXTURE_2D,Ut,jt,Rt.width,Rt.height);else{let ft=Rt.width,xt=Rt.height;for(let wt=0;wt<Ut;wt++)n.texImage2D(s.TEXTURE_2D,wt,jt,ft,xt,0,Vt,$t,null),ft>>=1,xt>>=1}}else if(ne.length>0){if(le&&Ie){const ft=Bt(ne[0]);n.texStorage2D(s.TEXTURE_2D,Ut,jt,ft.width,ft.height)}for(let ft=0,xt=ne.length;ft<xt;ft++)zt=ne[ft],le?Y&&n.texSubImage2D(s.TEXTURE_2D,ft,0,0,Vt,$t,zt):n.texImage2D(s.TEXTURE_2D,ft,jt,Vt,$t,zt);A.generateMipmaps=!1}else if(le){if(Ie){const ft=Bt(Rt);n.texStorage2D(s.TEXTURE_2D,Ut,jt,ft.width,ft.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,$t,Rt)}else n.texImage2D(s.TEXTURE_2D,0,jt,Vt,$t,Rt);M(A)&&y(ht),Yt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function lt(N,A,at){if(A.image.length!==6)return;const ht=nt(N,A),Mt=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+at);const vt=a.get(Mt);if(Mt.version!==vt.__version||ht===!0){n.activeTexture(s.TEXTURE0+at);const Yt=Ue.getPrimaries(Ue.workingColorSpace),Dt=A.colorSpace===Xa?null:Ue.getPrimaries(A.colorSpace),It=A.colorSpace===Xa||Yt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,Rt=A.image[0]&&A.image[0].isDataTexture,Vt=[];for(let xt=0;xt<6;xt++)!_e&&!Rt?Vt[xt]=T(A.image[xt],!0,o.maxCubemapSize):Vt[xt]=Rt?A.image[xt].image:A.image[xt],Vt[xt]=Ae(A,Vt[xt]);const $t=Vt[0],jt=c.convert(A.format,A.colorSpace),zt=c.convert(A.type),ne=L(A.internalFormat,jt,zt,A.colorSpace),le=A.isVideoTexture!==!0,Ie=vt.__version===void 0||ht===!0,Y=Mt.dataReady;let Ut=X(A,$t);W(s.TEXTURE_CUBE_MAP,A);let ft;if(_e){le&&Ie&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ne,$t.width,$t.height);for(let xt=0;xt<6;xt++){ft=Vt[xt].mipmaps;for(let wt=0;wt<ft.length;wt++){const Lt=ft[wt];A.format!==Ai?jt!==null?le?Y&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,Lt.width,Lt.height,jt,Lt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ne,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,Lt.width,Lt.height,jt,zt,Lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,ne,Lt.width,Lt.height,0,jt,zt,Lt.data)}}}else{if(ft=A.mipmaps,le&&Ie){ft.length>0&&Ut++;const xt=Bt(Vt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ut,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Rt){le?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt[xt].width,Vt[xt].height,jt,zt,Vt[xt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Vt[xt].width,Vt[xt].height,0,jt,zt,Vt[xt].data);for(let wt=0;wt<ft.length;wt++){const ie=ft[wt].image[xt].image;le?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,ie.width,ie.height,jt,zt,ie.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ne,ie.width,ie.height,0,jt,zt,ie.data)}}else{le?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,jt,zt,Vt[xt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,jt,zt,Vt[xt]);for(let wt=0;wt<ft.length;wt++){const Lt=ft[wt];le?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,jt,zt,Lt.image[xt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,ne,jt,zt,Lt.image[xt])}}}M(A)&&y(s.TEXTURE_CUBE_MAP),vt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function mt(N,A,at,ht,Mt,vt){const Yt=c.convert(at.format,at.colorSpace),Dt=c.convert(at.type),It=L(at.internalFormat,Yt,Dt,at.colorSpace),_e=a.get(A),Rt=a.get(at);if(Rt.__renderTarget=A,!_e.__hasExternalTextures){const Vt=Math.max(1,A.width>>vt),$t=Math.max(1,A.height>>vt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?n.texImage3D(Mt,vt,It,Vt,$t,A.depth,0,Yt,Dt,null):n.texImage2D(Mt,vt,It,Vt,$t,0,Yt,Dt,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,Mt,Rt.__webglTexture,0,Qt(A)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,Mt,Rt.__webglTexture,vt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(N,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){const ht=A.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,vt=w(A.stencilBuffer,Mt),Yt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=Qt(A);pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,vt,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,vt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,vt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,N)}else{const ht=A.textures;for(let Mt=0;Mt<ht.length;Mt++){const vt=ht[Mt],Yt=c.convert(vt.format,vt.colorSpace),Dt=c.convert(vt.type),It=L(vt.internalFormat,Yt,Dt,vt.colorSpace),_e=Qt(A);at&&pe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,It,A.width,A.height):pe(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,It,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,It,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(A.depthTexture);ht.__renderTarget=A,(!ht.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),gt(A.depthTexture,0);const Mt=ht.__webglTexture,vt=Qt(A);if(A.depthTexture.format===Yo)pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(A.depthTexture.format===jo)pe(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,vt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function qt(N){const A=a.get(N),at=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ht){const Mt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),A.__depthDisposeCallback=Mt}A.__boundDepthTexture=ht}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,N)}else if(at){A.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ht]),A.__webglDepthbuffer[ht]===void 0)A.__webglDepthbuffer[ht]=s.createRenderbuffer(),yt(A.__webglDepthbuffer[ht],N,!1);else{const Mt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,vt)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),yt(A.__webglDepthbuffer,N,!1);else{const ht=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,Mt)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(N,A,at){const ht=a.get(N);A!==void 0&&mt(ht.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&qt(N)}function Pe(N){const A=N.texture,at=a.get(N),ht=a.get(A);N.addEventListener("dispose",P);const Mt=N.textures,vt=N.isWebGLCubeRenderTarget===!0,Yt=Mt.length>1;if(Yt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=A.version,u.memory.textures++),vt){at.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Dt]=[];for(let It=0;It<A.mipmaps.length;It++)at.__webglFramebuffer[Dt][It]=s.createFramebuffer()}else at.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)at.__webglFramebuffer[Dt]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let Dt=0,It=Mt.length;Dt<It;Dt++){const _e=a.get(Mt[Dt]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&pe(N)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Mt.length;Dt++){const It=Mt[Dt];at.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const _e=c.convert(It.format,It.colorSpace),Rt=c.convert(It.type),Vt=L(It.internalFormat,_e,Rt,It.colorSpace,N.isXRRenderTarget===!0),$t=Qt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Vt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(at.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(vt){n.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),W(s.TEXTURE_CUBE_MAP,A);for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)mt(at.__webglFramebuffer[Dt][It],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,It);else mt(at.__webglFramebuffer[Dt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(A)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Yt){for(let Dt=0,It=Mt.length;Dt<It;Dt++){const _e=Mt[Dt],Rt=a.get(_e);n.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),W(s.TEXTURE_2D,_e),mt(at.__webglFramebuffer,N,_e,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),M(_e)&&y(s.TEXTURE_2D)}n.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Dt,ht.__webglTexture),W(Dt,A),A.mipmaps&&A.mipmaps.length>0)for(let It=0;It<A.mipmaps.length;It++)mt(at.__webglFramebuffer[It],N,A,s.COLOR_ATTACHMENT0,Dt,It);else mt(at.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,Dt,0);M(A)&&y(Dt),n.unbindTexture()}N.depthBuffer&&qt(N)}function Ne(N){const A=N.textures;for(let at=0,ht=A.length;at<ht;at++){const Mt=A[at];if(M(Mt)){const vt=z(N),Yt=a.get(Mt).__webglTexture;n.bindTexture(vt,Yt),y(vt),n.unbindTexture()}}}const he=[],I=[];function Be(N){if(N.samples>0){if(pe(N)===!1){const A=N.textures,at=N.width,ht=N.height;let Mt=s.COLOR_BUFFER_BIT;const vt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=a.get(N),Dt=A.length>1;if(Dt)for(let It=0;It<A.length;It++)n.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let It=0;It<A.length;It++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const _e=a.get(A[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,at,ht,0,0,at,ht,Mt,s.NEAREST),p===!0&&(he.length=0,I.length=0,he.push(s.COLOR_ATTACHMENT0+It),N.depthBuffer&&N.resolveDepthBuffer===!1&&(he.push(vt),I.push(vt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let It=0;It<A.length;It++){n.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const _e=a.get(A[It]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Qt(N){return Math.min(o.maxSamples,N.samples)}function pe(N){const A=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Gt(N){const A=u.render.frame;v.get(N)!==A&&(v.set(N,A),N.update())}function Ae(N,A){const at=N.colorSpace,ht=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Ls&&at!==Xa&&(Ue.getTransfer(at)===Xe?(ht!==Ai||Mt!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=it,this.setTexture2D=gt,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Ht,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=pe}function ER(s,t){function n(a,o=Xa){let c;const u=Ue.getTransfer(o);if(a===ha)return s.UNSIGNED_BYTE;if(a===ap)return s.UNSIGNED_SHORT_4_4_4_4;if(a===rp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===O_)return s.BYTE;if(a===P_)return s.SHORT;if(a===Wo)return s.UNSIGNED_SHORT;if(a===ip)return s.INT;if(a===Rr)return s.UNSIGNED_INT;if(a===la)return s.FLOAT;if(a===Zo)return s.HALF_FLOAT;if(a===F_)return s.ALPHA;if(a===B_)return s.RGB;if(a===Ai)return s.RGBA;if(a===I_)return s.LUMINANCE;if(a===H_)return s.LUMINANCE_ALPHA;if(a===Yo)return s.DEPTH_COMPONENT;if(a===jo)return s.DEPTH_STENCIL;if(a===G_)return s.RED;if(a===sp)return s.RED_INTEGER;if(a===V_)return s.RG;if(a===op)return s.RG_INTEGER;if(a===lp)return s.RGBA_INTEGER;if(a===Vc||a===kc||a===Xc||a===Wc)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Td||a===bd||a===Ad||a===Rd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ad)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cd||a===wd||a===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Cd||a===wd)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Dd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ud||a===Ld||a===Nd||a===Od||a===Pd||a===zd||a===Fd||a===Bd||a===Id||a===Hd||a===Gd||a===Vd||a===kd||a===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Ud)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ld)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Nd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Od)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Pd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===zd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Fd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Bd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Id)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Hd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Gd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===kd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===qc||a===Wd||a===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===qc)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===k_||a===Yd||a===jd||a===Zd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===qc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===qo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const TR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bR=`
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

}`;class AR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const o=new Fn,c=t.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Za({vertexShader:TR,fragmentShader:bR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new el(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RR extends Ps{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",p=1,m=null,v=null,g=null,_=null,x=null,E=null;const T=new AR,M=n.getContextAttributes();let y=null,z=null;const L=[],w=[],X=new re;let F=null;const P=new pi;P.viewport=new rn;const k=new pi;k.viewport=new rn;const U=[P,k],R=new jE;let H=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let lt=L[G];return lt===void 0&&(lt=new kh,L[G]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(G){let lt=L[G];return lt===void 0&&(lt=new kh,L[G]=lt),lt.getGripSpace()},this.getHand=function(G){let lt=L[G];return lt===void 0&&(lt=new kh,L[G]=lt),lt.getHandSpace()};function J(G){const lt=w.indexOf(G.inputSource);if(lt===-1)return;const mt=L[lt];mt!==void 0&&(mt.update(G.inputSource,G.frame,m||u),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function ct(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ct),o.removeEventListener("inputsourceschange",gt);for(let G=0;G<L.length;G++){const lt=w[G];lt!==null&&(w[G]=null,L[G].disconnect(lt))}H=null,it=null,T.reset(),t.setRenderTarget(y),x=null,_=null,g=null,o=null,z=null,nt.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(X.width,X.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(y=t.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ct),o.addEventListener("inputsourceschange",gt),M.xrCompatible!==!0&&await n.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,yt=null,Ct=null;M.depth&&(Ct=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,mt=M.stencil?jo:Yo,yt=M.stencil?qo:Rr);const qt={colorFormat:n.RGBA8,depthFormat:Ct,scaleFactor:c};g=new XRWebGLBinding(o,n),_=g.createProjectionLayer(qt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),z=new Cr(_.textureWidth,_.textureHeight,{format:Ai,type:ha,depthTexture:new ay(_.textureWidth,_.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,mt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),z=new Cr(x.framebufferWidth,x.framebufferHeight,{format:Ai,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(h),nt.setContext(o),nt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function gt(G){for(let lt=0;lt<G.removed.length;lt++){const mt=G.removed[lt],yt=w.indexOf(mt);yt>=0&&(w[yt]=null,L[yt].disconnect(mt))}for(let lt=0;lt<G.added.length;lt++){const mt=G.added[lt];let yt=w.indexOf(mt);if(yt===-1){for(let qt=0;qt<L.length;qt++)if(qt>=w.length){w.push(mt),yt=qt;break}else if(w[qt]===null){w[qt]=mt,yt=qt;break}if(yt===-1)break}const Ct=L[yt];Ct&&Ct.connect(mt)}}const O=new j,$=new j;function Q(G,lt,mt){O.setFromMatrixPosition(lt.matrixWorld),$.setFromMatrixPosition(mt.matrixWorld);const yt=O.distanceTo($),Ct=lt.projectionMatrix.elements,qt=mt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),Pe=Ct[14]/(Ct[10]+1),Ne=(Ct[9]+1)/Ct[5],he=(Ct[9]-1)/Ct[5],I=(Ct[8]-1)/Ct[0],Be=(qt[8]+1)/qt[0],Qt=Ht*I,pe=Ht*Be,Gt=yt/(-I+Be),Ae=Gt*-I;if(lt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ae),G.translateZ(Gt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ct[10]===-1)G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Bt=Ht+Gt,N=Pe+Gt,A=Qt-Ae,at=pe+(yt-Ae),ht=Ne*Pe/N*Bt,Mt=he*Pe/N*Bt;G.projectionMatrix.makePerspective(A,at,ht,Mt,Bt,N),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function St(G,lt){lt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(lt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;let lt=G.near,mt=G.far;T.texture!==null&&(T.depthNear>0&&(lt=T.depthNear),T.depthFar>0&&(mt=T.depthFar)),R.near=k.near=P.near=lt,R.far=k.far=P.far=mt,(H!==R.near||it!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,it=R.far),P.layers.mask=G.layers.mask|2,k.layers.mask=G.layers.mask|4,R.layers.mask=P.layers.mask|k.layers.mask;const yt=G.parent,Ct=R.cameras;St(R,yt);for(let qt=0;qt<Ct.length;qt++)St(Ct[qt],yt);Ct.length===2?Q(R,P,k):R.projectionMatrix.copy(P.projectionMatrix),Tt(G,R,yt)};function Tt(G,lt,mt){mt===null?G.matrix.copy(lt.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(lt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(lt.projectionMatrix),G.projectionMatrixInverse.copy(lt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Kd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return p},this.setFoveation=function(G){p=G,_!==null&&(_.fixedFoveation=G),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=G)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let D=null;function W(G,lt){if(v=lt.getViewerPose(m||u),E=lt,v!==null){const mt=v.views;x!==null&&(t.setRenderTargetFramebuffer(z,x.framebuffer),t.setRenderTarget(z));let yt=!1;mt.length!==R.cameras.length&&(R.cameras.length=0,yt=!0);for(let Ht=0;Ht<mt.length;Ht++){const Pe=mt[Ht];let Ne=null;if(x!==null)Ne=x.getViewport(Pe);else{const I=g.getViewSubImage(_,Pe);Ne=I.viewport,Ht===0&&(t.setRenderTargetTextures(z,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(z))}let he=U[Ht];he===void 0&&(he=new pi,he.layers.enable(Ht),he.viewport=new rn,U[Ht]=he),he.matrix.fromArray(Pe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Pe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ht===0&&(R.matrix.copy(he.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),yt===!0&&R.cameras.push(he)}const Ct=o.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&g){const Ht=g.getDepthInformation(mt[0]);Ht&&Ht.isValid&&Ht.texture&&T.init(t,Ht,o.renderState)}}for(let mt=0;mt<L.length;mt++){const yt=w[mt],Ct=L[mt];yt!==null&&Ct!==void 0&&Ct.update(yt,lt,m||u)}D&&D(G,lt),lt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:lt}),E=null}const nt=new oy;nt.setAnimationLoop(W),this.setAnimationLoop=function(G){D=G},this.dispose=function(){}}}const xr=new da,CR=new Ze;function wR(s,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,J_(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,z,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),g(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,z,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===jn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===jn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const z=t.get(y),L=z.envMap,w=z.envMapRotation;L&&(M.envMap.value=L,xr.copy(w),xr.x*=-1,xr.y*=-1,xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),M.envMapRotation.value.setFromMatrix4(CR.makeRotationFromEuler(xr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,z,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*z,M.scale.value=L*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,z){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const z=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function DR(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,L){const w=L.program;a.uniformBlockBinding(z,w)}function m(z,L){let w=o[z.id];w===void 0&&(E(z),w=v(z),o[z.id]=w,z.addEventListener("dispose",M));const X=L.program;a.updateUBOMapping(z,X);const F=t.render.frame;c[z.id]!==F&&(_(z),c[z.id]=F)}function v(z){const L=g();z.__bindingPointIndex=L;const w=s.createBuffer(),X=z.__size,F=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,X,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function g(){for(let z=0;z<h;z++)if(u.indexOf(z)===-1)return u.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(z){const L=o[z.id],w=z.uniforms,X=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,P=w.length;F<P;F++){const k=Array.isArray(w[F])?w[F]:[w[F]];for(let U=0,R=k.length;U<R;U++){const H=k[U];if(x(H,F,U,X)===!0){const it=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let gt=0;gt<J.length;gt++){const O=J[gt],$=T(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,it+ct,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,ct),ct+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,it,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(z,L,w,X){const F=z.value,P=L+"_"+w;if(X[P]===void 0)return typeof F=="number"||typeof F=="boolean"?X[P]=F:X[P]=F.clone(),!0;{const k=X[P];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return X[P]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function E(z){const L=z.uniforms;let w=0;const X=16;for(let P=0,k=L.length;P<k;P++){const U=Array.isArray(L[P])?L[P]:[L[P]];for(let R=0,H=U.length;R<H;R++){const it=U[R],J=Array.isArray(it.value)?it.value:[it.value];for(let ct=0,gt=J.length;ct<gt;ct++){const O=J[ct],$=T(O),Q=w%X,St=Q%$.boundary,Tt=Q+St;w+=St,Tt!==0&&X-Tt<$.storage&&(w+=X-Tt),it.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=w,w+=$.storage}}}const F=w%X;return F>0&&(w+=X-F),z.__size=w,z.__cache={},this}function T(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),L}function M(z){const L=z.target;L.removeEventListener("dispose",M);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function y(){for(const z in o)s.deleteBuffer(o[z]);u=[],o={},c={}}return{bind:p,update:m,dispose:y}}class UR{constructor(t={}){const{canvas:n=KM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const z=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let X=!1;this._outputColorSpace=ai;let F=0,P=0,k=null,U=-1,R=null;const H=new rn,it=new rn;let J=null;const ct=new Oe(0);let gt=0,O=n.width,$=n.height,Q=1,St=null,Tt=null;const D=new rn(0,0,O,$),W=new rn(0,0,O,$);let nt=!1;const G=new ey;let lt=!1,mt=!1;const yt=new Ze,Ct=new Ze,qt=new j,Ht=new rn,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function he(){return k===null?Q:1}let I=a;function Be(C,Z){return n.getContext(C,Z)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),I===null){const Z="webgl2";if(I=Be(Z,C),I===null)throw Be(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Qt,pe,Gt,Ae,Bt,N,A,at,ht,Mt,vt,Yt,Dt,It,_e,Rt,Vt,$t,jt,zt,ne,le,Ie,Y;function Ut(){Qt=new G1(I),Qt.init(),le=new ER(I,Qt),pe=new O1(I,Qt,t,le),Gt=new SR(I,Qt),pe.reverseDepthBuffer&&_&&Gt.buffers.depth.setReversed(!0),Ae=new X1(I),Bt=new lR,N=new MR(I,Qt,Gt,Bt,pe,le,Ae),A=new z1(w),at=new H1(w),ht=new KE(I),Ie=new L1(I,ht),Mt=new V1(I,ht,Ae,Ie),vt=new q1(I,Mt,ht,Ae),jt=new W1(I,pe,N),Rt=new P1(Bt),Yt=new oR(w,A,at,Qt,pe,Ie,Rt),Dt=new wR(w,Bt),It=new uR,_e=new gR(Qt),$t=new U1(w,A,at,Gt,vt,x,p),Vt=new yR(w,vt,pe),Y=new DR(I,Ae,pe,Gt),zt=new N1(I,Qt,Ae),ne=new k1(I,Qt,Ae),Ae.programs=Yt.programs,w.capabilities=pe,w.extensions=Qt,w.properties=Bt,w.renderLists=It,w.shadowMap=Vt,w.state=Gt,w.info=Ae}Ut();const ft=new RR(w,I);this.xr=ft,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Qt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Qt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(O,$,!1))},this.getSize=function(C){return C.set(O,$)},this.setSize=function(C,Z,st=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,$=Z,n.width=Math.floor(C*Q),n.height=Math.floor(Z*Q),st===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(O*Q,$*Q).floor()},this.setDrawingBufferSize=function(C,Z,st){O=C,$=Z,Q=st,n.width=Math.floor(C*st),n.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(H)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,Z,st,ot){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,Z,st,ot),Gt.viewport(H.copy(D).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,Z,st,ot){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,Z,st,ot),Gt.scissor(it.copy(W).multiplyScalar(Q).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){Gt.setScissorTest(nt=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,st=!0){let ot=0;if(C){let q=!1;if(k!==null){const bt=k.texture.format;q=bt===lp||bt===op||bt===sp}if(q){const bt=k.texture.type,Nt=bt===ha||bt===Rr||bt===Wo||bt===qo||bt===ap||bt===rp,Pt=$t.getClearColor(),Ft=$t.getClearAlpha(),ae=Pt.r,ee=Pt.g,Zt=Pt.b;Nt?(E[0]=ae,E[1]=ee,E[2]=Zt,E[3]=Ft,I.clearBufferuiv(I.COLOR,0,E)):(T[0]=ae,T[1]=ee,T[2]=Zt,T[3]=Ft,I.clearBufferiv(I.COLOR,0,T))}else ot|=I.COLOR_BUFFER_BIT}Z&&(ot|=I.DEPTH_BUFFER_BIT),st&&(ot|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),$t.dispose(),It.dispose(),_e.dispose(),Bt.dispose(),A.dispose(),at.dispose(),vt.dispose(),Ie.dispose(),Y.dispose(),Yt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Is),ft.removeEventListener("sessionend",Hs),Ci.stop()};function xt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const C=Ae.autoReset,Z=Vt.enabled,st=Vt.autoUpdate,ot=Vt.needsUpdate,q=Vt.type;Ut(),Ae.autoReset=C,Vt.enabled=Z,Vt.autoUpdate=st,Vt.needsUpdate=ot,Vt.type=q}function Lt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){const Z=C.target;Z.removeEventListener("dispose",ie),Ke(Z)}function Ke(C){fn(C),Bt.remove(C)}function fn(C){const Z=Bt.get(C).programs;Z!==void 0&&(Z.forEach(function(st){Yt.releaseProgram(st)}),C.isShaderMaterial&&Yt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,ot,q,bt){Z===null&&(Z=Pe);const Nt=q.isMesh&&q.matrixWorld.determinant()<0,Pt=Vs(C,Z,st,ot,q);Gt.setMaterial(ot,Nt);let Ft=st.index,ae=1;if(ot.wireframe===!0){if(Ft=Mt.getWireframeAttribute(st),Ft===void 0)return;ae=2}const ee=st.drawRange,Zt=st.attributes.position;let Se=ee.start*ae,Me=(ee.start+ee.count)*ae;bt!==null&&(Se=Math.max(Se,bt.start*ae),Me=Math.min(Me,(bt.start+bt.count)*ae)),Ft!==null?(Se=Math.max(Se,0),Me=Math.min(Me,Ft.count)):Zt!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,Zt.count));const qe=Me-Se;if(qe<0||qe===1/0)return;Ie.setup(q,ot,Pt,st,Ft);let Ce,se=zt;if(Ft!==null&&(Ce=ht.get(Ft),se=ne,se.setIndex(Ce)),q.isMesh)ot.wireframe===!0?(Gt.setLineWidth(ot.wireframeLinewidth*he()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(q.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*he()),q.isLineSegments?se.setMode(I.LINES):q.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else q.isPoints?se.setMode(I.POINTS):q.isSprite&&se.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Yc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,hn=q._multiDrawCounts,be=q._multiDrawCount,In=Ft?ht.get(Ft).bytesPerElement:1,_i=Bt.get(ot).currentProgram.getUniforms();for(let Ln=0;Ln<be;Ln++)_i.setValue(I,"_gl_DrawID",Ln),se.render(Jt[Ln]/In,hn[Ln])}else if(q.isInstancedMesh)se.renderInstances(Se,qe,q.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,hn=Math.min(st.instanceCount,Jt);se.renderInstances(Se,qe,hn)}else se.render(Se,qe)};function Re(C,Z,st){C.transparent===!0&&C.side===Oi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Je(C,Z,st),C.side=ja,C.needsUpdate=!0,Je(C,Z,st),C.side=Oi):Je(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),y=_e.get(st),y.init(Z),L.push(y),st.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),C!==st&&C.traverseVisible(function(q){q.isLight&&q.layers.test(Z.layers)&&(y.pushLight(q),q.castShadow&&y.pushShadow(q))}),y.setupLights();const ot=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const bt=q.material;if(bt)if(Array.isArray(bt))for(let Nt=0;Nt<bt.length;Nt++){const Pt=bt[Nt];Re(Pt,st,q),ot.add(Pt)}else Re(bt,st,q),ot.add(bt)}),y=L.pop(),ot},this.compileAsync=function(C,Z,st=null){const ot=this.compile(C,Z,st);return new Promise(q=>{function bt(){if(ot.forEach(function(Nt){Bt.get(Nt).currentProgram.isReady()&&ot.delete(Nt)}),ot.size===0){q(C);return}setTimeout(bt,10)}Qt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xn=null;function gi(C){xn&&xn(C)}function Is(){Ci.stop()}function Hs(){Ci.start()}const Ci=new oy;Ci.setAnimationLoop(gi),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){xn=C,ft.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},ft.addEventListener("sessionstart",Is),ft.addEventListener("sessionend",Hs),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Z),Z=ft.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Z,k),y=_e.get(C,L.length),y.init(Z),L.push(y),Ct.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G.setFromProjectionMatrix(Ct),mt=this.localClippingEnabled,lt=Rt.init(this.clippingPlanes,mt),M=It.get(C,z.length),M.init(),z.push(M),ft.enabled===!0&&ft.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&Ka(bt,Z,-1/0,w.sortObjects)}Ka(C,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(St,Tt),Ne=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ne&&$t.addToRenderList(M,C),this.info.render.frame++,lt===!0&&Rt.beginShadows();const st=y.state.shadowsArray;Vt.render(st,C,Z),lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,q=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const bt=Z.cameras;if(q.length>0)for(let Nt=0,Pt=bt.length;Nt<Pt;Nt++){const Ft=bt[Nt];Gs(ot,q,C,Ft)}Ne&&$t.render(C);for(let Nt=0,Pt=bt.length;Nt<Pt;Nt++){const Ft=bt[Nt];wr(M,C,Ft,Ft.viewport)}}else q.length>0&&Gs(ot,q,C,Z),Ne&&$t.render(C),wr(M,C,Z);k!==null&&P===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(w,C,Z),Ie.resetDefaultState(),U=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],lt===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Ka(C,Z,st,ot){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){ot&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const Nt=vt.update(C),Pt=C.material;Pt.visible&&M.push(C,Nt,Pt,st,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){const Nt=vt.update(C),Pt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ht.copy(Nt.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ft=Nt.groups;for(let ae=0,ee=Ft.length;ae<ee;ae++){const Zt=Ft[ae],Se=Pt[Zt.materialIndex];Se&&Se.visible&&M.push(C,Nt,Se,st,Ht.z,Zt)}}else Pt.visible&&M.push(C,Nt,Pt,st,Ht.z,null)}}const bt=C.children;for(let Nt=0,Pt=bt.length;Nt<Pt;Nt++)Ka(bt[Nt],Z,st,ot)}function wr(C,Z,st,ot){const q=C.opaque,bt=C.transmissive,Nt=C.transparent;y.setupLightsView(st),lt===!0&&Rt.setGlobalState(w.clippingPlanes,st),ot&&Gt.viewport(H.copy(ot)),q.length>0&&Qa(q,Z,st),bt.length>0&&Qa(bt,Z,st),Nt.length>0&&Qa(Nt,Z,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Gs(C,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Cr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Zo:ha,minFilter:Ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const bt=y.state.transmissionRenderTarget[ot.id],Nt=ot.viewport||H;bt.setSize(Nt.z*w.transmissionResolutionScale,Nt.w*w.transmissionResolutionScale);const Pt=w.getRenderTarget();w.setRenderTarget(bt),w.getClearColor(ct),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),Ne&&$t.render(st);const Ft=w.toneMapping;w.toneMapping=qa;const ae=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),lt===!0&&Rt.setGlobalState(w.clippingPlanes,ot),Qa(C,st,ot),N.updateMultisampleRenderTarget(bt),N.updateRenderTargetMipmap(bt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Zt=0,Se=Z.length;Zt<Se;Zt++){const Me=Z[Zt],qe=Me.object,Ce=Me.geometry,se=Me.material,Jt=Me.group;if(se.side===Oi&&qe.layers.test(ot.layers)){const hn=se.side;se.side=jn,se.needsUpdate=!0,vi(qe,st,ot,Ce,se,Jt),se.side=hn,se.needsUpdate=!0,ee=!0}}ee===!0&&(N.updateMultisampleRenderTarget(bt),N.updateRenderTargetMipmap(bt))}w.setRenderTarget(Pt),w.setClearColor(ct,gt),ae!==void 0&&(ot.viewport=ae),w.toneMapping=Ft}function Qa(C,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let q=0,bt=C.length;q<bt;q++){const Nt=C[q],Pt=Nt.object,Ft=Nt.geometry,ae=Nt.group;let ee=Nt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Pt.layers.test(st.layers)&&vi(Pt,Z,st,Ft,ee,ae)}}function vi(C,Z,st,ot,q,bt){C.onBeforeRender(w,Z,st,ot,q,bt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(w,Z,st,ot,C,bt),q.transparent===!0&&q.side===Oi&&q.forceSinglePass===!1?(q.side=jn,q.needsUpdate=!0,w.renderBufferDirect(st,Z,ot,q,C,bt),q.side=ja,q.needsUpdate=!0,w.renderBufferDirect(st,Z,ot,q,C,bt),q.side=Oi):w.renderBufferDirect(st,Z,ot,q,C,bt),C.onAfterRender(w,Z,st,ot,q,bt)}function Je(C,Z,st){Z.isScene!==!0&&(Z=Pe);const ot=Bt.get(C),q=y.state.lights,bt=y.state.shadowsArray,Nt=q.state.version,Pt=Yt.getParameters(C,q.state,bt,Z,st),Ft=Yt.getProgramCacheKey(Pt);let ae=ot.programs;ot.environment=C.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ae===void 0&&(C.addEventListener("dispose",ie),ae=new Map,ot.programs=ae);let ee=ae.get(Ft);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Nt)return Fi(C,Pt),ee}else Pt.uniforms=Yt.getUniforms(C),C.onBeforeCompile(Pt,w),ee=Yt.acquireProgram(Pt,Ft),ae.set(Ft,ee),ot.uniforms=Pt.uniforms;const Zt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Rt.uniform),Fi(C,Pt),ot.needsLights=cu(C),ot.lightsStateVersion=Nt,ot.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function Sn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Fi(C,Z){const st=Bt.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function Vs(C,Z,st,ot,q){Z.isScene!==!0&&(Z=Pe),N.resetTextureUnits();const bt=Z.fog,Nt=ot.isMeshStandardMaterial?Z.environment:null,Pt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ls,Ft=(ot.isMeshStandardMaterial?at:A).get(ot.envMap||Nt),ae=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Zt=!!st.morphAttributes.position,Se=!!st.morphAttributes.normal,Me=!!st.morphAttributes.color;let qe=qa;ot.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qe=w.toneMapping);const Ce=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,se=Ce!==void 0?Ce.length:0,Jt=Bt.get(ot),hn=y.state.lights;if(lt===!0&&(mt===!0||C!==R)){const $e=C===R&&ot.id===U;Rt.setState(ot,C,$e)}let be=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==hn.state.version||Jt.outputColorSpace!==Pt||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isBatchedMesh&&Jt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Jt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Jt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Jt.instancingMorph===!1&&q.morphTexture!==null||Jt.envMap!==Ft||ot.fog===!0&&Jt.fog!==bt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==ae||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==Se||Jt.morphColors!==Me||Jt.toneMapping!==qe||Jt.morphTargetsCount!==se)&&(be=!0):(be=!0,Jt.__version=ot.version);let In=Jt.currentProgram;be===!0&&(In=Je(ot,Z,q));let _i=!1,Ln=!1,vn=!1;const He=In.getUniforms(),Nn=Jt.uniforms;if(Gt.useProgram(In.program)&&(_i=!0,Ln=!0,vn=!0),ot.id!==U&&(U=ot.id,Ln=!0),_i||R!==C){Gt.buffers.depth.getReversed()?(yt.copy(C.projectionMatrix),JM(yt),$M(yt),He.setValue(I,"projectionMatrix",yt)):He.setValue(I,"projectionMatrix",C.projectionMatrix),He.setValue(I,"viewMatrix",C.matrixWorldInverse);const Mn=He.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,qt.setFromMatrixPosition(C.matrixWorld)),pe.logarithmicDepthBuffer&&He.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&He.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Ln=!0,vn=!0)}if(q.isSkinnedMesh){He.setOptional(I,q,"bindMatrix"),He.setOptional(I,q,"bindMatrixInverse");const $e=q.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),He.setValue(I,"boneTexture",$e.boneTexture,N))}q.isBatchedMesh&&(He.setOptional(I,q,"batchingTexture"),He.setValue(I,"batchingTexture",q._matricesTexture,N),He.setOptional(I,q,"batchingIdTexture"),He.setValue(I,"batchingIdTexture",q._indirectTexture,N),He.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&He.setValue(I,"batchingColorTexture",q._colorsTexture,N));const Rn=st.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&jt.update(q,st,In),(Ln||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,He.setValue(I,"receiveShadow",q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Nn.envMap.value=Ft,Nn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Nn.envMapIntensity.value=Z.environmentIntensity),Ln&&(He.setValue(I,"toneMappingExposure",w.toneMappingExposure),Jt.needsLights&&lu(Nn,vn),bt&&ot.fog===!0&&Dt.refreshFogUniforms(Nn,bt),Dt.refreshMaterialUniforms(Nn,ot,Q,$,y.state.transmissionRenderTarget[C.id]),jc.upload(I,Sn(Jt),Nn,N)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(jc.upload(I,Sn(Jt),Nn,N),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&He.setValue(I,"center",q.center),He.setValue(I,"modelViewMatrix",q.modelViewMatrix),He.setValue(I,"normalMatrix",q.normalMatrix),He.setValue(I,"modelMatrix",q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const $e=ot.uniformsGroups;for(let Mn=0,Dr=$e.length;Mn<Dr;Mn++){const Hn=$e[Mn];Y.update(Hn,In),Y.bind(Hn,In)}}return In}function lu(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function cu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,Z,st){const ot=Bt.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Bt.get(C.texture).__webglTexture=Z,Bt.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const st=Bt.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const al=I.createFramebuffer();this.setRenderTarget=function(C,Z=0,st=0){k=C,F=Z,P=st;let ot=!0,q=null,bt=!1,Nt=!1;if(C){const Ft=Bt.get(C);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),ot=!1;else if(Ft.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Ft.__hasExternalTextures)N.rebindTextures(C,Bt.get(C.texture).__webglTexture,Bt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Zt=C.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&Bt.has(Zt)&&(C.width!==Zt.image.width||C.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Nt=!0);const ee=Bt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?q=ee[Z][st]:q=ee[Z],bt=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?q=Bt.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[st]:q=ee,H.copy(C.viewport),it.copy(C.scissor),J=C.scissorTest}else H.copy(D).multiplyScalar(Q).floor(),it.copy(W).multiplyScalar(Q).floor(),J=nt;if(st!==0&&(q=al),Gt.bindFramebuffer(I.FRAMEBUFFER,q)&&ot&&Gt.drawBuffers(C,q),Gt.viewport(H),Gt.scissor(it),Gt.setScissorTest(J),bt){const Ft=Bt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,st)}else if(Nt){const Ft=Bt.get(C.texture),ae=Z;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,st,ae)}else if(C!==null&&st!==0){const Ft=Bt.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,st)}U=-1},this.readRenderTargetPixels=function(C,Z,st,ot,q,bt,Nt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Gt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Ft=C.texture,ae=Ft.format,ee=Ft.type;if(!pe.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-q&&I.readPixels(Z,st,ot,q,le.convert(ae),le.convert(ee),bt)}finally{const Ft=k!==null?Bt.get(k).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,ot,q,bt,Nt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Bt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-q){Gt.bindFramebuffer(I.FRAMEBUFFER,Pt);const Ft=C.texture,ae=Ft.format,ee=Ft.type;if(!pe.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(Z,st,ot,q,le.convert(ae),le.convert(ee),0);const Se=k!==null?Bt.get(k).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Se);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await QM(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.deleteBuffer(Zt),I.deleteSync(Me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,st=0){const ot=Math.pow(2,-st),q=Math.floor(C.image.width*ot),bt=Math.floor(C.image.height*ot),Nt=Z!==null?Z.x:0,Pt=Z!==null?Z.y:0;N.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Nt,Pt,q,bt),Gt.unbindTexture()};const Ja=I.createFramebuffer(),ks=I.createFramebuffer();this.copyTextureToTexture=function(C,Z,st=null,ot=null,q=0,bt=null){bt===null&&(q!==0?(Yc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=q,q=0):bt=0);let Nt,Pt,Ft,ae,ee,Zt,Se,Me,qe;const Ce=C.isCompressedTexture?C.mipmaps[bt]:C.image;if(st!==null)Nt=st.max.x-st.min.x,Pt=st.max.y-st.min.y,Ft=st.isBox3?st.max.z-st.min.z:1,ae=st.min.x,ee=st.min.y,Zt=st.isBox3?st.min.z:0;else{const Rn=Math.pow(2,-q);Nt=Math.floor(Ce.width*Rn),Pt=Math.floor(Ce.height*Rn),C.isDataArrayTexture?Ft=Ce.depth:C.isData3DTexture?Ft=Math.floor(Ce.depth*Rn):Ft=1,ae=0,ee=0,Zt=0}ot!==null?(Se=ot.x,Me=ot.y,qe=ot.z):(Se=0,Me=0,qe=0);const se=le.convert(Z.format),Jt=le.convert(Z.type);let hn;Z.isData3DTexture?(N.setTexture3D(Z,0),hn=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),hn=I.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),hn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),In=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_i=I.getParameter(I.UNPACK_SKIP_PIXELS),Ln=I.getParameter(I.UNPACK_SKIP_ROWS),vn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ce.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const He=C.isDataArrayTexture||C.isData3DTexture,Nn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Rn=Bt.get(C),$e=Bt.get(Z),Mn=Bt.get(Rn.__renderTarget),Dr=Bt.get($e.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let Hn=0;Hn<Ft;Hn++)He&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.get(C).__webglTexture,q,Zt+Hn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.get(Z).__webglTexture,bt,qe+Hn)),I.blitFramebuffer(ae,ee,Nt,Pt,Se,Me,Nt,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||Bt.has(C)){const Rn=Bt.get(C),$e=Bt.get(Z);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Ja),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ks);for(let Mn=0;Mn<Ft;Mn++)He?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rn.__webglTexture,q,Zt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rn.__webglTexture,q),Nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$e.__webglTexture,bt,qe+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$e.__webglTexture,bt),q!==0?I.blitFramebuffer(ae,ee,Nt,Pt,Se,Me,Nt,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):Nn?I.copyTexSubImage3D(hn,bt,Se,Me,qe+Mn,ae,ee,Nt,Pt):I.copyTexSubImage2D(hn,bt,Se,Me,ae,ee,Nt,Pt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Nn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(hn,bt,Se,Me,qe,Nt,Pt,Ft,se,Jt,Ce.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(hn,bt,Se,Me,qe,Nt,Pt,Ft,se,Ce.data):I.texSubImage3D(hn,bt,Se,Me,qe,Nt,Pt,Ft,se,Jt,Ce):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,Se,Me,Nt,Pt,se,Jt,Ce.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,Se,Me,Ce.width,Ce.height,se,Ce.data):I.texSubImage2D(I.TEXTURE_2D,bt,Se,Me,Nt,Pt,se,Jt,Ce);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,In),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_i),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ln),I.pixelStorei(I.UNPACK_SKIP_IMAGES,vn),bt===0&&Z.generateMipmaps&&I.generateMipmap(hn),Gt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,st=null,ot=null,q=0){return Yc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,st,ot,q)},this.initRenderTarget=function(C){Bt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Gt.unbindTexture()},this.resetState=function(){F=0,P=0,k=null,Gt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const Et=.5,hy={F:[[-Et,Et,Et],[Et,Et,Et],[Et,-Et,Et],[-Et,-Et,Et]],B:[[Et,Et,-Et],[-Et,Et,-Et],[-Et,-Et,-Et],[Et,-Et,-Et]],R:[[Et,Et,Et],[Et,Et,-Et],[Et,-Et,-Et],[Et,-Et,Et]],L:[[-Et,Et,-Et],[-Et,Et,Et],[-Et,-Et,Et],[-Et,-Et,-Et]],U:[[-Et,Et,-Et],[Et,Et,-Et],[Et,Et,Et],[-Et,Et,Et]],D:[[-Et,-Et,Et],[Et,-Et,Et],[Et,-Et,-Et],[-Et,-Et,-Et]]},$d=["U","R","F","D","L","B"],LR=[[-Et,Et,Et],[Et,Et,Et],[Et,Et,-Et],[-Et,Et,-Et],[-Et,-Et,Et],[Et,-Et,Et],[Et,-Et,-Et],[-Et,-Et,-Et]],NR=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];function OR(s,t){const n=(t%4+4)%4;return n===0?s:n===1?[s[3],s[0],s[1],s[2]]:n===2?[s[2],s[3],s[0],s[1]]:[s[1],s[2],s[3],s[0]]}const mp={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},PR={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function ru(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function Cs(s){return s.replace("'","").replace("2","")}function zR(s){return s.endsWith("'")&&!s.endsWith("2")}function dy(s){return s.endsWith("2")}function su(s){const t=Cs(s);let n=[...PR[t]];return(t==="L"||t==="D"||t==="B")&&(n=[-n[0],-n[1],-n[2]]),n}const ed=.51;function FR(s){const t=mp[s];return[t[0]*ed,t[1]*ed,t[2]*ed]}function py(s,t=3){const n=s.rotationMatrix,a=s.translation,o=[];for(const c of $d){const u=FR(c),h=n[2]*u[0]+n[5]*u[1]+n[8]*u[2]+a[2],p=mp[c],m=n[6]*p[0]+n[7]*p[1]+n[8]*p[2];h>.02&&m<-.12&&o.push({id:c,score:h*-m})}return o.sort((c,u)=>u.score-c.score).slice(0,t).map(c=>c.id)}function BR(s){const t=s.rotationMatrix,n=s.translation,a=new Ze().set(t[0],t[1],t[2],n[0],t[3],t[4],t[5],n[1],t[6],t[7],t[8],n[2],0,0,0,1),o=new Ze().set(1,0,0,0,0,-1,0,0,0,0,-1,0,0,0,0,1);return new Ze().multiplyMatrices(o,a).invert()}function IR(s,t,n,a){const o=t.cameraFy||n*.9,c=2*Math.atan(a/(2*o));s.fov=c*180/Math.PI,s.aspect=n/a,s.near=.01,s.far=100,s.position.set(0,0,0),s.up.set(0,1,0),s.lookAt(0,0,-1),s.updateProjectionMatrix()}const HR=.3,GR=.22;function Fs(s,t){const n=Math.min(s,t)*HR;return{x:(s-n)/2,y:(t-n)/2,size:n}}function my(s){const t=s.size*GR;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function gy(s){const{x:t,y:n,size:a}=s;return[{x:t,y:n},{x:t+a,y:n},{x:t+a,y:n+a},{x:t,y:n+a}]}function VR(s,t,n){return s.map(a=>({x:a.x+t,y:a.y+n}))}const fa=["R","O","Y","G","B","W"],vy={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},Bs={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},kR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let Os={},gp=!1;function vp(){return gp&&fa.every(s=>Os[s])}function XR(){const s={...kR};for(const t of fa)Os[t]&&(s[t]=Os[t]);return s}function h_(){Os={},gp=!1}function WR(s,t){Os[s]=t,fa.every(n=>Os[n])&&(gp=!0)}function nd(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function qR(s,t,n){const a=nd(s/255),o=nd(t/255),c=nd(n/255),u=a*.4124564+o*.3575761+c*.1804375,h=a*.2126729+o*.7151522+c*.072175,p=a*.0193339+o*.119192+c*.9503041,m=u/.95047>.008856?(u/.95047)**(1/3):7.787*(u/.95047)+16/116,v=h>.008856?h**(1/3):7.787*h+16/116,g=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*v-16,500*(m-v),200*(v-g)]}function id(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function YR(s,t,n){return Math.max(s,t,n)-Math.min(s,t,n)<28?"W":s>=t&&s>=n?t>s*.92?"O":"R":t>=s&&t>=n?"G":"B"}function jR(s,t,n,a){const o=Math.max(s,t,n);if(o<45)return!1;const c=(s+t+n)/3,u=o-Math.min(s,t,n);switch(a){case"W":return u<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=n;case"O":return s>70&&t>55&&s>=n-5;case"G":return t>45&&t>=s-12&&t>=n-5;case"B":return n>40&&n>=s-8&&n>=t-15;default:return!0}}function ZR(s,t,n,a){if(a==="W")return Math.max(s,t,n)-Math.min(s,t,n)<60;if(a==="Y")return s>70&&t>60;const o=YR(s,t,n);return a==="O"?o==="O"||o==="R"||o==="Y":a==="R"?o==="R"||o==="O":o===a}function _y(s,t,n,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const c=Fs(t,n),u=my(c),h=Math.floor(u.x),p=Math.floor(u.y),m=Math.floor(u.size),v=Math.floor(u.size);if(m<=0||v<=0)return null;const g=o.getImageData(h,p,m,v).data,_=[],x=[],E=[],T=[],M=[],y=[];for(let R=0;R<g.length;R+=8){const H=g[R],it=g[R+1],J=g[R+2];Math.max(H,it,J)<40||(T.push(H),M.push(it),y.push(J),jR(H,it,J,a)&&(_.push(H),x.push(it),E.push(J)))}const z=_.length>=4?_:T,L=_.length>=4?x:M,w=_.length>=4?E:y;if(z.length<4)return null;const X=id(z),F=id(L),P=id(w),k=qR(X,F,P),U=z.length;return{r:X,g:F,b:P,lab:k,ready:U>=6&&ZR(X,F,P,a)}}function KR(s,t,n,a){const o=_y(s,t,n,a);return o!=null&&o.ready?(WR(a,o.lab),o):null}const tp=96,Un=tp/3;function QR(s){const t=document.createElement("canvas");t.width=tp,t.height=tp;const n=t.getContext("2d");if(!n)return new I0(t);for(let o=0;o<3;o++)for(let c=0;c<3;c++){const u=s[o*3+c]??"W";n.fillStyle=Bs[u],n.fillRect(c*Un,(2-o)*Un,Un,Un),n.strokeStyle="rgba(0, 0, 0, 0.35)",n.lineWidth=1,n.strokeRect(c*Un+.5,(2-o)*Un+.5,Un-1,Un-1)}const a=new I0(t);return a.colorSpace=ai,a.needsUpdate=!0,a}function JR(s,t){const a=s.image.getContext("2d");if(a){for(let o=0;o<3;o++)for(let c=0;c<3;c++){const u=t[o*3+c]??"W";a.fillStyle=Bs[u],a.fillRect(c*Un,(2-o)*Un,Un,Un),a.strokeStyle="rgba(0, 0, 0, 0.35)",a.lineWidth=1,a.strokeRect(c*Un+.5,(2-o)*Un+.5,Un-1,Un-1)}s.needsUpdate=!0}}const $R=16777215,ad=4482696,tC=16763955,eC=16777215,d_=16772676,p_={F:{position:[0,0,.501],rotation:[0,0,0]},B:{position:[0,0,-.501],rotation:[0,Math.PI,0]},R:{position:[.501,0,0],rotation:[0,Math.PI/2,0]},L:{position:[-.501,0,0],rotation:[0,-Math.PI/2,0]},U:{position:[0,.501,0],rotation:[-Math.PI/2,0,0]},D:{position:[0,-.501,0],rotation:[Math.PI/2,0,0]}};class nC{constructor(t){Te(this,"renderer");Te(this,"scene");Te(this,"camera");Te(this,"cubeRoot");Te(this,"faceMeshes",new Map);Te(this,"faceTextures",new Map);Te(this,"arrowRoot");Te(this,"trackMesh",null);Te(this,"progressMesh",null);Te(this,"headMesh",null);Te(this,"currentMove",null);Te(this,"traceProgress",0);Te(this,"frameWidth",1);Te(this,"frameHeight",1);Te(this,"faceColorsKey","");this.renderer=new UR({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new TE,this.camera=new pi(45,1,.01,100),this.camera.position.set(0,0,0),this.scene.add(new YE(16777215,1.15)),this.cubeRoot=new Ts,this.buildCubeWireframe(),this.buildFacePlanes(),this.scene.add(this.cubeRoot),this.arrowRoot=new Ts,this.cubeRoot.add(this.arrowRoot)}resize(t,n,a,o){this.frameWidth=a,this.frameHeight=o,this.renderer.setSize(t,n,!1)}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.highlightMoveFace(t?Cs(t):null),this.rebuildArrow(t))}setRotationProgress(t){const n=Math.max(0,Math.min(1,t));Math.abs(n-this.traceProgress)<.008||(this.traceProgress=n,this.updateArrowProgress())}setFaceColors(t,n){const a={...n};for(const[c,u]of Object.entries(t))u.length===9&&(a[c]=u);const o=JSON.stringify(a);if(o!==this.faceColorsKey){this.faceColorsKey=o;for(const[c,u]of this.faceMeshes){const h=a[c],p=u.material;if(!h||h.length!==9){p.map=null,p.color.setHex(ad),p.opacity=.14,p.needsUpdate=!0;continue}let m=this.faceTextures.get(c);m?JR(m,h):(m=QR(h),this.faceTextures.set(c,m)),p.map=m,p.color.setHex(16777215),p.opacity=.92,p.needsUpdate=!0}}}render(t,n=!0){if(!t){this.renderer.render(this.scene,this.camera);return}IR(this.camera,t,this.frameWidth,this.frameHeight);const a=BR(t);this.cubeRoot.matrixAutoUpdate=!1,this.cubeRoot.matrix.copy(a),this.cubeRoot.matrixWorldNeedsUpdate=!0;const o=py(t);for(const[u,h]of this.faceMeshes)h.visible=o.includes(u);const c=this.currentMove?Cs(this.currentMove):null;this.arrowRoot.visible=!!(this.currentMove&&n),c&&this.highlightMoveFace(c),this.renderer.render(this.scene,this.camera)}dispose(){for(const t of this.faceTextures.values())t.dispose();this.faceTextures.clear(),this.renderer.dispose(),this.cubeRoot.traverse(Bc)}buildCubeWireframe(){const t=LR.map(c=>new j(c[0],c[1],c[2])),n=[];for(const[c,u]of NR)n.push(t[c].x,t[c].y,t[c].z),n.push(t[u].x,t[u].y,t[u].z);const a=new mi;a.setAttribute("position",new pn(n,3));const o=new ny({color:$R,transparent:!0,opacity:.95,linewidth:2,depthWrite:!1});this.cubeRoot.add(new iy(a,o))}buildFacePlanes(){const t=new el(.98,.98);for(const n of Object.keys(p_)){const a=p_[n],o=new Es({color:ad,transparent:!0,opacity:.14,side:Oi,depthWrite:!1}),c=new zn(t.clone(),o);c.position.set(...a.position),c.rotation.set(...a.rotation),c.userData.faceId=n,c.visible=!1,this.faceMeshes.set(n,c),this.cubeRoot.add(c)}}highlightMoveFace(t){for(const[n,a]of this.faceMeshes){const o=a.material;o.map?n===t?o.opacity=.98:o.opacity=.82:n===t?(o.color.setHex(tC),o.opacity=.35):(o.color.setHex(ad),o.opacity=.14)}}rebuildArrow(t){if(this.clearArrow(),!t)return;const n=Cs(t),a=new j(...su(t)).normalize(),{ref:o,perp:c}=iC(a),u=.36,h=ru(t),p=h<0?h:0,m=h<0?0:h,v=40,g=new j(...mp[n]).normalize(),_=g.clone().multiplyScalar(.54),x=[];for(let y=0;y<=v;y++){const z=p+(m-p)*y/v;x.push(aC(o,c,u,z).add(_))}this.arrowRoot.userData={fullPoints:x,segments:v,startAngle:p,endAngle:m,radius:u,ref:o,perp:c,surface:_};const E=new Qd(x),T=new eu(E,v,.028,8,!1),M=new Es({color:eC,transparent:!0,opacity:.35,depthWrite:!1});if(this.trackMesh=new zn(T,M),this.arrowRoot.add(this.trackMesh),dy(t)){const y=new zn(new fp(.09,24),new Es({color:d_,transparent:!0,opacity:.95,depthWrite:!1}));y.position.copy(_),y.lookAt(_.clone().add(g)),this.arrowRoot.add(y)}this.updateArrowProgress()}updateArrowProgress(){if(!this.currentMove||!this.arrowRoot.userData.fullPoints)return;this.progressMesh&&(this.arrowRoot.remove(this.progressMesh),Bc(this.progressMesh),this.progressMesh=null),this.headMesh&&(this.arrowRoot.remove(this.headMesh),Bc(this.headMesh),this.headMesh=null);const{fullPoints:t,segments:n,startAngle:a,endAngle:o}=this.arrowRoot.userData,c=a+(o-a)*this.traceProgress;if(Math.abs(c-a)<.04)return;const u=Math.max(2,Math.floor(n*this.traceProgress)),h=t.slice(0,u+1);if(h.length<2)return;const p=new Qd(h),m=new eu(p,u,.052,10,!1),v=new Es({color:d_,transparent:!0,opacity:.98,depthWrite:!1});this.progressMesh=new zn(m,v),this.arrowRoot.add(this.progressMesh);const g=h[h.length-1],_=h[h.length-2]??g,x=new j().subVectors(g,_).normalize(),E=new zn(new dp(.1,.22,12),v.clone());E.position.copy(g),E.quaternion.setFromUnitVectors(new j(0,1,0),x),this.headMesh=E,this.arrowRoot.add(E)}clearArrow(){for(this.trackMesh=null,this.progressMesh=null,this.headMesh=null;this.arrowRoot.children.length>0;){const t=this.arrowRoot.children[0];this.arrowRoot.remove(t),Bc(t)}}}function iC(s){let t=new j(0,1,0);Math.abs(s.dot(t))>.9&&t.set(0,0,1);const n=new j().crossVectors(s,t).normalize();return t=new j().crossVectors(n,s).normalize(),{ref:t,perp:n}}function aC(s,t,n,a){return s.clone().multiplyScalar(Math.cos(a)*n).add(t.clone().multiplyScalar(Math.sin(a)*n))}function Bc(s){s.traverse(t=>{(t instanceof zn||t instanceof iy)&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}function m_(s,t,n,a){s.drawImage(t,0,0,n,a)}function rC(s){if(s.length!==9)return s;const t=[];for(let n=0;n<3;n++)for(let a=2;a>=0;a--)t.push(s[n*3+a]);return t}function yy(s){const t=new Map;for(const[n,a]of s)t.set(n,[...a]);return t}function xy(s,t,n,a){const o=Math.max(n/s,a/t),c=s*o,u=t*o;return{scale:o,offsetX:(n-c)/2,offsetY:(a-u)/2}}function Sy(s,t,n,a,o,c,u,h){const{scale:p,offsetX:m,offsetY:v}=xy(o,c,u,h),g=m+s*p,_=v+t*p,x=n*p,E=a*p;return{left:u-g-x,top:_,width:x,height:E}}function sC(s,t,n,a){if(!s||!t||!n||!a)return null;const o=Fs(s,t);return Sy(o.x,o.y,o.size,o.size,s,t,n,a)}function oC(s,t,n,a){if(!s||!t||!n||!a)return null;const o=Fs(s,t),c=my(o);return Sy(c.x,c.y,c.size,c.size,s,t,n,a)}function lC({pose:s,move:t,rotationProgress:n,faceMatchesMove:a,visibleFaceColors:o,scannedFaceColors:c,frameWidth:u,frameHeight:h,viewportWidth:p,viewportHeight:m,active:v}){const g=Xt.useRef(null),_=Xt.useRef(null),x=Xt.useMemo(()=>{if(!u||!h||!p||!m)return null;const{scale:T,offsetX:M,offsetY:y}=xy(u,h,p,m);return{left:M,top:y,width:u*T,height:h*T}},[u,h,p,m]);Xt.useEffect(()=>{const T=g.current;if(!T)return;const M=new nC(T);return _.current=M,()=>{M.dispose(),_.current=null}},[]),Xt.useEffect(()=>{var T;x&&((T=_.current)==null||T.resize(x.width,x.height,u,h))},[x,u,h]),Xt.useEffect(()=>{var T;(T=_.current)==null||T.setMove(t)},[t]),Xt.useEffect(()=>{var T;(T=_.current)==null||T.setRotationProgress(n)},[n]),Xt.useEffect(()=>{var T;(T=_.current)==null||T.setFaceColors(o,c)},[o,c]),Xt.useEffect(()=>{if(!v)return;let T=0;const M=()=>{var y;(y=_.current)==null||y.render(s,a),T=requestAnimationFrame(M)};return T=requestAnimationFrame(M),()=>cancelAnimationFrame(T)},[s,v,a]);const E=x?{left:`${x.left}px`,top:`${x.top}px`,width:`${x.width}px`,height:`${x.height}px`}:void 0;return At.jsx("canvas",{ref:g,className:`cube-ar-overlay${v?" active":""}`,style:E,"aria-hidden":"true"})}function cC(s,t){const n=Math.min(s,t)*.3;return{left:(s-n)/2,top:(t-n)/2,width:n,height:n}}function g_(s){return{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}}function uC({rect:s,viewportWidth:t,viewportHeight:n}){const a={position:"absolute",background:"rgba(0, 0, 0, 0.38)",pointerEvents:"none"},{left:o,top:c,width:u,height:h}=s,p=o+u,m=c+h;return At.jsxs(At.Fragment,{children:[At.jsx("div",{style:{...a,top:0,left:0,width:t,height:c}}),At.jsx("div",{style:{...a,top:m,left:0,width:t,height:Math.max(0,n-m)}}),At.jsx("div",{style:{...a,top:c,left:0,width:o,height:h}}),At.jsx("div",{style:{...a,top:c,left:p,width:Math.max(0,t-p),height:h}})]})}function fC({rect:s,viewportWidth:t,viewportHeight:n,visible:a,showSpot:o=!1,spotRect:c=null,spotColor:u="#ffffff"}){if(!a||!t||!n)return null;const h=s??cC(t,n),p=o?c??h:null;return At.jsxs("div",{className:"guide-overlay-root","aria-hidden":"true",children:[At.jsx(uC,{rect:h,viewportWidth:t,viewportHeight:n}),At.jsx("div",{className:"guide-frame-css",style:g_(h)}),p&&At.jsx("div",{className:"guide-spot-css",style:{...g_(p),borderColor:u,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.45), 0 0 14px ${u}88`}})]})}function hC(s,t,n,a){return Xt.useMemo(()=>({guideRect:sC(s,t,n,a),spotRect:oC(s,t,n,a)}),[s,t,n,a])}function dC(s,t){return s==="colorLearn"||s==="scanReady"||s==="liveScan"||s==="solving"&&!t}function pC({phase:s,trackingLocked:t,frameWidth:n,frameHeight:a,viewportWidth:o,viewportHeight:c,colorLearnSpot:u=!1,spotColor:h="#ffffff"}){const{guideRect:p,spotRect:m}=hC(n,a,o,c);return At.jsx(fC,{rect:p,viewportWidth:o,viewportHeight:c,visible:dC(s,t),showSpot:u,spotRect:m,spotColor:h})}function mC({setVideoRef:s,onDimensions:t}){const n=Xt.useCallback(o=>{o.videoWidth&&o.videoHeight&&(t==null||t(o.videoWidth,o.videoHeight))},[t]),a=Xt.useCallback(o=>{s(o),o&&o.readyState>=1&&n(o)},[s,n]);return At.jsx("video",{ref:a,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:o=>n(o.currentTarget)})}function My(s,t){Xt.useEffect(()=>{if(!t)return;const n=a=>{var c;if(a.key!=="Enter"&&a.key!==" ")return;const o=(c=a.target)==null?void 0:c.tagName;o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||(a.preventDefault(),s())};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[s,t])}function gC({visible:s,stepIndex:t,sample:n,ready:a,error:o,onConfirm:c}){const u=fa[t]??"R";return My(c,s&&a),s?At.jsx("div",{className:"color-learn-overlay","aria-live":"polite",children:At.jsxs("div",{className:"color-learn-panel",children:[At.jsx("p",{className:"color-learn-target",style:{color:Bs[u]},children:vy[u]}),At.jsxs("p",{className:"color-learn-step",children:[t+1," / ",fa.length]}),n&&At.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${n.r},${n.g},${n.b})`}}),At.jsx("button",{type:"button",className:"capture-button",disabled:!a,onClick:c,children:a?"Confirm":"Hold steady…"}),o&&At.jsx("p",{className:"color-learn-error",children:o})]})}):null}function Ey({colors:s,cellClassName:t,variant:n="overlay",orientation:a="real"}){const o=t??(n==="mini"?"face-grid-mini-cell":"cell-grid-item"),c=a==="mirror"?rC(s):s;return At.jsx("div",{className:`face-color-grid face-color-grid--${n}`,children:c.map((u,h)=>At.jsx("span",{className:o,style:{background:Bs[u]}},h))})}const vC={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function _C({feedback:s,visible:t}){if(!t)return null;const n=s.cellColors.length===9;return At.jsx("div",{className:"detection-overlay","aria-live":"polite",children:At.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[At.jsxs("div",{className:`detection-status ${s.status}`,children:[At.jsx("span",{className:"status-text",children:vC[s.status]}),s.status==="rotate"&&At.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&At.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),n&&At.jsx(Ey,{colors:s.cellColors,variant:"overlay",orientation:"mirror"})]})})}function yC({phase:s,knownFaces:t,progress:n,needsNewFace:a=!1,needsClearerCenter:o=!1}){return s!=="liveScan"?null:At.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[At.jsx("div",{className:"calibration-bar",children:At.jsx("div",{className:"calibration-fill",style:{width:`${n*100}%`}})}),At.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),At.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),a&&At.jsx("p",{className:"calibration-hint",children:"Show a different face"}),o&&!a&&At.jsx("p",{className:"calibration-hint",children:"Center the face color in the guide"})]})}const v_=["U","F","R","B","L","D"],xC={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"},SC={U:"W",D:"Y",F:"G",R:"R",L:"O",B:"B"};function Ya(s){return xC[s]??null}function MC(s){return SC[s]}function EC({colors:s,label:t,empty:n=!1}){const a=s&&s.length===9;return At.jsxs("div",{className:`face-grid-mini ${n?"face-grid-mini--empty":""}`,children:[a?At.jsx(Ey,{colors:s,variant:"mini",orientation:"real"}):At.jsx("div",{className:"face-color-grid face-color-grid--mini face-color-grid--placeholder",children:Array.from({length:9},(o,c)=>At.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},c))}),At.jsx("span",{className:"face-grid-mini-label",children:t})]})}const TC={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function rd({visible:s,scannedFaces:t}){if(!s)return null;const n=v_.filter(a=>t[a]).length;return At.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[At.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",n,"/6"]}),At.jsx("div",{className:"scanned-faces-bar-grid",children:v_.map(a=>At.jsx(EC,{colors:t[a]??null,label:TC[a],empty:!t[a]},a))})]})}function bC(s){return dy(s)?"Turn 180°":zR(s)?"Turn counter-clockwise":"Turn clockwise"}function AC(s,t){const{tracking:n,rotationProgress:a,wrongMove:o,faceMatchesMove:c}=s;return o?"Wrong direction — follow the arrow on the cube":c?n==="lost"?"Cube lost — hold it steady in view":n==="searching"?"Center the cube in the guide":a>.15?"Keep turning…":"Follow the arrow on the cube":`Show the ${vy[t]} center to the camera`}function RC({visible:s,currentMove:t,feedback:n,onSkip:a}){if(!s)return null;const{tracking:o,rotationProgress:c,wrongMove:u,faceMatchesMove:h}=n,p=Cs(t),m=MC(p),v=AC(n,m);return At.jsxs("div",{className:"solving-overlay","aria-live":"polite",children:[At.jsxs("div",{className:"solving-banner",children:[At.jsxs("div",{className:"solving-visual-hint",children:[At.jsx("span",{className:"solving-center-swatch",style:{background:Bs[m]},"aria-hidden":"true"}),At.jsx("p",{className:"solving-rotation",children:bC(t)})]}),At.jsx("p",{className:`solving-hint${u?" solving-hint--wrong":""}`,children:v}),o==="locked"&&h&&At.jsx("div",{className:"solving-progress","aria-hidden":"true",children:At.jsx("div",{className:"solving-progress-fill",style:{width:`${Math.round(c*100)}%`}})})]}),a&&At.jsx("button",{type:"button",className:"solving-skip",onClick:a,children:"Skip step"})]})}function __({message:s="Loading…",overlay:t=!1}){return At.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[At.jsx("div",{className:"loading-spinner"}),At.jsx("p",{children:s})]})}function CC({visible:s,feedback:t,onStart:n}){const a=t.status==="detected"&&t.cellColors.length===9;return My(n,s),s?At.jsx("div",{className:"scan-ready-overlay","aria-live":"polite",children:At.jsxs("div",{className:"scan-ready-panel",children:[At.jsx("p",{className:"scan-ready-hint",children:a?"Cube detected":"Align cube in guide"}),At.jsx("button",{type:"button",className:"capture-button",onClick:n,children:"Start scan"})]})}):null}function wC({phase:s,currentStep:t,totalSteps:n}){return s!=="solving"||n===0?null:At.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",n]})}function DC(s){const t=["U","R","F","D","L","B"];let n="";for(const a of t){const o=s.get(a);if(!o||o.length!==9)throw new Error(`Missing face data for ${a}`);for(const c of o)n+=UC(c)}return n}function UC(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function LC(s,t){const n=new Array(9).fill(0);for(let a=0;a<3;a++)for(let o=0;o<3;o++){let c=0;for(let u=0;u<3;u++)c+=s[a*3+u]*t[u*3+o];n[a*3+o]=c}return n}function y_(){return[1,0,0,0,1,0,0,0,1]}function NC(s,t){const[n,a,o]=s,c=Math.hypot(n,a,o)||1,u=n/c,h=a/c,p=o/c,m=Math.cos(t),v=Math.sin(t),g=1-m;return[g*u*u+m,g*u*h-v*p,g*u*p+v*h,g*u*h+v*p,g*h*h+m,g*h*p-v*u,g*u*p-v*h,g*h*p+v*u,g*p*p+m]}function OC(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-B2h2yb51.js",import.meta.url),{type:"module"})}const Ty=["R","O","Y","G","B","W"],PC={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function by(){return vp()?XR():PC}function zC(s,t,n){const a=sd(s/255),o=sd(t/255),c=sd(n/255);return[a*.4124564+o*.3575761+c*.1804375,a*.2126729+o*.7151522+c*.072175,a*.0193339+o*.119192+c*.9503041]}function sd(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function FC(s,t,n){const u=od(s/.95047),h=od(t/1),p=od(n/1.08883);return[116*h-16,500*(u-h),200*(h-p)]}function od(s){return s>.008856?s**(1/3):7.787*s+16/116}function Ay(s,t,n){const[a,o,c]=zC(s,t,n);return FC(a,o,c)}function Ry(s,t){const n=s[0]-t[0],a=s[1]-t[1],o=s[2]-t[2];return Math.sqrt(n*n+a*a+o*o)}function BC(s,t,n){const a=s/255,o=t/255,c=n/255,u=Math.max(a,o,c),h=Math.min(a,o,c),p=u-h;let m=0;p>0&&(u===a?m=(o-c)/p%6:u===o?m=(c-a)/p+2:m=(a-o)/p+4,m*=60,m<0&&(m+=360));const v=u===0?0:p/u*255,g=u*255;return[m,v,g]}function x_(s,t,n){const a=Ay(s,t,n),o=by();let c="W",u=1/0;for(const h of Ty){const p=Ry(a,o[h]);p<u&&(u=p,c=h)}return c}function Cy(s,t,n){const a=Math.max(s,t,n),o=Math.min(s,t,n);return a<38||a<70&&a-o<22}function IC(s,t,n){const a=Math.max(s,t,n),o=Math.min(s,t,n),c=a-o,u=(s+t+n)/3;return a<125||c>42||n>s+22&&n>t+12||s>t+22&&s>n+22||t>s+18&&t>n+18?!1:u>145&&c<38}function HC(s,t,n,a){const o=Ay(s,t,n);return 1/(1+Ry(o,by()[a]))}function Xo(s,t,n){if(Cy(s,t,n)||vp())return x_(s,t,n);const[a,o]=BC(s,t,n),c=o/255;if(IC(s,t,n))return"W";const u=new Map;for(const m of Ty)u.set(m,HC(s,t,n,m));n>=s+14&&n>=t+10&&n>75&&u.set("B",(u.get("B")??0)+.55),s>=t+12&&s>=n+12&&s>85&&u.set("R",(u.get("R")??0)+.45),t>=s+10&&t>=n+10&&t>70&&u.set("G",(u.get("G")??0)+.45),s>95&&t>85&&n<Math.min(s,t)-18&&u.set("Y",(u.get("Y")??0)+.55),s>t+8&&t>n+5&&s>110&&a>=8&&a<42&&u.set("O",(u.get("O")??0)+.45),c>.18&&(a>=38&&a<=72&&u.set("Y",(u.get("Y")??0)+.25),a>=10&&a<38&&u.set("O",(u.get("O")??0)+.2),(a<=12||a>=345)&&u.set("R",(u.get("R")??0)+.2),a>=78&&a<=155&&u.set("G",(u.get("G")??0)+.2),a>=165&&a<=255&&u.set("B",(u.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,v]of u)v>p&&(p=v,h=m);return h}function ld(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function GC(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function VC(s,t,n){const a=Math.max(s,t,n)-Math.min(s,t,n);return a>52?.15:a>36?.55:1}function kC(s,t,n,a,o,c){const u=new Map,h=[],p=[],m=[],g=o-n>40?1:2;for(let T=Math.floor(a);T<Math.floor(c);T+=g)for(let M=Math.floor(n);M<Math.floor(o);M+=g){const y=(T*t+M)*4,z=s[y],L=s[y+1],w=s[y+2];if(Cy(z,L,w))continue;h.push(z),p.push(L),m.push(w);const X=Xo(z,L,w),F=VC(z,L,w);u.set(X,(u.get(X)??0)+F)}if(h.length===0){const T=Math.floor((n+o)/2),y=(Math.floor((a+c)/2)*t+T)*4;return Xo(s[y],s[y+1],s[y+2])}const _=Xo(ld(h),ld(p),ld(m));u.set(_,(u.get(_)??0)+3);let x=_,E=0;for(const[T,M]of u)M>E&&(E=M,x=T);return x}function XC(s,t,n){const o=s.getImageData(0,0,t,n).data,c=[],u=t/3,h=n/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const v=GC(p,m),g=m*u+u*v,_=m*u+u*(1-v),x=p*h+h*v,E=p*h+h*(1-v);c.push(kC(o,t,g,x,_,E))}return c}function nl(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function WC(s){const t=nl();for(const n of s)t[n]++;return t}function wy(s){return!!(s&&s.length===9)}function qC(s){if(!wy(s))return{valid:!1,colorCounts:nl(),detectedCenter:null,uniqueColors:0};const t=WC(s),n=Object.values(t).filter(a=>a>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:n}}const YC={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},il=["W","Y","R","O","G","B"],ou=9,jC={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function _p(s){const t=nl();for(const n of s.values())for(const a of n)t[a]++;return t}function ZC(s,t){return jC[s][t]??6}function KC(s){let t=null,n=0;for(const a of il){const o=s[a]-ou;o>n&&(n=o,t=a)}return t}function QC(s){let t=null,n=0;for(const a of il){const o=ou-s[a];o>n&&(n=o,t=a)}return t}function Dy(s){return il.every(t=>s[t]===ou)}function JC(s){const t=new Map;for(const[a,o]of s){const c=[...o];c[4]=YC[a],t.set(a,c)}const n=[];for(const[a,o]of t)for(let c=0;c<9;c++)c!==4&&n.push({faceId:a,index:c,color:o[c]});for(let a=0;a<256;a++){const o=_p(t);if(Dy(o))break;const c=KC(o),u=QC(o);if(!c||!u)break;let h=null,p=1/0;for(const m of n){if(m.color!==c)continue;const v=ZC(c,u);v<p&&(p=v,h=m)}if(!h){const m=n.find(v=>v.color===c);if(!m)break;h=m}h.color=u,t.get(h.faceId)[h.index]=u}return t}function $C(s){const t=_p(s),n=nl();for(const a of il)n[a]=t[a]-ou;return n}function S_(s){return Dy(_p(s))}function t2(s){const t=$C(s),n={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},a=il.filter(o=>t[o]!==0).map(o=>{const c=t[o];return`${n[o]}${c>0?`+${c}`:c}`});return a.length>0?a.join(", "):""}const Ms=256;function Uy(s,t){const n=document.createElement("canvas");n.width=Ms,n.height=Ms;const a=n.getContext("2d",{willReadFrequently:!0});return a?(a.drawImage(s,t.x,t.y,t.size,t.size,0,0,Ms,Ms),XC(a,Ms,Ms)):[]}function Ly(s,t){const n=s.getContext("2d",{willReadFrequently:!0});if(!n)return 0;const{x:a,y:o,size:c}=t,u=n.getImageData(Math.floor(a),Math.floor(o),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let g=0;g<u.length;g+=32){const _=(u[g]+u[g+1]+u[g+2])/3;h+=_,p+=_*_,m++}if(m===0)return 0;const v=h/m;return p/m-v*v}function Ny(s,t){if(s.length!==9)return!1;const n=new Set(s),a=s.filter(o=>o!=="W").length;return t<120?!1:n.size===1?!0:n.size===2&&a<=3&&t<300?!1:n.size>=3&&a>=2||n.size>=2&&a>=4&&t>220}function e2(s){if(s.length<4)return null;const t=[...s].sort((o,c)=>o.y-c.y),n=t.slice(0,2).sort((o,c)=>o.x-c.x),a=t.slice(2,4).sort((o,c)=>o.x-c.x);return[n[0],n[1],a[1],a[0]]}function yp(s,t){const n=s*.9,a=s*.9,o=s/2,c=t/2;return{fx:n,fy:a,cx:o,cy:c}}function Oy(s,t,n,a=null){try{return n2(s,t,n,a)}catch{return Py(s,t,n,a)}}function Py(s,t,n,a){const o={x:s.reduce((v,g)=>v+g.x,0)/4,y:s.reduce((v,g)=>v+g.y,0)/4},c=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2,{fx:u,fy:h,cx:p,cy:m}=yp(t,n);return{corners:s,center:o,size:c,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[0,0,c*3],confidence:.55,visibleFace:a,cameraFx:u,cameraFy:h,cameraCx:p,cameraCy:m}}function n2(s,t,n,a){const{fx:o,fy:c,cx:u,cy:h}=yp(t,n),p=a?[a,...$d.filter(g=>g!==a)]:$d;let m=null,v=1/0;for(const g of p){const _=hy[g];for(let x=0;x<4;x++){const E=OR(s,x),T=i2(_,E,g,o,c,u,h);if(!T)continue;const M=a2(_,T,E,o,c,u,h);M<v&&(v=M,m={...T,confidence:Math.max(.5,1-M/40)})}}return m||Py(s,t,n,a)}function i2(s,t,n,a,o,c,u){const h=window.cv,p=h.matFromArray(4,1,h.CV_32FC1,s.flat()),m=h.matFromArray(4,1,h.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),v=h.matFromArray(3,3,h.CV_32FC1,[a,0,c,0,o,u,0,0,1]),g=h.matFromArray(4,1,h.CV_32FC1,[0,0,0,0]),_=new h.Mat,x=new h.Mat,E=new h.Mat;h.solvePnP(p,m,v,g,_,x),h.Rodrigues(_,E);const T=[];for(let L=0;L<9;L++)T.push(E.data32F[L]??E.floatAt(Math.floor(L/3),L%3));const M=[x.data32F[0]??x.floatAt(0,0),x.data32F[1]??x.floatAt(1,0),x.data32F[2]??x.floatAt(2,0)],y={x:t.reduce((L,w)=>L+w.x,0)/4,y:t.reduce((L,w)=>L+w.y,0)/4},z=(Math.hypot(t[1].x-t[0].x,t[1].y-t[0].y)+Math.hypot(t[2].x-t[3].x,t[2].y-t[3].y))/2;return p.delete(),m.delete(),v.delete(),g.delete(),_.delete(),x.delete(),E.delete(),{corners:t,center:y,size:z,rotationMatrix:T,translation:M,confidence:.8,visibleFace:n,cameraFx:a,cameraFy:o,cameraCx:c,cameraCy:u}}function a2(s,t,n,a,o,c,u){const h=t.rotationMatrix,p=t.translation;let m=0;for(let v=0;v<4;v++){const g=s[v],_=h[0]*g[0]+h[1]*g[1]+h[2]*g[2]+p[0],x=h[3]*g[0]+h[4]*g[1]+h[5]*g[2]+p[1],E=h[6]*g[0]+h[7]*g[1]+h[8]*g[2]+p[2];if(E<1e-4)return 1/0;const T=a*_/E+c,M=o*x/E+u;m+=Math.hypot(T-n[v].x,M-n[v].y)}return m/4}function r2(s){const t=(o,c)=>Math.hypot(o.x-c.x,o.y-c.y),n=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],a=n.reduce((o,c)=>o+c,0)/4;return a<1?!1:n.every(o=>Math.abs(o-a)/a<.55)}function s2(s,t,n,a){const o=n*a;let c=null,u=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<o*.02){p.delete();continue}const v=t.arcLength(p,!0);for(const g of[.02,.035,.05,.08]){const _=new t.Mat;if(t.approxPolyDP(p,_,g*v,!0),_.rows===4){const x=[];for(let T=0;T<4;T++)x.push({x:_.data32S[T*2],y:_.data32S[T*2+1]});const E=e2(x);E&&r2(E)&&m>u&&(u=m,c=E)}_.delete()}p.delete()}return c}function M_(s,t,n){var a;if(!((a=window.cv)!=null&&a.Mat))return null;try{const o=window.cv,c=o.imread(s),u=new o.Mat,h=new o.Mat,p=new o.Mat,m=new o.Mat,v=new o.MatVector,g=new o.Mat;o.cvtColor(c,u,o.COLOR_RGBA2RGB),o.cvtColor(u,h,o.COLOR_RGB2GRAY),o.GaussianBlur(h,p,new o.Size(5,5),0),o.Canny(p,m,20,80),o.findContours(m,v,g,o.RETR_LIST,o.CHAIN_APPROX_SIMPLE);const _=s2(v,o,t,n);return c.delete(),u.delete(),h.delete(),p.delete(),m.delete(),v.delete(),g.delete(),_}catch{return null}}function o2(s,t,n){const a=Fs(t,n),o=Uy(s,a),c=Ly(s,a);return Ny(o,c)?{corners:gy(a),colors:o}:null}function zy(s,t,n){const a=Fs(t,n),o=document.createElement("canvas");o.width=a.size,o.height=a.size;const c=o.getContext("2d");if(c){c.drawImage(s,a.x,a.y,a.size,a.size,0,0,a.size,a.size);const p=M_(o,a.size,a.size);if(p)return VR(p,a.x,a.y)}const u=M_(s,t,n);if(u)return u;const h=o2(s,t,n);return(h==null?void 0:h.corners)??null}function E_(s,t,n){const a=Fs(t,n),o=Uy(s,a),c=Ly(s,a);if(!Ny(o,c))return null;const u=zy(s,t,n),h=o[4]?Ya(o[4]):null,p=Oy(u??gy(a),t,n,h);return p.confidence=u?.85:.7,{colors:o,pose:p}}function l2(s){const t=window.cv,n=t.imread(s),a=new t.Mat;return t.cvtColor(n,a,t.COLOR_RGBA2GRAY),n.delete(),a}const T_=45;class c2{constructor(){Te(this,"prevGray",null);Te(this,"trackedCorners",null);Te(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,n){var v;const a=window.cv;if(n)return this.trackedCorners=n,this.lostFrames=0,(v=this.prevGray)==null||v.delete(),this.prevGray=t.clone(),n;if(!this.prevGray||!this.trackedCorners)return null;const o=a.matFromArray(4,1,a.CV_32FC2,u2(this.trackedCorners)),c=new a.Mat,u=new a.Mat,h=new a.Mat;a.calcOpticalFlowPyrLK(this.prevGray,t,o,c,u,h);const p=[];let m=0;for(let g=0;g<4;g++){const _=u.data[g]===1,x=c.data32F[g*2],E=c.data32F[g*2+1];_&&Number.isFinite(x)&&Number.isFinite(E)?(p.push({x,y:E}),m++):p.push(this.trackedCorners[g])}return o.delete(),c.delete(),u.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>T_?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames=0,this.lostFrames>T_?(this.reset(),null):this.trackedCorners)}}function u2(s){return s.flatMap(t=>[t.x,t.y])}function oa(s,t,n){return s*(1-n)+t*n}function f2(s,t,n){return s.map((a,o)=>({x:oa(a.x,t[o].x,n),y:oa(a.y,t[o].y,n)}))}class h2{constructor(){Te(this,"state",null)}reset(){this.state=null}update(t,n=.38){if(!this.state||t.confidence<.4)return this.state=t,t;const a=t.confidence>.75?n:n*.55,o=t.rotationMatrix.map((v,g)=>oa(this.state.rotationMatrix[g],v,a)),c=[oa(this.state.translation[0],t.translation[0],a),oa(this.state.translation[1],t.translation[1],a),oa(this.state.translation[2],t.translation[2],a)],u=f2(this.state.corners,t.corners,a),h={x:oa(this.state.center.x,t.center.x,a),y:oa(this.state.center.y,t.center.y,a)},p=oa(this.state.size,t.size,a),m={...t,corners:u,center:h,size:p,rotationMatrix:o,translation:c,confidence:Math.max(this.state.confidence,t.confidence)*.92+t.confidence*.08};return this.state=m,m}}const d2=.9,p2=12,m2=10,g2=.28,v2=.82,_2=.8,b_=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];class y2{constructor(){Te(this,"state",{lastMatrix:y_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0});Te(this,"initialized",!1);Te(this,"expectedMove",null)}reset(){this.state={lastMatrix:y_(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0},this.initialized=!1,this.expectedMove=null}setExpectedMove(t){this.expectedMove=t,this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,this.initialized=!0}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,{completedMove:null,progress:0,wrongMove:null};const n=LC(S2(t),this.state.lastMatrix);if(Fy(n)<g2)return this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:null,progress:0,wrongMove:null};const o=this.expectedMove?x2(n,this.expectedMove):0,c=this.expectedMove?[this.expectedMove]:b_,u=A_(n,c);if(u){const h=su(u),p=Math.abs(By(n,h)),m=Math.abs(ru(u))*v2;if(p<m||o<_2)return this.state.pendingMove=null,this.state.stableCount=0,{completedMove:null,progress:o,wrongMove:null};if(this.state.pendingMove===u){if(this.state.stableCount++,this.state.stableCount>=p2)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:u,progress:1,wrongMove:null}}else this.state.pendingMove=u,this.state.stableCount=1;this.state.wrongMove=null,this.state.wrongStableCount=0}else if(this.expectedMove){const h=A_(n,b_);if(h&&h!==this.expectedMove){if(this.state.wrongMove===h?this.state.wrongStableCount++:(this.state.wrongMove=h,this.state.wrongStableCount=1),this.state.wrongStableCount>=m2)return{completedMove:null,progress:o,wrongMove:h}}else this.state.wrongMove=null,this.state.wrongStableCount=0;this.state.pendingMove=null,this.state.stableCount=0}else this.state.pendingMove=null,this.state.stableCount=0;return{completedMove:null,progress:o,wrongMove:null}}}function Fy(s){const t=s[0]+s[4]+s[8],n=Math.max(-1,Math.min(1,(t-1)/2));return Math.acos(n)}function By(s,t){const n=Fy(s),a=Math.sin(n);if(Math.abs(a)<1e-5)return 0;const o=[(s[7]-s[5])/(2*a),(s[2]-s[6])/(2*a),(s[3]-s[1])/(2*a)];return(o[0]*t[0]+o[1]*t[1]+o[2]*t[2])*n}function x2(s,t){const n=su(t),a=ru(t),o=By(s,n);return Math.abs(a)<1e-6||Math.sign(o)!==Math.sign(a)&&Math.abs(o)>.15?0:Math.min(1,Math.abs(o)/Math.abs(a))}function S2(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function A_(s,t){let n=null,a=d2;for(const o of t){const c=su(o),u=NC(c,ru(o)),h=M2(s,u);h>a&&(a=h,n=o)}return n}function M2(s,t){let n=0;for(let a=0;a<9;a++)n+=1-Math.abs(s[a]-t[a])/2;return n/9}function E2(s,t,n,a,o,c,u){const h=t[0]*s[0]+t[1]*s[1]+t[2]*s[2]+n[0],p=t[3]*s[0]+t[4]*s[1]+t[5]*s[2]+n[1],m=t[6]*s[0]+t[7]*s[1]+t[8]*s[2]+n[2];return m<.02?null:{x:a*h/m+c,y:o*p/m+u}}function T2(s,t,n,a){const o=hy[s],{fx:c,fy:u,cx:h,cy:p}=yp(n,a),m=t.cameraFx??c,v=t.cameraFy??u,g=t.cameraCx??h,_=t.cameraCy??p,x=[];for(const E of o){const T=E2(E,t.rotationMatrix,t.translation,m,v,g,_);if(!T||T.x<-40||T.y<-40||T.x>n+40||T.y>a+40)return null;x.push(T)}return x}function R_(s,t,n){return s+(t-s)*n}function cd(s,t,n){return{x:R_(s.x,t.x,n),y:R_(s.y,t.y,n)}}function b2(s,t,n,a,o,c){const u=cd(s,t,o),h=cd(a,n,o);return cd(u,h,c)}function ud(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),n=Math.floor(t.length/2);return t.length%2===1?t[n]:Math.round((t[n-1]+t[n])/2)}function A2(s,t,n,a,o,c){const u=Math.max(0,Math.floor(a-c)),h=Math.min(t,Math.ceil(a+c)),p=Math.max(0,Math.floor(o-c)),m=Math.min(n,Math.ceil(o+c)),v=[],g=[],_=[];for(let x=p;x<m;x+=2)for(let E=u;E<h;E+=2){const T=(x*t+E)*4,M=s[T],y=s[T+1],z=s[T+2];Math.max(M,y,z)<35||(v.push(M),g.push(y),_.push(z))}if(v.length===0){const x=Math.max(0,Math.min(t-1,Math.floor(a))),T=(Math.max(0,Math.min(n-1,Math.floor(o)))*t+x)*4;return Xo(s[T],s[T+1],s[T+2])}return Xo(ud(v),ud(g),ud(_))}function R2(s,t,n,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const[c,u,h,p]=a,m=Math.min(Math.hypot(u.x-c.x,u.y-c.y),Math.hypot(p.x-c.x,p.y-c.y));if(m<18)return null;const g=o.getImageData(0,0,t,n).data,_=Math.max(3,m/14),x=[];for(let E=0;E<3;E++)for(let T=0;T<3;T++){const M=(T+.5)/3,y=(E+.5)/3,z=b2(c,u,h,p,M,y);x.push(A2(g,t,n,z.x,z.y,_))}return x}function C_(s,t,n,a){const o={},c=py(t);for(const u of c){const h=T2(u,t,n,a);if(!h)continue;const p=R2(s,n,a,h);(p==null?void 0:p.length)===9&&(o[u]=p)}return o}const C2=30,Ic={pose:null,detectedFace:null,rotationMove:null,rotationProgress:0,wrongMove:null,visibleFaceColors:{}};class w2{constructor(){Te(this,"rotationDetector",new y2);Te(this,"flowTracker",new c2);Te(this,"poseSmoother",new h2);Te(this,"trackingEnabled",!1);Te(this,"processCanvas");Te(this,"processCtx");Te(this,"lastColors",null);Te(this,"expectedMove",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.poseSmoother.reset(),this.lastColors=null}setExpectedMove(t){t!==this.expectedMove&&(this.expectedMove=t,this.rotationDetector.setExpectedMove(t))}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const n=t.videoWidth,a=t.videoHeight;return!n||!a?!1:(this.processCanvas.width=n,this.processCanvas.height=a,m_(this.processCtx,t,n,a),!0)}getColorLearnSample(t,n,a){return _y(this.processCanvas,t,n,a)}process(t){const n=t.videoWidth,a=t.videoHeight;if(!n||!a)return{...Ic};this.processCanvas.width=n,this.processCanvas.height=a,m_(this.processCtx,t,n,a);try{return this.trackingEnabled?this.processWithTracking(n,a):this.processDetectionOnly(n,a)}catch{return{...Ic}}}processDetectionOnly(t,n){const a=E_(this.processCanvas,t,n);if(!a)return{...Ic};this.lastColors=a.colors;const o=C_(this.processCanvas,a.pose,t,n);return{pose:a.pose,detectedFace:a,rotationMove:null,rotationProgress:0,wrongMove:null,visibleFaceColors:o}}processWithTracking(t,n){const a=zy(this.processCanvas,t,n),o=l2(this.processCanvas),c=this.flowTracker.update(o,a);if(o.delete(),!c)return{...Ic};let u=this.lastColors;if(a){const x=E_(this.processCanvas,t,n);x&&(u=x.colors,this.lastColors=u)}const h=u!=null&&u[4]?Ya(u[4]):null;let p=Oy(c,t,n,h);const m=this.flowTracker.getLostFrames();p.confidence=a?.85:Math.max(.35,.85-m*.01),p=this.poseSmoother.update(p);const v=u?{colors:u,pose:p}:null,g=this.rotationDetector.update(p.rotationMatrix),_=C_(this.processCanvas,p,t,n);return{pose:p,detectedFace:v,rotationMove:g.completedMove,rotationProgress:g.progress,wrongMove:g.wrongMove,visibleFaceColors:_}}isTrackingLost(){return this.flowTracker.getLostFrames()>C2}readStableFace(t,n=5){const a=[];let o=null;for(let u=0;u<n;u++){const h=this.process(t);if(!h.detectedFace)return null;a.push(h.detectedFace.colors),o=h.detectedFace.pose}return o?{colors:D2(a),pose:o}:null}}function D2(s){const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}const U2=[0,1,2,3,5,6,7,8],Hc=1e3,L2=10,N2=7,O2=6;function P2(s,t){let n=0;for(const a of U2)s[a]===t[a]&&n++;return n}function z2(s,t){let n=0;for(let a=0;a<9;a++)s[a]===t[a]&&n++;return n}function F2(s,t){return P2(s,t)>=N2}function Iy(s,t){for(const[n,a]of t)if(F2(s,a))return n;return null}function B2(s){const t=[];for(let n=0;n<9;n++){const a=new Map;for(const u of s){const h=u[n];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[u,h]of a)h>c&&(c=h,o=u);t.push(o)}return t}function I2(s){if(s.length===0)return null;const t=new Map;for(const o of s){const c=o[4];t.set(c,(t.get(c)??0)+1)}let n=null,a=0;for(const[o,c]of t)c>a&&(a=c,n=o);return n}function H2(s,t,n){if(Iy(s,t))return null;for(const a of[I2(n),s[4]]){if(!a)continue;const o=Ya(a);if(o&&!t.has(o))return o}return null}function w_(s){if(s.size!==6)return s;const t=new Map,n=new Set,a=[...s.entries()].sort((o,c)=>{const u=Ya(o[1][4])===o[0]?0:1,h=Ya(c[1][4])===c[0]?0:1;return u-h});for(const[,o]of a){const c=Ya(o[4]);c&&!n.has(c)&&(t.set(c,[...o]),n.add(c))}return t.size===6?t:s}class G2{constructor(){Te(this,"faces",new Map);Te(this,"pendingReadings",[]);Te(this,"stableSinceMs",null);Te(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,n=Date.now()){const a=Hc/1e3,o={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1,needsClearerCenter:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],o;const c=Ya(t[4]),u=Iy(t,this.faces);if(u)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...o,currentFace:u,needsNewFace:!0};!this.stabilityAnchor||z2(t,this.stabilityAnchor)<O2?(this.stabilityAnchor=[...t],this.stableSinceMs=n,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=n);const h=this.stableSinceMs!==null?n-this.stableSinceMs:0,p=Math.min(h,Hc)/1e3;let m=null,v=!1;if(h>=Hc){const g=[...this.pendingReadings,[...t]];g.length>L2&&g.shift(),this.pendingReadings=g;const _=B2(g),x=H2(_,this.faces,g);if(x){const E=!this.faces.has(x);this.faces.set(x,[..._]),E&&(m=x),this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}else v=!0,this.stableSinceMs=n-Hc+400}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1,needsClearerCenter:v}}}const V2="https://docs.opencv.org/4.9.0/opencv.js";let Gc=null;function k2(){return Gc||(Gc=new Promise((s,t)=>{var a;if((a=window.cv)!=null&&a.Mat){s();return}const n=document.createElement("script");n.src=V2,n.async=!0,n.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},n.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(n)}),Gc)}function D_(s){return Object.fromEntries(yy(s))}const Go={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:nl(),cellColors:[]},Zc={tracking:"searching",rotationProgress:0,wrongMove:null,visibleFace:null,faceMatchesMove:!1,liveFaceColors:null,visibleFaceColors:{}},X2={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:Go,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,liveScanNeedsClearerCenter:!1,solvingFeedback:Zc};function W2(s){const[t,n]=Xt.useState(X2),a=Xt.useRef(null),o=Xt.useRef(null),c=Xt.useRef(new G2),u=Xt.useRef(""),h=Xt.useRef(0),p=Xt.useRef(0),m=Xt.useRef("loading"),v=Xt.useRef(0),g=Xt.useRef(null),_=Xt.useRef(0),x=Xt.useRef(0),E=Xt.useRef(null),T=Xt.useRef(null),M=Xt.useRef(!1),y=Xt.useRef(0),z=Xt.useRef(null),L=Xt.useCallback(D=>{var W;D!==z.current&&(z.current=D,(W=a.current)==null||W.setExpectedMove(D))},[]),w=Xt.useCallback(()=>{E.current&&(clearTimeout(E.current),E.current=null)},[]),X=Xt.useCallback((D,W,nt,G)=>{var yt;const lt=o.current;if(!lt){n(Ct=>({...Ct,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}w();const mt=++p.current;lt.postMessage({type:"solve",facelet:D,scannedFaces:Object.fromEntries(nt),captures:G,id:mt}),(yt=a.current)==null||yt.syncPose(W),E.current=setTimeout(()=>{n(Ct=>Ct.phase!=="computing"?Ct:{...Ct,phase:"error",error:"Solve timed out. Colors may have been misread — re-scan in steady light."})},25e3)},[w]);Xt.useEffect(()=>{m.current=t.phase,g.current=t.solution,v.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const F=Xt.useCallback(D=>{var nt;const W=++p.current;(nt=o.current)==null||nt.postMessage({type:"apply",move:D,facelet:u.current,id:W}),n(G=>{if(!G.solution)return G;const lt=G.solution.moves[G.solution.currentIndex];if(D!==lt)return G;const mt=G.solution.currentIndex+1;return mt>=G.solution.moves.length?{...G,phase:"solved",solution:{...G.solution,currentIndex:mt},solvingFeedback:Zc}:{...G,solution:{...G.solution,currentIndex:mt},solvingFeedback:{...Zc,tracking:"locked"}}}),x.current=Date.now()},[]),P=Xt.useCallback((D,W,nt,G,lt,mt)=>{const{detectedCenter:yt,colorCounts:Ct}=qC(W),qt=wy(W);let Ht="searching";return!D||!qt?Ht="searching":mt?Ht="rotate":lt?Ht="captured":nt>0&&nt<G?Ht="stabilizing":Ht="detected",{status:Ht,stableProgress:nt,stableTarget:G,detectedCenter:yt,colorCounts:Ct,cellColors:qt&&W?[...W]:[]}},[]),k=Xt.useCallback(()=>{var D;c.current.reset(),M.current=!1,T.current=null,n(W=>({...W,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Go,liveScanNeedsClearerCenter:!1})),(D=a.current)==null||D.disableTracking(),z.current=null},[]),U=Xt.useCallback(()=>{var D;c.current.reset(),M.current=!1,T.current=null,n(W=>({...W,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Go,liveScanNeedsClearerCenter:!1})),(D=a.current)==null||D.disableTracking(),z.current=null},[]),R=Xt.useCallback(async()=>{try{await k2(),a.current=new w2;const D=OC();o.current=D,D.onmessage=W=>{var G,lt;const nt=W.data;if(nt.type==="ready")n(mt=>({...mt,solverReady:!0}));else if(nt.type==="solution"){if(nt.id!==p.current)return;w(),u.current=nt.facelet,_.current=Date.now(),x.current=Date.now(),n(mt=>({...mt,phase:nt.moves.length===0?"solved":"solving",solution:{moves:nt.moves,currentIndex:0},detectionFeedback:Go,solvingFeedback:Zc})),nt.moves.length>0&&((G=a.current)==null||G.enableTracking(),T.current&&((lt=a.current)==null||lt.syncPose(T.current)),L(nt.moves[0]??null))}else if(nt.type==="facelet"){if(nt.id!==p.current)return;u.current=nt.facelet}else if(nt.type==="error"){if(nt.id!==void 0&&nt.id!==p.current)return;w(),M.current=!1,n(mt=>({...mt,phase:"error",error:nt.message}))}},D.onerror=()=>{w(),n(W=>({...W,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},D.postMessage({type:"init"}),h_(),c.current.reset(),n(W=>({...W,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(D){n(W=>({...W,phase:"error",error:D instanceof Error?D.message:"Init failed"}))}},[w]);Xt.useEffect(()=>(R(),()=>{var D,W;cancelAnimationFrame(h.current),w(),(D=o.current)==null||D.terminate(),(W=a.current)==null||W.disableTracking()}),[R,w]);const H=Xt.useCallback(()=>{const D=s.current,W=a.current;if(!D||!W||D.readyState<2||!W.captureFrame(D))return;const nt=v.current,G=fa[nt];if(!G)return;const lt=W.getFrameCanvas();if(!KR(lt,D.videoWidth,D.videoHeight,G)){n(Ct=>({...Ct,colorLearnError:`Could not read ${G}. Center the sticker in the circle.`}));return}const yt=nt+1;if(yt>=fa.length){k(),n(Ct=>({...Ct,colorsCalibrated:!0,colorLearnError:null}));return}n(Ct=>({...Ct,colorLearnIndex:yt,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,k]),it=Xt.useCallback(()=>{U()},[U]),J=Xt.useCallback(()=>{var Pe,Ne,he;const D=s.current,W=a.current;if(!D||!W||D.readyState<2)return;const nt=W.process(D),G=m.current;if(G==="colorLearn"){W.captureFrame(D);const I=fa[v.current];if(I){const Be=W.getColorLearnSample(D.videoWidth,D.videoHeight,I);n(Qt=>({...Qt,colorLearnSample:Be,colorLearnReady:(Be==null?void 0:Be.ready)??!1,colorLearnError:null}))}return}if(G==="scanReady"){const I=((Pe=nt.detectedFace)==null?void 0:Pe.colors)??null,Be=!!nt.pose;n(Qt=>({...Qt,detectionFeedback:P(Be,I,0,0,!1,!1)}));return}if(G==="liveScan"){if(!vp()){n(Gt=>({...Gt,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const I=((Ne=nt.detectedFace)==null?void 0:Ne.colors)??null,Be=!!nt.pose;nt.pose&&(T.current=nt.pose);const Qt=c.current.update(I),pe=!!Qt.newlyCaptured;if(Qt.isComplete&&T.current&&!M.current){M.current=!0;const Gt=w_(yy(Qt.faces)),Ae=D_(Gt);try{let Bt=Gt;if(!S_(Bt)&&(Bt=JC(Gt),!S_(Bt))){const ht=t2(Gt);n(Mt=>({...Mt,phase:"error",scannedFaceColors:Ae,error:ht?`Color mismatch (${ht}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const N=DC(Bt),A=T.current,at=[...Bt.values()].map(ht=>[...ht]);n(ht=>({...ht,phase:"computing",knownFaces:Qt.knownFaces,scannedFaceColors:Ae,liveScanProgress:1,currentPose:A})),queueMicrotask(()=>X(N,A,Bt,at))}catch(Bt){n(N=>({...N,phase:"error",scannedFaceColors:Ae,error:Bt instanceof Error?Bt.message:"Failed to build cube state"}))}return}n(Gt=>({...Gt,currentPose:nt.pose,knownFaces:Qt.knownFaces,scannedFaceColors:D_(w_(Qt.faces)),currentVisibleFace:Qt.currentFace,liveScanProgress:Qt.knownFaces.length/6,liveScanNeedsClearerCenter:Qt.needsClearerCenter,detectionFeedback:P(Be,I,Qt.stableProgress,Qt.stableTarget,pe,Qt.needsNewFace)}));return}if(n(I=>({...I,currentPose:nt.pose})),G!=="solving")return;const lt=g.current,mt=lt&&lt.currentIndex<lt.moves.length?lt.moves[lt.currentIndex]:null;L(mt??null);const yt=(he=nt.detectedFace)!=null&&he.colors[4]?Ya(nt.detectedFace.colors[4]):null,Ct=mt?Cs(mt):null,qt=!!(yt&&Ct&&yt===Ct);let Ht="searching";if(nt.pose?nt.pose.confidence<.55||W.isTrackingLost()?Ht="searching":(y.current=0,Ht="locked"):(y.current++,Ht=y.current>12?"lost":"searching"),n(I=>{var Be;return{...I,solvingFeedback:{tracking:Ht,rotationProgress:nt.rotationProgress,wrongMove:nt.wrongMove,visibleFace:yt,faceMatchesMove:qt,liveFaceColors:((Be=nt.detectedFace)==null?void 0:Be.colors)??null,visibleFaceColors:nt.visibleFaceColors}}}),!!nt.rotationMove&&!(Date.now()-_.current<2e3)&&!(Date.now()-x.current<1800)&&Ht==="locked"&&!(nt.rotationProgress<.78)&&qt&&lt&&mt&&nt.rotationMove===mt){F(nt.rotationMove),nt.pose&&W.syncPose(nt.pose);const I=lt.moves[lt.currentIndex+1]??null;L(I),y.current=0,x.current=Date.now()}},[s,F,P,X,L]),ct=Xt.useCallback(()=>{J(),h.current=requestAnimationFrame(ct)},[J]),gt=Xt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(ct)},[ct]),O=Xt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),$=Xt.useCallback(()=>{w(),k(),n(D=>({...D,solution:null}))},[w,k]),Q=Xt.useCallback(()=>{var D;w(),M.current=!1,c.current.reset(),T.current=null,h_(),(D=a.current)==null||D.disableTracking(),n(W=>({...W,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:Go,liveScanNeedsClearerCenter:!1}))},[w]),St=Xt.useCallback(()=>{var lt;const D=g.current;if(!D||D.currentIndex>=D.moves.length)return;const W=D.moves[D.currentIndex];if(!W)return;const nt=D.moves[D.currentIndex+1]??null;F(W);const G=T.current;G&&((lt=a.current)==null||lt.syncPose(G)),L(nt),y.current=0,x.current=Date.now()},[F,L]),Tt=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:Tt,confirmColorLearn:H,startLiveScan:it,retryLiveScan:$,retryColorLearn:Q,startTracking:gt,stopTracking:O,skipCurrentMove:St}}function q2(){const s=Xt.useRef(null),t=Xt.useRef(null),[n,a]=Xt.useState({stream:null,error:null,isReady:!1}),o=Xt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Xt.useCallback(p=>{s.current=p,p&&o(p)},[o]),u=Xt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await o(m),a({stream:p,error:null,isReady:!0})}catch(p){t.current=null,a({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[o]),h=Xt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),a({stream:null,error:null,isReady:!1})},[]);return Xt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:n,start:u,stop:h}}const Y2="1.2.2";function j2(){var H,it;const{videoRef:s,setVideoRef:t,state:n,start:a}=q2(),{state:o,currentMove:c,confirmColorLearn:u,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:v,stopTracking:g,skipCurrentMove:_}=W2(s),x=Xt.useRef(null),[E,T]=Xt.useState({width:0,height:0}),[M,y]=Xt.useState({width:0,height:0});Xt.useEffect(()=>{a()},[a]),Xt.useEffect(()=>{if(n.isReady&&o.phase!=="loading")return v(),g},[n.isReady,o.phase,v,g]);const z=Xt.useCallback((J,ct)=>{T({width:J,height:ct})},[]);Xt.useEffect(()=>{const J=x.current;if(!J)return;const ct=()=>{y({width:J.clientWidth,height:J.clientHeight})};ct();const gt=new ResizeObserver(ct);return gt.observe(J),()=>gt.disconnect()},[]);const L=fa[o.colorLearnIndex]??"R",w=o.phase==="loading"||!n.isReady,X=!!(o.error||n.error),F=o.phase==="computing",P=o.phase==="solving",k=((H=o.solution)==null?void 0:H.moves.length)??0,U=(((it=o.solution)==null?void 0:it.currentIndex)??0)+1,R=o.phase==="liveScan"||o.phase==="computing"||X&&Object.keys(o.scannedFaceColors).length>0;return At.jsxs("main",{className:"app",children:[At.jsxs("div",{className:`viewport${o.phase==="liveScan"?" viewport--scanning":""}`,ref:x,children:[At.jsx(mC,{setVideoRef:t,onDimensions:z}),!w&&!X&&At.jsxs(At.Fragment,{children:[At.jsx(pC,{phase:o.phase,trackingLocked:o.solvingFeedback.tracking==="locked",frameWidth:E.width,frameHeight:E.height,viewportWidth:M.width,viewportHeight:M.height,colorLearnSpot:o.phase==="colorLearn",spotColor:Bs[L]}),At.jsx(lC,{pose:o.currentPose,move:c,rotationProgress:o.solvingFeedback.rotationProgress,faceMatchesMove:o.solvingFeedback.faceMatchesMove,visibleFaceColors:o.solvingFeedback.visibleFaceColors,scannedFaceColors:o.scannedFaceColors,frameWidth:E.width,frameHeight:E.height,viewportWidth:M.width,viewportHeight:M.height,active:P}),At.jsx(gC,{visible:o.phase==="colorLearn",stepIndex:o.colorLearnIndex,sample:o.colorLearnSample,ready:o.colorLearnReady,error:o.colorLearnError,onConfirm:u}),At.jsx(CC,{visible:o.phase==="scanReady",feedback:o.detectionFeedback,onStart:h}),At.jsx(rd,{visible:R,scannedFaces:o.scannedFaceColors}),At.jsx(_C,{feedback:o.detectionFeedback,visible:o.phase==="liveScan"}),At.jsx(wC,{phase:o.phase,currentStep:U,totalSteps:k}),At.jsx(yC,{phase:o.phase,knownFaces:o.knownFaces,progress:o.liveScanProgress,needsNewFace:o.detectionFeedback.status==="rotate",needsClearerCenter:o.liveScanNeedsClearerCenter}),At.jsx(RC,{visible:o.phase==="solving"&&!!c,currentMove:c,feedback:o.solvingFeedback,onSkip:_}),o.phase==="solved"&&At.jsx("div",{className:"solved-banner",children:At.jsx("p",{children:"Done"})})]}),F&&At.jsxs(At.Fragment,{children:[At.jsx(rd,{visible:R,scannedFaces:o.scannedFaceColors}),At.jsx(__,{overlay:!0,message:"Computing…"})]}),w&&At.jsx(__,{overlay:!0,message:o.phase==="loading"?"Loading…":"Camera…"}),X&&!w&&At.jsxs("div",{className:"error-screen overlay",children:[At.jsx(rd,{visible:R,scannedFaces:o.scannedFaceColors}),At.jsx("p",{children:o.error??n.error}),At.jsxs("div",{className:"error-actions",children:[o.colorsCalibrated&&At.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),At.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]}),At.jsxs("p",{className:"app-version","aria-hidden":"true",children:["v",Y2]})]})}sM({immediate:!0});nM.createRoot(document.getElementById("root")).render(At.jsx(Xt.StrictMode,{children:At.jsx(j2,{})}));
