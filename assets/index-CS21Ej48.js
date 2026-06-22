var fS=Object.defineProperty;var hS=(s,t,i)=>t in s?fS(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var qe=(s,t,i)=>hS(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Jf={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function dS(){if(O_)return Ao;O_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var z_;function pS(){return z_||(z_=1,Jf.exports=dS()),Jf.exports}var At=pS(),$f={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function mS(){if(P_)return re;P_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(O,J,ht){this.props=O,this.context=J,this.refs=M,this.updater=ht||E}y.prototype.isReactComponent={},y.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=y.prototype;function L(O,J,ht){this.props=O,this.context=J,this.refs=M,this.updater=ht||E}var w=L.prototype=new P;w.constructor=L,T(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function D(O,J,ht){var q=ht.ref;return{$$typeof:s,type:O,key:J,ref:q!==void 0?q:null,props:ht}}function R(O,J){return D(O.type,J,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function nt(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ht){return J[ht]})}var $=/\/+/g;function ot(O,J){return typeof O=="object"&&O!==null&&O.key!=null?nt(""+O.key):J.toString(36)}function gt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function U(O,J,ht,q,ct){var St=typeof O;(St==="undefined"||St==="boolean")&&(O=null);var Mt=!1;if(O===null)Mt=!0;else switch(St){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(O.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=O._init,U(Mt(O._payload),J,ht,q,ct)}}if(Mt)return ct=ct(O),Mt=q===""?"."+ot(O,0):q,k(ct)?(ht="",Mt!=null&&(ht=Mt.replace($,"$&/")+"/"),U(ct,J,ht,"",function(qt){return qt})):ct!=null&&(G(ct)&&(ct=R(ct,ht+(ct.key==null||O&&O.key===ct.key?"":(""+ct.key).replace($,"$&/")+"/")+Mt)),J.push(ct)),1;Mt=0;var Pt=q===""?".":q+":";if(k(O))for(var Ht=0;Ht<O.length;Ht++)q=O[Ht],St=Pt+ot(q,Ht),Mt+=U(q,J,ht,St,ct);else if(Ht=S(O),typeof Ht=="function")for(O=Ht.call(O),Ht=0;!(q=O.next()).done;)q=q.value,St=Pt+ot(q,Ht++),Mt+=U(q,J,ht,St,ct);else if(St==="object"){if(typeof O.then=="function")return U(gt(O),J,ht,q,ct);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function W(O,J,ht){if(O==null)return O;var q=[],ct=0;return U(O,q,"","",function(St){return J.call(ht,St,ct++)}),q}function I(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(ht){(O._status===0||O._status===-1)&&(O._status=1,O._result=ht)},function(ht){(O._status===0||O._status===-1)&&(O._status=2,O._result=ht)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var ft=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:W,forEach:function(O,J,ht){W(O,function(){J.apply(this,arguments)},ht)},count:function(O){var J=0;return W(O,function(){J++}),J},toArray:function(O){return W(O,function(J){return J})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=_,re.Children=xt,re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=L,re.StrictMode=a,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,J,ht){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var q=T({},O.props),ct=O.key;if(J!=null)for(St in J.key!==void 0&&(ct=""+J.key),J)!X.call(J,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&J.ref===void 0||(q[St]=J[St]);var St=arguments.length-2;if(St===1)q.children=ht;else if(1<St){for(var Mt=Array(St),Pt=0;Pt<St;Pt++)Mt[Pt]=arguments[Pt+2];q.children=Mt}return D(O.type,ct,q)},re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},re.createElement=function(O,J,ht){var q,ct={},St=null;if(J!=null)for(q in J.key!==void 0&&(St=""+J.key),J)X.call(J,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(ct[q]=J[q]);var Mt=arguments.length-2;if(Mt===1)ct.children=ht;else if(1<Mt){for(var Pt=Array(Mt),Ht=0;Ht<Mt;Ht++)Pt[Ht]=arguments[Ht+2];ct.children=Pt}if(O&&O.defaultProps)for(q in Mt=O.defaultProps,Mt)ct[q]===void 0&&(ct[q]=Mt[q]);return D(O,St,ct)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:h,render:O}},re.isValidElement=G,re.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:I}},re.memo=function(O,J){return{$$typeof:m,type:O,compare:J===void 0?null:J}},re.startTransition=function(O){var J=z.T,ht={};z.T=ht;try{var q=O(),ct=z.S;ct!==null&&ct(ht,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(B,ft)}catch(St){ft(St)}finally{J!==null&&ht.types!==null&&(J.types=ht.types),z.T=J}},re.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},re.use=function(O){return z.H.use(O)},re.useActionState=function(O,J,ht){return z.H.useActionState(O,J,ht)},re.useCallback=function(O,J){return z.H.useCallback(O,J)},re.useContext=function(O){return z.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,J){return z.H.useDeferredValue(O,J)},re.useEffect=function(O,J){return z.H.useEffect(O,J)},re.useEffectEvent=function(O){return z.H.useEffectEvent(O)},re.useId=function(){return z.H.useId()},re.useImperativeHandle=function(O,J,ht){return z.H.useImperativeHandle(O,J,ht)},re.useInsertionEffect=function(O,J){return z.H.useInsertionEffect(O,J)},re.useLayoutEffect=function(O,J){return z.H.useLayoutEffect(O,J)},re.useMemo=function(O,J){return z.H.useMemo(O,J)},re.useOptimistic=function(O,J){return z.H.useOptimistic(O,J)},re.useReducer=function(O,J,ht){return z.H.useReducer(O,J,ht)},re.useRef=function(O){return z.H.useRef(O)},re.useState=function(O){return z.H.useState(O)},re.useSyncExternalStore=function(O,J,ht){return z.H.useSyncExternalStore(O,J,ht)},re.useTransition=function(){return z.H.useTransition()},re.version="19.2.7",re}var B_;function Nd(){return B_||(B_=1,$f.exports=mS()),$f.exports}var Wt=Nd(),th={exports:{}},Ro={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function gS(){return F_||(F_=1,(function(s){function t(U,W){var I=U.length;U.push(W);t:for(;0<I;){var ft=I-1>>>1,xt=U[ft];if(0<l(xt,W))U[ft]=W,U[I]=xt,I=ft;else break t}}function i(U){return U.length===0?null:U[0]}function a(U){if(U.length===0)return null;var W=U[0],I=U.pop();if(I!==W){U[0]=I;t:for(var ft=0,xt=U.length,O=xt>>>1;ft<O;){var J=2*(ft+1)-1,ht=U[J],q=J+1,ct=U[q];if(0>l(ht,I))q<xt&&0>l(ct,ht)?(U[ft]=ct,U[q]=I,ft=q):(U[ft]=ht,U[J]=I,ft=J);else if(q<xt&&0>l(ct,I))U[ft]=ct,U[q]=I,ft=q;else break t}}return W}function l(U,W){var I=U.sortIndex-W.sortIndex;return I!==0?I:U.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,_=null,v=3,S=!1,E=!1,T=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(U){for(var W=i(m);W!==null;){if(W.callback===null)a(m);else if(W.startTime<=U)a(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function k(U){if(T=!1,w(U),!E)if(i(p)!==null)E=!0,B||(B=!0,nt());else{var W=i(m);W!==null&&gt(k,W.startTime-U)}}var B=!1,z=-1,X=5,D=-1;function R(){return M?!0:!(s.unstable_now()-D<X)}function G(){if(M=!1,B){var U=s.unstable_now();D=U;var W=!0;try{t:{E=!1,T&&(T=!1,P(z),z=-1),S=!0;var I=v;try{e:{for(w(U),_=i(p);_!==null&&!(_.expirationTime>U&&R());){var ft=_.callback;if(typeof ft=="function"){_.callback=null,v=_.priorityLevel;var xt=ft(_.expirationTime<=U);if(U=s.unstable_now(),typeof xt=="function"){_.callback=xt,w(U),W=!0;break e}_===i(p)&&a(p),w(U)}else a(p);_=i(p)}if(_!==null)W=!0;else{var O=i(m);O!==null&&gt(k,O.startTime-U),W=!1}}break t}finally{_=null,v=I,S=!1}W=void 0}}finally{W?nt():B=!1}}}var nt;if(typeof L=="function")nt=function(){L(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ot=$.port2;$.port1.onmessage=G,nt=function(){ot.postMessage(null)}}else nt=function(){y(G,0)};function gt(U,W){z=y(function(){U(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(U){U.callback=null},s.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<U?Math.floor(1e3/U):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(U){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var I=v;v=W;try{return U()}finally{v=I}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=v;v=U;try{return W()}finally{v=I}},s.unstable_scheduleCallback=function(U,W,I){var ft=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?ft+I:ft):I=ft,U){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=I+xt,U={id:g++,callback:W,priorityLevel:U,startTime:I,expirationTime:xt,sortIndex:-1},I>ft?(U.sortIndex=I,t(m,U),i(p)===null&&U===i(m)&&(T?(P(z),z=-1):T=!0,gt(k,I-ft))):(U.sortIndex=xt,t(p,U),E||S||(E=!0,B||(B=!0,nt()))),U},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(U){var W=v;return function(){var I=v;v=W;try{return U.apply(this,arguments)}finally{v=I}}}})(nh)),nh}var I_;function _S(){return I_||(I_=1,eh.exports=gS()),eh.exports}var ih={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function vS(){if(H_)return An;H_=1;var s=Nd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},An.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=h(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},An.requestFormReset=function(p){a.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.7",An}var G_;function yS(){if(G_)return ih.exports;G_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=vS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function xS(){if(V_)return Ro;V_=1;var s=_S(),t=Nd(),i=yS();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var u=r.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===r)return p(u),e;if(d===o)return p(u),n;d=d.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=d;else{for(var x=!1,b=u.child;b;){if(b===r){x=!0,r=u,o=d;break}if(b===o){x=!0,o=u,r=d;break}b=b.sibling}if(!x){for(b=d.child;b;){if(b===r){x=!0,r=d,o=u;break}if(b===o){x=!0,o=d,r=u;break}b=b.sibling}if(!x)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ot(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ot(e(n))}catch{}}return null}var gt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},ft=[],xt=-1;function O(e){return{current:e}}function J(e){0>xt||(e.current=ft[xt],ft[xt]=null,xt--)}function ht(e,n){xt++,ft[xt]=e.current,e.current=n}var q=O(null),ct=O(null),St=O(null),Mt=O(null);function Pt(e,n){switch(ht(St,n),ht(ct,e),ht(q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?i_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=i_(n),e=a_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(q),ht(q,e)}function Ht(){J(q),J(ct),J(St)}function qt(e){e.memoizedState!==null&&ht(Mt,e);var n=q.current,r=a_(n,e.type);n!==r&&(ht(ct,e),ht(q,r))}function Ue(e){ct.current===e&&(J(q),J(ct)),Mt.current===e&&(J(Mt),Mo._currentValue=I)}var be,fe;function H(e){if(be===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);be=n&&n[1]||"",fe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+fe}var Tn=!1;function he(e,n){if(!e||Tn)return"";Tn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var it=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){it=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],b=d[1];if(x&&b){var F=x.split(`
`),et=b.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===et.length)for(o=F.length-1,u=et.length-1;1<=o&&0<=u&&F[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==et[u]){var dt=`
`+F[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?H(r):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return H("Activity");default:return""}}function Yt(e){try{var n="",r=null;do n+=ge(e,r),r=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Le=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,A=s.unstable_shouldYield,at=s.unstable_requestPaint,pt=s.unstable_now,Et=s.unstable_getCurrentPriorityLevel,_t=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,Ct=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,Ft=s.unstable_setDisableYieldValue,Qt=null,kt=null;function Ot(e){if(typeof bt=="function"&&Ft(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Qt,e)}catch{}}var ee=Math.clz32?Math.clz32:j,se=Math.log,Pe=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(se(e)/Pe|0)|0}var wt=256,ut=262144,yt=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n,r){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=Rt(o):(x&=b,x!==0?u=Rt(x):r||(r=b&~e,r!==0&&(u=Rt(r))))):(b=o&~d,b!==0?u=Rt(b):x!==0?u=Rt(x):r||(r=o&~e,r!==0&&(u=Rt(r)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,r=n&-n,d>=r||d===32&&(r&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ye(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var e=yt;return yt<<=1,(yt&62914560)===0&&(yt=4194304),e}function Te(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,r,o,u,d){var x=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,et=e.hiddenUpdates;for(r=x&~r;0<r;){var dt=31-ee(r),vt=1<<dt;b[dt]=0,F[dt]=-1;var it=et[dt];if(it!==null)for(et[dt]=null,dt=0;dt<it.length;dt++){var lt=it[dt];lt!==null&&(lt.lane&=-536870913)}r&=~vt}o!==0&&Ns(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Ns(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ee(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&261930}function Os(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-ee(r),u=1<<o;u&n|e[o]&n&&(e[o]|=n),r&=~u}}function Ai(e,n){var r=n&-n;return r=(r&42)!==0?1:Ya(r),(r&(e.suspendedLanes|n))!==0?0:r}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zs(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:R_(e.type))}function ja(e,n){var r=W.p;try{return W.p=e,n()}finally{W.p=r}}var mi=Math.random().toString(36).slice(2),Ke="__reactFiber$"+mi,vn="__reactProps$"+mi,Pi="__reactContainer$"+mi,Ps="__reactEvents$"+mi,Wc="__reactListeners$"+mi,qc="__reactHandles$"+mi,Zo="__reactResources$"+mi,Za="__reactMarker$"+mi;function Bs(e){delete e[Ke],delete e[vn],delete e[Ps],delete e[Wc],delete e[qc]}function C(e){var n=e[Ke];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Pi]||r[Ke]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=f_(e);e!==null;){if(r=e[Ke])return r;e=f_(e)}return n}e=r,r=e.parentNode}return null}function Z(e){if(e=e[Ke]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function st(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[Za]=!0}var Tt=new Set,Ut={};function Nt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Tt.add(n[e])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},jt={};function xe(e){return Le.call(jt,e)?!0:Le.call($t,e)?!1:ie.test(e)?jt[e]=!0:($t[e]=!0,!1)}function Se(e,n,r){if(xe(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function ke(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function Ae(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function un(e,n,r){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){r=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(x){r=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=Kt(e)?"checked":"value";e._valueTracker=un(e,n,""+e[n])}}function zn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function pn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,r,o,u,d,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bn(e,x,ae(n)):r!=null?bn(e,x,ae(r)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ae(b):e.removeAttribute("name")}function Ln(e,n,r,o,u,d,x,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ee(e);return}r=r!=null?""+ae(r):"",n=n!=null?""+ae(n):r,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ee(e)}function bn(e,n,r){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Qe(e,n,r,o){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&o&&(e[r].defaultSelected=!0)}else{for(r=""+ae(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,r){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+ae(r):""}function Cr(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(gt(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=ae(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o),Ee(e)}function Pn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var sy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tp(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||sy.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function ep(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&tp(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&tp(e,d,n[d])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return ly.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var jc=null;function Zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function np(e){var n=Z(e);if(n&&(e=n.stateNode)){var r=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(a(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&zn(o)}break t;case"textarea":yn(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&Qe(e,!!r.multiple,n,!1)}}}var Kc=!1;function ip(e,n,r){if(Kc)return e(n,r);Kc=!0;try{var o=e(n);return o}finally{if(Kc=!1,(wr!==null||Dr!==null)&&(Bl(),wr&&(n=wr,e=Dr,Dr=wr=null,np(n),e)))for(n=0;n<e.length;n++)np(e[n])}}function Fs(e,n){var r=e.stateNode;if(r===null)return null;var o=r[vn]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Fi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Qc=!1}var ha=null,Jc=null,Qo=null;function ap(){if(Qo)return Qo;var e,n=Jc,r=n.length,o,u="value"in ha?ha.value:ha.textContent,d=u.length;for(e=0;e<r&&n[e]===u[e];e++);var x=r-e;for(o=1;o<=x&&n[r-o]===u[d-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function rp(){return!1}function Bn(e){function n(r,o,u,d,x){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(r=e[b],this[b]=r?r(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?$o:rp,this.isPropagationStopped=rp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Bn(Ka),Hs=_({},Ka,{view:0,detail:0}),cy=Bn(Hs),$c,tu,Gs,el=_({},Hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?($c=e.screenX-Gs.screenX,tu=e.screenY-Gs.screenY):tu=$c=0,Gs=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),sp=Bn(el),uy=_({},el,{dataTransfer:0}),fy=Bn(uy),hy=_({},Hs,{relatedTarget:0}),eu=Bn(hy),dy=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Bn(dy),my=_({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gy=Bn(my),_y=_({},Ka,{data:0}),op=Bn(_y),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xy[e])?!!n[e]:!1}function nu(){return Sy}var My=_({},Hs,{key:function(e){if(e.key){var n=vy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ey=Bn(My),Ty=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Bn(Ty),by=_({},Hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Ay=Bn(by),Ry=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cy=Bn(Ry),wy=_({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dy=Bn(wy),Uy=_({},Ka,{newState:0,oldState:0}),Ly=Bn(Uy),Ny=[9,13,27,32],iu=Fi&&"CompositionEvent"in window,Vs=null;Fi&&"documentMode"in document&&(Vs=document.documentMode);var Oy=Fi&&"TextEvent"in window&&!Vs,cp=Fi&&(!iu||Vs&&8<Vs&&11>=Vs),up=" ",fp=!1;function hp(e,n){switch(e){case"keyup":return Ny.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function zy(e,n){switch(e){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(fp=!0,up);case"textInput":return e=n.data,e===up&&fp?null:e;default:return null}}function Py(e,n){if(Ur)return e==="compositionend"||!iu&&hp(e,n)?(e=ap(),Qo=Jc=ha=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cp&&n.locale!=="ko"?null:n.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!By[e.type]:n==="textarea"}function mp(e,n,r,o){wr?Dr?Dr.push(o):Dr=[o]:wr=o,n=Xl(n,"onChange"),0<n.length&&(r=new tl("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var ks=null,Xs=null;function Fy(e){Qg(e,0)}function nl(e){var n=rt(e);if(zn(n))return e}function gp(e,n){if(e==="change")return n}var _p=!1;if(Fi){var au;if(Fi){var ru="oninput"in document;if(!ru){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),ru=typeof vp.oninput=="function"}au=ru}else au=!1;_p=au&&(!document.documentMode||9<document.documentMode)}function yp(){ks&&(ks.detachEvent("onpropertychange",xp),Xs=ks=null)}function xp(e){if(e.propertyName==="value"&&nl(Xs)){var n=[];mp(n,Xs,e,Zc(e)),ip(Fy,n)}}function Iy(e,n,r){e==="focusin"?(yp(),ks=n,Xs=r,ks.attachEvent("onpropertychange",xp)):e==="focusout"&&yp()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Xs)}function Gy(e,n){if(e==="click")return nl(n)}function Vy(e,n){if(e==="input"||e==="change")return nl(n)}function ky(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:ky;function Ws(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Le.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,n){var r=Sp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Sp(r)}}function Ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=gi(e.document)}return n}function su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Xy=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,ou=null,qs=null,lu=!1;function bp(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;lu||Lr==null||Lr!==gi(o)||(o=Lr,"selectionStart"in o&&su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),qs&&Ws(qs,o)||(qs=o,o=Xl(ou,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Lr)))}function Qa(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var Nr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},cu={},Ap={};Fi&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ja(e){if(cu[e])return cu[e];if(!Nr[e])return e;var n=Nr[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Ap)return cu[e]=n[r];return e}var Rp=Ja("animationend"),Cp=Ja("animationiteration"),wp=Ja("animationstart"),Wy=Ja("transitionrun"),qy=Ja("transitionstart"),Yy=Ja("transitioncancel"),Dp=Ja("transitionend"),Up=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function _i(e,n){Up.set(e,n),Nt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Or=0,fu=0;function al(){for(var e=Or,n=fu=Or=0;n<e;){var r=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var u=ni[n];ni[n++]=null;var d=ni[n];if(ni[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&Lp(r,u,d)}}function rl(e,n,r,o){ni[Or++]=e,ni[Or++]=n,ni[Or++]=r,ni[Or++]=o,fu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function hu(e,n,r,o){return rl(e,n,r,o),sl(e)}function $a(e,n){return rl(e,null,null,n),sl(e)}function Lp(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var u=!1,d=e.return;d!==null;)d.childLanes|=r,o=d.alternate,o!==null&&(o.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-ee(r),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=r|536870912),d):null}function sl(e){if(50<mo)throw mo=0,Mf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function jy(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,r,o){return new jy(e,n,r,o)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var r=e.alternate;return r===null?(r=Yn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Np(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,r,o,u,d){var x=0;if(o=e,typeof e=="function")du(e)&&(x=1);else if(typeof e=="string")x=$x(e,r,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Yn(31,r,n,u),e.elementType=D,e.lanes=d,e;case T:return tr(r.children,u,d,n);case M:x=8,u|=24;break;case y:return e=Yn(12,r,n,u|2),e.elementType=y,e.lanes=d,e;case k:return e=Yn(13,r,n,u),e.elementType=k,e.lanes=d,e;case B:return e=Yn(19,r,n,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:x=10;break t;case P:x=9;break t;case w:x=11;break t;case z:x=14;break t;case X:x=16,o=null;break t}x=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Yn(x,r,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function tr(e,n,r,o){return e=Yn(7,e,o,n),e.lanes=r,e}function pu(e,n,r){return e=Yn(6,e,null,n),e.lanes=r,e}function Op(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function mu(e,n,r){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var r=zp.get(e);return r!==void 0?r:(n={value:e,source:n,stack:Yt(n)},zp.set(e,n),n)}return{value:e,source:n,stack:Yt(n)}}var Pr=[],Br=0,ll=null,Ys=0,ai=[],ri=0,da=null,Ri=1,Ci="";function Hi(e,n){Pr[Br++]=Ys,Pr[Br++]=ll,ll=e,Ys=n}function Pp(e,n,r){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=da,da=e;var o=Ri;e=Ci;var u=32-ee(o)-1;o&=~(1<<u),r+=1;var d=32-ee(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ri=1<<32-ee(n)+u|r<<u|o,Ci=d+e}else Ri=1<<d|r<<u|o,Ci=e}function gu(e){e.return!==null&&(Hi(e,1),Pp(e,1,0))}function _u(e){for(;e===ll;)ll=Pr[--Br],Pr[Br]=null,Ys=Pr[--Br],Pr[Br]=null;for(;e===da;)da=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null}function Bp(e,n){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=da,Ri=n.id,Ci=n.overflow,da=e}var xn=null,Xe=null,Me=!1,pa=null,si=!1,vu=Error(a(519));function ma(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw js(ii(n,e)),vu}function Fp(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[Ke]=e,n[vn]=o,r){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(r=0;r<_o.length;r++)pe(_o[r],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Cr(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||e_(n.textContent,r)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||ma(e,!0)}function Ip(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:xn=xn.return}}function Fr(e){if(e!==xn)return!1;if(!Me)return Ip(e),Me=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Bf(e.type,e.memoizedProps)),r=!r),r&&Xe&&ma(e),Ip(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Xe=u_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Xe=u_(e)}else n===27?(n=Xe,wa(e.type)?(e=Vf,Vf=null,Xe=e):Xe=n):Xe=xn?li(e.stateNode.nextSibling):null;return!0}function er(){Xe=xn=null,Me=!1}function yu(){var e=pa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),pa=null),e}function js(e){pa===null?pa=[e]:pa.push(e)}var xu=O(null),nr=null,Gi=null;function ga(e,n,r){ht(xu,n._currentValue),n._currentValue=r}function Vi(e){e._currentValue=xu.current,J(xu)}function Su(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Mu(e,n,r,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){d.lanes|=r,b=d.alternate,b!==null&&(b.lanes|=r),Su(d.return,r,e),o||(x=null);break t}d=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(a(341));x.lanes|=r,d=x.alternate,d!==null&&(d.lanes|=r),Su(x,r,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Ir(e,n,r,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var b=u.type;qn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Mu(n,e,r,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return Hp(nr,e)}function ul(e,n){return nr===null&&ir(e),Hp(e,n)}function Hp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Gi===null){if(e===null)throw Error(a(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return r}var Zy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},Ky=s.unstable_scheduleCallback,Qy=s.unstable_NormalPriority,an={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new Zy,data:new Map,refCount:0}}function Zs(e){e.refCount--,e.refCount===0&&Ky(Qy,function(){e.controller.abort()})}var Ks=null,Tu=0,Hr=0,Gr=null;function Jy(e,n){if(Ks===null){var r=Ks=[];Tu=0,Hr=Cf(),Gr={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Tu++,n.then(Gp,Gp),n}function Gp(){if(--Tu===0&&Ks!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ks;Ks=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $y(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var Vp=U.S;U.S=function(e,n){bg=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jy(e,n),Vp!==null&&Vp(e,n)};var ar=O(null);function bu(){var e=ar.current;return e!==null?e:Ve.pooledCache}function fl(e,n){n===null?ht(ar,ar.current):ht(ar,n.pool)}function kp(){var e=bu();return e===null?null:{parent:an._currentValue,pool:e}}var Vr=Error(a(460)),Au=Error(a(474)),hl=Error(a(542)),dl={then:function(){}};function Xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Bi,Bi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Yp(e),e}throw sr=n,Vr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(sr=r,Vr):r}}var sr=null;function qp(){if(sr===null)throw Error(a(459));var e=sr;return sr=null,e}function Yp(e){if(e===Vr||e===hl)throw Error(a(483))}var kr=null,Qs=0;function pl(e){var n=Qs;return Qs+=1,kr===null&&(kr=[]),Wp(kr,e,n)}function Js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function jp(e){function n(K,V){if(e){var tt=K.deletions;tt===null?(K.deletions=[V],K.flags|=16):tt.push(V)}}function r(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=Ii(K,V),K.index=0,K.sibling=null,K}function d(K,V,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<V?(K.flags|=67108866,V):tt):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,V,tt,mt){return V===null||V.tag!==6?(V=pu(tt,K.mode,mt),V.return=K,V):(V=u(V,tt),V.return=K,V)}function F(K,V,tt,mt){var Zt=tt.type;return Zt===T?dt(K,V,tt.props.children,mt,tt.key):V!==null&&(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===X&&rr(Zt)===V.type)?(V=u(V,tt.props),Js(V,tt),V.return=K,V):(V=ol(tt.type,tt.key,tt.props,null,K.mode,mt),Js(V,tt),V.return=K,V)}function et(K,V,tt,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=mu(tt,K.mode,mt),V.return=K,V):(V=u(V,tt.children||[]),V.return=K,V)}function dt(K,V,tt,mt,Zt){return V===null||V.tag!==7?(V=tr(tt,K.mode,mt,Zt),V.return=K,V):(V=u(V,tt),V.return=K,V)}function vt(K,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=pu(""+V,K.mode,tt),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return tt=ol(V.type,V.key,V.props,null,K.mode,tt),Js(tt,V),tt.return=K,tt;case E:return V=mu(V,K.mode,tt),V.return=K,V;case X:return V=rr(V),vt(K,V,tt)}if(gt(V)||nt(V))return V=tr(V,K.mode,tt,null),V.return=K,V;if(typeof V.then=="function")return vt(K,pl(V),tt);if(V.$$typeof===L)return vt(K,ul(K,V),tt);ml(K,V)}return null}function it(K,V,tt,mt){var Zt=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Zt!==null?null:b(K,V,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===Zt?F(K,V,tt,mt):null;case E:return tt.key===Zt?et(K,V,tt,mt):null;case X:return tt=rr(tt),it(K,V,tt,mt)}if(gt(tt)||nt(tt))return Zt!==null?null:dt(K,V,tt,mt,null);if(typeof tt.then=="function")return it(K,V,pl(tt),mt);if(tt.$$typeof===L)return it(K,V,ul(K,tt),mt);ml(K,tt)}return null}function lt(K,V,tt,mt,Zt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(tt)||null,b(V,K,""+mt,Zt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return K=K.get(mt.key===null?tt:mt.key)||null,F(V,K,mt,Zt);case E:return K=K.get(mt.key===null?tt:mt.key)||null,et(V,K,mt,Zt);case X:return mt=rr(mt),lt(K,V,tt,mt,Zt)}if(gt(mt)||nt(mt))return K=K.get(tt)||null,dt(V,K,mt,Zt,null);if(typeof mt.then=="function")return lt(K,V,tt,pl(mt),Zt);if(mt.$$typeof===L)return lt(K,V,tt,ul(V,mt),Zt);ml(V,mt)}return null}function It(K,V,tt,mt){for(var Zt=null,Re=null,Gt=V,le=V=0,ye=null;Gt!==null&&le<tt.length;le++){Gt.index>le?(ye=Gt,Gt=null):ye=Gt.sibling;var Ce=it(K,Gt,tt[le],mt);if(Ce===null){Gt===null&&(Gt=ye);break}e&&Gt&&Ce.alternate===null&&n(K,Gt),V=d(Ce,V,le),Re===null?Zt=Ce:Re.sibling=Ce,Re=Ce,Gt=ye}if(le===tt.length)return r(K,Gt),Me&&Hi(K,le),Zt;if(Gt===null){for(;le<tt.length;le++)Gt=vt(K,tt[le],mt),Gt!==null&&(V=d(Gt,V,le),Re===null?Zt=Gt:Re.sibling=Gt,Re=Gt);return Me&&Hi(K,le),Zt}for(Gt=o(Gt);le<tt.length;le++)ye=lt(Gt,K,le,tt[le],mt),ye!==null&&(e&&ye.alternate!==null&&Gt.delete(ye.key===null?le:ye.key),V=d(ye,V,le),Re===null?Zt=ye:Re.sibling=ye,Re=ye);return e&&Gt.forEach(function(Oa){return n(K,Oa)}),Me&&Hi(K,le),Zt}function Jt(K,V,tt,mt){if(tt==null)throw Error(a(151));for(var Zt=null,Re=null,Gt=V,le=V=0,ye=null,Ce=tt.next();Gt!==null&&!Ce.done;le++,Ce=tt.next()){Gt.index>le?(ye=Gt,Gt=null):ye=Gt.sibling;var Oa=it(K,Gt,Ce.value,mt);if(Oa===null){Gt===null&&(Gt=ye);break}e&&Gt&&Oa.alternate===null&&n(K,Gt),V=d(Oa,V,le),Re===null?Zt=Oa:Re.sibling=Oa,Re=Oa,Gt=ye}if(Ce.done)return r(K,Gt),Me&&Hi(K,le),Zt;if(Gt===null){for(;!Ce.done;le++,Ce=tt.next())Ce=vt(K,Ce.value,mt),Ce!==null&&(V=d(Ce,V,le),Re===null?Zt=Ce:Re.sibling=Ce,Re=Ce);return Me&&Hi(K,le),Zt}for(Gt=o(Gt);!Ce.done;le++,Ce=tt.next())Ce=lt(Gt,K,le,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Gt.delete(Ce.key===null?le:Ce.key),V=d(Ce,V,le),Re===null?Zt=Ce:Re.sibling=Ce,Re=Ce);return e&&Gt.forEach(function(uS){return n(K,uS)}),Me&&Hi(K,le),Zt}function He(K,V,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===T&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var Zt=tt.key;V!==null;){if(V.key===Zt){if(Zt=tt.type,Zt===T){if(V.tag===7){r(K,V.sibling),mt=u(V,tt.props.children),mt.return=K,K=mt;break t}}else if(V.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===X&&rr(Zt)===V.type){r(K,V.sibling),mt=u(V,tt.props),Js(mt,tt),mt.return=K,K=mt;break t}r(K,V);break}else n(K,V);V=V.sibling}tt.type===T?(mt=tr(tt.props.children,K.mode,mt,tt.key),mt.return=K,K=mt):(mt=ol(tt.type,tt.key,tt.props,null,K.mode,mt),Js(mt,tt),mt.return=K,K=mt)}return x(K);case E:t:{for(Zt=tt.key;V!==null;){if(V.key===Zt)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){r(K,V.sibling),mt=u(V,tt.children||[]),mt.return=K,K=mt;break t}else{r(K,V);break}else n(K,V);V=V.sibling}mt=mu(tt,K.mode,mt),mt.return=K,K=mt}return x(K);case X:return tt=rr(tt),He(K,V,tt,mt)}if(gt(tt))return It(K,V,tt,mt);if(nt(tt)){if(Zt=nt(tt),typeof Zt!="function")throw Error(a(150));return tt=Zt.call(tt),Jt(K,V,tt,mt)}if(typeof tt.then=="function")return He(K,V,pl(tt),mt);if(tt.$$typeof===L)return He(K,V,ul(K,tt),mt);ml(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(r(K,V.sibling),mt=u(V,tt),mt.return=K,K=mt):(r(K,V),mt=pu(tt,K.mode,mt),mt.return=K,K=mt),x(K)):r(K,V)}return function(K,V,tt,mt){try{Qs=0;var Zt=He(K,V,tt,mt);return kr=null,Zt}catch(Gt){if(Gt===Vr||Gt===hl)throw Gt;var Re=Yn(29,Gt,null,K.mode);return Re.lanes=mt,Re.return=K,Re}finally{}}}var or=jp(!0),Zp=jp(!1),_a=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=sl(e),Lp(e,null,r),n}return rl(e,o,n,r),sl(e)}function $s(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Os(e,r)}}function wu(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var x={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,r=r.next}while(r!==null);d===null?u=d=n:d=d.next=n}else u=d=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Du=!1;function to(){if(Du){var e=Gr;if(e!==null)throw e}}function eo(e,n,r,o){Du=!1;var u=e.updateQueue;_a=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,et=F.next;F.next=null,x===null?d=et:x.next=et,x=F;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==x&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=F))}if(d!==null){var vt=u.baseState;x=0,dt=et=F=null,b=d;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(ve&it)===it:(o&it)===it){it!==0&&it===Hr&&(Du=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var It=e,Jt=b;it=n;var He=r;switch(Jt.tag){case 1:if(It=Jt.payload,typeof It=="function"){vt=It.call(He,vt,it);break t}vt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Jt.payload,it=typeof It=="function"?It.call(He,vt,it):It,it==null)break t;vt=_({},vt,it);break t;case 2:_a=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=lt,F=vt):dt=dt.next=lt,x|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(F=vt),u.baseState=F,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),Ta|=x,e.lanes=x,e.memoizedState=vt}}function Kp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Qp(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Kp(r[e],n)}var Xr=O(null),gl=O(0);function Jp(e,n){e=Qi,ht(gl,e),ht(Xr,n),Qi=e|n.baseLanes}function Uu(){ht(gl,Qi),ht(Xr,Xr.current)}function Lu(){Qi=gl.current,J(Xr),J(gl)}var jn=O(null),oi=null;function xa(e){var n=e.alternate;ht(en,en.current&1),ht(jn,e),oi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(oi=e)}function Nu(e){ht(en,en.current),ht(jn,e),oi===null&&(oi=e)}function $p(e){e.tag===22?(ht(en,en.current),ht(jn,e),oi===null&&(oi=e)):Sa()}function Sa(){ht(en,en.current),ht(jn,jn.current)}function Zn(e){J(jn),oi===e&&(oi=null),J(en)}var en=O(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Hf(r)||Gf(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,oe=null,Fe=null,rn=null,vl=!1,Wr=!1,lr=!1,yl=0,no=0,qr=null,tx=0;function Je(){throw Error(a(321))}function Ou(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!qn(e[r],n[r]))return!1;return!0}function zu(e,n,r,o,u,d){return ki=d,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?Pm:Ku,lr=!1,d=r(o,u),lr=!1,Wr&&(d=em(n,r,o,u)),tm(e),d}function tm(e){U.H=ro;var n=Fe!==null&&Fe.next!==null;if(ki=0,rn=Fe=oe=null,vl=!1,no=0,qr=null,n)throw Error(a(300));e===null||sn||(e=e.dependencies,e!==null&&cl(e)&&(sn=!0))}function em(e,n,r,o){oe=e;var u=0;do{if(Wr&&(qr=null),no=0,Wr=!1,25<=u)throw Error(a(301));if(u+=1,rn=Fe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=Bm,d=n(r,o)}while(Wr);return d}function ex(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(oe.flags|=1024),n}function Pu(){var e=yl!==0;return yl=0,e}function Bu(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function Fu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}ki=0,rn=Fe=oe=null,Wr=!1,no=yl=0,qr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?oe.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(Fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=rn===null?oe.memoizedState:rn.next;if(n!==null)rn=n,Fe=e;else{if(e===null)throw oe.alternate===null?Error(a(467)):Error(a(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},rn===null?oe.memoizedState=rn=e:rn=rn.next=e}return rn}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,qr===null&&(qr=[]),e=Wp(qr,e,n),n=oe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?Pm:Ku),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===L)return Sn(e)}throw Error(a(438,String(e)))}function Iu(e){var n=null,r=oe.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=xl(),oe.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=R;return n.index++,r}function Xi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=nn();return Hu(n,Fe,e)}function Hu(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=x=null,F=null,et=n,dt=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(ve&vt)===vt:(ki&vt)===vt){var it=et.revertLane;if(it===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Hr&&(dt=!0);else if((ki&it)===it){et=et.next,it===Hr&&(dt=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(b=F=vt,x=d):F=F.next=vt,oe.lanes|=it,Ta|=it;vt=et.action,lr&&r(d,vt),d=et.hasEagerState?et.eagerState:r(d,vt)}else it={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},F===null?(b=F=it,x=d):F=F.next=it,oe.lanes|=vt,Ta|=vt;et=et.next}while(et!==null&&et!==n);if(F===null?x=d:F.next=b,!qn(d,e.memoizedState)&&(sn=!0,dt&&(r=Gr,r!==null)))throw r;e.memoizedState=d,e.baseState=x,e.baseQueue=F,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Gu(e){var n=nn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,u=r.pending,d=n.memoizedState;if(u!==null){r.pending=null;var x=u=u.next;do d=e(d,x.action),x=x.next;while(x!==u);qn(d,n.memoizedState)||(sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),r.lastRenderedState=d}return[d,o]}function nm(e,n,r){var o=oe,u=nn(),d=Me;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=n();var x=!qn((Fe||u).memoizedState,r);if(x&&(u.memoizedState=r,sn=!0),u=u.queue,Xu(rm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Yr(9,{destroy:void 0},am.bind(null,o,u,r,n),null),Ve===null)throw Error(a(349));d||(ki&127)!==0||im(o,n,r)}return r}function im(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=oe.updateQueue,n===null?(n=xl(),oe.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function am(e,n,r,o){n.value=r,n.getSnapshot=o,sm(n)&&om(e)}function rm(e,n,r){return r(function(){sm(n)&&om(e)})}function sm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!qn(e,r)}catch{return!0}}function om(e){var n=$a(e,2);n!==null&&Vn(n,e,2)}function Vu(e){var n=Nn();if(typeof e=="function"){var r=e;if(e=r(),lr){Ot(!0);try{r()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function lm(e,n,r,o){return e.baseState=r,Hu(e,Fe,typeof o=="function"?o:Xi)}function nx(e,n,r,o,u){if(bl(e))throw Error(a(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};U.T!==null?r(!0):d.isTransition=!1,o(d),r=n.pending,r===null?(d.next=n.pending=d,cm(n,d)):(d.next=r.next,n.pending=r.next=d)}}function cm(e,n){var r=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,x={};U.T=x;try{var b=r(u,o),F=U.S;F!==null&&F(x,b),um(e,n,b)}catch(et){ku(e,n,et)}finally{d!==null&&x.types!==null&&(d.types=x.types),U.T=d}}else try{d=r(u,o),um(e,n,d)}catch(et){ku(e,n,et)}}function um(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){fm(e,n,o)},function(o){return ku(e,n,o)}):fm(e,n,r)}function fm(e,n,r){n.status="fulfilled",n.value=r,hm(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,cm(e,r)))}function ku(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,hm(n),n=n.next;while(n!==o)}e.action=null}function hm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function dm(e,n){return n}function pm(e,n){if(Me){var r=Ve.formState;if(r!==null){t:{var o=oe;if(Me){if(Xe){e:{for(var u=Xe,d=si;u.nodeType!==8;){if(!d){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Xe=li(u.nextSibling),o=u.data==="F!";break t}}ma(o)}o=!1}o&&(n=r[0])}}return r=Nn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},r.queue=o,r=Nm.bind(null,oe,o),o.dispatch=r,o=Vu(!1),d=Zu.bind(null,oe,!1,o.queue),o=Nn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,r=nx.bind(null,oe,u,d,r),u.dispatch=r,o.memoizedState=e,[n,r,!1]}function mm(e){var n=nn();return gm(n,Fe,e)}function gm(e,n,r){if(n=Hu(e,n,dm)[0],e=Ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=io(n)}catch(x){throw x===Vr?hl:x}else o=n;n=nn();var u=n.queue,d=u.dispatch;return r!==n.memoizedState&&(oe.flags|=2048,Yr(9,{destroy:void 0},ix.bind(null,u,r),null)),[o,d,e]}function ix(e,n){e.action=n}function _m(e){var n=nn(),r=Fe;if(r!==null)return gm(n,r,e);nn(),n=n.memoizedState,r=nn();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function Yr(e,n,r,o){return e={tag:e,create:r,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=xl(),oe.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function vm(){return nn().memoizedState}function El(e,n,r,o){var u=Nn();oe.flags|=e,u.memoizedState=Yr(1|n,{destroy:void 0},r,o===void 0?null:o)}function Tl(e,n,r,o){var u=nn();o=o===void 0?null:o;var d=u.memoizedState.inst;Fe!==null&&o!==null&&Ou(o,Fe.memoizedState.deps)?u.memoizedState=Yr(n,d,r,o):(oe.flags|=e,u.memoizedState=Yr(1|n,d,r,o))}function ym(e,n){El(8390656,8,e,n)}function Xu(e,n){Tl(2048,8,e,n)}function ax(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=xl(),oe.updateQueue=n,n.events=[e];else{var r=n.events;r===null?n.events=[e]:r.push(e)}}function xm(e){var n=nn().memoizedState;return ax({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Sm(e,n){return Tl(4,2,e,n)}function Mm(e,n){return Tl(4,4,e,n)}function Em(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tm(e,n,r){r=r!=null?r.concat([e]):null,Tl(4,4,Em.bind(null,n,e),r)}function Wu(){}function bm(e,n){var r=nn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&Ou(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function Am(e,n){var r=nn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&Ou(n,o[1]))return o[0];if(o=e(),lr){Ot(!0);try{e()}finally{Ot(!1)}}return r.memoizedState=[o,n],o}function qu(e,n,r){return r===void 0||(ki&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=r,e=Rg(),oe.lanes|=e,Ta|=e,r)}function Rm(e,n,r,o){return qn(r,n)?r:Xr.current!==null?(e=qu(e,r,o),qn(e,n)||(sn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(ve&261930)===0?(sn=!0,e.memoizedState=r):(e=Rg(),oe.lanes|=e,Ta|=e,n)}function Cm(e,n,r,o,u){var d=W.p;W.p=d!==0&&8>d?d:8;var x=U.T,b={};U.T=b,Zu(e,!1,n,r);try{var F=u(),et=U.S;if(et!==null&&et(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var dt=$y(F,o);ao(e,n,dt,Jn(e))}else ao(e,n,o,Jn(e))}catch(vt){ao(e,n,{then:function(){},status:"rejected",reason:vt},Jn())}finally{W.p=d,x!==null&&b.types!==null&&(x.types=b.types),U.T=x}}function rx(){}function Yu(e,n,r,o){if(e.tag!==5)throw Error(a(476));var u=wm(e).queue;Cm(e,u,n,I,r===null?rx:function(){return Dm(e),r(o)})}function wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:I},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dm(e){var n=wm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},Jn())}function ju(){return Sn(Mo)}function Um(){return nn().memoizedState}function Lm(){return nn().memoizedState}function sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Jn();e=va(r);var o=ya(n,e,r);o!==null&&(Vn(o,n,r),$s(o,n,r)),n={cache:Eu()},e.payload=n;return}n=n.return}}function ox(e,n,r){var o=Jn();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},bl(e)?Om(n,r):(r=hu(e,n,r,o),r!==null&&(Vn(r,e,o),zm(r,n,o)))}function Nm(e,n,r){var o=Jn();ao(e,n,r,o)}function ao(e,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(bl(e))Om(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,b=d(x,r);if(u.hasEagerState=!0,u.eagerState=b,qn(b,x))return rl(e,n,u,0),Ve===null&&al(),!1}catch{}finally{}if(r=hu(e,n,u,o),r!==null)return Vn(r,e,o),zm(r,n,o),!0}return!1}function Zu(e,n,r,o){if(o={lane:2,revertLane:Cf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(a(479))}else n=hu(e,r,o,2),n!==null&&Vn(n,e,2)}function bl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Om(e,n){Wr=vl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function zm(e,n,r){if((r&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Os(e,r)}}var ro={readContext:Sn,use:Sl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ro.useEffectEvent=Je;var Pm={readContext:Sn,use:Sl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:ym,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,El(4194308,4,Em.bind(null,n,e),r)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var r=Nn();n=n===void 0?null:n;var o=e();if(lr){Ot(!0);try{e()}finally{Ot(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=Nn();if(r!==void 0){var u=r(n);if(lr){Ot(!0);try{r(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ox.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,r=Nm.bind(null,oe,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:Wu,useDeferredValue:function(e,n){var r=Nn();return qu(r,e,n)},useTransition:function(){var e=Vu(!1);return e=Cm.bind(null,oe,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=oe,u=Nn();if(Me){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Ve===null)throw Error(a(349));(ve&127)!==0||im(o,n,r)}u.memoizedState=r;var d={value:r,getSnapshot:n};return u.queue=d,ym(rm.bind(null,o,d,e),[e]),o.flags|=2048,Yr(9,{destroy:void 0},am.bind(null,o,d,r,n),null),r},useId:function(){var e=Nn(),n=Ve.identifierPrefix;if(Me){var r=Ci,o=Ri;r=(o&~(1<<32-ee(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=yl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=tx++,n="_"+n+"r_"+r.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ju,useFormState:pm,useActionState:pm,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Zu.bind(null,oe,!0,r),r.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Nn().memoizedState=sx.bind(null,oe)},useEffectEvent:function(e){var n=Nn(),r={impl:e};return n.memoizedState=r,function(){if((De&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Ku={readContext:Sn,use:Sl,useCallback:bm,useContext:Sn,useEffect:Xu,useImperativeHandle:Tm,useInsertionEffect:Sm,useLayoutEffect:Mm,useMemo:Am,useReducer:Ml,useRef:vm,useState:function(){return Ml(Xi)},useDebugValue:Wu,useDeferredValue:function(e,n){var r=nn();return Rm(r,Fe.memoizedState,e,n)},useTransition:function(){var e=Ml(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:ju,useFormState:mm,useActionState:mm,useOptimistic:function(e,n){var r=nn();return lm(r,Fe,e,n)},useMemoCache:Iu,useCacheRefresh:Lm};Ku.useEffectEvent=xm;var Bm={readContext:Sn,use:Sl,useCallback:bm,useContext:Sn,useEffect:Xu,useImperativeHandle:Tm,useInsertionEffect:Sm,useLayoutEffect:Mm,useMemo:Am,useReducer:Gu,useRef:vm,useState:function(){return Gu(Xi)},useDebugValue:Wu,useDeferredValue:function(e,n){var r=nn();return Fe===null?qu(r,e,n):Rm(r,Fe.memoizedState,e,n)},useTransition:function(){var e=Gu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:ju,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var r=nn();return Fe!==null?lm(r,Fe,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:Lm};Bm.useEffectEvent=xm;function Qu(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:_({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ju={enqueueSetState:function(e,n,r){e=e._reactInternals;var o=Jn(),u=va(o);u.payload=n,r!=null&&(u.callback=r),n=ya(e,u,o),n!==null&&(Vn(n,e,o),$s(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=Jn(),u=va(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=ya(e,u,o),n!==null&&(Vn(n,e,o),$s(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Jn(),o=va(r);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,r),n!==null&&(Vn(n,e,r),$s(n,e,r))}};function Fm(e,n,r,o,u,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!Ws(r,o)||!Ws(u,d):!0}function Im(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function cr(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=_({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}function Hm(e){il(e)}function Gm(e){console.error(e)}function Vm(e){il(e)}function Al(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function km(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,n,r){return r=va(r),r.tag=3,r.payload={element:null},r.callback=function(){Al(e,n)},r}function Xm(e){return e=va(e),e.tag=3,e}function Wm(e,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){km(n,r,o)}}var x=r.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){km(n,r,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function lx(e,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Ir(n,r,u,!0),r=jn.current,r!==null){switch(r.tag){case 31:case 13:return oi===null?Fl():r.alternate===null&&$e===0&&($e=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===dl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),bf(e,o,u)),!1;case 22:return r.flags|=65536,o===dl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),bf(e,o,u)),!1}throw Error(a(435,r.tag))}return bf(e,o,u),Fl(),!1}if(Me)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==vu&&(e=Error(a(422),{cause:o}),js(ii(e,r)))):(o!==vu&&(n=Error(a(423),{cause:o}),js(ii(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ii(o,r),u=$u(e.stateNode,o,u),wu(e,u),$e!==4&&($e=2)),!1;var d=Error(a(520),{cause:o});if(d=ii(d,r),po===null?po=[d]:po.push(d),$e!==4&&($e=2),n===null)return!0;o=ii(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=$u(r.stateNode,o,e),wu(r,e),!1;case 1:if(n=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ba===null||!ba.has(d))))return r.flags|=65536,u&=-u,r.lanes|=u,u=Xm(u),Wm(u,e,r,o),wu(r,u),!1}r=r.return}while(r!==null);return!1}var tf=Error(a(461)),sn=!1;function Mn(e,n,r,o){n.child=e===null?Zp(n,null,r,o):or(n,e.child,r,o)}function qm(e,n,r,o,u){r=r.render;var d=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return ir(n),o=zu(e,n,r,x,d,u),b=Pu(),e!==null&&!sn?(Bu(e,n,u),Wi(e,n,u)):(Me&&b&&gu(n),n.flags|=1,Mn(e,n,o,u),n.child)}function Ym(e,n,r,o,u){if(e===null){var d=r.type;return typeof d=="function"&&!du(d)&&d.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=d,jm(e,n,d,o,u)):(e=ol(r.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!cf(e,u)){var x=d.memoizedProps;if(r=r.compare,r=r!==null?r:Ws,r(x,o)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Ii(d,o),e.ref=n.ref,e.return=n,n.child=e}function jm(e,n,r,o,u){if(e!==null){var d=e.memoizedProps;if(Ws(d,o)&&e.ref===n.ref)if(sn=!1,n.pendingProps=o=d,cf(e,u))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return ef(e,n,r,o,u)}function Zm(e,n,r,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Km(e,n,d,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,d!==null?d.cachePool:null),d!==null?Jp(n,d):Uu(),$p(n);else return o=n.lanes=536870912,Km(e,n,d!==null?d.baseLanes|r:r,r,o)}else d!==null?(fl(n,d.cachePool),Jp(n,d),Sa(),n.memoizedState=null):(e!==null&&fl(n,null),Uu(),Sa());return Mn(e,n,u,r),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Km(e,n,r,o,u){var d=bu();return d=d===null?null:{parent:an._currentValue,pool:d},n.memoizedState={baseLanes:r,cachePool:d},e!==null&&fl(n,null),Uu(),$p(n),e!==null&&Ir(e,n,o,!0),n.childLanes=u,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Qm(e,n,r){return or(n,e.child,null,r),e=Rl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function cx(e,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Rl(n,o),n.lanes=536870912,so(null,e);if(Nu(n),(e=Xe)?(e=c_(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},r=Op(e),r.return=n,n.child=r,xn=n,Xe=null)):e=null,e===null)throw ma(n);return n.lanes=536870912,null}return Rl(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=Qm(e,n,r);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(sn||Ir(e,n,r,!1),u=(r&e.childLanes)!==0,sn||u){if(o=Ve,o!==null&&(x=Ai(o,r),x!==0&&x!==d.retryLane))throw d.retryLane=x,$a(e,x),Vn(o,e,x),tf;Fl(),n=Qm(e,n,r)}else e=d.treeContext,Xe=li(x.nextSibling),xn=n,Me=!0,pa=null,si=!1,e!==null&&Bp(n,e),n=Rl(n,o),n.flags|=4096;return n}return e=Ii(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function ef(e,n,r,o,u){return ir(n),r=zu(e,n,r,o,void 0,u),o=Pu(),e!==null&&!sn?(Bu(e,n,u),Wi(e,n,u)):(Me&&o&&gu(n),n.flags|=1,Mn(e,n,r,u),n.child)}function Jm(e,n,r,o,u,d){return ir(n),n.updateQueue=null,r=em(n,o,r,u),tm(e),o=Pu(),e!==null&&!sn?(Bu(e,n,d),Wi(e,n,d)):(Me&&o&&gu(n),n.flags|=1,Mn(e,n,r,d),n.child)}function $m(e,n,r,o,u){if(ir(n),n.stateNode===null){var d=zr,x=r.contextType;typeof x=="object"&&x!==null&&(d=Sn(x)),d=new r(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ju,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ru(n),x=r.contextType,d.context=typeof x=="object"&&x!==null?Sn(x):zr,d.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Qu(n,r,x,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Ju.enqueueReplaceState(d,d.state,null),eo(n,o,d,u),to(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,F=cr(r,b);d.props=F;var et=d.context,dt=r.contextType;x=zr,typeof dt=="object"&&dt!==null&&(x=Sn(dt));var vt=r.getDerivedStateFromProps;dt=typeof vt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==x)&&Im(n,d,o,x),_a=!1;var it=n.memoizedState;d.state=it,eo(n,o,d,u),to(),et=n.memoizedState,b||it!==et||_a?(typeof vt=="function"&&(Qu(n,r,vt,o),et=n.memoizedState),(F=_a||Fm(n,r,F,o,it,et,x))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),d.props=o,d.state=et,d.context=x,o=F):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Cu(e,n),x=n.memoizedProps,dt=cr(r,x),d.props=dt,vt=n.pendingProps,it=d.context,et=r.contextType,F=zr,typeof et=="object"&&et!==null&&(F=Sn(et)),b=r.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==vt||it!==F)&&Im(n,d,o,F),_a=!1,it=n.memoizedState,d.state=it,eo(n,o,d,u),to();var lt=n.memoizedState;x!==vt||it!==lt||_a||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof b=="function"&&(Qu(n,r,b,o),lt=n.memoizedState),(dt=_a||Fm(n,r,dt,o,it,lt,F)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,lt,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,lt,F)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),d.props=o,d.state=lt,d.context=F,o=dt):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Cl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=or(n,e.child,null,u),n.child=or(n,null,r,u)):Mn(e,n,r,u),n.memoizedState=d.state,e=n.child):e=Wi(e,n,u),e}function tg(e,n,r,o){return er(),n.flags|=256,Mn(e,n,r,o),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:kp()}}function rf(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Qn),e}function eg(e,n,r){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?xa(n):Sa(),(e=Xe)?(e=c_(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},r=Op(e),r.return=n,n.child=r,xn=n,Xe=null)):e=null,e===null)throw ma(n);return Gf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Sa(),u=n.mode,b=wl({mode:"hidden",children:b},u),o=tr(o,u,r,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=af(r),o.childLanes=rf(e,x,r),n.memoizedState=nf,so(null,o)):(xa(n),sf(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(d)n.flags&256?(xa(n),n.flags&=-257,n=of(e,n,r)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),b=o.fallback,u=n.mode,o=wl({mode:"visible",children:o.children},u),b=tr(b,u,r,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,or(n,e.child,null,r),o=n.child,o.memoizedState=af(r),o.childLanes=rf(e,x,r),n.memoizedState=nf,n=so(null,o));else if(xa(n),Gf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var et=x.dgst;x=et,o=Error(a(419)),o.stack="",o.digest=x,js({value:o,source:null,stack:null}),n=of(e,n,r)}else if(sn||Ir(e,n,r,!1),x=(r&e.childLanes)!==0,sn||x){if(x=Ve,x!==null&&(o=Ai(x,r),o!==0&&o!==F.retryLane))throw F.retryLane=o,$a(e,o),Vn(x,e,o),tf;Hf(b)||Fl(),n=of(e,n,r)}else Hf(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Xe=li(b.nextSibling),xn=n,Me=!0,pa=null,si=!1,e!==null&&Bp(n,e),n=sf(n,o.children),n.flags|=4096);return n}return u?(Sa(),b=o.fallback,u=n.mode,F=e.child,et=F.sibling,o=Ii(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,et!==null?b=Ii(et,b):(b=tr(b,u,r,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,so(null,o),o=n.child,b=e.child.memoizedState,b===null?b=af(r):(u=b.cachePool,u!==null?(F=an._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=kp(),b={baseLanes:b.baseLanes|r,cachePool:u}),o.memoizedState=b,o.childLanes=rf(e,x,r),n.memoizedState=nf,so(e.child,o)):(xa(n),r=e.child,e=r.sibling,r=Ii(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=r,n.memoizedState=null,r)}function sf(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function of(e,n,r){return or(n,e.child,null,r),e=sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ng(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Su(e.return,n,r)}function lf(e,n,r,o,u,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=r,x.tailMode=u,x.treeForkCount=d)}function ig(e,n,r){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=en.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,ht(en,x),Mn(e,n,o,r),o=Me?Ys:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ng(e,r,n);else if(e.tag===19)ng(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&_l(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),lf(n,!1,u,r,d,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_l(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}lf(n,!0,r,null,d,o);break;case"together":lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Wi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Ir(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Ii(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Ii(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function ux(e,n,r){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ga(n,an,e.memoizedState.cache),er();break;case 27:case 5:qt(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(r&n.child.childLanes)!==0?eg(e,n,r):(xa(n),e=Wi(e,n,r),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Ir(e,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return ig(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ht(en,en.current),o)break;return null;case 22:return n.lanes=0,Zm(e,n,r,n.pendingProps);case 24:ga(n,an,e.memoizedState.cache)}return Wi(e,n,r)}function ag(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!cf(e,r)&&(n.flags&128)===0)return sn=!1,ux(e,n,r);sn=(e.flags&131072)!==0}else sn=!1,Me&&(n.flags&1048576)!==0&&Pp(n,Ys,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")du(e)?(o=cr(e,o),n.tag=1,n=$m(null,n,e,o,r)):(n.tag=0,n=ef(null,n,e,o,r));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=qm(null,n,e,o,r);break t}else if(u===z){n.tag=14,n=Ym(null,n,e,o,r);break t}}throw n=ot(e)||e,Error(a(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=cr(o,n.pendingProps),$m(e,n,o,u,r);case 3:t:{if(Pt(n,n.stateNode.containerInfo),e===null)throw Error(a(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Cu(e,n),eo(n,o,null,r);var x=n.memoizedState;if(o=x.cache,ga(n,an,o),o!==d.cache&&Mu(n,[an],r,!0),to(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=tg(e,n,o,r);break t}else if(o!==u){u=ii(Error(a(424)),n),js(u),n=tg(e,n,o,r);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=li(e.firstChild),xn=n,Me=!0,pa=null,si=!0,r=Zp(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(er(),o===u){n=Wi(e,n,r);break t}Mn(e,n,o,r)}n=n.child}return n;case 26:return Cl(e,n),e===null?(r=m_(n.type,null,n.pendingProps,null))?n.memoizedState=r:Me||(r=n.type,e=n.pendingProps,o=Wl(St.current).createElement(r),o[Ke]=n,o[vn]=e,En(o,r,e),Y(o),n.stateNode=o):n.memoizedState=m_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Me&&(o=n.stateNode=h_(n.type,n.pendingProps,St.current),xn=n,si=!0,u=Xe,wa(n.type)?(Vf=u,Xe=li(o.firstChild)):Xe=u),Mn(e,n,n.pendingProps.children,r),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=Xe)&&(o=Hx(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,xn=n,Xe=li(o.firstChild),si=!1,u=!0):u=!1),u||ma(n)),qt(n),u=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,Bf(u,d)?o=null:x!==null&&Bf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(e,n,ex,null,null,r),Mo._currentValue=u),Cl(e,n),Mn(e,n,o,r),n.child;case 6:return e===null&&Me&&((e=r=Xe)&&(r=Gx(r,n.pendingProps,si),r!==null?(n.stateNode=r,xn=n,Xe=null,e=!0):e=!1),e||ma(n)),null;case 13:return eg(e,n,r);case 4:return Pt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=or(n,null,o,r):Mn(e,n,o,r),n.child;case 11:return qm(e,n,n.type,n.pendingProps,r);case 7:return Mn(e,n,n.pendingProps,r),n.child;case 8:return Mn(e,n,n.pendingProps.children,r),n.child;case 12:return Mn(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Mn(e,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ir(n),u=Sn(u),o=o(u),n.flags|=1,Mn(e,n,o,r),n.child;case 14:return Ym(e,n,n.type,n.pendingProps,r);case 15:return jm(e,n,n.type,n.pendingProps,r);case 19:return ig(e,n,r);case 31:return cx(e,n,r);case 22:return Zm(e,n,r,n.pendingProps);case 24:return ir(n),o=Sn(an),e===null?(u=bu(),u===null&&(u=Ve,d=Eu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=r),u=d),n.memoizedState={parent:o,cache:u},Ru(n),ga(n,an,u)):((e.lanes&r)!==0&&(Cu(e,n),eo(n,null,null,r),to()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,an,o)):(o=d.cache,ga(n,an,o),o!==u.cache&&Mu(n,[an],r,!0))),Mn(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function qi(e){e.flags|=4}function uf(e,n,r,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ug())e.flags|=8192;else throw sr=dl,Au}else e.flags&=-16777217}function rg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!x_(n))if(Ug())e.flags|=8192;else throw sr=dl,Au}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cn():536870912,e.lanes|=n,Qr|=n)}function oo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function fx(e,n,r){var o=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(an),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),We(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(qi(n),d!==null?(We(n),rg(n,d)):(We(n),uf(n,u,null,o,r))):d?d!==e.memoizedState?(qi(n),We(n),rg(n,d)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&qi(n),We(n),uf(n,u,e,o,r)),null;case 27:if(Ue(n),r=St.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return We(n),null}e=q.current,Fr(n)?Fp(n):(e=h_(u,o,r),n.stateNode=e,qi(n))}return We(n),null;case 5:if(Ue(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return We(n),null}if(d=q.current,Fr(n))Fp(n);else{var x=Wl(St.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[Ke]=n,d[vn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;t:switch(En(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&qi(n)}}return We(n),uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,r),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=St.current,Fr(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,u=xn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ke]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||e_(e.nodeValue,r)),e||ma(n,!0)}else e=Wl(e).createTextNode(o),e[Ke]=n,n.stateNode=e}return We(n),null;case 31:if(r=n.memoizedState,e===null||e.memoizedState!==null){if(o=Fr(n),r!==null){if(e===null){if(!o)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else r=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(a(558))}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[Ke]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,e=e!==null&&e.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),r!==e&&r&&(n.child.flags|=8192),Dl(n,n.updateQueue),We(n),null);case 4:return Ht(),e===null&&Lf(n.stateNode.containerInfo),We(n),null;case 10:return Vi(n.type),We(n),null;case 19:if(J(en),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)oo(o,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=_l(e),d!==null){for(n.flags|=128,oo(o,!1),e=d.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)Np(r,e),r=r.sibling;return ht(en,en.current&1|2),Me&&Hi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&pt()>zl&&(n.flags|=128,u=!0,oo(o,!1),n.lanes=4194304)}else{if(!u)if(e=_l(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Me)return We(n),null}else 2*pt()-o.renderingStartTime>zl&&r!==536870912&&(n.flags|=128,u=!0,oo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=pt(),e.sibling=null,r=en.current,ht(en,u?r&1|2:r&1),Me&&Hi(n,o.treeForkCount),e):(We(n),null);case 22:case 23:return Zn(n),Lu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),r=n.updateQueue,r!==null&&Dl(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&J(ar),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(an),We(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function hx(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(an),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(a(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(en),null;case 4:return Ht(),null;case 10:return Vi(n.type),null;case 22:case 23:return Zn(n),Lu(),e!==null&&J(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(an),null;case 25:return null;default:return null}}function sg(e,n){switch(_u(n),n.tag){case 3:Vi(an),Ht();break;case 26:case 27:case 5:Ue(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:J(en);break;case 10:Vi(n.type);break;case 22:case 23:Zn(n),Lu(),e!==null&&J(ar);break;case 24:Vi(an)}}function lo(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&e)===e){o=void 0;var d=r.create,x=r.inst;o=d(),x.destroy=o}r=r.next}while(r!==u)}}catch(b){Oe(n,n.return,b)}}function Ma(e,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var F=r,et=b;try{et()}catch(dt){Oe(u,F,dt)}}}o=o.next}while(o!==d)}}catch(dt){Oe(n,n.return,dt)}}function og(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Qp(n,r)}catch(o){Oe(e,e.return,o)}}}function lg(e,n,r){r.props=cr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Oe(e,n,o)}}function co(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof r=="function"?e.refCleanup=r(o):r.current=o}}catch(u){Oe(e,n,u)}}function wi(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Oe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Oe(e,n,u)}else r.current=null}function cg(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Oe(e,e.return,u)}}function ff(e,n,r){try{var o=e.stateNode;Ox(o,e.type,r,n),o[vn]=n}catch(u){Oe(e,e.return,u)}}function ug(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&wa(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,r),e=e.sibling;e!==null;)df(e,n,r),e=e.sibling}function Ul(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ul(e,n,r),e=e.sibling;e!==null;)Ul(e,n,r),e=e.sibling}function fg(e){var n=e.stateNode,r=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,r),n[Ke]=e,n[vn]=r}catch(d){Oe(e,e.return,d)}}var Yi=!1,on=!1,pf=!1,hg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function dx(e,n){if(e=e.containerInfo,zf=Jl,e=Tp(e),su(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var x=0,b=-1,F=-1,et=0,dt=0,vt=e,it=null;e:for(;;){for(var lt;vt!==r||u!==0&&vt.nodeType!==3||(b=x+u),vt!==d||o!==0&&vt.nodeType!==3||(F=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)it=vt,vt=lt;for(;;){if(vt===e)break e;if(it===r&&++et===u&&(b=x),it===d&&++dt===o&&(F=x),(lt=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=lt}r=b===-1||F===-1?null:{start:b,end:F}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pf={focusedElem:e,selectionRange:r},Jl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)u=e[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=n,u=d.memoizedProps,d=d.memoizedState,o=r.stateNode;try{var It=cr(r.type,u);e=o.getSnapshotBeforeUpdate(It,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Oe(r,r.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)If(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function dg(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Zi(e,r),o&4&&lo(5,r);break;case 1:if(Zi(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(x){Oe(r,r.return,x)}else{var u=cr(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Oe(r,r.return,x)}}o&64&&og(r),o&512&&co(r,r.return);break;case 3:if(Zi(e,r),o&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{Qp(e,n)}catch(x){Oe(r,r.return,x)}}break;case 27:n===null&&o&4&&fg(r);case 26:case 5:Zi(e,r),n===null&&o&4&&cg(r),o&512&&co(r,r.return);break;case 12:Zi(e,r);break;case 31:Zi(e,r),o&4&&gg(e,r);break;case 13:Zi(e,r),o&4&&_g(e,r),o&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Mx.bind(null,r),Vx(e,r))));break;case 22:if(o=r.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||on,u=Yi;var d=on;Yi=o,(on=n)&&!d?Ki(e,r,(r.subtreeFlags&8772)!==0):Zi(e,r),Yi=u,on=d}break;case 30:break;default:Zi(e,r)}}function pg(e){var n=e.alternate;n!==null&&(e.alternate=null,pg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Bs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Fn=!1;function ji(e,n,r){for(r=r.child;r!==null;)mg(e,n,r),r=r.sibling}function mg(e,n,r){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Qt,r)}catch{}switch(r.tag){case 26:on||wi(r,n),ji(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:on||wi(r,n);var o=je,u=Fn;wa(r.type)&&(je=r.stateNode,Fn=!1),ji(e,n,r),yo(r.stateNode),je=o,Fn=u;break;case 5:on||wi(r,n);case 6:if(o=je,u=Fn,je=null,ji(e,n,r),je=o,Fn=u,je!==null)if(Fn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(r.stateNode)}catch(d){Oe(r,n,d)}else try{je.removeChild(r.stateNode)}catch(d){Oe(r,n,d)}break;case 18:je!==null&&(Fn?(e=je,o_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),rs(e)):o_(je,r.stateNode));break;case 4:o=je,u=Fn,je=r.stateNode.containerInfo,Fn=!0,ji(e,n,r),je=o,Fn=u;break;case 0:case 11:case 14:case 15:Ma(2,r,n),on||Ma(4,r,n),ji(e,n,r);break;case 1:on||(wi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&lg(r,n,o)),ji(e,n,r);break;case 21:ji(e,n,r);break;case 22:on=(o=on)||r.memoizedState!==null,ji(e,n,r),on=o;break;default:ji(e,n,r)}}function gg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(r){Oe(n,n.return,r)}}}function _g(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(r){Oe(n,n.return,r)}}function px(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new hg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new hg),n;default:throw Error(a(435,e.tag))}}function Ll(e,n){var r=px(e);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=Ex.bind(null,e,o);o.then(u,u)}})}function In(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],d=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){je=b.stateNode,Fn=!1;break t}break;case 5:je=b.stateNode,Fn=!1;break t;case 3:case 4:je=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(je===null)throw Error(a(160));mg(d,x,u),je=null,Fn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vg(n,e),n=n.sibling}var vi=null;function vg(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Hn(e),o&4&&(Ma(3,e,e.return),lo(3,e),Ma(5,e,e.return));break;case 1:In(n,e),Hn(e),o&512&&(on||r===null||wi(r,r.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=vi;if(In(n,e),Hn(e),o&512&&(on||r===null||wi(r,r.return)),o&4){var d=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Za]||d[Ke]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),En(d,o,r),d[Ke]=e,Y(d),o=d;break t;case"link":var x=v_("link","href",u).get(o+(r.href||""));if(x){for(var b=0;b<x.length;b++)if(d=x[b],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){x.splice(b,1);break e}}d=u.createElement(o),En(d,o,r),u.head.appendChild(d);break;case"meta":if(x=v_("meta","content",u).get(o+(r.content||""))){for(b=0;b<x.length;b++)if(d=x[b],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){x.splice(b,1);break e}}d=u.createElement(o),En(d,o,r),u.head.appendChild(d);break;default:throw Error(a(468,o))}d[Ke]=e,Y(d),o=d}e.stateNode=o}else y_(u,e.type,e.stateNode);else e.stateNode=__(u,o,e.memoizedProps);else d!==o?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,o===null?y_(u,e.type,e.stateNode):__(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ff(e,e.memoizedProps,r.memoizedProps)}break;case 27:In(n,e),Hn(e),o&512&&(on||r===null||wi(r,r.return)),r!==null&&o&4&&ff(e,e.memoizedProps,r.memoizedProps);break;case 5:if(In(n,e),Hn(e),o&512&&(on||r===null||wi(r,r.return)),e.flags&32){u=e.stateNode;try{Pn(u,"")}catch(It){Oe(e,e.return,It)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ff(e,u,r!==null?r.memoizedProps:u)),o&1024&&(pf=!0);break;case 6:if(In(n,e),Hn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(It){Oe(e,e.return,It)}}break;case 3:if(jl=null,u=vi,vi=ql(n.containerInfo),In(n,e),vi=u,Hn(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(It){Oe(e,e.return,It)}pf&&(pf=!1,yg(e));break;case 4:o=vi,vi=ql(e.stateNode.containerInfo),In(n,e),Hn(e),vi=o;break;case 12:In(n,e),Hn(e);break;case 31:In(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 13:In(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ol=pt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 22:u=e.memoizedState!==null;var F=r!==null&&r.memoizedState!==null,et=Yi,dt=on;if(Yi=et||u,on=dt||F,In(n,e),on=dt,Yi=et,Hn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||F||Yi||on||ur(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){F=r=n;try{if(d=F.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=F.stateNode;var vt=F.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(It){Oe(F,F.return,It)}}}else if(n.tag===6){if(r===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(It){Oe(F,F.return,It)}}}else if(n.tag===18){if(r===null){F=n;try{var lt=F.stateNode;u?l_(lt,!0):l_(F.stateNode,!1)}catch(It){Oe(F,F.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Ll(e,r))));break;case 19:In(n,e),Hn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 30:break;case 21:break;default:In(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var r,o=e.return;o!==null;){if(ug(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,d=hf(e);Ul(e,d,u);break;case 5:var x=r.stateNode;r.flags&32&&(Pn(x,""),r.flags&=-33);var b=hf(e);Ul(e,b,x);break;case 3:case 4:var F=r.stateNode.containerInfo,et=hf(e);df(e,et,F);break;default:throw Error(a(161))}}catch(dt){Oe(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dg(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&lg(n,n.return,r),ur(n);break;case 27:yo(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Ki(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:Ki(u,d,r),lo(4,d);break;case 1:if(Ki(u,d,r),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Oe(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Kp(F[u],b)}catch(et){Oe(o,o.return,et)}}r&&x&64&&og(d),co(d,d.return);break;case 27:fg(d);case 26:case 5:Ki(u,d,r),r&&o===null&&x&4&&cg(d),co(d,d.return);break;case 12:Ki(u,d,r);break;case 31:Ki(u,d,r),r&&x&4&&gg(u,d);break;case 13:Ki(u,d,r),r&&x&4&&_g(u,d);break;case 22:d.memoizedState===null&&Ki(u,d,r),co(d,d.return);break;case 30:break;default:Ki(u,d,r)}n=n.sibling}}function mf(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Zs(r))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e))}function yi(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)xg(e,n,r,o),n=n.sibling}function xg(e,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,r,o),u&2048&&lo(9,n);break;case 1:yi(e,n,r,o);break;case 3:yi(e,n,r,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zs(e)));break;case 12:if(u&2048){yi(e,n,r,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,b=d.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Oe(n,n.return,F)}}else yi(e,n,r,o);break;case 31:yi(e,n,r,o);break;case 13:yi(e,n,r,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?yi(e,n,r,o):uo(e,n):d._visibility&2?yi(e,n,r,o):(d._visibility|=2,jr(e,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&mf(x,n);break;case 24:yi(e,n,r,o),u&2048&&gf(n.alternate,n);break;default:yi(e,n,r,o)}}function jr(e,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,b=r,F=o,et=x.flags;switch(x.tag){case 0:case 11:case 15:jr(d,x,b,F,u),lo(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?jr(d,x,b,F,u):uo(d,x):(dt._visibility|=2,jr(d,x,b,F,u)),u&&et&2048&&mf(x.alternate,x);break;case 24:jr(d,x,b,F,u),u&&et&2048&&gf(x.alternate,x);break;default:jr(d,x,b,F,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,u=o.flags;switch(o.tag){case 22:uo(r,o),u&2048&&mf(o.alternate,o);break;case 24:uo(r,o),u&2048&&gf(o.alternate,o);break;default:uo(r,o)}n=n.sibling}}var fo=8192;function Zr(e,n,r){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)Sg(e,n,r),e=e.sibling}function Sg(e,n,r){switch(e.tag){case 26:Zr(e,n,r),e.flags&fo&&e.memoizedState!==null&&tS(r,vi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,r);break;case 3:case 4:var o=vi;vi=ql(e.stateNode.containerInfo),Zr(e,n,r),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=fo,fo=16777216,Zr(e,n,r),fo=o):Zr(e,n,r));break;default:Zr(e,n,r)}}function Mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];mn=o,Tg(o,e)}Mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):ho(e);break;default:ho(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];mn=o,Tg(o,e)}Mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Nl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function Tg(e,n){for(;mn!==null;){var r=mn;switch(r.tag){case 0:case 11:case 15:Ma(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zs(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,mn=o;else t:for(r=e;mn!==null;){o=mn;var u=o.sibling,d=o.return;if(pg(o),o===r){mn=null;break t}if(u!==null){u.return=d,mn=u;break t}mn=d}}}var mx={getCacheForType:function(e){var n=Sn(an),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r},cacheSignal:function(){return Sn(an).controller.signal}},gx=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,de=null,ve=0,Ne=0,Kn=null,Ea=!1,Kr=!1,_f=!1,Qi=0,$e=0,Ta=0,fr=0,vf=0,Qn=0,Qr=0,po=null,Gn=null,yf=!1,Ol=0,bg=0,zl=1/0,Pl=null,ba=null,fn=0,Aa=null,Jr=null,Ji=0,xf=0,Sf=null,Ag=null,mo=0,Mf=null;function Jn(){return(De&2)!==0&&ve!==0?ve&-ve:U.T!==null?Cf():zs()}function Rg(){if(Qn===0)if((ve&536870912)===0||Me){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function Vn(e,n,r){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ra(e,ve,Qn,!1)),_n(e,r),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(fr|=r),$e===4&&Ra(e,ve,Qn,!1)),Di(e))}function Cg(e,n,r){if((De&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?yx(e,n):Tf(e,n,!0),d=o;do{if(u===0){Kr&&!o&&Ra(e,n,0,!1);break}else{if(r=e.current.alternate,d&&!_x(r)){u=Tf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=po;var F=b.current.memoizedState.isDehydrated;if(F&&($r(b,x).flags|=256),x=Tf(b,x,!1),x!==2){if(_f&&!F){b.errorRecoveryDisabledLanes|=d,fr|=d,u=4;break t}d=Gn,Gn=u,d!==null&&(Gn===null?Gn=d:Gn.push.apply(Gn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){$r(e,0),Ra(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ra(o,n,Qn,!Ea);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Ol+300-pt(),10<u)){if(Ra(o,n,Qn,!Ea),Dt(o,0,!0)!==0)break t;Ji=n,o.timeoutHandle=r_(wg.bind(null,o,r,Gn,Pl,yf,n,Qn,fr,Qr,Ea,d,"Throttled",-0,0),u);break t}wg(o,r,Gn,Pl,yf,n,Qn,fr,Qr,Ea,d,null,-0,0)}}break}while(!0);Di(e)}function wg(e,n,r,o,u,d,x,b,F,et,dt,vt,it,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Sg(n,d,vt);var It=(d&62914560)===d?Ol-pt():(d&4194048)===d?bg-pt():0;if(It=eS(vt,It),It!==null){Ji=d,e.cancelPendingCommit=It(Bg.bind(null,e,n,d,r,o,u,x,b,F,dt,vt,null,it,lt)),Ra(e,d,x,!et);return}}Bg(e,n,d,r,o,u,x,b,F)}function _x(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,r,o){n&=~vf,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-ee(u),x=1<<d;o[d]=-1,u&=~x}r!==0&&Ns(e,r,n)}function Bl(){return(De&6)===0?(go(0),!1):!0}function Ef(){if(de!==null){if(Ne===0)var e=de.return;else e=de,Gi=nr=null,Fu(e),kr=null,Qs=0,e=de;for(;e!==null;)sg(e.alternate,e),e=e.return;de=null}}function $r(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Bx(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ji=0,Ef(),Ve=e,de=r=Ii(e.current,null),ve=n,Ne=0,Kn=null,Ea=!1,Kr=ne(e,n),_f=!1,Qr=Qn=vf=fr=Ta=$e=0,Gn=po=null,yf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ee(o),d=1<<u;n|=e[u],o&=~d}return Qi=n,al(),r}function Dg(e,n){oe=null,U.H=ro,n===Vr||n===hl?(n=qp(),Ne=3):n===Au?(n=qp(),Ne=4):Ne=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,de===null&&($e=1,Al(e,ii(n,e.current)))}function Ug(){var e=jn.current;return e===null?!0:(ve&4194048)===ve?oi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===oi:!1}function Lg(){var e=U.H;return U.H=ro,e===null?ro:e}function Ng(){var e=U.A;return U.A=mx,e}function Fl(){$e=4,Ea||(ve&4194048)!==ve&&jn.current!==null||(Kr=!0),(Ta&134217727)===0&&(fr&134217727)===0||Ve===null||Ra(Ve,ve,Qn,!1)}function Tf(e,n,r){var o=De;De|=2;var u=Lg(),d=Ng();(Ve!==e||ve!==n)&&(Pl=null,$r(e,n)),n=!1;var x=$e;t:do try{if(Ne!==0&&de!==null){var b=de,F=Kn;switch(Ne){case 8:Ef(),x=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var et=Ne;if(Ne=0,Kn=null,ts(e,b,F,et),r&&Kr){x=0;break t}break;default:et=Ne,Ne=0,Kn=null,ts(e,b,F,et)}}vx(),x=$e;break}catch(dt){Dg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Gi=nr=null,De=o,U.H=u,U.A=d,de===null&&(Ve=null,ve=0,al()),x}function vx(){for(;de!==null;)Og(de)}function yx(e,n){var r=De;De|=2;var o=Lg(),u=Ng();Ve!==e||ve!==n?(Pl=null,zl=pt()+500,$r(e,n)):Kr=ne(e,n);t:do try{if(Ne!==0&&de!==null){n=de;var d=Kn;e:switch(Ne){case 1:Ne=0,Kn=null,ts(e,n,d,1);break;case 2:case 9:if(Xp(d)){Ne=0,Kn=null,zg(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Di(e)},d.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Xp(d)?(Ne=0,Kn=null,zg(n)):(Ne=0,Kn=null,ts(e,n,d,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var b=de;if(x?x_(x):b.stateNode.complete){Ne=0,Kn=null;var F=b.sibling;if(F!==null)de=F;else{var et=b.return;et!==null?(de=et,Il(et)):de=null}break e}}Ne=0,Kn=null,ts(e,n,d,5);break;case 6:Ne=0,Kn=null,ts(e,n,d,6);break;case 8:Ef(),$e=6;break t;default:throw Error(a(462))}}xx();break}catch(dt){Dg(e,dt)}while(!0);return Gi=nr=null,U.H=o,U.A=u,De=r,de!==null?0:(Ve=null,ve=0,al(),$e)}function xx(){for(;de!==null&&!A();)Og(de)}function Og(e){var n=ag(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Il(e):de=n}function zg(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Jm(r,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Jm(r,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Fu(n);default:sg(r,n),n=de=Np(n,Qi),n=ag(r,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Il(e):de=n}function ts(e,n,r,o){Gi=nr=null,Fu(n),kr=null,Qs=0;var u=n.return;try{if(lx(e,u,n,r,ve)){$e=1,Al(e,ii(r,e.current)),de=null;return}}catch(d){if(u!==null)throw de=u,d;$e=1,Al(e,ii(r,e.current)),de=null;return}n.flags&32768?(Me||o===1?e=!0:Kr||(ve&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Pg(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){Pg(n,Ea);return}e=n.return;var r=fx(n.alternate,n,Qi);if(r!==null){de=r;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);$e===0&&($e=5)}function Pg(e,n){do{var r=hx(e.alternate,e);if(r!==null){r.flags&=32767,de=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=r}while(e!==null);$e=6,de=null}function Bg(e,n,r,o,u,d,x,b,F){e.cancelPendingCommit=null;do Hl();while(fn!==0);if((De&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(d=n.lanes|n.childLanes,d|=fu,pi(e,r,d,x,b,F),e===Ve&&(de=Ve=null,ve=0),Jr=n,Aa=e,Ji=r,xf=d,Sf=u,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tx(Ct,function(){return Vg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=W.p,W.p=2,x=De,De|=4;try{dx(e,n,r)}finally{De=x,W.p=u,U.T=o}}fn=1,Fg(),Ig(),Hg()}}function Fg(){if(fn===1){fn=0;var e=Aa,n=Jr,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=U.T,U.T=null;var o=W.p;W.p=2;var u=De;De|=4;try{vg(n,e);var d=Pf,x=Tp(e.containerInfo),b=d.focusedElem,F=d.selectionRange;if(x!==b&&b&&b.ownerDocument&&Ep(b.ownerDocument.documentElement,b)){if(F!==null&&su(b)){var et=F.start,dt=F.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var vt=b.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),It=b.textContent.length,Jt=Math.min(F.start,It),He=F.end===void 0?Jt:Math.min(F.end,It);!lt.extend&&Jt>He&&(x=He,He=Jt,Jt=x);var K=Mp(b,Jt),V=Mp(b,He);if(K&&V&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==V.node||lt.focusOffset!==V.offset)){var tt=vt.createRange();tt.setStart(K.node,K.offset),lt.removeAllRanges(),Jt>He?(lt.addRange(tt),lt.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),lt.addRange(tt))}}}}for(vt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<vt.length;b++){var mt=vt[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Jl=!!zf,Pf=zf=null}finally{De=u,W.p=o,U.T=r}}e.current=n,fn=2}}function Ig(){if(fn===2){fn=0;var e=Aa,n=Jr,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=U.T,U.T=null;var o=W.p;W.p=2;var u=De;De|=4;try{dg(e,n.alternate,n)}finally{De=u,W.p=o,U.T=r}}fn=3}}function Hg(){if(fn===4||fn===3){fn=0,at();var e=Aa,n=Jr,r=Ji,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Jr=Aa=null,Gg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Rr(r),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Qt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=W.p,W.p=2,U.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];d(b.value,{componentStack:b.stack})}}finally{U.T=n,W.p=u}}(Ji&3)!==0&&Hl(),Di(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Mf?mo++:(mo=0,Mf=e):mo=0,go(0)}}function Gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zs(n)))}function Hl(){return Fg(),Ig(),Hg(),Vg()}function Vg(){if(fn!==5)return!1;var e=Aa,n=xf;xf=0;var r=Rr(Ji),o=U.T,u=W.p;try{W.p=32>r?32:r,U.T=null,r=Sf,Sf=null;var d=Aa,x=Ji;if(fn=0,Jr=Aa=null,Ji=0,(De&6)!==0)throw Error(a(331));var b=De;if(De|=4,Eg(d.current),xg(d,d.current,x,r),De=b,go(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Qt,d)}catch{}return!0}finally{W.p=u,U.T=o,Gg(e,n)}}function kg(e,n,r){n=ii(r,n),n=$u(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(_n(e,2),Di(e))}function Oe(e,n,r){if(e.tag===3)kg(e,e,r);else for(;n!==null;){if(n.tag===3){kg(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=ii(r,e),r=Xm(2),o=ya(n,r,2),o!==null&&(Wm(r,o,n,e),_n(o,2),Di(o));break}}n=n.return}}function bf(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new gx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(_f=!0,u.add(r),e=Sx.bind(null,e,n,r),n.then(e,e))}function Sx(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ve===e&&(ve&r)===r&&($e===4||$e===3&&(ve&62914560)===ve&&300>pt()-Ol?(De&2)===0&&$r(e,0):vf|=r,Qr===ve&&(Qr=0)),Di(e)}function Xg(e,n){n===0&&(n=cn()),e=$a(e,n),e!==null&&(_n(e,n),Di(e))}function Mx(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Xg(e,r)}function Ex(e,n){var r=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Xg(e,r)}function Tx(e,n){return Xt(e,n)}var Gl=null,es=null,Af=!1,Vl=!1,Rf=!1,Ca=0;function Di(e){e!==es&&e.next===null&&(es===null?Gl=es=e:es=es.next=e),Vl=!0,Af||(Af=!0,Ax())}function go(e,n){if(!Rf&&Vl){Rf=!0;do for(var r=!1,o=Gl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-ee(42|e)+1)-1,d&=u&~(x&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,jg(o,d))}else d=ve,d=Dt(o,o===Ve?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ne(o,d)||(r=!0,jg(o,d));o=o.next}while(r);Rf=!1}}function bx(){Wg()}function Wg(){Vl=Af=!1;var e=0;Ca!==0&&Px()&&(e=Ca);for(var n=pt(),r=null,o=Gl;o!==null;){var u=o.next,d=qg(o,n);d===0?(o.next=null,r===null?Gl=u:r.next=u,u===null&&(es=r)):(r=o,(e!==0||(d&3)!==0)&&(Vl=!0)),o=u}fn!==0&&fn!==5||go(e),Ca!==0&&(Ca=0)}function qg(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-ee(d),b=1<<x,F=u[x];F===-1?((b&r)===0||(b&o)!==0)&&(u[x]=Ye(b,n)):F<=n&&(e.expiredLanes|=b),d&=~b}if(n=Ve,r=ve,r=Dt(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,r===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||ne(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&N(o),Rr(r)){case 2:case 8:r=Vt;break;case 32:r=Ct;break;case 268435456:r=_e;break;default:r=Ct}return o=Yg.bind(null,e),r=Xt(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&N(o),e.callbackPriority=2,e.callbackNode=null,2}function Yg(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Hl()&&e.callbackNode!==r)return null;var o=ve;return o=Dt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),qg(e,pt()),e.callbackNode!=null&&e.callbackNode===r?Yg.bind(null,e):null)}function jg(e,n){if(Hl())return null;Cg(e,n,!0)}function Ax(){Fx(function(){(De&6)!==0?Xt(_t,bx):Wg()})}function Cf(){if(Ca===0){var e=Hr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ca=e}return Ca}function Zg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function Kg(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function Rx(e,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var d=Zg((u[vn]||null).action),x=o.submitter;x&&(n=(n=x[vn]||null)?Zg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var b=new tl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ca!==0){var F=x?Kg(u,x):new FormData(u);Yu(r,{pending:!0,data:F,method:u.method,action:d},null,F)}}else typeof d=="function"&&(b.preventDefault(),F=x?Kg(u,x):new FormData(u),Yu(r,{pending:!0,data:F,method:u.method,action:d},d,F))},currentTarget:u}]})}}for(var wf=0;wf<uu.length;wf++){var Df=uu[wf],Cx=Df.toLowerCase(),wx=Df[0].toUpperCase()+Df.slice(1);_i(Cx,"on"+wx)}_i(Rp,"onAnimationEnd"),_i(Cp,"onAnimationIteration"),_i(wp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Wy,"onTransitionRun"),_i(qy,"onTransitionStart"),_i(Yy,"onTransitionCancel"),_i(Dp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Qg(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],F=b.instance,et=b.currentTarget;if(b=b.listener,F!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){il(dt)}u.currentTarget=null,d=F}else for(x=0;x<o.length;x++){if(b=o[x],F=b.instance,et=b.currentTarget,b=b.listener,F!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){il(dt)}u.currentTarget=null,d=F}}}}function pe(e,n){var r=n[Ps];r===void 0&&(r=n[Ps]=new Set);var o=e+"__bubble";r.has(o)||(Jg(n,e,2,!1),r.add(o))}function Uf(e,n,r){var o=0;n&&(o|=4),Jg(r,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[kl]){e[kl]=!0,Tt.forEach(function(r){r!=="selectionchange"&&(Dx.has(r)||Uf(r,!1,e),Uf(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Uf("selectionchange",!1,n))}}function Jg(e,n,r,o){switch(R_(n)){case 2:var u=aS;break;case 8:u=rS;break;default:u=Yf}r=u.bind(null,n,r,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Nf(e,n,r,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=C(b),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=d=x;continue t}b=b.parentNode}}o=o.return}ip(function(){var et=d,dt=Zc(r),vt=[];t:{var it=Up.get(e);if(it!==void 0){var lt=tl,It=e;switch(e){case"keypress":if(Jo(r)===0)break t;case"keydown":case"keyup":lt=Ey;break;case"focusin":It="focus",lt=eu;break;case"focusout":It="blur",lt=eu;break;case"beforeblur":case"afterblur":lt=eu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ay;break;case Rp:case Cp:case wp:lt=py;break;case Dp:lt=Cy;break;case"scroll":case"scrollend":lt=cy;break;case"wheel":lt=Dy;break;case"copy":case"cut":case"paste":lt=gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=lp;break;case"toggle":case"beforetoggle":lt=Ly}var Jt=(n&4)!==0,He=!Jt&&(e==="scroll"||e==="scrollend"),K=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=et,tt;V!==null;){var mt=V;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||K===null||(mt=Fs(V,K),mt!=null&&Jt.push(vo(V,mt,tt))),He)break;V=V.return}0<Jt.length&&(it=new lt(it,It,null,r,dt),vt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&r!==jc&&(It=r.relatedTarget||r.fromElement)&&(C(It)||It[Pi]))break t;if((lt||it)&&(it=dt.window===dt?dt:(it=dt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(It=r.relatedTarget||r.toElement,lt=et,It=It?C(It):null,It!==null&&(He=c(It),Jt=It.tag,It!==He||Jt!==5&&Jt!==27&&Jt!==6)&&(It=null)):(lt=null,It=et),lt!==It)){if(Jt=sp,mt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=lp,mt="onPointerLeave",K="onPointerEnter",V="pointer"),He=lt==null?it:rt(lt),tt=It==null?it:rt(It),it=new Jt(mt,V+"leave",lt,r,dt),it.target=He,it.relatedTarget=tt,mt=null,C(dt)===et&&(Jt=new Jt(K,V+"enter",It,r,dt),Jt.target=tt,Jt.relatedTarget=He,mt=Jt),He=mt,lt&&It)e:{for(Jt=Ux,K=lt,V=It,tt=0,mt=K;mt;mt=Jt(mt))tt++;mt=0;for(var Zt=V;Zt;Zt=Jt(Zt))mt++;for(;0<tt-mt;)K=Jt(K),tt--;for(;0<mt-tt;)V=Jt(V),mt--;for(;tt--;){if(K===V||V!==null&&K===V.alternate){Jt=K;break e}K=Jt(K),V=Jt(V)}Jt=null}else Jt=null;lt!==null&&$g(vt,it,lt,Jt,!1),It!==null&&He!==null&&$g(vt,He,It,Jt,!0)}}t:{if(it=et?rt(et):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Re=gp;else if(pp(it))if(_p)Re=Vy;else{Re=Hy;var Gt=Iy}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&Yc(et.elementType)&&(Re=gp):Re=Gy;if(Re&&(Re=Re(e,et))){mp(vt,Re,r,dt);break t}Gt&&Gt(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(Gt=et?rt(et):window,e){case"focusin":(pp(Gt)||Gt.contentEditable==="true")&&(Lr=Gt,ou=et,qs=null);break;case"focusout":qs=ou=Lr=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,bp(vt,r,dt);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":bp(vt,r,dt)}var le;if(iu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ur?hp(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(cp&&r.locale!=="ko"&&(Ur||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ur&&(le=ap()):(ha=dt,Jc="value"in ha?ha.value:ha.textContent,Ur=!0)),Gt=Xl(et,ye),0<Gt.length&&(ye=new op(ye,e,null,r,dt),vt.push({event:ye,listeners:Gt}),le?ye.data=le:(le=dp(r),le!==null&&(ye.data=le)))),(le=Oy?zy(e,r):Py(e,r))&&(ye=Xl(et,"onBeforeInput"),0<ye.length&&(Gt=new op("onBeforeInput","beforeinput",null,r,dt),vt.push({event:Gt,listeners:ye}),Gt.data=le)),Rx(vt,e,et,r,dt)}Qg(vt,n)})}function vo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Xl(e,n){for(var r=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fs(e,r),u!=null&&o.unshift(vo(e,u,d)),u=Fs(e,n),u!=null&&o.push(vo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function Ux(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $g(e,n,r,o,u){for(var d=n._reactName,x=[];r!==null&&r!==o;){var b=r,F=b.alternate,et=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||et===null||(F=et,u?(et=Fs(r,d),et!=null&&x.unshift(vo(r,et,F))):u||(et=Fs(r,d),et!=null&&x.push(vo(r,et,F)))),r=r.return}x.length!==0&&e.push({event:n,listeners:x})}var Lx=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function t_(e){return(typeof e=="string"?e:""+e).replace(Lx,`
`).replace(Nx,"")}function e_(e,n){return n=t_(n),t_(e)===n}function Ie(e,n,r,o,u,d){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pn(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,r,o);break;case"style":ep(e,o,d);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Ko(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Ko(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":Ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ae(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ae(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ae(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ae(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=oy.get(r)||r,Se(e,r,o))}}function Of(e,n,r,o,u,d){switch(r){case"style":ep(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?Pn(e,o):(typeof o=="number"||typeof o=="bigint")&&Pn(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),d=e[vn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,u);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):Se(e,r,o)}}}function En(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,d;for(d in r)if(r.hasOwnProperty(d)){var x=r[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ie(e,n,d,x,r,null)}}u&&Ie(e,n,"srcSet",r.srcSet,r,null),o&&Ie(e,n,"src",r.src,r,null);return;case"input":pe("invalid",e);var b=d=x=u=null,F=null,et=null;for(o in r)if(r.hasOwnProperty(o)){var dt=r[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":F=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,n));break;default:Ie(e,n,o,dt,r,null)}}Ln(e,d,b,F,et,x,u,!1);return;case"select":pe("invalid",e),o=x=d=null;for(u in r)if(r.hasOwnProperty(u)&&(b=r[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Ie(e,n,u,b,r,null)}n=d,r=x,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):r!=null&&Qe(e,!!o,r,!0);return;case"textarea":pe("invalid",e),d=u=o=null;for(x in r)if(r.hasOwnProperty(x)&&(b=r[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(a(91));break;default:Ie(e,n,x,b,r,null)}Cr(e,o,u,d);return;case"option":for(F in r)if(r.hasOwnProperty(F)&&(o=r[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,F,o,r,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<_o.length;o++)pe(_o[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(o=r[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ie(e,n,et,o,r,null)}return;default:if(Yc(n)){for(dt in r)r.hasOwnProperty(dt)&&(o=r[dt],o!==void 0&&Of(e,n,dt,o,r,void 0));return}}for(b in r)r.hasOwnProperty(b)&&(o=r[b],o!=null&&Ie(e,n,b,o,r,null))}function Ox(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,b=null,F=null,et=null,dt=null;for(lt in r){var vt=r[lt];if(r.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":F=vt;default:o.hasOwnProperty(lt)||Ie(e,n,lt,null,o,vt)}}for(var it in o){var lt=o[it];if(vt=r[it],o.hasOwnProperty(it)&&(lt!=null||vt!=null))switch(it){case"type":d=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,n));break;default:lt!==vt&&Ie(e,n,it,lt,o,vt)}}Be(e,x,b,F,et,dt,d,u);return;case"select":lt=x=b=it=null;for(d in r)if(F=r[d],r.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":lt=F;default:o.hasOwnProperty(d)||Ie(e,n,d,null,o,F)}for(u in o)if(d=o[u],F=r[u],o.hasOwnProperty(u)&&(d!=null||F!=null))switch(u){case"value":it=d;break;case"defaultValue":b=d;break;case"multiple":x=d;default:d!==F&&Ie(e,n,u,d,o,F)}n=b,r=x,o=lt,it!=null?Qe(e,!!r,it,!1):!!o!=!!r&&(n!=null?Qe(e,!!r,n,!0):Qe(e,!!r,r?[]:"",!1));return;case"textarea":lt=it=null;for(b in r)if(u=r[b],r.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,n,b,null,o,u)}for(x in o)if(u=o[x],d=r[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==d&&Ie(e,n,x,u,o,d)}yn(e,it,lt);return;case"option":for(var It in r)if(it=r[It],r.hasOwnProperty(It)&&it!=null&&!o.hasOwnProperty(It))switch(It){case"selected":e.selected=!1;break;default:Ie(e,n,It,null,o,it)}for(F in o)if(it=o[F],lt=r[F],o.hasOwnProperty(F)&&it!==lt&&(it!=null||lt!=null))switch(F){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ie(e,n,F,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in r)it=r[Jt],r.hasOwnProperty(Jt)&&it!=null&&!o.hasOwnProperty(Jt)&&Ie(e,n,Jt,null,o,it);for(et in o)if(it=o[et],lt=r[et],o.hasOwnProperty(et)&&it!==lt&&(it!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,n));break;default:Ie(e,n,et,it,o,lt)}return;default:if(Yc(n)){for(var He in r)it=r[He],r.hasOwnProperty(He)&&it!==void 0&&!o.hasOwnProperty(He)&&Of(e,n,He,void 0,o,it);for(dt in o)it=o[dt],lt=r[dt],!o.hasOwnProperty(dt)||it===lt||it===void 0&&lt===void 0||Of(e,n,dt,it,o,lt);return}}for(var K in r)it=r[K],r.hasOwnProperty(K)&&it!=null&&!o.hasOwnProperty(K)&&Ie(e,n,K,null,o,it);for(vt in o)it=o[vt],lt=r[vt],!o.hasOwnProperty(vt)||it===lt||it==null&&lt==null||Ie(e,n,vt,it,o,lt)}function n_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],d=u.transferSize,x=u.initiatorType,b=u.duration;if(d&&b&&n_(x)){for(x=0,b=u.responseEnd,o+=1;o<r.length;o++){var F=r[o],et=F.startTime;if(et>b)break;var dt=F.transferSize,vt=F.initiatorType;dt&&n_(vt)&&(F=F.responseEnd,x+=dt*(F<b?1:(b-et)/(F-et)))}if(--o,n+=8*(d+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zf=null,Pf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function i_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Px(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(e){return s_.resolve(null).then(e).catch(Ix)}:r_;function Ix(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function o_(e,n){var r=n,o=0;do{var u=r.nextSibling;if(e.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){e.removeChild(u),rs(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")yo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,yo(r);for(var d=r.firstChild;d;){var x=d.nextSibling,b=d.nodeName;d[Za]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=x}}else r==="body"&&yo(e.ownerDocument.body);r=u}while(r);rs(n)}function l_(e,n){var r=e;e=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=o}while(r)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":If(r),Bs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Hx(e,n,r,o){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function Gx(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=li(e.nextSibling),e===null))return null;return e}function c_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$?"||e.data==="$~"}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vx(e,n){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vf=null;function u_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(n===0)return li(e.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}e=e.nextSibling}return null}function f_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return e;n--}else r!=="/$"&&r!=="/&"||n++}e=e.previousSibling}return null}function h_(e,n,r){switch(n=Wl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Bs(e)}var ci=new Map,d_=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=W.d;W.d={f:kx,r:Xx,D:Wx,C:qx,L:Yx,m:jx,X:Kx,S:Zx,M:Qx};function kx(){var e=$i.f(),n=Bl();return e||n}function Xx(e){var n=Z(e);n!==null&&n.tag===5&&n.type==="form"?Dm(n):$i.r(e)}var ns=typeof document>"u"?null:document;function p_(e,n,r){var o=ns;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),d_.has(u)||(d_.add(u),e={rel:e,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),Y(n),o.head.appendChild(n)))}}function Wx(e){$i.D(e),p_("dns-prefetch",e,null)}function qx(e,n){$i.C(e,n),p_("preconnect",e,n)}function Yx(e,n,r){$i.L(e,n,r);var o=ns;if(o&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+pn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+pn(r.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var d=u;switch(n){case"style":d=is(e);break;case"script":d=as(e)}ci.has(d)||(e=_({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),ci.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xo(d))||n==="script"&&o.querySelector(So(d))||(n=o.createElement("link"),En(n,"link",e),Y(n),o.head.appendChild(n)))}}function jx(e,n){$i.m(e,n);var r=ns;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=as(e)}if(!ci.has(d)&&(e=_({rel:"modulepreload",href:e},n),ci.set(d,e),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(So(d)))return}o=r.createElement("link"),En(o,"link",e),Y(o),r.head.appendChild(o)}}}function Zx(e,n,r){$i.S(e,n,r);var o=ns;if(o&&e){var u=st(o).hoistableStyles,d=is(e);n=n||"default";var x=u.get(d);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(xo(d)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},r),(r=ci.get(d))&&kf(e,r);var F=x=o.createElement("link");Y(F),En(F,"link",e),F._p=new Promise(function(et,dt){F.onload=et,F.onerror=dt}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(d,x)}}}function Kx(e,n){$i.X(e,n);var r=ns;if(r&&e){var o=st(r).hoistableScripts,u=as(e),d=o.get(u);d||(d=r.querySelector(So(u)),d||(e=_({src:e,async:!0},n),(n=ci.get(u))&&Xf(e,n),d=r.createElement("script"),Y(d),En(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Qx(e,n){$i.M(e,n);var r=ns;if(r&&e){var o=st(r).hoistableScripts,u=as(e),d=o.get(u);d||(d=r.querySelector(So(u)),d||(e=_({src:e,async:!0,type:"module"},n),(n=ci.get(u))&&Xf(e,n),d=r.createElement("script"),Y(d),En(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function m_(e,n,r,o){var u=(u=St.current)?ql(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=is(r.href),r=st(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=is(r.href);var d=st(u).hoistableStyles,x=d.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=u.querySelector(xo(e)))&&!d._p&&(x.instance=d,x.state.loading=5),ci.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ci.set(e,r),d||Jx(u,e,r,x.state))),n&&o===null)throw Error(a(528,""));return x}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(r),r=st(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function is(e){return'href="'+pn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function g_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Jx(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",r),Y(n),e.head.appendChild(n))}function as(e){return'[src="'+pn(e)+'"]'}function So(e){return"script[async]"+e}function __(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(r.href)+'"]');if(o)return n.instance=o,Y(o),o;var u=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Y(o),En(o,"style",u),Yl(o,r.precedence,e),n.instance=o;case"stylesheet":u=is(r.href);var d=e.querySelector(xo(u));if(d)return n.state.loading|=4,n.instance=d,Y(d),d;o=g_(r),(u=ci.get(u))&&kf(o,u),d=(e.ownerDocument||e).createElement("link"),Y(d);var x=d;return x._p=new Promise(function(b,F){x.onload=b,x.onerror=F}),En(d,"link",o),n.state.loading|=4,Yl(d,r.precedence,e),n.instance=d;case"script":return d=as(r.src),(u=e.querySelector(So(d)))?(n.instance=u,Y(u),u):(o=r,(u=ci.get(d))&&(o=_({},r),Xf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,r.precedence,e));return n.instance}function Yl(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function v_(e,n,r){if(jl===null){var o=new Map,u=jl=new Map;u.set(r,o)}else u=jl,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var d=r[u];if(!(d[Za]||d[Ke]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(d):o.set(x,[d])}}return o}function y_(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function $x(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function x_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tS(e,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=is(o.href),d=n.querySelector(xo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),r.state.loading|=4,r.instance=d,Y(d);return}d=n.ownerDocument||n,o=g_(o),(u=ci.get(u))&&kf(o,u),d=d.createElement("link"),Y(d);var x=d;x._p=new Promise(function(b,F){x.onload=b,x.onerror=F}),En(d,"link",o),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Zl.bind(e),n.addEventListener("load",r),n.addEventListener("error",r))}}var Wf=0;function eS(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var o=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*zx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(nS,e),Kl=null,Zl.call(e))}function nS(e,n){if(!(n.state.loading&4)){var r=Kl.get(e);if(r)var o=r.get(null);else{r=new Map,Kl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(r.set(x.dataset.precedence,x),o=x)}o&&r.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=r.get(x)||o,d===o&&r.set(null,u),r.set(x,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:L,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function iS(e,n,r,o,u,d,x,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function S_(e,n,r,o,u,d,x,b,F,et,dt,vt){return e=new iS(e,n,r,x,F,et,dt,vt,b),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),e.current=d,d.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:r,cache:n},Ru(d),e}function M_(e){return e?(e=zr,e):zr}function E_(e,n,r,o,u,d){u=M_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:r},d=d===void 0?null:d,d!==null&&(o.callback=d),r=ya(e,o,n),r!==null&&(Vn(r,e,n),$s(r,e,n))}function T_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function qf(e,n){T_(e,n),(e=e.alternate)&&T_(e,n)}function b_(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Vn(n,e,67108864),qf(e,67108864)}}function A_(e){if(e.tag===13||e.tag===31){var n=Jn();n=Ya(n);var r=$a(e,n);r!==null&&Vn(r,e,n),qf(e,n)}}var Jl=!0;function aS(e,n,r,o){var u=U.T;U.T=null;var d=W.p;try{W.p=2,Yf(e,n,r,o)}finally{W.p=d,U.T=u}}function rS(e,n,r,o){var u=U.T;U.T=null;var d=W.p;try{W.p=8,Yf(e,n,r,o)}finally{W.p=d,U.T=u}}function Yf(e,n,r,o){if(Jl){var u=jf(o);if(u===null)Nf(e,n,o,$l,r),C_(e,o);else if(oS(u,e,n,r,o))o.stopPropagation();else if(C_(e,o),n&4&&-1<sS.indexOf(e)){for(;u!==null;){var d=Z(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Rt(d.pendingLanes);if(x!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var F=1<<31-ee(x);b.entanglements[1]|=F,x&=~F}Di(d),(De&6)===0&&(zl=pt()+500,go(0))}}break;case 31:case 13:b=$a(d,2),b!==null&&Vn(b,d,2),Bl(),qf(d,2)}if(d=jf(o),d===null&&Nf(e,n,o,$l,r),d===u)break;u=d}u!==null&&o.stopPropagation()}else Nf(e,n,o,null,r)}}function jf(e){return e=Zc(e),Zf(e)}var $l=null;function Zf(e){if($l=null,e=C(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=f(n),e!==null)return e;e=null}else if(r===31){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function R_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case _t:return 2;case Vt:return 8;case Ct:case Bt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Kf=!1,Da=null,Ua=null,La=null,Eo=new Map,To=new Map,Na=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,r,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Z(n),n!==null&&b_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function oS(e,n,r,o,u){switch(n){case"focusin":return Da=bo(Da,e,n,r,o,u),!0;case"dragenter":return Ua=bo(Ua,e,n,r,o,u),!0;case"mouseover":return La=bo(La,e,n,r,o,u),!0;case"pointerover":var d=u.pointerId;return Eo.set(d,bo(Eo.get(d)||null,e,n,r,o,u)),!0;case"gotpointercapture":return d=u.pointerId,To.set(d,bo(To.get(d)||null,e,n,r,o,u)),!0}return!1}function w_(e){var n=C(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){e.blockedOn=n,ja(e.priority,function(){A_(r)});return}}else if(n===31){if(n=h(r),n!==null){e.blockedOn=n,ja(e.priority,function(){A_(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=jf(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);jc=o,r.target.dispatchEvent(o),jc=null}else return n=Z(r),n!==null&&b_(n),e.blockedOn=r,!1;n.shift()}return!0}function D_(e,n,r){tc(e)&&r.delete(n)}function lS(){Kf=!1,Da!==null&&tc(Da)&&(Da=null),Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),Eo.forEach(D_),To.forEach(D_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lS)))}var nc=null;function U_(e){nc!==e&&(nc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Zf(o||r)===null)continue;break}var d=Z(r);d!==null&&(e.splice(n,3),n-=3,Yu(d,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function rs(e){function n(F){return ec(F,e)}Da!==null&&ec(Da,e),Ua!==null&&ec(Ua,e),La!==null&&ec(La,e),Eo.forEach(n),To.forEach(n);for(var r=0;r<Na.length;r++){var o=Na[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(r=Na[0],r.blockedOn===null);)w_(r),r.blockedOn===null&&Na.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],d=r[o+1],x=u[vn]||null;if(typeof d=="function")x||U_(r);else if(x){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[vn]||null)b=x.formAction;else if(Zf(u)!==null)continue}else b=x.action;typeof b=="function"?r[o+1]=b:(r.splice(o,3),o-=3),U_(r)}}}function L_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Qf(e){this._internalRoot=e}ic.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=Jn();E_(r,o,e,n,null,null)},ic.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;E_(e.current,2,null,e,null,null),Bl(),n[Pi]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=zs();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Na.length&&n!==0&&n<Na[r].priority;r++);Na.splice(r,0,e),r===0&&w_(e)}};var N_=t.version;if(N_!=="19.2.7")throw Error(a(527,N_,"19.2.7"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var cS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{Qt=ac.inject(cS),kt=ac}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",u=Hm,d=Gm,x=Vm;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=S_(e,1,!1,null,null,r,o,null,u,d,x,L_),e[Pi]=n.current,Lf(e),new Qf(n)},Ro.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,u="",d=Hm,x=Gm,b=Vm,F=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(x=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError),r.formState!==void 0&&(F=r.formState)),n=S_(e,1,!0,n,r??null,o,u,F,d,x,b,L_),n.context=M_(null),r=n.current,o=Jn(),o=Ya(o),u=va(o),u.callback=null,ya(r,u,o),r=o,n.current.lanes=r,_n(n,r),Di(n),e[Pi]=n.current,Lf(e),new ic(n)},Ro.version="19.2.7",Ro}var k_;function SS(){if(k_)return th.exports;k_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),th.exports=xS(),th.exports}var MS=SS();const ES="modulepreload",TS=function(s){return"/makemecubemaster/"+s},X_={},bS=function(t,i,a){let l=Promise.resolve();if(i&&i.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));l=f(i.map(m=>{if(m=TS(m),m in X_)return;X_[m]=!0;const g=m.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":ES,g||(v.as="script"),v.crossOrigin="",v.href=m,p&&v.setAttribute("nonce",p),document.head.appendChild(v),g)return new Promise((S,E)=>{v.addEventListener("load",S),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return t().catch(c)})};function AS(s={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:a,onOfflineReady:l,onRegistered:c,onRegisteredSW:f,onRegisterError:h}=s;let p,m;const g=async(v=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(p=await bS(async()=>{const{Workbox:v}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:v}},[]).then(({Workbox:v})=>new v("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(v=>{h==null||h(v)}),!p)return;p.addEventListener("activated",v=>{(v.isUpdate||v.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",v=>{v.isUpdate||l==null||l()}),p.register({immediate:t}).then(v=>{f?f("/makemecubemaster/sw.js",v):c==null||c(v)}).catch(v=>{h==null||h(v)})}}return m=_(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="175",RS=0,W_=1,CS=2,a0=1,wS=2,ra=3,Wa=0,Xn=1,Li=2,Va=0,Ms=1,q_=2,Y_=3,j_=4,DS=5,xr=100,US=101,LS=102,NS=103,OS=104,zS=200,PS=201,BS=202,FS=203,Wh=204,qh=205,IS=206,HS=207,GS=208,VS=209,kS=210,XS=211,WS=212,qS=213,YS=214,Yh=0,jh=1,Zh=2,Ts=3,Kh=4,Qh=5,Jh=6,$h=7,r0=0,jS=1,ZS=2,ka=0,KS=1,QS=2,JS=3,$S=4,tM=5,eM=6,nM=7,s0=300,bs=301,As=302,td=303,ed=304,Hc=306,nd=1e3,Mr=1001,id=1002,bi=1003,iM=1004,rc=1005,Ni=1006,ah=1007,Er=1008,ca=1009,o0=1010,l0=1011,Fo=1012,zd=1013,br=1014,sa=1015,Vo=1016,Pd=1017,Bd=1018,Io=1020,c0=35902,u0=1021,f0=1022,Ti=1023,h0=1024,d0=1025,Ho=1026,Go=1027,p0=1028,Fd=1029,m0=1030,Id=1031,Hd=1033,wc=33776,Dc=33777,Uc=33778,Lc=33779,ad=35840,rd=35841,sd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,yd=37816,xd=37817,Sd=37818,Md=37819,Ed=37820,Td=37821,Nc=36492,bd=36494,Ad=36495,g0=36283,Rd=36284,Cd=36285,wd=36286,aM=3200,rM=3201,sM=0,oM=1,Ga="",hi="srgb",Rs="srgb-linear",Pc="linear",Ge="srgb",ss=7680,Z_=519,lM=512,cM=513,uM=514,_0=515,fM=516,hM=517,dM=518,pM=519,K_=35044,Q_="300 es",oa=2e3,Bc=2001;class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const a=i[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=Math.PI/180,Dd=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[a&255]+Rn[a>>8&255]+Rn[a>>16&255]+Rn[a>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function mM(s,t){return(s%t+t)%t}function sh(s,t,i){return(1-i)*s+i*t}function Co(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,i=0){te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,a,l,c,f,h,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,h,p,m)}set(t,i,a,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],h=a[3],p=a[6],m=a[1],g=a[4],_=a[7],v=a[2],S=a[5],E=a[8],T=l[0],M=l[3],y=l[6],P=l[1],L=l[4],w=l[7],k=l[2],B=l[5],z=l[8];return c[0]=f*T+h*P+p*k,c[3]=f*M+h*L+p*B,c[6]=f*y+h*w+p*z,c[1]=m*T+g*P+_*k,c[4]=m*M+g*L+_*B,c[7]=m*y+g*w+_*z,c[2]=v*T+S*P+E*k,c[5]=v*M+S*L+E*B,c[8]=v*y+S*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-a*c*g+a*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=g*f-h*m,v=h*p-g*c,S=m*c-f*p,E=i*_+a*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=_*T,t[1]=(l*m-g*a)*T,t[2]=(h*a-l*f)*T,t[3]=v*T,t[4]=(g*i-l*p)*T,t[5]=(l*c-h*i)*T,t[6]=S*T,t[7]=(a*p-m*i)*T,t[8]=(f*i-a*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(oh.makeScale(t,i)),this}rotate(t){return this.premultiply(oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new ce;function v0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function gM(){const s=Fc("canvas");return s.style.display="block",s}const J_={};function Oc(s){s in J_||(J_[s]=!0,console.warn(s))}function _M(s,t,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}function vM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ge&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ge&&(l.r=Es(l.r),l.g=Es(l.g),l.b=Es(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Pc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:a,transfer:Pc,toXYZ:$_,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:a,transfer:Ge,toXYZ:$_,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const we=xM();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class SM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{os===void 0&&(os=Fc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=os}return a.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(la(i[a]/255)*255):i[a]=la(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let MM=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(lh(l[f].image)):c.push(lh(l[f]))}else c=lh(l);a.url=c}return i||(t.images[this.uuid]=a),a}}function lh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?SM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class Wn extends Ds{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,a=Mr,l=Mr,c=Ni,f=Er,h=Ti,p=ca,m=Wn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ko(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==s0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nd:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nd:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=s0;Wn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,a=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],E=p[9],T=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,w=(S+1)/2,k=(y+1)/2,B=(g+v)/4,z=(_+T)/4,X=(E+M)/4;return L>w&&L>k?L<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(L),l=B/a,c=z/a):w>k?w<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),a=B/l,c=X/l):k<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),a=z/c,l=X/c),this.set(a,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(_-T)/P,this.z=(v-g)/P,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends Ds{constructor(t=1,i=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const c=new Wn(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);c.flipY=!1,c.generateMipmaps=a.generateMipmaps,c.internalFormat=a.internalFormat,this.textures=[];const f=a.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=a;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,a=t.textures.length;i<a;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends TM{constructor(t=1,i=1,a={}){super(t,i,a),this.isWebGLRenderTarget=!0}}class y0 extends Wn{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Wn{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,c,f,h){let p=a[l+0],m=a[l+1],g=a[l+2],_=a[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(_!==T||p!==v||m!==S||g!==E){let M=1-h;const y=p*v+m*S+g*E+_*T,P=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const k=Math.sqrt(L),B=Math.atan2(k,y*P);M=Math.sin(M*B)/k,h=Math.sin(h*B)/k}const w=h*P;if(p=p*M+v*w,m=m*M+S*w,g=g*M+E*w,_=_*M+T*w,M===1-h){const k=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=k,m*=k,g*=k,_*=k}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,a,l,c,f){const h=a[l],p=a[l+1],m=a[l+2],g=a[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*_+p*S-m*v,t[i+1]=p*E+g*v+m*_-h*S,t[i+2]=m*E+g*S+h*v-p*_,t[i+3]=g*E-h*_-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const a=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(a/2),g=h(l/2),_=h(c/2),v=p(a/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"YZX":this._x=v*g*_+m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_-v*S*E;break;case"XZY":this._x=v*g*_-m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=a+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(a>h&&a>_){const S=2*Math.sqrt(1+a-h-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(h>_){const S=2*Math.sqrt(1+h-a-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-a-h);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-a*m,this._z=c*g+f*m+a*p-l*h,this._w=f*g-a*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+a*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*a+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*_+this._w*v,this._x=a*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,a=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ev.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ev.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*a),g=2*(h*i-c*l),_=2*(c*a-f*i);return this.x=i+p*m+f*_-h*g,this.y=a+p*g+h*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(me(a,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-a*p,this.z=a*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(t),this.y=i,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new Q,ev=new Xo;class Wo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,a=t.count;i<a;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),sc.copy(a.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),oc.subVectors(this.max,wo),ls.subVectors(t.a,wo),cs.subVectors(t.b,wo),us.subVectors(t.c,wo),za.subVectors(cs,ls),Pa.subVectors(us,cs),hr.subVectors(ls,us);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-hr.z,hr.y,za.z,0,-za.x,Pa.z,0,-Pa.x,hr.z,0,-hr.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-hr.y,hr.x,0];return!uh(i,ls,cs,us,oc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,ls,cs,us,oc))?!1:(lc.crossVectors(za,Pa),i=[lc.x,lc.y,lc.z],uh(i,ls,cs,us,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xi=new Q,sc=new Wo,ls=new Q,cs=new Q,us=new Q,za=new Q,Pa=new Q,hr=new Q,wo=new Q,oc=new Q,lc=new Q,dr=new Q;function uh(s,t,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){dr.fromArray(s,c);const h=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),p=t.dot(dr),m=i.dot(dr),g=a.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const AM=new Wo,Do=new Q,fh=new Q;class Vd{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):AM.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Do,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(fh)),this.expandByPoint(Do.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new Q,hh=new Q,cc=new Q,Ba=new Q,dh=new Q,uc=new Q,ph=new Q;class RM{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){hh.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(hh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(cc),h=Ba.dot(this.direction),p=-Ba.dot(cc),m=Ba.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*p-h,v=f*h-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const T=1/g;_*=T,v*=T,S=_*(_+f*v+2*h)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),S=-_*_+v*(v+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(hh).addScaledVector(cc,v),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const a=ea.dot(this.direction),l=ea.dot(ea)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=a-f,p=a+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(a=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(a=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),a>p||h>l)||((h>a||a!==a)&&(a=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,a,l,c){dh.subVectors(i,t),uc.subVectors(a,t),ph.crossVectors(dh,uc);let f=this.direction.dot(ph),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ba.subVectors(this.origin,t);const p=h*this.direction.dot(uc.crossVectors(Ba,uc));if(p<0)return null;const m=h*this.direction.dot(dh.cross(Ba));if(m<0||p+m>f)return null;const g=-h*Ba.dot(ph);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,a,l,c,f,h,p,m,g,_,v,S,E,T,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,a,l,c,f,h,p,m,g,_,v,S,E,T,M)}set(t,i,a,l,c,f,h,p,m,g,_,v,S,E,T,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=a,y[12]=l,y[1]=c,y[5]=f,y[9]=h,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=T,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),c=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),h=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=h*g,T=h*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+E*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*_,E=m*g,T=m*_;i[0]=v+T*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+v*h,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*_,E=m*g,T=m*_;i[0]=v-T*h,i[4]=-f*_,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=h*g,T=h*_;i[0]=p*g,i[4]=E*m-S,i[8]=v*m+T,i[1]=p*_,i[5]=T*m+v,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=T-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*_+E,i[10]=v-T*_}else if(t.order==="XZY"){const v=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+T,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=h*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CM,t,wM)}lookAt(t,i,a){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fa.crossVectors(a,$n),Fa.lengthSq()===0&&(Math.abs(a.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fa.crossVectors(a,$n)),Fa.normalize(),fc.crossVectors($n,Fa),l[0]=Fa.x,l[4]=fc.x,l[8]=$n.x,l[1]=Fa.y,l[5]=fc.y,l[9]=$n.y,l[2]=Fa.z,l[6]=fc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,c=this.elements,f=a[0],h=a[4],p=a[8],m=a[12],g=a[1],_=a[5],v=a[9],S=a[13],E=a[2],T=a[6],M=a[10],y=a[14],P=a[3],L=a[7],w=a[11],k=a[15],B=l[0],z=l[4],X=l[8],D=l[12],R=l[1],G=l[5],nt=l[9],$=l[13],ot=l[2],gt=l[6],U=l[10],W=l[14],I=l[3],ft=l[7],xt=l[11],O=l[15];return c[0]=f*B+h*R+p*ot+m*I,c[4]=f*z+h*G+p*gt+m*ft,c[8]=f*X+h*nt+p*U+m*xt,c[12]=f*D+h*$+p*W+m*O,c[1]=g*B+_*R+v*ot+S*I,c[5]=g*z+_*G+v*gt+S*ft,c[9]=g*X+_*nt+v*U+S*xt,c[13]=g*D+_*$+v*W+S*O,c[2]=E*B+T*R+M*ot+y*I,c[6]=E*z+T*G+M*gt+y*ft,c[10]=E*X+T*nt+M*U+y*xt,c[14]=E*D+T*$+M*W+y*O,c[3]=P*B+L*R+w*ot+k*I,c[7]=P*z+L*G+w*gt+k*ft,c[11]=P*X+L*nt+w*U+k*xt,c[15]=P*D+L*$+w*W+k*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],T=t[7],M=t[11],y=t[15];return E*(+c*p*_-l*m*_-c*h*v+a*m*v+l*h*S-a*p*S)+T*(+i*p*S-i*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+M*(+i*m*_-i*h*S-c*f*_+a*f*S+c*h*g-a*m*g)+y*(-l*h*g-i*p*_+i*h*v+l*f*_-a*f*v+a*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],T=t[13],M=t[14],y=t[15],P=_*M*m-T*v*m+T*p*S-h*M*S-_*p*y+h*v*y,L=E*v*m-g*M*m-E*p*S+f*M*S+g*p*y-f*v*y,w=g*T*m-E*_*m+E*h*S-f*T*S-g*h*y+f*_*y,k=E*_*p-g*T*p-E*h*v+f*T*v+g*h*M-f*_*M,B=i*P+a*L+l*w+c*k;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(T*v*c-_*M*c-T*l*S+a*M*S+_*l*y-a*v*y)*z,t[2]=(h*M*c-T*p*c+T*l*m-a*M*m-h*l*y+a*p*y)*z,t[3]=(_*p*c-h*v*c-_*l*m+a*v*m+h*l*S-a*p*S)*z,t[4]=L*z,t[5]=(g*M*c-E*v*c+E*l*S-i*M*S-g*l*y+i*v*y)*z,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*y-i*p*y)*z,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*S+i*p*S)*z,t[8]=w*z,t[9]=(E*_*c-g*T*c-E*a*S+i*T*S+g*a*y-i*_*y)*z,t[10]=(f*T*c-E*h*c+E*a*m-i*T*m-f*a*y+i*h*y)*z,t[11]=(g*h*c-f*_*c-g*a*m+i*_*m+f*a*S-i*h*S)*z,t[12]=k*z,t[13]=(g*T*l-E*_*l+E*a*v-i*T*v-g*a*M+i*_*M)*z,t[14]=(E*h*l-f*T*l-E*a*p+i*T*p+f*a*M-i*h*M)*z,t[15]=(f*_*l-g*h*l+g*a*p-i*_*p-f*a*v+i*h*v)*z,this}scale(t){const i=this.elements,a=t.x,l=t.y,c=t.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+a,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+a,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,_=h+h,v=c*m,S=c*g,E=c*_,T=f*g,M=f*_,y=h*_,P=p*m,L=p*g,w=p*_,k=a.x,B=a.y,z=a.z;return l[0]=(1-(T+y))*k,l[1]=(S+w)*k,l[2]=(E-L)*k,l[3]=0,l[4]=(S-w)*B,l[5]=(1-(v+y))*B,l[6]=(M+P)*B,l[7]=0,l[8]=(E+L)*z,l[9]=(M-P)*z,l[10]=(1-(v+T))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let c=fs.set(l[0],l[1],l[2]).length();const f=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const m=1/c,g=1/f,_=1/h;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),a.x=c,a.y=f,a.z=h,this}makePerspective(t,i,a,l,c,f,h=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(a-l),_=(i+t)/(i-t),v=(a+l)/(a-l);let S,E;if(h===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Bc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,a,l,c,f,h=oa){const p=this.elements,m=1/(i-t),g=1/(a-l),_=1/(f-c),v=(i+t)*m,S=(a+l)*g;let E,T;if(h===oa)E=(f+c)*_,T=-2*_;else if(h===Bc)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const fs=new Q,Si=new Ze,CM=new Q(0,0,0),wM=new Q(1,1,1),Fa=new Q,fc=new Q,$n=new Q,nv=new Ze,iv=new Xo;class ua{constructor(t=0,i=0,a=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return nv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nv,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return iv.setFromEuler(this),this.setFromQuaternion(iv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DM=0;const av=new Q,hs=new Xo,na=new Ze,hc=new Q,Uo=new Q,UM=new Q,LM=new Xo,rv=new Q(1,0,0),sv=new Q(0,1,0),ov=new Q(0,0,1),lv={type:"added"},NM={type:"removed"},ds={type:"childadded",child:null},mh={type:"childremoved",child:null};class wn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Q,i=new ua,a=new Xo,l=new Q(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ce}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(rv,t)}rotateY(t){return this.rotateOnAxis(sv,t)}rotateZ(t){return this.rotateOnAxis(ov,t)}translateOnAxis(t,i){return av.copy(t).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(rv,t)}translateY(t){return this.translateOnAxis(sv,t)}translateZ(t){return this.translateOnAxis(ov,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?hc.copy(t):hc.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Uo,hc,this.up):na.lookAt(hc,Uo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(na),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lv),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(NM),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lv),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,a=[]){this[t]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,UM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,LM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(t)}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=l,a;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Q,ia=new Q,gh=new Q,aa=new Q,ps=new Q,ms=new Q,cv=new Q,_h=new Q,vh=new Q,yh=new Q,xh=new tn,Sh=new tn,Mh=new tn;class Ei{constructor(t=new Q,i=new Q,a=new Q){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,a,l,c){Mi.subVectors(l,i),ia.subVectors(a,i),gh.subVectors(t,i);const f=Mi.dot(Mi),h=Mi.dot(ia),p=Mi.dot(gh),m=ia.dot(ia),g=ia.dot(gh),_=f*m-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(m*p-h*g)*v,E=(f*g-h*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,a,l,c,f,h,p){return this.getBarycoord(t,i,a,l,aa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,aa.x),p.addScaledVector(f,aa.y),p.addScaledVector(h,aa.z),p)}static getInterpolatedAttribute(t,i,a,l,c,f){return xh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),xh.fromBufferAttribute(t,i),Sh.fromBufferAttribute(t,a),Mh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(xh,c.x),f.addScaledVector(Sh,c.y),f.addScaledVector(Mh,c.z),f}static isFrontFacing(t,i,a,l){return Mi.subVectors(a,i),ia.subVectors(t,i),Mi.cross(ia).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Mi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,a,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,a,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,c=this.c;let f,h;ps.subVectors(l,a),ms.subVectors(c,a),_h.subVectors(t,a);const p=ps.dot(_h),m=ms.dot(_h);if(p<=0&&m<=0)return i.copy(a);vh.subVectors(t,l);const g=ps.dot(vh),_=ms.dot(vh);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(ps,f);yh.subVectors(t,c);const S=ps.dot(yh),E=ms.dot(yh);if(E>=0&&S<=E)return i.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(a).addScaledVector(ms,h);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return cv.subVectors(c,l),h=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(cv,h);const y=1/(M+T+v);return f=T*y,h=v*y,i.copy(a).addScaledVector(ps,f).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const S0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Eh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class ze{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,a)}set(t,i,a){if(i===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,i),this}setRGB(t,i,a,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=a,we.toWorkingColorSpace(this,l),this}setHSL(t,i,a,l=we.workingColorSpace){if(t=mM(t,1),i=me(i,0,1),a=me(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Eh(f,c,t+1/3),this.g=Eh(f,c,t),this.b=Eh(f,c,t-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(t,i=hi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const a=S0[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return we.fromWorkingColorSpace(Cn.copy(this),t),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.fromWorkingColorSpace(Cn.copy(this),i);const a=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(a,l,c),h=Math.min(a,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const _=f-h;switch(m=g<=.5?_/(f+h):_/(2-f-h),f){case a:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-a)/_+2;break;case c:p=(a-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=hi){we.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,a=Cn.g,l=Cn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,i,a){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(dc);const a=sh(Ia.h,dc.h,i),l=sh(Ia.s,dc.s,i),c=sh(Ia.l,dc.l,i);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ze;ze.NAMES=S0;let OM=0;class Gc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Ms,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=qh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(a.blending=this.blending),this.side!==Wa&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Wh&&(a.blendSrc=this.blendSrc),this.blendDst!==qh&&(a.blendDst=this.blendDst),this.blendEquation!==xr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ic extends Gc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new Q,pc=new te;let zM=0;class Oi{constructor(t,i,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a,this.usage=K_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let a=this.array[t*this.itemSize+i];return this.normalized&&(a=Co(a,this.array)),a}setComponent(t,i,a){return this.normalized&&(a=kn(a,this.array)),this.array[t*this.itemSize+i]=a,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),a=kn(a,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==K_&&(t.usage=this.usage),t}}class M0 extends Oi{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class E0 extends Oi{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class Dn extends Oi{constructor(t,i,a){super(new Float32Array(t),i,a)}}let PM=0;const ui=new Ze,Th=new wn,gs=new Q,ti=new Wo,Lo=new Wo,gn=new Q;class zi extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v0(t)?E0:M0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ce().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,a){return ui.makeTranslation(t,i,a),this.applyMatrix4(ui),this}scale(t,i,a){return ui.makeScale(t,i,a),this.applyMatrix4(ui),this}lookAt(t){return Th.lookAt(t),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Dn(a,3))}else{const a=Math.min(t.length,i.count);for(let l=0;l<a;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const a=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ti.min,Lo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Lo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Lo.min),ti.expandByPoint(Lo.max))}ti.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(gn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)gn.fromBufferAttribute(h,m),p&&(gs.fromBufferAttribute(t,m),gn.add(gs)),l=Math.max(l,a.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let X=0;X<a.count;X++)h[X]=new Q,p[X]=new Q;const m=new Q,g=new Q,_=new Q,v=new te,S=new te,E=new te,T=new Q,M=new Q;function y(X,D,R){m.fromBufferAttribute(a,X),g.fromBufferAttribute(a,D),_.fromBufferAttribute(a,R),v.fromBufferAttribute(c,X),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),g.sub(m),_.sub(m),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(G),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),h[X].add(T),h[D].add(T),h[R].add(T),p[X].add(M),p[D].add(M),p[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,D=P.length;X<D;++X){const R=P[X],G=R.start,nt=R.count;for(let $=G,ot=G+nt;$<ot;$+=3)y(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new Q,w=new Q,k=new Q,B=new Q;function z(X){k.fromBufferAttribute(l,X),B.copy(k);const D=h[X];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),w.crossVectors(B,D);const G=w.dot(p[X])<0?-1:1;f.setXYZW(X,L.x,L.y,L.z,G)}for(let X=0,D=P.length;X<D;++X){const R=P[X],G=R.start,nt=R.count;for(let $=G,ot=G+nt;$<ot;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const l=new Q,c=new Q,f=new Q,h=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,M),h.add(g),p.add(g),m.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,_=h.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let T=0,M=p.length;T<M;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let y=0;y<g;y++)v[E++]=m[S++]}return new Oi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,a=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,a);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=t(v,a);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new Ze,pr=new RM,mc=new Vd,fv=new Q,gc=new Q,_c=new Q,vc=new Q,bh=new Q,yc=new Q,hv=new Q,xc=new Q;class ei extends wn{constructor(t=new zi,i=new Ic){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){yc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],_=c[p];g!==0&&(bh.fromBufferAttribute(_,t),f?yc.addScaledVector(bh,g):yc.addScaledVector(bh.sub(i),g))}i.add(yc)}return i}raycast(t,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),mc.copy(a.boundingSphere),mc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(mc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(mc,fv)===null||pr.origin.distanceToSquared(fv)>(t.far-t.near)**2))&&(uv.copy(c).invert(),pr.copy(t.ray).applyMatrix4(uv),!(a.boundingBox!==null&&pr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,a){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),L=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,k=L;w<k;w+=3){const B=h.getX(w),z=h.getX(w+1),X=h.getX(w+2);l=Sc(this,y,t,a,m,g,_,B,z,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const P=h.getX(M),L=h.getX(M+1),w=h.getX(M+2);l=Sc(this,f,t,a,m,g,_,P,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const M=v[E],y=f[M.materialIndex],P=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=P,k=L;w<k;w+=3){const B=w,z=w+1,X=w+2;l=Sc(this,y,t,a,m,g,_,B,z,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let M=E,y=T;M<y;M+=3){const P=M,L=M+1,w=M+2;l=Sc(this,f,t,a,m,g,_,P,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function BM(s,t,i,a,l,c,f,h){let p;if(t.side===Xn?p=a.intersectTriangle(f,c,l,!0,h):p=a.intersectTriangle(l,c,f,t.side===Wa,h),p===null)return null;xc.copy(h),xc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(xc);return m<i.near||m>i.far?null:{distance:m,point:xc.clone(),object:s}}function Sc(s,t,i,a,l,c,f,h,p,m){s.getVertexPosition(h,gc),s.getVertexPosition(p,_c),s.getVertexPosition(m,vc);const g=BM(s,t,i,a,gc,_c,vc,hv);if(g){const _=new Q;Ei.getBarycoord(hv,gc,_c,vc,_),l&&(g.uv=Ei.getInterpolatedAttribute(l,h,p,m,_,new te)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,h,p,m,_,new te)),f&&(g.normal=Ei.getInterpolatedAttribute(f,h,p,m,_,new Q),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Q,materialIndex:0};Ei.getNormal(gc,_c,vc,v.normal),g.face=v,g.barycoord=_}return g}class qo extends zi{constructor(t=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,a,i,t,f,c,0),E("z","y","x",1,-1,a,i,-t,f,c,1),E("x","z","y",1,1,t,a,i,l,f,2),E("x","z","y",1,-1,t,a,-i,l,f,3),E("x","y","z",1,-1,t,i,a,l,c,4),E("x","y","z",-1,-1,t,i,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(_,2));function E(T,M,y,P,L,w,k,B,z,X,D){const R=w/z,G=k/X,nt=w/2,$=k/2,ot=B/2,gt=z+1,U=X+1;let W=0,I=0;const ft=new Q;for(let xt=0;xt<U;xt++){const O=xt*G-$;for(let J=0;J<gt;J++){const ht=J*R-nt;ft[T]=ht*P,ft[M]=O*L,ft[y]=ot,m.push(ft.x,ft.y,ft.z),ft[T]=0,ft[M]=0,ft[y]=B>0?1:-1,g.push(ft.x,ft.y,ft.z),_.push(J/z),_.push(1-xt/X),W+=1}}for(let xt=0;xt<X;xt++)for(let O=0;O<z;O++){const J=v+O+gt*xt,ht=v+O+gt*(xt+1),q=v+(O+1)+gt*(xt+1),ct=v+(O+1)+gt*xt;p.push(J,ht,ct),p.push(ht,q,ct),I+=6}h.addGroup(S,I,D),S+=I,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(s){const t={};for(const i in s){t[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][a]=null):t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const a=Cs(s[i]);for(const l in a)t[l]=a[l]}return t}function FM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function T0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const IM={clone:Cs,merge:On};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Gc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=FM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class b0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new Q,dv=new te,pv=new te;class di extends b0{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,a){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,dv,pv),i.subVectors(pv,dv)}setViewOffset(t,i,a,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(rh*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class VM extends wn{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(_s,vs,t,i);l.layers=this.layers,this.add(l);const c=new di(_s,vs,t,i);c.layers=this.layers,this.add(c);const f=new di(_s,vs,t,i);f.layers=this.layers,this.add(f);const h=new di(_s,vs,t,i);h.layers=this.layers,this.add(h);const p=new di(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new di(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===oa)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Bc)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(i,c),t.setRenderTarget(a,1,l),t.render(i,f),t.setRenderTarget(a,2,l),t.render(i,h),t.setRenderTarget(a,3,l),t.render(i,p),t.setRenderTarget(a,4,l),t.render(i,m),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,l),t.render(i,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class A0 extends Wn{constructor(t=[],i=bs,a,l,c,f,h,p,m,g){super(t,i,a,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new A0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Cs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Xn,blending:Va});c.uniforms.tEquirect.value=i;const f=new ei(l,c),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ni),new VM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,a,l);t.setRenderTarget(c)}}class Tr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XM={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const a of t.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,a),y=this._getHandJoint(m,T);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(XM)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const a=new Tr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[i.jointName]=a,t.add(a)}return t.joints[i.jointName]}}class WM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rh=new Q,qM=new Q,YM=new ce;class vr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Rh.subVectors(a,i).cross(qM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const a=t.delta(Rh),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||YM.getNormalMatrix(t),l=this.coplanarPoint(Rh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Vd,Mc=new Q;class kd{constructor(t=new vr,i=new vr,a=new vr,l=new vr,c=new vr,f=new vr){this.planes=[t,i,a,l,c,f]}set(t,i,a,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(a),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,i=oa){const a=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],T=l[10],M=l[11],y=l[12],P=l[13],L=l[14],w=l[15];if(a[0].setComponents(p-c,v-m,M-S,w-y).normalize(),a[1].setComponents(p+c,v+m,M+S,w+y).normalize(),a[2].setComponents(p+f,v+g,M+E,w+P).normalize(),a[3].setComponents(p-f,v-g,M-E,w-P).normalize(),a[4].setComponents(p-h,v-_,M-T,w-L).normalize(),i===oa)a[5].setComponents(p+h,v+_,M+T,w+L).normalize();else if(i===Bc)a[5].setComponents(h,_,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class R0 extends Wn{constructor(t,i,a=br,l,c,f,h=bi,p=bi,m,g=Ho){if(g!==Ho&&g!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,g,a,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)a=this.getPoint(f/t),c+=a.distanceTo(l),i.push(c),l=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const a=this.getLengths();let l=0;const c=a.length;let f;i?f=i:f=t*a[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=a[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,a[l]===f)return l/(c-1);const g=a[l],v=a[l+1]-g,S=(f-g)/v;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),p=i||(f.isVector2?new te:new Q);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i=!1){const a=new Q,l=[],c=[],f=[],h=new Q,p=new Ze;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Q)}c[0]=new Q,f[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,a.set(1,0,0)),_<=m&&(m=_,a.set(0,1,0)),v<=m&&a.set(0,0,1),h.crossVectors(l[0],a).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(l[S-1],l[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(h,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class C0 extends fa{constructor(t=0,i=0,a=1,l=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,i=new te){const a=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*g-S*_+this.aX,m=v*_+S*g+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jM extends C0{constructor(t,i,a,l,c,f){super(t,i,a,a,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Xd(){let s=0,t=0,i=0,a=0;function l(c,f,h,p){s=c,t=h,i=-3*c+3*f-2*h-p,a=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){l(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,_){let v=(f-c)/m-(h-c)/(m+g)+(h-f)/g,S=(h-f)/g-(p-f)/(g+_)+(p-h)/_;v*=g,S*=g,l(f,h,v,S)},calc:function(c){const f=c*c,h=f*c;return s+t*c+i*f+a*h}}}const Ec=new Q,Ch=new Xd,wh=new Xd,Dh=new Xd;class w0 extends fa{constructor(t=[],i=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=l}getPoint(t,i=new Q){const a=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%c]:(Ec.subVectors(l[0],l[1]).add(l[0]),m=Ec);const _=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Ec.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),T=Math.pow(_.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Ch.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,E,T,M),wh.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,E,T,M),Dh.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,E,T,M)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),wh.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),Dh.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return a.set(Ch.calc(p),wh.calc(p),Dh.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mv(s,t,i,a,l){const c=(a-t)*.5,f=(l-i)*.5,h=s*s,p=s*h;return(2*i-2*a+c+f)*p+(-3*i+3*a-2*c-f)*h+c*s+i}function ZM(s,t){const i=1-s;return i*i*t}function KM(s,t){return 2*(1-s)*s*t}function QM(s,t){return s*s*t}function zo(s,t,i,a){return ZM(s,t)+KM(s,i)+QM(s,a)}function JM(s,t){const i=1-s;return i*i*i*t}function $M(s,t){const i=1-s;return 3*i*i*s*t}function tE(s,t){return 3*(1-s)*s*s*t}function eE(s,t){return s*s*s*t}function Po(s,t,i,a,l){return JM(s,t)+$M(s,i)+tE(s,a)+eE(s,l)}class nE extends fa{constructor(t=new te,i=new te,a=new te,l=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new te){const a=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Po(t,l.x,c.x,f.x,h.x),Po(t,l.y,c.y,f.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class iE extends fa{constructor(t=new Q,i=new Q,a=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new Q){const a=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return a.set(Po(t,l.x,c.x,f.x,h.x),Po(t,l.y,c.y,f.y,h.y),Po(t,l.z,c.z,f.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class aE extends fa{constructor(t=new te,i=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new te){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new te){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rE extends fa{constructor(t=new Q,i=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Q){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sE extends fa{constructor(t=new te,i=new te,a=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new te){const a=i,l=this.v0,c=this.v1,f=this.v2;return a.set(zo(t,l.x,c.x,f.x),zo(t,l.y,c.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D0 extends fa{constructor(t=new Q,i=new Q,a=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new Q){const a=i,l=this.v0,c=this.v1,f=this.v2;return a.set(zo(t,l.x,c.x,f.x),zo(t,l.y,c.y,f.y),zo(t,l.z,c.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oE extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new te){const a=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return a.set(mv(h,p.x,m.x,g.x,_.x),mv(h,p.y,m.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new te().fromArray(l))}return this}}var lE=Object.freeze({__proto__:null,ArcCurve:jM,CatmullRomCurve3:w0,CubicBezierCurve:nE,CubicBezierCurve3:iE,EllipseCurve:C0,LineCurve:aE,LineCurve3:rE,QuadraticBezierCurve:sE,QuadraticBezierCurve3:D0,SplineCurve:oE});class Wd extends zi{constructor(t=1,i=1,a=1,l=32,c=1,f=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],S=[];let E=0;const T=[],M=a/2;let y=0;P(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(S,2));function P(){const w=new Q,k=new Q;let B=0;const z=(i-t)/a;for(let X=0;X<=c;X++){const D=[],R=X/c,G=R*(i-t)+t;for(let nt=0;nt<=l;nt++){const $=nt/l,ot=$*p+h,gt=Math.sin(ot),U=Math.cos(ot);k.x=G*gt,k.y=-R*a+M,k.z=G*U,_.push(k.x,k.y,k.z),w.set(gt,z,U).normalize(),v.push(w.x,w.y,w.z),S.push($,1-R),D.push(E++)}T.push(D)}for(let X=0;X<l;X++)for(let D=0;D<c;D++){const R=T[D][X],G=T[D+1][X],nt=T[D+1][X+1],$=T[D][X+1];(t>0||D!==0)&&(g.push(R,G,$),B+=3),(i>0||D!==c-1)&&(g.push(G,nt,$),B+=3)}m.addGroup(y,B,0),y+=B}function L(w){const k=E,B=new te,z=new Q;let X=0;const D=w===!0?t:i,R=w===!0?1:-1;for(let nt=1;nt<=l;nt++)_.push(0,M*R,0),v.push(0,R,0),S.push(.5,.5),E++;const G=E;for(let nt=0;nt<=l;nt++){const ot=nt/l*p+h,gt=Math.cos(ot),U=Math.sin(ot);z.x=D*U,z.y=M*R,z.z=D*gt,_.push(z.x,z.y,z.z),v.push(0,R,0),B.x=gt*.5+.5,B.y=U*.5*R+.5,S.push(B.x,B.y),E++}for(let nt=0;nt<l;nt++){const $=k+nt,ot=G+nt;w===!0?g.push(ot,ot+1,$):g.push(ot+1,ot,$),X+=3}m.addGroup(y,X,w===!0?1:2),y+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qd extends Wd{constructor(t=1,i=1,a=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,a,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new qd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vc extends zi{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(a),p=Math.floor(l),m=h+1,g=p+1,_=t/h,v=i/p,S=[],E=[],T=[],M=[];for(let y=0;y<g;y++){const P=y*v-f;for(let L=0;L<m;L++){const w=L*_-c;E.push(w,-P,0),T.push(0,0,1),M.push(L/h),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<h;P++){const L=P+m*y,w=P+m*(y+1),k=P+1+m*(y+1),B=P+1+m*y;S.push(L,w,B),S.push(w,k,B)}this.setIndex(S),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(T,3)),this.setAttribute("uv",new Dn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yd extends zi{constructor(t=.5,i=1,a=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:a,phiSegments:l,thetaStart:c,thetaLength:f},a=Math.max(3,a),l=Math.max(1,l);const h=[],p=[],m=[],g=[];let _=t;const v=(i-t)/l,S=new Q,E=new te;for(let T=0;T<=l;T++){for(let M=0;M<=a;M++){const y=c+M/a*f;S.x=_*Math.cos(y),S.y=_*Math.sin(y),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,g.push(E.x,E.y)}_+=v}for(let T=0;T<l;T++){const M=T*(a+1);for(let y=0;y<a;y++){const P=y+M,L=P,w=P+a+1,k=P+a+2,B=P+1;h.push(L,w,B),h.push(w,k,B)}}this.setIndex(h),this.setAttribute("position",new Dn(p,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jd extends zi{constructor(t=new D0(new Q(-1,-1,0),new Q(-1,1,0),new Q(1,1,0)),i=64,a=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new Q,p=new Q,m=new te;let g=new Q;const _=[],v=[],S=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(v,3)),this.setAttribute("uv",new Dn(S,2));function T(){for(let L=0;L<i;L++)M(L);M(c===!1?i:0),P(),y()}function M(L){g=t.getPointAt(L/i,g);const w=f.normals[L],k=f.binormals[L];for(let B=0;B<=l;B++){const z=B/l*Math.PI*2,X=Math.sin(z),D=-Math.cos(z);p.x=D*w.x+X*k.x,p.y=D*w.y+X*k.y,p.z=D*w.z+X*k.z,p.normalize(),v.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,_.push(h.x,h.y,h.z)}}function y(){for(let L=1;L<=i;L++)for(let w=1;w<=l;w++){const k=(l+1)*(L-1)+(w-1),B=(l+1)*L+(w-1),z=(l+1)*L+w,X=(l+1)*(L-1)+w;E.push(k,B,X),E.push(B,z,X)}}function P(){for(let L=0;L<=i;L++)for(let w=0;w<=l;w++)m.x=L/i,m.y=w/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new jd(new lE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class cE extends Gc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uE extends Gc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class U0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Uh=new Ze,gv=new Q,_v=new Q;class fE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;gv.setFromMatrixPosition(t.matrixWorld),i.position.copy(gv),_v.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(_v),i.updateMatrixWorld(),Uh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Uh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class L0 extends b0{constructor(t=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hE extends fE{constructor(){super(new L0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dE extends U0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new hE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pE extends U0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class mE extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function vv(s,t,i,a){const l=gE(a);switch(i){case u0:return s*t;case h0:return s*t;case d0:return s*t*2;case p0:return s*t/l.components*l.byteLength;case Fd:return s*t/l.components*l.byteLength;case m0:return s*t*2/l.components*l.byteLength;case Id:return s*t*2/l.components*l.byteLength;case f0:return s*t*3/l.components*l.byteLength;case Ti:return s*t*4/l.components*l.byteLength;case Hd:return s*t*4/l.components*l.byteLength;case wc:case Dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uc:case Lc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rd:case od:return Math.max(s,16)*Math.max(t,8)/4;case ad:case sd:return Math.max(s,8)*Math.max(t,8)/2;case ld:case cd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ud:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case gd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nc:case bd:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16;case g0:case Rd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Cd:case wd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function gE(s){switch(s){case ca:case o0:return{byteLength:1,components:1};case Fo:case l0:case Vo:return{byteLength:2,components:1};case Pd:case Bd:return{byteLength:2,components:4};case br:case zd:case sa:return{byteLength:4,components:1};case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function N0(){let s=null,t=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function _E(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,_=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,h),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],T=_[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,_[v]=T)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const T=_[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var vE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AE=`#ifdef USE_BATCHING
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
#endif`,RE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UE=`#ifdef USE_IRIDESCENCE
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
#endif`,LE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GE=`#define PI 3.141592653589793
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
} // validated`,VE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kE=`vec3 transformedNormal = objectNormal;
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
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
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
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
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
#endif`,gT=`struct PhysicalMaterial {
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
}`,_T=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,yT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ST=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RT=`#if defined( USE_POINTS_UV )
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
#endif`,CT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`#ifdef USE_MORPHTARGETS
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
#endif`,OT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HT=`#ifdef USE_NORMALMAP
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
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
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
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`#include <common>
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
}`,Tb=`#if DEPTH_PACKING == 3200
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
}`,bb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`uniform float scale;
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ub=`#include <common>
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Nb=`#define LAMBERT
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
}`,Ob=`#define LAMBERT
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
}`,zb=`#define MATCAP
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
}`,Pb=`#define MATCAP
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
}`,Bb=`#define NORMAL
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
}`,Fb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Hb=`#define PHONG
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
}`,Gb=`#define STANDARD
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
}`,Vb=`#define STANDARD
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
}`,kb=`#define TOON
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
}`,Xb=`#define TOON
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
}`,Wb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,jb=`uniform vec3 color;
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
}`,Zb=`uniform float rotation;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:vE,alphahash_pars_fragment:yE,alphamap_fragment:xE,alphamap_pars_fragment:SE,alphatest_fragment:ME,alphatest_pars_fragment:EE,aomap_fragment:TE,aomap_pars_fragment:bE,batching_pars_vertex:AE,batching_vertex:RE,begin_vertex:CE,beginnormal_vertex:wE,bsdfs:DE,iridescence_fragment:UE,bumpmap_pars_fragment:LE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:OE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:PE,color_fragment:BE,color_pars_fragment:FE,color_pars_vertex:IE,color_vertex:HE,common:GE,cube_uv_reflection_fragment:VE,defaultnormal_vertex:kE,displacementmap_pars_vertex:XE,displacementmap_vertex:WE,emissivemap_fragment:qE,emissivemap_pars_fragment:YE,colorspace_fragment:jE,colorspace_pars_fragment:ZE,envmap_fragment:KE,envmap_common_pars_fragment:QE,envmap_pars_fragment:JE,envmap_pars_vertex:$E,envmap_physical_pars_fragment:uT,envmap_vertex:tT,fog_vertex:eT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:aT,gradientmap_pars_fragment:rT,lightmap_pars_fragment:sT,lights_lambert_fragment:oT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:fT,lights_toon_pars_fragment:hT,lights_phong_fragment:dT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:_T,lights_fragment_maps:vT,lights_fragment_end:yT,logdepthbuf_fragment:xT,logdepthbuf_pars_fragment:ST,logdepthbuf_pars_vertex:MT,logdepthbuf_vertex:ET,map_fragment:TT,map_pars_fragment:bT,map_particle_fragment:AT,map_particle_pars_fragment:RT,metalnessmap_fragment:CT,metalnessmap_pars_fragment:wT,morphinstance_vertex:DT,morphcolor_vertex:UT,morphnormal_vertex:LT,morphtarget_pars_vertex:NT,morphtarget_vertex:OT,normal_fragment_begin:zT,normal_fragment_maps:PT,normal_pars_fragment:BT,normal_pars_vertex:FT,normal_vertex:IT,normalmap_pars_fragment:HT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:kT,iridescence_pars_fragment:XT,opaque_fragment:WT,packing:qT,premultiplied_alpha_fragment:YT,project_vertex:jT,dithering_fragment:ZT,dithering_pars_fragment:KT,roughnessmap_fragment:QT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:tb,shadowmap_vertex:eb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:ab,skinning_vertex:rb,skinnormal_vertex:sb,specularmap_fragment:ob,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:ub,transmission_fragment:fb,transmission_pars_fragment:hb,uv_pars_fragment:db,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:_b,background_frag:vb,backgroundCube_vert:yb,backgroundCube_frag:xb,cube_vert:Sb,cube_frag:Mb,depth_vert:Eb,depth_frag:Tb,distanceRGBA_vert:bb,distanceRGBA_frag:Ab,equirect_vert:Rb,equirect_frag:Cb,linedashed_vert:wb,linedashed_frag:Db,meshbasic_vert:Ub,meshbasic_frag:Lb,meshlambert_vert:Nb,meshlambert_frag:Ob,meshmatcap_vert:zb,meshmatcap_frag:Pb,meshnormal_vert:Bb,meshnormal_frag:Fb,meshphong_vert:Ib,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:Vb,meshtoon_vert:kb,meshtoon_frag:Xb,points_vert:Wb,points_frag:qb,shadow_vert:Yb,shadow_frag:jb,sprite_vert:Zb,sprite_frag:Kb},Lt={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ui={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ze(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ui.physical={uniforms:On([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Tc={r:0,b:0,g:0},gr=new ua,Qb=new Ze;function Jb(s,t,i,a,l,c,f){const h=new ze(0);let p=c===!0?0:1,m,g,_=null,v=0,S=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:t).get(w)),w}function T(L){let w=!1;const k=E(L);k===null?y(h,p):k&&k.isColor&&(y(k,1),w=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?a.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,w){const k=E(w);k&&(k.isCubeTexture||k.mapping===Hc)?(g===void 0&&(g=new ei(new qo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Cs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(gr)),g.material.toneMapped=we.getTransfer(k.colorSpace)!==Ge,(_!==k||v!==k.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=k,v=k.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new ei(new Vc(2,2),new qa({name:"BackgroundMaterial",uniforms:Cs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=we.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||v!==k.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=k,v=k.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function y(L,w){L.getRGB(Tc,T0(s)),a.buffers.color.setClear(Tc.r,Tc.g,Tc.b,w,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,w=1){h.set(L),p=w,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(h,p)},render:T,addToRenderList:M,dispose:P}}function $b(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=v(null);let c=l,f=!1;function h(R,G,nt,$,ot){let gt=!1;const U=_($,nt,G);c!==U&&(c=U,m(c.object)),gt=S(R,$,nt,ot),gt&&E(R,$,nt,ot),ot!==null&&t.update(ot,s.ELEMENT_ARRAY_BUFFER),(gt||f)&&(f=!1,w(R,G,nt,$),ot!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,G,nt){const $=nt.wireframe===!0;let ot=a[R.id];ot===void 0&&(ot={},a[R.id]=ot);let gt=ot[G.id];gt===void 0&&(gt={},ot[G.id]=gt);let U=gt[$];return U===void 0&&(U=v(p()),gt[$]=U),U}function v(R){const G=[],nt=[],$=[];for(let ot=0;ot<i;ot++)G[ot]=0,nt[ot]=0,$[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:$,object:R,attributes:{},index:null}}function S(R,G,nt,$){const ot=c.attributes,gt=G.attributes;let U=0;const W=nt.getAttributes();for(const I in W)if(W[I].location>=0){const xt=ot[I];let O=gt[I];if(O===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),xt===void 0||xt.attribute!==O||O&&xt.data!==O.data)return!0;U++}return c.attributesNum!==U||c.index!==$}function E(R,G,nt,$){const ot={},gt=G.attributes;let U=0;const W=nt.getAttributes();for(const I in W)if(W[I].location>=0){let xt=gt[I];xt===void 0&&(I==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),I==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const O={};O.attribute=xt,xt&&xt.data&&(O.data=xt.data),ot[I]=O,U++}c.attributes=ot,c.attributesNum=U,c.index=$}function T(){const R=c.newAttributes;for(let G=0,nt=R.length;G<nt;G++)R[G]=0}function M(R){y(R,0)}function y(R,G){const nt=c.newAttributes,$=c.enabledAttributes,ot=c.attributeDivisors;nt[R]=1,$[R]===0&&(s.enableVertexAttribArray(R),$[R]=1),ot[R]!==G&&(s.vertexAttribDivisor(R,G),ot[R]=G)}function P(){const R=c.newAttributes,G=c.enabledAttributes;for(let nt=0,$=G.length;nt<$;nt++)G[nt]!==R[nt]&&(s.disableVertexAttribArray(nt),G[nt]=0)}function L(R,G,nt,$,ot,gt,U){U===!0?s.vertexAttribIPointer(R,G,nt,ot,gt):s.vertexAttribPointer(R,G,nt,$,ot,gt)}function w(R,G,nt,$){T();const ot=$.attributes,gt=nt.getAttributes(),U=G.defaultAttributeValues;for(const W in gt){const I=gt[W];if(I.location>=0){let ft=ot[W];if(ft===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor)),ft!==void 0){const xt=ft.normalized,O=ft.itemSize,J=t.get(ft);if(J===void 0)continue;const ht=J.buffer,q=J.type,ct=J.bytesPerElement,St=q===s.INT||q===s.UNSIGNED_INT||ft.gpuType===zd;if(ft.isInterleavedBufferAttribute){const Mt=ft.data,Pt=Mt.stride,Ht=ft.offset;if(Mt.isInstancedInterleavedBuffer){for(let qt=0;qt<I.locationSize;qt++)y(I.location+qt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let qt=0;qt<I.locationSize;qt++)M(I.location+qt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let qt=0;qt<I.locationSize;qt++)L(I.location+qt,O/I.locationSize,q,xt,Pt*ct,(Ht+O/I.locationSize*qt)*ct,St)}else{if(ft.isInstancedBufferAttribute){for(let Mt=0;Mt<I.locationSize;Mt++)y(I.location+Mt,ft.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Mt=0;Mt<I.locationSize;Mt++)M(I.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let Mt=0;Mt<I.locationSize;Mt++)L(I.location+Mt,O/I.locationSize,q,xt,O*ct,O/I.locationSize*Mt*ct,St)}}else if(U!==void 0){const xt=U[W];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(I.location,xt);break;case 3:s.vertexAttrib3fv(I.location,xt);break;case 4:s.vertexAttrib4fv(I.location,xt);break;default:s.vertexAttrib1fv(I.location,xt)}}}}P()}function k(){X();for(const R in a){const G=a[R];for(const nt in G){const $=G[nt];for(const ot in $)g($[ot].object),delete $[ot];delete G[nt]}delete a[R]}}function B(R){if(a[R.id]===void 0)return;const G=a[R.id];for(const nt in G){const $=G[nt];for(const ot in $)g($[ot].object),delete $[ot];delete G[nt]}delete a[R.id]}function z(R){for(const G in a){const nt=a[G];if(nt[R.id]===void 0)continue;const $=nt[R.id];for(const ot in $)g($[ot].object),delete $[ot];delete nt[R.id]}}function X(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:M,disableUnusedAttributes:P}}function t1(s,t,i){let a;function l(m){a=m}function c(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,_){_!==0&&(s.drawArraysInstanced(a,m,g,_),i.update(g,a,_))}function h(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,a,1)}function p(m,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(a,m,0,g,0,v,0,_);let E=0;for(let T=0;T<_;T++)E+=g[T]*v[T];i.update(E,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function e1(s,t,i,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ti&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const X=z===Vo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ca&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==sa&&!X)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:k,maxSamples:B}}function n1(s){const t=this;let i=null,a=0,l=!1,c=!1;const f=new vr,h=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||a!==0||l;return l=v,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,y=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const P=c?0:a,L=P*4;let w=y.clippingState||null;p.value=w,w=g(E,v,L,S);for(let k=0;k!==L;++k)w[k]=i[k];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,S,E){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const y=S+T*4,P=v.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,w=S;L!==T;++L,w+=4)f.copy(_[L]).applyMatrix4(P,h),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function i1(s){let t=new WeakMap;function i(f,h){return h===td?f.mapping=bs:h===ed&&(f.mapping=As),f}function a(f){if(f&&f.isTexture){const h=f.mapping;if(h===td||h===ed)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new kM(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const Ss=4,yv=[.125,.215,.35,.446,.526,.582],Sr=20,Lh=new L0,xv=new ze;let Nh=null,Oh=0,zh=0,Ph=!1;const yr=(1+Math.sqrt(5))/2,ys=1/yr,Sv=[new Q(-yr,ys,0),new Q(yr,ys,0),new Q(-ys,0,yr),new Q(ys,0,yr),new Q(0,yr,-ys),new Q(0,yr,ys),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],a1=new Q;class Mv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100,c={}){const{size:f=256,position:h=a1}=c;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nh,Oh,zh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,bc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Vo,format:Ti,colorSpace:Rs,depthBuffer:!1},l=Ev(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(t,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(c)),this._blurMaterial=s1(c,t,i)}return l}_compileMaterial(t){const i=new ei(this._lodPlanes[0],t);this._renderer.compile(i,Lh)}_sceneToCubeUV(t,i,a,l,c){const p=new di(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(xv),_.toneMapping=ka,_.autoClear=!1;const E=new Ic({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),T=new ei(new qo,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(xv),M=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):L===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const w=this._cubeSize;bc(l,L*w,P>2?w:0,w,w),_.setRenderTarget(l),M&&_.render(T,p),_.render(t,p)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=y}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===bs||t.mapping===As;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ei(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;bc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,Lh)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Sv[(l-c-1)%Sv.length];this._blur(t,c-1,c,f,h)}i.autoClear=a}_blur(t,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,i,a,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new ei(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),T=c/E,M=isFinite(c)?1+Math.floor(g*T):Sr;M>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sr}`);const y=[];let P=0;for(let z=0;z<Sr;++z){const X=z/T,D=Math.exp(-X*X/2);y.push(D),z===0?P+=D:z<M&&(P+=2*D)}for(let z=0;z<y.length;z++)y[z]=y[z]/P;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const w=this._sizeLods[l],k=3*w*(l>L-Ss?l-L+Ss:0),B=4*(this._cubeSize-w);bc(i,k,B,3*w,2*w),p.setRenderTarget(i),p.render(_,Lh)}}function r1(s){const t=[],i=[],a=[];let l=s;const c=s-Ss+1+yv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-Ss?p=yv[f-s+Ss-1]:f===0&&(p=0),a.push(p);const m=1/(h-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,T=3,M=2,y=1,P=new Float32Array(T*E*S),L=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let B=0;B<S;B++){const z=B%3*2/3-1,X=B>2?0:-1,D=[z,X,0,z+2/3,X,0,z+2/3,X+1,0,z,X,0,z+2/3,X+1,0,z,X+1,0];P.set(D,T*E*B),L.set(v,M*E*B);const R=[B,B,B,B,B,B];w.set(R,y*E*B)}const k=new zi;k.setAttribute("position",new Oi(P,T)),k.setAttribute("uv",new Oi(L,M)),k.setAttribute("faceIndex",new Oi(w,y)),t.push(k),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function Ev(s,t,i){const a=new Ar(s,t,i);return a.texture.mapping=Hc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function bc(s,t,i,a,l){s.viewport.set(t,i,a,l),s.scissor.set(t,i,a,l)}function s1(s,t,i){const a=new Float32Array(Sr),l=new Q(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Tv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function bv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Zd(){return`

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
	`}function o1(s){let t=new WeakMap,i=null;function a(h){if(h&&h.isTexture){const p=h.mapping,m=p===td||p===ed,g=p===bs||p===As;if(m||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Mv(s)),_=m?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Mv(s)),_=m?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function l1(s){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&Oc("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function c1(s,t,i,a){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const P=S.array;T=S.version;for(let L=0,w=P.length;L<w;L+=3){const k=P[L+0],B=P[L+1],z=P[L+2];v.push(k,B,B,z,z,k)}}else if(E!==void 0){const P=E.array;T=E.version;for(let L=0,w=P.length/3-1;L<w;L+=3){const k=L+0,B=L+1,z=L+2;v.push(k,B,B,z,z,k)}}else return;const M=new(v0(v)?E0:M0)(v,1);M.version=T;const y=c.get(_);y&&t.remove(y),c.set(_,M)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:h,update:p,getWireframeAttribute:g}}function u1(s,t,i){let a;function l(v){a=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(a,S,c,v*f),i.update(S,a,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(a,S,c,v*f,E),i.update(S,a,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,v,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,a,1)}function _(v,S,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)m(v[y]/f,S[y],T[y]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,v,0,T,0,E);let y=0;for(let P=0;P<E;P++)y+=S[P]*T[P];i.update(y,a,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function f1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function h1(s,t,i){const a=new WeakMap,l=new tn;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let D=function(){z.dispose(),a.delete(h),h.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;S===!0&&(L=1),E===!0&&(L=2),T===!0&&(L=3);let w=h.attributes.position.count*L,k=1;w>t.maxTextureSize&&(k=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*k*4*_),z=new y0(B,w,k,_);z.type=sa,z.needsUpdate=!0;const X=L*4;for(let R=0;R<_;R++){const G=M[R],nt=y[R],$=P[R],ot=w*k*4*R;for(let gt=0;gt<G.count;gt++){const U=gt*X;S===!0&&(l.fromBufferAttribute(G,gt),B[ot+U+0]=l.x,B[ot+U+1]=l.y,B[ot+U+2]=l.z,B[ot+U+3]=0),E===!0&&(l.fromBufferAttribute(nt,gt),B[ot+U+4]=l.x,B[ot+U+5]=l.y,B[ot+U+6]=l.z,B[ot+U+7]=0),T===!0&&(l.fromBufferAttribute($,gt),B[ot+U+8]=l.x,B[ot+U+9]=l.y,B[ot+U+10]=l.z,B[ot+U+11]=$.itemSize===4?l.w:1)}}v={count:_,texture:z,size:new te(w,k)},a.set(h,v),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let T=0;T<m.length;T++)S+=m[T];const E=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function d1(s,t,i,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const O0=new Wn,Av=new R0(1,1),z0=new y0,P0=new bM,B0=new A0,Rv=[],Cv=[],wv=new Float32Array(16),Dv=new Float32Array(9),Uv=new Float32Array(4);function Us(s,t,i){const a=s[0];if(a<=0||a>0)return s;const l=t*i;let c=Rv[l];if(c===void 0&&(c=new Float32Array(l),Rv[l]=c),t!==0){a.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,a=t.length;i<a;i++)s[i]=t[i]}function kc(s,t){let i=Cv[t];i===void 0&&(i=new Int32Array(t),Cv[t]=i);for(let a=0;a!==t;++a)i[a]=s.allocateTextureUnit();return i}function p1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function m1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function g1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function _1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function v1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,a))return;Uv.set(a),s.uniformMatrix2fv(this.addr,!1,Uv),dn(i,a)}}function y1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,a))return;Dv.set(a),s.uniformMatrix3fv(this.addr,!1,Dv),dn(i,a)}}function x1(s,t){const i=this.cache,a=t.elements;if(a===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,a))return;wv.set(a),s.uniformMatrix4fv(this.addr,!1,wv),dn(i,a)}}function S1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function M1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function E1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function T1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function b1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function A1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function R1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function C1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function w1(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Av.compareFunction=_0,c=Av):c=O0,i.setTexture2D(t||c,l)}function D1(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||P0,l)}function U1(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||B0,l)}function L1(s,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||z0,l)}function N1(s){switch(s){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return v1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return b1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return L1}}function O1(s,t){s.uniform1fv(this.addr,t)}function z1(s,t){const i=Us(t,this.size,2);s.uniform2fv(this.addr,i)}function P1(s,t){const i=Us(t,this.size,3);s.uniform3fv(this.addr,i)}function B1(s,t){const i=Us(t,this.size,4);s.uniform4fv(this.addr,i)}function F1(s,t){const i=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function I1(s,t){const i=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function H1(s,t){const i=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function G1(s,t){s.uniform1iv(this.addr,t)}function V1(s,t){s.uniform2iv(this.addr,t)}function k1(s,t){s.uniform3iv(this.addr,t)}function X1(s,t){s.uniform4iv(this.addr,t)}function W1(s,t){s.uniform1uiv(this.addr,t)}function q1(s,t){s.uniform2uiv(this.addr,t)}function Y1(s,t){s.uniform3uiv(this.addr,t)}function j1(s,t){s.uniform4uiv(this.addr,t)}function Z1(s,t,i){const a=this.cache,l=t.length,c=kc(i,l);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||O0,c[f])}function K1(s,t,i){const a=this.cache,l=t.length,c=kc(i,l);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||P0,c[f])}function Q1(s,t,i){const a=this.cache,l=t.length,c=kc(i,l);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||B0,c[f])}function J1(s,t,i){const a=this.cache,l=t.length,c=kc(i,l);hn(a,c)||(s.uniform1iv(this.addr,c),dn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||z0,c[f])}function $1(s){switch(s){case 5126:return O1;case 35664:return z1;case 35665:return P1;case 35666:return B1;case 35674:return F1;case 35675:return I1;case 35676:return H1;case 5124:case 35670:return G1;case 35667:case 35671:return V1;case 35668:case 35672:return k1;case 35669:case 35673:return X1;case 5125:return W1;case 36294:return q1;case 36295:return Y1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return Z1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Q1;case 36289:case 36303:case 36311:case 36292:return J1}}class tA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.setValue=N1(i.type)}}class eA{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$1(i.type)}}class nA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],a)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function Lv(s,t){s.seq.push(t),s.map[t.id]=t}function iA(s,t,i){const a=s.name,l=a.length;for(Bh.lastIndex=0;;){const c=Bh.exec(a),f=Bh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){Lv(i,m===void 0?new tA(h,s,t):new eA(h,s,t));break}else{let _=i.map[h];_===void 0&&(_=new nA(h),Lv(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);iA(c,f,this)}}setValue(t,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&a.push(f)}return a}}function Nv(s,t,i){const a=s.createShader(t);return s.shaderSource(a,i),s.compileShader(a),a}const aA=37297;let rA=0;function sA(s,t){const i=s.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;a.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return a.join(`
`)}const Ov=new ce;function oA(s){we._getMatrix(Ov,we.workingColorSpace,s);const t=`mat3( ${Ov.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case Pc:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function zv(s,t,i){const a=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+sA(s.getShaderSource(t),f)}else return l}function lA(s,t){const i=oA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function cA(s,t){let i;switch(t){case KS:i="Linear";break;case QS:i="Reinhard";break;case JS:i="Cineon";break;case $S:i="ACESFilmic";break;case eM:i="AgX";break;case nM:i="Neutral";break;case tM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new Q;function uA(){we.getLuminanceCoefficients(Ac);const s=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function hA(s){const t=[];for(const i in s){const a=s[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function dA(s,t){const i={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function No(s){return s!==""}function Pv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(pA,gA)}const mA=new Map;function gA(s,t){let i=ue[t];if(i===void 0){const a=mA.get(t);if(a!==void 0)i=ue[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Ud(i)}const _A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(s){return s.replace(_A,vA)}function vA(s,t,i,a){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Iv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function yA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===a0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function xA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case As:t="ENVMAP_TYPE_CUBE";break;case Hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:t="ENVMAP_MODE_REFRACTION";break}return t}function MA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case r0:t="ENVMAP_BLENDING_MULTIPLY";break;case jS:t="ENVMAP_BLENDING_MIX";break;case ZS:t="ENVMAP_BLENDING_ADD";break}return t}function EA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function TA(s,t,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=yA(i),m=xA(i),g=SA(i),_=MA(i),v=EA(i),S=fA(i),E=hA(c),T=l.createProgram();let M,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),y.length>0&&(y+=`
`)):(M=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),y=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?ue.tonemapping_pars_fragment:"",i.toneMapping!==ka?cA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,lA("linearToOutputTexel",i.outputColorSpace),uA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),f=Ud(f),f=Pv(f,i),f=Bv(f,i),h=Ud(h),h=Pv(h,i),h=Bv(h,i),f=Fv(f),h=Fv(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=P+M+f,w=P+y+h,k=Nv(l,l.VERTEX_SHADER,L),B=Nv(l,l.FRAGMENT_SHADER,w);l.attachShader(T,k),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(G){if(s.debug.checkShaderErrors){const nt=l.getProgramInfoLog(T).trim(),$=l.getShaderInfoLog(k).trim(),ot=l.getShaderInfoLog(B).trim();let gt=!0,U=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(gt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,k,B);else{const W=zv(l,k,"vertex"),I=zv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+nt+`
`+W+`
`+I)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):($===""||ot==="")&&(U=!1);U&&(G.diagnostics={runnable:gt,programLog:nt,vertexShader:{log:$,prefix:M},fragmentShader:{log:ot,prefix:y}})}l.deleteShader(k),l.deleteShader(B),X=new zc(l,T),D=dA(l,T)}let X;this.getUniforms=function(){return X===void 0&&z(this),X};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,aA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=B,this}let bA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new RA(t),i.set(t,a)),a}}class RA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function CA(s,t,i,a,l,c,f){const h=new x0,p=new AA,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,R,G,nt,$){const ot=nt.fog,gt=$.geometry,U=D.isMeshStandardMaterial?nt.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||U),I=W&&W.mapping===Hc?W.image.height:null,ft=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const xt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,O=xt!==void 0?xt.length:0;let J=0;gt.morphAttributes.position!==void 0&&(J=1),gt.morphAttributes.normal!==void 0&&(J=2),gt.morphAttributes.color!==void 0&&(J=3);let ht,q,ct,St;if(ft){const Te=Ui[ft];ht=Te.vertexShader,q=Te.fragmentShader}else ht=D.vertexShader,q=D.fragmentShader,p.update(D),ct=p.getVertexShaderID(D),St=p.getFragmentShaderID(D);const Mt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),Ht=$.isInstancedMesh===!0,qt=$.isBatchedMesh===!0,Ue=!!D.map,be=!!D.matcap,fe=!!W,H=!!D.aoMap,Tn=!!D.lightMap,he=!!D.bumpMap,ge=!!D.normalMap,Yt=!!D.displacementMap,Le=!!D.emissiveMap,Xt=!!D.metalnessMap,N=!!D.roughnessMap,A=D.anisotropy>0,at=D.clearcoat>0,pt=D.dispersion>0,Et=D.iridescence>0,_t=D.sheen>0,Vt=D.transmission>0,Ct=A&&!!D.anisotropyMap,Bt=at&&!!D.clearcoatMap,_e=at&&!!D.clearcoatNormalMap,bt=at&&!!D.clearcoatRoughnessMap,Ft=Et&&!!D.iridescenceMap,Qt=Et&&!!D.iridescenceThicknessMap,kt=_t&&!!D.sheenColorMap,Ot=_t&&!!D.sheenRoughnessMap,ee=!!D.specularMap,se=!!D.specularColorMap,Pe=!!D.specularIntensityMap,j=Vt&&!!D.transmissionMap,wt=Vt&&!!D.thicknessMap,ut=!!D.gradientMap,yt=!!D.alphaMap,Rt=D.alphaTest>0,Dt=!!D.alphaHash,ne=!!D.extensions;let Ye=ka;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const cn={shaderID:ft,shaderType:D.type,shaderName:D.name,vertexShader:ht,fragmentShader:q,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:qt,batchingColor:qt&&$._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&$.instanceColor!==null,instancingMorph:Ht&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Rs,alphaToCoverage:!!D.alphaToCoverage,map:Ue,matcap:be,envMap:fe,envMapMode:fe&&W.mapping,envMapCubeUVHeight:I,aoMap:H,lightMap:Tn,bumpMap:he,normalMap:ge,displacementMap:v&&Yt,emissiveMap:Le,normalMapObjectSpace:ge&&D.normalMapType===oM,normalMapTangentSpace:ge&&D.normalMapType===sM,metalnessMap:Xt,roughnessMap:N,anisotropy:A,anisotropyMap:Ct,clearcoat:at,clearcoatMap:Bt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:pt,iridescence:Et,iridescenceMap:Ft,iridescenceThicknessMap:Qt,sheen:_t,sheenColorMap:kt,sheenRoughnessMap:Ot,specularMap:ee,specularColorMap:se,specularIntensityMap:Pe,transmission:Vt,transmissionMap:j,thicknessMap:wt,gradientMap:ut,opaque:D.transparent===!1&&D.blending===Ms&&D.alphaToCoverage===!1,alphaMap:yt,alphaTest:Rt,alphaHash:Dt,combine:D.combine,mapUv:Ue&&T(D.map.channel),aoMapUv:H&&T(D.aoMap.channel),lightMapUv:Tn&&T(D.lightMap.channel),bumpMapUv:he&&T(D.bumpMap.channel),normalMapUv:ge&&T(D.normalMap.channel),displacementMapUv:Yt&&T(D.displacementMap.channel),emissiveMapUv:Le&&T(D.emissiveMap.channel),metalnessMapUv:Xt&&T(D.metalnessMap.channel),roughnessMapUv:N&&T(D.roughnessMap.channel),anisotropyMapUv:Ct&&T(D.anisotropyMap.channel),clearcoatMapUv:Bt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(D.sheenRoughnessMap.channel),specularMapUv:ee&&T(D.specularMap.channel),specularColorMapUv:se&&T(D.specularColorMap.channel),specularIntensityMapUv:Pe&&T(D.specularIntensityMap.channel),transmissionMapUv:j&&T(D.transmissionMap.channel),thicknessMapUv:wt&&T(D.thicknessMap.channel),alphaMapUv:yt&&T(D.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(ge||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!gt.attributes.uv&&(Ue||yt),fog:!!ot,useFog:D.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Pt,skinning:$.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:J,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ue&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Le&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Li,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ne&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&D.extensions.multiDraw===!0||qt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function y(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(R,D),L(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function P(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const R=E[D.type];let G;if(R){const nt=Ui[R];G=IM.clone(nt.uniforms)}else G=D.uniforms;return G}function k(D,R){let G;for(let nt=0,$=g.length;nt<$;nt++){const ot=g[nt];if(ot.cacheKey===R){G=ot,++G.usedTimes;break}}return G===void 0&&(G=new TA(s,R,D,c),g.push(G)),G}function B(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function X(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:k,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:X}}function wA(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function a(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:a,update:l,dispose:c}}function DA(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Hv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gv(){const s=[];let t=0;const i=[],a=[],l=[];function c(){t=0,i.length=0,a.length=0,l.length=0}function f(_,v,S,E,T,M){let y=s[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:M},s[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=T,y.group=M),t++,y}function h(_,v,S,E,T,M){const y=f(_,v,S,E,T,M);S.transmission>0?a.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(_,v,S,E,T,M){const y=f(_,v,S,E,T,M);S.transmission>0?a.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(_,v){i.length>1&&i.sort(_||DA),a.length>1&&a.sort(v||Hv),l.length>1&&l.sort(v||Hv)}function g(){for(let _=t,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function UA(){let s=new WeakMap;function t(a,l){const c=s.get(a);let f;return c===void 0?(f=new Gv,s.set(a,[f])):l>=c.length?(f=new Gv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function LA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new ze};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ze,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":i={color:new ze,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function NA(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let OA=0;function zA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PA(s){const t=new LA,i=NA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new Q);const l=new Q,c=new Ze,f=new Ze;function h(m){let g=0,_=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let S=0,E=0,T=0,M=0,y=0,P=0,L=0,w=0,k=0,B=0,z=0;m.sort(zA);for(let D=0,R=m.length;D<R;D++){const G=m[D],nt=G.color,$=G.intensity,ot=G.distance,gt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=nt.r*$,_+=nt.g*$,v+=nt.b*$;else if(G.isLightProbe){for(let U=0;U<9;U++)a.probe[U].addScaledVector(G.sh.coefficients[U],$);z++}else if(G.isDirectionalLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,I=i.get(G);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,a.directionalShadow[S]=I,a.directionalShadowMap[S]=gt,a.directionalShadowMatrix[S]=G.shadow.matrix,P++}a.directional[S]=U,S++}else if(G.isSpotLight){const U=t.get(G);U.position.setFromMatrixPosition(G.matrixWorld),U.color.copy(nt).multiplyScalar($),U.distance=ot,U.coneCos=Math.cos(G.angle),U.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),U.decay=G.decay,a.spot[T]=U;const W=G.shadow;if(G.map&&(a.spotLightMap[k]=G.map,k++,W.updateMatrices(G),G.castShadow&&B++),a.spotLightMatrix[T]=W.matrix,G.castShadow){const I=i.get(G);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,a.spotShadow[T]=I,a.spotShadowMap[T]=gt,w++}T++}else if(G.isRectAreaLight){const U=t.get(G);U.color.copy(nt).multiplyScalar($),U.halfWidth.set(G.width*.5,0,0),U.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=U,M++}else if(G.isPointLight){const U=t.get(G);if(U.color.copy(G.color).multiplyScalar(G.intensity),U.distance=G.distance,U.decay=G.decay,G.castShadow){const W=G.shadow,I=i.get(G);I.shadowIntensity=W.intensity,I.shadowBias=W.bias,I.shadowNormalBias=W.normalBias,I.shadowRadius=W.radius,I.shadowMapSize=W.mapSize,I.shadowCameraNear=W.camera.near,I.shadowCameraFar=W.camera.far,a.pointShadow[E]=I,a.pointShadowMap[E]=gt,a.pointShadowMatrix[E]=G.shadow.matrix,L++}a.point[E]=U,E++}else if(G.isHemisphereLight){const U=t.get(G);U.skyColor.copy(G.color).multiplyScalar($),U.groundColor.copy(G.groundColor).multiplyScalar($),a.hemi[y]=U,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==S||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==M||X.hemiLength!==y||X.numDirectionalShadows!==P||X.numPointShadows!==L||X.numSpotShadows!==w||X.numSpotMaps!==k||X.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=w+k-B,a.spotLightMap.length=k,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=z,X.directionalLength=S,X.pointLength=E,X.spotLength=T,X.rectAreaLength=M,X.hemiLength=y,X.numDirectionalShadows=P,X.numPointShadows=L,X.numSpotShadows=w,X.numSpotMaps=k,X.numLightProbes=z,a.version=OA++)}function p(m,g){let _=0,v=0,S=0,E=0,T=0;const M=g.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const L=m[y];if(L.isDirectionalLight){const w=a.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(L.isSpotLight){const w=a.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const w=a.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=a.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const w=a.hemi[T];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),T++}}}return{setup:h,setupView:p,state:a}}function Vv(s){const t=new PA(s),i=[],a=[];function l(g){m.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function BA(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Vv(s),t.set(l,[h])):c>=f.length?(h=new Vv(s),f.push(h)):h=f[c],h}function a(){t=new WeakMap}return{get:i,dispose:a}}const FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IA=`uniform sampler2D shadow_pass;
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
}`;function HA(s,t,i){let a=new kd;const l=new te,c=new te,f=new tn,h=new cE({depthPacking:rM}),p=new uE,m={},g=i.maxTextureSize,_={[Wa]:Xn,[Xn]:Wa,[Li]:Li},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:FA,fragmentShader:IA}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new zi;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ei(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let y=this.type;this.render=function(B,z,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),nt=s.state;nt.setBlending(Va),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const $=y!==ra&&this.type===ra,ot=y===ra&&this.type!==ra;for(let gt=0,U=B.length;gt<U;gt++){const W=B[gt],I=W.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const ft=I.getFrameExtents();if(l.multiply(ft),c.copy(I.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ft.x),l.x=c.x*ft.x,I.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ft.y),l.y=c.y*ft.y,I.mapSize.y=c.y)),I.map===null||$===!0||ot===!0){const O=this.type!==ra?{minFilter:bi,magFilter:bi}:{};I.map!==null&&I.map.dispose(),I.map=new Ar(l.x,l.y,O),I.map.texture.name=W.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const xt=I.getViewportCount();for(let O=0;O<xt;O++){const J=I.getViewport(O);f.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),nt.viewport(f),I.updateMatrices(W,O),a=I.getFrustum(),w(z,X,I.camera,W,this.type)}I.isPointLightShadow!==!0&&this.type===ra&&P(I,X),I.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(D,R,G)};function P(B,z){const X=t.update(T);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(z,null,X,v,T,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(z,null,X,S,T,null)}function L(B,z,X,D){let R=null;const G=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)R=G;else if(R=X.isPointLight===!0?p:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const nt=R.uuid,$=z.uuid;let ot=m[nt];ot===void 0&&(ot={},m[nt]=ot);let gt=ot[$];gt===void 0&&(gt=R.clone(),ot[$]=gt,z.addEventListener("dispose",k)),R=gt}if(R.visible=z.visible,R.wireframe=z.wireframe,D===ra?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const nt=s.properties.get(R);nt.light=X}return R}function w(B,z,X,D,R){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===ra)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const $=t.update(B),ot=B.material;if(Array.isArray(ot)){const gt=$.groups;for(let U=0,W=gt.length;U<W;U++){const I=gt[U],ft=ot[I.materialIndex];if(ft&&ft.visible){const xt=L(B,ft,D,R);B.onBeforeShadow(s,B,z,X,$,xt,I),s.renderBufferDirect(X,null,$,xt,B,I),B.onAfterShadow(s,B,z,X,$,xt,I)}}}else if(ot.visible){const gt=L(B,ot,D,R);B.onBeforeShadow(s,B,z,X,$,gt,null),s.renderBufferDirect(X,null,$,gt,B,null),B.onAfterShadow(s,B,z,X,$,gt,null)}}const nt=B.children;for(let $=0,ot=nt.length;$<ot;$++)w(nt[$],z,X,D,R)}function k(B){B.target.removeEventListener("dispose",k);for(const X in m){const D=m[X],R=B.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const GA={[Yh]:jh,[Zh]:Jh,[Kh]:$h,[Ts]:Qh,[jh]:Yh,[Jh]:Zh,[$h]:Kh,[Qh]:Ts};function VA(s,t){function i(){let j=!1;const wt=new tn;let ut=null;const yt=new tn(0,0,0,0);return{setMask:function(Rt){ut!==Rt&&!j&&(s.colorMask(Rt,Rt,Rt,Rt),ut=Rt)},setLocked:function(Rt){j=Rt},setClear:function(Rt,Dt,ne,Ye,cn){cn===!0&&(Rt*=Ye,Dt*=Ye,ne*=Ye),wt.set(Rt,Dt,ne,Ye),yt.equals(wt)===!1&&(s.clearColor(Rt,Dt,ne,Ye),yt.copy(wt))},reset:function(){j=!1,ut=null,yt.set(-1,0,0,0)}}}function a(){let j=!1,wt=!1,ut=null,yt=null,Rt=null;return{setReversed:function(Dt){if(wt!==Dt){const ne=t.get("EXT_clip_control");Dt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),wt=Dt;const Ye=Rt;Rt=null,this.setClear(Ye)}},getReversed:function(){return wt},setTest:function(Dt){Dt?Mt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(Dt){ut!==Dt&&!j&&(s.depthMask(Dt),ut=Dt)},setFunc:function(Dt){if(wt&&(Dt=GA[Dt]),yt!==Dt){switch(Dt){case Yh:s.depthFunc(s.NEVER);break;case jh:s.depthFunc(s.ALWAYS);break;case Zh:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Kh:s.depthFunc(s.EQUAL);break;case Qh:s.depthFunc(s.GEQUAL);break;case Jh:s.depthFunc(s.GREATER);break;case $h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Dt}},setLocked:function(Dt){j=Dt},setClear:function(Dt){Rt!==Dt&&(wt&&(Dt=1-Dt),s.clearDepth(Dt),Rt=Dt)},reset:function(){j=!1,ut=null,yt=null,Rt=null,wt=!1}}}function l(){let j=!1,wt=null,ut=null,yt=null,Rt=null,Dt=null,ne=null,Ye=null,cn=null;return{setTest:function(Te){j||(Te?Mt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Te){wt!==Te&&!j&&(s.stencilMask(Te),wt=Te)},setFunc:function(Te,_n,pi){(ut!==Te||yt!==_n||Rt!==pi)&&(s.stencilFunc(Te,_n,pi),ut=Te,yt=_n,Rt=pi)},setOp:function(Te,_n,pi){(Dt!==Te||ne!==_n||Ye!==pi)&&(s.stencilOp(Te,_n,pi),Dt=Te,ne=_n,Ye=pi)},setLocked:function(Te){j=Te},setClear:function(Te){cn!==Te&&(s.clearStencil(Te),cn=Te)},reset:function(){j=!1,wt=null,ut=null,yt=null,Rt=null,Dt=null,ne=null,Ye=null,cn=null}}}const c=new i,f=new a,h=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,T=!1,M=null,y=null,P=null,L=null,w=null,k=null,B=null,z=new ze(0,0,0),X=0,D=!1,R=null,G=null,nt=null,$=null,ot=null;const gt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(I)[1]),U=W>=1):I.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),U=W>=2);let ft=null,xt={};const O=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),ht=new tn().fromArray(O),q=new tn().fromArray(J);function ct(j,wt,ut,yt){const Rt=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(j,Dt),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<ut;ne++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(wt+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return Dt}const St={};St[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Mt(s.DEPTH_TEST),f.setFunc(Ts),he(!1),ge(W_),Mt(s.CULL_FACE),H(Va);function Mt(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Pt(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function Ht(j,wt){return _[j]!==wt?(s.bindFramebuffer(j,wt),_[j]=wt,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=wt),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function qt(j,wt){let ut=S,yt=!1;if(j){ut=v.get(wt),ut===void 0&&(ut=[],v.set(wt,ut));const Rt=j.textures;if(ut.length!==Rt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,ne=Rt.length;Dt<ne;Dt++)ut[Dt]=s.COLOR_ATTACHMENT0+Dt;ut.length=Rt.length,yt=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ut)}function Ue(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const be={[xr]:s.FUNC_ADD,[US]:s.FUNC_SUBTRACT,[LS]:s.FUNC_REVERSE_SUBTRACT};be[NS]=s.MIN,be[OS]=s.MAX;const fe={[zS]:s.ZERO,[PS]:s.ONE,[BS]:s.SRC_COLOR,[Wh]:s.SRC_ALPHA,[kS]:s.SRC_ALPHA_SATURATE,[GS]:s.DST_COLOR,[IS]:s.DST_ALPHA,[FS]:s.ONE_MINUS_SRC_COLOR,[qh]:s.ONE_MINUS_SRC_ALPHA,[VS]:s.ONE_MINUS_DST_COLOR,[HS]:s.ONE_MINUS_DST_ALPHA,[XS]:s.CONSTANT_COLOR,[WS]:s.ONE_MINUS_CONSTANT_COLOR,[qS]:s.CONSTANT_ALPHA,[YS]:s.ONE_MINUS_CONSTANT_ALPHA};function H(j,wt,ut,yt,Rt,Dt,ne,Ye,cn,Te){if(j===Va){T===!0&&(Pt(s.BLEND),T=!1);return}if(T===!1&&(Mt(s.BLEND),T=!0),j!==DS){if(j!==M||Te!==D){if((y!==xr||w!==xr)&&(s.blendEquation(s.FUNC_ADD),y=xr,w=xr),Te)switch(j){case Ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case q_:s.blendFunc(s.ONE,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case q_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}P=null,L=null,k=null,B=null,z.set(0,0,0),X=0,M=j,D=Te}return}Rt=Rt||wt,Dt=Dt||ut,ne=ne||yt,(wt!==y||Rt!==w)&&(s.blendEquationSeparate(be[wt],be[Rt]),y=wt,w=Rt),(ut!==P||yt!==L||Dt!==k||ne!==B)&&(s.blendFuncSeparate(fe[ut],fe[yt],fe[Dt],fe[ne]),P=ut,L=yt,k=Dt,B=ne),(Ye.equals(z)===!1||cn!==X)&&(s.blendColor(Ye.r,Ye.g,Ye.b,cn),z.copy(Ye),X=cn),M=j,D=!1}function Tn(j,wt){j.side===Li?Pt(s.CULL_FACE):Mt(s.CULL_FACE);let ut=j.side===Xn;wt&&(ut=!ut),he(ut),j.blending===Ms&&j.transparent===!1?H(Va):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const yt=j.stencilWrite;h.setTest(yt),yt&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Mt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(j){R!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),R=j)}function ge(j){j!==RS?(Mt(s.CULL_FACE),j!==G&&(j===W_?s.cullFace(s.BACK):j===CS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),G=j}function Yt(j){j!==nt&&(U&&s.lineWidth(j),nt=j)}function Le(j,wt,ut){j?(Mt(s.POLYGON_OFFSET_FILL),($!==wt||ot!==ut)&&(s.polygonOffset(wt,ut),$=wt,ot=ut)):Pt(s.POLYGON_OFFSET_FILL)}function Xt(j){j?Mt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function N(j){j===void 0&&(j=s.TEXTURE0+gt-1),ft!==j&&(s.activeTexture(j),ft=j)}function A(j,wt,ut){ut===void 0&&(ft===null?ut=s.TEXTURE0+gt-1:ut=ft);let yt=xt[ut];yt===void 0&&(yt={type:void 0,texture:void 0},xt[ut]=yt),(yt.type!==j||yt.texture!==wt)&&(ft!==ut&&(s.activeTexture(ut),ft=ut),s.bindTexture(j,wt||St[j]),yt.type=j,yt.texture=wt)}function at(){const j=xt[ft];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pt(){try{s.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _t(){try{s.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Vt(){try{s.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ct(){try{s.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{s.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function _e(){try{s.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{s.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{s.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qt(){try{s.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function kt(j){ht.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ht.copy(j))}function Ot(j){q.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),q.copy(j))}function ee(j,wt){let ut=m.get(wt);ut===void 0&&(ut=new WeakMap,m.set(wt,ut));let yt=ut.get(j);yt===void 0&&(yt=s.getUniformBlockIndex(wt,j.name),ut.set(j,yt))}function se(j,wt){const yt=m.get(wt).get(j);p.get(wt)!==yt&&(s.uniformBlockBinding(wt,yt,j.__bindingPointIndex),p.set(wt,yt))}function Pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ft=null,xt={},_={},v=new WeakMap,S=[],E=null,T=!1,M=null,y=null,P=null,L=null,w=null,k=null,B=null,z=new ze(0,0,0),X=0,D=!1,R=null,G=null,nt=null,$=null,ot=null,ht.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Mt,disable:Pt,bindFramebuffer:Ht,drawBuffers:qt,useProgram:Ue,setBlending:H,setMaterial:Tn,setFlipSided:he,setCullFace:ge,setLineWidth:Yt,setPolygonOffset:Le,setScissorTest:Xt,activeTexture:N,bindTexture:A,unbindTexture:at,compressedTexImage2D:pt,compressedTexImage3D:Et,texImage2D:Ft,texImage3D:Qt,updateUBOMapping:ee,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:bt,texSubImage2D:_t,texSubImage3D:Vt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Bt,scissor:kt,viewport:Ot,reset:Pe}}function kA(s,t,i,a,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new te,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,A){return S?new OffscreenCanvas(N,A):Fc("canvas")}function T(N,A,at){let pt=1;const Et=Xt(N);if((Et.width>at||Et.height>at)&&(pt=at/Math.max(Et.width,Et.height)),pt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const _t=Math.floor(pt*Et.width),Vt=Math.floor(pt*Et.height);_===void 0&&(_=E(_t,Vt));const Ct=A?E(_t,Vt):_;return Ct.width=_t,Ct.height=Vt,Ct.getContext("2d").drawImage(N,0,0,_t,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+_t+"x"+Vt+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),N;return N}function M(N){return N.generateMipmaps}function y(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,A,at,pt,Et=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let _t=A;if(A===s.RED&&(at===s.FLOAT&&(_t=s.R32F),at===s.HALF_FLOAT&&(_t=s.R16F),at===s.UNSIGNED_BYTE&&(_t=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.R8UI),at===s.UNSIGNED_SHORT&&(_t=s.R16UI),at===s.UNSIGNED_INT&&(_t=s.R32UI),at===s.BYTE&&(_t=s.R8I),at===s.SHORT&&(_t=s.R16I),at===s.INT&&(_t=s.R32I)),A===s.RG&&(at===s.FLOAT&&(_t=s.RG32F),at===s.HALF_FLOAT&&(_t=s.RG16F),at===s.UNSIGNED_BYTE&&(_t=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RG8UI),at===s.UNSIGNED_SHORT&&(_t=s.RG16UI),at===s.UNSIGNED_INT&&(_t=s.RG32UI),at===s.BYTE&&(_t=s.RG8I),at===s.SHORT&&(_t=s.RG16I),at===s.INT&&(_t=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),at===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),at===s.UNSIGNED_INT&&(_t=s.RGB32UI),at===s.BYTE&&(_t=s.RGB8I),at===s.SHORT&&(_t=s.RGB16I),at===s.INT&&(_t=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),at===s.UNSIGNED_INT&&(_t=s.RGBA32UI),at===s.BYTE&&(_t=s.RGBA8I),at===s.SHORT&&(_t=s.RGBA16I),at===s.INT&&(_t=s.RGBA32I)),A===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),A===s.RGBA){const Vt=Et?Pc:we.getTransfer(pt);at===s.FLOAT&&(_t=s.RGBA32F),at===s.HALF_FLOAT&&(_t=s.RGBA16F),at===s.UNSIGNED_BYTE&&(_t=Vt===Ge?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function w(N,A){let at;return N?A===null||A===br||A===Io?at=s.DEPTH24_STENCIL8:A===sa?at=s.DEPTH32F_STENCIL8:A===Fo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===br||A===Io?at=s.DEPTH_COMPONENT24:A===sa?at=s.DEPTH_COMPONENT32F:A===Fo&&(at=s.DEPTH_COMPONENT16),at}function k(N,A){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==bi&&N.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function B(N){const A=N.target;A.removeEventListener("dispose",B),X(A),A.isVideoTexture&&g.delete(A)}function z(N){const A=N.target;A.removeEventListener("dispose",z),R(A)}function X(N){const A=a.get(N);if(A.__webglInit===void 0)return;const at=N.source,pt=v.get(at);if(pt){const Et=pt[A.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(N),Object.keys(pt).length===0&&v.delete(at)}a.remove(N)}function D(N){const A=a.get(N);s.deleteTexture(A.__webglTexture);const at=N.source,pt=v.get(at);delete pt[A.__cacheKey],f.memory.textures--}function R(N){const A=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Et=0;Et<A.__webglFramebuffer[pt].length;Et++)s.deleteFramebuffer(A.__webglFramebuffer[pt][Et]);else s.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)s.deleteFramebuffer(A.__webglFramebuffer[pt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=N.textures;for(let pt=0,Et=at.length;pt<Et;pt++){const _t=a.get(at[pt]);_t.__webglTexture&&(s.deleteTexture(_t.__webglTexture),f.memory.textures--),a.remove(at[pt])}a.remove(N)}let G=0;function nt(){G=0}function $(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function ot(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function gt(N,A){const at=a.get(N);if(N.isVideoTexture&&Yt(N),N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){const pt=N.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(at,N,A);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function U(N,A){const at=a.get(N);if(N.version>0&&at.__version!==N.version){q(at,N,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function W(N,A){const at=a.get(N);if(N.version>0&&at.__version!==N.version){q(at,N,A);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function I(N,A){const at=a.get(N);if(N.version>0&&at.__version!==N.version){ct(at,N,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const ft={[nd]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[id]:s.MIRRORED_REPEAT},xt={[bi]:s.NEAREST,[iM]:s.NEAREST_MIPMAP_NEAREST,[rc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[ah]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},O={[lM]:s.NEVER,[pM]:s.ALWAYS,[cM]:s.LESS,[_0]:s.LEQUAL,[uM]:s.EQUAL,[dM]:s.GEQUAL,[fM]:s.GREATER,[hM]:s.NOTEQUAL};function J(N,A){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===ah||A.magFilter===rc||A.magFilter===Er||A.minFilter===Ni||A.minFilter===ah||A.minFilter===rc||A.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ft[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ft[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ft[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,xt[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,xt[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bi||A.minFilter!==rc&&A.minFilter!==Er||A.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function ht(N,A){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",B));const pt=A.source;let Et=v.get(pt);Et===void 0&&(Et={},v.set(pt,Et));const _t=ot(A);if(_t!==N.__cacheKey){Et[_t]===void 0&&(Et[_t]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),Et[_t].usedTimes++;const Vt=Et[N.__cacheKey];Vt!==void 0&&(Et[N.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(A)),N.__cacheKey=_t,N.__webglTexture=Et[_t].texture}return at}function q(N,A,at){let pt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=s.TEXTURE_3D);const Et=ht(N,A),_t=A.source;i.bindTexture(pt,N.__webglTexture,s.TEXTURE0+at);const Vt=a.get(_t);if(_t.version!==Vt.__version||Et===!0){i.activeTexture(s.TEXTURE0+at);const Ct=we.getPrimaries(we.workingColorSpace),Bt=A.colorSpace===Ga?null:we.getPrimaries(A.colorSpace),_e=A.colorSpace===Ga||Ct===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=T(A.image,!1,l.maxTextureSize);bt=Le(A,bt);const Ft=c.convert(A.format,A.colorSpace),Qt=c.convert(A.type);let kt=L(A.internalFormat,Ft,Qt,A.colorSpace,A.isVideoTexture);J(pt,A);let Ot;const ee=A.mipmaps,se=A.isVideoTexture!==!0,Pe=Vt.__version===void 0||Et===!0,j=_t.dataReady,wt=k(A,bt);if(A.isDepthTexture)kt=w(A.format===Go,A.type),Pe&&(se?i.texStorage2D(s.TEXTURE_2D,1,kt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Qt,null));else if(A.isDataTexture)if(ee.length>0){se&&Pe&&i.texStorage2D(s.TEXTURE_2D,wt,kt,ee[0].width,ee[0].height);for(let ut=0,yt=ee.length;ut<yt;ut++)Ot=ee[ut],se?j&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ft,Qt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,kt,Ot.width,Ot.height,0,Ft,Qt,Ot.data);A.generateMipmaps=!1}else se?(Pe&&i.texStorage2D(s.TEXTURE_2D,wt,kt,bt.width,bt.height),j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Qt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Qt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,kt,ee[0].width,ee[0].height,bt.depth);for(let ut=0,yt=ee.length;ut<yt;ut++)if(Ot=ee[ut],A.format!==Ti)if(Ft!==null)if(se){if(j)if(A.layerUpdates.size>0){const Rt=vv(Ot.width,Ot.height,A.format,A.type);for(const Dt of A.layerUpdates){const ne=Ot.data.subarray(Dt*Rt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Rt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Dt,Ot.width,Ot.height,1,Ft,ne)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,kt,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?j&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Qt,Ot.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,kt,Ot.width,Ot.height,bt.depth,0,Ft,Qt,Ot.data)}else{se&&Pe&&i.texStorage2D(s.TEXTURE_2D,wt,kt,ee[0].width,ee[0].height);for(let ut=0,yt=ee.length;ut<yt;ut++)Ot=ee[ut],A.format!==Ti?Ft!==null?se?j&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ft,Ot.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,kt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?j&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot.width,Ot.height,Ft,Qt,Ot.data):i.texImage2D(s.TEXTURE_2D,ut,kt,Ot.width,Ot.height,0,Ft,Qt,Ot.data)}else if(A.isDataArrayTexture)if(se){if(Pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,wt,kt,bt.width,bt.height,bt.depth),j)if(A.layerUpdates.size>0){const ut=vv(bt.width,bt.height,A.format,A.type);for(const yt of A.layerUpdates){const Rt=bt.data.subarray(yt*ut/bt.data.BYTES_PER_ELEMENT,(yt+1)*ut/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,bt.width,bt.height,1,Ft,Qt,Rt)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(A.isData3DTexture)se?(Pe&&i.texStorage3D(s.TEXTURE_3D,wt,kt,bt.width,bt.height,bt.depth),j&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,kt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(A.isFramebufferTexture){if(Pe)if(se)i.texStorage2D(s.TEXTURE_2D,wt,kt,bt.width,bt.height);else{let ut=bt.width,yt=bt.height;for(let Rt=0;Rt<wt;Rt++)i.texImage2D(s.TEXTURE_2D,Rt,kt,ut,yt,0,Ft,Qt,null),ut>>=1,yt>>=1}}else if(ee.length>0){if(se&&Pe){const ut=Xt(ee[0]);i.texStorage2D(s.TEXTURE_2D,wt,kt,ut.width,ut.height)}for(let ut=0,yt=ee.length;ut<yt;ut++)Ot=ee[ut],se?j&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ft,Qt,Ot):i.texImage2D(s.TEXTURE_2D,ut,kt,Ft,Qt,Ot);A.generateMipmaps=!1}else if(se){if(Pe){const ut=Xt(bt);i.texStorage2D(s.TEXTURE_2D,wt,kt,ut.width,ut.height)}j&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Qt,bt)}else i.texImage2D(s.TEXTURE_2D,0,kt,Ft,Qt,bt);M(A)&&y(pt),Vt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ct(N,A,at){if(A.image.length!==6)return;const pt=ht(N,A),Et=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+at);const _t=a.get(Et);if(Et.version!==_t.__version||pt===!0){i.activeTexture(s.TEXTURE0+at);const Vt=we.getPrimaries(we.workingColorSpace),Ct=A.colorSpace===Ga?null:we.getPrimaries(A.colorSpace),Bt=A.colorSpace===Ga||Vt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let yt=0;yt<6;yt++)!_e&&!bt?Ft[yt]=T(A.image[yt],!0,l.maxCubemapSize):Ft[yt]=bt?A.image[yt].image:A.image[yt],Ft[yt]=Le(A,Ft[yt]);const Qt=Ft[0],kt=c.convert(A.format,A.colorSpace),Ot=c.convert(A.type),ee=L(A.internalFormat,kt,Ot,A.colorSpace),se=A.isVideoTexture!==!0,Pe=_t.__version===void 0||pt===!0,j=Et.dataReady;let wt=k(A,Qt);J(s.TEXTURE_CUBE_MAP,A);let ut;if(_e){se&&Pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,ee,Qt.width,Qt.height);for(let yt=0;yt<6;yt++){ut=Ft[yt].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){const Dt=ut[Rt];A.format!==Ti?kt!==null?se?j&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,ee,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,0,0,Dt.width,Dt.height,kt,Ot,Dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt,ee,Dt.width,Dt.height,0,kt,Ot,Dt.data)}}}else{if(ut=A.mipmaps,se&&Pe){ut.length>0&&wt++;const yt=Xt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,wt,ee,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(bt){se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ft[yt].width,Ft[yt].height,kt,Ot,Ft[yt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,Ft[yt].width,Ft[yt].height,0,kt,Ot,Ft[yt].data);for(let Rt=0;Rt<ut.length;Rt++){const ne=ut[Rt].image[yt].image;se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,0,0,ne.width,ne.height,kt,Ot,ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,ee,ne.width,ne.height,0,kt,Ot,ne.data)}}else{se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,kt,Ot,Ft[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ee,kt,Ot,Ft[yt]);for(let Rt=0;Rt<ut.length;Rt++){const Dt=ut[Rt];se?j&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,0,0,kt,Ot,Dt.image[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Rt+1,ee,kt,Ot,Dt.image[yt])}}}M(A)&&y(s.TEXTURE_CUBE_MAP),_t.__version=Et.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function St(N,A,at,pt,Et,_t){const Vt=c.convert(at.format,at.colorSpace),Ct=c.convert(at.type),Bt=L(at.internalFormat,Vt,Ct,at.colorSpace),_e=a.get(A),bt=a.get(at);if(bt.__renderTarget=A,!_e.__hasExternalTextures){const Ft=Math.max(1,A.width>>_t),Qt=Math.max(1,A.height>>_t);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,_t,Bt,Ft,Qt,A.depth,0,Vt,Ct,null):i.texImage2D(Et,_t,Bt,Ft,Qt,0,Vt,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),ge(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,Et,bt.__webglTexture,0,he(A)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,Et,bt.__webglTexture,_t),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(N,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer){const pt=A.depthTexture,Et=pt&&pt.isDepthTexture?pt.type:null,_t=w(A.stencilBuffer,Et),Vt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=he(A);ge(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,_t,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,_t,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,N)}else{const pt=A.textures;for(let Et=0;Et<pt.length;Et++){const _t=pt[Et],Vt=c.convert(_t.format,_t.colorSpace),Ct=c.convert(_t.type),Bt=L(_t.internalFormat,Vt,Ct,_t.colorSpace),_e=he(A);at&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Bt,A.width,A.height):ge(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,Bt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),gt(A.depthTexture,0);const Et=pt.__webglTexture,_t=he(A);if(A.depthTexture.format===Ho)ge(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(A.depthTexture.format===Go)ge(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ht(N){const A=a.get(N),at=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const pt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const Et=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Et)};pt.addEventListener("dispose",Et),A.__depthDisposeCallback=Et}A.__boundDepthTexture=pt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Pt(A.__webglFramebuffer,N)}else if(at){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=s.createRenderbuffer(),Mt(A.__webglDepthbuffer[pt],N,!1);else{const Et=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=A.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,_t),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Mt(A.__webglDepthbuffer,N,!1);else{const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Et),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,Et)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(N,A,at){const pt=a.get(N);A!==void 0&&St(pt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&Ht(N)}function Ue(N){const A=N.texture,at=a.get(N),pt=a.get(A);N.addEventListener("dispose",z);const Et=N.textures,_t=N.isWebGLCubeRenderTarget===!0,Vt=Et.length>1;if(Vt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=A.version,f.memory.textures++),_t){at.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Ct]=[];for(let Bt=0;Bt<A.mipmaps.length;Bt++)at.__webglFramebuffer[Ct][Bt]=s.createFramebuffer()}else at.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)at.__webglFramebuffer[Ct]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const _e=a.get(Et[Ct]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&ge(N)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Et.length;Ct++){const Bt=Et[Ct];at.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Ct]);const _e=c.convert(Bt.format,Bt.colorSpace),bt=c.convert(Bt.type),Ft=L(Bt.internalFormat,_e,bt,Bt.colorSpace,N.isXRRenderTarget===!0),Qt=he(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Ft,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,at.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(at.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_t){i.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),J(s.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)St(at.__webglFramebuffer[Ct][Bt],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Bt);else St(at.__webglFramebuffer[Ct],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(A)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ct=0,Bt=Et.length;Ct<Bt;Ct++){const _e=Et[Ct],bt=a.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),J(s.TEXTURE_2D,_e),St(at.__webglFramebuffer,N,_e,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,0),M(_e)&&y(s.TEXTURE_2D)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),J(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let Bt=0;Bt<A.mipmaps.length;Bt++)St(at.__webglFramebuffer[Bt],N,A,s.COLOR_ATTACHMENT0,Ct,Bt);else St(at.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,Ct,0);M(A)&&y(Ct),i.unbindTexture()}N.depthBuffer&&Ht(N)}function be(N){const A=N.textures;for(let at=0,pt=A.length;at<pt;at++){const Et=A[at];if(M(Et)){const _t=P(N),Vt=a.get(Et).__webglTexture;i.bindTexture(_t,Vt),y(_t),i.unbindTexture()}}}const fe=[],H=[];function Tn(N){if(N.samples>0){if(ge(N)===!1){const A=N.textures,at=N.width,pt=N.height;let Et=s.COLOR_BUFFER_BIT;const _t=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=a.get(N),Ct=A.length>1;if(Ct)for(let Bt=0;Bt<A.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Bt=0;Bt<A.length;Bt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const _e=a.get(A[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,at,pt,0,0,at,pt,Et,s.NEAREST),p===!0&&(fe.length=0,H.length=0,fe.push(s.COLOR_ATTACHMENT0+Bt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(_t),H.push(_t),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Bt=0;Bt<A.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Bt]);const _e=a.get(A[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function he(N){return Math.min(l.maxSamples,N.samples)}function ge(N){const A=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Yt(N){const A=f.render.frame;g.get(N)!==A&&(g.set(N,A),N.update())}function Le(N,A){const at=N.colorSpace,pt=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Rs&&at!==Ga&&(we.getTransfer(at)===Ge?(pt!==Ti||Et!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Xt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=nt,this.setTexture2D=gt,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=I,this.rebindTextures=qt,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ge}function XA(s,t){function i(a,l=Ga){let c;const f=we.getTransfer(l);if(a===ca)return s.UNSIGNED_BYTE;if(a===Pd)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Bd)return s.UNSIGNED_SHORT_5_5_5_1;if(a===c0)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===o0)return s.BYTE;if(a===l0)return s.SHORT;if(a===Fo)return s.UNSIGNED_SHORT;if(a===zd)return s.INT;if(a===br)return s.UNSIGNED_INT;if(a===sa)return s.FLOAT;if(a===Vo)return s.HALF_FLOAT;if(a===u0)return s.ALPHA;if(a===f0)return s.RGB;if(a===Ti)return s.RGBA;if(a===h0)return s.LUMINANCE;if(a===d0)return s.LUMINANCE_ALPHA;if(a===Ho)return s.DEPTH_COMPONENT;if(a===Go)return s.DEPTH_STENCIL;if(a===p0)return s.RED;if(a===Fd)return s.RED_INTEGER;if(a===m0)return s.RG;if(a===Id)return s.RG_INTEGER;if(a===Hd)return s.RGBA_INTEGER;if(a===wc||a===Dc||a===Uc||a===Lc)if(f===Ge)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===wc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===wc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Dc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Uc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ad||a===rd||a===sd||a===od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ld||a===cd||a===ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ld||a===cd)return f===Ge?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ud)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===fd||a===hd||a===dd||a===pd||a===md||a===gd||a===_d||a===vd||a===yd||a===xd||a===Sd||a===Md||a===Ed||a===Td)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===fd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===hd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===dd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===pd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===gd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===_d)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===vd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===xd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Sd)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Md)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ed)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Td)return f===Ge?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Nc||a===bd||a===Ad)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===Nc)return f===Ge?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===bd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ad)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===g0||a===Rd||a===Cd||a===wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Nc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Rd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Cd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Io?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,a){if(this.texture===null){const l=new Wn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==a.depthNear||i.depthFar!==a.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,a=new qa({vertexShader:WA,fragmentShader:qA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ei(new Vc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jA extends Ds{constructor(t,i){super();const a=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,E=null;const T=new YA,M=i.getContextAttributes();let y=null,P=null;const L=[],w=[],k=new te;let B=null;const z=new di;z.viewport=new tn;const X=new di;X.viewport=new tn;const D=[z,X],R=new mE;let G=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ct=L[q];return ct===void 0&&(ct=new Ah,L[q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(q){let ct=L[q];return ct===void 0&&(ct=new Ah,L[q]=ct),ct.getGripSpace()},this.getHand=function(q){let ct=L[q];return ct===void 0&&(ct=new Ah,L[q]=ct),ct.getHandSpace()};function $(q){const ct=w.indexOf(q.inputSource);if(ct===-1)return;const St=L[ct];St!==void 0&&(St.update(q.inputSource,q.frame,m||f),St.dispatchEvent({type:q.type,data:q.inputSource}))}function ot(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",ot),l.removeEventListener("inputsourceschange",gt);for(let q=0;q<L.length;q++){const ct=w[q];ct!==null&&(w[q]=null,L[q].disconnect(ct))}G=null,nt=null,T.reset(),t.setRenderTarget(y),S=null,v=null,_=null,l=null,P=null,ht.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(k.width,k.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){h=q,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",ot),l.addEventListener("inputsourceschange",gt),M.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Mt=null,Pt=null;M.depth&&(Pt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=M.stencil?Go:Ho,Mt=M.stencil?Io:br);const Ht={colorFormat:i.RGBA8,depthFormat:Pt,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(Ht),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new Ar(v.textureWidth,v.textureHeight,{format:Ti,type:ca,depthTexture:new R0(v.textureWidth,v.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Ar(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),ht.setContext(l),ht.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function gt(q){for(let ct=0;ct<q.removed.length;ct++){const St=q.removed[ct],Mt=w.indexOf(St);Mt>=0&&(w[Mt]=null,L[Mt].disconnect(St))}for(let ct=0;ct<q.added.length;ct++){const St=q.added[ct];let Mt=w.indexOf(St);if(Mt===-1){for(let Ht=0;Ht<L.length;Ht++)if(Ht>=w.length){w.push(St),Mt=Ht;break}else if(w[Ht]===null){w[Ht]=St,Mt=Ht;break}if(Mt===-1)break}const Pt=L[Mt];Pt&&Pt.connect(St)}}const U=new Q,W=new Q;function I(q,ct,St){U.setFromMatrixPosition(ct.matrixWorld),W.setFromMatrixPosition(St.matrixWorld);const Mt=U.distanceTo(W),Pt=ct.projectionMatrix.elements,Ht=St.projectionMatrix.elements,qt=Pt[14]/(Pt[10]-1),Ue=Pt[14]/(Pt[10]+1),be=(Pt[9]+1)/Pt[5],fe=(Pt[9]-1)/Pt[5],H=(Pt[8]-1)/Pt[0],Tn=(Ht[8]+1)/Ht[0],he=qt*H,ge=qt*Tn,Yt=Mt/(-H+Tn),Le=Yt*-H;if(ct.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(Yt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pt[10]===-1)q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Xt=qt+Yt,N=Ue+Yt,A=he-Le,at=ge+(Mt-Le),pt=be*Ue/N*Xt,Et=fe*Ue/N*Xt;q.projectionMatrix.makePerspective(A,at,pt,Et,Xt,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ft(q,ct){ct===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ct.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let ct=q.near,St=q.far;T.texture!==null&&(T.depthNear>0&&(ct=T.depthNear),T.depthFar>0&&(St=T.depthFar)),R.near=X.near=z.near=ct,R.far=X.far=z.far=St,(G!==R.near||nt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,nt=R.far),z.layers.mask=q.layers.mask|2,X.layers.mask=q.layers.mask|4,R.layers.mask=z.layers.mask|X.layers.mask;const Mt=q.parent,Pt=R.cameras;ft(R,Mt);for(let Ht=0;Ht<Pt.length;Ht++)ft(Pt[Ht],Mt);Pt.length===2?I(R,z,X):R.projectionMatrix.copy(z.projectionMatrix),xt(q,R,Mt)};function xt(q,ct,St){St===null?q.matrix.copy(ct.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(ct.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Dd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(q){p=q,v!==null&&(v.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let O=null;function J(q,ct){if(g=ct.getViewerPose(m||f),E=ct,g!==null){const St=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let Mt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,Mt=!0);for(let qt=0;qt<St.length;qt++){const Ue=St[qt];let be=null;if(S!==null)be=S.getViewport(Ue);else{const H=_.getViewSubImage(v,Ue);be=H.viewport,qt===0&&(t.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(P))}let fe=D[qt];fe===void 0&&(fe=new di,fe.layers.enable(qt),fe.viewport=new tn,D[qt]=fe),fe.matrix.fromArray(Ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(be.x,be.y,be.width,be.height),qt===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Mt===!0&&R.cameras.push(fe)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const qt=_.getDepthInformation(St[0]);qt&&qt.isValid&&qt.texture&&T.init(t,qt,l.renderState)}}for(let St=0;St<L.length;St++){const Mt=w[St],Pt=L[St];Mt!==null&&Pt!==void 0&&Pt.update(Mt,ct,m||f)}O&&O(q,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),E=null}const ht=new N0;ht.setAnimationLoop(J),this.setAnimationLoop=function(q){O=q},this.dispose=function(){}}}const _r=new ua,ZA=new Ze;function KA(s,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,T0(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,P,L,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),T(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?p(M,y,P,L):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Xn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Xn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=t.get(y),L=P.envMap,w=P.envMapRotation;L&&(M.envMap.value=L,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(_r)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,P,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Xn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function T(M,y){const P=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function QA(s,t,i,a){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,L){const w=L.program;a.uniformBlockBinding(P,w)}function m(P,L){let w=l[P.id];w===void 0&&(E(P),w=g(P),l[P.id]=w,P.addEventListener("dispose",M));const k=L.program;a.updateUBOMapping(P,k);const B=t.render.frame;c[P.id]!==B&&(v(P),c[P.id]=B)}function g(P){const L=_();P.__bindingPointIndex=L;const w=s.createBuffer(),k=P.__size,B=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,k,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function _(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const L=l[P.id],w=P.uniforms,k=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let B=0,z=w.length;B<z;B++){const X=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,R=X.length;D<R;D++){const G=X[D];if(S(G,B,D,k)===!0){const nt=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let gt=0;gt<$.length;gt++){const U=$[gt],W=T(U);typeof U=="number"||typeof U=="boolean"?(G.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,nt+ot,G.__data)):U.isMatrix3?(G.__data[0]=U.elements[0],G.__data[1]=U.elements[1],G.__data[2]=U.elements[2],G.__data[3]=0,G.__data[4]=U.elements[3],G.__data[5]=U.elements[4],G.__data[6]=U.elements[5],G.__data[7]=0,G.__data[8]=U.elements[6],G.__data[9]=U.elements[7],G.__data[10]=U.elements[8],G.__data[11]=0):(U.toArray(G.__data,ot),ot+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,nt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,L,w,k){const B=P.value,z=L+"_"+w;if(k[z]===void 0)return typeof B=="number"||typeof B=="boolean"?k[z]=B:k[z]=B.clone(),!0;{const X=k[z];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return k[z]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function E(P){const L=P.uniforms;let w=0;const k=16;for(let z=0,X=L.length;z<X;z++){const D=Array.isArray(L[z])?L[z]:[L[z]];for(let R=0,G=D.length;R<G;R++){const nt=D[R],$=Array.isArray(nt.value)?nt.value:[nt.value];for(let ot=0,gt=$.length;ot<gt;ot++){const U=$[ot],W=T(U),I=w%k,ft=I%W.boundary,xt=I+ft;w+=ft,xt!==0&&k-xt<W.storage&&(w+=k-xt),nt.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=W.storage}}}const B=w%k;return B>0&&(w+=k-B),P.__size=w,P.__cache={},this}function T(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),L}function M(P){const L=P.target;L.removeEventListener("dispose",M);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const P in l)s.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:y}}class JA{constructor(t={}){const{canvas:i=gM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const P=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=hi;let B=0,z=0,X=null,D=-1,R=null;const G=new tn,nt=new tn;let $=null;const ot=new ze(0);let gt=0,U=i.width,W=i.height,I=1,ft=null,xt=null;const O=new tn(0,0,U,W),J=new tn(0,0,U,W);let ht=!1;const q=new kd;let ct=!1,St=!1;const Mt=new Ze,Pt=new Ze,Ht=new Q,qt=new tn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function fe(){return X===null?I:1}let H=a;function Tn(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Od}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",Rt,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),H===null){const Z="webgl2";if(H=Tn(Z,C),H===null)throw Tn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let he,ge,Yt,Le,Xt,N,A,at,pt,Et,_t,Vt,Ct,Bt,_e,bt,Ft,Qt,kt,Ot,ee,se,Pe,j;function wt(){he=new l1(H),he.init(),se=new XA(H,he),ge=new e1(H,he,t,se),Yt=new VA(H,he),ge.reverseDepthBuffer&&v&&Yt.buffers.depth.setReversed(!0),Le=new f1(H),Xt=new wA,N=new kA(H,he,Yt,Xt,ge,se,Le),A=new i1(w),at=new o1(w),pt=new _E(H),Pe=new $b(H,pt),Et=new c1(H,pt,Le,Pe),_t=new d1(H,Et,pt,Le),kt=new h1(H,ge,N),bt=new n1(Xt),Vt=new CA(w,A,at,he,ge,Pe,bt),Ct=new KA(w,Xt),Bt=new UA,_e=new BA(he),Qt=new Jb(w,A,at,Yt,_t,S,p),Ft=new HA(w,_t,ge),j=new QA(H,Le,ge,Yt),Ot=new t1(H,he,Le),ee=new u1(H,he,Le),Le.programs=Vt.programs,w.capabilities=ge,w.extensions=he,w.properties=Xt,w.renderLists=Bt,w.shadowMap=Ft,w.state=Yt,w.info=Le}wt();const ut=new jA(w,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(U,W,!1))},this.getSize=function(C){return C.set(U,W)},this.setSize=function(C,Z,rt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,W=Z,i.width=Math.floor(C*I),i.height=Math.floor(Z*I),rt===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(U*I,W*I).floor()},this.setDrawingBufferSize=function(C,Z,rt){U=C,W=Z,I=rt,i.width=Math.floor(C*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,Z,rt,st){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,Z,rt,st),Yt.viewport(G.copy(O).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,Z,rt,st){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,Z,rt,st),Yt.scissor(nt.copy(J).multiplyScalar(I).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){Yt.setScissorTest(ht=C)},this.setOpaqueSort=function(C){ft=C},this.setTransparentSort=function(C){xt=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,rt=!0){let st=0;if(C){let Y=!1;if(X!==null){const Tt=X.texture.format;Y=Tt===Hd||Tt===Id||Tt===Fd}if(Y){const Tt=X.texture.type,Ut=Tt===ca||Tt===br||Tt===Fo||Tt===Io||Tt===Pd||Tt===Bd,Nt=Qt.getClearColor(),zt=Qt.getClearAlpha(),ie=Nt.r,$t=Nt.g,jt=Nt.b;Ut?(E[0]=ie,E[1]=$t,E[2]=jt,E[3]=zt,H.clearBufferuiv(H.COLOR,0,E)):(T[0]=ie,T[1]=$t,T[2]=jt,T[3]=zt,H.clearBufferiv(H.COLOR,0,T))}else st|=H.COLOR_BUFFER_BIT}Z&&(st|=H.DEPTH_BUFFER_BIT),rt&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",Rt,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Qt.dispose(),Bt.dispose(),_e.dispose(),Xt.dispose(),A.dispose(),at.dispose(),_t.dispose(),Pe.dispose(),j.dispose(),Vt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ns),ut.removeEventListener("sessionend",Os),Ai.stop()};function yt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=Le.autoReset,Z=Ft.enabled,rt=Ft.autoUpdate,st=Ft.needsUpdate,Y=Ft.type;wt(),Le.autoReset=C,Ft.enabled=Z,Ft.autoUpdate=rt,Ft.needsUpdate=st,Ft.type=Y}function Dt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ne(C){const Z=C.target;Z.removeEventListener("dispose",ne),Ye(Z)}function Ye(C){cn(C),Xt.remove(C)}function cn(C){const Z=Xt.get(C).programs;Z!==void 0&&(Z.forEach(function(rt){Vt.releaseProgram(rt)}),C.isShaderMaterial&&Vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,rt,st,Y,Tt){Z===null&&(Z=Ue);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=Ps(C,Z,rt,st,Y);Yt.setMaterial(st,Ut);let zt=rt.index,ie=1;if(st.wireframe===!0){if(zt=Et.getWireframeAttribute(rt),zt===void 0)return;ie=2}const $t=rt.drawRange,jt=rt.attributes.position;let xe=$t.start*ie,Se=($t.start+$t.count)*ie;Tt!==null&&(xe=Math.max(xe,Tt.start*ie),Se=Math.min(Se,(Tt.start+Tt.count)*ie)),zt!==null?(xe=Math.max(xe,0),Se=Math.min(Se,zt.count)):jt!=null&&(xe=Math.max(xe,0),Se=Math.min(Se,jt.count));const ke=Se-xe;if(ke<0||ke===1/0)return;Pe.setup(Y,st,Nt,rt,zt);let Ae,ae=Ot;if(zt!==null&&(Ae=pt.get(zt),ae=ee,ae.setIndex(Ae)),Y.isMesh)st.wireframe===!0?(Yt.setLineWidth(st.wireframeLinewidth*fe()),ae.setMode(H.LINES)):ae.setMode(H.TRIANGLES);else if(Y.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*fe()),Y.isLineSegments?ae.setMode(H.LINES):Y.isLineLoop?ae.setMode(H.LINE_LOOP):ae.setMode(H.LINE_STRIP)}else Y.isPoints?ae.setMode(H.POINTS):Y.isSprite&&ae.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Oc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,un=Y._multiDrawCounts,Ee=Y._multiDrawCount,zn=zt?pt.get(zt).bytesPerElement:1,gi=Xt.get(st).currentProgram.getUniforms();for(let Un=0;Un<Ee;Un++)gi.setValue(H,"_gl_DrawID",Un),ae.render(Kt[Un]/zn,un[Un])}else if(Y.isInstancedMesh)ae.renderInstances(xe,ke,Y.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,un=Math.min(rt.instanceCount,Kt);ae.renderInstances(xe,ke,un)}else ae.render(xe,ke)};function Te(C,Z,rt){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Ke(C,Z,rt),C.side=Wa,C.needsUpdate=!0,Ke(C,Z,rt),C.side=Li):Ke(C,Z,rt)}this.compile=function(C,Z,rt=null){rt===null&&(rt=C),y=_e.get(rt),y.init(Z),L.push(y),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),C!==rt&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(Z.layers)&&(y.pushLight(Y),Y.castShadow&&y.pushShadow(Y))}),y.setupLights();const st=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Nt=Tt[Ut];Te(Nt,rt,Y),st.add(Nt)}else Te(Tt,rt,Y),st.add(Tt)}),y=L.pop(),st},this.compileAsync=function(C,Z,rt=null){const st=this.compile(C,Z,rt);return new Promise(Y=>{function Tt(){if(st.forEach(function(Ut){Xt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){Y(C);return}setTimeout(Tt,10)}he.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let _n=null;function pi(C){_n&&_n(C)}function Ns(){Ai.stop()}function Os(){Ai.start()}const Ai=new N0;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){_n=C,ut.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},ut.addEventListener("sessionstart",Ns),ut.addEventListener("sessionend",Os),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,Z,X),y=_e.get(C,L.length),y.init(Z),L.push(y),Pt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),q.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,St),M=Bt.get(C,P.length),M.init(),P.push(M),ut.enabled===!0&&ut.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&Ya(Tt,Z,-1/0,w.sortObjects)}Ya(C,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(ft,xt),be=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,be&&Qt.addToRenderList(M,C),this.info.render.frame++,ct===!0&&bt.beginShadows();const rt=y.state.shadowsArray;Ft.render(rt,C,Z),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Y=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Y.length>0)for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];zs(st,Y,C,zt)}be&&Qt.render(C);for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++){const zt=Tt[Ut];Rr(M,C,zt,zt.viewport)}}else Y.length>0&&zs(st,Y,C,Z),be&&Qt.render(C),Rr(M,C,Z);X!==null&&z===0&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),C.isScene===!0&&C.onAfterRender(w,C,Z),Pe.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(y=L[L.length-1],ct===!0&&bt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function Ya(C,Z,rt,st){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){st&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pt);const Ut=_t.update(C),Nt=C.material;Nt.visible&&M.push(C,Ut,Nt,rt,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ut=_t.update(C),Nt=C.material;if(st&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),qt.copy(Ut.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(Pt)),Array.isArray(Nt)){const zt=Ut.groups;for(let ie=0,$t=zt.length;ie<$t;ie++){const jt=zt[ie],xe=Nt[jt.materialIndex];xe&&xe.visible&&M.push(C,Ut,xe,rt,qt.z,jt)}}else Nt.visible&&M.push(C,Ut,Nt,rt,qt.z,null)}}const Tt=C.children;for(let Ut=0,Nt=Tt.length;Ut<Nt;Ut++)Ya(Tt[Ut],Z,rt,st)}function Rr(C,Z,rt,st){const Y=C.opaque,Tt=C.transmissive,Ut=C.transparent;y.setupLightsView(rt),ct===!0&&bt.setGlobalState(w.clippingPlanes,rt),st&&Yt.viewport(G.copy(st)),Y.length>0&&ja(Y,Z,rt),Tt.length>0&&ja(Tt,Z,rt),Ut.length>0&&ja(Ut,Z,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function zs(C,Z,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[st.id]===void 0&&(y.state.transmissionRenderTarget[st.id]=new Ar(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Vo:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[st.id],Ut=st.viewport||G;Tt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Nt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(ot),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),be&&Qt.render(rt);const zt=w.toneMapping;w.toneMapping=ka;const ie=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),y.setupLightsView(st),ct===!0&&bt.setGlobalState(w.clippingPlanes,st),ja(C,rt,st),N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt),he.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let jt=0,xe=Z.length;jt<xe;jt++){const Se=Z[jt],ke=Se.object,Ae=Se.geometry,ae=Se.material,Kt=Se.group;if(ae.side===Li&&ke.layers.test(st.layers)){const un=ae.side;ae.side=Xn,ae.needsUpdate=!0,mi(ke,rt,st,Ae,ae,Kt),ae.side=un,ae.needsUpdate=!0,$t=!0}}$t===!0&&(N.updateMultisampleRenderTarget(Tt),N.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Nt),w.setClearColor(ot,gt),ie!==void 0&&(st.viewport=ie),w.toneMapping=zt}function ja(C,Z,rt){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let Y=0,Tt=C.length;Y<Tt;Y++){const Ut=C[Y],Nt=Ut.object,zt=Ut.geometry,ie=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&st!==null&&($t=st),Nt.layers.test(rt.layers)&&mi(Nt,Z,rt,zt,$t,ie)}}function mi(C,Z,rt,st,Y,Tt){C.onBeforeRender(w,Z,rt,st,Y,Tt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(w,Z,rt,st,C,Tt),Y.transparent===!0&&Y.side===Li&&Y.forceSinglePass===!1?(Y.side=Xn,Y.needsUpdate=!0,w.renderBufferDirect(rt,Z,st,Y,C,Tt),Y.side=Wa,Y.needsUpdate=!0,w.renderBufferDirect(rt,Z,st,Y,C,Tt),Y.side=Li):w.renderBufferDirect(rt,Z,st,Y,C,Tt),C.onAfterRender(w,Z,rt,st,Y,Tt)}function Ke(C,Z,rt){Z.isScene!==!0&&(Z=Ue);const st=Xt.get(C),Y=y.state.lights,Tt=y.state.shadowsArray,Ut=Y.state.version,Nt=Vt.getParameters(C,Y.state,Tt,Z,rt),zt=Vt.getProgramCacheKey(Nt);let ie=st.programs;st.environment=C.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||st.environment),st.envMapRotation=st.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,ie===void 0&&(C.addEventListener("dispose",ne),ie=new Map,st.programs=ie);let $t=ie.get(zt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Ut)return Pi(C,Nt),$t}else Nt.uniforms=Vt.getUniforms(C),C.onBeforeCompile(Nt,w),$t=Vt.acquireProgram(Nt,zt),ie.set(zt,$t),st.uniforms=Nt.uniforms;const jt=st.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(jt.clippingPlanes=bt.uniform),Pi(C,Nt),st.needsLights=qc(C),st.lightsStateVersion=Ut,st.needsLights&&(jt.ambientLightColor.value=Y.state.ambient,jt.lightProbe.value=Y.state.probe,jt.directionalLights.value=Y.state.directional,jt.directionalLightShadows.value=Y.state.directionalShadow,jt.spotLights.value=Y.state.spot,jt.spotLightShadows.value=Y.state.spotShadow,jt.rectAreaLights.value=Y.state.rectArea,jt.ltc_1.value=Y.state.rectAreaLTC1,jt.ltc_2.value=Y.state.rectAreaLTC2,jt.pointLights.value=Y.state.point,jt.pointLightShadows.value=Y.state.pointShadow,jt.hemisphereLights.value=Y.state.hemi,jt.directionalShadowMap.value=Y.state.directionalShadowMap,jt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,jt.spotShadowMap.value=Y.state.spotShadowMap,jt.spotLightMatrix.value=Y.state.spotLightMatrix,jt.spotLightMap.value=Y.state.spotLightMap,jt.pointShadowMap.value=Y.state.pointShadowMap,jt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function vn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=zc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Pi(C,Z){const rt=Xt.get(C);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Ps(C,Z,rt,st,Y){Z.isScene!==!0&&(Z=Ue),N.resetTextureUnits();const Tt=Z.fog,Ut=st.isMeshStandardMaterial?Z.environment:null,Nt=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rs,zt=(st.isMeshStandardMaterial?at:A).get(st.envMap||Ut),ie=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!rt.morphAttributes.position,xe=!!rt.morphAttributes.normal,Se=!!rt.morphAttributes.color;let ke=ka;st.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ke=w.toneMapping);const Ae=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ae=Ae!==void 0?Ae.length:0,Kt=Xt.get(st),un=y.state.lights;if(ct===!0&&(St===!0||C!==R)){const Qe=C===R&&st.id===D;bt.setState(st,C,Qe)}let Ee=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==un.state.version||Kt.outputColorSpace!==Nt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==zt||st.fog===!0&&Kt.fog!==Tt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==ie||Kt.vertexTangents!==$t||Kt.morphTargets!==jt||Kt.morphNormals!==xe||Kt.morphColors!==Se||Kt.toneMapping!==ke||Kt.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Kt.__version=st.version);let zn=Kt.currentProgram;Ee===!0&&(zn=Ke(st,Z,Y));let gi=!1,Un=!1,pn=!1;const Be=zn.getUniforms(),Ln=Kt.uniforms;if(Yt.useProgram(zn.program)&&(gi=!0,Un=!0,pn=!0),st.id!==D&&(D=st.id,Un=!0),gi||R!==C){Yt.buffers.depth.getReversed()?(Mt.copy(C.projectionMatrix),vM(Mt),yM(Mt),Be.setValue(H,"projectionMatrix",Mt)):Be.setValue(H,"projectionMatrix",C.projectionMatrix),Be.setValue(H,"viewMatrix",C.matrixWorldInverse);const yn=Be.map.cameraPosition;yn!==void 0&&yn.setValue(H,Ht.setFromMatrixPosition(C.matrixWorld)),ge.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Un=!0,pn=!0)}if(Y.isSkinnedMesh){Be.setOptional(H,Y,"bindMatrix"),Be.setOptional(H,Y,"bindMatrixInverse");const Qe=Y.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Be.setValue(H,"boneTexture",Qe.boneTexture,N))}Y.isBatchedMesh&&(Be.setOptional(H,Y,"batchingTexture"),Be.setValue(H,"batchingTexture",Y._matricesTexture,N),Be.setOptional(H,Y,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",Y._indirectTexture,N),Be.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",Y._colorsTexture,N));const bn=rt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&kt.update(Y,rt,zn),(Un||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Be.setValue(H,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ln.envMap.value=zt,Ln.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(Ln.envMapIntensity.value=Z.environmentIntensity),Un&&(Be.setValue(H,"toneMappingExposure",w.toneMappingExposure),Kt.needsLights&&Wc(Ln,pn),Tt&&st.fog===!0&&Ct.refreshFogUniforms(Ln,Tt),Ct.refreshMaterialUniforms(Ln,st,I,W,y.state.transmissionRenderTarget[C.id]),zc.upload(H,vn(Kt),Ln,N)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(zc.upload(H,vn(Kt),Ln,N),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(H,"center",Y.center),Be.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(H,"normalMatrix",Y.normalMatrix),Be.setValue(H,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Qe=st.uniformsGroups;for(let yn=0,Cr=Qe.length;yn<Cr;yn++){const Pn=Qe[yn];j.update(Pn,zn),j.bind(Pn,zn)}}return zn}function Wc(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function qc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,Z,rt){const st=Xt.get(C);st.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Xt.get(C.texture).__webglTexture=Z,Xt.get(C.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const rt=Xt.get(C);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Zo=H.createFramebuffer();this.setRenderTarget=function(C,Z=0,rt=0){X=C,B=Z,z=rt;let st=!0,Y=null,Tt=!1,Ut=!1;if(C){const zt=Xt.get(C);if(zt.__useDefaultFramebuffer!==void 0)Yt.bindFramebuffer(H.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)N.setupRenderTarget(C);else if(zt.__hasExternalTextures)N.rebindTextures(C,Xt.get(C.texture).__webglTexture,Xt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const jt=C.depthTexture;if(zt.__boundDepthTexture!==jt){if(jt!==null&&Xt.has(jt)&&(C.width!==jt.image.width||C.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(C)}}const ie=C.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const $t=Xt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Z])?Y=$t[Z][rt]:Y=$t[Z],Tt=!0):C.samples>0&&N.useMultisampledRTT(C)===!1?Y=Xt.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[rt]:Y=$t,G.copy(C.viewport),nt.copy(C.scissor),$=C.scissorTest}else G.copy(O).multiplyScalar(I).floor(),nt.copy(J).multiplyScalar(I).floor(),$=ht;if(rt!==0&&(Y=Zo),Yt.bindFramebuffer(H.FRAMEBUFFER,Y)&&st&&Yt.drawBuffers(C,Y),Yt.viewport(G),Yt.scissor(nt),Yt.setScissorTest($),Tt){const zt=Xt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,rt)}else if(Ut){const zt=Xt.get(C.texture),ie=Z;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.__webglTexture,rt,ie)}else if(C!==null&&rt!==0){const zt=Xt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(C,Z,rt,st,Y,Tt,Ut){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Yt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const zt=C.texture,ie=zt.format,$t=zt.type;if(!ge.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-st&&rt>=0&&rt<=C.height-Y&&H.readPixels(Z,rt,st,Y,se.convert(ie),se.convert($t),Tt)}finally{const zt=X!==null?Xt.get(X).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,rt,st,Y,Tt,Ut){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Xt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(Z>=0&&Z<=C.width-st&&rt>=0&&rt<=C.height-Y){Yt.bindFramebuffer(H.FRAMEBUFFER,Nt);const zt=C.texture,ie=zt.format,$t=zt.type;if(!ge.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),H.readPixels(Z,rt,st,Y,se.convert(ie),se.convert($t),0);const xe=X!==null?Xt.get(X).__webglFramebuffer:null;Yt.bindFramebuffer(H.FRAMEBUFFER,xe);const Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _M(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,jt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(jt),H.deleteSync(Se),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,rt=0){const st=Math.pow(2,-rt),Y=Math.floor(C.image.width*st),Tt=Math.floor(C.image.height*st),Ut=Z!==null?Z.x:0,Nt=Z!==null?Z.y:0;N.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ut,Nt,Y,Tt),Yt.unbindTexture()};const Za=H.createFramebuffer(),Bs=H.createFramebuffer();this.copyTextureToTexture=function(C,Z,rt=null,st=null,Y=0,Tt=null){Tt===null&&(Y!==0?(Oc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Y,Y=0):Tt=0);let Ut,Nt,zt,ie,$t,jt,xe,Se,ke;const Ae=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(rt!==null)Ut=rt.max.x-rt.min.x,Nt=rt.max.y-rt.min.y,zt=rt.isBox3?rt.max.z-rt.min.z:1,ie=rt.min.x,$t=rt.min.y,jt=rt.isBox3?rt.min.z:0;else{const bn=Math.pow(2,-Y);Ut=Math.floor(Ae.width*bn),Nt=Math.floor(Ae.height*bn),C.isDataArrayTexture?zt=Ae.depth:C.isData3DTexture?zt=Math.floor(Ae.depth*bn):zt=1,ie=0,$t=0,jt=0}st!==null?(xe=st.x,Se=st.y,ke=st.z):(xe=0,Se=0,ke=0);const ae=se.convert(Z.format),Kt=se.convert(Z.type);let un;Z.isData3DTexture?(N.setTexture3D(Z,0),un=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),un=H.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),un=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),zn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Un=H.getParameter(H.UNPACK_SKIP_ROWS),pn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ae.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ie),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const Be=C.isDataArrayTexture||C.isData3DTexture,Ln=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const bn=Xt.get(C),Qe=Xt.get(Z),yn=Xt.get(bn.__renderTarget),Cr=Xt.get(Qe.__renderTarget);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let Pn=0;Pn<zt;Pn++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(C).__webglTexture,Y,jt+Pn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xt.get(Z).__webglTexture,Tt,ke+Pn)),H.blitFramebuffer(ie,$t,Ut,Nt,xe,Se,Ut,Nt,H.DEPTH_BUFFER_BIT,H.NEAREST);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||Xt.has(C)){const bn=Xt.get(C),Qe=Xt.get(Z);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,Za),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Bs);for(let yn=0;yn<zt;yn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,Y,jt+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,Y),Ln?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,Tt,ke+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,Tt),Y!==0?H.blitFramebuffer(ie,$t,Ut,Nt,xe,Se,Ut,Nt,H.COLOR_BUFFER_BIT,H.NEAREST):Ln?H.copyTexSubImage3D(un,Tt,xe,Se,ke+yn,ie,$t,Ut,Nt):H.copyTexSubImage2D(un,Tt,xe,Se,ie,$t,Ut,Nt);Yt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ln?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(un,Tt,xe,Se,ke,Ut,Nt,zt,ae,Kt,Ae.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(un,Tt,xe,Se,ke,Ut,Nt,zt,ae,Ae.data):H.texSubImage3D(un,Tt,xe,Se,ke,Ut,Nt,zt,ae,Kt,Ae):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,xe,Se,Ut,Nt,ae,Kt,Ae.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,xe,Se,Ae.width,Ae.height,ae,Ae.data):H.texSubImage2D(H.TEXTURE_2D,Tt,xe,Se,Ut,Nt,ae,Kt,Ae);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Un),H.pixelStorei(H.UNPACK_SKIP_IMAGES,pn),Tt===0&&Z.generateMipmaps&&H.generateMipmap(un),Yt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,rt=null,st=null,Y=0){return Oc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,rt,st,Y)},this.initRenderTarget=function(C){Xt.get(C).__webglFramebuffer===void 0&&N.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?N.setTextureCube(C,0):C.isData3DTexture?N.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?N.setTexture2DArray(C,0):N.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){B=0,z=0,X=null,Yt.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const $A={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},tR={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function F0(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function I0(s){return s.replace("'","").replace("2","")}function kv(s){return s.endsWith("'")&&!s.endsWith("2")}function eR(s){return s.endsWith("2")}const Xv=16777215,nR=.022;class iR{constructor(t){qe(this,"renderer");qe(this,"scene");qe(this,"camera");qe(this,"arrowGroup");qe(this,"traceGroup",null);qe(this,"currentMove",null);qe(this,"traceProgress",0);qe(this,"width",1);qe(this,"height",1);this.renderer=new JA({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new WM,this.camera=new di(45,1,.01,100),this.camera.position.set(0,0,3);const i=new pE(16777215,.9),a=new dE(16777215,.6);a.position.set(2,3,4),this.scene.add(i,a),this.arrowGroup=new Tr,this.scene.add(this.arrowGroup)}resize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.traceProgress=0,this.rebuildArrow(t))}tick(){this.currentMove&&(this.traceProgress+=nR,this.traceProgress>1.05&&(this.traceProgress=0),this.updateTrace())}render(t){if(!t||!this.currentMove){this.renderer.render(this.scene,this.camera);return}const i=new Tr,a=new Ze;a.set(t.rotationMatrix[0],t.rotationMatrix[1],t.rotationMatrix[2],0,t.rotationMatrix[3],t.rotationMatrix[4],t.rotationMatrix[5],0,t.rotationMatrix[6],t.rotationMatrix[7],t.rotationMatrix[8],0,0,0,0,1),i.setRotationFromMatrix(a);const l=t.size/this.width;i.position.set((t.translation[0]-this.width/2)*l,-(t.translation[1]-this.height/2)*l,t.translation[2]*l),i.scale.setScalar(l*2),this.arrowGroup.matrixAutoUpdate=!1,this.arrowGroup.matrix.copy(i.matrix),this.arrowGroup.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.clearArrow()}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=I0(t),a=new Q(...$A[i]),l=new Q(0,1,0);Math.abs(a.dot(l))>.9&&l.set(0,0,1);const c=new Q().crossVectors(l,a).normalize(),f=new Q().crossVectors(a,c).normalize(),h=a.clone().multiplyScalar(.52),p=new Tr;p.position.copy(h),p.userData={tangent:c,bitangent:f,move:t};const m=F0(t),g=.32,_=32,v=kv(t)?m:0,S=kv(t)?0:m,E=[];for(let M=0;M<=_;M++){const y=v+(S-v)*M/_,P=c.clone().multiplyScalar(Math.cos(y)*g).add(f.clone().multiplyScalar(Math.sin(y)*g));E.push(P)}p.userData.points=E,p.userData.segments=_;const T=new ei(new Yd(.34,.4,48),new Ic({color:Xv,transparent:!0,opacity:.35,side:Li,depthWrite:!1}));if(p.add(T),eR(t)){const M=T.clone();M.rotation.z=Math.PI,p.add(M)}this.traceGroup=p,this.arrowGroup.add(p),this.updateTrace()}updateTrace(){if(!this.traceGroup||!this.currentMove)return;const t=this.traceGroup.getObjectByName("trace");t&&(this.traceGroup.remove(t),Wv(t));const i=this.traceGroup.userData.points,a=this.traceGroup.userData.segments;if(!(i!=null&&i.length))return;const l=Math.max(2,Math.floor(a*this.traceProgress)),c=i.slice(0,l+1);if(c.length<2)return;const f=new w0(c),h=new jd(f,l,.028,8,!1),p=new Ic({color:Xv,transparent:!0,opacity:.88,depthTest:!0,depthWrite:!1}),m=new ei(h,p);m.name="trace",this.traceGroup.add(m);const g=c[c.length-1],_=c[c.length-2]??g,v=new Q().subVectors(g,_).normalize(),S=new ei(new qd(.065,.15,12),p.clone());S.name="trace",S.position.copy(g),S.quaternion.setFromUnitVectors(new Q(0,1,0),v),this.traceGroup.add(S)}clearArrow(){for(this.traceGroup=null;this.arrowGroup.children.length>0;){const t=this.arrowGroup.children[0];this.arrowGroup.remove(t),Wv(t)}}}function Wv(s){s.traverse(t=>{t instanceof ei&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function aR({pose:s,move:t,width:i,height:a,active:l}){const c=Wt.useRef(null),f=Wt.useRef(null);return Wt.useEffect(()=>{const h=c.current;if(!h)return;const p=new iR(h);return f.current=p,()=>{p.dispose(),f.current=null}},[]),Wt.useEffect(()=>{var h;(h=f.current)==null||h.resize(i,a)},[i,a]),Wt.useEffect(()=>{var h;(h=f.current)==null||h.setMove(t)},[t]),Wt.useEffect(()=>{if(!l)return;let h=0;const p=()=>{var m,g;(m=f.current)==null||m.tick(),(g=f.current)==null||g.render(s),h=requestAnimationFrame(p)};return h=requestAnimationFrame(p),()=>cancelAnimationFrame(h)},[s,l]),At.jsx("canvas",{ref:c,className:`ar-overlay${l?" active":""}`,"aria-hidden":"true"})}function rR({setVideoRef:s,onDimensions:t}){const i=Wt.useCallback(l=>{l.videoWidth&&l.videoHeight&&(t==null||t(l.videoWidth,l.videoHeight))},[t]),a=Wt.useCallback(l=>{s(l),l&&l.readyState>=1&&i(l)},[s,i]);return At.jsx("video",{ref:a,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:l=>i(l.currentTarget)})}const sR=.3,oR=.22;function Ls(s,t){const i=Math.min(s,t)*sR;return{x:(s-i)/2,y:(t-i)/2,size:i}}function H0(s){const t=s.size*oR;return{x:s.x+(s.size-t)/2,y:s.y+(s.size-t)/2,size:t}}function G0(s){const{x:t,y:i,size:a}=s;return[{x:t,y:i},{x:t+a,y:i},{x:t+a,y:i+a},{x:t,y:i+a}]}function lR(s,t,i){return s.map(a=>({x:a.x+t,y:a.y+i}))}const Xa=["R","O","Y","G","B","W"],cR={R:"Red",O:"Orange",Y:"Yellow",G:"Green",B:"Blue",W:"White"},Ld={R:"#ef4444",O:"#f97316",Y:"#facc15",G:"#22c55e",B:"#3b82f6",W:"#f5f5f5"},uR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};let ws={},Kd=!1;function Qd(){return Kd&&Xa.every(s=>ws[s])}function fR(){const s={...uR};for(const t of Xa)ws[t]&&(s[t]=ws[t]);return s}function qv(){ws={},Kd=!1}function hR(s,t){ws[s]=t,Xa.every(i=>ws[i])&&(Kd=!0)}function Fh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function dR(s,t,i){const a=Fh(s/255),l=Fh(t/255),c=Fh(i/255),f=a*.4124564+l*.3575761+c*.1804375,h=a*.2126729+l*.7151522+c*.072175,p=a*.0193339+l*.119192+c*.9503041,m=f/.95047>.008856?(f/.95047)**(1/3):7.787*(f/.95047)+16/116,g=h>.008856?h**(1/3):7.787*h+16/116,_=p/1.08883>.008856?(p/1.08883)**(1/3):7.787*(p/1.08883)+16/116;return[116*g-16,500*(m-g),200*(g-_)]}function Ih(s){if(s.length===0)return 0;const t=[...s].sort((a,l)=>a-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function pR(s,t,i){return Math.max(s,t,i)-Math.min(s,t,i)<28?"W":s>=t&&s>=i?t>s*.92?"O":"R":t>=s&&t>=i?"G":"B"}function mR(s,t,i,a){const l=Math.max(s,t,i);if(l<45)return!1;const c=(s+t+i)/3,f=l-Math.min(s,t,i);switch(a){case"W":return f<55&&c>95;case"Y":return s>75&&t>65&&c>80;case"R":return s>65&&s>=i;case"O":return s>70&&t>55&&s>=i-5;case"G":return t>45&&t>=s-12&&t>=i-5;case"B":return i>40&&i>=s-8&&i>=t-15;default:return!0}}function gR(s,t,i,a){if(a==="W")return Math.max(s,t,i)-Math.min(s,t,i)<60;if(a==="Y")return s>70&&t>60;const l=pR(s,t,i);return a==="O"?l==="O"||l==="R"||l==="Y":a==="R"?l==="R"||l==="O":l===a}function V0(s,t,i,a){const l=s.getContext("2d",{willReadFrequently:!0});if(!l)return null;const c=Ls(t,i),f=H0(c),h=Math.floor(f.x),p=Math.floor(f.y),m=Math.floor(f.size),g=Math.floor(f.size);if(m<=0||g<=0)return null;const _=l.getImageData(h,p,m,g).data,v=[],S=[],E=[],T=[],M=[],y=[];for(let R=0;R<_.length;R+=8){const G=_[R],nt=_[R+1],$=_[R+2];Math.max(G,nt,$)<40||(T.push(G),M.push(nt),y.push($),mR(G,nt,$,a)&&(v.push(G),S.push(nt),E.push($)))}const P=v.length>=4?v:T,L=v.length>=4?S:M,w=v.length>=4?E:y;if(P.length<4)return null;const k=Ih(P),B=Ih(L),z=Ih(w),X=dR(k,B,z),D=P.length;return{r:k,g:B,b:z,lab:X,ready:D>=6&&gR(k,B,z,a)}}function _R(s,t,i,a){const l=V0(s,t,i,a);return l!=null&&l.ready?(hR(a,l.lab),l):null}function k0(s,t){Wt.useEffect(()=>{if(!t)return;const i=a=>{var c;if(a.key!=="Enter"&&a.key!==" ")return;const l=(c=a.target)==null?void 0:c.tagName;l==="INPUT"||l==="TEXTAREA"||l==="BUTTON"||(a.preventDefault(),s())};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[s,t])}function Jd({rect:s}){const t=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none"}:void 0;return At.jsx("div",{className:"guide-frame-css",style:t})}function vR({rect:s,strokeColor:t="#ffffff"}){const i=s?{left:s.left,top:s.top,width:s.width,height:s.height,transform:"none",borderColor:t,boxShadow:`0 0 0 2px rgba(0, 0, 0, 0.35), 0 0 12px ${t}55`}:void 0;return At.jsx("div",{className:"guide-spot-css",style:i})}function yR({visible:s,stepIndex:t,sample:i,ready:a,error:l,onConfirm:c,guideRect:f,spotRect:h}){const p=Xa[t]??"R";return k0(c,s&&a),s?At.jsxs("div",{className:"color-learn-overlay","aria-live":"polite",children:[At.jsx(Jd,{rect:f}),At.jsx(vR,{rect:h,strokeColor:Ld[p]}),At.jsxs("div",{className:"color-learn-panel",children:[At.jsx("p",{className:"color-learn-target",style:{color:Ld[p]},children:cR[p]}),At.jsxs("p",{className:"color-learn-step",children:[t+1," / ",Xa.length]}),i&&At.jsx("div",{className:"color-learn-swatch",style:{background:`rgb(${i.r},${i.g},${i.b})`}}),At.jsx("button",{type:"button",className:"capture-button",disabled:!a,onClick:c,children:a?"Confirm":"Hold steady…"}),l&&At.jsx("p",{className:"color-learn-error",children:l})]})]}):null}function Yv(s,t,i,a){s.drawImage(t,0,0,i,a)}function xR(s){if(s.length!==9)return s;const t=[];for(let i=0;i<3;i++)for(let a=2;a>=0;a--)t.push(s[i*3+a]);return t}function X0(s){const t=new Map;for(const[i,a]of s)t.set(i,[...a]);return t}function W0({colors:s,cellClassName:t,variant:i="overlay",orientation:a="real"}){const l=t??(i==="mini"?"face-grid-mini-cell":"cell-grid-item"),c=a==="mirror"?xR(s):s;return At.jsx("div",{className:`face-color-grid face-color-grid--${i}`,children:c.map((f,h)=>At.jsx("span",{className:l,style:{background:Ld[f]}},h))})}const SR={searching:"…",detected:"OK",stabilizing:"…",captured:"✓",rotate:"Rotate"};function MR({feedback:s,visible:t,guideRect:i}){if(!t)return null;const a=s.cellColors.length===9;return At.jsxs("div",{className:"detection-overlay","aria-live":"polite",children:[At.jsx(Jd,{rect:i}),At.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[At.jsxs("div",{className:`detection-status ${s.status}`,children:[At.jsx("span",{className:"status-text",children:SR[s.status]}),s.status==="rotate"&&At.jsx("span",{className:"status-progress",children:"New face"}),s.status==="stabilizing"&&At.jsxs("span",{className:"status-progress",children:[s.stableProgress.toFixed(1),"/",s.stableTarget,"s"]})]}),a&&At.jsx(W0,{colors:s.cellColors,variant:"overlay",orientation:"mirror"})]})]})}function ER({phase:s,knownFaces:t,progress:i,needsNewFace:a=!1,needsClearerCenter:l=!1}){return s!=="liveScan"?null:At.jsxs("div",{className:"calibration-overlay live-scan-overlay",children:[At.jsx("div",{className:"calibration-bar",children:At.jsx("div",{className:"calibration-fill",style:{width:`${i*100}%`}})}),At.jsxs("p",{className:"calibration-sub",children:[t.length," / 6"]}),At.jsx("p",{className:"calibration-hint calibration-hint--muted",children:"Any face order · same tilt each time"}),a&&At.jsx("p",{className:"calibration-hint",children:"Show a different face"}),l&&!a&&At.jsx("p",{className:"calibration-hint",children:"Center the face color in the guide"})]})}const jv=["U","F","R","B","L","D"],TR={W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"};function Bo(s){return TR[s]??null}function bR({colors:s,label:t,empty:i=!1}){const a=s&&s.length===9;return At.jsxs("div",{className:`face-grid-mini ${i?"face-grid-mini--empty":""}`,children:[a?At.jsx(W0,{colors:s,variant:"mini",orientation:"real"}):At.jsx("div",{className:"face-color-grid face-color-grid--mini face-color-grid--placeholder",children:Array.from({length:9},(l,c)=>At.jsx("span",{className:"face-grid-mini-cell face-grid-mini-cell--placeholder"},c))}),At.jsx("span",{className:"face-grid-mini-label",children:t})]})}const AR={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function Hh({visible:s,scannedFaces:t}){if(!s)return null;const i=jv.filter(a=>t[a]).length;return At.jsxs("div",{className:"scanned-faces-bar","aria-live":"polite",children:[At.jsxs("p",{className:"scanned-faces-bar-title",children:["Scanned ",i,"/6"]}),At.jsx("div",{className:"scanned-faces-bar-grid",children:jv.map(a=>At.jsx(bR,{colors:t[a]??null,label:AR[a],empty:!t[a]},a))})]})}function Zv({message:s="Loading…",overlay:t=!1}){return At.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[At.jsx("div",{className:"loading-spinner"}),At.jsx("p",{children:s})]})}function RR({visible:s,feedback:t,guideRect:i,onStart:a}){const l=t.status==="detected"&&t.cellColors.length===9;return k0(a,s),s?At.jsxs("div",{className:"scan-ready-overlay","aria-live":"polite",children:[At.jsx(Jd,{rect:i}),At.jsxs("div",{className:"scan-ready-panel",children:[At.jsx("p",{className:"scan-ready-hint",children:l?"Cube detected":"Align cube in guide"}),At.jsx("button",{type:"button",className:"capture-button",onClick:a,children:"Start scan"})]})]}):null}function CR({phase:s,currentStep:t,totalSteps:i}){return s!=="solving"||i===0?null:At.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}function wR(s){const t=["U","R","F","D","L","B"];let i="";for(const a of t){const l=s.get(a);if(!l||l.length!==9)throw new Error(`Missing face data for ${a}`);for(const c of l)i+=DR(c)}return i}function DR(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function UR(s,t){const i=new Array(9).fill(0);for(let a=0;a<3;a++)for(let l=0;l<3;l++){let c=0;for(let f=0;f<3;f++)c+=s[a*3+f]*t[f*3+l];i[a*3+l]=c}return i}function Kv(){return[1,0,0,0,1,0,0,0,1]}function LR(s,t){const[i,a,l]=s,c=Math.hypot(i,a,l)||1,f=i/c,h=a/c,p=l/c,m=Math.cos(t),g=Math.sin(t),_=1-m;return[_*f*f+m,_*f*h-g*p,_*f*p+g*h,_*f*h+g*p,_*h*h+m,_*h*p-g*f,_*f*p-g*h,_*h*p+g*f,_*p*p+m]}function NR(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-Bs1WhrPI.js",import.meta.url),{type:"module"})}const q0=["R","O","Y","G","B","W"],OR={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function Y0(){return Qd()?fR():OR}function zR(s,t,i){const a=Gh(s/255),l=Gh(t/255),c=Gh(i/255);return[a*.4124564+l*.3575761+c*.1804375,a*.2126729+l*.7151522+c*.072175,a*.0193339+l*.119192+c*.9503041]}function Gh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function PR(s,t,i){const f=Vh(s/.95047),h=Vh(t/1),p=Vh(i/1.08883);return[116*h-16,500*(f-h),200*(h-p)]}function Vh(s){return s>.008856?s**(1/3):7.787*s+16/116}function j0(s,t,i){const[a,l,c]=zR(s,t,i);return PR(a,l,c)}function Z0(s,t){const i=s[0]-t[0],a=s[1]-t[1],l=s[2]-t[2];return Math.sqrt(i*i+a*a+l*l)}function BR(s,t,i){const a=s/255,l=t/255,c=i/255,f=Math.max(a,l,c),h=Math.min(a,l,c),p=f-h;let m=0;p>0&&(f===a?m=(l-c)/p%6:f===l?m=(c-a)/p+2:m=(a-l)/p+4,m*=60,m<0&&(m+=360));const g=f===0?0:p/f*255,_=f*255;return[m,g,_]}function Qv(s,t,i){const a=j0(s,t,i),l=Y0();let c="W",f=1/0;for(const h of q0){const p=Z0(a,l[h]);p<f&&(f=p,c=h)}return c}function K0(s,t,i){const a=Math.max(s,t,i),l=Math.min(s,t,i);return a<38||a<70&&a-l<22}function FR(s,t,i){const a=Math.max(s,t,i),l=Math.min(s,t,i),c=a-l,f=(s+t+i)/3;return a<125||c>42||i>s+22&&i>t+12||s>t+22&&s>i+22||t>s+18&&t>i+18?!1:f>145&&c<38}function IR(s,t,i,a){const l=j0(s,t,i);return 1/(1+Z0(l,Y0()[a]))}function kh(s,t,i){if(K0(s,t,i)||Qd())return Qv(s,t,i);const[a,l]=BR(s,t,i),c=l/255;if(FR(s,t,i))return"W";const f=new Map;for(const m of q0)f.set(m,IR(s,t,i,m));i>=s+14&&i>=t+10&&i>75&&f.set("B",(f.get("B")??0)+.55),s>=t+12&&s>=i+12&&s>85&&f.set("R",(f.get("R")??0)+.45),t>=s+10&&t>=i+10&&t>70&&f.set("G",(f.get("G")??0)+.45),s>95&&t>85&&i<Math.min(s,t)-18&&f.set("Y",(f.get("Y")??0)+.55),s>t+8&&t>i+5&&s>110&&a>=8&&a<42&&f.set("O",(f.get("O")??0)+.45),c>.18&&(a>=38&&a<=72&&f.set("Y",(f.get("Y")??0)+.25),a>=10&&a<38&&f.set("O",(f.get("O")??0)+.2),(a<=12||a>=345)&&f.set("R",(f.get("R")??0)+.2),a>=78&&a<=155&&f.set("G",(f.get("G")??0)+.2),a>=165&&a<=255&&f.set("B",(f.get("B")??0)+.3));let h="W",p=-1/0;for(const[m,g]of f)g>p&&(p=g,h=m);return h}function Xh(s){if(s.length===0)return 0;const t=[...s].sort((a,l)=>a-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}function HR(s,t){return s===1&&t===1?.12:(s===0||s===2)&&(t===0||t===2)?.32:.26}function GR(s,t,i){const a=Math.max(s,t,i)-Math.min(s,t,i);return a>52?.15:a>36?.55:1}function VR(s,t,i,a,l,c){const f=new Map,h=[],p=[],m=[],_=l-i>40?1:2;for(let T=Math.floor(a);T<Math.floor(c);T+=_)for(let M=Math.floor(i);M<Math.floor(l);M+=_){const y=(T*t+M)*4,P=s[y],L=s[y+1],w=s[y+2];if(K0(P,L,w))continue;h.push(P),p.push(L),m.push(w);const k=kh(P,L,w),B=GR(P,L,w);f.set(k,(f.get(k)??0)+B)}if(h.length===0){const T=Math.floor((i+l)/2),y=(Math.floor((a+c)/2)*t+T)*4;return kh(s[y],s[y+1],s[y+2])}const v=kh(Xh(h),Xh(p),Xh(m));f.set(v,(f.get(v)??0)+3);let S=v,E=0;for(const[T,M]of f)M>E&&(E=M,S=T);return S}function kR(s,t,i){const l=s.getImageData(0,0,t,i).data,c=[],f=t/3,h=i/3;for(let p=0;p<3;p++)for(let m=0;m<3;m++){const g=HR(p,m),_=m*f+f*g,v=m*f+f*(1-g),S=p*h+h*g,E=p*h+h*(1-g);c.push(VR(l,t,_,S,v,E))}return c}function Yo(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function XR(s){const t=Yo();for(const i of s)t[i]++;return t}function Q0(s){return!!(s&&s.length===9)}function WR(s){if(!Q0(s))return{valid:!1,colorCounts:Yo(),detectedCenter:null,uniqueColors:0};const t=XR(s),i=Object.values(t).filter(a=>a>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:i}}const qR={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"},jo=["W","Y","R","O","G","B"],Xc=9,YR={W:{W:0,Y:1,O:2,R:4,G:5,B:5},Y:{W:1,Y:0,O:2,R:5,G:5,B:5},R:{R:0,O:1,W:4,Y:5,G:5,B:5},O:{O:0,R:1,Y:2,W:2,G:5,B:5},G:{G:0,B:2,W:5,Y:5,R:5,O:5},B:{B:0,G:2,W:5,Y:5,R:5,O:5}};function $d(s){const t=Yo();for(const i of s.values())for(const a of i)t[a]++;return t}function jR(s,t){return YR[s][t]??6}function ZR(s){let t=null,i=0;for(const a of jo){const l=s[a]-Xc;l>i&&(i=l,t=a)}return t}function KR(s){let t=null,i=0;for(const a of jo){const l=Xc-s[a];l>i&&(i=l,t=a)}return t}function J0(s){return jo.every(t=>s[t]===Xc)}function QR(s){const t=new Map;for(const[a,l]of s){const c=[...l];c[4]=qR[a],t.set(a,c)}const i=[];for(const[a,l]of t)for(let c=0;c<9;c++)c!==4&&i.push({faceId:a,index:c,color:l[c]});for(let a=0;a<256;a++){const l=$d(t);if(J0(l))break;const c=ZR(l),f=KR(l);if(!c||!f)break;let h=null,p=1/0;for(const m of i){if(m.color!==c)continue;const g=jR(c,f);g<p&&(p=g,h=m)}if(!h){const m=i.find(g=>g.color===c);if(!m)break;h=m}h.color=f,t.get(h.faceId)[h.index]=f}return t}function JR(s){const t=$d(s),i=Yo();for(const a of jo)i[a]=t[a]-Xc;return i}function Jv(s){return J0($d(s))}function $R(s){const t=JR(s),i={W:"W",Y:"Y",R:"R",O:"O",G:"G",B:"B"},a=jo.filter(l=>t[l]!==0).map(l=>{const c=t[l];return`${i[l]}${c>0?`+${c}`:c}`});return a.length>0?a.join(", "):""}const xs=256;function $0(s,t){const i=document.createElement("canvas");i.width=xs,i.height=xs;const a=i.getContext("2d",{willReadFrequently:!0});return a?(a.drawImage(s,t.x,t.y,t.size,t.size,0,0,xs,xs),kR(a,xs,xs)):[]}function ty(s,t){const i=s.getContext("2d",{willReadFrequently:!0});if(!i)return 0;const{x:a,y:l,size:c}=t,f=i.getImageData(Math.floor(a),Math.floor(l),Math.floor(c),Math.floor(c)).data;let h=0,p=0,m=0;for(let _=0;_<f.length;_+=32){const v=(f[_]+f[_+1]+f[_+2])/3;h+=v,p+=v*v,m++}if(m===0)return 0;const g=h/m;return p/m-g*g}function ey(s,t){if(s.length!==9)return!1;const i=new Set(s),a=s.filter(l=>l!=="W").length;return t<120?!1:i.size===1?!0:i.size===2&&a<=3&&t<300?!1:i.size>=3&&a>=2||i.size>=2&&a>=4&&t>220}const fi=.5,tC=[[-fi,fi,fi],[fi,fi,fi],[fi,-fi,fi],[-fi,-fi,fi]];function eC(s){if(s.length<4)return null;const t=[...s].sort((l,c)=>l.y-c.y),i=t.slice(0,2).sort((l,c)=>l.x-c.x),a=t.slice(2,4).sort((l,c)=>l.x-c.x);return[i[0],i[1],a[1],a[0]]}function ny(s,t,i){try{return iC(s,t,i)}catch{return nC(s,t)}}function nC(s,t,i){const a={x:s.reduce((c,f)=>c+f.x,0)/4,y:s.reduce((c,f)=>c+f.y,0)/4},l=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return{corners:s,center:a,size:l,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[a.x-t/2,a.y,l*3],confidence:.65}}function iC(s,t,i){const a=window.cv,l=t*.9,c=t*.9,f=t/2,h=i/2,p=a.matFromArray(4,1,a.CV_32FC1,tC.flat()),m=a.matFromArray(4,1,a.CV_32FC1,[s[0].x,s[0].y,s[1].x,s[1].y,s[2].x,s[2].y,s[3].x,s[3].y]),g=a.matFromArray(3,3,a.CV_32FC1,[l,0,f,0,c,h,0,0,1]),_=a.matFromArray(4,1,a.CV_32FC1,[0,0,0,0]),v=new a.Mat,S=new a.Mat,E=new a.Mat;a.solvePnP(p,m,g,_,v,S),a.Rodrigues(v,E);const T=[];for(let L=0;L<9;L++)T.push(E.data32F[L]??E.floatAt(Math.floor(L/3),L%3));const M=[S.data32F[0]??S.floatAt(0,0),S.data32F[1]??S.floatAt(1,0),S.data32F[2]??S.floatAt(2,0)],y={x:s.reduce((L,w)=>L+w.x,0)/4,y:s.reduce((L,w)=>L+w.y,0)/4},P=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return p.delete(),m.delete(),g.delete(),_.delete(),v.delete(),S.delete(),E.delete(),{corners:s,center:y,size:P,rotationMatrix:T,translation:M,confidence:.8}}function aC(s){const t=(l,c)=>Math.hypot(l.x-c.x,l.y-c.y),i=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],a=i.reduce((l,c)=>l+c,0)/4;return a<1?!1:i.every(l=>Math.abs(l-a)/a<.55)}function rC(s,t,i,a){const l=i*a;let c=null,f=0;for(let h=0;h<s.size();h++){const p=s.get(h),m=t.contourArea(p);if(m<l*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const _ of[.02,.035,.05,.08]){const v=new t.Mat;if(t.approxPolyDP(p,v,_*g,!0),v.rows===4){const S=[];for(let T=0;T<4;T++)S.push({x:v.data32S[T*2],y:v.data32S[T*2+1]});const E=eC(S);E&&aC(E)&&m>f&&(f=m,c=E)}v.delete()}p.delete()}return c}function $v(s,t,i){var a;if(!((a=window.cv)!=null&&a.Mat))return null;try{const l=window.cv,c=l.imread(s),f=new l.Mat,h=new l.Mat,p=new l.Mat,m=new l.Mat,g=new l.MatVector,_=new l.Mat;l.cvtColor(c,f,l.COLOR_RGBA2RGB),l.cvtColor(f,h,l.COLOR_RGB2GRAY),l.GaussianBlur(h,p,new l.Size(5,5),0),l.Canny(p,m,20,80),l.findContours(m,g,_,l.RETR_LIST,l.CHAIN_APPROX_SIMPLE);const v=rC(g,l,t,i);return c.delete(),f.delete(),h.delete(),p.delete(),m.delete(),g.delete(),_.delete(),v}catch{return null}}function sC(s,t,i){const a=Ls(t,i),l=$0(s,a),c=ty(s,a);return ey(l,c)?{corners:G0(a),colors:l}:null}function iy(s,t,i){const a=Ls(t,i),l=document.createElement("canvas");l.width=a.size,l.height=a.size;const c=l.getContext("2d");if(c){c.drawImage(s,a.x,a.y,a.size,a.size,0,0,a.size,a.size);const p=$v(l,a.size,a.size);if(p)return lR(p,a.x,a.y)}const f=$v(s,t,i);if(f)return f;const h=sC(s,t,i);return(h==null?void 0:h.corners)??null}function t0(s,t,i){const a=Ls(t,i),l=$0(s,a),c=ty(s,a);if(!ey(l,c))return null;const f=iy(s,t,i),h=ny(f??G0(a),t,i);return h.confidence=f?.85:.7,{colors:l,pose:h}}function oC(s){const t=window.cv,i=t.imread(s),a=new t.Mat;return t.cvtColor(i,a,t.COLOR_RGBA2GRAY),i.delete(),a}const e0=45;class lC{constructor(){qe(this,"prevGray",null);qe(this,"trackedCorners",null);qe(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const a=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const l=a.matFromArray(4,1,a.CV_32FC2,cC(this.trackedCorners)),c=new a.Mat,f=new a.Mat,h=new a.Mat;a.calcOpticalFlowPyrLK(this.prevGray,t,l,c,f,h);const p=[];let m=0;for(let _=0;_<4;_++){const v=f.data[_]===1,S=c.data32F[_*2],E=c.data32F[_*2+1];v&&Number.isFinite(S)&&Number.isFinite(E)?(p.push({x:S,y:E}),m++):p.push(this.trackedCorners[_])}return l.delete(),c.delete(),f.delete(),h.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>e0?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames++,this.lostFrames>e0?(this.reset(),null):this.trackedCorners)}}function cC(s){return s.flatMap(t=>[t.x,t.y])}const uC=.65,fC=4;class hC{constructor(){qe(this,"state",{lastMatrix:Kv(),stableCount:0,pendingMove:null});qe(this,"initialized",!1)}reset(){this.state={lastMatrix:Kv(),stableCount:0,pendingMove:null},this.initialized=!1}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,null;const i=UR(dC(t),this.state.lastMatrix),a=mC(i);if(a)if(this.state.pendingMove===a){if(this.state.stableCount++,this.state.stableCount>=fC)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,a}else this.state.pendingMove=a,this.state.stableCount=1;else this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=pC(this.state.lastMatrix,t,.15);return null}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.initialized=!0}}function dC(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function pC(s,t,i){return s.map((a,l)=>a*(1-i)+t[l]*i)}function mC(s){const t=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];let i=null,a=uC;for(const l of t){const c=I0(l);let f=tR[c];(c==="L"||c==="D"||c==="B")&&(f=[-f[0],-f[1],-f[2]]);const h=LR(f,F0(l)),p=gC(s,h);p>a&&(a=p,i=l)}return i}function gC(s,t){let i=0;for(let a=0;a<9;a++)i+=1-Math.abs(s[a]-t[a])/2;return i/9}class _C{constructor(){qe(this,"rotationDetector",new hC);qe(this,"flowTracker",new lC);qe(this,"trackingEnabled",!1);qe(this,"processCanvas");qe(this,"processCtx");qe(this,"lastColors",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.lastColors=null}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const i=t.videoWidth,a=t.videoHeight;return!i||!a?!1:(this.processCanvas.width=i,this.processCanvas.height=a,Yv(this.processCtx,t,i,a),!0)}getColorLearnSample(t,i,a){return V0(this.processCanvas,t,i,a)}process(t){const i=t.videoWidth,a=t.videoHeight;if(!i||!a)return{pose:null,detectedFace:null,rotationMove:null};this.processCanvas.width=i,this.processCanvas.height=a,Yv(this.processCtx,t,i,a);try{return this.trackingEnabled?this.processWithTracking(i,a):this.processDetectionOnly(i,a)}catch{return{pose:null,detectedFace:null,rotationMove:null}}}processDetectionOnly(t,i){const a=t0(this.processCanvas,t,i);return a?(this.lastColors=a.colors,{pose:a.pose,detectedFace:a,rotationMove:null}):{pose:null,detectedFace:null,rotationMove:null}}processWithTracking(t,i){const a=iy(this.processCanvas,t,i),l=oC(this.processCanvas),c=this.flowTracker.update(l,a);if(l.delete(),!c)return{pose:null,detectedFace:null,rotationMove:null};let f=this.lastColors;if(a){const g=t0(this.processCanvas,t,i);g&&(f=g.colors,this.lastColors=f)}const h=ny(c,t,i);h.confidence=a?.85:Math.max(.35,.85-this.flowTracker.getLostFrames()*.01);const p=f?{colors:f,pose:h}:null,m=this.rotationDetector.update(h.rotationMatrix);return{pose:h,detectedFace:p,rotationMove:m}}readStableFace(t,i=5){const a=[];let l=null;for(let f=0;f<i;f++){const h=this.process(t);if(!h.detectedFace)return null;a.push(h.detectedFace.colors),l=h.detectedFace.pose}return l?{colors:vC(a),pose:l}:null}}function vC(s){const t=[];for(let i=0;i<9;i++){const a=new Map;for(const f of s){const h=f[i];a.set(h,(a.get(h)??0)+1)}let l="W",c=0;for(const[f,h]of a)h>c&&(c=h,l=f);t.push(l)}return t}const yC=[0,1,2,3,5,6,7,8],Rc=2e3,xC=10,SC=7,MC=6;function EC(s,t){let i=0;for(const a of yC)s[a]===t[a]&&i++;return i}function TC(s,t){let i=0;for(let a=0;a<9;a++)s[a]===t[a]&&i++;return i}function bC(s,t){return EC(s,t)>=SC}function ay(s,t){for(const[i,a]of t)if(bC(s,a))return i;return null}function AC(s){const t=[];for(let i=0;i<9;i++){const a=new Map;for(const f of s){const h=f[i];a.set(h,(a.get(h)??0)+1)}let l="W",c=0;for(const[f,h]of a)h>c&&(c=h,l=f);t.push(l)}return t}function RC(s){if(s.length===0)return null;const t=new Map;for(const l of s){const c=l[4];t.set(c,(t.get(c)??0)+1)}let i=null,a=0;for(const[l,c]of t)c>a&&(a=c,i=l);return i}function CC(s,t,i){if(ay(s,t))return null;for(const a of[RC(i),s[4]]){if(!a)continue;const l=Bo(a);if(l&&!t.has(l))return l}return null}function n0(s){if(s.size!==6)return s;const t=new Map,i=new Set,a=[...s.entries()].sort((l,c)=>{const f=Bo(l[1][4])===l[0]?0:1,h=Bo(c[1][4])===c[0]?0:1;return f-h});for(const[,l]of a){const c=Bo(l[4]);c&&!i.has(c)&&(t.set(c,[...l]),i.add(c))}return t.size===6?t:s}class wC{constructor(){qe(this,"faces",new Map);qe(this,"pendingReadings",[]);qe(this,"stableSinceMs",null);qe(this,"stabilityAnchor",null)}reset(){this.faces.clear(),this.pendingReadings=[],this.stableSinceMs=null,this.stabilityAnchor=null}update(t,i=Date.now()){const a=Rc/1e3,l={faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:null,stableProgress:0,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:null,needsNewFace:!1,needsClearerCenter:!1};if(!t||t.length!==9)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],l;const c=Bo(t[4]),f=ay(t,this.faces);if(f)return this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[],{...l,currentFace:f,needsNewFace:!0};!this.stabilityAnchor||TC(t,this.stabilityAnchor)<MC?(this.stabilityAnchor=[...t],this.stableSinceMs=i,this.pendingReadings=[]):this.stableSinceMs===null&&(this.stableSinceMs=i);const h=this.stableSinceMs!==null?i-this.stableSinceMs:0,p=Math.min(h,Rc)/1e3;let m=null,g=!1;if(h>=Rc){const _=[...this.pendingReadings,[...t]];_.length>xC&&_.shift(),this.pendingReadings=_;const v=AC(_),S=CC(v,this.faces,_);if(S){const E=!this.faces.has(S);this.faces.set(S,[...v]),E&&(m=S),this.stableSinceMs=null,this.stabilityAnchor=null,this.pendingReadings=[]}else g=!0,this.stableSinceMs=i-Rc+400}return{faces:this.faces,knownFaces:[...this.faces.keys()],currentFace:c,stableProgress:Math.round(p*10)/10,stableTarget:a,isComplete:this.faces.size===6,newlyCaptured:m,needsNewFace:!1,needsClearerCenter:g}}}const DC="https://docs.opencv.org/4.9.0/opencv.js";let Cc=null;function UC(){return Cc||(Cc=new Promise((s,t)=>{var a;if((a=window.cv)!=null&&a.Mat){s();return}const i=document.createElement("script");i.src=DC,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},i.onerror=()=>t(new Error("Failed to load OpenCV.js")),document.head.appendChild(i)}),Cc)}function i0(s){return Object.fromEntries(X0(s))}const Oo={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:Yo(),cellColors:[]},LC={phase:"loading",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,solution:null,currentPose:null,solverReady:!1,detectionFeedback:Oo,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,liveScanNeedsClearerCenter:!1};function NC(s){const[t,i]=Wt.useState(LC),a=Wt.useRef(null),l=Wt.useRef(null),c=Wt.useRef(new wC),f=Wt.useRef(""),h=Wt.useRef(0),p=Wt.useRef(0),m=Wt.useRef("loading"),g=Wt.useRef(0),_=Wt.useRef(null),v=Wt.useRef(0),S=Wt.useRef(null),E=Wt.useRef(null),T=Wt.useRef(!1),M=Wt.useCallback(()=>{S.current&&(clearTimeout(S.current),S.current=null)},[]),y=Wt.useCallback((U,W,I,ft)=>{var J;const xt=l.current;if(!xt){i(ht=>({...ht,phase:"error",error:"Solver failed to start. Refresh the page and try again."}));return}M();const O=++p.current;xt.postMessage({type:"solve",facelet:U,scannedFaces:Object.fromEntries(I),captures:ft,id:O}),(J=a.current)==null||J.syncPose(W),S.current=setTimeout(()=>{i(ht=>ht.phase!=="computing"?ht:{...ht,phase:"error",error:"Solve timed out. Scan order and direction do not matter — try again in steady light."})},6e4)},[M]);Wt.useEffect(()=>{m.current=t.phase,_.current=t.solution,g.current=t.colorLearnIndex},[t.phase,t.solution,t.colorLearnIndex]);const P=Wt.useCallback(U=>{var I;const W=++p.current;(I=l.current)==null||I.postMessage({type:"apply",move:U,facelet:f.current,id:W}),i(ft=>{if(!ft.solution)return ft;const xt=ft.solution.moves[ft.solution.currentIndex];if(U!==xt)return ft;const O=ft.solution.currentIndex+1;return O>=ft.solution.moves.length?{...ft,phase:"solved",solution:{...ft.solution,currentIndex:O}}:{...ft,solution:{...ft.solution,currentIndex:O}}})},[]),L=Wt.useCallback((U,W,I,ft,xt,O)=>{const{detectedCenter:J,colorCounts:ht}=WR(W),q=Q0(W);let ct="searching";return!U||!q?ct="searching":O?ct="rotate":xt?ct="captured":I>0&&I<ft?ct="stabilizing":ct="detected",{status:ct,stableProgress:I,stableTarget:ft,detectedCenter:J,colorCounts:ht,cellColors:q&&W?[...W]:[]}},[]),w=Wt.useCallback(()=>{var U;c.current.reset(),T.current=!1,E.current=null,i(W=>({...W,phase:"scanReady",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Oo,liveScanNeedsClearerCenter:!1})),(U=a.current)==null||U.disableTracking()},[]),k=Wt.useCallback(()=>{var U;c.current.reset(),T.current=!1,E.current=null,i(W=>({...W,phase:"liveScan",error:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,detectionFeedback:Oo,liveScanNeedsClearerCenter:!1})),(U=a.current)==null||U.disableTracking()},[]),B=Wt.useCallback(async()=>{try{await UC(),a.current=new _C;const U=NR();l.current=U,U.onmessage=W=>{var ft;const I=W.data;if(I.type==="ready")i(xt=>({...xt,solverReady:!0}));else if(I.type==="solution"){if(I.id!==p.current)return;M(),f.current=I.facelet,v.current=Date.now(),i(xt=>({...xt,phase:I.moves.length===0?"solved":"solving",solution:{moves:I.moves,currentIndex:0},detectionFeedback:Oo})),I.moves.length>0&&((ft=a.current)==null||ft.enableTracking())}else if(I.type==="facelet"){if(I.id!==p.current)return;f.current=I.facelet}else if(I.type==="error"){if(I.id!==void 0&&I.id!==p.current)return;M(),T.current=!1,i(xt=>({...xt,phase:"error",error:I.message}))}},U.onerror=()=>{M(),i(W=>({...W,phase:"error",error:"Solver failed to load. Refresh the page and try again."}))},U.postMessage({type:"init"}),qv(),c.current.reset(),i(W=>({...W,phase:"colorLearn",colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1}))}catch(U){i(W=>({...W,phase:"error",error:U instanceof Error?U.message:"Init failed"}))}},[M]);Wt.useEffect(()=>(B(),()=>{var U,W;cancelAnimationFrame(h.current),M(),(U=l.current)==null||U.terminate(),(W=a.current)==null||W.disableTracking()}),[B,M]);const z=Wt.useCallback(()=>{const U=s.current,W=a.current;if(!U||!W||U.readyState<2||!W.captureFrame(U))return;const I=g.current,ft=Xa[I];if(!ft)return;const xt=W.getFrameCanvas();if(!_R(xt,U.videoWidth,U.videoHeight,ft)){i(ht=>({...ht,colorLearnError:`Could not read ${ft}. Center the sticker in the circle.`}));return}const J=I+1;if(J>=Xa.length){w(),i(ht=>({...ht,colorsCalibrated:!0,colorLearnError:null}));return}i(ht=>({...ht,colorLearnIndex:J,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null}))},[s,w]),X=Wt.useCallback(()=>{k()},[k]),D=Wt.useCallback(()=>{var xt,O;const U=s.current,W=a.current;if(!U||!W||U.readyState<2)return;const I=W.process(U),ft=m.current;if(ft==="colorLearn"){W.captureFrame(U);const J=Xa[g.current];if(J){const ht=W.getColorLearnSample(U.videoWidth,U.videoHeight,J);i(q=>({...q,colorLearnSample:ht,colorLearnReady:(ht==null?void 0:ht.ready)??!1,colorLearnError:null}))}return}if(ft==="scanReady"){const J=((xt=I.detectedFace)==null?void 0:xt.colors)??null,ht=!!I.pose;i(q=>({...q,detectionFeedback:L(ht,J,0,0,!1,!1)}));return}if(ft==="liveScan"){if(!Qd()){i(St=>({...St,phase:"colorLearn",colorsCalibrated:!1,colorLearnIndex:0}));return}const J=((O=I.detectedFace)==null?void 0:O.colors)??null,ht=!!I.pose;I.pose&&(E.current=I.pose);const q=c.current.update(J),ct=!!q.newlyCaptured;if(q.isComplete&&E.current&&!T.current){T.current=!0;const St=n0(X0(q.faces)),Mt=i0(St),Pt=[...St.values()].map(Ht=>[...Ht]);try{let Ht=St;if(!Jv(Ht)&&(Ht=QR(St),!Jv(Ht))){const be=$R(St);i(fe=>({...fe,phase:"error",scannedFaceColors:Mt,error:be?`Color mismatch (${be}). Re-learn colors or re-scan.`:"Color mismatch. Scan all 6 unique faces."}));return}const qt=wR(Ht),Ue=E.current;i(be=>({...be,phase:"computing",knownFaces:q.knownFaces,scannedFaceColors:Mt,liveScanProgress:1,currentPose:Ue})),queueMicrotask(()=>y(qt,Ue,St,Pt))}catch(Ht){i(qt=>({...qt,phase:"error",scannedFaceColors:Mt,error:Ht instanceof Error?Ht.message:"Failed to build cube state"}))}return}i(St=>({...St,currentPose:I.pose,knownFaces:q.knownFaces,scannedFaceColors:i0(n0(q.faces)),currentVisibleFace:q.currentFace,liveScanProgress:q.knownFaces.length/6,liveScanNeedsClearerCenter:q.needsClearerCenter,detectionFeedback:L(ht,J,q.stableProgress,q.stableTarget,ct,q.needsNewFace)}));return}if(i(J=>({...J,currentPose:I.pose})),ft==="solving"&&I.rotationMove){if(Date.now()-v.current<3e3)return;const J=_.current;if(J){const ht=J.moves[J.currentIndex];I.rotationMove===ht&&(P(I.rotationMove),I.pose&&W.syncPose(I.pose))}}},[s,P,L,y]),R=Wt.useCallback(()=>{D(),h.current=requestAnimationFrame(R)},[D]),G=Wt.useCallback(()=>{cancelAnimationFrame(h.current),h.current=requestAnimationFrame(R)},[R]),nt=Wt.useCallback(()=>{cancelAnimationFrame(h.current)},[]),$=Wt.useCallback(()=>{M(),w(),i(U=>({...U,solution:null}))},[M,w]),ot=Wt.useCallback(()=>{var U;M(),T.current=!1,c.current.reset(),E.current=null,qv(),(U=a.current)==null||U.disableTracking(),i(W=>({...W,phase:"colorLearn",error:null,solution:null,knownFaces:[],scannedFaceColors:{},currentVisibleFace:null,liveScanProgress:0,colorLearnIndex:0,colorLearnSample:null,colorLearnReady:!1,colorLearnError:null,colorsCalibrated:!1,detectionFeedback:Oo,liveScanNeedsClearerCenter:!1}))},[M]),gt=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:gt,confirmColorLearn:z,startLiveScan:X,retryLiveScan:$,retryColorLearn:ot,startTracking:G,stopTracking:nt}}function OC(){const s=Wt.useRef(null),t=Wt.useRef(null),[i,a]=Wt.useState({stream:null,error:null,isReady:!1}),l=Wt.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=Wt.useCallback(p=>{s.current=p,p&&l(p)},[l]),f=Wt.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"user"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await l(m),a({stream:p,error:null,isReady:!0})}catch(p){t.current=null,a({stream:null,error:p instanceof Error?p.message:"Camera access failed",isReady:!1})}},[l]),h=Wt.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),a({stream:null,error:null,isReady:!1})},[]);return Wt.useEffect(()=>()=>h(),[h]),{videoRef:s,setVideoRef:c,state:i,start:f,stop:h}}function ry(s,t,i,a){const l=Math.max(i/s,a/t),c=s*l,f=t*l;return{scale:l,offsetX:(i-c)/2,offsetY:(a-f)/2}}function zC(s,t,i,a){if(!s||!t||!i||!a)return null;const l=Ls(s,t),{scale:c,offsetX:f,offsetY:h}=ry(s,t,i,a);return{left:f+l.x*c,top:h+l.y*c,width:l.size*c,height:l.size*c}}function PC(s,t,i,a){if(!s||!t||!i||!a)return null;const l=Ls(s,t),c=H0(l),{scale:f,offsetX:h,offsetY:p}=ry(s,t,i,a);return{left:h+c.x*f,top:p+c.y*f,width:c.size*f,height:c.size*f}}const BC="1.0.5";function FC(){var G,nt;const{videoRef:s,setVideoRef:t,state:i,start:a}=OC(),{state:l,currentMove:c,confirmColorLearn:f,startLiveScan:h,retryLiveScan:p,retryColorLearn:m,startTracking:g,stopTracking:_}=NC(s),v=Wt.useRef(null),[S,E]=Wt.useState({width:0,height:0}),[T,M]=Wt.useState({width:0,height:0});Wt.useEffect(()=>{a()},[a]),Wt.useEffect(()=>{if(i.isReady&&l.phase!=="loading")return g(),_},[i.isReady,l.phase,g,_]);const y=Wt.useCallback(($,ot)=>{E({width:$,height:ot})},[]);Wt.useEffect(()=>{const $=v.current;if(!$)return;const ot=()=>{M({width:$.clientWidth,height:$.clientHeight})};ot();const gt=new ResizeObserver(ot);return gt.observe($),()=>gt.disconnect()},[]);const P=Wt.useMemo(()=>zC(S.width,S.height,T.width,T.height),[S.width,S.height,T.width,T.height]),L=Wt.useMemo(()=>PC(S.width,S.height,T.width,T.height),[S.width,S.height,T.width,T.height]),w=l.phase==="loading"||!i.isReady,k=!!(l.error||i.error),B=l.phase==="computing",z=l.phase==="solving",X=((G=l.solution)==null?void 0:G.moves.length)??0,D=(((nt=l.solution)==null?void 0:nt.currentIndex)??0)+1,R=l.phase==="liveScan"||l.phase==="computing"||k&&Object.keys(l.scannedFaceColors).length>0;return At.jsxs("main",{className:"app",children:[At.jsxs("div",{className:`viewport${l.phase==="liveScan"?" viewport--scanning":""}`,ref:v,children:[At.jsx(rR,{setVideoRef:t,onDimensions:y}),!w&&!k&&At.jsxs(At.Fragment,{children:[At.jsx(aR,{pose:l.currentPose,move:c,width:S.width,height:S.height,active:z}),At.jsx(yR,{visible:l.phase==="colorLearn",stepIndex:l.colorLearnIndex,sample:l.colorLearnSample,ready:l.colorLearnReady,error:l.colorLearnError,onConfirm:f,guideRect:P,spotRect:L}),At.jsx(RR,{visible:l.phase==="scanReady",feedback:l.detectionFeedback,guideRect:P,onStart:h}),At.jsx(Hh,{visible:R,scannedFaces:l.scannedFaceColors}),At.jsx(MR,{feedback:l.detectionFeedback,visible:l.phase==="liveScan",guideRect:P}),At.jsx(CR,{phase:l.phase,currentStep:D,totalSteps:X}),At.jsx(ER,{phase:l.phase,knownFaces:l.knownFaces,progress:l.liveScanProgress,needsNewFace:l.detectionFeedback.status==="rotate",needsClearerCenter:l.liveScanNeedsClearerCenter}),l.phase==="solving"&&c&&At.jsx("div",{className:"solving-banner",children:At.jsx("p",{className:"solving-move",children:c})}),l.phase==="solved"&&At.jsx("div",{className:"solved-banner",children:At.jsx("p",{children:"Done"})})]}),B&&At.jsxs(At.Fragment,{children:[At.jsx(Hh,{visible:R,scannedFaces:l.scannedFaceColors}),At.jsx(Zv,{overlay:!0,message:"Computing…"})]}),w&&At.jsx(Zv,{overlay:!0,message:l.phase==="loading"?"Loading…":"Camera…"}),k&&!w&&At.jsxs("div",{className:"error-screen overlay",children:[At.jsx(Hh,{visible:R,scannedFaces:l.scannedFaceColors}),At.jsx("p",{children:l.error??i.error}),At.jsxs("div",{className:"error-actions",children:[l.colorsCalibrated&&At.jsx("button",{type:"button",className:"error-button primary",onClick:p,children:"Re-scan"}),At.jsx("button",{type:"button",className:"error-button secondary",onClick:m,children:"Re-learn colors"})]})]})]}),At.jsxs("p",{className:"app-version","aria-hidden":"true",children:["v",BC]})]})}AS({immediate:!0});MS.createRoot(document.getElementById("root")).render(At.jsx(Wt.StrictMode,{children:At.jsx(FC,{})}));
