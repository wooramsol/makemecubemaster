var lS=Object.defineProperty;var cS=(s,t,i)=>t in s?lS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var qe=(s,t,i)=>cS(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Qf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function uS(){if(N_)return Ao;N_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var O_;function fS(){return O_||(O_=1,Qf.exports=uS()),Qf.exports}var zt=fS(),Jf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function hS(){if(z_)return re;z_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(O,J,ht){this.props=O,this.context=J,this.refs=M,this.updater=ht||E}y.prototype.isReactComponent={},y.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=y.prototype;function L(O,J,ht){this.props=O,this.context=J,this.refs=M,this.updater=ht||E}var w=L.prototype=new P;w.constructor=L,T(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function D(O,J,ht){var X=ht.ref;return{$$typeof:s,type:O,key:J,ref:X!==void 0?X:null,props:ht}}function R(O,J){return D(O.type,J,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function nt(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ht){return J[ht]})}var $=/\/+/g;function ot(O,J){return typeof O=="object"&&O!==null&&O.key!=null?nt(""+O.key):J.toString(36)}function gt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,J,ht,X,ct){var St=typeof O;(St==="undefined"||St==="boolean")&&(O=null);var Mt=!1;if(O===null)Mt=!0;else switch(St){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(O.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=O._init,U(Mt(O._payload),J,ht,X,ct)}}if(Mt)return ct=ct(O),Mt=X===""?"."+ot(O,0):X,k(ct)?(ht="",Mt!=null&&(ht=Mt.replace($,"$&/")+"/"),U(ct,J,ht,"",function(Yt){return Yt})):ct!=null&&(G(ct)&&(ct=R(ct,ht+(ct.key==null||O&&O.key===ct.key?"":(""+ct.key).replace($,"$&/")+"/")+Mt)),J.push(ct)),1;Mt=0;var Lt=X===""?".":X+":";if(k(O))for(var Wt=0;Wt<O.length;Wt++)X=O[Wt],St=Lt+ot(X,Wt),Mt+=U(X,J,ht,St,ct);else if(Wt=S(O),typeof Wt=="function")for(O=Wt.call(O),Wt=0;!(X=O.next()).done;)X=X.value,St=Lt+ot(X,Wt++),Mt+=U(X,J,ht,St,ct);else if(St==="object"){if(typeof O.then=="function")return U(gt(O),J,ht,X,ct);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function q(O,J,ht){if(O==null)return O;var X=[],ct=0;return U(O,X,"","",function(St){return J.call(ht,St,ct++)}),X}function I(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(ht){(O._status===0||O._status===-1)&&(O._status=1,O._result=ht)},function(ht){(O._status===0||O._status===-1)&&(O._status=2,O._result=ht)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var ft=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:q,forEach:function(O,J,ht){q(O,function(){J.apply(this,arguments)},ht)},count:function(O){var J=0;return q(O,function(){J++}),J},toArray:function(O){return q(O,function(J){return J})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=_,re.Children=xt,re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,J,ht){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var X=T({},O.props),ct=O.key;if(J!=null)for(St in J.key!==void 0&&(ct=""+J.key),J)!W.call(J,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&J.ref===void 0||(X[St]=J[St]);var St=arguments.length-2;if(St===1)X.children=ht;else if(1<St){for(var Mt=Array(St),Lt=0;Lt<St;Lt++)Mt[Lt]=arguments[Lt+2];X.children=Mt}return D(O.type,ct,X)},re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},re.createElement=function(O,J,ht){var X,ct={},St=null;if(J!=null)for(X in J.key!==void 0&&(St=""+J.key),J)W.call(J,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ct[X]=J[X]);var Mt=arguments.length-2;if(Mt===1)ct.children=ht;else if(1<Mt){for(var Lt=Array(Mt),Wt=0;Wt<Mt;Wt++)Lt[Wt]=arguments[Wt+2];ct.children=Lt}if(O&&O.defaultProps)for(X in Mt=O.defaultProps,Mt)ct[X]===void 0&&(ct[X]=Mt[X]);return D(O,St,ct)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:h,render:O}},re.isValidElement=G,re.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:I}},re.memo=function(O,J){return{$$typeof:m,type:O,compare:J===void 0?null:J}},re.startTransition=function(O){var J=z.T,ht={};z.T=ht;try{var X=O(),ct=z.S;ct!==null&&ct(ht,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(B,ft)}catch(St){ft(St)}finally{J!==null&&ht.types!==null&&(J.types=ht.types),z.T=J}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(O){return z.H.use(O)},re.useActionState=function(O,J,ht){return z.H.useActionState(O,J,ht)},re.useCallback=function(O,J){return z.H.useCallback(O,J)},re.useContext=function(O){return z.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,J){return z.H.useDeferredValue(O,J)},re.useEffect=function(O,J){return z.H.useEffect(O,J)},re.useEffectEvent=function(O){return z.H.useEffectEvent(O)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(O,J,ht){return z.H.useImperativeHandle(O,J,ht)},re.useInsertionEffect=function(O,J){return z.H.useInsertionEffect(O,J)},re.useLayoutEffect=function(O,J){return z.H.useLayoutEffect(O,J)},re.useMemo=function(O,J){return z.H.useMemo(O,J)},re.useOptimistic=function(O,J){return z.H.useOptimistic(O,J)},re.useReducer=function(O,J,ht){return z.H.useReducer(O,J,ht)},re.useRef=function(O){return z.H.useRef(O)},re.useState=function(O){return z.H.useState(O)},re.useSyncExternalStore=function(O,J,ht){return z.H.useSyncExternalStore(O,J,ht)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.7",re}var P_;function Ld(){return P_||(P_=1,Jf.exports=hS()),Jf.exports}var Xt=Ld(),$f={exports:{}},Ro={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function dS(){return B_||(B_=1,(function(s){function t(U,q){var I=U.length;U.push(q);t:for(;0<I;){var ft=I-1>>>1,xt=U[ft];if(0<l(xt,q))U[ft]=q,U[I]=xt,I=ft;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],I=U.pop();if(I!==q){U[0]=I;t:for(var ft=0,xt=U.length,O=xt>>>1;ft<O;){var J=2*(ft+1)-1,ht=U[J],X=J+1,ct=U[X];if(0>l(ht,I))X<xt&&0>l(ct,ht)?(U[ft]=ct,U[X]=I,ft=X):(U[ft]=ht,U[J]=I,ft=J);else if(X<xt&&0>l(ct,I))U[ft]=ct,U[X]=I,ft=X;else break t}}return q}function l(U,q){var I=U.sortIndex-q.sortIndex;return I!==0?I:U.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,v=3,S=!1,E=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(U){for(var q=i(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=U)r(m),q.sortIndex=q.expirationTime,t(p,q);else break;q=i(m)}}function k(U){if(T=!1,w(U),!E)if(i(p)!==null)E=!0,B||(B=!0,nt());else{var q=i(m);q!==null&&gt(k,q.startTime-U)}}var B=!1,z=-1,W=5,D=-1;function R(){return M?!0:!(s.unstable_now()-D<W)}function G(){if(M=!1,B){var U=s.unstable_now();D=U;var q=!0;try{t:{E=!1,T&&(T=!1,P(z),z=-1),S=!0;var I=v;try{e:{for(w(U),_=i(p);_!==null&&!(_.expirationTime>U&&R());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,v=_.priorityLevel;var xt=ft(_.expirationTime<=U);if(U=s.unstable_now(),typeof xt=="function"){_.callback=xt,w(U),q=!0;break e}_===i(p)&&r(p),w(U)}else r(p);_=i(p)}if(_!==null)q=!0;else{var O=i(m);O!==null&&gt(k,O.startTime-U),q=!1}}break t}finally{_=null,v=I,S=!1}q=void 0}}finally{q?nt():B=!1}}}var nt;if(typeof L=="function")nt=function(){L(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ot=$.port2;$.port1.onmessage=G,nt=function(){ot.postMessage(null)}}else nt=function(){y(G,0)};function gt(U,q){z=y(function(){U(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(U){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var I=v;v=q;try{return U()}finally{v=I}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=v;v=U;try{return q()}finally{v=I}},s.unstable_scheduleCallback=function(U,q,I){var ft=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ft+I:ft):I=ft,U){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=I+xt,U={id:g++,callback:q,priorityLevel:U,startTime:I,expirationTime:xt,sortIndex:-1},I>ft?(U.sortIndex=I,t(m,U),i(p)===null&&U===i(m)&&(T?(P(z),z=-1):T=!0,gt(k,I-ft))):(U.sortIndex=xt,t(p,U),E||S||(E=!0,B||(B=!0,nt()))),U},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(U){var q=v;return function(){var I=v;v=q;try{return U.apply(this,arguments)}finally{v=I}}}})(eh)),eh}var F_;function pS(){return F_||(F_=1,th.exports=dS()),th.exports}var nh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function mS(){if(I_)return An;I_=1;var s=Ld();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},An.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.7",An}var H_;function gS(){if(H_)return nh.exports;H_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=mS(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function _S(){if(G_)return Ro;G_=1;var s=pS(),t=Ld(),i=gS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return p(u),e;if(d===o)return p(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,o=d;break}if(b===o){x=!0,o=u,a=d;break}b=b.sibling}if(!x){for(b=d.child;b;){if(b===a){x=!0,a=d,o=u;break}if(b===o){x=!0,o=d,a=u;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var gt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ft=[],xt=-1;function O(e){return{current:e}}function J(e){0>xt||(e.current=ft[xt],ft[xt]=null,xt--)}function ht(e,n){xt++,ft[xt]=e.current,e.current=n}var X=O(null),ct=O(null),St=O(null),Mt=O(null);function Lt(e,n){switch(ht(St,n),ht(ct,e),ht(X,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n_(n),e=i_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(X),ht(X,e)}function Wt(){J(X),J(ct),J(St)}function Yt(e){e.memoizedState!==null&&ht(Mt,e);var n=X.current,a=i_(n,e.type);n!==a&&(ht(ct,e),ht(X,a))}function we(e){ct.current===e&&(J(X),J(ct)),Mt.current===e&&(J(Mt),Mo._currentValue=I)}var Ue,fe;function H(e){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+fe}var Tn=!1;function he(e,n){if(!e||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var it=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){it=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],b=d[1];if(x&&b){var F=x.split(`
`),et=b.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===et.length)for(o=F.length-1,u=et.length-1;1<=o&&0<=u&&F[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==et[u]){var dt=`
`+F[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?H(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return H("Activity");default:return""}}function qt(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Le=Object.prototype.hasOwnProperty,kt=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,A=s.unstable_shouldYield,at=s.unstable_requestPaint,pt=s.unstable_now,Et=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Gt=s.unstable_UserBlockingPriority,Rt=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,Ft=s.unstable_setDisableYieldValue,Qt=null,Vt=null;function Ot(e){if(typeof bt=="function"&&Ft(e),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Qt,e)}catch{}}var ee=Math.clz32?Math.clz32:j,se=Math.log,Pe=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(se(e)/Pe|0)|0}var Ct=256,ut=262144,yt=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=At(o):(x&=b,x!==0?u=At(x):a||(a=b&~e,a!==0&&(u=At(a))))):(b=o&~d,b!==0?u=At(b):x!==0?u=At(x):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ye(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var e=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,o,u,d){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-ee(a),vt=1<<dt;b[dt]=0,F[dt]=-1;var it=et[dt];if(it!==null)for(et[dt]=null,dt=0;dt<it.length;dt++){var lt=it[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&Ns(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Ns(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ee(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Os(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ee(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ai(e,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:A_(e.type))}function ja(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,vn="__reactProps$"+mi,Pi="__reactContainer$"+mi,Ps="__reactEvents$"+mi,Xc="__reactListeners$"+mi,Wc="__reactHandles$"+mi,jo="__reactResources$"+mi,Za="__reactMarker$"+mi;function Bs(e){delete e[Ke],delete e[vn],delete e[Ps],delete e[Xc],delete e[Wc]}function C(e){var n=e[Ke];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[Ke]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=u_(e);e!==null;){if(a=e[Ke])return a;e=u_(e)}return n}e=a,a=e.parentNode}return null}function Z(e){if(e=e[Ke]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function st(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Za]=!0}var Tt=new Set,Dt={};function Nt(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(Dt[e]=n,e=0;e<n.length;e++)Tt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},jt={};function xe(e){return Le.call(jt,e)?!0:Le.call($t,e)?!1:ie.test(e)?jt[e]=!0:($t[e]=!0,!1)}function Se(e,n,a){if(xe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=Kt(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function zn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function pn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,a,o,u,d,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bn(e,x,ae(n)):a!=null?bn(e,x,ae(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ae(b):e.removeAttribute("name")}function Ln(e,n,a,o,u,d,x,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ee(e)}function bn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function Cr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(gt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var iy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||iy.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$d(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&$d(e,d,n[d])}function qc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ay=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return ry.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function ep(e){var n=Z(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(r(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&zn(o)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var Zc=!1;function np(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var o=e(n);return o}finally{if(Zc=!1,(wr!==null||Dr!==null)&&(Pl(),wr&&(n=wr,e=Dr,Dr=wr=null,ep(n),e)))for(n=0;n<e.length;n++)ep(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Fi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Kc=!1}var ha=null,Qc=null,Ko=null;function ip(){if(Ko)return Ko;var e,n=Qc,a=n.length,o,u="value"in ha?ha.value:ha.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return Ko=u.slice(e,1<o?1-o:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function ap(){return!1}function Bn(e){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jo:ap,this.isPropagationStopped=ap,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Bn(Ka),Hs=_({},Ka,{view:0,detail:0}),sy=Bn(Hs),Jc,$c,Gs,tl=_({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(Jc=e.screenX-Gs.screenX,$c=e.screenY-Gs.screenY):$c=Jc=0,Gs=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),rp=Bn(tl),oy=_({},tl,{dataTransfer:0}),ly=Bn(oy),cy=_({},Hs,{relatedTarget:0}),tu=Bn(cy),uy=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=Bn(uy),hy=_({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dy=Bn(hy),py=_({},Ka,{data:0}),sp=Bn(py),my={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=_y[e])?!!n[e]:!1}function eu(){return vy}var yy=_({},Hs,{key:function(e){if(e.key){var n=my[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xy=Bn(yy),Sy=_({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Bn(Sy),My=_({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Ey=Bn(My),Ty=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=Bn(Ty),Ay=_({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ry=Bn(Ay),Cy=_({},Ka,{newState:0,oldState:0}),wy=Bn(Cy),Dy=[9,13,27,32],nu=Fi&&"CompositionEvent"in window,Vs=null;Fi&&"documentMode"in document&&(Vs=document.documentMode);var Uy=Fi&&"TextEvent"in window&&!Vs,lp=Fi&&(!nu||Vs&&8<Vs&&11>=Vs),cp=" ",up=!1;function fp(e,n){switch(e){case"keyup":return Dy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function Ly(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return e=n.data,e===cp&&up?null:e;default:return null}}function Ny(e,n){if(Ur)return e==="compositionend"||!nu&&fp(e,n)?(e=ip(),Ko=Qc=ha=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Oy[e.type]:n==="textarea"}function pp(e,n,a,o){wr?Dr?Dr.push(o):Dr=[o]:wr=o,n=kl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ks=null,Xs=null;function zy(e){Kg(e,0)}function el(e){var n=rt(e);if(zn(n))return e}function mp(e,n){if(e==="change")return n}var gp=!1;if(Fi){var iu;if(Fi){var au="oninput"in document;if(!au){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),au=typeof _p.oninput=="function"}iu=au}else iu=!1;gp=iu&&(!document.documentMode||9<document.documentMode)}function vp(){ks&&(ks.detachEvent("onpropertychange",yp),Xs=ks=null)}function yp(e){if(e.propertyName==="value"&&el(Xs)){var n=[];pp(n,Xs,e,jc(e)),np(zy,n)}}function Py(e,n,a){e==="focusin"?(vp(),ks=n,Xs=a,ks.attachEvent("onpropertychange",yp)):e==="focusout"&&vp()}function By(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Xs)}function Fy(e,n){if(e==="click")return el(n)}function Iy(e,n){if(e==="input"||e==="change")return el(n)}function Hy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Hy;function Ws(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Le.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,n){var a=xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xp(a)}}function Mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Gy=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,su=null,qs=null,ou=!1;function Tp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Lr==null||Lr!==gi(o)||(o=Lr,"selectionStart"in o&&ru(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qs&&Ws(qs,o)||(qs=o,o=kl(su,"onSelect"),0<o.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Lr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},lu={},bp={};Fi&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ja(e){if(lu[e])return lu[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in bp)return lu[e]=n[a];return e}var Ap=Ja("animationend"),Rp=Ja("animationiteration"),Cp=Ja("animationstart"),Vy=Ja("transitionrun"),ky=Ja("transitionstart"),Xy=Ja("transitioncancel"),wp=Ja("transitionend"),Dp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function _i(e,n){Dp.set(e,n),Nt(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Or=0,uu=0;function il(){for(var e=Or,n=uu=Or=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&Up(a,u,d)}}function al(e,n,a,o){ni[Or++]=e,ni[Or++]=n,ni[Or++]=a,ni[Or++]=o,uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function fu(e,n,a,o){return al(e,n,a,o),rl(e)}function $a(e,n){return al(e,null,null,n),rl(e)}function Up(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-ee(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function rl(e){if(50<mo)throw mo=0,Sf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function Wy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new Wy(e,n,a,o)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,o,u,d){var x=0;if(o=e,typeof e=="function")hu(e)&&(x=1);else if(typeof e=="string")x=Kx(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,a,n,u),e.elementType=D,e.lanes=d,e;case T:return tr(a.children,u,d,n);case M:x=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=d,e;case k:return e=Yn(13,a,n,u),e.elementType=k,e.lanes=d,e;case B:return e=Yn(19,a,n,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case P:x=9;break t;case w:x=11;break t;case z:x=14;break t;case W:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function tr(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function du(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Np(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Op=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=Op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:qt(n)},Op.set(e,n),n)}return{value:e,source:n,stack:qt(n)}}var Pr=[],Br=0,ol=null,Ys=0,ai=[],ri=0,da=null,Ri=1,Ci="";function Hi(e,n){Pr[Br++]=Ys,Pr[Br++]=ol,ol=e,Ys=n}function zp(e,n,a){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=da,da=e;var o=Ri;e=Ci;var u=32-ee(o)-1;o&=~(1<<u),a+=1;var d=32-ee(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ri=1<<32-ee(n)+u|a<<u|o,Ci=d+e}else Ri=1<<d|a<<u|o,Ci=e}function mu(e){e.return!==null&&(Hi(e,1),zp(e,1,0))}function gu(e){for(;e===ol;)ol=Pr[--Br],Pr[Br]=null,Ys=Pr[--Br],Pr[Br]=null;for(;e===da;)da=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null}function Pp(e,n){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=da,Ri=n.id,Ci=n.overflow,da=e}var xn=null,Xe=null,Me=!1,pa=null,si=!1,_u=Error(r(519));function ma(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw js(ii(n,e)),_u}function Bp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ke]=e,n[vn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)pe(_o[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Cr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||ma(e,!0)}function Fp(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:xn=xn.return}}function Fr(e){if(e!==xn)return!1;if(!Me)return Fp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&Xe&&ma(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=c_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=c_(e)}else n===27?(n=Xe,wa(e.type)?(e=Gf,Gf=null,Xe=e):Xe=n):Xe=xn?li(e.stateNode.nextSibling):null;return!0}function er(){Xe=xn=null,Me=!1}function vu(){var e=pa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),pa=null),e}function js(e){pa===null?pa=[e]:pa.push(e)}var yu=O(null),nr=null,Gi=null;function ga(e,n,a){ht(yu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=yu.current,J(yu)}function xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Su(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),xu(d.return,a,e),o||(x=null);break t}d=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),xu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Ir(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=u.type;qn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Su(n,e,a,o),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return Ip(nr,e)}function cl(e,n){return nr===null&&ir(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var qy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Yy=s.unstable_scheduleCallback,jy=s.unstable_NormalPriority,an={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new qy,data:new Map,refCount:0}}function Zs(e){e.refCount--,e.refCount===0&&Yy(jy,function(){e.controller.abort()})}var Ks=null,Eu=0,Hr=0,Gr=null;function Zy(e,n){if(Ks===null){var a=Ks=[];Eu=0,Hr=Rf(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Eu++,n.then(Hp,Hp),n}function Hp(){if(--Eu===0&&Ks!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ks;Ks=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ky(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gp=U.S;U.S=function(e,n){Tg=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zy(e,n),Gp!==null&&Gp(e,n)};var ar=O(null);function Tu(){var e=ar.current;return e!==null?e:Ve.pooledCache}function ul(e,n){n===null?ht(ar,ar.current):ht(ar,n.pool)}function Vp(){var e=Tu();return e===null?null:{parent:an._currentValue,pool:e}}var Vr=Error(r(460)),bu=Error(r(474)),fl=Error(r(542)),hl={then:function(){}};function kp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,qp(e),e}throw sr=n,Vr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,Vr):a}}var sr=null;function Wp(){if(sr===null)throw Error(r(459));var e=sr;return sr=null,e}function qp(e){if(e===Vr||e===fl)throw Error(r(483))}var kr=null,Qs=0;function dl(e){var n=Qs;return Qs+=1,kr===null&&(kr=[]),Xp(kr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Yp(e){function n(K,V){if(e){var tt=K.deletions;tt===null?(K.deletions=[V],K.flags|=16):tt.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=Ii(K,V),K.index=0,K.sibling=null,K}function d(K,V,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<V?(K.flags|=67108866,V):tt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,V,tt,mt){return V===null||V.tag!==6?(V=du(tt,K.mode,mt),V.return=K,V):(V=u(V,tt),V.return=K,V)}function F(K,V,tt,mt){var Zt=tt.type;return Zt===T?dt(K,V,tt.props.children,mt,tt.key):V!==null&&(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===W&&rr(Zt)===V.type)?(V=u(V,tt.props),Js(V,tt),V.return=K,V):(V=sl(tt.type,tt.key,tt.props,null,K.mode,mt),Js(V,tt),V.return=K,V)}function et(K,V,tt,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=pu(tt,K.mode,mt),V.return=K,V):(V=u(V,tt.children||[]),V.return=K,V)}function dt(K,V,tt,mt,Zt){return V===null||V.tag!==7?(V=tr(tt,K.mode,mt,Zt),V.return=K,V):(V=u(V,tt),V.return=K,V)}function vt(K,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=du(""+V,K.mode,tt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return tt=sl(V.type,V.key,V.props,null,K.mode,tt),Js(tt,V),tt.return=K,tt;case E:return V=pu(V,K.mode,tt),V.return=K,V;case W:return V=rr(V),vt(K,V,tt)}if(gt(V)||nt(V))return V=tr(V,K.mode,tt,null),V.return=K,V;if(typeof V.then=="function")return vt(K,dl(V),tt);if(V.$$typeof===L)return vt(K,cl(K,V),tt);pl(K,V)}return null}function it(K,V,tt,mt){var Zt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Zt!==null?null:b(K,V,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===Zt?F(K,V,tt,mt):null;case E:return tt.key===Zt?et(K,V,tt,mt):null;case W:return tt=rr(tt),it(K,V,tt,mt)}if(gt(tt)||nt(tt))return Zt!==null?null:dt(K,V,tt,mt,null);if(typeof tt.then=="function")return it(K,V,dl(tt),mt);if(tt.$$typeof===L)return it(K,V,cl(K,tt),mt);pl(K,tt)}return null}function lt(K,V,tt,mt,Zt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(tt)||null,b(V,K,""+mt,Zt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return K=K.get(mt.key===null?tt:mt.key)||null,F(V,K,mt,Zt);case E:return K=K.get(mt.key===null?tt:mt.key)||null,et(V,K,mt,Zt);case W:return mt=rr(mt),lt(K,V,tt,mt,Zt)}if(gt(mt)||nt(mt))return K=K.get(tt)||null,dt(V,K,mt,Zt,null);if(typeof mt.then=="function")return lt(K,V,tt,dl(mt),Zt);if(mt.$$typeof===L)return lt(K,V,tt,cl(V,mt),Zt);pl(V,mt)}return null}function It(K,V,tt,mt){for(var Zt=null,Ae=null,Ht=V,le=V=0,ye=null;Ht!==null&&le<tt.length;le++){Ht.index>le?(ye=Ht,Ht=null):ye=Ht.sibling;var Re=it(K,Ht,tt[le],mt);if(Re===null){Ht===null&&(Ht=ye);break}e&&Ht&&Re.alternate===null&&n(K,Ht),V=d(Re,V,le),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re,Ht=ye}if(le===tt.length)return a(K,Ht),Me&&Hi(K,le),Zt;if(Ht===null){for(;le<tt.length;le++)Ht=vt(K,tt[le],mt),Ht!==null&&(V=d(Ht,V,le),Ae===null?Zt=Ht:Ae.sibling=Ht,Ae=Ht);return Me&&Hi(K,le),Zt}for(Ht=o(Ht);le<tt.length;le++)ye=lt(Ht,K,le,tt[le],mt),ye!==null&&(e&&ye.alternate!==null&&Ht.delete(ye.key===null?le:ye.key),V=d(ye,V,le),Ae===null?Zt=ye:Ae.sibling=ye,Ae=ye);return e&&Ht.forEach(function(Oa){return n(K,Oa)}),Me&&Hi(K,le),Zt}function Jt(K,V,tt,mt){if(tt==null)throw Error(r(151));for(var Zt=null,Ae=null,Ht=V,le=V=0,ye=null,Re=tt.next();Ht!==null&&!Re.done;le++,Re=tt.next()){Ht.index>le?(ye=Ht,Ht=null):ye=Ht.sibling;var Oa=it(K,Ht,Re.value,mt);if(Oa===null){Ht===null&&(Ht=ye);break}e&&Ht&&Oa.alternate===null&&n(K,Ht),V=d(Oa,V,le),Ae===null?Zt=Oa:Ae.sibling=Oa,Ae=Oa,Ht=ye}if(Re.done)return a(K,Ht),Me&&Hi(K,le),Zt;if(Ht===null){for(;!Re.done;le++,Re=tt.next())Re=vt(K,Re.value,mt),Re!==null&&(V=d(Re,V,le),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re);return Me&&Hi(K,le),Zt}for(Ht=o(Ht);!Re.done;le++,Re=tt.next())Re=lt(Ht,K,le,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Ht.delete(Re.key===null?le:Re.key),V=d(Re,V,le),Ae===null?Zt=Re:Ae.sibling=Re,Ae=Re);return e&&Ht.forEach(function(oS){return n(K,oS)}),Me&&Hi(K,le),Zt}function He(K,V,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var Zt=tt.key;V!==null;){if(V.key===Zt){if(Zt=tt.type,Zt===T){if(V.tag===7){a(K,V.sibling),mt=u(V,tt.props.children),mt.return=K,K=mt;break t}}else if(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===W&&rr(Zt)===V.type){a(K,V.sibling),mt=u(V,tt.props),Js(mt,tt),mt.return=K,K=mt;break t}a(K,V);break}else n(K,V);V=V.sibling}tt.type===T?(mt=tr(tt.props.children,K.mode,mt,tt.key),mt.return=K,K=mt):(mt=sl(tt.type,tt.key,tt.props,null,K.mode,mt),Js(mt,tt),mt.return=K,K=mt)}return x(K);case E:t:{for(Zt=tt.key;V!==null;){if(V.key===Zt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(K,V.sibling),mt=u(V,tt.children||[]),mt.return=K,K=mt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}mt=pu(tt,K.mode,mt),mt.return=K,K=mt}return x(K);case W:return tt=rr(tt),He(K,V,tt,mt)}if(gt(tt))return It(K,V,tt,mt);if(nt(tt)){if(Zt=nt(tt),typeof Zt!="function")throw Error(r(150));return tt=Zt.call(tt),Jt(K,V,tt,mt)}if(typeof tt.then=="function")return He(K,V,dl(tt),mt);if(tt.$$typeof===L)return He(K,V,cl(K,tt),mt);pl(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(K,V.sibling),mt=u(V,tt),mt.return=K,K=mt):(a(K,V),mt=du(tt,K.mode,mt),mt.return=K,K=mt),x(K)):a(K,V)}return function(K,V,tt,mt){try{Qs=0;var Zt=He(K,V,tt,mt);return kr=null,Zt}catch(Ht){if(Ht===Vr||Ht===fl)throw Ht;var Ae=Yn(29,Ht,null,K.mode);return Ae.lanes=mt,Ae.return=K,Ae}finally{}}}var or=Yp(!0),jp=Yp(!1),_a=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),Up(e,null,a),n}return al(e,o,n,a),rl(e)}function $s(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Os(e,a)}}function Cu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function to(){if(wu){var e=Gr;if(e!==null)throw e}}function eo(e,n,a,o){wu=!1;var u=e.updateQueue;_a=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,et=F.next;F.next=null,x===null?d=et:x.next=et,x=F;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==x&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=F))}if(d!==null){var vt=u.baseState;x=0,dt=et=F=null,b=d;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(ve&it)===it:(o&it)===it){it!==0&&it===Hr&&(wu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var It=e,Jt=b;it=n;var He=a;switch(Jt.tag){case 1:if(It=Jt.payload,typeof It=="function"){vt=It.call(He,vt,it);break t}vt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Jt.payload,it=typeof It=="function"?It.call(He,vt,it):It,it==null)break t;vt=_({},vt,it);break t;case 2:_a=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=lt,F=vt):dt=dt.next=lt,x|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(F=vt),u.baseState=F,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),Ta|=x,e.lanes=x,e.memoizedState=vt}}function Zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zp(a[e],n)}var Xr=O(null),ml=O(0);function Qp(e,n){e=Qi,ht(ml,e),ht(Xr,n),Qi=e|n.baseLanes}function Du(){ht(ml,Qi),ht(Xr,Xr.current)}function Uu(){Qi=ml.current,J(Xr),J(ml)}var jn=O(null),oi=null;function xa(e){var n=e.alternate;ht(en,en.current&1),ht(jn,e),oi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(oi=e)}function Lu(e){ht(en,en.current),ht(jn,e),oi===null&&(oi=e)}function Jp(e){e.tag===22?(ht(en,en.current),ht(jn,e),oi===null&&(oi=e)):Sa()}function Sa(){ht(en,en.current),ht(jn,jn.current)}function Zn(e){J(jn),oi===e&&(oi=null),J(en)}var en=O(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,oe=null,Fe=null,rn=null,_l=!1,Wr=!1,lr=!1,vl=0,no=0,qr=null,Qy=0;function Je(){throw Error(r(321))}function Nu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,o,u,d){return ki=d,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?zm:Zu,lr=!1,d=a(o,u),lr=!1,Wr&&(d=tm(n,a,o,u)),$p(e),d}function $p(e){U.H=ro;var n=Fe!==null&&Fe.next!==null;if(ki=0,rn=Fe=oe=null,_l=!1,no=0,qr=null,n)throw Error(r(300));e===null||sn||(e=e.dependencies,e!==null&&ll(e)&&(sn=!0))}function tm(e,n,a,o){oe=e;var u=0;do{if(Wr&&(qr=null),no=0,Wr=!1,25<=u)throw Error(r(301));if(u+=1,rn=Fe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=Pm,d=n(a,o)}while(Wr);return d}function Jy(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(oe.flags|=1024),n}function zu(){var e=vl!==0;return vl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}ki=0,rn=Fe=oe=null,Wr=!1,no=vl=0,qr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?oe.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(Fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=rn===null?oe.memoizedState:rn.next;if(n!==null)rn=n,Fe=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},rn===null?oe.memoizedState=rn=e:rn=rn.next=e}return rn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,qr===null&&(qr=[]),e=Xp(qr,e,n),n=oe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?zm:Zu),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===L)return Sn(e)}throw Error(r(438,String(e)))}function Fu(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Sl(e){var n=nn();return Iu(n,Fe,e)}function Iu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=x=null,F=null,et=n,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ve&vt)===vt:(ki&vt)===vt){var it=et.revertLane;if(it===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Hr&&(dt=!0);else if((ki&it)===it){et=et.next,it===Hr&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(b=F=vt,x=d):F=F.next=vt,oe.lanes|=it,Ta|=it;vt=et.action,lr&&a(d,vt),d=et.hasEagerState?et.eagerState:a(d,vt)}else it={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(b=F=it,x=d):F=F.next=it,oe.lanes|=vt,Ta|=vt;et=et.next}while(et!==null&&et!==n);if(F===null?x=d:F.next=b,!qn(d,e.memoizedState)&&(sn=!0,dt&&(a=Gr,a!==null)))throw a;e.memoizedState=d,e.baseState=x,e.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Hu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);qn(d,n.memoizedState)||(sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function em(e,n,a){var o=oe,u=nn(),d=Me;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!qn((Fe||u).memoizedState,a);if(x&&(u.memoizedState=a,sn=!0),u=u.queue,ku(am.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Yr(9,{destroy:void 0},im.bind(null,o,u,a,n),null),Ve===null)throw Error(r(349));d||(ki&127)!==0||nm(o,n,a)}return a}function nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=yl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function im(e,n,a,o){n.value=a,n.getSnapshot=o,rm(n)&&sm(e)}function am(e,n,a){return a(function(){rm(n)&&sm(e)})}function rm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function sm(e){var n=$a(e,2);n!==null&&Vn(n,e,2)}function Gu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),lr){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function om(e,n,a,o){return e.baseState=a,Iu(e,Fe,typeof o=="function"?o:Xi)}function $y(e,n,a,o,u){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,lm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function lm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,x={};U.T=x;try{var b=a(u,o),F=U.S;F!==null&&F(x,b),cm(e,n,b)}catch(et){Vu(e,n,et)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=a(u,o),cm(e,n,d)}catch(et){Vu(e,n,et)}}function cm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){um(e,n,o)},function(o){return Vu(e,n,o)}):um(e,n,a)}function um(e,n,a){n.status="fulfilled",n.value=a,fm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,lm(e,a)))}function Vu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fm(n),n=n.next;while(n!==o)}e.action=null}function fm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function dm(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var o=oe;if(Me){if(Xe){e:{for(var u=Xe,d=si;u.nodeType!==8;){if(!d){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Xe=li(u.nextSibling),o=u.data==="F!";break t}}ma(o)}o=!1}o&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,oe,o),o.dispatch=a,o=Gu(!1),d=ju.bind(null,oe,!1,o.queue),o=Nn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=$y.bind(null,oe,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function pm(e){var n=nn();return mm(n,Fe,e)}function mm(e,n,a){if(n=Iu(e,n,hm)[0],e=Sl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=io(n)}catch(x){throw x===Vr?fl:x}else o=n;n=nn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Yr(9,{destroy:void 0},tx.bind(null,u,a),null)),[o,d,e]}function tx(e,n){e.action=n}function gm(e){var n=nn(),a=Fe;if(a!==null)return mm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Yr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=yl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function _m(){return nn().memoizedState}function Ml(e,n,a,o){var u=Nn();oe.flags|=e,u.memoizedState=Yr(1|n,{destroy:void 0},a,o===void 0?null:o)}function El(e,n,a,o){var u=nn();o=o===void 0?null:o;var d=u.memoizedState.inst;Fe!==null&&o!==null&&Nu(o,Fe.memoizedState.deps)?u.memoizedState=Yr(n,d,a,o):(oe.flags|=e,u.memoizedState=Yr(1|n,d,a,o))}function vm(e,n){Ml(8390656,8,e,n)}function ku(e,n){El(2048,8,e,n)}function ex(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=yl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function ym(e){var n=nn().memoizedState;return ex({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function xm(e,n){return El(4,2,e,n)}function Sm(e,n){return El(4,4,e,n)}function Mm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Em(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,Mm.bind(null,n,e),a)}function Xu(){}function Tm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Nu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Nu(n,o[1]))return o[0];if(o=e(),lr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function Wu(e,n,a){return a===void 0||(ki&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ag(),oe.lanes|=e,Ta|=e,a)}function Am(e,n,a,o){return qn(a,n)?a:Xr.current!==null?(e=Wu(e,a,o),qn(e,n)||(sn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(ve&261930)===0?(sn=!0,e.memoizedState=a):(e=Ag(),oe.lanes|=e,Ta|=e,n)}function Rm(e,n,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var x=U.T,b={};U.T=b,ju(e,!1,n,a);try{var F=u(),et=U.S;if(et!==null&&et(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=Ky(F,o);ao(e,n,dt,Jn(e))}else ao(e,n,o,Jn(e))}catch(vt){ao(e,n,{then:function(){},status:"rejected",reason:vt},Jn())}finally{q.p=d,x!==null&&b.types!==null&&(x.types=b.types),U.T=x}}function nx(){}function qu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Cm(e).queue;Rm(e,u,n,I,a===null?nx:function(){return wm(e),a(o)})}function Cm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function wm(e){var n=Cm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},Jn())}function Yu(){return Sn(Mo)}function Dm(){return nn().memoizedState}function Um(){return nn().memoizedState}function ix(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=va(a);var o=ya(n,e,a);o!==null&&(Vn(o,n,a),$s(o,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function ax(e,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Nm(n,a):(a=fu(e,n,a,o),a!==null&&(Vn(a,e,o),Om(a,n,o)))}function Lm(e,n,a){var o=Jn();ao(e,n,a,o)}function ao(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Nm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,b=d(x,a);if(u.hasEagerState=!0,u.eagerState=b,qn(b,x))return al(e,n,u,0),Ve===null&&il(),!1}catch{}finally{}if(a=fu(e,n,u,o),a!==null)return Vn(a,e,o),Om(a,n,o),!0}return!1}function ju(e,n,a,o){if(o={lane:2,revertLane:Rf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=fu(e,a,o,2),n!==null&&Vn(n,e,2)}function Tl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Nm(e,n){Wr=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Om(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Os(e,a)}}var ro={readContext:Sn,use:xl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ro.useEffectEvent=Je;var zm={readContext:Sn,use:xl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:vm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,Mm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var o=e();if(lr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Nn();if(a!==void 0){var u=a(n);if(lr){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ax.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=Lm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=Nn();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=Rm.bind(null,oe,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=Nn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ve&127)!==0||nm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,vm(am.bind(null,o,d,e),[e]),o.flags|=2048,Yr(9,{destroy:void 0},im.bind(null,o,d,a,n),null),a},useId:function(){var e=Nn(),n=Ve.identifierPrefix;if(Me){var a=Ci,o=Ri;a=(o&~(1<<32-ee(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Qy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:dm,useActionState:dm,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return Nn().memoizedState=ix.bind(null,oe)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Sn,use:xl,useCallback:Tm,useContext:Sn,useEffect:ku,useImperativeHandle:Em,useInsertionEffect:xm,useLayoutEffect:Sm,useMemo:bm,useReducer:Sl,useRef:_m,useState:function(){return Sl(Xi)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return Am(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Sl(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Yu,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=nn();return om(a,Fe,e,n)},useMemoCache:Fu,useCacheRefresh:Um};Zu.useEffectEvent=ym;var Pm={readContext:Sn,use:xl,useCallback:Tm,useContext:Sn,useEffect:ku,useImperativeHandle:Em,useInsertionEffect:xm,useLayoutEffect:Sm,useMemo:bm,useReducer:Hu,useRef:_m,useState:function(){return Hu(Xi)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return Fe===null?Wu(a,e,n):Am(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Hu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:em,useId:Dm,useHostTransitionStatus:Yu,useFormState:gm,useActionState:gm,useOptimistic:function(e,n){var a=nn();return Fe!==null?om(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:Um};Pm.useEffectEvent=ym;function Ku(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Vn(n,e,o),$s(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Vn(n,e,o),$s(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Vn(n,e,a),$s(n,e,a))}};function Bm(e,n,a,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Ws(a,o)||!Ws(u,d):!0}function Fm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function cr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Im(e){nl(e)}function Hm(e){console.error(e)}function Gm(e){nl(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function km(e){return e=va(e),e.tag=3,e}function Xm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Vm(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Vm(n,a,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function rx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Bl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Tf(e,o,u)),!1;case 22:return a.flags|=65536,o===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Tf(e,o,u)),!1}throw Error(r(435,a.tag))}return Tf(e,o,u),Bl(),!1}if(Me)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==_u&&(e=Error(r(422),{cause:o}),js(ii(e,a)))):(o!==_u&&(n=Error(r(423),{cause:o}),js(ii(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,a),u=Ju(e.stateNode,o,u),Cu(e,u),$e!==4&&($e=2)),!1;var d=Error(r(520),{cause:o});if(d=ii(d,a),po===null?po=[d]:po.push(d),$e!==4&&($e=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,o,e),Cu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ba===null||!ba.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=km(u),Xm(u,e,a,o),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var $u=Error(r(461)),sn=!1;function Mn(e,n,a,o){n.child=e===null?jp(n,null,a,o):or(n,e.child,a,o)}function Wm(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return ir(n),o=Ou(e,n,a,x,d,u),b=zu(),e!==null&&!sn?(Pu(e,n,u),Wi(e,n,u)):(Me&&b&&mu(n),n.flags|=1,Mn(e,n,o,u),n.child)}function qm(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!hu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Ym(e,n,d,o,u)):(e=sl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!lf(e,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ws,a(x,o)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Ii(d,o),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Ws(d,o)&&e.ref===n.ref)if(sn=!1,n.pendingProps=o=d,lf(e,u))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return tf(e,n,a,o,u)}function jm(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Zm(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,d!==null?d.cachePool:null),d!==null?Qp(n,d):Du(),Jp(n);else return o=n.lanes=536870912,Zm(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(ul(n,d.cachePool),Qp(n,d),Sa(),n.memoizedState=null):(e!==null&&ul(n,null),Du(),Sa());return Mn(e,n,u,a),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zm(e,n,a,o,u){var d=Tu();return d=d===null?null:{parent:an._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&ul(n,null),Du(),Jp(n),e!==null&&Ir(e,n,o,!0),n.childLanes=u,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Km(e,n,a){return or(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function sx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Al(n,o),n.lanes=536870912,so(null,e);if(Lu(n),(e=Xe)?(e=l_(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Np(e),a.return=n,n.child=a,xn=n,Xe=null)):e=null,e===null)throw ma(n);return n.lanes=536870912,null}return Al(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Lu(n),u)if(n.flags&256)n.flags&=-257,n=Km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(sn||Ir(e,n,a,!1),u=(a&e.childLanes)!==0,sn||u){if(o=Ve,o!==null&&(x=Ai(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,$a(e,x),Vn(o,e,x),$u;Bl(),n=Km(e,n,a)}else e=d.treeContext,Xe=li(x.nextSibling),xn=n,Me=!0,pa=null,si=!1,e!==null&&Pp(n,e),n=Al(n,o),n.flags|=4096;return n}return e=Ii(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function tf(e,n,a,o,u){return ir(n),a=Ou(e,n,a,o,void 0,u),o=zu(),e!==null&&!sn?(Pu(e,n,u),Wi(e,n,u)):(Me&&o&&mu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Qm(e,n,a,o,u,d){return ir(n),n.updateQueue=null,a=tm(n,o,a,u),$p(e),o=zu(),e!==null&&!sn?(Pu(e,n,d),Wi(e,n,d)):(Me&&o&&mu(n),n.flags|=1,Mn(e,n,a,d),n.child)}function Jm(e,n,a,o,u){if(ir(n),n.stateNode===null){var d=zr,x=a.contextType;typeof x=="object"&&x!==null&&(d=Sn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Qu,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Au(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Sn(x):zr,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ku(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Qu.enqueueReplaceState(d,d.state,null),eo(n,o,d,u),to(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,F=cr(a,b);d.props=F;var et=d.context,dt=a.contextType;x=zr,typeof dt=="object"&&dt!==null&&(x=Sn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==x)&&Fm(n,d,o,x),_a=!1;var it=n.memoizedState;d.state=it,eo(n,o,d,u),to(),et=n.memoizedState,b||it!==et||_a?(typeof vt=="function"&&(Ku(n,a,vt,o),et=n.memoizedState),(F=_a||Bm(n,a,F,o,it,et,x))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),d.props=o,d.state=et,d.context=x,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Ru(e,n),x=n.memoizedProps,dt=cr(a,x),d.props=dt,vt=n.pendingProps,it=d.context,et=a.contextType,F=zr,typeof et=="object"&&et!==null&&(F=Sn(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==vt||it!==F)&&Fm(n,d,o,F),_a=!1,it=n.memoizedState,d.state=it,eo(n,o,d,u),to();var lt=n.memoizedState;x!==vt||it!==lt||_a||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof b=="function"&&(Ku(n,a,b,o),lt=n.memoizedState),(dt=_a||Bm(n,a,dt,o,it,lt,F)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,lt,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,lt,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),d.props=o,d.state=lt,d.context=F,o=dt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Rl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=or(n,e.child,null,u),n.child=or(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Wi(e,n,u),e}function $m(e,n,a,o){return er(),n.flags|=256,Mn(e,n,a,o),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Vp()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function tg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?xa(n):Sa(),(e=Xe)?(e=l_(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Np(e),a.return=n,n.child=a,xn=n,Xe=null)):e=null,e===null)throw ma(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Sa(),u=n.mode,b=Cl({mode:"hidden",children:b},u),o=tr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,x,a),n.memoizedState=ef,so(null,o)):(xa(n),rf(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(d)n.flags&256?(xa(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),b=o.fallback,u=n.mode,o=Cl({mode:"visible",children:o.children},u),b=tr(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,or(n,e.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(e,x,a),n.memoizedState=ef,n=so(null,o));else if(xa(n),Hf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(r(419)),o.stack="",o.digest=x,js({value:o,source:null,stack:null}),n=sf(e,n,a)}else if(sn||Ir(e,n,a,!1),x=(a&e.childLanes)!==0,sn||x){if(x=Ve,x!==null&&(o=Ai(x,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,$a(e,o),Vn(x,e,o),$u;If(b)||Bl(),n=sf(e,n,a)}else If(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Xe=li(b.nextSibling),xn=n,Me=!0,pa=null,si=!1,e!==null&&Pp(n,e),n=rf(n,o.children),n.flags|=4096);return n}return u?(Sa(),b=o.fallback,u=n.mode,F=e.child,et=F.sibling,o=Ii(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,et!==null?b=Ii(et,b):(b=tr(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,so(null,o),o=n.child,b=e.child.memoizedState,b===null?b=nf(a):(u=b.cachePool,u!==null?(F=an._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Vp(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=af(e,x,a),n.memoizedState=ef,so(e.child,o)):(xa(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return or(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),xu(e.return,n,a)}function of(e,n,a,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function ng(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=en.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,ht(en,x),Mn(e,n,o,a),o=Me?Ys:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eg(e,a,n);else if(e.tag===19)eg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),of(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}of(n,!0,a,null,d,o);break;case"together":of(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function ox(e,n,a){switch(n.tag){case 3:Lt(n,n.stateNode.containerInfo),ga(n,an,e.memoizedState.cache),er();break;case 27:case 5:Yt(n);break;case 4:Lt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?tg(e,n,a):(xa(n),e=Wi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ng(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(en,en.current),o)break;return null;case 22:return n.lanes=0,jm(e,n,a,n.pendingProps);case 24:ga(n,an,e.memoizedState.cache)}return Wi(e,n,a)}function ig(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return sn=!1,ox(e,n,a);sn=(e.flags&131072)!==0}else sn=!1,Me&&(n.flags&1048576)!==0&&zp(n,Ys,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")hu(e)?(o=cr(e,o),n.tag=1,n=Jm(null,n,e,o,a)):(n.tag=0,n=tf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Wm(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=qm(null,n,e,o,a);break t}}throw n=ot(e)||e,Error(r(306,n,""))}}return n;case 0:return tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=cr(o,n.pendingProps),Jm(e,n,o,u,a);case 3:t:{if(Lt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Ru(e,n),eo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,ga(n,an,o),o!==d.cache&&Su(n,[an],a,!0),to(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=$m(e,n,o,a);break t}else if(o!==u){u=ii(Error(r(424)),n),js(u),n=$m(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=li(e.firstChild),xn=n,Me=!0,pa=null,si=!0,a=jp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),o===u){n=Wi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=p_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Xl(St.current).createElement(a),o[Ke]=n,o[vn]=e,En(o,a,e),Y(o),n.stateNode=o):n.memoizedState=p_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&Me&&(o=n.stateNode=f_(n.type,n.pendingProps,St.current),xn=n,si=!0,u=Xe,wa(n.type)?(Gf=u,Xe=li(o.firstChild)):Xe=u),Mn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=Xe)&&(o=Bx(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,xn=n,Xe=li(o.firstChild),si=!1,u=!0):u=!1),u||ma(n)),Yt(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Pf(u,d)?o=null:x!==null&&Pf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,Jy,null,null,a),Mo._currentValue=u),Rl(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=Xe)&&(a=Fx(a,n.pendingProps,si),a!==null?(n.stateNode=a,xn=n,Xe=null,e=!0):e=!1),e||ma(n)),null;case 13:return tg(e,n,a);case 4:return Lt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=or(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Wm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ir(n),u=Sn(u),o=o(u),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return qm(e,n,n.type,n.pendingProps,a);case 15:return Ym(e,n,n.type,n.pendingProps,a);case 19:return ng(e,n,a);case 31:return sx(e,n,a);case 22:return jm(e,n,a,n.pendingProps);case 24:return ir(n),o=Sn(an),e===null?(u=Tu(),u===null&&(u=Ve,d=Mu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Au(n),ga(n,an,u)):((e.lanes&a)!==0&&(Ru(e,n),eo(n,null,null,a),to()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,an,o)):(o=d.cache,ga(n,an,o),o!==u.cache&&Su(n,[an],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Dg())e.flags|=8192;else throw sr=hl,bu}else e.flags&=-16777217}function ag(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!y_(n))if(Dg())e.flags|=8192;else throw sr=hl,bu}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cn():536870912,e.lanes|=n,Qr|=n)}function oo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function lx(e,n,a){var o=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(an),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),We(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(qi(n),d!==null?(We(n),ag(n,d)):(We(n),cf(n,u,null,o,a))):d?d!==e.memoizedState?(qi(n),We(n),ag(n,d)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&qi(n),We(n),cf(n,u,e,o,a)),null;case 27:if(we(n),a=St.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=X.current,Fr(n)?Bp(n):(e=f_(u,o,a),n.stateNode=e,qi(n))}return We(n),null;case 5:if(we(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(d=X.current,Fr(n))Bp(n);else{var x=Xl(St.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[Ke]=n,d[vn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(En(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&qi(n)}}return We(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=St.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=xn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||ma(n,!0)}else e=Xl(e).createTextNode(o),e[Ke]=n,n.stateNode=e}return We(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Fr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),We(n),null);case 4:return Wt(),e===null&&Uf(n.stateNode.containerInfo),We(n),null;case 10:return Vi(n.type),We(n),null;case 19:if(J(en),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)oo(o,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=gl(e),d!==null){for(n.flags|=128,oo(o,!1),e=d.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lp(a,e),a=a.sibling;return ht(en,en.current&1|2),Me&&Hi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&pt()>Ol&&(n.flags|=128,u=!0,oo(o,!1),n.lanes=4194304)}else{if(!u)if(e=gl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Me)return We(n),null}else 2*pt()-o.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,u=!0,oo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,a=en.current,ht(en,u?a&1|2:a&1),Me&&Hi(n,o.treeForkCount),e):(We(n),null);case 22:case 23:return Zn(n),Uu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(an),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function cx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(an),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return we(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(en),null;case 4:return Wt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Uu(),e!==null&&J(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(an),null;case 25:return null;default:return null}}function rg(e,n){switch(gu(n),n.tag){case 3:Vi(an),Wt();break;case 26:case 27:case 5:we(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:J(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Uu(),e!==null&&J(ar);break;case 24:Vi(an)}}function lo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(b){Oe(n,n.return,b)}}function Ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var F=a,et=b;try{et()}catch(dt){Oe(u,F,dt)}}}o=o.next}while(o!==d)}}catch(dt){Oe(n,n.return,dt)}}function sg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(o){Oe(e,e.return,o)}}}function og(e,n,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Oe(e,n,o)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Oe(e,n,u)}}function wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Oe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(e,n,u)}else a.current=null}function lg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Oe(e,e.return,u)}}function uf(e,n,a){try{var o=e.stateNode;Ux(o,e.type,a,n),o[vn]=n}catch(u){Oe(e,e.return,u)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(hf(e,n,a),e=e.sibling;e!==null;)hf(e,n,a),e=e.sibling}function Dl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function ug(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[Ke]=e,n[vn]=a}catch(d){Oe(e,e.return,d)}}var Yi=!1,on=!1,df=!1,fg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function ux(e,n){if(e=e.containerInfo,Of=Ql,e=Ep(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var x=0,b=-1,F=-1,et=0,dt=0,vt=e,it=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(b=x+u),vt!==d||o!==0&&vt.nodeType!==3||(F=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)it=vt,vt=lt;for(;;){if(vt===e)break e;if(it===a&&++et===u&&(b=x),it===d&&++dt===o&&(F=x),(lt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=lt}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},Ql=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var It=cr(a.type,u);e=o.getSnapshotBeforeUpdate(It,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Oe(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),o&4&&lo(5,a);break;case 1:if(Zi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Oe(a,a.return,x)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Oe(a,a.return,x)}}o&64&&sg(a),o&512&&co(a,a.return);break;case 3:if(Zi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(x){Oe(a,a.return,x)}}break;case 27:n===null&&o&4&&ug(a);case 26:case 5:Zi(e,a),n===null&&o&4&&lg(a),o&512&&co(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),o&4&&mg(e,a);break;case 13:Zi(e,a),o&4&&gg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),Ix(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||on,u=Yi;var d=on;Yi=o,(on=n)&&!d?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),Yi=u,on=d}break;case 30:break;default:Zi(e,a)}}function dg(e){var n=e.alternate;n!==null&&(e.alternate=null,dg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Bs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Fn=!1;function ji(e,n,a){for(a=a.child;a!==null;)pg(e,n,a),a=a.sibling}function pg(e,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:on||wi(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||wi(a,n);var o=je,u=Fn;wa(a.type)&&(je=a.stateNode,Fn=!1),ji(e,n,a),yo(a.stateNode),je=o,Fn=u;break;case 5:on||wi(a,n);case 6:if(o=je,u=Fn,je=null,ji(e,n,a),je=o,Fn=u,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(d){Oe(a,n,d)}else try{je.removeChild(a.stateNode)}catch(d){Oe(a,n,d)}break;case 18:je!==null&&(Fn?(e=je,s_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):s_(je,a.stateNode));break;case 4:o=je,u=Fn,je=a.stateNode.containerInfo,Fn=!0,ji(e,n,a),je=o,Fn=u;break;case 0:case 11:case 14:case 15:Ma(2,a,n),on||Ma(4,a,n),ji(e,n,a);break;case 1:on||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&og(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:on=(o=on)||a.memoizedState!==null,ji(e,n,a),on=o;break;default:ji(e,n,a)}}function mg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){Oe(n,n.return,a)}}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){Oe(n,n.return,a)}}function fx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fg),n;default:throw Error(r(435,e.tag))}}function Ul(e,n){var a=fx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=xx.bind(null,e,o);o.then(u,u)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){je=b.stateNode,Fn=!1;break t}break;case 5:je=b.stateNode,Fn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(je===null)throw Error(r(160));pg(d,x,u),je=null,Fn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_g(n,e),n=n.sibling}var vi=null;function _g(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Hn(e),o&4&&(Ma(3,e,e.return),lo(3,e),Ma(5,e,e.return));break;case 1:In(n,e),Hn(e),o&512&&(on||a===null||wi(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(In(n,e),Hn(e),o&512&&(on||a===null||wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Za]||d[Ke]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),En(d,o,a),d[Ke]=e,Y(d),o=d;break t;case"link":var x=__("link","href",u).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(d=x[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}d=u.createElement(o),En(d,o,a),u.head.appendChild(d);break;case"meta":if(x=__("meta","content",u).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(d=x[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}d=u.createElement(o),En(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[Ke]=e,Y(d),o=d}e.stateNode=o}else v_(u,e.type,e.stateNode);else e.stateNode=g_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?v_(u,e.type,e.stateNode):g_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Hn(e),o&512&&(on||a===null||wi(a,a.return)),a!==null&&o&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Hn(e),o&512&&(on||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{Pn(u,"")}catch(It){Oe(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(df=!0);break;case 6:if(In(n,e),Hn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(It){Oe(e,e.return,It)}}break;case 3:if(Yl=null,u=vi,vi=Wl(n.containerInfo),In(n,e),vi=u,Hn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(It){Oe(e,e.return,It)}df&&(df=!1,vg(e));break;case 4:o=vi,vi=Wl(e.stateNode.containerInfo),In(n,e),Hn(e),vi=o;break;case 12:In(n,e),Hn(e);break;case 31:In(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ul(e,o)));break;case 13:In(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=pt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ul(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,et=Yi,dt=on;if(Yi=et||u,on=dt||F,In(n,e),on=dt,Yi=et,Hn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Yi||on||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(d=F.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=F.stateNode;var vt=F.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(It){Oe(F,F.return,It)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(It){Oe(F,F.return,It)}}}else if(n.tag===18){if(a===null){F=n;try{var lt=F.stateNode;u?o_(lt,!0):o_(F.stateNode,!1)}catch(It){Oe(F,F.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ul(e,a))));break;case 19:In(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ul(e,o)));break;case 30:break;case 21:break;default:In(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(cg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=ff(e);Dl(e,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(Pn(x,""),a.flags&=-33);var b=ff(e);Dl(e,b,x);break;case 3:case 4:var F=a.stateNode.containerInfo,et=ff(e);hf(e,et,F);break;default:throw Error(r(161))}}catch(dt){Oe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hg(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&og(n,n.return,a),ur(n);break;case 27:yo(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(u,d,a),lo(4,d);break;case 1:if(Ki(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Oe(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Zp(F[u],b)}catch(et){Oe(o,o.return,et)}}a&&x&64&&sg(d),co(d,d.return);break;case 27:ug(d);case 26:case 5:Ki(u,d,a),a&&o===null&&x&4&&lg(d),co(d,d.return);break;case 12:Ki(u,d,a);break;case 31:Ki(u,d,a),a&&x&4&&mg(u,d);break;case 13:Ki(u,d,a),a&&x&4&&gg(u,d);break;case 22:d.memoizedState===null&&Ki(u,d,a),co(d,d.return);break;case 30:break;default:Ki(u,d,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zs(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e))}function yi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yg(e,n,a,o),n=n.sibling}function yg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,o),u&2048&&lo(9,n);break;case 1:yi(e,n,a,o);break;case 3:yi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e)));break;case 12:if(u&2048){yi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,b=d.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Oe(n,n.return,F)}}else yi(e,n,a,o);break;case 31:yi(e,n,a,o);break;case 13:yi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?yi(e,n,a,o):uo(e,n):d._visibility&2?yi(e,n,a,o):(d._visibility|=2,jr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&pf(x,n);break;case 24:yi(e,n,a,o),u&2048&&mf(n.alternate,n);break;default:yi(e,n,a,o)}}function jr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,b=a,F=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:jr(d,x,b,F,u),lo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?jr(d,x,b,F,u):uo(d,x):(dt._visibility|=2,jr(d,x,b,F,u)),u&&et&2048&&pf(x.alternate,x);break;case 24:jr(d,x,b,F,u),u&&et&2048&&mf(x.alternate,x);break;default:jr(d,x,b,F,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:uo(a,o),u&2048&&pf(o.alternate,o);break;case 24:uo(a,o),u&2048&&mf(o.alternate,o);break;default:uo(a,o)}n=n.sibling}}var fo=8192;function Zr(e,n,a){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)xg(e,n,a),e=e.sibling}function xg(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&fo&&e.memoizedState!==null&&Qx(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,a);break;case 3:case 4:var o=vi;vi=Wl(e.stateNode.containerInfo),Zr(e,n,a),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fo,fo=16777216,Zr(e,n,a),fo=o):Zr(e,n,a));break;default:Zr(e,n,a)}}function Sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Eg(o,e)}Sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):ho(e);break;default:ho(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Eg(o,e)}Sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function Eg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,d=o.return;if(dg(o),o===a){mn=null;break t}if(u!==null){u.return=d,mn=u;break t}mn=d}}}var hx={getCacheForType:function(e){var n=Sn(an),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Sn(an).controller.signal}},dx=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,de=null,ve=0,Ne=0,Kn=null,Ea=!1,Kr=!1,gf=!1,Qi=0,$e=0,Ta=0,fr=0,_f=0,Qn=0,Qr=0,po=null,Gn=null,vf=!1,Nl=0,Tg=0,Ol=1/0,zl=null,ba=null,fn=0,Aa=null,Jr=null,Ji=0,yf=0,xf=null,bg=null,mo=0,Sf=null;function Jn(){return(De&2)!==0&&ve!==0?ve&-ve:U.T!==null?Rf():zs()}function Ag(){if(Qn===0)if((ve&536870912)===0||Me){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function Vn(e,n,a){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ra(e,ve,Qn,!1)),_n(e,a),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(fr|=a),$e===4&&Ra(e,ve,Qn,!1)),Di(e))}function Rg(e,n,a){if((De&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?gx(e,n):Ef(e,n,!0),d=o;do{if(u===0){Kr&&!o&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!px(a)){u=Ef(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=po;var F=b.current.memoizedState.isDehydrated;if(F&&($r(b,x).flags|=256),x=Ef(b,x,!1),x!==2){if(gf&&!F){b.errorRecoveryDisabledLanes|=d,fr|=d,u=4;break t}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){$r(e,0),Ra(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ra(o,n,Qn,!Ea);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Nl+300-pt(),10<u)){if(Ra(o,n,Qn,!Ea),wt(o,0,!0)!==0)break t;Ji=n,o.timeoutHandle=a_(Cg.bind(null,o,a,Gn,zl,vf,n,Qn,fr,Qr,Ea,d,"Throttled",-0,0),u);break t}Cg(o,a,Gn,zl,vf,n,Qn,fr,Qr,Ea,d,null,-0,0)}}break}while(!0);Di(e)}function Cg(e,n,a,o,u,d,x,b,F,et,dt,vt,it,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},xg(n,d,vt);var It=(d&62914560)===d?Nl-pt():(d&4194048)===d?Tg-pt():0;if(It=Jx(vt,It),It!==null){Ji=d,e.cancelPendingCommit=It(Pg.bind(null,e,n,d,a,o,u,x,b,F,dt,vt,null,it,lt)),Ra(e,d,x,!et);return}}Pg(e,n,d,a,o,u,x,b,F)}function px(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,o){n&=~_f,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-ee(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&Ns(e,a,n)}function Pl(){return(De&6)===0?(go(0),!1):!0}function Mf(){if(de!==null){if(Ne===0)var e=de.return;else e=de,Gi=nr=null,Bu(e),kr=null,Qs=0,e=de;for(;e!==null;)rg(e.alternate,e),e=e.return;de=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ox(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,Mf(),Ve=e,de=a=Ii(e.current,null),ve=n,Ne=0,Kn=null,Ea=!1,Kr=ne(e,n),gf=!1,Qr=Qn=_f=fr=Ta=$e=0,Gn=po=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ee(o),d=1<<u;n|=e[u],o&=~d}return Qi=n,il(),a}function wg(e,n){oe=null,U.H=ro,n===Vr||n===fl?(n=Wp(),Ne=3):n===bu?(n=Wp(),Ne=4):Ne=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&($e=1,bl(e,ii(n,e.current)))}function Dg(){var e=jn.current;return e===null?!0:(ve&4194048)===ve?oi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===oi:!1}function Ug(){var e=U.H;return U.H=ro,e===null?ro:e}function Lg(){var e=U.A;return U.A=hx,e}function Bl(){$e=4,Ea||(ve&4194048)!==ve&&jn.current!==null||(Kr=!0),(Ta&134217727)===0&&(fr&134217727)===0||Ve===null||Ra(Ve,ve,Qn,!1)}function Ef(e,n,a){var o=De;De|=2;var u=Ug(),d=Lg();(Ve!==e||ve!==n)&&(zl=null,$r(e,n)),n=!1;var x=$e;t:do try{if(Ne!==0&&de!==null){var b=de,F=Kn;switch(Ne){case 8:Mf(),x=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var et=Ne;if(Ne=0,Kn=null,ts(e,b,F,et),a&&Kr){x=0;break t}break;default:et=Ne,Ne=0,Kn=null,ts(e,b,F,et)}}mx(),x=$e;break}catch(dt){wg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Gi=nr=null,De=o,U.H=u,U.A=d,de===null&&(Ve=null,ve=0,il()),x}function mx(){for(;de!==null;)Ng(de)}function gx(e,n){var a=De;De|=2;var o=Ug(),u=Lg();Ve!==e||ve!==n?(zl=null,Ol=pt()+500,$r(e,n)):Kr=ne(e,n);t:do try{if(Ne!==0&&de!==null){n=de;var d=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,ts(e,n,d,1);break;case 2:case 9:if(kp(d)){Ne=0,Kn=null,Og(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Di(e)},d.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:kp(d)?(Ne=0,Kn=null,Og(n)):(Ne=0,Kn=null,ts(e,n,d,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var b=de;if(x?y_(x):b.stateNode.complete){Ne=0,Kn=null;var F=b.sibling;if(F!==null)de=F;else{var et=b.return;et!==null?(de=et,Fl(et)):de=null}break e}}Ne=0,Kn=null,ts(e,n,d,5);break;case 6:Ne=0,Kn=null,ts(e,n,d,6);break;case 8:Mf(),$e=6;break t;default:throw Error(r(462))}}_x();break}catch(dt){wg(e,dt)}while(!0);return Gi=nr=null,U.H=o,U.A=u,De=a,de!==null?0:(Ve=null,ve=0,il(),$e)}function _x(){for(;de!==null&&!A();)Ng(de)}function Ng(e){var n=ig(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Fl(e):de=n}function Og(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Bu(n);default:rg(a,n),n=de=Lp(n,Qi),n=ig(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Fl(e):de=n}function ts(e,n,a,o){Gi=nr=null,Bu(n),kr=null,Qs=0;var u=n.return;try{if(rx(e,u,n,a,ve)){$e=1,bl(e,ii(a,e.current)),de=null;return}}catch(d){if(u!==null)throw de=u,d;$e=1,bl(e,ii(a,e.current)),de=null;return}n.flags&32768?(Me||o===1?e=!0:Kr||(ve&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),zg(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){zg(n,Ea);return}e=n.return;var a=lx(n.alternate,n,Qi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);$e===0&&($e=5)}function zg(e,n){do{var a=cx(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);$e=6,de=null}function Pg(e,n,a,o,u,d,x,b,F){e.cancelPendingCommit=null;do Il();while(fn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=uu,pi(e,a,d,x,b,F),e===Ve&&(de=Ve=null,ve=0),Jr=n,Aa=e,Ji=a,yf=d,xf=u,bg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sx(Rt,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=q.p,q.p=2,x=De,De|=4;try{ux(e,n,a)}finally{De=x,q.p=u,U.T=o}}fn=1,Bg(),Fg(),Ig()}}function Bg(){if(fn===1){fn=0;var e=Aa,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=q.p;q.p=2;var u=De;De|=4;try{_g(n,e);var d=zf,x=Ep(e.containerInfo),b=d.focusedElem,F=d.selectionRange;if(x!==b&&b&&b.ownerDocument&&Mp(b.ownerDocument.documentElement,b)){if(F!==null&&ru(b)){var et=F.start,dt=F.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var vt=b.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),It=b.textContent.length,Jt=Math.min(F.start,It),He=F.end===void 0?Jt:Math.min(F.end,It);!lt.extend&&Jt>He&&(x=He,He=Jt,Jt=x);var K=Sp(b,Jt),V=Sp(b,He);if(K&&V&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(K.node,K.offset),lt.removeAllRanges(),Jt>He?(lt.addRange(tt),lt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),lt.addRange(tt))}}}}for(vt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var mt=vt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ql=!!Of,zf=Of=null}finally{De=u,q.p=o,U.T=a}}e.current=n,fn=2}}function Fg(){if(fn===2){fn=0;var e=Aa,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=q.p;q.p=2;var u=De;De|=4;try{hg(e,n.alternate,n)}finally{De=u,q.p=o,U.T=a}}fn=3}}function Ig(){if(fn===4||fn===3){fn=0,at();var e=Aa,n=Jr,a=Ji,o=bg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Jr=Aa=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Rr(a),n=n.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=q.p,q.p=2,U.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];d(b.value,{componentStack:b.stack})}}finally{U.T=n,q.p=u}}(Ji&3)!==0&&Il(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Sf?mo++:(mo=0,Sf=e):mo=0,go(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zs(n)))}function Il(){return Bg(),Fg(),Ig(),Gg()}function Gg(){if(fn!==5)return!1;var e=Aa,n=yf;yf=0;var a=Rr(Ji),o=U.T,u=q.p;try{q.p=32>a?32:a,U.T=null,a=xf,xf=null;var d=Aa,x=Ji;if(fn=0,Jr=Aa=null,Ji=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,Mg(d.current),yg(d,d.current,x,a),De=b,go(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Qt,d)}catch{}return!0}finally{q.p=u,U.T=o,Hg(e,n)}}function Vg(e,n,a){n=ii(a,n),n=Ju(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(_n(e,2),Di(e))}function Oe(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ii(a,e),a=km(2),o=ya(n,a,2),o!==null&&(Xm(a,o,n,e),_n(o,2),Di(o));break}}n=n.return}}function Tf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new dx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(gf=!0,u.add(a),e=vx.bind(null,e,n,a),n.then(e,e))}function vx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ve&a)===a&&($e===4||$e===3&&(ve&62914560)===ve&&300>pt()-Nl?(De&2)===0&&$r(e,0):_f|=a,Qr===ve&&(Qr=0)),Di(e)}function kg(e,n){n===0&&(n=cn()),e=$a(e,n),e!==null&&(_n(e,n),Di(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function xx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function Sx(e,n){return kt(e,n)}var Hl=null,es=null,bf=!1,Gl=!1,Af=!1,Ca=0;function Di(e){e!==es&&e.next===null&&(es===null?Hl=es=e:es=es.next=e),Gl=!0,bf||(bf=!0,Ex())}function go(e,n){if(!Af&&Gl){Af=!0;do for(var a=!1,o=Hl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-ee(42|e)+1)-1,d&=u&~(x&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Yg(o,d))}else d=ve,d=wt(o,o===Ve?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ne(o,d)||(a=!0,Yg(o,d));o=o.next}while(a);Af=!1}}function Mx(){Xg()}function Xg(){Gl=bf=!1;var e=0;Ca!==0&&Nx()&&(e=Ca);for(var n=pt(),a=null,o=Hl;o!==null;){var u=o.next,d=Wg(o,n);d===0?(o.next=null,a===null?Hl=u:a.next=u,u===null&&(es=a)):(a=o,(e!==0||(d&3)!==0)&&(Gl=!0)),o=u}fn!==0&&fn!==5||go(e),Ca!==0&&(Ca=0)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-ee(d),b=1<<x,F=u[x];F===-1?((b&a)===0||(b&o)!==0)&&(u[x]=Ye(b,n)):F<=n&&(e.expiredLanes|=b),d&=~b}if(n=Ve,a=ve,a=wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&N(o),Rr(a)){case 2:case 8:a=Gt;break;case 32:a=Rt;break;case 268435456:a=_e;break;default:a=Rt}return o=qg.bind(null,e),a=kt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&N(o),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Il()&&e.callbackNode!==a)return null;var o=ve;return o=wt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Rg(e,o,n),Wg(e,pt()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(Il())return null;Rg(e,n,!0)}function Ex(){zx(function(){(De&6)!==0?kt(_t,Mx):Xg()})}function Rf(){if(Ca===0){var e=Hr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ca=e}return Ca}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=jg((u[vn]||null).action),x=o.submitter;x&&(n=(n=x[vn]||null)?jg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var b=new $o("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ca!==0){var F=x?Zg(u,x):new FormData(u);qu(a,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(b.preventDefault(),F=x?Zg(u,x):new FormData(u),qu(a,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],bx=wf.toLowerCase(),Ax=wf[0].toUpperCase()+wf.slice(1);_i(bx,"on"+Ax)}_i(Ap,"onAnimationEnd"),_i(Rp,"onAnimationIteration"),_i(Cp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Vy,"onTransitionRun"),_i(ky,"onTransitionStart"),_i(Xy,"onTransitionCancel"),_i(wp,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],F=b.instance,et=b.currentTarget;if(b=b.listener,F!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){nl(dt)}u.currentTarget=null,d=F}else for(x=0;x<o.length;x++){if(b=o[x],F=b.instance,et=b.currentTarget,b=b.listener,F!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){nl(dt)}u.currentTarget=null,d=F}}}}function pe(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function Df(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Vl]){e[Vl]=!0,Tt.forEach(function(a){a!=="selectionchange"&&(Rx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Df("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(A_(n)){case 2:var u=eS;break;case 8:u=nS;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Lf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=C(b),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=d=x;continue t}b=b.parentNode}}o=o.return}np(function(){var et=d,dt=jc(a),vt=[];t:{var it=Dp.get(e);if(it!==void 0){var lt=$o,It=e;switch(e){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":lt=xy;break;case"focusin":It="focus",lt=tu;break;case"focusout":It="blur",lt=tu;break;case"beforeblur":case"afterblur":lt=tu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ey;break;case Ap:case Rp:case Cp:lt=fy;break;case wp:lt=by;break;case"scroll":case"scrollend":lt=sy;break;case"wheel":lt=Ry;break;case"copy":case"cut":case"paste":lt=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=op;break;case"toggle":case"beforetoggle":lt=wy}var Jt=(n&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),K=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=et,tt;V!==null;){var mt=V;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||K===null||(mt=Fs(V,K),mt!=null&&Jt.push(vo(V,mt,tt))),He)break;V=V.return}0<Jt.length&&(it=new lt(it,It,null,a,dt),vt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Yc&&(It=a.relatedTarget||a.fromElement)&&(C(It)||It[Pi]))break t;if((lt||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(It=a.relatedTarget||a.toElement,lt=et,It=It?C(It):null,It!==null&&(He=c(It),Jt=It.tag,It!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(It=null)):(lt=null,It=et),lt!==It)){if(Jt=rp,mt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=op,mt="onPointerLeave",K="onPointerEnter",V="pointer"),He=lt==null?it:rt(lt),tt=It==null?it:rt(It),it=new Jt(mt,V+"leave",lt,a,dt),it.target=He,it.relatedTarget=tt,mt=null,C(dt)===et&&(Jt=new Jt(K,V+"enter",It,a,dt),Jt.target=tt,Jt.relatedTarget=He,mt=Jt),He=mt,lt&&It)e:{for(Jt=Cx,K=lt,V=It,tt=0,mt=K;mt;mt=Jt(mt))tt++;mt=0;for(var Zt=V;Zt;Zt=Jt(Zt))mt++;for(;0<tt-mt;)K=Jt(K),tt--;for(;0<mt-tt;)V=Jt(V),mt--;for(;tt--;){if(K===V||V!==null&&K===V.alternate){Jt=K;break e}K=Jt(K),V=Jt(V)}Jt=null}else Jt=null;lt!==null&&Jg(vt,it,lt,Jt,!1),It!==null&&He!==null&&Jg(vt,He,It,Jt,!0)}}t:{if(it=et?rt(et):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ae=mp;else if(dp(it))if(gp)Ae=Iy;else{Ae=By;var Ht=Py}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&qc(et.elementType)&&(Ae=mp):Ae=Fy;if(Ae&&(Ae=Ae(e,et))){pp(vt,Ae,a,dt);break t}Ht&&Ht(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(Ht=et?rt(et):window,e){case"focusin":(dp(Ht)||Ht.contentEditable==="true")&&(Lr=Ht,su=et,qs=null);break;case"focusout":qs=su=Lr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Tp(vt,a,dt);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":Tp(vt,a,dt)}var le;if(nu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ur?fp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(lp&&a.locale!=="ko"&&(Ur||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ur&&(le=ip()):(ha=dt,Qc="value"in ha?ha.value:ha.textContent,Ur=!0)),Ht=kl(et,ye),0<Ht.length&&(ye=new sp(ye,e,null,a,dt),vt.push({event:ye,listeners:Ht}),le?ye.data=le:(le=hp(a),le!==null&&(ye.data=le)))),(le=Uy?Ly(e,a):Ny(e,a))&&(ye=kl(et,"onBeforeInput"),0<ye.length&&(Ht=new sp("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Ht,listeners:ye}),Ht.data=le)),Tx(vt,e,et,a,dt)}Kg(vt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fs(e,a),u!=null&&o.unshift(vo(e,u,d)),u=Fs(e,n),u!=null&&o.push(vo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Cx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var b=a,F=b.alternate,et=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||et===null||(F=et,u?(et=Fs(a,d),et!=null&&x.unshift(vo(a,et,F))):u||(et=Fs(a,d),et!=null&&x.push(vo(a,et,F)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var wx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(wx,`
`).replace(Dx,"")}function t_(e,n){return n=$g(n),$g(e)===n}function Ie(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,o);break;case"style":tp(e,o,d);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Zo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Zo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ay.get(a)||a,Se(e,a,o))}}function Nf(e,n,a,o,u,d){switch(a){case"style":tp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&Pn(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[vn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,d,x,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=d=x=u=null,F=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":F=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Ie(e,n,o,dt,a,null)}}Ln(e,d,b,F,et,x,u,!1);return;case"select":pe("invalid",e),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Ie(e,n,u,b,a,null)}n=d,a=x,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":pe("invalid",e),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ie(e,n,x,b,a,null)}Cr(e,o,u,d);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,F,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<_o.length;o++)pe(_o[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(e,n,et,o,a,null)}return;default:if(qc(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Nf(e,n,dt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ie(e,n,b,o,a,null))}function Ux(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,b=null,F=null,et=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=vt;default:o.hasOwnProperty(lt)||Ie(e,n,lt,null,o,vt)}}for(var it in o){var lt=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(lt!=null||vt!=null))switch(it){case"type":d=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==vt&&Ie(e,n,it,lt,o,vt)}}Be(e,x,b,F,et,dt,d,u);return;case"select":lt=x=b=it=null;for(d in a)if(F=a[d],a.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":lt=F;default:o.hasOwnProperty(d)||Ie(e,n,d,null,o,F)}for(u in o)if(d=o[u],F=a[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":it=d;break;case"defaultValue":b=d;break;case"multiple":x=d;default:d!==F&&Ie(e,n,u,d,o,F)}n=b,a=x,o=lt,it!=null?Qe(e,!!a,it,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,n,b,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ie(e,n,x,u,o,d)}yn(e,it,lt);return;case"option":for(var It in a)if(it=a[It],a.hasOwnProperty(It)&&it!=null&&!o.hasOwnProperty(It))switch(It){case"selected":e.selected=!1;break;default:Ie(e,n,It,null,o,it)}for(F in o)if(it=o[F],lt=a[F],o.hasOwnProperty(F)&&it!==lt&&(it!=null||lt!=null))switch(F){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ie(e,n,F,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!o.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,o,it);for(et in o)if(it=o[et],lt=a[et],o.hasOwnProperty(et)&&it!==lt&&(it!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ie(e,n,et,it,o,lt)}return;default:if(qc(n)){for(var He in a)it=a[He],a.hasOwnProperty(He)&&it!==void 0&&!o.hasOwnProperty(He)&&Nf(e,n,He,void 0,o,it);for(dt in o)it=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||it===lt||it===void 0&&lt===void 0||Nf(e,n,dt,it,o,lt);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!o.hasOwnProperty(K)&&Ie(e,n,K,null,o,it);for(vt in o)it=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||it===lt||it==null&&lt==null||Ie(e,n,vt,it,o,lt)}function e_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,b=u.duration;if(d&&b&&e_(x)){for(x=0,b=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],et=F.startTime;if(et>b)break;var dt=F.transferSize,vt=F.initiatorType;dt&&e_(vt)&&(F=F.responseEnd,x+=dt*(F<b?1:(b-et)/(F-et)))}if(--o,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,zf=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function Nx(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var a_=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(e){return r_.resolve(null).then(e).catch(Px)}:a_;function Px(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function s_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),rs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var d=a.firstChild;d;){var x=d.nextSibling,b=d.nodeName;d[Za]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&yo(e.ownerDocument.body);a=u}while(a);rs(n)}function o_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function Fx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function l_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function If(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ix(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function c_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function u_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function f_(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Bs(e)}var ci=new Map,h_=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=q.d;q.d={f:Hx,r:Gx,D:Vx,C:kx,L:Xx,m:Wx,X:Yx,S:qx,M:jx};function Hx(){var e=$i.f(),n=Pl();return e||n}function Gx(e){var n=Z(e);n!==null&&n.tag===5&&n.type==="form"?wm(n):$i.r(e)}var ns=typeof document>"u"?null:document;function d_(e,n,a){var o=ns;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),h_.has(u)||(h_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),Y(n),o.head.appendChild(n)))}}function Vx(e){$i.D(e),d_("dns-prefetch",e,null)}function kx(e,n){$i.C(e,n),d_("preconnect",e,n)}function Xx(e,n,a){$i.L(e,n,a);var o=ns;if(o&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var d=u;switch(n){case"style":d=is(e);break;case"script":d=as(e)}ci.has(d)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xo(d))||n==="script"&&o.querySelector(So(d))||(n=o.createElement("link"),En(n,"link",e),Y(n),o.head.appendChild(n)))}}function Wx(e,n){$i.m(e,n);var a=ns;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=as(e)}if(!ci.has(d)&&(e=_({rel:"modulepreload",href:e},n),ci.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(d)))return}o=a.createElement("link"),En(o,"link",e),Y(o),a.head.appendChild(o)}}}function qx(e,n,a){$i.S(e,n,a);var o=ns;if(o&&e){var u=st(o).hoistableStyles,d=is(e);n=n||"default";var x=u.get(d);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(xo(d)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(d))&&Vf(e,a);var F=x=o.createElement("link");Y(F),En(F,"link",e),F._p=new Promise(function(et,dt){F.onload=et,F.onerror=dt}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,ql(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(d,x)}}}function Yx(e,n){$i.X(e,n);var a=ns;if(a&&e){var o=st(a).hoistableScripts,u=as(e),d=o.get(u);d||(d=a.querySelector(So(u)),d||(e=_({src:e,async:!0},n),(n=ci.get(u))&&kf(e,n),d=a.createElement("script"),Y(d),En(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function jx(e,n){$i.M(e,n);var a=ns;if(a&&e){var o=st(a).hoistableScripts,u=as(e),d=o.get(u);d||(d=a.querySelector(So(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&kf(e,n),d=a.createElement("script"),Y(d),En(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function p_(e,n,a,o){var u=(u=St.current)?Wl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=st(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var d=st(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(xo(e)))&&!d._p&&(x.instance=d,x.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),d||Zx(u,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=st(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+pn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function m_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Zx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),Y(n),e.head.appendChild(n))}function as(e){return'[src="'+pn(e)+'"]'}function So(e){return"script[async]"+e}function g_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),En(o,"style",u),ql(o,a.precedence,e),n.instance=o;case"stylesheet":u=is(a.href);var d=e.querySelector(xo(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=m_(a),(u=ci.get(u))&&Vf(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var x=d;return x._p=new Promise(function(b,F){x.onload=b,x.onerror=F}),En(d,"link",o),n.state.loading|=4,ql(d,a.precedence,e),n.instance=d;case"script":return d=as(a.src),(u=e.querySelector(So(d)))?(n.instance=u,Y(u),u):(o=a,(u=ci.get(d))&&(o=_({},a),kf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ql(o,a.precedence,e));return n.instance}function ql(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function __(e,n,a){if(Yl===null){var o=new Map,u=Yl=new Map;u.set(a,o)}else u=Yl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Za]||d[Ke]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(d):o.set(x,[d])}}return o}function v_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Kx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function y_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qx(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=is(o.href),d=n.querySelector(xo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,Y(d);return}d=n.ownerDocument||n,o=m_(o),(u=ci.get(u))&&Vf(o,u),d=d.createElement("link"),Y(d);var x=d;x._p=new Promise(function(b,F){x.onload=b,x.onerror=F}),En(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function Jx(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*Lx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach($x,e),Zl=null,jl.call(e))}function $x(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var o=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=jl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function tS(e,n,a,o,u,d,x,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function x_(e,n,a,o,u,d,x,b,F,et,dt,vt){return e=new tS(e,n,a,x,F,et,dt,vt,b),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),e.current=d,d.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Au(d),e}function S_(e){return e?(e=zr,e):zr}function M_(e,n,a,o,u,d){u=S_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=ya(e,o,n),a!==null&&(Vn(a,e,n),$s(a,e,n))}function E_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){E_(e,n),(e=e.alternate)&&E_(e,n)}function T_(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Vn(n,e,67108864),Wf(e,67108864)}}function b_(e){if(e.tag===13||e.tag===31){var n=Jn();n=Ya(n);var a=$a(e,n);a!==null&&Vn(a,e,n),Wf(e,n)}}var Ql=!0;function eS(e,n,a,o){var u=U.T;U.T=null;var d=q.p;try{q.p=2,qf(e,n,a,o)}finally{q.p=d,U.T=u}}function nS(e,n,a,o){var u=U.T;U.T=null;var d=q.p;try{q.p=8,qf(e,n,a,o)}finally{q.p=d,U.T=u}}function qf(e,n,a,o){if(Ql){var u=Yf(o);if(u===null)Lf(e,n,o,Jl,a),R_(e,o);else if(aS(u,e,n,a,o))o.stopPropagation();else if(R_(e,o),n&4&&-1<iS.indexOf(e)){for(;u!==null;){var d=Z(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=At(d.pendingLanes);if(x!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var F=1<<31-ee(x);b.entanglements[1]|=F,x&=~F}Di(d),(De&6)===0&&(Ol=pt()+500,go(0))}}break;case 31:case 13:b=$a(d,2),b!==null&&Vn(b,d,2),Pl(),Wf(d,2)}if(d=Yf(o),d===null&&Lf(e,n,o,Jl,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Lf(e,n,o,null,a)}}function Yf(e){return e=jc(e),jf(e)}var Jl=null;function jf(e){if(Jl=null,e=C(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function A_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case _t:return 2;case Gt:return 8;case Rt:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Zf=!1,Da=null,Ua=null,La=null,Eo=new Map,To=new Map,Na=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Z(n),n!==null&&T_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function aS(e,n,a,o,u){switch(n){case"focusin":return Da=bo(Da,e,n,a,o,u),!0;case"dragenter":return Ua=bo(Ua,e,n,a,o,u),!0;case"mouseover":return La=bo(La,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Eo.set(d,bo(Eo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,To.set(d,bo(To.get(d)||null,e,n,a,o,u)),!0}return!1}function C_(e){var n=C(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ja(e.priority,function(){b_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,ja(e.priority,function(){b_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Yc=o,a.target.dispatchEvent(o),Yc=null}else return n=Z(a),n!==null&&T_(n),e.blockedOn=a,!1;n.shift()}return!0}function w_(e,n,a){$l(e)&&a.delete(n)}function rS(){Zf=!1,Da!==null&&$l(Da)&&(Da=null),Ua!==null&&$l(Ua)&&(Ua=null),La!==null&&$l(La)&&(La=null),Eo.forEach(w_),To.forEach(w_)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,rS)))}var ec=null;function D_(e){ec!==e&&(ec=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var d=Z(a);d!==null&&(e.splice(n,3),n-=3,qu(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function rs(e){function n(F){return tc(F,e)}Da!==null&&tc(Da,e),Ua!==null&&tc(Ua,e),La!==null&&tc(La,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)C_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[vn]||null;if(typeof d=="function")x||D_(a);else if(x){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[vn]||null)b=x.formAction;else if(jf(u)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),D_(a)}}}function U_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Kf(e){this._internalRoot=e}nc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();M_(a,o,e,n,null,null)},nc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;M_(e.current,2,null,e,null,null),Pl(),n[Pi]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=zs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&C_(e)}};var L_=t.version;if(L_!=="19.2.7")throw Error(r(527,L_,"19.2.7"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var sS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Qt=ic.inject(sS),Vt=ic}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Im,d=Hm,x=Gm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=x_(e,1,!1,null,null,a,o,null,u,d,x,U_),e[Pi]=n.current,Uf(e),new Kf(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=Im,x=Hm,b=Gm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=x_(e,1,!0,n,a??null,o,u,F,d,x,b,U_),n.context=S_(null),a=n.current,o=Jn(),o=Ya(o),u=va(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,_n(n,a),Di(n),e[Pi]=n.current,Uf(e),new nc(n)},Ro.version="19.2.7",Ro}var V_;function vS(){if(V_)return $f.exports;V_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=_S(),$f.exports}var yS=vS();const xS="modulepreload",SS=function(s){return"/makemecubemaster/"+s},k_={},MS=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));l=f(i.map(m=>{if(m=SS(m),m in k_)return;k_[m]=!0;const g=m.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":xS,g||(v.as="script"),v.crossOrigin="",v.href=m,p&&v.setAttribute("nonce",p),document.head.appendChild(v),g)return new Promise((S,E)=>{v.addEventListener("load",S),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function ES(s={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:r,onOfflineReady:l,onRegistered:c,onRegisteredSW:f,onRegisterError:h}=s;let p,m;const g=async(v=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(p=await MS(async()=>{const{Workbox:v}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:v}},[]).then(({Workbox:v})=>new v("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(v=>{h==null||h(v)}),!p)return;p.addEventListener("activated",v=>{(v.isUpdate||v.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",v=>{v.isUpdate||l==null||l()}),p.register({immediate:t}).then(v=>{f?f("/makemecubemaster/sw.js",v):c==null||c(v)}).catch(v=>{h==null||h(v)})}}return m=_(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="175",TS=0,X_=1,bS=2,n0=1,AS=2,ra=3,Wa=0,Xn=1,Li=2,Va=0,Ms=1,W_=2,q_=3,Y_=4,RS=5,xr=100,CS=101,wS=102,DS=103,US=104,LS=200,NS=201,OS=202,zS=203,Xh=204,Wh=205,PS=206,BS=207,FS=208,IS=209,HS=210,GS=211,VS=212,kS=213,XS=214,qh=0,Yh=1,jh=2,Ts=3,Zh=4,Kh=5,Qh=6,Jh=7,i0=0,WS=1,qS=2,ka=0,YS=1,jS=2,ZS=3,KS=4,QS=5,JS=6,$S=7,a0=300,bs=301,As=302,$h=303,td=304,Ic=306,ed=1e3,Mr=1001,nd=1002,bi=1003,tM=1004,ac=1005,Ni=1006,ih=1007,Er=1008,ca=1009,r0=1010,s0=1011,Bo=1012,Od=1013,br=1014,sa=1015,Go=1016,zd=1017,Pd=1018,Fo=1020,o0=35902,l0=1021,c0=1022,Ti=1023,u0=1024,f0=1025,Io=1026,Ho=1027,h0=1028,Bd=1029,d0=1030,Fd=1031,Id=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,id=35840,ad=35841,rd=35842,sd=35843,od=36196,ld=37492,cd=37496,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,yd=37817,xd=37818,Sd=37819,Md=37820,Ed=37821,Uc=36492,Td=36494,bd=36495,p0=36283,Ad=36284,Rd=36285,Cd=36286,eM=3200,nM=3201,iM=0,aM=1,Ga="",hi="srgb",Rs="srgb-linear",Oc="linear",Ge="srgb",ss=7680,j_=519,rM=512,sM=513,oM=514,m0=515,lM=516,cM=517,uM=518,fM=519,Z_=35044,K_="300 es",oa=2e3,zc=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,wd=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function hM(s,t){return(s%t+t)%t}function rh(s,t,i){return(1-i)*s+i*t}function Co(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,i=0){te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,r,l,c,f,h,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m)}set(t,i,r,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],T=l[0],M=l[3],y=l[6],P=l[1],L=l[4],w=l[7],k=l[2],B=l[5],z=l[8];return c[0]=f*T+h*P+p*k,c[3]=f*M+h*L+p*B,c[6]=f*y+h*w+p*z,c[1]=m*T+g*P+_*k,c[4]=m*M+g*L+_*B,c[7]=m*y+g*w+_*z,c[2]=v*T+S*P+E*k,c[5]=v*M+S*L+E*B,c[8]=v*y+S*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-r*c*g+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,v=h*p-g*c,S=m*c-f*p,E=i*_+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*m-g*r)*T,t[2]=(h*r-l*f)*T,t[3]=v*T,t[4]=(g*i-l*p)*T,t[5]=(l*c-h*i)*T,t[6]=S*T,t[7]=(r*p-m*i)*T,t[8]=(f*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(sh.makeScale(t,i)),this}rotate(t){return this.premultiply(sh.makeRotation(-t)),this}translate(t,i){return this.premultiply(sh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new ce;function g0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dM(){const s=Pc("canvas");return s.style.display="block",s}const Q_={};function Lc(s){s in Q_||(Q_[s]=!0,console.warn(s))}function pM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function mM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const J_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Oc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:r,transfer:Oc,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Ce=_M();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class vM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Pc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(oh(l[f].image)):c.push(oh(l[f]))}else c=oh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function oh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xM=0;class Wn extends Ds{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,r=Mr,l=Mr,c=Ni,f=Er,h=Ti,p=ca,m=Wn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Vo(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ed:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ed:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=a0;Wn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],E=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(S+1)/2,k=(y+1)/2,B=(g+v)/4,z=(_+T)/4,W=(E+M)/4;return L>w&&L>k?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=B/r,c=z/r):w>k?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=B/l,c=W/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=z/c,l=W/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(_-T)/P,this.z=(v-g)/P,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends Ds{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends SM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class _0 extends Wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(_!==T||p!==v||m!==S||g!==E){let M=1-h;const y=p*v+m*S+g*E+_*T,P=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const k=Math.sqrt(L),B=Math.atan2(k,y*P);M=Math.sin(M*B)/k,h=Math.sin(h*B)/k}const w=h*P;if(p=p*M+v*w,m=m*M+S*w,g=g*M+E*w,_=_*M+T*w,M===1-h){const k=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=k,m*=k,g*=k,_*=k}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*_+p*S-m*v,t[i+1]=p*E+g*v+m*_-h*S,t[i+2]=m*E+g*S+h*v-p*_,t[i+3]=g*E-h*_-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),_=h(c/2),v=p(r/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"YZX":this._x=v*g*_+m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_-v*S*E;break;case"XZY":this._x=v*g*_-m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=r+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-r*m,this._z=c*g+f*m+r*p-l*h,this._w=f*g-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(tv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(tv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),g=2*(h*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-h*g,this.y=r+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new Q,tv=new ko;class Xo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),sc.subVectors(this.max,wo),ls.subVectors(t.a,wo),cs.subVectors(t.b,wo),us.subVectors(t.c,wo),za.subVectors(cs,ls),Pa.subVectors(us,cs),hr.subVectors(ls,us);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-hr.z,hr.y,za.z,0,-za.x,Pa.z,0,-Pa.x,hr.z,0,-hr.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-hr.y,hr.x,0];return!ch(i,ls,cs,us,sc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,ls,cs,us,sc))?!1:(oc.crossVectors(za,Pa),i=[oc.x,oc.y,oc.z],ch(i,ls,cs,us,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xi=new Q,rc=new Xo,ls=new Q,cs=new Q,us=new Q,za=new Q,Pa=new Q,hr=new Q,wo=new Q,sc=new Q,oc=new Q,dr=new Q;function ch(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){dr.fromArray(s,c);const h=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),p=t.dot(dr),m=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const EM=new Xo,Do=new Q,uh=new Q;class Gd{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):EM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(uh)),this.expandByPoint(Do.copy(t.center).sub(uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Q,fh=new Q,lc=new Q,Ba=new Q,hh=new Q,cc=new Q,dh=new Q;class TM{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){fh.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(lc),h=Ba.dot(this.direction),p=-Ba.dot(lc),m=Ba.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*p-h,v=f*h-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,S=_*(_+f*v+2*h)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(fh).addScaledVector(lc,v),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,c){hh.subVectors(i,t),cc.subVectors(r,t),dh.crossVectors(hh,cc);let f=this.direction.dot(dh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ba.subVectors(this.origin,t);const p=h*this.direction.dot(cc.crossVectors(Ba,cc));if(p<0)return null;const m=h*this.direction.dot(hh.cross(Ba));if(m<0||p+m>f)return null;const g=-h*Ba.dot(dh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,c,f,h,p,m,g,_,v,S,E,T,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m,g,_,v,S,E,T,M)}set(t,i,r,l,c,f,h,p,m,g,_,v,S,E,T,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),c=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=h*g,T=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+E*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*_,E=m*g,T=m*_;i[0]=v+T*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+v*h,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*_,E=m*g,T=m*_;i[0]=v-T*h,i[4]=-f*_,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=h*g,T=h*_;i[0]=p*g,i[4]=E*m-S,i[8]=v*m+T,i[1]=p*_,i[5]=T*m+v,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=T-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*_+E,i[10]=v-T*_}else if(t.order==="XZY"){const v=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+T,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=h*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bM,t,AM)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fa.crossVectors(r,$n),Fa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fa.crossVectors(r,$n)),Fa.normalize(),uc.crossVectors($n,Fa),l[0]=Fa.x,l[4]=uc.x,l[8]=$n.x,l[1]=Fa.y,l[5]=uc.y,l[9]=$n.y,l[2]=Fa.z,l[6]=uc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],T=r[6],M=r[10],y=r[14],P=r[3],L=r[7],w=r[11],k=r[15],B=l[0],z=l[4],W=l[8],D=l[12],R=l[1],G=l[5],nt=l[9],$=l[13],ot=l[2],gt=l[6],U=l[10],q=l[14],I=l[3],ft=l[7],xt=l[11],O=l[15];return c[0]=f*B+h*R+p*ot+m*I,c[4]=f*z+h*G+p*gt+m*ft,c[8]=f*W+h*nt+p*U+m*xt,c[12]=f*D+h*$+p*q+m*O,c[1]=g*B+_*R+v*ot+S*I,c[5]=g*z+_*G+v*gt+S*ft,c[9]=g*W+_*nt+v*U+S*xt,c[13]=g*D+_*$+v*q+S*O,c[2]=E*B+T*R+M*ot+y*I,c[6]=E*z+T*G+M*gt+y*ft,c[10]=E*W+T*nt+M*U+y*xt,c[14]=E*D+T*$+M*q+y*O,c[3]=P*B+L*R+w*ot+k*I,c[7]=P*z+L*G+w*gt+k*ft,c[11]=P*W+L*nt+w*U+k*xt,c[15]=P*D+L*$+w*q+k*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],T=t[7],M=t[11],y=t[15];return E*(+c*p*_-l*m*_-c*h*v+r*m*v+l*h*S-r*p*S)+T*(+i*p*S-i*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+M*(+i*m*_-i*h*S-c*f*_+r*f*S+c*h*g-r*m*g)+y*(-l*h*g-i*p*_+i*h*v+l*f*_-r*f*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],T=t[13],M=t[14],y=t[15],P=_*M*m-T*v*m+T*p*S-h*M*S-_*p*y+h*v*y,L=E*v*m-g*M*m-E*p*S+f*M*S+g*p*y-f*v*y,w=g*T*m-E*_*m+E*h*S-f*T*S-g*h*y+f*_*y,k=E*_*p-g*T*p-E*h*v+f*T*v+g*h*M-f*_*M,B=i*P+r*L+l*w+c*k;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(T*v*c-_*M*c-T*l*S+r*M*S+_*l*y-r*v*y)*z,t[2]=(h*M*c-T*p*c+T*l*m-r*M*m-h*l*y+r*p*y)*z,t[3]=(_*p*c-h*v*c-_*l*m+r*v*m+h*l*S-r*p*S)*z,t[4]=L*z,t[5]=(g*M*c-E*v*c+E*l*S-i*M*S-g*l*y+i*v*y)*z,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*y-i*p*y)*z,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*S+i*p*S)*z,t[8]=w*z,t[9]=(E*_*c-g*T*c-E*r*S+i*T*S+g*r*y-i*_*y)*z,t[10]=(f*T*c-E*h*c+E*r*m-i*T*m-f*r*y+i*h*y)*z,t[11]=(g*h*c-f*_*c-g*r*m+i*_*m+f*r*S-i*h*S)*z,t[12]=k*z,t[13]=(g*T*l-E*_*l+E*r*v-i*T*v-g*r*M+i*_*M)*z,t[14]=(E*h*l-f*T*l-E*r*p+i*T*p+f*r*M-i*h*M)*z,t[15]=(f*_*l-g*h*l+g*r*p-i*_*p-f*r*v+i*h*v)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,_=h+h,v=c*m,S=c*g,E=c*_,T=f*g,M=f*_,y=h*_,P=p*m,L=p*g,w=p*_,k=r.x,B=r.y,z=r.z;return l[0]=(1-(T+y))*k,l[1]=(S+w)*k,l[2]=(E-L)*k,l[3]=0,l[4]=(S-w)*B,l[5]=(1-(v+y))*B,l[6]=(M+P)*B,l[7]=0,l[8]=(E+L)*z,l[9]=(M-P)*z,l[10]=(1-(v+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=fs.set(l[0],l[1],l[2]).length();const f=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const m=1/c,g=1/f,_=1/h;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),v=(r+l)/(r-l);let S,E;if(h===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===zc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(f-c),v=(i+t)*m,S=(r+l)*g;let E,T;if(h===oa)E=(f+c)*_,T=-2*_;else if(h===zc)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new Q,Si=new Ze,bM=new Q(0,0,0),AM=new Q(1,1,1),Fa=new Q,uc=new Q,$n=new Q,ev=new Ze,nv=new ko;class ua{constructor(t=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ev.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ev,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return nv.setFromEuler(this),this.setFromQuaternion(nv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class v0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let RM=0;const iv=new Q,hs=new ko,na=new Ze,fc=new Q,Uo=new Q,CM=new Q,wM=new ko,av=new Q(1,0,0),rv=new Q(0,1,0),sv=new Q(0,0,1),ov={type:"added"},DM={type:"removed"},ds={type:"childadded",child:null},ph={type:"childremoved",child:null};class wn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Q,i=new ua,r=new ko,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ce}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(av,t)}rotateY(t){return this.rotateOnAxis(rv,t)}rotateZ(t){return this.rotateOnAxis(sv,t)}translateOnAxis(t,i){return iv.copy(t).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(av,t)}translateY(t){return this.translateOnAxis(rv,t)}translateZ(t){return this.translateOnAxis(sv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fc.copy(t):fc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Uo,fc,this.up):na.lookAt(fc,Uo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(na),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ov),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(DM),ph.child=t,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ov),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,CM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,wM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Q,ia=new Q,mh=new Q,aa=new Q,ps=new Q,ms=new Q,lv=new Q,gh=new Q,_h=new Q,vh=new Q,yh=new tn,xh=new tn,Sh=new tn;class Ei{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Mi.subVectors(l,i),ia.subVectors(r,i),mh.subVectors(t,i);const f=Mi.dot(Mi),h=Mi.dot(ia),p=Mi.dot(mh),m=ia.dot(ia),g=ia.dot(mh),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(m*p-h*g)*v,E=(f*g-h*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,c,f,h,p){return this.getBarycoord(t,i,r,l,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,aa.x),p.addScaledVector(f,aa.y),p.addScaledVector(h,aa.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return yh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),yh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,r),Sh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(yh,c.x),f.addScaledVector(xh,c.y),f.addScaledVector(Sh,c.z),f}static isFrontFacing(t,i,r,l){return Mi.subVectors(r,i),ia.subVectors(t,i),Mi.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Mi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;ps.subVectors(l,r),ms.subVectors(c,r),gh.subVectors(t,r);const p=ps.dot(gh),m=ms.dot(gh);if(p<=0&&m<=0)return i.copy(r);_h.subVectors(t,l);const g=ps.dot(_h),_=ms.dot(_h);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ps,f);vh.subVectors(t,c);const S=ps.dot(vh),E=ms.dot(vh);if(E>=0&&S<=E)return i.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(ms,h);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return lv.subVectors(c,l),h=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(lv,h);const y=1/(M+T+v);return f=T*y,h=v*y,i.copy(r).addScaledVector(ps,f).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Mh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ze{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=hM(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Mh(f,c,t+1/3),this.g=Mh(f,c,t),this.b=Mh(f,c,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=hi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const r=y0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Ce.fromWorkingColorSpace(Cn.copy(this),t),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=hi){Ce.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(hc);const r=rh(Ia.h,hc.h,i),l=rh(Ia.s,hc.s,i),c=rh(Ia.l,hc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ze;ze.NAMES=y0;let UM=0;class Hc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Ms,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bc extends Hc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new Q,dc=new te;let LM=0;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Z_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Z_&&(t.usage=this.usage),t}}class x0 extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class S0 extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Dn extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let NM=0;const ui=new Ze,Eh=new wn,gs=new Q,ti=new Xo,Lo=new Xo,gn=new Q;class zi extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g0(t)?S0:x0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Dn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ti.min,Lo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Lo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Lo.min),ti.expandByPoint(Lo.max))}ti.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)gn.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(t,m),gn.add(gs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let W=0;W<r.count;W++)h[W]=new Q,p[W]=new Q;const m=new Q,g=new Q,_=new Q,v=new te,S=new te,E=new te,T=new Q,M=new Q;function y(W,D,R){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,R),v.fromBufferAttribute(c,W),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),g.sub(m),_.sub(m),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(G),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(T),h[D].add(T),h[R].add(T),p[W].add(M),p[D].add(M),p[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let W=0,D=P.length;W<D;++W){const R=P[W],G=R.start,nt=R.count;for(let $=G,ot=G+nt;$<ot;$+=3)y(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new Q,w=new Q,k=new Q,B=new Q;function z(W){k.fromBufferAttribute(l,W),B.copy(k);const D=h[W];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),w.crossVectors(B,D);const G=w.dot(p[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,D=P.length;W<D;++W){const R=P[W],G=R.start,nt=R.count;for(let $=G,ot=G+nt;$<ot;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new Q,c=new Q,f=new Q,h=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,M),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let y=0;y<g;y++)v[E++]=m[S++]}return new Oi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=t(v,r);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new Ze,pr=new TM,pc=new Gd,uv=new Q,mc=new Q,gc=new Q,_c=new Q,Th=new Q,vc=new Q,fv=new Q,yc=new Q;class ei extends wn{constructor(t=new zi,i=new Bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){vc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(Th.fromBufferAttribute(_,t),f?vc.addScaledVector(Th,g):vc.addScaledVector(Th.sub(i),g))}i.add(vc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(pc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(pc,uv)===null||pr.origin.distanceToSquared(uv)>(t.far-t.near)**2))&&(cv.copy(c).invert(),pr.copy(t.ray).applyMatrix4(cv),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),L=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,k=L;w<k;w+=3){const B=h.getX(w),z=h.getX(w+1),W=h.getX(w+2);l=xc(this,y,t,r,m,g,_,B,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const P=h.getX(M),L=h.getX(M+1),w=h.getX(M+2);l=xc(this,f,t,r,m,g,_,P,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,k=L;w<k;w+=3){const B=w,z=w+1,W=w+2;l=xc(this,y,t,r,m,g,_,B,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const P=M,L=M+1,w=M+2;l=xc(this,f,t,r,m,g,_,P,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function OM(s,t,i,r,l,c,f,h){let p;if(t.side===Xn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===Wa,h),p===null)return null;yc.copy(h),yc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(yc);return m<i.near||m>i.far?null:{distance:m,point:yc.clone(),object:s}}function xc(s,t,i,r,l,c,f,h,p,m){s.getVertexPosition(h,mc),s.getVertexPosition(p,gc),s.getVertexPosition(m,_c);const g=OM(s,t,i,r,mc,gc,_c,fv);if(g){const _=new Q;Ei.getBarycoord(fv,mc,gc,_c,_),l&&(g.uv=Ei.getInterpolatedAttribute(l,h,p,m,_,new te)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,h,p,m,_,new te)),f&&(g.normal=Ei.getInterpolatedAttribute(f,h,p,m,_,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Q,materialIndex:0};Ei.getNormal(mc,gc,_c,v.normal),g.face=v,g.barycoord=_}return g}class Wo extends zi{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(_,2));function E(T,M,y,P,L,w,k,B,z,W,D){const R=w/z,G=k/W,nt=w/2,$=k/2,ot=B/2,gt=z+1,U=W+1;let q=0,I=0;const ft=new Q;for(let xt=0;xt<U;xt++){const O=xt*G-$;for(let J=0;J<gt;J++){const ht=J*R-nt;ft[T]=ht*P,ft[M]=O*L,ft[y]=ot,m.push(ft.x,ft.y,ft.z),ft[T]=0,ft[M]=0,ft[y]=B>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(J/z),_.push(1-xt/W),q+=1}}for(let xt=0;xt<W;xt++)for(let O=0;O<z;O++){const J=v+O+gt*xt,ht=v+O+gt*(xt+1),X=v+(O+1)+gt*(xt+1),ct=v+(O+1)+gt*xt;p.push(J,ht,ct),p.push(ht,X,ct),I+=6}h.addGroup(S,I,D),S+=I,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const r=Cs(s[i]);for(const l in r)t[l]=r[l]}return t}function zM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function M0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const PM={clone:Cs,merge:On};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Hc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=zM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class E0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new Q,hv=new te,dv=new te;class di extends E0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,hv,dv),i.subVectors(dv,hv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ah*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class IM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(_s,vs,t,i);l.layers=this.layers,this.add(l);const c=new di(_s,vs,t,i);c.layers=this.layers,this.add(c);const f=new di(_s,vs,t,i);f.layers=this.layers,this.add(f);const h=new di(_s,vs,t,i);h.layers=this.layers,this.add(h);const p=new di(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new di(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class T0 extends Wn{constructor(t=[],i=bs,r,l,c,f,h,p,m,g){super(t,i,r,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class HM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new T0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Va});c.uniforms.tEquirect.value=i;const f=new ei(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ni),new IM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Tr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),y=this._getHandJoint(m,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class VM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ah=new Q,kM=new Q,XM=new ce;class vr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ah.subVectors(r,i).cross(kM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ah),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||XM.getNormalMatrix(t),l=this.coplanarPoint(Ah).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Gd,Sc=new Q;class Vd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,c=new vr,f=new vr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],T=l[10],M=l[11],y=l[12],P=l[13],L=l[14],w=l[15];if(r[0].setComponents(p-c,v-m,M-S,w-y).normalize(),r[1].setComponents(p+c,v+m,M+S,w+y).normalize(),r[2].setComponents(p+f,v+g,M+E,w+P).normalize(),r[3].setComponents(p-f,v-g,M-E,w-P).normalize(),r[4].setComponents(p-h,v-_,M-T,w-L).normalize(),i===oa)r[5].setComponents(p+h,v+_,M+T,w+L).normalize();else if(i===zc)r[5].setComponents(h,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Sc.x=l.normal.x>0?t.max.x:t.min.x,Sc.y=l.normal.y>0?t.max.y:t.min.y,Sc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b0 extends Wn{constructor(t,i,r=br,l,c,f,h=bi,p=bi,m,g=Io){if(g!==Io&&g!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=r[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(c-1);const g=r[l],v=r[l+1]-g,S=(f-g)/v;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),p=i||(f.isVector2?new te:new Q);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new Q,l=[],c=[],f=[],h=new Q,p=new Ze;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Q)}c[0]=new Q,f[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),v<=m&&r.set(0,0,1),h.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class A0 extends fa{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new te){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*g-S*_+this.aX,m=v*_+S*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class WM extends A0{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function kd(){let s=0,t=0,i=0,r=0;function l(c,f,h,p){s=c,t=h,i=-3*c+3*f-2*h-p,r=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){l(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,_){let v=(f-c)/m-(h-c)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+_)+(p-h)/_;v*=g,S*=g,l(f,h,v,S)},calc:function(c){const f=c*c,h=f*c;return s+t*c+i*f+r*h}}}const Mc=new Q,Rh=new kd,Ch=new kd,wh=new kd;class R0 extends fa{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new Q){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%c]:(Mc.subVectors(l[0],l[1]).add(l[0]),m=Mc);const _=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Mc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Mc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),T=Math.pow(_.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Rh.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,E,T,M),Ch.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,E,T,M),wh.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,E,T,M)}else this.curveType==="catmullrom"&&(Rh.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),Ch.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),wh.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return r.set(Rh.calc(p),Ch.calc(p),wh.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pv(s,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,h=s*s,p=s*h;return(2*i-2*r+c+f)*p+(-3*i+3*r-2*c-f)*h+c*s+i}function qM(s,t){const i=1-s;return i*i*t}function YM(s,t){return 2*(1-s)*s*t}function jM(s,t){return s*s*t}function zo(s,t,i,r){return qM(s,t)+YM(s,i)+jM(s,r)}function ZM(s,t){const i=1-s;return i*i*i*t}function KM(s,t){const i=1-s;return 3*i*i*s*t}function QM(s,t){return 3*(1-s)*s*s*t}function JM(s,t){return s*s*s*t}function Po(s,t,i,r,l){return ZM(s,t)+KM(s,i)+QM(s,r)+JM(s,l)}class $M extends fa{constructor(t=new te,i=new te,r=new te,l=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new te){const r=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return r.set(Po(t,l.x,c.x,f.x,h.x),Po(t,l.y,c.y,f.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tE extends fa{constructor(t=new Q,i=new Q,r=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Q){const r=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return r.set(Po(t,l.x,c.x,f.x,h.x),Po(t,l.y,c.y,f.y,h.y),Po(t,l.z,c.z,f.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eE extends fa{constructor(t=new te,i=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new te){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new te){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nE extends fa{constructor(t=new Q,i=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Q){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iE extends fa{constructor(t=new te,i=new te,r=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new te){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(zo(t,l.x,c.x,f.x),zo(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends fa{constructor(t=new Q,i=new Q,r=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Q){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(zo(t,l.x,c.x,f.x),zo(t,l.y,c.y,f.y),zo(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aE extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new te){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return r.set(pv(h,p.x,m.x,g.x,_.x),pv(h,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new te().fromArray(l))}return this}}var rE=Object.freeze({__proto__:null,ArcCurve:WM,CatmullRomCurve3:R0,CubicBezierCurve:$M,CubicBezierCurve3:tE,EllipseCurve:A0,LineCurve:eE,LineCurve3:nE,QuadraticBezierCurve:iE,QuadraticBezierCurve3:C0,SplineCurve:aE});class Xd extends zi{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],S=[];let E=0;const T=[],M=r/2;let y=0;P(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(S,2));function P(){const w=new Q,k=new Q;let B=0;const z=(i-t)/r;for(let W=0;W<=c;W++){const D=[],R=W/c,G=R*(i-t)+t;for(let nt=0;nt<=l;nt++){const $=nt/l,ot=$*p+h,gt=Math.sin(ot),U=Math.cos(ot);k.x=G*gt,k.y=-R*r+M,k.z=G*U,_.push(k.x,k.y,k.z),w.set(gt,z,U).normalize(),v.push(w.x,w.y,w.z),S.push($,1-R),D.push(E++)}T.push(D)}for(let W=0;W<l;W++)for(let D=0;D<c;D++){const R=T[D][W],G=T[D+1][W],nt=T[D+1][W+1],$=T[D][W+1];(t>0||D!==0)&&(g.push(R,G,$),B+=3),(i>0||D!==c-1)&&(g.push(G,nt,$),B+=3)}m.addGroup(y,B,0),y+=B}function L(w){const k=E,B=new te,z=new Q;let W=0;const D=w===!0?t:i,R=w===!0?1:-1;for(let nt=1;nt<=l;nt++)_.push(0,M*R,0),v.push(0,R,0),S.push(.5,.5),E++;const G=E;for(let nt=0;nt<=l;nt++){const ot=nt/l*p+h,gt=Math.cos(ot),U=Math.sin(ot);z.x=D*U,z.y=M*R,z.z=D*gt,_.push(z.x,z.y,z.z),v.push(0,R,0),B.x=gt*.5+.5,B.y=U*.5*R+.5,S.push(B.x,B.y),E++}for(let nt=0;nt<l;nt++){const $=k+nt,ot=G+nt;w===!0?g.push(ot,ot+1,$):g.push(ot+1,ot,$),W+=3}m.addGroup(y,W,w===!0?1:2),y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wd extends Xd{constructor(t=1,i=1,r=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,r,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new Wd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gc extends zi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,_=t/h,v=i/p,S=[],E=[],T=[],M=[];for(let y=0;y<g;y++){const P=y*v-f;for(let L=0;L<m;L++){const w=L*_-c;E.push(w,-P,0),T.push(0,0,1),M.push(L/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<h;P++){const L=P+m*y,w=P+m*(y+1),k=P+1+m*(y+1),B=P+1+m*y;S.push(L,w,B),S.push(w,k,B)}this.setIndex(S),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(T,3)),this.setAttribute("uv",new Dn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.width,t.height,t.widthSegments,t.heightSegments)}}class qd extends zi{constructor(t=.5,i=1,r=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const h=[],p=[],m=[],g=[];let _=t;const v=(i-t)/l,S=new Q,E=new te;for(let T=0;T<=l;T++){for(let M=0;M<=r;M++){const y=c+M/r*f;S.x=_*Math.cos(y),S.y=_*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,g.push(E.x,E.y)}_+=v}for(let T=0;T<l;T++){const M=T*(r+1);for(let y=0;y<r;y++){const P=y+M,L=P,w=P+r+1,k=P+r+2,B=P+1;h.push(L,w,B),h.push(w,k,B)}}this.setIndex(h),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yd extends zi{constructor(t=new C0(new Q(-1,-1,0),new Q(-1,1,0),new Q(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new Q,p=new Q,m=new te;let g=new Q;const _=[],v=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(S,2));function T(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),P(),y()}function M(L){g=t.getPointAt(L/i,g);const w=f.normals[L],k=f.binormals[L];for(let B=0;B<=l;B++){const z=B/l*Math.PI*2,W=Math.sin(z),D=-Math.cos(z);p.x=D*w.x+W*k.x,p.y=D*w.y+W*k.y,p.z=D*w.z+W*k.z,p.normalize(),v.push(p.x,p.y,p.z),h.x=g.x+r*p.x,h.y=g.y+r*p.y,h.z=g.z+r*p.z,_.push(h.x,h.y,h.z)}}function y(){for(let L=1;L<=i;L++)for(let w=1;w<=l;w++){const k=(l+1)*(L-1)+(w-1),B=(l+1)*L+(w-1),z=(l+1)*L+w,W=(l+1)*(L-1)+w;E.push(k,B,W),E.push(B,z,W)}}function P(){for(let L=0;L<=i;L++)for(let w=0;w<=l;w++)m.x=L/i,m.y=w/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yd(new rE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class sE extends Hc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oE extends Hc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class w0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Dh=new Ze,mv=new Q,gv=new Q;class lE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;mv.setFromMatrixPosition(t.matrixWorld),i.position.copy(mv),gv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(gv),i.updateMatrixWorld(),Dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Dh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class D0 extends E0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cE extends lE{constructor(){super(new D0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uE extends w0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new cE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fE extends w0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class hE extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function _v(s,t,i,r){const l=dE(r);switch(i){case l0:return s*t;case u0:return s*t;case f0:return s*t*2;case h0:return s*t/l.components*l.byteLength;case Bd:return s*t/l.components*l.byteLength;case d0:return s*t*2/l.components*l.byteLength;case Fd:return s*t*2/l.components*l.byteLength;case c0:return s*t*3/l.components*l.byteLength;case Ti:return s*t*4/l.components*l.byteLength;case Id:return s*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ad:case sd:return Math.max(s,16)*Math.max(t,8)/4;case id:case rd:return Math.max(s,8)*Math.max(t,8)/2;case od:case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case gd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Md:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uc:case Td:case bd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case p0:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Rd:case Cd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dE(s){switch(s){case ca:case r0:return{byteLength:1,components:1};case Bo:case s0:case Go:return{byteLength:2,components:1};case zd:case Pd:return{byteLength:2,components:4};case br:case Od:case sa:return{byteLength:4,components:1};case o0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function pE(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gE=`#ifdef USE_ALPHAHASH
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
#endif`,_E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
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
#endif`,ME=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
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
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CE=`#ifdef USE_IRIDESCENCE
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
#endif`,wE=`#ifdef USE_BUMPMAP
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FE=`#define PI 3.141592653589793
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
} // validated`,IE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HE=`vec3 transformedNormal = objectNormal;
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
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nT=`#ifdef USE_GRADIENTMAP
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
}`,iT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sT=`uniform bool receiveShadow;
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
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,lT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
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
#endif`,dT=`struct PhysicalMaterial {
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
}`,pT=`
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
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
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_T=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ST=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ET=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TT=`#if defined( USE_POINTS_UV )
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
#endif`,bT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DT=`#ifdef USE_MORPHTARGETS
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
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BT=`#ifdef USE_NORMALMAP
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
#endif`,FT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$T=`float getShadowMask() {
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
}`,tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,nb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lb=`#ifdef USE_TRANSMISSION
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
#endif`,cb=`#ifdef USE_TRANSMISSION
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mb=`uniform sampler2D t2D;
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
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
}`,Sb=`#if DEPTH_PACKING == 3200
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
}`,Mb=`#define DISTANCE
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
}`,Eb=`#define DISTANCE
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`uniform float scale;
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
}`,Rb=`uniform vec3 diffuse;
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
}`,Cb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Db=`#define LAMBERT
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
}`,Ub=`#define LAMBERT
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
}`,Lb=`#define MATCAP
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
}`,Nb=`#define MATCAP
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
}`,Ob=`#define NORMAL
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
}`,zb=`#define NORMAL
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
}`,Pb=`#define PHONG
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
}`,Bb=`#define PHONG
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
}`,Fb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Hb=`#define TOON
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
}`,Gb=`#define TOON
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
}`,Vb=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,Wb=`uniform vec3 color;
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
}`,qb=`uniform float rotation;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:mE,alphahash_pars_fragment:gE,alphamap_fragment:_E,alphamap_pars_fragment:vE,alphatest_fragment:yE,alphatest_pars_fragment:xE,aomap_fragment:SE,aomap_pars_fragment:ME,batching_pars_vertex:EE,batching_vertex:TE,begin_vertex:bE,beginnormal_vertex:AE,bsdfs:RE,iridescence_fragment:CE,bumpmap_pars_fragment:wE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:NE,color_fragment:OE,color_pars_fragment:zE,color_pars_vertex:PE,color_vertex:BE,common:FE,cube_uv_reflection_fragment:IE,defaultnormal_vertex:HE,displacementmap_pars_vertex:GE,displacementmap_vertex:VE,emissivemap_fragment:kE,emissivemap_pars_fragment:XE,colorspace_fragment:WE,colorspace_pars_fragment:qE,envmap_fragment:YE,envmap_common_pars_fragment:jE,envmap_pars_fragment:ZE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:oT,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:$E,fog_fragment:tT,fog_pars_fragment:eT,gradientmap_pars_fragment:nT,lightmap_pars_fragment:iT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:rT,lights_pars_begin:sT,lights_toon_fragment:lT,lights_toon_pars_fragment:cT,lights_phong_fragment:uT,lights_phong_pars_fragment:fT,lights_physical_fragment:hT,lights_physical_pars_fragment:dT,lights_fragment_begin:pT,lights_fragment_maps:mT,lights_fragment_end:gT,logdepthbuf_fragment:_T,logdepthbuf_pars_fragment:vT,logdepthbuf_pars_vertex:yT,logdepthbuf_vertex:xT,map_fragment:ST,map_pars_fragment:MT,map_particle_fragment:ET,map_particle_pars_fragment:TT,metalnessmap_fragment:bT,metalnessmap_pars_fragment:AT,morphinstance_vertex:RT,morphcolor_vertex:CT,morphnormal_vertex:wT,morphtarget_pars_vertex:DT,morphtarget_vertex:UT,normal_fragment_begin:LT,normal_fragment_maps:NT,normal_pars_fragment:OT,normal_pars_vertex:zT,normal_vertex:PT,normalmap_pars_fragment:BT,clearcoat_normal_fragment_begin:FT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:GT,opaque_fragment:VT,packing:kT,premultiplied_alpha_fragment:XT,project_vertex:WT,dithering_fragment:qT,dithering_pars_fragment:YT,roughnessmap_fragment:jT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:tb,skinning_pars_vertex:eb,skinning_vertex:nb,skinnormal_vertex:ib,specularmap_fragment:ab,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:lb,transmission_pars_fragment:cb,uv_pars_fragment:ub,uv_pars_vertex:fb,uv_vertex:hb,worldpos_vertex:db,background_vert:pb,background_frag:mb,backgroundCube_vert:gb,backgroundCube_frag:_b,cube_vert:vb,cube_frag:yb,depth_vert:xb,depth_frag:Sb,distanceRGBA_vert:Mb,distanceRGBA_frag:Eb,equirect_vert:Tb,equirect_frag:bb,linedashed_vert:Ab,linedashed_frag:Rb,meshbasic_vert:Cb,meshbasic_frag:wb,meshlambert_vert:Db,meshlambert_frag:Ub,meshmatcap_vert:Lb,meshmatcap_frag:Nb,meshnormal_vert:Ob,meshnormal_frag:zb,meshphong_vert:Pb,meshphong_frag:Bb,meshphysical_vert:Fb,meshphysical_frag:Ib,meshtoon_vert:Hb,meshtoon_frag:Gb,points_vert:Vb,points_frag:kb,shadow_vert:Xb,shadow_frag:Wb,sprite_vert:qb,sprite_frag:Yb},Ut={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ui={basic:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:On([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:On([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:On([Ut.points,Ut.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:On([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:On([Ut.common,Ut.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:On([Ut.sprite,Ut.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:On([Ut.common,Ut.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:On([Ut.lights,Ut.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Ec={r:0,b:0,g:0},gr=new ua,jb=new Ze;function Zb(s,t,i,r,l,c,f){const h=new ze(0);let p=c===!0?0:1,m,g,_=null,v=0,S=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const k=E(L);k===null?y(h,p):k&&k.isColor&&(y(k,1),w=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,w){const k=E(w);k&&(k.isCubeTexture||k.mapping===Ic)?(g===void 0&&(g=new ei(new Wo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Cs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(gr)),g.material.toneMapped=Ce.getTransfer(k.colorSpace)!==Ge,(_!==k||v!==k.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=k,v=k.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new ei(new Gc(2,2),new qa({name:"BackgroundMaterial",uniforms:Cs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||v!==k.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=k,v=k.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function y(L,w){L.getRGB(Ec,M0(s)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,w,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(h,p)},render:T,addToRenderList:M,dispose:P}}function Kb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function h(R,G,nt,$,ot){let gt=!1;const U=_($,nt,G);c!==U&&(c=U,m(c.object)),gt=S(R,$,nt,ot),gt&&E(R,$,nt,ot),ot!==null&&t.update(ot,s.ELEMENT_ARRAY_BUFFER),(gt||f)&&(f=!1,w(R,G,nt,$),ot!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,G,nt){const $=nt.wireframe===!0;let ot=r[R.id];ot===void 0&&(ot={},r[R.id]=ot);let gt=ot[G.id];gt===void 0&&(gt={},ot[G.id]=gt);let U=gt[$];return U===void 0&&(U=v(p()),gt[$]=U),U}function v(R){const G=[],nt=[],$=[];for(let ot=0;ot<i;ot++)G[ot]=0,nt[ot]=0,$[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:$,object:R,attributes:{},index:null}}function S(R,G,nt,$){const ot=c.attributes,gt=G.attributes;let U=0;const q=nt.getAttributes();for(const I in q)if(q[I].location>=0){const xt=ot[I];let O=gt[I];if(O===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),xt===void 0||xt.attribute!==O||O&&xt.data!==O.data)return!0;U++}return c.attributesNum!==U||c.index!==$}function E(R,G,nt,$){const ot={},gt=G.attributes;let U=0;const q=nt.getAttributes();for(const I in q)if(q[I].location>=0){let xt=gt[I];xt===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const O={};O.attribute=xt,xt&&xt.data&&(O.data=xt.data),ot[I]=O,U++}c.attributes=ot,c.attributesNum=U,c.index=$}function T(){const R=c.newAttributes;for(let G=0,nt=R.length;G<nt;G++)R[G]=0}function M(R){y(R,0)}function y(R,G){const nt=c.newAttributes,$=c.enabledAttributes,ot=c.attributeDivisors;nt[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),ot[R]!==G&&(s.vertexAttribDivisor(R,G),ot[R]=G)}function P(){const R=c.newAttributes,G=c.enabledAttributes;for(let nt=0,$=G.length;nt<$;nt++)G[nt]!==R[nt]&&(s.disableVertexAttribArray(nt),G[nt]=0)}function L(R,G,nt,$,ot,gt,U){U===!0?s.vertexAttribIPointer(R,G,nt,ot,gt):s.vertexAttribPointer(R,G,nt,$,ot,gt)}function w(R,G,nt,$){T();const ot=$.attributes,gt=nt.getAttributes(),U=G.defaultAttributeValues;for(const q in gt){const I=gt[q];if(I.location>=0){let ft=ot[q];if(ft===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),ft!==void 0){const xt=ft.normalized,O=ft.itemSize,J=t.get(ft);if(J===void 0)continue;const ht=J.buffer,X=J.type,ct=J.bytesPerElement,St=X===s.INT||X===s.UNSIGNED_INT||ft.gpuType===Od;if(ft.isInterleavedBufferAttribute){const Mt=ft.data,Lt=Mt.stride,Wt=ft.offset;if(Mt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<I.locationSize;Yt++)y(I.location+Yt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Yt=0;Yt<I.locationSize;Yt++)M(I.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Yt=0;Yt<I.locationSize;Yt++)L(I.location+Yt,O/I.locationSize,X,xt,Lt*ct,(Wt+O/I.locationSize*Yt)*ct,St)}else{if(ft.isInstancedBufferAttribute){for(let Mt=0;Mt<I.locationSize;Mt++)y(I.location+Mt,ft.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Mt=0;Mt<I.locationSize;Mt++)M(I.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Mt=0;Mt<I.locationSize;Mt++)L(I.location+Mt,O/I.locationSize,X,xt,O*ct,O/I.locationSize*Mt*ct,St)}}else if(U!==void 0){const xt=U[q];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(I.location,xt);break;case 3:s.vertexAttrib3fv(I.location,xt);break;case 4:s.vertexAttrib4fv(I.location,xt);break;default:s.vertexAttrib1fv(I.location,xt)}}}}P()}function k(){W();for(const R in r){const G=r[R];for(const nt in G){const $=G[nt];for(const ot in $)g($[ot].object),delete $[ot];delete G[nt]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const nt in G){const $=G[nt];for(const ot in $)g($[ot].object),delete $[ot];delete G[nt]}delete r[R.id]}function z(R){for(const G in r){const nt=r[G];if(nt[R.id]===void 0)continue;const $=nt[R.id];for(const ot in $)g($[ot].object),delete $[ot];delete nt[R.id]}}function W(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:P}}function Qb(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,r,1)}function p(m,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Jb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ti&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const W=z===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ca&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!W)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:k,maxSamples:B}}function $b(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new vr,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||l;return l=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,y=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const P=c?0:r,L=P*4;let w=y.clippingState||null;p.value=w,w=g(E,v,L,S);for(let k=0;k!==L;++k)w[k]=i[k];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,S,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const y=S+T*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=S;L!==T;++L,w+=4)f.copy(_[L]).applyMatrix4(P,h),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function tA(s){let t=new WeakMap;function i(f,h){return h===$h?f.mapping=bs:h===td&&(f.mapping=As),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===$h||h===td)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new HM(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ss=4,vv=[.125,.215,.35,.446,.526,.582],Sr=20,Uh=new D0,yv=new ze;let Lh=null,Nh=0,Oh=0,zh=!1;const yr=(1+Math.sqrt(5))/2,ys=1/yr,xv=[new Q(-yr,ys,0),new Q(yr,ys,0),new Q(-ys,0,yr),new Q(ys,0,yr),new Q(0,yr,-ys),new Q(0,yr,ys),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],eA=new Q;class Sv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=eA}=c;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Oh),this._renderer.xr.enabled=zh,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Go,format:Ti,colorSpace:Rs,depthBuffer:!1},l=Mv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nA(c)),this._blurMaterial=iA(c,t,i)}return l}_compileMaterial(t){const i=new ei(this._lodPlanes[0],t);this._renderer.compile(i,Uh)}_sceneToCubeUV(t,i,r,l,c){const p=new di(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(yv),_.toneMapping=ka,_.autoClear=!1;const E=new Bc({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),T=new ei(new Wo,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(yv),M=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):L===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const w=this._cubeSize;Tc(l,L*w,P>2?w:0,w,w),_.setRenderTarget(l),M&&_.render(T,p),_.render(t,p)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=y}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===bs||t.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ev());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ei(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Tc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Uh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=xv[(l-c-1)%xv.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ei(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Sr;M>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sr}`);const y=[];let P=0;for(let z=0;z<Sr;++z){const W=z/T,D=Math.exp(-W*W/2);y.push(D),z===0?P+=D:z<M&&(P+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/P;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-r;const w=this._sizeLods[l],k=3*w*(l>L-Ss?l-L+Ss:0),B=4*(this._cubeSize-w);Tc(i,k,B,3*w,2*w),p.setRenderTarget(i),p.render(_,Uh)}}function nA(s){const t=[],i=[],r=[];let l=s;const c=s-Ss+1+vv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-Ss?p=vv[f-s+Ss-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,M=2,y=1,P=new Float32Array(T*E*S),L=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,W=B>2?0:-1,D=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];P.set(D,T*E*B),L.set(v,M*E*B);const R=[B,B,B,B,B,B];w.set(R,y*E*B)}const k=new zi;k.setAttribute("position",new Oi(P,T)),k.setAttribute("uv",new Oi(L,M)),k.setAttribute("faceIndex",new Oi(w,y)),t.push(k),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Mv(s,t,i){const r=new Ar(s,t,i);return r.texture.mapping=Ic,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function iA(s,t,i){const r=new Float32Array(Sr),l=new Q(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Ev(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Tv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function aA(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===$h||p===td,g=p===bs||p===As;if(m||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Sv(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Sv(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function rA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Lc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sA(s,t,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const P=S.array;T=S.version;for(let L=0,w=P.length;L<w;L+=3){const k=P[L+0],B=P[L+1],z=P[L+2];v.push(k,B,B,z,z,k)}}else if(E!==void 0){const P=E.array;T=E.version;for(let L=0,w=P.length/3-1;L<w;L+=3){const k=L+0,B=L+1,z=L+2;v.push(k,B,B,z,z,k)}}else return;const M=new(g0(v)?S0:x0)(v,1);M.version=T;const y=c.get(_);y&&t.remove(y),c.set(_,M)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function oA(s,t,i){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,c,v*f),i.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,r,1)}function _(v,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)m(v[y]/f,S[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,T,0,E);let y=0;for(let P=0;P<E;P++)y+=S[P]*T[P];i.update(y,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function lA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function cA(s,t,i){const r=new WeakMap,l=new tn;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==_){let D=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let w=h.attributes.position.count*L,k=1;w>t.maxTextureSize&&(k=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*k*4*_),z=new _0(B,w,k,_);z.type=sa,z.needsUpdate=!0;const W=L*4;for(let R=0;R<_;R++){const G=M[R],nt=y[R],$=P[R],ot=w*k*4*R;for(let gt=0;gt<G.count;gt++){const U=gt*W;S===!0&&(l.fromBufferAttribute(G,gt),B[ot+U+0]=l.x,B[ot+U+1]=l.y,B[ot+U+2]=l.z,B[ot+U+3]=0),E===!0&&(l.fromBufferAttribute(nt,gt),B[ot+U+4]=l.x,B[ot+U+5]=l.y,B[ot+U+6]=l.z,B[ot+U+7]=0),T===!0&&(l.fromBufferAttribute($,gt),B[ot+U+8]=l.x,B[ot+U+9]=l.y,B[ot+U+10]=l.z,B[ot+U+11]=$.itemSize===4?l.w:1)}}v={count:_,texture:z,size:new te(w,k)},r.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let T=0;T<m.length;T++)S+=m[T];const E=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function uA(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const L0=new Wn,bv=new b0(1,1),N0=new _0,O0=new MM,z0=new T0,Av=[],Rv=[],Cv=new Float32Array(16),wv=new Float32Array(9),Dv=new Float32Array(4);function Us(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Av[l];if(c===void 0&&(c=new Float32Array(l),Av[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Vc(s,t){let i=Rv[t];i===void 0&&(i=new Int32Array(t),Rv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function fA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function hA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function dA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function pA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function mA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;Dv.set(r),s.uniformMatrix2fv(this.addr,!1,Dv),dn(i,r)}}function gA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;wv.set(r),s.uniformMatrix3fv(this.addr,!1,wv),dn(i,r)}}function _A(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;Cv.set(r),s.uniformMatrix4fv(this.addr,!1,Cv),dn(i,r)}}function vA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function yA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function xA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function SA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function MA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function EA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function TA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function bA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function AA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(bv.compareFunction=m0,c=bv):c=L0,i.setTexture2D(t||c,l)}function RA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||O0,l)}function CA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||z0,l)}function wA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||N0,l)}function DA(s){switch(s){case 5126:return fA;case 35664:return hA;case 35665:return dA;case 35666:return pA;case 35674:return mA;case 35675:return gA;case 35676:return _A;case 5124:case 35670:return vA;case 35667:case 35671:return yA;case 35668:case 35672:return xA;case 35669:case 35673:return SA;case 5125:return MA;case 36294:return EA;case 36295:return TA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return wA}}function UA(s,t){s.uniform1fv(this.addr,t)}function LA(s,t){const i=Us(t,this.size,2);s.uniform2fv(this.addr,i)}function NA(s,t){const i=Us(t,this.size,3);s.uniform3fv(this.addr,i)}function OA(s,t){const i=Us(t,this.size,4);s.uniform4fv(this.addr,i)}function zA(s,t){const i=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function PA(s,t){const i=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function BA(s,t){const i=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function FA(s,t){s.uniform1iv(this.addr,t)}function IA(s,t){s.uniform2iv(this.addr,t)}function HA(s,t){s.uniform3iv(this.addr,t)}function GA(s,t){s.uniform4iv(this.addr,t)}function VA(s,t){s.uniform1uiv(this.addr,t)}function kA(s,t){s.uniform2uiv(this.addr,t)}function XA(s,t){s.uniform3uiv(this.addr,t)}function WA(s,t){s.uniform4uiv(this.addr,t)}function qA(s,t,i){const r=this.cache,l=t.length,c=Vc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||L0,c[f])}function YA(s,t,i){const r=this.cache,l=t.length,c=Vc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||O0,c[f])}function jA(s,t,i){const r=this.cache,l=t.length,c=Vc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||z0,c[f])}function ZA(s,t,i){const r=this.cache,l=t.length,c=Vc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||N0,c[f])}function KA(s){switch(s){case 5126:return UA;case 35664:return LA;case 35665:return NA;case 35666:return OA;case 35674:return zA;case 35675:return PA;case 35676:return BA;case 5124:case 35670:return FA;case 35667:case 35671:return IA;case 35668:case 35672:return HA;case 35669:case 35673:return GA;case 5125:return VA;case 36294:return kA;case 36295:return XA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return YA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return ZA}}class QA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=DA(i.type)}}class JA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=KA(i.type)}}class $A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function Uv(s,t){s.seq.push(t),s.map[t.id]=t}function t1(s,t,i){const r=s.name,l=r.length;for(Ph.lastIndex=0;;){const c=Ph.exec(r),f=Ph.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Uv(i,m===void 0?new QA(h,s,t):new JA(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new $A(h),Uv(i,_)),i=_}}}class Nc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);t1(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Lv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const e1=37297;let n1=0;function i1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const Nv=new ce;function a1(s){Ce._getMatrix(Nv,Ce.workingColorSpace,s);const t=`mat3( ${Nv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case Oc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ov(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+i1(s.getShaderSource(t),f)}else return l}function r1(s,t){const i=a1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function s1(s,t){let i;switch(t){case YS:i="Linear";break;case jS:i="Reinhard";break;case ZS:i="Cineon";break;case KS:i="ACESFilmic";break;case JS:i="AgX";break;case $S:i="Neutral";break;case QS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const bc=new Q;function o1(){Ce.getLuminanceCoefficients(bc);const s=bc.x.toFixed(4),t=bc.y.toFixed(4),i=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function c1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function u1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function No(s){return s!==""}function zv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(s){return s.replace(f1,d1)}const h1=new Map;function d1(s,t){let i=ue[t];if(i===void 0){const r=h1.get(t);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Dd(i)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(s){return s.replace(p1,m1)}function m1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Fv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function g1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===n0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===AS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function _1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function y1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case i0:t="ENVMAP_BLENDING_MULTIPLY";break;case WS:t="ENVMAP_BLENDING_MIX";break;case qS:t="ENVMAP_BLENDING_ADD";break}return t}function x1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function S1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=g1(i),m=_1(i),g=v1(i),_=y1(i),v=x1(i),S=l1(i),E=c1(c),T=l.createProgram();let M,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),y.length>0&&(y+=`
`)):(M=[Fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),y=[Fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ue.tonemapping_pars_fragment:"",i.toneMapping!==ka?s1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,r1("linearToOutputTexel",i.outputColorSpace),o1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),f=Dd(f),f=zv(f,i),f=Pv(f,i),h=Dd(h),h=zv(h,i),h=Pv(h,i),f=Bv(f),h=Bv(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=P+M+f,w=P+y+h,k=Lv(l,l.VERTEX_SHADER,L),B=Lv(l,l.FRAGMENT_SHADER,w);l.attachShader(T,k),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(G){if(s.debug.checkShaderErrors){const nt=l.getProgramInfoLog(T).trim(),$=l.getShaderInfoLog(k).trim(),ot=l.getShaderInfoLog(B).trim();let gt=!0,U=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(gt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,k,B);else{const q=Ov(l,k,"vertex"),I=Ov(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+nt+`
`+q+`
`+I)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):($===""||ot==="")&&(U=!1);U&&(G.diagnostics={runnable:gt,programLog:nt,vertexShader:{log:$,prefix:M},fragmentShader:{log:ot,prefix:y}})}l.deleteShader(k),l.deleteShader(B),W=new Nc(l,T),D=u1(l,T)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,e1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=n1++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=B,this}let M1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new T1(t),i.set(t,r)),r}}class T1{constructor(t){this.id=M1++,this.code=t,this.usedTimes=0}}function b1(s,t,i,r,l,c,f){const h=new v0,p=new E1,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,R,G,nt,$){const ot=nt.fog,gt=$.geometry,U=D.isMeshStandardMaterial?nt.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||U),I=q&&q.mapping===Ic?q.image.height:null,ft=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const xt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,O=xt!==void 0?xt.length:0;let J=0;gt.morphAttributes.position!==void 0&&(J=1),gt.morphAttributes.normal!==void 0&&(J=2),gt.morphAttributes.color!==void 0&&(J=3);let ht,X,ct,St;if(ft){const Te=Ui[ft];ht=Te.vertexShader,X=Te.fragmentShader}else ht=D.vertexShader,X=D.fragmentShader,p.update(D),ct=p.getVertexShaderID(D),St=p.getFragmentShaderID(D);const Mt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Wt=$.isInstancedMesh===!0,Yt=$.isBatchedMesh===!0,we=!!D.map,Ue=!!D.matcap,fe=!!q,H=!!D.aoMap,Tn=!!D.lightMap,he=!!D.bumpMap,ge=!!D.normalMap,qt=!!D.displacementMap,Le=!!D.emissiveMap,kt=!!D.metalnessMap,N=!!D.roughnessMap,A=D.anisotropy>0,at=D.clearcoat>0,pt=D.dispersion>0,Et=D.iridescence>0,_t=D.sheen>0,Gt=D.transmission>0,Rt=A&&!!D.anisotropyMap,Bt=at&&!!D.clearcoatMap,_e=at&&!!D.clearcoatNormalMap,bt=at&&!!D.clearcoatRoughnessMap,Ft=Et&&!!D.iridescenceMap,Qt=Et&&!!D.iridescenceThicknessMap,Vt=_t&&!!D.sheenColorMap,Ot=_t&&!!D.sheenRoughnessMap,ee=!!D.specularMap,se=!!D.specularColorMap,Pe=!!D.specularIntensityMap,j=Gt&&!!D.transmissionMap,Ct=Gt&&!!D.thicknessMap,ut=!!D.gradientMap,yt=!!D.alphaMap,At=D.alphaTest>0,wt=!!D.alphaHash,ne=!!D.extensions;let Ye=ka;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const cn={shaderID:ft,shaderType:D.type,shaderName:D.name,vertexShader:ht,fragmentShader:X,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Yt,batchingColor:Yt&&$._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&$.instanceColor!==null,instancingMorph:Wt&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Rs,alphaToCoverage:!!D.alphaToCoverage,map:we,matcap:Ue,envMap:fe,envMapMode:fe&&q.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:Tn,bumpMap:he,normalMap:ge,displacementMap:v&&qt,emissiveMap:Le,normalMapObjectSpace:ge&&D.normalMapType===aM,normalMapTangentSpace:ge&&D.normalMapType===iM,metalnessMap:kt,roughnessMap:N,anisotropy:A,anisotropyMap:Rt,clearcoat:at,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:pt,iridescence:Et,iridescenceMap:Ft,iridescenceThicknessMap:Qt,sheen:_t,sheenColorMap:Vt,sheenRoughnessMap:Ot,specularMap:ee,specularColorMap:se,specularIntensityMap:Pe,transmission:Gt,transmissionMap:j,thicknessMap:Ct,gradientMap:ut,opaque:D.transparent===!1&&D.blending===Ms&&D.alphaToCoverage===!1,alphaMap:yt,alphaTest:At,alphaHash:wt,combine:D.combine,mapUv:we&&T(D.map.channel),aoMapUv:H&&T(D.aoMap.channel),lightMapUv:Tn&&T(D.lightMap.channel),bumpMapUv:he&&T(D.bumpMap.channel),normalMapUv:ge&&T(D.normalMap.channel),displacementMapUv:qt&&T(D.displacementMap.channel),emissiveMapUv:Le&&T(D.emissiveMap.channel),metalnessMapUv:kt&&T(D.metalnessMap.channel),roughnessMapUv:N&&T(D.roughnessMap.channel),anisotropyMapUv:Rt&&T(D.anisotropyMap.channel),clearcoatMapUv:Bt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:ee&&T(D.specularMap.channel),specularColorMapUv:se&&T(D.specularColorMap.channel),specularIntensityMapUv:Pe&&T(D.specularIntensityMap.channel),transmissionMapUv:j&&T(D.transmissionMap.channel),thicknessMapUv:Ct&&T(D.thicknessMap.channel),alphaMapUv:yt&&T(D.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(ge||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!gt.attributes.uv&&(we||yt),fog:!!ot,useFog:D.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Lt,skinning:$.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:we&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Le&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Li,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ne&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&D.extensions.multiDraw===!0||Yt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function y(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(R,D),L(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function P(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const R=E[D.type];let G;if(R){const nt=Ui[R];G=PM.clone(nt.uniforms)}else G=D.uniforms;return G}function k(D,R){let G;for(let nt=0,$=g.length;nt<$;nt++){const ot=g[nt];if(ot.cacheKey===R){G=ot,++G.usedTimes;break}}return G===void 0&&(G=new S1(s,R,D,c),g.push(G)),G}function B(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function W(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:k,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:W}}function A1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function R1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,v,S,E,T,M){let y=s[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},s[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=T,y.group=M),t++,y}function h(_,v,S,E,T,M){const y=f(_,v,S,E,T,M);S.transmission>0?r.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(_,v,S,E,T,M){const y=f(_,v,S,E,T,M);S.transmission>0?r.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(_,v){i.length>1&&i.sort(_||R1),r.length>1&&r.sort(v||Iv),l.length>1&&l.sort(v||Iv)}function g(){for(let _=t,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function C1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Hv,s.set(r,[f])):l>=c.length?(f=new Hv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function w1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new ze};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function D1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let U1=0;function L1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function N1(s){const t=new w1,i=D1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const l=new Q,c=new Ze,f=new Ze;function h(m){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,T=0,M=0,y=0,P=0,L=0,w=0,k=0,B=0,z=0;m.sort(L1);for(let D=0,R=m.length;D<R;D++){const G=m[D],nt=G.color,$=G.intensity,ot=G.distance,gt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=nt.r*$,_+=nt.g*$,v+=nt.b*$;else if(G.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(G.sh.coefficients[U],$);z++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,I=i.get(G);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,r.directionalShadow[S]=I,r.directionalShadowMap[S]=gt,r.directionalShadowMatrix[S]=G.shadow.matrix,P++}r.directional[S]=U,S++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(nt).multiplyScalar($),U.distance=ot,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,r.spot[T]=U;const q=G.shadow;if(G.map&&(r.spotLightMap[k]=G.map,k++,q.updateMatrices(G),G.castShadow&&B++),r.spotLightMatrix[T]=q.matrix,G.castShadow){const I=i.get(G);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,r.spotShadow[T]=I,r.spotShadowMap[T]=gt,w++}T++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(nt).multiplyScalar($),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const q=G.shadow,I=i.get(G);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,I.shadowCameraNear=q.camera.near,I.shadowCameraFar=q.camera.far,r.pointShadow[E]=I,r.pointShadowMap[E]=gt,r.pointShadowMatrix[E]=G.shadow.matrix,L++}r.point[E]=U,E++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar($),U.groundColor.copy(G.groundColor).multiplyScalar($),r.hemi[y]=U,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==T||W.rectAreaLength!==M||W.hemiLength!==y||W.numDirectionalShadows!==P||W.numPointShadows!==L||W.numSpotShadows!==w||W.numSpotMaps!==k||W.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+k-B,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,W.directionalLength=S,W.pointLength=E,W.spotLength=T,W.rectAreaLength=M,W.hemiLength=y,W.numDirectionalShadows=P,W.numPointShadows=L,W.numSpotShadows=w,W.numSpotMaps=k,W.numLightProbes=z,r.version=U1++)}function p(m,g){let _=0,v=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const L=m[y];if(L.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(L.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const w=r.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:r}}function Gv(s){const t=new N1(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function O1(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Gv(s),t.set(l,[h])):c>=f.length?(h=new Gv(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P1=`uniform sampler2D shadow_pass;
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
}`;function B1(s,t,i){let r=new Vd;const l=new te,c=new te,f=new tn,h=new sE({depthPacking:nM}),p=new oE,m={},g=i.maxTextureSize,_={[Wa]:Xn,[Xn]:Wa,[Li]:Li},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:z1,fragmentShader:P1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ei(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let y=this.type;this.render=function(B,z,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(Va),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const $=y!==ra&&this.type===ra,ot=y===ra&&this.type!==ra;for(let gt=0,U=B.length;gt<U;gt++){const q=B[gt],I=q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ft=I.getFrameExtents();if(l.multiply(ft),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ft.x),l.x=c.x*ft.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ft.y),l.y=c.y*ft.y,I.mapSize.y=c.y)),I.map===null||$===!0||ot===!0){const O=this.type!==ra?{minFilter:bi,magFilter:bi}:{};I.map!==null&&I.map.dispose(),I.map=new Ar(l.x,l.y,O),I.map.texture.name=q.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const xt=I.getViewportCount();for(let O=0;O<xt;O++){const J=I.getViewport(O);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),nt.viewport(f),I.updateMatrices(q,O),r=I.getFrustum(),w(z,W,I.camera,q,this.type)}I.isPointLightShadow!==!0&&this.type===ra&&P(I,W),I.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(D,R,G)};function P(B,z){const W=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,W,v,T,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,W,S,T,null)}function L(B,z,W,D){let R=null;const G=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)R=G;else if(R=W.isPointLight===!0?p:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const nt=R.uuid,$=z.uuid;let ot=m[nt];ot===void 0&&(ot={},m[nt]=ot);let gt=ot[$];gt===void 0&&(gt=R.clone(),ot[$]=gt,z.addEventListener("dispose",k)),R=gt}if(R.visible=z.visible,R.wireframe=z.wireframe,D===ra?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,W.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const nt=s.properties.get(R);nt.light=W}return R}function w(B,z,W,D,R){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===ra)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const $=t.update(B),ot=B.material;if(Array.isArray(ot)){const gt=$.groups;for(let U=0,q=gt.length;U<q;U++){const I=gt[U],ft=ot[I.materialIndex];if(ft&&ft.visible){const xt=L(B,ft,D,R);B.onBeforeShadow(s,B,z,W,$,xt,I),s.renderBufferDirect(W,null,$,xt,B,I),B.onAfterShadow(s,B,z,W,$,xt,I)}}}else if(ot.visible){const gt=L(B,ot,D,R);B.onBeforeShadow(s,B,z,W,$,gt,null),s.renderBufferDirect(W,null,$,gt,B,null),B.onAfterShadow(s,B,z,W,$,gt,null)}}const nt=B.children;for(let $=0,ot=nt.length;$<ot;$++)w(nt[$],z,W,D,R)}function k(B){B.target.removeEventListener("dispose",k);for(const W in m){const D=m[W],R=B.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const F1={[qh]:Yh,[jh]:Qh,[Zh]:Jh,[Ts]:Kh,[Yh]:qh,[Qh]:jh,[Jh]:Zh,[Kh]:Ts};function I1(s,t){function i(){let j=!1;const Ct=new tn;let ut=null;const yt=new tn(0,0,0,0);return{setMask:function(At){ut!==At&&!j&&(s.colorMask(At,At,At,At),ut=At)},setLocked:function(At){j=At},setClear:function(At,wt,ne,Ye,cn){cn===!0&&(At*=Ye,wt*=Ye,ne*=Ye),Ct.set(At,wt,ne,Ye),yt.equals(Ct)===!1&&(s.clearColor(At,wt,ne,Ye),yt.copy(Ct))},reset:function(){j=!1,ut=null,yt.set(-1,0,0,0)}}}function r(){let j=!1,Ct=!1,ut=null,yt=null,At=null;return{setReversed:function(wt){if(Ct!==wt){const ne=t.get("EXT_clip_control");wt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),Ct=wt;const Ye=At;At=null,this.setClear(Ye)}},getReversed:function(){return Ct},setTest:function(wt){wt?Mt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(wt){ut!==wt&&!j&&(s.depthMask(wt),ut=wt)},setFunc:function(wt){if(Ct&&(wt=F1[wt]),yt!==wt){switch(wt){case qh:s.depthFunc(s.NEVER);break;case Yh:s.depthFunc(s.ALWAYS);break;case jh:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Zh:s.depthFunc(s.EQUAL);break;case Kh:s.depthFunc(s.GEQUAL);break;case Qh:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=wt}},setLocked:function(wt){j=wt},setClear:function(wt){At!==wt&&(Ct&&(wt=1-wt),s.clearDepth(wt),At=wt)},reset:function(){j=!1,ut=null,yt=null,At=null,Ct=!1}}}function l(){let j=!1,Ct=null,ut=null,yt=null,At=null,wt=null,ne=null,Ye=null,cn=null;return{setTest:function(Te){j||(Te?Mt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!j&&(s.stencilMask(Te),Ct=Te)},setFunc:function(Te,_n,pi){(ut!==Te||yt!==_n||At!==pi)&&(s.stencilFunc(Te,_n,pi),ut=Te,yt=_n,At=pi)},setOp:function(Te,_n,pi){(wt!==Te||ne!==_n||Ye!==pi)&&(s.stencilOp(Te,_n,pi),wt=Te,ne=_n,Ye=pi)},setLocked:function(Te){j=Te},setClear:function(Te){cn!==Te&&(s.clearStencil(Te),cn=Te)},reset:function(){j=!1,Ct=null,ut=null,yt=null,At=null,wt=null,ne=null,Ye=null,cn=null}}}const c=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,T=!1,M=null,y=null,P=null,L=null,w=null,k=null,B=null,z=new ze(0,0,0),W=0,D=!1,R=null,G=null,nt=null,$=null,ot=null;const gt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,q=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(I)[1]),U=q>=1):I.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),U=q>=2);let ft=null,xt={};const O=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),ht=new tn().fromArray(O),X=new tn().fromArray(J);function ct(j,Ct,ut,yt){const At=new Uint8Array(4),wt=s.createTexture();s.bindTexture(j,wt),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<ut;ne++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Ct+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return wt}const St={};St[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Mt(s.DEPTH_TEST),f.setFunc(Ts),he(!1),ge(X_),Mt(s.CULL_FACE),H(Va);function Mt(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Lt(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function Wt(j,Ct){return _[j]!==Ct?(s.bindFramebuffer(j,Ct),_[j]=Ct,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ct),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Yt(j,Ct){let ut=S,yt=!1;if(j){ut=v.get(Ct),ut===void 0&&(ut=[],v.set(Ct,ut));const At=j.textures;if(ut.length!==At.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,ne=At.length;wt<ne;wt++)ut[wt]=s.COLOR_ATTACHMENT0+wt;ut.length=At.length,yt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ut)}function we(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const Ue={[xr]:s.FUNC_ADD,[CS]:s.FUNC_SUBTRACT,[wS]:s.FUNC_REVERSE_SUBTRACT};Ue[DS]=s.MIN,Ue[US]=s.MAX;const fe={[LS]:s.ZERO,[NS]:s.ONE,[OS]:s.SRC_COLOR,[Xh]:s.SRC_ALPHA,[HS]:s.SRC_ALPHA_SATURATE,[FS]:s.DST_COLOR,[PS]:s.DST_ALPHA,[zS]:s.ONE_MINUS_SRC_COLOR,[Wh]:s.ONE_MINUS_SRC_ALPHA,[IS]:s.ONE_MINUS_DST_COLOR,[BS]:s.ONE_MINUS_DST_ALPHA,[GS]:s.CONSTANT_COLOR,[VS]:s.ONE_MINUS_CONSTANT_COLOR,[kS]:s.CONSTANT_ALPHA,[XS]:s.ONE_MINUS_CONSTANT_ALPHA};function H(j,Ct,ut,yt,At,wt,ne,Ye,cn,Te){if(j===Va){T===!0&&(Lt(s.BLEND),T=!1);return}if(T===!1&&(Mt(s.BLEND),T=!0),j!==RS){if(j!==M||Te!==D){if((y!==xr||w!==xr)&&(s.blendEquation(s.FUNC_ADD),y=xr,w=xr),Te)switch(j){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.ONE,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}P=null,L=null,k=null,B=null,z.set(0,0,0),W=0,M=j,D=Te}return}At=At||Ct,wt=wt||ut,ne=ne||yt,(Ct!==y||At!==w)&&(s.blendEquationSeparate(Ue[Ct],Ue[At]),y=Ct,w=At),(ut!==P||yt!==L||wt!==k||ne!==B)&&(s.blendFuncSeparate(fe[ut],fe[yt],fe[wt],fe[ne]),P=ut,L=yt,k=wt,B=ne),(Ye.equals(z)===!1||cn!==W)&&(s.blendColor(Ye.r,Ye.g,Ye.b,cn),z.copy(Ye),W=cn),M=j,D=!1}function Tn(j,Ct){j.side===Li?Lt(s.CULL_FACE):Mt(s.CULL_FACE);let ut=j.side===Xn;Ct&&(ut=!ut),he(ut),j.blending===Ms&&j.transparent===!1?H(Va):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const yt=j.stencilWrite;h.setTest(yt),yt&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(j){R!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),R=j)}function ge(j){j!==TS?(Mt(s.CULL_FACE),j!==G&&(j===X_?s.cullFace(s.BACK):j===bS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),G=j}function qt(j){j!==nt&&(U&&s.lineWidth(j),nt=j)}function Le(j,Ct,ut){j?(Mt(s.POLYGON_OFFSET_FILL),($!==Ct||ot!==ut)&&(s.polygonOffset(Ct,ut),$=Ct,ot=ut)):Lt(s.POLYGON_OFFSET_FILL)}function kt(j){j?Mt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function N(j){j===void 0&&(j=s.TEXTURE0+gt-1),ft!==j&&(s.activeTexture(j),ft=j)}function A(j,Ct,ut){ut===void 0&&(ft===null?ut=s.TEXTURE0+gt-1:ut=ft);let yt=xt[ut];yt===void 0&&(yt={type:void 0,texture:void 0},xt[ut]=yt),(yt.type!==j||yt.texture!==Ct)&&(ft!==ut&&(s.activeTexture(ut),ft=ut),s.bindTexture(j,Ct||St[j]),yt.type=j,yt.texture=Ct)}function at(){const j=xt[ft];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pt(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _t(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Gt(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qt(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Vt(j){ht.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ht.copy(j))}function Ot(j){X.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),X.copy(j))}function ee(j,Ct){let ut=m.get(Ct);ut===void 0&&(ut=new WeakMap,m.set(Ct,ut));let yt=ut.get(j);yt===void 0&&(yt=s.getUniformBlockIndex(Ct,j.name),ut.set(j,yt))}function se(j,Ct){const yt=m.get(Ct).get(j);p.get(Ct)!==yt&&(s.uniformBlockBinding(Ct,yt,j.__bindingPointIndex),p.set(Ct,yt))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ft=null,xt={},_={},v=new WeakMap,S=[],E=null,T=!1,M=null,y=null,P=null,L=null,w=null,k=null,B=null,z=new ze(0,0,0),W=0,D=!1,R=null,G=null,nt=null,$=null,ot=null,ht.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Mt,disable:Lt,bindFramebuffer:Wt,drawBuffers:Yt,useProgram:we,setBlending:H,setMaterial:Tn,setFlipSided:he,setCullFace:ge,setLineWidth:qt,setPolygonOffset:Le,setScissorTest:kt,activeTexture:N,bindTexture:A,unbindTexture:at,compressedTexImage2D:pt,compressedTexImage3D:Et,texImage2D:Ft,texImage3D:Qt,updateUBOMapping:ee,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:bt,texSubImage2D:_t,texSubImage3D:Gt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:Ot,reset:Pe}}function H1(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new te,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return S?new OffscreenCanvas(N,A):Pc("canvas")}function T(N,A,at){let pt=1;const Et=kt(N);if((Et.width>at||Et.height>at)&&(pt=at/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const _t=Math.floor(pt*Et.width),Gt=Math.floor(pt*Et.height);_===void 0&&(_=E(_t,Gt));const Rt=A?E(_t,Gt):_;return Rt.width=_t,Rt.height=Gt,Rt.getContext("2d").drawImage(N,0,0,_t,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+_t+"x"+Gt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,A,at,pt,Et=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _t=A;if(A===s.RED&&(at===s.FLOAT&&(_t=s.R32F),at===s.HALF_FLOAT&&(_t=s.R16F),at===s.UNSIGNED_BYTE&&(_t=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.R8UI),at===s.UNSIGNED_SHORT&&(_t=s.R16UI),at===s.UNSIGNED_INT&&(_t=s.R32UI),at===s.BYTE&&(_t=s.R8I),at===s.SHORT&&(_t=s.R16I),at===s.INT&&(_t=s.R32I)),A===s.RG&&(at===s.FLOAT&&(_t=s.RG32F),at===s.HALF_FLOAT&&(_t=s.RG16F),at===s.UNSIGNED_BYTE&&(_t=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RG8UI),at===s.UNSIGNED_SHORT&&(_t=s.RG16UI),at===s.UNSIGNED_INT&&(_t=s.RG32UI),at===s.BYTE&&(_t=s.RG8I),at===s.SHORT&&(_t=s.RG16I),at===s.INT&&(_t=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),at===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),at===s.UNSIGNED_INT&&(_t=s.RGB32UI),at===s.BYTE&&(_t=s.RGB8I),at===s.SHORT&&(_t=s.RGB16I),at===s.INT&&(_t=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),at===s.UNSIGNED_INT&&(_t=s.RGBA32UI),at===s.BYTE&&(_t=s.RGBA8I),at===s.SHORT&&(_t=s.RGBA16I),at===s.INT&&(_t=s.RGBA32I)),A===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),A===s.RGBA){const Gt=Et?Oc:Ce.getTransfer(pt);at===s.FLOAT&&(_t=s.RGBA32F),at===s.HALF_FLOAT&&(_t=s.RGBA16F),at===s.UNSIGNED_BYTE&&(_t=Gt===Ge?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function w(N,A){let at;return N?A===null||A===br||A===Fo?at=s.DEPTH24_STENCIL8:A===sa?at=s.DEPTH32F_STENCIL8:A===Bo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===br||A===Fo?at=s.DEPTH_COMPONENT24:A===sa?at=s.DEPTH_COMPONENT32F:A===Bo&&(at=s.DEPTH_COMPONENT16),at}function k(N,A){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function B(N){const A=N.target;A.removeEventListener("dispose",B),W(A),A.isVideoTexture&&g.delete(A)}function z(N){const A=N.target;A.removeEventListener("dispose",z),R(A)}function W(N){const A=r.get(N);if(A.__webglInit===void 0)return;const at=N.source,pt=v.get(at);if(pt){const Et=pt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(N),Object.keys(pt).length===0&&v.delete(at)}r.remove(N)}function D(N){const A=r.get(N);s.deleteTexture(A.__webglTexture);const at=N.source,pt=v.get(at);delete pt[A.__cacheKey],f.memory.textures--}function R(N){const A=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Et=0;Et<A.__webglFramebuffer[pt].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[pt][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)s.deleteFramebuffer(A.__webglFramebuffer[pt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=N.textures;for(let pt=0,Et=at.length;pt<Et;pt++){const _t=r.get(at[pt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),f.memory.textures--),r.remove(at[pt])}r.remove(N)}let G=0;function nt(){G=0}function $(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function ot(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function gt(N,A){const at=r.get(N);if(N.isVideoTexture&&qt(N),N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){const pt=N.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(at,N,A);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function U(N,A){const at=r.get(N);if(N.version>0&&at.__version!==N.version){X(at,N,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function q(N,A){const at=r.get(N);if(N.version>0&&at.__version!==N.version){X(at,N,A);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function I(N,A){const at=r.get(N);if(N.version>0&&at.__version!==N.version){ct(at,N,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const ft={[ed]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},xt={[bi]:s.NEAREST,[tM]:s.NEAREST_MIPMAP_NEAREST,[ac]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[ih]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},O={[rM]:s.NEVER,[fM]:s.ALWAYS,[sM]:s.LESS,[m0]:s.LEQUAL,[oM]:s.EQUAL,[uM]:s.GEQUAL,[lM]:s.GREATER,[cM]:s.NOTEQUAL};function J(N,A){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===ih||A.magFilter===ac||A.magFilter===Er||A.minFilter===Ni||A.minFilter===ih||A.minFilter===ac||A.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ft[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ft[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ft[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,xt[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,xt[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bi||A.minFilter!==ac&&A.minFilter!==Er||A.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ht(N,A){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",B));const pt=A.source;let Et=v.get(pt);Et===void 0&&(Et={},v.set(pt,Et));const _t=ot(A);if(_t!==N.__cacheKey){Et[_t]===void 0&&(Et[_t]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Et[_t].usedTimes++;const Gt=Et[N.__cacheKey];Gt!==void 0&&(Et[N.__cacheKey].usedTimes--,Gt.usedTimes===0&&D(A)),N.__cacheKey=_t,N.__webglTexture=Et[_t].texture}return at}function X(N,A,at){let pt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=s.TEXTURE_3D);const Et=ht(N,A),_t=A.source;i.bindTexture(pt,N.__webglTexture,s.TEXTURE0+at);const Gt=r.get(_t);if(_t.version!==Gt.__version||Et===!0){i.activeTexture(s.TEXTURE0+at);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Bt=A.colorSpace===Ga?null:Ce.getPrimaries(A.colorSpace),_e=A.colorSpace===Ga||Rt===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=T(A.image,!1,l.maxTextureSize);bt=Le(A,bt);const Ft=c.convert(A.format,A.colorSpace),Qt=c.convert(A.type);let Vt=L(A.internalFormat,Ft,Qt,A.colorSpace,A.isVideoTexture);J(pt,A);let Ot;const ee=A.mipmaps,se=A.isVideoTexture!==!0,Pe=Gt.__version===void 0||Et===!0,j=_t.dataReady,Ct=k(A,bt);if(A.isDepthTexture)Vt=w(A.format===Ho,A.type),Pe&&(se?i.texStorage2D(s.TEXTURE_2D,1,Vt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Vt,bt.width,bt.height,0,Ft,Qt,null));else if(A.isDataTexture)if(ee.length>0){se&&Pe&&i.texStorage2D(s.TEXTURE_2D,Ct,Vt,ee[0].width,ee[0].height);for(let ut=0,yt=ee.length;ut<yt;ut++)Ot=ee[ut],se?j&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ft,Qt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Vt,Ot.width,Ot.height,0,Ft,Qt,Ot.data);A.generateMipmaps=!1}else se?(Pe&&i.texStorage2D(s.TEXTURE_2D,Ct,Vt,bt.width,bt.height),j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Qt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Vt,bt.width,bt.height,0,Ft,Qt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Vt,ee[0].width,ee[0].height,bt.depth);for(let ut=0,yt=ee.length;ut<yt;ut++)if(Ot=ee[ut],A.format!==Ti)if(Ft!==null)if(se){if(j)if(A.layerUpdates.size>0){const At=_v(Ot.width,Ot.height,A.format,A.type);for(const wt of A.layerUpdates){const ne=Ot.data.subarray(wt*At/Ot.data.BYTES_PER_ELEMENT,(wt+1)*At/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,wt,Ot.width,Ot.height,1,Ft,ne)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Vt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?j&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Qt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,Vt,Ot.width,Ot.height,bt.depth,0,Ft,Qt,Ot.data)}else{se&&Pe&&i.texStorage2D(s.TEXTURE_2D,Ct,Vt,ee[0].width,ee[0].height);for(let ut=0,yt=ee.length;ut<yt;ut++)Ot=ee[ut],A.format!==Ti?Ft!==null?se?j&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ft,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?j&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ft,Qt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,Vt,Ot.width,Ot.height,0,Ft,Qt,Ot.data)}else if(A.isDataArrayTexture)if(se){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Vt,bt.width,bt.height,bt.depth),j)if(A.layerUpdates.size>0){const ut=_v(bt.width,bt.height,A.format,A.type);for(const yt of A.layerUpdates){const At=bt.data.subarray(yt*ut/bt.data.BYTES_PER_ELEMENT,(yt+1)*ut/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,Ft,Qt,At)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(A.isData3DTexture)se?(Pe&&i.texStorage3D(s.TEXTURE_3D,Ct,Vt,bt.width,bt.height,bt.depth),j&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Vt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(A.isFramebufferTexture){if(Pe)if(se)i.texStorage2D(s.TEXTURE_2D,Ct,Vt,bt.width,bt.height);else{let ut=bt.width,yt=bt.height;for(let At=0;At<Ct;At++)i.texImage2D(s.TEXTURE_2D,At,Vt,ut,yt,0,Ft,Qt,null),ut>>=1,yt>>=1}}else if(ee.length>0){if(se&&Pe){const ut=kt(ee[0]);i.texStorage2D(s.TEXTURE_2D,Ct,Vt,ut.width,ut.height)}for(let ut=0,yt=ee.length;ut<yt;ut++)Ot=ee[ut],se?j&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ft,Qt,Ot):i.texImage2D(s.TEXTURE_2D,ut,Vt,Ft,Qt,Ot);A.generateMipmaps=!1}else if(se){if(Pe){const ut=kt(bt);i.texStorage2D(s.TEXTURE_2D,Ct,Vt,ut.width,ut.height)}j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Qt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Vt,Ft,Qt,bt);M(A)&&y(pt),Gt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ct(N,A,at){if(A.image.length!==6)return;const pt=ht(N,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+at);const _t=r.get(Et);if(Et.version!==_t.__version||pt===!0){i.activeTexture(s.TEXTURE0+at);const Gt=Ce.getPrimaries(Ce.workingColorSpace),Rt=A.colorSpace===Ga?null:Ce.getPrimaries(A.colorSpace),Bt=A.colorSpace===Ga||Gt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let yt=0;yt<6;yt++)!_e&&!bt?Ft[yt]=T(A.image[yt],!0,l.maxCubemapSize):Ft[yt]=bt?A.image[yt].image:A.image[yt],Ft[yt]=Le(A,Ft[yt]);const Qt=Ft[0],Vt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),ee=L(A.internalFormat,Vt,Ot,A.colorSpace),se=A.isVideoTexture!==!0,Pe=_t.__version===void 0||pt===!0,j=Et.dataReady;let Ct=k(A,Qt);J(s.TEXTURE_CUBE_MAP,A);let ut;if(_e){se&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ee,Qt.width,Qt.height);for(let yt=0;yt<6;yt++){ut=Ft[yt].mipmaps;for(let At=0;At<ut.length;At++){const wt=ut[At];A.format!==Ti?Vt!==null?se?j&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At,0,0,wt.width,wt.height,Vt,wt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At,ee,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At,0,0,wt.width,wt.height,Vt,Ot,wt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At,ee,wt.width,wt.height,0,Vt,Ot,wt.data)}}}else{if(ut=A.mipmaps,se&&Pe){ut.length>0&&Ct++;const yt=kt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,ee,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ft[yt].width,Ft[yt].height,Vt,Ot,Ft[yt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,Ft[yt].width,Ft[yt].height,0,Vt,Ot,Ft[yt].data);for(let At=0;At<ut.length;At++){const ne=ut[At].image[yt].image;se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At+1,0,0,ne.width,ne.height,Vt,Ot,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At+1,ee,ne.width,ne.height,0,Vt,Ot,ne.data)}}else{se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Vt,Ot,Ft[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,Vt,Ot,Ft[yt]);for(let At=0;At<ut.length;At++){const wt=ut[At];se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At+1,0,0,Vt,Ot,wt.image[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At+1,ee,Vt,Ot,wt.image[yt])}}}M(A)&&y(s.TEXTURE_CUBE_MAP),_t.__version=Et.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function St(N,A,at,pt,Et,_t){const Gt=c.convert(at.format,at.colorSpace),Rt=c.convert(at.type),Bt=L(at.internalFormat,Gt,Rt,at.colorSpace),_e=r.get(A),bt=r.get(at);if(bt.__renderTarget=A,!_e.__hasExternalTextures){const Ft=Math.max(1,A.width>>_t),Qt=Math.max(1,A.height>>_t);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,_t,Bt,Ft,Qt,A.depth,0,Gt,Rt,null):i.texImage2D(Et,_t,Bt,Ft,Qt,0,Gt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ge(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Et,bt.__webglTexture,0,he(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Et,bt.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(N,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){const pt=A.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,_t=w(A.stencilBuffer,Et),Gt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=he(A);ge(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,_t,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,_t,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Gt,s.RENDERBUFFER,N)}else{const pt=A.textures;for(let Et=0;Et<pt.length;Et++){const _t=pt[Et],Gt=c.convert(_t.format,_t.colorSpace),Rt=c.convert(_t.type),Bt=L(_t.internalFormat,Gt,Rt,_t.colorSpace),_e=he(A);at&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Bt,A.width,A.height):ge(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Bt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),gt(A.depthTexture,0);const Et=pt.__webglTexture,_t=he(A);if(A.depthTexture.format===Io)ge(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Ho)ge(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Wt(N){const A=r.get(N),at=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const pt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=pt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Lt(A.__webglFramebuffer,N)}else if(at){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=s.createRenderbuffer(),Mt(A.__webglDepthbuffer[pt],N,!1);else{const Et=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Mt(A.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Et)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(N,A,at){const pt=r.get(N);A!==void 0&&St(pt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&Wt(N)}function we(N){const A=N.texture,at=r.get(N),pt=r.get(A);N.addEventListener("dispose",z);const Et=N.textures,_t=N.isWebGLCubeRenderTarget===!0,Gt=Et.length>1;if(Gt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=A.version,f.memory.textures++),_t){at.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Rt]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)at.__webglFramebuffer[Rt][Bt]=s.createFramebuffer()}else at.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)at.__webglFramebuffer[Rt]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Gt)for(let Rt=0,Bt=Et.length;Rt<Bt;Rt++){const _e=r.get(Et[Rt]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&ge(N)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Bt=Et[Rt];at.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Rt]);const _e=c.convert(Bt.format,Bt.colorSpace),bt=c.convert(Bt.type),Ft=L(Bt.internalFormat,_e,bt,Bt.colorSpace,N.isXRRenderTarget===!0),Qt=he(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Ft,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,at.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(at.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),J(s.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)St(at.__webglFramebuffer[Rt][Bt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Bt);else St(at.__webglFramebuffer[Rt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(A)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Rt=0,Bt=Et.length;Rt<Bt;Rt++){const _e=Et[Rt],bt=r.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),J(s.TEXTURE_2D,_e),St(at.__webglFramebuffer,N,_e,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),M(_e)&&y(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,pt.__webglTexture),J(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)St(at.__webglFramebuffer[Bt],N,A,s.COLOR_ATTACHMENT0,Rt,Bt);else St(at.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,Rt,0);M(A)&&y(Rt),i.unbindTexture()}N.depthBuffer&&Wt(N)}function Ue(N){const A=N.textures;for(let at=0,pt=A.length;at<pt;at++){const Et=A[at];if(M(Et)){const _t=P(N),Gt=r.get(Et).__webglTexture;i.bindTexture(_t,Gt),y(_t),i.unbindTexture()}}}const fe=[],H=[];function Tn(N){if(N.samples>0){if(ge(N)===!1){const A=N.textures,at=N.width,pt=N.height;let Et=s.COLOR_BUFFER_BIT;const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=r.get(N),Rt=A.length>1;if(Rt)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=r.get(A[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,at,pt,0,0,at,pt,Et,s.NEAREST),p===!0&&(fe.length=0,H.length=0,fe.push(s.COLOR_ATTACHMENT0+Bt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(_t),H.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const _e=r.get(A[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function he(N){return Math.min(l.maxSamples,N.samples)}function ge(N){const A=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function qt(N){const A=f.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function Le(N,A){const at=N.colorSpace,pt=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Rs&&at!==Ga&&(Ce.getTransfer(at)===Ge?(pt!==Ti||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=nt,this.setTexture2D=gt,this.setTexture2DArray=U,this.setTexture3D=q,this.setTextureCube=I,this.rebindTextures=Yt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ge}function G1(s,t){function i(r,l=Ga){let c;const f=Ce.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===o0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===r0)return s.BYTE;if(r===s0)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Od)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===l0)return s.ALPHA;if(r===c0)return s.RGB;if(r===Ti)return s.RGBA;if(r===u0)return s.LUMINANCE;if(r===f0)return s.LUMINANCE_ALPHA;if(r===Io)return s.DEPTH_COMPONENT;if(r===Ho)return s.DEPTH_STENCIL;if(r===h0)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===d0)return s.RG;if(r===Fd)return s.RG_INTEGER;if(r===Id)return s.RGBA_INTEGER;if(r===Rc||r===Cc||r===wc||r===Dc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===id||r===ad||r===rd||r===sd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===od||r===ld||r===cd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===od||r===ld)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===yd||r===xd||r===Sd||r===Md||r===Ed)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ud)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_d)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ed)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uc||r===Td||r===bd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Uc)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Td)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===p0||r===Ad||r===Rd||r===Cd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Uc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k1=`
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

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Wn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qa({vertexShader:V1,fragmentShader:k1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ei(new Gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W1 extends Ds{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,E=null;const T=new X1,M=i.getContextAttributes();let y=null,P=null;const L=[],w=[],k=new te;let B=null;const z=new di;z.viewport=new tn;const W=new di;W.viewport=new tn;const D=[z,W],R=new hE;let G=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ct=L[X];return ct===void 0&&(ct=new bh,L[X]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(X){let ct=L[X];return ct===void 0&&(ct=new bh,L[X]=ct),ct.getGripSpace()},this.getHand=function(X){let ct=L[X];return ct===void 0&&(ct=new bh,L[X]=ct),ct.getHandSpace()};function $(X){const ct=w.indexOf(X.inputSource);if(ct===-1)return;const St=L[ct];St!==void 0&&(St.update(X.inputSource,X.frame,m||f),St.dispatchEvent({type:X.type,data:X.inputSource}))}function ot(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",ot),l.removeEventListener("inputsourceschange",gt);for(let X=0;X<L.length;X++){const ct=w[X];ct!==null&&(w[X]=null,L[X].disconnect(ct))}G=null,nt=null,T.reset(),t.setRenderTarget(y),S=null,v=null,_=null,l=null,P=null,ht.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",ot),l.addEventListener("inputsourceschange",gt),M.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Mt=null,Lt=null;M.depth&&(Lt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?Ho:Io,Mt=M.stencil?Fo:br);const Wt={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(Wt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new Ar(v.textureWidth,v.textureHeight,{format:Ti,type:ca,depthTexture:new b0(v.textureWidth,v.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ar(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),ht.setContext(l),ht.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function gt(X){for(let ct=0;ct<X.removed.length;ct++){const St=X.removed[ct],Mt=w.indexOf(St);Mt>=0&&(w[Mt]=null,L[Mt].disconnect(St))}for(let ct=0;ct<X.added.length;ct++){const St=X.added[ct];let Mt=w.indexOf(St);if(Mt===-1){for(let Wt=0;Wt<L.length;Wt++)if(Wt>=w.length){w.push(St),Mt=Wt;break}else if(w[Wt]===null){w[Wt]=St,Mt=Wt;break}if(Mt===-1)break}const Lt=L[Mt];Lt&&Lt.connect(St)}}const U=new Q,q=new Q;function I(X,ct,St){U.setFromMatrixPosition(ct.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const Mt=U.distanceTo(q),Lt=ct.projectionMatrix.elements,Wt=St.projectionMatrix.elements,Yt=Lt[14]/(Lt[10]-1),we=Lt[14]/(Lt[10]+1),Ue=(Lt[9]+1)/Lt[5],fe=(Lt[9]-1)/Lt[5],H=(Lt[8]-1)/Lt[0],Tn=(Wt[8]+1)/Wt[0],he=Yt*H,ge=Yt*Tn,qt=Mt/(-H+Tn),Le=qt*-H;if(ct.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(qt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Lt[10]===-1)X.projectionMatrix.copy(ct.projectionMatrix),X.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const kt=Yt+qt,N=we+qt,A=he-Le,at=ge+(Mt-Le),pt=Ue*we/N*kt,Et=fe*we/N*kt;X.projectionMatrix.makePerspective(A,at,pt,Et,kt,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ft(X,ct){ct===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ct.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let ct=X.near,St=X.far;T.texture!==null&&(T.depthNear>0&&(ct=T.depthNear),T.depthFar>0&&(St=T.depthFar)),R.near=W.near=z.near=ct,R.far=W.far=z.far=St,(G!==R.near||nt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,nt=R.far),z.layers.mask=X.layers.mask|2,W.layers.mask=X.layers.mask|4,R.layers.mask=z.layers.mask|W.layers.mask;const Mt=X.parent,Lt=R.cameras;ft(R,Mt);for(let Wt=0;Wt<Lt.length;Wt++)ft(Lt[Wt],Mt);Lt.length===2?I(R,z,W):R.projectionMatrix.copy(z.projectionMatrix),xt(X,R,Mt)};function xt(X,ct,St){St===null?X.matrix.copy(ct.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(ct.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ct.projectionMatrix),X.projectionMatrixInverse.copy(ct.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=wd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(X){p=X,v!==null&&(v.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let O=null;function J(X,ct){if(g=ct.getViewerPose(m||f),E=ct,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let Mt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,Mt=!0);for(let Yt=0;Yt<St.length;Yt++){const we=St[Yt];let Ue=null;if(S!==null)Ue=S.getViewport(we);else{const H=_.getViewSubImage(v,we);Ue=H.viewport,Yt===0&&(t.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(P))}let fe=D[Yt];fe===void 0&&(fe=new di,fe.layers.enable(Yt),fe.viewport=new tn,D[Yt]=fe),fe.matrix.fromArray(we.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(we.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Yt===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Mt===!0&&R.cameras.push(fe)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Yt=_.getDepthInformation(St[0]);Yt&&Yt.isValid&&Yt.texture&&T.init(t,Yt,l.renderState)}}for(let St=0;St<L.length;St++){const Mt=w[St],Lt=L[St];Mt!==null&&Lt!==void 0&&Lt.update(Mt,ct,m||f)}O&&O(X,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),E=null}const ht=new U0;ht.setAnimationLoop(J),this.setAnimationLoop=function(X){O=X},this.dispose=function(){}}}const _r=new ua,q1=new Ze;function Y1(s,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,M0(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,P,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,P,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Xn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Xn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=t.get(y),L=P.envMap,w=P.envMapRotation;L&&(M.envMap.value=L,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(_r)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,P,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const P=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function j1(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,L){const w=L.program;r.uniformBlockBinding(P,w)}function m(P,L){let w=l[P.id];w===void 0&&(E(P),w=g(P),l[P.id]=w,P.addEventListener("dispose",M));const k=L.program;r.updateUBOMapping(P,k);const B=t.render.frame;c[P.id]!==B&&(v(P),c[P.id]=B)}function g(P){const L=_();P.__bindingPointIndex=L;const w=s.createBuffer(),k=P.__size,B=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,k,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const L=l[P.id],w=P.uniforms,k=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let B=0,z=w.length;B<z;B++){const W=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,R=W.length;D<R;D++){const G=W[D];if(S(G,B,D,k)===!0){const nt=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let gt=0;gt<$.length;gt++){const U=$[gt],q=T(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,nt+ot,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,ot),ot+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,L,w,k){const B=P.value,z=L+"_"+w;if(k[z]===void 0)return typeof B=="number"||typeof B=="boolean"?k[z]=B:k[z]=B.clone(),!0;{const W=k[z];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return k[z]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function E(P){const L=P.uniforms;let w=0;const k=16;for(let z=0,W=L.length;z<W;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,G=D.length;R<G;R++){const nt=D[R],$=Array.isArray(nt.value)?nt.value:[nt.value];for(let ot=0,gt=$.length;ot<gt;ot++){const U=$[ot],q=T(U),I=w%k,ft=I%q.boundary,xt=I+ft;w+=ft,xt!==0&&k-xt<q.storage&&(w+=k-xt),nt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=q.storage}}}const B=w%k;return B>0&&(w+=k-B),P.__size=w,P.__cache={},this}function T(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function M(P){const L=P.target;L.removeEventListener("dispose",M);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const P in l)s.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:y}}class Z1{constructor(t={}){const{canvas:i=dM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=hi;let B=0,z=0,W=null,D=-1,R=null;const G=new tn,nt=new tn;let $=null;const ot=new ze(0);let gt=0,U=i.width,q=i.height,I=1,ft=null,xt=null;const O=new tn(0,0,U,q),J=new tn(0,0,U,q);let ht=!1;const X=new Vd;let ct=!1,St=!1;const Mt=new Ze,Lt=new Ze,Wt=new Q,Yt=new tn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ue=!1;function fe(){return W===null?I:1}let H=r;function Tn(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nd}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",wt,!1),H===null){const Z="webgl2";if(H=Tn(Z,C),H===null)throw Tn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let he,ge,qt,Le,kt,N,A,at,pt,Et,_t,Gt,Rt,Bt,_e,bt,Ft,Qt,Vt,Ot,ee,se,Pe,j;function Ct(){he=new rA(H),he.init(),se=new G1(H,he),ge=new Jb(H,he,t,se),qt=new I1(H,he),ge.reverseDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),Le=new lA(H),kt=new A1,N=new H1(H,he,qt,kt,ge,se,Le),A=new tA(w),at=new aA(w),pt=new pE(H),Pe=new Kb(H,pt),Et=new sA(H,pt,Le,Pe),_t=new uA(H,Et,pt,Le),Vt=new cA(H,ge,N),bt=new $b(kt),Gt=new b1(w,A,at,he,ge,Pe,bt),Rt=new Y1(w,kt),Bt=new C1,_e=new O1(he),Qt=new Zb(w,A,at,qt,_t,S,p),Ft=new B1(w,_t,ge),j=new j1(H,Le,ge,qt),Ot=new Qb(H,he,Le),ee=new oA(H,he,Le),Le.programs=Gt.programs,w.capabilities=ge,w.extensions=he,w.properties=kt,w.renderLists=Bt,w.shadowMap=Ft,w.state=qt,w.info=Le}Ct();const ut=new W1(w,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(U,q,!1))},this.getSize=function(C){return C.set(U,q)},this.setSize=function(C,Z,rt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,q=Z,i.width=Math.floor(C*I),i.height=Math.floor(Z*I),rt===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(U*I,q*I).floor()},this.setDrawingBufferSize=function(C,Z,rt){U=C,q=Z,I=rt,i.width=Math.floor(C*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,Z,rt,st){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,Z,rt,st),qt.viewport(G.copy(O).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,Z,rt,st){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,Z,rt,st),qt.scissor(nt.copy(J).multiplyScalar(I).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){qt.setScissorTest(ht=C)},this.setOpaqueSort=function(C){ft=C},this.setTransparentSort=function(C){xt=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,rt=!0){let st=0;if(C){let Y=!1;if(W!==null){const Tt=W.texture.format;Y=Tt===Id||Tt===Fd||Tt===Bd}if(Y){const Tt=W.texture.type,Dt=Tt===ca||Tt===br||Tt===Bo||Tt===Fo||Tt===zd||Tt===Pd,Nt=Qt.getClearColor(),Pt=Qt.getClearAlpha(),ie=Nt.r,$t=Nt.g,jt=Nt.b;Dt?(E[0]=ie,E[1]=$t,E[2]=jt,E[3]=Pt,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=ie,T[1]=$t,T[2]=jt,T[3]=Pt,H.clearBufferiv(H.COLOR,0,T))}else st|=H.COLOR_BUFFER_BIT}Z&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Qt.dispose(),Bt.dispose(),_e.dispose(),kt.dispose(),A.dispose(),at.dispose(),_t.dispose(),Pe.dispose(),j.dispose(),Gt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ns),ut.removeEventListener("sessionend",Os),Ai.stop()};function yt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=Le.autoReset,Z=Ft.enabled,rt=Ft.autoUpdate,st=Ft.needsUpdate,Y=Ft.type;Ct(),Le.autoReset=C,Ft.enabled=Z,Ft.autoUpdate=rt,Ft.needsUpdate=st,Ft.type=Y}function wt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const Z=C.target;Z.removeEventListener("dispose",ne),Ye(Z)}function Ye(C){cn(C),kt.remove(C)}function cn(C){const Z=kt.get(C).programs;Z!==void 0&&(Z.forEach(function(rt){Gt.releaseProgram(rt)}),C.isShaderMaterial&&Gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,rt,st,Y,Tt){Z===null&&(Z=we);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=Ps(C,Z,rt,st,Y);qt.setMaterial(st,Dt);let Pt=rt.index,ie=1;if(st.wireframe===!0){if(Pt=Et.getWireframeAttribute(rt),Pt===void 0)return;ie=2}const $t=rt.drawRange,jt=rt.attributes.position;let xe=$t.start*ie,Se=($t.start+$t.count)*ie;Tt!==null&&(xe=Math.max(xe,Tt.start*ie),Se=Math.min(Se,(Tt.start+Tt.count)*ie)),Pt!==null?(xe=Math.max(xe,0),Se=Math.min(Se,Pt.count)):jt!=null&&(xe=Math.max(xe,0),Se=Math.min(Se,jt.count));const ke=Se-xe;if(ke<0||ke===1/0)return;Pe.setup(Y,st,Nt,rt,Pt);let be,ae=Ot;if(Pt!==null&&(be=pt.get(Pt),ae=ee,ae.setIndex(be)),Y.isMesh)st.wireframe===!0?(qt.setLineWidth(st.wireframeLinewidth*fe()),ae.setMode(H.LINES)):ae.setMode(H.TRIANGLES);else if(Y.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),qt.setLineWidth(Kt*fe()),Y.isLineSegments?ae.setMode(H.LINES):Y.isLineLoop?ae.setMode(H.LINE_LOOP):ae.setMode(H.LINE_STRIP)}else Y.isPoints?ae.setMode(H.POINTS):Y.isSprite&&ae.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Lc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,un=Y._multiDrawCounts,Ee=Y._multiDrawCount,zn=Pt?pt.get(Pt).bytesPerElement:1,gi=kt.get(st).currentProgram.getUniforms();for(let Un=0;Un<Ee;Un++)gi.setValue(H,"_gl_DrawID",Un),ae.render(Kt[Un]/zn,un[Un])}else if(Y.isInstancedMesh)ae.renderInstances(xe,ke,Y.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,un=Math.min(rt.instanceCount,Kt);ae.renderInstances(xe,ke,un)}else ae.render(xe,ke)};function Te(C,Z,rt){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Ke(C,Z,rt),C.side=Wa,C.needsUpdate=!0,Ke(C,Z,rt),C.side=Li):Ke(C,Z,rt)}this.compile=function(C,Z,rt=null){rt===null&&(rt=C),y=_e.get(rt),y.init(Z),L.push(y),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),C!==rt&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const st=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const Nt=Tt[Dt];Te(Nt,rt,Y),st.add(Nt)}else Te(Tt,rt,Y),st.add(Tt)}),y=L.pop(),st},this.compileAsync=function(C,Z,rt=null){const st=this.compile(C,Z,rt);return new Promise(Y=>{function Tt(){if(st.forEach(function(Dt){kt.get(Dt).currentProgram.isReady()&&st.delete(Dt)}),st.size===0){Y(C);return}setTimeout(Tt,10)}he.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _n=null;function pi(C){_n&&_n(C)}function Ns(){Ai.stop()}function Os(){Ai.start()}const Ai=new U0;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){_n=C,ut.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},ut.addEventListener("sessionstart",Ns),ut.addEventListener("sessionend",Os),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Z,W),y=_e.get(C,L.length),y.init(Z),L.push(y),Lt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),X.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,St),M=Bt.get(C,P.length),M.init(),P.push(M),ut.enabled===!0&&ut.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ya(Tt,Z,-1/0,w.sortObjects)}Ya(C,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(ft,xt),Ue=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ue&&Qt.addToRenderList(M,C),this.info.render.frame++,ct===!0&&bt.beginShadows();const rt=y.state.shadowsArray;Ft.render(rt,C,Z),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Y=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Y.length>0)for(let Dt=0,Nt=Tt.length;Dt<Nt;Dt++){const Pt=Tt[Dt];zs(st,Y,C,Pt)}Ue&&Qt.render(C);for(let Dt=0,Nt=Tt.length;Dt<Nt;Dt++){const Pt=Tt[Dt];Rr(M,C,Pt,Pt.viewport)}}else Y.length>0&&zs(st,Y,C,Z),Ue&&Qt.render(C),Rr(M,C,Z);W!==null&&z===0&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),C.isScene===!0&&C.onAfterRender(w,C,Z),Pe.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],ct===!0&&bt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Ya(C,Z,rt,st){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){st&&Yt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Lt);const Dt=_t.update(C),Nt=C.material;Nt.visible&&M.push(C,Dt,Nt,rt,Yt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Dt=_t.update(C),Nt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Yt.copy(C.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Yt.copy(Dt.boundingSphere.center)),Yt.applyMatrix4(C.matrixWorld).applyMatrix4(Lt)),Array.isArray(Nt)){const Pt=Dt.groups;for(let ie=0,$t=Pt.length;ie<$t;ie++){const jt=Pt[ie],xe=Nt[jt.materialIndex];xe&&xe.visible&&M.push(C,Dt,xe,rt,Yt.z,jt)}}else Nt.visible&&M.push(C,Dt,Nt,rt,Yt.z,null)}}const Tt=C.children;for(let Dt=0,Nt=Tt.length;Dt<Nt;Dt++)Ya(Tt[Dt],Z,rt,st)}function Rr(C,Z,rt,st){const Y=C.opaque,Tt=C.transmissive,Dt=C.transparent;y.setupLightsView(rt),ct===!0&&bt.setGlobalState(w.clippingPlanes,rt),st&&qt.viewport(G.copy(st)),Y.length>0&&ja(Y,Z,rt),Tt.length>0&&ja(Tt,Z,rt),Dt.length>0&&ja(Dt,Z,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function zs(C,Z,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[st.id]===void 0&&(y.state.transmissionRenderTarget[st.id]=new Ar(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Go:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[st.id],Dt=st.viewport||G;Tt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(ot),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),Ue&&Qt.render(rt);const Pt=w.toneMapping;w.toneMapping=ka;const ie=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),y.setupLightsView(st),ct===!0&&bt.setGlobalState(w.clippingPlanes,st),ja(C,rt,st),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),he.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let jt=0,xe=Z.length;jt<xe;jt++){const Se=Z[jt],ke=Se.object,be=Se.geometry,ae=Se.material,Kt=Se.group;if(ae.side===Li&&ke.layers.test(st.layers)){const un=ae.side;ae.side=Xn,ae.needsUpdate=!0,mi(ke,rt,st,be,ae,Kt),ae.side=un,ae.needsUpdate=!0,$t=!0}}$t===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt),w.setClearColor(ot,gt),ie!==void 0&&(st.viewport=ie),w.toneMapping=Pt}function ja(C,Z,rt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let Y=0,Tt=C.length;Y<Tt;Y++){const Dt=C[Y],Nt=Dt.object,Pt=Dt.geometry,ie=Dt.group;let $t=Dt.material;$t.allowOverride===!0&&st!==null&&($t=st),Nt.layers.test(rt.layers)&&mi(Nt,Z,rt,Pt,$t,ie)}}function mi(C,Z,rt,st,Y,Tt){C.onBeforeRender(w,Z,rt,st,Y,Tt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(w,Z,rt,st,C,Tt),Y.transparent===!0&&Y.side===Li&&Y.forceSinglePass===!1?(Y.side=Xn,Y.needsUpdate=!0,w.renderBufferDirect(rt,Z,st,Y,C,Tt),Y.side=Wa,Y.needsUpdate=!0,w.renderBufferDirect(rt,Z,st,Y,C,Tt),Y.side=Li):w.renderBufferDirect(rt,Z,st,Y,C,Tt),C.onAfterRender(w,Z,rt,st,Y,Tt)}function Ke(C,Z,rt){Z.isScene!==!0&&(Z=we);const st=kt.get(C),Y=y.state.lights,Tt=y.state.shadowsArray,Dt=Y.state.version,Nt=Gt.getParameters(C,Y.state,Tt,Z,rt),Pt=Gt.getProgramCacheKey(Nt);let ie=st.programs;st.environment=C.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ie===void 0&&(C.addEventListener("dispose",ne),ie=new Map,st.programs=ie);let $t=ie.get(Pt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Dt)return Pi(C,Nt),$t}else Nt.uniforms=Gt.getUniforms(C),C.onBeforeCompile(Nt,w),$t=Gt.acquireProgram(Nt,Pt),ie.set(Pt,$t),st.uniforms=Nt.uniforms;const jt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=bt.uniform),Pi(C,Nt),st.needsLights=Wc(C),st.lightsStateVersion=Dt,st.needsLights&&(jt.ambientLightColor.value=Y.state.ambient,jt.lightProbe.value=Y.state.probe,jt.directionalLights.value=Y.state.directional,jt.directionalLightShadows.value=Y.state.directionalShadow,jt.spotLights.value=Y.state.spot,jt.spotLightShadows.value=Y.state.spotShadow,jt.rectAreaLights.value=Y.state.rectArea,jt.ltc_1.value=Y.state.rectAreaLTC1,jt.ltc_2.value=Y.state.rectAreaLTC2,jt.pointLights.value=Y.state.point,jt.pointLightShadows.value=Y.state.pointShadow,jt.hemisphereLights.value=Y.state.hemi,jt.directionalShadowMap.value=Y.state.directionalShadowMap,jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,jt.spotShadowMap.value=Y.state.spotShadowMap,jt.spotLightMatrix.value=Y.state.spotLightMatrix,jt.spotLightMap.value=Y.state.spotLightMap,jt.pointShadowMap.value=Y.state.pointShadowMap,jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function vn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Nc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Pi(C,Z){const rt=kt.get(C);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Ps(C,Z,rt,st,Y){Z.isScene!==!0&&(Z=we),N.resetTextureUnits();const Tt=Z.fog,Dt=st.isMeshStandardMaterial?Z.environment:null,Nt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Rs,Pt=(st.isMeshStandardMaterial?at:A).get(st.envMap||Dt),ie=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!rt.morphAttributes.position,xe=!!rt.morphAttributes.normal,Se=!!rt.morphAttributes.color;let ke=ka;st.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ke=w.toneMapping);const be=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ae=be!==void 0?be.length:0,Kt=kt.get(st),un=y.state.lights;if(ct===!0&&(St===!0||C!==R)){const Qe=C===R&&st.id===D;bt.setState(st,C,Qe)}let Ee=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||Kt.outputColorSpace!==Nt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Pt||st.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==ie||Kt.vertexTangents!==$t||Kt.morphTargets!==jt||Kt.morphNormals!==xe||Kt.morphColors!==Se||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Kt.__version=st.version);let zn=Kt.currentProgram;Ee===!0&&(zn=Ke(st,Z,Y));let gi=!1,Un=!1,pn=!1;const Be=zn.getUniforms(),Ln=Kt.uniforms;if(qt.useProgram(zn.program)&&(gi=!0,Un=!0,pn=!0),st.id!==D&&(D=st.id,Un=!0),gi||R!==C){qt.buffers.depth.getReversed()?(Mt.copy(C.projectionMatrix),mM(Mt),gM(Mt),Be.setValue(H,"projectionMatrix",Mt)):Be.setValue(H,"projectionMatrix",C.projectionMatrix),Be.setValue(H,"viewMatrix",C.matrixWorldInverse);const yn=Be.map.cameraPosition;yn!==void 0&&yn.setValue(H,Wt.setFromMatrixPosition(C.matrixWorld)),ge.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Un=!0,pn=!0)}if(Y.isSkinnedMesh){Be.setOptional(H,Y,"bindMatrix"),Be.setOptional(H,Y,"bindMatrixInverse");const Qe=Y.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Be.setValue(H,"boneTexture",Qe.boneTexture,N))}Y.isBatchedMesh&&(Be.setOptional(H,Y,"batchingTexture"),Be.setValue(H,"batchingTexture",Y._matricesTexture,N),Be.setOptional(H,Y,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",Y._indirectTexture,N),Be.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",Y._colorsTexture,N));const bn=rt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Vt.update(Y,rt,zn),(Un||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Be.setValue(H,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Ln.envMapIntensity.value=Z.environmentIntensity),Un&&(Be.setValue(H,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Xc(Ln,pn),Tt&&st.fog===!0&&Rt.refreshFogUniforms(Ln,Tt),Rt.refreshMaterialUniforms(Ln,st,I,q,y.state.transmissionRenderTarget[C.id]),Nc.upload(H,vn(Kt),Ln,N)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Nc.upload(H,vn(Kt),Ln,N),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(H,"center",Y.center),Be.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(H,"normalMatrix",Y.normalMatrix),Be.setValue(H,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let yn=0,Cr=Qe.length;yn<Cr;yn++){const Pn=Qe[yn];j.update(Pn,zn),j.bind(Pn,zn)}}return zn}function Xc(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Wc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,Z,rt){const st=kt.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),kt.get(C.texture).__webglTexture=Z,kt.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const rt=kt.get(C);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const jo=H.createFramebuffer();this.setRenderTarget=function(C,Z=0,rt=0){W=C,B=Z,z=rt;let st=!0,Y=null,Tt=!1,Dt=!1;if(C){const Pt=kt.get(C);if(Pt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(Pt.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(Pt.__hasExternalTextures)N.rebindTextures(C,kt.get(C.texture).__webglTexture,kt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const jt=C.depthTexture;if(Pt.__boundDepthTexture!==jt){if(jt!==null&&kt.has(jt)&&(C.width!==jt.image.width||C.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const ie=C.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Dt=!0);const $t=kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?Y=$t[Z][rt]:Y=$t[Z],Tt=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?Y=kt.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[rt]:Y=$t,G.copy(C.viewport),nt.copy(C.scissor),$=C.scissorTest}else G.copy(O).multiplyScalar(I).floor(),nt.copy(J).multiplyScalar(I).floor(),$=ht;if(rt!==0&&(Y=jo),qt.bindFramebuffer(H.FRAMEBUFFER,Y)&&st&&qt.drawBuffers(C,Y),qt.viewport(G),qt.scissor(nt),qt.setScissorTest($),Tt){const Pt=kt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pt.__webglTexture,rt)}else if(Dt){const Pt=kt.get(C.texture),ie=Z;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pt.__webglTexture,rt,ie)}else if(C!==null&&rt!==0){const Pt=kt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(C,Z,rt,st,Y,Tt,Dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){qt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Pt=C.texture,ie=Pt.format,$t=Pt.type;if(!ge.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-st&&rt>=0&&rt<=C.height-Y&&H.readPixels(Z,rt,st,Y,se.convert(ie),se.convert($t),Tt)}finally{const Pt=W!==null?kt.get(W).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,rt,st,Y,Tt,Dt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt)if(Z>=0&&Z<=C.width-st&&rt>=0&&rt<=C.height-Y){qt.bindFramebuffer(H.FRAMEBUFFER,Nt);const Pt=C.texture,ie=Pt.format,$t=Pt.type;if(!ge.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(Z,rt,st,Y,se.convert(ie),se.convert($t),0);const xe=W!==null?kt.get(W).__webglFramebuffer:null;qt.bindFramebuffer(H.FRAMEBUFFER,xe);const Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pM(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(jt),H.deleteSync(Se),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,rt=0){const st=Math.pow(2,-rt),Y=Math.floor(C.image.width*st),Tt=Math.floor(C.image.height*st),Dt=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;N.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Dt,Nt,Y,Tt),qt.unbindTexture()};const Za=H.createFramebuffer(),Bs=H.createFramebuffer();this.copyTextureToTexture=function(C,Z,rt=null,st=null,Y=0,Tt=null){Tt===null&&(Y!==0?(Lc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Dt,Nt,Pt,ie,$t,jt,xe,Se,ke;const be=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,Pt=rt.isBox3?rt.max.z-rt.min.z:1,ie=rt.min.x,$t=rt.min.y,jt=rt.isBox3?rt.min.z:0;else{const bn=Math.pow(2,-Y);Dt=Math.floor(be.width*bn),Nt=Math.floor(be.height*bn),C.isDataArrayTexture?Pt=be.depth:C.isData3DTexture?Pt=Math.floor(be.depth*bn):Pt=1,ie=0,$t=0,jt=0}st!==null?(xe=st.x,Se=st.y,ke=st.z):(xe=0,Se=0,ke=0);const ae=se.convert(Z.format),Kt=se.convert(Z.type);let un;Z.isData3DTexture?(N.setTexture3D(Z,0),un=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),un=H.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),un=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),zn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Un=H.getParameter(H.UNPACK_SKIP_ROWS),pn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ie),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const Be=C.isDataArrayTexture||C.isData3DTexture,Ln=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const bn=kt.get(C),Qe=kt.get(Z),yn=kt.get(bn.__renderTarget),Cr=kt.get(Qe.__renderTarget);qt.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Pn=0;Pn<Pt;Pn++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(C).__webglTexture,Y,jt+Pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(Z).__webglTexture,Tt,ke+Pn)),H.blitFramebuffer(ie,$t,Dt,Nt,xe,Se,Dt,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||kt.has(C)){const bn=kt.get(C),Qe=kt.get(Z);qt.bindFramebuffer(H.READ_FRAMEBUFFER,Za),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Bs);for(let yn=0;yn<Pt;yn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Y,jt+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Y),Ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,Tt),Y!==0?H.blitFramebuffer(ie,$t,Dt,Nt,xe,Se,Dt,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):Ln?H.copyTexSubImage3D(un,Tt,xe,Se,ke+yn,ie,$t,Dt,Nt):H.copyTexSubImage2D(un,Tt,xe,Se,ie,$t,Dt,Nt);qt.bindFramebuffer(H.READ_FRAMEBUFFER,null),qt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ln?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(un,Tt,xe,Se,ke,Dt,Nt,Pt,ae,Kt,be.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(un,Tt,xe,Se,ke,Dt,Nt,Pt,ae,be.data):H.texSubImage3D(un,Tt,xe,Se,ke,Dt,Nt,Pt,ae,Kt,be):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,xe,Se,Dt,Nt,ae,Kt,be.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,xe,Se,be.width,be.height,ae,be.data):H.texSubImage2D(H.TEXTURE_2D,Tt,xe,Se,Dt,Nt,ae,Kt,be);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,pn),Tt===0&&Z.generateMipmaps&&H.generateMipmap(un),qt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,rt=null,st=null,Y=0){return Lc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,rt,st,Y)},this.initRenderTarget=function(C){kt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),qt.unbindTexture()},this.resetState=function(){B=0,z=0,W=null,qt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const K1={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},Q1={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function P0(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function B0(s){return s.replace("'","").replace("2","")}function Vv(s){return s.endsWith("'")&&!s.endsWith("2")}function J1(s){return s.endsWith("2")}const kv=16777215,$1=.022;class tR{constructor(t){qe(this,"renderer");qe(this,"scene");qe(this,"camera");qe(this,"arrowGroup");qe(this,"traceGroup",null);qe(this,"currentMove",null);qe(this,"traceProgress",0);qe(this,"width",1);qe(this,"height",1);this.renderer=new Z1({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new VM,this.camera=new di(45,1,.01,100),this.camera.position.set(0,0,3);const i=new fE(16777215,.9),r=new uE(16777215,.6);r.position.set(2,3,4),this.scene.add(i,r),this.arrowGroup=new Tr,this.scene.add(this.arrowGroup)}resize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.rebuildArrow(t))}tick(){this.currentMove&&(this.traceProgress+=$1,this.traceProgress>1.05&&(this.traceProgress=0),this.updateTrace())}render(t){if(!t||!this.currentMove){this.renderer.render(this.scene,this.camera);return}const i=new Tr,r=new Ze;r.set(t.rotationMatrix[0],t.rotationMatrix[1],t.rotationMatrix[2],0,t.rotationMatrix[3],t.rotationMatrix[4],t.rotationMatrix[5],0,t.rotationMatrix[6],t.rotationMatrix[7],t.rotationMatrix[8],0,0,0,0,1),i.setRotationFromMatrix(r);const l=t.size/this.width;i.position.set((t.translation[0]-this.width/2)*l,-(t.translation[1]-this.height/2)*l,t.translation[2]*l),i.scale.setScalar(l*2),this.arrowGroup.matrixAutoUpdate=!1,this.arrowGroup.matrix.copy(i.matrix),this.arrowGroup.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.clearArrow()}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=B0(t),r=new Q(...K1[i]),l=new Q(0,1,0);Math.abs(r.dot(l))>.9&&l.set(0,0,1);const c=new Q().crossVectors(l,r).normalize(),f=new Q().crossVectors(r,c).normalize(),h=r.clone().multiplyScalar(.52),p=new Tr;p.position.copy(h),p.userData={tangent:c,bitangent:f,move:t};const m=P0(t),g=.32,_=32,v=Vv(t)?m:0,S=Vv(t)?0:m,E=[];for(let M=0;M<=_;M++){const y=v+(S-v)*M/_,P=c.clone().multiplyScalar(Math.cos(y)*g).add(f.clone().multiplyScalar(Math.sin(y)*g));E.push(P)}p.userData.points=E,p.userData.segments=_;const T=new ei(new qd(.34,.4,48),new Bc({color:kv,transparent:!0,opacity:.35,side:Li,depthWrite:!1}));if(p.add(T),J1(t)){const M=T.clone();M.rotation.z=Math.PI,p.add(M)}this.traceGroup=p,this.arrowGroup.add(p),this.updateTrace()}updateTrace(){if(!this.traceGroup||!this.currentMove)return;const t=this.traceGroup.getObjectByName("trace");t&&(this.traceGroup.remove(t),Xv(t));const i=this.traceGroup.userData.points,r=this.traceGroup.userData.segments;if(!(i!=null&&i.length))return;const l=Math.max(2,Math.floor(r*this.traceProgress)),c=i.slice(0,l+1);if(c.length<2)return;const f=new R0(c),h=new Yd(f,l,.028,8,!1),p=new Bc({color:kv,transparent:!0,opacity:.88,depthTest:!0,depthWrite:!1}),m=new ei(h,p);m.name="trace",this.traceGroup.add(m);const g=c[c.length-1],_=c[c.length-2]??g,v=new Q().subVectors(g,_).normalize(),S=new ei(new Wd(.065,.15,12),p.clone());S.name="trace",S.position.copy(g),S.quaternion.setFromUnitVectors(new Q(0,1,0),v),this.traceGroup.add(S)}clearArrow(){for(this.traceGroup=null;this.arrowGroup.children.length>0;){const t=this.arrowGroup.children[0];this.arrowGroup.remove(t),Xv(t)}}}function Xv(s){s.traverse(t=>{t instanceof ei&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function eR({pose:s,move:t,width:i,height:r,active:l}){const c=Xt.useRef(null),f=Xt.useRef(null);return Xt.useEffect(()=>{const h=c.current;if(!h)return;const p=new tR(h);return f.current=p,()=>{p.dispose(),f.current=null}},[]),Xt.useEffect(()=>{var h;(h=f.current)==null||h.resize(i,r)},[i,r]),Xt.useEffect(()=>{var h;(h=f.current)==null||h.setMove(t)},[t]),Xt.useEffect(()=>{if(!l)return;let h=0;const p=()=>{var m,g;(m=f.current)==null||m.tick(),(g=f.current)==null||g.render(s),h=requestAnimationFrame(p)};return h=requestAnimationFrame(p),()=>cancelAnimationFrame(h)},[s,l]),zt.jsx("canvas",{ref:c,className:`ar-overlay${l?" active":""}`,"aria-hidden":"true"})}function nR({setVideoRef:s,onDimensions:t}){const i=Xt.useCallback(l=>{l.videoWidth&&l.videoHeight&&(t==null||t(l.videoWidth,l.videoHeight))},[t]),r=Xt.useCallback(l=>{s(l),l&&l.readyState>=1&&i(l)},[s,i]);return zt.jsx("video",{ref:r,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:l=>i(l.currentTarget)})}const iR=.3,aR=.22;function Ls(s,t){const i=Math.min(s,t)*iR;return{x:(s-i)/2,y:(t-i)/2,size:i}}function F0(s){const t=s.size*aR;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function I0(s){const{x:t,y:i,size:r}=s;return[{x:t,y:i},{x:t+r,y:i},{x:t+r,y:i+r},{x:t,y:i+r}]}function rR(s,t,i){return s.map(r=>({x:r.x+t,y:r.y+i}))}const Xa=["R","O","Y","G","B","W"],sR={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},Fc={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},oR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let ws={},Zd=!1;function Kd(){return Zd&&Xa.every(s=>ws[s])}function lR(){const s={...oR};for(const t of Xa)ws[t]&&(s[t]=ws[t]);return s}function Wv(){ws={},Zd=!1}function cR(s,t){ws[s]=t,Xa.every(i=>ws[i])&&(Zd=!0)}function Bh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function uR(s,t,i){const r=Bh(s/255),l=Bh(t/255),c=Bh(i/255),f=r*.4124564+l*.3575761+c*.1804375,h=r*.2126729+l*.7151522+c*.072175,p=r*.0193339+l*.119192+c*.9503041,m=f/.95047>.008856?(f/.95047)**(1/3):7.787*(f/.95047)+16/116,g=h>.008856?h**(1/3):7.787*h+16/116,_=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*g-16,500*(m-g),200*(g-_)]}function Fh(s){if(s.length===0)return 0;const t=[...s].sort((r,l)=>r-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function fR(s,t,i){return Math.max(s,t,i)-Math.min(s,t,i)<28?"W":s>=t&&s>=i?t>s*.92?"O":"R":t>=s&&t>=i?"G":"B"}function hR(s,t,i,r){const l=Math.max(s,t,i);if(l<45)return!1;const c=(s+t+i)/3,f=l-Math.min(s,t,i);switch(r){case"W":return f<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=i;case"O":return s>70&&t>55&&s>=i-5;case"G":return t>45&&t>=s-12&&t>=i-5;case"B":return i>40&&i>=s-8&&i>=t-15;default:return!0}}function dR(s,t,i,r){if(r==="W")return Math.max(s,t,i)-Math.min(s,t,i)<60;if(r==="Y")return s>70&&t>60;const l=fR(s,t,i);return r==="O"?l==="O"||l==="R"||l==="Y":r==="R"?l==="R"||l==="O":l===r}function H0(s,t,i,r){const l=s.getContext("2d",{willReadFrequently:!0});if(!l)return null;const c=Ls(t,i),f=F0(c),h=Math.floor(f.x),p=Math.floor(f.y),m=Math.floor(f.size),g=Math.floor(f.size);if(m<=0||g<=0)return null;const _=l.getImageData(h,p,m,g).data,v=[],S=[],E=[],T=[],M=[],y=[];for(let R=0;R<_.length;R+=8){const G=_[R],nt=_[R+1],$=_[R+2];Math.max(G,nt,$)<40||(T.push(G),M.push(nt),y.push($),hR(G,nt,$,r)&&(v.push(G),S.push(nt),E.push($)))}const P=v.length>=4?v:T,L=v.length>=4?S:M,w=v.length>=4?E:y;if(P.length<4)return null;const k=Fh(P),B=Fh(L),z=Fh(w),W=uR(k,B,z),D=P.length;return{r:k,g:B,b:z,lab:W,ready:D>=6&&dR(k,B,z,r)}}function pR(s,t,i,r){const l=H0(s,t,i,r);return l!=null&&l.ready?(cR(r,l.lab),l):null}function G0(s,t){Xt.useEffect(()=>{if(!t)return;const i=r=>{var c;if(r.key!=="Enter"&&r.key!==" ")return;const l=(c=r.target)==null?void 0:c.tagName;l==="INPUT"||l==="TEXTAREA"||l==="BUTTON"||(r.preventDefault(),s())};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[s,t])}function Qd({rect:s}){const t=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}:void 0;return zt.jsx("div",{className:"guide-frame-css",style:t})}function mR({rect:s,strokeColor:t="#ffffff"}){const i=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none",borderColor:t,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.35), 0 0 12px ${t}55`}:void 0;return zt.jsx("div",{className:"guide-spot-css",style:i})}function gR({visible:s,stepIndex:t,sample:i,ready:r,error:l,onConfirm:c,guideRect:f,spotRect:h}){const p=Xa[t]??"R";return G0(c,s&&r),s?zt.jsxs("div",{className:"color-learn-overlay","aria-live":"polite",children:[zt.jsx(Qd,{rect:f}),zt.jsx(mR,{rect:h,strokeColor:Fc[p]}),zt.jsxs("div",{className:"color-learn-panel",children:[zt.jsx("p",{className:"color-learn-target",style:{color:Fc[p]},children:sR[p]}),zt.jsxs("p",{className:"color-learn-step",children:[t+1," / ",Xa.length]}),i&&zt.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${i.r},${i.g},${i.b})`}}),zt.jsx("button",{type:"button",className:"capture-button",disabled:!r,onClick:c,children:r?"Confirm":"Hold steady…"}),l&&zt.jsx("p",{className:"color-learn-error",children:l})]})]}):null}const _R={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function vR({feedback:s,visible:t,guideRect:i}){if(!t)return null;const r=s.cellColors.length===9,l=r?s.cellColors:[];return zt.jsxs("div",{className:"detection-overlay","aria-live":"polite",children:[zt.jsx(Qd,{rect:i}),zt.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[zt.jsxs("div",{className:`detection-status ${s.status}`,children:[zt.jsx("span",{className:"status-text",children:_R[s.status]}),s.status==="rotate"&&zt.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&zt.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),r&&zt.jsx("div",{className:"cell-grid",children:l.map((c,f)=>zt.jsx("span",{className:"cell-grid-item",style:{background:Fc[c]}},f))})]})]})}function yR({phase:s,knownFaces:t,progress:i,needsNewFace:r=!1}){return s!=="liveScan"?null:zt.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[zt.jsx("div",{className:"calibration-bar",children:zt.jsx("div",{className:"calibration-fill",style:{width:`${i*100}%`}})}),zt.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),zt.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),r&&zt.jsx("p",{className:"calibration-hint",children:"Show a different face"})]})}const Ud=["U","F","R","B","L","D"],xR={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function V0(s){return xR[s]??null}function SR({colors:s,label:t,empty:i=!1}){const r=s&&s.length===9,l=r?s:[];return zt.jsxs("div",{className:`face-grid-mini ${i?"face-grid-mini--empty":""}`,children:[zt.jsx("div",{className:"face-grid-mini-cells",children:r?l.map((c,f)=>zt.jsx("span",{className:"face-grid-mini-cell",style:{background:Fc[c]}},f)):Array.from({length:9},(c,f)=>zt.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},f))}),zt.jsx("span",{className:"face-grid-mini-label",children:t})]})}const MR={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function qv({visible:s,scannedFaces:t}){if(!s)return null;const i=Ud.filter(r=>t[r]).length;return zt.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[zt.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",i,"/6"]}),zt.jsx("div",{className:"scanned-faces-bar-grid",children:Ud.map(r=>zt.jsx(SR,{colors:t[r]??null,label:MR[r],empty:!t[r]},r))})]})}function Yv({message:s="Loading…",overlay:t=!1}){return zt.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[zt.jsx("div",{className:"loading-spinner"}),zt.jsx("p",{children:s})]})}function ER({visible:s,feedback:t,guideRect:i,onStart:r}){const l=t.status==="detected"&&t.cellColors.length===9;return G0(r,s),s?zt.jsxs("div",{className:"scan-ready-overlay","aria-live":"polite",children:[zt.jsx(Qd,{rect:i}),zt.jsxs("div",{className:"scan-ready-panel",children:[zt.jsx("p",{className:"scan-ready-hint",children:l?"Cube detected":"Align cube in guide"}),zt.jsx("button",{type:"button",className:"capture-button",onClick:r,children:"Start scan"})]})]}):null}function TR({phase:s,currentStep:t,totalSteps:i}){return s!=="solving"||i===0?null:zt.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}function bR(s){const t=["U","R","F","D","L","B"];let i="";for(const r of t){const l=s.get(r);if(!l||l.length!==9)throw new Error(`Missing face data for ${r}`);for(const c of l)i+=AR(c)}return i}function AR(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function RR(s,t){const i=new Array(9).fill(0);for(let r=0;r<3;r++)for(let l=0;l<3;l++){let c=0;for(let f=0;f<3;f++)c+=s[r*3+f]*t[f*3+l];i[r*3+l]=c}return i}function jv(){return[1,0,0,0,1,0,0,0,1]}function CR(s,t){const[i,r,l]=s,c=Math.hypot(i,r,l)||1,f=i/c,h=r/c,p=l/c,m=Math.cos(t),g=Math.sin(t),_=1-m;return[_*f*f+m,_*f*h-g*p,_*f*p+g*h,_*f*h+g*p,_*h*h+m,_*h*p-g*f,_*f*p-g*h,_*h*p+g*f,_*p*p+m]}function wR(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-BCYlbNgf.js",import.meta.url),{type:"module"})}const k0=["R","O","Y","G","B","W"],DR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function X0(){return Kd()?lR():DR}function UR(s,t,i){const r=Ih(s/255),l=Ih(t/255),c=Ih(i/255);return[r*.4124564+l*.3575761+c*.1804375,r*.2126729+l*.7151522+c*.072175,r*.0193339+l*.119192+c*.9503041]}function Ih(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function LR(s,t,i){const f=Hh(s/.95047),h=Hh(t/1),p=Hh(i/1.08883);return[116*h-16,500*(f-h),200*(h-p)]}function Hh(s){return s>.008856?s**(1/3):7.787*s+16/116}function W0(s,t,i){const[r,l,c]=UR(s,t,i);return LR(r,l,c)}function q0(s,t){const i=s[0]-t[0],r=s[1]-t[1],l=s[2]-t[2];return Math.sqrt(i*i+r*r+l*l)}function NR(s,t,i){const r=s/255,l=t/255,c=i/255,f=Math.max(r,l,c),h=Math.min(r,l,c),p=f-h;let m=0;p>0&&(f===r?m=(l-c)/p%6:f===l?m=(c-r)/p+2:m=(r-l)/p+4,m*=60,m<0&&(m+=360));const g=f===0?0:p/f*255,_=f*255;return[m,g,_]}function Zv(s,t,i){const r=W0(s,t,i),l=X0();let c="W",f=1/0;for(const h of k0){const p=q0(r,l[h]);p<f&&(f=p,c=h)}return c}function Y0(s,t,i){const r=Math.max(s,t,i),l=Math.min(s,t,i);return r<38||r<70&&r-l<22}function OR(s,t,i){const r=Math.max(s,t,i),l=Math.min(s,t,i),c=r-l,f=(s+t+i)/3;return r<125||c>42||i>s+22&&i>t+12||s>t+22&&s>i+22||t>s+18&&t>i+18?!1:f>145&&c<38}function zR(s,t,i,r){const l=W0(s,t,i);return 1/(1+q0(l,X0()[r]))}function Gh(s,t,i){if(Y0(s,t,i)||Kd())return Zv(s,t,i);const[r,l]=NR(s,t,i),c=l/255;if(OR(s,t,i))return"W";const f=new Map;for(const m of k0)f.set(m,zR(s,t,i,m));i>=s+14&&i>=t+10&&i>75&&f.set("B",(f.get("B")??0)+.55),s>=t+12&&s>=i+12&&s>85&&f.set("R",(f.get("R")??0)+.45),t>=s+10&&t>=i+10&&t>70&&f.set("G",(f.get("G")??0)+.45),s>95&&t>85&&i<Math.min(s,t)-18&&f.set("Y",(f.get("Y")??0)+.55),s>t+8&&t>i+5&&s>110&&r>=8&&r<42&&f.set("O",(f.get("O")??0)+.45),c>.18&&(r>=38&&r<=72&&f.set("Y",(f.get("Y")??0)+.25),r>=10&&r<38&&f.set("O",(f.get("O")??0)+.2),(r<=12||r>=345)&&f.set("R",(f.get("R")??0)+.2),r>=78&&r<=155&&f.set("G",(f.get("G")??0)+.2),r>=165&&r<=255&&f.set("B",(f.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,g]of f)g>p&&(p=g,h=m);return h}function Vh(s){if(s.length===0)return 0;const t=[...s].sort((r,l)=>r-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function PR(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function BR(s,t,i){const r=Math.max(s,t,i)-Math.min(s,t,i);return r>52?.15:r>36?.55:1}function FR(s,t,i,r,l,c){const f=new Map,h=[],p=[],m=[],_=l-i>40?1:2;for(let T=Math.floor(r);T<Math.floor(c);T+=_)for(let M=Math.floor(i);M<Math.floor(l);M+=_){const y=(T*t+M)*4,P=s[y],L=s[y+1],w=s[y+2];if(Y0(P,L,w))continue;h.push(P),p.push(L),m.push(w);const k=Gh(P,L,w),B=BR(P,L,w);f.set(k,(f.get(k)??0)+B)}if(h.length===0){const T=Math.floor((i+l)/2),y=(Math.floor((r+c)/2)*t+T)*4;return Gh(s[y],s[y+1],s[y+2])}const v=Gh(Vh(h),Vh(p),Vh(m));f.set(v,(f.get(v)??0)+3);let S=v,E=0;for(const[T,M]of f)M>E&&(E=M,S=T);return S}function IR(s,t,i){const l=s.getImageData(0,0,t,i).data,c=[],f=t/3,h=i/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=PR(p,m),_=m*f+f*g,v=m*f+f*(1-g),S=p*h+h*g,E=p*h+h*(1-g);c.push(FR(l,t,_,S,v,E))}return c}function qo(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function HR(s){const t=qo();for(const i of s)t[i]++;return t}function j0(s){return!!(s&&s.length===9)}function GR(s){if(!j0(s))return{valid:!1,colorCounts:qo(),detectedCenter:null,uniqueColors:0};const t=HR(s),i=Object.values(t).filter(r=>r>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:i}}const VR={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},Yo=["W","Y","R","O","G","B"],kc=9,kR={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function Jd(s){const t=qo();for(const i of s.values())for(const r of i)t[r]++;return t}function XR(s,t){return kR[s][t]??6}function WR(s){let t=null,i=0;for(const r of Yo){const l=s[r]-kc;l>i&&(i=l,t=r)}return t}function qR(s){let t=null,i=0;for(const r of Yo){const l=kc-s[r];l>i&&(i=l,t=r)}return t}function Z0(s){return Yo.every(t=>s[t]===kc)}function YR(s){const t=new Map;for(const[r,l]of s){const c=[...l];c[4]=VR[r],t.set(r,c)}const i=[];for(const[r,l]of t)for(let c=0;c<9;c++)c!==4&&i.push({faceId:r,index:c,color:l[c]});for(let r=0;r<256;r++){const l=Jd(t);if(Z0(l))break;const c=WR(l),f=qR(l);if(!c||!f)break;let h=null,p=1/0;for(const m of i){if(m.color!==c)continue;const g=XR(c,f);g<p&&(p=g,h=m)}if(!h){const m=i.find(g=>g.color===c);if(!m)break;h=m}h.color=f,t.get(h.faceId)[h.index]=f}return t}function jR(s){const t=Jd(s),i=qo();for(const r of Yo)i[r]=t[r]-kc;return i}function Kv(s){return Z0(Jd(s))}function ZR(s){const t=jR(s),i={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},r=Yo.filter(l=>t[l]!==0).map(l=>{const c=t[l];return`${i[l]}${c>0?`+${c}`:c}`});return r.length>0?r.join(", "):""}const xs=256;function K0(s,t){const i=document.createElement("canvas");i.width=xs,i.height=xs;const r=i.getContext("2d",{willReadFrequently:!0});return r?(r.drawImage(s,t.x,t.y,t.size,t.size,0,0,xs,xs),IR(r,xs,xs)):[]}function Q0(s,t){const i=s.getContext("2d",{willReadFrequently:!0});if(!i)return 0;const{x:r,y:l,size:c}=t,f=i.getImageData(Math.floor(r),Math.floor(l),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let _=0;_<f.length;_+=32){const v=(f[_]+f[_+1]+f[_+2])/3;h+=v,p+=v*v,m++}if(m===0)return 0;const g=h/m;return p/m-g*g}function J0(s,t){if(s.length!==9)return!1;const i=new Set(s),r=s.filter(l=>l!=="W").length;return t<120?!1:i.size===1?!0:i.size===2&&r<=3&&t<300?!1:i.size>=3&&r>=2||i.size>=2&&r>=4&&t>220}const fi=.5,KR=[[-fi,fi,fi],[fi,fi,fi],[fi,-fi,fi],[-fi,-fi,fi]];function QR(s){if(s.length<4)return null;const t=[...s].sort((l,c)=>l.y-c.y),i=t.slice(0,2).sort((l,c)=>l.x-c.x),r=t.slice(2,4).sort((l,c)=>l.x-c.x);return[i[0],i[1],r[1],r[0]]}function $0(s,t,i){try{return $R(s,t,i)}catch{return JR(s,t)}}function JR(s,t,i){const r={x:s.reduce((c,f)=>c+f.x,0)/4,y:s.reduce((c,f)=>c+f.y,0)/4},l=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return{corners:s,center:r,size:l,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[r.x-t/2,r.y,l*3],confidence:.65}}function $R(s,t,i){const r=window.cv,l=t*.9,c=t*.9,f=t/2,h=i/2,p=r.matFromArray(4,1,r.CV_32FC1,KR.flat()),m=r.matFromArray(4,1,r.CV_32FC1,[s[0].x,s[0].y,s[1].x,s[1].y,s[2].x,s[2].y,s[3].x,s[3].y]),g=r.matFromArray(3,3,r.CV_32FC1,[l,0,f,0,c,h,0,0,1]),_=r.matFromArray(4,1,r.CV_32FC1,[0,0,0,0]),v=new r.Mat,S=new r.Mat,E=new r.Mat;r.solvePnP(p,m,g,_,v,S),r.Rodrigues(v,E);const T=[];for(let L=0;L<9;L++)T.push(E.data32F[L]??E.floatAt(Math.floor(L/3),L%3));const M=[S.data32F[0]??S.floatAt(0,0),S.data32F[1]??S.floatAt(1,0),S.data32F[2]??S.floatAt(2,0)],y={x:s.reduce((L,w)=>L+w.x,0)/4,y:s.reduce((L,w)=>L+w.y,0)/4},P=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return p.delete(),m.delete(),g.delete(),_.delete(),v.delete(),S.delete(),E.delete(),{corners:s,center:y,size:P,rotationMatrix:T,translation:M,confidence:.8}}function tC(s){const t=(l,c)=>Math.hypot(l.x-c.x,l.y-c.y),i=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],r=i.reduce((l,c)=>l+c,0)/4;return r<1?!1:i.every(l=>Math.abs(l-r)/r<.55)}function eC(s,t,i,r){const l=i*r;let c=null,f=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<l*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const _ of[.02,.035,.05,.08]){const v=new t.Mat;if(t.approxPolyDP(p,v,_*g,!0),v.rows===4){const S=[];for(let T=0;T<4;T++)S.push({x:v.data32S[T*2],y:v.data32S[T*2+1]});const E=QR(S);E&&tC(E)&&m>f&&(f=m,c=E)}v.delete()}p.delete()}return c}function Qv(s,t,i){var r;if(!((r=window.cv)!=null&&r.Mat))return null;try{const l=window.cv,c=l.imread(s),f=new l.Mat,h=new l.Mat,p=new l.Mat,m=new l.Mat,g=new l.MatVector,_=new l.Mat;l.cvtColor(c,f,l.COLOR_RGBA2RGB),l.cvtColor(f,h,l.COLOR_RGB2GRAY),l.GaussianBlur(h,p,new l.Size(5,5),0),l.Canny(p,m,20,80),l.findContours(m,g,_,l.RETR_LIST,l.CHAIN_APPROX_SIMPLE);const v=eC(g,l,t,i);return c.delete(),f.delete(),h.delete(),p.delete(),m.delete(),g.delete(),_.delete(),v}catch{return null}}function nC(s,t,i){const r=Ls(t,i),l=K0(s,r),c=Q0(s,r);return J0(l,c)?{corners:I0(r),colors:l}:null}function ty(s,t,i){const r=Ls(t,i),l=document.createElement("canvas");l.width=r.size,l.height=r.size;const c=l.getContext("2d");if(c){c.drawImage(s,r.x,r.y,r.size,r.size,0,0,r.size,r.size);const p=Qv(l,r.size,r.size);if(p)return rR(p,r.x,r.y)}const f=Qv(s,t,i);if(f)return f;const h=nC(s,t,i);return(h==null?void 0:h.corners)??null}function Jv(s,t,i){const r=Ls(t,i),l=K0(s,r),c=Q0(s,r);if(!J0(l,c))return null;const f=ty(s,t,i),h=$0(f??I0(r),t,i);return h.confidence=f?.85:.7,{colors:l,pose:h}}function iC(s){const t=window.cv,i=t.imread(s),r=new t.Mat;return t.cvtColor(i,r,t.COLOR_RGBA2GRAY),i.delete(),r}const $v=45;class aC{constructor(){qe(this,"prevGray",null);qe(this,"trackedCorners",null);qe(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const r=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const l=r.matFromArray(4,1,r.CV_32FC2,rC(this.trackedCorners)),c=new r.Mat,f=new r.Mat,h=new r.Mat;r.calcOpticalFlowPyrLK(this.prevGray,t,l,c,f,h);const p=[];let m=0;for(let _=0;_<4;_++){const v=f.data[_]===1,S=c.data32F[_*2],E=c.data32F[_*2+1];v&&Number.isFinite(S)&&Number.isFinite(E)?(p.push({x:S,y:E}),m++):p.push(this.trackedCorners[_])}return l.delete(),c.delete(),f.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>$v?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames++,this.lostFrames>$v?(this.reset(),null):this.trackedCorners)}}function rC(s){return s.flatMap(t=>[t.x,t.y])}const sC=.65,oC=4;class lC{constructor(){qe(this,"state",{lastMatrix:jv(),stableCount:0,pendingMove:null});qe(this,"initialized",!1)}reset(){this.state={lastMatrix:jv(),stableCount:0,pendingMove:null},this.initialized=!1}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,null;const i=RR(cC(t),this.state.lastMatrix),r=fC(i);if(r)if(this.state.pendingMove===r){if(this.state.stableCount++,this.state.stableCount>=oC)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,r}else this.state.pendingMove=r,this.state.stableCount=1;else this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=uC(this.state.lastMatrix,t,.15);return null}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.initialized=!0}}function cC(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function uC(s,t,i){return s.map((r,l)=>r*(1-i)+t[l]*i)}function fC(s){const t=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];let i=null,r=sC;for(const l of t){const c=B0(l);let f=Q1[c];(c==="L"||c==="D"||c==="B")&&(f=[-f[0],-f[1],-f[2]]);const h=CR(f,P0(l)),p=hC(s,h);p>r&&(r=p,i=l)}return i}function hC(s,t){let i=0;for(let r=0;r<9;r++)i+=1-Math.abs(s[r]-t[r])/2;return i/9}function t0(s,t,i,r){s.save(),s.translate(i,0),s.scale(-1,1),s.drawImage(t,0,0,i,r),s.restore()}class dC{constructor(){qe(this,"rotationDetector",new lC);qe(this,"flowTracker",new aC);qe(this,"trackingEnabled",!1);qe(this,"processCanvas");qe(this,"processCtx");qe(this,"lastColors",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.lastColors=null}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const i=t.videoWidth,r=t.videoHeight;return!i||!r?!1:(this.processCanvas.width=i,this.processCanvas.height=r,t0(this.processCtx,t,i,r),!0)}getColorLearnSample(t,i,r){return H0(this.processCanvas,t,i,r)}process(t){const i=t.videoWidth,r=t.videoHeight;if(!i||!r)return{pose:null,detectedFace:null,rotationMove:null};this.processCanvas.width=i,this.processCanvas.height=r,t0(this.processCtx,t,i,r);try{return this.trackingEnabled?this.processWithTracking(i,r):this.processDetectionOnly(i,r)}catch{return{pose:null,detectedFace:null,rotationMove:null}}}processDetectionOnly(t,i){const r=Jv(this.processCanvas,t,i);return r?(this.lastColors=r.colors,{pose:r.pose,detectedFace:r,rotationMove:null}):{pose:null,detectedFace:null,rotationMove:null}}processWithTracking(t,i){const r=ty(this.processCanvas,t,i),l=iC(this.processCanvas),c=this.flowTracker.update(l,r);if(l.delete(),!c)return{pose:null,detectedFace:null,rotationMove:null};let f=this.lastColors;if(r){const g=Jv(this.processCanvas,t,i);g&&(f=g.colors,this.lastColors=f)}const h=$0(c,t,i);h.confidence=r?.85:Math.max(.35,.85-this.flowTracker.getLostFrames()*.01);const p=f?{colors:f,pose:h}:null,m=this.rotationDetector.update(h.rotationMatrix);return{pose:h,detectedFace:p,rotationMove:m}}readStableFace(t,i=5){const r=[];let l=null;for(let f=0;f<i;f++){const h=this.process(t);if(!h.detectedFace)return null;r.push(h.detectedFace.colors),l=h.detectedFace.pose}return l?{colors:pC(r),pose:l}:null}}function pC(s){const t=[];for(let i=0;i<9;i++){const r=new Map;for(const f of s){const h=f[i];r.set(h,(r.get(h)??0)+1)}let l="W",c=0;for(const[f,h]of r)h>c&&(c=h,l=f);t.push(l)}return t}const mC={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},gC=[0,1,2,3,5,6,7,8],kh=2e3,_C=10,vC=7,yC=6;function xC(s,t){let i=0;for(const r of gC)s[r]===t[r]&&i++;return i}function SC(s,t){let i=0;for(let r=0;r<9;r++)s[r]===t[r]&&i++;return i}function MC(s,t){return xC(s,t)>=vC}function ey(s,t){for(const[i,r]of t)if(MC(s,r))return i;return null}function EC(s){for(const t of Ud)if(!s.has(t))return t;return null}function TC(s){const t=[];for(let i=0;i<9;i++){const r=new Map;for(const f of s){const h=f[i];r.set(h,(r.get(h)??0)+1)}let l="W",c=0;for(const[f,h]of r)h>c&&(c=h,l=f);t.push(l)}return t}function bC(s,t){if(ey(s,t))return null;const i=V0(s[4]);return i&&!t.has(i)?i:EC(t)}function AC(s,t){const i=[...s];return i[4]=mC[t],i}class RC{constructor(){qe(this,"faces",new Map);qe(this,"pendingReadings",[]);qe(this,"stableSinceMs",null);qe(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,i=Date.now()){const r=kh/1e3,l={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:r,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],l;const c=V0(t[4]),f=ey(t,this.faces);if(f)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...l,currentFace:f,needsNewFace:!0};!this.stabilityAnchor||SC(t,this.stabilityAnchor)<yC?(this.stabilityAnchor=[...t],this.stableSinceMs=i,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=i);const h=this.stableSinceMs!==null?i-this.stableSinceMs:0,p=Math.min(h,kh)/1e3;let m=null;if(h>=kh){const g=[...this.pendingReadings,[...t]];g.length>_C&&g.shift(),this.pendingReadings=g;const _=TC(g),v=bC(_,this.faces);if(v){const S=AC(_,v),E=!this.faces.has(v);this.faces.set(v,S),E&&(m=v)}this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:r,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1}}}const CC="https://docs.opencv.org/4.9.0/opencv.js";let Ac=null;function wC(){return Ac||(Ac=new Promise((s,t)=>{var r;if((r=window.cv)!=null&&r.Mat){s();return}const i=document.createElement("script");i.src=CC,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},i.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(i)}),Ac)}function e0(s){return Object.fromEntries(s)}const Oo={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:qo(),cellColors:[]},DC={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:Oo,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1};function UC(s){const[t,i]=Xt.useState(DC),r=Xt.useRef(null),l=Xt.useRef(null),c=Xt.useRef(new RC),f=Xt.useRef(""),h=Xt.useRef(0),p=Xt.useRef(0),m=Xt.useRef("loading"),g=Xt.useRef(0),_=Xt.useRef(null),v=Xt.useRef(0),S=Xt.useRef(null),E=Xt.useRef(null),T=Xt.useRef(!1),M=Xt.useCallback(()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]),y=Xt.useCallback((U,q,I,ft)=>{var J;const xt=l.current;if(!xt){i(ht=>({...ht,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}M();const O=++p.current;xt.postMessage({type:"solve",facelet:U,scannedFaces:Object.fromEntries(I),captures:ft,id:O}),(J=r.current)==null||J.syncPose(q),S.current=setTimeout(()=>{i(ht=>ht.phase!=="computing"?ht:{...ht,phase:"error",error:"Solve timed out. Colors may have been misread — re-scan in steady light."})},45e3)},[M]);Xt.useEffect(()=>{m.current=t.phase,_.current=t.solution,g.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const P=Xt.useCallback(U=>{var I;const q=++p.current;(I=l.current)==null||I.postMessage({type:"apply",move:U,facelet:f.current,id:q}),i(ft=>{if(!ft.solution)return ft;const xt=ft.solution.moves[ft.solution.currentIndex];if(U!==xt)return ft;const O=ft.solution.currentIndex+1;return O>=ft.solution.moves.length?{...ft,phase:"solved",solution:{...ft.solution,currentIndex:O}}:{...ft,solution:{...ft.solution,currentIndex:O}}})},[]),L=Xt.useCallback((U,q,I,ft,xt,O)=>{const{detectedCenter:J,colorCounts:ht}=GR(q),X=j0(q);let ct="searching";return!U||!X?ct="searching":O?ct="rotate":xt?ct="captured":I>0&&I<ft?ct="stabilizing":ct="detected",{status:ct,stableProgress:I,stableTarget:ft,detectedCenter:J,colorCounts:ht,cellColors:X&&q?[...q]:[]}},[]),w=Xt.useCallback(()=>{var U;c.current.reset(),T.current=!1,E.current=null,i(q=>({...q,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Oo})),(U=r.current)==null||U.disableTracking()},[]),k=Xt.useCallback(()=>{var U;c.current.reset(),T.current=!1,E.current=null,i(q=>({...q,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Oo})),(U=r.current)==null||U.disableTracking()},[]),B=Xt.useCallback(async()=>{try{await wC(),r.current=new dC;const U=wR();l.current=U,U.onmessage=q=>{var ft;const I=q.data;if(I.type==="ready")i(xt=>({...xt,solverReady:!0}));else if(I.type==="solution"){if(I.id!==p.current)return;M(),f.current=I.facelet,v.current=Date.now(),i(xt=>({...xt,phase:I.moves.length===0?"solved":"solving",solution:{moves:I.moves,currentIndex:0},detectionFeedback:Oo})),I.moves.length>0&&((ft=r.current)==null||ft.enableTracking())}else if(I.type==="facelet"){if(I.id!==p.current)return;f.current=I.facelet}else if(I.type==="error"){if(I.id!==void 0&&I.id!==p.current)return;M(),T.current=!1,i(xt=>({...xt,phase:"error",error:I.message}))}},U.onerror=()=>{M(),i(q=>({...q,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},U.postMessage({type:"init"}),Wv(),c.current.reset(),i(q=>({...q,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(U){i(q=>({...q,phase:"error",error:U instanceof Error?U.message:"Init failed"}))}},[M]);Xt.useEffect(()=>(B(),()=>{var U,q;cancelAnimationFrame(h.current),M(),(U=l.current)==null||U.terminate(),(q=r.current)==null||q.disableTracking()}),[B,M]);const z=Xt.useCallback(()=>{const U=s.current,q=r.current;if(!U||!q||U.readyState<2||!q.captureFrame(U))return;const I=g.current,ft=Xa[I];if(!ft)return;const xt=q.getFrameCanvas();if(!pR(xt,U.videoWidth,U.videoHeight,ft)){i(ht=>({...ht,colorLearnError:`Could not read ${ft}. Center the sticker in the circle.`}));return}const J=I+1;if(J>=Xa.length){w(),i(ht=>({...ht,colorsCalibrated:!0,colorLearnError:null}));return}i(ht=>({...ht,colorLearnIndex:J,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,w]),W=Xt.useCallback(()=>{k()},[k]),D=Xt.useCallback(()=>{var xt,O;const U=s.current,q=r.current;if(!U||!q||U.readyState<2)return;const I=q.process(U),ft=m.current;if(ft==="colorLearn"){q.captureFrame(U);const J=Xa[g.current];if(J){const ht=q.getColorLearnSample(U.videoWidth,U.videoHeight,J);i(X=>({...X,colorLearnSample:ht,colorLearnReady:(ht==null?void 0:ht.ready)??!1,colorLearnError:null}))}return}if(ft==="scanReady"){const J=((xt=I.detectedFace)==null?void 0:xt.colors)??null,ht=!!I.pose;i(X=>({...X,detectionFeedback:L(ht,J,0,0,!1,!1)}));return}if(ft==="liveScan"){if(!Kd()){i(St=>({...St,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const J=((O=I.detectedFace)==null?void 0:O.colors)??null,ht=!!I.pose;I.pose&&(E.current=I.pose);const X=c.current.update(J),ct=!!X.newlyCaptured;if(X.isComplete&&E.current&&!T.current){T.current=!0;const St=e0(X.faces),Mt=[...X.faces.values()];try{let Lt=X.faces;if(!Kv(Lt)&&(Lt=YR(X.faces),!Kv(Lt))){const we=ZR(X.faces);i(Ue=>({...Ue,phase:"error",scannedFaceColors:St,error:we?`Color mismatch (${we}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const Wt=bR(Lt),Yt=E.current;i(we=>({...we,phase:"computing",knownFaces:X.knownFaces,scannedFaceColors:St,liveScanProgress:1,currentPose:Yt})),queueMicrotask(()=>y(Wt,Yt,Lt,Mt))}catch(Lt){i(Wt=>({...Wt,phase:"error",scannedFaceColors:St,error:Lt instanceof Error?Lt.message:"Failed to build cube state"}))}return}i(St=>({...St,currentPose:I.pose,knownFaces:X.knownFaces,scannedFaceColors:e0(X.faces),currentVisibleFace:X.currentFace,liveScanProgress:X.knownFaces.length/6,detectionFeedback:L(ht,J,X.stableProgress,X.stableTarget,ct,X.needsNewFace)}));return}if(i(J=>({...J,currentPose:I.pose})),ft==="solving"&&I.rotationMove){if(Date.now()-v.current<3e3)return;const J=_.current;if(J){const ht=J.moves[J.currentIndex];I.rotationMove===ht&&(P(I.rotationMove),I.pose&&q.syncPose(I.pose))}}},[s,P,L,y]),R=Xt.useCallback(()=>{D(),h.current=requestAnimationFrame(R)},[D]),G=Xt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(R)},[R]),nt=Xt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),$=Xt.useCallback(()=>{M(),w(),i(U=>({...U,solution:null}))},[M,w]),ot=Xt.useCallback(()=>{var U;M(),T.current=!1,c.current.reset(),E.current=null,Wv(),(U=r.current)==null||U.disableTracking(),i(q=>({...q,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:Oo}))},[M]),gt=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:gt,confirmColorLearn:z,startLiveScan:W,retryLiveScan:$,retryColorLearn:ot,startTracking:G,stopTracking:nt}}function LC(){const s=Xt.useRef(null),t=Xt.useRef(null),[i,r]=Xt.useState({stream:null,error:null,isReady:!1}),l=Xt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Xt.useCallback(p=>{s.current=p,p&&l(p)},[l]),f=Xt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await l(m),r({stream:p,error:null,isReady:!0})}catch(p){t.current=null,r({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[l]),h=Xt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),r({stream:null,error:null,isReady:!1})},[]);return Xt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:i,start:f,stop:h}}function ny(s,t,i,r){const l=Math.max(i/s,r/t),c=s*l,f=t*l;return{scale:l,offsetX:(i-c)/2,offsetY:(r-f)/2}}function NC(s,t,i,r){if(!s||!t||!i||!r)return null;const l=Ls(s,t),{scale:c,offsetX:f,offsetY:h}=ny(s,t,i,r);return{left:f+l.x*c,top:h+l.y*c,width:l.size*c,height:l.size*c}}function OC(s,t,i,r){if(!s||!t||!i||!r)return null;const l=Ls(s,t),c=F0(l),{scale:f,offsetX:h,offsetY:p}=ny(s,t,i,r);return{left:h+c.x*f,top:p+c.y*f,width:c.size*f,height:c.size*f}}function zC(){var G,nt;const{videoRef:s,setVideoRef:t,state:i,start:r}=LC(),{state:l,currentMove:c,confirmColorLearn:f,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:g,stopTracking:_}=UC(s),v=Xt.useRef(null),[S,E]=Xt.useState({width:0,height:0}),[T,M]=Xt.useState({width:0,height:0});Xt.useEffect(()=>{r()},[r]),Xt.useEffect(()=>{if(i.isReady&&l.phase!=="loading")return g(),_},[i.isReady,l.phase,g,_]);const y=Xt.useCallback(($,ot)=>{E({width:$,height:ot})},[]);Xt.useEffect(()=>{const $=v.current;if(!$)return;const ot=()=>{M({width:$.clientWidth,height:$.clientHeight})};ot();const gt=new ResizeObserver(ot);return gt.observe($),()=>gt.disconnect()},[]);const P=Xt.useMemo(()=>NC(S.width,S.height,T.width,T.height),[S.width,S.height,T.width,T.height]),L=Xt.useMemo(()=>OC(S.width,S.height,T.width,T.height),[S.width,S.height,T.width,T.height]),w=l.phase==="loading"||!i.isReady,k=!!(l.error||i.error),B=l.phase==="computing",z=l.phase==="solving",W=((G=l.solution)==null?void 0:G.moves.length)??0,D=(((nt=l.solution)==null?void 0:nt.currentIndex)??0)+1,R=l.phase==="liveScan"||k&&Object.keys(l.scannedFaceColors).length>0;return zt.jsx("main",{className:"app",children:zt.jsxs("div",{className:`viewport${l.phase==="liveScan"?" viewport--scanning":""}`,ref:v,children:[zt.jsx(nR,{setVideoRef:t,onDimensions:y}),!w&&!k&&zt.jsxs(zt.Fragment,{children:[zt.jsx(eR,{pose:l.currentPose,move:c,width:S.width,height:S.height,active:z}),zt.jsx(gR,{visible:l.phase==="colorLearn",stepIndex:l.colorLearnIndex,sample:l.colorLearnSample,ready:l.colorLearnReady,error:l.colorLearnError,onConfirm:f,guideRect:P,spotRect:L}),zt.jsx(ER,{visible:l.phase==="scanReady",feedback:l.detectionFeedback,guideRect:P,onStart:h}),zt.jsx(qv,{visible:R,scannedFaces:l.scannedFaceColors}),zt.jsx(vR,{feedback:l.detectionFeedback,visible:l.phase==="liveScan",guideRect:P}),zt.jsx(TR,{phase:l.phase,currentStep:D,totalSteps:W}),zt.jsx(yR,{phase:l.phase,knownFaces:l.knownFaces,progress:l.liveScanProgress,needsNewFace:l.detectionFeedback.status==="rotate"}),l.phase==="solving"&&c&&zt.jsx("div",{className:"solving-banner",children:zt.jsx("p",{className:"solving-move",children:c})}),l.phase==="solved"&&zt.jsx("div",{className:"solved-banner",children:zt.jsx("p",{children:"Done"})})]}),B&&zt.jsx(Yv,{overlay:!0,message:"Computing…"}),w&&zt.jsx(Yv,{overlay:!0,message:l.phase==="loading"?"Loading…":"Camera…"}),k&&!w&&zt.jsxs("div",{className:"error-screen overlay",children:[zt.jsx(qv,{visible:R,scannedFaces:l.scannedFaceColors}),zt.jsx("p",{children:l.error??i.error}),zt.jsxs("div",{className:"error-actions",children:[l.colorsCalibrated&&zt.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),zt.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]})})}ES({immediate:!0});yS.createRoot(document.getElementById("root")).render(zt.jsx(Xt.StrictMode,{children:zt.jsx(zC,{})}));
