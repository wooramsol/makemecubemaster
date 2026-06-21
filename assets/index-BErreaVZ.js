var gx=Object.defineProperty;var _x=(o,t,i)=>t in o?gx(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var fn=(o,t,i)=>_x(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var kf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function vx(){if(d_)return Eo;d_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var p_;function Sx(){return p_||(p_=1,kf.exports=vx()),kf.exports}var We=Sx(),Xf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function xx(){if(m_)return ie;m_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(O,at,St){this.props=O,this.context=at,this.refs=M,this.updater=St||E}x.prototype.isReactComponent={},x.prototype.setState=function(O,at){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,at,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function F(){}F.prototype=x.prototype;function D(O,at,St){this.props=O,this.context=at,this.refs=M,this.updater=St||E}var w=D.prototype=new F;w.constructor=D,R(w,x.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function P(){}var N={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function U(O,at,St){var j=St.ref;return{$$typeof:o,type:O,key:at,ref:j!==void 0?j:null,props:St}}function C(O,at){return U(O.type,at,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function it(O){var at={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(St){return at[St]})}var tt=/\/+/g;function lt(O,at){return typeof O=="object"&&O!==null&&O.key!=null?it(""+O.key):at.toString(36)}function gt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(P,P):(O.status="pending",O.then(function(at){O.status==="pending"&&(O.status="fulfilled",O.value=at)},function(at){O.status==="pending"&&(O.status="rejected",O.reason=at)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,at,St,j,ft){var Mt=typeof O;(Mt==="undefined"||Mt==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(Mt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case t:vt=!0;break;case g:return vt=O._init,z(vt(O._payload),at,St,j,ft)}}if(vt)return ft=ft(O),vt=j===""?"."+lt(O,0):j,H(ft)?(St="",vt!=null&&(St=vt.replace(tt,"$&/")+"/"),z(ft,at,St,"",function(jt){return jt})):ft!=null&&(G(ft)&&(ft=C(ft,St+(ft.key==null||O&&O.key===ft.key?"":(""+ft.key).replace(tt,"$&/")+"/")+vt)),at.push(ft)),1;vt=0;var Ft=j===""?".":j+":";if(H(O))for(var Yt=0;Yt<O.length;Yt++)j=O[Yt],Mt=Ft+lt(j,Yt),vt+=z(j,at,St,Mt,ft);else if(Yt=y(O),typeof Yt=="function")for(O=Yt.call(O),Yt=0;!(j=O.next()).done;)j=j.value,Mt=Ft+lt(j,Yt++),vt+=z(j,at,St,Mt,ft);else if(Mt==="object"){if(typeof O.then=="function")return z(gt(O),at,St,j,ft);throw at=String(O),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return vt}function J(O,at,St){if(O==null)return O;var j=[],ft=0;return z(O,j,"","",function(Mt){return at.call(St,Mt,ft++)}),j}function K(O){if(O._status===-1){var at=O._result;at=at(),at.then(function(St){(O._status===0||O._status===-1)&&(O._status=1,O._result=St)},function(St){(O._status===0||O._status===-1)&&(O._status=2,O._result=St)}),O._status===-1&&(O._status=0,O._result=at)}if(O._status===1)return O._result.default;throw O._result}var xt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:J,forEach:function(O,at,St){J(O,function(){at.apply(this,arguments)},St)},count:function(O){var at=0;return J(O,function(){at++}),at},toArray:function(O){return J(O,function(at){return at})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ie.Activity=_,ie.Children=Tt,ie.Component=x,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=D,ie.StrictMode=r,ie.Suspense=p,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ie.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ie.cache=function(O){return function(){return O.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(O,at,St){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var j=R({},O.props),ft=O.key;if(at!=null)for(Mt in at.key!==void 0&&(ft=""+at.key),at)!k.call(at,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&at.ref===void 0||(j[Mt]=at[Mt]);var Mt=arguments.length-2;if(Mt===1)j.children=St;else if(1<Mt){for(var vt=Array(Mt),Ft=0;Ft<Mt;Ft++)vt[Ft]=arguments[Ft+2];j.children=vt}return U(O.type,ft,j)},ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},ie.createElement=function(O,at,St){var j,ft={},Mt=null;if(at!=null)for(j in at.key!==void 0&&(Mt=""+at.key),at)k.call(at,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ft[j]=at[j]);var vt=arguments.length-2;if(vt===1)ft.children=St;else if(1<vt){for(var Ft=Array(vt),Yt=0;Yt<vt;Yt++)Ft[Yt]=arguments[Yt+2];ft.children=Ft}if(O&&O.defaultProps)for(j in vt=O.defaultProps,vt)ft[j]===void 0&&(ft[j]=vt[j]);return U(O,Mt,ft)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(O){return{$$typeof:d,render:O}},ie.isValidElement=G,ie.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:K}},ie.memo=function(O,at){return{$$typeof:m,type:O,compare:at===void 0?null:at}},ie.startTransition=function(O){var at=N.T,St={};N.T=St;try{var j=O(),ft=N.S;ft!==null&&ft(St,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(P,xt)}catch(Mt){xt(Mt)}finally{at!==null&&St.types!==null&&(at.types=St.types),N.T=at}},ie.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ie.use=function(O){return N.H.use(O)},ie.useActionState=function(O,at,St){return N.H.useActionState(O,at,St)},ie.useCallback=function(O,at){return N.H.useCallback(O,at)},ie.useContext=function(O){return N.H.useContext(O)},ie.useDebugValue=function(){},ie.useDeferredValue=function(O,at){return N.H.useDeferredValue(O,at)},ie.useEffect=function(O,at){return N.H.useEffect(O,at)},ie.useEffectEvent=function(O){return N.H.useEffectEvent(O)},ie.useId=function(){return N.H.useId()},ie.useImperativeHandle=function(O,at,St){return N.H.useImperativeHandle(O,at,St)},ie.useInsertionEffect=function(O,at){return N.H.useInsertionEffect(O,at)},ie.useLayoutEffect=function(O,at){return N.H.useLayoutEffect(O,at)},ie.useMemo=function(O,at){return N.H.useMemo(O,at)},ie.useOptimistic=function(O,at){return N.H.useOptimistic(O,at)},ie.useReducer=function(O,at,St){return N.H.useReducer(O,at,St)},ie.useRef=function(O){return N.H.useRef(O)},ie.useState=function(O){return N.H.useState(O)},ie.useSyncExternalStore=function(O,at,St){return N.H.useSyncExternalStore(O,at,St)},ie.useTransition=function(){return N.H.useTransition()},ie.version="19.2.7",ie}var g_;function gd(){return g_||(g_=1,Xf.exports=xx()),Xf.exports}var ve=gd(),Wf={exports:{}},To={},qf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function yx(){return __||(__=1,(function(o){function t(z,J){var K=z.length;z.push(J);t:for(;0<K;){var xt=K-1>>>1,Tt=z[xt];if(0<l(Tt,J))z[xt]=J,z[K]=Tt,K=xt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var J=z[0],K=z.pop();if(K!==J){z[0]=K;t:for(var xt=0,Tt=z.length,O=Tt>>>1;xt<O;){var at=2*(xt+1)-1,St=z[at],j=at+1,ft=z[j];if(0>l(St,K))j<Tt&&0>l(ft,St)?(z[xt]=ft,z[j]=K,xt=j):(z[xt]=St,z[at]=K,xt=at);else if(j<Tt&&0>l(ft,K))z[xt]=ft,z[j]=K,xt=j;else break t}}return J}function l(z,J){var K=z.sortIndex-J.sortIndex;return K!==0?K:z.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,_=null,v=3,y=!1,E=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var J=i(m);J!==null;){if(J.callback===null)r(m);else if(J.startTime<=z)r(m),J.sortIndex=J.expirationTime,t(p,J);else break;J=i(m)}}function H(z){if(R=!1,w(z),!E)if(i(p)!==null)E=!0,P||(P=!0,it());else{var J=i(m);J!==null&&gt(H,J.startTime-z)}}var P=!1,N=-1,k=5,U=-1;function C(){return M?!0:!(o.unstable_now()-U<k)}function G(){if(M=!1,P){var z=o.unstable_now();U=z;var J=!0;try{t:{E=!1,R&&(R=!1,F(N),N=-1),y=!0;var K=v;try{e:{for(w(z),_=i(p);_!==null&&!(_.expirationTime>z&&C());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,v=_.priorityLevel;var Tt=xt(_.expirationTime<=z);if(z=o.unstable_now(),typeof Tt=="function"){_.callback=Tt,w(z),J=!0;break e}_===i(p)&&r(p),w(z)}else r(p);_=i(p)}if(_!==null)J=!0;else{var O=i(m);O!==null&&gt(H,O.startTime-z),J=!1}}break t}finally{_=null,v=K,y=!1}J=void 0}}finally{J?it():P=!1}}}var it;if(typeof D=="function")it=function(){D(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,lt=tt.port2;tt.port1.onmessage=G,it=function(){lt.postMessage(null)}}else it=function(){x(G,0)};function gt(z,J){N=x(function(){z(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var K=v;v=J;try{return z()}finally{v=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=v;v=z;try{return J()}finally{v=K}},o.unstable_scheduleCallback=function(z,J,K){var xt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xt+K:xt):K=xt,z){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=K+Tt,z={id:g++,callback:J,priorityLevel:z,startTime:K,expirationTime:Tt,sortIndex:-1},K>xt?(z.sortIndex=K,t(m,z),i(p)===null&&z===i(m)&&(R?(F(N),N=-1):R=!0,gt(H,K-xt))):(z.sortIndex=Tt,t(p,z),E||y||(E=!0,P||(P=!0,it()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var J=v;return function(){var K=v;v=J;try{return z.apply(this,arguments)}finally{v=K}}}})(Yf)),Yf}var v_;function Mx(){return v_||(v_=1,qf.exports=yx()),qf.exports}var Zf={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Ex(){if(S_)return An;S_=1;var o=gd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},An.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.7",An}var x_;function Tx(){if(x_)return Zf.exports;x_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Zf.exports=Ex(),Zf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function bx(){if(y_)return To;y_=1;var o=Mx(),t=gd(),i=Tx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,s=f;break}if(T===s){S=!0,s=u,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,s=u;break}if(T===s){S=!0,s=f,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var gt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},xt=[],Tt=-1;function O(e){return{current:e}}function at(e){0>Tt||(e.current=xt[Tt],xt[Tt]=null,Tt--)}function St(e,n){Tt++,xt[Tt]=e.current,e.current=n}var j=O(null),ft=O(null),Mt=O(null),vt=O(null);function Ft(e,n){switch(St(Mt,n),St(ft,e),St(j,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Pg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Pg(n),e=Bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(j),St(j,e)}function Yt(){at(j),at(ft),at(Mt)}function jt(e){e.memoizedState!==null&&St(vt,e);var n=j.current,a=Bg(n,e.type);n!==a&&(St(ft,e),St(j,a))}function Ge(e){ft.current===e&&(at(j),at(ft)),vt.current===e&&(at(vt),So._currentValue=K)}var Ie,ce;function I(e){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",ce=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+e+ce}var Tn=!1;function ue(e,n){if(!e||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var et=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){et=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){et=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&et&&typeof ot.stack=="string")return[ot.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var B=S.split(`
`),$=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===$.length)for(s=B.length-1,u=$.length-1;1<=s&&0<=u&&B[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==$[u]){var ut=`
`+B[s].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?I(a):""}function pe(e,n){switch(e.tag){case 26:case 27:case 5:return I(e.type);case 16:return I("Lazy");case 13:return e.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return I("Activity");default:return""}}function kt(e){try{var n="",a=null;do n+=pe(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var we=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,b=o.unstable_shouldYield,nt=o.unstable_requestPaint,ht=o.unstable_now,yt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,me=o.unstable_IdlePriority,bt=o.log,Pt=o.unstable_setDisableYieldValue,Zt=null,Gt=null;function Nt(e){if(typeof bt=="function"&&Pt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Zt,e)}catch{}}var Jt=Math.clz32?Math.clz32:W,ae=Math.log,Ne=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(ae(e)/Ne|0)|0}var Ct=256,ct=262144,_t=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=At(s):(S&=T,S!==0?u=At(S):a||(a=T&~e,a!==0&&(u=At(a))))):(T=s&~f,T!==0?u=At(T):S!==0?u=At(S):a||(a=s&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,s,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Jt(a),mt=1<<ut;T[ut]=0,B[ut]=-1;var et=$[ut];if(et!==null)for($[ut]=null,ut=0;ut<et.length;ut++){var ot=et[ut];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&Ds(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Ds(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Jt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Us(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Jt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Ai(e,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ls(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:s_(e.type))}function Za(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var mi=Math.random().toString(36).slice(2),je="__reactFiber$"+mi,vn="__reactProps$"+mi,zi="__reactContainer$"+mi,Ns="__reactEvents$"+mi,Pc="__reactListeners$"+mi,Bc="__reactHandles$"+mi,Vo="__reactResources$"+mi,ja="__reactMarker$"+mi;function Os(e){delete e[je],delete e[vn],delete e[Ns],delete e[Pc],delete e[Bc]}function A(e){var n=e[je];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[je]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Xg(e);e!==null;){if(a=e[je])return a;e=Xg(e)}return n}e=a,a=e.parentNode}return null}function q(e){if(e=e[je]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function st(e){var n=e[Vo];return n||(n=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[ja]=!0}var Et=new Set,Dt={};function Lt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(Dt[e]=n,e=0;e<n.length;e++)Et.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},Xt={};function Se(e){return we.call(Xt,e)?!0:we.call(Qt,e)?!1:ee.test(e)?Xt[e]=!0:(Qt[e]=!0,!1)}function xe(e,n,a){if(Se(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ve(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Me(e){if(!e._valueTracker){var n=qt(e)?"checked":"value";e._valueTracker=cn(e,n,""+e[n])}}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=qt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oe(e,n,a,s,u,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?bn(e,S,ne(n)):a!=null?bn(e,S,ne(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ne(T):e.removeAttribute("name")}function Un(e,n,a,s,u,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(e);return}a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Me(e)}function bn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ke(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function Cr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(gt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Me(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var f0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||f0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Od(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Nd(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Nd(e,f,n[f])}function Fc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),d0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return d0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Ic=null;function Hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function zd(e){var n=q(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oe(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[vn]||null;if(!u)throw Error(r(90));Oe(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&On(s)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(e,!!a.multiple,n,!1)}}}var Gc=!1;function Pd(e,n,a){if(Gc)return e(n,a);Gc=!0;try{var s=e(n);return s}finally{if(Gc=!1,(wr!==null||Dr!==null)&&(Dl(),wr&&(n=wr,e=Dr,Dr=wr=null,zd(n),e)))for(n=0;n<e.length;n++)zd(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(Bi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Vc=!1}var da=null,kc=null,Xo=null;function Bd(){if(Xo)return Xo;var e,n=kc,a=n.length,s,u="value"in da?da.value:da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return Xo=u.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Fd(){return!1}function Pn(e){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Fd,this.isPropagationStopped=Fd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Pn(Ka),Bs=_({},Ka,{view:0,detail:0}),p0=Pn(Bs),Xc,Wc,Fs,Zo=_({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(Xc=e.screenX-Fs.screenX,Wc=e.screenY-Fs.screenY):Wc=Xc=0,Fs=e),Xc)},movementY:function(e){return"movementY"in e?e.movementY:Wc}}),Id=Pn(Zo),m0=_({},Zo,{dataTransfer:0}),g0=Pn(m0),_0=_({},Bs,{relatedTarget:0}),qc=Pn(_0),v0=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=Pn(v0),x0=_({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y0=Pn(x0),M0=_({},Ka,{data:0}),Hd=Pn(M0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=b0[e])?!!n[e]:!1}function Yc(){return A0}var R0=_({},Bs,{key:function(e){if(e.key){var n=E0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),C0=Pn(R0),w0=_({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gd=Pn(w0),D0=_({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),U0=Pn(D0),L0=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Pn(L0),O0=_({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=Pn(O0),P0=_({},Ka,{newState:0,oldState:0}),B0=Pn(P0),F0=[9,13,27,32],Zc=Bi&&"CompositionEvent"in window,Is=null;Bi&&"documentMode"in document&&(Is=document.documentMode);var I0=Bi&&"TextEvent"in window&&!Is,Vd=Bi&&(!Zc||Is&&8<Is&&11>=Is),kd=" ",Xd=!1;function Wd(e,n){switch(e){case"keyup":return F0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function H0(e,n){switch(e){case"compositionend":return qd(n);case"keypress":return n.which!==32?null:(Xd=!0,kd);case"textInput":return e=n.data,e===kd&&Xd?null:e;default:return null}}function G0(e,n){if(Ur)return e==="compositionend"||!Zc&&Wd(e,n)?(e=Bd(),Xo=kc=da=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Vd&&n.locale!=="ko"?null:n.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!V0[e.type]:n==="textarea"}function Zd(e,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function k0(e){Dg(e,0)}function jo(e){var n=rt(e);if(On(n))return e}function jd(e,n){if(e==="change")return n}var Kd=!1;if(Bi){var jc;if(Bi){var Kc="oninput"in document;if(!Kc){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),Kc=typeof Qd.oninput=="function"}jc=Kc}else jc=!1;Kd=jc&&(!document.documentMode||9<document.documentMode)}function Jd(){Hs&&(Hs.detachEvent("onpropertychange",$d),Gs=Hs=null)}function $d(e){if(e.propertyName==="value"&&jo(Gs)){var n=[];Zd(n,Gs,e,Hc(e)),Pd(k0,n)}}function X0(e,n,a){e==="focusin"?(Jd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",$d)):e==="focusout"&&Jd()}function W0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Gs)}function q0(e,n){if(e==="click")return jo(n)}function Y0(e,n){if(e==="input"||e==="change")return jo(n)}function Z0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Z0;function Vs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!we.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ep(e,n){var a=tp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=tp(a)}}function np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var j0=Bi&&"documentMode"in document&&11>=document.documentMode,Lr=null,Jc=null,ks=null,$c=!1;function ap(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Lr==null||Lr!==gi(s)||(s=Lr,"selectionStart"in s&&Qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Bl(Jc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Lr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},tu={},rp={};Bi&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ja(e){if(tu[e])return tu[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in rp)return tu[e]=n[a];return e}var sp=Ja("animationend"),op=Ja("animationiteration"),lp=Ja("animationstart"),K0=Ja("transitionrun"),Q0=Ja("transitionstart"),J0=Ja("transitioncancel"),cp=Ja("transitionend"),up=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function _i(e,n){up.set(e,n),Lt(n,[e])}var Ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Or=0,nu=0;function Qo(){for(var e=Or,n=nu=Or=0;n<e;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&fp(a,u,f)}}function Jo(e,n,a,s){ei[Or++]=e,ei[Or++]=n,ei[Or++]=a,ei[Or++]=s,nu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function iu(e,n,a,s){return Jo(e,n,a,s),$o(e)}function $a(e,n){return Jo(e,null,null,n),$o(e)}function fp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Jt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(e){if(50<fo)throw fo=0,df=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function $0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new $0(e,n,a,s)}function au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tl(e,n,a,s,u,f){var S=0;if(s=e,typeof e=="function")au(e)&&(S=1);else if(typeof e=="string")S=ax(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=qn(31,a,n,u),e.elementType=U,e.lanes=f,e;case R:return tr(a.children,u,f,n);case M:S=8,u|=24;break;case x:return e=qn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case H:return e=qn(13,a,n,u),e.elementType=H,e.lanes=f,e;case P:return e=qn(19,a,n,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case F:S=9;break t;case w:S=11;break t;case N:S=14;break t;case k:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(S,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function tr(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function ru(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function dp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function su(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var pp=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:kt(n)},pp.set(e,n),n)}return{value:e,source:n,stack:kt(n)}}var Pr=[],Br=0,el=null,Xs=0,ii=[],ai=0,pa=null,Ri=1,Ci="";function Ii(e,n){Pr[Br++]=Xs,Pr[Br++]=el,el=e,Xs=n}function mp(e,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=pa,pa=e;var s=Ri;e=Ci;var u=32-Jt(s)-1;s&=~(1<<u),a+=1;var f=32-Jt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ri=1<<32-Jt(n)+u|a<<u|s,Ci=f+e}else Ri=1<<f|a<<u|s,Ci=e}function ou(e){e.return!==null&&(Ii(e,1),mp(e,1,0))}function lu(e){for(;e===el;)el=Pr[--Br],Pr[Br]=null,Xs=Pr[--Br],Pr[Br]=null;for(;e===pa;)pa=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function gp(e,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=pa,Ri=n.id,Ci=n.overflow,pa=e}var xn=null,ke=null,ye=!1,ma=null,ri=!1,cu=Error(r(519));function ga(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ni(n,e)),cu}function _p(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[je]=e,n[vn]=s,a){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)he(po[a],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),Un(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),Cr(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Og(n.textContent,a)?(s.popover!=null&&(he("beforetoggle",n),he("toggle",n)),s.onScroll!=null&&he("scroll",n),s.onScrollEnd!=null&&he("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ga(e,!0)}function vp(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:xn=xn.return}}function Fr(e){if(e!==xn)return!1;if(!ye)return vp(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cf(e.type,e.memoizedProps)),a=!a),a&&ke&&ga(e),vp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ke=kg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));ke=kg(e)}else n===27?(n=ke,Da(e.type)?(e=Nf,Nf=null,ke=e):ke=n):ke=xn?oi(e.stateNode.nextSibling):null;return!0}function er(){ke=xn=null,ye=!1}function uu(){var e=ma;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ma=null),e}function Ws(e){ma===null?ma=[e]:ma.push(e)}var fu=O(null),nr=null,Hi=null;function _a(e,n,a){St(fu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=fu.current,at(fu)}function hu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function du(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),hu(f.return,a,e),s||(S=null);break t}f=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),hu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ir(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;Wn(u.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(u===vt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}u=u.return}e!==null&&du(n,e,a,s),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Sp(nr,e)}function il(e,n){return nr===null&&ir(e),Sp(e,n)}function Sp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var tS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},eS=o.unstable_scheduleCallback,nS=o.unstable_NormalPriority,nn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new tS,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&eS(nS,function(){e.controller.abort()})}var Ys=null,mu=0,Hr=0,Gr=null;function iS(e,n){if(Ys===null){var a=Ys=[];mu=0,Hr=Sf(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return mu++,n.then(xp,xp),n}function xp(){if(--mu===0&&Ys!==null){Gr!==null&&(Gr.status="fulfilled");var e=Ys;Ys=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function aS(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var yp=z.S;z.S=function(e,n){ag=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&iS(e,n),yp!==null&&yp(e,n)};var ar=O(null);function gu(){var e=ar.current;return e!==null?e:He.pooledCache}function al(e,n){n===null?St(ar,ar.current):St(ar,n.pool)}function Mp(){var e=gu();return e===null?null:{parent:nn._currentValue,pool:e}}var Vr=Error(r(460)),_u=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function Ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e}throw sr=n,Vr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,Vr):a}}var sr=null;function bp(){if(sr===null)throw Error(r(459));var e=sr;return sr=null,e}function Ap(e){if(e===Vr||e===rl)throw Error(r(483))}var kr=null,Zs=0;function ol(e){var n=Zs;return Zs+=1,kr===null&&(kr=[]),Tp(kr,e,n)}function js(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ll(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Rp(e){function n(Y,V){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function u(Y,V){return Y=Fi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,Q,dt){return V===null||V.tag!==6?(V=ru(Q,Y.mode,dt),V.return=Y,V):(V=u(V,Q),V.return=Y,V)}function B(Y,V,Q,dt){var Wt=Q.type;return Wt===R?ut(Y,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===k&&rr(Wt)===V.type)?(V=u(V,Q.props),js(V,Q),V.return=Y,V):(V=tl(Q.type,Q.key,Q.props,null,Y.mode,dt),js(V,Q),V.return=Y,V)}function $(Y,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=su(Q,Y.mode,dt),V.return=Y,V):(V=u(V,Q.children||[]),V.return=Y,V)}function ut(Y,V,Q,dt,Wt){return V===null||V.tag!==7?(V=tr(Q,Y.mode,dt,Wt),V.return=Y,V):(V=u(V,Q),V.return=Y,V)}function mt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ru(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=tl(V.type,V.key,V.props,null,Y.mode,Q),js(Q,V),Q.return=Y,Q;case E:return V=su(V,Y.mode,Q),V.return=Y,V;case k:return V=rr(V),mt(Y,V,Q)}if(gt(V)||it(V))return V=tr(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return mt(Y,ol(V),Q);if(V.$$typeof===D)return mt(Y,il(Y,V),Q);ll(Y,V)}return null}function et(Y,V,Q,dt){var Wt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Wt!==null?null:T(Y,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Wt?B(Y,V,Q,dt):null;case E:return Q.key===Wt?$(Y,V,Q,dt):null;case k:return Q=rr(Q),et(Y,V,Q,dt)}if(gt(Q)||it(Q))return Wt!==null?null:ut(Y,V,Q,dt,null);if(typeof Q.then=="function")return et(Y,V,ol(Q),dt);if(Q.$$typeof===D)return et(Y,V,il(Y,Q),dt);ll(Y,Q)}return null}function ot(Y,V,Q,dt,Wt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(Q)||null,T(V,Y,""+dt,Wt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return Y=Y.get(dt.key===null?Q:dt.key)||null,B(V,Y,dt,Wt);case E:return Y=Y.get(dt.key===null?Q:dt.key)||null,$(V,Y,dt,Wt);case k:return dt=rr(dt),ot(Y,V,Q,dt,Wt)}if(gt(dt)||it(dt))return Y=Y.get(Q)||null,ut(V,Y,dt,Wt,null);if(typeof dt.then=="function")return ot(Y,V,Q,ol(dt),Wt);if(dt.$$typeof===D)return ot(Y,V,Q,il(V,dt),Wt);ll(V,dt)}return null}function Bt(Y,V,Q,dt){for(var Wt=null,be=null,It=V,se=V=0,_e=null;It!==null&&se<Q.length;se++){It.index>se?(_e=It,It=null):_e=It.sibling;var Ae=et(Y,It,Q[se],dt);if(Ae===null){It===null&&(It=_e);break}e&&It&&Ae.alternate===null&&n(Y,It),V=f(Ae,V,se),be===null?Wt=Ae:be.sibling=Ae,be=Ae,It=_e}if(se===Q.length)return a(Y,It),ye&&Ii(Y,se),Wt;if(It===null){for(;se<Q.length;se++)It=mt(Y,Q[se],dt),It!==null&&(V=f(It,V,se),be===null?Wt=It:be.sibling=It,be=It);return ye&&Ii(Y,se),Wt}for(It=s(It);se<Q.length;se++)_e=ot(It,Y,se,Q[se],dt),_e!==null&&(e&&_e.alternate!==null&&It.delete(_e.key===null?se:_e.key),V=f(_e,V,se),be===null?Wt=_e:be.sibling=_e,be=_e);return e&&It.forEach(function(za){return n(Y,za)}),ye&&Ii(Y,se),Wt}function Kt(Y,V,Q,dt){if(Q==null)throw Error(r(151));for(var Wt=null,be=null,It=V,se=V=0,_e=null,Ae=Q.next();It!==null&&!Ae.done;se++,Ae=Q.next()){It.index>se?(_e=It,It=null):_e=It.sibling;var za=et(Y,It,Ae.value,dt);if(za===null){It===null&&(It=_e);break}e&&It&&za.alternate===null&&n(Y,It),V=f(za,V,se),be===null?Wt=za:be.sibling=za,be=za,It=_e}if(Ae.done)return a(Y,It),ye&&Ii(Y,se),Wt;if(It===null){for(;!Ae.done;se++,Ae=Q.next())Ae=mt(Y,Ae.value,dt),Ae!==null&&(V=f(Ae,V,se),be===null?Wt=Ae:be.sibling=Ae,be=Ae);return ye&&Ii(Y,se),Wt}for(It=s(It);!Ae.done;se++,Ae=Q.next())Ae=ot(It,Y,se,Ae.value,dt),Ae!==null&&(e&&Ae.alternate!==null&&It.delete(Ae.key===null?se:Ae.key),V=f(Ae,V,se),be===null?Wt=Ae:be.sibling=Ae,be=Ae);return e&&It.forEach(function(mx){return n(Y,mx)}),ye&&Ii(Y,se),Wt}function Be(Y,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var Wt=Q.key;V!==null;){if(V.key===Wt){if(Wt=Q.type,Wt===R){if(V.tag===7){a(Y,V.sibling),dt=u(V,Q.props.children),dt.return=Y,Y=dt;break t}}else if(V.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===k&&rr(Wt)===V.type){a(Y,V.sibling),dt=u(V,Q.props),js(dt,Q),dt.return=Y,Y=dt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===R?(dt=tr(Q.props.children,Y.mode,dt,Q.key),dt.return=Y,Y=dt):(dt=tl(Q.type,Q.key,Q.props,null,Y.mode,dt),js(dt,Q),dt.return=Y,Y=dt)}return S(Y);case E:t:{for(Wt=Q.key;V!==null;){if(V.key===Wt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),dt=u(V,Q.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}dt=su(Q,Y.mode,dt),dt.return=Y,Y=dt}return S(Y);case k:return Q=rr(Q),Be(Y,V,Q,dt)}if(gt(Q))return Bt(Y,V,Q,dt);if(it(Q)){if(Wt=it(Q),typeof Wt!="function")throw Error(r(150));return Q=Wt.call(Q),Kt(Y,V,Q,dt)}if(typeof Q.then=="function")return Be(Y,V,ol(Q),dt);if(Q.$$typeof===D)return Be(Y,V,il(Y,Q),dt);ll(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),dt=u(V,Q),dt.return=Y,Y=dt):(a(Y,V),dt=ru(Q,Y.mode,dt),dt.return=Y,Y=dt),S(Y)):a(Y,V)}return function(Y,V,Q,dt){try{Zs=0;var Wt=Be(Y,V,Q,dt);return kr=null,Wt}catch(It){if(It===Vr||It===rl)throw It;var be=qn(29,It,null,Y.mode);return be.lanes=dt,be.return=Y,be}finally{}}}var or=Rp(!0),Cp=Rp(!1),va=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=$o(e),fp(e,null,a),n}return Jo(e,s,n,a),$o(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Us(e,a)}}function xu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var yu=!1;function Qs(){if(yu){var e=Gr;if(e!==null)throw e}}function Js(e,n,a,s){yu=!1;var u=e.updateQueue;va=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,S===null?f=$:S.next=$,S=B;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==S&&(T===null?ut.firstBaseUpdate=$:T.next=$,ut.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;S=0,ut=$=B=null,T=f;do{var et=T.lane&-536870913,ot=et!==T.lane;if(ot?(ge&et)===et:(s&et)===et){et!==0&&et===Hr&&(yu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Bt=e,Kt=T;et=n;var Be=a;switch(Kt.tag){case 1:if(Bt=Kt.payload,typeof Bt=="function"){mt=Bt.call(Be,mt,et);break t}mt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Kt.payload,et=typeof Bt=="function"?Bt.call(Be,mt,et):Bt,et==null)break t;mt=_({},mt,et);break t;case 2:va=!0}}et=T.callback,et!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[et]:ot.push(et))}else ot={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?($=ut=ot,B=mt):ut=ut.next=ot,S|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ut===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),ba|=S,e.lanes=S,e.memoizedState=mt}}function wp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Dp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)wp(a[e],n)}var Xr=O(null),cl=O(0);function Up(e,n){e=Ki,St(cl,e),St(Xr,n),Ki=e|n.baseLanes}function Mu(){St(cl,Ki),St(Xr,Xr.current)}function Eu(){Ki=cl.current,at(Xr),at(cl)}var Yn=O(null),si=null;function ya(e){var n=e.alternate;St(tn,tn.current&1),St(Yn,e),si===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(si=e)}function Tu(e){St(tn,tn.current),St(Yn,e),si===null&&(si=e)}function Lp(e){e.tag===22?(St(tn,tn.current),St(Yn,e),si===null&&(si=e)):Ma()}function Ma(){St(tn,tn.current),St(Yn,Yn.current)}function Zn(e){at(Yn),si===e&&(si=null),at(tn)}var tn=O(0);function ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Lf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,re=null,ze=null,an=null,fl=!1,Wr=!1,lr=!1,hl=0,$s=0,qr=null,rS=0;function Qe(){throw Error(r(321))}function bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Au(e,n,a,s,u,f){return Vi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?mm:Gu,lr=!1,f=a(s,u),lr=!1,Wr&&(f=Op(n,a,s,u)),Np(e),f}function Np(e){z.H=no;var n=ze!==null&&ze.next!==null;if(Vi=0,an=ze=re=null,fl=!1,$s=0,qr=null,n)throw Error(r(300));e===null||rn||(e=e.dependencies,e!==null&&nl(e)&&(rn=!0))}function Op(e,n,a,s){re=e;var u=0;do{if(Wr&&(qr=null),$s=0,Wr=!1,25<=u)throw Error(r(301));if(u+=1,an=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=gm,f=n(a,s)}while(Wr);return f}function sS(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?to(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(re.flags|=1024),n}function Ru(){var e=hl!==0;return hl=0,e}function Cu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function wu(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}Vi=0,an=ze=re=null,Wr=!1,$s=hl=0,qr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=e:an=an.next=e,an}function en(){if(ze===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,ze=e;else{if(e===null)throw re.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?re.memoizedState=an=e:an=an.next=e}return an}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(e){var n=$s;return $s+=1,qr===null&&(qr=[]),e=Tp(qr,e,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?mm:Gu),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return to(e);if(e.$$typeof===D)return yn(e)}throw Error(r(438,String(e)))}function Du(e){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=en();return Uu(n,ze,e)}function Uu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=S=null,B=null,$=n,ut=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ge&mt)===mt:(Vi&mt)===mt){var et=$.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Hr&&(ut=!0);else if((Vi&et)===et){$=$.next,et===Hr&&(ut=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=mt,S=f):B=B.next=mt,re.lanes|=et,ba|=et;mt=$.action,lr&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else et={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=et,S=f):B=B.next=et,re.lanes|=mt,ba|=mt;$=$.next}while($!==null&&$!==n);if(B===null?S=f:B.next=T,!Wn(f,e.memoizedState)&&(rn=!0,ut&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Lu(e){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Wn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zp(e,n,a){var s=re,u=en(),f=ye;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((ze||u).memoizedState,a);if(S&&(u.memoizedState=a,rn=!0),u=u.queue,zu(Fp.bind(null,s,u,e),[e]),u.getSnapshot!==n||S||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},Bp.bind(null,s,u,a,n),null),He===null)throw Error(r(349));f||(Vi&127)!==0||Pp(s,n,a)}return a}function Pp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=dl(),re.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Bp(e,n,a,s){n.value=a,n.getSnapshot=s,Ip(n)&&Hp(e)}function Fp(e,n,a){return a(function(){Ip(n)&&Hp(e)})}function Ip(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Hp(e){var n=$a(e,2);n!==null&&Gn(n,e,2)}function Nu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),lr){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function Gp(e,n,a,s){return e.baseState=a,Uu(e,ze,typeof s=="function"?s:ki)}function oS(e,n,a,s,u){if(vl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Vp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=z.T,S={};z.T=S;try{var T=a(u,s),B=z.S;B!==null&&B(S,T),kp(e,n,T)}catch($){Ou(e,n,$)}finally{f!==null&&S.types!==null&&(f.types=S.types),z.T=f}}else try{f=a(u,s),kp(e,n,f)}catch($){Ou(e,n,$)}}function kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xp(e,n,s)},function(s){return Ou(e,n,s)}):Xp(e,n,a)}function Xp(e,n,a){n.status="fulfilled",n.value=a,Wp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Vp(e,a)))}function Ou(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Wp(n),n=n.next;while(n!==s)}e.action=null}function Wp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function qp(e,n){return n}function Yp(e,n){if(ye){var a=He.formState;if(a!==null){t:{var s=re;if(ye){if(ke){e:{for(var u=ke,f=ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ke=oi(u.nextSibling),s=u.data==="F!";break t}}ga(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:n},a.queue=s,a=hm.bind(null,re,s),s.dispatch=a,s=Nu(!1),f=Hu.bind(null,re,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=oS.bind(null,re,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Zp(e){var n=en();return jp(n,ze,e)}function jp(e,n,a){if(n=Uu(e,n,qp)[0],e=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(S){throw S===Vr?rl:S}else s=n;n=en();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(re.flags|=2048,Yr(9,{destroy:void 0},lS.bind(null,u,a),null)),[s,f,e]}function lS(e,n){e.action=n}function Kp(e){var n=en(),a=ze;if(a!==null)return jp(n,a,e);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Yr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=dl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Qp(){return en().memoizedState}function gl(e,n,a,s){var u=Ln();re.flags|=e,u.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(e,n,a,s){var u=en();s=s===void 0?null:s;var f=u.memoizedState.inst;ze!==null&&s!==null&&bu(s,ze.memoizedState.deps)?u.memoizedState=Yr(n,f,a,s):(re.flags|=e,u.memoizedState=Yr(1|n,f,a,s))}function Jp(e,n){gl(8390656,8,e,n)}function zu(e,n){_l(2048,8,e,n)}function cS(e){re.flags|=4;var n=re.updateQueue;if(n===null)n=dl(),re.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function $p(e){var n=en().memoizedState;return cS({ref:n,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function tm(e,n){return _l(4,2,e,n)}function em(e,n){return _l(4,4,e,n)}function nm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function im(e,n,a){a=a!=null?a.concat([e]):null,_l(4,4,nm.bind(null,n,e),a)}function Pu(){}function am(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function rm(e,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bu(n,s[1]))return s[0];if(s=e(),lr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Bu(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(ge&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=sg(),re.lanes|=e,ba|=e,a)}function sm(e,n,a,s){return Wn(a,n)?a:Xr.current!==null?(e=Bu(e,a,s),Wn(e,n)||(rn=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(ge&261930)===0?(rn=!0,e.memoizedState=a):(e=sg(),re.lanes|=e,ba|=e,n)}function om(e,n,a,s,u){var f=J.p;J.p=f!==0&&8>f?f:8;var S=z.T,T={};z.T=T,Hu(e,!1,n,a);try{var B=u(),$=z.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ut=aS(B,s);eo(e,n,ut,Qn(e))}else eo(e,n,s,Qn(e))}catch(mt){eo(e,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{J.p=f,S!==null&&T.types!==null&&(S.types=T.types),z.T=S}}function uS(){}function Fu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=lm(e).queue;om(e,u,n,K,a===null?uS:function(){return cm(e),a(s)})}function lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function cm(e){var n=lm(e);n.next===null&&(n=e.alternate.memoizedState),eo(e,n.next.queue,{},Qn())}function Iu(){return yn(So)}function um(){return en().memoizedState}function fm(){return en().memoizedState}function fS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Sa(a);var s=xa(n,e,a);s!==null&&(Gn(s,n,a),Ks(s,n,a)),n={cache:pu()},e.payload=n;return}n=n.return}}function hS(e,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?dm(n,a):(a=iu(e,n,a,s),a!==null&&(Gn(a,e,s),pm(a,n,s)))}function hm(e,n,a){var s=Qn();eo(e,n,a,s)}function eo(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))dm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,S))return Jo(e,n,u,0),He===null&&Qo(),!1}catch{}finally{}if(a=iu(e,n,u,s),a!==null)return Gn(a,e,s),pm(a,n,s),!0}return!1}function Hu(e,n,a,s){if(s={lane:2,revertLane:Sf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(r(479))}else n=iu(e,a,s,2),n!==null&&Gn(n,e,2)}function vl(e){var n=e.alternate;return e===re||n!==null&&n===re}function dm(e,n){Wr=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function pm(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Us(e,a)}}var no={readContext:yn,use:pl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};no.useEffectEvent=Qe;var mm={readContext:yn,use:pl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,gl(4194308,4,nm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return gl(4194308,4,e,n)},useInsertionEffect:function(e,n){gl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(lr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(lr){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=hS.bind(null,re,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Nu(e);var n=e.queue,a=hm.bind(null,re,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Pu,useDeferredValue:function(e,n){var a=Ln();return Bu(a,e,n)},useTransition:function(){var e=Nu(!1);return e=om.bind(null,re,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=re,u=Ln();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),He===null)throw Error(r(349));(ge&127)!==0||Pp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Jp(Fp.bind(null,s,f,e),[e]),s.flags|=2048,Yr(9,{destroy:void 0},Bp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=He.identifierPrefix;if(ye){var a=Ci,s=Ri;a=(s&~(1<<32-Jt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Iu,useFormState:Yp,useActionState:Yp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,re,!0,a),a.dispatch=n,[e,n]},useMemoCache:Du,useCacheRefresh:function(){return Ln().memoizedState=fS.bind(null,re)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gu={readContext:yn,use:pl,useCallback:am,useContext:yn,useEffect:zu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:rm,useReducer:ml,useRef:Qp,useState:function(){return ml(ki)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=en();return sm(a,ze.memoizedState,e,n)},useTransition:function(){var e=ml(ki)[0],n=en().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:zp,useId:um,useHostTransitionStatus:Iu,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,n){var a=en();return Gp(a,ze,e,n)},useMemoCache:Du,useCacheRefresh:fm};Gu.useEffectEvent=$p;var gm={readContext:yn,use:pl,useCallback:am,useContext:yn,useEffect:zu,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:em,useMemo:rm,useReducer:Lu,useRef:Qp,useState:function(){return Lu(ki)},useDebugValue:Pu,useDeferredValue:function(e,n){var a=en();return ze===null?Bu(a,e,n):sm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Lu(ki)[0],n=en().memoizedState;return[typeof e=="boolean"?e:to(e),n]},useSyncExternalStore:zp,useId:um,useHostTransitionStatus:Iu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,n){var a=en();return ze!==null?Gp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:fm};gm.useEffectEvent=$p;function Vu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Qn(),u=Sa(s);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Qn(),u=Sa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),s=Sa(a);s.tag=2,n!=null&&(s.callback=n),n=xa(e,s,a),n!==null&&(Gn(n,e,a),Ks(n,e,a))}};function _m(e,n,a,s,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(u,f):!0}function vm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&ku.enqueueReplaceState(n,n.state,null)}function cr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Sm(e){Ko(e)}function xm(e){console.error(e)}function ym(e){Ko(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Mm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Xu(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function Em(e){return e=Sa(e),e.tag=3,e}function Tm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Mm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Mm(n,a,s),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function dS(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Ul():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(e,s,u)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(e,s,u)),!1}throw Error(r(435,a.tag))}return gf(e,s,u),Ul(),!1}if(ye)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==cu&&(e=Error(r(422),{cause:s}),Ws(ni(e,a)))):(s!==cu&&(n=Error(r(423),{cause:s}),Ws(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ni(s,a),u=Xu(e.stateNode,s,u),xu(e,u),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),uo===null?uo=[f]:uo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Xu(a.stateNode,s,e),xu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Em(u),Tm(u,e,a,s),xu(a,u),!1}a=a.return}while(a!==null);return!1}var Wu=Error(r(461)),rn=!1;function Mn(e,n,a,s){n.child=e===null?Cp(n,null,a,s):or(n,e.child,a,s)}function bm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var T in s)T!=="ref"&&(S[T]=s[T])}else S=s;return ir(n),s=Au(e,n,a,S,f,u),T=Ru(),e!==null&&!rn?(Cu(e,n,u),Xi(e,n,u)):(ye&&T&&ou(n),n.flags|=1,Mn(e,n,s,u),n.child)}function Am(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Rm(e,n,f,s,u)):(e=tl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!$u(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(S,s)&&e.ref===n.ref)return Xi(e,n,u)}return n.flags|=1,e=Fi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Rm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(rn=!1,n.pendingProps=s=f,$u(e,u))(e.flags&131072)!==0&&(rn=!0);else return n.lanes=e.lanes,Xi(e,n,u)}return qu(e,n,a,s,u)}function Cm(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return wm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?Up(n,f):Mu(),Lp(n);else return s=n.lanes=536870912,wm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),Up(n,f),Ma(),n.memoizedState=null):(e!==null&&al(n,null),Mu(),Ma());return Mn(e,n,u,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function wm(e,n,a,s,u){var f=gu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&al(n,null),Mu(),Lp(n),e!==null&&Ir(e,n,s,!0),n.childLanes=u,null}function xl(e,n){return n=Ml({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Dm(e,n,a){return or(n,e.child,null,a),e=xl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function pS(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(s.mode==="hidden")return e=xl(n,s),n.lanes=536870912,io(null,e);if(Tu(n),(e=ke)?(e=Vg(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=dp(e),a.return=n,n.child=a,xn=n,ke=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return xl(n,s)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Tu(n),u)if(n.flags&256)n.flags&=-257,n=Dm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Ir(e,n,a,!1),u=(a&e.childLanes)!==0,rn||u){if(s=He,s!==null&&(S=Ai(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,$a(e,S),Gn(s,e,S),Wu;Ul(),n=Dm(e,n,a)}else e=f.treeContext,ke=oi(S.nextSibling),xn=n,ye=!0,ma=null,ri=!1,e!==null&&gp(n,e),n=xl(n,s),n.flags|=4096;return n}return e=Fi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function qu(e,n,a,s,u){return ir(n),a=Au(e,n,a,s,void 0,u),s=Ru(),e!==null&&!rn?(Cu(e,n,u),Xi(e,n,u)):(ye&&s&&ou(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Um(e,n,a,s,u,f){return ir(n),n.updateQueue=null,a=Op(n,s,a,u),Np(e),s=Ru(),e!==null&&!rn?(Cu(e,n,f),Xi(e,n,f)):(ye&&s&&ou(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Lm(e,n,a,s,u){if(ir(n),n.stateNode===null){var f=zr,S=a.contextType;typeof S=="object"&&S!==null&&(f=yn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},vu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?yn(S):zr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Vu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&ku.enqueueReplaceState(f,f.state,null),Js(n,s,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=cr(a,T);f.props=B;var $=f.context,ut=a.contextType;S=zr,typeof ut=="object"&&ut!==null&&(S=yn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==S)&&vm(n,f,s,S),va=!1;var et=n.memoizedState;f.state=et,Js(n,s,f,u),Qs(),$=n.memoizedState,T||et!==$||va?(typeof mt=="function"&&(Vu(n,a,mt,s),$=n.memoizedState),(B=va||_m(n,a,B,s,et,$,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Su(e,n),S=n.memoizedProps,ut=cr(a,S),f.props=ut,mt=n.pendingProps,et=f.context,$=a.contextType,B=zr,typeof $=="object"&&$!==null&&(B=yn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||et!==B)&&vm(n,f,s,B),va=!1,et=n.memoizedState,f.state=et,Js(n,s,f,u),Qs();var ot=n.memoizedState;S!==mt||et!==ot||va||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof T=="function"&&(Vu(n,a,T,s),ot=n.memoizedState),(ut=va||_m(n,a,ut,s,et,ot,B)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=or(n,e.child,null,u),n.child=or(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Xi(e,n,u),e}function Nm(e,n,a,s){return er(),n.flags|=256,Mn(e,n,a,s),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(e){return{baseLanes:e,cachePool:Mp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Om(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(u?ya(n):Ma(),(e=ke)?(e=Vg(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=dp(e),a.return=n,n.child=a,xn=n,ke=null)):e=null,e===null)throw ga(n);return Lf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Ma(),u=n.mode,T=Ml({mode:"hidden",children:T},u),s=tr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Zu(a),s.childLanes=ju(e,S,a),n.memoizedState=Yu,io(null,s)):(ya(n),Ku(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=Qu(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),T=s.fallback,u=n.mode,s=Ml({mode:"visible",children:s.children},u),T=tr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,or(n,e.child,null,a),s=n.child,s.memoizedState=Zu(a),s.childLanes=ju(e,S,a),n.memoizedState=Yu,n=io(null,s));else if(ya(n),Lf(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,Ws({value:s,source:null,stack:null}),n=Qu(e,n,a)}else if(rn||Ir(e,n,a,!1),S=(a&e.childLanes)!==0,rn||S){if(S=He,S!==null&&(s=Ai(S,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,$a(e,s),Gn(S,e,s),Wu;Uf(T)||Ul(),n=Qu(e,n,a)}else Uf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,ke=oi(T.nextSibling),xn=n,ye=!0,ma=null,ri=!1,e!==null&&gp(n,e),n=Ku(n,s.children),n.flags|=4096);return n}return u?(Ma(),T=s.fallback,u=n.mode,B=e.child,$=B.sibling,s=Fi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Fi($,T):(T=tr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,io(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Zu(a):(u=T.cachePool,u!==null?(B=nn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Mp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=ju(e,S,a),n.memoizedState=Yu,io(e.child,s)):(ya(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ku(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Qu(e,n,a){return or(n,e.child,null,a),e=Ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),hu(e.return,n,a)}function Ju(e,n,a,s,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function Pm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var S=tn.current,T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,St(tn,S),Mn(e,n,s,a),s=ye?Xs:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zm(e,a,n);else if(e.tag===19)zm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ul(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ju(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ju(n,!0,a,null,f,s);break;case"together":Ju(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function mS(e,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),_a(n,nn,e.memoizedState.cache),er();break;case 27:case 5:jt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Om(e,n,a):(ya(n),e=Xi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Pm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Cm(e,n,a,n.pendingProps);case 24:_a(n,nn,e.memoizedState.cache)}return Xi(e,n,a)}function Bm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)rn=!0;else{if(!$u(e,a)&&(n.flags&128)===0)return rn=!1,mS(e,n,a);rn=(e.flags&131072)!==0}else rn=!1,ye&&(n.flags&1048576)!==0&&mp(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")au(e)?(s=cr(e,s),n.tag=1,n=Lm(null,n,e,s,a)):(n.tag=0,n=qu(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=bm(null,n,e,s,a);break t}else if(u===N){n.tag=14,n=Am(null,n,e,s,a);break t}}throw n=lt(e)||e,Error(r(306,n,""))}}return n;case 0:return qu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=cr(s,n.pendingProps),Lm(e,n,s,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Su(e,n),Js(n,s,null,a);var S=n.memoizedState;if(s=S.cache,_a(n,nn,s),s!==f.cache&&du(n,[nn],a,!0),Qs(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Nm(e,n,s,a);break t}else if(s!==u){u=ni(Error(r(424)),n),Ws(u),n=Nm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=oi(e.firstChild),xn=n,ye=!0,ma=null,ri=!0,a=Cp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),s===u){n=Xi(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=Zg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,s=Fl(Mt.current).createElement(a),s[je]=n,s[vn]=e,En(s,a,e),X(s),n.stateNode=s):n.memoizedState=Zg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&ye&&(s=n.stateNode=Wg(n.type,n.pendingProps,Mt.current),xn=n,ri=!0,u=ke,Da(n.type)?(Nf=u,ke=oi(s.firstChild)):ke=u),Mn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((u=s=ke)&&(s=WS(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,xn=n,ke=oi(s.firstChild),ri=!1,u=!0):u=!1),u||ga(n)),jt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,Cf(u,f)?s=null:S!==null&&Cf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Au(e,n,sS,null,null,a),So._currentValue=u),yl(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&ye&&((e=a=ke)&&(a=qS(a,n.pendingProps,ri),a!==null?(n.stateNode=a,xn=n,ke=null,e=!0):e=!1),e||ga(n)),null;case 13:return Om(e,n,a);case 4:return Ft(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=or(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return bm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,_a(n,n.type,s.value),Mn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ir(n),u=yn(u),s=s(u),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Am(e,n,n.type,n.pendingProps,a);case 15:return Rm(e,n,n.type,n.pendingProps,a);case 19:return Pm(e,n,a);case 31:return pS(e,n,a);case 22:return Cm(e,n,a,n.pendingProps);case 24:return ir(n),s=yn(nn),e===null?(u=gu(),u===null&&(u=He,f=pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},vu(n),_a(n,nn,u)):((e.lanes&a)!==0&&(Su(e,n),Js(n,null,null,a),Qs()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,nn,s)):(s=f.cache,_a(n,nn,s),s!==u.cache&&du(n,[nn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function tf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ug())e.flags|=8192;else throw sr=sl,_u}else e.flags&=-16777217}function Fm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$g(n))if(ug())e.flags|=8192;else throw sr=sl,_u}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ln():536870912,e.lanes|=n,Qr|=n)}function ao(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function gS(e,n,a){var s=n.pendingProps;switch(lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(nn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uu())),Xe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Wi(n),f!==null?(Xe(n),Fm(n,f)):(Xe(n),tf(n,u,null,s,a))):f?f!==e.memoizedState?(Wi(n),Xe(n),Fm(n,f)):(Xe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Wi(n),Xe(n),tf(n,u,e,s,a)),null;case 27:if(Ge(n),a=Mt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}e=j.current,Fr(n)?_p(n):(e=Wg(u,s,a),n.stateNode=e,Wi(n))}return Xe(n),null;case 5:if(Ge(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(f=j.current,Fr(n))_p(n);else{var S=Fl(Mt.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}f[je]=n,f[vn]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(En(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Wi(n)}}return Xe(n),tf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=xn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[je]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Og(e.nodeValue,a)),e||ga(n,!0)}else e=Fl(e).createTextNode(s),e[je]=n,n.stateNode=e}return Xe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Fr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[je]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),e=!1}else a=uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[je]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=uu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Xe(n),null);case 4:return Yt(),e===null&&Ef(n.stateNode.containerInfo),Xe(n),null;case 10:return Gi(n.type),Xe(n),null;case 19:if(at(tn),s=n.memoizedState,s===null)return Xe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ao(s,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ul(e),f!==null){for(n.flags|=128,ao(s,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)hp(a,e),a=a.sibling;return St(tn,tn.current&1|2),ye&&Ii(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&ht()>Cl&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304)}else{if(!u)if(e=ul(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ye)return Xe(n),null}else 2*ht()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ht(),e.sibling=null,a=tn.current,St(tn,u?a&1|2:a&1),ye&&Ii(n,s.treeForkCount),e):(Xe(n),null);case 22:case 23:return Zn(n),Eu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&at(ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(nn),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function _S(e,n){switch(lu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(nn),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ge(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(tn),null;case 4:return Yt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Zn(n),Eu(),e!==null&&at(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(nn),null;case 25:return null;default:return null}}function Im(e,n){switch(lu(n),n.tag){case 3:Gi(nn),Yt();break;case 26:case 27:case 5:Ge(n);break;case 4:Yt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:at(tn);break;case 10:Gi(n.type);break;case 22:case 23:Zn(n),Eu(),e!==null&&at(ar);break;case 24:Gi(nn)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(T){Ue(n,n.return,T)}}function Ea(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var S=s.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(ut){Ue(u,B,ut)}}}s=s.next}while(s!==f)}}catch(ut){Ue(n,n.return,ut)}}function Hm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Dp(n,a)}catch(s){Ue(e,e.return,s)}}}function Gm(e,n,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ue(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ue(e,n,u)}}function wi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ue(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ue(e,n,u)}else a.current=null}function Vm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ue(e,e.return,u)}}function ef(e,n,a){try{var s=e.stateNode;IS(s,e.type,a,n),s[vn]=n}catch(u){Ue(e,e.return,u)}}function km(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||km(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function af(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(af(e,n,a),e=e.sibling;e!==null;)af(e,n,a),e=e.sibling}function Tl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function Xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,s,a),n[je]=e,n[vn]=a}catch(f){Ue(e,e.return,f)}}var qi=!1,sn=!1,rf=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,mn=null;function vS(e,n){if(e=e.containerInfo,Af=Wl,e=ip(e),Qc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,B=-1,$=0,ut=0,mt=e,et=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(T=S+u),mt!==f||s!==0&&mt.nodeType!==3||(B=S+s),mt.nodeType===3&&(S+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)et=mt,mt=ot;for(;;){if(mt===e)break e;if(et===a&&++$===u&&(T=S),et===f&&++ut===s&&(B=S),(ot=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:e,selectionRange:a},Wl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Bt=cr(a.type,u);e=s.getSnapshotBeforeUpdate(Bt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Kt){Ue(a,a.return,Kt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Df(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Df(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function qm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),s&4&&ro(5,a);break;case 1:if(Zi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ue(a,a.return,S)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ue(a,a.return,S)}}s&64&&Hm(a),s&512&&so(a,a.return);break;case 3:if(Zi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Dp(e,n)}catch(S){Ue(a,a.return,S)}}break;case 27:n===null&&s&4&&Xm(a);case 26:case 5:Zi(e,a),n===null&&s&4&&Vm(a),s&512&&so(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),s&4&&jm(e,a);break;case 13:Zi(e,a),s&4&&Km(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=RS.bind(null,a),YS(e,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||sn,u=qi;var f=sn;qi=s,(sn=n)&&!f?ji(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),qi=u,sn=f}break;case 30:break;default:Zi(e,a)}}function Ym(e){var n=e.alternate;n!==null&&(e.alternate=null,Ym(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Os(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Bn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)Zm(e,n,a),a=a.sibling}function Zm(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:sn||wi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||wi(a,n);var s=Ye,u=Bn;Da(a.type)&&(Ye=a.stateNode,Bn=!1),Yi(e,n,a),go(a.stateNode),Ye=s,Bn=u;break;case 5:sn||wi(a,n);case 6:if(s=Ye,u=Bn,Ye=null,Yi(e,n,a),Ye=s,Bn=u,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:Ye!==null&&(Bn?(e=Ye,Hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):Hg(Ye,a.stateNode));break;case 4:s=Ye,u=Bn,Ye=a.stateNode.containerInfo,Bn=!0,Yi(e,n,a),Ye=s,Bn=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),sn||Ea(4,a,n),Yi(e,n,a);break;case 1:sn||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Gm(a,n,s)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,Yi(e,n,a),sn=s;break;default:Yi(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){Ue(n,n.return,a)}}}function Km(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){Ue(n,n.return,a)}}function SS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Wm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Wm),n;default:throw Error(r(435,e.tag))}}function bl(e,n){var a=SS(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=CS.bind(null,e,s);s.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){Ye=T.stateNode,Bn=!1;break t}break;case 5:Ye=T.stateNode,Bn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));Zm(f,S,u),Ye=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Qm(n,e),n=n.sibling}var vi=null;function Qm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),In(e),s&4&&(Ea(3,e,e.return),ro(3,e),Ea(5,e,e.return));break;case 1:Fn(n,e),In(e),s&512&&(sn||a===null||wi(a,a.return)),s&64&&qi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=vi;if(Fn(n,e),In(e),s&512&&(sn||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ja]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,s,a),f[je]=e,X(f),s=f;break t;case"link":var S=Qg("link","href",u).get(s+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;case"meta":if(S=Qg("meta","content",u).get(s+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=u.createElement(s),En(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[je]=e,X(f),s=f}e.stateNode=s}else Jg(u,e.type,e.stateNode);else e.stateNode=Kg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Jg(u,e.type,e.stateNode):Kg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),In(e),s&512&&(sn||a===null||wi(a,a.return)),a!==null&&s&4&&ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),In(e),s&512&&(sn||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Bt){Ue(e,e.return,Bt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,ef(e,u,a!==null?a.memoizedProps:u)),s&1024&&(rf=!0);break;case 6:if(Fn(n,e),In(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Bt){Ue(e,e.return,Bt)}}break;case 3:if(Gl=null,u=vi,vi=Il(n.containerInfo),Fn(n,e),vi=u,In(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(Bt){Ue(e,e.return,Bt)}rf&&(rf=!1,Jm(e));break;case 4:s=vi,vi=Il(e.stateNode.containerInfo),Fn(n,e),In(e),vi=s;break;case 12:Fn(n,e),In(e);break;case 31:Fn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bl(e,s)));break;case 13:Fn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=ht()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bl(e,s)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=qi,ut=sn;if(qi=$||u,sn=ut||B,Fn(n,e),sn=ut,qi=$,In(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||qi||sn||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=B.stateNode;var mt=B.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Bt){Ue(B,B.return,Bt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Bt){Ue(B,B.return,Bt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?Gg(ot,!0):Gg(B.stateNode,!1)}catch(Bt){Ue(B,B.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,bl(e,a))));break;case 19:Fn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,bl(e,s)));break;case 30:break;case 21:break;default:Fn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(km(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=nf(e);Tl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(zn(S,""),a.flags&=-33);var T=nf(e);Tl(e,T,S);break;case 3:case 4:var B=a.stateNode.containerInfo,$=nf(e);af(e,$,B);break;default:throw Error(r(161))}}catch(ut){Ue(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)qm(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Gm(n,n.return,a),ur(n);break;case 27:go(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ji(u,f,a),ro(4,f);break;case 1:if(ji(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ue(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)wp(B[u],T)}catch($){Ue(s,s.return,$)}}a&&S&64&&Hm(f),so(f,f.return);break;case 27:Xm(f);case 26:case 5:ji(u,f,a),a&&s===null&&S&4&&Vm(f),so(f,f.return);break;case 12:ji(u,f,a);break;case 31:ji(u,f,a),a&&S&4&&jm(u,f);break;case 13:ji(u,f,a),a&&S&4&&Km(u,f);break;case 22:f.memoizedState===null&&ji(u,f,a),so(f,f.return);break;case 30:break;default:ji(u,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function Si(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$m(e,n,a,s),n=n.sibling}function $m(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,s),u&2048&&ro(9,n);break;case 1:Si(e,n,a,s);break;case 3:Si(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(u&2048){Si(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ue(n,n.return,B)}}else Si(e,n,a,s);break;case 31:Si(e,n,a,s);break;case 13:Si(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,s):oo(e,n):f._visibility&2?Si(e,n,a,s):(f._visibility|=2,Zr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&sf(S,n);break;case 24:Si(e,n,a,s),u&2048&&of(n.alternate,n);break;default:Si(e,n,a,s)}}function Zr(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,T=a,B=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:Zr(f,S,T,B,u),ro(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&2?Zr(f,S,T,B,u):oo(f,S):(ut._visibility|=2,Zr(f,S,T,B,u)),u&&$&2048&&sf(S.alternate,S);break;case 24:Zr(f,S,T,B,u),u&&$&2048&&of(S.alternate,S);break;default:Zr(f,S,T,B,u)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&sf(s.alternate,s);break;case 24:oo(a,s),u&2048&&of(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function jr(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)tg(e,n,a),e=e.sibling}function tg(e,n,a){switch(e.tag){case 26:jr(e,n,a),e.flags&lo&&e.memoizedState!==null&&rx(a,vi,e.memoizedState,e.memoizedProps);break;case 5:jr(e,n,a);break;case 3:case 4:var s=vi;vi=Il(e.stateNode.containerInfo),jr(e,n,a),vi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,jr(e,n,a),lo=s):jr(e,n,a));break;default:jr(e,n,a)}}function eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,ig(s,e)}eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ng(e),e=e.sibling}function ng(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):co(e);break;default:co(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,ig(s,e)}eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function ig(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=e;mn!==null;){s=mn;var u=s.sibling,f=s.return;if(Ym(s),s===a){mn=null;break t}if(u!==null){u.return=f,mn=u;break t}mn=f}}}var xS={getCacheForType:function(e){var n=yn(nn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return yn(nn).controller.signal}},yS=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,fe=null,ge=0,De=0,jn=null,Ta=!1,Kr=!1,lf=!1,Ki=0,Je=0,ba=0,fr=0,cf=0,Kn=0,Qr=0,uo=null,Hn=null,uf=!1,Rl=0,ag=0,Cl=1/0,wl=null,Aa=null,un=0,Ra=null,Jr=null,Qi=0,ff=0,hf=null,rg=null,fo=0,df=null;function Qn(){return(Ce&2)!==0&&ge!==0?ge&-ge:z.T!==null?Sf():Ls()}function sg(){if(Kn===0)if((ge&536870912)===0||ye){var e=ct;ct<<=1,(ct&3932160)===0&&(ct=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Gn(e,n,a){(e===He&&(De===2||De===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ca(e,ge,Kn,!1)),_n(e,a),((Ce&2)===0||e!==He)&&(e===He&&((Ce&2)===0&&(fr|=a),Je===4&&Ca(e,ge,Kn,!1)),Di(e))}function og(e,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||te(e,n),u=s?TS(e,n):mf(e,n,!0),f=s;do{if(u===0){Kr&&!s&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!MS(a)){u=mf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=e;u=uo;var B=T.current.memoizedState.isDehydrated;if(B&&($r(T,S).flags|=256),S=mf(T,S,!1),S!==2){if(lf&&!B){T.errorRecoveryDisabledLanes|=f,fr|=f,u=4;break t}f=Hn,Hn=u,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){$r(e,0),Ca(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(s,n,Kn,!Ta);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Rl+300-ht(),10<u)){if(Ca(s,n,Kn,!Ta),wt(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=Fg(lg.bind(null,s,a,Hn,wl,uf,n,Kn,fr,Qr,Ta,f,"Throttled",-0,0),u);break t}lg(s,a,Hn,wl,uf,n,Kn,fr,Qr,Ta,f,null,-0,0)}}break}while(!0);Di(e)}function lg(e,n,a,s,u,f,S,T,B,$,ut,mt,et,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},tg(n,f,mt);var Bt=(f&62914560)===f?Rl-ht():(f&4194048)===f?ag-ht():0;if(Bt=sx(mt,Bt),Bt!==null){Qi=f,e.cancelPendingCommit=Bt(gg.bind(null,e,n,f,a,s,u,S,T,B,ut,mt,null,et,ot)),Ca(e,f,S,!$);return}}gg(e,n,f,a,s,u,S,T,B)}function MS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,s){n&=~cf,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Jt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&Ds(e,a,n)}function Dl(){return(Ce&6)===0?(ho(0),!1):!0}function pf(){if(fe!==null){if(De===0)var e=fe.return;else e=fe,Hi=nr=null,wu(e),kr=null,Zs=0,e=fe;for(;e!==null;)Im(e.alternate,e),e=e.return;fe=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,VS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,pf(),He=e,fe=a=Fi(e.current,null),ge=n,De=0,jn=null,Ta=!1,Kr=te(e,n),lf=!1,Qr=Kn=cf=fr=ba=Je=0,Hn=uo=null,uf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Jt(s),f=1<<u;n|=e[u],s&=~f}return Ki=n,Qo(),a}function cg(e,n){re=null,z.H=no,n===Vr||n===rl?(n=bp(),De=3):n===_u?(n=bp(),De=4):De=n===Wu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,fe===null&&(Je=1,Sl(e,ni(n,e.current)))}function ug(){var e=Yn.current;return e===null?!0:(ge&4194048)===ge?si===null:(ge&62914560)===ge||(ge&536870912)!==0?e===si:!1}function fg(){var e=z.H;return z.H=no,e===null?no:e}function hg(){var e=z.A;return z.A=xS,e}function Ul(){Je=4,Ta||(ge&4194048)!==ge&&Yn.current!==null||(Kr=!0),(ba&134217727)===0&&(fr&134217727)===0||He===null||Ca(He,ge,Kn,!1)}function mf(e,n,a){var s=Ce;Ce|=2;var u=fg(),f=hg();(He!==e||ge!==n)&&(wl=null,$r(e,n)),n=!1;var S=Je;t:do try{if(De!==0&&fe!==null){var T=fe,B=jn;switch(De){case 8:pf(),S=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=De;if(De=0,jn=null,ts(e,T,B,$),a&&Kr){S=0;break t}break;default:$=De,De=0,jn=null,ts(e,T,B,$)}}ES(),S=Je;break}catch(ut){cg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Hi=nr=null,Ce=s,z.H=u,z.A=f,fe===null&&(He=null,ge=0,Qo()),S}function ES(){for(;fe!==null;)dg(fe)}function TS(e,n){var a=Ce;Ce|=2;var s=fg(),u=hg();He!==e||ge!==n?(wl=null,Cl=ht()+500,$r(e,n)):Kr=te(e,n);t:do try{if(De!==0&&fe!==null){n=fe;var f=jn;e:switch(De){case 1:De=0,jn=null,ts(e,n,f,1);break;case 2:case 9:if(Ep(f)){De=0,jn=null,pg(n);break}n=function(){De!==2&&De!==9||He!==e||(De=7),Di(e)},f.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:Ep(f)?(De=0,jn=null,pg(n)):(De=0,jn=null,ts(e,n,f,7));break;case 5:var S=null;switch(fe.tag){case 26:S=fe.memoizedState;case 5:case 27:var T=fe;if(S?$g(S):T.stateNode.complete){De=0,jn=null;var B=T.sibling;if(B!==null)fe=B;else{var $=T.return;$!==null?(fe=$,Ll($)):fe=null}break e}}De=0,jn=null,ts(e,n,f,5);break;case 6:De=0,jn=null,ts(e,n,f,6);break;case 8:pf(),Je=6;break t;default:throw Error(r(462))}}bS();break}catch(ut){cg(e,ut)}while(!0);return Hi=nr=null,z.H=s,z.A=u,Ce=a,fe!==null?0:(He=null,ge=0,Qo(),Je)}function bS(){for(;fe!==null&&!b();)dg(fe)}function dg(e){var n=Bm(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Ll(e):fe=n}function pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Um(a,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=Um(a,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:wu(n);default:Im(a,n),n=fe=hp(n,Ki),n=Bm(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Ll(e):fe=n}function ts(e,n,a,s){Hi=nr=null,wu(n),kr=null,Zs=0;var u=n.return;try{if(dS(e,u,n,a,ge)){Je=1,Sl(e,ni(a,e.current)),fe=null;return}}catch(f){if(u!==null)throw fe=u,f;Je=1,Sl(e,ni(a,e.current)),fe=null;return}n.flags&32768?(ye||s===1?e=!0:Kr||(ge&536870912)!==0?e=!1:(Ta=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),mg(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){mg(n,Ta);return}e=n.return;var a=gS(n.alternate,n,Ki);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);Je===0&&(Je=5)}function mg(e,n){do{var a=_S(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Je=6,fe=null}function gg(e,n,a,s,u,f,S,T,B){e.cancelPendingCommit=null;do Nl();while(un!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=nu,pi(e,a,f,S,T,B),e===He&&(fe=He=null,ge=0),Jr=n,Ra=e,Qi=a,ff=f,hf=u,rg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wS(Rt,function(){return yg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=J.p,J.p=2,S=Ce,Ce|=4;try{vS(e,n,a)}finally{Ce=S,J.p=u,z.T=s}}un=1,_g(),vg(),Sg()}}function _g(){if(un===1){un=0;var e=Ra,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=J.p;J.p=2;var u=Ce;Ce|=4;try{Qm(n,e);var f=Rf,S=ip(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&np(T.ownerDocument.documentElement,T)){if(B!==null&&Qc(T)){var $=B.start,ut=B.end;if(ut===void 0&&(ut=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var ot=et.getSelection(),Bt=T.textContent.length,Kt=Math.min(B.start,Bt),Be=B.end===void 0?Kt:Math.min(B.end,Bt);!ot.extend&&Kt>Be&&(S=Be,Be=Kt,Kt=S);var Y=ep(T,Kt),V=ep(T,Be);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(Y.node,Y.offset),ot.removeAllRanges(),Kt>Be?(ot.addRange(Q),ot.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ot.addRange(Q))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var dt=mt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Wl=!!Af,Rf=Af=null}finally{Ce=u,J.p=s,z.T=a}}e.current=n,un=2}}function vg(){if(un===2){un=0;var e=Ra,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=J.p;J.p=2;var u=Ce;Ce|=4;try{qm(e,n.alternate,n)}finally{Ce=u,J.p=s,z.T=a}}un=3}}function Sg(){if(un===4||un===3){un=0,nt();var e=Ra,n=Jr,a=Qi,s=rg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Jr=Ra=null,xg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Rr(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=J.p,J.p=2,z.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var T=s[S];f(T.value,{componentStack:T.stack})}}finally{z.T=n,J.p=u}}(Qi&3)!==0&&Nl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===df?fo++:(fo=0,df=e):fo=0,ho(0)}}function xg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function Nl(){return _g(),vg(),Sg(),yg()}function yg(){if(un!==5)return!1;var e=Ra,n=ff;ff=0;var a=Rr(Qi),s=z.T,u=J.p;try{J.p=32>a?32:a,z.T=null,a=hf,hf=null;var f=Ra,S=Qi;if(un=0,Jr=Ra=null,Qi=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,ng(f.current),$m(f,f.current,S,a),Ce=T,ho(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Zt,f)}catch{}return!0}finally{J.p=u,z.T=s,xg(e,n)}}function Mg(e,n,a){n=ni(a,n),n=Xu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(_n(e,2),Di(e))}function Ue(e,n,a){if(e.tag===3)Mg(e,e,a);else for(;n!==null;){if(n.tag===3){Mg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Aa===null||!Aa.has(s))){e=ni(a,e),a=Em(2),s=xa(n,a,2),s!==null&&(Tm(a,s,n,e),_n(s,2),Di(s));break}}n=n.return}}function gf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new yS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(lf=!0,u.add(a),e=AS.bind(null,e,n,a),n.then(e,e))}function AS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(ge&a)===a&&(Je===4||Je===3&&(ge&62914560)===ge&&300>ht()-Rl?(Ce&2)===0&&$r(e,0):cf|=a,Qr===ge&&(Qr=0)),Di(e)}function Eg(e,n){n===0&&(n=ln()),e=$a(e,n),e!==null&&(_n(e,n),Di(e))}function RS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Eg(e,a)}function CS(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Eg(e,a)}function wS(e,n){return Vt(e,n)}var Ol=null,es=null,_f=!1,zl=!1,vf=!1,wa=0;function Di(e){e!==es&&e.next===null&&(es===null?Ol=es=e:es=es.next=e),zl=!0,_f||(_f=!0,US())}function ho(e,n){if(!vf&&zl){vf=!0;do for(var a=!1,s=Ol;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Jt(42|e)+1)-1,f&=u&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Rg(s,f))}else f=ge,f=wt(s,s===He?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||te(s,f)||(a=!0,Rg(s,f));s=s.next}while(a);vf=!1}}function DS(){Tg()}function Tg(){zl=_f=!1;var e=0;wa!==0&&GS()&&(e=wa);for(var n=ht(),a=null,s=Ol;s!==null;){var u=s.next,f=bg(s,n);f===0?(s.next=null,a===null?Ol=u:a.next=u,u===null&&(es=a)):(a=s,(e!==0||(f&3)!==0)&&(zl=!0)),s=u}un!==0&&un!==5||ho(e),wa!==0&&(wa=0)}function bg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Jt(f),T=1<<S,B=u[S];B===-1?((T&a)===0||(T&s)!==0)&&(u[S]=qe(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=He,a=ge,a=wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&L(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&L(s),Rr(a)){case 2:case 8:a=Ht;break;case 32:a=Rt;break;case 268435456:a=me;break;default:a=Rt}return s=Ag.bind(null,e),a=Vt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&L(s),e.callbackPriority=2,e.callbackNode=null,2}function Ag(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var s=ge;return s=wt(e,e===He?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(og(e,s,n),bg(e,ht()),e.callbackNode!=null&&e.callbackNode===a?Ag.bind(null,e):null)}function Rg(e,n){if(Nl())return null;og(e,n,!0)}function US(){kS(function(){(Ce&6)!==0?Vt(pt,DS):Tg()})}function Sf(){if(wa===0){var e=Hr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),wa=e}return wa}function Cg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function wg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function LS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Cg((u[vn]||null).action),S=s.submitter;S&&(n=(n=S[vn]||null)?Cg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Yo("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(wa!==0){var B=S?wg(u,S):new FormData(u);Fu(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=S?wg(u,S):new FormData(u),Fu(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var xf=0;xf<eu.length;xf++){var yf=eu[xf],NS=yf.toLowerCase(),OS=yf[0].toUpperCase()+yf.slice(1);_i(NS,"on"+OS)}_i(sp,"onAnimationEnd"),_i(op,"onAnimationIteration"),_i(lp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(K0,"onTransitionRun"),_i(Q0,"onTransitionStart"),_i(J0,"onTransitionCancel"),_i(cp,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Dg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var T=s[S],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ut){Ko(ut)}u.currentTarget=null,f=B}else for(S=0;S<s.length;S++){if(T=s[S],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ut){Ko(ut)}u.currentTarget=null,f=B}}}}function he(e,n){var a=n[Ns];a===void 0&&(a=n[Ns]=new Set);var s=e+"__bubble";a.has(s)||(Ug(n,e,2,!1),a.add(s))}function Mf(e,n,a){var s=0;n&&(s|=4),Ug(a,e,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[Pl]){e[Pl]=!0,Et.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,Mf("selectionchange",!1,n))}}function Ug(e,n,a,s){switch(s_(n)){case 2:var u=cx;break;case 8:u=ux;break;default:u=Ff}a=u.bind(null,n,a,e),u=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Tf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var T=s.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=s.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=A(T),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){s=f=S;continue t}T=T.parentNode}}s=s.return}Pd(function(){var $=f,ut=Hc(a),mt=[];t:{var et=up.get(e);if(et!==void 0){var ot=Yo,Bt=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":ot=C0;break;case"focusin":Bt="focus",ot=qc;break;case"focusout":Bt="blur",ot=qc;break;case"beforeblur":case"afterblur":ot=qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=U0;break;case sp:case op:case lp:ot=S0;break;case cp:ot=N0;break;case"scroll":case"scrollend":ot=p0;break;case"wheel":ot=z0;break;case"copy":case"cut":case"paste":ot=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Gd;break;case"toggle":case"beforetoggle":ot=B0}var Kt=(n&4)!==0,Be=!Kt&&(e==="scroll"||e==="scrollend"),Y=Kt?et!==null?et+"Capture":null:et;Kt=[];for(var V=$,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||Y===null||(dt=zs(V,Y),dt!=null&&Kt.push(mo(V,dt,Q))),Be)break;V=V.return}0<Kt.length&&(et=new ot(et,Bt,null,a,ut),mt.push({event:et,listeners:Kt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",et&&a!==Ic&&(Bt=a.relatedTarget||a.fromElement)&&(A(Bt)||Bt[zi]))break t;if((ot||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,ot?(Bt=a.relatedTarget||a.toElement,ot=$,Bt=Bt?A(Bt):null,Bt!==null&&(Be=c(Bt),Kt=Bt.tag,Bt!==Be||Kt!==5&&Kt!==27&&Kt!==6)&&(Bt=null)):(ot=null,Bt=$),ot!==Bt)){if(Kt=Id,dt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Kt=Gd,dt="onPointerLeave",Y="onPointerEnter",V="pointer"),Be=ot==null?et:rt(ot),Q=Bt==null?et:rt(Bt),et=new Kt(dt,V+"leave",ot,a,ut),et.target=Be,et.relatedTarget=Q,dt=null,A(ut)===$&&(Kt=new Kt(Y,V+"enter",Bt,a,ut),Kt.target=Q,Kt.relatedTarget=Be,dt=Kt),Be=dt,ot&&Bt)e:{for(Kt=PS,Y=ot,V=Bt,Q=0,dt=Y;dt;dt=Kt(dt))Q++;dt=0;for(var Wt=V;Wt;Wt=Kt(Wt))dt++;for(;0<Q-dt;)Y=Kt(Y),Q--;for(;0<dt-Q;)V=Kt(V),dt--;for(;Q--;){if(Y===V||V!==null&&Y===V.alternate){Kt=Y;break e}Y=Kt(Y),V=Kt(V)}Kt=null}else Kt=null;ot!==null&&Lg(mt,et,ot,Kt,!1),Bt!==null&&Be!==null&&Lg(mt,Be,Bt,Kt,!0)}}t:{if(et=$?rt($):window,ot=et.nodeName&&et.nodeName.toLowerCase(),ot==="select"||ot==="input"&&et.type==="file")var be=jd;else if(Yd(et))if(Kd)be=Y0;else{be=W0;var It=X0}else ot=et.nodeName,!ot||ot.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?$&&Fc($.elementType)&&(be=jd):be=q0;if(be&&(be=be(e,$))){Zd(mt,be,a,ut);break t}It&&It(e,et,$),e==="focusout"&&$&&et.type==="number"&&$.memoizedProps.value!=null&&bn(et,"number",et.value)}switch(It=$?rt($):window,e){case"focusin":(Yd(It)||It.contentEditable==="true")&&(Lr=It,Jc=$,ks=null);break;case"focusout":ks=Jc=Lr=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,ap(mt,a,ut);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":ap(mt,a,ut)}var se;if(Zc)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Ur?Wd(e,a)&&(_e="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Vd&&a.locale!=="ko"&&(Ur||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ur&&(se=Bd()):(da=ut,kc="value"in da?da.value:da.textContent,Ur=!0)),It=Bl($,_e),0<It.length&&(_e=new Hd(_e,e,null,a,ut),mt.push({event:_e,listeners:It}),se?_e.data=se:(se=qd(a),se!==null&&(_e.data=se)))),(se=I0?H0(e,a):G0(e,a))&&(_e=Bl($,"onBeforeInput"),0<_e.length&&(It=new Hd("onBeforeInput","beforeinput",null,a,ut),mt.push({event:It,listeners:_e}),It.data=se)),LS(mt,e,$,a,ut)}Dg(mt,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=zs(e,a),u!=null&&s.unshift(mo(e,u,f)),u=zs(e,n),u!=null&&s.push(mo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function PS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lg(e,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=zs(a,f),$!=null&&S.unshift(mo(a,$,B))):u||($=zs(a,f),$!=null&&S.push(mo(a,$,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var BS=/\r\n?/g,FS=/\u0000|\uFFFD/g;function Ng(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(FS,"")}function Og(e,n){return n=Ng(n),Ng(e)===n}function Pe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||zn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&zn(e,""+s);break;case"className":Ve(e,"class",s);break;case"tabIndex":Ve(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(e,a,s);break;case"style":Od(e,s,f);break;case"data":if(n!=="object"){Ve(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&he("scroll",e);break;case"onScrollEnd":s!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":he("beforetoggle",e),he("toggle",e),xe(e,"popover",s);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":xe(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=h0.get(a)||a,xe(e,a,s))}}function bf(e,n,a,s,u,f){switch(a){case"style":Od(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?zn(e,s):(typeof s=="number"||typeof s=="bigint")&&zn(e,""+s);break;case"onScroll":s!=null&&he("scroll",e);break;case"onScrollEnd":s!=null&&he("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):xe(e,a,s)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,f,S,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),s&&Pe(e,n,"src",a.src,a,null);return;case"input":he("invalid",e);var T=f=S=u=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":S=ut;break;case"checked":B=ut;break;case"defaultChecked":$=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Pe(e,n,s,ut,a,null)}}Un(e,f,T,B,$,S,u,!1);return;case"select":he("invalid",e),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":s=T;default:Pe(e,n,u,T,a,null)}n=f,a=S,e.multiple=!!s,n!=null?Ke(e,!!s,n,!1):a!=null&&Ke(e,!!s,a,!0);return;case"textarea":he("invalid",e),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Pe(e,n,S,T,a,null)}Cr(e,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(e,n,B,s,a,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)he(po[s],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,$,s,a,null)}return;default:if(Fc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&bf(e,n,ut,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Pe(e,n,T,s,a,null))}function IS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,T=null,B=null,$=null,ut=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=mt;default:s.hasOwnProperty(ot)||Pe(e,n,ot,null,s,mt)}}for(var et in s){var ot=s[et];if(mt=a[et],s.hasOwnProperty(et)&&(ot!=null||mt!=null))switch(et){case"type":f=ot;break;case"name":u=ot;break;case"checked":$=ot;break;case"defaultChecked":ut=ot;break;case"value":S=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Pe(e,n,et,ot,s,mt)}}Oe(e,S,T,B,$,ut,f,u);return;case"select":ot=S=T=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||Pe(e,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==B&&Pe(e,n,u,f,s,B)}n=T,a=S,s=ot,et!=null?Ke(e,!!a,et,!1):!!s!=!!a&&(n!=null?Ke(e,!!a,n,!0):Ke(e,!!a,a?[]:"",!1));return;case"textarea":ot=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(e,n,T,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":et=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(e,n,S,u,s,f)}Sn(e,et,ot);return;case"option":for(var Bt in a)if(et=a[Bt],a.hasOwnProperty(Bt)&&et!=null&&!s.hasOwnProperty(Bt))switch(Bt){case"selected":e.selected=!1;break;default:Pe(e,n,Bt,null,s,et)}for(B in s)if(et=s[B],ot=a[B],s.hasOwnProperty(B)&&et!==ot&&(et!=null||ot!=null))switch(B){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Pe(e,n,B,et,s,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)et=a[Kt],a.hasOwnProperty(Kt)&&et!=null&&!s.hasOwnProperty(Kt)&&Pe(e,n,Kt,null,s,et);for($ in s)if(et=s[$],ot=a[$],s.hasOwnProperty($)&&et!==ot&&(et!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Pe(e,n,$,et,s,ot)}return;default:if(Fc(n)){for(var Be in a)et=a[Be],a.hasOwnProperty(Be)&&et!==void 0&&!s.hasOwnProperty(Be)&&bf(e,n,Be,void 0,s,et);for(ut in s)et=s[ut],ot=a[ut],!s.hasOwnProperty(ut)||et===ot||et===void 0&&ot===void 0||bf(e,n,ut,et,s,ot);return}}for(var Y in a)et=a[Y],a.hasOwnProperty(Y)&&et!=null&&!s.hasOwnProperty(Y)&&Pe(e,n,Y,null,s,et);for(mt in s)et=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||et===ot||et==null&&ot==null||Pe(e,n,mt,et,s,ot)}function zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,S=u.initiatorType,T=u.duration;if(f&&T&&zg(S)){for(S=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>T)break;var ut=B.transferSize,mt=B.initiatorType;ut&&zg(mt)&&(B=B.responseEnd,S+=ut*(B<T?1:(T-$)/(B-$)))}if(--s,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Af=null,Rf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function Pg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function GS(){var e=window.event;return e&&e.type==="popstate"?e===wf?!1:(wf=e,!0):(wf=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,VS=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(e){return Ig.resolve(null).then(e).catch(XS)}:Fg;function XS(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function Hg(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var S=f.nextSibling,T=f.nodeName;f[ja]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&go(e.ownerDocument.body);a=u}while(a);rs(n)}function Gg(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Df(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function WS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function qS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oi(e.nextSibling),e===null))return null;return e}function Vg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function Uf(e){return e.data==="$?"||e.data==="$~"}function Lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function YS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Nf=null;function kg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Xg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Wg(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Os(e)}var li=new Map,qg=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=J.d;J.d={f:ZS,r:jS,D:KS,C:QS,L:JS,m:$S,X:ex,S:tx,M:nx};function ZS(){var e=Ji.f(),n=Dl();return e||n}function jS(e){var n=q(e);n!==null&&n.tag===5&&n.type==="form"?cm(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function Yg(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),qg.has(u)||(qg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),En(n,"link",e),X(n),s.head.appendChild(n)))}}function KS(e){Ji.D(e),Yg("dns-prefetch",e,null)}function QS(e,n){Ji.C(e,n),Yg("preconnect",e,n)}function JS(e,n,a){Ji.L(e,n,a);var s=ns;if(s&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var f=u;switch(n){case"style":f=is(e);break;case"script":f=as(e)}li.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),En(n,"link",e),X(n),s.head.appendChild(n)))}}function $S(e,n){Ji.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(s)+'"][href="'+pn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!li.has(f)&&(e=_({rel:"modulepreload",href:e},n),li.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),En(s,"link",e),X(s),a.head.appendChild(s)}}}function tx(e,n,a){Ji.S(e,n,a);var s=ns;if(s&&e){var u=st(s).hoistableStyles,f=is(e);n=n||"default";var S=u.get(f);if(!S){var T={loading:0,preload:null};if(S=s.querySelector(_o(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(f))&&Of(e,a);var B=S=s.createElement("link");X(B),En(B,"link",e),B._p=new Promise(function($,ut){B.onload=$,B.onerror=ut}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Hl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(f,S)}}}function ex(e,n){Ji.X(e,n);var a=ns;if(a&&e){var s=st(a).hoistableScripts,u=as(e),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(e=_({src:e,async:!0},n),(n=li.get(u))&&zf(e,n),f=a.createElement("script"),X(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function nx(e,n){Ji.M(e,n);var a=ns;if(a&&e){var s=st(a).hoistableScripts,u=as(e),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=li.get(u))&&zf(e,n),f=a.createElement("script"),X(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Zg(e,n,a,s){var u=(u=Mt.current)?Il(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=st(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=st(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(_o(e)))&&!f._p&&(S.instance=f,S.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),f||ix(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=st(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+pn(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function jg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function ix(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),En(n,"link",a),X(n),e.head.appendChild(n))}function as(e){return'[src="'+pn(e)+'"]'}function vo(e){return"script[async]"+e}function Kg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(s)return n.instance=s,X(s),s;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),X(s),En(s,"style",u),Hl(s,a.precedence,e),n.instance=s;case"stylesheet":u=is(a.href);var f=e.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,X(f),f;s=jg(a),(u=li.get(u))&&Of(s,u),f=(e.ownerDocument||e).createElement("link"),X(f);var S=f;return S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),En(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(u=e.querySelector(vo(f)))?(n.instance=u,X(u),u):(s=a,(u=li.get(f))&&(s=_({},a),zf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),En(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,e));return n.instance}function Hl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var T=s[S];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gl=null;function Qg(e,n,a){if(Gl===null){var s=new Map,u=Gl=new Map;u.set(a,s)}else u=Gl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ja]||f[je]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=s.get(S);T?T.push(f):s.set(S,[f])}}return s}function Jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ax(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rx(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=is(s.href),f=n.querySelector(_o(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,X(f);return}f=n.ownerDocument||n,s=jg(s),(u=li.get(u))&&Of(s,u),f=f.createElement("link"),X(f);var S=f;S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),En(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Pf=0;function sx(e,n){return e.stylesheets&&e.count===0&&Xl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Pf===0&&(Pf=62500*HS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Pf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Xl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,n.forEach(ox,e),kl=null,Vl.call(e))}function ox(e,n){if(!(n.state.loading&4)){var a=kl.get(e);if(a)var s=a.get(null);else{a=new Map,kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=Vl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var So={$$typeof:D,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function lx(e,n,a,s,u,f,S,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function t_(e,n,a,s,u,f,S,T,B,$,ut,mt){return e=new lx(e,n,a,S,B,$,ut,mt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},vu(f),e}function e_(e){return e?(e=zr,e):zr}function n_(e,n,a,s,u,f){u=e_(u),s.context===null?s.context=u:s.pendingContext=u,s=Sa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(e,s,n),a!==null&&(Gn(a,e,n),Ks(a,e,n))}function i_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Bf(e,n){i_(e,n),(e=e.alternate)&&i_(e,n)}function a_(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Gn(n,e,67108864),Bf(e,67108864)}}function r_(e){if(e.tag===13||e.tag===31){var n=Qn();n=Ya(n);var a=$a(e,n);a!==null&&Gn(a,e,n),Bf(e,n)}}var Wl=!0;function cx(e,n,a,s){var u=z.T;z.T=null;var f=J.p;try{J.p=2,Ff(e,n,a,s)}finally{J.p=f,z.T=u}}function ux(e,n,a,s){var u=z.T;z.T=null;var f=J.p;try{J.p=8,Ff(e,n,a,s)}finally{J.p=f,z.T=u}}function Ff(e,n,a,s){if(Wl){var u=If(s);if(u===null)Tf(e,n,s,ql,a),o_(e,s);else if(hx(u,e,n,a,s))s.stopPropagation();else if(o_(e,s),n&4&&-1<fx.indexOf(e)){for(;u!==null;){var f=q(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=At(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var B=1<<31-Jt(S);T.entanglements[1]|=B,S&=~B}Di(f),(Ce&6)===0&&(Cl=ht()+500,ho(0))}}break;case 31:case 13:T=$a(f,2),T!==null&&Gn(T,f,2),Dl(),Bf(f,2)}if(f=If(s),f===null&&Tf(e,n,s,ql,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Tf(e,n,s,null,a)}}function If(e){return e=Hc(e),Hf(e)}var ql=null;function Hf(e){if(ql=null,e=A(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function s_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case pt:return 2;case Ht:return 8;case Rt:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ua=null,La=null,Na=null,xo=new Map,yo=new Map,Oa=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=q(n),n!==null&&a_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function hx(e,n,a,s,u){switch(n){case"focusin":return Ua=Mo(Ua,e,n,a,s,u),!0;case"dragenter":return La=Mo(La,e,n,a,s,u),!0;case"mouseover":return Na=Mo(Na,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return xo.set(f,Mo(xo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,yo.set(f,Mo(yo.get(f)||null,e,n,a,s,u)),!0}return!1}function l_(e){var n=A(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Za(e.priority,function(){r_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Za(e.priority,function(){r_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=If(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Ic=s,a.target.dispatchEvent(s),Ic=null}else return n=q(a),n!==null&&a_(n),e.blockedOn=a,!1;n.shift()}return!0}function c_(e,n,a){Yl(e)&&a.delete(n)}function dx(){Gf=!1,Ua!==null&&Yl(Ua)&&(Ua=null),La!==null&&Yl(La)&&(La=null),Na!==null&&Yl(Na)&&(Na=null),xo.forEach(c_),yo.forEach(c_)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,dx)))}var jl=null;function u_(e){jl!==e&&(jl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Hf(s||a)===null)continue;break}var f=q(a);f!==null&&(e.splice(n,3),n-=3,Fu(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function rs(e){function n(B){return Zl(B,e)}Ua!==null&&Zl(Ua,e),La!==null&&Zl(La,e),Na!==null&&Zl(Na,e),xo.forEach(n),yo.forEach(n);for(var a=0;a<Oa.length;a++){var s=Oa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)l_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[vn]||null;if(typeof f=="function")S||u_(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[vn]||null)T=S.formAction;else if(Hf(u)!==null)continue}else T=S.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),u_(a)}}}function f_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Vf(e){this._internalRoot=e}Kl.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();n_(a,s,e,n,null,null)},Kl.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;n_(e.current,2,null,e,null,null),Dl(),n[zi]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ls();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&l_(e)}};var h_=t.version;if(h_!=="19.2.7")throw Error(r(527,h_,"19.2.7"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var px={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Zt=Ql.inject(px),Gt=Ql}catch{}}return To.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Sm,f=xm,S=ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=t_(e,1,!1,null,null,a,s,null,u,f,S,f_),e[zi]=n.current,Ef(e),new Vf(n)},To.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Sm,S=xm,T=ym,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=t_(e,1,!0,n,a??null,s,u,B,f,S,T,f_),n.context=e_(null),a=n.current,s=Qn(),s=Ya(s),u=Sa(s),u.callback=null,xa(a,u,s),a=s,n.current.lanes=a,_n(n,a),Di(n),e[zi]=n.current,Ef(e),new Kl(n)},To.version="19.2.7",To}var M_;function Ax(){if(M_)return Wf.exports;M_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wf.exports=bx(),Wf.exports}var Rx=Ax();const Cx="modulepreload",wx=function(o){return"/makemecubemaster/"+o},E_={},Dx=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let h=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=h(i.map(m=>{if(m=wx(m),m in E_)return;E_[m]=!0;const g=m.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":Cx,g||(v.as="script"),v.crossOrigin="",v.href=m,p&&v.setAttribute("nonce",p),document.head.appendChild(v),g)return new Promise((y,E)=>{v.addEventListener("load",y),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};function Ux(o={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:r,onOfflineReady:l,onRegistered:c,onRegisteredSW:h,onRegisterError:d}=o;let p,m;const g=async(v=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(p=await Dx(async()=>{const{Workbox:v}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:v}},[]).then(({Workbox:v})=>new v("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(v=>{d==null||d(v)}),!p)return;p.addEventListener("activated",v=>{(v.isUpdate||v.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",v=>{v.isUpdate||l==null||l()}),p.register({immediate:t}).then(v=>{h?h("/makemecubemaster/sw.js",v):c==null||c(v)}).catch(v=>{d==null||d(v)})}}return m=_(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="175",Lx=0,T_=1,Nx=2,Rv=1,Ox=2,aa=3,Wa=0,kn=1,ra=2,ka=0,ys=1,b_=2,A_=3,R_=4,zx=5,xr=100,Px=101,Bx=102,Fx=103,Ix=104,Hx=200,Gx=201,Vx=202,kx=203,wh=204,Dh=205,Xx=206,Wx=207,qx=208,Yx=209,Zx=210,jx=211,Kx=212,Qx=213,Jx=214,Uh=0,Lh=1,Nh=2,Es=3,Oh=4,zh=5,Ph=6,Bh=7,Cv=0,$x=1,ty=2,Xa=0,ey=1,ny=2,iy=3,ay=4,ry=5,sy=6,oy=7,wv=300,Ts=301,bs=302,Fh=303,Ih=304,Lc=306,Hh=1e3,Mr=1001,Gh=1002,bi=1003,ly=1004,Jl=1005,Ni=1006,jf=1007,Er=1008,ca=1009,Dv=1010,Uv=1011,No=1012,vd=1013,br=1014,sa=1015,Bo=1016,Sd=1017,xd=1018,Oo=1020,Lv=35902,Nv=1021,Ov=1022,Ti=1023,zv=1024,Pv=1025,zo=1026,Po=1027,Bv=1028,yd=1029,Fv=1030,Md=1031,Ed=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,qh=36196,Yh=37492,Zh=37496,jh=37808,Kh=37809,Qh=37810,Jh=37811,$h=37812,td=37813,ed=37814,nd=37815,id=37816,ad=37817,rd=37818,sd=37819,od=37820,ld=37821,bc=36492,cd=36494,ud=36495,Iv=36283,fd=36284,hd=36285,dd=36286,cy=3200,uy=3201,fy=0,hy=1,Va="",fi="srgb",As="srgb-linear",wc="linear",Fe="srgb",ss=7680,C_=519,dy=512,py=513,my=514,Hv=515,gy=516,_y=517,vy=518,Sy=519,w_=35044,D_="300 es",oa=2e3,Dc=2001;class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,pd=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function de(o,t,i){return Math.max(t,Math.min(i,o))}function xy(o,t){return(o%t+t)%t}function Qf(o,t,i){return(1-i)*o+i*t}function bo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,i=0){$t.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(de(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,r,l,c,h,d,p,m){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,p,m)}set(t,i,r,l,c,h,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],y=r[5],E=r[8],R=l[0],M=l[3],x=l[6],F=l[1],D=l[4],w=l[7],H=l[2],P=l[5],N=l[8];return c[0]=h*R+d*F+p*H,c[3]=h*M+d*D+p*P,c[6]=h*x+d*w+p*N,c[1]=m*R+g*F+_*H,c[4]=m*M+g*D+_*P,c[7]=m*x+g*w+_*N,c[2]=v*R+y*F+E*H,c[5]=v*M+y*D+E*P,c[8]=v*x+y*w+E*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*h*g-i*d*m-r*c*g+r*d*p+l*c*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*h-d*m,v=d*p-g*c,y=m*c-h*p,E=i*_+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(l*m-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=v*R,t[4]=(g*i-l*p)*R,t[5]=(l*c-d*i)*R,t[6]=y*R,t[7]=(r*p-m*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new oe;function Gv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yy(){const o=Uc("canvas");return o.style.display="block",o}const U_={};function Ac(o){o in U_||(U_[o]=!0,console.warn(o))}function My(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Ey(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ty(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const L_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function by(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?wc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:t,whitePoint:r,transfer:wc,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:L_,fromXYZ:N_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Re=by();function la(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class Ay{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Uc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Uc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ry=0;class Td{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push($f(l[h].image)):c.push($f(l[h]))}else c=$f(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ay.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cy=0;class Xn extends Cs{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Mr,l=Mr,c=Ni,h=Er,d=Ti,p=ca,m=Xn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Fo(),this.name="",this.source=new Td(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hh:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case Gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hh:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case Gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=wv;Xn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],y=p[5],E=p[9],R=p[2],M=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,w=(y+1)/2,H=(x+1)/2,P=(g+v)/4,N=(_+R)/4,k=(E+M)/4;return D>w&&D>H?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=P/r,c=N/r):w>H?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=P/l,c=k/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=N/c,l=k/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-E)*(M-E)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(F)<.001&&(F=1),this.x=(M-E)/F,this.y=(_-R)/F,this.z=(v-g)/F,this.w=Math.acos((m+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this.w=de(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this.w=de(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends Cs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Td(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends wy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Vv extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dy extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const v=c[h+0],y=c[h+1],E=c[h+2],R=c[h+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=R;return}if(_!==R||p!==v||m!==y||g!==E){let M=1-d;const x=p*v+m*y+g*E+_*R,F=x>=0?1:-1,D=1-x*x;if(D>Number.EPSILON){const H=Math.sqrt(D),P=Math.atan2(H,x*F);M=Math.sin(M*P)/H,d=Math.sin(d*P)/H}const w=d*F;if(p=p*M+v*w,m=m*M+y*w,g=g*M+E*w,_=_*M+R*w,M===1-d){const H=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=H,m*=H,g*=H,_*=H}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[h],v=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+g*_+p*y-m*v,t[i+1]=p*E+g*v+m*_-d*y,t[i+2]=m*E+g*y+d*v-p*_,t[i+3]=g*E-d*_-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(c/2),v=p(r/2),y=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=v*g*_+m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_+v*y*E;break;case"YZX":this._x=v*g*_+m*y*E,this._y=m*y*_+v*g*E,this._z=m*g*E-v*y*_,this._w=m*g*_-v*y*E;break;case"XZY":this._x=v*g*_-m*y*E,this._y=m*y*_-v*g*E,this._z=m*g*E+v*y*_,this._w=m*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-r*m,this._z=c*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=h*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(O_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(O_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+p*m+h*_-d*g,this.y=r+p*g+d*m-c*_,this.z=l+p*_+c*g-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(de(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(de(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new Z,O_=new Io;class Ho{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,xi):xi.fromBufferAttribute(c,h),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),tc.subVectors(this.max,Ao),ls.subVectors(t.a,Ao),cs.subVectors(t.b,Ao),us.subVectors(t.c,Ao),Pa.subVectors(cs,ls),Ba.subVectors(us,cs),hr.subVectors(ls,us);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-hr.z,hr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,hr.z,0,-hr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-hr.y,hr.x,0];return!eh(i,ls,cs,us,tc)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,ls,cs,us,tc))?!1:(ec.crossVectors(Pa,Ba),i=[ec.x,ec.y,ec.z],eh(i,ls,cs,us,tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],xi=new Z,$l=new Ho,ls=new Z,cs=new Z,us=new Z,Pa=new Z,Ba=new Z,hr=new Z,Ao=new Z,tc=new Z,ec=new Z,dr=new Z;function eh(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){dr.fromArray(o,c);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),p=t.dot(dr),m=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const Uy=new Ho,Ro=new Z,nh=new Z;class bd{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Uy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(nh)),this.expandByPoint(Ro.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new Z,ih=new Z,nc=new Z,Fa=new Z,ah=new Z,ic=new Z,rh=new Z;class Ly{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ih.copy(t).add(i).multiplyScalar(.5),nc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(ih);const c=t.distanceTo(i)*.5,h=-this.direction.dot(nc),d=Fa.dot(this.direction),p=-Fa.dot(nc),m=Fa.lengthSq(),g=Math.abs(1-h*h);let _,v,y,E;if(g>0)if(_=h*p-d,v=h*d-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const R=1/g;_*=R,v*=R,y=_*(_+h*v+2*d)+v*(h*_+v+2*p)+m}else v=c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-h*c+d)),v=_>0?-c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(_=Math.max(0,-(h*c+d)),v=_>0?c:Math.min(Math.max(-c,-p),c),y=-_*_+v*(v+2*p)+m);else v=h>0?-c:c,_=Math.max(0,-(h*v+d)),y=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ih).addScaledVector(nc,v),y}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,c){ah.subVectors(i,t),ic.subVectors(r,t),rh.crossVectors(ah,ic);let h=this.direction.dot(rh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const p=d*this.direction.dot(ic.crossVectors(Fa,ic));if(p<0)return null;const m=d*this.direction.dot(ah.cross(Fa));if(m<0||p+m>h)return null;const g=-d*Fa.dot(rh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(t,i,r,l,c,h,d,p,m,g,_,v,y,E,R,M){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,p,m,g,_,v,y,E,R,M)}set(t,i,r,l,c,h,d,p,m,g,_,v,y,E,R,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=p,x[2]=m,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),c=1/fs.setFromMatrixColumn(t,1).length(),h=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=h*g,y=h*_,E=d*g,R=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=y+E*m,i[5]=v-R*m,i[9]=-d*p,i[2]=R-v*m,i[6]=E+y*m,i[10]=h*p}else if(t.order==="YXZ"){const v=p*g,y=p*_,E=m*g,R=m*_;i[0]=v+R*d,i[4]=E*d-y,i[8]=h*m,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=R+v*d,i[10]=h*p}else if(t.order==="ZXY"){const v=p*g,y=p*_,E=m*g,R=m*_;i[0]=v-R*d,i[4]=-h*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=R-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const v=h*g,y=h*_,E=d*g,R=d*_;i[0]=p*g,i[4]=E*m-y,i[8]=v*m+R,i[1]=p*_,i[5]=R*m+v,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const v=h*p,y=h*m,E=d*p,R=d*m;i[0]=p*g,i[4]=R-v*_,i[8]=E*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*_+E,i[10]=v-R*_}else if(t.order==="XZY"){const v=h*p,y=h*m,E=d*p,R=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+R,i[5]=h*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*g,i[10]=R*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ny,t,Oy)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ia.crossVectors(r,Jn),Ia.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ia.crossVectors(r,Jn)),Ia.normalize(),ac.crossVectors(Jn,Ia),l[0]=Ia.x,l[4]=ac.x,l[8]=Jn.x,l[1]=Ia.y,l[5]=ac.y,l[9]=Jn.y,l[2]=Ia.z,l[6]=ac.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],y=r[13],E=r[2],R=r[6],M=r[10],x=r[14],F=r[3],D=r[7],w=r[11],H=r[15],P=l[0],N=l[4],k=l[8],U=l[12],C=l[1],G=l[5],it=l[9],tt=l[13],lt=l[2],gt=l[6],z=l[10],J=l[14],K=l[3],xt=l[7],Tt=l[11],O=l[15];return c[0]=h*P+d*C+p*lt+m*K,c[4]=h*N+d*G+p*gt+m*xt,c[8]=h*k+d*it+p*z+m*Tt,c[12]=h*U+d*tt+p*J+m*O,c[1]=g*P+_*C+v*lt+y*K,c[5]=g*N+_*G+v*gt+y*xt,c[9]=g*k+_*it+v*z+y*Tt,c[13]=g*U+_*tt+v*J+y*O,c[2]=E*P+R*C+M*lt+x*K,c[6]=E*N+R*G+M*gt+x*xt,c[10]=E*k+R*it+M*z+x*Tt,c[14]=E*U+R*tt+M*J+x*O,c[3]=F*P+D*C+w*lt+H*K,c[7]=F*N+D*G+w*gt+H*xt,c[11]=F*k+D*it+w*z+H*Tt,c[15]=F*U+D*tt+w*J+H*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],R=t[7],M=t[11],x=t[15];return E*(+c*p*_-l*m*_-c*d*v+r*m*v+l*d*y-r*p*y)+R*(+i*p*y-i*m*v+c*h*v-l*h*y+l*m*g-c*p*g)+M*(+i*m*_-i*d*y-c*h*_+r*h*y+c*d*g-r*m*g)+x*(-l*d*g-i*p*_+i*d*v+l*h*_-r*h*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],R=t[13],M=t[14],x=t[15],F=_*M*m-R*v*m+R*p*y-d*M*y-_*p*x+d*v*x,D=E*v*m-g*M*m-E*p*y+h*M*y+g*p*x-h*v*x,w=g*R*m-E*_*m+E*d*y-h*R*y-g*d*x+h*_*x,H=E*_*p-g*R*p-E*d*v+h*R*v+g*d*M-h*_*M,P=i*F+r*D+l*w+c*H;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=F*N,t[1]=(R*v*c-_*M*c-R*l*y+r*M*y+_*l*x-r*v*x)*N,t[2]=(d*M*c-R*p*c+R*l*m-r*M*m-d*l*x+r*p*x)*N,t[3]=(_*p*c-d*v*c-_*l*m+r*v*m+d*l*y-r*p*y)*N,t[4]=D*N,t[5]=(g*M*c-E*v*c+E*l*y-i*M*y-g*l*x+i*v*x)*N,t[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*x-i*p*x)*N,t[7]=(h*v*c-g*p*c+g*l*m-i*v*m-h*l*y+i*p*y)*N,t[8]=w*N,t[9]=(E*_*c-g*R*c-E*r*y+i*R*y+g*r*x-i*_*x)*N,t[10]=(h*R*c-E*d*c+E*r*m-i*R*m-h*r*x+i*d*x)*N,t[11]=(g*d*c-h*_*c-g*r*m+i*_*m+h*r*y-i*d*y)*N,t[12]=H*N,t[13]=(g*R*l-E*_*l+E*r*v-i*R*v-g*r*M+i*_*M)*N,t[14]=(E*d*l-h*R*l-E*r*p+i*R*p+h*r*M-i*d*M)*N,t[15]=(h*_*l-g*d*l+g*r*p-i*_*p-h*r*v+i*d*v)*N,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,p=t.z,m=c*h,g=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,_=d+d,v=c*m,y=c*g,E=c*_,R=h*g,M=h*_,x=d*_,F=p*m,D=p*g,w=p*_,H=r.x,P=r.y,N=r.z;return l[0]=(1-(R+x))*H,l[1]=(y+w)*H,l[2]=(E-D)*H,l[3]=0,l[4]=(y-w)*P,l[5]=(1-(v+x))*P,l[6]=(M+F)*P,l[7]=0,l[8]=(E+D)*N,l[9]=(M-F)*N,l[10]=(1-(v+R))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=fs.set(l[0],l[1],l[2]).length();const h=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const m=1/c,g=1/h,_=1/d;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,i.setFromRotationMatrix(yi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),v=(r+l)/(r-l);let y,E;if(d===oa)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Dc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(h-c),v=(i+t)*m,y=(r+l)*g;let E,R;if(d===oa)E=(h+c)*_,R=-2*_;else if(d===Dc)E=c*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new Z,yi=new Ze,Ny=new Z(0,0,0),Oy=new Z(1,1,1),Ia=new Z,ac=new Z,Jn=new Z,z_=new Ze,P_=new Io;class ua{constructor(t=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-de(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(de(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-de(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(de(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(z_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class kv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zy=0;const B_=new Z,hs=new Io,ea=new Ze,rc=new Z,Co=new Z,Py=new Z,By=new Io,F_=new Z(1,0,0),I_=new Z(0,1,0),H_=new Z(0,0,1),G_={type:"added"},Fy={type:"removed"},ds={type:"childadded",child:null},sh={type:"childremoved",child:null};class wn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Z,i=new ua,r=new Io,l=new Z(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new oe}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(F_,t)}rotateY(t){return this.rotateOnAxis(I_,t)}rotateZ(t){return this.rotateOnAxis(H_,t)}translateOnAxis(t,i){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(F_,t)}translateY(t){return this.translateOnAxis(I_,t)}translateZ(t){return this.translateOnAxis(H_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?rc.copy(t):rc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Co,rc,this.up):ea.lookAt(rc,Co,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ea),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(G_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Fy),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(G_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Py),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,By,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Z(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Z,na=new Z,oh=new Z,ia=new Z,ps=new Z,ms=new Z,V_=new Z,lh=new Z,ch=new Z,uh=new Z,fh=new $e,hh=new $e,dh=new $e;class Ei{constructor(t=new Z,i=new Z,r=new Z){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Mi.subVectors(l,i),na.subVectors(r,i),oh.subVectors(t,i);const h=Mi.dot(Mi),d=Mi.dot(na),p=Mi.dot(oh),m=na.dot(na),g=na.dot(oh),_=h*m-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(m*p-d*g)*v,E=(h*g-d*p)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,c,h,d,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ia.x),p.addScaledVector(h,ia.y),p.addScaledVector(d,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,c,h){return fh.setScalar(0),hh.setScalar(0),dh.setScalar(0),fh.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,r),dh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(fh,c.x),h.addScaledVector(hh,c.y),h.addScaledVector(dh,c.z),h}static isFrontFacing(t,i,r,l){return Mi.subVectors(r,i),na.subVectors(t,i),Mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;ps.subVectors(l,r),ms.subVectors(c,r),lh.subVectors(t,r);const p=ps.dot(lh),m=ms.dot(lh);if(p<=0&&m<=0)return i.copy(r);ch.subVectors(t,l);const g=ps.dot(ch),_=ms.dot(ch);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(ps,h);uh.subVectors(t,c);const y=ps.dot(uh),E=ms.dot(uh);if(E>=0&&y<=E)return i.copy(c);const R=y*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ms,d);const M=g*E-y*_;if(M<=0&&_-g>=0&&y-E>=0)return V_.subVectors(c,l),d=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(V_,d);const x=1/(M+R+v);return h=R*x,d=v*x,i.copy(r).addScaledVector(ps,h).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},sc={h:0,s:0,l:0};function ph(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Le{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=xy(t,1),i=de(i,0,1),r=de(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=ph(h,c,t+1/3),this.g=ph(h,c,t),this.b=ph(h,c,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Xv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Re.fromWorkingColorSpace(Cn.copy(this),t),Math.round(de(Cn.r*255,0,255))*65536+Math.round(de(Cn.g*255,0,255))*256+Math.round(de(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const _=h-d;switch(m=g<=.5?_/(h+d):_/(2-h-d),h){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){Re.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(sc);const r=Qf(Ha.h,sc.h,i),l=Qf(Ha.s,sc.s,i),c=Qf(Ha.l,sc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Le;Le.NAMES=Xv;let Iy=0;class Nc extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=ys,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ad extends Nc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new Z,oc=new $t;let Hy=0;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=w_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(t),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w_&&(t.usage=this.usage),t}}class Wv extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class qv extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ti extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Gy=0;const ci=new Ze,mh=new wn,gs=new Z,$n=new Ho,wo=new Ho,gn=new Z;class fa extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gv(t)?qv:Wv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ti(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors($n.min,wo.min),$n.expandByPoint(gn),gn.addVectors($n.max,wo.max),$n.expandByPoint(gn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)gn.fromBufferAttribute(d,m),p&&(gs.fromBufferAttribute(t,m),gn.add(gs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let k=0;k<r.count;k++)d[k]=new Z,p[k]=new Z;const m=new Z,g=new Z,_=new Z,v=new $t,y=new $t,E=new $t,R=new Z,M=new Z;function x(k,U,C){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,C),v.fromBufferAttribute(c,k),y.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),g.sub(m),_.sub(m),y.sub(v),E.sub(v);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(G),d[k].add(R),d[U].add(R),d[C].add(R),p[k].add(M),p[U].add(M),p[C].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let k=0,U=F.length;k<U;++k){const C=F[k],G=C.start,it=C.count;for(let tt=G,lt=G+it;tt<lt;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const D=new Z,w=new Z,H=new Z,P=new Z;function N(k){H.fromBufferAttribute(l,k),P.copy(H);const U=d[k];D.copy(U),D.sub(H.multiplyScalar(H.dot(U))).normalize(),w.crossVectors(P,U);const G=w.dot(p[k])<0?-1:1;h.setXYZW(k,D.x,D.y,D.z,G)}for(let k=0,U=F.length;k<U;++k){const C=F[k],G=C.start,it=C.count;for(let tt=G,lt=G+it;tt<lt;tt+=3)N(t.getX(tt+0)),N(t.getX(tt+1)),N(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,p=new Z,m=new Z,g=new Z,_=new Z;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),R=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let y=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*g;for(let x=0;x<g;x++)v[E++]=m[y++]}return new Oi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],y=t(v,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const y=m[_];g.push(y.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,g=h.length;m<g;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const k_=new Ze,pr=new Ly,lc=new bd,X_=new Z,cc=new Z,uc=new Z,fc=new Z,gh=new Z,hc=new Z,W_=new Z,dc=new Z;class di extends wn{constructor(t=new fa,i=new Ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){hc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(gh.fromBufferAttribute(_,t),h?hc.addScaledVector(gh,g):hc.addScaledVector(gh.sub(i),g))}i.add(hc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(lc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(lc,X_)===null||pr.origin.distanceToSquared(X_)>(t.far-t.near)**2))&&(k_.copy(c).invert(),pr.copy(t.ray).applyMatrix4(k_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=v.length;E<R;E++){const M=v[E],x=h[M.materialIndex],F=Math.max(M.start,y.start),D=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=F,H=D;w<H;w+=3){const P=d.getX(w),N=d.getX(w+1),k=d.getX(w+2);l=pc(this,x,t,r,m,g,_,P,N,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=E,x=R;M<x;M+=3){const F=d.getX(M),D=d.getX(M+1),w=d.getX(M+2);l=pc(this,h,t,r,m,g,_,F,D,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,R=v.length;E<R;E++){const M=v[E],x=h[M.materialIndex],F=Math.max(M.start,y.start),D=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let w=F,H=D;w<H;w+=3){const P=w,N=w+1,k=w+2;l=pc(this,x,t,r,m,g,_,P,N,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let M=E,x=R;M<x;M+=3){const F=M,D=M+1,w=M+2;l=pc(this,h,t,r,m,g,_,F,D,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Vy(o,t,i,r,l,c,h,d){let p;if(t.side===kn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,t.side===Wa,d),p===null)return null;dc.copy(d),dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(dc);return m<i.near||m>i.far?null:{distance:m,point:dc.clone(),object:o}}function pc(o,t,i,r,l,c,h,d,p,m){o.getVertexPosition(d,cc),o.getVertexPosition(p,uc),o.getVertexPosition(m,fc);const g=Vy(o,t,i,r,cc,uc,fc,W_);if(g){const _=new Z;Ei.getBarycoord(W_,cc,uc,fc,_),l&&(g.uv=Ei.getInterpolatedAttribute(l,d,p,m,_,new $t)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,d,p,m,_,new $t)),h&&(g.normal=Ei.getInterpolatedAttribute(h,d,p,m,_,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new Z,materialIndex:0};Ei.getNormal(cc,uc,fc,v.normal),g.face=v,g.barycoord=_}return g}class Go extends fa{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(_,2));function E(R,M,x,F,D,w,H,P,N,k,U){const C=w/N,G=H/k,it=w/2,tt=H/2,lt=P/2,gt=N+1,z=k+1;let J=0,K=0;const xt=new Z;for(let Tt=0;Tt<z;Tt++){const O=Tt*G-tt;for(let at=0;at<gt;at++){const St=at*C-it;xt[R]=St*F,xt[M]=O*D,xt[x]=lt,m.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[x]=P>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(at/N),_.push(1-Tt/k),J+=1}}for(let Tt=0;Tt<k;Tt++)for(let O=0;O<N;O++){const at=v+O+gt*Tt,St=v+O+gt*(Tt+1),j=v+(O+1)+gt*(Tt+1),ft=v+(O+1)+gt*Tt;p.push(at,St,ft),p.push(St,j,ft),K+=6}d.addGroup(y,K,U),y+=K,v+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)t[l]=r[l]}return t}function ky(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Yv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const Xy={clone:Rs,merge:Nn};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Nc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=ky(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Zv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new Z,q_=new $t,Y_=new $t;class hi extends Zv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,q_,Y_),i.subVectors(Y_,q_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Kf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class Yy extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(_s,vs,t,i);l.layers=this.layers,this.add(l);const c=new hi(_s,vs,t,i);c.layers=this.layers,this.add(c);const h=new hi(_s,vs,t,i);h.layers=this.layers,this.add(h);const d=new hi(_s,vs,t,i);d.layers=this.layers,this.add(d);const p=new hi(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new hi(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class jv extends Xn{constructor(t=[],i=Ts,r,l,c,h,d,p,m,g){super(t,i,r,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zy extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new jv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ka});c.uniforms.tEquirect.value=i;const h=new di(l,c),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ni),new Yy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Tr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jy={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),x=this._getHandJoint(m,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Ky extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const vh=new Z,Qy=new Z,Jy=new oe;class vr{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=vh.subVectors(r,i).cross(Qy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(vh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Jy.getNormalMatrix(t),l=this.coplanarPoint(vh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new bd,mc=new Z;class Rd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,c=new vr,h=new vr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],y=l[8],E=l[9],R=l[10],M=l[11],x=l[12],F=l[13],D=l[14],w=l[15];if(r[0].setComponents(p-c,v-m,M-y,w-x).normalize(),r[1].setComponents(p+c,v+m,M+y,w+x).normalize(),r[2].setComponents(p+h,v+g,M+E,w+F).normalize(),r[3].setComponents(p-h,v-g,M-E,w-F).normalize(),r[4].setComponents(p-d,v-_,M-R,w-D).normalize(),i===oa)r[5].setComponents(p+d,v+_,M+R,w+D).normalize();else if(i===Dc)r[5].setComponents(d,_,R,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kv extends Xn{constructor(t,i,r=br,l,c,h,d=bi,p=bi,m,g=zo){if(g!==zo&&g!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Td(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ha{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=t*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(c-1);const g=r[l],v=r[l+1]-g,y=(h-g)/v;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new $t:new Z);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new Z,l=[],c=[],h=[],d=new Z,p=new Ze;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Z)}c[0]=new Z,h[0]=new Z;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(de(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(d,E))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(de(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],y*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qv extends ha{constructor(t=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new $t){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,y=m-this.aY;p=v*g-y*_+this.aX,m=v*_+y*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $y extends Qv{constructor(t,i,r,l,c,h){super(t,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Cd(){let o=0,t=0,i=0,r=0;function l(c,h,d,p){o=c,t=d,i=-3*c+3*h-2*d-p,r=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,m){l(h,d,m*(d-c),m*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,m,g,_){let v=(h-c)/m-(d-c)/(m+g)+(d-h)/g,y=(d-h)/g-(p-h)/(g+_)+(p-d)/_;v*=g,y*=g,l(h,d,v,y)},calc:function(c){const h=c*c,d=h*c;return o+t*c+i*h+r*d}}}const gc=new Z,Sh=new Cd,xh=new Cd,yh=new Cd;class Jv extends ha{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new Z){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(gc.subVectors(l[0],l[1]).add(l[0]),m=gc);const _=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(gc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=gc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),y),R=Math.pow(_.distanceToSquared(v),y),M=Math.pow(v.distanceToSquared(g),y);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),Sh.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,E,R,M),xh.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,E,R,M),yh.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,E,R,M)}else this.curveType==="catmullrom"&&(Sh.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),xh.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),yh.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return r.set(Sh.calc(p),xh.calc(p),yh.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Z().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Z_(o,t,i,r,l){const c=(r-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+c+h)*p+(-3*i+3*r-2*c-h)*d+c*o+i}function tM(o,t){const i=1-o;return i*i*t}function eM(o,t){return 2*(1-o)*o*t}function nM(o,t){return o*o*t}function Uo(o,t,i,r){return tM(o,t)+eM(o,i)+nM(o,r)}function iM(o,t){const i=1-o;return i*i*i*t}function aM(o,t){const i=1-o;return 3*i*i*o*t}function rM(o,t){return 3*(1-o)*o*o*t}function sM(o,t){return o*o*o*t}function Lo(o,t,i,r,l){return iM(o,t)+aM(o,i)+rM(o,r)+sM(o,l)}class oM extends ha{constructor(t=new $t,i=new $t,r=new $t,l=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new $t){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Lo(t,l.x,c.x,h.x,d.x),Lo(t,l.y,c.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lM extends ha{constructor(t=new Z,i=new Z,r=new Z,l=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Z){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Lo(t,l.x,c.x,h.x,d.x),Lo(t,l.y,c.y,h.y,d.y),Lo(t,l.z,c.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cM extends ha{constructor(t=new $t,i=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new $t){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new $t){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uM extends ha{constructor(t=new Z,i=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Z){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Z){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fM extends ha{constructor(t=new $t,i=new $t,r=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new $t){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Uo(t,l.x,c.x,h.x),Uo(t,l.y,c.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $v extends ha{constructor(t=new Z,i=new Z,r=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Z){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Uo(t,l.x,c.x,h.x),Uo(t,l.y,c.y,h.y),Uo(t,l.z,c.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hM extends ha{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new $t){const r=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],m=l[h],g=l[h>l.length-2?l.length-1:h+1],_=l[h>l.length-3?l.length-1:h+2];return r.set(Z_(d,p.x,m.x,g.x,_.x),Z_(d,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new $t().fromArray(l))}return this}}var dM=Object.freeze({__proto__:null,ArcCurve:$y,CatmullRomCurve3:Jv,CubicBezierCurve:oM,CubicBezierCurve3:lM,EllipseCurve:Qv,LineCurve:cM,LineCurve3:uM,QuadraticBezierCurve:fM,QuadraticBezierCurve3:$v,SplineCurve:hM});class wd extends fa{constructor(t=1,i=1,r=1,l=32,c=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],y=[];let E=0;const R=[],M=r/2;let x=0;F(),h===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(y,2));function F(){const w=new Z,H=new Z;let P=0;const N=(i-t)/r;for(let k=0;k<=c;k++){const U=[],C=k/c,G=C*(i-t)+t;for(let it=0;it<=l;it++){const tt=it/l,lt=tt*p+d,gt=Math.sin(lt),z=Math.cos(lt);H.x=G*gt,H.y=-C*r+M,H.z=G*z,_.push(H.x,H.y,H.z),w.set(gt,N,z).normalize(),v.push(w.x,w.y,w.z),y.push(tt,1-C),U.push(E++)}R.push(U)}for(let k=0;k<l;k++)for(let U=0;U<c;U++){const C=R[U][k],G=R[U+1][k],it=R[U+1][k+1],tt=R[U][k+1];(t>0||U!==0)&&(g.push(C,G,tt),P+=3),(i>0||U!==c-1)&&(g.push(G,it,tt),P+=3)}m.addGroup(x,P,0),x+=P}function D(w){const H=E,P=new $t,N=new Z;let k=0;const U=w===!0?t:i,C=w===!0?1:-1;for(let it=1;it<=l;it++)_.push(0,M*C,0),v.push(0,C,0),y.push(.5,.5),E++;const G=E;for(let it=0;it<=l;it++){const lt=it/l*p+d,gt=Math.cos(lt),z=Math.sin(lt);N.x=U*z,N.y=M*C,N.z=U*gt,_.push(N.x,N.y,N.z),v.push(0,C,0),P.x=gt*.5+.5,P.y=z*.5*C+.5,y.push(P.x,P.y),E++}for(let it=0;it<l;it++){const tt=H+it,lt=G+it;w===!0?g.push(lt,lt+1,tt):g.push(lt+1,lt,tt),k+=3}m.addGroup(x,k,w===!0?1:2),x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dd extends wd{constructor(t=1,i=1,r=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,r,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Dd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oc extends fa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=t/d,v=i/p,y=[],E=[],R=[],M=[];for(let x=0;x<g;x++){const F=x*v-h;for(let D=0;D<m;D++){const w=D*_-c;E.push(w,-F,0),R.push(0,0,1),M.push(D/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let F=0;F<d;F++){const D=F+m*x,w=F+m*(x+1),H=F+1+m*(x+1),P=F+1+m*x;y.push(D,w,P),y.push(w,H,P)}this.setIndex(y),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(R,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ud extends fa{constructor(t=new $v(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const h=t.computeFrenetFrames(i,c);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new Z,p=new Z,m=new $t;let g=new Z;const _=[],v=[],y=[],E=[];R(),this.setIndex(E),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(y,2));function R(){for(let D=0;D<i;D++)M(D);M(c===!1?i:0),F(),x()}function M(D){g=t.getPointAt(D/i,g);const w=h.normals[D],H=h.binormals[D];for(let P=0;P<=l;P++){const N=P/l*Math.PI*2,k=Math.sin(N),U=-Math.cos(N);p.x=U*w.x+k*H.x,p.y=U*w.y+k*H.y,p.z=U*w.z+k*H.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=g.x+r*p.x,d.y=g.y+r*p.y,d.z=g.z+r*p.z,_.push(d.x,d.y,d.z)}}function x(){for(let D=1;D<=i;D++)for(let w=1;w<=l;w++){const H=(l+1)*(D-1)+(w-1),P=(l+1)*D+(w-1),N=(l+1)*D+w,k=(l+1)*(D-1)+w;E.push(H,P,k),E.push(P,N,k)}}function F(){for(let D=0;D<=i;D++)for(let w=0;w<=l;w++)m.x=D/i,m.y=w/l,y.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ud(new dM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pM extends Nc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mM extends Nc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class t0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Mh=new Ze,j_=new Z,K_=new Z;class gM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rd,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;j_.setFromMatrixPosition(t.matrixWorld),i.position.copy(j_),K_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(K_),i.updateMatrixWorld(),Mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class e0 extends Zv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _M extends gM{constructor(){super(new e0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vM extends t0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new _M}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class SM extends t0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xM extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Q_(o,t,i,r){const l=yM(r);switch(i){case Nv:return o*t;case zv:return o*t;case Pv:return o*t*2;case Bv:return o*t/l.components*l.byteLength;case yd:return o*t/l.components*l.byteLength;case Fv:return o*t*2/l.components*l.byteLength;case Md:return o*t*2/l.components*l.byteLength;case Ov:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Ed:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kh:case Wh:return Math.max(o,16)*Math.max(t,8)/4;case Vh:case Xh:return Math.max(o,8)*Math.max(t,8)/2;case qh:case Yh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $h:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case td:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case ed:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case nd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case id:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ad:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case rd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case sd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case od:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ld:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bc:case cd:case ud:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Iv:case fd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case hd:case dd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yM(o){switch(o){case ca:case Dv:return{byteLength:1,components:1};case No:case Uv:case Bo:return{byteLength:2,components:1};case Sd:case xd:return{byteLength:2,components:4};case br:case vd:case sa:return{byteLength:4,components:1};case Lv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function n0(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function MM(o){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],R=_[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,_[v]=R)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const R=_[y];o.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
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
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
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
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qM=`#define PI 3.141592653589793
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
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",tE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,sE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uE=`#ifdef USE_GRADIENTMAP
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
}`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
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
#endif`,mE=`#ifdef USE_ENVMAP
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
#endif`,gE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
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
#endif`,yE=`struct PhysicalMaterial {
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
}`,ME=`
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
#endif`,EE=`#if defined( RE_IndirectDiffuse )
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
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LE=`#if defined( USE_POINTS_UV )
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
#endif`,NE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WE=`#ifdef USE_NORMALMAP
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
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,lT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
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
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,DT=`#define DISTANCE
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
}`,UT=`#define DISTANCE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
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
}`,zT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,BT=`uniform vec3 diffuse;
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
}`,FT=`#define LAMBERT
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
}`,IT=`#define LAMBERT
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
}`,HT=`#define MATCAP
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
}`,GT=`#define MATCAP
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
}`,VT=`#define NORMAL
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
}`,kT=`#define NORMAL
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
}`,XT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,qT=`#define STANDARD
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
}`,YT=`#define STANDARD
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
}`,ZT=`#define TOON
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
}`,jT=`#define TOON
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
}`,KT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,$T=`uniform vec3 color;
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
}`,tb=`uniform float rotation;
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
}`,eb=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:EM,alphahash_pars_fragment:TM,alphamap_fragment:bM,alphamap_pars_fragment:AM,alphatest_fragment:RM,alphatest_pars_fragment:CM,aomap_fragment:wM,aomap_pars_fragment:DM,batching_pars_vertex:UM,batching_vertex:LM,begin_vertex:NM,beginnormal_vertex:OM,bsdfs:zM,iridescence_fragment:PM,bumpmap_pars_fragment:BM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:GM,color_fragment:VM,color_pars_fragment:kM,color_pars_vertex:XM,color_vertex:WM,common:qM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:jM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:JM,colorspace_fragment:$M,colorspace_pars_fragment:tE,envmap_fragment:eE,envmap_common_pars_fragment:nE,envmap_pars_fragment:iE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:mE,envmap_vertex:rE,fog_vertex:sE,fog_pars_vertex:oE,fog_fragment:lE,fog_pars_fragment:cE,gradientmap_pars_fragment:uE,lightmap_pars_fragment:fE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:dE,lights_pars_begin:pE,lights_toon_fragment:gE,lights_toon_pars_fragment:_E,lights_phong_fragment:vE,lights_phong_pars_fragment:SE,lights_physical_fragment:xE,lights_physical_pars_fragment:yE,lights_fragment_begin:ME,lights_fragment_maps:EE,lights_fragment_end:TE,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:AE,logdepthbuf_pars_vertex:RE,logdepthbuf_vertex:CE,map_fragment:wE,map_pars_fragment:DE,map_particle_fragment:UE,map_particle_pars_fragment:LE,metalnessmap_fragment:NE,metalnessmap_pars_fragment:OE,morphinstance_vertex:zE,morphcolor_vertex:PE,morphnormal_vertex:BE,morphtarget_pars_vertex:FE,morphtarget_vertex:IE,normal_fragment_begin:HE,normal_fragment_maps:GE,normal_pars_fragment:VE,normal_pars_vertex:kE,normal_vertex:XE,normalmap_pars_fragment:WE,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:YE,clearcoat_pars_fragment:ZE,iridescence_pars_fragment:jE,opaque_fragment:KE,packing:QE,premultiplied_alpha_fragment:JE,project_vertex:$E,dithering_fragment:tT,dithering_pars_fragment:eT,roughnessmap_fragment:nT,roughnessmap_pars_fragment:iT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:rT,shadowmap_vertex:sT,shadowmask_pars_fragment:oT,skinbase_vertex:lT,skinning_pars_vertex:cT,skinning_vertex:uT,skinnormal_vertex:fT,specularmap_fragment:hT,specularmap_pars_fragment:dT,tonemapping_fragment:pT,tonemapping_pars_fragment:mT,transmission_fragment:gT,transmission_pars_fragment:_T,uv_pars_fragment:vT,uv_pars_vertex:ST,uv_vertex:xT,worldpos_vertex:yT,background_vert:MT,background_frag:ET,backgroundCube_vert:TT,backgroundCube_frag:bT,cube_vert:AT,cube_frag:RT,depth_vert:CT,depth_frag:wT,distanceRGBA_vert:DT,distanceRGBA_frag:UT,equirect_vert:LT,equirect_frag:NT,linedashed_vert:OT,linedashed_frag:zT,meshbasic_vert:PT,meshbasic_frag:BT,meshlambert_vert:FT,meshlambert_frag:IT,meshmatcap_vert:HT,meshmatcap_frag:GT,meshnormal_vert:VT,meshnormal_frag:kT,meshphong_vert:XT,meshphong_frag:WT,meshphysical_vert:qT,meshphysical_frag:YT,meshtoon_vert:ZT,meshtoon_frag:jT,points_vert:KT,points_frag:QT,shadow_vert:JT,shadow_frag:$T,sprite_vert:tb,sprite_frag:eb},Ut={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Le(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Le(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const _c={r:0,b:0,g:0},gr=new ua,nb=new Ze;function ib(o,t,i,r,l,c,h){const d=new Le(0);let p=c===!0?0:1,m,g,_=null,v=0,y=null;function E(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?i:t).get(w)),w}function R(D){let w=!1;const H=E(D);H===null?x(d,p):H&&H.isColor&&(x(H,1),w=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,w){const H=E(w);H&&(H.isCubeTexture||H.mapping===Lc)?(g===void 0&&(g=new di(new Go(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Rs(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nb.makeRotationFromEuler(gr)),g.material.toneMapped=Re.getTransfer(H.colorSpace)!==Fe,(_!==H||v!==H.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=H,v=H.version,y=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new di(new Oc(2,2),new qa({name:"BackgroundMaterial",uniforms:Rs(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Re.getTransfer(H.colorSpace)!==Fe,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||v!==H.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,_=H,v=H.version,y=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function x(D,w){D.getRGB(_c,Yv(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,w,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,w=1){d.set(D),p=w,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,x(d,p)},render:R,addToRenderList:M,dispose:F}}function ab(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,h=!1;function d(C,G,it,tt,lt){let gt=!1;const z=_(tt,it,G);c!==z&&(c=z,m(c.object)),gt=y(C,tt,it,lt),gt&&E(C,tt,it,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(gt||h)&&(h=!1,w(C,G,it,tt),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,G,it){const tt=it.wireframe===!0;let lt=r[C.id];lt===void 0&&(lt={},r[C.id]=lt);let gt=lt[G.id];gt===void 0&&(gt={},lt[G.id]=gt);let z=gt[tt];return z===void 0&&(z=v(p()),gt[tt]=z),z}function v(C){const G=[],it=[],tt=[];for(let lt=0;lt<i;lt++)G[lt]=0,it[lt]=0,tt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:it,attributeDivisors:tt,object:C,attributes:{},index:null}}function y(C,G,it,tt){const lt=c.attributes,gt=G.attributes;let z=0;const J=it.getAttributes();for(const K in J)if(J[K].location>=0){const Tt=lt[K];let O=gt[K];if(O===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==tt}function E(C,G,it,tt){const lt={},gt=G.attributes;let z=0;const J=it.getAttributes();for(const K in J)if(J[K].location>=0){let Tt=gt[K];Tt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),lt[K]=O,z++}c.attributes=lt,c.attributesNum=z,c.index=tt}function R(){const C=c.newAttributes;for(let G=0,it=C.length;G<it;G++)C[G]=0}function M(C){x(C,0)}function x(C,G){const it=c.newAttributes,tt=c.enabledAttributes,lt=c.attributeDivisors;it[C]=1,tt[C]===0&&(o.enableVertexAttribArray(C),tt[C]=1),lt[C]!==G&&(o.vertexAttribDivisor(C,G),lt[C]=G)}function F(){const C=c.newAttributes,G=c.enabledAttributes;for(let it=0,tt=G.length;it<tt;it++)G[it]!==C[it]&&(o.disableVertexAttribArray(it),G[it]=0)}function D(C,G,it,tt,lt,gt,z){z===!0?o.vertexAttribIPointer(C,G,it,lt,gt):o.vertexAttribPointer(C,G,it,tt,lt,gt)}function w(C,G,it,tt){R();const lt=tt.attributes,gt=it.getAttributes(),z=G.defaultAttributeValues;for(const J in gt){const K=gt[J];if(K.location>=0){let xt=lt[J];if(xt===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const Tt=xt.normalized,O=xt.itemSize,at=t.get(xt);if(at===void 0)continue;const St=at.buffer,j=at.type,ft=at.bytesPerElement,Mt=j===o.INT||j===o.UNSIGNED_INT||xt.gpuType===vd;if(xt.isInterleavedBufferAttribute){const vt=xt.data,Ft=vt.stride,Yt=xt.offset;if(vt.isInstancedInterleavedBuffer){for(let jt=0;jt<K.locationSize;jt++)x(K.location+jt,vt.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let jt=0;jt<K.locationSize;jt++)M(K.location+jt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let jt=0;jt<K.locationSize;jt++)D(K.location+jt,O/K.locationSize,j,Tt,Ft*ft,(Yt+O/K.locationSize*jt)*ft,Mt)}else{if(xt.isInstancedBufferAttribute){for(let vt=0;vt<K.locationSize;vt++)x(K.location+vt,xt.meshPerAttribute);C.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let vt=0;vt<K.locationSize;vt++)M(K.location+vt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let vt=0;vt<K.locationSize;vt++)D(K.location+vt,O/K.locationSize,j,Tt,O*ft,O/K.locationSize*vt*ft,Mt)}}else if(z!==void 0){const Tt=z[J];if(Tt!==void 0)switch(Tt.length){case 2:o.vertexAttrib2fv(K.location,Tt);break;case 3:o.vertexAttrib3fv(K.location,Tt);break;case 4:o.vertexAttrib4fv(K.location,Tt);break;default:o.vertexAttrib1fv(K.location,Tt)}}}}F()}function H(){k();for(const C in r){const G=r[C];for(const it in G){const tt=G[it];for(const lt in tt)g(tt[lt].object),delete tt[lt];delete G[it]}delete r[C]}}function P(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const it in G){const tt=G[it];for(const lt in tt)g(tt[lt].object),delete tt[lt];delete G[it]}delete r[C.id]}function N(C){for(const G in r){const it=r[G];if(it[C.id]===void 0)continue;const tt=it[C.id];for(const lt in tt)g(tt[lt].object),delete tt[lt];delete it[C.id]}}function k(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:U,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:M,disableUnusedAttributes:F}}function rb(o,t,i){let r;function l(m){r=m}function c(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,_){_!==0&&(o.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,r,1)}function p(m,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)h(m[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*v[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function sb(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Ti&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const k=N===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==ca&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==sa&&!k)}function p(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:H,maxSamples:P}}function ob(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new vr,d=new oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||r!==0||l;return l=v,r=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=o.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const F=c?0:r,D=F*4;let w=x.clippingState||null;p.value=w,w=g(E,v,D,y);for(let H=0;H!==D;++H)w[H]=i[H];x.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,y,E){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const x=y+R*4,F=v.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let D=0,w=y;D!==R;++D,w+=4)h.copy(_[D]).applyMatrix4(F,d),h.normal.toArray(M,w),M[w+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function lb(o){let t=new WeakMap;function i(h,d){return d===Fh?h.mapping=Ts:d===Ih&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Fh||d===Ih)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Zy(p.height);return m.fromEquirectangularTexture(o,h),t.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const xs=4,J_=[.125,.215,.35,.446,.526,.582],yr=20,Eh=new e0,$_=new Le;let Th=null,bh=0,Ah=0,Rh=!1;const Sr=(1+Math.sqrt(5))/2,Ss=1/Sr,tv=[new Z(-Sr,Ss,0),new Z(Sr,Ss,0),new Z(-Ss,0,Sr),new Z(Ss,0,Sr),new Z(0,Sr,-Ss),new Z(0,Sr,Ss),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],cb=new Z;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=cb}=c;Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Th,bh,Ah),this._renderer.xr.enabled=Rh,t.scissorTest=!1,vc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Th=this._renderer.getRenderTarget(),bh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Bo,format:Ti,colorSpace:As,depthBuffer:!1},l=nv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ub(c)),this._blurMaterial=fb(c,t,i)}return l}_compileMaterial(t){const i=new di(this._lodPlanes[0],t);this._renderer.compile(i,Eh)}_sceneToCubeUV(t,i,r,l,c){const p=new hi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor($_),_.toneMapping=Xa,_.autoClear=!1;const E=new Ad({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new di(new Go,E);let M=!1;const x=t.background;x?x.isColor&&(E.color.copy(x),t.background=null,M=!0):(E.color.copy($_),M=!0);for(let F=0;F<6;F++){const D=F%3;D===0?(p.up.set(0,m[F],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[F],c.y,c.z)):D===1?(p.up.set(0,0,m[F]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[F],c.z)):(p.up.set(0,m[F],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[F]));const w=this._cubeSize;vc(l,D*w,F>2?w:0,w,w),_.setRenderTarget(l),M&&_.render(R,p),_.render(t,p)}R.geometry.dispose(),R.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=x}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new di(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;vc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Eh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=tv[(l-c-1)%tv.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new di(this._lodPlanes[l],m),v=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*yr-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):yr;M>yr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${yr}`);const x=[];let F=0;for(let N=0;N<yr;++N){const k=N/R,U=Math.exp(-k*k/2);x.push(U),N===0?F+=U:N<M&&(F+=2*U)}for(let N=0;N<x.length;N++)x[N]=x[N]/F;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-r;const w=this._sizeLods[l],H=3*w*(l>D-xs?l-D+xs:0),P=4*(this._cubeSize-w);vc(i,H,P,3*w,2*w),p.setRenderTarget(i),p.render(_,Eh)}}function ub(o){const t=[],i=[],r=[];let l=o;const c=o-xs+1+J_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-xs?p=J_[h-o+xs-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,R=3,M=2,x=1,F=new Float32Array(R*E*y),D=new Float32Array(M*E*y),w=new Float32Array(x*E*y);for(let P=0;P<y;P++){const N=P%3*2/3-1,k=P>2?0:-1,U=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];F.set(U,R*E*P),D.set(v,M*E*P);const C=[P,P,P,P,P,P];w.set(C,x*E*P)}const H=new fa;H.setAttribute("position",new Oi(F,R)),H.setAttribute("uv",new Oi(D,M)),H.setAttribute("faceIndex",new Oi(w,x)),t.push(H),l>xs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function nv(o,t,i){const r=new Ar(o,t,i);return r.texture.mapping=Lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function fb(o,t,i){const r=new Float32Array(yr),l=new Z(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function iv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function av(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Ld(){return`

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
	`}function hb(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Fh||p===Ih,g=p===Ts||p===bs;if(m||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new ev(o)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new ev(o)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function db(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ac("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function pb(o,t,i,r){const l={},c=new WeakMap;function h(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function m(_){const v=[],y=_.index,E=_.attributes.position;let R=0;if(y!==null){const F=y.array;R=y.version;for(let D=0,w=F.length;D<w;D+=3){const H=F[D+0],P=F[D+1],N=F[D+2];v.push(H,P,P,N,N,H)}}else if(E!==void 0){const F=E.array;R=E.version;for(let D=0,w=F.length/3-1;D<w;D+=3){const H=D+0,P=D+1,N=D+2;v.push(H,P,P,N,N,H)}}else return;const M=new(Gv(v)?qv:Wv)(v,1);M.version=R;const x=c.get(_);x&&t.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function mb(o,t,i){let r;function l(v){r=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function p(v,y){o.drawElements(r,y,c,v*h),i.update(y,r,1)}function m(v,y,E){E!==0&&(o.drawElementsInstanced(r,y,c,v*h,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,E);let M=0;for(let x=0;x<E;x++)M+=y[x];i.update(M,r,1)}function _(v,y,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)m(v[x]/h,y[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,R,0,E);let x=0;for(let F=0;F<E;F++)x+=y[F]*R[F];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function gb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _b(o,t,i){const r=new WeakMap,l=new $e;function c(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let U=function(){N.dispose(),r.delete(d),d.removeEventListener("dispose",U)};v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let D=0;y===!0&&(D=1),E===!0&&(D=2),R===!0&&(D=3);let w=d.attributes.position.count*D,H=1;w>t.maxTextureSize&&(H=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const P=new Float32Array(w*H*4*_),N=new Vv(P,w,H,_);N.type=sa,N.needsUpdate=!0;const k=D*4;for(let C=0;C<_;C++){const G=M[C],it=x[C],tt=F[C],lt=w*H*4*C;for(let gt=0;gt<G.count;gt++){const z=gt*k;y===!0&&(l.fromBufferAttribute(G,gt),P[lt+z+0]=l.x,P[lt+z+1]=l.y,P[lt+z+2]=l.z,P[lt+z+3]=0),E===!0&&(l.fromBufferAttribute(it,gt),P[lt+z+4]=l.x,P[lt+z+5]=l.y,P[lt+z+6]=l.z,P[lt+z+7]=0),R===!0&&(l.fromBufferAttribute(tt,gt),P[lt+z+8]=l.x,P[lt+z+9]=l.y,P[lt+z+10]=l.z,P[lt+z+11]=tt.itemSize===4?l.w:1)}}v={count:_,texture:N,size:new $t(w,H)},r.set(d,v),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let R=0;R<m.length;R++)y+=m[R];const E=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function vb(o,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const i0=new Xn,rv=new Kv(1,1),a0=new Vv,r0=new Dy,s0=new jv,sv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function ws(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function hn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function zc(o,t){let i=ov[t];i===void 0&&(i=new Int32Array(t),ov[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function Eb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;uv.set(r),o.uniformMatrix2fv(this.addr,!1,uv),dn(i,r)}}function Tb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;cv.set(r),o.uniformMatrix3fv(this.addr,!1,cv),dn(i,r)}}function bb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;lv.set(r),o.uniformMatrix4fv(this.addr,!1,lv),dn(i,r)}}function Ab(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function Cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function wb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function Db(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function Ob(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(rv.compareFunction=Hv,c=rv):c=i0,i.setTexture2D(t||c,l)}function zb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||r0,l)}function Pb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||s0,l)}function Bb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||a0,l)}function Fb(o){switch(o){case 5126:return Sb;case 35664:return xb;case 35665:return yb;case 35666:return Mb;case 35674:return Eb;case 35675:return Tb;case 35676:return bb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return wb;case 5125:return Db;case 36294:return Ub;case 36295:return Lb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Bb}}function Ib(o,t){o.uniform1fv(this.addr,t)}function Hb(o,t){const i=ws(t,this.size,2);o.uniform2fv(this.addr,i)}function Gb(o,t){const i=ws(t,this.size,3);o.uniform3fv(this.addr,i)}function Vb(o,t){const i=ws(t,this.size,4);o.uniform4fv(this.addr,i)}function kb(o,t){const i=ws(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Xb(o,t){const i=ws(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Wb(o,t){const i=ws(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qb(o,t){o.uniform1iv(this.addr,t)}function Yb(o,t){o.uniform2iv(this.addr,t)}function Zb(o,t){o.uniform3iv(this.addr,t)}function jb(o,t){o.uniform4iv(this.addr,t)}function Kb(o,t){o.uniform1uiv(this.addr,t)}function Qb(o,t){o.uniform2uiv(this.addr,t)}function Jb(o,t){o.uniform3uiv(this.addr,t)}function $b(o,t){o.uniform4uiv(this.addr,t)}function tA(o,t,i){const r=this.cache,l=t.length,c=zc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||i0,c[h])}function eA(o,t,i){const r=this.cache,l=t.length,c=zc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||r0,c[h])}function nA(o,t,i){const r=this.cache,l=t.length,c=zc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||s0,c[h])}function iA(o,t,i){const r=this.cache,l=t.length,c=zc(i,l);hn(r,c)||(o.uniform1iv(this.addr,c),dn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||a0,c[h])}function aA(o){switch(o){case 5126:return Ib;case 35664:return Hb;case 35665:return Gb;case 35666:return Vb;case 35674:return kb;case 35675:return Xb;case 35676:return Wb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return Zb;case 35669:case 35673:return jb;case 5125:return Kb;case 36294:return Qb;case 36295:return Jb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class rA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Fb(i.type)}}class sA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=aA(i.type)}}class oA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function fv(o,t){o.seq.push(t),o.map[t.id]=t}function lA(o,t,i){const r=o.name,l=r.length;for(Ch.lastIndex=0;;){const c=Ch.exec(r),h=Ch.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){fv(i,m===void 0?new rA(d,o,t):new sA(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new oA(d),fv(i,_)),i=_}}}class Rc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);lA(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function hv(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const cA=37297;let uA=0;function fA(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const dv=new oe;function hA(o){Re._getMatrix(dv,Re.workingColorSpace,o);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case wc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function pv(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+fA(o.getShaderSource(t),h)}else return l}function dA(o,t){const i=hA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function pA(o,t){let i;switch(t){case ey:i="Linear";break;case ny:i="Reinhard";break;case iy:i="Cineon";break;case ay:i="ACESFilmic";break;case sy:i="AgX";break;case oy:i="Neutral";break;case ry:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new Z;function mA(){Re.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function _A(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function vA(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Do(o){return o!==""}function mv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(o){return o.replace(SA,yA)}const xA=new Map;function yA(o,t){let i=le[t];if(i===void 0){const r=xA.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return md(i)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(o){return o.replace(MA,EA)}function EA(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function TA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ox?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function bA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case Lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function RA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Cv:t="ENVMAP_BLENDING_MULTIPLY";break;case $x:t="ENVMAP_BLENDING_MIX";break;case ty:t="ENVMAP_BLENDING_ADD";break}return t}function CA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function wA(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=TA(i),m=bA(i),g=AA(i),_=RA(i),v=CA(i),y=gA(i),E=_A(c),R=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),x.length>0&&(x+=`
`)):(M=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),x=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?le.tonemapping_pars_fragment:"",i.toneMapping!==Xa?pA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,dA("linearToOutputTexel",i.outputColorSpace),mA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=md(h),h=mv(h,i),h=gv(h,i),d=md(d),d=mv(d,i),d=gv(d,i),h=_v(h),d=_v(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=F+M+h,w=F+x+d,H=hv(l,l.VERTEX_SHADER,D),P=hv(l,l.FRAGMENT_SHADER,w);l.attachShader(R,H),l.attachShader(R,P),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function N(G){if(o.debug.checkShaderErrors){const it=l.getProgramInfoLog(R).trim(),tt=l.getShaderInfoLog(H).trim(),lt=l.getShaderInfoLog(P).trim();let gt=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(gt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,P);else{const J=pv(l,H,"vertex"),K=pv(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+it+`
`+J+`
`+K)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(tt===""||lt==="")&&(z=!1);z&&(G.diagnostics={runnable:gt,programLog:it,vertexShader:{log:tt,prefix:M},fragmentShader:{log:lt,prefix:x}})}l.deleteShader(H),l.deleteShader(P),k=new Rc(l,R),U=vA(l,R)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let U;this.getAttributes=function(){return U===void 0&&N(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,cA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=uA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=P,this}let DA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new LA(t),i.set(t,r)),r}}class LA{constructor(t){this.id=DA++,this.code=t,this.usedTimes=0}}function NA(o,t,i,r,l,c,h){const d=new kv,p=new UA,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,C,G,it,tt){const lt=it.fog,gt=tt.geometry,z=U.isMeshStandardMaterial?it.environment:null,J=(U.isMeshStandardMaterial?i:t).get(U.envMap||z),K=J&&J.mapping===Lc?J.image.height:null,xt=E[U.type];U.precision!==null&&(y=l.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const Tt=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let at=0;gt.morphAttributes.position!==void 0&&(at=1),gt.morphAttributes.normal!==void 0&&(at=2),gt.morphAttributes.color!==void 0&&(at=3);let St,j,ft,Mt;if(xt){const Ee=Li[xt];St=Ee.vertexShader,j=Ee.fragmentShader}else St=U.vertexShader,j=U.fragmentShader,p.update(U),ft=p.getVertexShaderID(U),Mt=p.getFragmentShaderID(U);const vt=o.getRenderTarget(),Ft=o.state.buffers.depth.getReversed(),Yt=tt.isInstancedMesh===!0,jt=tt.isBatchedMesh===!0,Ge=!!U.map,Ie=!!U.matcap,ce=!!J,I=!!U.aoMap,Tn=!!U.lightMap,ue=!!U.bumpMap,pe=!!U.normalMap,kt=!!U.displacementMap,we=!!U.emissiveMap,Vt=!!U.metalnessMap,L=!!U.roughnessMap,b=U.anisotropy>0,nt=U.clearcoat>0,ht=U.dispersion>0,yt=U.iridescence>0,pt=U.sheen>0,Ht=U.transmission>0,Rt=b&&!!U.anisotropyMap,zt=nt&&!!U.clearcoatMap,me=nt&&!!U.clearcoatNormalMap,bt=nt&&!!U.clearcoatRoughnessMap,Pt=yt&&!!U.iridescenceMap,Zt=yt&&!!U.iridescenceThicknessMap,Gt=pt&&!!U.sheenColorMap,Nt=pt&&!!U.sheenRoughnessMap,Jt=!!U.specularMap,ae=!!U.specularColorMap,Ne=!!U.specularIntensityMap,W=Ht&&!!U.transmissionMap,Ct=Ht&&!!U.thicknessMap,ct=!!U.gradientMap,_t=!!U.alphaMap,At=U.alphaTest>0,wt=!!U.alphaHash,te=!!U.extensions;let qe=Xa;U.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(qe=o.toneMapping);const ln={shaderID:xt,shaderType:U.type,shaderName:U.name,vertexShader:St,fragmentShader:j,defines:U.defines,customVertexShaderID:ft,customFragmentShaderID:Mt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:jt,batchingColor:jt&&tt._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&tt.instanceColor!==null,instancingMorph:Yt&&tt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:As,alphaToCoverage:!!U.alphaToCoverage,map:Ge,matcap:Ie,envMap:ce,envMapMode:ce&&J.mapping,envMapCubeUVHeight:K,aoMap:I,lightMap:Tn,bumpMap:ue,normalMap:pe,displacementMap:v&&kt,emissiveMap:we,normalMapObjectSpace:pe&&U.normalMapType===hy,normalMapTangentSpace:pe&&U.normalMapType===fy,metalnessMap:Vt,roughnessMap:L,anisotropy:b,anisotropyMap:Rt,clearcoat:nt,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:bt,dispersion:ht,iridescence:yt,iridescenceMap:Pt,iridescenceThicknessMap:Zt,sheen:pt,sheenColorMap:Gt,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:ae,specularIntensityMap:Ne,transmission:Ht,transmissionMap:W,thicknessMap:Ct,gradientMap:ct,opaque:U.transparent===!1&&U.blending===ys&&U.alphaToCoverage===!1,alphaMap:_t,alphaTest:At,alphaHash:wt,combine:U.combine,mapUv:Ge&&R(U.map.channel),aoMapUv:I&&R(U.aoMap.channel),lightMapUv:Tn&&R(U.lightMap.channel),bumpMapUv:ue&&R(U.bumpMap.channel),normalMapUv:pe&&R(U.normalMap.channel),displacementMapUv:kt&&R(U.displacementMap.channel),emissiveMapUv:we&&R(U.emissiveMap.channel),metalnessMapUv:Vt&&R(U.metalnessMap.channel),roughnessMapUv:L&&R(U.roughnessMap.channel),anisotropyMapUv:Rt&&R(U.anisotropyMap.channel),clearcoatMapUv:zt&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:me&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(U.sheenRoughnessMap.channel),specularMapUv:Jt&&R(U.specularMap.channel),specularColorMapUv:ae&&R(U.specularColorMap.channel),specularIntensityMapUv:Ne&&R(U.specularIntensityMap.channel),transmissionMapUv:W&&R(U.transmissionMap.channel),thicknessMapUv:Ct&&R(U.thicknessMap.channel),alphaMapUv:_t&&R(U.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(pe||b),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!gt.attributes.uv&&(Ge||_t),fog:!!lt,useFog:U.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ft,skinning:tt.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ge&&U.map.isVideoTexture===!0&&Re.getTransfer(U.map.colorSpace)===Fe,decodeVideoTextureEmissive:we&&U.emissiveMap.isVideoTexture===!0&&Re.getTransfer(U.emissiveMap.colorSpace)===Fe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ra,flipSided:U.side===kn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:te&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&U.extensions.multiDraw===!0||jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return ln.vertexUv1s=m.has(1),ln.vertexUv2s=m.has(2),ln.vertexUv3s=m.has(3),m.clear(),ln}function x(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)C.push(G),C.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(F(C,U),D(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function F(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function D(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function w(U){const C=E[U.type];let G;if(C){const it=Li[C];G=Xy.clone(it.uniforms)}else G=U.uniforms;return G}function H(U,C){let G;for(let it=0,tt=g.length;it<tt;it++){const lt=g[it];if(lt.cacheKey===C){G=lt,++G.usedTimes;break}}return G===void 0&&(G=new wA(o,C,U,c),g.push(G)),G}function P(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function N(U){p.remove(U)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:w,acquireProgram:H,releaseProgram:P,releaseShaderCache:N,programs:g,dispose:k}}function OA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function zA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Sv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xv(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,v,y,E,R,M){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:R,group:M},o[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=R,x.group=M),t++,x}function d(_,v,y,E,R,M){const x=h(_,v,y,E,R,M);y.transmission>0?r.push(x):y.transparent===!0?l.push(x):i.push(x)}function p(_,v,y,E,R,M){const x=h(_,v,y,E,R,M);y.transmission>0?r.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function m(_,v){i.length>1&&i.sort(_||zA),r.length>1&&r.sort(v||Sv),l.length>1&&l.sort(v||Sv)}function g(){for(let _=t,v=o.length;_<v;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function PA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new xv,o.set(r,[h])):l>=c.length?(h=new xv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function BA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new Le};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=i,i}}}function FA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let IA=0;function HA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function GA(o){const t=new BA,i=FA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const l=new Z,c=new Ze,h=new Ze;function d(m){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,E=0,R=0,M=0,x=0,F=0,D=0,w=0,H=0,P=0,N=0;m.sort(HA);for(let U=0,C=m.length;U<C;U++){const G=m[U],it=G.color,tt=G.intensity,lt=G.distance,gt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=it.r*tt,_+=it.g*tt,v+=it.b*tt;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],tt);N++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const J=G.shadow,K=i.get(G);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=gt,r.directionalShadowMatrix[y]=G.shadow.matrix,F++}r.directional[y]=z,y++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(it).multiplyScalar(tt),z.distance=lt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[R]=z;const J=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,J.updateMatrices(G),G.castShadow&&P++),r.spotLightMatrix[R]=J.matrix,G.castShadow){const K=i.get(G);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,r.spotShadow[R]=K,r.spotShadowMap[R]=gt,w++}R++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(it).multiplyScalar(tt),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=z,M++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const J=G.shadow,K=i.get(G);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=gt,r.pointShadowMatrix[E]=G.shadow.matrix,D++}r.point[E]=z,E++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(tt),z.groundColor.copy(G.groundColor).multiplyScalar(tt),r.hemi[x]=z,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==R||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==F||k.numPointShadows!==D||k.numSpotShadows!==w||k.numSpotMaps!==H||k.numLightProbes!==N)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=w+H-P,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=N,k.directionalLength=y,k.pointLength=E,k.spotLength=R,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=F,k.numPointShadows=D,k.numSpotShadows=w,k.numSpotMaps=H,k.numLightProbes=N,r.version=IA++)}function p(m,g){let _=0,v=0,y=0,E=0,R=0;const M=g.matrixWorldInverse;for(let x=0,F=m.length;x<F;x++){const D=m[x];if(D.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(D.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(D.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(D.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(M),v++}else if(D.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function yv(o){const t=new GA(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function VA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new yv(o),t.set(l,[d])):c>=h.length?(d=new yv(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const kA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
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
}`;function WA(o,t,i){let r=new Rd;const l=new $t,c=new $t,h=new $e,d=new pM({depthPacking:uy}),p=new mM,m={},g=i.maxTextureSize,_={[Wa]:kn,[kn]:Wa,[ra]:ra},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:kA,fragmentShader:XA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new fa;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new di(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let x=this.type;this.render=function(P,N,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),it=o.state;it.setBlending(ka),it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);const tt=x!==aa&&this.type===aa,lt=x===aa&&this.type!==aa;for(let gt=0,z=P.length;gt<z;gt++){const J=P[gt],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const xt=K.getFrameExtents();if(l.multiply(xt),c.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,K.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,K.mapSize.y=c.y)),K.map===null||tt===!0||lt===!0){const O=this.type!==aa?{minFilter:bi,magFilter:bi}:{};K.map!==null&&K.map.dispose(),K.map=new Ar(l.x,l.y,O),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const Tt=K.getViewportCount();for(let O=0;O<Tt;O++){const at=K.getViewport(O);h.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),it.viewport(h),K.updateMatrices(J,O),r=K.getFrustum(),w(N,k,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===aa&&F(K,k),K.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(U,C,G)};function F(P,N){const k=t.update(R);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(N,null,k,v,R,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(N,null,k,y,R,null)}function D(P,N,k,U){let C=null;const G=k.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?p:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const it=C.uuid,tt=N.uuid;let lt=m[it];lt===void 0&&(lt={},m[it]=lt);let gt=lt[tt];gt===void 0&&(gt=C.clone(),lt[tt]=gt,N.addEventListener("dispose",H)),C=gt}if(C.visible=N.visible,C.wireframe=N.wireframe,U===aa?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:_[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const it=o.properties.get(C);it.light=k}return C}function w(P,N,k,U,C){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&C===aa)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,P.matrixWorld);const tt=t.update(P),lt=P.material;if(Array.isArray(lt)){const gt=tt.groups;for(let z=0,J=gt.length;z<J;z++){const K=gt[z],xt=lt[K.materialIndex];if(xt&&xt.visible){const Tt=D(P,xt,U,C);P.onBeforeShadow(o,P,N,k,tt,Tt,K),o.renderBufferDirect(k,null,tt,Tt,P,K),P.onAfterShadow(o,P,N,k,tt,Tt,K)}}}else if(lt.visible){const gt=D(P,lt,U,C);P.onBeforeShadow(o,P,N,k,tt,gt,null),o.renderBufferDirect(k,null,tt,gt,P,null),P.onAfterShadow(o,P,N,k,tt,gt,null)}}const it=P.children;for(let tt=0,lt=it.length;tt<lt;tt++)w(it[tt],N,k,U,C)}function H(P){P.target.removeEventListener("dispose",H);for(const k in m){const U=m[k],C=P.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const qA={[Uh]:Lh,[Nh]:Ph,[Oh]:Bh,[Es]:zh,[Lh]:Uh,[Ph]:Nh,[Bh]:Oh,[zh]:Es};function YA(o,t){function i(){let W=!1;const Ct=new $e;let ct=null;const _t=new $e(0,0,0,0);return{setMask:function(At){ct!==At&&!W&&(o.colorMask(At,At,At,At),ct=At)},setLocked:function(At){W=At},setClear:function(At,wt,te,qe,ln){ln===!0&&(At*=qe,wt*=qe,te*=qe),Ct.set(At,wt,te,qe),_t.equals(Ct)===!1&&(o.clearColor(At,wt,te,qe),_t.copy(Ct))},reset:function(){W=!1,ct=null,_t.set(-1,0,0,0)}}}function r(){let W=!1,Ct=!1,ct=null,_t=null,At=null;return{setReversed:function(wt){if(Ct!==wt){const te=t.get("EXT_clip_control");wt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Ct=wt;const qe=At;At=null,this.setClear(qe)}},getReversed:function(){return Ct},setTest:function(wt){wt?vt(o.DEPTH_TEST):Ft(o.DEPTH_TEST)},setMask:function(wt){ct!==wt&&!W&&(o.depthMask(wt),ct=wt)},setFunc:function(wt){if(Ct&&(wt=qA[wt]),_t!==wt){switch(wt){case Uh:o.depthFunc(o.NEVER);break;case Lh:o.depthFunc(o.ALWAYS);break;case Nh:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case Oh:o.depthFunc(o.EQUAL);break;case zh:o.depthFunc(o.GEQUAL);break;case Ph:o.depthFunc(o.GREATER);break;case Bh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=wt}},setLocked:function(wt){W=wt},setClear:function(wt){At!==wt&&(Ct&&(wt=1-wt),o.clearDepth(wt),At=wt)},reset:function(){W=!1,ct=null,_t=null,At=null,Ct=!1}}}function l(){let W=!1,Ct=null,ct=null,_t=null,At=null,wt=null,te=null,qe=null,ln=null;return{setTest:function(Ee){W||(Ee?vt(o.STENCIL_TEST):Ft(o.STENCIL_TEST))},setMask:function(Ee){Ct!==Ee&&!W&&(o.stencilMask(Ee),Ct=Ee)},setFunc:function(Ee,_n,pi){(ct!==Ee||_t!==_n||At!==pi)&&(o.stencilFunc(Ee,_n,pi),ct=Ee,_t=_n,At=pi)},setOp:function(Ee,_n,pi){(wt!==Ee||te!==_n||qe!==pi)&&(o.stencilOp(Ee,_n,pi),wt=Ee,te=_n,qe=pi)},setLocked:function(Ee){W=Ee},setClear:function(Ee){ln!==Ee&&(o.clearStencil(Ee),ln=Ee)},reset:function(){W=!1,Ct=null,ct=null,_t=null,At=null,wt=null,te=null,qe=null,ln=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,R=!1,M=null,x=null,F=null,D=null,w=null,H=null,P=null,N=new Le(0,0,0),k=0,U=!1,C=null,G=null,it=null,tt=null,lt=null;const gt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=J>=2);let xt=null,Tt={};const O=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),St=new $e().fromArray(O),j=new $e().fromArray(at);function ft(W,Ct,ct,_t){const At=new Uint8Array(4),wt=o.createTexture();o.bindTexture(W,wt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let te=0;te<ct;te++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Ct+te,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return wt}const Mt={};Mt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Es),ue(!1),pe(T_),vt(o.CULL_FACE),I(ka);function vt(W){g[W]!==!0&&(o.enable(W),g[W]=!0)}function Ft(W){g[W]!==!1&&(o.disable(W),g[W]=!1)}function Yt(W,Ct){return _[W]!==Ct?(o.bindFramebuffer(W,Ct),_[W]=Ct,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function jt(W,Ct){let ct=y,_t=!1;if(W){ct=v.get(Ct),ct===void 0&&(ct=[],v.set(Ct,ct));const At=W.textures;if(ct.length!==At.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let wt=0,te=At.length;wt<te;wt++)ct[wt]=o.COLOR_ATTACHMENT0+wt;ct.length=At.length,_t=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ct)}function Ge(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const Ie={[xr]:o.FUNC_ADD,[Px]:o.FUNC_SUBTRACT,[Bx]:o.FUNC_REVERSE_SUBTRACT};Ie[Fx]=o.MIN,Ie[Ix]=o.MAX;const ce={[Hx]:o.ZERO,[Gx]:o.ONE,[Vx]:o.SRC_COLOR,[wh]:o.SRC_ALPHA,[Zx]:o.SRC_ALPHA_SATURATE,[qx]:o.DST_COLOR,[Xx]:o.DST_ALPHA,[kx]:o.ONE_MINUS_SRC_COLOR,[Dh]:o.ONE_MINUS_SRC_ALPHA,[Yx]:o.ONE_MINUS_DST_COLOR,[Wx]:o.ONE_MINUS_DST_ALPHA,[jx]:o.CONSTANT_COLOR,[Kx]:o.ONE_MINUS_CONSTANT_COLOR,[Qx]:o.CONSTANT_ALPHA,[Jx]:o.ONE_MINUS_CONSTANT_ALPHA};function I(W,Ct,ct,_t,At,wt,te,qe,ln,Ee){if(W===ka){R===!0&&(Ft(o.BLEND),R=!1);return}if(R===!1&&(vt(o.BLEND),R=!0),W!==zx){if(W!==M||Ee!==U){if((x!==xr||w!==xr)&&(o.blendEquation(o.FUNC_ADD),x=xr,w=xr),Ee)switch(W){case ys:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case b_:o.blendFunc(o.ONE,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ys:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case b_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}F=null,D=null,H=null,P=null,N.set(0,0,0),k=0,M=W,U=Ee}return}At=At||Ct,wt=wt||ct,te=te||_t,(Ct!==x||At!==w)&&(o.blendEquationSeparate(Ie[Ct],Ie[At]),x=Ct,w=At),(ct!==F||_t!==D||wt!==H||te!==P)&&(o.blendFuncSeparate(ce[ct],ce[_t],ce[wt],ce[te]),F=ct,D=_t,H=wt,P=te),(qe.equals(N)===!1||ln!==k)&&(o.blendColor(qe.r,qe.g,qe.b,ln),N.copy(qe),k=ln),M=W,U=!1}function Tn(W,Ct){W.side===ra?Ft(o.CULL_FACE):vt(o.CULL_FACE);let ct=W.side===kn;Ct&&(ct=!ct),ue(ct),W.blending===ys&&W.transparent===!1?I(ka):I(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),we(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function ue(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function pe(W){W!==Lx?(vt(o.CULL_FACE),W!==G&&(W===T_?o.cullFace(o.BACK):W===Nx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ft(o.CULL_FACE),G=W}function kt(W){W!==it&&(z&&o.lineWidth(W),it=W)}function we(W,Ct,ct){W?(vt(o.POLYGON_OFFSET_FILL),(tt!==Ct||lt!==ct)&&(o.polygonOffset(Ct,ct),tt=Ct,lt=ct)):Ft(o.POLYGON_OFFSET_FILL)}function Vt(W){W?vt(o.SCISSOR_TEST):Ft(o.SCISSOR_TEST)}function L(W){W===void 0&&(W=o.TEXTURE0+gt-1),xt!==W&&(o.activeTexture(W),xt=W)}function b(W,Ct,ct){ct===void 0&&(xt===null?ct=o.TEXTURE0+gt-1:ct=xt);let _t=Tt[ct];_t===void 0&&(_t={type:void 0,texture:void 0},Tt[ct]=_t),(_t.type!==W||_t.texture!==Ct)&&(xt!==ct&&(o.activeTexture(ct),xt=ct),o.bindTexture(W,Ct||Mt[W]),_t.type=W,_t.texture=Ct)}function nt(){const W=Tt[xt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(W){St.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),St.copy(W))}function Nt(W){j.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function Jt(W,Ct){let ct=m.get(Ct);ct===void 0&&(ct=new WeakMap,m.set(Ct,ct));let _t=ct.get(W);_t===void 0&&(_t=o.getUniformBlockIndex(Ct,W.name),ct.set(W,_t))}function ae(W,Ct){const _t=m.get(Ct).get(W);p.get(Ct)!==_t&&(o.uniformBlockBinding(Ct,_t,W.__bindingPointIndex),p.set(Ct,_t))}function Ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,Tt={},_={},v=new WeakMap,y=[],E=null,R=!1,M=null,x=null,F=null,D=null,w=null,H=null,P=null,N=new Le(0,0,0),k=0,U=!1,C=null,G=null,it=null,tt=null,lt=null,St.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:vt,disable:Ft,bindFramebuffer:Yt,drawBuffers:jt,useProgram:Ge,setBlending:I,setMaterial:Tn,setFlipSided:ue,setCullFace:pe,setLineWidth:kt,setPolygonOffset:we,setScissorTest:Vt,activeTexture:L,bindTexture:b,unbindTexture:nt,compressedTexImage2D:ht,compressedTexImage3D:yt,texImage2D:Pt,texImage3D:Zt,updateUBOMapping:Jt,uniformBlockBinding:ae,texStorage2D:me,texStorage3D:bt,texSubImage2D:pt,texSubImage3D:Ht,compressedTexSubImage2D:Rt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Nt,reset:Ne}}function ZA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new $t,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):Uc("canvas")}function R(L,b,nt){let ht=1;const yt=Vt(L);if((yt.width>nt||yt.height>nt)&&(ht=nt/Math.max(yt.width,yt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pt=Math.floor(ht*yt.width),Ht=Math.floor(ht*yt.height);_===void 0&&(_=E(pt,Ht));const Rt=b?E(pt,Ht):_;return Rt.width=pt,Rt.height=Ht,Rt.getContext("2d").drawImage(L,0,0,pt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+pt+"x"+Ht+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){o.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(L,b,nt,ht,yt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=b;if(b===o.RED&&(nt===o.FLOAT&&(pt=o.R32F),nt===o.HALF_FLOAT&&(pt=o.R16F),nt===o.UNSIGNED_BYTE&&(pt=o.R8)),b===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.R8UI),nt===o.UNSIGNED_SHORT&&(pt=o.R16UI),nt===o.UNSIGNED_INT&&(pt=o.R32UI),nt===o.BYTE&&(pt=o.R8I),nt===o.SHORT&&(pt=o.R16I),nt===o.INT&&(pt=o.R32I)),b===o.RG&&(nt===o.FLOAT&&(pt=o.RG32F),nt===o.HALF_FLOAT&&(pt=o.RG16F),nt===o.UNSIGNED_BYTE&&(pt=o.RG8)),b===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),nt===o.UNSIGNED_INT&&(pt=o.RG32UI),nt===o.BYTE&&(pt=o.RG8I),nt===o.SHORT&&(pt=o.RG16I),nt===o.INT&&(pt=o.RG32I)),b===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),nt===o.UNSIGNED_INT&&(pt=o.RGB32UI),nt===o.BYTE&&(pt=o.RGB8I),nt===o.SHORT&&(pt=o.RGB16I),nt===o.INT&&(pt=o.RGB32I)),b===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),nt===o.BYTE&&(pt=o.RGBA8I),nt===o.SHORT&&(pt=o.RGBA16I),nt===o.INT&&(pt=o.RGBA32I)),b===o.RGB&&nt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),b===o.RGBA){const Ht=yt?wc:Re.getTransfer(ht);nt===o.FLOAT&&(pt=o.RGBA32F),nt===o.HALF_FLOAT&&(pt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(pt=Ht===Fe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function w(L,b){let nt;return L?b===null||b===br||b===Oo?nt=o.DEPTH24_STENCIL8:b===sa?nt=o.DEPTH32F_STENCIL8:b===No&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===Oo?nt=o.DEPTH_COMPONENT24:b===sa?nt=o.DEPTH_COMPONENT32F:b===No&&(nt=o.DEPTH_COMPONENT16),nt}function H(L,b){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==bi&&L.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function P(L){const b=L.target;b.removeEventListener("dispose",P),k(b),b.isVideoTexture&&g.delete(b)}function N(L){const b=L.target;b.removeEventListener("dispose",N),C(b)}function k(L){const b=r.get(L);if(b.__webglInit===void 0)return;const nt=L.source,ht=v.get(nt);if(ht){const yt=ht[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&U(L),Object.keys(ht).length===0&&v.delete(nt)}r.remove(L)}function U(L){const b=r.get(L);o.deleteTexture(b.__webglTexture);const nt=L.source,ht=v.get(nt);delete ht[b.__cacheKey],h.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(b.__webglFramebuffer[ht]))for(let yt=0;yt<b.__webglFramebuffer[ht].length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[ht][yt]);else o.deleteFramebuffer(b.__webglFramebuffer[ht]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ht])}else{if(Array.isArray(b.__webglFramebuffer))for(let ht=0;ht<b.__webglFramebuffer.length;ht++)o.deleteFramebuffer(b.__webglFramebuffer[ht]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ht=0;ht<b.__webglColorRenderbuffer.length;ht++)b.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ht]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=L.textures;for(let ht=0,yt=nt.length;ht<yt;ht++){const pt=r.get(nt[ht]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(nt[ht])}r.remove(L)}let G=0;function it(){G=0}function tt(){const L=G;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function lt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function gt(L,b){const nt=r.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&nt.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(nt,L,b);return}}i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+b)}function z(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){j(nt,L,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+b)}function J(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){j(nt,L,b);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+b)}function K(L,b){const nt=r.get(L);if(L.version>0&&nt.__version!==L.version){ft(nt,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+b)}const xt={[Hh]:o.REPEAT,[Mr]:o.CLAMP_TO_EDGE,[Gh]:o.MIRRORED_REPEAT},Tt={[bi]:o.NEAREST,[ly]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[jf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},O={[dy]:o.NEVER,[Sy]:o.ALWAYS,[py]:o.LESS,[Hv]:o.LEQUAL,[my]:o.EQUAL,[vy]:o.GEQUAL,[gy]:o.GREATER,[_y]:o.NOTEQUAL};function at(L,b){if(b.type===sa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===jf||b.magFilter===Jl||b.magFilter===Er||b.minFilter===Ni||b.minFilter===jf||b.minFilter===Jl||b.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,xt[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,xt[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,xt[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Tt[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Tt[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==Jl&&b.minFilter!==Er||b.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function St(L,b){let nt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",P));const ht=b.source;let yt=v.get(ht);yt===void 0&&(yt={},v.set(ht,yt));const pt=lt(b);if(pt!==L.__cacheKey){yt[pt]===void 0&&(yt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),yt[pt].usedTimes++;const Ht=yt[L.__cacheKey];Ht!==void 0&&(yt[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&U(b)),L.__cacheKey=pt,L.__webglTexture=yt[pt].texture}return nt}function j(L,b,nt){let ht=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ht=o.TEXTURE_3D);const yt=St(L,b),pt=b.source;i.bindTexture(ht,L.__webglTexture,o.TEXTURE0+nt);const Ht=r.get(pt);if(pt.version!==Ht.__version||yt===!0){i.activeTexture(o.TEXTURE0+nt);const Rt=Re.getPrimaries(Re.workingColorSpace),zt=b.colorSpace===Va?null:Re.getPrimaries(b.colorSpace),me=b.colorSpace===Va||Rt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let bt=R(b.image,!1,l.maxTextureSize);bt=we(b,bt);const Pt=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let Gt=D(b.internalFormat,Pt,Zt,b.colorSpace,b.isVideoTexture);at(ht,b);let Nt;const Jt=b.mipmaps,ae=b.isVideoTexture!==!0,Ne=Ht.__version===void 0||yt===!0,W=pt.dataReady,Ct=H(b,bt);if(b.isDepthTexture)Gt=w(b.format===Po,b.type),Ne&&(ae?i.texStorage2D(o.TEXTURE_2D,1,Gt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Pt,Zt,null));else if(b.isDataTexture)if(Jt.length>0){ae&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ct,Gt,Jt[0].width,Jt[0].height);for(let ct=0,_t=Jt.length;ct<_t;ct++)Nt=Jt[ct],ae?W&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Nt.width,Nt.height,Pt,Zt,Nt.data):i.texImage2D(o.TEXTURE_2D,ct,Gt,Nt.width,Nt.height,0,Pt,Zt,Nt.data);b.generateMipmaps=!1}else ae?(Ne&&i.texStorage2D(o.TEXTURE_2D,Ct,Gt,bt.width,bt.height),W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Pt,Zt,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Pt,Zt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Gt,Jt[0].width,Jt[0].height,bt.depth);for(let ct=0,_t=Jt.length;ct<_t;ct++)if(Nt=Jt[ct],b.format!==Ti)if(Pt!==null)if(ae){if(W)if(b.layerUpdates.size>0){const At=Q_(Nt.width,Nt.height,b.format,b.type);for(const wt of b.layerUpdates){const te=Nt.data.subarray(wt*At/Nt.data.BYTES_PER_ELEMENT,(wt+1)*At/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,wt,Nt.width,Nt.height,1,Pt,te)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Nt.width,Nt.height,bt.depth,Pt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,Gt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Nt.width,Nt.height,bt.depth,Pt,Zt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,Gt,Nt.width,Nt.height,bt.depth,0,Pt,Zt,Nt.data)}else{ae&&Ne&&i.texStorage2D(o.TEXTURE_2D,Ct,Gt,Jt[0].width,Jt[0].height);for(let ct=0,_t=Jt.length;ct<_t;ct++)Nt=Jt[ct],b.format!==Ti?Pt!==null?ae?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Nt.width,Nt.height,Pt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,Gt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?W&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Nt.width,Nt.height,Pt,Zt,Nt.data):i.texImage2D(o.TEXTURE_2D,ct,Gt,Nt.width,Nt.height,0,Pt,Zt,Nt.data)}else if(b.isDataArrayTexture)if(ae){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Gt,bt.width,bt.height,bt.depth),W)if(b.layerUpdates.size>0){const ct=Q_(bt.width,bt.height,b.format,b.type);for(const _t of b.layerUpdates){const At=bt.data.subarray(_t*ct/bt.data.BYTES_PER_ELEMENT,(_t+1)*ct/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Pt,Zt,At)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Pt,Zt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,bt.width,bt.height,bt.depth,0,Pt,Zt,bt.data);else if(b.isData3DTexture)ae?(Ne&&i.texStorage3D(o.TEXTURE_3D,Ct,Gt,bt.width,bt.height,bt.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Pt,Zt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,bt.width,bt.height,bt.depth,0,Pt,Zt,bt.data);else if(b.isFramebufferTexture){if(Ne)if(ae)i.texStorage2D(o.TEXTURE_2D,Ct,Gt,bt.width,bt.height);else{let ct=bt.width,_t=bt.height;for(let At=0;At<Ct;At++)i.texImage2D(o.TEXTURE_2D,At,Gt,ct,_t,0,Pt,Zt,null),ct>>=1,_t>>=1}}else if(Jt.length>0){if(ae&&Ne){const ct=Vt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Gt,ct.width,ct.height)}for(let ct=0,_t=Jt.length;ct<_t;ct++)Nt=Jt[ct],ae?W&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Pt,Zt,Nt):i.texImage2D(o.TEXTURE_2D,ct,Gt,Pt,Zt,Nt);b.generateMipmaps=!1}else if(ae){if(Ne){const ct=Vt(bt);i.texStorage2D(o.TEXTURE_2D,Ct,Gt,ct.width,ct.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Zt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Pt,Zt,bt);M(b)&&x(ht),Ht.__version=pt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ft(L,b,nt){if(b.image.length!==6)return;const ht=St(L,b),yt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+nt);const pt=r.get(yt);if(yt.version!==pt.__version||ht===!0){i.activeTexture(o.TEXTURE0+nt);const Ht=Re.getPrimaries(Re.workingColorSpace),Rt=b.colorSpace===Va?null:Re.getPrimaries(b.colorSpace),zt=b.colorSpace===Va||Ht===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!me&&!bt?Pt[_t]=R(b.image[_t],!0,l.maxCubemapSize):Pt[_t]=bt?b.image[_t].image:b.image[_t],Pt[_t]=we(b,Pt[_t]);const Zt=Pt[0],Gt=c.convert(b.format,b.colorSpace),Nt=c.convert(b.type),Jt=D(b.internalFormat,Gt,Nt,b.colorSpace),ae=b.isVideoTexture!==!0,Ne=pt.__version===void 0||ht===!0,W=yt.dataReady;let Ct=H(b,Zt);at(o.TEXTURE_CUBE_MAP,b);let ct;if(me){ae&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Jt,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){ct=Pt[_t].mipmaps;for(let At=0;At<ct.length;At++){const wt=ct[At];b.format!==Ti?Gt!==null?ae?W&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,wt.width,wt.height,Gt,wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,Jt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,wt.width,wt.height,Gt,Nt,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,Jt,wt.width,wt.height,0,Gt,Nt,wt.data)}}}else{if(ct=b.mipmaps,ae&&Ne){ct.length>0&&Ct++;const _t=Vt(Pt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){ae?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Gt,Nt,Pt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Pt[_t].width,Pt[_t].height,0,Gt,Nt,Pt[_t].data);for(let At=0;At<ct.length;At++){const te=ct[At].image[_t].image;ae?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,te.width,te.height,Gt,Nt,te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,Jt,te.width,te.height,0,Gt,Nt,te.data)}}else{ae?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Nt,Pt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Gt,Nt,Pt[_t]);for(let At=0;At<ct.length;At++){const wt=ct[At];ae?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Gt,Nt,wt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,Jt,Gt,Nt,wt.image[_t])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),pt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Mt(L,b,nt,ht,yt,pt){const Ht=c.convert(nt.format,nt.colorSpace),Rt=c.convert(nt.type),zt=D(nt.internalFormat,Ht,Rt,nt.colorSpace),me=r.get(b),bt=r.get(nt);if(bt.__renderTarget=b,!me.__hasExternalTextures){const Pt=Math.max(1,b.width>>pt),Zt=Math.max(1,b.height>>pt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,pt,zt,Pt,Zt,b.depth,0,Ht,Rt,null):i.texImage2D(yt,pt,zt,Pt,Zt,0,Ht,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),pe(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,yt,bt.__webglTexture,0,ue(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,yt,bt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(L,b,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const ht=b.depthTexture,yt=ht&&ht.isDepthTexture?ht.type:null,pt=w(b.stencilBuffer,yt),Ht=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ue(b);pe(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,pt,b.width,b.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,pt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,pt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,L)}else{const ht=b.textures;for(let yt=0;yt<ht.length;yt++){const pt=ht[yt],Ht=c.convert(pt.format,pt.colorSpace),Rt=c.convert(pt.type),zt=D(pt.internalFormat,Ht,Rt,pt.colorSpace),me=ue(b);nt&&pe(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,b.width,b.height):pe(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,zt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(b.depthTexture);ht.__renderTarget=b,(!ht.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt(b.depthTexture,0);const yt=ht.__webglTexture,pt=ue(b);if(b.depthTexture.format===zo)pe(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Po)pe(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Yt(L){const b=r.get(L),nt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ht){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ht.removeEventListener("dispose",yt)};ht.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=ht}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,L)}else if(nt){b.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ht]),b.__webglDepthbuffer[ht]===void 0)b.__webglDepthbuffer[ht]=o.createRenderbuffer(),vt(b.__webglDepthbuffer[ht],L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),vt(b.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,yt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(L,b,nt){const ht=r.get(L);b!==void 0&&Mt(ht.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Yt(L)}function Ge(L){const b=L.texture,nt=r.get(L),ht=r.get(b);L.addEventListener("dispose",N);const yt=L.textures,pt=L.isWebGLCubeRenderTarget===!0,Ht=yt.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=b.version,h.memory.textures++),pt){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let zt=0;zt<b.mipmaps.length;zt++)nt.__webglFramebuffer[Rt][zt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let Rt=0,zt=yt.length;Rt<zt;Rt++){const me=r.get(yt[Rt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&pe(L)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<yt.length;Rt++){const zt=yt[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const me=c.convert(zt.format,zt.colorSpace),bt=c.convert(zt.type),Pt=D(zt.internalFormat,me,bt,zt.colorSpace,L.isXRRenderTarget===!0),Zt=ue(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Pt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),vt(nt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),at(o.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)Mt(nt.__webglFramebuffer[Rt][zt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt);else Mt(nt.__webglFramebuffer[Rt],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Rt=0,zt=yt.length;Rt<zt;Rt++){const me=yt[Rt],bt=r.get(me);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),at(o.TEXTURE_2D,me),Mt(nt.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),M(me)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),at(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let zt=0;zt<b.mipmaps.length;zt++)Mt(nt.__webglFramebuffer[zt],L,b,o.COLOR_ATTACHMENT0,Rt,zt);else Mt(nt.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,Rt,0);M(b)&&x(Rt),i.unbindTexture()}L.depthBuffer&&Yt(L)}function Ie(L){const b=L.textures;for(let nt=0,ht=b.length;nt<ht;nt++){const yt=b[nt];if(M(yt)){const pt=F(L),Ht=r.get(yt).__webglTexture;i.bindTexture(pt,Ht),x(pt),i.unbindTexture()}}}const ce=[],I=[];function Tn(L){if(L.samples>0){if(pe(L)===!1){const b=L.textures,nt=L.width,ht=L.height;let yt=o.COLOR_BUFFER_BIT;const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(L),Rt=b.length>1;if(Rt)for(let zt=0;zt<b.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<b.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=r.get(b[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,nt,ht,0,0,nt,ht,yt,o.NEAREST),p===!0&&(ce.length=0,I.length=0,ce.push(o.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ce.push(pt),I.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let zt=0;zt<b.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=r.get(b[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ue(L){return Math.min(l.maxSamples,L.samples)}function pe(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function kt(L){const b=h.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function we(L,b){const nt=L.colorSpace,ht=L.format,yt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||nt!==As&&nt!==Va&&(Re.getTransfer(nt)===Fe?(ht!==Ti||yt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=tt,this.resetTextureUnits=it,this.setTexture2D=gt,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=jt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=pe}function jA(o,t){function i(r,l=Va){let c;const h=Re.getTransfer(l);if(r===ca)return o.UNSIGNED_BYTE;if(r===Sd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Lv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Dv)return o.BYTE;if(r===Uv)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===vd)return o.INT;if(r===br)return o.UNSIGNED_INT;if(r===sa)return o.FLOAT;if(r===Bo)return o.HALF_FLOAT;if(r===Nv)return o.ALPHA;if(r===Ov)return o.RGB;if(r===Ti)return o.RGBA;if(r===zv)return o.LUMINANCE;if(r===Pv)return o.LUMINANCE_ALPHA;if(r===zo)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===Bv)return o.RED;if(r===yd)return o.RED_INTEGER;if(r===Fv)return o.RG;if(r===Md)return o.RG_INTEGER;if(r===Ed)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===Ec||r===Tc)if(h===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vh||r===kh||r===Xh||r===Wh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qh||r===Yh||r===Zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===qh||r===Yh)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Zh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$h)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===td)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===od)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc||r===cd||r===ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===bc)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Iv||r===fd||r===hd||r===dd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===fd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const KA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
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

}`;class JA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qa({vertexShader:KA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $A extends Cs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,y=null,E=null;const R=new JA,M=i.getContextAttributes();let x=null,F=null;const D=[],w=[],H=new $t;let P=null;const N=new hi;N.viewport=new $e;const k=new hi;k.viewport=new $e;const U=[N,k],C=new xM;let G=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ft=D[j];return ft===void 0&&(ft=new _h,D[j]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(j){let ft=D[j];return ft===void 0&&(ft=new _h,D[j]=ft),ft.getGripSpace()},this.getHand=function(j){let ft=D[j];return ft===void 0&&(ft=new _h,D[j]=ft),ft.getHandSpace()};function tt(j){const ft=w.indexOf(j.inputSource);if(ft===-1)return;const Mt=D[ft];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,m||h),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function lt(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",lt),l.removeEventListener("inputsourceschange",gt);for(let j=0;j<D.length;j++){const ft=w[j];ft!==null&&(w[j]=null,D[j].disconnect(ft))}G=null,it=null,R.reset(),t.setRenderTarget(x),y=null,v=null,_=null,l=null,F=null,St.stop(),r.isPresenting=!1,t.setPixelRatio(P),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){c=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",lt),l.addEventListener("inputsourceschange",gt),M.xrCompatible!==!0&&await i.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,vt=null,Ft=null;M.depth&&(Ft=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=M.stencil?Po:zo,vt=M.stencil?Oo:br);const Yt={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(Yt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),F=new Ar(v.textureWidth,v.textureHeight,{format:Ti,type:ca,depthTexture:new Kv(v.textureWidth,v.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Ar(y.framebufferWidth,y.framebufferHeight,{format:Ti,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),St.setContext(l),St.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function gt(j){for(let ft=0;ft<j.removed.length;ft++){const Mt=j.removed[ft],vt=w.indexOf(Mt);vt>=0&&(w[vt]=null,D[vt].disconnect(Mt))}for(let ft=0;ft<j.added.length;ft++){const Mt=j.added[ft];let vt=w.indexOf(Mt);if(vt===-1){for(let Yt=0;Yt<D.length;Yt++)if(Yt>=w.length){w.push(Mt),vt=Yt;break}else if(w[Yt]===null){w[Yt]=Mt,vt=Yt;break}if(vt===-1)break}const Ft=D[vt];Ft&&Ft.connect(Mt)}}const z=new Z,J=new Z;function K(j,ft,Mt){z.setFromMatrixPosition(ft.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);const vt=z.distanceTo(J),Ft=ft.projectionMatrix.elements,Yt=Mt.projectionMatrix.elements,jt=Ft[14]/(Ft[10]-1),Ge=Ft[14]/(Ft[10]+1),Ie=(Ft[9]+1)/Ft[5],ce=(Ft[9]-1)/Ft[5],I=(Ft[8]-1)/Ft[0],Tn=(Yt[8]+1)/Yt[0],ue=jt*I,pe=jt*Tn,kt=vt/(-I+Tn),we=kt*-I;if(ft.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(we),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ft[10]===-1)j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Vt=jt+kt,L=Ge+kt,b=ue-we,nt=pe+(vt-we),ht=Ie*Ge/L*Vt,yt=ce*Ge/L*Vt;j.projectionMatrix.makePerspective(b,nt,ht,yt,Vt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,ft){ft===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ft.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let ft=j.near,Mt=j.far;R.texture!==null&&(R.depthNear>0&&(ft=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),C.near=k.near=N.near=ft,C.far=k.far=N.far=Mt,(G!==C.near||it!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,it=C.far),N.layers.mask=j.layers.mask|2,k.layers.mask=j.layers.mask|4,C.layers.mask=N.layers.mask|k.layers.mask;const vt=j.parent,Ft=C.cameras;xt(C,vt);for(let Yt=0;Yt<Ft.length;Yt++)xt(Ft[Yt],vt);Ft.length===2?K(C,N,k):C.projectionMatrix.copy(N.projectionMatrix),Tt(j,C,vt)};function Tt(j,ft,Mt){Mt===null?j.matrix.copy(ft.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ft.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ft.projectionMatrix),j.projectionMatrixInverse.copy(ft.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=pd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(j){p=j,v!==null&&(v.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let O=null;function at(j,ft){if(g=ft.getViewerPose(m||h),E=ft,g!==null){const Mt=g.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let vt=!1;Mt.length!==C.cameras.length&&(C.cameras.length=0,vt=!0);for(let jt=0;jt<Mt.length;jt++){const Ge=Mt[jt];let Ie=null;if(y!==null)Ie=y.getViewport(Ge);else{const I=_.getViewSubImage(v,Ge);Ie=I.viewport,jt===0&&(t.setRenderTargetTextures(F,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(F))}let ce=U[jt];ce===void 0&&(ce=new hi,ce.layers.enable(jt),ce.viewport=new $e,U[jt]=ce),ce.matrix.fromArray(Ge.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Ge.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),jt===0&&(C.matrix.copy(ce.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),vt===!0&&C.cameras.push(ce)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const jt=_.getDepthInformation(Mt[0]);jt&&jt.isValid&&jt.texture&&R.init(t,jt,l.renderState)}}for(let Mt=0;Mt<D.length;Mt++){const vt=w[Mt],Ft=D[Mt];vt!==null&&Ft!==void 0&&Ft.update(vt,ft,m||h)}O&&O(j,ft),ft.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ft}),E=null}const St=new n0;St.setAnimationLoop(at),this.setAnimationLoop=function(j){O=j},this.dispose=function(){}}}const _r=new ua,t1=new Ze;function e1(o,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Yv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,D,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,w)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,F,D):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===kn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===kn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=t.get(x),D=F.envMap,w=F.envMapRotation;D&&(M.envMap.value=D,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(_r)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,F,D){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=D*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const F=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function n1(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(F,D){const w=D.program;r.uniformBlockBinding(F,w)}function m(F,D){let w=l[F.id];w===void 0&&(E(F),w=g(F),l[F.id]=w,F.addEventListener("dispose",M));const H=D.program;r.updateUBOMapping(F,H);const P=t.render.frame;c[F.id]!==P&&(v(F),c[F.id]=P)}function g(F){const D=_();F.__bindingPointIndex=D;const w=o.createBuffer(),H=F.__size,P=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,H,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,w),w}function _(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(F){const D=l[F.id],w=F.uniforms,H=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let P=0,N=w.length;P<N;P++){const k=Array.isArray(w[P])?w[P]:[w[P]];for(let U=0,C=k.length;U<C;U++){const G=k[U];if(y(G,P,U,H)===!0){const it=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let lt=0;for(let gt=0;gt<tt.length;gt++){const z=tt[gt],J=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,it+lt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,lt),lt+=J.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,it,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(F,D,w,H){const P=F.value,N=D+"_"+w;if(H[N]===void 0)return typeof P=="number"||typeof P=="boolean"?H[N]=P:H[N]=P.clone(),!0;{const k=H[N];if(typeof P=="number"||typeof P=="boolean"){if(k!==P)return H[N]=P,!0}else if(k.equals(P)===!1)return k.copy(P),!0}return!1}function E(F){const D=F.uniforms;let w=0;const H=16;for(let N=0,k=D.length;N<k;N++){const U=Array.isArray(D[N])?D[N]:[D[N]];for(let C=0,G=U.length;C<G;C++){const it=U[C],tt=Array.isArray(it.value)?it.value:[it.value];for(let lt=0,gt=tt.length;lt<gt;lt++){const z=tt[lt],J=R(z),K=w%H,xt=K%J.boundary,Tt=K+xt;w+=xt,Tt!==0&&H-Tt<J.storage&&(w+=H-Tt),it.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),it.__offset=w,w+=J.storage}}}const P=w%H;return P>0&&(w+=H-P),F.__size=w,F.__cache={},this}function R(F){const D={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(D.boundary=4,D.storage=4):F.isVector2?(D.boundary=8,D.storage=8):F.isVector3||F.isColor?(D.boundary=16,D.storage=12):F.isVector4?(D.boundary=16,D.storage=16):F.isMatrix3?(D.boundary=48,D.storage=48):F.isMatrix4?(D.boundary=64,D.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),D}function M(F){const D=F.target;D.removeEventListener("dispose",M);const w=h.indexOf(D.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:p,update:m,dispose:x}}class i1{constructor(t={}){const{canvas:i=yy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,x=null;const F=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=fi;let P=0,N=0,k=null,U=-1,C=null;const G=new $e,it=new $e;let tt=null;const lt=new Le(0);let gt=0,z=i.width,J=i.height,K=1,xt=null,Tt=null;const O=new $e(0,0,z,J),at=new $e(0,0,z,J);let St=!1;const j=new Rd;let ft=!1,Mt=!1;const vt=new Ze,Ft=new Ze,Yt=new Z,jt=new $e,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ce(){return k===null?K:1}let I=r;function Tn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_d}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",wt,!1),I===null){const q="webgl2";if(I=Tn(q,A),I===null)throw Tn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,pe,kt,we,Vt,L,b,nt,ht,yt,pt,Ht,Rt,zt,me,bt,Pt,Zt,Gt,Nt,Jt,ae,Ne,W;function Ct(){ue=new db(I),ue.init(),ae=new jA(I,ue),pe=new sb(I,ue,t,ae),kt=new YA(I,ue),pe.reverseDepthBuffer&&v&&kt.buffers.depth.setReversed(!0),we=new gb(I),Vt=new OA,L=new ZA(I,ue,kt,Vt,pe,ae,we),b=new lb(w),nt=new hb(w),ht=new MM(I),Ne=new ab(I,ht),yt=new pb(I,ht,we,Ne),pt=new vb(I,yt,ht,we),Gt=new _b(I,pe,L),bt=new ob(Vt),Ht=new NA(w,b,nt,ue,pe,Ne,bt),Rt=new e1(w,Vt),zt=new PA,me=new VA(ue),Zt=new ib(w,b,nt,kt,pt,y,p),Pt=new WA(w,pt,pe),W=new n1(I,we,pe,kt),Nt=new rb(I,ue,we),Jt=new mb(I,ue,we),we.programs=Ht.programs,w.capabilities=pe,w.extensions=ue,w.properties=Vt,w.renderLists=zt,w.shadowMap=Pt,w.state=kt,w.info=we}Ct();const ct=new $A(w,I);this.xr=ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(z,J,!1))},this.getSize=function(A){return A.set(z,J)},this.setSize=function(A,q,rt=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,J=q,i.width=Math.floor(A*K),i.height=Math.floor(q*K),rt===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(z*K,J*K).floor()},this.setDrawingBufferSize=function(A,q,rt){z=A,J=q,K=rt,i.width=Math.floor(A*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,q,rt,st){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,q,rt,st),kt.viewport(G.copy(O).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,q,rt,st){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,q,rt,st),kt.scissor(it.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){kt.setScissorTest(St=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){Tt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let st=0;if(A){let X=!1;if(k!==null){const Et=k.texture.format;X=Et===Ed||Et===Md||Et===yd}if(X){const Et=k.texture.type,Dt=Et===ca||Et===br||Et===No||Et===Oo||Et===Sd||Et===xd,Lt=Zt.getClearColor(),Ot=Zt.getClearAlpha(),ee=Lt.r,Qt=Lt.g,Xt=Lt.b;Dt?(E[0]=ee,E[1]=Qt,E[2]=Xt,E[3]=Ot,I.clearBufferuiv(I.COLOR,0,E)):(R[0]=ee,R[1]=Qt,R[2]=Xt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else st|=I.COLOR_BUFFER_BIT}q&&(st|=I.DEPTH_BUFFER_BIT),rt&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Zt.dispose(),zt.dispose(),me.dispose(),Vt.dispose(),b.dispose(),nt.dispose(),pt.dispose(),Ne.dispose(),W.dispose(),Ht.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Ds),ct.removeEventListener("sessionend",Us),Ai.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=we.autoReset,q=Pt.enabled,rt=Pt.autoUpdate,st=Pt.needsUpdate,X=Pt.type;Ct(),we.autoReset=A,Pt.enabled=q,Pt.autoUpdate=rt,Pt.needsUpdate=st,Pt.type=X}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function te(A){const q=A.target;q.removeEventListener("dispose",te),qe(q)}function qe(A){ln(A),Vt.remove(A)}function ln(A){const q=Vt.get(A).programs;q!==void 0&&(q.forEach(function(rt){Ht.releaseProgram(rt)}),A.isShaderMaterial&&Ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,st,X,Et){q===null&&(q=Ge);const Dt=X.isMesh&&X.matrixWorld.determinant()<0,Lt=Ns(A,q,rt,st,X);kt.setMaterial(st,Dt);let Ot=rt.index,ee=1;if(st.wireframe===!0){if(Ot=yt.getWireframeAttribute(rt),Ot===void 0)return;ee=2}const Qt=rt.drawRange,Xt=rt.attributes.position;let Se=Qt.start*ee,xe=(Qt.start+Qt.count)*ee;Et!==null&&(Se=Math.max(Se,Et.start*ee),xe=Math.min(xe,(Et.start+Et.count)*ee)),Ot!==null?(Se=Math.max(Se,0),xe=Math.min(xe,Ot.count)):Xt!=null&&(Se=Math.max(Se,0),xe=Math.min(xe,Xt.count));const Ve=xe-Se;if(Ve<0||Ve===1/0)return;Ne.setup(X,st,Lt,rt,Ot);let Te,ne=Nt;if(Ot!==null&&(Te=ht.get(Ot),ne=Jt,ne.setIndex(Te)),X.isMesh)st.wireframe===!0?(kt.setLineWidth(st.wireframeLinewidth*ce()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(X.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),kt.setLineWidth(qt*ce()),X.isLineSegments?ne.setMode(I.LINES):X.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else X.isPoints?ne.setMode(I.POINTS):X.isSprite&&ne.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ac("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))ne.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qt=X._multiDrawStarts,cn=X._multiDrawCounts,Me=X._multiDrawCount,On=Ot?ht.get(Ot).bytesPerElement:1,gi=Vt.get(st).currentProgram.getUniforms();for(let Dn=0;Dn<Me;Dn++)gi.setValue(I,"_gl_DrawID",Dn),ne.render(qt[Dn]/On,cn[Dn])}else if(X.isInstancedMesh)ne.renderInstances(Se,Ve,X.count);else if(rt.isInstancedBufferGeometry){const qt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,cn=Math.min(rt.instanceCount,qt);ne.renderInstances(Se,Ve,cn)}else ne.render(Se,Ve)};function Ee(A,q,rt){A.transparent===!0&&A.side===ra&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,je(A,q,rt),A.side=Wa,A.needsUpdate=!0,je(A,q,rt),A.side=ra):je(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),x=me.get(rt),x.init(q),D.push(x),rt.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),A!==rt&&A.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const st=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Et=X.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const Lt=Et[Dt];Ee(Lt,rt,X),st.add(Lt)}else Ee(Et,rt,X),st.add(Et)}),x=D.pop(),st},this.compileAsync=function(A,q,rt=null){const st=this.compile(A,q,rt);return new Promise(X=>{function Et(){if(st.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&st.delete(Dt)}),st.size===0){X(A);return}setTimeout(Et,10)}ue.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let _n=null;function pi(A){_n&&_n(A)}function Ds(){Ai.stop()}function Us(){Ai.start()}const Ai=new n0;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){_n=A,ct.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},ct.addEventListener("sessionstart",Ds),ct.addEventListener("sessionend",Us),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(q),q=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,q,k),x=me.get(A,D.length),x.init(q),D.push(x),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),j.setFromProjectionMatrix(Ft),Mt=this.localClippingEnabled,ft=bt.init(this.clippingPlanes,Mt),M=zt.get(A,F.length),M.init(),F.push(M),ct.enabled===!0&&ct.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&Ya(Et,q,-1/0,w.sortObjects)}Ya(A,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(xt,Tt),Ie=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ie&&Zt.addToRenderList(M,A),this.info.render.frame++,ft===!0&&bt.beginShadows();const rt=x.state.shadowsArray;Pt.render(rt,A,q),ft===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,X=M.transmissive;if(x.setupLights(),q.isArrayCamera){const Et=q.cameras;if(X.length>0)for(let Dt=0,Lt=Et.length;Dt<Lt;Dt++){const Ot=Et[Dt];Ls(st,X,A,Ot)}Ie&&Zt.render(A);for(let Dt=0,Lt=Et.length;Dt<Lt;Dt++){const Ot=Et[Dt];Rr(M,A,Ot,Ot.viewport)}}else X.length>0&&Ls(st,X,A,q),Ie&&Zt.render(A),Rr(M,A,q);k!==null&&N===0&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(w,A,q),Ne.resetDefaultState(),U=-1,C=null,D.pop(),D.length>0?(x=D[D.length-1],ft===!0&&bt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Ya(A,q,rt,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){st&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ft);const Dt=pt.update(A),Lt=A.material;Lt.visible&&M.push(A,Dt,Lt,rt,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Dt=pt.update(A),Lt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),jt.copy(Dt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){const Ot=Dt.groups;for(let ee=0,Qt=Ot.length;ee<Qt;ee++){const Xt=Ot[ee],Se=Lt[Xt.materialIndex];Se&&Se.visible&&M.push(A,Dt,Se,rt,jt.z,Xt)}}else Lt.visible&&M.push(A,Dt,Lt,rt,jt.z,null)}}const Et=A.children;for(let Dt=0,Lt=Et.length;Dt<Lt;Dt++)Ya(Et[Dt],q,rt,st)}function Rr(A,q,rt,st){const X=A.opaque,Et=A.transmissive,Dt=A.transparent;x.setupLightsView(rt),ft===!0&&bt.setGlobalState(w.clippingPlanes,rt),st&&kt.viewport(G.copy(st)),X.length>0&&Za(X,q,rt),Et.length>0&&Za(Et,q,rt),Dt.length>0&&Za(Dt,q,rt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ls(A,q,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new Ar(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Bo:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Et=x.state.transmissionRenderTarget[st.id],Dt=st.viewport||G;Et.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(lt),gt=w.getClearAlpha(),gt<1&&w.setClearColor(16777215,.5),w.clear(),Ie&&Zt.render(rt);const Ot=w.toneMapping;w.toneMapping=Xa;const ee=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),ft===!0&&bt.setGlobalState(w.clippingPlanes,st),Za(A,rt,st),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Xt=0,Se=q.length;Xt<Se;Xt++){const xe=q[Xt],Ve=xe.object,Te=xe.geometry,ne=xe.material,qt=xe.group;if(ne.side===ra&&Ve.layers.test(st.layers)){const cn=ne.side;ne.side=kn,ne.needsUpdate=!0,mi(Ve,rt,st,Te,ne,qt),ne.side=cn,ne.needsUpdate=!0,Qt=!0}}Qt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}w.setRenderTarget(Lt),w.setClearColor(lt,gt),ee!==void 0&&(st.viewport=ee),w.toneMapping=Ot}function Za(A,q,rt){const st=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Et=A.length;X<Et;X++){const Dt=A[X],Lt=Dt.object,Ot=Dt.geometry,ee=Dt.group;let Qt=Dt.material;Qt.allowOverride===!0&&st!==null&&(Qt=st),Lt.layers.test(rt.layers)&&mi(Lt,q,rt,Ot,Qt,ee)}}function mi(A,q,rt,st,X,Et){A.onBeforeRender(w,q,rt,st,X,Et),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(w,q,rt,st,A,Et),X.transparent===!0&&X.side===ra&&X.forceSinglePass===!1?(X.side=kn,X.needsUpdate=!0,w.renderBufferDirect(rt,q,st,X,A,Et),X.side=Wa,X.needsUpdate=!0,w.renderBufferDirect(rt,q,st,X,A,Et),X.side=ra):w.renderBufferDirect(rt,q,st,X,A,Et),A.onAfterRender(w,q,rt,st,X,Et)}function je(A,q,rt){q.isScene!==!0&&(q=Ge);const st=Vt.get(A),X=x.state.lights,Et=x.state.shadowsArray,Dt=X.state.version,Lt=Ht.getParameters(A,X.state,Et,q,rt),Ot=Ht.getProgramCacheKey(Lt);let ee=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?nt:b).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,ee===void 0&&(A.addEventListener("dispose",te),ee=new Map,st.programs=ee);let Qt=ee.get(Ot);if(Qt!==void 0){if(st.currentProgram===Qt&&st.lightsStateVersion===Dt)return zi(A,Lt),Qt}else Lt.uniforms=Ht.getUniforms(A),A.onBeforeCompile(Lt,w),Qt=Ht.acquireProgram(Lt,Ot),ee.set(Ot,Qt),st.uniforms=Lt.uniforms;const Xt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),zi(A,Lt),st.needsLights=Bc(A),st.lightsStateVersion=Dt,st.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.directionalShadowMap.value=X.state.directionalShadowMap,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotShadowMap.value=X.state.spotShadowMap,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMap.value=X.state.pointShadowMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),st.currentProgram=Qt,st.uniformsList=null,Qt}function vn(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Rc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function zi(A,q){const rt=Vt.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function Ns(A,q,rt,st,X){q.isScene!==!0&&(q=Ge),L.resetTextureUnits();const Et=q.fog,Dt=st.isMeshStandardMaterial?q.environment:null,Lt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:As,Ot=(st.isMeshStandardMaterial?nt:b).get(st.envMap||Dt),ee=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,xe=!!rt.morphAttributes.color;let Ve=Xa;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ve=w.toneMapping);const Te=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ne=Te!==void 0?Te.length:0,qt=Vt.get(st),cn=x.state.lights;if(ft===!0&&(Mt===!0||A!==C)){const Ke=A===C&&st.id===U;bt.setState(st,A,Ke)}let Me=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==cn.state.version||qt.outputColorSpace!==Lt||X.isBatchedMesh&&qt.batching===!1||!X.isBatchedMesh&&qt.batching===!0||X.isBatchedMesh&&qt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qt.instancing===!1||!X.isInstancedMesh&&qt.instancing===!0||X.isSkinnedMesh&&qt.skinning===!1||!X.isSkinnedMesh&&qt.skinning===!0||X.isInstancedMesh&&qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qt.instancingMorph===!1&&X.morphTexture!==null||qt.envMap!==Ot||st.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==ee||qt.vertexTangents!==Qt||qt.morphTargets!==Xt||qt.morphNormals!==Se||qt.morphColors!==xe||qt.toneMapping!==Ve||qt.morphTargetsCount!==ne)&&(Me=!0):(Me=!0,qt.__version=st.version);let On=qt.currentProgram;Me===!0&&(On=je(st,q,X));let gi=!1,Dn=!1,pn=!1;const Oe=On.getUniforms(),Un=qt.uniforms;if(kt.useProgram(On.program)&&(gi=!0,Dn=!0,pn=!0),st.id!==U&&(U=st.id,Dn=!0),gi||C!==A){kt.buffers.depth.getReversed()?(vt.copy(A.projectionMatrix),Ey(vt),Ty(vt),Oe.setValue(I,"projectionMatrix",vt)):Oe.setValue(I,"projectionMatrix",A.projectionMatrix),Oe.setValue(I,"viewMatrix",A.matrixWorldInverse);const Sn=Oe.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,Yt.setFromMatrixPosition(A.matrixWorld)),pe.logarithmicDepthBuffer&&Oe.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Oe.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Dn=!0,pn=!0)}if(X.isSkinnedMesh){Oe.setOptional(I,X,"bindMatrix"),Oe.setOptional(I,X,"bindMatrixInverse");const Ke=X.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(I,"boneTexture",Ke.boneTexture,L))}X.isBatchedMesh&&(Oe.setOptional(I,X,"batchingTexture"),Oe.setValue(I,"batchingTexture",X._matricesTexture,L),Oe.setOptional(I,X,"batchingIdTexture"),Oe.setValue(I,"batchingIdTexture",X._indirectTexture,L),Oe.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Oe.setValue(I,"batchingColorTexture",X._colorsTexture,L));const bn=rt.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Gt.update(X,rt,On),(Dn||qt.receiveShadow!==X.receiveShadow)&&(qt.receiveShadow=X.receiveShadow,Oe.setValue(I,"receiveShadow",X.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Un.envMap.value=Ot,Un.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Un.envMapIntensity.value=q.environmentIntensity),Dn&&(Oe.setValue(I,"toneMappingExposure",w.toneMappingExposure),qt.needsLights&&Pc(Un,pn),Et&&st.fog===!0&&Rt.refreshFogUniforms(Un,Et),Rt.refreshMaterialUniforms(Un,st,K,J,x.state.transmissionRenderTarget[A.id]),Rc.upload(I,vn(qt),Un,L)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Rc.upload(I,vn(qt),Un,L),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Oe.setValue(I,"center",X.center),Oe.setValue(I,"modelViewMatrix",X.modelViewMatrix),Oe.setValue(I,"normalMatrix",X.normalMatrix),Oe.setValue(I,"modelMatrix",X.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ke=st.uniformsGroups;for(let Sn=0,Cr=Ke.length;Sn<Cr;Sn++){const zn=Ke[Sn];W.update(zn,On),W.bind(zn,On)}}return On}function Pc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Bc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,q,rt){const st=Vt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Vt.get(A.texture).__webglTexture=q,Vt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=Vt.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Vo=I.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){k=A,P=q,N=rt;let st=!0,X=null,Et=!1,Dt=!1;if(A){const Ot=Vt.get(A);if(Ot.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ot.__hasExternalTextures)L.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Ot.__boundDepthTexture!==Xt){if(Xt!==null&&Vt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const ee=A.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Dt=!0);const Qt=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[q])?X=Qt[q][rt]:X=Qt[q],Et=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?X=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?X=Qt[rt]:X=Qt,G.copy(A.viewport),it.copy(A.scissor),tt=A.scissorTest}else G.copy(O).multiplyScalar(K).floor(),it.copy(at).multiplyScalar(K).floor(),tt=St;if(rt!==0&&(X=Vo),kt.bindFramebuffer(I.FRAMEBUFFER,X)&&st&&kt.drawBuffers(A,X),kt.viewport(G),kt.scissor(it),kt.setScissorTest(tt),Et){const Ot=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,rt)}else if(Dt){const Ot=Vt.get(A.texture),ee=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,rt,ee)}else if(A!==null&&rt!==0){const Ot=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,rt)}U=-1},this.readRenderTargetPixels=function(A,q,rt,st,X,Et,Dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){kt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{const Ot=A.texture,ee=Ot.format,Qt=Ot.type;if(!pe.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&rt>=0&&rt<=A.height-X&&I.readPixels(q,rt,st,X,ae.convert(ee),ae.convert(Qt),Et)}finally{const Ot=k!==null?Vt.get(k).__webglFramebuffer:null;kt.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,st,X,Et,Dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt)if(q>=0&&q<=A.width-st&&rt>=0&&rt<=A.height-X){kt.bindFramebuffer(I.FRAMEBUFFER,Lt);const Ot=A.texture,ee=Ot.format,Qt=Ot.type;if(!pe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(q,rt,st,X,ae.convert(ee),ae.convert(Qt),0);const Se=k!==null?Vt.get(k).__webglFramebuffer:null;kt.bindFramebuffer(I.FRAMEBUFFER,Se);const xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await My(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(Xt),I.deleteSync(xe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const st=Math.pow(2,-rt),X=Math.floor(A.image.width*st),Et=Math.floor(A.image.height*st),Dt=q!==null?q.x:0,Lt=q!==null?q.y:0;L.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,rt,0,0,Dt,Lt,X,Et),kt.unbindTexture()};const ja=I.createFramebuffer(),Os=I.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,st=null,X=0,Et=null){Et===null&&(X!==0?(Ac("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=X,X=0):Et=0);let Dt,Lt,Ot,ee,Qt,Xt,Se,xe,Ve;const Te=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(rt!==null)Dt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ot=rt.isBox3?rt.max.z-rt.min.z:1,ee=rt.min.x,Qt=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const bn=Math.pow(2,-X);Dt=Math.floor(Te.width*bn),Lt=Math.floor(Te.height*bn),A.isDataArrayTexture?Ot=Te.depth:A.isData3DTexture?Ot=Math.floor(Te.depth*bn):Ot=1,ee=0,Qt=0,Xt=0}st!==null?(Se=st.x,xe=st.y,Ve=st.z):(Se=0,xe=0,Ve=0);const ne=ae.convert(q.format),qt=ae.convert(q.type);let cn;q.isData3DTexture?(L.setTexture3D(q,0),cn=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),cn=I.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),cn=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Dn=I.getParameter(I.UNPACK_SKIP_ROWS),pn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const Oe=A.isDataArrayTexture||A.isData3DTexture,Un=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const bn=Vt.get(A),Ke=Vt.get(q),Sn=Vt.get(bn.__renderTarget),Cr=Vt.get(Ke.__renderTarget);kt.bindFramebuffer(I.READ_FRAMEBUFFER,Sn.__webglFramebuffer),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let zn=0;zn<Ot;zn++)Oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(A).__webglTexture,X,Xt+zn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Et,Ve+zn)),I.blitFramebuffer(ee,Qt,Dt,Lt,Se,xe,Dt,Lt,I.DEPTH_BUFFER_BIT,I.NEAREST);kt.bindFramebuffer(I.READ_FRAMEBUFFER,null),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Vt.has(A)){const bn=Vt.get(A),Ke=Vt.get(q);kt.bindFramebuffer(I.READ_FRAMEBUFFER,ja),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Os);for(let Sn=0;Sn<Ot;Sn++)Oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,X,Xt+Sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,X),Un?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ke.__webglTexture,Et,Ve+Sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ke.__webglTexture,Et),X!==0?I.blitFramebuffer(ee,Qt,Dt,Lt,Se,xe,Dt,Lt,I.COLOR_BUFFER_BIT,I.NEAREST):Un?I.copyTexSubImage3D(cn,Et,Se,xe,Ve+Sn,ee,Qt,Dt,Lt):I.copyTexSubImage2D(cn,Et,Se,xe,ee,Qt,Dt,Lt);kt.bindFramebuffer(I.READ_FRAMEBUFFER,null),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(cn,Et,Se,xe,Ve,Dt,Lt,Ot,ne,qt,Te.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(cn,Et,Se,xe,Ve,Dt,Lt,Ot,ne,Te.data):I.texSubImage3D(cn,Et,Se,xe,Ve,Dt,Lt,Ot,ne,qt,Te):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,Se,xe,Dt,Lt,ne,qt,Te.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,Se,xe,Te.width,Te.height,ne,Te.data):I.texSubImage2D(I.TEXTURE_2D,Et,Se,xe,Dt,Lt,ne,qt,Te);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,pn),Et===0&&q.generateMipmaps&&I.generateMipmap(cn),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,rt=null,st=null,X=0){return Ac('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,rt,st,X)},this.initRenderTarget=function(A){Vt.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){P=0,N=0,k=null,kt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const a1={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},r1={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function o0(o){return o.endsWith("2")?Math.PI:o.endsWith("'")?-Math.PI/2:Math.PI/2}function l0(o){return o.replace("'","").replace("2","")}function Mv(o){return o.endsWith("'")&&!o.endsWith("2")}function s1(o){return o.endsWith("2")}const o1=16777215,l1=.72;class c1{constructor(t){fn(this,"renderer");fn(this,"scene");fn(this,"camera");fn(this,"arrowGroup");fn(this,"currentMove",null);fn(this,"width",1);fn(this,"height",1);this.renderer=new i1({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new Ky,this.camera=new hi(45,1,.01,100),this.camera.position.set(0,0,3);const i=new SM(16777215,.9),r=new vM(16777215,.6);r.position.set(2,3,4),this.scene.add(i,r),this.arrowGroup=new Tr,this.scene.add(this.arrowGroup)}resize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.rebuildArrow(t))}render(t){if(!t||!this.currentMove){this.renderer.render(this.scene,this.camera);return}const i=new Tr,r=new Ze;r.set(t.rotationMatrix[0],t.rotationMatrix[1],t.rotationMatrix[2],0,t.rotationMatrix[3],t.rotationMatrix[4],t.rotationMatrix[5],0,t.rotationMatrix[6],t.rotationMatrix[7],t.rotationMatrix[8],0,0,0,0,1),i.setRotationFromMatrix(r);const l=t.size/this.width;i.position.set((t.translation[0]-this.width/2)*l,-(t.translation[1]-this.height/2)*l,t.translation[2]*l),i.scale.setScalar(l*2),this.arrowGroup.matrixAutoUpdate=!1,this.arrowGroup.matrix.copy(i.matrix),this.arrowGroup.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.clearArrow()}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=l0(t),r=new Z(...a1[i]),l=new Z(0,1,0);Math.abs(r.dot(l))>.9&&l.set(0,0,1);const c=new Z().crossVectors(l,r).normalize(),h=new Z().crossVectors(r,c).normalize(),d=r.clone().multiplyScalar(.51),p=new Tr;p.position.copy(d);const m=o0(t),g=.28,_=[],v=24,y=Mv(t)?m:0,E=Mv(t)?0:m;for(let N=0;N<=v;N++){const k=y+(E-y)*N/v,U=c.clone().multiplyScalar(Math.cos(k)*g).add(h.clone().multiplyScalar(Math.sin(k)*g));_.push(U)}const R=new Jv(_),M=new Ud(R,v,.025,8,!1),x=new Ad({color:o1,transparent:!0,opacity:l1,depthTest:!0,depthWrite:!1}),F=new di(M,x);p.add(F);const D=_[_.length-1],w=_[_.length-2]??D,H=new Z().subVectors(D,w).normalize(),P=new di(new Dd(.06,.14,12),x.clone());if(P.position.copy(D),P.quaternion.setFromUnitVectors(new Z(0,1,0),H),p.add(P),s1(t)){const N=p.clone();N.rotation.z=Math.PI,p.add(N)}this.arrowGroup.add(p)}clearArrow(){for(;this.arrowGroup.children.length>0;){const t=this.arrowGroup.children[0];this.arrowGroup.remove(t),u1(t)}}}function u1(o){o.traverse(t=>{t instanceof di&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function f1({pose:o,move:t,width:i,height:r,active:l}){const c=ve.useRef(null),h=ve.useRef(null);return ve.useEffect(()=>{const d=c.current;if(!d)return;const p=new c1(d);return h.current=p,()=>{p.dispose(),h.current=null}},[]),ve.useEffect(()=>{var d;(d=h.current)==null||d.resize(i,r)},[i,r]),ve.useEffect(()=>{var d;(d=h.current)==null||d.setMove(t)},[t]),ve.useEffect(()=>{if(!l)return;let d=0;const p=()=>{var m;(m=h.current)==null||m.render(o),d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[o,l]),We.jsx("canvas",{ref:c,className:"ar-overlay mirrored","aria-hidden":"true"})}function h1({phase:o,hint:t,progress:i}){return o!=="calibrating"?null:We.jsxs("div",{className:"calibration-overlay",children:[We.jsx("p",{className:"calibration-hint",children:t}),We.jsx("div",{className:"calibration-bar",children:We.jsx("div",{className:"calibration-fill",style:{width:`${i*100}%`}})}),We.jsx("p",{className:"calibration-sub",children:"큐브 면을 카메라 중앙에 맞추고 잠시 유지하세요"})]})}function d1({videoRef:o,onDimensions:t}){const[i,r]=ve.useState(!0);return ve.useEffect(()=>{const l=o.current;if(!l)return;const c=()=>{l.videoWidth&&l.videoHeight&&(t==null||t(l.videoWidth,l.videoHeight))};return l.addEventListener("loadedmetadata",c),l.addEventListener("resize",c),()=>{l.removeEventListener("loadedmetadata",c),l.removeEventListener("resize",c)}},[o,t]),We.jsx("video",{ref:o,className:`camera-feed${i?" mirrored":""}`,playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:()=>r(!0)})}function p1({message:o="준비 중..."}){return We.jsxs("div",{className:"loading-screen",children:[We.jsx("div",{className:"loading-spinner"}),We.jsx("p",{children:o})]})}function m1({phase:o,currentStep:t,totalSteps:i}){return o!=="solving"||i===0?null:We.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}const Ev={U:"흰색 (위)",D:"노란색 (아래)",F:"초록색 (앞)",B:"파란색 (뒤)",R:"빨간색 (오른쪽)",L:"주황색 (왼쪽)"},Cc=["U","F","R","B","L","D"],g1={U:"W",D:"Y",F:"G",B:"B",R:"R",L:"O"};function _1(o){const t=new Map;for(const l of o)t.set(l.faceId,l.colors);const i=["U","R","F","D","L","B"];let r="";for(const l of i){const c=t.get(l);if(!c||c.length!==9)throw new Error(`Missing face data for ${l}`);for(const h of c)r+=v1(h)}return r}function v1(o){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[o]}function S1(o,t){const i=new Array(9).fill(0);for(let r=0;r<3;r++)for(let l=0;l<3;l++){let c=0;for(let h=0;h<3;h++)c+=o[r*3+h]*t[h*3+l];i[r*3+l]=c}return i}function Tv(){return[1,0,0,0,1,0,0,0,1]}function x1(o,t){const[i,r,l]=o,c=Math.hypot(i,r,l)||1,h=i/c,d=r/c,p=l/c,m=Math.cos(t),g=Math.sin(t),_=1-m;return[_*h*h+m,_*h*d-g*p,_*h*p+g*d,_*h*d+g*p,_*d*d+m,_*d*p-g*h,_*h*p-g*d,_*d*p+g*h,_*p*p+m]}function y1(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-DtGqYb1U.js",import.meta.url),{type:"module"})}const M1=[{h:0,s:0,v:220,label:"W"},{h:28,s:200,v:220,label:"Y"},{h:0,s:220,v:200,label:"R"},{h:12,s:220,v:220,label:"O"},{h:110,s:200,v:180,label:"G"},{h:210,s:200,v:180,label:"B"}];function E1(o,t,i){const r=o/255,l=t/255,c=i/255,h=Math.max(r,l,c),d=Math.min(r,l,c),p=h-d;let m=0;p>0&&(h===r?m=(l-c)/p%6:h===l?m=(c-r)/p+2:m=(r-l)/p+4,m*=60,m<0&&(m+=360));const g=h===0?0:p/h*255,_=h*255;return[m,g,_]}function T1(o,t){const i=Math.min(Math.abs(o[0]-t.h),360-Math.abs(o[0]-t.h)),r=o[1]-t.s,l=o[2]-t.v;return i*.6+Math.abs(r)*.8+Math.abs(l)*.4}function b1(o,t,i){const r=E1(o,t,i);if(r[2]>200&&r[1]<50)return"W";if(r[1]<40&&r[2]<80)return"B";let l="W",c=1/0;for(const h of M1){const d=T1(r,h);d<c&&(c=d,l=h.label)}return l}function A1(o,t,i){const r=[],l=t/3,c=i/3;for(let h=0;h<3;h++)for(let d=0;d<3;d++){const p=d*l+l/2,m=h*c+c/2,g=Math.min(l,c)*.2;let _=0,v=0,y=0,E=0;for(let R=-g;R<=g;R+=2)for(let M=-g;M<=g;M+=2){if(M*M+R*R>g*g)continue;const x=Math.floor(p+M),F=Math.floor(m+R);if(x<0||F<0||x>=t||F>=i)continue;const D=o.getImageData(x,F,1,1).data;_+=D[0],v+=D[1],y+=D[2],E++}if(E===0){r.push("W");continue}r.push(b1(Math.round(_/E),Math.round(v/E),Math.round(y/E)))}return r}function R1(o,t){if(o.length!==9||o[4]!==t)return!1;const r=new Map;for(const l of o)r.set(l,(r.get(l)??0)+1);return(r.get(t)??0)>=5}const ui=.5,C1=[[-ui,ui,ui],[ui,ui,ui],[ui,-ui,ui],[-ui,-ui,ui]];function w1(o){if(o.length<4)return null;const t=[...o].sort((l,c)=>l.y-c.y),i=t.slice(0,2).sort((l,c)=>l.x-c.x),r=t.slice(2,4).sort((l,c)=>l.x-c.x);return[i[0],i[1],r[1],r[0]]}function c0(o,t,i){const r=window.cv,l=t*.9,c=t*.9,h=t/2,d=i/2,p=r.matFromArray(4,1,r.CV_32FC1,C1.flat()),m=r.matFromArray(4,1,r.CV_32FC1,[o[0].x,o[0].y,o[1].x,o[1].y,o[2].x,o[2].y,o[3].x,o[3].y]),g=r.matFromArray(3,3,r.CV_32FC1,[l,0,h,0,c,d,0,0,1]),_=r.matFromArray(4,1,r.CV_32FC1,[0,0,0,0]),v=new r.Mat,y=new r.Mat,E=new r.Mat;r.solvePnP(p,m,g,_,v,y),r.Rodrigues(v,E);const R=[];for(let D=0;D<9;D++)R.push(E.data32F[D]??E.floatAt(Math.floor(D/3),D%3));const M=[y.data32F[0]??y.floatAt(0,0),y.data32F[1]??y.floatAt(1,0),y.data32F[2]??y.floatAt(2,0)],x={x:o.reduce((D,w)=>D+w.x,0)/4,y:o.reduce((D,w)=>D+w.y,0)/4},F=(Math.hypot(o[1].x-o[0].x,o[1].y-o[0].y)+Math.hypot(o[2].x-o[3].x,o[2].y-o[3].y))/2;return p.delete(),m.delete(),g.delete(),_.delete(),v.delete(),y.delete(),E.delete(),{corners:o,center:x,size:F,rotationMatrix:R,translation:M,confidence:.8}}const Ui=150;function u0(o,t,i){const r=window.cv,l=r.imread(o),c=new r.Mat,h=new r.Mat,d=new r.Mat,p=new r.MatVector,m=new r.Mat;r.cvtColor(l,c,r.COLOR_RGBA2RGB),r.GaussianBlur(c,h,new r.Size(5,5),0),r.Canny(h,d,40,120),r.findContours(d,p,m,r.RETR_EXTERNAL,r.CHAIN_APPROX_SIMPLE);let g=null,_=0;for(let v=0;v<p.size();v++){const y=p.get(v),E=r.contourArea(y);if(E<t*i*.015){y.delete();continue}const R=r.arcLength(y,!0),M=new r.Mat;if(r.approxPolyDP(y,M,.03*R,!0),M.rows===4){const x=[];for(let D=0;D<4;D++)x.push({x:M.data32S[D*2],y:M.data32S[D*2+1]});const F=w1(x);F&&E>_&&(_=E,g=F)}M.delete(),y.delete()}return l.delete(),c.delete(),h.delete(),d.delete(),p.delete(),m.delete(),g}function bv(o,t,i){const r=u0(o,t,i);if(!r)return null;const l=U1(o,r),c=c0(r,t,i);return{colors:l,pose:c}}function D1(o){const t=window.cv,i=t.imread(o),r=new t.Mat;return t.cvtColor(i,r,t.COLOR_RGBA2GRAY),i.delete(),r}function U1(o,t){const i=window.cv,r=i.imread(o),l=new i.Mat;i.cvtColor(r,l,i.COLOR_RGBA2RGB);const c=i.matFromArray(4,1,i.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),h=i.matFromArray(4,1,i.CV_32FC1,[0,0,Ui,0,Ui,Ui,0,Ui]),d=i.getPerspectiveTransform(c,h),p=new i.Mat;i.warpPerspective(l,p,d,new i.Size(Ui,Ui));const m=document.createElement("canvas");m.width=Ui,m.height=Ui,i.imshow(m,p);const g=m.getContext("2d",{willReadFrequently:!0}),_=g?A1(g,Ui,Ui):Array(9).fill("W");return r.delete(),l.delete(),c.delete(),h.delete(),d.delete(),p.delete(),_}const Av=45;class L1{constructor(){fn(this,"prevGray",null);fn(this,"trackedCorners",null);fn(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const r=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const l=r.matFromArray(4,1,r.CV_32FC2,N1(this.trackedCorners)),c=new r.Mat,h=new r.Mat,d=new r.Mat;r.calcOpticalFlowPyrLK(this.prevGray,t,l,c,h,d);const p=[];let m=0;for(let _=0;_<4;_++){const v=h.data[_]===1,y=c.data32F[_*2],E=c.data32F[_*2+1];v&&Number.isFinite(y)&&Number.isFinite(E)?(p.push({x:y,y:E}),m++):p.push(this.trackedCorners[_])}return l.delete(),c.delete(),h.delete(),d.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>Av?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames++,this.lostFrames>Av?(this.reset(),null):this.trackedCorners)}}function N1(o){return o.flatMap(t=>[t.x,t.y])}const O1=.65,z1=4;class P1{constructor(){fn(this,"state",{lastMatrix:Tv(),stableCount:0,pendingMove:null});fn(this,"initialized",!1)}reset(){this.state={lastMatrix:Tv(),stableCount:0,pendingMove:null},this.initialized=!1}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,null;const i=S1(B1(t),this.state.lastMatrix),r=I1(i);if(r)if(this.state.pendingMove===r){if(this.state.stableCount++,this.state.stableCount>=z1)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,r}else this.state.pendingMove=r,this.state.stableCount=1;else this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=F1(this.state.lastMatrix,t,.15);return null}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.initialized=!0}}function B1(o){return[o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]}function F1(o,t,i){return o.map((r,l)=>r*(1-i)+t[l]*i)}function I1(o){const t=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];let i=null,r=O1;for(const l of t){const c=l0(l);let h=r1[c];(c==="L"||c==="D"||c==="B")&&(h=[-h[0],-h[1],-h[2]]);const d=x1(h,o0(l)),p=H1(o,d);p>r&&(r=p,i=l)}return i}function H1(o,t){let i=0;for(let r=0;r<9;r++)i+=1-Math.abs(o[r]-t[r])/2;return i/9}class G1{constructor(){fn(this,"rotationDetector",new P1);fn(this,"flowTracker",new L1);fn(this,"trackingEnabled",!1);fn(this,"processCanvas");fn(this,"processCtx");fn(this,"lastColors",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.lastColors=null}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}process(t){const i=t.videoWidth,r=t.videoHeight;if(!i||!r)return{pose:null,detectedFace:null,rotationMove:null};this.processCanvas.width=i,this.processCanvas.height=r,this.processCtx.drawImage(t,0,0,i,r);try{return this.trackingEnabled?this.processWithTracking(i,r):this.processDetectionOnly(i,r)}catch{return{pose:null,detectedFace:null,rotationMove:null}}}processDetectionOnly(t,i){const r=bv(this.processCanvas,t,i);return r?(this.lastColors=r.colors,{pose:r.pose,detectedFace:r,rotationMove:null}):{pose:null,detectedFace:null,rotationMove:null}}processWithTracking(t,i){const r=u0(this.processCanvas,t,i),l=D1(this.processCanvas),c=this.flowTracker.update(l,r);if(l.delete(),!c)return{pose:null,detectedFace:null,rotationMove:null};let h=this.lastColors;if(r){const g=bv(this.processCanvas,t,i);g&&(h=g.colors,this.lastColors=h)}const d=c0(c,t,i);d.confidence=r?.85:Math.max(.35,.85-this.flowTracker.getLostFrames()*.01);const p=h?{colors:h,pose:d}:null,m=this.rotationDetector.update(d.rotationMatrix);return{pose:d,detectedFace:p,rotationMove:m}}readStableFace(t,i=5){const r=[];let l=null;for(let h=0;h<i;h++){const d=this.process(t);if(!d.detectedFace)return null;r.push(d.detectedFace.colors),l=d.detectedFace.pose}return l?{colors:V1(r),pose:l}:null}}function V1(o){const t=[];for(let i=0;i<9;i++){const r=new Map;for(const h of o){const d=h[i];r.set(d,(r.get(d)??0)+1)}let l="W",c=0;for(const[h,d]of r)d>c&&(c=d,l=h);t.push(l)}return t}const k1="https://docs.opencv.org/4.9.0/opencv.js";let xc=null;function X1(){return xc||(xc=new Promise((o,t)=>{var r;if((r=window.cv)!=null&&r.Mat){o();return}const i=document.createElement("script");i.src=k1,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?o():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>o())})()},i.onerror=()=>t(new Error("OpenCV.js 로드에 실패했습니다.")),document.head.appendChild(i)}),xc)}const W1=8,q1={phase:"loading",error:null,scannedFaces:[],currentCalibrationFace:Cc[0],calibrationProgress:0,solution:null,currentPose:null,solverReady:!1,calibrationHint:""};function Y1(o){const[t,i]=ve.useState(q1),r=ve.useRef(null),l=ve.useRef(null),c=ve.useRef(""),h=ve.useRef(0),d=ve.useRef(0),p=ve.useRef(0),m=ve.useRef("loading"),g=ve.useRef(null);ve.useEffect(()=>{m.current=t.phase,g.current=t.solution},[t.phase,t.solution]);const _=ve.useCallback(D=>{var H;const w=++p.current;(H=l.current)==null||H.postMessage({type:"apply",move:D,facelet:c.current,id:w}),i(P=>{if(!P.solution)return P;const N=P.solution.moves[P.solution.currentIndex];if(D!==N)return P;const k=P.solution.currentIndex+1;return k>=P.solution.moves.length?{...P,phase:"solved",solution:{...P.solution,currentIndex:k}}:{...P,solution:{...P.solution,currentIndex:k}}})},[]),v=ve.useCallback(async()=>{try{await X1(),r.current=new G1;const D=y1();l.current=D,D.onmessage=w=>{var P;const H=w.data;H.type==="ready"?i(N=>({...N,solverReady:!0})):H.type==="solution"?(i(N=>({...N,phase:"solving",solution:{moves:H.moves,currentIndex:0},calibrationHint:""})),(P=r.current)==null||P.enableTracking()):H.type==="facelet"?c.current=H.facelet:H.type==="error"&&i(N=>({...N,phase:"error",error:H.message}))},D.postMessage({type:"init"}),i(w=>({...w,phase:"camera"}))}catch(D){i(w=>({...w,phase:"error",error:D instanceof Error?D.message:"초기화 실패"}))}},[]);ve.useEffect(()=>(v(),()=>{var D,w;cancelAnimationFrame(d.current),(D=l.current)==null||D.terminate(),(w=r.current)==null||w.disableTracking()}),[v]);const y=ve.useCallback(()=>{var D;h.current=0,i(w=>({...w,phase:"calibrating",scannedFaces:[],currentCalibrationFace:Cc[0],calibrationProgress:0,calibrationHint:Ev[Cc[0]]})),(D=r.current)==null||D.disableTracking()},[]),E=ve.useCallback(()=>{const D=o.current,w=r.current;if(!D||!w||D.readyState<2)return;const H=w.process(D);i(N=>({...N,currentPose:H.pose}));const P=m.current;if(P==="calibrating"&&i(N=>{var C;if(!N.currentCalibrationFace)return N;const k=N.currentCalibrationFace,U=g1[k];if(H.detectedFace&&R1(H.detectedFace.colors,U)){if(h.current++,h.current<W1)return N;const G={faceId:k,colors:H.detectedFace.colors},it=[...N.scannedFaces,G],tt=Cc[it.length]??null;if(h.current=0,tt)return{...N,scannedFaces:it,currentCalibrationFace:tt,calibrationProgress:it.length/6,calibrationHint:Ev[tt]};try{const lt=_1(it);c.current=lt;const gt=++p.current;return(C=l.current)==null||C.postMessage({type:"solve",facelet:lt,id:gt}),H.pose&&w.syncPose(H.pose),{...N,scannedFaces:it,currentCalibrationFace:null,calibrationProgress:1,calibrationHint:"해법 계산 중..."}}catch(lt){return{...N,phase:"error",error:lt instanceof Error?lt.message:"큐브 상태 생성 실패"}}}return h.current=Math.max(0,h.current-1),N}),P==="solving"&&H.rotationMove){const N=g.current;if(N){const k=N.moves[N.currentIndex];H.rotationMove===k&&(_(H.rotationMove),H.pose&&w.syncPose(H.pose))}}},[o,_]),R=ve.useCallback(()=>{E(),d.current=requestAnimationFrame(R)},[E]),M=ve.useCallback(()=>{cancelAnimationFrame(d.current),d.current=requestAnimationFrame(R)},[R]),x=ve.useCallback(()=>{cancelAnimationFrame(d.current)},[]),F=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:F,startCalibration:y,startTracking:M,stopTracking:x}}function Z1(){const o=ve.useRef(null),[t,i]=ve.useState({stream:null,error:null,isReady:!1}),r=ve.useCallback(async()=>{try{const c=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1}),h=o.current;h&&(h.srcObject=c,await h.play()),i({stream:c,error:null,isReady:!0})}catch(c){i({stream:null,error:c instanceof Error?c.message:"카메라 접근 실패",isReady:!1})}},[]),l=ve.useCallback(()=>{i(c=>{var h;return(h=c.stream)==null||h.getTracks().forEach(d=>d.stop()),{stream:null,error:null,isReady:!1}}),o.current&&(o.current.srcObject=null)},[]);return ve.useEffect(()=>()=>l(),[l]),{videoRef:o,state:t,start:r,stop:l}}function j1(){var E,R;const{videoRef:o,state:t,start:i}=Z1(),{state:r,currentMove:l,startCalibration:c,startTracking:h,stopTracking:d}=Y1(o),[p,m]=ve.useState({width:0,height:0});ve.useEffect(()=>{i()},[i]),ve.useEffect(()=>{if(t.isReady&&r.phase!=="loading")return h(),d},[t.isReady,r.phase,h,d]);const g=ve.useCallback((M,x)=>{m({width:M,height:x})},[]);if(r.phase==="loading"||!t.isReady)return We.jsx(p1,{message:r.phase==="loading"?"AI 엔진 로딩 중...":"카메라 연결 중..."});if(r.error||t.error)return We.jsx("div",{className:"error-screen",children:We.jsx("p",{children:r.error??t.error})});const _=((E=r.solution)==null?void 0:E.moves.length)??0,v=(((R=r.solution)==null?void 0:R.currentIndex)??0)+1,y=r.phase==="solving"||r.phase==="calibrating";return We.jsx("main",{className:"app",children:We.jsxs("div",{className:"viewport",children:[We.jsx(d1,{videoRef:o,onDimensions:g}),We.jsx(f1,{pose:r.currentPose,move:l,width:p.width,height:p.height,active:y&&r.phase==="solving"}),We.jsx(m1,{phase:r.phase,currentStep:v,totalSteps:_}),We.jsx(h1,{phase:r.phase,hint:r.calibrationHint,progress:r.calibrationProgress}),r.phase==="camera"&&We.jsx("button",{type:"button",className:"primary-button",onClick:c,children:"큐브 스캔 시작"}),r.phase==="solved"&&We.jsx("div",{className:"solved-banner",children:We.jsx("p",{children:"완료!"})})]})})}Ux({immediate:!0});Rx.createRoot(document.getElementById("root")).render(We.jsx(ve.StrictMode,{children:We.jsx(j1,{})}));
