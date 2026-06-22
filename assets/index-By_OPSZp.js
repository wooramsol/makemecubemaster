var vS=Object.defineProperty;var _S=(s,t,i)=>t in s?vS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var ke=(s,t,i)=>_S(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var th={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function xS(){if(Bv)return Ao;Bv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:f,ref:o!==void 0?o:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var Iv;function yS(){return Iv||(Iv=1,th.exports=xS()),th.exports}var At=yS(),eh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function SS(){if(Hv)return oe;Hv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function x(L,W,ft){this.props=L,this.context=W,this.refs=M,this.updater=ft||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,W){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,W,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=x.prototype;function U(L,W,ft){this.props=L,this.context=W,this.refs=M,this.updater=ft||E}var w=U.prototype=new P;w.constructor=U,A(w,x.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function D(L,W,ft){var V=ft.ref;return{$$typeof:s,type:L,key:W,ref:V!==void 0?V:null,props:ft}}function C(L,W){return D(L.type,W,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function nt(L){var W={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ft){return W[ft]})}var J=/\/+/g;function lt(L,W){return typeof L=="object"&&L!==null&&L.key!=null?nt(""+L.key):W.toString(36)}function vt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(W){L.status==="pending"&&(L.status="fulfilled",L.value=W)},function(W){L.status==="pending"&&(L.status="rejected",L.reason=W)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,W,ft,V,ut){var St=typeof L;(St==="undefined"||St==="boolean")&&(L=null);var mt=!1;if(L===null)mt=!0;else switch(St){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(L.$$typeof){case s:case t:mt=!0;break;case g:return mt=L._init,O(mt(L._payload),W,ft,V,ut)}}if(mt)return ut=ut(L),mt=V===""?"."+lt(L,0):V,k(ut)?(ft="",mt!=null&&(ft=mt.replace(J,"$&/")+"/"),O(ut,W,ft,"",function(Vt){return Vt})):ut!=null&&(H(ut)&&(ut=C(ut,ft+(ut.key==null||L&&L.key===ut.key?"":(""+ut.key).replace(J,"$&/")+"/")+mt)),W.push(ut)),1;mt=0;var Pt=V===""?".":V+":";if(k(L))for(var Nt=0;Nt<L.length;Nt++)V=L[Nt],St=Pt+lt(V,Nt),mt+=O(V,W,ft,St,ut);else if(Nt=S(L),typeof Nt=="function")for(L=Nt.call(L),Nt=0;!(V=L.next()).done;)V=V.value,St=Pt+lt(V,Nt++),mt+=O(V,W,ft,St,ut);else if(St==="object"){if(typeof L.then=="function")return O(vt(L),W,ft,V,ut);throw W=String(L),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return mt}function $(L,W,ft){if(L==null)return L;var V=[],ut=0;return O(L,V,"","",function(St){return W.call(ft,St,ut++)}),V}function Q(L){if(L._status===-1){var W=L._result;W=W(),W.then(function(ft){(L._status===0||L._status===-1)&&(L._status=1,L._result=ft)},function(ft){(L._status===0||L._status===-1)&&(L._status=2,L._result=ft)}),L._status===-1&&(L._status=0,L._result=W)}if(L._status===1)return L._result.default;throw L._result}var Mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ot={map:$,forEach:function(L,W,ft){$(L,function(){W.apply(this,arguments)},ft)},count:function(L){var W=0;return $(L,function(){W++}),W},toArray:function(L){return $(L,function(W){return W})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return oe.Activity=v,oe.Children=ot,oe.Component=x,oe.Fragment=i,oe.Profiler=o,oe.PureComponent=U,oe.StrictMode=a,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(L,W,ft){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var V=A({},L.props),ut=L.key;if(W!=null)for(St in W.key!==void 0&&(ut=""+W.key),W)!X.call(W,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&W.ref===void 0||(V[St]=W[St]);var St=arguments.length-2;if(St===1)V.children=ft;else if(1<St){for(var mt=Array(St),Pt=0;Pt<St;Pt++)mt[Pt]=arguments[Pt+2];V.children=mt}return D(L.type,ut,V)},oe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},oe.createElement=function(L,W,ft){var V,ut={},St=null;if(W!=null)for(V in W.key!==void 0&&(St=""+W.key),W)X.call(W,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ut[V]=W[V]);var mt=arguments.length-2;if(mt===1)ut.children=ft;else if(1<mt){for(var Pt=Array(mt),Nt=0;Nt<mt;Nt++)Pt[Nt]=arguments[Nt+2];ut.children=Pt}if(L&&L.defaultProps)for(V in mt=L.defaultProps,mt)ut[V]===void 0&&(ut[V]=mt[V]);return D(L,St,ut)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:h,render:L}},oe.isValidElement=H,oe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},oe.memo=function(L,W){return{$$typeof:m,type:L,compare:W===void 0?null:W}},oe.startTransition=function(L){var W=z.T,ft={};z.T=ft;try{var V=L(),ut=z.S;ut!==null&&ut(ft,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(F,Mt)}catch(St){Mt(St)}finally{W!==null&&ft.types!==null&&(W.types=ft.types),z.T=W}},oe.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},oe.use=function(L){return z.H.use(L)},oe.useActionState=function(L,W,ft){return z.H.useActionState(L,W,ft)},oe.useCallback=function(L,W){return z.H.useCallback(L,W)},oe.useContext=function(L){return z.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,W){return z.H.useDeferredValue(L,W)},oe.useEffect=function(L,W){return z.H.useEffect(L,W)},oe.useEffectEvent=function(L){return z.H.useEffectEvent(L)},oe.useId=function(){return z.H.useId()},oe.useImperativeHandle=function(L,W,ft){return z.H.useImperativeHandle(L,W,ft)},oe.useInsertionEffect=function(L,W){return z.H.useInsertionEffect(L,W)},oe.useLayoutEffect=function(L,W){return z.H.useLayoutEffect(L,W)},oe.useMemo=function(L,W){return z.H.useMemo(L,W)},oe.useOptimistic=function(L,W){return z.H.useOptimistic(L,W)},oe.useReducer=function(L,W,ft){return z.H.useReducer(L,W,ft)},oe.useRef=function(L){return z.H.useRef(L)},oe.useState=function(L){return z.H.useState(L)},oe.useSyncExternalStore=function(L,W,ft){return z.H.useSyncExternalStore(L,W,ft)},oe.useTransition=function(){return z.H.useTransition()},oe.version="19.2.7",oe}var Gv;function zd(){return Gv||(Gv=1,eh.exports=SS()),eh.exports}var Gt=zd(),nh={exports:{}},Ro={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function MS(){return Vv||(Vv=1,(function(s){function t(O,$){var Q=O.length;O.push($);t:for(;0<Q;){var Mt=Q-1>>>1,ot=O[Mt];if(0<o(ot,$))O[Mt]=$,O[Q]=ot,Q=Mt;else break t}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var $=O[0],Q=O.pop();if(Q!==$){O[0]=Q;t:for(var Mt=0,ot=O.length,L=ot>>>1;Mt<L;){var W=2*(Mt+1)-1,ft=O[W],V=W+1,ut=O[V];if(0>o(ft,Q))V<ot&&0>o(ut,ft)?(O[Mt]=ut,O[V]=Q,Mt=V):(O[Mt]=ft,O[W]=Q,Mt=W);else if(V<ot&&0>o(ut,Q))O[Mt]=ut,O[V]=Q,Mt=V;else break t}}return $}function o(O,$){var Q=O.sortIndex-$.sortIndex;return Q!==0?Q:O.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,v=null,_=3,S=!1,E=!1,A=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var $=i(m);$!==null;){if($.callback===null)a(m);else if($.startTime<=O)a(m),$.sortIndex=$.expirationTime,t(p,$);else break;$=i(m)}}function k(O){if(A=!1,w(O),!E)if(i(p)!==null)E=!0,F||(F=!0,nt());else{var $=i(m);$!==null&&vt(k,$.startTime-O)}}var F=!1,z=-1,X=5,D=-1;function C(){return M?!0:!(s.unstable_now()-D<X)}function H(){if(M=!1,F){var O=s.unstable_now();D=O;var $=!0;try{t:{E=!1,A&&(A=!1,P(z),z=-1),S=!0;var Q=_;try{e:{for(w(O),v=i(p);v!==null&&!(v.expirationTime>O&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,_=v.priorityLevel;var ot=Mt(v.expirationTime<=O);if(O=s.unstable_now(),typeof ot=="function"){v.callback=ot,w(O),$=!0;break e}v===i(p)&&a(p),w(O)}else a(p);v=i(p)}if(v!==null)$=!0;else{var L=i(m);L!==null&&vt(k,L.startTime-O),$=!1}}break t}finally{v=null,_=Q,S=!1}$=void 0}}finally{$?nt():F=!1}}}var nt;if(typeof U=="function")nt=function(){U(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,lt=J.port2;J.port1.onmessage=H,nt=function(){lt.postMessage(null)}}else nt=function(){x(H,0)};function vt(O,$){z=x(function(){O(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var Q=_;_=$;try{return O()}finally{_=Q}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=_;_=O;try{return $()}finally{_=Q}},s.unstable_scheduleCallback=function(O,$,Q){var Mt=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Mt+Q:Mt):Q=Mt,O){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=Q+ot,O={id:g++,callback:$,priorityLevel:O,startTime:Q,expirationTime:ot,sortIndex:-1},Q>Mt?(O.sortIndex=Q,t(m,O),i(p)===null&&O===i(m)&&(A?(P(z),z=-1):A=!0,vt(k,Q-Mt))):(O.sortIndex=ot,t(p,O),E||S||(E=!0,F||(F=!0,nt()))),O},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(O){var $=_;return function(){var Q=_;_=$;try{return O.apply(this,arguments)}finally{_=Q}}}})(ah)),ah}var kv;function ES(){return kv||(kv=1,ih.exports=MS()),ih.exports}var rh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function TS(){if(Xv)return An;Xv=1;var s=zd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},An.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},An.requestFormReset=function(p){a.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.7",An}var Wv;function bS(){if(Wv)return rh.exports;Wv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),rh.exports=TS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function AS(){if(qv)return Ro;qv=1;var s=ES(),t=zd(),i=bS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===l)return p(u),n;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=d;else{for(var y=!1,T=u.child;T;){if(T===r){y=!0,r=u,l=d;break}if(T===l){y=!0,l=u,r=d;break}T=T.sibling}if(!y){for(T=d.child;T;){if(T===r){y=!0,r=d,l=u;break}if(T===l){y=!0,l=d,r=u;break}T=T.sibling}if(!y)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var vt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},Mt=[],ot=-1;function L(e){return{current:e}}function W(e){0>ot||(e.current=Mt[ot],Mt[ot]=null,ot--)}function ft(e,n){ot++,Mt[ot]=e.current,e.current=n}var V=L(null),ut=L(null),St=L(null),mt=L(null);function Pt(e,n){switch(ft(St,n),ft(ut,e),ft(V,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ov(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ov(n),e=lv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(V),ft(V,e)}function Nt(){W(V),W(ut),W(St)}function Vt(e){e.memoizedState!==null&&ft(mt,e);var n=V.current,r=lv(n,e.type);n!==r&&(ft(ut,e),ft(V,r))}function le(e){ut.current===e&&(W(V),W(ut)),mt.current===e&&(W(mt),Mo._currentValue=Q)}var Le,ee;function I(e){if(Le===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);Le=n&&n[1]||"",ee=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Le+e+ee}var pn=!1;function ie(e,n){if(!e||pn)return"";pn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var it=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){it=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){it=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],T=d[1];if(y&&T){var B=y.split(`
`),et=T.split(`
`);for(u=l=0;l<B.length&&!B[l].includes("DetermineComponentFrameRoot");)l++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(l===B.length||u===et.length)for(l=B.length-1,u=et.length-1;1<=l&&0<=u&&B[l]!==et[u];)u--;for(;1<=l&&0<=u;l--,u--)if(B[l]!==et[u]){if(l!==1||u!==1)do if(l--,u--,0>u||B[l]!==et[u]){var dt=`
`+B[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=u);break}}}finally{pn=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?I(r):""}function de(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return I("Activity");default:return""}}function Wt(e){try{var n="",r=null;do n+=de(e,r),r=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Te=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,b=s.unstable_shouldYield,at=s.unstable_requestPaint,pt=s.unstable_now,Et=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,qt=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,It=s.unstable_setDisableYieldValue,Qt=null,Yt=null;function zt(e){if(typeof bt=="function"&&It(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(Qt,e)}catch{}}var ne=Math.clz32?Math.clz32:Y,ce=Math.log,Pe=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(ce(e)/Pe|0)|0}var wt=256,ht=262144,yt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?u=Rt(l):(y&=T,y!==0?u=Rt(y):r||(r=T&~e,r!==0&&(u=Rt(r))))):(T=l&~d,T!==0?u=Rt(T):y!==0?u=Rt(y):r||(r=l&~e,r!==0&&(u=Rt(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function ae(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ye(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var e=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),e}function Ae(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,r,l,u,d){var y=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,et=e.hiddenUpdates;for(r=y&~r;0<r;){var dt=31-ne(r),xt=1<<dt;T[dt]=0,B[dt]=-1;var it=et[dt];if(it!==null)for(et[dt]=null,dt=0;dt<it.length;dt++){var ct=it[dt];ct!==null&&(ct.lane&=-536870913)}r&=~xt}l!==0&&Ns(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~n))}function Ns(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-ne(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Os(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-ne(r),u=1<<l;u&n|e[l]&n&&(e[l]|=n),r&=~u}}function Ai(e,n){var r=n&-n;return r=(r&42)!==0?1:Ya(r),(r&(e.suspendedLanes|n))!==0?0:r}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:Uv(e.type))}function ja(e,n){var r=$.p;try{return $.p=e,n()}finally{$.p=r}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,xn="__reactProps$"+mi,Pi="__reactContainer$"+mi,Ps="__reactEvents$"+mi,Yc="__reactListeners$"+mi,jc="__reactHandles$"+mi,Zo="__reactResources$"+mi,Za="__reactMarker$"+mi;function Fs(e){delete e[Ke],delete e[xn],delete e[Ps],delete e[Yc],delete e[jc]}function R(e){var n=e[Ke];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Pi]||r[Ke]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=mv(e);e!==null;){if(r=e[Ke])return r;e=mv(e)}return n}e=r,r=e.parentNode}return null}function j(e){if(e=e[Ke]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function st(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[Za]=!0}var Tt=new Set,Ut={};function Ot(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Tt.add(n[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},jt={};function Se(e){return Te.call(jt,e)?!0:Te.call($t,e)?!1:re.test(e)?jt[e]=!0:($t[e]=!0,!1)}function Me(e,n,r){if(Se(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Xe(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Re(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){r=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(y){r=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){if(!e._valueTracker){var n=Kt(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function zn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=Kt(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function mn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fe(e,n,r,l,u,d,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+se(n)):e.value!==""+se(n)&&(e.value=""+se(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?bn(e,y,se(n)):r!=null?bn(e,y,se(r)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+se(T):e.removeAttribute("name")}function Ln(e,n,r,l,u,d,y,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){be(e);return}r=r!=null?""+se(r):"",n=n!=null?""+se(n):r,T||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),be(e)}function bn(e,n,r){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Qe(e,n,r,l){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,r){if(n!=null&&(n=""+se(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+se(r):""}function Cr(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(vt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=se(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),be(e)}function Pn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var hx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||hx.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function rp(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&r[u]!==l&&ap(e,u,l)}else for(var d in n)n.hasOwnProperty(d)&&ap(e,d,n[d])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),px=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return px.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function sp(e){var n=j(e);if(n&&(e=n.stateNode)){var r=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fe(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var u=l[xn]||null;if(!u)throw Error(a(90));Fe(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&zn(l)}break t;case"textarea":yn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&Qe(e,!!r.multiple,n,!1)}}}var Jc=!1;function op(e,n,r){if(Jc)return e(n,r);Jc=!0;try{var l=e(n);return l}finally{if(Jc=!1,(wr!==null||Dr!==null)&&(Fl(),wr&&(n=wr,e=Dr,Dr=wr=null,sp(n),e)))for(n=0;n<e.length;n++)sp(e[n])}}function Bs(e,n){var r=e.stateNode;if(r===null)return null;var l=r[xn]||null;if(l===null)return null;r=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Bi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{$c=!1}var ha=null,tu=null,Qo=null;function lp(){if(Qo)return Qo;var e,n=tu,r=n.length,l,u="value"in ha?ha.value:ha.textContent,d=u.length;for(e=0;e<r&&n[e]===u[e];e++);var y=r-e;for(l=1;l<=y&&n[r-l]===u[d-l];l++);return Qo=u.slice(e,1<l?1-l:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function cp(){return!1}function Fn(e){function n(r,l,u,d,y){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(r=e[T],this[T]=r?r(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?$o:cp,this.isPropagationStopped=cp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Fn(Ka),Hs=v({},Ka,{view:0,detail:0}),mx=Fn(Hs),eu,nu,Gs,el=v({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(eu=e.screenX-Gs.screenX,nu=e.screenY-Gs.screenY):nu=eu=0,Gs=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),up=Fn(el),gx=v({},el,{dataTransfer:0}),vx=Fn(gx),_x=v({},Hs,{relatedTarget:0}),iu=Fn(_x),xx=v({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Fn(xx),Sx=v({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mx=Fn(Sx),Ex=v({},Ka,{data:0}),fp=Fn(Ex),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ax[e])?!!n[e]:!1}function au(){return Rx}var Cx=v({},Hs,{key:function(e){if(e.key){var n=Tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wx=Fn(Cx),Dx=v({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Fn(Dx),Ux=v({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Lx=Fn(Ux),Nx=v({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=Fn(Nx),zx=v({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Fn(zx),Fx=v({},Ka,{newState:0,oldState:0}),Bx=Fn(Fx),Ix=[9,13,27,32],ru=Bi&&"CompositionEvent"in window,Vs=null;Bi&&"documentMode"in document&&(Vs=document.documentMode);var Hx=Bi&&"TextEvent"in window&&!Vs,dp=Bi&&(!ru||Vs&&8<Vs&&11>=Vs),pp=" ",mp=!1;function gp(e,n){switch(e){case"keyup":return Ix.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Gx(e,n){switch(e){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return e=n.data,e===pp&&mp?null:e;default:return null}}function Vx(e,n){if(Ur)return e==="compositionend"||!ru&&gp(e,n)?(e=lp(),Qo=tu=ha=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kx[e.type]:n==="textarea"}function xp(e,n,r,l){wr?Dr?Dr.push(l):Dr=[l]:wr=l,n=Xl(n,"onChange"),0<n.length&&(r=new tl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var ks=null,Xs=null;function Xx(e){ev(e,0)}function nl(e){var n=rt(e);if(zn(n))return e}function yp(e,n){if(e==="change")return n}var Sp=!1;if(Bi){var su;if(Bi){var ou="oninput"in document;if(!ou){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),ou=typeof Mp.oninput=="function"}su=ou}else su=!1;Sp=su&&(!document.documentMode||9<document.documentMode)}function Ep(){ks&&(ks.detachEvent("onpropertychange",Tp),Xs=ks=null)}function Tp(e){if(e.propertyName==="value"&&nl(Xs)){var n=[];xp(n,Xs,e,Qc(e)),op(Xx,n)}}function Wx(e,n,r){e==="focusin"?(Ep(),ks=n,Xs=r,ks.attachEvent("onpropertychange",Tp)):e==="focusout"&&Ep()}function qx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Xs)}function Yx(e,n){if(e==="click")return nl(n)}function jx(e,n){if(e==="input"||e==="change")return nl(n)}function Zx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Zx;function Ws(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!Te.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,n){var r=bp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=bp(r)}}function Rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=gi(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kx=Bi&&"documentMode"in document&&11>=document.documentMode,Lr=null,cu=null,qs=null,uu=!1;function wp(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;uu||Lr==null||Lr!==gi(l)||(l=Lr,"selectionStart"in l&&lu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qs&&Ws(qs,l)||(qs=l,l=Xl(cu,"onSelect"),0<l.length&&(n=new tl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=Lr)))}function Qa(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Nr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},fu={},Dp={};Bi&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ja(e){if(fu[e])return fu[e];if(!Nr[e])return e;var n=Nr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Dp)return fu[e]=n[r];return e}var Up=Ja("animationend"),Lp=Ja("animationiteration"),Np=Ja("animationstart"),Qx=Ja("transitionrun"),Jx=Ja("transitionstart"),$x=Ja("transitioncancel"),Op=Ja("transitionend"),zp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function vi(e,n){zp.set(e,n),Ot(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Or=0,du=0;function al(){for(var e=Or,n=du=Or=0;n<e;){var r=ni[n];ni[n++]=null;var l=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,l!==null&&u!==null){var y=l.pending;y===null?u.next=u:(u.next=y.next,y.next=u),l.pending=u}d!==0&&Pp(r,u,d)}}function rl(e,n,r,l){ni[Or++]=e,ni[Or++]=n,ni[Or++]=r,ni[Or++]=l,du|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pu(e,n,r,l){return rl(e,n,r,l),sl(e)}function $a(e,n){return rl(e,null,null,n),sl(e)}function Pp(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-ne(r),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=r|536870912),d):null}function sl(e){if(50<mo)throw mo=0,Tf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function ty(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,r,l){return new ty(e,n,r,l)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var r=e.alternate;return r===null?(r=Yn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Fp(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,r,l,u,d){var y=0;if(l=e,typeof e=="function")mu(e)&&(y=1);else if(typeof e=="string")y=rS(e,r,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,r,n,u),e.elementType=D,e.lanes=d,e;case A:return tr(r.children,u,d,n);case M:y=8,u|=24;break;case x:return e=Yn(12,r,n,u|2),e.elementType=x,e.lanes=d,e;case k:return e=Yn(13,r,n,u),e.elementType=k,e.lanes=d,e;case F:return e=Yn(19,r,n,u),e.elementType=F,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case P:y=9;break t;case w:y=11;break t;case z:y=14;break t;case X:y=16,l=null;break t}y=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Yn(y,r,n,u),n.elementType=e,n.type=l,n.lanes=d,n}function tr(e,n,r,l){return e=Yn(7,e,l,n),e.lanes=r,e}function gu(e,n,r){return e=Yn(6,e,null,n),e.lanes=r,e}function Bp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function vu(e,n,r){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ip=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var r=Ip.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Wt(n)},Ip.set(e,n),n)}return{value:e,source:n,stack:Wt(n)}}var Pr=[],Fr=0,ll=null,Ys=0,ai=[],ri=0,da=null,Ri=1,Ci="";function Hi(e,n){Pr[Fr++]=Ys,Pr[Fr++]=ll,ll=e,Ys=n}function Hp(e,n,r){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=da,da=e;var l=Ri;e=Ci;var u=32-ne(l)-1;l&=~(1<<u),r+=1;var d=32-ne(n)+u;if(30<d){var y=u-u%5;d=(l&(1<<y)-1).toString(32),l>>=y,u-=y,Ri=1<<32-ne(n)+u|r<<u|l,Ci=d+e}else Ri=1<<d|r<<u|l,Ci=e}function _u(e){e.return!==null&&(Hi(e,1),Hp(e,1,0))}function xu(e){for(;e===ll;)ll=Pr[--Fr],Pr[Fr]=null,Ys=Pr[--Fr],Pr[Fr]=null;for(;e===da;)da=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null}function Gp(e,n){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=da,Ri=n.id,Ci=n.overflow,da=e}var Sn=null,We=null,Ee=!1,pa=null,si=!1,yu=Error(a(519));function ma(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw js(ii(n,e)),yu}function Vp(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[Ke]=e,n[xn]=l,r){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(r=0;r<vo.length;r++)ge(vo[r],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ln(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Cr(n,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||rv(n.textContent,r)?(l.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),l.onScroll!=null&&ge("scroll",n),l.onScrollEnd!=null&&ge("scrollend",n),l.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||ma(e,!0)}function kp(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Sn=Sn.return}}function Br(e){if(e!==Sn)return!1;if(!Ee)return kp(e),Ee=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||If(e.type,e.memoizedProps)),r=!r),r&&We&&ma(e),kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=pv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));We=pv(e)}else n===27?(n=We,wa(e.type)?(e=Xf,Xf=null,We=e):We=n):We=Sn?li(e.stateNode.nextSibling):null;return!0}function er(){We=Sn=null,Ee=!1}function Su(){var e=pa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),pa=null),e}function js(e){pa===null?pa=[e]:pa.push(e)}var Mu=L(null),nr=null,Gi=null;function ga(e,n,r){ft(Mu,n._currentValue),n._currentValue=r}function Vi(e){e._currentValue=Mu.current,W(Mu)}function Eu(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Tu(e,n,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){d.lanes|=r,T=d.alternate,T!==null&&(T.lanes|=r),Eu(d.return,r,e),l||(y=null);break t}d=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=r,d=y.alternate,d!==null&&(d.lanes|=r),Eu(y,r,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Ir(e,n,r,l){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var T=u.type;qn(u.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(u===mt.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Tu(n,e,r,l),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Xp(nr,e)}function ul(e,n){return nr===null&&ir(e),Xp(e,n)}function Xp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Gi===null){if(e===null)throw Error(a(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return r}var ey=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},ny=s.unstable_scheduleCallback,iy=s.unstable_NormalPriority,an={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new ey,data:new Map,refCount:0}}function Zs(e){e.refCount--,e.refCount===0&&ny(iy,function(){e.controller.abort()})}var Ks=null,Au=0,Hr=0,Gr=null;function ay(e,n){if(Ks===null){var r=Ks=[];Au=0,Hr=Df(),Gr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Au++,n.then(Wp,Wp),n}function Wp(){if(--Au===0&&Ks!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ks;Ks=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ry(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var qp=O.S;O.S=function(e,n){wg=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ay(e,n),qp!==null&&qp(e,n)};var ar=L(null);function Ru(){var e=ar.current;return e!==null?e:Ve.pooledCache}function fl(e,n){n===null?ft(ar,ar.current):ft(ar,n.pool)}function Yp(){var e=Ru();return e===null?null:{parent:an._currentValue,pool:e}}var Vr=Error(a(460)),Cu=Error(a(474)),hl=Error(a(542)),dl={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Fi,Fi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e}throw sr=n,Vr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(sr=r,Vr):r}}var sr=null;function Kp(){if(sr===null)throw Error(a(459));var e=sr;return sr=null,e}function Qp(e){if(e===Vr||e===hl)throw Error(a(483))}var kr=null,Qs=0;function pl(e){var n=Qs;return Qs+=1,kr===null&&(kr=[]),Zp(kr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){function n(Z,G){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[G],Z.flags|=16):tt.push(G)}}function r(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function l(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function u(Z,G){return Z=Ii(Z,G),Z.index=0,Z.sibling=null,Z}function d(Z,G,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<G?(Z.flags|=67108866,G):tt):(Z.flags|=67108866,G)):(Z.flags|=1048576,G)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,G,tt,gt){return G===null||G.tag!==6?(G=gu(tt,Z.mode,gt),G.return=Z,G):(G=u(G,tt),G.return=Z,G)}function B(Z,G,tt,gt){var Zt=tt.type;return Zt===A?dt(Z,G,tt.props.children,gt,tt.key):G!==null&&(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===X&&rr(Zt)===G.type)?(G=u(G,tt.props),Js(G,tt),G.return=Z,G):(G=ol(tt.type,tt.key,tt.props,null,Z.mode,gt),Js(G,tt),G.return=Z,G)}function et(Z,G,tt,gt){return G===null||G.tag!==4||G.stateNode.containerInfo!==tt.containerInfo||G.stateNode.implementation!==tt.implementation?(G=vu(tt,Z.mode,gt),G.return=Z,G):(G=u(G,tt.children||[]),G.return=Z,G)}function dt(Z,G,tt,gt,Zt){return G===null||G.tag!==7?(G=tr(tt,Z.mode,gt,Zt),G.return=Z,G):(G=u(G,tt),G.return=Z,G)}function xt(Z,G,tt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gu(""+G,Z.mode,tt),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return tt=ol(G.type,G.key,G.props,null,Z.mode,tt),Js(tt,G),tt.return=Z,tt;case E:return G=vu(G,Z.mode,tt),G.return=Z,G;case X:return G=rr(G),xt(Z,G,tt)}if(vt(G)||nt(G))return G=tr(G,Z.mode,tt,null),G.return=Z,G;if(typeof G.then=="function")return xt(Z,pl(G),tt);if(G.$$typeof===U)return xt(Z,ul(Z,G),tt);ml(Z,G)}return null}function it(Z,G,tt,gt){var Zt=G!==null?G.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Zt!==null?null:T(Z,G,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===Zt?B(Z,G,tt,gt):null;case E:return tt.key===Zt?et(Z,G,tt,gt):null;case X:return tt=rr(tt),it(Z,G,tt,gt)}if(vt(tt)||nt(tt))return Zt!==null?null:dt(Z,G,tt,gt,null);if(typeof tt.then=="function")return it(Z,G,pl(tt),gt);if(tt.$$typeof===U)return it(Z,G,ul(Z,tt),gt);ml(Z,tt)}return null}function ct(Z,G,tt,gt,Zt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(tt)||null,T(G,Z,""+gt,Zt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return Z=Z.get(gt.key===null?tt:gt.key)||null,B(G,Z,gt,Zt);case E:return Z=Z.get(gt.key===null?tt:gt.key)||null,et(G,Z,gt,Zt);case X:return gt=rr(gt),ct(Z,G,tt,gt,Zt)}if(vt(gt)||nt(gt))return Z=Z.get(tt)||null,dt(G,Z,gt,Zt,null);if(typeof gt.then=="function")return ct(Z,G,tt,pl(gt),Zt);if(gt.$$typeof===U)return ct(Z,G,tt,ul(G,gt),Zt);ml(G,gt)}return null}function Ht(Z,G,tt,gt){for(var Zt=null,Ce=null,kt=G,fe=G=0,ye=null;kt!==null&&fe<tt.length;fe++){kt.index>fe?(ye=kt,kt=null):ye=kt.sibling;var we=it(Z,kt,tt[fe],gt);if(we===null){kt===null&&(kt=ye);break}e&&kt&&we.alternate===null&&n(Z,kt),G=d(we,G,fe),Ce===null?Zt=we:Ce.sibling=we,Ce=we,kt=ye}if(fe===tt.length)return r(Z,kt),Ee&&Hi(Z,fe),Zt;if(kt===null){for(;fe<tt.length;fe++)kt=xt(Z,tt[fe],gt),kt!==null&&(G=d(kt,G,fe),Ce===null?Zt=kt:Ce.sibling=kt,Ce=kt);return Ee&&Hi(Z,fe),Zt}for(kt=l(kt);fe<tt.length;fe++)ye=ct(kt,Z,fe,tt[fe],gt),ye!==null&&(e&&ye.alternate!==null&&kt.delete(ye.key===null?fe:ye.key),G=d(ye,G,fe),Ce===null?Zt=ye:Ce.sibling=ye,Ce=ye);return e&&kt.forEach(function(Oa){return n(Z,Oa)}),Ee&&Hi(Z,fe),Zt}function Jt(Z,G,tt,gt){if(tt==null)throw Error(a(151));for(var Zt=null,Ce=null,kt=G,fe=G=0,ye=null,we=tt.next();kt!==null&&!we.done;fe++,we=tt.next()){kt.index>fe?(ye=kt,kt=null):ye=kt.sibling;var Oa=it(Z,kt,we.value,gt);if(Oa===null){kt===null&&(kt=ye);break}e&&kt&&Oa.alternate===null&&n(Z,kt),G=d(Oa,G,fe),Ce===null?Zt=Oa:Ce.sibling=Oa,Ce=Oa,kt=ye}if(we.done)return r(Z,kt),Ee&&Hi(Z,fe),Zt;if(kt===null){for(;!we.done;fe++,we=tt.next())we=xt(Z,we.value,gt),we!==null&&(G=d(we,G,fe),Ce===null?Zt=we:Ce.sibling=we,Ce=we);return Ee&&Hi(Z,fe),Zt}for(kt=l(kt);!we.done;fe++,we=tt.next())we=ct(kt,Z,fe,we.value,gt),we!==null&&(e&&we.alternate!==null&&kt.delete(we.key===null?fe:we.key),G=d(we,G,fe),Ce===null?Zt=we:Ce.sibling=we,Ce=we);return e&&kt.forEach(function(gS){return n(Z,gS)}),Ee&&Hi(Z,fe),Zt}function He(Z,G,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===A&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var Zt=tt.key;G!==null;){if(G.key===Zt){if(Zt=tt.type,Zt===A){if(G.tag===7){r(Z,G.sibling),gt=u(G,tt.props.children),gt.return=Z,Z=gt;break t}}else if(G.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===X&&rr(Zt)===G.type){r(Z,G.sibling),gt=u(G,tt.props),Js(gt,tt),gt.return=Z,Z=gt;break t}r(Z,G);break}else n(Z,G);G=G.sibling}tt.type===A?(gt=tr(tt.props.children,Z.mode,gt,tt.key),gt.return=Z,Z=gt):(gt=ol(tt.type,tt.key,tt.props,null,Z.mode,gt),Js(gt,tt),gt.return=Z,Z=gt)}return y(Z);case E:t:{for(Zt=tt.key;G!==null;){if(G.key===Zt)if(G.tag===4&&G.stateNode.containerInfo===tt.containerInfo&&G.stateNode.implementation===tt.implementation){r(Z,G.sibling),gt=u(G,tt.children||[]),gt.return=Z,Z=gt;break t}else{r(Z,G);break}else n(Z,G);G=G.sibling}gt=vu(tt,Z.mode,gt),gt.return=Z,Z=gt}return y(Z);case X:return tt=rr(tt),He(Z,G,tt,gt)}if(vt(tt))return Ht(Z,G,tt,gt);if(nt(tt)){if(Zt=nt(tt),typeof Zt!="function")throw Error(a(150));return tt=Zt.call(tt),Jt(Z,G,tt,gt)}if(typeof tt.then=="function")return He(Z,G,pl(tt),gt);if(tt.$$typeof===U)return He(Z,G,ul(Z,tt),gt);ml(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,G!==null&&G.tag===6?(r(Z,G.sibling),gt=u(G,tt),gt.return=Z,Z=gt):(r(Z,G),gt=gu(tt,Z.mode,gt),gt.return=Z,Z=gt),y(Z)):r(Z,G)}return function(Z,G,tt,gt){try{Qs=0;var Zt=He(Z,G,tt,gt);return kr=null,Zt}catch(kt){if(kt===Vr||kt===hl)throw kt;var Ce=Yn(29,kt,null,Z.mode);return Ce.lanes=gt,Ce.return=Z,Ce}finally{}}}var or=Jp(!0),$p=Jp(!1),va=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=sl(e),Pp(e,null,r),n}return rl(e,l,n,r),sl(e)}function $s(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Os(e,r)}}function Uu(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var y={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Lu=!1;function to(){if(Lu){var e=Gr;if(e!==null)throw e}}function eo(e,n,r,l){Lu=!1;var u=e.updateQueue;va=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,et=B.next;B.next=null,y===null?d=et:y.next=et,y=B;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,T=dt.lastBaseUpdate,T!==y&&(T===null?dt.firstBaseUpdate=et:T.next=et,dt.lastBaseUpdate=B))}if(d!==null){var xt=u.baseState;y=0,dt=et=B=null,T=d;do{var it=T.lane&-536870913,ct=it!==T.lane;if(ct?(xe&it)===it:(l&it)===it){it!==0&&it===Hr&&(Lu=!0),dt!==null&&(dt=dt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ht=e,Jt=T;it=n;var He=r;switch(Jt.tag){case 1:if(Ht=Jt.payload,typeof Ht=="function"){xt=Ht.call(He,xt,it);break t}xt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Jt.payload,it=typeof Ht=="function"?Ht.call(He,xt,it):Ht,it==null)break t;xt=v({},xt,it);break t;case 2:va=!0}}it=T.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},dt===null?(et=dt=ct,B=xt):dt=dt.next=ct,y|=it;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(B=xt),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),Ta|=y,e.lanes=y,e.memoizedState=xt}}function tm(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function em(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)tm(r[e],n)}var Xr=L(null),gl=L(0);function nm(e,n){e=Qi,ft(gl,e),ft(Xr,n),Qi=e|n.baseLanes}function Nu(){ft(gl,Qi),ft(Xr,Xr.current)}function Ou(){Qi=gl.current,W(Xr),W(gl)}var jn=L(null),oi=null;function ya(e){var n=e.alternate;ft(en,en.current&1),ft(jn,e),oi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(oi=e)}function zu(e){ft(en,en.current),ft(jn,e),oi===null&&(oi=e)}function im(e){e.tag===22?(ft(en,en.current),ft(jn,e),oi===null&&(oi=e)):Sa()}function Sa(){ft(en,en.current),ft(jn,jn.current)}function Zn(e){W(jn),oi===e&&(oi=null),W(en)}var en=L(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Vf(r)||kf(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,ue=null,Be=null,rn=null,_l=!1,Wr=!1,lr=!1,xl=0,no=0,qr=null,sy=0;function Je(){throw Error(a(321))}function Pu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!qn(e[r],n[r]))return!1;return!0}function Fu(e,n,r,l,u,d){return ki=d,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Hm:Ju,lr=!1,d=r(l,u),lr=!1,Wr&&(d=rm(n,r,l,u)),am(e),d}function am(e){O.H=ro;var n=Be!==null&&Be.next!==null;if(ki=0,rn=Be=ue=null,_l=!1,no=0,qr=null,n)throw Error(a(300));e===null||sn||(e=e.dependencies,e!==null&&cl(e)&&(sn=!0))}function rm(e,n,r,l){ue=e;var u=0;do{if(Wr&&(qr=null),no=0,Wr=!1,25<=u)throw Error(a(301));if(u+=1,rn=Be=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Gm,d=n(r,l)}while(Wr);return d}function oy(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ue.flags|=1024),n}function Bu(){var e=xl!==0;return xl=0,e}function Iu(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Hu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ki=0,rn=Be=ue=null,Wr=!1,no=xl=0,qr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ue.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(Be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=rn===null?ue.memoizedState:rn.next;if(n!==null)rn=n,Be=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},rn===null?ue.memoizedState=rn=e:rn=rn.next=e}return rn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,qr===null&&(qr=[]),e=Zp(qr,e,n),n=ue,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Hm:Ju),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===U)return Mn(e)}throw Error(a(438,String(e)))}function Gu(e){var n=null,r=ue.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=yl(),ue.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=C;return n.index++,r}function Xi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=nn();return Vu(n,Be,e)}function Vu(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}n.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var T=y=null,B=null,et=n,dt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(xe&xt)===xt:(ki&xt)===xt){var it=et.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Hr&&(dt=!0);else if((ki&it)===it){et=et.next,it===Hr&&(dt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(T=B=xt,y=d):B=B.next=xt,ue.lanes|=it,Ta|=it;xt=et.action,lr&&r(d,xt),d=et.hasEagerState?et.eagerState:r(d,xt)}else it={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(T=B=it,y=d):B=B.next=it,ue.lanes|=xt,Ta|=xt;et=et.next}while(et!==null&&et!==n);if(B===null?y=d:B.next=T,!qn(d,e.memoizedState)&&(sn=!0,dt&&(r=Gr,r!==null)))throw r;e.memoizedState=d,e.baseState=y,e.baseQueue=B,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ku(e){var n=nn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);qn(d,n.memoizedState)||(sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,l]}function sm(e,n,r){var l=ue,u=nn(),d=Ee;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var y=!qn((Be||u).memoizedState,r);if(y&&(u.memoizedState=r,sn=!0),u=u.queue,qu(cm.bind(null,l,u,e),[e]),u.getSnapshot!==n||y||rn!==null&&rn.memoizedState.tag&1){if(l.flags|=2048,Yr(9,{destroy:void 0},lm.bind(null,l,u,r,n),null),Ve===null)throw Error(a(349));d||(ki&127)!==0||om(l,n,r)}return r}function om(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ue.updateQueue,n===null?(n=yl(),ue.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function lm(e,n,r,l){n.value=r,n.getSnapshot=l,um(n)&&fm(e)}function cm(e,n,r){return r(function(){um(n)&&fm(e)})}function um(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!qn(e,r)}catch{return!0}}function fm(e){var n=$a(e,2);n!==null&&Vn(n,e,2)}function Xu(e){var n=Nn();if(typeof e=="function"){var r=e;if(e=r(),lr){zt(!0);try{r()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function hm(e,n,r,l){return e.baseState=r,Vu(e,Be,typeof l=="function"?l:Xi)}function ly(e,n,r,l,u){if(bl(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};O.T!==null?r(!0):d.isTransition=!1,l(d),r=n.pending,r===null?(d.next=n.pending=d,dm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function dm(e,n){var r=n.action,l=n.payload,u=e.state;if(n.isTransition){var d=O.T,y={};O.T=y;try{var T=r(u,l),B=O.S;B!==null&&B(y,T),pm(e,n,T)}catch(et){Wu(e,n,et)}finally{d!==null&&y.types!==null&&(d.types=y.types),O.T=d}}else try{d=r(u,l),pm(e,n,d)}catch(et){Wu(e,n,et)}}function pm(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){mm(e,n,l)},function(l){return Wu(e,n,l)}):mm(e,n,r)}function mm(e,n,r){n.status="fulfilled",n.value=r,gm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,dm(e,r)))}function Wu(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,gm(n),n=n.next;while(n!==l)}e.action=null}function gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vm(e,n){return n}function _m(e,n){if(Ee){var r=Ve.formState;if(r!==null){t:{var l=ue;if(Ee){if(We){e:{for(var u=We,d=si;u.nodeType!==8;){if(!d){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){We=li(u.nextSibling),l=u.data==="F!";break t}}ma(l)}l=!1}l&&(n=r[0])}}return r=Nn(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},r.queue=l,r=Fm.bind(null,ue,l),l.dispatch=r,l=Xu(!1),d=Qu.bind(null,ue,!1,l.queue),l=Nn(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,r=ly.bind(null,ue,u,d,r),u.dispatch=r,l.memoizedState=e,[n,r,!1]}function xm(e){var n=nn();return ym(n,Be,e)}function ym(e,n,r){if(n=Vu(e,n,vm)[0],e=Ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=io(n)}catch(y){throw y===Vr?hl:y}else l=n;n=nn();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(ue.flags|=2048,Yr(9,{destroy:void 0},cy.bind(null,u,r),null)),[l,d,e]}function cy(e,n){e.action=n}function Sm(e){var n=nn(),r=Be;if(r!==null)return ym(n,r,e);nn(),n=n.memoizedState,r=nn();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function Yr(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=ue.updateQueue,n===null&&(n=yl(),ue.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function Mm(){return nn().memoizedState}function El(e,n,r,l){var u=Nn();ue.flags|=e,u.memoizedState=Yr(1|n,{destroy:void 0},r,l===void 0?null:l)}function Tl(e,n,r,l){var u=nn();l=l===void 0?null:l;var d=u.memoizedState.inst;Be!==null&&l!==null&&Pu(l,Be.memoizedState.deps)?u.memoizedState=Yr(n,d,r,l):(ue.flags|=e,u.memoizedState=Yr(1|n,d,r,l))}function Em(e,n){El(8390656,8,e,n)}function qu(e,n){Tl(2048,8,e,n)}function uy(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=yl(),ue.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function Tm(e){var n=nn().memoizedState;return uy({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function bm(e,n){return Tl(4,2,e,n)}function Am(e,n){return Tl(4,4,e,n)}function Rm(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cm(e,n,r){r=r!=null?r.concat([e]):null,Tl(4,4,Rm.bind(null,n,e),r)}function Yu(){}function wm(e,n){var r=nn();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&Pu(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function Dm(e,n){var r=nn();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&Pu(n,l[1]))return l[0];if(l=e(),lr){zt(!0);try{e()}finally{zt(!1)}}return r.memoizedState=[l,n],l}function ju(e,n,r){return r===void 0||(ki&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=Ug(),ue.lanes|=e,Ta|=e,r)}function Um(e,n,r,l){return qn(r,n)?r:Xr.current!==null?(e=ju(e,r,l),qn(e,n)||(sn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(xe&261930)===0?(sn=!0,e.memoizedState=r):(e=Ug(),ue.lanes|=e,Ta|=e,n)}function Lm(e,n,r,l,u){var d=$.p;$.p=d!==0&&8>d?d:8;var y=O.T,T={};O.T=T,Qu(e,!1,n,r);try{var B=u(),et=O.S;if(et!==null&&et(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var dt=ry(B,l);ao(e,n,dt,Jn(e))}else ao(e,n,l,Jn(e))}catch(xt){ao(e,n,{then:function(){},status:"rejected",reason:xt},Jn())}finally{$.p=d,y!==null&&T.types!==null&&(y.types=T.types),O.T=y}}function fy(){}function Zu(e,n,r,l){if(e.tag!==5)throw Error(a(476));var u=Nm(e).queue;Lm(e,u,n,Q,r===null?fy:function(){return Om(e),r(l)})}function Nm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Q},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Om(e){var n=Nm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},Jn())}function Ku(){return Mn(Mo)}function zm(){return nn().memoizedState}function Pm(){return nn().memoizedState}function hy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Jn();e=_a(r);var l=xa(n,e,r);l!==null&&(Vn(l,n,r),$s(l,n,r)),n={cache:bu()},e.payload=n;return}n=n.return}}function dy(e,n,r){var l=Jn();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bl(e)?Bm(n,r):(r=pu(e,n,r,l),r!==null&&(Vn(r,e,l),Im(r,n,l)))}function Fm(e,n,r){var l=Jn();ao(e,n,r,l)}function ao(e,n,r,l){var u={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Bm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,T=d(y,r);if(u.hasEagerState=!0,u.eagerState=T,qn(T,y))return rl(e,n,u,0),Ve===null&&al(),!1}catch{}finally{}if(r=pu(e,n,u,l),r!==null)return Vn(r,e,l),Im(r,n,l),!0}return!1}function Qu(e,n,r,l){if(l={lane:2,revertLane:Df(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(a(479))}else n=pu(e,r,l,2),n!==null&&Vn(n,e,2)}function bl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Bm(e,n){Wr=_l=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Im(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,Os(e,r)}}var ro={readContext:Mn,use:Sl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ro.useEffectEvent=Je;var Hm={readContext:Mn,use:Sl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Em,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,El(4194308,4,Rm.bind(null,n,e),r)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var r=Nn();n=n===void 0?null:n;var l=e();if(lr){zt(!0);try{e()}finally{zt(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=Nn();if(r!==void 0){var u=r(n);if(lr){zt(!0);try{r(n)}finally{zt(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=dy.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,r=Fm.bind(null,ue,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Yu,useDeferredValue:function(e,n){var r=Nn();return ju(r,e,n)},useTransition:function(){var e=Xu(!1);return e=Lm.bind(null,ue,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=ue,u=Nn();if(Ee){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Ve===null)throw Error(a(349));(xe&127)!==0||om(l,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,Em(cm.bind(null,l,d,e),[e]),l.flags|=2048,Yr(9,{destroy:void 0},lm.bind(null,l,d,r,n),null),r},useId:function(){var e=Nn(),n=Ve.identifierPrefix;if(Ee){var r=Ci,l=Ri;r=(l&~(1<<32-ne(l)-1)).toString(32)+r,n="_"+n+"R_"+r,r=xl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=sy++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:_m,useActionState:_m,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Qu.bind(null,ue,!0,r),r.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return Nn().memoizedState=hy.bind(null,ue)},useEffectEvent:function(e){var n=Nn(),r={impl:e};return n.memoizedState=r,function(){if((Ue&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Ju={readContext:Mn,use:Sl,useCallback:wm,useContext:Mn,useEffect:qu,useImperativeHandle:Cm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ml,useRef:Mm,useState:function(){return Ml(Xi)},useDebugValue:Yu,useDeferredValue:function(e,n){var r=nn();return Um(r,Be.memoizedState,e,n)},useTransition:function(){var e=Ml(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:sm,useId:zm,useHostTransitionStatus:Ku,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var r=nn();return hm(r,Be,e,n)},useMemoCache:Gu,useCacheRefresh:Pm};Ju.useEffectEvent=Tm;var Gm={readContext:Mn,use:Sl,useCallback:wm,useContext:Mn,useEffect:qu,useImperativeHandle:Cm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Dm,useReducer:ku,useRef:Mm,useState:function(){return ku(Xi)},useDebugValue:Yu,useDeferredValue:function(e,n){var r=nn();return Be===null?ju(r,e,n):Um(r,Be.memoizedState,e,n)},useTransition:function(){var e=ku(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:sm,useId:zm,useHostTransitionStatus:Ku,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var r=nn();return Be!==null?hm(r,Be,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Pm};Gm.useEffectEvent=Tm;function $u(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:v({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var tf={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=Jn(),u=_a(l);u.payload=n,r!=null&&(u.callback=r),n=xa(e,u,l),n!==null&&(Vn(n,e,l),$s(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=Jn(),u=_a(l);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=xa(e,u,l),n!==null&&(Vn(n,e,l),$s(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Jn(),l=_a(r);l.tag=2,n!=null&&(l.callback=n),n=xa(e,l,r),n!==null&&(Vn(n,e,r),$s(n,e,r))}};function Vm(e,n,r,l,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ws(r,l)||!Ws(u,d):!0}function km(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function cr(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=v({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function Xm(e){il(e)}function Wm(e){console.error(e)}function qm(e){il(e)}function Al(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Ym(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,n,r){return r=_a(r),r.tag=3,r.payload={element:null},r.callback=function(){Al(e,n)},r}function jm(e){return e=_a(e),e.tag=3,e}function Zm(e,n,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){Ym(n,r,l)}}var y=r.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Ym(n,r,l),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function py(e,n,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&Ir(n,r,u,!0),r=jn.current,r!==null){switch(r.tag){case 31:case 13:return oi===null?Bl():r.alternate===null&&$e===0&&($e=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===dl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Rf(e,l,u)),!1;case 22:return r.flags|=65536,l===dl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Rf(e,l,u)),!1}throw Error(a(435,r.tag))}return Rf(e,l,u),Bl(),!1}if(Ee)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==yu&&(e=Error(a(422),{cause:l}),js(ii(e,r)))):(l!==yu&&(n=Error(a(423),{cause:l}),js(ii(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=ii(l,r),u=ef(e.stateNode,l,u),Uu(e,u),$e!==4&&($e=2)),!1;var d=Error(a(520),{cause:l});if(d=ii(d,r),po===null?po=[d]:po.push(d),$e!==4&&($e=2),n===null)return!0;l=ii(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=ef(r.stateNode,l,e),Uu(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ba===null||!ba.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=jm(u),Zm(u,e,r,l),Uu(r,u),!1}r=r.return}while(r!==null);return!1}var nf=Error(a(461)),sn=!1;function En(e,n,r,l){n.child=e===null?$p(n,null,r,l):or(n,e.child,r,l)}function Km(e,n,r,l,u){r=r.render;var d=n.ref;if("ref"in l){var y={};for(var T in l)T!=="ref"&&(y[T]=l[T])}else y=l;return ir(n),l=Fu(e,n,r,y,d,u),T=Bu(),e!==null&&!sn?(Iu(e,n,u),Wi(e,n,u)):(Ee&&T&&_u(n),n.flags|=1,En(e,n,l,u),n.child)}function Qm(e,n,r,l,u){if(e===null){var d=r.type;return typeof d=="function"&&!mu(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,Jm(e,n,d,l,u)):(e=ol(r.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!ff(e,u)){var y=d.memoizedProps;if(r=r.compare,r=r!==null?r:Ws,r(y,l)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Ii(d,l),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,r,l,u){if(e!==null){var d=e.memoizedProps;if(Ws(d,l)&&e.ref===n.ref)if(sn=!1,n.pendingProps=l=d,ff(e,u))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return af(e,n,r,l,u)}function $m(e,n,r,l){var u=l.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=n.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,n.child=null;return tg(e,n,d,r,l)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,d!==null?d.cachePool:null),d!==null?nm(n,d):Nu(),im(n);else return l=n.lanes=536870912,tg(e,n,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(fl(n,d.cachePool),nm(n,d),Sa(),n.memoizedState=null):(e!==null&&fl(n,null),Nu(),Sa());return En(e,n,u,r),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tg(e,n,r,l,u){var d=Ru();return d=d===null?null:{parent:an._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&fl(n,null),Nu(),im(n),e!==null&&Ir(e,n,l,!0),n.childLanes=u,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function eg(e,n,r){return or(n,e.child,null,r),e=Rl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function my(e,n,r){var l=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=Rl(n,l),n.lanes=536870912,so(null,e);if(zu(n),(e=We)?(e=dv(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},r=Bp(e),r.return=n,n.child=r,Sn=n,We=null)):e=null,e===null)throw ma(n);return n.lanes=536870912,null}return Rl(n,l)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=eg(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(sn||Ir(e,n,r,!1),u=(r&e.childLanes)!==0,sn||u){if(l=Ve,l!==null&&(y=Ai(l,r),y!==0&&y!==d.retryLane))throw d.retryLane=y,$a(e,y),Vn(l,e,y),nf;Bl(),n=eg(e,n,r)}else e=d.treeContext,We=li(y.nextSibling),Sn=n,Ee=!0,pa=null,si=!1,e!==null&&Gp(n,e),n=Rl(n,l),n.flags|=4096;return n}return e=Ii(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function af(e,n,r,l,u){return ir(n),r=Fu(e,n,r,l,void 0,u),l=Bu(),e!==null&&!sn?(Iu(e,n,u),Wi(e,n,u)):(Ee&&l&&_u(n),n.flags|=1,En(e,n,r,u),n.child)}function ng(e,n,r,l,u,d){return ir(n),n.updateQueue=null,r=rm(n,l,r,u),am(e),l=Bu(),e!==null&&!sn?(Iu(e,n,d),Wi(e,n,d)):(Ee&&l&&_u(n),n.flags|=1,En(e,n,r,d),n.child)}function ig(e,n,r,l,u){if(ir(n),n.stateNode===null){var d=zr,y=r.contextType;typeof y=="object"&&y!==null&&(d=Mn(y)),d=new r(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=tf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},wu(n),y=r.contextType,d.context=typeof y=="object"&&y!==null?Mn(y):zr,d.state=n.memoizedState,y=r.getDerivedStateFromProps,typeof y=="function"&&($u(n,r,y,l),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&tf.enqueueReplaceState(d,d.state,null),eo(n,l,d,u),to(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){d=n.stateNode;var T=n.memoizedProps,B=cr(r,T);d.props=B;var et=d.context,dt=r.contextType;y=zr,typeof dt=="object"&&dt!==null&&(y=Mn(dt));var xt=r.getDerivedStateFromProps;dt=typeof xt=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||et!==y)&&km(n,d,l,y),va=!1;var it=n.memoizedState;d.state=it,eo(n,l,d,u),to(),et=n.memoizedState,T||it!==et||va?(typeof xt=="function"&&($u(n,r,xt,l),et=n.memoizedState),(B=va||Vm(n,r,B,l,it,et,y))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=et),d.props=l,d.state=et,d.context=y,l=B):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,Du(e,n),y=n.memoizedProps,dt=cr(r,y),d.props=dt,xt=n.pendingProps,it=d.context,et=r.contextType,B=zr,typeof et=="object"&&et!==null&&(B=Mn(et)),T=r.getDerivedStateFromProps,(et=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==xt||it!==B)&&km(n,d,l,B),va=!1,it=n.memoizedState,d.state=it,eo(n,l,d,u),to();var ct=n.memoizedState;y!==xt||it!==ct||va||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof T=="function"&&($u(n,r,T,l),ct=n.memoizedState),(dt=va||Vm(n,r,dt,l,it,ct,B)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ct,B),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ct,B)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ct),d.props=l,d.state=ct,d.context=B,l=dt):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),l=!1)}return d=l,Cl(e,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&l?(n.child=or(n,e.child,null,u),n.child=or(n,null,r,u)):En(e,n,r,u),n.memoizedState=d.state,e=n.child):e=Wi(e,n,u),e}function ag(e,n,r,l){return er(),n.flags|=256,En(e,n,r,l),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:Yp()}}function of(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Qn),e}function rg(e,n,r){var l=n.pendingProps,u=!1,d=(n.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?ya(n):Sa(),(e=We)?(e=dv(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},r=Bp(e),r.return=n,n.child=r,Sn=n,We=null)):e=null,e===null)throw ma(n);return kf(e)?n.lanes=32:n.lanes=536870912,null}var T=l.children;return l=l.fallback,u?(Sa(),u=n.mode,T=wl({mode:"hidden",children:T},u),l=tr(l,u,r,null),T.return=n,l.return=n,T.sibling=l,n.child=T,l=n.child,l.memoizedState=sf(r),l.childLanes=of(e,y,r),n.memoizedState=rf,so(null,l)):(ya(n),lf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(d)n.flags&256?(ya(n),n.flags&=-257,n=cf(e,n,r)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),T=l.fallback,u=n.mode,l=wl({mode:"visible",children:l.children},u),T=tr(T,u,r,null),T.flags|=2,l.return=n,T.return=n,l.sibling=T,n.child=l,or(n,e.child,null,r),l=n.child,l.memoizedState=sf(r),l.childLanes=of(e,y,r),n.memoizedState=rf,n=so(null,l));else if(ya(n),kf(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var et=y.dgst;y=et,l=Error(a(419)),l.stack="",l.digest=y,js({value:l,source:null,stack:null}),n=cf(e,n,r)}else if(sn||Ir(e,n,r,!1),y=(r&e.childLanes)!==0,sn||y){if(y=Ve,y!==null&&(l=Ai(y,r),l!==0&&l!==B.retryLane))throw B.retryLane=l,$a(e,l),Vn(y,e,l),nf;Vf(T)||Bl(),n=cf(e,n,r)}else Vf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,We=li(T.nextSibling),Sn=n,Ee=!0,pa=null,si=!1,e!==null&&Gp(n,e),n=lf(n,l.children),n.flags|=4096);return n}return u?(Sa(),T=l.fallback,u=n.mode,B=e.child,et=B.sibling,l=Ii(B,{mode:"hidden",children:l.children}),l.subtreeFlags=B.subtreeFlags&65011712,et!==null?T=Ii(et,T):(T=tr(T,u,r,null),T.flags|=2),T.return=n,l.return=n,l.sibling=T,n.child=l,so(null,l),l=n.child,T=e.child.memoizedState,T===null?T=sf(r):(u=T.cachePool,u!==null?(B=an._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Yp(),T={baseLanes:T.baseLanes|r,cachePool:u}),l.memoizedState=T,l.childLanes=of(e,y,r),n.memoizedState=rf,so(e.child,l)):(ya(n),r=e.child,e=r.sibling,r=Ii(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=r,n.memoizedState=null,r)}function lf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function cf(e,n,r){return or(n,e.child,null,r),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sg(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Eu(e.return,n,r)}function uf(e,n,r,l,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u,treeForkCount:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=r,y.tailMode=u,y.treeForkCount=d)}function og(e,n,r){var l=n.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var y=en.current,T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,ft(en,y),En(e,n,l,r),l=Ee?Ys:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sg(e,r,n);else if(e.tag===19)sg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&vl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),uf(n,!1,u,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}uf(n,!0,r,null,d,l);break;case"together":uf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Wi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Ir(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Ii(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Ii(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function gy(e,n,r){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ga(n,an,e.memoizedState.cache),er();break;case 27:case 5:Vt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(ya(n),n.flags|=128,null):(r&n.child.childLanes)!==0?rg(e,n,r):(ya(n),e=Wi(e,n,r),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(Ir(e,n,r,!1),l=(r&n.childLanes)!==0),u){if(l)return og(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ft(en,en.current),l)break;return null;case 22:return n.lanes=0,$m(e,n,r,n.pendingProps);case 24:ga(n,an,e.memoizedState.cache)}return Wi(e,n,r)}function lg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!ff(e,r)&&(n.flags&128)===0)return sn=!1,gy(e,n,r);sn=(e.flags&131072)!==0}else sn=!1,Ee&&(n.flags&1048576)!==0&&Hp(n,Ys,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")mu(e)?(l=cr(e,l),n.tag=1,n=ig(null,n,e,l,r)):(n.tag=0,n=af(null,n,e,l,r));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Km(null,n,e,l,r);break t}else if(u===z){n.tag=14,n=Qm(null,n,e,l,r);break t}}throw n=lt(e)||e,Error(a(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,u=cr(l,n.pendingProps),ig(e,n,l,u,r);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var d=n.memoizedState;u=d.element,Du(e,n),eo(n,l,null,r);var y=n.memoizedState;if(l=y.cache,ga(n,an,l),l!==d.cache&&Tu(n,[an],r,!0),to(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ag(e,n,l,r);break t}else if(l!==u){u=ii(Error(a(424)),n),js(u),n=ag(e,n,l,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=li(e.firstChild),Sn=n,Ee=!0,pa=null,si=!0,r=$p(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(er(),l===u){n=Wi(e,n,r);break t}En(e,n,l,r)}n=n.child}return n;case 26:return Cl(e,n),e===null?(r=xv(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ee||(r=n.type,e=n.pendingProps,l=Wl(St.current).createElement(r),l[Ke]=n,l[xn]=e,Tn(l,r,e),q(l),n.stateNode=l):n.memoizedState=xv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Vt(n),e===null&&Ee&&(l=n.stateNode=gv(n.type,n.pendingProps,St.current),Sn=n,si=!0,u=We,wa(n.type)?(Xf=u,We=li(l.firstChild)):We=u),En(e,n,n.pendingProps.children,r),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=l=We)&&(l=qy(l,n.type,n.pendingProps,si),l!==null?(n.stateNode=l,Sn=n,We=li(l.firstChild),si=!1,u=!0):u=!1),u||ma(n)),Vt(n),u=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,l=d.children,If(u,d)?l=null:y!==null&&If(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,oy,null,null,r),Mo._currentValue=u),Cl(e,n),En(e,n,l,r),n.child;case 6:return e===null&&Ee&&((e=r=We)&&(r=Yy(r,n.pendingProps,si),r!==null?(n.stateNode=r,Sn=n,We=null,e=!0):e=!1),e||ma(n)),null;case 13:return rg(e,n,r);case 4:return Pt(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=or(n,null,l,r):En(e,n,l,r),n.child;case 11:return Km(e,n,n.type,n.pendingProps,r);case 7:return En(e,n,n.pendingProps,r),n.child;case 8:return En(e,n,n.pendingProps.children,r),n.child;case 12:return En(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,ga(n,n.type,l.value),En(e,n,l.children,r),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,ir(n),u=Mn(u),l=l(u),n.flags|=1,En(e,n,l,r),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,r);case 15:return Jm(e,n,n.type,n.pendingProps,r);case 19:return og(e,n,r);case 31:return my(e,n,r);case 22:return $m(e,n,r,n.pendingProps);case 24:return ir(n),l=Mn(an),e===null?(u=Ru(),u===null&&(u=Ve,d=bu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:l,cache:u},wu(n),ga(n,an,u)):((e.lanes&r)!==0&&(Du(e,n),eo(n,null,null,r),to()),u=e.memoizedState,d=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,an,l)):(l=d.cache,ga(n,an,l),l!==u.cache&&Tu(n,[an],r,!0))),En(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function qi(e){e.flags|=4}function hf(e,n,r,l,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(zg())e.flags|=8192;else throw sr=dl,Cu}else e.flags&=-16777217}function cg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tv(n))if(zg())e.flags|=8192;else throw sr=dl,Cu}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cn():536870912,e.lanes|=n,Qr|=n)}function oo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function vy(e,n,r){var l=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Vi(an),Nt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),qe(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(qi(n),d!==null?(qe(n),cg(n,d)):(qe(n),hf(n,u,null,l,r))):d?d!==e.memoizedState?(qi(n),qe(n),cg(n,d)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&qi(n),qe(n),hf(n,u,e,l,r)),null;case 27:if(le(n),r=St.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&qi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return qe(n),null}e=V.current,Br(n)?Vp(n):(e=gv(u,l,r),n.stateNode=e,qi(n))}return qe(n),null;case 5:if(le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&qi(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return qe(n),null}if(d=V.current,Br(n))Vp(n);else{var y=Wl(St.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(u,{is:l.is}):y.createElement(u)}}d[Ke]=n,d[xn]=l;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=d;t:switch(Tn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&qi(n)}}return qe(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&qi(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=St.current,Br(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||rv(e.nodeValue,r)),e||ma(n,!0)}else e=Wl(e).createTextNode(l),e[Ke]=n,n.stateNode=e}return qe(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(l=Br(n),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else r=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return qe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Br(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Dl(n,n.updateQueue),qe(n),null);case 4:return Nt(),e===null&&Of(n.stateNode.containerInfo),qe(n),null;case 10:return Vi(n.type),qe(n),null;case 19:if(W(en),l=n.memoizedState,l===null)return qe(n),null;if(u=(n.flags&128)!==0,d=l.rendering,d===null)if(u)oo(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=vl(e),d!==null){for(n.flags|=128,oo(l,!1),e=d.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Fp(r,e),r=r.sibling;return ft(en,en.current&1|2),Ee&&Hi(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&pt()>zl&&(n.flags|=128,u=!0,oo(l,!1),n.lanes=4194304)}else{if(!u)if(e=vl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),oo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ee)return qe(n),null}else 2*pt()-l.renderingStartTime>zl&&r!==536870912&&(n.flags|=128,u=!0,oo(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(e=l.last,e!==null?e.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=pt(),e.sibling=null,r=en.current,ft(en,u?r&1|2:r&1),Ee&&Hi(n,l.treeForkCount),e):(qe(n),null);case 22:case 23:return Zn(n),Ou(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),r=n.updateQueue,r!==null&&Dl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&W(ar),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(an),qe(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function _y(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(an),Nt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(a(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return W(en),null;case 4:return Nt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Ou(),e!==null&&W(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(an),null;case 25:return null;default:return null}}function ug(e,n){switch(xu(n),n.tag){case 3:Vi(an),Nt();break;case 26:case 27:case 5:le(n);break;case 4:Nt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:W(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Ou(),e!==null&&W(ar);break;case 24:Vi(an)}}function lo(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var d=r.create,y=r.inst;l=d(),y.destroy=l}r=r.next}while(r!==u)}}catch(T){Oe(n,n.return,T)}}function Ma(e,n,r){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var y=l.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var B=r,et=T;try{et()}catch(dt){Oe(u,B,dt)}}}l=l.next}while(l!==d)}}catch(dt){Oe(n,n.return,dt)}}function fg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{em(n,r)}catch(l){Oe(e,e.return,l)}}}function hg(e,n,r){r.props=cr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Oe(e,n,l)}}function co(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){Oe(e,n,u)}}function wi(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){Oe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Oe(e,n,u)}else r.current=null}function dg(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){Oe(e,e.return,u)}}function df(e,n,r){try{var l=e.stateNode;Hy(l,e.type,r,n),l[xn]=n}catch(u){Oe(e,e.return,u)}}function pg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||pg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Fi));else if(l!==4&&(l===27&&wa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,r),e=e.sibling;e!==null;)mf(e,n,r),e=e.sibling}function Ul(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&wa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ul(e,n,r),e=e.sibling;e!==null;)Ul(e,n,r),e=e.sibling}function mg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,l,r),n[Ke]=e,n[xn]=r}catch(d){Oe(e,e.return,d)}}var Yi=!1,on=!1,gf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function xy(e,n){if(e=e.containerInfo,Ff=Jl,e=Cp(e),lu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var y=0,T=-1,B=-1,et=0,dt=0,xt=e,it=null;e:for(;;){for(var ct;xt!==r||u!==0&&xt.nodeType!==3||(T=y+u),xt!==d||l!==0&&xt.nodeType!==3||(B=y+l),xt.nodeType===3&&(y+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)it=xt,xt=ct;for(;;){if(xt===e)break e;if(it===r&&++et===u&&(T=y),it===d&&++dt===l&&(B=y),(ct=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=ct}r=T===-1||B===-1?null:{start:T,end:B}}else r=null}r=r||{start:0,end:0}}else r=null;for(Bf={focusedElem:e,selectionRange:r},Jl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var Ht=cr(r.type,u);e=l.getSnapshotBeforeUpdate(Ht,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Oe(r,r.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Gf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function vg(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Zi(e,r),l&4&&lo(5,r);break;case 1:if(Zi(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(y){Oe(r,r.return,y)}else{var u=cr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Oe(r,r.return,y)}}l&64&&fg(r),l&512&&co(r,r.return);break;case 3:if(Zi(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{em(e,n)}catch(y){Oe(r,r.return,y)}}break;case 27:n===null&&l&4&&mg(r);case 26:case 5:Zi(e,r),n===null&&l&4&&dg(r),l&512&&co(r,r.return);break;case 12:Zi(e,r);break;case 31:Zi(e,r),l&4&&yg(e,r);break;case 13:Zi(e,r),l&4&&Sg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Cy.bind(null,r),jy(e,r))));break;case 22:if(l=r.memoizedState!==null||Yi,!l){n=n!==null&&n.memoizedState!==null||on,u=Yi;var d=on;Yi=l,(on=n)&&!d?Ki(e,r,(r.subtreeFlags&8772)!==0):Zi(e,r),Yi=u,on=d}break;case 30:break;default:Zi(e,r)}}function _g(e){var n=e.alternate;n!==null&&(e.alternate=null,_g(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Bn=!1;function ji(e,n,r){for(r=r.child;r!==null;)xg(e,n,r),r=r.sibling}function xg(e,n,r){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Qt,r)}catch{}switch(r.tag){case 26:on||wi(r,n),ji(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:on||wi(r,n);var l=je,u=Bn;wa(r.type)&&(je=r.stateNode,Bn=!1),ji(e,n,r),xo(r.stateNode),je=l,Bn=u;break;case 5:on||wi(r,n);case 6:if(l=je,u=Bn,je=null,ji(e,n,r),je=l,Bn=u,je!==null)if(Bn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(r.stateNode)}catch(d){Oe(r,n,d)}else try{je.removeChild(r.stateNode)}catch(d){Oe(r,n,d)}break;case 18:je!==null&&(Bn?(e=je,fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),rs(e)):fv(je,r.stateNode));break;case 4:l=je,u=Bn,je=r.stateNode.containerInfo,Bn=!0,ji(e,n,r),je=l,Bn=u;break;case 0:case 11:case 14:case 15:Ma(2,r,n),on||Ma(4,r,n),ji(e,n,r);break;case 1:on||(wi(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&hg(r,n,l)),ji(e,n,r);break;case 21:ji(e,n,r);break;case 22:on=(l=on)||r.memoizedState!==null,ji(e,n,r),on=l;break;default:ji(e,n,r)}}function yg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(r){Oe(n,n.return,r)}}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(r){Oe(n,n.return,r)}}function yy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gg),n;default:throw Error(a(435,e.tag))}}function Ll(e,n){var r=yy(e);n.forEach(function(l){if(!r.has(l)){r.add(l);var u=wy.bind(null,e,l);l.then(u,u)}})}function In(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],d=e,y=n,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(wa(T.type)){je=T.stateNode,Bn=!1;break t}break;case 5:je=T.stateNode,Bn=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(je===null)throw Error(a(160));xg(d,y,u),je=null,Bn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,e),n=n.sibling}var _i=null;function Mg(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Hn(e),l&4&&(Ma(3,e,e.return),lo(3,e),Ma(5,e,e.return));break;case 1:In(n,e),Hn(e),l&512&&(on||r===null||wi(r,r.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=_i;if(In(n,e),Hn(e),l&512&&(on||r===null||wi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Za]||d[Ke]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,l,r),d[Ke]=e,q(d),l=d;break t;case"link":var y=Mv("link","href",u).get(l+(r.href||""));if(y){for(var T=0;T<y.length;T++)if(d=y[T],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){y.splice(T,1);break e}}d=u.createElement(l),Tn(d,l,r),u.head.appendChild(d);break;case"meta":if(y=Mv("meta","content",u).get(l+(r.content||""))){for(T=0;T<y.length;T++)if(d=y[T],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){y.splice(T,1);break e}}d=u.createElement(l),Tn(d,l,r),u.head.appendChild(d);break;default:throw Error(a(468,l))}d[Ke]=e,q(d),l=d}e.stateNode=l}else Ev(u,e.type,e.stateNode);else e.stateNode=Sv(u,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?Ev(u,e.type,e.stateNode):Sv(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&df(e,e.memoizedProps,r.memoizedProps)}break;case 27:In(n,e),Hn(e),l&512&&(on||r===null||wi(r,r.return)),r!==null&&l&4&&df(e,e.memoizedProps,r.memoizedProps);break;case 5:if(In(n,e),Hn(e),l&512&&(on||r===null||wi(r,r.return)),e.flags&32){u=e.stateNode;try{Pn(u,"")}catch(Ht){Oe(e,e.return,Ht)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,r!==null?r.memoizedProps:u)),l&1024&&(gf=!0);break;case 6:if(In(n,e),Hn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Ht){Oe(e,e.return,Ht)}}break;case 3:if(jl=null,u=_i,_i=ql(n.containerInfo),In(n,e),_i=u,Hn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(Ht){Oe(e,e.return,Ht)}gf&&(gf=!1,Eg(e));break;case 4:l=_i,_i=ql(e.stateNode.containerInfo),In(n,e),Hn(e),_i=l;break;case 12:In(n,e),Hn(e);break;case 31:In(n,e),Hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ll(e,l)));break;case 13:In(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ol=pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ll(e,l)));break;case 22:u=e.memoizedState!==null;var B=r!==null&&r.memoizedState!==null,et=Yi,dt=on;if(Yi=et||u,on=dt||B,In(n,e),on=dt,Yi=et,Hn(e),l&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||B||Yi||on||ur(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){B=r=n;try{if(d=B.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=B.stateNode;var xt=B.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;T.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ht){Oe(B,B.return,Ht)}}}else if(n.tag===6){if(r===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ht){Oe(B,B.return,Ht)}}}else if(n.tag===18){if(r===null){B=n;try{var ct=B.stateNode;u?hv(ct,!0):hv(B.stateNode,!1)}catch(Ht){Oe(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Ll(e,r))));break;case 19:In(n,e),Hn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ll(e,l)));break;case 30:break;case 21:break;default:In(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(pg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,d=pf(e);Ul(e,d,u);break;case 5:var y=r.stateNode;r.flags&32&&(Pn(y,""),r.flags&=-33);var T=pf(e);Ul(e,T,y);break;case 3:case 4:var B=r.stateNode.containerInfo,et=pf(e);mf(e,et,B);break;default:throw Error(a(161))}}catch(dt){Oe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vg(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&hg(n,n.return,r),ur(n);break;case 27:xo(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Ki(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,d=n,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(u,d,r),lo(4,d);break;case 1:if(Ki(u,d,r),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Oe(l,l.return,et)}if(l=d,u=l.updateQueue,u!==null){var T=l.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)tm(B[u],T)}catch(et){Oe(l,l.return,et)}}r&&y&64&&fg(d),co(d,d.return);break;case 27:mg(d);case 26:case 5:Ki(u,d,r),r&&l===null&&y&4&&dg(d),co(d,d.return);break;case 12:Ki(u,d,r);break;case 31:Ki(u,d,r),r&&y&4&&yg(u,d);break;case 13:Ki(u,d,r),r&&y&4&&Sg(u,d);break;case 22:d.memoizedState===null&&Ki(u,d,r),co(d,d.return);break;case 30:break;default:Ki(u,d,r)}n=n.sibling}}function vf(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Zs(r))}function _f(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e))}function xi(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tg(e,n,r,l),n=n.sibling}function Tg(e,n,r,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,r,l),u&2048&&lo(9,n);break;case 1:xi(e,n,r,l);break;case 3:xi(e,n,r,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e)));break;case 12:if(u&2048){xi(e,n,r,l),e=n.stateNode;try{var d=n.memoizedProps,y=d.id,T=d.onPostCommit;typeof T=="function"&&T(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Oe(n,n.return,B)}}else xi(e,n,r,l);break;case 31:xi(e,n,r,l);break;case 13:xi(e,n,r,l);break;case 23:break;case 22:d=n.stateNode,y=n.alternate,n.memoizedState!==null?d._visibility&2?xi(e,n,r,l):uo(e,n):d._visibility&2?xi(e,n,r,l):(d._visibility|=2,jr(e,n,r,l,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(y,n);break;case 24:xi(e,n,r,l),u&2048&&_f(n.alternate,n);break;default:xi(e,n,r,l)}}function jr(e,n,r,l,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,y=n,T=r,B=l,et=y.flags;switch(y.tag){case 0:case 11:case 15:jr(d,y,T,B,u),lo(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?jr(d,y,T,B,u):uo(d,y):(dt._visibility|=2,jr(d,y,T,B,u)),u&&et&2048&&vf(y.alternate,y);break;case 24:jr(d,y,T,B,u),u&&et&2048&&_f(y.alternate,y);break;default:jr(d,y,T,B,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,u=l.flags;switch(l.tag){case 22:uo(r,l),u&2048&&vf(l.alternate,l);break;case 24:uo(r,l),u&2048&&_f(l.alternate,l);break;default:uo(r,l)}n=n.sibling}}var fo=8192;function Zr(e,n,r){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)bg(e,n,r),e=e.sibling}function bg(e,n,r){switch(e.tag){case 26:Zr(e,n,r),e.flags&fo&&e.memoizedState!==null&&sS(r,_i,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,r);break;case 3:case 4:var l=_i;_i=ql(e.stateNode.containerInfo),Zr(e,n,r),_i=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=fo,fo=16777216,Zr(e,n,r),fo=l):Zr(e,n,r));break;default:Zr(e,n,r)}}function Ag(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];gn=l,Cg(l,e)}Ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rg(e),e=e.sibling}function Rg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):ho(e);break;default:ho(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];gn=l,Cg(l,e)}Ag(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Nl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function Cg(e,n){for(;gn!==null;){var r=gn;switch(r.tag){case 0:case 11:case 15:Ma(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zs(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,gn=l;else t:for(r=e;gn!==null;){l=gn;var u=l.sibling,d=l.return;if(_g(l),l===r){gn=null;break t}if(u!==null){u.return=d,gn=u;break t}gn=d}}}var Sy={getCacheForType:function(e){var n=Mn(an),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Mn(an).controller.signal}},My=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ve=null,me=null,xe=0,Ne=0,Kn=null,Ea=!1,Kr=!1,xf=!1,Qi=0,$e=0,Ta=0,fr=0,yf=0,Qn=0,Qr=0,po=null,Gn=null,Sf=!1,Ol=0,wg=0,zl=1/0,Pl=null,ba=null,fn=0,Aa=null,Jr=null,Ji=0,Mf=0,Ef=null,Dg=null,mo=0,Tf=null;function Jn(){return(Ue&2)!==0&&xe!==0?xe&-xe:O.T!==null?Df():zs()}function Ug(){if(Qn===0)if((xe&536870912)===0||Ee){var e=ht;ht<<=1,(ht&3932160)===0&&(ht=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function Vn(e,n,r){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ra(e,xe,Qn,!1)),_n(e,r),((Ue&2)===0||e!==Ve)&&(e===Ve&&((Ue&2)===0&&(fr|=r),$e===4&&Ra(e,xe,Qn,!1)),Di(e))}function Lg(e,n,r){if((Ue&6)!==0)throw Error(a(327));var l=!r&&(n&127)===0&&(n&e.expiredLanes)===0||ae(e,n),u=l?by(e,n):Af(e,n,!0),d=l;do{if(u===0){Kr&&!l&&Ra(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!Ey(r)){u=Af(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=e;u=po;var B=T.current.memoizedState.isDehydrated;if(B&&($r(T,y).flags|=256),y=Af(T,y,!1),y!==2){if(xf&&!B){T.errorRecoveryDisabledLanes|=d,fr|=d,u=4;break t}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){$r(e,0),Ra(e,n,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ra(l,n,Qn,!Ea);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Ol+300-pt(),10<u)){if(Ra(l,n,Qn,!Ea),Dt(l,0,!0)!==0)break t;Ji=n,l.timeoutHandle=cv(Ng.bind(null,l,r,Gn,Pl,Sf,n,Qn,fr,Qr,Ea,d,"Throttled",-0,0),u);break t}Ng(l,r,Gn,Pl,Sf,n,Qn,fr,Qr,Ea,d,null,-0,0)}}break}while(!0);Di(e)}function Ng(e,n,r,l,u,d,y,T,B,et,dt,xt,it,ct){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},bg(n,d,xt);var Ht=(d&62914560)===d?Ol-pt():(d&4194048)===d?wg-pt():0;if(Ht=oS(xt,Ht),Ht!==null){Ji=d,e.cancelPendingCommit=Ht(Gg.bind(null,e,n,d,r,l,u,y,T,B,dt,xt,null,it,ct)),Ra(e,d,y,!et);return}}Gg(e,n,d,r,l,u,y,T,B)}function Ey(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,r,l){n&=~yf,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var d=31-ne(u),y=1<<d;l[d]=-1,u&=~y}r!==0&&Ns(e,r,n)}function Fl(){return(Ue&6)===0?(go(0),!1):!0}function bf(){if(me!==null){if(Ne===0)var e=me.return;else e=me,Gi=nr=null,Hu(e),kr=null,Qs=0,e=me;for(;e!==null;)ug(e.alternate,e),e=e.return;me=null}}function $r(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,ky(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ji=0,bf(),Ve=e,me=r=Ii(e.current,null),xe=n,Ne=0,Kn=null,Ea=!1,Kr=ae(e,n),xf=!1,Qr=Qn=yf=fr=Ta=$e=0,Gn=po=null,Sf=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-ne(l),d=1<<u;n|=e[u],l&=~d}return Qi=n,al(),r}function Og(e,n){ue=null,O.H=ro,n===Vr||n===hl?(n=Kp(),Ne=3):n===Cu?(n=Kp(),Ne=4):Ne=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,me===null&&($e=1,Al(e,ii(n,e.current)))}function zg(){var e=jn.current;return e===null?!0:(xe&4194048)===xe?oi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===oi:!1}function Pg(){var e=O.H;return O.H=ro,e===null?ro:e}function Fg(){var e=O.A;return O.A=Sy,e}function Bl(){$e=4,Ea||(xe&4194048)!==xe&&jn.current!==null||(Kr=!0),(Ta&134217727)===0&&(fr&134217727)===0||Ve===null||Ra(Ve,xe,Qn,!1)}function Af(e,n,r){var l=Ue;Ue|=2;var u=Pg(),d=Fg();(Ve!==e||xe!==n)&&(Pl=null,$r(e,n)),n=!1;var y=$e;t:do try{if(Ne!==0&&me!==null){var T=me,B=Kn;switch(Ne){case 8:bf(),y=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var et=Ne;if(Ne=0,Kn=null,ts(e,T,B,et),r&&Kr){y=0;break t}break;default:et=Ne,Ne=0,Kn=null,ts(e,T,B,et)}}Ty(),y=$e;break}catch(dt){Og(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Gi=nr=null,Ue=l,O.H=u,O.A=d,me===null&&(Ve=null,xe=0,al()),y}function Ty(){for(;me!==null;)Bg(me)}function by(e,n){var r=Ue;Ue|=2;var l=Pg(),u=Fg();Ve!==e||xe!==n?(Pl=null,zl=pt()+500,$r(e,n)):Kr=ae(e,n);t:do try{if(Ne!==0&&me!==null){n=me;var d=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,ts(e,n,d,1);break;case 2:case 9:if(jp(d)){Ne=0,Kn=null,Ig(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Di(e)},d.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:jp(d)?(Ne=0,Kn=null,Ig(n)):(Ne=0,Kn=null,ts(e,n,d,7));break;case 5:var y=null;switch(me.tag){case 26:y=me.memoizedState;case 5:case 27:var T=me;if(y?Tv(y):T.stateNode.complete){Ne=0,Kn=null;var B=T.sibling;if(B!==null)me=B;else{var et=T.return;et!==null?(me=et,Il(et)):me=null}break e}}Ne=0,Kn=null,ts(e,n,d,5);break;case 6:Ne=0,Kn=null,ts(e,n,d,6);break;case 8:bf(),$e=6;break t;default:throw Error(a(462))}}Ay();break}catch(dt){Og(e,dt)}while(!0);return Gi=nr=null,O.H=l,O.A=u,Ue=r,me!==null?0:(Ve=null,xe=0,al(),$e)}function Ay(){for(;me!==null&&!b();)Bg(me)}function Bg(e){var n=lg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function Ig(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=ng(r,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=ng(r,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Hu(n);default:ug(r,n),n=me=Fp(n,Qi),n=lg(r,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Il(e):me=n}function ts(e,n,r,l){Gi=nr=null,Hu(n),kr=null,Qs=0;var u=n.return;try{if(py(e,u,n,r,xe)){$e=1,Al(e,ii(r,e.current)),me=null;return}}catch(d){if(u!==null)throw me=u,d;$e=1,Al(e,ii(r,e.current)),me=null;return}n.flags&32768?(Ee||l===1?e=!0:Kr||(xe&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=jn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Hg(n,Ea);return}e=n.return;var r=vy(n.alternate,n,Qi);if(r!==null){me=r;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);$e===0&&($e=5)}function Hg(e,n){do{var r=_y(e.alternate,e);if(r!==null){r.flags&=32767,me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=r}while(e!==null);$e=6,me=null}function Gg(e,n,r,l,u,d,y,T,B){e.cancelPendingCommit=null;do Hl();while(fn!==0);if((Ue&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=du,pi(e,r,d,y,T,B),e===Ve&&(me=Ve=null,xe=0),Jr=n,Aa=e,Ji=r,Mf=d,Ef=u,Dg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dy(Ct,function(){return qg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,u=$.p,$.p=2,y=Ue,Ue|=4;try{xy(e,n,r)}finally{Ue=y,$.p=u,O.T=l}}fn=1,Vg(),kg(),Xg()}}function Vg(){if(fn===1){fn=0;var e=Aa,n=Jr,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null;var l=$.p;$.p=2;var u=Ue;Ue|=4;try{Mg(n,e);var d=Bf,y=Cp(e.containerInfo),T=d.focusedElem,B=d.selectionRange;if(y!==T&&T&&T.ownerDocument&&Rp(T.ownerDocument.documentElement,T)){if(B!==null&&lu(T)){var et=B.start,dt=B.end;if(dt===void 0&&(dt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(dt,T.value.length);else{var xt=T.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Ht=T.textContent.length,Jt=Math.min(B.start,Ht),He=B.end===void 0?Jt:Math.min(B.end,Ht);!ct.extend&&Jt>He&&(y=He,He=Jt,Jt=y);var Z=Ap(T,Jt),G=Ap(T,He);if(Z&&G&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==G.node||ct.focusOffset!==G.offset)){var tt=xt.createRange();tt.setStart(Z.node,Z.offset),ct.removeAllRanges(),Jt>He?(ct.addRange(tt),ct.extend(G.node,G.offset)):(tt.setEnd(G.node,G.offset),ct.addRange(tt))}}}}for(xt=[],ct=T;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var gt=xt[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Jl=!!Ff,Bf=Ff=null}finally{Ue=u,$.p=l,O.T=r}}e.current=n,fn=2}}function kg(){if(fn===2){fn=0;var e=Aa,n=Jr,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=O.T,O.T=null;var l=$.p;$.p=2;var u=Ue;Ue|=4;try{vg(e,n.alternate,n)}finally{Ue=u,$.p=l,O.T=r}}fn=3}}function Xg(){if(fn===4||fn===3){fn=0,at();var e=Aa,n=Jr,r=Ji,l=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Jr=Aa=null,Wg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Rr(r),n=n.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=O.T,u=$.p,$.p=2,O.T=null;try{for(var d=e.onRecoverableError,y=0;y<l.length;y++){var T=l[y];d(T.value,{componentStack:T.stack})}}finally{O.T=n,$.p=u}}(Ji&3)!==0&&Hl(),Di(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Tf?mo++:(mo=0,Tf=e):mo=0,go(0)}}function Wg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zs(n)))}function Hl(){return Vg(),kg(),Xg(),qg()}function qg(){if(fn!==5)return!1;var e=Aa,n=Mf;Mf=0;var r=Rr(Ji),l=O.T,u=$.p;try{$.p=32>r?32:r,O.T=null,r=Ef,Ef=null;var d=Aa,y=Ji;if(fn=0,Jr=Aa=null,Ji=0,(Ue&6)!==0)throw Error(a(331));var T=Ue;if(Ue|=4,Rg(d.current),Tg(d,d.current,y,r),Ue=T,go(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Qt,d)}catch{}return!0}finally{$.p=u,O.T=l,Wg(e,n)}}function Yg(e,n,r){n=ii(r,n),n=ef(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(_n(e,2),Di(e))}function Oe(e,n,r){if(e.tag===3)Yg(e,e,r);else for(;n!==null;){if(n.tag===3){Yg(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ba===null||!ba.has(l))){e=ii(r,e),r=jm(2),l=xa(n,r,2),l!==null&&(Zm(r,l,n,e),_n(l,2),Di(l));break}}n=n.return}}function Rf(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new My;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(r)||(xf=!0,u.add(r),e=Ry.bind(null,e,n,r),n.then(e,e))}function Ry(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ve===e&&(xe&r)===r&&($e===4||$e===3&&(xe&62914560)===xe&&300>pt()-Ol?(Ue&2)===0&&$r(e,0):yf|=r,Qr===xe&&(Qr=0)),Di(e)}function jg(e,n){n===0&&(n=cn()),e=$a(e,n),e!==null&&(_n(e,n),Di(e))}function Cy(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),jg(e,r)}function wy(e,n){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),jg(e,r)}function Dy(e,n){return Xt(e,n)}var Gl=null,es=null,Cf=!1,Vl=!1,wf=!1,Ca=0;function Di(e){e!==es&&e.next===null&&(es===null?Gl=es=e:es=es.next=e),Vl=!0,Cf||(Cf=!0,Ly())}function go(e,n){if(!wf&&Vl){wf=!0;do for(var r=!1,l=Gl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var y=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-ne(42|e)+1)-1,d&=u&~(y&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Jg(l,d))}else d=xe,d=Dt(l,l===Ve?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ae(l,d)||(r=!0,Jg(l,d));l=l.next}while(r);wf=!1}}function Uy(){Zg()}function Zg(){Vl=Cf=!1;var e=0;Ca!==0&&Vy()&&(e=Ca);for(var n=pt(),r=null,l=Gl;l!==null;){var u=l.next,d=Kg(l,n);d===0?(l.next=null,r===null?Gl=u:r.next=u,u===null&&(es=r)):(r=l,(e!==0||(d&3)!==0)&&(Vl=!0)),l=u}fn!==0&&fn!==5||go(e),Ca!==0&&(Ca=0)}function Kg(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-ne(d),T=1<<y,B=u[y];B===-1?((T&r)===0||(T&l)!==0)&&(u[y]=Ye(T,n)):B<=n&&(e.expiredLanes|=T),d&=~T}if(n=Ve,r=xe,r=Dt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&N(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ae(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&N(l),Rr(r)){case 2:case 8:r=qt;break;case 32:r=Ct;break;case 268435456:r=_e;break;default:r=Ct}return l=Qg.bind(null,e),r=Xt(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&N(l),e.callbackPriority=2,e.callbackNode=null,2}function Qg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Hl()&&e.callbackNode!==r)return null;var l=xe;return l=Dt(e,e===Ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Lg(e,l,n),Kg(e,pt()),e.callbackNode!=null&&e.callbackNode===r?Qg.bind(null,e):null)}function Jg(e,n){if(Hl())return null;Lg(e,n,!0)}function Ly(){Xy(function(){(Ue&6)!==0?Xt(_t,Uy):Zg()})}function Df(){if(Ca===0){var e=Hr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ca=e}return Ca}function $g(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function tv(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function Ny(e,n,r,l,u){if(n==="submit"&&r&&r.stateNode===u){var d=$g((u[xn]||null).action),y=l.submitter;y&&(n=(n=y[xn]||null)?$g(n.formAction):y.getAttribute("formAction"),n!==null&&(d=n,y=null));var T=new tl("action","action",null,l,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var B=y?tv(u,y):new FormData(u);Zu(r,{pending:!0,data:B,method:u.method,action:d},null,B)}}else typeof d=="function"&&(T.preventDefault(),B=y?tv(u,y):new FormData(u),Zu(r,{pending:!0,data:B,method:u.method,action:d},d,B))},currentTarget:u}]})}}for(var Uf=0;Uf<hu.length;Uf++){var Lf=hu[Uf],Oy=Lf.toLowerCase(),zy=Lf[0].toUpperCase()+Lf.slice(1);vi(Oy,"on"+zy)}vi(Up,"onAnimationEnd"),vi(Lp,"onAnimationIteration"),vi(Np,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(Qx,"onTransitionRun"),vi(Jx,"onTransitionStart"),vi($x,"onTransitionCancel"),vi(Op,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function ev(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;t:{var d=void 0;if(n)for(var y=l.length-1;0<=y;y--){var T=l[y],B=T.instance,et=T.currentTarget;if(T=T.listener,B!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=et;try{d(u)}catch(dt){il(dt)}u.currentTarget=null,d=B}else for(y=0;y<l.length;y++){if(T=l[y],B=T.instance,et=T.currentTarget,T=T.listener,B!==d&&u.isPropagationStopped())break t;d=T,u.currentTarget=et;try{d(u)}catch(dt){il(dt)}u.currentTarget=null,d=B}}}}function ge(e,n){var r=n[Ps];r===void 0&&(r=n[Ps]=new Set);var l=e+"__bubble";r.has(l)||(nv(n,e,2,!1),r.add(l))}function Nf(e,n,r){var l=0;n&&(l|=4),nv(r,e,l,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[kl]){e[kl]=!0,Tt.forEach(function(r){r!=="selectionchange"&&(Py.has(r)||Nf(r,!1,e),Nf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Nf("selectionchange",!1,n))}}function nv(e,n,r,l){switch(Uv(n)){case 2:var u=uS;break;case 8:u=fS;break;default:u=Zf}r=u.bind(null,n,r,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function zf(e,n,r,l,u){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var T=l.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=l.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=R(T),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){l=d=y;continue t}T=T.parentNode}}l=l.return}op(function(){var et=d,dt=Qc(r),xt=[];t:{var it=zp.get(e);if(it!==void 0){var ct=tl,Ht=e;switch(e){case"keypress":if(Jo(r)===0)break t;case"keydown":case"keyup":ct=wx;break;case"focusin":Ht="focus",ct=iu;break;case"focusout":Ht="blur",ct=iu;break;case"beforeblur":case"afterblur":ct=iu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Lx;break;case Up:case Lp:case Np:ct=yx;break;case Op:ct=Ox;break;case"scroll":case"scrollend":ct=mx;break;case"wheel":ct=Px;break;case"copy":case"cut":case"paste":ct=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=hp;break;case"toggle":case"beforetoggle":ct=Bx}var Jt=(n&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),Z=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var G=et,tt;G!==null;){var gt=G;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||Z===null||(gt=Bs(G,Z),gt!=null&&Jt.push(_o(G,gt,tt))),He)break;G=G.return}0<Jt.length&&(it=new ct(it,Ht,null,r,dt),xt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&r!==Kc&&(Ht=r.relatedTarget||r.fromElement)&&(R(Ht)||Ht[Pi]))break t;if((ct||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Ht=r.relatedTarget||r.toElement,ct=et,Ht=Ht?R(Ht):null,Ht!==null&&(He=c(Ht),Jt=Ht.tag,Ht!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(Ht=null)):(ct=null,Ht=et),ct!==Ht)){if(Jt=up,gt="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=hp,gt="onPointerLeave",Z="onPointerEnter",G="pointer"),He=ct==null?it:rt(ct),tt=Ht==null?it:rt(Ht),it=new Jt(gt,G+"leave",ct,r,dt),it.target=He,it.relatedTarget=tt,gt=null,R(dt)===et&&(Jt=new Jt(Z,G+"enter",Ht,r,dt),Jt.target=tt,Jt.relatedTarget=He,gt=Jt),He=gt,ct&&Ht)e:{for(Jt=Fy,Z=ct,G=Ht,tt=0,gt=Z;gt;gt=Jt(gt))tt++;gt=0;for(var Zt=G;Zt;Zt=Jt(Zt))gt++;for(;0<tt-gt;)Z=Jt(Z),tt--;for(;0<gt-tt;)G=Jt(G),gt--;for(;tt--;){if(Z===G||G!==null&&Z===G.alternate){Jt=Z;break e}Z=Jt(Z),G=Jt(G)}Jt=null}else Jt=null;ct!==null&&iv(xt,it,ct,Jt,!1),Ht!==null&&He!==null&&iv(xt,He,Ht,Jt,!0)}}t:{if(it=et?rt(et):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var Ce=yp;else if(_p(it))if(Sp)Ce=jx;else{Ce=qx;var kt=Wx}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&Zc(et.elementType)&&(Ce=yp):Ce=Yx;if(Ce&&(Ce=Ce(e,et))){xp(xt,Ce,r,dt);break t}kt&&kt(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(kt=et?rt(et):window,e){case"focusin":(_p(kt)||kt.contentEditable==="true")&&(Lr=kt,cu=et,qs=null);break;case"focusout":qs=cu=Lr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,wp(xt,r,dt);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":wp(xt,r,dt)}var fe;if(ru)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ur?gp(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(dp&&r.locale!=="ko"&&(Ur||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ur&&(fe=lp()):(ha=dt,tu="value"in ha?ha.value:ha.textContent,Ur=!0)),kt=Xl(et,ye),0<kt.length&&(ye=new fp(ye,e,null,r,dt),xt.push({event:ye,listeners:kt}),fe?ye.data=fe:(fe=vp(r),fe!==null&&(ye.data=fe)))),(fe=Hx?Gx(e,r):Vx(e,r))&&(ye=Xl(et,"onBeforeInput"),0<ye.length&&(kt=new fp("onBeforeInput","beforeinput",null,r,dt),xt.push({event:kt,listeners:ye}),kt.data=fe)),Ny(xt,e,et,r,dt)}ev(xt,n)})}function _o(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Xl(e,n){for(var r=n+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Bs(e,r),u!=null&&l.unshift(_o(e,u,d)),u=Bs(e,n),u!=null&&l.push(_o(e,u,d))),e.tag===3)return l;e=e.return}return[]}function Fy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function iv(e,n,r,l,u){for(var d=n._reactName,y=[];r!==null&&r!==l;){var T=r,B=T.alternate,et=T.stateNode;if(T=T.tag,B!==null&&B===l)break;T!==5&&T!==26&&T!==27||et===null||(B=et,u?(et=Bs(r,d),et!=null&&y.unshift(_o(r,et,B))):u||(et=Bs(r,d),et!=null&&y.push(_o(r,et,B)))),r=r.return}y.length!==0&&e.push({event:n,listeners:y})}var By=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function av(e){return(typeof e=="string"?e:""+e).replace(By,`
`).replace(Iy,"")}function rv(e,n){return n=av(n),av(e)===n}function Ie(e,n,r,l,u,d){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Pn(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Pn(e,""+l);break;case"className":Xe(e,"class",l);break;case"tabIndex":Xe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(e,r,l);break;case"style":rp(e,l,d);break;case"data":if(n!=="object"){Xe(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ko(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ko(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Fi);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Ko(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Me(e,"popover",l);break;case"xlinkActuate":Re(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Re(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Re(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Re(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Re(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Re(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Re(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Re(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Re(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Me(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=dx.get(r)||r,Me(e,r,l))}}function Pf(e,n,r,l,u,d){switch(r){case"style":rp(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Pn(e,l):(typeof l=="number"||typeof l=="bigint")&&Pn(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=e[xn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,u);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Me(e,r,l)}}}function Tn(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var y=r[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ie(e,n,d,y,r,null)}}u&&Ie(e,n,"srcSet",r.srcSet,r,null),l&&Ie(e,n,"src",r.src,r,null);return;case"input":ge("invalid",e);var T=d=y=u=null,B=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var dt=r[l];if(dt!=null)switch(l){case"name":u=dt;break;case"type":y=dt;break;case"checked":B=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":T=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,n));break;default:Ie(e,n,l,dt,r,null)}}Ln(e,d,T,B,et,y,u,!1);return;case"select":ge("invalid",e),l=y=d=null;for(u in r)if(r.hasOwnProperty(u)&&(T=r[u],T!=null))switch(u){case"value":d=T;break;case"defaultValue":y=T;break;case"multiple":l=T;default:Ie(e,n,u,T,r,null)}n=d,r=y,e.multiple=!!l,n!=null?Qe(e,!!l,n,!1):r!=null&&Qe(e,!!l,r,!0);return;case"textarea":ge("invalid",e),d=u=l=null;for(y in r)if(r.hasOwnProperty(y)&&(T=r[y],T!=null))switch(y){case"value":l=T;break;case"defaultValue":u=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Ie(e,n,y,T,r,null)}Cr(e,l,u,d);return;case"option":for(B in r)if(r.hasOwnProperty(B)&&(l=r[B],l!=null))switch(B){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ie(e,n,B,l,r,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<vo.length;l++)ge(vo[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ie(e,n,et,l,r,null)}return;default:if(Zc(n)){for(dt in r)r.hasOwnProperty(dt)&&(l=r[dt],l!==void 0&&Pf(e,n,dt,l,r,void 0));return}}for(T in r)r.hasOwnProperty(T)&&(l=r[T],l!=null&&Ie(e,n,T,l,r,null))}function Hy(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,T=null,B=null,et=null,dt=null;for(ct in r){var xt=r[ct];if(r.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=xt;default:l.hasOwnProperty(ct)||Ie(e,n,ct,null,l,xt)}}for(var it in l){var ct=l[it];if(xt=r[it],l.hasOwnProperty(it)&&(ct!=null||xt!=null))switch(it){case"type":d=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":dt=ct;break;case"value":y=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,n));break;default:ct!==xt&&Ie(e,n,it,ct,l,xt)}}Fe(e,y,T,B,et,dt,d,u);return;case"select":ct=y=T=it=null;for(d in r)if(B=r[d],r.hasOwnProperty(d)&&B!=null)switch(d){case"value":break;case"multiple":ct=B;default:l.hasOwnProperty(d)||Ie(e,n,d,null,l,B)}for(u in l)if(d=l[u],B=r[u],l.hasOwnProperty(u)&&(d!=null||B!=null))switch(u){case"value":it=d;break;case"defaultValue":T=d;break;case"multiple":y=d;default:d!==B&&Ie(e,n,u,d,l,B)}n=T,r=y,l=ct,it!=null?Qe(e,!!r,it,!1):!!l!=!!r&&(n!=null?Qe(e,!!r,n,!0):Qe(e,!!r,r?[]:"",!1));return;case"textarea":ct=it=null;for(T in r)if(u=r[T],r.hasOwnProperty(T)&&u!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,l,u)}for(y in l)if(u=l[y],d=r[y],l.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Ie(e,n,y,u,l,d)}yn(e,it,ct);return;case"option":for(var Ht in r)if(it=r[Ht],r.hasOwnProperty(Ht)&&it!=null&&!l.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:Ie(e,n,Ht,null,l,it)}for(B in l)if(it=l[B],ct=r[B],l.hasOwnProperty(B)&&it!==ct&&(it!=null||ct!=null))switch(B){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ie(e,n,B,it,l,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in r)it=r[Jt],r.hasOwnProperty(Jt)&&it!=null&&!l.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,l,it);for(et in l)if(it=l[et],ct=r[et],l.hasOwnProperty(et)&&it!==ct&&(it!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,n));break;default:Ie(e,n,et,it,l,ct)}return;default:if(Zc(n)){for(var He in r)it=r[He],r.hasOwnProperty(He)&&it!==void 0&&!l.hasOwnProperty(He)&&Pf(e,n,He,void 0,l,it);for(dt in l)it=l[dt],ct=r[dt],!l.hasOwnProperty(dt)||it===ct||it===void 0&&ct===void 0||Pf(e,n,dt,it,l,ct);return}}for(var Z in r)it=r[Z],r.hasOwnProperty(Z)&&it!=null&&!l.hasOwnProperty(Z)&&Ie(e,n,Z,null,l,it);for(xt in l)it=l[xt],ct=r[xt],!l.hasOwnProperty(xt)||it===ct||it==null&&ct==null||Ie(e,n,xt,it,l,ct)}function sv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var u=r[l],d=u.transferSize,y=u.initiatorType,T=u.duration;if(d&&T&&sv(y)){for(y=0,T=u.responseEnd,l+=1;l<r.length;l++){var B=r[l],et=B.startTime;if(et>T)break;var dt=B.transferSize,xt=B.initiatorType;dt&&sv(xt)&&(B=B.responseEnd,y+=dt*(B<T?1:(T-et)/(B-et)))}if(--l,n+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ff=null,Bf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function ov(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function Vy(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(e){return uv.resolve(null).then(e).catch(Wy)}:cv;function Wy(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function fv(e,n){var r=n,l=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(u),rs(n);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")xo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,xo(r);for(var d=r.firstChild;d;){var y=d.nextSibling,T=d.nodeName;d[Za]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=y}}else r==="body"&&xo(e.ownerDocument.body);r=u}while(r);rs(n)}function hv(e,n){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Gf(r),Fs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function qy(e,n,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function Yy(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=li(e.nextSibling),e===null))return null;return e}function dv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Vf(e){return e.data==="$?"||e.data==="$~"}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jy(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xf=null;function pv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return li(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function mv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function gv(e,n,r){switch(n=Wl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Fs(e)}var ci=new Map,vv=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=$.d;$.d={f:Zy,r:Ky,D:Qy,C:Jy,L:$y,m:tS,X:nS,S:eS,M:iS};function Zy(){var e=$i.f(),n=Fl();return e||n}function Ky(e){var n=j(e);n!==null&&n.tag===5&&n.type==="form"?Om(n):$i.r(e)}var ns=typeof document>"u"?null:document;function _v(e,n,r){var l=ns;if(l&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),vv.has(u)||(vv.add(u),e={rel:e,crossOrigin:r,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Tn(n,"link",e),q(n),l.head.appendChild(n)))}}function Qy(e){$i.D(e),_v("dns-prefetch",e,null)}function Jy(e,n){$i.C(e,n),_v("preconnect",e,n)}function $y(e,n,r){$i.L(e,n,r);var l=ns;if(l&&e&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+mn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+mn(r.imageSizes)+'"]')):u+='[href="'+mn(e)+'"]';var d=u;switch(n){case"style":d=is(e);break;case"script":d=as(e)}ci.has(d)||(e=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ci.set(d,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(yo(d))||n==="script"&&l.querySelector(So(d))||(n=l.createElement("link"),Tn(n,"link",e),q(n),l.head.appendChild(n)))}}function tS(e,n){$i.m(e,n);var r=ns;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(l)+'"][href="'+mn(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=as(e)}if(!ci.has(d)&&(e=v({rel:"modulepreload",href:e},n),ci.set(d,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(So(d)))return}l=r.createElement("link"),Tn(l,"link",e),q(l),r.head.appendChild(l)}}}function eS(e,n,r){$i.S(e,n,r);var l=ns;if(l&&e){var u=st(l).hoistableStyles,d=is(e);n=n||"default";var y=u.get(d);if(!y){var T={loading:0,preload:null};if(y=l.querySelector(yo(d)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ci.get(d))&&Wf(e,r);var B=y=l.createElement("link");q(B),Tn(B,"link",e),B._p=new Promise(function(et,dt){B.onload=et,B.onerror=dt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(y,n,l)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(d,y)}}}function nS(e,n){$i.X(e,n);var r=ns;if(r&&e){var l=st(r).hoistableScripts,u=as(e),d=l.get(u);d||(d=r.querySelector(So(u)),d||(e=v({src:e,async:!0},n),(n=ci.get(u))&&qf(e,n),d=r.createElement("script"),q(d),Tn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function iS(e,n){$i.M(e,n);var r=ns;if(r&&e){var l=st(r).hoistableScripts,u=as(e),d=l.get(u);d||(d=r.querySelector(So(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&qf(e,n),d=r.createElement("script"),q(d),Tn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function xv(e,n,r,l){var u=(u=St.current)?ql(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=is(r.href),r=st(u).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=is(r.href);var d=st(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(yo(e)))&&!d._p&&(y.instance=d,y.state.loading=5),ci.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ci.set(e,r),d||aS(u,e,r,y.state))),n&&l===null)throw Error(a(528,""));return y}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(r),r=st(u).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function is(e){return'href="'+mn(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function yv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Tn(n,"link",r),q(n),e.head.appendChild(n))}function as(e){return'[src="'+mn(e)+'"]'}function So(e){return"script[async]"+e}function Sv(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+mn(r.href)+'"]');if(l)return n.instance=l,q(l),l;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),q(l),Tn(l,"style",u),Yl(l,r.precedence,e),n.instance=l;case"stylesheet":u=is(r.href);var d=e.querySelector(yo(u));if(d)return n.state.loading|=4,n.instance=d,q(d),d;l=yv(r),(u=ci.get(u))&&Wf(l,u),d=(e.ownerDocument||e).createElement("link"),q(d);var y=d;return y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),Tn(d,"link",l),n.state.loading|=4,Yl(d,r.precedence,e),n.instance=d;case"script":return d=as(r.src),(u=e.querySelector(So(d)))?(n.instance=u,q(u),u):(l=r,(u=ci.get(d))&&(l=v({},r),qf(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),Tn(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Yl(l,r.precedence,e));return n.instance}function Yl(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,y=0;y<l.length;y++){var T=l[y];if(T.dataset.precedence===n)d=T;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function Mv(e,n,r){if(jl===null){var l=new Map,u=jl=new Map;u.set(r,l)}else u=jl,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Za]||d[Ke]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(n)||"";y=e+y;var T=l.get(y);T?T.push(d):l.set(y,[d])}}return l}function Ev(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function rS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function sS(e,n,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=is(l.href),d=n.querySelector(yo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,q(d);return}d=n.ownerDocument||n,l=yv(l),(u=ci.get(u))&&Wf(l,u),d=d.createElement("link"),q(d);var y=d;y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),Tn(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Zl.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Yf=0;function oS(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Yf===0&&(Yf=62500*Gy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Yf?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(lS,e),Kl=null,Zl.call(e))}function lS(e,n){if(!(n.state.loading&4)){var r=Kl.get(e);if(r)var l=r.get(null);else{r=new Map,Kl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(r.set(y.dataset.precedence,y),l=y)}l&&r.set(null,l)}u=n.instance,y=u.getAttribute("data-precedence"),d=r.get(y)||l,d===l&&r.set(null,u),r.set(y,u),this.count++,l=Zl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function cS(e,n,r,l,u,d,y,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function bv(e,n,r,l,u,d,y,T,B,et,dt,xt){return e=new cS(e,n,r,y,B,et,dt,xt,T),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),e.current=d,d.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:n},wu(d),e}function Av(e){return e?(e=zr,e):zr}function Rv(e,n,r,l,u,d){u=Av(u),l.context===null?l.context=u:l.pendingContext=u,l=_a(n),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=xa(e,l,n),r!==null&&(Vn(r,e,n),$s(r,e,n))}function Cv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function jf(e,n){Cv(e,n),(e=e.alternate)&&Cv(e,n)}function wv(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Vn(n,e,67108864),jf(e,67108864)}}function Dv(e){if(e.tag===13||e.tag===31){var n=Jn();n=Ya(n);var r=$a(e,n);r!==null&&Vn(r,e,n),jf(e,n)}}var Jl=!0;function uS(e,n,r,l){var u=O.T;O.T=null;var d=$.p;try{$.p=2,Zf(e,n,r,l)}finally{$.p=d,O.T=u}}function fS(e,n,r,l){var u=O.T;O.T=null;var d=$.p;try{$.p=8,Zf(e,n,r,l)}finally{$.p=d,O.T=u}}function Zf(e,n,r,l){if(Jl){var u=Kf(l);if(u===null)zf(e,n,l,$l,r),Lv(e,l);else if(dS(u,e,n,r,l))l.stopPropagation();else if(Lv(e,l),n&4&&-1<hS.indexOf(e)){for(;u!==null;){var d=j(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=Rt(d.pendingLanes);if(y!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var B=1<<31-ne(y);T.entanglements[1]|=B,y&=~B}Di(d),(Ue&6)===0&&(zl=pt()+500,go(0))}}break;case 31:case 13:T=$a(d,2),T!==null&&Vn(T,d,2),Fl(),jf(d,2)}if(d=Kf(l),d===null&&zf(e,n,l,$l,r),d===u)break;u=d}u!==null&&l.stopPropagation()}else zf(e,n,l,null,r)}}function Kf(e){return e=Qc(e),Qf(e)}var $l=null;function Qf(e){if($l=null,e=R(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function Uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case _t:return 2;case qt:return 8;case Ct:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Jf=!1,Da=null,Ua=null,La=null,Eo=new Map,To=new Map,Na=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lv(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,r,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},n!==null&&(n=j(n),n!==null&&wv(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function dS(e,n,r,l,u){switch(n){case"focusin":return Da=bo(Da,e,n,r,l,u),!0;case"dragenter":return Ua=bo(Ua,e,n,r,l,u),!0;case"mouseover":return La=bo(La,e,n,r,l,u),!0;case"pointerover":var d=u.pointerId;return Eo.set(d,bo(Eo.get(d)||null,e,n,r,l,u)),!0;case"gotpointercapture":return d=u.pointerId,To.set(d,bo(To.get(d)||null,e,n,r,l,u)),!0}return!1}function Nv(e){var n=R(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,ja(e.priority,function(){Dv(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,ja(e.priority,function(){Dv(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Kf(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Kc=l,r.target.dispatchEvent(l),Kc=null}else return n=j(r),n!==null&&wv(n),e.blockedOn=r,!1;n.shift()}return!0}function Ov(e,n,r){tc(e)&&r.delete(n)}function pS(){Jf=!1,Da!==null&&tc(Da)&&(Da=null),Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),Eo.forEach(Ov),To.forEach(Ov)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Jf||(Jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,pS)))}var nc=null;function zv(e){nc!==e&&(nc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(Qf(l||r)===null)continue;break}var d=j(r);d!==null&&(e.splice(n,3),n-=3,Zu(d,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function rs(e){function n(B){return ec(B,e)}Da!==null&&ec(Da,e),Ua!==null&&ec(Ua,e),La!==null&&ec(La,e),Eo.forEach(n),To.forEach(n);for(var r=0;r<Na.length;r++){var l=Na[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Na.length&&(r=Na[0],r.blockedOn===null);)Nv(r),r.blockedOn===null&&Na.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],d=r[l+1],y=u[xn]||null;if(typeof d=="function")y||zv(r);else if(y){var T=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[xn]||null)T=y.formAction;else if(Qf(u)!==null)continue}else T=y.action;typeof T=="function"?r[l+1]=T:(r.splice(l,3),l-=3),zv(r)}}}function Pv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $f(e){this._internalRoot=e}ic.prototype.render=$f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=Jn();Rv(r,l,e,n,null,null)},ic.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rv(e.current,2,null,e,null,null),Fl(),n[Pi]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=zs();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Na.length&&n!==0&&n<Na[r].priority;r++);Na.splice(r,0,e),r===0&&Nv(e)}};var Fv=t.version;if(Fv!=="19.2.7")throw Error(a(527,Fv,"19.2.7"));$.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var mS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Qt=ac.inject(mS),Yt=ac}catch{}}return Ro.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",u=Xm,d=Wm,y=qm;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=bv(e,1,!1,null,null,r,l,null,u,d,y,Pv),e[Pi]=n.current,Of(e),new $f(n)},Ro.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,u="",d=Xm,y=Wm,T=qm,B=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(y=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.formState!==void 0&&(B=r.formState)),n=bv(e,1,!0,n,r??null,l,u,B,d,y,T,Pv),n.context=Av(null),r=n.current,l=Jn(),l=Ya(l),u=_a(l),u.callback=null,xa(r,u,l),r=l,n.current.lanes=r,_n(n,r),Di(n),e[Pi]=n.current,Of(e),new ic(n)},Ro.version="19.2.7",Ro}var Yv;function RS(){if(Yv)return nh.exports;Yv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=AS(),nh.exports}var CS=RS();const wS="modulepreload",DS=function(s){return"/makemecubemaster/"+s},jv={},US=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=f(i.map(m=>{if(m=DS(m),m in jv)return;jv[m]=!0;const g=m.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":wS,g||(_.as="script"),_.crossOrigin="",_.href=m,p&&_.setAttribute("nonce",p),document.head.appendChild(_),g)return new Promise((S,E)=>{_.addEventListener("load",S),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return o.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function LS(s={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:a,onOfflineReady:o,onRegistered:c,onRegisteredSW:f,onRegisterError:h}=s;let p,m;const g=async(_=!0)=>{await m};async function v(){if("serviceWorker"in navigator){if(p=await US(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(_=>{h==null||h(_)}),!p)return;p.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",_=>{_.isUpdate||o==null||o()}),p.register({immediate:t}).then(_=>{f?f("/makemecubemaster/sw.js",_):c==null||c(_)}).catch(_=>{h==null||h(_)})}}return m=v(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="175",NS=0,Zv=1,OS=2,f0=1,zS=2,ra=3,Wa=0,Xn=1,Li=2,Va=0,Ms=1,Kv=2,Qv=3,Jv=4,PS=5,yr=100,FS=101,BS=102,IS=103,HS=104,GS=200,VS=201,kS=202,XS=203,Yh=204,jh=205,WS=206,qS=207,YS=208,jS=209,ZS=210,KS=211,QS=212,JS=213,$S=214,Zh=0,Kh=1,Qh=2,Ts=3,Jh=4,$h=5,td=6,ed=7,h0=0,tM=1,eM=2,ka=0,nM=1,iM=2,aM=3,rM=4,sM=5,oM=6,lM=7,d0=300,bs=301,As=302,nd=303,id=304,Vc=306,ad=1e3,Mr=1001,rd=1002,bi=1003,cM=1004,rc=1005,Ni=1006,sh=1007,Er=1008,ca=1009,p0=1010,m0=1011,Bo=1012,Fd=1013,br=1014,sa=1015,Vo=1016,Bd=1017,Id=1018,Io=1020,g0=35902,v0=1021,_0=1022,Ti=1023,x0=1024,y0=1025,Ho=1026,Go=1027,S0=1028,Hd=1029,M0=1030,Gd=1031,Vd=1033,Dc=33776,Uc=33777,Lc=33778,Nc=33779,sd=35840,od=35841,ld=35842,cd=35843,ud=36196,fd=37492,hd=37496,dd=37808,pd=37809,md=37810,gd=37811,vd=37812,_d=37813,xd=37814,yd=37815,Sd=37816,Md=37817,Ed=37818,Td=37819,bd=37820,Ad=37821,Oc=36492,Rd=36494,Cd=36495,E0=36283,wd=36284,Dd=36285,Ud=36286,uM=3200,fM=3201,hM=0,dM=1,Ga="",hi="srgb",Rs="srgb-linear",Bc="linear",Ge="srgb",ss=7680,$v=519,pM=512,mM=513,gM=514,T0=515,vM=516,_M=517,xM=518,yM=519,t_=35044,e_="300 es",oa=2e3,Ic=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=Math.PI/180,Ld=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]).toLowerCase()}function ve(s,t,i){return Math.max(t,Math.min(i,s))}function SM(s,t){return(s%t+t)%t}function lh(s,t,i){return(1-i)*s+i*t}function Co(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,i=0){te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,o=t.elements;return this.x=o[0]*i+o[3]*a+o[6],this.y=o[1]*i+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),o=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*o+t.x,this.y=c*o+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,i,a,o,c,f,h,p,m){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,o,c,f,h,p,m)}set(t,i,a,o,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,o=i.elements,c=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],g=a[4],v=a[7],_=a[2],S=a[5],E=a[8],A=o[0],M=o[3],x=o[6],P=o[1],U=o[4],w=o[7],k=o[2],F=o[5],z=o[8];return c[0]=f*A+h*P+p*k,c[3]=f*M+h*U+p*F,c[6]=f*x+h*w+p*z,c[1]=m*A+g*P+v*k,c[4]=m*M+g*U+v*F,c[7]=m*x+g*w+v*z,c[2]=_*A+S*P+E*k,c[5]=_*M+S*U+E*F,c[8]=_*x+S*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-a*c*g+a*h*p+o*c*m-o*f*p}invert(){const t=this.elements,i=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=g*f-h*m,_=h*p-g*c,S=m*c-f*p,E=i*v+a*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(o*m-g*a)*A,t[2]=(h*a-o*f)*A,t[3]=_*A,t[4]=(g*i-o*p)*A,t[5]=(o*c-h*i)*A,t[6]=S*A,t[7]=(a*p-m*i)*A,t[8]=(f*i-a*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,o,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-o*m,o*p,-o*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let o=0;o<9;o++)if(i[o]!==a[o])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new he;function b0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function MM(){const s=Hc("canvas");return s.style.display="block",s}const n_={};function zc(s){s in n_||(n_[s]=!0,console.warn(s))}function EM(s,t,i){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}function TM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const i_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(o.r=la(o.r),o.g=la(o.g),o.b=la(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(o.r=Es(o.r),o.g=Es(o.g),o.b=Es(o.b))),o},fromWorkingColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},toWorkingColorSpace:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ga?Bc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:a,transfer:Bc,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:a,transfer:Ge,toXYZ:i_,fromXYZ:a_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const De=AM();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class RM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{os===void 0&&(os=Hc("canvas")),os.width=t.width,os.height=t.height;const o=os.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=os}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return a.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(la(i[a]/255)*255):i[a]=la(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let CM=0;class kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(uh(o[f].image)):c.push(uh(o[f]))}else c=uh(o);a.url=c}return i||(t.images[this.uuid]=a),a}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?RM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wM=0;class Wn extends Ds{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,a=Mr,o=Mr,c=Ni,f=Er,h=Ti,p=ca,m=Wn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=ko(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==d0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ad:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ad:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=d0;Wn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,a=0,o=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,o){return this.x=t,this.y=i,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*o+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*o+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*o+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,o,c;const p=t.elements,m=p[0],g=p[4],v=p[8],_=p[1],S=p[5],E=p[9],A=p[2],M=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,w=(S+1)/2,k=(x+1)/2,F=(g+_)/4,z=(v+A)/4,X=(E+M)/4;return U>w&&U>k?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=F/a,c=z/a):w>k?w<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),a=F/o,c=X/o):k<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(k),a=z/c,o=X/c),this.set(a,o,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(v-A)/P,this.z=(_-g)/P,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DM extends Ds{constructor(t=1,i=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const o={width:t,height:i,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Wn(o,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=i,this.textures[o].image.depth=a;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},t.textures[i].image);this.textures[i].source=new kd(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends DM{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class A0 extends Wn{constructor(t=null,i=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class UM extends Wn{constructor(t=null,i=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:o},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=0,i=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=o}static slerpFlat(t,i,a,o,c,f,h){let p=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];const _=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(h===1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(v!==A||p!==_||m!==S||g!==E){let M=1-h;const x=p*_+m*S+g*E+v*A,P=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const k=Math.sqrt(U),F=Math.atan2(k,x*P);M=Math.sin(M*F)/k,h=Math.sin(h*F)/k}const w=h*P;if(p=p*M+_*w,m=m*M+S*w,g=g*M+E*w,v=v*M+A*w,M===1-h){const k=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=k,m*=k,g*=k,v*=k}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,a,o,c,f){const h=a[o],p=a[o+1],m=a[o+2],g=a[o+3],v=c[f],_=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*v+p*S-m*_,t[i+1]=p*E+g*_+m*v-h*S,t[i+2]=m*E+g*S+h*_-p*v,t[i+3]=g*E-h*v-p*_-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,o){return this._x=t,this._y=i,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(o/2),v=h(c/2),_=p(a/2),S=p(o/2),E=p(c/2);switch(f){case"XYZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"YXZ":this._x=_*g*v+m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"ZXY":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v-_*S*E;break;case"ZYX":this._x=_*g*v-m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v+_*S*E;break;case"YZX":this._x=_*g*v+m*S*E,this._y=m*S*v+_*g*E,this._z=m*g*E-_*S*v,this._w=m*g*v-_*S*E;break;case"XZY":this._x=_*g*v-m*S*E,this._y=m*S*v-_*g*E,this._z=m*g*E+_*S*v,this._w=m*g*v+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],o=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],v=i[10],_=a+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-o)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(g-p)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+m)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(c-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(f-o)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,i/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,o=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*h+o*m-c*p,this._y=o*g+f*p+c*h-a*m,this._z=c*g+f*m+a*p-o*h,this._w=f*g-a*h-o*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,o=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+o*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=o,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*a+i*this._x,this._y=S*o+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),v=Math.sin((1-i)*g)/m,_=Math.sin(i*g)/m;return this._w=f*v+this._w*_,this._x=a*v+this._x*_,this._y=o*v+this._y*_,this._z=c*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,a=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(r_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(r_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*o,this.y=c[1]*i+c[4]*a+c[7]*o,this.z=c[2]*i+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,o=this.z,c=t.elements,f=1/(c[3]*i+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*o+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*o+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*o+c[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,o=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*o-h*a),g=2*(h*i-c*o),v=2*(c*a-f*i);return this.x=i+p*m+f*v-h*g,this.y=a+p*g+h*m-c*v,this.z=o+p*v+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*o,this.y=c[1]*i+c[5]*a+c[9]*o,this.z=c[2]*i+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ve(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,o=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=o*p-c*h,this.y=c*f-a*p,this.z=a*h-o*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(ve(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return i*i+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const o=Math.sin(i)*t;return this.x=o*Math.sin(a),this.y=Math.cos(i)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new K,r_=new Xo;class Wo{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),sc.copy(a.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),oc.subVectors(this.max,wo),ls.subVectors(t.a,wo),cs.subVectors(t.b,wo),us.subVectors(t.c,wo),za.subVectors(cs,ls),Pa.subVectors(us,cs),hr.subVectors(ls,us);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-hr.z,hr.y,za.z,0,-za.x,Pa.z,0,-Pa.x,hr.z,0,-hr.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-hr.y,hr.x,0];return!hh(i,ls,cs,us,oc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,ls,cs,us,oc))?!1:(lc.crossVectors(za,Pa),i=[lc.x,lc.y,lc.z],hh(i,ls,cs,us,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new K,new K,new K,new K,new K,new K,new K,new K],yi=new K,sc=new Wo,ls=new K,cs=new K,us=new K,za=new K,Pa=new K,hr=new K,wo=new K,oc=new K,lc=new K,dr=new K;function hh(s,t,i,a,o){for(let c=0,f=s.length-3;c<=f;c+=3){dr.fromArray(s,c);const h=o.x*Math.abs(dr.x)+o.y*Math.abs(dr.y)+o.z*Math.abs(dr.z),p=t.dot(dr),m=i.dot(dr),g=a.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const LM=new Wo,Do=new K,dh=new K;class Xd{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):LM.setFromPoints(t).getCenter(a);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),o=(a-this.radius)*.5;this.center.addScaledVector(Do,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(dh)),this.expandByPoint(Do.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new K,ph=new K,cc=new K,Fa=new K,mh=new K,uc=new K,gh=new K;class NM{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,a,o){ph.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(ph);const c=t.distanceTo(i)*.5,f=-this.direction.dot(cc),h=Fa.dot(this.direction),p=-Fa.dot(cc),m=Fa.lengthSq(),g=Math.abs(1-f*f);let v,_,S,E;if(g>0)if(v=f*p-h,_=f*h-p,E=c*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,S=v*(v+f*_+2*h)+_*(f*v+_+2*p)+m}else _=c,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _=-c,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;else _<=-E?(v=Math.max(0,-(-f*c+h)),_=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+_*(_+2*p)+m):_<=E?(v=0,_=Math.min(Math.max(-c,-p),c),S=_*(_+2*p)+m):(v=Math.max(0,-(f*c+h)),_=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+_*(_+2*p)+m);else _=f>0?-c:c,v=Math.max(0,-(f*_+h)),S=-v*v+_*(_+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ph).addScaledVector(cc,_),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const a=ea.dot(this.direction),o=ea.dot(ea)-a*a,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,o,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(a=(t.min.x-_.x)*m,o=(t.max.x-_.x)*m):(a=(t.max.x-_.x)*m,o=(t.min.x-_.x)*m),g>=0?(c=(t.min.y-_.y)*g,f=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,f=(t.min.y-_.y)*g),a>f||c>o||((c>a||isNaN(a))&&(a=c),(f<o||isNaN(o))&&(o=f),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,a,o,c){mh.subVectors(i,t),uc.subVectors(a,t),gh.crossVectors(mh,uc);let f=this.direction.dot(gh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const p=h*this.direction.dot(uc.crossVectors(Fa,uc));if(p<0)return null;const m=h*this.direction.dot(mh.cross(Fa));if(m<0||p+m>f)return null;const g=-h*Fa.dot(gh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,a,o,c,f,h,p,m,g,v,_,S,E,A,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,o,c,f,h,p,m,g,v,_,S,E,A,M)}set(t,i,a,o,c,f,h,p,m,g,v,_,S,E,A,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=a,x[12]=o,x[1]=c,x[5]=f,x[9]=h,x[13]=p,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=E,x[11]=A,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,o=1/fs.setFromMatrixColumn(t,0).length(),c=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=a[0]*o,i[1]=a[1]*o,i[2]=a[2]*o,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,o=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const _=f*g,S=f*v,E=h*g,A=h*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=_-A*m,i[9]=-h*p,i[2]=A-_*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const _=p*g,S=p*v,E=m*g,A=m*v;i[0]=_+A*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=A+_*h,i[10]=f*p}else if(t.order==="ZXY"){const _=p*g,S=p*v,E=m*g,A=m*v;i[0]=_-A*h,i[4]=-f*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=A-_*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const _=f*g,S=f*v,E=h*g,A=h*v;i[0]=p*g,i[4]=E*m-S,i[8]=_*m+A,i[1]=p*v,i[5]=A*m+_,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const _=f*p,S=f*m,E=h*p,A=h*m;i[0]=p*g,i[4]=A-_*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*v+E,i[10]=_-A*v}else if(t.order==="XZY"){const _=f*p,S=f*m,E=h*p,A=h*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=_*v+A,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*g,i[10]=A*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OM,t,zM)}lookAt(t,i,a){const o=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ba.crossVectors(a,$n),Ba.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ba.crossVectors(a,$n)),Ba.normalize(),fc.crossVectors($n,Ba),o[0]=Ba.x,o[4]=fc.x,o[8]=$n.x,o[1]=Ba.y,o[5]=fc.y,o[9]=$n.y,o[2]=Ba.z,o[6]=fc.z,o[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,o=i.elements,c=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],g=a[1],v=a[5],_=a[9],S=a[13],E=a[2],A=a[6],M=a[10],x=a[14],P=a[3],U=a[7],w=a[11],k=a[15],F=o[0],z=o[4],X=o[8],D=o[12],C=o[1],H=o[5],nt=o[9],J=o[13],lt=o[2],vt=o[6],O=o[10],$=o[14],Q=o[3],Mt=o[7],ot=o[11],L=o[15];return c[0]=f*F+h*C+p*lt+m*Q,c[4]=f*z+h*H+p*vt+m*Mt,c[8]=f*X+h*nt+p*O+m*ot,c[12]=f*D+h*J+p*$+m*L,c[1]=g*F+v*C+_*lt+S*Q,c[5]=g*z+v*H+_*vt+S*Mt,c[9]=g*X+v*nt+_*O+S*ot,c[13]=g*D+v*J+_*$+S*L,c[2]=E*F+A*C+M*lt+x*Q,c[6]=E*z+A*H+M*vt+x*Mt,c[10]=E*X+A*nt+M*O+x*ot,c[14]=E*D+A*J+M*$+x*L,c[3]=P*F+U*C+w*lt+k*Q,c[7]=P*z+U*H+w*vt+k*Mt,c[11]=P*X+U*nt+w*O+k*ot,c[15]=P*D+U*J+w*$+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],o=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],v=t[6],_=t[10],S=t[14],E=t[3],A=t[7],M=t[11],x=t[15];return E*(+c*p*v-o*m*v-c*h*_+a*m*_+o*h*S-a*p*S)+A*(+i*p*S-i*m*_+c*f*_-o*f*S+o*m*g-c*p*g)+M*(+i*m*v-i*h*S-c*f*v+a*f*S+c*h*g-a*m*g)+x*(-o*h*g-i*p*v+i*h*_+o*f*v-a*f*_+a*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],o=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],v=t[9],_=t[10],S=t[11],E=t[12],A=t[13],M=t[14],x=t[15],P=v*M*m-A*_*m+A*p*S-h*M*S-v*p*x+h*_*x,U=E*_*m-g*M*m-E*p*S+f*M*S+g*p*x-f*_*x,w=g*A*m-E*v*m+E*h*S-f*A*S-g*h*x+f*v*x,k=E*v*p-g*A*p-E*h*_+f*A*_+g*h*M-f*v*M,F=i*P+a*U+o*w+c*k;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=P*z,t[1]=(A*_*c-v*M*c-A*o*S+a*M*S+v*o*x-a*_*x)*z,t[2]=(h*M*c-A*p*c+A*o*m-a*M*m-h*o*x+a*p*x)*z,t[3]=(v*p*c-h*_*c-v*o*m+a*_*m+h*o*S-a*p*S)*z,t[4]=U*z,t[5]=(g*M*c-E*_*c+E*o*S-i*M*S-g*o*x+i*_*x)*z,t[6]=(E*p*c-f*M*c-E*o*m+i*M*m+f*o*x-i*p*x)*z,t[7]=(f*_*c-g*p*c+g*o*m-i*_*m-f*o*S+i*p*S)*z,t[8]=w*z,t[9]=(E*v*c-g*A*c-E*a*S+i*A*S+g*a*x-i*v*x)*z,t[10]=(f*A*c-E*h*c+E*a*m-i*A*m-f*a*x+i*h*x)*z,t[11]=(g*h*c-f*v*c-g*a*m+i*v*m+f*a*S-i*h*S)*z,t[12]=k*z,t[13]=(g*A*o-E*v*o+E*a*_-i*A*_-g*a*M+i*v*M)*z,t[14]=(E*h*o-f*A*o-E*a*p+i*A*p+f*a*M-i*h*M)*z,t[15]=(f*v*o-g*h*o+g*a*p-i*v*p-f*a*_+i*h*_)*z,this}scale(t){const i=this.elements,a=t.x,o=t.y,c=t.z;return i[0]*=a,i[4]*=o,i[8]*=c,i[1]*=a,i[5]*=o,i[9]*=c,i[2]*=a,i[6]*=o,i[10]*=c,i[3]*=a,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,o))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),o=Math.sin(i),c=1-a,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+a,m*h-o*p,m*p+o*h,0,m*h+o*p,g*h+a,g*p-o*f,0,m*p-o*h,g*p+o*f,c*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,o,c,f){return this.set(1,a,c,0,t,1,f,0,i,o,1,0,0,0,0,1),this}compose(t,i,a){const o=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,v=h+h,_=c*m,S=c*g,E=c*v,A=f*g,M=f*v,x=h*v,P=p*m,U=p*g,w=p*v,k=a.x,F=a.y,z=a.z;return o[0]=(1-(A+x))*k,o[1]=(S+w)*k,o[2]=(E-U)*k,o[3]=0,o[4]=(S-w)*F,o[5]=(1-(_+x))*F,o[6]=(M+P)*F,o[7]=0,o[8]=(E+U)*z,o[9]=(M-P)*z,o[10]=(1-(_+A))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,a){const o=this.elements;let c=fs.set(o[0],o[1],o[2]).length();const f=fs.set(o[4],o[5],o[6]).length(),h=fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Si.copy(this);const m=1/c,g=1/f,v=1/h;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,i.setFromRotationMatrix(Si),a.x=c,a.y=f,a.z=h,this}makePerspective(t,i,a,o,c,f,h=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(a-o),v=(i+t)/(i-t),_=(a+o)/(a-o);let S,E;if(h===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Ic)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,o,c,f,h=oa){const p=this.elements,m=1/(i-t),g=1/(a-o),v=1/(f-c),_=(i+t)*m,S=(a+o)*g;let E,A;if(h===oa)E=(f+c)*v,A=-2*v;else if(h===Ic)E=c*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let o=0;o<16;o++)if(i[o]!==a[o])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const fs=new K,Si=new Ze,OM=new K(0,0,0),zM=new K(1,1,1),Ba=new K,fc=new K,$n=new K,s_=new Ze,o_=new Xo;class ua{constructor(t=0,i=0,a=0,o=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,o=this._order){return this._x=t,this._y=i,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],p=o[1],m=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return s_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s_,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return o_.setFromEuler(this),this.setFromQuaternion(o_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let PM=0;const l_=new K,hs=new Xo,na=new Ze,hc=new K,Uo=new K,FM=new K,BM=new Xo,c_=new K(1,0,0),u_=new K(0,1,0),f_=new K(0,0,1),h_={type:"added"},IM={type:"removed"},ds={type:"childadded",child:null},vh={type:"childremoved",child:null};class wn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new K,i=new ua,a=new Xo,o=new K(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ze},normalMatrix:{value:new he}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(c_,t)}rotateY(t){return this.rotateOnAxis(u_,t)}rotateZ(t){return this.rotateOnAxis(f_,t)}translateOnAxis(t,i){return l_.copy(t).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(c_,t)}translateY(t){return this.translateOnAxis(u_,t)}translateZ(t){return this.translateOnAxis(f_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?hc.copy(t):hc.set(t,i,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Uo,hc,this.up):na.lookAt(hc,Uo,this.up),this.quaternion.setFromRotationMatrix(na),o&&(na.extractRotation(o.matrixWorld),hs.setFromRotationMatrix(na),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IM),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,o=this.children.length;a<o;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,FM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,BM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),v=f(t.shapes),_=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}wn.DEFAULT_UP=new K(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new K,ia=new K,_h=new K,aa=new K,ps=new K,ms=new K,d_=new K,xh=new K,yh=new K,Sh=new K,Mh=new tn,Eh=new tn,Th=new tn;class Ei{constructor(t=new K,i=new K,a=new K){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,o){o.subVectors(a,i),Mi.subVectors(t,i),o.cross(Mi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,i,a,o,c){Mi.subVectors(o,i),ia.subVectors(a,i),_h.subVectors(t,i);const f=Mi.dot(Mi),h=Mi.dot(ia),p=Mi.dot(_h),m=ia.dot(ia),g=ia.dot(_h),v=f*m-h*h;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(m*p-h*g)*_,E=(f*g-h*p)*_;return c.set(1-S-E,E,S)}static containsPoint(t,i,a,o){return this.getBarycoord(t,i,a,o,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,a,o,c,f,h,p){return this.getBarycoord(t,i,a,o,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,aa.x),p.addScaledVector(f,aa.y),p.addScaledVector(h,aa.z),p)}static getInterpolatedAttribute(t,i,a,o,c,f){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,a),Th.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Mh,c.x),f.addScaledVector(Eh,c.y),f.addScaledVector(Th,c.z),f}static isFrontFacing(t,i,a,o){return Mi.subVectors(a,i),ia.subVectors(t,i),Mi.cross(ia).dot(o)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,o){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,a,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Mi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,o,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,a,o,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,o=this.b,c=this.c;let f,h;ps.subVectors(o,a),ms.subVectors(c,a),xh.subVectors(t,a);const p=ps.dot(xh),m=ms.dot(xh);if(p<=0&&m<=0)return i.copy(a);yh.subVectors(t,o);const g=ps.dot(yh),v=ms.dot(yh);if(g>=0&&v<=g)return i.copy(o);const _=p*v-g*m;if(_<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(ps,f);Sh.subVectors(t,c);const S=ps.dot(Sh),E=ms.dot(Sh);if(E>=0&&S<=E)return i.copy(c);const A=S*m-p*E;if(A<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(a).addScaledVector(ms,h);const M=g*E-S*v;if(M<=0&&v-g>=0&&S-E>=0)return d_.subVectors(c,o),h=(v-g)/(v-g+(S-E)),i.copy(o).addScaledVector(d_,h);const x=1/(M+A+_);return f=A*x,h=_*x,i.copy(a).addScaledVector(ps,f).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},dc={h:0,s:0,l:0};function bh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ze{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.toWorkingColorSpace(this,i),this}setRGB(t,i,a,o=De.workingColorSpace){return this.r=t,this.g=i,this.b=a,De.toWorkingColorSpace(this,o),this}setHSL(t,i,a,o=De.workingColorSpace){if(t=SM(t,1),i=ve(i,0,1),a=ve(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=bh(f,c,t+1/3),this.g=bh(f,c,t),this.b=bh(f,c,t-1/3)}return De.toWorkingColorSpace(this,o),this}setStyle(t,i=hi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const a=C0[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return De.fromWorkingColorSpace(Cn.copy(this),t),Math.round(ve(Cn.r*255,0,255))*65536+Math.round(ve(Cn.g*255,0,255))*256+Math.round(ve(Cn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.fromWorkingColorSpace(Cn.copy(this),i);const a=Cn.r,o=Cn.g,c=Cn.b,f=Math.max(a,o,c),h=Math.min(a,o,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const v=f-h;switch(m=g<=.5?v/(f+h):v/(2-f-h),f){case a:p=(o-c)/v+(o<c?6:0);break;case o:p=(c-a)/v+2;break;case c:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=hi){De.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,a=Cn.g,o=Cn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,i,a){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(dc);const a=lh(Ia.h,dc.h,i),o=lh(Ia.s,dc.s,i),c=lh(Ia.l,dc.l,i);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*o,this.g=c[1]*i+c[4]*a+c[7]*o,this.b=c[2]*i+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ze;ze.NAMES=C0;let HM=0;class kc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Ms,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=jh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(a.blending=this.blending),this.side!==Wa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Yh&&(a.blendSrc=this.blendSrc),this.blendDst!==jh&&(a.blendDst=this.blendDst),this.blendEquation!==yr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$v&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=o(t.textures),f=o(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const o=i.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Gc extends kc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new K,pc=new te;let GM=0;class Oi{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=t_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=i.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=Co(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,o){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array),o=kn(o,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,i,a,o,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array),o=kn(o,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==t_&&(t.usage=this.usage),t}}class w0 extends Oi{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class D0 extends Oi{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Dn extends Oi{constructor(t,i,a){super(new Float32Array(t),i,a)}}let VM=0;const ui=new Ze,Ah=new wn,gs=new K,ti=new Wo,Lo=new Wo,vn=new K;class zi extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(b0(t)?D0:w0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new he().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,a){return ui.makeTranslation(t,i,a),this.applyMatrix4(ui),this}scale(t,i,a){return ui.makeScale(t,i,a),this.applyMatrix4(ui),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Dn(a,3))}else{const a=Math.min(t.length,i.count);for(let o=0;o<a;o++){const c=t[o];i.setXYZ(o,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,o=i.length;a<o;a++){const c=i[a];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const a=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(ti.min,Lo.min),ti.expandByPoint(vn),vn.addVectors(ti.max,Lo.max),ti.expandByPoint(vn)):(ti.expandByPoint(Lo.min),ti.expandByPoint(Lo.max))}ti.getCenter(a);let o=0;for(let c=0,f=t.count;c<f;c++)vn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(vn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)vn.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(t,m),vn.add(gs)),o=Math.max(o,a.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,o=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new K,p[X]=new K;const m=new K,g=new K,v=new K,_=new te,S=new te,E=new te,A=new K,M=new K;function x(X,D,C){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,D),v.fromBufferAttribute(a,C),_.fromBufferAttribute(c,X),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(m),v.sub(m),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),M.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),h[X].add(A),h[D].add(A),h[C].add(A),p[X].add(M),p[D].add(M),p[C].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,D=P.length;X<D;++X){const C=P[X],H=C.start,nt=C.count;for(let J=H,lt=H+nt;J<lt;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const U=new K,w=new K,k=new K,F=new K;function z(X){k.fromBufferAttribute(o,X),F.copy(k);const D=h[X];U.copy(D),U.sub(k.multiplyScalar(k.dot(D))).normalize(),w.crossVectors(F,D);const H=w.dot(p[X])<0?-1:1;f.setXYZW(X,U.x,U.y,U.z,H)}for(let X=0,D=P.length;X<D;++X){const C=P[X],H=C.start,nt=C.count;for(let J=H,lt=H+nt;J<lt;J+=3)z(t.getX(J+0)),z(t.getX(J+1)),z(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new K,c=new K,f=new K,h=new K,p=new K,m=new K,g=new K,v=new K;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),A=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,M),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,A),m.fromBufferAttribute(a,M),h.add(g),p.add(g),m.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let _=0,S=i.count;_<S;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,c),v.subVectors(o,c),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,v=h.normalized,_=new m.constructor(p.length*g);let S=0,E=0;for(let A=0,M=p.length;A<M;A++){h.isInterleavedBufferAttribute?S=p[A]*h.data.stride+h.offset:S=p[A]*g;for(let x=0;x<g;x++)_[E++]=m[S++]}return new Oi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,v=m.length;g<v;g++){const _=m[g],S=t(_,a);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,_=m.length;v<_;v++){const S=m[v];g.push(S.toJSON(t.data))}g.length>0&&(o[p]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const p_=new Ze,pr=new NM,mc=new Xd,m_=new K,gc=new K,vc=new K,_c=new K,Rh=new K,xc=new K,g_=new K,yc=new K;class ei extends wn{constructor(t=new zi,i=new Gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const o=i[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){xc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],v=c[p];g!==0&&(Rh.fromBufferAttribute(v,t),f?xc.addScaledVector(Rh,g):xc.addScaledVector(Rh.sub(i),g))}i.add(xc)}return i}raycast(t,i){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),mc.copy(a.boundingSphere),mc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(mc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(mc,m_)===null||pr.origin.distanceToSquared(m_)>(t.far-t.near)**2))&&(p_.copy(c).invert(),pr.copy(t.ray).applyMatrix4(p_),!(a.boundingBox!==null&&pr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,a){let o;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const M=_[E],x=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,k=U;w<k;w+=3){const F=h.getX(w),z=h.getX(w+1),X=h.getX(w+2);o=Sc(this,x,t,a,m,g,v,F,z,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let M=E,x=A;M<x;M+=3){const P=h.getX(M),U=h.getX(M+1),w=h.getX(M+2);o=Sc(this,f,t,a,m,g,v,P,U,w),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=_.length;E<A;E++){const M=_[E],x=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,k=U;w<k;w+=3){const F=w,z=w+1,X=w+2;o=Sc(this,x,t,a,m,g,v,F,z,X),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let M=E,x=A;M<x;M+=3){const P=M,U=M+1,w=M+2;o=Sc(this,f,t,a,m,g,v,P,U,w),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}}}function kM(s,t,i,a,o,c,f,h){let p;if(t.side===Xn?p=a.intersectTriangle(f,c,o,!0,h):p=a.intersectTriangle(o,c,f,t.side===Wa,h),p===null)return null;yc.copy(h),yc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(yc);return m<i.near||m>i.far?null:{distance:m,point:yc.clone(),object:s}}function Sc(s,t,i,a,o,c,f,h,p,m){s.getVertexPosition(h,gc),s.getVertexPosition(p,vc),s.getVertexPosition(m,_c);const g=kM(s,t,i,a,gc,vc,_c,g_);if(g){const v=new K;Ei.getBarycoord(g_,gc,vc,_c,v),o&&(g.uv=Ei.getInterpolatedAttribute(o,h,p,m,v,new te)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,h,p,m,v,new te)),f&&(g.normal=Ei.getInterpolatedAttribute(f,h,p,m,v,new K),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new K,materialIndex:0};Ei.getNormal(gc,vc,_c,_.normal),g.face=_,g.barycoord=v}return g}class qo extends zi{constructor(t=1,i=1,a=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let _=0,S=0;E("z","y","x",-1,-1,a,i,t,f,c,0),E("z","y","x",1,-1,a,i,-t,f,c,1),E("x","z","y",1,1,t,a,i,o,f,2),E("x","z","y",1,-1,t,a,-i,o,f,3),E("x","y","z",1,-1,t,i,a,o,c,4),E("x","y","z",-1,-1,t,i,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(v,2));function E(A,M,x,P,U,w,k,F,z,X,D){const C=w/z,H=k/X,nt=w/2,J=k/2,lt=F/2,vt=z+1,O=X+1;let $=0,Q=0;const Mt=new K;for(let ot=0;ot<O;ot++){const L=ot*H-J;for(let W=0;W<vt;W++){const ft=W*C-nt;Mt[A]=ft*P,Mt[M]=L*U,Mt[x]=lt,m.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[M]=0,Mt[x]=F>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(W/z),v.push(1-ot/X),$+=1}}for(let ot=0;ot<X;ot++)for(let L=0;L<z;L++){const W=_+L+vt*ot,ft=_+L+vt*(ot+1),V=_+(L+1)+vt*(ot+1),ut=_+(L+1)+vt*ot;p.push(W,ft,ut),p.push(ft,V,ut),Q+=6}h.addGroup(S,Q,D),S+=Q,_+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const o=s[i][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=o.clone():Array.isArray(o)?t[i][a]=o.slice():t[i][a]=o}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const a=Cs(s[i]);for(const o in a)t[o]=a[o]}return t}function XM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function U0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const WM={clone:Cs,merge:On};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends kc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=XM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?i.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[o]={type:"m4",value:f.toArray()}:i.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class L0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new K,v_=new te,__=new te;class di extends L0{constructor(t=50,i=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ld*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ld*2*Math.atan(Math.tan(oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,v_,__),i.subVectors(__,v_)}setViewOffset(t,i,a,o,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(oh*.5*this.fov)/this.zoom,a=2*i,o=this.aspect*a,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,i-=f.offsetY*a/m,o*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,_s=1;class jM extends wn{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(vs,_s,t,i);o.layers=this.layers,this.add(o);const c=new di(vs,_s,t,i);c.layers=this.layers,this.add(c);const f=new di(vs,_s,t,i);f.layers=this.layers,this.add(f);const h=new di(vs,_s,t,i);h.layers=this.layers,this.add(h);const p=new di(vs,_s,t,i);p.layers=this.layers,this.add(p);const m=new di(vs,_s,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,o,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===oa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Ic)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(i,c),t.setRenderTarget(a,1,o),t.render(i,f),t.setRenderTarget(a,2,o),t.render(i,h),t.setRenderTarget(a,3,o),t.render(i,p),t.setRenderTarget(a,4,o),t.render(i,m),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),t.render(i,g),t.setRenderTarget(v,_,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class N0 extends Wn{constructor(t=[],i=bs,a,o,c,f,h,p,m,g){super(t,i,a,o,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ZM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new N0(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new qo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Cs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Xn,blending:Va});c.uniforms.tEquirect.value=i;const f=new ei(o,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ni),new jM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,o);t.setRenderTarget(c)}}class Tr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KM={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let o=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,a),x=this._getHandJoint(m,A);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=i.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(KM)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new Tr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class QM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wh=new K,JM=new K,$M=new he;class _r{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,o){return this.normal.set(t,i,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const o=wh.subVectors(a,i).cross(JM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(wh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||$M.getNormalMatrix(t),o=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Xd,Mc=new K;class Wd{constructor(t=new _r,i=new _r,a=new _r,o=new _r,c=new _r,f=new _r){this.planes=[t,i,a,o,c,f]}set(t,i,a,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=oa){const a=this.planes,o=t.elements,c=o[0],f=o[1],h=o[2],p=o[3],m=o[4],g=o[5],v=o[6],_=o[7],S=o[8],E=o[9],A=o[10],M=o[11],x=o[12],P=o[13],U=o[14],w=o[15];if(a[0].setComponents(p-c,_-m,M-S,w-x).normalize(),a[1].setComponents(p+c,_+m,M+S,w+x).normalize(),a[2].setComponents(p+f,_+g,M+E,w+P).normalize(),a[3].setComponents(p-f,_-g,M-E,w-P).normalize(),a[4].setComponents(p-h,_-v,M-A,w-U).normalize(),i===oa)a[5].setComponents(p+h,_+v,M+A,w+U).normalize();else if(i===Ic)a[5].setComponents(h,v,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const o=i[a];if(Mc.x=o.normal.x>0?t.max.x:t.min.x,Mc.y=o.normal.y>0?t.max.y:t.min.y,Mc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends Wn{constructor(t,i,a=br,o,c,f,h=bi,p=bi,m,g=Ho){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,o,c,f,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,o=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(o),i.push(c),o=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const a=this.getLengths();let o=0;const c=a.length;let f;i?f=i:f=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-f,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===f)return o/(c-1);const g=a[o],_=a[o+1]-g,S=(f-g)/_;return(o+S)/(c-1)}getTangent(t,i){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),p=i||(f.isVector2?new te:new K);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i=!1){const a=new K,o=[],c=[],f=[],h=new K,p=new Ze;for(let S=0;S<=t;S++){const E=S/t;o[S]=this.getTangentAt(E,new K)}c[0]=new K,f[0]=new K;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=m&&(m=g,a.set(1,0,0)),v<=m&&(m=v,a.set(0,1,0)),_<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(ve(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(ve(c[0].dot(c[t]),-1,1));S/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(o[E],S*E)),f[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class z0 extends fa{constructor(t=0,i=0,a=1,o=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new te){const a=i,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,S=m-this.aY;p=_*g-S*v+this.aX,m=_*v+S*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tE extends z0{constructor(t,i,a,o,c,f){super(t,i,a,a,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function qd(){let s=0,t=0,i=0,a=0;function o(c,f,h,p){s=c,t=h,i=-3*c+3*f-2*h-p,a=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){o(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,v){let _=(f-c)/m-(h-c)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+v)+(p-h)/v;_*=g,S*=g,o(f,h,_,S)},calc:function(c){const f=c*c,h=f*c;return s+t*c+i*f+a*h}}}const Ec=new K,Dh=new qd,Uh=new qd,Lh=new qd;class P0 extends fa{constructor(t=[],i=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=o}getPoint(t,i=new K){const a=i,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=o[(h-1)%c]:(Ec.subVectors(o[0],o[1]).add(o[0]),m=Ec);const v=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(Ec.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),A=Math.pow(v.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(g),S);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Dh.initNonuniformCatmullRom(m.x,v.x,_.x,g.x,E,A,M),Uh.initNonuniformCatmullRom(m.y,v.y,_.y,g.y,E,A,M),Lh.initNonuniformCatmullRom(m.z,v.z,_.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(m.x,v.x,_.x,g.x,this.tension),Uh.initCatmullRom(m.y,v.y,_.y,g.y,this.tension),Lh.initCatmullRom(m.z,v.z,_.z,g.z,this.tension));return a.set(Dh.calc(p),Uh.calc(p),Lh.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const o=this.points[i];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(new K().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function x_(s,t,i,a,o){const c=(a-t)*.5,f=(o-i)*.5,h=s*s,p=s*h;return(2*i-2*a+c+f)*p+(-3*i+3*a-2*c-f)*h+c*s+i}function eE(s,t){const i=1-s;return i*i*t}function nE(s,t){return 2*(1-s)*s*t}function iE(s,t){return s*s*t}function zo(s,t,i,a){return eE(s,t)+nE(s,i)+iE(s,a)}function aE(s,t){const i=1-s;return i*i*i*t}function rE(s,t){const i=1-s;return 3*i*i*s*t}function sE(s,t){return 3*(1-s)*s*s*t}function oE(s,t){return s*s*s*t}function Po(s,t,i,a,o){return aE(s,t)+rE(s,i)+sE(s,a)+oE(s,o)}class lE extends fa{constructor(t=new te,i=new te,a=new te,o=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=o}getPoint(t,i=new te){const a=i,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Po(t,o.x,c.x,f.x,h.x),Po(t,o.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cE extends fa{constructor(t=new K,i=new K,a=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=o}getPoint(t,i=new K){const a=i,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Po(t,o.x,c.x,f.x,h.x),Po(t,o.y,c.y,f.y,h.y),Po(t,o.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uE extends fa{constructor(t=new te,i=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new te){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new te){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fE extends fa{constructor(t=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new K){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hE extends fa{constructor(t=new te,i=new te,a=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new te){const a=i,o=this.v0,c=this.v1,f=this.v2;return a.set(zo(t,o.x,c.x,f.x),zo(t,o.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F0 extends fa{constructor(t=new K,i=new K,a=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new K){const a=i,o=this.v0,c=this.v1,f=this.v2;return a.set(zo(t,o.x,c.x,f.x),zo(t,o.y,c.y,f.y),zo(t,o.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dE extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new te){const a=i,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,p=o[f===0?f:f-1],m=o[f],g=o[f>o.length-2?o.length-1:f+1],v=o[f>o.length-3?o.length-1:f+2];return a.set(x_(h,p.x,m.x,g.x,v.x),x_(h,p.y,m.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const o=this.points[i];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const o=t.points[i];this.points.push(new te().fromArray(o))}return this}}var pE=Object.freeze({__proto__:null,ArcCurve:tE,CatmullRomCurve3:P0,CubicBezierCurve:lE,CubicBezierCurve3:cE,EllipseCurve:z0,LineCurve:uE,LineCurve3:fE,QuadraticBezierCurve:hE,QuadraticBezierCurve3:F0,SplineCurve:dE});class Yd extends zi{constructor(t=1,i=1,a=1,o=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;o=Math.floor(o),c=Math.floor(c);const g=[],v=[],_=[],S=[];let E=0;const A=[],M=a/2;let x=0;P(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(S,2));function P(){const w=new K,k=new K;let F=0;const z=(i-t)/a;for(let X=0;X<=c;X++){const D=[],C=X/c,H=C*(i-t)+t;for(let nt=0;nt<=o;nt++){const J=nt/o,lt=J*p+h,vt=Math.sin(lt),O=Math.cos(lt);k.x=H*vt,k.y=-C*a+M,k.z=H*O,v.push(k.x,k.y,k.z),w.set(vt,z,O).normalize(),_.push(w.x,w.y,w.z),S.push(J,1-C),D.push(E++)}A.push(D)}for(let X=0;X<o;X++)for(let D=0;D<c;D++){const C=A[D][X],H=A[D+1][X],nt=A[D+1][X+1],J=A[D][X+1];(t>0||D!==0)&&(g.push(C,H,J),F+=3),(i>0||D!==c-1)&&(g.push(H,nt,J),F+=3)}m.addGroup(x,F,0),x+=F}function U(w){const k=E,F=new te,z=new K;let X=0;const D=w===!0?t:i,C=w===!0?1:-1;for(let nt=1;nt<=o;nt++)v.push(0,M*C,0),_.push(0,C,0),S.push(.5,.5),E++;const H=E;for(let nt=0;nt<=o;nt++){const lt=nt/o*p+h,vt=Math.cos(lt),O=Math.sin(lt);z.x=D*O,z.y=M*C,z.z=D*vt,v.push(z.x,z.y,z.z),_.push(0,C,0),F.x=vt*.5+.5,F.y=O*.5*C+.5,S.push(F.x,F.y),E++}for(let nt=0;nt<o;nt++){const J=k+nt,lt=H+nt;w===!0?g.push(lt,lt+1,J):g.push(lt+1,lt,J),X+=3}m.addGroup(x,X,w===!0?1:2),x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jd extends Yd{constructor(t=1,i=1,a=32,o=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,a,o,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new jd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xc extends zi{constructor(t=1,i=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:o};const c=t/2,f=i/2,h=Math.floor(a),p=Math.floor(o),m=h+1,g=p+1,v=t/h,_=i/p,S=[],E=[],A=[],M=[];for(let x=0;x<g;x++){const P=x*_-f;for(let U=0;U<m;U++){const w=U*v-c;E.push(w,-P,0),A.push(0,0,1),M.push(U/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<h;P++){const U=P+m*x,w=P+m*(x+1),k=P+1+m*(x+1),F=P+1+m*x;S.push(U,w,F),S.push(w,k,F)}this.setIndex(S),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(A,3)),this.setAttribute("uv",new Dn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zd extends zi{constructor(t=.5,i=1,a=32,o=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:a,phiSegments:o,thetaStart:c,thetaLength:f},a=Math.max(3,a),o=Math.max(1,o);const h=[],p=[],m=[],g=[];let v=t;const _=(i-t)/o,S=new K,E=new te;for(let A=0;A<=o;A++){for(let M=0;M<=a;M++){const x=c+M/a*f;S.x=v*Math.cos(x),S.y=v*Math.sin(x),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,g.push(E.x,E.y)}v+=_}for(let A=0;A<o;A++){const M=A*(a+1);for(let x=0;x<a;x++){const P=x+M,U=P,w=P+a+1,k=P+a+2,F=P+1;h.push(U,w,F),h.push(w,k,F)}}this.setIndex(h),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Kd extends zi{constructor(t=new F0(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),i=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:o,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new K,p=new K,m=new te;let g=new K;const v=[],_=[],S=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(S,2));function A(){for(let U=0;U<i;U++)M(U);M(c===!1?i:0),P(),x()}function M(U){g=t.getPointAt(U/i,g);const w=f.normals[U],k=f.binormals[U];for(let F=0;F<=o;F++){const z=F/o*Math.PI*2,X=Math.sin(z),D=-Math.cos(z);p.x=D*w.x+X*k.x,p.y=D*w.y+X*k.y,p.z=D*w.z+X*k.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function x(){for(let U=1;U<=i;U++)for(let w=1;w<=o;w++){const k=(o+1)*(U-1)+(w-1),F=(o+1)*U+(w-1),z=(o+1)*U+w,X=(o+1)*(U-1)+w;E.push(k,F,X),E.push(F,z,X)}}function P(){for(let U=0;U<=i;U++)for(let w=0;w<=o;w++)m.x=U/i,m.y=w/o,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Kd(new pE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class mE extends kc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gE extends kc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class B0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nh=new Ze,y_=new K,S_=new K;class vE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(y_),S_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(S_),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class I0 extends L0{constructor(t=-1,i=1,a=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=o+i,p=o-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _E extends vE{constructor(){super(new I0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xE extends B0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new _E}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yE extends B0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class SE extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function M_(s,t,i,a){const o=ME(a);switch(i){case v0:return s*t;case x0:return s*t;case y0:return s*t*2;case S0:return s*t/o.components*o.byteLength;case Hd:return s*t/o.components*o.byteLength;case M0:return s*t*2/o.components*o.byteLength;case Gd:return s*t*2/o.components*o.byteLength;case _0:return s*t*3/o.components*o.byteLength;case Ti:return s*t*4/o.components*o.byteLength;case Vd:return s*t*4/o.components*o.byteLength;case Dc:case Uc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lc:case Nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case od:case cd:return Math.max(s,16)*Math.max(t,8)/4;case sd:case ld:return Math.max(s,8)*Math.max(t,8)/2;case ud:case fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Md:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Oc:case Rd:case Cd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case E0:case wd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Dd:case Ud:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ME(s){switch(s){case ca:case p0:return{byteLength:1,components:1};case Bo:case m0:case Vo:return{byteLength:2,components:1};case Bd:case Id:return{byteLength:2,components:4};case br:case Fd:case sa:return{byteLength:4,components:1};case g0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H0(){let s=null,t=!1,i=null,a=null;function o(c,f){i(c,f),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function EE(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,h),v.length===0)s.bufferSubData(m,0,g);else{v.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<v.length;S++){const E=v[_],A=v[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let S=0,E=v.length;S<E;S++){const A=v[S];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:c,update:f}}var TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
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
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
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
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
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
#endif`,NE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FE=`#ifdef USE_IRIDESCENCE
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
#endif`,BE=`#ifdef USE_BUMPMAP
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,YE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZE=`vec3 transformedNormal = objectNormal;
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
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",eT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
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
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aT=`#ifdef USE_ENVMAP
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
#endif`,rT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
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
}`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
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
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
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
#endif`,MT=`struct PhysicalMaterial {
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
}`,ET=`
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
#endif`,TT=`#if defined( RE_IndirectDiffuse )
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
#endif`,bT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NT=`#if defined( USE_POINTS_UV )
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
#endif`,OT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
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
#endif`,HT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qT=`#ifdef USE_NORMALMAP
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
#endif`,YT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lb=`float getShadowMask() {
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
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`uniform float scale;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Ib=`#define LAMBERT
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
}`,Hb=`#define LAMBERT
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
}`,Gb=`#define MATCAP
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
}`,Vb=`#define MATCAP
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
}`,kb=`#define NORMAL
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
}`,Xb=`#define NORMAL
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
}`,Wb=`#define PHONG
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
}`,qb=`#define PHONG
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
}`,Yb=`#define STANDARD
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
}`,jb=`#define STANDARD
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
}`,Zb=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Qb=`uniform float size;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,$b=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:TE,alphahash_pars_fragment:bE,alphamap_fragment:AE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:wE,aomap_fragment:DE,aomap_pars_fragment:UE,batching_pars_vertex:LE,batching_vertex:NE,begin_vertex:OE,beginnormal_vertex:zE,bsdfs:PE,iridescence_fragment:FE,bumpmap_pars_fragment:BE,clipping_planes_fragment:IE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:GE,clipping_planes_vertex:VE,color_fragment:kE,color_pars_fragment:XE,color_pars_vertex:WE,color_vertex:qE,common:YE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:ZE,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:JE,emissivemap_pars_fragment:$E,colorspace_fragment:tT,colorspace_pars_fragment:eT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:aT,envmap_pars_vertex:rT,envmap_physical_pars_fragment:gT,envmap_vertex:sT,fog_vertex:oT,fog_pars_vertex:lT,fog_fragment:cT,fog_pars_fragment:uT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:hT,lights_lambert_fragment:dT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:vT,lights_toon_pars_fragment:_T,lights_phong_fragment:xT,lights_phong_pars_fragment:yT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:TT,lights_fragment_end:bT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:RT,logdepthbuf_pars_vertex:CT,logdepthbuf_vertex:wT,map_fragment:DT,map_pars_fragment:UT,map_particle_fragment:LT,map_particle_pars_fragment:NT,metalnessmap_fragment:OT,metalnessmap_pars_fragment:zT,morphinstance_vertex:PT,morphcolor_vertex:FT,morphnormal_vertex:BT,morphtarget_pars_vertex:IT,morphtarget_vertex:HT,normal_fragment_begin:GT,normal_fragment_maps:VT,normal_pars_fragment:kT,normal_pars_vertex:XT,normal_vertex:WT,normalmap_pars_fragment:qT,clearcoat_normal_fragment_begin:YT,clearcoat_normal_fragment_maps:jT,clearcoat_pars_fragment:ZT,iridescence_pars_fragment:KT,opaque_fragment:QT,packing:JT,premultiplied_alpha_fragment:$T,project_vertex:tb,dithering_fragment:eb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:fb,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:vb,transmission_pars_fragment:_b,uv_pars_fragment:xb,uv_pars_vertex:yb,uv_vertex:Sb,worldpos_vertex:Mb,background_vert:Eb,background_frag:Tb,backgroundCube_vert:bb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:wb,depth_frag:Db,distanceRGBA_vert:Ub,distanceRGBA_frag:Lb,equirect_vert:Nb,equirect_frag:Ob,linedashed_vert:zb,linedashed_frag:Pb,meshbasic_vert:Fb,meshbasic_frag:Bb,meshlambert_vert:Ib,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:kb,meshnormal_frag:Xb,meshphong_vert:Wb,meshphong_frag:qb,meshphysical_vert:Yb,meshphysical_frag:jb,meshtoon_vert:Zb,meshtoon_frag:Kb,points_vert:Qb,points_frag:Jb,shadow_vert:$b,shadow_frag:t1,sprite_vert:e1,sprite_frag:n1},Lt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ui={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Tc={r:0,b:0,g:0},gr=new ua,i1=new Ze;function a1(s,t,i,a,o,c,f){const h=new ze(0);let p=c===!0?0:1,m,g,v=null,_=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function A(U){let w=!1;const k=E(U);k===null?x(h,p):k&&k.isColor&&(x(k,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(U,w){const k=E(w);k&&(k.isCubeTexture||k.mapping===Vc)?(g===void 0&&(g=new ei(new qo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Cs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(gr)),g.material.toneMapped=De.getTransfer(k.colorSpace)!==Ge,(v!==k||_!==k.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=k,_=k.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new ei(new Xc(2,2),new qa({name:"BackgroundMaterial",uniforms:Cs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=De.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(v!==k||_!==k.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=k,_=k.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,w){U.getRGB(Tc,U0(s)),a.buffers.color.setClear(Tc.r,Tc.g,Tc.b,w,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),p=w,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(h,p)},render:A,addToRenderList:M,dispose:P}}function r1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let c=o,f=!1;function h(C,H,nt,J,lt){let vt=!1;const O=v(J,nt,H);c!==O&&(c=O,m(c.object)),vt=S(C,J,nt,lt),vt&&E(C,J,nt,lt),lt!==null&&t.update(lt,s.ELEMENT_ARRAY_BUFFER),(vt||f)&&(f=!1,w(C,H,nt,J),lt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,H,nt){const J=nt.wireframe===!0;let lt=a[C.id];lt===void 0&&(lt={},a[C.id]=lt);let vt=lt[H.id];vt===void 0&&(vt={},lt[H.id]=vt);let O=vt[J];return O===void 0&&(O=_(p()),vt[J]=O),O}function _(C){const H=[],nt=[],J=[];for(let lt=0;lt<i;lt++)H[lt]=0,nt[lt]=0,J[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,H,nt,J){const lt=c.attributes,vt=H.attributes;let O=0;const $=nt.getAttributes();for(const Q in $)if($[Q].location>=0){const ot=lt[Q];let L=vt[Q];if(L===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),ot===void 0||ot.attribute!==L||L&&ot.data!==L.data)return!0;O++}return c.attributesNum!==O||c.index!==J}function E(C,H,nt,J){const lt={},vt=H.attributes;let O=0;const $=nt.getAttributes();for(const Q in $)if($[Q].location>=0){let ot=vt[Q];ot===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ot=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ot=C.instanceColor));const L={};L.attribute=ot,ot&&ot.data&&(L.data=ot.data),lt[Q]=L,O++}c.attributes=lt,c.attributesNum=O,c.index=J}function A(){const C=c.newAttributes;for(let H=0,nt=C.length;H<nt;H++)C[H]=0}function M(C){x(C,0)}function x(C,H){const nt=c.newAttributes,J=c.enabledAttributes,lt=c.attributeDivisors;nt[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),lt[C]!==H&&(s.vertexAttribDivisor(C,H),lt[C]=H)}function P(){const C=c.newAttributes,H=c.enabledAttributes;for(let nt=0,J=H.length;nt<J;nt++)H[nt]!==C[nt]&&(s.disableVertexAttribArray(nt),H[nt]=0)}function U(C,H,nt,J,lt,vt,O){O===!0?s.vertexAttribIPointer(C,H,nt,lt,vt):s.vertexAttribPointer(C,H,nt,J,lt,vt)}function w(C,H,nt,J){A();const lt=J.attributes,vt=nt.getAttributes(),O=H.defaultAttributeValues;for(const $ in vt){const Q=vt[$];if(Q.location>=0){let Mt=lt[$];if(Mt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const ot=Mt.normalized,L=Mt.itemSize,W=t.get(Mt);if(W===void 0)continue;const ft=W.buffer,V=W.type,ut=W.bytesPerElement,St=V===s.INT||V===s.UNSIGNED_INT||Mt.gpuType===Fd;if(Mt.isInterleavedBufferAttribute){const mt=Mt.data,Pt=mt.stride,Nt=Mt.offset;if(mt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Q.locationSize;Vt++)x(Q.location+Vt,mt.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Vt=0;Vt<Q.locationSize;Vt++)M(Q.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Vt=0;Vt<Q.locationSize;Vt++)U(Q.location+Vt,L/Q.locationSize,V,ot,Pt*ut,(Nt+L/Q.locationSize*Vt)*ut,St)}else{if(Mt.isInstancedBufferAttribute){for(let mt=0;mt<Q.locationSize;mt++)x(Q.location+mt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let mt=0;mt<Q.locationSize;mt++)M(Q.location+mt);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let mt=0;mt<Q.locationSize;mt++)U(Q.location+mt,L/Q.locationSize,V,ot,L*ut,L/Q.locationSize*mt*ut,St)}}else if(O!==void 0){const ot=O[$];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(Q.location,ot);break;case 3:s.vertexAttrib3fv(Q.location,ot);break;case 4:s.vertexAttrib4fv(Q.location,ot);break;default:s.vertexAttrib1fv(Q.location,ot)}}}}P()}function k(){X();for(const C in a){const H=a[C];for(const nt in H){const J=H[nt];for(const lt in J)g(J[lt].object),delete J[lt];delete H[nt]}delete a[C]}}function F(C){if(a[C.id]===void 0)return;const H=a[C.id];for(const nt in H){const J=H[nt];for(const lt in J)g(J[lt].object),delete J[lt];delete H[nt]}delete a[C.id]}function z(C){for(const H in a){const nt=a[H];if(nt[C.id]===void 0)continue;const J=nt[C.id];for(const lt in J)g(J[lt].object),delete J[lt];delete nt[C.id]}}function X(){D(),f=!0,c!==o&&(c=o,m(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:M,disableUnusedAttributes:P}}function s1(s,t,i){let a;function o(m){a=m}function c(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),i.update(g,a,v))}function h(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,a,1)}function p(m,g,v,_){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(a,m,0,g,0,_,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*_[A];i.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function o1(s,t,i,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(z){return!(z!==Ti&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const X=z===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ca&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!X)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,_=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:k,maxSamples:F}}function l1(s){const t=this;let i=null,a=0,o=!1,c=!1;const f=new _r,h=new he,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||a!==0||o;return o=_,a=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const E=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,x=s.get(v);if(!o||E===null||E.length===0||c&&!M)c?g(null):m();else{const P=c?0:a,U=P*4;let w=x.clippingState||null;p.value=w,w=g(E,_,U,S);for(let k=0;k!==U;++k)w[k]=i[k];x.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,S,E){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=p.value,E!==!0||M===null){const x=S+A*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,w=S;U!==A;++U,w+=4)f.copy(v[U]).applyMatrix4(P,h),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function c1(s){let t=new WeakMap;function i(f,h){return h===nd?f.mapping=bs:h===id&&(f.mapping=As),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===nd||h===id)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ZM(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",o),i(m.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Ss=4,E_=[.125,.215,.35,.446,.526,.582],Sr=20,Oh=new I0,T_=new ze;let zh=null,Ph=0,Fh=0,Bh=!1;const xr=(1+Math.sqrt(5))/2,xs=1/xr,b_=[new K(-xr,xs,0),new K(xr,xs,0),new K(-xs,0,xr),new K(xs,0,xr),new K(0,xr,-xs),new K(0,xr,xs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],u1=new K;class A_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,o=100,c={}){const{size:f=256,position:h=u1}=c;zh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Ph,Fh),this._renderer.xr.enabled=Bh,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Vo,format:Ti,colorSpace:Rs,depthBuffer:!1},o=R_(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R_(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f1(c)),this._blurMaterial=h1(c,t,i)}return o}_compileMaterial(t){const i=new ei(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,a,o,c){const p=new di(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(T_),v.toneMapping=ka,v.autoClear=!1;const E=new Gc({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),A=new ei(new qo,E);let M=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,M=!0):(E.color.copy(T_),M=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):U===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const w=this._cubeSize;bc(o,U*w,P>2?w:0,w,w),v.setRenderTarget(o),M&&v.render(A,p),v.render(t,p)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=_,t.background=x}_textureToCubeUV(t,i){const a=this._renderer,o=t.mapping===bs||t.mapping===As;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=w_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C_());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new ei(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;bc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,Oh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=b_[(o-c-1)%b_.length];this._blur(t,c-1,c,f,h)}i.autoClear=a}_blur(t,i,a,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,o,"latitudinal",c),this._halfBlur(f,t,a,a,o,"longitudinal",c)}_halfBlur(t,i,a,o,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ei(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):Sr;M>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sr}`);const x=[];let P=0;for(let z=0;z<Sr;++z){const X=z/A,D=Math.exp(-X*X/2);x.push(D),z===0?P+=D:z<M&&(P+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-a;const w=this._sizeLods[o],k=3*w*(o>U-Ss?o-U+Ss:0),F=4*(this._cubeSize-w);bc(i,k,F,3*w,2*w),p.setRenderTarget(i),p.render(v,Oh)}}function f1(s){const t=[],i=[],a=[];let o=s;const c=s-Ss+1+E_.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);i.push(h);let p=1/h;f>s-Ss?p=E_[f-s+Ss-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,A=3,M=2,x=1,P=new Float32Array(A*E*S),U=new Float32Array(M*E*S),w=new Float32Array(x*E*S);for(let F=0;F<S;F++){const z=F%3*2/3-1,X=F>2?0:-1,D=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];P.set(D,A*E*F),U.set(_,M*E*F);const C=[F,F,F,F,F,F];w.set(C,x*E*F)}const k=new zi;k.setAttribute("position",new Oi(P,A)),k.setAttribute("uv",new Oi(U,M)),k.setAttribute("faceIndex",new Oi(w,x)),t.push(k),o>Ss&&o--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function R_(s,t,i){const a=new Ar(s,t,i);return a.texture.mapping=Vc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function bc(s,t,i,a,o){s.viewport.set(t,i,a,o),s.scissor.set(t,i,a,o)}function h1(s,t,i){const a=new Float32Array(Sr),o=new K(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function C_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function w_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Qd(){return`

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
	`}function d1(s){let t=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===nd||p===id,g=p===bs||p===As;if(m||g){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new A_(s)),v=m?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&o(S)?(i===null&&(i=new A_(s)),v=m?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function o(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function p1(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let o;switch(a){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(a)}return t[a]=o,o}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const o=i(a);return o===null&&zc("THREE.WebGLRenderer: "+a+" extension not supported."),o}}}function m1(s,t,i,a){const o={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete o[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,i.memory.geometries++),_}function p(v){const _=v.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function m(v){const _=[],S=v.index,E=v.attributes.position;let A=0;if(S!==null){const P=S.array;A=S.version;for(let U=0,w=P.length;U<w;U+=3){const k=P[U+0],F=P[U+1],z=P[U+2];_.push(k,F,F,z,z,k)}}else if(E!==void 0){const P=E.array;A=E.version;for(let U=0,w=P.length/3-1;U<w;U+=3){const k=U+0,F=U+1,z=U+2;_.push(k,F,F,z,z,k)}}else return;const M=new(b0(_)?D0:w0)(_,1);M.version=A;const x=c.get(v);x&&t.remove(x),c.set(v,M)}function g(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function g1(s,t,i){let a;function o(_){a=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function p(_,S){s.drawElements(a,S,c,_*f),i.update(S,a,1)}function m(_,S,E){E!==0&&(s.drawElementsInstanced(a,S,c,_*f,E),i.update(S,a,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,a,1)}function v(_,S,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)m(_[x]/f,S[x],A[x]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,_,0,A,0,E);let x=0;for(let P=0;P<E;P++)x+=S[P]*A[P];i.update(x,a,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function v1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:a}}function _1(s,t,i){const a=new WeakMap,o=new tn;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let D=function(){z.dispose(),a.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let U=0;S===!0&&(U=1),E===!0&&(U=2),A===!0&&(U=3);let w=h.attributes.position.count*U,k=1;w>t.maxTextureSize&&(k=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*k*4*v),z=new A0(F,w,k,v);z.type=sa,z.needsUpdate=!0;const X=U*4;for(let C=0;C<v;C++){const H=M[C],nt=x[C],J=P[C],lt=w*k*4*C;for(let vt=0;vt<H.count;vt++){const O=vt*X;S===!0&&(o.fromBufferAttribute(H,vt),F[lt+O+0]=o.x,F[lt+O+1]=o.y,F[lt+O+2]=o.z,F[lt+O+3]=0),E===!0&&(o.fromBufferAttribute(nt,vt),F[lt+O+4]=o.x,F[lt+O+5]=o.y,F[lt+O+6]=o.z,F[lt+O+7]=0),A===!0&&(o.fromBufferAttribute(J,vt),F[lt+O+8]=o.x,F[lt+O+9]=o.y,F[lt+O+10]=o.z,F[lt+O+11]=J.itemSize===4?o.w:1)}}_={count:v,texture:z,size:new te(w,k)},a.set(h,_),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let A=0;A<m.length;A++)S+=m[A];const E=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function x1(s,t,i,a){let o=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=t.get(p,g);if(o.get(v)!==m&&(t.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function f(){o=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const G0=new Wn,D_=new O0(1,1),V0=new A0,k0=new UM,X0=new N0,U_=[],L_=[],N_=new Float32Array(16),O_=new Float32Array(9),z_=new Float32Array(4);function Us(s,t,i){const a=s[0];if(a<=0||a>0)return s;const o=t*i;let c=U_[o];if(c===void 0&&(c=new Float32Array(o),U_[o]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function Wc(s,t){let i=L_[t];i===void 0&&(i=new Int32Array(t),L_[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function y1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function S1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function M1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function E1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function T1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,a))return;z_.set(a),s.uniformMatrix2fv(this.addr,!1,z_),dn(i,a)}}function b1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,a))return;O_.set(a),s.uniformMatrix3fv(this.addr,!1,O_),dn(i,a)}}function A1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,a))return;N_.set(a),s.uniformMatrix4fv(this.addr,!1,N_),dn(i,a)}}function R1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function C1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function w1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function D1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function U1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function L1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function N1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function O1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function z1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(D_.compareFunction=T0,c=D_):c=G0,i.setTexture2D(t||c,o)}function P1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTexture3D(t||k0,o)}function F1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTextureCube(t||X0,o)}function B1(s,t,i){const a=this.cache,o=i.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),i.setTexture2DArray(t||V0,o)}function I1(s){switch(s){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return T1;case 35675:return b1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return w1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return L1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return B1}}function H1(s,t){s.uniform1fv(this.addr,t)}function G1(s,t){const i=Us(t,this.size,2);s.uniform2fv(this.addr,i)}function V1(s,t){const i=Us(t,this.size,3);s.uniform3fv(this.addr,i)}function k1(s,t){const i=Us(t,this.size,4);s.uniform4fv(this.addr,i)}function X1(s,t){const i=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function W1(s,t){const i=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function q1(s,t){const i=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Y1(s,t){s.uniform1iv(this.addr,t)}function j1(s,t){s.uniform2iv(this.addr,t)}function Z1(s,t){s.uniform3iv(this.addr,t)}function K1(s,t){s.uniform4iv(this.addr,t)}function Q1(s,t){s.uniform1uiv(this.addr,t)}function J1(s,t){s.uniform2uiv(this.addr,t)}function $1(s,t){s.uniform3uiv(this.addr,t)}function tA(s,t){s.uniform4uiv(this.addr,t)}function eA(s,t,i){const a=this.cache,o=t.length,c=Wc(i,o);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)i.setTexture2D(t[f]||G0,c[f])}function nA(s,t,i){const a=this.cache,o=t.length,c=Wc(i,o);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)i.setTexture3D(t[f]||k0,c[f])}function iA(s,t,i){const a=this.cache,o=t.length,c=Wc(i,o);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)i.setTextureCube(t[f]||X0,c[f])}function aA(s,t,i){const a=this.cache,o=t.length,c=Wc(i,o);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==o;++f)i.setTexture2DArray(t[f]||V0,c[f])}function rA(s){switch(s){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return k1;case 35674:return X1;case 35675:return W1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return j1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return Q1;case 36294:return J1;case 36295:return $1;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}class sA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=I1(i.type)}}class oA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rA(i.type)}}class lA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,i[h.id],a)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function P_(s,t){s.seq.push(t),s.map[t.id]=t}function cA(s,t,i){const a=s.name,o=a.length;for(Ih.lastIndex=0;;){const c=Ih.exec(a),f=Ih.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===o){P_(i,m===void 0?new sA(h,s,t):new oA(h,s,t));break}else{let v=i.map[h];v===void 0&&(v=new lA(h),P_(i,v)),i=v}}}class Pc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(i,o),f=t.getUniformLocation(i,c.name);cA(c,f,this)}}setValue(t,i,a,o){const c=this.map[i];c!==void 0&&c.setValue(t,a,o)}setOptional(t,i,a){const o=i[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,i,a,o){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,i){const a=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in i&&a.push(f)}return a}}function F_(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const uA=37297;let fA=0;function hA(s,t){const i=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=o;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const B_=new he;function dA(s){De._getMatrix(B_,De.workingColorSpace,s);const t=`mat3( ${B_.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case Bc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function I_(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),o=s.getShaderInfoLog(t).trim();if(a&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+o+`

`+hA(s.getShaderSource(t),f)}else return o}function pA(s,t){const i=dA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function mA(s,t){let i;switch(t){case nM:i="Linear";break;case iM:i="Reinhard";break;case aM:i="Cineon";break;case rM:i="ACESFilmic";break;case oM:i="AgX";break;case lM:i="Neutral";break;case sM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new K;function gA(){De.getLuminanceCoefficients(Ac);const s=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function _A(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function xA(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function No(s){return s!==""}function H_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(s){return s.replace(yA,MA)}const SA=new Map;function MA(s,t){let i=pe[t];if(i===void 0){const a=SA.get(t);if(a!==void 0)i=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Nd(i)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(s){return s.replace(EA,TA)}function TA(s,t,i,a){let o="";for(let c=parseInt(t);c<parseInt(i);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function k_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function bA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===f0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===zS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function AA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case Vc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function RA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function CA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case h0:t="ENVMAP_BLENDING_MULTIPLY";break;case tM:t="ENVMAP_BLENDING_MIX";break;case eM:t="ENVMAP_BLENDING_ADD";break}return t}function wA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function DA(s,t,i,a){const o=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=bA(i),m=AA(i),g=RA(i),v=CA(i),_=wA(i),S=vA(i),E=_A(c),A=o.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),x.length>0&&(x+=`
`)):(M=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),x=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?pe.tonemapping_pars_fragment:"",i.toneMapping!==ka?mA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,pA("linearToOutputTexel",i.outputColorSpace),gA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),f=Nd(f),f=H_(f,i),f=G_(f,i),h=Nd(h),h=H_(h,i),h=G_(h,i),f=V_(f),h=V_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=P+M+f,w=P+x+h,k=F_(o,o.VERTEX_SHADER,U),F=F_(o,o.FRAGMENT_SHADER,w);o.attachShader(A,k),o.attachShader(A,F),i.index0AttributeName!==void 0?o.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(H){if(s.debug.checkShaderErrors){const nt=o.getProgramInfoLog(A).trim(),J=o.getShaderInfoLog(k).trim(),lt=o.getShaderInfoLog(F).trim();let vt=!0,O=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(vt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,k,F);else{const $=I_(o,k,"vertex"),Q=I_(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+nt+`
`+$+`
`+Q)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(J===""||lt==="")&&(O=!1);O&&(H.diagnostics={runnable:vt,programLog:nt,vertexShader:{log:J,prefix:M},fragmentShader:{log:lt,prefix:x}})}o.deleteShader(k),o.deleteShader(F),X=new Pc(o,A),D=xA(o,A)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,uA)),C},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=k,this.fragmentShader=F,this}let UA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new NA(t),i.set(t,a)),a}}class NA{constructor(t){this.id=UA++,this.code=t,this.usedTimes=0}}function OA(s,t,i,a,o,c,f){const h=new R0,p=new LA,m=new Set,g=[],v=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,H,nt,J){const lt=nt.fog,vt=J.geometry,O=D.isMeshStandardMaterial?nt.environment:null,$=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),Q=$&&$.mapping===Vc?$.image.height:null,Mt=E[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const ot=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,L=ot!==void 0?ot.length:0;let W=0;vt.morphAttributes.position!==void 0&&(W=1),vt.morphAttributes.normal!==void 0&&(W=2),vt.morphAttributes.color!==void 0&&(W=3);let ft,V,ut,St;if(Mt){const Ae=Ui[Mt];ft=Ae.vertexShader,V=Ae.fragmentShader}else ft=D.vertexShader,V=D.fragmentShader,p.update(D),ut=p.getVertexShaderID(D),St=p.getFragmentShaderID(D);const mt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Nt=J.isInstancedMesh===!0,Vt=J.isBatchedMesh===!0,le=!!D.map,Le=!!D.matcap,ee=!!$,I=!!D.aoMap,pn=!!D.lightMap,ie=!!D.bumpMap,de=!!D.normalMap,Wt=!!D.displacementMap,Te=!!D.emissiveMap,Xt=!!D.metalnessMap,N=!!D.roughnessMap,b=D.anisotropy>0,at=D.clearcoat>0,pt=D.dispersion>0,Et=D.iridescence>0,_t=D.sheen>0,qt=D.transmission>0,Ct=b&&!!D.anisotropyMap,Bt=at&&!!D.clearcoatMap,_e=at&&!!D.clearcoatNormalMap,bt=at&&!!D.clearcoatRoughnessMap,It=Et&&!!D.iridescenceMap,Qt=Et&&!!D.iridescenceThicknessMap,Yt=_t&&!!D.sheenColorMap,zt=_t&&!!D.sheenRoughnessMap,ne=!!D.specularMap,ce=!!D.specularColorMap,Pe=!!D.specularIntensityMap,Y=qt&&!!D.transmissionMap,wt=qt&&!!D.thicknessMap,ht=!!D.gradientMap,yt=!!D.alphaMap,Rt=D.alphaTest>0,Dt=!!D.alphaHash,ae=!!D.extensions;let Ye=ka;D.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const cn={shaderID:Mt,shaderType:D.type,shaderName:D.name,vertexShader:ft,fragmentShader:V,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:St,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Vt,batchingColor:Vt&&J._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&J.instanceColor!==null,instancingMorph:Nt&&J.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Rs,alphaToCoverage:!!D.alphaToCoverage,map:le,matcap:Le,envMap:ee,envMapMode:ee&&$.mapping,envMapCubeUVHeight:Q,aoMap:I,lightMap:pn,bumpMap:ie,normalMap:de,displacementMap:_&&Wt,emissiveMap:Te,normalMapObjectSpace:de&&D.normalMapType===dM,normalMapTangentSpace:de&&D.normalMapType===hM,metalnessMap:Xt,roughnessMap:N,anisotropy:b,anisotropyMap:Ct,clearcoat:at,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:pt,iridescence:Et,iridescenceMap:It,iridescenceThicknessMap:Qt,sheen:_t,sheenColorMap:Yt,sheenRoughnessMap:zt,specularMap:ne,specularColorMap:ce,specularIntensityMap:Pe,transmission:qt,transmissionMap:Y,thicknessMap:wt,gradientMap:ht,opaque:D.transparent===!1&&D.blending===Ms&&D.alphaToCoverage===!1,alphaMap:yt,alphaTest:Rt,alphaHash:Dt,combine:D.combine,mapUv:le&&A(D.map.channel),aoMapUv:I&&A(D.aoMap.channel),lightMapUv:pn&&A(D.lightMap.channel),bumpMapUv:ie&&A(D.bumpMap.channel),normalMapUv:de&&A(D.normalMap.channel),displacementMapUv:Wt&&A(D.displacementMap.channel),emissiveMapUv:Te&&A(D.emissiveMap.channel),metalnessMapUv:Xt&&A(D.metalnessMap.channel),roughnessMapUv:N&&A(D.roughnessMap.channel),anisotropyMapUv:Ct&&A(D.anisotropyMap.channel),clearcoatMapUv:Bt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:zt&&A(D.sheenRoughnessMap.channel),specularMapUv:ne&&A(D.specularMap.channel),specularColorMapUv:ce&&A(D.specularColorMap.channel),specularIntensityMapUv:Pe&&A(D.specularIntensityMap.channel),transmissionMapUv:Y&&A(D.transmissionMap.channel),thicknessMapUv:wt&&A(D.thicknessMap.channel),alphaMapUv:yt&&A(D.alphaMap.channel),vertexTangents:!!vt.attributes.tangent&&(de||b),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!vt.attributes.uv&&(le||yt),fog:!!lt,useFog:D.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Pt,skinning:J.isSkinnedMesh===!0,morphTargets:vt.morphAttributes.position!==void 0,morphNormals:vt.morphAttributes.normal!==void 0,morphColors:vt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:W,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:le&&D.map.isVideoTexture===!0&&De.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Te&&D.emissiveMap.isVideoTexture===!0&&De.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Li,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ae&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&D.extensions.multiDraw===!0||Vt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(P(C,D),U(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const C=E[D.type];let H;if(C){const nt=Ui[C];H=WM.clone(nt.uniforms)}else H=D.uniforms;return H}function k(D,C){let H;for(let nt=0,J=g.length;nt<J;nt++){const lt=g[nt];if(lt.cacheKey===C){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new DA(s,C,D,c),g.push(H)),H}function F(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function X(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:k,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:X}}function zA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function o(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:o,dispose:c}}function PA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function X_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function W_(){const s=[];let t=0;const i=[],a=[],o=[];function c(){t=0,i.length=0,a.length=0,o.length=0}function f(v,_,S,E,A,M){let x=s[t];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:E,renderOrder:v.renderOrder,z:A,group:M},s[t]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=v.renderOrder,x.z=A,x.group=M),t++,x}function h(v,_,S,E,A,M){const x=f(v,_,S,E,A,M);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):i.push(x)}function p(v,_,S,E,A,M){const x=f(v,_,S,E,A,M);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):i.unshift(x)}function m(v,_){i.length>1&&i.sort(v||PA),a.length>1&&a.sort(_||X_),o.length>1&&o.sort(_||X_)}function g(){for(let v=t,_=s.length;v<_;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:a,transparent:o,init:c,push:h,unshift:p,finish:g,sort:m}}function FA(){let s=new WeakMap;function t(a,o){const c=s.get(a);let f;return c===void 0?(f=new W_,s.set(a,[f])):o>=c.length?(f=new W_,c.push(f)):f=c[o],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function BA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new ze};break;case"SpotLight":i={position:new K,direction:new K,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new K,halfWidth:new K,halfHeight:new K};break}return s[t.id]=i,i}}}function IA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let HA=0;function GA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function VA(s){const t=new BA,i=IA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new K);const o=new K,c=new Ze,f=new Ze;function h(m){let g=0,v=0,_=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let S=0,E=0,A=0,M=0,x=0,P=0,U=0,w=0,k=0,F=0,z=0;m.sort(GA);for(let D=0,C=m.length;D<C;D++){const H=m[D],nt=H.color,J=H.intensity,lt=H.distance,vt=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=nt.r*J,v+=nt.g*J,_+=nt.b*J;else if(H.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(H.sh.coefficients[O],J);z++}else if(H.isDirectionalLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const $=H.shadow,Q=i.get(H);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,a.directionalShadow[S]=Q,a.directionalShadowMap[S]=vt,a.directionalShadowMatrix[S]=H.shadow.matrix,P++}a.directional[S]=O,S++}else if(H.isSpotLight){const O=t.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(nt).multiplyScalar(J),O.distance=lt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,a.spot[A]=O;const $=H.shadow;if(H.map&&(a.spotLightMap[k]=H.map,k++,$.updateMatrices(H),H.castShadow&&F++),a.spotLightMatrix[A]=$.matrix,H.castShadow){const Q=i.get(H);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,a.spotShadow[A]=Q,a.spotShadowMap[A]=vt,w++}A++}else if(H.isRectAreaLight){const O=t.get(H);O.color.copy(nt).multiplyScalar(J),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=O,M++}else if(H.isPointLight){const O=t.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const $=H.shadow,Q=i.get(H);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,a.pointShadow[E]=Q,a.pointShadowMap[E]=vt,a.pointShadowMatrix[E]=H.shadow.matrix,U++}a.point[E]=O,E++}else if(H.isHemisphereLight){const O=t.get(H);O.skyColor.copy(H.color).multiplyScalar(J),O.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[x]=O,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const X=a.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==M||X.hemiLength!==x||X.numDirectionalShadows!==P||X.numPointShadows!==U||X.numSpotShadows!==w||X.numSpotMaps!==k||X.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=A,a.rectArea.length=M,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=w+k-F,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=z,X.directionalLength=S,X.pointLength=E,X.spotLength=A,X.rectAreaLength=M,X.hemiLength=x,X.numDirectionalShadows=P,X.numPointShadows=U,X.numSpotShadows=w,X.numSpotMaps=k,X.numLightProbes=z,a.version=HA++)}function p(m,g){let v=0,_=0,S=0,E=0,A=0;const M=g.matrixWorldInverse;for(let x=0,P=m.length;x<P;x++){const U=m[x];if(U.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(U.isSpotLight){const w=a.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=a.point[_];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const w=a.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:h,setupView:p,state:a}}function q_(s){const t=new VA(s),i=[],a=[];function o(g){m.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function kA(s){let t=new WeakMap;function i(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new q_(s),t.set(o,[h])):c>=f.length?(h=new q_(s),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:i,dispose:a}}const XA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WA=`uniform sampler2D shadow_pass;
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
}`;function qA(s,t,i){let a=new Wd;const o=new te,c=new te,f=new tn,h=new mE({depthPacking:fM}),p=new gE,m={},g=i.maxTextureSize,v={[Wa]:Xn,[Xn]:Wa,[Li]:Li},_=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:XA,fragmentShader:WA}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ei(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f0;let x=this.type;this.render=function(F,z,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(Va),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const J=x!==ra&&this.type===ra,lt=x===ra&&this.type!==ra;for(let vt=0,O=F.length;vt<O;vt++){const $=F[vt],Q=$.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const Mt=Q.getFrameExtents();if(o.multiply(Mt),c.copy(Q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/Mt.x),o.x=c.x*Mt.x,Q.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/Mt.y),o.y=c.y*Mt.y,Q.mapSize.y=c.y)),Q.map===null||J===!0||lt===!0){const L=this.type!==ra?{minFilter:bi,magFilter:bi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ar(o.x,o.y,L),Q.map.texture.name=$.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const ot=Q.getViewportCount();for(let L=0;L<ot;L++){const W=Q.getViewport(L);f.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),nt.viewport(f),Q.updateMatrices($,L),a=Q.getFrustum(),w(z,X,Q.camera,$,this.type)}Q.isPointLightShadow!==!0&&this.type===ra&&P(Q,X),Q.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(D,C,H)};function P(F,z){const X=t.update(A);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ar(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(z,null,X,_,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(z,null,X,S,A,null)}function U(F,z,X,D){let C=null;const H=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?p:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const nt=C.uuid,J=z.uuid;let lt=m[nt];lt===void 0&&(lt={},m[nt]=lt);let vt=lt[J];vt===void 0&&(vt=C.clone(),lt[J]=vt,z.addEventListener("dispose",k)),C=vt}if(C.visible=z.visible,C.wireframe=z.wireframe,D===ra?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=s.properties.get(C);nt.light=X}return C}function w(F,z,X,D,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===ra)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const J=t.update(F),lt=F.material;if(Array.isArray(lt)){const vt=J.groups;for(let O=0,$=vt.length;O<$;O++){const Q=vt[O],Mt=lt[Q.materialIndex];if(Mt&&Mt.visible){const ot=U(F,Mt,D,C);F.onBeforeShadow(s,F,z,X,J,ot,Q),s.renderBufferDirect(X,null,J,ot,F,Q),F.onAfterShadow(s,F,z,X,J,ot,Q)}}}else if(lt.visible){const vt=U(F,lt,D,C);F.onBeforeShadow(s,F,z,X,J,vt,null),s.renderBufferDirect(X,null,J,vt,F,null),F.onAfterShadow(s,F,z,X,J,vt,null)}}const nt=F.children;for(let J=0,lt=nt.length;J<lt;J++)w(nt[J],z,X,D,C)}function k(F){F.target.removeEventListener("dispose",k);for(const X in m){const D=m[X],C=F.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const YA={[Zh]:Kh,[Qh]:td,[Jh]:ed,[Ts]:$h,[Kh]:Zh,[td]:Qh,[ed]:Jh,[$h]:Ts};function jA(s,t){function i(){let Y=!1;const wt=new tn;let ht=null;const yt=new tn(0,0,0,0);return{setMask:function(Rt){ht!==Rt&&!Y&&(s.colorMask(Rt,Rt,Rt,Rt),ht=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,Dt,ae,Ye,cn){cn===!0&&(Rt*=Ye,Dt*=Ye,ae*=Ye),wt.set(Rt,Dt,ae,Ye),yt.equals(wt)===!1&&(s.clearColor(Rt,Dt,ae,Ye),yt.copy(wt))},reset:function(){Y=!1,ht=null,yt.set(-1,0,0,0)}}}function a(){let Y=!1,wt=!1,ht=null,yt=null,Rt=null;return{setReversed:function(Dt){if(wt!==Dt){const ae=t.get("EXT_clip_control");Dt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),wt=Dt;const Ye=Rt;Rt=null,this.setClear(Ye)}},getReversed:function(){return wt},setTest:function(Dt){Dt?mt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(Dt){ht!==Dt&&!Y&&(s.depthMask(Dt),ht=Dt)},setFunc:function(Dt){if(wt&&(Dt=YA[Dt]),yt!==Dt){switch(Dt){case Zh:s.depthFunc(s.NEVER);break;case Kh:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Jh:s.depthFunc(s.EQUAL);break;case $h:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Dt}},setLocked:function(Dt){Y=Dt},setClear:function(Dt){Rt!==Dt&&(wt&&(Dt=1-Dt),s.clearDepth(Dt),Rt=Dt)},reset:function(){Y=!1,ht=null,yt=null,Rt=null,wt=!1}}}function o(){let Y=!1,wt=null,ht=null,yt=null,Rt=null,Dt=null,ae=null,Ye=null,cn=null;return{setTest:function(Ae){Y||(Ae?mt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Ae){wt!==Ae&&!Y&&(s.stencilMask(Ae),wt=Ae)},setFunc:function(Ae,_n,pi){(ht!==Ae||yt!==_n||Rt!==pi)&&(s.stencilFunc(Ae,_n,pi),ht=Ae,yt=_n,Rt=pi)},setOp:function(Ae,_n,pi){(Dt!==Ae||ae!==_n||Ye!==pi)&&(s.stencilOp(Ae,_n,pi),Dt=Ae,ae=_n,Ye=pi)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){cn!==Ae&&(s.clearStencil(Ae),cn=Ae)},reset:function(){Y=!1,wt=null,ht=null,yt=null,Rt=null,Dt=null,ae=null,Ye=null,cn=null}}}const c=new i,f=new a,h=new o,p=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,S=[],E=null,A=!1,M=null,x=null,P=null,U=null,w=null,k=null,F=null,z=new ze(0,0,0),X=0,D=!1,C=null,H=null,nt=null,J=null,lt=null;const vt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,$=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),O=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),O=$>=2);let Mt=null,ot={};const L=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),ft=new tn().fromArray(L),V=new tn().fromArray(W);function ut(Y,wt,ht,yt){const Rt=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(Y,Dt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ht;ae++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(wt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Dt}const St={};St[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),mt(s.DEPTH_TEST),f.setFunc(Ts),ie(!1),de(Zv),mt(s.CULL_FACE),I(Va);function mt(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Pt(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function Nt(Y,wt){return v[Y]!==wt?(s.bindFramebuffer(Y,wt),v[Y]=wt,Y===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=wt),Y===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function Vt(Y,wt){let ht=S,yt=!1;if(Y){ht=_.get(wt),ht===void 0&&(ht=[],_.set(wt,ht));const Rt=Y.textures;if(ht.length!==Rt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,ae=Rt.length;Dt<ae;Dt++)ht[Dt]=s.COLOR_ATTACHMENT0+Dt;ht.length=Rt.length,yt=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ht)}function le(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const Le={[yr]:s.FUNC_ADD,[FS]:s.FUNC_SUBTRACT,[BS]:s.FUNC_REVERSE_SUBTRACT};Le[IS]=s.MIN,Le[HS]=s.MAX;const ee={[GS]:s.ZERO,[VS]:s.ONE,[kS]:s.SRC_COLOR,[Yh]:s.SRC_ALPHA,[ZS]:s.SRC_ALPHA_SATURATE,[YS]:s.DST_COLOR,[WS]:s.DST_ALPHA,[XS]:s.ONE_MINUS_SRC_COLOR,[jh]:s.ONE_MINUS_SRC_ALPHA,[jS]:s.ONE_MINUS_DST_COLOR,[qS]:s.ONE_MINUS_DST_ALPHA,[KS]:s.CONSTANT_COLOR,[QS]:s.ONE_MINUS_CONSTANT_COLOR,[JS]:s.CONSTANT_ALPHA,[$S]:s.ONE_MINUS_CONSTANT_ALPHA};function I(Y,wt,ht,yt,Rt,Dt,ae,Ye,cn,Ae){if(Y===Va){A===!0&&(Pt(s.BLEND),A=!1);return}if(A===!1&&(mt(s.BLEND),A=!0),Y!==PS){if(Y!==M||Ae!==D){if((x!==yr||w!==yr)&&(s.blendEquation(s.FUNC_ADD),x=yr,w=yr),Ae)switch(Y){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kv:s.blendFunc(s.ONE,s.ONE);break;case Qv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Qv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}P=null,U=null,k=null,F=null,z.set(0,0,0),X=0,M=Y,D=Ae}return}Rt=Rt||wt,Dt=Dt||ht,ae=ae||yt,(wt!==x||Rt!==w)&&(s.blendEquationSeparate(Le[wt],Le[Rt]),x=wt,w=Rt),(ht!==P||yt!==U||Dt!==k||ae!==F)&&(s.blendFuncSeparate(ee[ht],ee[yt],ee[Dt],ee[ae]),P=ht,U=yt,k=Dt,F=ae),(Ye.equals(z)===!1||cn!==X)&&(s.blendColor(Ye.r,Ye.g,Ye.b,cn),z.copy(Ye),X=cn),M=Y,D=!1}function pn(Y,wt){Y.side===Li?Pt(s.CULL_FACE):mt(s.CULL_FACE);let ht=Y.side===Xn;wt&&(ht=!ht),ie(ht),Y.blending===Ms&&Y.transparent===!1?I(Va):I(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const yt=Y.stencilWrite;h.setTest(yt),yt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(Y){C!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),C=Y)}function de(Y){Y!==NS?(mt(s.CULL_FACE),Y!==H&&(Y===Zv?s.cullFace(s.BACK):Y===OS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),H=Y}function Wt(Y){Y!==nt&&(O&&s.lineWidth(Y),nt=Y)}function Te(Y,wt,ht){Y?(mt(s.POLYGON_OFFSET_FILL),(J!==wt||lt!==ht)&&(s.polygonOffset(wt,ht),J=wt,lt=ht)):Pt(s.POLYGON_OFFSET_FILL)}function Xt(Y){Y?mt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=s.TEXTURE0+vt-1),Mt!==Y&&(s.activeTexture(Y),Mt=Y)}function b(Y,wt,ht){ht===void 0&&(Mt===null?ht=s.TEXTURE0+vt-1:ht=Mt);let yt=ot[ht];yt===void 0&&(yt={type:void 0,texture:void 0},ot[ht]=yt),(yt.type!==Y||yt.texture!==wt)&&(Mt!==ht&&(s.activeTexture(ht),Mt=ht),s.bindTexture(Y,wt||St[Y]),yt.type=Y,yt.texture=wt)}function at(){const Y=ot[Mt];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pt(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _t(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function qt(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Bt(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function bt(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function It(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(Y){ft.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),ft.copy(Y))}function zt(Y){V.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),V.copy(Y))}function ne(Y,wt){let ht=m.get(wt);ht===void 0&&(ht=new WeakMap,m.set(wt,ht));let yt=ht.get(Y);yt===void 0&&(yt=s.getUniformBlockIndex(wt,Y.name),ht.set(Y,yt))}function ce(Y,wt){const yt=m.get(wt).get(Y);p.get(wt)!==yt&&(s.uniformBlockBinding(wt,yt,Y.__bindingPointIndex),p.set(wt,yt))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Mt=null,ot={},v={},_=new WeakMap,S=[],E=null,A=!1,M=null,x=null,P=null,U=null,w=null,k=null,F=null,z=new ze(0,0,0),X=0,D=!1,C=null,H=null,nt=null,J=null,lt=null,ft.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:mt,disable:Pt,bindFramebuffer:Nt,drawBuffers:Vt,useProgram:le,setBlending:I,setMaterial:pn,setFlipSided:ie,setCullFace:de,setLineWidth:Wt,setPolygonOffset:Te,setScissorTest:Xt,activeTexture:N,bindTexture:b,unbindTexture:at,compressedTexImage2D:pt,compressedTexImage3D:Et,texImage2D:It,texImage3D:Qt,updateUBOMapping:ne,uniformBlockBinding:ce,texStorage2D:_e,texStorage3D:bt,texSubImage2D:_t,texSubImage3D:qt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Bt,scissor:Yt,viewport:zt,reset:Pe}}function ZA(s,t,i,a,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new te,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):Hc("canvas")}function A(N,b,at){let pt=1;const Et=Xt(N);if((Et.width>at||Et.height>at)&&(pt=at/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const _t=Math.floor(pt*Et.width),qt=Math.floor(pt*Et.height);v===void 0&&(v=E(_t,qt));const Ct=b?E(_t,qt):v;return Ct.width=_t,Ct.height=qt,Ct.getContext("2d").drawImage(N,0,0,_t,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+_t+"x"+qt+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,b,at,pt,Et=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _t=b;if(b===s.RED&&(at===s.FLOAT&&(_t=s.R32F),at===s.HALF_FLOAT&&(_t=s.R16F),at===s.UNSIGNED_BYTE&&(_t=s.R8)),b===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.R8UI),at===s.UNSIGNED_SHORT&&(_t=s.R16UI),at===s.UNSIGNED_INT&&(_t=s.R32UI),at===s.BYTE&&(_t=s.R8I),at===s.SHORT&&(_t=s.R16I),at===s.INT&&(_t=s.R32I)),b===s.RG&&(at===s.FLOAT&&(_t=s.RG32F),at===s.HALF_FLOAT&&(_t=s.RG16F),at===s.UNSIGNED_BYTE&&(_t=s.RG8)),b===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RG8UI),at===s.UNSIGNED_SHORT&&(_t=s.RG16UI),at===s.UNSIGNED_INT&&(_t=s.RG32UI),at===s.BYTE&&(_t=s.RG8I),at===s.SHORT&&(_t=s.RG16I),at===s.INT&&(_t=s.RG32I)),b===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),at===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),at===s.UNSIGNED_INT&&(_t=s.RGB32UI),at===s.BYTE&&(_t=s.RGB8I),at===s.SHORT&&(_t=s.RGB16I),at===s.INT&&(_t=s.RGB32I)),b===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),at===s.UNSIGNED_INT&&(_t=s.RGBA32UI),at===s.BYTE&&(_t=s.RGBA8I),at===s.SHORT&&(_t=s.RGBA16I),at===s.INT&&(_t=s.RGBA32I)),b===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),b===s.RGBA){const qt=Et?Bc:De.getTransfer(pt);at===s.FLOAT&&(_t=s.RGBA32F),at===s.HALF_FLOAT&&(_t=s.RGBA16F),at===s.UNSIGNED_BYTE&&(_t=qt===Ge?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function w(N,b){let at;return N?b===null||b===br||b===Io?at=s.DEPTH24_STENCIL8:b===sa?at=s.DEPTH32F_STENCIL8:b===Bo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===Io?at=s.DEPTH_COMPONENT24:b===sa?at=s.DEPTH_COMPONENT32F:b===Bo&&(at=s.DEPTH_COMPONENT16),at}function k(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function F(N){const b=N.target;b.removeEventListener("dispose",F),X(b),b.isVideoTexture&&g.delete(b)}function z(N){const b=N.target;b.removeEventListener("dispose",z),C(b)}function X(N){const b=a.get(N);if(b.__webglInit===void 0)return;const at=N.source,pt=_.get(at);if(pt){const Et=pt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(N),Object.keys(pt).length===0&&_.delete(at)}a.remove(N)}function D(N){const b=a.get(N);s.deleteTexture(b.__webglTexture);const at=N.source,pt=_.get(at);delete pt[b.__cacheKey],f.memory.textures--}function C(N){const b=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let Et=0;Et<b.__webglFramebuffer[pt].length;Et++)s.deleteFramebuffer(b.__webglFramebuffer[pt][Et]);else s.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)s.deleteFramebuffer(b.__webglFramebuffer[pt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const at=N.textures;for(let pt=0,Et=at.length;pt<Et;pt++){const _t=a.get(at[pt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),f.memory.textures--),a.remove(at[pt])}a.remove(N)}let H=0;function nt(){H=0}function J(){const N=H;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function lt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function vt(N,b){const at=a.get(N);if(N.isVideoTexture&&Wt(N),N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){const pt=N.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(at,N,b);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+b)}function O(N,b){const at=a.get(N);if(N.version>0&&at.__version!==N.version){V(at,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+b)}function $(N,b){const at=a.get(N);if(N.version>0&&at.__version!==N.version){V(at,N,b);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+b)}function Q(N,b){const at=a.get(N);if(N.version>0&&at.__version!==N.version){ut(at,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+b)}const Mt={[ad]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[rd]:s.MIRRORED_REPEAT},ot={[bi]:s.NEAREST,[cM]:s.NEAREST_MIPMAP_NEAREST,[rc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},L={[pM]:s.NEVER,[yM]:s.ALWAYS,[mM]:s.LESS,[T0]:s.LEQUAL,[gM]:s.EQUAL,[xM]:s.GEQUAL,[vM]:s.GREATER,[_M]:s.NOTEQUAL};function W(N,b){if(b.type===sa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===sh||b.magFilter===rc||b.magFilter===Er||b.minFilter===Ni||b.minFilter===sh||b.minFilter===rc||b.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Mt[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Mt[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Mt[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ot[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==rc&&b.minFilter!==Er||b.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function ft(N,b){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",F));const pt=b.source;let Et=_.get(pt);Et===void 0&&(Et={},_.set(pt,Et));const _t=lt(b);if(_t!==N.__cacheKey){Et[_t]===void 0&&(Et[_t]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Et[_t].usedTimes++;const qt=Et[N.__cacheKey];qt!==void 0&&(Et[N.__cacheKey].usedTimes--,qt.usedTimes===0&&D(b)),N.__cacheKey=_t,N.__webglTexture=Et[_t].texture}return at}function V(N,b,at){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);const Et=ft(N,b),_t=b.source;i.bindTexture(pt,N.__webglTexture,s.TEXTURE0+at);const qt=a.get(_t);if(_t.version!==qt.__version||Et===!0){i.activeTexture(s.TEXTURE0+at);const Ct=De.getPrimaries(De.workingColorSpace),Bt=b.colorSpace===Ga?null:De.getPrimaries(b.colorSpace),_e=b.colorSpace===Ga||Ct===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=A(b.image,!1,o.maxTextureSize);bt=Te(b,bt);const It=c.convert(b.format,b.colorSpace),Qt=c.convert(b.type);let Yt=U(b.internalFormat,It,Qt,b.colorSpace,b.isVideoTexture);W(pt,b);let zt;const ne=b.mipmaps,ce=b.isVideoTexture!==!0,Pe=qt.__version===void 0||Et===!0,Y=_t.dataReady,wt=k(b,bt);if(b.isDepthTexture)Yt=w(b.format===Go,b.type),Pe&&(ce?i.texStorage2D(s.TEXTURE_2D,1,Yt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Yt,bt.width,bt.height,0,It,Qt,null));else if(b.isDataTexture)if(ne.length>0){ce&&Pe&&i.texStorage2D(s.TEXTURE_2D,wt,Yt,ne[0].width,ne[0].height);for(let ht=0,yt=ne.length;ht<yt;ht++)zt=ne[ht],ce?Y&&i.texSubImage2D(s.TEXTURE_2D,ht,0,0,zt.width,zt.height,It,Qt,zt.data):i.texImage2D(s.TEXTURE_2D,ht,Yt,zt.width,zt.height,0,It,Qt,zt.data);b.generateMipmaps=!1}else ce?(Pe&&i.texStorage2D(s.TEXTURE_2D,wt,Yt,bt.width,bt.height),Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,It,Qt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Yt,bt.width,bt.height,0,It,Qt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ce&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Yt,ne[0].width,ne[0].height,bt.depth);for(let ht=0,yt=ne.length;ht<yt;ht++)if(zt=ne[ht],b.format!==Ti)if(It!==null)if(ce){if(Y)if(b.layerUpdates.size>0){const Rt=M_(zt.width,zt.height,b.format,b.type);for(const Dt of b.layerUpdates){const ae=zt.data.subarray(Dt*Rt/zt.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,Dt,zt.width,zt.height,1,It,ae)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,zt.width,zt.height,bt.depth,It,zt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Yt,zt.width,zt.height,bt.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Y&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,zt.width,zt.height,bt.depth,It,Qt,zt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ht,Yt,zt.width,zt.height,bt.depth,0,It,Qt,zt.data)}else{ce&&Pe&&i.texStorage2D(s.TEXTURE_2D,wt,Yt,ne[0].width,ne[0].height);for(let ht=0,yt=ne.length;ht<yt;ht++)zt=ne[ht],b.format!==Ti?It!==null?ce?Y&&i.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,zt.width,zt.height,It,zt.data):i.compressedTexImage2D(s.TEXTURE_2D,ht,Yt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Y&&i.texSubImage2D(s.TEXTURE_2D,ht,0,0,zt.width,zt.height,It,Qt,zt.data):i.texImage2D(s.TEXTURE_2D,ht,Yt,zt.width,zt.height,0,It,Qt,zt.data)}else if(b.isDataArrayTexture)if(ce){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Yt,bt.width,bt.height,bt.depth),Y)if(b.layerUpdates.size>0){const ht=M_(bt.width,bt.height,b.format,b.type);for(const yt of b.layerUpdates){const Rt=bt.data.subarray(yt*ht/bt.data.BYTES_PER_ELEMENT,(yt+1)*ht/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,It,Qt,Rt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,Qt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,bt.width,bt.height,bt.depth,0,It,Qt,bt.data);else if(b.isData3DTexture)ce?(Pe&&i.texStorage3D(s.TEXTURE_3D,wt,Yt,bt.width,bt.height,bt.depth),Y&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,Qt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,bt.width,bt.height,bt.depth,0,It,Qt,bt.data);else if(b.isFramebufferTexture){if(Pe)if(ce)i.texStorage2D(s.TEXTURE_2D,wt,Yt,bt.width,bt.height);else{let ht=bt.width,yt=bt.height;for(let Rt=0;Rt<wt;Rt++)i.texImage2D(s.TEXTURE_2D,Rt,Yt,ht,yt,0,It,Qt,null),ht>>=1,yt>>=1}}else if(ne.length>0){if(ce&&Pe){const ht=Xt(ne[0]);i.texStorage2D(s.TEXTURE_2D,wt,Yt,ht.width,ht.height)}for(let ht=0,yt=ne.length;ht<yt;ht++)zt=ne[ht],ce?Y&&i.texSubImage2D(s.TEXTURE_2D,ht,0,0,It,Qt,zt):i.texImage2D(s.TEXTURE_2D,ht,Yt,It,Qt,zt);b.generateMipmaps=!1}else if(ce){if(Pe){const ht=Xt(bt);i.texStorage2D(s.TEXTURE_2D,wt,Yt,ht.width,ht.height)}Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Qt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Yt,It,Qt,bt);M(b)&&x(pt),qt.__version=_t.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ut(N,b,at){if(b.image.length!==6)return;const pt=ft(N,b),Et=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+at);const _t=a.get(Et);if(Et.version!==_t.__version||pt===!0){i.activeTexture(s.TEXTURE0+at);const qt=De.getPrimaries(De.workingColorSpace),Ct=b.colorSpace===Ga?null:De.getPrimaries(b.colorSpace),Bt=b.colorSpace===Ga||qt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let yt=0;yt<6;yt++)!_e&&!bt?It[yt]=A(b.image[yt],!0,o.maxCubemapSize):It[yt]=bt?b.image[yt].image:b.image[yt],It[yt]=Te(b,It[yt]);const Qt=It[0],Yt=c.convert(b.format,b.colorSpace),zt=c.convert(b.type),ne=U(b.internalFormat,Yt,zt,b.colorSpace),ce=b.isVideoTexture!==!0,Pe=_t.__version===void 0||pt===!0,Y=Et.dataReady;let wt=k(b,Qt);W(s.TEXTURE_CUBE_MAP,b);let ht;if(_e){ce&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,ne,Qt.width,Qt.height);for(let yt=0;yt<6;yt++){ht=It[yt].mipmaps;for(let Rt=0;Rt<ht.length;Rt++){const Dt=ht[Rt];b.format!==Ti?Yt!==null?ce?Y&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,0,0,Dt.width,Dt.height,Yt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,ne,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,0,0,Dt.width,Dt.height,Yt,zt,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,ne,Dt.width,Dt.height,0,Yt,zt,Dt.data)}}}else{if(ht=b.mipmaps,ce&&Pe){ht.length>0&&wt++;const yt=Xt(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,ne,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){ce?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,It[yt].width,It[yt].height,Yt,zt,It[yt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ne,It[yt].width,It[yt].height,0,Yt,zt,It[yt].data);for(let Rt=0;Rt<ht.length;Rt++){const ae=ht[Rt].image[yt].image;ce?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,0,0,ae.width,ae.height,Yt,zt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,ne,ae.width,ae.height,0,Yt,zt,ae.data)}}else{ce?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Yt,zt,It[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ne,Yt,zt,It[yt]);for(let Rt=0;Rt<ht.length;Rt++){const Dt=ht[Rt];ce?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,0,0,Yt,zt,Dt.image[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,ne,Yt,zt,Dt.image[yt])}}}M(b)&&x(s.TEXTURE_CUBE_MAP),_t.__version=Et.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function St(N,b,at,pt,Et,_t){const qt=c.convert(at.format,at.colorSpace),Ct=c.convert(at.type),Bt=U(at.internalFormat,qt,Ct,at.colorSpace),_e=a.get(b),bt=a.get(at);if(bt.__renderTarget=b,!_e.__hasExternalTextures){const It=Math.max(1,b.width>>_t),Qt=Math.max(1,b.height>>_t);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,_t,Bt,It,Qt,b.depth,0,qt,Ct,null):i.texImage2D(Et,_t,Bt,It,Qt,0,qt,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),de(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Et,bt.__webglTexture,0,ie(b)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Et,bt.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(N,b,at){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const pt=b.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,_t=w(b.stencilBuffer,Et),qt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=ie(b);de(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,_t,b.width,b.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,_t,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,_t,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qt,s.RENDERBUFFER,N)}else{const pt=b.textures;for(let Et=0;Et<pt.length;Et++){const _t=pt[Et],qt=c.convert(_t.format,_t.colorSpace),Ct=c.convert(_t.type),Bt=U(_t.internalFormat,qt,Ct,_t.colorSpace),_e=ie(b);at&&de(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Bt,b.width,b.height):de(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Bt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),vt(b.depthTexture,0);const Et=pt.__webglTexture,_t=ie(b);if(b.depthTexture.format===Ho)de(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(b.depthTexture.format===Go)de(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Nt(N){const b=a.get(N),at=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const pt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=pt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Pt(b.__webglFramebuffer,N)}else if(at){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=s.createRenderbuffer(),mt(b.__webglDepthbuffer[pt],N,!1);else{const Et=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=b.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),mt(b.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Et)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(N,b,at){const pt=a.get(N);b!==void 0&&St(pt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&Nt(N)}function le(N){const b=N.texture,at=a.get(N),pt=a.get(b);N.addEventListener("dispose",z);const Et=N.textures,_t=N.isWebGLCubeRenderTarget===!0,qt=Et.length>1;if(qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,f.memory.textures++),_t){at.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){at.__webglFramebuffer[Ct]=[];for(let Bt=0;Bt<b.mipmaps.length;Bt++)at.__webglFramebuffer[Ct][Bt]=s.createFramebuffer()}else at.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)at.__webglFramebuffer[Ct]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(qt)for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const _e=a.get(Et[Ct]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&de(N)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Bt=Et[Ct];at.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);const _e=c.convert(Bt.format,Bt.colorSpace),bt=c.convert(Bt.type),It=U(Bt.internalFormat,_e,bt,Bt.colorSpace,N.isXRRenderTarget===!0),Qt=ie(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,It,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,at.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(at.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),W(s.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)St(at.__webglFramebuffer[Ct][Bt],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Bt);else St(at.__webglFramebuffer[Ct],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const _e=Et[Ct],bt=a.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),W(s.TEXTURE_2D,_e),St(at.__webglFramebuffer,N,_e,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,0),M(_e)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),W(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)St(at.__webglFramebuffer[Bt],N,b,s.COLOR_ATTACHMENT0,Ct,Bt);else St(at.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Ct,0);M(b)&&x(Ct),i.unbindTexture()}N.depthBuffer&&Nt(N)}function Le(N){const b=N.textures;for(let at=0,pt=b.length;at<pt;at++){const Et=b[at];if(M(Et)){const _t=P(N),qt=a.get(Et).__webglTexture;i.bindTexture(_t,qt),x(_t),i.unbindTexture()}}}const ee=[],I=[];function pn(N){if(N.samples>0){if(de(N)===!1){const b=N.textures,at=N.width,pt=N.height;let Et=s.COLOR_BUFFER_BIT;const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qt=a.get(N),Ct=b.length>1;if(Ct)for(let Bt=0;Bt<b.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Bt=0;Bt<b.length;Bt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Bt]);const _e=a.get(b[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,at,pt,0,0,at,pt,Et,s.NEAREST),p===!0&&(ee.length=0,I.length=0,ee.push(s.COLOR_ATTACHMENT0+Bt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ee.push(_t),I.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ee))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Bt=0;Bt<b.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,qt.__webglColorRenderbuffer[Bt]);const _e=a.get(b[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,qt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ie(N){return Math.min(o.maxSamples,N.samples)}function de(N){const b=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Te(N,b){const at=N.colorSpace,pt=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Rs&&at!==Ga&&(De.getTransfer(at)===Ge?(pt!==Ti||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),b}function Xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=nt,this.setTexture2D=vt,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Vt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=de}function KA(s,t){function i(a,o=Ga){let c;const f=De.getTransfer(o);if(a===ca)return s.UNSIGNED_BYTE;if(a===Bd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(a===g0)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===p0)return s.BYTE;if(a===m0)return s.SHORT;if(a===Bo)return s.UNSIGNED_SHORT;if(a===Fd)return s.INT;if(a===br)return s.UNSIGNED_INT;if(a===sa)return s.FLOAT;if(a===Vo)return s.HALF_FLOAT;if(a===v0)return s.ALPHA;if(a===_0)return s.RGB;if(a===Ti)return s.RGBA;if(a===x0)return s.LUMINANCE;if(a===y0)return s.LUMINANCE_ALPHA;if(a===Ho)return s.DEPTH_COMPONENT;if(a===Go)return s.DEPTH_STENCIL;if(a===S0)return s.RED;if(a===Hd)return s.RED_INTEGER;if(a===M0)return s.RG;if(a===Gd)return s.RG_INTEGER;if(a===Vd)return s.RGBA_INTEGER;if(a===Dc||a===Uc||a===Lc||a===Nc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Dc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Dc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Nc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===sd||a===od||a===ld||a===cd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===od)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ud||a===fd||a===hd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ud||a===fd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===hd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===dd||a===pd||a===md||a===gd||a===vd||a===_d||a===xd||a===yd||a===Sd||a===Md||a===Ed||a===Td||a===bd||a===Ad)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===dd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===_d)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===xd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Sd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ed)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Td)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===bd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ad)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Oc||a===Rd||a===Cd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Oc)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Rd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Cd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===E0||a===wd||a===Dd||a===Ud)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Oc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Dd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Io?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const QA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JA=`
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

}`;class $A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,a){if(this.texture===null){const o=new Wn,c=t.properties.get(o);c.__webglTexture=i.texture,(i.depthNear!==a.depthNear||i.depthFar!==a.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=o}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new qa({vertexShader:QA,fragmentShader:JA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ei(new Xc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tR extends Ds{constructor(t,i){super();const a=this;let o=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,v=null,_=null,S=null,E=null;const A=new $A,M=i.getContextAttributes();let x=null,P=null;const U=[],w=[],k=new te;let F=null;const z=new di;z.viewport=new tn;const X=new di;X.viewport=new tn;const D=[z,X],C=new SE;let H=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ut=U[V];return ut===void 0&&(ut=new Ch,U[V]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(V){let ut=U[V];return ut===void 0&&(ut=new Ch,U[V]=ut),ut.getGripSpace()},this.getHand=function(V){let ut=U[V];return ut===void 0&&(ut=new Ch,U[V]=ut),ut.getHandSpace()};function J(V){const ut=w.indexOf(V.inputSource);if(ut===-1)return;const St=U[ut];St!==void 0&&(St.update(V.inputSource,V.frame,m||f),St.dispatchEvent({type:V.type,data:V.inputSource}))}function lt(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",lt),o.removeEventListener("inputsourceschange",vt);for(let V=0;V<U.length;V++){const ut=w[V];ut!==null&&(w[V]=null,U[V].disconnect(ut))}H=null,nt=null,A.reset(),t.setRenderTarget(x),S=null,_=null,v=null,o=null,P=null,ft.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(k.width,k.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(V){m=V},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(V){if(o=V,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",lt),o.addEventListener("inputsourceschange",vt),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,mt=null,Pt=null;M.depth&&(Pt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?Go:Ho,mt=M.stencil?Io:br);const Nt={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};v=new XRWebGLBinding(o,i),_=v.createProjectionLayer(Nt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),P=new Ar(_.textureWidth,_.textureHeight,{format:Ti,type:ca,depthTexture:new O0(_.textureWidth,_.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,St),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ar(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(h),ft.setContext(o),ft.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function vt(V){for(let ut=0;ut<V.removed.length;ut++){const St=V.removed[ut],mt=w.indexOf(St);mt>=0&&(w[mt]=null,U[mt].disconnect(St))}for(let ut=0;ut<V.added.length;ut++){const St=V.added[ut];let mt=w.indexOf(St);if(mt===-1){for(let Nt=0;Nt<U.length;Nt++)if(Nt>=w.length){w.push(St),mt=Nt;break}else if(w[Nt]===null){w[Nt]=St,mt=Nt;break}if(mt===-1)break}const Pt=U[mt];Pt&&Pt.connect(St)}}const O=new K,$=new K;function Q(V,ut,St){O.setFromMatrixPosition(ut.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);const mt=O.distanceTo($),Pt=ut.projectionMatrix.elements,Nt=St.projectionMatrix.elements,Vt=Pt[14]/(Pt[10]-1),le=Pt[14]/(Pt[10]+1),Le=(Pt[9]+1)/Pt[5],ee=(Pt[9]-1)/Pt[5],I=(Pt[8]-1)/Pt[0],pn=(Nt[8]+1)/Nt[0],ie=Vt*I,de=Vt*pn,Wt=mt/(-I+pn),Te=Wt*-I;if(ut.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Te),V.translateZ(Wt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Pt[10]===-1)V.projectionMatrix.copy(ut.projectionMatrix),V.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Xt=Vt+Wt,N=le+Wt,b=ie-Te,at=de+(mt-Te),pt=Le*le/N*Xt,Et=ee*le/N*Xt;V.projectionMatrix.makePerspective(b,at,pt,Et,Xt,N),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Mt(V,ut){ut===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ut.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(o===null)return;let ut=V.near,St=V.far;A.texture!==null&&(A.depthNear>0&&(ut=A.depthNear),A.depthFar>0&&(St=A.depthFar)),C.near=X.near=z.near=ut,C.far=X.far=z.far=St,(H!==C.near||nt!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,nt=C.far),z.layers.mask=V.layers.mask|2,X.layers.mask=V.layers.mask|4,C.layers.mask=z.layers.mask|X.layers.mask;const mt=V.parent,Pt=C.cameras;Mt(C,mt);for(let Nt=0;Nt<Pt.length;Nt++)Mt(Pt[Nt],mt);Pt.length===2?Q(C,z,X):C.projectionMatrix.copy(z.projectionMatrix),ot(V,C,mt)};function ot(V,ut,St){St===null?V.matrix.copy(ut.matrixWorld):(V.matrix.copy(St.matrixWorld),V.matrix.invert(),V.matrix.multiply(ut.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ut.projectionMatrix),V.projectionMatrixInverse.copy(ut.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ld*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(V){p=V,_!==null&&(_.fixedFoveation=V),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=V)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let L=null;function W(V,ut){if(g=ut.getViewerPose(m||f),E=ut,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let mt=!1;St.length!==C.cameras.length&&(C.cameras.length=0,mt=!0);for(let Vt=0;Vt<St.length;Vt++){const le=St[Vt];let Le=null;if(S!==null)Le=S.getViewport(le);else{const I=v.getViewSubImage(_,le);Le=I.viewport,Vt===0&&(t.setRenderTargetTextures(P,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(P))}let ee=D[Vt];ee===void 0&&(ee=new di,ee.layers.enable(Vt),ee.viewport=new tn,D[Vt]=ee),ee.matrix.fromArray(le.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(le.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Le.x,Le.y,Le.width,Le.height),Vt===0&&(C.matrix.copy(ee.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),mt===!0&&C.cameras.push(ee)}const Pt=o.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Vt=v.getDepthInformation(St[0]);Vt&&Vt.isValid&&Vt.texture&&A.init(t,Vt,o.renderState)}}for(let St=0;St<U.length;St++){const mt=w[St],Pt=U[St];mt!==null&&Pt!==void 0&&Pt.update(mt,ut,m||f)}L&&L(V,ut),ut.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ut}),E=null}const ft=new H0;ft.setAnimationLoop(W),this.setAnimationLoop=function(V){L=V},this.dispose=function(){}}}const vr=new ua,eR=new Ze;function nR(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,U0(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,P,U,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),v(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),A(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,P,U):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=t.get(x),U=P.envMap,w=P.envMapRotation;U&&(M.envMap.value=U,vr.copy(w),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),M.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(vr)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,P,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=U*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function v(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function A(M,x){const P=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function iR(s,t,i,a){let o={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,U){const w=U.program;a.uniformBlockBinding(P,w)}function m(P,U){let w=o[P.id];w===void 0&&(E(P),w=g(P),o[P.id]=w,P.addEventListener("dispose",M));const k=U.program;a.updateUBOMapping(P,k);const F=t.render.frame;c[P.id]!==F&&(_(P),c[P.id]=F)}function g(P){const U=v();P.__bindingPointIndex=U;const w=s.createBuffer(),k=P.__size,F=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,k,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function v(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const U=o[P.id],w=P.uniforms,k=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let F=0,z=w.length;F<z;F++){const X=Array.isArray(w[F])?w[F]:[w[F]];for(let D=0,C=X.length;D<C;D++){const H=X[D];if(S(H,F,D,k)===!0){const nt=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let vt=0;vt<J.length;vt++){const O=J[vt],$=A(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,nt+lt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,lt),lt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,U,w,k){const F=P.value,z=U+"_"+w;if(k[z]===void 0)return typeof F=="number"||typeof F=="boolean"?k[z]=F:k[z]=F.clone(),!0;{const X=k[z];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return k[z]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function E(P){const U=P.uniforms;let w=0;const k=16;for(let z=0,X=U.length;z<X;z++){const D=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,H=D.length;C<H;C++){const nt=D[C],J=Array.isArray(nt.value)?nt.value:[nt.value];for(let lt=0,vt=J.length;lt<vt;lt++){const O=J[lt],$=A(O),Q=w%k,Mt=Q%$.boundary,ot=Q+Mt;w+=Mt,ot!==0&&k-ot<$.storage&&(w+=k-ot),nt.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=$.storage}}}const F=w%k;return F>0&&(w+=k-F),P.__size=w,P.__cache={},this}function A(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function x(){for(const P in o)s.deleteBuffer(o[P]);f=[],o={},c={}}return{bind:p,update:m,dispose:x}}class aR{constructor(t={}){const{canvas:i=MM(),context:a=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,x=null;const P=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=hi;let F=0,z=0,X=null,D=-1,C=null;const H=new tn,nt=new tn;let J=null;const lt=new ze(0);let vt=0,O=i.width,$=i.height,Q=1,Mt=null,ot=null;const L=new tn(0,0,O,$),W=new tn(0,0,O,$);let ft=!1;const V=new Wd;let ut=!1,St=!1;const mt=new Ze,Pt=new Ze,Nt=new K,Vt=new tn,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ee(){return X===null?Q:1}let I=a;function pn(R,j){return i.getContext(R,j)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const j="webgl2";if(I=pn(j,R),I===null)throw pn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,de,Wt,Te,Xt,N,b,at,pt,Et,_t,qt,Ct,Bt,_e,bt,It,Qt,Yt,zt,ne,ce,Pe,Y;function wt(){ie=new p1(I),ie.init(),ce=new KA(I,ie),de=new o1(I,ie,t,ce),Wt=new jA(I,ie),de.reverseDepthBuffer&&_&&Wt.buffers.depth.setReversed(!0),Te=new v1(I),Xt=new zA,N=new ZA(I,ie,Wt,Xt,de,ce,Te),b=new c1(w),at=new d1(w),pt=new EE(I),Pe=new r1(I,pt),Et=new m1(I,pt,Te,Pe),_t=new x1(I,Et,pt,Te),Yt=new _1(I,de,N),bt=new l1(Xt),qt=new OA(w,b,at,ie,de,Pe,bt),Ct=new nR(w,Xt),Bt=new FA,_e=new kA(ie),Qt=new a1(w,b,at,Wt,_t,S,p),It=new qA(w,_t,de),Y=new iR(I,Te,de,Wt),zt=new s1(I,ie,Te),ne=new g1(I,ie,Te),Te.programs=qt.programs,w.capabilities=de,w.extensions=ie,w.properties=Xt,w.renderLists=Bt,w.shadowMap=It,w.state=Wt,w.info=Te}wt();const ht=new tR(w,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(R){R!==void 0&&(Q=R,this.setSize(O,$,!1))},this.getSize=function(R){return R.set(O,$)},this.setSize=function(R,j,rt=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,$=j,i.width=Math.floor(R*Q),i.height=Math.floor(j*Q),rt===!0&&(i.style.width=R+"px",i.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(O*Q,$*Q).floor()},this.setDrawingBufferSize=function(R,j,rt){O=R,$=j,Q=rt,i.width=Math.floor(R*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,j,rt,st){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,j,rt,st),Wt.viewport(H.copy(L).multiplyScalar(Q).round())},this.getScissor=function(R){return R.copy(W)},this.setScissor=function(R,j,rt,st){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,j,rt,st),Wt.scissor(nt.copy(W).multiplyScalar(Q).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){Wt.setScissorTest(ft=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){ot=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,rt=!0){let st=0;if(R){let q=!1;if(X!==null){const Tt=X.texture.format;q=Tt===Vd||Tt===Gd||Tt===Hd}if(q){const Tt=X.texture.type,Ut=Tt===ca||Tt===br||Tt===Bo||Tt===Io||Tt===Bd||Tt===Id,Ot=Qt.getClearColor(),Ft=Qt.getClearAlpha(),re=Ot.r,$t=Ot.g,jt=Ot.b;Ut?(E[0]=re,E[1]=$t,E[2]=jt,E[3]=Ft,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=re,A[1]=$t,A[2]=jt,A[3]=Ft,I.clearBufferiv(I.COLOR,0,A))}else st|=I.COLOR_BUFFER_BIT}j&&(st|=I.DEPTH_BUFFER_BIT),rt&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Qt.dispose(),Bt.dispose(),_e.dispose(),Xt.dispose(),b.dispose(),at.dispose(),_t.dispose(),Pe.dispose(),Y.dispose(),qt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ns),ht.removeEventListener("sessionend",Os),Ai.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const R=Te.autoReset,j=It.enabled,rt=It.autoUpdate,st=It.needsUpdate,q=It.type;wt(),Te.autoReset=R,It.enabled=j,It.autoUpdate=rt,It.needsUpdate=st,It.type=q}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const j=R.target;j.removeEventListener("dispose",ae),Ye(j)}function Ye(R){cn(R),Xt.remove(R)}function cn(R){const j=Xt.get(R).programs;j!==void 0&&(j.forEach(function(rt){qt.releaseProgram(rt)}),R.isShaderMaterial&&qt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,rt,st,q,Tt){j===null&&(j=le);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Ot=Ps(R,j,rt,st,q);Wt.setMaterial(st,Ut);let Ft=rt.index,re=1;if(st.wireframe===!0){if(Ft=Et.getWireframeAttribute(rt),Ft===void 0)return;re=2}const $t=rt.drawRange,jt=rt.attributes.position;let Se=$t.start*re,Me=($t.start+$t.count)*re;Tt!==null&&(Se=Math.max(Se,Tt.start*re),Me=Math.min(Me,(Tt.start+Tt.count)*re)),Ft!==null?(Se=Math.max(Se,0),Me=Math.min(Me,Ft.count)):jt!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,jt.count));const Xe=Me-Se;if(Xe<0||Xe===1/0)return;Pe.setup(q,st,Ot,rt,Ft);let Re,se=zt;if(Ft!==null&&(Re=pt.get(Ft),se=ne,se.setIndex(Re)),q.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*ee()),se.setMode(I.LINES)):se.setMode(I.TRIANGLES);else if(q.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Wt.setLineWidth(Kt*ee()),q.isLineSegments?se.setMode(I.LINES):q.isLineLoop?se.setMode(I.LINE_LOOP):se.setMode(I.LINE_STRIP)}else q.isPoints?se.setMode(I.POINTS):q.isSprite&&se.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)zc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Kt=q._multiDrawStarts,un=q._multiDrawCounts,be=q._multiDrawCount,zn=Ft?pt.get(Ft).bytesPerElement:1,gi=Xt.get(st).currentProgram.getUniforms();for(let Un=0;Un<be;Un++)gi.setValue(I,"_gl_DrawID",Un),se.render(Kt[Un]/zn,un[Un])}else if(q.isInstancedMesh)se.renderInstances(Se,Xe,q.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,un=Math.min(rt.instanceCount,Kt);se.renderInstances(Se,Xe,un)}else se.render(Se,Xe)};function Ae(R,j,rt){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Ke(R,j,rt),R.side=Wa,R.needsUpdate=!0,Ke(R,j,rt),R.side=Li):Ke(R,j,rt)}this.compile=function(R,j,rt=null){rt===null&&(rt=R),x=_e.get(rt),x.init(j),U.push(x),rt.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),R!==rt&&R.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(x.pushLight(q),q.castShadow&&x.pushShadow(q))}),x.setupLights();const st=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Ot=Tt[Ut];Ae(Ot,rt,q),st.add(Ot)}else Ae(Tt,rt,q),st.add(Tt)}),x=U.pop(),st},this.compileAsync=function(R,j,rt=null){const st=this.compile(R,j,rt);return new Promise(q=>{function Tt(){if(st.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){q(R);return}setTimeout(Tt,10)}ie.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _n=null;function pi(R){_n&&_n(R)}function Ns(){Ai.stop()}function Os(){Ai.start()}const Ai=new H0;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){_n=R,ht.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ht.addEventListener("sessionstart",Ns),ht.addEventListener("sessionend",Os),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(j),j=ht.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,j,X),x=_e.get(R,U.length),x.init(j),U.push(x),Pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,ut=bt.init(this.clippingPlanes,St),M=Bt.get(R,P.length),M.init(),P.push(M),ht.enabled===!0&&ht.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ya(Tt,j,-1/0,w.sortObjects)}Ya(R,j,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Mt,ot),Le=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Le&&Qt.addToRenderList(M,R),this.info.render.frame++,ut===!0&&bt.beginShadows();const rt=x.state.shadowsArray;It.render(rt,R,j),ut===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,q=M.transmissive;if(x.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(q.length>0)for(let Ut=0,Ot=Tt.length;Ut<Ot;Ut++){const Ft=Tt[Ut];zs(st,q,R,Ft)}Le&&Qt.render(R);for(let Ut=0,Ot=Tt.length;Ut<Ot;Ut++){const Ft=Tt[Ut];Rr(M,R,Ft,Ft.viewport)}}else q.length>0&&zs(st,q,R,j),Le&&Qt.render(R),Rr(M,R,j);X!==null&&z===0&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,j),Pe.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(x=U[U.length-1],ut===!0&&bt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Ya(R,j,rt,st){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){st&&Vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const Ut=_t.update(R),Ot=R.material;Ot.visible&&M.push(R,Ut,Ot,rt,Vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){const Ut=_t.update(R),Ot=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Vt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Vt.copy(Ut.boundingSphere.center)),Vt.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ot)){const Ft=Ut.groups;for(let re=0,$t=Ft.length;re<$t;re++){const jt=Ft[re],Se=Ot[jt.materialIndex];Se&&Se.visible&&M.push(R,Ut,Se,rt,Vt.z,jt)}}else Ot.visible&&M.push(R,Ut,Ot,rt,Vt.z,null)}}const Tt=R.children;for(let Ut=0,Ot=Tt.length;Ut<Ot;Ut++)Ya(Tt[Ut],j,rt,st)}function Rr(R,j,rt,st){const q=R.opaque,Tt=R.transmissive,Ut=R.transparent;x.setupLightsView(rt),ut===!0&&bt.setGlobalState(w.clippingPlanes,rt),st&&Wt.viewport(H.copy(st)),q.length>0&&ja(q,j,rt),Tt.length>0&&ja(Tt,j,rt),Ut.length>0&&ja(Ut,j,rt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function zs(R,j,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new Ar(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Vo:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[st.id],Ut=st.viewport||H;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Ot=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(lt),vt=w.getClearAlpha(),vt<1&&w.setClearColor(16777215,.5),w.clear(),Le&&Qt.render(rt);const Ft=w.toneMapping;w.toneMapping=ka;const re=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),ut===!0&&bt.setGlobalState(w.clippingPlanes,st),ja(R,rt,st),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let jt=0,Se=j.length;jt<Se;jt++){const Me=j[jt],Xe=Me.object,Re=Me.geometry,se=Me.material,Kt=Me.group;if(se.side===Li&&Xe.layers.test(st.layers)){const un=se.side;se.side=Xn,se.needsUpdate=!0,mi(Xe,rt,st,Re,se,Kt),se.side=un,se.needsUpdate=!0,$t=!0}}$t===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Ot),w.setClearColor(lt,vt),re!==void 0&&(st.viewport=re),w.toneMapping=Ft}function ja(R,j,rt){const st=j.isScene===!0?j.overrideMaterial:null;for(let q=0,Tt=R.length;q<Tt;q++){const Ut=R[q],Ot=Ut.object,Ft=Ut.geometry,re=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&st!==null&&($t=st),Ot.layers.test(rt.layers)&&mi(Ot,j,rt,Ft,$t,re)}}function mi(R,j,rt,st,q,Tt){R.onBeforeRender(w,j,rt,st,q,Tt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(w,j,rt,st,R,Tt),q.transparent===!0&&q.side===Li&&q.forceSinglePass===!1?(q.side=Xn,q.needsUpdate=!0,w.renderBufferDirect(rt,j,st,q,R,Tt),q.side=Wa,q.needsUpdate=!0,w.renderBufferDirect(rt,j,st,q,R,Tt),q.side=Li):w.renderBufferDirect(rt,j,st,q,R,Tt),R.onAfterRender(w,j,rt,st,q,Tt)}function Ke(R,j,rt){j.isScene!==!0&&(j=le);const st=Xt.get(R),q=x.state.lights,Tt=x.state.shadowsArray,Ut=q.state.version,Ot=qt.getParameters(R,q.state,Tt,j,rt),Ft=qt.getProgramCacheKey(Ot);let re=st.programs;st.environment=R.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(R.isMeshStandardMaterial?at:b).get(R.envMap||st.environment),st.envMapRotation=st.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,re===void 0&&(R.addEventListener("dispose",ae),re=new Map,st.programs=re);let $t=re.get(Ft);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Ut)return Pi(R,Ot),$t}else Ot.uniforms=qt.getUniforms(R),R.onBeforeCompile(Ot,w),$t=qt.acquireProgram(Ot,Ft),re.set(Ft,$t),st.uniforms=Ot.uniforms;const jt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=bt.uniform),Pi(R,Ot),st.needsLights=jc(R),st.lightsStateVersion=Ut,st.needsLights&&(jt.ambientLightColor.value=q.state.ambient,jt.lightProbe.value=q.state.probe,jt.directionalLights.value=q.state.directional,jt.directionalLightShadows.value=q.state.directionalShadow,jt.spotLights.value=q.state.spot,jt.spotLightShadows.value=q.state.spotShadow,jt.rectAreaLights.value=q.state.rectArea,jt.ltc_1.value=q.state.rectAreaLTC1,jt.ltc_2.value=q.state.rectAreaLTC2,jt.pointLights.value=q.state.point,jt.pointLightShadows.value=q.state.pointShadow,jt.hemisphereLights.value=q.state.hemi,jt.directionalShadowMap.value=q.state.directionalShadowMap,jt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,jt.spotShadowMap.value=q.state.spotShadowMap,jt.spotLightMatrix.value=q.state.spotLightMatrix,jt.spotLightMap.value=q.state.spotLightMap,jt.pointShadowMap.value=q.state.pointShadowMap,jt.pointShadowMatrix.value=q.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function xn(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Pc.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Pi(R,j){const rt=Xt.get(R);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.batchingColor=j.batchingColor,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.instancingMorph=j.instancingMorph,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Ps(R,j,rt,st,q){j.isScene!==!0&&(j=le),N.resetTextureUnits();const Tt=j.fog,Ut=st.isMeshStandardMaterial?j.environment:null,Ot=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rs,Ft=(st.isMeshStandardMaterial?at:b).get(st.envMap||Ut),re=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let Xe=ka;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=w.toneMapping);const Re=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,se=Re!==void 0?Re.length:0,Kt=Xt.get(st),un=x.state.lights;if(ut===!0&&(St===!0||R!==C)){const Qe=R===C&&st.id===D;bt.setState(st,R,Qe)}let be=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||Kt.outputColorSpace!==Ot||q.isBatchedMesh&&Kt.batching===!1||!q.isBatchedMesh&&Kt.batching===!0||q.isBatchedMesh&&Kt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Kt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Kt.instancing===!1||!q.isInstancedMesh&&Kt.instancing===!0||q.isSkinnedMesh&&Kt.skinning===!1||!q.isSkinnedMesh&&Kt.skinning===!0||q.isInstancedMesh&&Kt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Kt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Kt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Kt.instancingMorph===!1&&q.morphTexture!==null||Kt.envMap!==Ft||st.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==re||Kt.vertexTangents!==$t||Kt.morphTargets!==jt||Kt.morphNormals!==Se||Kt.morphColors!==Me||Kt.toneMapping!==Xe||Kt.morphTargetsCount!==se)&&(be=!0):(be=!0,Kt.__version=st.version);let zn=Kt.currentProgram;be===!0&&(zn=Ke(st,j,q));let gi=!1,Un=!1,mn=!1;const Fe=zn.getUniforms(),Ln=Kt.uniforms;if(Wt.useProgram(zn.program)&&(gi=!0,Un=!0,mn=!0),st.id!==D&&(D=st.id,Un=!0),gi||C!==R){Wt.buffers.depth.getReversed()?(mt.copy(R.projectionMatrix),TM(mt),bM(mt),Fe.setValue(I,"projectionMatrix",mt)):Fe.setValue(I,"projectionMatrix",R.projectionMatrix),Fe.setValue(I,"viewMatrix",R.matrixWorldInverse);const yn=Fe.map.cameraPosition;yn!==void 0&&yn.setValue(I,Nt.setFromMatrixPosition(R.matrixWorld)),de.logarithmicDepthBuffer&&Fe.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Un=!0,mn=!0)}if(q.isSkinnedMesh){Fe.setOptional(I,q,"bindMatrix"),Fe.setOptional(I,q,"bindMatrixInverse");const Qe=q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Fe.setValue(I,"boneTexture",Qe.boneTexture,N))}q.isBatchedMesh&&(Fe.setOptional(I,q,"batchingTexture"),Fe.setValue(I,"batchingTexture",q._matricesTexture,N),Fe.setOptional(I,q,"batchingIdTexture"),Fe.setValue(I,"batchingIdTexture",q._indirectTexture,N),Fe.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Fe.setValue(I,"batchingColorTexture",q._colorsTexture,N));const bn=rt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Yt.update(q,rt,zn),(Un||Kt.receiveShadow!==q.receiveShadow)&&(Kt.receiveShadow=q.receiveShadow,Fe.setValue(I,"receiveShadow",q.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=Ft,Ln.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&j.environment!==null&&(Ln.envMapIntensity.value=j.environmentIntensity),Un&&(Fe.setValue(I,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Yc(Ln,mn),Tt&&st.fog===!0&&Ct.refreshFogUniforms(Ln,Tt),Ct.refreshMaterialUniforms(Ln,st,Q,$,x.state.transmissionRenderTarget[R.id]),Pc.upload(I,xn(Kt),Ln,N)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Pc.upload(I,xn(Kt),Ln,N),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(I,"center",q.center),Fe.setValue(I,"modelViewMatrix",q.modelViewMatrix),Fe.setValue(I,"normalMatrix",q.normalMatrix),Fe.setValue(I,"modelMatrix",q.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let yn=0,Cr=Qe.length;yn<Cr;yn++){const Pn=Qe[yn];Y.update(Pn,zn),Y.bind(Pn,zn)}}return zn}function Yc(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function jc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,j,rt){const st=Xt.get(R);st.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Xt.get(R.texture).__webglTexture=j,Xt.get(R.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const rt=Xt.get(R);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0};const Zo=I.createFramebuffer();this.setRenderTarget=function(R,j=0,rt=0){X=R,F=j,z=rt;let st=!0,q=null,Tt=!1,Ut=!1;if(R){const Ft=Xt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Ft.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Ft.__hasExternalTextures)N.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Ft.__boundDepthTexture!==jt){if(jt!==null&&Xt.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const re=R.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ut=!0);const $t=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[j])?q=$t[j][rt]:q=$t[j],Tt=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?q=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?q=$t[rt]:q=$t,H.copy(R.viewport),nt.copy(R.scissor),J=R.scissorTest}else H.copy(L).multiplyScalar(Q).floor(),nt.copy(W).multiplyScalar(Q).floor(),J=ft;if(rt!==0&&(q=Zo),Wt.bindFramebuffer(I.FRAMEBUFFER,q)&&st&&Wt.drawBuffers(R,q),Wt.viewport(H),Wt.scissor(nt),Wt.setScissorTest(J),Tt){const Ft=Xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,rt)}else if(Ut){const Ft=Xt.get(R.texture),re=j;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.__webglTexture,rt,re)}else if(R!==null&&rt!==0){const Ft=Xt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,j,rt,st,q,Tt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Wt.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Ft=R.texture,re=Ft.format,$t=Ft.type;if(!de.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-st&&rt>=0&&rt<=R.height-q&&I.readPixels(j,rt,st,q,ce.convert(re),ce.convert($t),Tt)}finally{const Ft=X!==null?Xt.get(X).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,j,rt,st,q,Tt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(j>=0&&j<=R.width-st&&rt>=0&&rt<=R.height-q){Wt.bindFramebuffer(I.FRAMEBUFFER,Ot);const Ft=R.texture,re=Ft.format,$t=Ft.type;if(!de.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(j,rt,st,q,ce.convert(re),ce.convert($t),0);const Se=X!==null?Xt.get(X).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Se);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await EM(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(jt),I.deleteSync(Me),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,rt=0){const st=Math.pow(2,-rt),q=Math.floor(R.image.width*st),Tt=Math.floor(R.image.height*st),Ut=j!==null?j.x:0,Ot=j!==null?j.y:0;N.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,Ut,Ot,q,Tt),Wt.unbindTexture()};const Za=I.createFramebuffer(),Fs=I.createFramebuffer();this.copyTextureToTexture=function(R,j,rt=null,st=null,q=0,Tt=null){Tt===null&&(q!==0?(zc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=q,q=0):Tt=0);let Ut,Ot,Ft,re,$t,jt,Se,Me,Xe;const Re=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,re=rt.min.x,$t=rt.min.y,jt=rt.isBox3?rt.min.z:0;else{const bn=Math.pow(2,-q);Ut=Math.floor(Re.width*bn),Ot=Math.floor(Re.height*bn),R.isDataArrayTexture?Ft=Re.depth:R.isData3DTexture?Ft=Math.floor(Re.depth*bn):Ft=1,re=0,$t=0,jt=0}st!==null?(Se=st.x,Me=st.y,Xe=st.z):(Se=0,Me=0,Xe=0);const se=ce.convert(j.format),Kt=ce.convert(j.type);let un;j.isData3DTexture?(N.setTexture3D(j,0),un=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(N.setTexture2DArray(j,0),un=I.TEXTURE_2D_ARRAY):(N.setTexture2D(j,0),un=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),zn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Un=I.getParameter(I.UNPACK_SKIP_ROWS),mn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Re.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,re),I.pixelStorei(I.UNPACK_SKIP_ROWS,$t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Ln=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const bn=Xt.get(R),Qe=Xt.get(j),yn=Xt.get(bn.__renderTarget),Cr=Xt.get(Qe.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,yn.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Pn=0;Pn<Ft;Pn++)Fe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(R).__webglTexture,q,jt+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(j).__webglTexture,Tt,Xe+Pn)),I.blitFramebuffer(re,$t,Ut,Ot,Se,Me,Ut,Ot,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||Xt.has(R)){const bn=Xt.get(R),Qe=Xt.get(j);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Za),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fs);for(let yn=0;yn<Ft;yn++)Fe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,q,jt+yn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,q),Ln?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,Xe+yn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qe.__webglTexture,Tt),q!==0?I.blitFramebuffer(re,$t,Ut,Ot,Se,Me,Ut,Ot,I.COLOR_BUFFER_BIT,I.NEAREST):Ln?I.copyTexSubImage3D(un,Tt,Se,Me,Xe+yn,re,$t,Ut,Ot):I.copyTexSubImage2D(un,Tt,Se,Me,re,$t,Ut,Ot);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ln?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(un,Tt,Se,Me,Xe,Ut,Ot,Ft,se,Kt,Re.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(un,Tt,Se,Me,Xe,Ut,Ot,Ft,se,Re.data):I.texSubImage3D(un,Tt,Se,Me,Xe,Ut,Ot,Ft,se,Kt,Re):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,Se,Me,Ut,Ot,se,Kt,Re.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,Se,Me,Re.width,Re.height,se,Re.data):I.texSubImage2D(I.TEXTURE_2D,Tt,Se,Me,Ut,Ot,se,Kt,Re);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Un),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mn),Tt===0&&j.generateMipmaps&&I.generateMipmap(un),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,j,rt=null,st=null,q=0){return zc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,rt,st,q)},this.initRenderTarget=function(R){Xt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){F=0,z=0,X=null,Wt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const rR={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},sR={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function Jd(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function $d(s){return s.replace("'","").replace("2","")}function Y_(s){return s.endsWith("'")&&!s.endsWith("2")}function oR(s){return s.endsWith("2")}const j_=16777215;class lR{constructor(t){ke(this,"renderer");ke(this,"scene");ke(this,"camera");ke(this,"arrowGroup");ke(this,"traceGroup",null);ke(this,"currentMove",null);ke(this,"traceProgress",0);ke(this,"width",1);ke(this,"height",1);this.renderer=new aR({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new QM,this.camera=new di(45,1,.01,100),this.camera.position.set(0,0,3);const i=new yE(16777215,.9),a=new xE(16777215,.6);a.position.set(2,3,4),this.scene.add(i,a),this.arrowGroup=new Tr,this.scene.add(this.arrowGroup)}resize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.rebuildArrow(t))}setRotationProgress(t){const i=Math.max(0,Math.min(1,t));Math.abs(i-this.traceProgress)<.008||(this.traceProgress=i,this.updateTrace())}tick(){}render(t){if(!t||!this.currentMove){this.renderer.render(this.scene,this.camera);return}const i=new Tr,a=new Ze;a.set(t.rotationMatrix[0],t.rotationMatrix[1],t.rotationMatrix[2],0,t.rotationMatrix[3],t.rotationMatrix[4],t.rotationMatrix[5],0,t.rotationMatrix[6],t.rotationMatrix[7],t.rotationMatrix[8],0,0,0,0,1),i.setRotationFromMatrix(a);const o=t.size/this.width;i.position.set((t.translation[0]-this.width/2)*o,-(t.translation[1]-this.height/2)*o,t.translation[2]*o),i.scale.setScalar(o*2),this.arrowGroup.matrixAutoUpdate=!1,this.arrowGroup.matrix.copy(i.matrix),this.arrowGroup.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.clearArrow()}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=$d(t),a=new K(...rR[i]),o=new K(0,1,0);Math.abs(a.dot(o))>.9&&o.set(0,0,1);const c=new K().crossVectors(o,a).normalize(),f=new K().crossVectors(a,c).normalize(),h=a.clone().multiplyScalar(.52),p=new Tr;p.position.copy(h),p.userData={tangent:c,bitangent:f,move:t};const m=Jd(t),g=.32,v=32,_=Y_(t)?m:0,S=Y_(t)?0:m,E=[];for(let M=0;M<=v;M++){const x=_+(S-_)*M/v,P=c.clone().multiplyScalar(Math.cos(x)*g).add(f.clone().multiplyScalar(Math.sin(x)*g));E.push(P)}p.userData.points=E,p.userData.segments=v;const A=new ei(new Zd(.34,.4,48),new Gc({color:j_,transparent:!0,opacity:.35,side:Li,depthWrite:!1}));if(p.add(A),oR(t)){const M=A.clone();M.rotation.z=Math.PI,p.add(M)}this.traceGroup=p,this.arrowGroup.add(p),this.updateTrace()}updateTrace(){if(!this.traceGroup||!this.currentMove)return;const t=this.traceGroup.getObjectByName("trace");t&&(this.traceGroup.remove(t),Z_(t));const i=this.traceGroup.userData.points,a=this.traceGroup.userData.segments;if(!(i!=null&&i.length))return;const o=Math.max(2,Math.floor(a*this.traceProgress)),c=i.slice(0,o+1);if(c.length<2)return;const f=new P0(c),h=new Kd(f,o,.028,8,!1),p=new Gc({color:j_,transparent:!0,opacity:.88,depthTest:!0,depthWrite:!1}),m=new ei(h,p);m.name="trace",this.traceGroup.add(m);const g=c[c.length-1],v=c[c.length-2]??g,_=new K().subVectors(g,v).normalize(),S=new ei(new jd(.065,.15,12),p.clone());S.name="trace",S.position.copy(g),S.quaternion.setFromUnitVectors(new K(0,1,0),_),this.traceGroup.add(S)}clearArrow(){for(this.traceGroup=null;this.arrowGroup.children.length>0;){const t=this.arrowGroup.children[0];this.arrowGroup.remove(t),Z_(t)}}}function Z_(s){s.traverse(t=>{t instanceof ei&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function cR({pose:s,move:t,rotationProgress:i,width:a,height:o,active:c}){const f=Gt.useRef(null),h=Gt.useRef(null);return Gt.useEffect(()=>{const p=f.current;if(!p)return;const m=new lR(p);return h.current=m,()=>{m.dispose(),h.current=null}},[]),Gt.useEffect(()=>{var p;(p=h.current)==null||p.resize(a,o)},[a,o]),Gt.useEffect(()=>{var p;(p=h.current)==null||p.setMove(t)},[t]),Gt.useEffect(()=>{var p;(p=h.current)==null||p.setRotationProgress(i)},[i]),Gt.useEffect(()=>{if(!c)return;let p=0;const m=()=>{var g,v;(g=h.current)==null||g.tick(),(v=h.current)==null||v.render(s),p=requestAnimationFrame(m)};return p=requestAnimationFrame(m),()=>cancelAnimationFrame(p)},[s,c]),At.jsx("canvas",{ref:f,className:`ar-overlay${c?" active":""}`,"aria-hidden":"true"})}function uR({setVideoRef:s,onDimensions:t}){const i=Gt.useCallback(o=>{o.videoWidth&&o.videoHeight&&(t==null||t(o.videoWidth,o.videoHeight))},[t]),a=Gt.useCallback(o=>{s(o),o&&o.readyState>=1&&i(o)},[s,i]);return At.jsx("video",{ref:a,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:o=>i(o.currentTarget)})}const fR=.3,hR=.22;function Ls(s,t){const i=Math.min(s,t)*fR;return{x:(s-i)/2,y:(t-i)/2,size:i}}function W0(s){const t=s.size*hR;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function q0(s){const{x:t,y:i,size:a}=s;return[{x:t,y:i},{x:t+a,y:i},{x:t+a,y:i+a},{x:t,y:i+a}]}function dR(s,t,i){return s.map(a=>({x:a.x+t,y:a.y+i}))}const Xa=["R","O","Y","G","B","W"],pR={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},Od={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},mR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let ws={},tp=!1;function ep(){return tp&&Xa.every(s=>ws[s])}function gR(){const s={...mR};for(const t of Xa)ws[t]&&(s[t]=ws[t]);return s}function K_(){ws={},tp=!1}function vR(s,t){ws[s]=t,Xa.every(i=>ws[i])&&(tp=!0)}function Hh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function _R(s,t,i){const a=Hh(s/255),o=Hh(t/255),c=Hh(i/255),f=a*.4124564+o*.3575761+c*.1804375,h=a*.2126729+o*.7151522+c*.072175,p=a*.0193339+o*.119192+c*.9503041,m=f/.95047>.008856?(f/.95047)**(1/3):7.787*(f/.95047)+16/116,g=h>.008856?h**(1/3):7.787*h+16/116,v=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*g-16,500*(m-g),200*(g-v)]}function Gh(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function xR(s,t,i){return Math.max(s,t,i)-Math.min(s,t,i)<28?"W":s>=t&&s>=i?t>s*.92?"O":"R":t>=s&&t>=i?"G":"B"}function yR(s,t,i,a){const o=Math.max(s,t,i);if(o<45)return!1;const c=(s+t+i)/3,f=o-Math.min(s,t,i);switch(a){case"W":return f<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=i;case"O":return s>70&&t>55&&s>=i-5;case"G":return t>45&&t>=s-12&&t>=i-5;case"B":return i>40&&i>=s-8&&i>=t-15;default:return!0}}function SR(s,t,i,a){if(a==="W")return Math.max(s,t,i)-Math.min(s,t,i)<60;if(a==="Y")return s>70&&t>60;const o=xR(s,t,i);return a==="O"?o==="O"||o==="R"||o==="Y":a==="R"?o==="R"||o==="O":o===a}function Y0(s,t,i,a){const o=s.getContext("2d",{willReadFrequently:!0});if(!o)return null;const c=Ls(t,i),f=W0(c),h=Math.floor(f.x),p=Math.floor(f.y),m=Math.floor(f.size),g=Math.floor(f.size);if(m<=0||g<=0)return null;const v=o.getImageData(h,p,m,g).data,_=[],S=[],E=[],A=[],M=[],x=[];for(let C=0;C<v.length;C+=8){const H=v[C],nt=v[C+1],J=v[C+2];Math.max(H,nt,J)<40||(A.push(H),M.push(nt),x.push(J),yR(H,nt,J,a)&&(_.push(H),S.push(nt),E.push(J)))}const P=_.length>=4?_:A,U=_.length>=4?S:M,w=_.length>=4?E:x;if(P.length<4)return null;const k=Gh(P),F=Gh(U),z=Gh(w),X=_R(k,F,z),D=P.length;return{r:k,g:F,b:z,lab:X,ready:D>=6&&SR(k,F,z,a)}}function MR(s,t,i,a){const o=Y0(s,t,i,a);return o!=null&&o.ready?(vR(a,o.lab),o):null}function j0(s,t){Gt.useEffect(()=>{if(!t)return;const i=a=>{var c;if(a.key!=="Enter"&&a.key!==" ")return;const o=(c=a.target)==null?void 0:c.tagName;o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||(a.preventDefault(),s())};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[s,t])}function np({rect:s}){const t=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}:void 0;return At.jsx("div",{className:"guide-frame-css",style:t})}function ER({rect:s,strokeColor:t="#ffffff"}){const i=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none",borderColor:t,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.35), 0 0 12px ${t}55`}:void 0;return At.jsx("div",{className:"guide-spot-css",style:i})}function TR({visible:s,stepIndex:t,sample:i,ready:a,error:o,onConfirm:c,guideRect:f,spotRect:h}){const p=Xa[t]??"R";return j0(c,s&&a),s?At.jsxs("div",{className:"color-learn-overlay","aria-live":"polite",children:[At.jsx(np,{rect:f}),At.jsx(ER,{rect:h,strokeColor:Od[p]}),At.jsxs("div",{className:"color-learn-panel",children:[At.jsx("p",{className:"color-learn-target",style:{color:Od[p]},children:pR[p]}),At.jsxs("p",{className:"color-learn-step",children:[t+1," / ",Xa.length]}),i&&At.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${i.r},${i.g},${i.b})`}}),At.jsx("button",{type:"button",className:"capture-button",disabled:!a,onClick:c,children:a?"Confirm":"Hold steady…"}),o&&At.jsx("p",{className:"color-learn-error",children:o})]})]}):null}function Q_(s,t,i,a){s.drawImage(t,0,0,i,a)}function bR(s){if(s.length!==9)return s;const t=[];for(let i=0;i<3;i++)for(let a=2;a>=0;a--)t.push(s[i*3+a]);return t}function Z0(s){const t=new Map;for(const[i,a]of s)t.set(i,[...a]);return t}function K0({colors:s,cellClassName:t,variant:i="overlay",orientation:a="real"}){const o=t??(i==="mini"?"face-grid-mini-cell":"cell-grid-item"),c=a==="mirror"?bR(s):s;return At.jsx("div",{className:`face-color-grid face-color-grid--${i}`,children:c.map((f,h)=>At.jsx("span",{className:o,style:{background:Od[f]}},h))})}const AR={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function RR({feedback:s,visible:t,guideRect:i}){if(!t)return null;const a=s.cellColors.length===9;return At.jsxs("div",{className:"detection-overlay","aria-live":"polite",children:[At.jsx(np,{rect:i}),At.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[At.jsxs("div",{className:`detection-status ${s.status}`,children:[At.jsx("span",{className:"status-text",children:AR[s.status]}),s.status==="rotate"&&At.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&At.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),a&&At.jsx(K0,{colors:s.cellColors,variant:"overlay",orientation:"mirror"})]})]})}function CR({phase:s,knownFaces:t,progress:i,needsNewFace:a=!1,needsClearerCenter:o=!1}){return s!=="liveScan"?null:At.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[At.jsx("div",{className:"calibration-bar",children:At.jsx("div",{className:"calibration-fill",style:{width:`${i*100}%`}})}),At.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),At.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),a&&At.jsx("p",{className:"calibration-hint",children:"Show a different face"}),o&&!a&&At.jsx("p",{className:"calibration-hint",children:"Center the face color in the guide"})]})}const J_=["U","F","R","B","L","D"],wR={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function Fo(s){return wR[s]??null}function DR({colors:s,label:t,empty:i=!1}){const a=s&&s.length===9;return At.jsxs("div",{className:`face-grid-mini ${i?"face-grid-mini--empty":""}`,children:[a?At.jsx(K0,{colors:s,variant:"mini",orientation:"real"}):At.jsx("div",{className:"face-color-grid face-color-grid--mini face-color-grid--placeholder",children:Array.from({length:9},(o,c)=>At.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},c))}),At.jsx("span",{className:"face-grid-mini-label",children:t})]})}const UR={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function Vh({visible:s,scannedFaces:t}){if(!s)return null;const i=J_.filter(a=>t[a]).length;return At.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[At.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",i,"/6"]}),At.jsx("div",{className:"scanned-faces-bar-grid",children:J_.map(a=>At.jsx(DR,{colors:t[a]??null,label:UR[a],empty:!t[a]},a))})]})}const LR={U:"Top",D:"Bottom",F:"Front",B:"Back",L:"Left",R:"Right"};function NR(s){const t=$d(s),i=LR[t]??t;return s.endsWith("2")?`Turn ${i} 180°`:s.endsWith("'")?`Turn ${i} counter-clockwise`:`Turn ${i} clockwise`}function OR(s,t){return s==="lost"?"Cube lost — hold it steady in view":s==="searching"?"Point camera at the cube":t>.12?"Keep turning…":"Follow the white arrow on the cube"}function zR({visible:s,currentMove:t,feedback:i,onSkip:a}){if(!s)return null;const{tracking:o,rotationProgress:c,wrongMove:f}=i,h=f?`Wrong move (${f}) — try ${t}`:OR(o,c);return At.jsxs("div",{className:"solving-overlay","aria-live":"polite",children:[At.jsxs("div",{className:"solving-banner",children:[At.jsx("p",{className:"solving-move",children:t}),At.jsx("p",{className:"solving-description",children:NR(t)}),At.jsx("p",{className:`solving-hint${f?" solving-hint--wrong":""}`,children:h}),o==="locked"&&At.jsx("div",{className:"solving-progress","aria-hidden":"true",children:At.jsx("div",{className:"solving-progress-fill",style:{width:`${Math.round(c*100)}%`}})})]}),a&&At.jsx("button",{type:"button",className:"solving-skip",onClick:a,children:"Skip step"})]})}function $_({message:s="Loading…",overlay:t=!1}){return At.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[At.jsx("div",{className:"loading-spinner"}),At.jsx("p",{children:s})]})}function PR({visible:s,feedback:t,guideRect:i,onStart:a}){const o=t.status==="detected"&&t.cellColors.length===9;return j0(a,s),s?At.jsxs("div",{className:"scan-ready-overlay","aria-live":"polite",children:[At.jsx(np,{rect:i}),At.jsxs("div",{className:"scan-ready-panel",children:[At.jsx("p",{className:"scan-ready-hint",children:o?"Cube detected":"Align cube in guide"}),At.jsx("button",{type:"button",className:"capture-button",onClick:a,children:"Start scan"})]})]}):null}function FR({phase:s,currentStep:t,totalSteps:i}){return s!=="solving"||i===0?null:At.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}function BR(s){const t=["U","R","F","D","L","B"];let i="";for(const a of t){const o=s.get(a);if(!o||o.length!==9)throw new Error(`Missing face data for ${a}`);for(const c of o)i+=IR(c)}return i}function IR(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function HR(s,t){const i=new Array(9).fill(0);for(let a=0;a<3;a++)for(let o=0;o<3;o++){let c=0;for(let f=0;f<3;f++)c+=s[a*3+f]*t[f*3+o];i[a*3+o]=c}return i}function t0(){return[1,0,0,0,1,0,0,0,1]}function GR(s,t){const[i,a,o]=s,c=Math.hypot(i,a,o)||1,f=i/c,h=a/c,p=o/c,m=Math.cos(t),g=Math.sin(t),v=1-m;return[v*f*f+m,v*f*h-g*p,v*f*p+g*h,v*f*h+g*p,v*h*h+m,v*h*p-g*f,v*f*p-g*h,v*h*p+g*f,v*p*p+m]}function VR(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-aVdYl3gn.js",import.meta.url),{type:"module"})}const Q0=["R","O","Y","G","B","W"],kR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function J0(){return ep()?gR():kR}function XR(s,t,i){const a=kh(s/255),o=kh(t/255),c=kh(i/255);return[a*.4124564+o*.3575761+c*.1804375,a*.2126729+o*.7151522+c*.072175,a*.0193339+o*.119192+c*.9503041]}function kh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function WR(s,t,i){const f=Xh(s/.95047),h=Xh(t/1),p=Xh(i/1.08883);return[116*h-16,500*(f-h),200*(h-p)]}function Xh(s){return s>.008856?s**(1/3):7.787*s+16/116}function $0(s,t,i){const[a,o,c]=XR(s,t,i);return WR(a,o,c)}function tx(s,t){const i=s[0]-t[0],a=s[1]-t[1],o=s[2]-t[2];return Math.sqrt(i*i+a*a+o*o)}function qR(s,t,i){const a=s/255,o=t/255,c=i/255,f=Math.max(a,o,c),h=Math.min(a,o,c),p=f-h;let m=0;p>0&&(f===a?m=(o-c)/p%6:f===o?m=(c-a)/p+2:m=(a-o)/p+4,m*=60,m<0&&(m+=360));const g=f===0?0:p/f*255,v=f*255;return[m,g,v]}function e0(s,t,i){const a=$0(s,t,i),o=J0();let c="W",f=1/0;for(const h of Q0){const p=tx(a,o[h]);p<f&&(f=p,c=h)}return c}function ex(s,t,i){const a=Math.max(s,t,i),o=Math.min(s,t,i);return a<38||a<70&&a-o<22}function YR(s,t,i){const a=Math.max(s,t,i),o=Math.min(s,t,i),c=a-o,f=(s+t+i)/3;return a<125||c>42||i>s+22&&i>t+12||s>t+22&&s>i+22||t>s+18&&t>i+18?!1:f>145&&c<38}function jR(s,t,i,a){const o=$0(s,t,i);return 1/(1+tx(o,J0()[a]))}function Wh(s,t,i){if(ex(s,t,i)||ep())return e0(s,t,i);const[a,o]=qR(s,t,i),c=o/255;if(YR(s,t,i))return"W";const f=new Map;for(const m of Q0)f.set(m,jR(s,t,i,m));i>=s+14&&i>=t+10&&i>75&&f.set("B",(f.get("B")??0)+.55),s>=t+12&&s>=i+12&&s>85&&f.set("R",(f.get("R")??0)+.45),t>=s+10&&t>=i+10&&t>70&&f.set("G",(f.get("G")??0)+.45),s>95&&t>85&&i<Math.min(s,t)-18&&f.set("Y",(f.get("Y")??0)+.55),s>t+8&&t>i+5&&s>110&&a>=8&&a<42&&f.set("O",(f.get("O")??0)+.45),c>.18&&(a>=38&&a<=72&&f.set("Y",(f.get("Y")??0)+.25),a>=10&&a<38&&f.set("O",(f.get("O")??0)+.2),(a<=12||a>=345)&&f.set("R",(f.get("R")??0)+.2),a>=78&&a<=155&&f.set("G",(f.get("G")??0)+.2),a>=165&&a<=255&&f.set("B",(f.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,g]of f)g>p&&(p=g,h=m);return h}function qh(s){if(s.length===0)return 0;const t=[...s].sort((a,o)=>a-o),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function ZR(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function KR(s,t,i){const a=Math.max(s,t,i)-Math.min(s,t,i);return a>52?.15:a>36?.55:1}function QR(s,t,i,a,o,c){const f=new Map,h=[],p=[],m=[],v=o-i>40?1:2;for(let A=Math.floor(a);A<Math.floor(c);A+=v)for(let M=Math.floor(i);M<Math.floor(o);M+=v){const x=(A*t+M)*4,P=s[x],U=s[x+1],w=s[x+2];if(ex(P,U,w))continue;h.push(P),p.push(U),m.push(w);const k=Wh(P,U,w),F=KR(P,U,w);f.set(k,(f.get(k)??0)+F)}if(h.length===0){const A=Math.floor((i+o)/2),x=(Math.floor((a+c)/2)*t+A)*4;return Wh(s[x],s[x+1],s[x+2])}const _=Wh(qh(h),qh(p),qh(m));f.set(_,(f.get(_)??0)+3);let S=_,E=0;for(const[A,M]of f)M>E&&(E=M,S=A);return S}function JR(s,t,i){const o=s.getImageData(0,0,t,i).data,c=[],f=t/3,h=i/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=ZR(p,m),v=m*f+f*g,_=m*f+f*(1-g),S=p*h+h*g,E=p*h+h*(1-g);c.push(QR(o,t,v,S,_,E))}return c}function Yo(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function $R(s){const t=Yo();for(const i of s)t[i]++;return t}function nx(s){return!!(s&&s.length===9)}function tC(s){if(!nx(s))return{valid:!1,colorCounts:Yo(),detectedCenter:null,uniqueColors:0};const t=$R(s),i=Object.values(t).filter(a=>a>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:i}}const eC={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},jo=["W","Y","R","O","G","B"],qc=9,nC={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function ip(s){const t=Yo();for(const i of s.values())for(const a of i)t[a]++;return t}function iC(s,t){return nC[s][t]??6}function aC(s){let t=null,i=0;for(const a of jo){const o=s[a]-qc;o>i&&(i=o,t=a)}return t}function rC(s){let t=null,i=0;for(const a of jo){const o=qc-s[a];o>i&&(i=o,t=a)}return t}function ix(s){return jo.every(t=>s[t]===qc)}function sC(s){const t=new Map;for(const[a,o]of s){const c=[...o];c[4]=eC[a],t.set(a,c)}const i=[];for(const[a,o]of t)for(let c=0;c<9;c++)c!==4&&i.push({faceId:a,index:c,color:o[c]});for(let a=0;a<256;a++){const o=ip(t);if(ix(o))break;const c=aC(o),f=rC(o);if(!c||!f)break;let h=null,p=1/0;for(const m of i){if(m.color!==c)continue;const g=iC(c,f);g<p&&(p=g,h=m)}if(!h){const m=i.find(g=>g.color===c);if(!m)break;h=m}h.color=f,t.get(h.faceId)[h.index]=f}return t}function oC(s){const t=ip(s),i=Yo();for(const a of jo)i[a]=t[a]-qc;return i}function n0(s){return ix(ip(s))}function lC(s){const t=oC(s),i={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},a=jo.filter(o=>t[o]!==0).map(o=>{const c=t[o];return`${i[o]}${c>0?`+${c}`:c}`});return a.length>0?a.join(", "):""}const ys=256;function ax(s,t){const i=document.createElement("canvas");i.width=ys,i.height=ys;const a=i.getContext("2d",{willReadFrequently:!0});return a?(a.drawImage(s,t.x,t.y,t.size,t.size,0,0,ys,ys),JR(a,ys,ys)):[]}function rx(s,t){const i=s.getContext("2d",{willReadFrequently:!0});if(!i)return 0;const{x:a,y:o,size:c}=t,f=i.getImageData(Math.floor(a),Math.floor(o),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let v=0;v<f.length;v+=32){const _=(f[v]+f[v+1]+f[v+2])/3;h+=_,p+=_*_,m++}if(m===0)return 0;const g=h/m;return p/m-g*g}function sx(s,t){if(s.length!==9)return!1;const i=new Set(s),a=s.filter(o=>o!=="W").length;return t<120?!1:i.size===1?!0:i.size===2&&a<=3&&t<300?!1:i.size>=3&&a>=2||i.size>=2&&a>=4&&t>220}const fi=.5,cC=[[-fi,fi,fi],[fi,fi,fi],[fi,-fi,fi],[-fi,-fi,fi]];function uC(s){if(s.length<4)return null;const t=[...s].sort((o,c)=>o.y-c.y),i=t.slice(0,2).sort((o,c)=>o.x-c.x),a=t.slice(2,4).sort((o,c)=>o.x-c.x);return[i[0],i[1],a[1],a[0]]}function ox(s,t,i){try{return hC(s,t,i)}catch{return fC(s,t)}}function fC(s,t,i){const a={x:s.reduce((c,f)=>c+f.x,0)/4,y:s.reduce((c,f)=>c+f.y,0)/4},o=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return{corners:s,center:a,size:o,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[a.x-t/2,a.y,o*3],confidence:.65}}function hC(s,t,i){const a=window.cv,o=t*.9,c=t*.9,f=t/2,h=i/2,p=a.matFromArray(4,1,a.CV_32FC1,cC.flat()),m=a.matFromArray(4,1,a.CV_32FC1,[s[0].x,s[0].y,s[1].x,s[1].y,s[2].x,s[2].y,s[3].x,s[3].y]),g=a.matFromArray(3,3,a.CV_32FC1,[o,0,f,0,c,h,0,0,1]),v=a.matFromArray(4,1,a.CV_32FC1,[0,0,0,0]),_=new a.Mat,S=new a.Mat,E=new a.Mat;a.solvePnP(p,m,g,v,_,S),a.Rodrigues(_,E);const A=[];for(let U=0;U<9;U++)A.push(E.data32F[U]??E.floatAt(Math.floor(U/3),U%3));const M=[S.data32F[0]??S.floatAt(0,0),S.data32F[1]??S.floatAt(1,0),S.data32F[2]??S.floatAt(2,0)],x={x:s.reduce((U,w)=>U+w.x,0)/4,y:s.reduce((U,w)=>U+w.y,0)/4},P=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return p.delete(),m.delete(),g.delete(),v.delete(),_.delete(),S.delete(),E.delete(),{corners:s,center:x,size:P,rotationMatrix:A,translation:M,confidence:.8}}function dC(s){const t=(o,c)=>Math.hypot(o.x-c.x,o.y-c.y),i=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],a=i.reduce((o,c)=>o+c,0)/4;return a<1?!1:i.every(o=>Math.abs(o-a)/a<.55)}function pC(s,t,i,a){const o=i*a;let c=null,f=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<o*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const v of[.02,.035,.05,.08]){const _=new t.Mat;if(t.approxPolyDP(p,_,v*g,!0),_.rows===4){const S=[];for(let A=0;A<4;A++)S.push({x:_.data32S[A*2],y:_.data32S[A*2+1]});const E=uC(S);E&&dC(E)&&m>f&&(f=m,c=E)}_.delete()}p.delete()}return c}function i0(s,t,i){var a;if(!((a=window.cv)!=null&&a.Mat))return null;try{const o=window.cv,c=o.imread(s),f=new o.Mat,h=new o.Mat,p=new o.Mat,m=new o.Mat,g=new o.MatVector,v=new o.Mat;o.cvtColor(c,f,o.COLOR_RGBA2RGB),o.cvtColor(f,h,o.COLOR_RGB2GRAY),o.GaussianBlur(h,p,new o.Size(5,5),0),o.Canny(p,m,20,80),o.findContours(m,g,v,o.RETR_LIST,o.CHAIN_APPROX_SIMPLE);const _=pC(g,o,t,i);return c.delete(),f.delete(),h.delete(),p.delete(),m.delete(),g.delete(),v.delete(),_}catch{return null}}function mC(s,t,i){const a=Ls(t,i),o=ax(s,a),c=rx(s,a);return sx(o,c)?{corners:q0(a),colors:o}:null}function lx(s,t,i){const a=Ls(t,i),o=document.createElement("canvas");o.width=a.size,o.height=a.size;const c=o.getContext("2d");if(c){c.drawImage(s,a.x,a.y,a.size,a.size,0,0,a.size,a.size);const p=i0(o,a.size,a.size);if(p)return dR(p,a.x,a.y)}const f=i0(s,t,i);if(f)return f;const h=mC(s,t,i);return(h==null?void 0:h.corners)??null}function a0(s,t,i){const a=Ls(t,i),o=ax(s,a),c=rx(s,a);if(!sx(o,c))return null;const f=lx(s,t,i),h=ox(f??q0(a),t,i);return h.confidence=f?.85:.7,{colors:o,pose:h}}function gC(s){const t=window.cv,i=t.imread(s),a=new t.Mat;return t.cvtColor(i,a,t.COLOR_RGBA2GRAY),i.delete(),a}const r0=45;class vC{constructor(){ke(this,"prevGray",null);ke(this,"trackedCorners",null);ke(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const a=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const o=a.matFromArray(4,1,a.CV_32FC2,_C(this.trackedCorners)),c=new a.Mat,f=new a.Mat,h=new a.Mat;a.calcOpticalFlowPyrLK(this.prevGray,t,o,c,f,h);const p=[];let m=0;for(let v=0;v<4;v++){const _=f.data[v]===1,S=c.data32F[v*2],E=c.data32F[v*2+1];_&&Number.isFinite(S)&&Number.isFinite(E)?(p.push({x:S,y:E}),m++):p.push(this.trackedCorners[v])}return o.delete(),c.delete(),f.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>r0?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames=0,this.lostFrames>r0?(this.reset(),null):this.trackedCorners)}}function _C(s){return s.flatMap(t=>[t.x,t.y])}const xC=.65,yC=4,SC=6,s0=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];class MC{constructor(){ke(this,"state",{lastMatrix:t0(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0});ke(this,"initialized",!1);ke(this,"expectedMove",null)}reset(){this.state={lastMatrix:t0(),stableCount:0,pendingMove:null,wrongMove:null,wrongStableCount:0},this.initialized=!1,this.expectedMove=null}setExpectedMove(t){this.expectedMove=t,this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,this.initialized=!0}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,{completedMove:null,progress:0,wrongMove:null};const i=HR(bC(t),this.state.lastMatrix),a=this.expectedMove?TC(i,this.expectedMove):0,o=this.expectedMove?[this.expectedMove]:s0,c=l0(i,o);if(c){if(this.state.pendingMove===c){if(this.state.stableCount++,this.state.stableCount>=yC)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.state.wrongMove=null,this.state.wrongStableCount=0,{completedMove:c,progress:1,wrongMove:null}}else this.state.pendingMove=c,this.state.stableCount=1;this.state.wrongMove=null,this.state.wrongStableCount=0}else if(this.expectedMove){const f=l0(i,s0);if(f&&f!==this.expectedMove){if(this.state.wrongMove===f?this.state.wrongStableCount++:(this.state.wrongMove=f,this.state.wrongStableCount=1),this.state.wrongStableCount>=SC)return{completedMove:null,progress:a,wrongMove:f}}else this.state.wrongMove=null,this.state.wrongStableCount=0;this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=o0(this.state.lastMatrix,t,.15)}else this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=o0(this.state.lastMatrix,t,.15);return{completedMove:null,progress:a,wrongMove:null}}}function cx(s){const t=$d(s);let i=sR[t];return(t==="L"||t==="D"||t==="B")&&(i=[-i[0],-i[1],-i[2]]),i}function EC(s,t){const i=s[0]+s[4]+s[8],a=Math.max(-1,Math.min(1,(i-1)/2)),o=Math.acos(a),c=Math.sin(o);if(Math.abs(c)<1e-5)return 0;const f=[(s[7]-s[5])/(2*c),(s[2]-s[6])/(2*c),(s[3]-s[1])/(2*c)];return(f[0]*t[0]+f[1]*t[1]+f[2]*t[2])*o}function TC(s,t){const i=cx(t),a=Jd(t),o=EC(s,i);return Math.abs(a)<1e-6||Math.sign(o)!==Math.sign(a)&&Math.abs(o)>.15?0:Math.min(1,Math.abs(o)/Math.abs(a))}function bC(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function o0(s,t,i){return s.map((a,o)=>a*(1-i)+t[o]*i)}function l0(s,t){let i=null,a=xC;for(const o of t){const c=cx(o),f=GR(c,Jd(o)),h=AC(s,f);h>a&&(a=h,i=o)}return i}function AC(s,t){let i=0;for(let a=0;a<9;a++)i+=1-Math.abs(s[a]-t[a])/2;return i/9}const RC=30,Rc={pose:null,detectedFace:null,rotationMove:null,rotationProgress:0,wrongMove:null};class CC{constructor(){ke(this,"rotationDetector",new MC);ke(this,"flowTracker",new vC);ke(this,"trackingEnabled",!1);ke(this,"processCanvas");ke(this,"processCtx");ke(this,"lastColors",null);ke(this,"expectedMove",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.lastColors=null}setExpectedMove(t){t!==this.expectedMove&&(this.expectedMove=t,this.rotationDetector.setExpectedMove(t))}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const i=t.videoWidth,a=t.videoHeight;return!i||!a?!1:(this.processCanvas.width=i,this.processCanvas.height=a,Q_(this.processCtx,t,i,a),!0)}getColorLearnSample(t,i,a){return Y0(this.processCanvas,t,i,a)}process(t){const i=t.videoWidth,a=t.videoHeight;if(!i||!a)return{...Rc};this.processCanvas.width=i,this.processCanvas.height=a,Q_(this.processCtx,t,i,a);try{return this.trackingEnabled?this.processWithTracking(i,a):this.processDetectionOnly(i,a)}catch{return{...Rc}}}processDetectionOnly(t,i){const a=a0(this.processCanvas,t,i);return a?(this.lastColors=a.colors,{pose:a.pose,detectedFace:a,rotationMove:null,rotationProgress:0,wrongMove:null}):{...Rc}}processWithTracking(t,i){const a=lx(this.processCanvas,t,i),o=gC(this.processCanvas),c=this.flowTracker.update(o,a);if(o.delete(),!c)return{...Rc};let f=this.lastColors;if(a){const v=a0(this.processCanvas,t,i);v&&(f=v.colors,this.lastColors=f)}const h=ox(c,t,i),p=this.flowTracker.getLostFrames();h.confidence=a?.85:Math.max(.35,.85-p*.01);const m=f?{colors:f,pose:h}:null,g=this.rotationDetector.update(h.rotationMatrix);return{pose:h,detectedFace:m,rotationMove:g.completedMove,rotationProgress:g.progress,wrongMove:g.wrongMove}}isTrackingLost(){return this.flowTracker.getLostFrames()>RC}readStableFace(t,i=5){const a=[];let o=null;for(let f=0;f<i;f++){const h=this.process(t);if(!h.detectedFace)return null;a.push(h.detectedFace.colors),o=h.detectedFace.pose}return o?{colors:wC(a),pose:o}:null}}function wC(s){const t=[];for(let i=0;i<9;i++){const a=new Map;for(const f of s){const h=f[i];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[f,h]of a)h>c&&(c=h,o=f);t.push(o)}return t}const DC=[0,1,2,3,5,6,7,8],Cc=2e3,UC=10,LC=7,NC=6;function OC(s,t){let i=0;for(const a of DC)s[a]===t[a]&&i++;return i}function zC(s,t){let i=0;for(let a=0;a<9;a++)s[a]===t[a]&&i++;return i}function PC(s,t){return OC(s,t)>=LC}function ux(s,t){for(const[i,a]of t)if(PC(s,a))return i;return null}function FC(s){const t=[];for(let i=0;i<9;i++){const a=new Map;for(const f of s){const h=f[i];a.set(h,(a.get(h)??0)+1)}let o="W",c=0;for(const[f,h]of a)h>c&&(c=h,o=f);t.push(o)}return t}function BC(s){if(s.length===0)return null;const t=new Map;for(const o of s){const c=o[4];t.set(c,(t.get(c)??0)+1)}let i=null,a=0;for(const[o,c]of t)c>a&&(a=c,i=o);return i}function IC(s,t,i){if(ux(s,t))return null;for(const a of[BC(i),s[4]]){if(!a)continue;const o=Fo(a);if(o&&!t.has(o))return o}return null}function c0(s){if(s.size!==6)return s;const t=new Map,i=new Set,a=[...s.entries()].sort((o,c)=>{const f=Fo(o[1][4])===o[0]?0:1,h=Fo(c[1][4])===c[0]?0:1;return f-h});for(const[,o]of a){const c=Fo(o[4]);c&&!i.has(c)&&(t.set(c,[...o]),i.add(c))}return t.size===6?t:s}class HC{constructor(){ke(this,"faces",new Map);ke(this,"pendingReadings",[]);ke(this,"stableSinceMs",null);ke(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,i=Date.now()){const a=Cc/1e3,o={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1,needsClearerCenter:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],o;const c=Fo(t[4]),f=ux(t,this.faces);if(f)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...o,currentFace:f,needsNewFace:!0};!this.stabilityAnchor||zC(t,this.stabilityAnchor)<NC?(this.stabilityAnchor=[...t],this.stableSinceMs=i,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=i);const h=this.stableSinceMs!==null?i-this.stableSinceMs:0,p=Math.min(h,Cc)/1e3;let m=null,g=!1;if(h>=Cc){const v=[...this.pendingReadings,[...t]];v.length>UC&&v.shift(),this.pendingReadings=v;const _=FC(v),S=IC(_,this.faces,v);if(S){const E=!this.faces.has(S);this.faces.set(S,[..._]),E&&(m=S),this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}else g=!0,this.stableSinceMs=i-Cc+400}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1,needsClearerCenter:g}}}const GC="https://docs.opencv.org/4.9.0/opencv.js";let wc=null;function VC(){return wc||(wc=new Promise((s,t)=>{var a;if((a=window.cv)!=null&&a.Mat){s();return}const i=document.createElement("script");i.src=GC,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},i.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(i)}),wc)}function u0(s){return Object.fromEntries(Z0(s))}const Oo={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:Yo(),cellColors:[]},Fc={tracking:"searching",rotationProgress:0,wrongMove:null},kC={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:Oo,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,liveScanNeedsClearerCenter:!1,solvingFeedback:Fc};function XC(s){const[t,i]=Gt.useState(kC),a=Gt.useRef(null),o=Gt.useRef(null),c=Gt.useRef(new HC),f=Gt.useRef(""),h=Gt.useRef(0),p=Gt.useRef(0),m=Gt.useRef("loading"),g=Gt.useRef(0),v=Gt.useRef(null),_=Gt.useRef(0),S=Gt.useRef(null),E=Gt.useRef(null),A=Gt.useRef(!1),M=Gt.useRef(0),x=Gt.useRef(null),P=Gt.useCallback(ot=>{var L;ot!==x.current&&(x.current=ot,(L=a.current)==null||L.setExpectedMove(ot))},[]),U=Gt.useCallback(()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]),w=Gt.useCallback((ot,L,W,ft)=>{var St;const V=o.current;if(!V){i(mt=>({...mt,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}U();const ut=++p.current;V.postMessage({type:"solve",facelet:ot,scannedFaces:Object.fromEntries(W),captures:ft,id:ut}),(St=a.current)==null||St.syncPose(L),S.current=setTimeout(()=>{i(mt=>mt.phase!=="computing"?mt:{...mt,phase:"error",error:"Solve timed out. Scan order and direction do not matter — please try again."})},6e4)},[U]);Gt.useEffect(()=>{m.current=t.phase,v.current=t.solution,g.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const k=Gt.useCallback(ot=>{var W;const L=++p.current;(W=o.current)==null||W.postMessage({type:"apply",move:ot,facelet:f.current,id:L}),i(ft=>{if(!ft.solution)return ft;const V=ft.solution.moves[ft.solution.currentIndex];if(ot!==V)return ft;const ut=ft.solution.currentIndex+1;return ut>=ft.solution.moves.length?{...ft,phase:"solved",solution:{...ft.solution,currentIndex:ut},solvingFeedback:Fc}:{...ft,solution:{...ft.solution,currentIndex:ut},solvingFeedback:{...Fc,tracking:"locked"}}})},[]),F=Gt.useCallback((ot,L,W,ft,V,ut)=>{const{detectedCenter:St,colorCounts:mt}=tC(L),Pt=nx(L);let Nt="searching";return!ot||!Pt?Nt="searching":ut?Nt="rotate":V?Nt="captured":W>0&&W<ft?Nt="stabilizing":Nt="detected",{status:Nt,stableProgress:W,stableTarget:ft,detectedCenter:St,colorCounts:mt,cellColors:Pt&&L?[...L]:[]}},[]),z=Gt.useCallback(()=>{var ot;c.current.reset(),A.current=!1,E.current=null,i(L=>({...L,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Oo,liveScanNeedsClearerCenter:!1})),(ot=a.current)==null||ot.disableTracking(),x.current=null},[]),X=Gt.useCallback(()=>{var ot;c.current.reset(),A.current=!1,E.current=null,i(L=>({...L,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Oo,liveScanNeedsClearerCenter:!1})),(ot=a.current)==null||ot.disableTracking(),x.current=null},[]),D=Gt.useCallback(async()=>{try{await VC(),a.current=new CC;const ot=VR();o.current=ot,ot.onmessage=L=>{var ft;const W=L.data;if(W.type==="ready")i(V=>({...V,solverReady:!0}));else if(W.type==="solution"){if(W.id!==p.current)return;U(),f.current=W.facelet,_.current=Date.now(),i(V=>({...V,phase:W.moves.length===0?"solved":"solving",solution:{moves:W.moves,currentIndex:0},detectionFeedback:Oo,solvingFeedback:Fc})),W.moves.length>0&&((ft=a.current)==null||ft.enableTracking(),P(W.moves[0]??null))}else if(W.type==="facelet"){if(W.id!==p.current)return;f.current=W.facelet}else if(W.type==="error"){if(W.id!==void 0&&W.id!==p.current)return;U(),A.current=!1,i(V=>({...V,phase:"error",error:W.message}))}},ot.onerror=()=>{U(),i(L=>({...L,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},ot.postMessage({type:"init"}),K_(),c.current.reset(),i(L=>({...L,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(ot){i(L=>({...L,phase:"error",error:ot instanceof Error?ot.message:"Init failed"}))}},[U]);Gt.useEffect(()=>(D(),()=>{var ot,L;cancelAnimationFrame(h.current),U(),(ot=o.current)==null||ot.terminate(),(L=a.current)==null||L.disableTracking()}),[D,U]);const C=Gt.useCallback(()=>{const ot=s.current,L=a.current;if(!ot||!L||ot.readyState<2||!L.captureFrame(ot))return;const W=g.current,ft=Xa[W];if(!ft)return;const V=L.getFrameCanvas();if(!MR(V,ot.videoWidth,ot.videoHeight,ft)){i(mt=>({...mt,colorLearnError:`Could not read ${ft}. Center the sticker in the circle.`}));return}const St=W+1;if(St>=Xa.length){z(),i(mt=>({...mt,colorsCalibrated:!0,colorLearnError:null}));return}i(mt=>({...mt,colorLearnIndex:St,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,z]),H=Gt.useCallback(()=>{X()},[X]),nt=Gt.useCallback(()=>{var mt,Pt;const ot=s.current,L=a.current;if(!ot||!L||ot.readyState<2)return;const W=L.process(ot),ft=m.current;if(ft==="colorLearn"){L.captureFrame(ot);const Nt=Xa[g.current];if(Nt){const Vt=L.getColorLearnSample(ot.videoWidth,ot.videoHeight,Nt);i(le=>({...le,colorLearnSample:Vt,colorLearnReady:(Vt==null?void 0:Vt.ready)??!1,colorLearnError:null}))}return}if(ft==="scanReady"){const Nt=((mt=W.detectedFace)==null?void 0:mt.colors)??null,Vt=!!W.pose;i(le=>({...le,detectionFeedback:F(Vt,Nt,0,0,!1,!1)}));return}if(ft==="liveScan"){if(!ep()){i(ee=>({...ee,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const Nt=((Pt=W.detectedFace)==null?void 0:Pt.colors)??null,Vt=!!W.pose;W.pose&&(E.current=W.pose);const le=c.current.update(Nt),Le=!!le.newlyCaptured;if(le.isComplete&&E.current&&!A.current){A.current=!0;const ee=c0(Z0(le.faces)),I=u0(ee),pn=[...ee.values()].map(ie=>[...ie]);try{let ie=ee;if(!n0(ie)&&(ie=sC(ee),!n0(ie))){const Te=lC(ee);i(Xt=>({...Xt,phase:"error",scannedFaceColors:I,error:Te?`Color mismatch (${Te}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const de=BR(ie),Wt=E.current;i(Te=>({...Te,phase:"computing",knownFaces:le.knownFaces,scannedFaceColors:I,liveScanProgress:1,currentPose:Wt})),queueMicrotask(()=>w(de,Wt,ee,pn))}catch(ie){i(de=>({...de,phase:"error",scannedFaceColors:I,error:ie instanceof Error?ie.message:"Failed to build cube state"}))}return}i(ee=>({...ee,currentPose:W.pose,knownFaces:le.knownFaces,scannedFaceColors:u0(c0(le.faces)),currentVisibleFace:le.currentFace,liveScanProgress:le.knownFaces.length/6,liveScanNeedsClearerCenter:le.needsClearerCenter,detectionFeedback:F(Vt,Nt,le.stableProgress,le.stableTarget,Le,le.needsNewFace)}));return}if(i(Nt=>({...Nt,currentPose:W.pose})),ft!=="solving")return;const V=v.current,ut=V&&V.currentIndex<V.moves.length?V.moves[V.currentIndex]:null;P(ut??null);let St="searching";if(W.pose?(M.current=0,St=L.isTrackingLost()?"searching":"locked"):(M.current++,St=M.current>12?"lost":"searching"),i(Nt=>({...Nt,solvingFeedback:{tracking:St,rotationProgress:W.rotationProgress,wrongMove:W.wrongMove}})),!!W.rotationMove&&!(Date.now()-_.current<800)&&V&&ut&&W.rotationMove===ut){k(W.rotationMove),W.pose&&L.syncPose(W.pose);const Nt=V.moves[V.currentIndex+1]??null;P(Nt),M.current=0}},[s,k,F,w,P]),J=Gt.useCallback(()=>{nt(),h.current=requestAnimationFrame(J)},[nt]),lt=Gt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(J)},[J]),vt=Gt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),O=Gt.useCallback(()=>{U(),z(),i(ot=>({...ot,solution:null}))},[U,z]),$=Gt.useCallback(()=>{var ot;U(),A.current=!1,c.current.reset(),E.current=null,K_(),(ot=a.current)==null||ot.disableTracking(),i(L=>({...L,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:Oo,liveScanNeedsClearerCenter:!1}))},[U]),Q=Gt.useCallback(()=>{var V;const ot=v.current;if(!ot||ot.currentIndex>=ot.moves.length)return;const L=ot.moves[ot.currentIndex];if(!L)return;const W=ot.moves[ot.currentIndex+1]??null;k(L);const ft=E.current;ft&&((V=a.current)==null||V.syncPose(ft)),P(W),M.current=0},[k,P]),Mt=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:Mt,confirmColorLearn:C,startLiveScan:H,retryLiveScan:O,retryColorLearn:$,startTracking:lt,stopTracking:vt,skipCurrentMove:Q}}function WC(){const s=Gt.useRef(null),t=Gt.useRef(null),[i,a]=Gt.useState({stream:null,error:null,isReady:!1}),o=Gt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Gt.useCallback(p=>{s.current=p,p&&o(p)},[o]),f=Gt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await o(m),a({stream:p,error:null,isReady:!0})}catch(p){t.current=null,a({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[o]),h=Gt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),a({stream:null,error:null,isReady:!1})},[]);return Gt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:i,start:f,stop:h}}function fx(s,t,i,a){const o=Math.max(i/s,a/t),c=s*o,f=t*o;return{scale:o,offsetX:(i-c)/2,offsetY:(a-f)/2}}function qC(s,t,i,a){if(!s||!t||!i||!a)return null;const o=Ls(s,t),{scale:c,offsetX:f,offsetY:h}=fx(s,t,i,a);return{left:f+o.x*c,top:h+o.y*c,width:o.size*c,height:o.size*c}}function YC(s,t,i,a){if(!s||!t||!i||!a)return null;const o=Ls(s,t),c=W0(o),{scale:f,offsetX:h,offsetY:p}=fx(s,t,i,a);return{left:h+c.x*f,top:p+c.y*f,width:c.size*f,height:c.size*f}}const jC="1.0.7";function ZC(){var nt,J;const{videoRef:s,setVideoRef:t,state:i,start:a}=WC(),{state:o,currentMove:c,confirmColorLearn:f,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:g,stopTracking:v,skipCurrentMove:_}=XC(s),S=Gt.useRef(null),[E,A]=Gt.useState({width:0,height:0}),[M,x]=Gt.useState({width:0,height:0});Gt.useEffect(()=>{a()},[a]),Gt.useEffect(()=>{if(i.isReady&&o.phase!=="loading")return g(),v},[i.isReady,o.phase,g,v]);const P=Gt.useCallback((lt,vt)=>{A({width:lt,height:vt})},[]);Gt.useEffect(()=>{const lt=S.current;if(!lt)return;const vt=()=>{x({width:lt.clientWidth,height:lt.clientHeight})};vt();const O=new ResizeObserver(vt);return O.observe(lt),()=>O.disconnect()},[]);const U=Gt.useMemo(()=>qC(E.width,E.height,M.width,M.height),[E.width,E.height,M.width,M.height]),w=Gt.useMemo(()=>YC(E.width,E.height,M.width,M.height),[E.width,E.height,M.width,M.height]),k=o.phase==="loading"||!i.isReady,F=!!(o.error||i.error),z=o.phase==="computing",X=o.phase==="solving",D=((nt=o.solution)==null?void 0:nt.moves.length)??0,C=(((J=o.solution)==null?void 0:J.currentIndex)??0)+1,H=o.phase==="liveScan"||o.phase==="computing"||F&&Object.keys(o.scannedFaceColors).length>0;return At.jsxs("main",{className:"app",children:[At.jsxs("div",{className:`viewport${o.phase==="liveScan"?" viewport--scanning":""}`,ref:S,children:[At.jsx(uR,{setVideoRef:t,onDimensions:P}),!k&&!F&&At.jsxs(At.Fragment,{children:[At.jsx(cR,{pose:o.currentPose,move:c,rotationProgress:o.solvingFeedback.rotationProgress,width:E.width,height:E.height,active:X}),At.jsx(TR,{visible:o.phase==="colorLearn",stepIndex:o.colorLearnIndex,sample:o.colorLearnSample,ready:o.colorLearnReady,error:o.colorLearnError,onConfirm:f,guideRect:U,spotRect:w}),At.jsx(PR,{visible:o.phase==="scanReady",feedback:o.detectionFeedback,guideRect:U,onStart:h}),At.jsx(Vh,{visible:H,scannedFaces:o.scannedFaceColors}),At.jsx(RR,{feedback:o.detectionFeedback,visible:o.phase==="liveScan",guideRect:U}),At.jsx(FR,{phase:o.phase,currentStep:C,totalSteps:D}),At.jsx(CR,{phase:o.phase,knownFaces:o.knownFaces,progress:o.liveScanProgress,needsNewFace:o.detectionFeedback.status==="rotate",needsClearerCenter:o.liveScanNeedsClearerCenter}),At.jsx(zR,{visible:o.phase==="solving"&&!!c,currentMove:c,feedback:o.solvingFeedback,onSkip:_}),o.phase==="solved"&&At.jsx("div",{className:"solved-banner",children:At.jsx("p",{children:"Done"})})]}),z&&At.jsxs(At.Fragment,{children:[At.jsx(Vh,{visible:H,scannedFaces:o.scannedFaceColors}),At.jsx($_,{overlay:!0,message:"Computing…"})]}),k&&At.jsx($_,{overlay:!0,message:o.phase==="loading"?"Loading…":"Camera…"}),F&&!k&&At.jsxs("div",{className:"error-screen overlay",children:[At.jsx(Vh,{visible:H,scannedFaces:o.scannedFaceColors}),At.jsx("p",{children:o.error??i.error}),At.jsxs("div",{className:"error-actions",children:[o.colorsCalibrated&&At.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),At.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]}),At.jsxs("p",{className:"app-version","aria-hidden":"true",children:["v",jC]})]})}LS({immediate:!0});CS.createRoot(document.getElementById("root")).render(At.jsx(Gt.StrictMode,{children:At.jsx(ZC,{})}));
